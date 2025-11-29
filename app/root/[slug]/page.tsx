import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { RootDetail } from './root-detail';
import { SITE_NAME } from '@/content/site';
import { getRootBySlug, getRootPaths } from '@/lib/content';

export const dynamicParams = false;

export const generateStaticParams = () => getRootPaths();

export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
  const root = getRootBySlug(params.slug);

  if (!root) {
    return {
      title: SITE_NAME
    };
  }

  return {
    title: `${root.canonicalForm} | ${SITE_NAME}`,
    description: root.originSummary,
    openGraph: {
      title: root.canonicalForm,
      description: root.originSummary
    }
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
