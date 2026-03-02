// Restructure content/*.ts data into DB-aligned JSON files.
// Input: content/roots.ts, content/words/*/index.ts, content/affixes.ts
// Output: supabase/seed-data/*.json
// Run: npx tsx scripts/restructure-seed-data.ts

import { ROOTS } from '../content/roots';
import { WORDS } from '../content/words';
import { AFFIXES } from '../content/affixes';
import * as fs from 'fs';
import * as path from 'path';

const OUT_DIR = path.resolve(__dirname, '../supabase/seed-data');

// Ensure output directory exists
fs.mkdirSync(OUT_DIR, { recursive: true });

function writeJSON(filename: string, data: unknown) {
  const filepath = path.join(OUT_DIR, filename);
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`  ✓ ${filename}: ${Array.isArray(data) ? data.length : '?'} entries`);
}

// ---------------------------------------------------------------------------
// 1. roots.json
// ---------------------------------------------------------------------------
const roots = ROOTS.map((r) => ({
  slug: r.slug,
  variants: r.variants,
  meaning: r.meaning, // already { en, zh }
  origin_summary: r.originSummary,
  origin_lang: r.languageOfOrigin,
  etymology: r.etymology ?? null,
  pie_root: null, // 待 Wiktionary 补充
  semantic_domains: r.semanticDomains,
  grimm_law_group: r.grimmLawGroup ?? null,
}));

// ---------------------------------------------------------------------------
// 2. words.json + morpheme_segments.json + word_examples.json + root_words.json
// ---------------------------------------------------------------------------

// Build root slug → index lookup for root_words
const rootSlugSet = new Set(ROOTS.map((r) => r.slug));

interface SeedWord {
  slug: string;
  lemma: string;
  ipa_uk: string | null;
  ipa_us: string | null;
  pos: string[];
  definition: Record<string, string>;
  morphology_note: Record<string, string> | null;
  collocations: Record<string, string[]> | null;
  etymology_type: string;
  frequency: string | null;
  frequency_rank: number | null;
  collins_star: number | null;
  oxford_flag: boolean;
  cefr_level: string | null;
}

interface SeedMorpheme {
  word_slug: string;
  surface: string;
  type: string;
  root_slug: string | null;
  affix_slug: string | null;
  sort_order: number;
}

interface SeedExample {
  word_slug: string;
  content: Record<string, string>;
  sort_order: number;
}

interface SeedRootWord {
  root_slug: string;
  word_slug: string;
}

const words: SeedWord[] = [];
const morphemeSegments: SeedMorpheme[] = [];
const wordExamples: SeedExample[] = [];
const rootWords: SeedRootWord[] = [];

// Track unique root-word pairs to avoid duplicates
const rootWordPairs = new Set<string>();

for (const w of WORDS) {
  // Determine etymology_type based on rootBreakdown
  let etymologyType = 'root-derived';
  if (w.rootBreakdown.length === 1 && w.rootBreakdown[0].type === 'other') {
    etymologyType = 'unknown'; // Will be refined later with Wiktionary data
  }

  words.push({
    slug: w.slug,
    lemma: w.lemma,
    ipa_uk: w.pronunciation?.uk?.ipa ?? null,
    ipa_us: w.pronunciation?.us?.ipa ?? null,
    pos: w.partOfSpeech,
    definition: w.definition,
    morphology_note: w.morphologyNote ?? null,
    collocations: w.collocations ?? null,
    etymology_type: etymologyType,
    frequency: w.frequency ?? null,
    frequency_rank: null, // 待 ECDICT 补充
    collins_star: null, // 待 ECDICT 补充
    oxford_flag: false, // 待 ECDICT 补充
    cefr_level: null, // 待 CEFR Dataset 补充
  });

  // Morpheme segments
  for (let i = 0; i < w.rootBreakdown.length; i++) {
    const seg = w.rootBreakdown[i];
    morphemeSegments.push({
      word_slug: w.slug,
      surface: seg.surface,
      type: seg.type,
      root_slug: seg.rootSlug ?? null,
      affix_slug: seg.affixSlug ?? null,
      sort_order: i,
    });

    // Collect root-word associations
    if (seg.type === 'root' && seg.rootSlug && rootSlugSet.has(seg.rootSlug)) {
      const key = `${seg.rootSlug}::${w.slug}`;
      if (!rootWordPairs.has(key)) {
        rootWordPairs.add(key);
        rootWords.push({
          root_slug: seg.rootSlug,
          word_slug: w.slug,
        });
      }
    }
  }

  // Examples — flatten nested structure
  // Current format: examples: Array<Record<Locale, string[]>>
  // Each item may have multiple sentences per locale
  let exampleIdx = 0;
  for (const exGroup of w.examples) {
    // exGroup is { en: string[], zh: string[] }
    // Each array element is one example sentence
    const enSentences = exGroup.en ?? [];
    const zhSentences = exGroup.zh ?? [];
    const maxLen = Math.max(enSentences.length, zhSentences.length);

    for (let j = 0; j < maxLen; j++) {
      const content: Record<string, string> = {};
      if (enSentences[j]) content.en = enSentences[j];
      if (zhSentences[j]) content.zh = zhSentences[j];
      if (Object.keys(content).length > 0) {
        wordExamples.push({
          word_slug: w.slug,
          content,
          sort_order: exampleIdx++,
        });
      }
    }
  }
}

// ---------------------------------------------------------------------------
// 3. affixes.json
// ---------------------------------------------------------------------------
const affixes = AFFIXES.map((a) => ({
  slug: a.slug,
  form: a.form,
  type: a.type,
  meaning: a.meaning,
  overview: a.overview ?? null,
  origin_lang: a.languageOfOrigin ?? null,
  variants: null, // 待 Wiktionary 补充
  pos_function: null, // 待手动标注
  grimm_law_group: a.grimmLawGroup ?? null,
}));

// ---------------------------------------------------------------------------
// Write all files
// ---------------------------------------------------------------------------
console.log('Restructuring seed data...\n');

writeJSON('roots.json', roots);
writeJSON('words.json', words);
writeJSON('affixes.json', affixes);
writeJSON('morpheme_segments.json', morphemeSegments);
writeJSON('word_examples.json', wordExamples);
writeJSON('root_words.json', rootWords);

console.log('\nDone! Files written to supabase/seed-data/');
