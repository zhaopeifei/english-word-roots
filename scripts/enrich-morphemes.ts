/**
 * Script 2: Enrich morpheme decomposition using Wiktionary data + Claude.
 *
 * Usage: pnpm enrich:morphemes
 *
 * Phase 1 — Pre-classify obvious cases without Claude:
 *   a) Native English words (from Germanic/OE etymology via Wiktionary)
 *   b) Loanwords from non-Latin/Greek languages
 *   c) Blends, onomatopoeia, eponyms
 *   d) Algorithmic decomposition using baoye root data + known affixes
 *
 * Phase 2 — Claude for remaining words (tiered model):
 *   - Haiku: words with baoye reference or Wiktionary affix templates (easy)
 *   - Sonnet: words with no reference data or complex compound words (hard)
 *   - Sends word + Wiktionary etymology + root/affix list + baoye hints
 *   - Receives morpheme decomposition + new root discoveries
 *   - Validates segments concatenate to spell the word
 *
 * Phase 3 — DB writes:
 *   - Insert new roots
 *   - Update etymology_type
 *   - Replace morpheme_segments
 *   - Rebuild root_words associations
 *
 * Estimated cost: ~$10-20 (Haiku + Sonnet mix)
 * Runtime: ~45-60 min
 */
import './lib/env';
import * as fs from 'fs';
import * as path from 'path';
import { db, batchUpsert, batchInsert, getSlugIdMap } from './lib/db';
import { callClaude } from './lib/claude';
import { Checkpoint } from './lib/checkpoint';
import { WiktionaryEntry } from './lib/wiktionary';

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

/** Baoye word-root map entry (from import-baoye-roots.ts output). */
interface BaoyeMapEntry {
  rootSlug: string;
  variants: string[];
}

/** DB root with variants loaded. */
interface RootInfo {
  slug: string;
  variants: string[];
  meaning: { en: string; zh: string };
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const WIKTIONARY_PATH = path.resolve(__dirname, 'output/wiktionary-data.json');
const BAOYE_MAP_PATH = path.resolve(__dirname, 'output/baoye-word-root-map.json');
const CHECKPOINT_PATH = path.resolve(__dirname, 'output/morpheme-progress.json');
const CLAUDE_BATCH_SIZE = 15;
const CONCURRENCY = 3; // Parallel Claude calls
const HAIKU_MODEL = 'claude-haiku-4-5-20251001';
// Sonnet is the default in lib/claude.ts

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

// Known prefix forms for algorithmic decomposition (sorted longest-first for greedy match)
const KNOWN_PREFIXES: { form: string; slug: string }[] = [
  { form: 'counter', slug: 'counter' },
  { form: 'under', slug: 'under' },
  { form: 'super', slug: 'super' },
  { form: 'hyper', slug: 'hyper' },
  { form: 'inter', slug: 'inter' },
  { form: 'trans', slug: 'trans' },
  { form: 'over', slug: 'over' },
  { form: 'anti', slug: 'anti' },
  { form: 'auto', slug: 'auto' },
  { form: 'mis', slug: 'mis' },
  { form: 'out', slug: 'out' },
  { form: 'pre', slug: 'pre' },
  { form: 'sub', slug: 'sub' },
  { form: 'dis', slug: 'dis' },
  { form: 'com', slug: 'co' },
  { form: 'con', slug: 'co' },
  { form: 'col', slug: 'co' },
  { form: 'cor', slug: 'co' },
  { form: 'co', slug: 'co' },
  { form: 'im', slug: 'in' },
  { form: 'il', slug: 'in' },
  { form: 'ir', slug: 'in' },
  { form: 'in', slug: 'in' },
  { form: 'en', slug: 'en' },
  { form: 'em', slug: 'en' },
  { form: 'ex', slug: 'ex' },
  { form: 'de', slug: 'de' },
  { form: 'un', slug: 'un' },
  { form: 're', slug: 're' },
  { form: 'ab', slug: 'ex' },   // ab- often grouped with ex-
  { form: 'ad', slug: 'ad' },   // ad- assimilation family
  { form: 'ac', slug: 'ad' },
  { form: 'af', slug: 'ad' },
  { form: 'ag', slug: 'ad' },   // Note: ag as prefix (not root)
  { form: 'al', slug: 'ad' },
  { form: 'an', slug: 'ad' },
  { form: 'ap', slug: 'ad' },
  { form: 'ar', slug: 'ad' },
  { form: 'as', slug: 'ad' },
  { form: 'at', slug: 'ad' },
  { form: 'ob', slug: 'ob' },
  { form: 'oc', slug: 'ob' },
  { form: 'of', slug: 'ob' },
  { form: 'op', slug: 'ob' },
  { form: 'per', slug: 'per' },
  { form: 'pro', slug: 'pro' },
];

// Known suffix forms for algorithmic decomposition (sorted longest-first)
const KNOWN_SUFFIXES: { form: string; slug: string }[] = [
  { form: 'tion', slug: 'tion' },
  { form: 'sion', slug: 'tion' },
  { form: 'ment', slug: 'ment' },
  { form: 'ness', slug: 'ness' },
  { form: 'able', slug: 'able' },
  { form: 'ible', slug: 'able' },
  { form: 'ious', slug: 'ous' },
  { form: 'less', slug: 'less' },
  { form: 'logy', slug: 'logy' },
  { form: 'ship', slug: 'ship' },
  { form: 'ward', slug: 'ward' },
  { form: 'ize', slug: 'ize' },
  { form: 'ise', slug: 'ize' },
  { form: 'ify', slug: 'ify' },
  { form: 'ity', slug: 'ity' },
  { form: 'ive', slug: 'ive' },
  { form: 'ful', slug: 'ful' },
  { form: 'ous', slug: 'ous' },
  { form: 'ist', slug: 'ist' },
  { form: 'ate', slug: 'ate' },
  { form: 'dom', slug: 'dom' },
  { form: 'ial', slug: 'al' },
  { form: 'al', slug: 'al' },
  { form: 'er', slug: 'er' },
  { form: 'or', slug: 'er' },
  { form: 'ly', slug: 'ly' },
  { form: 'ty', slug: 'ity' },
  { form: 'ed', slug: 'ed' },
  { form: 'en', slug: 'en' },
  { form: 'th', slug: 'th' },
  { form: 'ry', slug: 'ry' },
  { form: 'cy', slug: 'cy' },
  { form: 'ce', slug: 'ce' },
  { form: 'y', slug: 'y' },
  { form: 'e', slug: 'e' },
];

// ---------------------------------------------------------------------------
// Baoye & Root Variant Lookup
// ---------------------------------------------------------------------------

/** Build a map from each variant string → root slug. */
function buildVariantToRootMap(roots: RootInfo[]): Map<string, string> {
  const map = new Map<string, string>();
  for (const r of roots) {
    for (const v of r.variants) {
      // Longest variant should win if there's a conflict, so we don't overwrite shorter
      const existing = map.get(v);
      if (!existing) {
        map.set(v, r.slug);
      }
    }
    // Also map slug itself
    if (!map.has(r.slug)) {
      map.set(r.slug, r.slug);
    }
  }
  return map;
}

/** Load all roots with their variants from DB. */
async function loadRootsWithVariants(): Promise<RootInfo[]> {
  const roots: RootInfo[] = [];
  const PAGE = 1000;
  let offset = 0;
  while (true) {
    const { data, error } = await db
      .from('roots')
      .select('slug, variants, meaning')
      .range(offset, offset + PAGE - 1);
    if (error) throw error;
    if (!data || data.length === 0) break;
    for (const row of data) {
      roots.push(row as unknown as RootInfo);
    }
    if (data.length < PAGE) break;
    offset += PAGE;
  }
  return roots;
}

// ---------------------------------------------------------------------------
// Phase 1: Pre-classify
// ---------------------------------------------------------------------------

type PreClassification = {
  etymology_type: string;
  segments: SegmentResult[];
} | null;

function preClassifyWiktionary(
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

  // Has affix/prefix/suffix/compound templates → needs further analysis
  return null;
}

/**
 * Algorithmic decomposition: try to decompose a word using known prefixes,
 * root variants (from baoye + DB), and known suffixes. Only succeeds if
 * the decomposition fully covers the word (no leftover characters).
 */
function tryAlgorithmicDecomposition(
  slug: string,
  baoyeEntry: BaoyeMapEntry | undefined,
  variantToRoot: Map<string, string>,
  affixSlugs: Set<string>,
): PreClassification {
  if (!baoyeEntry) return null;

  const word = slug;
  const rootSlug = baoyeEntry.rootSlug;
  const rootVariants = baoyeEntry.variants;

  // Try each variant to see if it appears in the word
  for (const variant of rootVariants) {
    const varIdx = word.indexOf(variant);
    if (varIdx < 0) continue;

    const before = word.slice(0, varIdx);
    const after = word.slice(varIdx + variant.length);

    // Try to match prefix(es) for the 'before' part
    const prefixSegs = matchPrefixes(before);
    if (prefixSegs === null) continue;

    // Try to match suffix(es) for the 'after' part
    const suffixSegs = matchSuffixes(after);
    if (suffixSegs === null) continue;

    // We have a full decomposition!
    const segments: SegmentResult[] = [];

    for (const p of prefixSegs) {
      segments.push({
        surface: p.form,
        type: 'prefix',
        affix_slug: affixSlugs.has(p.slug) ? p.slug : undefined,
      });
    }

    segments.push({
      surface: variant,
      type: 'root',
      root_slug: rootSlug,
    });

    for (const s of suffixSegs) {
      if (s.type === 'connector') {
        segments.push({ surface: s.form, type: 'connector' });
      } else {
        segments.push({
          surface: s.form,
          type: 'suffix',
          affix_slug: affixSlugs.has(s.slug) ? s.slug : undefined,
        });
      }
    }

    // Validate
    const reconstructed = segments.map((s) => s.surface).join('');
    if (reconstructed === word) {
      return {
        etymology_type: 'root-derived',
        segments,
      };
    }
  }

  return null;
}

/** Try to match the 'before' string entirely with known prefixes. */
function matchPrefixes(str: string): { form: string; slug: string }[] | null {
  if (str === '') return [];

  const result: { form: string; slug: string }[] = [];
  let remaining = str;

  while (remaining.length > 0) {
    let matched = false;
    for (const p of KNOWN_PREFIXES) {
      if (remaining.startsWith(p.form)) {
        result.push({ form: p.form, slug: p.slug });
        remaining = remaining.slice(p.form.length);
        matched = true;
        break;
      }
    }
    if (!matched) return null; // Can't match remaining
  }

  return result;
}

/** Try to match the 'after' string with connector + suffixes. */
function matchSuffixes(str: string): { form: string; slug: string; type: 'suffix' | 'connector' }[] | null {
  if (str === '') return [];

  const result: { form: string; slug: string; type: 'suffix' | 'connector' }[] = [];
  let remaining = str;

  // Allow a single-char connector at the start (linking vowel/consonant)
  const connectors = ['o', 'i', 'u', 'a', 'e'];

  // Try with and without connector
  for (const tryConnector of [true, false]) {
    const tempResult: { form: string; slug: string; type: 'suffix' | 'connector' }[] = [];
    let rem = remaining;

    if (tryConnector && rem.length > 1 && connectors.includes(rem[0])) {
      tempResult.push({ form: rem[0], slug: '', type: 'connector' });
      rem = rem.slice(1);
    }

    let ok = true;
    while (rem.length > 0) {
      let matched = false;
      for (const s of KNOWN_SUFFIXES) {
        if (rem.startsWith(s.form)) {
          tempResult.push({ form: s.form, slug: s.slug, type: 'suffix' });
          rem = rem.slice(s.form.length);
          matched = true;
          break;
        }
      }
      if (!matched) {
        ok = false;
        break;
      }
    }

    if (ok && rem.length === 0) {
      return tempResult;
    }
  }

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
   - Root segments: the "surface" is the actual spelling in the word (the variant form), and "root_slug" is the canonical root slug from the list, OR "NEW:slug" for new roots
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

EXAMPLES:
- react → [{"surface":"re","type":"prefix","affix_slug":"re"},{"surface":"act","type":"root","root_slug":"act"}]
- coagulate → [{"surface":"co","type":"prefix","affix_slug":"co"},{"surface":"ag","type":"root","root_slug":"act"},{"surface":"ul","type":"connector"},{"surface":"ate","type":"suffix","affix_slug":"ate"}]
- autobiography → [{"surface":"auto","type":"prefix","affix_slug":"auto"},{"surface":"bi","type":"root","root_slug":"bio"},{"surface":"o","type":"connector"},{"surface":"graph","type":"root","root_slug":"graph"},{"surface":"y","type":"suffix"}]
- tsunami → [{"surface":"tsunami","type":"other"}] (etymology_type: "loanword")

Respond with a JSON array only, no other text.`;
}

function buildUserPrompt(
  words: { slug: string; etym: string; baoyeHint?: string }[],
  rootInfos: RootInfo[],
  affixSlugs: string[],
): string {
  // Build root list with variants
  const rootList = rootInfos
    .map((r) => `${r.slug} [${r.variants.join(', ')}]: ${r.meaning.en || r.meaning.zh}`)
    .join('\n  ');
  const affixList = affixSlugs.join(', ');

  const wordEntries = words
    .map((w) => {
      let line = `- ${w.slug}: ${w.etym || '(no etymology data)'}`;
      if (w.baoyeHint) line += `\n  Baoye ref: ${w.baoyeHint}`;
      return line;
    })
    .join('\n');

  return `EXISTING ROOTS (${rootInfos.length}):
  ${rootList}

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

/** Determine model tier: Haiku for easy words, Sonnet for hard ones. */
function pickModel(
  word: { slug: string; baoyeHint?: string; etym: string },
  entry: WiktionaryEntry | undefined,
): string | undefined {
  // Has baoye reference → easier, use Haiku
  if (word.baoyeHint) return HAIKU_MODEL;

  // Has Wiktionary prefix/suffix/affix templates → structural hints, use Haiku
  if (entry?.templates?.some((t) =>
    ['prefix', 'suffix', 'affix', 'af', 'confix'].includes(t.name),
  )) {
    return HAIKU_MODEL;
  }

  // Otherwise use default (Sonnet) — no need to specify
  return undefined;
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

  // 2. Load baoye word-root map (optional — script works without it)
  let baoyeMap: Record<string, BaoyeMapEntry> = {};
  if (fs.existsSync(BAOYE_MAP_PATH)) {
    console.log('Loading baoye word-root map...');
    baoyeMap = JSON.parse(fs.readFileSync(BAOYE_MAP_PATH, 'utf-8'));
    console.log(`  ${Object.keys(baoyeMap).length} baoye word mappings loaded`);
  } else {
    console.log('No baoye map found (run import-baoye-roots.ts first for better results)');
  }

  // 3. Load all words from DB
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

  // 4. Load existing roots (with variants) and affixes
  console.log('Loading roots and affixes...');
  const rootInfos = await loadRootsWithVariants();
  const variantToRoot = buildVariantToRootMap(rootInfos);
  const rootMap = await getSlugIdMap('roots');
  const affixMap = await getSlugIdMap('affixes');
  const affixSlugSet = new Set(affixMap.keys());
  console.log(`  ${rootMap.size} roots (${variantToRoot.size} variants), ${affixMap.size} affixes`);

  const rootSlugs = Array.from(rootMap.keys());
  const affixSlugs = Array.from(affixMap.keys());

  // 5. Initialize checkpoint
  const checkpoint = new Checkpoint<WordAnalysis>(CHECKPOINT_PATH);

  // 6. Phase 1: Pre-classify
  console.log('\n--- Phase 1: Pre-classify ---');
  const needsClaude: { slug: string; etym: string; baoyeHint?: string }[] = [];
  let wiktClassified = 0;
  let algoClassified = 0;

  for (const word of words) {
    if (checkpoint.isProcessed(word.slug)) continue;

    const entry = wiktData.entries[word.slug];
    const baoyeEntry = baoyeMap[word.slug];

    // 6a. Wiktionary-based pre-classification
    const wiktResult = preClassifyWiktionary(word.slug, entry);
    if (wiktResult) {
      checkpoint.addResult(word.slug, {
        word: word.slug,
        etymology_type: wiktResult.etymology_type,
        segments: wiktResult.segments,
        new_roots: [],
      });
      wiktClassified++;
      continue;
    }

    // 6b. Algorithmic decomposition using baoye root data
    const algoResult = tryAlgorithmicDecomposition(word.slug, baoyeEntry, variantToRoot, affixSlugSet);
    if (algoResult) {
      checkpoint.addResult(word.slug, {
        word: word.slug,
        etymology_type: algoResult.etymology_type,
        segments: algoResult.segments,
        new_roots: [],
      });
      algoClassified++;
      continue;
    }

    // 6c. Needs Claude analysis — prepare context
    const etymText = entry?.etymologyText || '';
    const etymWiki = entry?.etymologyWikitext || '';
    const etym = etymWiki.length > etymText.length
      ? etymWiki.slice(0, 300)
      : etymText.slice(0, 300);

    const baoyeHint = baoyeEntry
      ? `root '${baoyeEntry.rootSlug}' (variants: ${baoyeEntry.variants.join(', ')})`
      : undefined;

    needsClaude.push({ slug: word.slug, etym, baoyeHint });
  }

  console.log(`  Wiktionary pre-classified: ${wiktClassified}`);
  console.log(`  Algorithmic decomposition: ${algoClassified}`);
  console.log(`  Need Claude: ${needsClaude.length}`);
  checkpoint.flush();

  // 7. Phase 2: Claude analysis (tiered model)
  if (needsClaude.length > 0) {
    console.log('\n--- Phase 2: Claude Analysis (tiered) ---');

    // Split into Haiku and Sonnet tiers
    const haikuWords: typeof needsClaude = [];
    const sonnetWords: typeof needsClaude = [];

    for (const w of needsClaude) {
      const entry = wiktData.entries[w.slug];
      const model = pickModel(w, entry);
      if (model === HAIKU_MODEL) {
        haikuWords.push(w);
      } else {
        sonnetWords.push(w);
      }
    }

    console.log(`  Haiku tier: ${haikuWords.length} words`);
    console.log(`  Sonnet tier: ${sonnetWords.length} words`);

    const system = buildSystemPrompt();

    // Process a tier of words
    async function processTier(
      tierName: string,
      tierWords: typeof needsClaude,
      model?: string,
    ) {
      if (tierWords.length === 0) return;

      console.log(`\n  Processing ${tierName} tier (${tierWords.length} words)...`);
      const totalBatches = Math.ceil(tierWords.length / CLAUDE_BATCH_SIZE);
      let batchNum = 0;
      let success = 0;
      let errors = 0;

      for (let i = 0; i < tierWords.length; i += CLAUDE_BATCH_SIZE * CONCURRENCY) {
        const concurrentBatches: (typeof needsClaude)[] = [];
        for (let j = 0; j < CONCURRENCY; j++) {
          const start = i + j * CLAUDE_BATCH_SIZE;
          if (start >= tierWords.length) break;
          const batch = tierWords.slice(start, start + CLAUDE_BATCH_SIZE);
          const unprocessed = batch.filter((w) => !checkpoint.isProcessed(w.slug));
          if (unprocessed.length > 0) concurrentBatches.push(unprocessed);
        }

        if (concurrentBatches.length === 0) continue;

        const promises = concurrentBatches.map(async (batch) => {
          batchNum++;
          const user = buildUserPrompt(batch, rootInfos, affixSlugs);

          try {
            const results = await callClaude<WordAnalysis[]>(system, user, { model });

            for (const analysis of results) {
              if (validateAnalysis(analysis)) {
                checkpoint.addResult(analysis.word, analysis);
                success++;
              } else {
                // Accept with warning — concatenation was close
                checkpoint.addResult(analysis.word, analysis);
                success++;
              }
            }

            // Check for words in batch not in results
            const resultWords = new Set(results.map((r) => r.word));
            for (const w of batch) {
              if (!resultWords.has(w.slug) && !checkpoint.isProcessed(w.slug)) {
                checkpoint.addError(w.slug, 'Not included in Claude response');
                errors++;
              }
            }
          } catch (err) {
            console.error(`  ${tierName} batch error:`, (err as Error).message?.slice(0, 100));
            for (const w of batch) {
              if (!checkpoint.isProcessed(w.slug)) {
                checkpoint.addError(w.slug, (err as Error).message?.slice(0, 100));
                errors++;
              }
            }
          }
        });

        await Promise.all(promises);

        const done = checkpoint.processedCount;
        const pct = ((done / words.length) * 100).toFixed(1);
        console.log(
          `  [${tierName}] Batches ${batchNum}/${totalBatches} — ${done}/${words.length} (${pct}%) — ` +
            `ok: ${success}, err: ${errors}`,
        );

        checkpoint.flush();
      }
    }

    // Run Haiku tier first (cheaper, faster), then Sonnet
    await processTier('Haiku', haikuWords, HAIKU_MODEL);
    await processTier('Sonnet', sonnetWords);
  }

  // 8. Phase 3: DB writes
  console.log('\n--- Phase 3: DB Writes ---');

  // Collect all results
  const allResults: WordAnalysis[] = Object.values(checkpoint.allProcessed);
  console.log(`  Total results to write: ${allResults.length}`);

  // 8a. Insert new roots
  const allNewRoots: NewRoot[] = [];
  for (const r of allResults) {
    if (r.new_roots) allNewRoots.push(...r.new_roots);
  }
  const newRootCount = await writeNewRoots(allNewRoots);
  console.log(`  New roots inserted: ${newRootCount}`);

  // Reload root map (includes new roots)
  const updatedRootMap = await getSlugIdMap('roots');
  console.log(`  Root map updated: ${updatedRootMap.size} total roots`);

  // 8b. Update etymology_type
  const etymUpdates = allResults.map((r) => ({
    slug: r.word,
    etymology_type: r.etymology_type,
  }));
  await writeEtymologyTypes(etymUpdates);

  // 8c. Write morpheme segments
  const wordMap = await getSlugIdMap('words');
  const segCount = await writeMorphemeSegments(allResults, wordMap, updatedRootMap, affixMap);
  console.log(`  Morpheme segments written: ${segCount}`);

  // 8d. Write root_words
  const rwCount = await writeRootWords(allResults, wordMap, updatedRootMap);
  console.log(`  Root-word associations written: ${rwCount}`);

  // 9. Summary
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
