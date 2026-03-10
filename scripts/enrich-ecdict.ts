/**
 * Enrich words table with data from ECDICT CSV.
 *
 * Updates: collins_star, oxford_flag, frequency_rank
 *
 * Usage:
 *   npx tsx scripts/enrich-ecdict.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { db } from './lib/db';

// ---------------------------------------------------------------------------
// 1. Parse ECDICT CSV
// ---------------------------------------------------------------------------

interface EcdictEntry {
  collins: number | null;
  oxford: boolean;
  frq: number | null;
}

function loadEcdict(): Map<string, EcdictEntry> {
  const csvPath = path.resolve(__dirname, '../docs/sources/ecdict/ecdict.csv');
  const raw = fs.readFileSync(csvPath, 'utf-8');
  const lines = raw.split('\n');
  const header = lines[0].split(',');

  const colIdx = {
    word: header.indexOf('word'),
    collins: header.indexOf('collins'),
    oxford: header.indexOf('oxford'),
    frq: header.indexOf('frq'),
  };

  const map = new Map<string, EcdictEntry>();

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;

    // Simple CSV parse (ECDICT fields don't contain commas in these columns)
    const cols = line.split(',');
    const word = cols[colIdx.word]?.trim().toLowerCase();
    if (!word) continue;

    const collins = parseInt(cols[colIdx.collins], 10);
    const frq = parseInt(cols[colIdx.frq], 10);

    map.set(word, {
      collins: collins >= 1 && collins <= 5 ? collins : null,
      oxford: cols[colIdx.oxford]?.trim() === '1',
      frq: frq > 0 ? frq : null,
    });
  }

  return map;
}

// ---------------------------------------------------------------------------
// 2. Fetch all word slugs (lemmas) from database
// ---------------------------------------------------------------------------

async function fetchAllWords(): Promise<{ slug: string; lemma: string }[]> {
  const PAGE = 1000;
  const all: { slug: string; lemma: string }[] = [];
  let offset = 0;

  while (true) {
    const { data, error } = await db
      .from('words')
      .select('slug, lemma')
      .range(offset, offset + PAGE - 1);
    if (error) throw error;
    if (!data || data.length === 0) break;
    all.push(...(data as { slug: string; lemma: string }[]));
    if (data.length < PAGE) break;
    offset += PAGE;
  }

  return all;
}

// ---------------------------------------------------------------------------
// 3. Match & update
// ---------------------------------------------------------------------------

async function main() {
  console.log('Loading ECDICT CSV...');
  const ecdict = loadEcdict();
  console.log(`  Loaded ${ecdict.size.toLocaleString()} entries from ECDICT`);

  console.log('Fetching words from database...');
  const words = await fetchAllWords();
  console.log(`  Found ${words.length.toLocaleString()} words in database`);

  // Match words against ECDICT
  let matched = 0;
  let collinsCount = 0;
  let oxfordCount = 0;
  let frqCount = 0;

  const updates: { slug: string; collins_star: number | null; oxford_flag: boolean; frequency_rank: number | null }[] = [];

  for (const word of words) {
    const key = word.lemma.toLowerCase();
    const entry = ecdict.get(key);
    if (!entry) continue;

    matched++;
    if (entry.collins) collinsCount++;
    if (entry.oxford) oxfordCount++;
    if (entry.frq) frqCount++;

    updates.push({
      slug: word.slug,
      collins_star: entry.collins,
      oxford_flag: entry.oxford,
      frequency_rank: entry.frq,
    });
  }

  console.log(`\nMatch results:`);
  console.log(`  Matched:        ${matched} / ${words.length} (${(matched / words.length * 100).toFixed(1)}%)`);
  console.log(`  Collins stars:   ${collinsCount} words`);
  console.log(`  Oxford 3000:     ${oxfordCount} words`);
  console.log(`  COCA frequency:  ${frqCount} words`);

  if (updates.length === 0) {
    console.log('\nNo updates to apply.');
    return;
  }

  // Group updates by (collins_star, oxford_flag) to batch with .in('slug', [...])
  // frequency_rank is unique per word, so we handle it separately
  const SLUG_BATCH = 200;
  let done = 0;

  // First: batch update collins_star grouped by value
  const byCollins = new Map<number | null, string[]>();
  for (const u of updates) {
    const key = u.collins_star;
    if (!byCollins.has(key)) byCollins.set(key, []);
    byCollins.get(key)!.push(u.slug);
  }

  console.log(`\nUpdating collins_star...`);
  for (const [star, slugs] of byCollins) {
    for (let i = 0; i < slugs.length; i += SLUG_BATCH) {
      const batch = slugs.slice(i, i + SLUG_BATCH);
      const { error } = await db
        .from('words')
        .update({ collins_star: star })
        .in('slug', batch);
      if (error) console.error(`  Error (collins=${star}):`, error.message);
    }
    console.log(`  collins_star=${star ?? 'null'}: ${slugs.length} words`);
  }

  // Second: batch update oxford_flag
  const oxfordSlugs = updates.filter((u) => u.oxford_flag).map((u) => u.slug);
  if (oxfordSlugs.length > 0) {
    console.log(`\nUpdating oxford_flag (${oxfordSlugs.length} words)...`);
    for (let i = 0; i < oxfordSlugs.length; i += SLUG_BATCH) {
      const batch = oxfordSlugs.slice(i, i + SLUG_BATCH);
      const { error } = await db
        .from('words')
        .update({ oxford_flag: true })
        .in('slug', batch);
      if (error) console.error(`  Error (oxford):`, error.message);
    }
  }

  // Third: batch update frequency_rank (unique per word, need per-row updates)
  // Group into batches and use Promise.all for concurrency
  const frqUpdates = updates.filter((u) => u.frequency_rank != null);
  console.log(`\nUpdating frequency_rank (${frqUpdates.length} words)...`);
  for (let i = 0; i < frqUpdates.length; i += SLUG_BATCH) {
    const batch = frqUpdates.slice(i, i + SLUG_BATCH);
    await Promise.all(
      batch.map((item) =>
        db
          .from('words')
          .update({ frequency_rank: item.frequency_rank })
          .eq('slug', item.slug)
          .then(({ error }) => {
            if (error) console.error(`  Error (frq ${item.slug}):`, error.message);
          }),
      ),
    );
    done += batch.length;
    if (done % 1000 === 0 || done === frqUpdates.length) {
      console.log(`  Updated ${done} / ${frqUpdates.length}`);
    }
  }

  console.log('\nDone!');
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
