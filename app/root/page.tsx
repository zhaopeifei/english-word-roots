import type { Metadata } from 'next';
import { RootsIndex } from './roots-index';
import { ROOTS } from '@/lib/content';
import { SITE_NAME } from '@/content/site';

export const metadata: Metadata = {
  title: `Roots | ${SITE_NAME}`,
};

const RootIndexPage = () => {
  return <RootsIndex roots={ROOTS} />;
};

export default RootIndexPage;
