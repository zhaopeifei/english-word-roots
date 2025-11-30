import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { RootDetail } from './index';
import { DEFAULT_LOCALE, SITE_NAME } from '@/content/site';
import { getRootBySlug } from '@/lib/content';

export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
  const root = getRootBySlug(params.slug);

  if (!root) {
    return {
      title: SITE_NAME,
    };
  }

  return {
    title: `${root.slug} | ${SITE_NAME}`,
    description: root.originSummary[DEFAULT_LOCALE],
    openGraph: {
      title: root.slug,
      description: root.originSummary[DEFAULT_LOCALE],
    },
  };
};

const RootDetailPage = ({ params }: { params: { slug: string } }) => {
  const root = getRootBySlug(params.slug);

  if (!root) {
    notFound();
  }

  return <RootDetail root={root} />;
};

export default RootDetailPage;
