// Validate data completeness and integrity after import.
import { db } from './lib/db';

async function main() {
  console.log('=== Data Validation ===\n');

  // 1. Row counts
  console.log('--- Row Counts ---');
  const tables = ['roots', 'words', 'affixes', 'morpheme_segments', 'word_examples', 'tags', 'root_words', 'word_tags'];
  for (const t of tables) {
    const { count } = await db.from(t).select('*', { count: 'exact', head: true });
    console.log(`  ${t.padEnd(22)} ${count}`);
  }

  // 2. Words missing frequency
  const { count: totalWords } = await db.from('words').select('*', { count: 'exact', head: true });
  const { count: noFreq } = await db.from('words').select('*', { count: 'exact', head: true }).is('frequency', null);
  console.log(`\n--- Missing Data ---`);
  console.log(`  Words without frequency: ${noFreq} / ${totalWords}`);

  // 3. Words without any tags
  const { count: totalTagged } = await db.from('word_tags').select('word_id', { count: 'exact', head: true });
  console.log(`  Word-tag associations: ${totalTagged}`);

  // 4. Frequency distribution
  const freqDist: Record<string, number> = { common: 0, academic: 0, advanced: 0, rare: 0, null: 0 };
  for (const freq of ['common', 'academic', 'advanced', 'rare']) {
    const { count } = await db.from('words').select('*', { count: 'exact', head: true }).eq('frequency', freq);
    freqDist[freq] = count ?? 0;
  }
  const { count: nullFreq } = await db.from('words').select('*', { count: 'exact', head: true }).is('frequency', null);
  freqDist['null'] = nullFreq ?? 0;

  console.log(`\n--- Frequency Distribution ---`);
  for (const [k, v] of Object.entries(freqDist)) {
    console.log(`  ${k.padEnd(12)} ${v}`);
  }

  // 5. Exam tag counts
  console.log(`\n--- Exam Tag Counts ---`);
  const examTags = ['zk', 'gk', 'cet4', 'cet6', 'ky', 'ielts', 'toefl', 'gre'];
  for (const slug of examTags) {
    const { data: tag } = await db.from('tags').select('id').eq('slug', slug).single();
    if (tag) {
      const { count } = await db.from('word_tags').select('*', { count: 'exact', head: true }).eq('tag_id', tag.id);
      console.log(`  ${slug.padEnd(8)} ${count} words`);
    }
  }

  // 6. NGSL/AWL counts
  console.log(`\n--- NGSL/AWL Tag Counts ---`);
  for (const slug of ['ngsl-1000', 'ngsl-2000', 'ngsl-3000', 'awl']) {
    const { data: tag } = await db.from('tags').select('id').eq('slug', slug).single();
    if (tag) {
      const { count } = await db.from('word_tags').select('*', { count: 'exact', head: true }).eq('tag_id', tag.id);
      console.log(`  ${slug.padEnd(12)} ${count} words`);
    }
  }

  // 7. Etymology type distribution
  console.log(`\n--- Etymology Type Distribution ---`);
  for (const etype of ['root-derived', 'unknown', 'native', 'loanword', 'blend', 'eponym', 'onomatopoeia']) {
    const { count } = await db.from('words').select('*', { count: 'exact', head: true }).eq('etymology_type', etype);
    if (count && count > 0) {
      console.log(`  ${etype.padEnd(16)} ${count}`);
    }
  }

  console.log(`\n=== Validation Complete ===`);
}

main().catch((err) => {
  console.error('Validation failed:', err);
  process.exit(1);
});
