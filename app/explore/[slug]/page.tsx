import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SITE_NAME, SITE_URL } from '@/content/site';
import { COLLECTIONS, getCollectionBySlug } from '@/content/collections';
import type { Collection } from '@/content/collections';
import {
  getRoots,
  getRootsByOrigin,
  getWordsByTag,
} from '@/lib/db';
import { CollectionDetail } from './index';
import type { RootEntry, WordEntry } from '@/types/content';

export const dynamic = 'force-dynamic';

// Pre-declare all valid slugs for static generation
export async function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return {};

  const title = `${collection.name.en} | ${SITE_NAME}`;
  const description = collection.description.en;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/explore/${slug}` },
    openGraph: { title, description, url: `${SITE_URL}/explore/${slug}` },
  };
}

/** Fetch roots for a root-type collection. */
async function fetchRoots(collection: Collection): Promise<RootEntry[]> {
  const q = collection.query;
  if (q.kind !== 'root') return [];

  let roots: RootEntry[];
  if (q.originLang) {
    roots = await getRootsByOrigin(q.originLang);
  } else {
    roots = await getRoots();
  }

  // Sort by word count (descending) for top-roots style
  if (q.sortBy === 'word-count') {
    roots.sort((a, b) => b.associatedWords.length - a.associatedWords.length);
  }

  return roots;
}

/** Fetch words for a word-type collection. */
async function fetchWords(collection: Collection): Promise<WordEntry[]> {
  const q = collection.query;
  if (q.kind !== 'word') return [];
  return getWordsByTag(q.tagSlug);
}

const CollectionPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();

  const roots = collection.type === 'root' ? await fetchRoots(collection) : [];
  const words = collection.type === 'word' ? await fetchWords(collection) : [];

  return (
    <CollectionDetail
      collection={collection}
      roots={roots}
      words={words}
    />
  );
};

export default CollectionPage;
