import type { MetadataRoute } from 'next';
import { ROOTS, WORDS } from '@/lib/content';
import { SITE_URL } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/home`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${SITE_URL}/root`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
  ];

  const rootEntries: MetadataRoute.Sitemap = ROOTS.map((root) => ({
    url: `${SITE_URL}/root/${root.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const wordEntries: MetadataRoute.Sitemap = WORDS.map((word) => ({
    url: `${SITE_URL}/word/${word.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...rootEntries, ...wordEntries];
}
