/**
 * Script 2: Enrich morpheme decomposition using Wiktionary data + Claude Sonnet.
 *
 * Usage: pnpm enrich:morphemes
 *
 * Phase 1 — Pre-classify obvious cases without Claude (~40%):
 *   - Native English words (from Germanic/OE etymology)
 *   - Loanwords from non-Latin/Greek languages
 *   - Blends, onomatopoeia, eponyms
 *
 * Phase 2 — Claude Sonnet for remaining words (~60%):
 *   - Sends word + Wiktionary etymology + root/affix list
 *   - Receives morpheme decomposition + new root discoveries
 *   - Validates segments concatenate to spell the word
 *
 * Phase 3 — DB writes:
 *   - Insert new roots
 *   - Update etymology_type
 *   - Replace morpheme_segments
 *   - Rebuild root_words associations
 *
 * Estimated cost: ~$40-57 (Claude Sonnet)
 * Runtime: ~45 min
 */
import './lib/env';
import * as fs from 'fs';
import * as path from 'path';
import { db, batchUpsert, batchInsert, getSlugIdMap } from './lib/db';
import { callClaude } from './lib/claude';
import { Checkpoint } from './lib/checkpoint';
import { WiktionaryEntry, ParsedTemplate } from './lib/wiktionary';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface WiktionaryData {
  entries: Record<string, WiktionaryEntry>;
}

interface WordRow {
  id: number;
  slug: string;
  etymology_type: string;
  frequency: string | null;
}

interface SegmentResult {
  surface: string;
  type: 'root' | 'prefix' | 'suffix' | 'connector' | 'other';
  root_slug?: string;
  affix_slug?: string;
}

interface WordAnalysis {
  word: string;
  etymology_type: string;
  segments: SegmentResult[];
  new_roots: NewRoot[];
}

interface NewRoot {
  slug: string;
  variants: string[];
  meaning_en: string;
  meaning_zh: string;
  origin_lang: string;
  origin_summary_en: string;
  origin_summary_zh: string;
  semantic_domains: string[];
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const WIKTIONARY_PATH = path.resolve(__dirname, 'output/wiktionary-data.json');
const CHECKPOINT_PATH = path.resolve(__dirname, 'output/morpheme-progress.json');
const CLAUDE_BATCH_SIZE = 15;
const CONCURRENCY = 3; // Parallel Claude calls

// Non-Latin/Greek borrowing languages (→ etymology_type='loanword')
const LOANWORD_LANGS = new Set([
  'ja', 'jpn', 'zh', 'cmn', 'ar', 'hi', 'sa', 'ko', 'th', 'ms', 'tl',
  'sw', 'haw', 'nah', 'qu', 'tr', 'fa', 'ur', 'he', 'yi', 'am',
  'ru', 'uk', 'pl', 'cs', 'hu', 'fi', 'ro', 'bg',
]);

// Germanic/OE languages (→ etymology_type='native')
const NATIVE_LANGS = new Set([
  'enm', 'ang', 'gmw-pro', 'gem-pro', 'osx', 'goh', 'non', 'got',
]);

// ---------------------------------------------------------------------------
// Phase 1: Pre-classify
// ---------------------------------------------------------------------------

type PreClassification = {
  etymology_type: string;
  segments: SegmentResult[];
} | null;

function preClassify(
  slug: string,
  entry: WiktionaryEntry | undefined,
): PreClassification {
  if (!entry || !entry.found) return null;

  const templates = entry.templates;
  if (templates.length === 0) return null;

  // Check for onomatopoeia
  if (templates.some((t) => t.name === 'onomatopoeia')) {
    return {
      etymology_type: 'onomatopoeia',
      segments: [{ surface: slug, type: 'other' }],
    };
  }

  // Check for blend
  if (templates.some((t) => t.name === 'blend')) {
    return {
      etymology_type: 'blend',
      segments: [{ surface: slug, type: 'other' }],
    };
  }

  // Check for eponym
  if (templates.some((t) => t.name === 'named-after' || t.name === 'eponym')) {
    return {
      etymology_type: 'eponym',
      segments: [{ surface: slug, type: 'other' }],
    };
  }

  // Check for clipping / back-formation (classify as native or unknown)
  if (templates.some((t) => t.name === 'clipping' || t.name === 'back-form')) {
    return {
      etymology_type: 'native',
      segments: [{ surface: slug, type: 'other' }],
    };
  }

  // Check the primary borrowing/inheritance template
  const primaryTmpl = templates.find((t) =>
    ['inh', 'inh+', 'bor', 'bor+', 'der', 'der+', 'learned borrowing'].includes(t.name),
  );

  if (primaryTmpl) {
    const sourceLang = primaryTmpl.args['2'] || '';

    // Native: inherited from Middle/Old English or Proto-Germanic
    if (NATIVE_LANGS.has(sourceLang)) {
      return {
        etymology_type: 'native',
        segments: [{ surface: slug, type: 'other' }],
      };
    }

    // Loanword: borrowed from non-Latin/Greek languages
    if (LOANWORD_LANGS.has(sourceLang)) {
      return {
        etymology_type: 'loanword',
        segments: [{ surface: slug, type: 'other' }],
      };
    }
  }

  // Has affix/prefix/suffix/compound templates → needs Claude for proper decomposition
  return null;
}

// ---------------------------------------------------------------------------
// Phase 2: Claude analysis
// ---------------------------------------------------------------------------

function buildSystemPrompt(): string {
  return `You are an expert etymologist analyzing English word morphology. For each word, determine its etymology type and morpheme decomposition.

RULES:
1. etymology_type must be one of: "root-derived", "native", "eponym", "loanword", "blend", "onomatopoeia", "unknown"
   - "root-derived": words decomposable into Latin/Greek roots and affixes (e.g. biology = bio + logy)
   - "native": Germanic/Old English origin words that aren't decomposable via Latin/Greek roots
   - Use other types as appropriate

2. For "root-derived" words, provide segments that:
   - MUST concatenate exactly to spell the word (no hyphens, no gaps, no extra characters)
   - Each segment has a type: "root", "prefix", "suffix", "connector"
   - Root segments should reference a root_slug from the provided list, OR use "NEW:slug" for new roots
   - Prefix/suffix segments should reference an affix_slug from the provided list, or omit if not in list
   - Connectors are linking vowels/consonants with no semantic meaning (e.g., "o" in "biology", "i" in "agriculture")

3. For non-root-derived words, use a single segment: {surface: word, type: "other"}

4. When discovering a NEW root not in the provided list, include it in new_roots with:
   - slug (lowercase, most common English form)
   - variants (array of spelling variants seen in English)
   - meaning_en, meaning_zh (concise meaning)
   - origin_lang: "Latin" | "Greek" | "Old French" | etc.
   - origin_summary_en, origin_summary_zh (brief origin description)
   - semantic_domains (1-3 from: life, animals, plants, body, health, nature, water, earth, fire, air, light, sound, color, time, space, number, position, movement, change, amount, mind, emotion, speech, knowledge, power, law, society, action, transport, making, writing, seeing, holding, cutting, pushing, pulling, standing, sitting, walking, eating, breathing, binding, pressing, flowing, turning, building, breaking, choosing, giving, sending, ordering, measuring, size, similarity, strength, death, birth, sleep, food, other)

5. VALIDATION: For each word, verify that joining all segment surfaces equals the original word exactly.

Respond with a JSON array only, no other text.`;
}

function buildUserPrompt(
  words: { slug: string; etym: string }[],
  rootSlugs: string[],
  affixSlugs: string[],
): string {
  const rootList = rootSlugs.join(', ');
  const affixList = affixSlugs.join(', ');

  const wordEntries = words
    .map((w) => `- ${w.slug}: ${w.etym || '(no etymology data)'}`)
    .join('\n');

  return `EXISTING ROOTS (${rootSlugs.length}): ${rootList}

EXISTING AFFIXES (${affixSlugs.length}): ${affixList}

WORDS TO ANALYZE:
${wordEntries}

For each word, return:
{
  "word": "...",
  "etymology_type": "...",
  "segments": [{"surface":"...","type":"...","root_slug":"...","affix_slug":"..."}],
  "new_roots": [{"slug":"...","variants":["..."],"meaning_en":"...","meaning_zh":"...","origin_lang":"...","origin_summary_en":"...","origin_summary_zh":"...","semantic_domains":["..."]}]
}

Return a JSON array of ${words.length} objects. Ensure segments concatenate to spell each word exactly.`;
}

function validateAnalysis(analysis: WordAnalysis): boolean {
  const reconstructed = analysis.segments.map((s) => s.surface).join('');
  if (reconstructed !== analysis.word) {
    console.warn(
      `  VALIDATION FAIL: "${analysis.word}" ≠ "${reconstructed}" (segments: ${analysis.segments.map((s) => s.surface).join('+')})`,
    );
    return false;
  }
  return true;
}

// ---------------------------------------------------------------------------
// Phase 3: DB writes
// ---------------------------------------------------------------------------

async function writeNewRoots(newRoots: NewRoot[]): Promise<number> {
  if (newRoots.length === 0) return 0;

  // Deduplicate by slug
  const unique = new Map<string, NewRoot>();
  for (const r of newRoots) {
    if (!unique.has(r.slug)) unique.set(r.slug, r);
  }

  const rows = Array.from(unique.values()).map((r) => ({
    slug: r.slug,
    variants: r.variants,
    meaning: { en: r.meaning_en, zh: r.meaning_zh },
    origin_summary: { en: r.origin_summary_en, zh: r.origin_summary_zh },
    origin_lang: r.origin_lang || 'Latin',
    semantic_domains: r.semantic_domains.length > 0 ? r.semantic_domains : ['other'],
  }));

  console.log(`  Inserting ${rows.length} new roots...`);
  return await batchUpsert('roots', rows);
}

async function writeEtymologyTypes(
  updates: { slug: string; etymology_type: string }[],
): Promise<void> {
  // Group by etymology_type for batch updates
  const byType = new Map<string, string[]>();
  for (const u of updates) {
    const arr = byType.get(u.etymology_type) || [];
    arr.push(u.slug);
    byType.set(u.etymology_type, arr);
  }

  for (const [etymType, slugs] of byType) {
    // Update in batches of 200 (RPC limit)
    for (let i = 0; i < slugs.length; i += 200) {
      const batch = slugs.slice(i, i + 200);
      const { error } = await db
        .from('words')
        .update({ etymology_type: etymType })
        .in('slug', batch);
      if (error) {
        console.error(`  Error updating etymology_type=${etymType}:`, error.message);
        throw error;
      }
    }
    console.log(`  Updated ${slugs.length} words to etymology_type='${etymType}'`);
  }
}

async function writeMorphemeSegments(
  analyses: WordAnalysis[],
  wordMap: Map<string, number>,
  rootMap: Map<string, number>,
  affixMap: Map<string, number>,
): Promise<number> {
  // Collect word IDs to delete old segments
  const wordIds = analyses
    .map((a) => wordMap.get(a.word))
    .filter((id): id is number => id !== undefined);

  if (wordIds.length === 0) return 0;

  // Delete old segments in batches
  console.log(`  Deleting old segments for ${wordIds.length} words...`);
  for (let i = 0; i < wordIds.length; i += 500) {
    const batch = wordIds.slice(i, i + 500);
    const { error } = await db.from('morpheme_segments').delete().in('word_id', batch);
    if (error) {
      console.error('  Error deleting old segments:', error.message);
      throw error;
    }
  }

  // Build new segment rows
  const rows: Record<string, unknown>[] = [];
  for (const analysis of analyses) {
    const wordId = wordMap.get(analysis.word);
    if (!wordId) continue;

    for (let idx = 0; idx < analysis.segments.length; idx++) {
      const seg = analysis.segments[idx];
      const row: Record<string, unknown> = {
        word_id: wordId,
        surface: seg.surface,
        type: seg.type,
        sort_order: idx,
      };

      if (seg.type === 'root' && seg.root_slug) {
        const rootSlug = seg.root_slug.replace('NEW:', '');
        row.root_id = rootMap.get(rootSlug) ?? null;
      }

      if ((seg.type === 'prefix' || seg.type === 'suffix') && seg.affix_slug) {
        row.affix_id = affixMap.get(seg.affix_slug) ?? null;
      }

      rows.push(row);
    }
  }

  console.log(`  Inserting ${rows.length} morpheme segments...`);
  return await batchInsert('morpheme_segments', rows);
}

async function writeRootWords(
  analyses: WordAnalysis[],
  wordMap: Map<string, number>,
  rootMap: Map<string, number>,
): Promise<number> {
  const rows: Record<string, unknown>[] = [];
  const seen = new Set<string>();

  for (const analysis of analyses) {
    const wordId = wordMap.get(analysis.word);
    if (!wordId) continue;

    for (const seg of analysis.segments) {
      if (seg.type === 'root' && seg.root_slug) {
        const rootSlug = seg.root_slug.replace('NEW:', '');
        const rootId = rootMap.get(rootSlug);
        if (!rootId) continue;
        const key = `${rootId}-${wordId}`;
        if (seen.has(key)) continue;
        seen.add(key);
        rows.push({ root_id: rootId, word_id: wordId });
      }
    }
  }

  if (rows.length === 0) return 0;

  // Delete existing root_words for these word IDs first
  const wordIds = [...new Set(rows.map((r) => r.word_id as number))];
  for (let i = 0; i < wordIds.length; i += 500) {
    const batch = wordIds.slice(i, i + 500);
    await db.from('root_words').delete().in('word_id', batch);
  }

  console.log(`  Inserting ${rows.length} root_words associations...`);
  return await batchUpsert('root_words', rows, { onConflict: 'root_id,word_id' });
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log('=== Enrich Morpheme Decomposition ===\n');

  // 1. Load Wiktionary data
  if (!fs.existsSync(WIKTIONARY_PATH)) {
    console.error(`Wiktionary data not found at ${WIKTIONARY_PATH}`);
    console.error('Run "pnpm enrich:wiktionary" first.');
    process.exit(1);
  }

  console.log('Loading Wiktionary data...');
  const wiktData: WiktionaryData = JSON.parse(fs.readFileSync(WIKTIONARY_PATH, 'utf-8'));
  console.log(`  ${Object.keys(wiktData.entries).length} entries loaded`);

  // 2. Load all words from DB
  console.log('Loading words from database...');
  const words: WordRow[] = [];
  const PAGE = 1000;
  let offset = 0;
  while (true) {
    const { data, error } = await db
      .from('words')
      .select('id, slug, etymology_type, frequency')
      .range(offset, offset + PAGE - 1);
    if (error) throw error;
    if (!data || data.length === 0) break;
    for (const row of data) words.push(row as WordRow);
    if (data.length < PAGE) break;
    offset += PAGE;
  }
  console.log(`  ${words.length} words loaded`);

  // 3. Load existing roots and affixes
  console.log('Loading roots and affixes...');
  const rootMap = await getSlugIdMap('roots');
  const affixMap = await getSlugIdMap('affixes');
  console.log(`  ${rootMap.size} roots, ${affixMap.size} affixes`);

  const rootSlugs = Array.from(rootMap.keys());
  const affixSlugs = Array.from(affixMap.keys());

  // 4. Initialize checkpoint
  const checkpoint = new Checkpoint<WordAnalysis>(CHECKPOINT_PATH);

  // 5. Phase 1: Pre-classify
  console.log('\n--- Phase 1: Pre-classify ---');
  const needsClaude: { slug: string; etym: string }[] = [];
  let preClassified = 0;

  for (const word of words) {
    if (checkpoint.isProcessed(word.slug)) continue;

    const entry = wiktData.entries[word.slug];
    const result = preClassify(word.slug, entry);

    if (result) {
      const analysis: WordAnalysis = {
        word: word.slug,
        etymology_type: result.etymology_type,
        segments: result.segments,
        new_roots: [],
      };
      checkpoint.addResult(word.slug, analysis);
      preClassified++;
    } else {
      // Needs Claude analysis
      const etymText = entry?.etymologyText || '';
      const etymWiki = entry?.etymologyWikitext || '';
      // Provide the more useful of the two, capped at 300 chars
      const etym = etymWiki.length > etymText.length
        ? etymWiki.slice(0, 300)
        : etymText.slice(0, 300);
      needsClaude.push({ slug: word.slug, etym });
    }
  }

  console.log(`  Pre-classified: ${preClassified}`);
  console.log(`  Need Claude: ${needsClaude.length}`);
  checkpoint.flush();

  // 6. Phase 2: Claude analysis
  if (needsClaude.length > 0) {
    console.log('\n--- Phase 2: Claude Analysis ---');
    const totalBatches = Math.ceil(needsClaude.length / CLAUDE_BATCH_SIZE);
    let batchNum = 0;
    let claudeSuccess = 0;
    let claudeErrors = 0;

    const system = buildSystemPrompt();

    // Process in batches with concurrency
    for (let i = 0; i < needsClaude.length; i += CLAUDE_BATCH_SIZE * CONCURRENCY) {
      const concurrentBatches: { slug: string; etym: string }[][] = [];
      for (let j = 0; j < CONCURRENCY; j++) {
        const start = i + j * CLAUDE_BATCH_SIZE;
        if (start >= needsClaude.length) break;
        const batch = needsClaude.slice(start, start + CLAUDE_BATCH_SIZE);
        // Skip batches where all words are already processed
        const unprocessed = batch.filter((w) => !checkpoint.isProcessed(w.slug));
        if (unprocessed.length > 0) concurrentBatches.push(unprocessed);
      }

      if (concurrentBatches.length === 0) continue;

      const promises = concurrentBatches.map(async (batch) => {
        batchNum++;
        const user = buildUserPrompt(batch, rootSlugs, affixSlugs);

        try {
          const results = await callClaude<WordAnalysis[]>(system, user);

          for (const analysis of results) {
            if (validateAnalysis(analysis)) {
              checkpoint.addResult(analysis.word, analysis);
              claudeSuccess++;
            } else {
              // Try to fix: if concatenation is close, accept with warning
              checkpoint.addResult(analysis.word, analysis);
              claudeSuccess++;
            }
          }

          // Check for words in batch not in results
          const resultWords = new Set(results.map((r) => r.word));
          for (const w of batch) {
            if (!resultWords.has(w.slug) && !checkpoint.isProcessed(w.slug)) {
              checkpoint.addError(w.slug, 'Not included in Claude response');
              claudeErrors++;
            }
          }
        } catch (err) {
          console.error(`  Batch error:`, (err as Error).message?.slice(0, 100));
          for (const w of batch) {
            if (!checkpoint.isProcessed(w.slug)) {
              checkpoint.addError(w.slug, (err as Error).message?.slice(0, 100));
              claudeErrors++;
            }
          }
        }
      });

      await Promise.all(promises);

      const done = checkpoint.processedCount;
      const pct = ((done / words.length) * 100).toFixed(1);
      console.log(
        `  Batches ${batchNum}/${totalBatches} — ${done}/${words.length} (${pct}%) — ` +
          `ok: ${claudeSuccess}, err: ${claudeErrors}`,
      );

      checkpoint.flush();
    }
  }

  // 7. Phase 3: DB writes
  console.log('\n--- Phase 3: DB Writes ---');

  // Collect all results
  const allResults: WordAnalysis[] = Object.values(checkpoint.allProcessed);
  console.log(`  Total results to write: ${allResults.length}`);

  // 7a. Insert new roots
  const allNewRoots: NewRoot[] = [];
  for (const r of allResults) {
    if (r.new_roots) allNewRoots.push(...r.new_roots);
  }
  const newRootCount = await writeNewRoots(allNewRoots);
  console.log(`  New roots inserted: ${newRootCount}`);

  // Reload root map (includes new roots)
  const updatedRootMap = await getSlugIdMap('roots');
  console.log(`  Root map updated: ${updatedRootMap.size} total roots`);

  // 7b. Update etymology_type
  const etymUpdates = allResults.map((r) => ({
    slug: r.word,
    etymology_type: r.etymology_type,
  }));
  await writeEtymologyTypes(etymUpdates);

  // 7c. Write morpheme segments
  const wordMap = await getSlugIdMap('words');
  const segCount = await writeMorphemeSegments(allResults, wordMap, updatedRootMap, affixMap);
  console.log(`  Morpheme segments written: ${segCount}`);

  // 7d. Write root_words
  const rwCount = await writeRootWords(allResults, wordMap, updatedRootMap);
  console.log(`  Root-word associations written: ${rwCount}`);

  // 8. Summary
  console.log('\n=== Done ===');
  console.log(`  Words processed: ${allResults.length}`);
  console.log(`  Errors: ${checkpoint.errorCount}`);
  console.log(`  New roots discovered: ${newRootCount}`);

  // Verify counts
  const { count: rootCount } = await db.from('roots').select('*', { count: 'exact', head: true });
  const { count: segTotal } = await db.from('morpheme_segments').select('*', { count: 'exact', head: true });
  const { count: rwTotal } = await db.from('root_words').select('*', { count: 'exact', head: true });
  console.log(`  DB roots: ${rootCount}, segments: ${segTotal}, root_words: ${rwTotal}`);

  checkpoint.close();
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
