/**
 * Word queries — fetches word data from Supabase and maps to WordEntry.
 *
 * The words table may contain >1000 rows (up to ~15 000). Functions that
 * return all words use pagination with `.range()` to work around the
 * Supabase default 1 000-row limit.
 */

import type { WordEntry } from '@/types/content';
import { supabase } from '@/lib/supabase';
import {
  mapWord,
  type MorphemeSegmentRow,
  type WordExampleRow,
  type WordRow,
} from './mappers';

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

const PAGE_SIZE = 1000;

/**
 * Paginated fetch for large tables.
 * Returns all rows matching a query builder function.
 */
async function fetchAllRows<T>(
  table: string,
  columns: string,
  orderBy?: string,
): Promise<T[]> {
  const allRows: T[] = [];
  let from = 0;
  let hasMore = true;

  while (hasMore) {
    let query = supabase.from(table).select(columns).range(from, from + PAGE_SIZE - 1);
    if (orderBy) {
      query = query.order(orderBy);
    }
    const { data, error } = await query;

    if (error) {
      console.error(`fetchAllRows(${table}) error:`, error);
      return allRows;
    }

    if (!data || data.length === 0) {
      hasMore = false;
    } else {
      allRows.push(...(data as T[]));
      from += PAGE_SIZE;
      if (data.length < PAGE_SIZE) {
        hasMore = false;
      }
    }
  }

  return allRows;
}

/**
 * Hydrate a single word row with its segments, examples, tags, and related words.
 */
async function hydrateWord(row: WordRow): Promise<WordEntry> {
  const [segments, examples, tagJoins, relWords1, relWords2] =
    await Promise.all([
      // Morpheme segments with joined root/affix slugs
      supabase
        .from('morpheme_segments')
        .select('*, roots(slug), affixes(slug)')
        .eq('word_id', row.id)
        .order('sort_order')
        .then((r) => (r.data ?? []) as MorphemeSegmentRow[]),

      // Examples
      supabase
        .from('word_examples')
        .select('*')
        .eq('word_id', row.id)
        .order('sort_order')
        .then((r) => (r.data ?? []) as WordExampleRow[]),

      // Tags (via word_tags join)
      supabase
        .from('word_tags')
        .select('tags!inner(slug)')
        .eq('word_id', row.id)
        .then((r) =>
          (r.data ?? []).map(
            (wt) => (wt.tags as unknown as { slug: string }).slug,
          ),
        ),

      // Related words (bidirectional word_relations)
      supabase
        .from('word_relations')
        .select('w2:words!word_relations_word_id_2_fkey(slug)')
        .eq('word_id_1', row.id)
        .then((r) =>
          (r.data ?? [])
            .map((wr) => (wr.w2 as unknown as { slug: string } | null)?.slug)
            .filter((s): s is string => !!s),
        ),

      supabase
        .from('word_relations')
        .select('w1:words!word_relations_word_id_1_fkey(slug)')
        .eq('word_id_2', row.id)
        .then((r) =>
          (r.data ?? [])
            .map((wr) => (wr.w1 as unknown as { slug: string } | null)?.slug)
            .filter((s): s is string => !!s),
        ),
    ]);

  const relatedWordSlugs = [...relWords1, ...relWords2];

  return mapWord(row, segments, examples, tagJoins, relatedWordSlugs);
}

/**
 * Hydrate multiple word rows in parallel (batched).
 */
async function hydrateWords(rows: WordRow[]): Promise<WordEntry[]> {
  return Promise.all(rows.map(hydrateWord));
}

// ---------------------------------------------------------------------------
// getWordBySlug — Full word with segments, examples, tags, related words
// ---------------------------------------------------------------------------

export async function getWordBySlug(
  slug: string,
): Promise<WordEntry | null> {
  const { data: row, error } = await supabase
    .from('words')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !row) return null;

  return hydrateWord(row as WordRow);
}

// ---------------------------------------------------------------------------
// getWordsByRootSlug — All words for a root (via root_words join)
// ---------------------------------------------------------------------------

export async function getWordsByRootSlug(
  rootSlug: string,
): Promise<WordEntry[]> {
  // First get the root id
  const { data: root, error: rootErr } = await supabase
    .from('roots')
    .select('id')
    .eq('slug', rootSlug)
    .single();

  if (rootErr || !root) return [];

  // Get word ids from root_words
  const { data: joins } = await supabase
    .from('root_words')
    .select('word_id')
    .eq('root_id', root.id);

  if (!joins || joins.length === 0) return [];

  const wordIds = joins.map((j) => j.word_id as number);

  // Fetch word rows
  const { data: wordRows } = await supabase
    .from('words')
    .select('*')
    .in('id', wordIds)
    .order('slug');

  if (!wordRows || wordRows.length === 0) return [];

  return hydrateWords(wordRows as WordRow[]);
}

// ---------------------------------------------------------------------------
// getWordSlugs — For generateStaticParams (paginated)
// ---------------------------------------------------------------------------

export async function getWordSlugs(): Promise<string[]> {
  const rows = await fetchAllRows<{ slug: string }>('words', 'slug', 'slug');
  return rows.map((r) => r.slug);
}

// ---------------------------------------------------------------------------
// getFeaturedWords — Top words by collins_star DESC, limited
// ---------------------------------------------------------------------------

export async function getFeaturedWords(
  limit: number = 6,
): Promise<WordEntry[]> {
  // Prefer high-frequency, high-Collins-star words
  const { data: wordRows, error } = await supabase
    .from('words')
    .select('*')
    .not('collins_star', 'is', null)
    .order('collins_star', { ascending: false })
    .order('frequency_rank', { ascending: true, nullsFirst: false })
    .limit(limit);

  if (error || !wordRows || wordRows.length === 0) {
    // Fallback: just grab the first N words
    const { data: fallback } = await supabase
      .from('words')
      .select('*')
      .order('slug')
      .limit(limit);

    if (!fallback || fallback.length === 0) return [];
    return hydrateWords(fallback as WordRow[]);
  }

  return hydrateWords(wordRows as WordRow[]);
}

// ---------------------------------------------------------------------------
// getWordCount
// ---------------------------------------------------------------------------

export async function getWordCount(): Promise<number> {
  const { count, error } = await supabase
    .from('words')
    .select('*', { count: 'exact', head: true });

  if (error || count === null) {
    console.error('getWordCount error:', error);
    return 0;
  }

  return count;
}

// ---------------------------------------------------------------------------
// getBestBreakdownWord — A word with prefix + root + suffix in segments
// ---------------------------------------------------------------------------

export async function getBestBreakdownWord(): Promise<WordEntry | null> {
  // Strategy: find words that have at least one segment of each type
  // (prefix, root, suffix). We use an RPC-like approach with multiple
  // subqueries. Since Supabase doesn't support HAVING with array_agg
  // easily, we use a pragmatic approach: fetch words that have >= 3
  // segments, then filter in code.

  // Get word_ids that have >= 3 segments
  const { data: candidates } = await supabase
    .from('morpheme_segments')
    .select('word_id, type')
    .in('type', ['prefix', 'root', 'suffix']);

  if (!candidates || candidates.length === 0) return null;

  // Group by word_id and find one with all three types
  const typesByWordId = new Map<number, Set<string>>();
  for (const seg of candidates) {
    const wordId = seg.word_id as number;
    const types = typesByWordId.get(wordId) ?? new Set();
    types.add(seg.type as string);
    typesByWordId.set(wordId, types);
  }

  let bestWordId: number | null = null;
  for (const [wordId, types] of typesByWordId) {
    if (types.has('prefix') && types.has('root') && types.has('suffix')) {
      bestWordId = wordId;
      break;
    }
  }

  // Fallback: word with most segment types
  if (bestWordId === null) {
    let maxTypes = 0;
    for (const [wordId, types] of typesByWordId) {
      if (types.size > maxTypes) {
        maxTypes = types.size;
        bestWordId = wordId;
      }
    }
  }

  if (bestWordId === null) return null;

  const { data: row } = await supabase
    .from('words')
    .select('*')
    .eq('id', bestWordId)
    .single();

  if (!row) return null;

  return hydrateWord(row as WordRow);
}
