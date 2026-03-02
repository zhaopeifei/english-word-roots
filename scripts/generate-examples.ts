/**
 * Script 3: Generate bilingual example sentences for all words.
 *
 * Usage: pnpm enrich:examples
 *
 * - Determines example count by frequency: common=3, academic=2, others=1
 * - Batches 20 words per Claude call (~893 calls)
 * - Generates natural English examples with Chinese translations
 * - Supports checkpoint/resume
 *
 * Estimated cost: ~$30-50 (Claude Sonnet)
 * Runtime: ~45 min
 */
import './lib/env';
import { db, batchInsert, getSlugIdMap } from './lib/db';
import { callClaude } from './lib/claude';
import { Checkpoint } from './lib/checkpoint';
import * as path from 'path';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface WordInfo {
  slug: string;
  pos: string[];
  frequency: string | null;
  definition: { en?: string; zh?: string };
  exampleCount: number;
}

interface ExampleResult {
  word: string;
  examples: { en: string; zh: string }[];
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const CHECKPOINT_PATH = path.resolve(__dirname, 'output/examples-progress.json');
const BATCH_SIZE = 20;
const CONCURRENCY = 3;

function getExampleCount(frequency: string | null): number {
  if (frequency === 'common') return 3;
  if (frequency === 'academic') return 2;
  return 1; // advanced, rare, null
}

// ---------------------------------------------------------------------------
// Claude prompt
// ---------------------------------------------------------------------------

function buildSystemPrompt(): string {
  return `You are an expert English teacher creating bilingual example sentences for vocabulary learning.

RULES:
1. Each example must naturally demonstrate the word's meaning in context
2. Use the word in its given part(s) of speech
3. Vary sentence complexity: mix simple, compound, and complex sentences
4. For common words (3 examples): include everyday usage, academic context, and figurative/idiomatic use
5. For academic words (2 examples): include formal/academic and general contexts
6. For other words (1 example): give the most natural, illustrative example
7. Chinese translations must be natural Chinese, not literal word-by-word translations
8. Target B1-B2 level English for common/academic words, allow higher for advanced/rare
9. Each sentence should be 8-20 words
10. Never start with "The" for more than one example per word

Respond with a JSON array only, no other text.`;
}

function buildUserPrompt(words: WordInfo[]): string {
  const entries = words
    .map((w) => {
      const pos = w.pos.join(', ');
      const defEn = w.definition?.en || '';
      const defZh = w.definition?.zh || '';
      return `- ${w.slug} (${pos}) [${w.exampleCount} examples]: ${defEn} / ${defZh}`;
    })
    .join('\n');

  return `Generate bilingual example sentences for these words.

WORDS:
${entries}

For each word, return:
{
  "word": "...",
  "examples": [{"en": "...", "zh": "..."}]
}

Return a JSON array of ${words.length} objects. Each word must have exactly the number of examples specified in brackets.`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log('=== Generate Bilingual Examples ===\n');

  // 1. Load all words with needed fields
  console.log('Loading words from database...');
  const allWords: WordInfo[] = [];
  const PAGE = 1000;
  let offset = 0;

  while (true) {
    const { data, error } = await db
      .from('words')
      .select('slug, pos, frequency, definition')
      .range(offset, offset + PAGE - 1);
    if (error) throw error;
    if (!data || data.length === 0) break;
    for (const row of data) {
      allWords.push({
        slug: row.slug as string,
        pos: (row.pos as string[]) || ['n.'],
        frequency: row.frequency as string | null,
        definition: (row.definition as { en?: string; zh?: string }) || {},
        exampleCount: getExampleCount(row.frequency as string | null),
      });
    }
    if (data.length < PAGE) break;
    offset += PAGE;
  }

  console.log(`  ${allWords.length} words loaded`);

  const totalExamples = allWords.reduce((sum, w) => sum + w.exampleCount, 0);
  console.log(`  Target examples: ~${totalExamples}`);

  // 2. Initialize checkpoint
  const checkpoint = new Checkpoint<ExampleResult>(CHECKPOINT_PATH);

  // 3. Filter to unprocessed words
  const toProcess = allWords.filter((w) => !checkpoint.isProcessed(w.slug));
  console.log(`  Words to process: ${toProcess.length} (${allWords.length - toProcess.length} already done)\n`);

  if (toProcess.length === 0) {
    console.log('All words already processed. Proceeding to DB write...');
  }

  // 4. Batch process with Claude
  if (toProcess.length > 0) {
    const totalBatches = Math.ceil(toProcess.length / BATCH_SIZE);
    let batchNum = 0;
    let successCount = 0;
    let errorCount = 0;

    const system = buildSystemPrompt();

    for (let i = 0; i < toProcess.length; i += BATCH_SIZE * CONCURRENCY) {
      const concurrentBatches: WordInfo[][] = [];

      for (let j = 0; j < CONCURRENCY; j++) {
        const start = i + j * BATCH_SIZE;
        if (start >= toProcess.length) break;
        const batch = toProcess.slice(start, start + BATCH_SIZE);
        const unprocessed = batch.filter((w) => !checkpoint.isProcessed(w.slug));
        if (unprocessed.length > 0) concurrentBatches.push(unprocessed);
      }

      if (concurrentBatches.length === 0) continue;

      const promises = concurrentBatches.map(async (batch) => {
        batchNum++;
        const user = buildUserPrompt(batch);

        try {
          const results = await callClaude<ExampleResult[]>(system, user);

          for (const result of results) {
            checkpoint.addResult(result.word, result);
            successCount++;
          }

          // Check for missing words
          const resultWords = new Set(results.map((r) => r.word));
          for (const w of batch) {
            if (!resultWords.has(w.slug) && !checkpoint.isProcessed(w.slug)) {
              checkpoint.addError(w.slug, 'Not included in Claude response');
              errorCount++;
            }
          }
        } catch (err) {
          console.error(`  Batch error:`, (err as Error).message?.slice(0, 100));
          for (const w of batch) {
            if (!checkpoint.isProcessed(w.slug)) {
              checkpoint.addError(w.slug, (err as Error).message?.slice(0, 100));
              errorCount++;
            }
          }
        }
      });

      await Promise.all(promises);

      const done = checkpoint.processedCount;
      const pct = ((done / allWords.length) * 100).toFixed(1);
      console.log(
        `  Batches ${batchNum}/${totalBatches} — ${done}/${allWords.length} (${pct}%) — ` +
          `ok: ${successCount}, err: ${errorCount}`,
      );

      checkpoint.flush();
    }
  }

  // 5. Write to DB
  console.log('\n--- Writing to Database ---');

  const wordMap = await getSlugIdMap('words');
  const allResults = Object.values(checkpoint.allProcessed) as ExampleResult[];

  // Collect all word IDs that have results
  const wordIds: number[] = [];
  for (const result of allResults) {
    const id = wordMap.get(result.word);
    if (id) wordIds.push(id);
  }

  // Delete existing examples for these words
  console.log(`  Deleting existing examples for ${wordIds.length} words...`);
  for (let i = 0; i < wordIds.length; i += 500) {
    const batch = wordIds.slice(i, i + 500);
    const { error } = await db.from('word_examples').delete().in('word_id', batch);
    if (error) {
      console.error('  Error deleting old examples:', error.message);
      throw error;
    }
  }

  // Build new example rows
  const rows: Record<string, unknown>[] = [];
  for (const result of allResults) {
    const wordId = wordMap.get(result.word);
    if (!wordId || !result.examples) continue;

    for (let idx = 0; idx < result.examples.length; idx++) {
      const ex = result.examples[idx];
      rows.push({
        word_id: wordId,
        content: { en: ex.en, zh: ex.zh },
        sort_order: idx,
      });
    }
  }

  console.log(`  Inserting ${rows.length} examples...`);
  const inserted = await batchInsert('word_examples', rows);

  // 6. Summary
  console.log('\n=== Done ===');
  console.log(`  Words processed: ${allResults.length}`);
  console.log(`  Examples written: ${inserted}`);
  console.log(`  Errors: ${checkpoint.errorCount}`);

  // Verify count
  const { count } = await db.from('word_examples').select('*', { count: 'exact', head: true });
  console.log(`  DB word_examples total: ${count}`);

  checkpoint.close();
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
