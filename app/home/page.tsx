import type { Metadata } from 'next';
import { HomeScreen } from './index';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/content/site';
import { getRoots, getFeaturedWords, getBestBreakdownWord, getWordCount, getAffixCount } from '@/lib/db';

export const dynamic = 'force-dynamic';

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

const HomePage = async () => {
  const allRoots = await getRoots();
  const roots = allRoots.slice(0, 6);
  const words = await getFeaturedWords(6);
  const wordCount = await getWordCount();
  const affixCount = await getAffixCount();
  const breakdownWord = await getBestBreakdownWord() ?? words[0];

  return (
    <HomeScreen
      roots={roots}
      words={words}
      totalRoots={allRoots.length}
      totalWords={wordCount}
      totalAffixes={affixCount}
      breakdownWord={breakdownWord}
    />
  );
};

export default HomePage;
