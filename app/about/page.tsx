import { Metadata } from 'next';
import { AboutSection } from './index';
import { SITE_NAME } from '@/content/site';
import { ROOTS, WORDS, AFFIXES } from '@/lib/content';

export const metadata: Metadata = {
  title: `About | ${SITE_NAME}`,
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
