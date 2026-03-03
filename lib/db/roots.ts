/**
 * Root queries — fetches root data from Supabase and maps to RootEntry.
 */

import type { RootEntry } from '@/types/content';
import { supabase } from '@/lib/supabase';
import { mapRoot, type RootRow } from './mappers';

// ---------------------------------------------------------------------------
// getRoots — All roots, ordered by slug
// ---------------------------------------------------------------------------

export async function getRoots(): Promise<RootEntry[]> {
  // Paginate roots (Supabase default limit is 1000)
  const roots: RootRow[] = [];
  const PAGE = 1000;
  let offset = 0;
  while (true) {
    const { data, error } = await supabase
      .from('roots')
      .select('*')
      .order('slug')
      .range(offset, offset + PAGE - 1);
    if (error || !data) {
      if (error) console.error('getRoots error:', error);
      break;
    }
    roots.push(...(data as RootRow[]));
    if (data.length < PAGE) break;
    offset += PAGE;
  }

  // Paginate root_words relationships
  const wordsByRootId = new Map<number, string[]>();
  offset = 0;
  while (true) {
    const { data, error } = await supabase
      .from('root_words')
      .select('root_id, words!inner(slug)')
      .order('root_id')
      .range(offset, offset + PAGE - 1);
    if (error || !data || data.length === 0) break;
    for (const rw of data) {
      const rootId = rw.root_id as number;
      const wordSlug = (rw.words as unknown as { slug: string }).slug;
      const existing = wordsByRootId.get(rootId) ?? [];
      existing.push(wordSlug);
      wordsByRootId.set(rootId, existing);
    }
    if (data.length < PAGE) break;
    offset += PAGE;
  }

  return roots.map((row) =>
    mapRoot(row, wordsByRootId.get(row.id) ?? [], []),
  );
}

// ---------------------------------------------------------------------------
// getRootBySlug — Single root with associated words and related roots
// ---------------------------------------------------------------------------

export async function getRootBySlug(
  slug: string,
): Promise<RootEntry | null> {
  const { data: row, error } = await supabase
    .from('roots')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !row) return null;

  const rootRow = row as RootRow;

  // Fetch associated word slugs
  const { data: wordJoins } = await supabase
    .from('root_words')
    .select('words!inner(slug)')
    .eq('root_id', rootRow.id);

  const wordSlugs = (wordJoins ?? []).map(
    (rw) => (rw.words as unknown as { slug: string }).slug,
  );

  // Fetch related root slugs (root_relations is bidirectional)
  const [{ data: rel1 }, { data: rel2 }] = await Promise.all([
    supabase
      .from('root_relations')
      .select('root_id_2, r2:roots!root_relations_root_id_2_fkey(slug)')
      .eq('root_id_1', rootRow.id),
    supabase
      .from('root_relations')
      .select('root_id_1, r1:roots!root_relations_root_id_1_fkey(slug)')
      .eq('root_id_2', rootRow.id),
  ]);

  const relatedSlugs: string[] = [];
  if (rel1) {
    for (const r of rel1) {
      const slug2 = (r.r2 as unknown as { slug: string } | null)?.slug;
      if (slug2) relatedSlugs.push(slug2);
    }
  }
  if (rel2) {
    for (const r of rel2) {
      const slug1 = (r.r1 as unknown as { slug: string } | null)?.slug;
      if (slug1) relatedSlugs.push(slug1);
    }
  }

  return mapRoot(rootRow, wordSlugs, relatedSlugs);
}

// ---------------------------------------------------------------------------
// getRootSlugs — For generateStaticParams
// ---------------------------------------------------------------------------

export async function getRootSlugs(): Promise<string[]> {
  const slugs: string[] = [];
  const PAGE = 1000;
  let offset = 0;
  while (true) {
    const { data, error } = await supabase
      .from('roots')
      .select('slug')
      .order('slug')
      .range(offset, offset + PAGE - 1);
    if (error || !data) {
      if (error) console.error('getRootSlugs error:', error);
      break;
    }
    slugs.push(...data.map((r) => r.slug));
    if (data.length < PAGE) break;
    offset += PAGE;
  }
  return slugs;
}

// ---------------------------------------------------------------------------
// getRootCount
// ---------------------------------------------------------------------------

export async function getRootCount(): Promise<number> {
  const { count, error } = await supabase
    .from('roots')
    .select('*', { count: 'exact', head: true });

  if (error || count === null) {
    console.error('getRootCount error:', error);
    return 0;
  }

  return count;
}
