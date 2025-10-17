import type { MetadataRoute } from 'next';
import { ROOTS, WORDS } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.englishwordroots.com';
  const staticRoutes = ['/', '/home', '/about', '/explore', '/root'].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString()
  }));

  const rootEntries = ROOTS.map((root) => ({
    url: `${baseUrl}/root/${root.slug}`,
    lastModified: new Date().toISOString()
  }));

  const wordEntries = WORDS.map((word) => ({
    url: `${baseUrl}/word/${word.slug}`,
    lastModified: new Date().toISOString()
  }));

  return [...staticRoutes, ...rootEntries, ...wordEntries];
}
