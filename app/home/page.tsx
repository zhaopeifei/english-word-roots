import { HomeScreen } from './index';
import {
  ROOTS,
  WORDS,
  AFFIXES,
  getFeaturedRoots,
  getTrendingWords,
  getBestBreakdownWord,
} from '@/lib/content';

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
