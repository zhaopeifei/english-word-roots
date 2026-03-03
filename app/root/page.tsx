import type { Metadata } from 'next';
import { RootsIndex } from './roots-index';
import { getRoots } from '@/lib/db';
import { SITE_NAME, SITE_URL } from '@/content/site';

export const revalidate = 3600; // ISR: rebuild at most once per hour

export async function generateMetadata(): Promise<Metadata> {
  const roots = await getRoots();
  const description = `Browse all ${roots.length} word roots — Latin, Greek, and Indo-European origins mapped to modern English vocabulary.`;
  return {
    title: `Roots | ${SITE_NAME}`,
    description,
    alternates: { canonical: `${SITE_URL}/root` },
    openGraph: { title: `Roots | ${SITE_NAME}`, description, url: `${SITE_URL}/root` },
  };
}

const RootIndexPage = async () => {
  const roots = await getRoots();
  return <RootsIndex roots={roots} />;
};

export default RootIndexPage;
