import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { WordDetail } from './index';
import { DEFAULT_LOCALE, SITE_NAME } from '@/content/site';
import { getWordBySlug } from '@/lib/content';

export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
  const word = getWordBySlug(params.slug);

  if (!word) {
    return {
      title: SITE_NAME,
    };
  }

  return {
    title: `${word.lemma} | ${SITE_NAME}`,
    description: word.definition[DEFAULT_LOCALE],
    openGraph: {
      title: word.lemma,
      description: word.definition[DEFAULT_LOCALE],
    },
  };
};

const WordDetailPage = ({ params }: { params: { slug: string } }) => {
  const word = getWordBySlug(params.slug);

  if (!word) {
    notFound();
  }

  return <WordDetail word={word} />;
};

export default WordDetailPage;
