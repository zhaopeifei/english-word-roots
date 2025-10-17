import { HomeScreen } from '@/components/home-screen';
import { getFeaturedRoots, getTrendingWords } from '@/lib/content';

const HomePage = () => {
  const roots = getFeaturedRoots();
  const words = getTrendingWords();

  return <HomeScreen roots={roots} words={words} />;
};

export default HomePage;
