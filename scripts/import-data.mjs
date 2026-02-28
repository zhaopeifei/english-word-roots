/**
 * import-data.mjs
 * Parses 宝爷万词王_讲义合集.md → scripts/output/parsed-data.json
 *
 * Usage: node scripts/import-data.mjs
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = resolve(__dirname, '..');
const INPUT = resolve(ROOT_DIR, 'docs/宝爷万词王_讲义合集.md');
const OUTPUT = resolve(__dirname, 'output/parsed-data.json');

// ── Helpers ──────────────────────────────────────────────────

const clean = (s) => s.replace(/\s+/g, ' ').trim();

function extractIPA(text) {
  const ipaMatch = text.match(
    /[/\[]([^/\]]*(?:ˈ|ˌ|ː|ɪ|ɑ|ɒ|æ|ʌ|ə|ɜ|ɔ|ʊ|θ|ð|ʃ|ʒ|ŋ|ɡ|ɛ|ʤ|ʧ)[^/\]]*)[/\]]/,
  );
  if (ipaMatch) return ipaMatch[1].trim();
  return null;
}

function extractPOS(text) {
  const posPatterns = /(?:^|\s)(n\.|v\.|vt\.|vi\.|adj\.|adv\.|prep\.|conj\.)/g;
  const matches = [...text.matchAll(posPatterns)].map((m) => m[1]);
  return [...new Set(matches)];
}

function hasChinese(text) {
  return /[\u4e00-\u9fff]/.test(text);
}

function extractChineseDefinition(text) {
  let cleaned = text.replace(/[/\[][^/\]]*[/\]]/g, '');
  const chineseSegments = [];
  const parts = cleaned.split(/[;；]/);
  for (const part of parts) {
    if (hasChinese(part)) {
      chineseSegments.push(clean(part));
    }
  }
  if (chineseSegments.length > 0) return chineseSegments.join('；');

  const afterPOS = cleaned.replace(/^.*?\b(?:n\.|v\.|vt\.|vi\.|adj\.|adv\.)\s*/, '');
  if (hasChinese(afterPOS)) return clean(afterPOS);
  return null;
}

// ── Main parsing ─────────────────────────────────────────────

const markdown = readFileSync(INPUT, 'utf-8');
const lines = markdown.split('\n');

// Split into lectures
const lectures = [];
let currentLecture = null;

for (const line of lines) {
  const lectureMatch = line.match(/^## 第 (\d+) 讲/);
  if (lectureMatch) {
    if (currentLecture) lectures.push(currentLecture);
    currentLecture = {
      number: parseInt(lectureMatch[1], 10),
      lines: [],
    };
  } else if (currentLecture) {
    currentLecture.lines.push(line);
  }
}
if (currentLecture) lectures.push(currentLecture);

console.log(`Found ${lectures.length} lectures`);

// ── Root line parsing ────────────────────────────────────────

/**
 * Handles patterns:
 * 1. "词根 act /ag 干/做/动"
 * 2. "词根 port - 运送/携带/搬运"
 * 3. "词根-vis/vid-看"
 * 4. "词根 flu/flux 流"
 * 5. "词根 -sim/sem/simil/sembl - 相似，像"
 * 6. "词根car/cur/cour 车 / 跑"
 */
function parseRootLine(line) {
  let text = line.replace(/^词根\s*[-–—]?\s*/, '').trim();
  // Remove trailing content after Chinese meaning (e.g., "(100个）")
  text = text.replace(/\s*[\(（]\d+.*$/, '');

  // Pattern: variants + Chinese meaning, separated by space/dash
  // Variants are English letters with / separators and optional () for variants
  const match = text.match(
    /^[-–—]?\s*([a-zA-Z][a-zA-Z/\s()]*?)[-–—\s]+([\u4e00-\u9fff][\u4e00-\u9fff，、/\s]*)/,
  );
  if (match) {
    const variantStr = match[1].replace(/\([^)]*\)/g, '').trim();
    const meaningZh = match[2].replace(/[-–—]/g, '').trim();
    const variants = variantStr
      .split(/[/\s]+/)
      .map((v) => v.trim().toLowerCase())
      .filter((v) => v.length > 0);
    if (variants.length > 0) return { variants, meaningZh };
  }

  return null;
}

/**
 * Parse standalone root slug line like:
 * "-rud-"
 * "-bi(o)-"
 * "-path/pat/pass-"
 * "-plod(s)- = -plaud(s)-"
 */
function parseStandaloneRootLine(line) {
  const trimmed = line.trim();
  // Match -xxx- or -xxx/yyy/zzz-
  const match = trimmed.match(/^[-–—]([a-zA-Z][a-zA-Z/()\s]*?)[-–—]/);
  if (match) {
    const raw = match[1].replace(/\([^)]*\)/g, '').trim();
    const variants = raw
      .split(/[/\s]+/)
      .map((v) => v.trim().toLowerCase())
      .filter((v) => v.length > 0);
    if (variants.length > 0) return variants;
  }

  // Also check for "= -xxx-" pattern to capture alternative forms
  const altMatch = trimmed.match(/=\s*[-–—]([a-zA-Z/()\s]+?)[-–—]/);
  if (altMatch) {
    const raw = altMatch[1].replace(/\([^)]*\)/g, '').trim();
    const extra = raw
      .split(/[/\s]+/)
      .map((v) => v.trim().toLowerCase())
      .filter((v) => v.length > 0);
    const mainVariants = match
      ? match[1]
          .replace(/\([^)]*\)/g, '')
          .trim()
          .split(/[/\s]+/)
          .map((v) => v.trim().toLowerCase())
          .filter(Boolean)
      : [];
    return [...mainVariants, ...extra];
  }
  return null;
}

/**
 * Detect if a line is a word entry.
 */
function parseWordLine(line) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('---')) return null;
  if (trimmed.startsWith('词根')) return null;
  if (trimmed.startsWith('格林法则')) return null;
  if (/^[-–—][a-zA-Z]/.test(trimmed)) return null; // standalone root slug

  // Must start with an English word followed by IPA in [...] or /.../
  const wordMatch = trimmed.match(/^([a-zA-Z][\w]*(?:-[\w]+)?)\s*[/\[]/);
  if (!wordMatch) return null;

  const lemma = wordMatch[1].trim().toLowerCase();

  // Skip if lemma is too short (single letter) unless it's a known word
  if (lemma.length < 2) return null;
  // Skip if lemma looks like a root pattern
  if (/^[a-z]{1,3}$/.test(lemma) && !['act', 'car', 'flu', 'raw', 'zoo'].includes(lemma))
    return null;

  const ipa = extractIPA(trimmed);
  if (!ipa) return null;

  const pos = extractPOS(trimmed);
  const zhDef = extractChineseDefinition(trimmed);

  return {
    lemma,
    slug: lemma.replace(/\s+/g, '-'),
    ipa,
    pos: pos.length > 0 ? pos : undefined,
    definitionZh: zhDef,
  };
}

// ── Process all lectures ─────────────────────────────────────

const rootsMap = new Map();
const allWords = [];
let currentRoot = null;
let pendingMeaning = null; // For two-line root patterns

for (const lecture of lectures) {
  const num = lecture.number;
  if (num <= 2) continue;

  const isMisc = num >= 112;

  // Reset currentRoot at lecture boundary to prevent bleed-over
  // (unless the lecture continues the same root topic)
  let rootSetThisLecture = false;

  for (let i = 0; i < lecture.lines.length; i++) {
    const line = lecture.lines[i];
    const trimmed = line.trim();
    if (!trimmed || trimmed === '---') continue;

    // ── Root detection ──
    if (!isMisc) {
      // Check for "词根" lines
      if (trimmed.startsWith('词根')) {
        const parsed = parseRootLine(trimmed);
        if (parsed && parsed.variants.length > 0) {
          const slug = parsed.variants[0];
          if (rootsMap.has(slug)) {
            currentRoot = rootsMap.get(slug);
            if (!currentRoot.lectureNumbers.includes(num)) {
              currentRoot.lectureNumbers.push(num);
            }
            // Merge any new variants
            for (const v of parsed.variants) {
              if (!currentRoot.variants.includes(v)) {
                currentRoot.variants.push(v);
              }
            }
          } else {
            currentRoot = {
              slug,
              variants: parsed.variants,
              meaningZh: parsed.meaningZh,
              lectureNumbers: [num],
              words: [],
            };
            rootsMap.set(slug, currentRoot);
          }
          rootSetThisLecture = true;
          pendingMeaning = null;
          continue;
        }

        // Two-line pattern: "词根 [Chinese meaning only]" → save, look at next line
        const chineseOnly = trimmed.replace(/^词根\s*/, '').trim();
        if (hasChinese(chineseOnly) && !chineseOnly.match(/[a-zA-Z]{2,}/)) {
          pendingMeaning = chineseOnly;
          continue;
        }
      }

      // Check for standalone root slug line (possibly following a "词根 meaning" line)
      const standaloneVariants = parseStandaloneRootLine(trimmed);
      if (standaloneVariants && standaloneVariants.length > 0) {
        const slug = standaloneVariants[0];
        const meaning = pendingMeaning || '';

        if (rootsMap.has(slug)) {
          currentRoot = rootsMap.get(slug);
          if (!currentRoot.lectureNumbers.includes(num)) {
            currentRoot.lectureNumbers.push(num);
          }
          for (const v of standaloneVariants) {
            if (!currentRoot.variants.includes(v)) {
              currentRoot.variants.push(v);
            }
          }
        } else {
          currentRoot = {
            slug,
            variants: standaloneVariants,
            meaningZh: meaning,
            lectureNumbers: [num],
            words: [],
          };
          rootsMap.set(slug, currentRoot);
        }
        rootSetThisLecture = true;
        pendingMeaning = null;
        continue;
      }
    }

    pendingMeaning = null;

    // ── Word detection ──
    const word = parseWordLine(trimmed);
    if (word) {
      word.lectureNumber = num;
      word.rootSlug = isMisc ? 'misc' : currentRoot?.slug || null;
      allWords.push(word);

      if (currentRoot && !isMisc) {
        if (!currentRoot.words.includes(word.slug)) {
          currentRoot.words.push(word.slug);
        }
      }
    }
  }
}

// ── Deduplicate words ────────────────────────────────────────

const wordMap = new Map();
for (const word of allWords) {
  if (!wordMap.has(word.slug)) {
    wordMap.set(word.slug, word);
  }
}

const uniqueWords = [...wordMap.values()];
const roots = [...rootsMap.values()];

// ── Extract Grimm's Law groups ───────────────────────────────

const grimmGroups = [];
for (const lecture of lectures) {
  if (lecture.number > 2) break;
  for (const line of lecture.lines) {
    const groupMatch = line.trim().match(/^([a-z](?:\/[a-z]{1,2}){2,})\s*$/i);
    if (groupMatch) {
      grimmGroups.push(groupMatch[1].toLowerCase());
    }
  }
}

// ── Summary ──────────────────────────────────────────────────

console.log(`\nExtracted ${roots.length} unique roots`);
console.log(`Extracted ${uniqueWords.length} unique words`);
console.log(`Grimm's Law groups: ${grimmGroups.join(', ')}`);

// Flag roots with suspiciously high word counts
console.log('\n── Roots ──');
for (const r of roots) {
  const flag = r.words.length > 100 ? ' ⚠️' : '';
  console.log(
    `  ${r.slug.padEnd(12)} (${r.variants.join('/')}) = ${r.meaningZh.padEnd(15)} [L${r.lectureNumbers.join(',')}] → ${r.words.length} words${flag}`,
  );
}

// ── Output ───────────────────────────────────────────────────

const output = {
  meta: {
    totalLectures: lectures.length,
    totalRoots: roots.length,
    totalWords: uniqueWords.length,
    grimmGroups,
    generatedAt: new Date().toISOString(),
  },
  roots,
  words: uniqueWords,
};

writeFileSync(OUTPUT, JSON.stringify(output, null, 2), 'utf-8');
console.log(`\nWritten to ${OUTPUT}`);
