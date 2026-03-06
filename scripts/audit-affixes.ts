/**
 * Audit affix data: show existing affixes, unlinked segments,
 * and group unlinked prefix/suffix surfaces by their likely base form.
 */
import { db } from './lib/db';

const PAGE = 1000;

async function fetchAll<T>(table: string, select: string, filter?: { col: string; values: string[] }, order?: string): Promise<T[]> {
  const all: T[] = [];
  let offset = 0;
  while (true) {
    let q = db.from(table).select(select).range(offset, offset + PAGE - 1);
    if (filter) q = q.in(filter.col, filter.values);
    if (order) q = q.order(order);
    const { data, error } = await q;
    if (error) { console.error(error); break; }
    if (!data || data.length === 0) break;
    all.push(...(data as T[]));
    if (data.length < PAGE) break;
    offset += PAGE;
  }
  return all;
}

async function main() {
  // 1. All existing affixes
  const affixes = await fetchAll<Record<string, unknown>>('affixes', 'id, slug, form, type, meaning', undefined, 'slug');
  console.log(`=== EXISTING AFFIXES (${affixes.length}) ===`);
  for (const a of affixes) {
    console.log(`  ${String(a.id).padEnd(4)} ${String(a.slug).padEnd(12)} ${String(a.form).padEnd(14)} ${String(a.type).padEnd(8)} ${JSON.stringify(a.meaning)}`);
  }

  // 2. All morpheme_segments with type prefix/suffix (paginated)
  const segments = await fetchAll<Record<string, unknown>>(
    'morpheme_segments',
    'id, word_id, surface, type, affix_id',
    { col: 'type', values: ['prefix', 'suffix'] },
    'surface',
  );

  const linked = segments.filter((s) => s.affix_id !== null);
  const unlinked = segments.filter((s) => s.affix_id === null);

  console.log(`\n=== MORPHEME SEGMENTS (prefix/suffix) ===`);
  console.log(`  Total: ${segments.length}  Linked: ${linked.length}  Unlinked: ${unlinked.length}`);

  // Group unlinked by surface + type
  const groups = new Map<string, { type: string; count: number; wordIds: number[] }>();
  for (const s of unlinked) {
    const key = `${s.surface}|${s.type}`;
    const g = groups.get(key) ?? { type: s.type as string, count: 0, wordIds: [] };
    g.count++;
    if (g.wordIds.length < 5) g.wordIds.push(s.word_id as number);
    groups.set(key, g);
  }

  const sorted = [...groups.entries()].sort((a, b) => b[1].count - a[1].count);

  console.log(`\n=== UNLINKED PREFIX/SUFFIX SURFACES (${sorted.length} distinct) ===`);
  console.log('  ' + 'Surface'.padEnd(16) + 'Type'.padEnd(10) + 'Count'.padEnd(8) + 'Sample word_ids');
  for (const [key, val] of sorted) {
    const surface = key.split('|')[0];
    console.log(`  ${(surface || '(empty)').padEnd(16)}${val.type.padEnd(10)}${String(val.count).padEnd(8)}${val.wordIds.join(', ')}`);
  }

  // Get sample words for context
  const sampleWordIds = new Set<number>();
  for (const [, val] of sorted) {
    for (const id of val.wordIds) sampleWordIds.add(id);
  }

  if (sampleWordIds.size > 0) {
    const ids = [...sampleWordIds].slice(0, 300);
    const words = await fetchAll<Record<string, unknown>>('words', 'id, slug, lemma');
    const wordMap = new Map<number, string>();
    for (const w of words) {
      if (ids.includes(w.id as number)) {
        wordMap.set(w.id as number, w.lemma as string);
      }
    }

    console.log(`\n=== SAMPLE WORDS (top 50 surfaces) ===`);
    for (const [key, val] of sorted.slice(0, 50)) {
      const surface = key.split('|')[0];
      const names = val.wordIds.map((id) => wordMap.get(id) ?? `?${id}`).join(', ');
      console.log(`  ${(surface || '(empty)').padEnd(12)}${val.type.padEnd(10)} → ${names}`);
    }
  }

  // 3. Also show linked segments grouped by affix_id to see what's already covered
  const linkedGroups = new Map<number, { slug: string; count: number }>();
  const affixMap = new Map<number, string>();
  for (const a of affixes) affixMap.set(a.id as number, a.slug as string);
  for (const s of linked) {
    const aid = s.affix_id as number;
    const g = linkedGroups.get(aid) ?? { slug: affixMap.get(aid) ?? '?', count: 0 };
    g.count++;
    linkedGroups.set(aid, g);
  }

  console.log(`\n=== LINKED SEGMENTS BY AFFIX ===`);
  const linkedSorted = [...linkedGroups.entries()].sort((a, b) => b[1].count - a[1].count);
  for (const [aid, val] of linkedSorted) {
    console.log(`  ${String(aid).padEnd(5)}${val.slug.padEnd(14)}${val.count} segments`);
  }
}

main().catch(console.error);
