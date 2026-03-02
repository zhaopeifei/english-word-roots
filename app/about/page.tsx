import type { Metadata } from 'next';
import { AboutSection } from './index';
import { SITE_NAME, SITE_URL } from '@/content/site';
import { getRootCount, getWordCount, getAffixCount } from '@/lib/db';

export const revalidate = 3600;

const description =
  "Learn about English Word Roots — a bilingual etymology atlas powered by Grimm's Law. Discover how one root unlocks an entire word family.";

export const metadata: Metadata = {
  title: `About | ${SITE_NAME}`,
  description,
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: { title: `About | ${SITE_NAME}`, description, url: `${SITE_URL}/about` },
};

const AboutPage = async () => {
  const [totalRoots, totalWords, totalAffixes] = await Promise.all([
    getRootCount(),
    getWordCount(),
    getAffixCount(),
  ]);
  return (
    <AboutSection
      totalRoots={totalRoots}
      totalWords={totalWords}
      totalAffixes={totalAffixes}
    />
  );
};

export default AboutPage;
