import type { WordEntry } from '@/types/content';
import { BIO_WORDS } from './bio';
import { CHRON_WORDS } from './chron';
import { GEO_WORDS } from './geo';

export const WORDS_BY_ROOT: Record<string, WordEntry[]> = {
  bio: BIO_WORDS,
  chron: CHRON_WORDS,
  geo: GEO_WORDS,
};

export const WORDS: WordEntry[] = [...BIO_WORDS, ...CHRON_WORDS, ...GEO_WORDS];

export const getWordBySlug = (slug: string) => WORDS.find((word) => word.slug === slug);
