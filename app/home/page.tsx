import type { Metadata } from 'next';
import { HomeScreen } from './index';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/content/site';
import {
  ROOTS,
  WORDS,
  AFFIXES,
  getFeaturedRoots,
  getTrendingWords,
  getBestBreakdownWord,
} from '@/lib/content';

export const metadata: Metadata = {
  title: `Home | ${SITE_NAME}`,
  description: SITE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/home` },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/home`,
  },
};

const HomePage = () => {
  const roots = getFeaturedRoots();
  const words = getTrendingWords();
  const breakdownWord = getBestBreakdownWord();

  return (
    <HomeScreen
      roots={roots}
      words={words}
      totalRoots={ROOTS.length}
      totalWords={WORDS.length}
      totalAffixes={AFFIXES.length}
      breakdownWord={breakdownWord}
    />
  );
};

export default HomePage;
