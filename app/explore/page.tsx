import type { Metadata } from 'next';
import { ExploreScreen } from './explore-screen';
import { ROOTS, WORDS } from '@/lib/content';
import { SITE_NAME } from '@/content/site';

export const metadata: Metadata = {
  title: `Explore | ${SITE_NAME}`
};

const ExplorePage = () => {
  return <ExploreScreen roots={ROOTS} words={WORDS} />;
};

export default ExplorePage;
