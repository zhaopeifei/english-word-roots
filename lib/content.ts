import { ROOTS, getRootBySlug } from '@/content/roots';
import { WORDS, getWordBySlug } from '@/content/words';

type SlugParam = {
  params: {
    slug: string;
  };
};

export const getFeaturedRoots = () => ROOTS.slice(0, 3);

export const getTrendingWords = () => WORDS.slice(0, 3);

export const getRootPaths = (): SlugParam[] => ROOTS.map((root) => ({ params: { slug: root.slug } }));

export const getWordPaths = (): SlugParam[] => WORDS.map((word) => ({ params: { slug: word.slug } }));

export { ROOTS, WORDS, getRootBySlug, getWordBySlug };
