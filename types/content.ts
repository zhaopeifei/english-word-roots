import type { Locale } from '@/content/site';

export interface RootEntry {
  slug: string;
  canonicalForm: string;
  languageOfOrigin: string;
  originSummary: string;
  semanticDomain: string[];
  popularityScore: number;
  relatedRoots: string[];
  associatedWords: string[];
  overview: Record<Locale, string>;
}

export interface WordEntry {
  slug: string;
  lemma: string;
  definitions: Record<Locale, string>;
  example: Record<Locale, string>;
  rootBreakdown: string[];
  relatedWords: string[];
  popularityScore: number;
}
