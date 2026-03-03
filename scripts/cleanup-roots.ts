/**
 * Cleanup low-quality roots that were auto-discovered by enrichment.
 *
 * The enrichment pipeline inflated roots from ~124 to ~2,397. Most new roots
 * associate with ≤2 words and represent over-decomposition (e.g. "driv",
 * "free", "insect"). This script:
 *
 *   1. Finds roots with fewer than N associated words (default 3)
 *   2. For segments referencing those roots whose surface IS an existing word,
 *      degrades type from 'root' → 'stem' (preserving decomposition structure)
 *   3. Deletes the low-quality roots (CASCADE handles root_words, root_relations;
 *      morpheme_segments.root_id is SET NULL)
 *
 * Usage:
 *   npx tsx scripts/cleanup-roots.ts              # execute
 *   npx tsx scripts/cleanup-roots.ts --dry-run     # preview only
 *   npx tsx scripts/cleanup-roots.ts --min-words 5 # custom threshold
 */
import './lib/env';
import { db } from './lib/db';

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const MIN_WORDS = (() => {
  const idx = args.indexOf('--min-words');
  if (idx !== -1 && args[idx + 1]) return parseInt(args[idx + 1], 10);
  return 3;
})();

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const PAGE = 1000;

/** Paginated fetch — Supabase caps at 1000 rows per request. */
async function fetchAll<T>(table: string, select: string): Promise<T[]> {
  const results: T[] = [];
  let offset = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { data, error } = await db
      .from(table)
      .select(select)
      .range(offset, offset + PAGE - 1);
    if (error) throw error;
    if (!data || data.length === 0) break;
    results.push(...(data as T[]));
    if (data.length < PAGE) break;
    offset += PAGE;
  }
  return results;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log(`\n=== Cleanup Low-Quality Roots ===`);
  console.log(`  min-words: ${MIN_WORDS}`);
  console.log(`  dry-run:   ${DRY_RUN}\n`);

  // -----------------------------------------------------------------------
  // 1. Count words per root
  // -----------------------------------------------------------------------
  console.log('Step 1: Counting words per root...');

  const rootWords = await fetchAll<{ root_id: number; word_id: number }>(
    'root_words',
    'root_id, word_id',
  );

  const wordCountByRoot = new Map<number, number>();
  for (const rw of rootWords) {
    wordCountByRoot.set(rw.root_id, (wordCountByRoot.get(rw.root_id) ?? 0) + 1);
  }

  // Also fetch all root IDs (some roots may have 0 words)
  const allRoots = await fetchAll<{ id: number; slug: string }>(
    'roots',
    'id, slug',
  );

  for (const r of allRoots) {
    if (!wordCountByRoot.has(r.id)) wordCountByRoot.set(r.id, 0);
  }

  const totalRoots = allRoots.length;
  console.log(`  Total roots: ${totalRoots}`);

  // -----------------------------------------------------------------------
  // 2. Identify low-quality roots (< MIN_WORDS associated words)
  // -----------------------------------------------------------------------
  const lowQualityIds = new Set<number>();
  for (const [rootId, count] of wordCountByRoot) {
    if (count < MIN_WORDS) lowQualityIds.add(rootId);
  }

  console.log(`  Low-quality roots (<${MIN_WORDS} words): ${lowQualityIds.size}`);
  console.log(`  Roots to keep (>=${MIN_WORDS} words): ${totalRoots - lowQualityIds.size}`);

  if (lowQualityIds.size === 0) {
    console.log('\nNothing to clean up. Done.');
    return;
  }

  // -----------------------------------------------------------------------
  // 3. Find segments referencing these roots, degrade matching ones to stem
  // -----------------------------------------------------------------------
  console.log('\nStep 2: Finding affected segments...');

  // Fetch all segments that reference any of the low-quality roots
  // We need to paginate and filter in batches since IN() has limits
  const lowQualityIdArr = Array.from(lowQualityIds);
  const affectedSegments: { id: number; surface: string; type: string; root_id: number }[] = [];

  for (let i = 0; i < lowQualityIdArr.length; i += PAGE) {
    const batch = lowQualityIdArr.slice(i, i + PAGE);
    const { data, error } = await db
      .from('morpheme_segments')
      .select('id, surface, type, root_id')
      .in('root_id', batch);
    if (error) throw error;
    if (data) affectedSegments.push(...(data as typeof affectedSegments));
  }

  console.log(`  Affected segments (referencing low-quality roots): ${affectedSegments.length}`);

  // Build a set of known words for surface matching
  console.log('  Loading words table for surface matching...');
  const allWords = await fetchAll<{ slug: string }>(
    'words',
    'slug',
  );
  const wordSlugs = new Set(allWords.map((w) => w.slug));
  console.log(`  Known words: ${wordSlugs.size}`);

  // Classify segments: surface matches a word → stem, otherwise keep root (root_id will be SET NULL)
  const toStem: number[] = [];       // segment IDs to change type → 'stem'
  const keepRoot: number[] = [];     // segment IDs that stay type 'root' (root_id nulled by CASCADE)

  for (const seg of affectedSegments) {
    if (wordSlugs.has(seg.surface.toLowerCase())) {
      toStem.push(seg.id);
    } else {
      keepRoot.push(seg.id);
    }
  }

  console.log(`  Segments to degrade to 'stem': ${toStem.length}`);
  console.log(`  Segments keeping 'root' type (root_id → NULL): ${keepRoot.length}`);

  if (DRY_RUN) {
    // Show some examples
    const stemExamples = affectedSegments
      .filter((s) => wordSlugs.has(s.surface.toLowerCase()))
      .slice(0, 10)
      .map((s) => s.surface);
    const rootExamples = affectedSegments
      .filter((s) => !wordSlugs.has(s.surface.toLowerCase()))
      .slice(0, 10)
      .map((s) => s.surface);

    console.log(`\n  Stem examples: ${stemExamples.join(', ')}`);
    console.log(`  Root-keep examples: ${rootExamples.join(', ')}`);
  }

  // -----------------------------------------------------------------------
  // 4. Execute changes
  // -----------------------------------------------------------------------
  if (!DRY_RUN) {
    // 4a. Degrade segments to stem (batch 500)
    console.log('\nStep 3: Degrading segments to stem...');
    const BATCH = 500;
    let degraded = 0;

    for (let i = 0; i < toStem.length; i += BATCH) {
      const batch = toStem.slice(i, i + BATCH);
      const { error } = await db
        .from('morpheme_segments')
        .update({ type: 'stem', root_id: null })
        .in('id', batch);
      if (error) throw error;
      degraded += batch.length;
      if (degraded % 1000 === 0 || i + BATCH >= toStem.length) {
        console.log(`  Degraded ${degraded}/${toStem.length} segments`);
      }
    }

    // 4b. Delete low-quality roots (batch 500)
    // CASCADE handles: root_words (DELETE), morpheme_segments.root_id (SET NULL),
    // root_relations (DELETE)
    console.log('\nStep 4: Deleting low-quality roots...');
    let deleted = 0;

    for (let i = 0; i < lowQualityIdArr.length; i += BATCH) {
      const batch = lowQualityIdArr.slice(i, i + BATCH);
      const { error } = await db
        .from('roots')
        .delete()
        .in('id', batch);
      if (error) throw error;
      deleted += batch.length;
      if (deleted % 1000 === 0 || i + BATCH >= lowQualityIdArr.length) {
        console.log(`  Deleted ${deleted}/${lowQualityIdArr.length} roots`);
      }
    }
  }

  // -----------------------------------------------------------------------
  // 5. Summary
  // -----------------------------------------------------------------------
  console.log('\n=== Summary ===');
  console.log(`  Total roots before:       ${totalRoots}`);
  console.log(`  Roots removed:            ${lowQualityIds.size}`);
  console.log(`  Roots remaining:          ${totalRoots - lowQualityIds.size}`);
  console.log(`  Segments → stem:          ${toStem.length}`);
  console.log(`  Segments root_id → NULL:  ${keepRoot.length}`);
  if (DRY_RUN) console.log('\n  *** DRY RUN — no changes written ***');
  console.log('');
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
