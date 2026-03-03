import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/content/site';
import { COLLECTIONS } from '@/content/collections';
import type { Collection } from '@/content/collections';
import {
  getRootCount,
  getRootCountByOrigin,
  getWordCountByTag,
} from '@/lib/db';
import { ExploreHub } from './index';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const description = `Browse ${COLLECTIONS.length} curated vocabulary collections — exam word lists, root families, and frequency tiers.`;
  return {
    title: `Explore | ${SITE_NAME}`,
    description,
    alternates: { canonical: `${SITE_URL}/explore` },
    openGraph: {
      title: `Explore | ${SITE_NAME}`,
      description,
      url: `${SITE_URL}/explore`,
    },
  };
}

/** Resolve the item count for a single collection. */
async function getCount(c: Collection): Promise<number> {
  const q = c.query;
  if (q.kind === 'root') {
    if (q.originLang) return getRootCountByOrigin(q.originLang);
    return getRootCount();
  }
  return getWordCountByTag(q.tagSlug);
}

const ExplorePage = async () => {
  // Fetch counts for every collection in parallel
  const counts = await Promise.all(
    COLLECTIONS.map(async (c) => ({
      slug: c.slug,
      count: await getCount(c),
    })),
  );

  const countMap: Record<string, number> = {};
  for (const { slug, count } of counts) {
    countMap[slug] = count;
  }

  return <ExploreHub counts={countMap} />;
};

export default ExplorePage;
