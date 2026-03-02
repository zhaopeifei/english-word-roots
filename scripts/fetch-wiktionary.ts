/**
 * Script 1: Fetch etymology data from Wiktionary for all words in the database.
 *
 * Usage: pnpm enrich:wiktionary
 *
 * - Queries Wiktionary MediaWiki API in batches of 50 words
 * - Extracts etymology sections and parses templates
 * - Saves results to scripts/output/wiktionary-data.json
 * - Supports resume: skips already-fetched words on re-run
 * - Rate limited: 2s delay between requests
 * - FREE (no API costs), ~15 min runtime
 */
import './lib/env';
import * as fs from 'fs';
import * as path from 'path';
import { db } from './lib/db';
import {
  fetchWiktionaryBatch,
  extractEtymologySection,
  parseTemplates,
  toPlainText,
  WiktionaryEntry,
} from './lib/wiktionary';

const OUTPUT_PATH = path.resolve(__dirname, 'output/wiktionary-data.json');
const BATCH_SIZE = 50;
const DELAY_MS = 2000;
const CHECKPOINT_EVERY = 10; // Save every N batches

interface OutputData {
  meta: { fetchedAt: string; totalWords: number; found: number; notFound: number };
  entries: Record<string, WiktionaryEntry>;
}

async function loadAllWordSlugs(): Promise<string[]> {
  const slugs: string[] = [];
  const PAGE = 1000;
  let offset = 0;

  while (true) {
    const { data, error } = await db
      .from('words')
      .select('slug')
      .range(offset, offset + PAGE - 1);
    if (error) throw error;
    if (!data || data.length === 0) break;
    for (const row of data) slugs.push(row.slug as string);
    if (data.length < PAGE) break;
    offset += PAGE;
  }

  return slugs;
}

function loadExistingData(): OutputData {
  if (fs.existsSync(OUTPUT_PATH)) {
    const data = JSON.parse(fs.readFileSync(OUTPUT_PATH, 'utf-8')) as OutputData;
    console.log(`  Loaded existing data: ${Object.keys(data.entries).length} entries`);
    return data;
  }
  return {
    meta: { fetchedAt: '', totalWords: 0, found: 0, notFound: 0 },
    entries: {},
  };
}

function saveData(data: OutputData): void {
  // Ensure output directory exists
  const dir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  data.meta.fetchedAt = new Date().toISOString();
  data.meta.found = Object.values(data.entries).filter((e) => e.found).length;
  data.meta.notFound = Object.values(data.entries).filter((e) => !e.found).length;
  data.meta.totalWords = Object.keys(data.entries).length;

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(data, null, 2));
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log('=== Fetch Wiktionary Etymology Data ===\n');

  // 1. Load all word slugs from DB
  console.log('Loading word slugs from database...');
  const allSlugs = await loadAllWordSlugs();
  console.log(`  Total words in DB: ${allSlugs.length}`);

  // 2. Load existing data (for resume)
  const data = loadExistingData();

  // 3. Filter to only unfetched words
  const toFetch = allSlugs.filter((s) => !(s in data.entries));
  console.log(`  Words to fetch: ${toFetch.length} (${allSlugs.length - toFetch.length} already done)\n`);

  if (toFetch.length === 0) {
    console.log('All words already fetched. Done!');
    return;
  }

  // 4. Batch fetch from Wiktionary
  const totalBatches = Math.ceil(toFetch.length / BATCH_SIZE);
  let batchNum = 0;

  for (let i = 0; i < toFetch.length; i += BATCH_SIZE) {
    const batch = toFetch.slice(i, i + BATCH_SIZE);
    batchNum++;

    try {
      // Wiktionary API expects properly cased titles, but handles lowercase
      const wikiResults = await fetchWiktionaryBatch(batch);

      for (const slug of batch) {
        const wikitext = wikiResults.get(slug);

        if (!wikitext) {
          data.entries[slug] = {
            word: slug,
            found: false,
            etymologyWikitext: '',
            templates: [],
            etymologyText: '',
          };
          continue;
        }

        const etymSection = extractEtymologySection(wikitext);
        const templates = etymSection ? parseTemplates(etymSection) : [];
        const etymText = etymSection ? toPlainText(etymSection) : '';

        data.entries[slug] = {
          word: slug,
          found: true,
          etymologyWikitext: etymSection,
          templates,
          etymologyText: etymText,
        };
      }

      // Progress
      const done = Object.keys(data.entries).length;
      const pct = ((done / allSlugs.length) * 100).toFixed(1);
      console.log(
        `  Batch ${batchNum}/${totalBatches} — ` +
          `${done}/${allSlugs.length} words (${pct}%) — ` +
          `batch: ${batch[0]} .. ${batch[batch.length - 1]}`,
      );

      // Checkpoint save
      if (batchNum % CHECKPOINT_EVERY === 0) {
        saveData(data);
        console.log('    [checkpoint saved]');
      }
    } catch (err) {
      console.error(`  Error on batch ${batchNum}:`, (err as Error).message);
      // Save progress and continue
      saveData(data);
      console.log('    [checkpoint saved after error]');
    }

    // Rate limit
    if (i + BATCH_SIZE < toFetch.length) {
      await sleep(DELAY_MS);
    }
  }

  // 5. Final save
  saveData(data);

  console.log('\n=== Done ===');
  console.log(`  Total: ${data.meta.totalWords}`);
  console.log(`  Found: ${data.meta.found}`);
  console.log(`  Not found: ${data.meta.notFound}`);
  console.log(`  Output: ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
