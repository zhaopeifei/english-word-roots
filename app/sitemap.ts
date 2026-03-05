import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/content/site';
import { COLLECTIONS } from '@/content/collections';
import { getRootSlugs, getWordSlugs } from '@/lib/db';

export const revalidate = 86400; // regenerate sitemap at most once per day

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  const [rootSlugs, wordSlugs] = await Promise.all([
    getRootSlugs(),
    getWordSlugs(),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/home`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${SITE_URL}/root`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/explore`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
  ];

  const exploreEntries: MetadataRoute.Sitemap = COLLECTIONS.map((c) => ({
    url: `${SITE_URL}/explore/${c.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const rootEntries: MetadataRoute.Sitemap = rootSlugs.map((slug) => ({
    url: `${SITE_URL}/root/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const wordEntries: MetadataRoute.Sitemap = wordSlugs.map((slug) => ({
    url: `${SITE_URL}/word/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...exploreEntries, ...rootEntries, ...wordEntries];
}
