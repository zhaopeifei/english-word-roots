// Supabase admin client for import scripts.
// MUST import env first to load .env.local before accessing process.env.
import './env';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local');
  process.exit(1);
}

export const db = createClient(url, key);

// Batch upsert: splits array into chunks and upserts sequentially.
// Supabase has payload size limits, so we batch at 500 rows.
export async function batchUpsert(
  table: string,
  rows: Record<string, unknown>[],
  opts?: { onConflict?: string; batchSize?: number },
) {
  const batchSize = opts?.batchSize ?? 500;
  let inserted = 0;

  for (let i = 0; i < rows.length; i += batchSize) {
    const chunk = rows.slice(i, i + batchSize);
    const query = db.from(table).upsert(chunk, {
      onConflict: opts?.onConflict ?? 'slug',
      ignoreDuplicates: false,
    });
    const { error } = await query;
    if (error) {
      console.error(`  Error upserting ${table} batch ${i}-${i + chunk.length}:`, error.message);
      throw error;
    }
    inserted += chunk.length;
  }

  return inserted;
}

// Batch insert (no upsert): for tables without unique constraints like word_examples.
export async function batchInsert(
  table: string,
  rows: Record<string, unknown>[],
  batchSize = 500,
) {
  let inserted = 0;

  for (let i = 0; i < rows.length; i += batchSize) {
    const chunk = rows.slice(i, i + batchSize);
    const { error } = await db.from(table).insert(chunk);
    if (error) {
      console.error(`  Error inserting ${table} batch ${i}-${i + chunk.length}:`, error.message);
      throw error;
    }
    inserted += chunk.length;
  }

  return inserted;
}

// Lookup helper: get id-by-slug map for a table.
// Paginates to handle tables with >1000 rows (Supabase default limit).
export async function getSlugIdMap(table: string): Promise<Map<string, number>> {
  const map = new Map<string, number>();
  const PAGE = 1000;
  let offset = 0;

  while (true) {
    const { data, error } = await db
      .from(table)
      .select('id, slug')
      .range(offset, offset + PAGE - 1);
    if (error) throw error;
    if (!data || data.length === 0) break;
    for (const row of data) {
      map.set(row.slug as string, row.id as number);
    }
    if (data.length < PAGE) break;
    offset += PAGE;
  }

  return map;
}
