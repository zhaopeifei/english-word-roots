import type { Metadata } from 'next';
import { RootsIndex } from './roots-index';
import { ROOTS } from '@/lib/content';
import { SITE_NAME, SITE_URL } from '@/content/site';

const description = `Browse all ${ROOTS.length} word roots — Latin, Greek, and Indo-European origins mapped to modern English vocabulary.`;

export const metadata: Metadata = {
  title: `Roots | ${SITE_NAME}`,
  description,
  alternates: { canonical: `${SITE_URL}/root` },
  openGraph: {
    title: `Roots | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}/root`,
  },
};

const RootIndexPage = () => {
  return <RootsIndex roots={ROOTS} />;
};

export default RootIndexPage;
