import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { WordDetail } from '@/components/word-detail';
import { SITE_NAME } from '@/content/site';
import { getWordBySlug, getWordPaths } from '@/lib/content';

export const dynamicParams = false;

export const generateStaticParams = () => getWordPaths();

export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
  const word = getWordBySlug(params.slug);

  if (!word) {
    return {
      title: SITE_NAME
    };
  }

  return {
    title: `${word.lemma} | ${SITE_NAME}`,
    description: word.definitions.en,
    openGraph: {
      title: word.lemma,
      description: word.definitions.en
    }
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
