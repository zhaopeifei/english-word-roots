import type { Metadata } from 'next';
import { AboutSection } from './index';
import { SITE_NAME, SITE_URL } from '@/content/site';
import { ROOTS, WORDS, AFFIXES } from '@/lib/content';

const description =
  "Learn about English Word Roots — a bilingual etymology atlas powered by Grimm's Law, mapping how English words grow from shared roots.";

export const metadata: Metadata = {
  title: `About | ${SITE_NAME}`,
  description,
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: `About | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}/about`,
  },
};

const AboutPage = () => {
  return (
    <AboutSection
      totalRoots={ROOTS.length}
      totalWords={WORDS.length}
      totalAffixes={AFFIXES.length}
    />
  );
};

export default AboutPage;
