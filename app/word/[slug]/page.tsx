import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { WordDetail } from './index';
import { DEFAULT_LOCALE, SITE_NAME, SITE_URL } from '@/content/site';
import { getRootBySlug, getWordBySlug, WORDS } from '@/lib/content';

export const generateStaticParams = () =>
  WORDS.map((word) => ({ slug: word.slug }));

export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
  const word = getWordBySlug(params.slug);

  if (!word) {
    return { title: SITE_NAME };
  }

  const title = `${word.lemma} — ${word.definition[DEFAULT_LOCALE]}`;
  const description = `${word.lemma}: ${word.definition[DEFAULT_LOCALE]}. ${word.morphologyNote[DEFAULT_LOCALE]}`;
  const url = `${SITE_URL}/word/${word.slug}`;

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

const WordDetailPage = ({ params }: { params: { slug: string } }) => {
  const word = getWordBySlug(params.slug);

  if (!word) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: word.lemma,
    description: word.definition[DEFAULT_LOCALE],
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: `${SITE_URL}/word/${word.slug}`,
  };

  const parentRootSegment = word.rootBreakdown.find((s) => s.type === 'root' && s.rootSlug);
  const parentRoot = parentRootSegment?.rootSlug ? getRootBySlug(parentRootSegment.rootSlug) : undefined;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Roots', item: `${SITE_URL}/root` },
      ...(parentRoot ? [{
        '@type': 'ListItem', position: 3,
        name: parentRoot.variants[0] ?? parentRoot.slug,
        item: `${SITE_URL}/root/${parentRoot.slug}`,
      }] : []),
      {
        '@type': 'ListItem', position: parentRoot ? 4 : 3,
        name: word.lemma,
        item: `${SITE_URL}/word/${word.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <WordDetail word={word} />
    </>
  );
};

export default WordDetailPage;
