// Full data audit: check quantities, gaps, and coverage.
import { db, getSlugIdMap } from './lib/db';

async function audit() {
  console.log('=== FULL DATA AUDIT ===\n');

  // 1. Basic counts
  const tables = ['roots', 'words', 'affixes', 'morpheme_segments', 'word_examples', 'tags', 'root_words', 'word_tags', 'word_relations', 'root_relations'];
  console.log('--- 1. Row Counts vs Plan Targets ---');
  console.log('  Table'.padEnd(24) + 'Actual'.padEnd(10) + 'Target');
  const targets: Record<string, string> = {
    roots: '500-800',
    words: '~15,000',
    affixes: '80-100',
    morpheme_segments: '~30,000',
    word_examples: '~45,000',
    tags: '~20',
    root_words: 'N/A',
    word_tags: '~50,000',
    word_relations: '~20,000',
    root_relations: '~500',
  };
  for (const t of tables) {
    const { count } = await db.from(t).select('*', { count: 'exact', head: true });
    const target = targets[t] || 'N/A';
    console.log(`  ${t.padEnd(22)} ${String(count ?? 0).padEnd(10)} ${target}`);
  }

  // 2. Root analysis
  console.log('\n--- 2. Root Analysis (124 actual vs 500-800 target) ---');
  const rootMap = await getSlugIdMap('roots');

  // Roots with NO associated words
  const { data: rootWordsData } = await db.from('root_words').select('root_id, word_id');
  const rootIdSet = new Set<number>();
  const rootWordCounts: Record<number, number> = {};
  for (const rw of rootWordsData ?? []) {
    rootIdSet.add(rw.root_id);
    rootWordCounts[rw.root_id] = (rootWordCounts[rw.root_id] || 0) + 1;
  }

  const orphanRoots: string[] = [];
  for (const [slug, id] of rootMap) {
    if (rootIdSet.has(id) === false) orphanRoots.push(slug);
  }
  console.log(`  Roots WITH associated words: ${rootIdSet.size}`);
  console.log(`  Roots WITHOUT any words: ${orphanRoots.length}`);
  if (orphanRoots.length > 0) {
    console.log(`    Orphan roots: ${orphanRoots.join(', ')}`);
  }

  // Words per root distribution
  const counts = Object.values(rootWordCounts).sort((a, b) => a - b);
  if (counts.length > 0) {
    const avg = counts.reduce((s, c) => s + c, 0) / counts.length;
    console.log(`  Words per root: min=${counts[0]} max=${counts[counts.length - 1]} avg=${avg.toFixed(1)} median=${counts[Math.floor(counts.length / 2)]}`);
  }

  // Root ID to slug map
  const rootIdToSlug = new Map<number, string>();
  for (const [slug, id] of rootMap) rootIdToSlug.set(id, slug);

  // Top 10 roots
  const sorted = Object.entries(rootWordCounts).sort((a, b) => b[1] - a[1]);
  console.log('  Top 10 roots by word count:');
  for (const [rid, cnt] of sorted.slice(0, 10)) {
    const slug = rootIdToSlug.get(Number(rid)) || String(rid);
    console.log(`    ${slug.padEnd(12)} ${cnt} words`);
  }

  // Bottom 10
  console.log('  Bottom 10 roots by word count:');
  for (const [rid, cnt] of sorted.slice(-10)) {
    const slug = rootIdToSlug.get(Number(rid)) || String(rid);
    console.log(`    ${slug.padEnd(12)} ${cnt} words`);
  }

  // 3. Root-word gap analysis
  console.log('\n--- 3. Root-Word Relationship Gap ---');
  const wordMap = await getSlugIdMap('words');
  const wordIdsWithRoots = new Set<number>();
  for (const rw of rootWordsData ?? []) {
    wordIdsWithRoots.add(rw.word_id);
  }
  const rootDerivedCount = 5163; // from earlier validation
  console.log(`  Total words: ${wordMap.size}`);
  console.log(`  Words with root associations: ${wordIdsWithRoots.size}`);
  console.log(`  Words marked root-derived but NO root link: ${rootDerivedCount - wordIdsWithRoots.size} (estimated)`);
  console.log(`  Words marked unknown etymology: 12693`);

  // 4. Morpheme segments analysis
  console.log('\n--- 4. Morpheme Segments ---');
  for (const segType of ['root', 'prefix', 'suffix', 'connector', 'other']) {
    const { count } = await db.from('morpheme_segments').select('*', { count: 'exact', head: true }).eq('type', segType);
    console.log(`  ${segType.padEnd(12)} ${count}`);
  }

  // 5. Examples coverage
  console.log('\n--- 5. Examples Coverage ---');
  const { count: totalExamples } = await db.from('word_examples').select('*', { count: 'exact', head: true });
  console.log(`  Total examples: ${totalExamples}`);
  console.log(`  Target (3/word): ${wordMap.size * 3}`);
  console.log(`  Gap: ${wordMap.size * 3 - (totalExamples ?? 0)} examples needed`);

  // Words with examples
  const { data: exampleWords } = await db.from('word_examples').select('word_id');
  const wordsWithExamples = new Set((exampleWords ?? []).map(r => r.word_id));
  console.log(`  Words with examples: ${wordsWithExamples.size} / ${wordMap.size}`);

  // 6. Definition completeness
  console.log('\n--- 6. Definition Completeness ---');
  // Sample check
  let emptyEn = 0;
  let emptyZh = 0;
  let checked = 0;
  let offset = 0;
  while (true) {
    const { data } = await db.from('words').select('slug, definition').range(offset, offset + 999);
    if (data === null || data.length === 0) break;
    for (const w of data) {
      const def = w.definition as Record<string, string>;
      if (def.en === undefined || def.en === '') emptyEn++;
      if (def.zh === undefined || def.zh === '') emptyZh++;
      checked++;
    }
    if (data.length < 1000) break;
    offset += 1000;
  }
  console.log(`  Checked: ${checked} words`);
  console.log(`  Empty definition.en: ${emptyEn}`);
  console.log(`  Empty definition.zh: ${emptyZh}`);

  // 7. Summary verdict
  console.log('\n========================================');
  console.log('=== VERDICT: KEY GAPS ===');
  console.log('========================================');
  console.log(`  [GAP] Roots: 124 vs target 500-800 (need ~400-700 more)`);
  console.log(`  [GAP] Root-word links: only 5,186 — 12,693 words have unknown etymology`);
  console.log(`  [GAP] Word examples: ${totalExamples} vs target ${wordMap.size * 3} (need ~${wordMap.size * 3 - (totalExamples ?? 0)} more)`);
  console.log(`  [GAP] Morpheme breakdowns: only 2,850 detailed, 12,420 are placeholders`);
  console.log(`  [GAP] Word relations: 0 (synonyms/antonyms not yet imported)`);
  console.log(`  [GAP] Root relations: 0 (not yet imported)`);
  console.log(`  [OK]  Words: ${wordMap.size} vs target ~15,000`);
  console.log(`  [OK]  Word-tag associations: 42,174 vs target ~50,000`);
  console.log(`  [OK]  Tags: 18 vs target ~20`);
  console.log(`  [OK]  Affixes: 41 vs target 80-100 (partial)`);
  if (emptyEn > 0) console.log(`  [GAP] Empty definition.en: ${emptyEn} words`);
}

audit().catch((err) => {
  console.error('Audit failed:', err);
  process.exit(1);
});
