import { ROOTS, getRootBySlug } from '@/content/roots';
import { WORDS, getWordBySlug } from '@/content/words';
import { AFFIXES, getAffixBySlug, getPrefixes, getSuffixes } from '@/content/affixes';

type SlugParam = {
  params: {
    slug: string;
  };
};

export const getFeaturedRoots = () => ROOTS.slice(0, 6);

export const getTrendingWords = () => WORDS.slice(0, 6);

export const getBestBreakdownWord = () => {
  const ideal = WORDS.find(
    (w) =>
      w.rootBreakdown.length >= 3 &&
      w.rootBreakdown.some((s) => s.type === 'prefix') &&
      w.rootBreakdown.some((s) => s.type === 'root') &&
      w.rootBreakdown.some((s) => s.type === 'suffix'),
  );
  return ideal ?? WORDS.find((w) => w.rootBreakdown.length >= 3) ?? WORDS[0];
};

export const getRootPaths = (): SlugParam[] =>
  ROOTS.map((root) => ({ params: { slug: root.slug } }));

export const getWordPaths = (): SlugParam[] =>
  WORDS.map((word) => ({ params: { slug: word.slug } }));

export const getAffixPaths = (): SlugParam[] =>
  AFFIXES.map((affix) => ({ params: { slug: affix.slug } }));

export {
  ROOTS,
  WORDS,
  AFFIXES,
  getRootBySlug,
  getWordBySlug,
  getAffixBySlug,
  getPrefixes,
  getSuffixes,
};
