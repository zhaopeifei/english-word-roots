import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { RootDetail } from './index';
import { DEFAULT_LOCALE, SITE_NAME, SITE_URL } from '@/content/site';
import { getRootBySlug, ROOTS } from '@/lib/content';

export const generateStaticParams = () =>
  ROOTS.map((root) => ({ slug: root.slug }));

export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
  const root = getRootBySlug(params.slug);

  if (!root) {
    return { title: SITE_NAME };
  }

  const title = `${root.variants.join('/')} — ${root.meaning[DEFAULT_LOCALE]}`;
  const description = root.originSummary[DEFAULT_LOCALE];
  const url = `${SITE_URL}/root/${root.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
};

const RootDetailPage = ({ params }: { params: { slug: string } }) => {
  const root = getRootBySlug(params.slug);

  if (!root) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: root.variants.join(', '),
    description: root.originSummary[DEFAULT_LOCALE],
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: `${SITE_URL}/root/${root.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RootDetail root={root} />
    </>
  );
};

export default RootDetailPage;
