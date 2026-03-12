import type { Metadata } from 'next';
import { Suspense } from 'react';
import { SITE_NAME, SITE_URL } from '@/content/site';
import { getAllArticles } from '@/lib/content/articles';
import { ArticleList } from '@/components/mdx/article-list';

export const metadata: Metadata = {
  title: `Read | ${SITE_NAME}`,
  description:
    'Read classic articles from AI, science, business, and more — with vocabulary annotations.',
  alternates: { canonical: `${SITE_URL}/read` },
  openGraph: {
    title: `Read | ${SITE_NAME}`,
    description:
      'Read classic articles from AI, science, business, and more — with vocabulary annotations.',
    url: `${SITE_URL}/read`,
  },
};

export default async function ReadPage() {
  const articles = await getAllArticles('read');

  return (
    <Suspense>
      <ArticleList
        articles={articles}
        title={{
          en: 'Read',
          zh: '阅读',
        }}
        subtitle={{
          en: 'Classic articles with vocabulary highlights — learn English through great writing.',
          zh: '经典文章精读，在阅读中提升词汇量。',
        }}
      />
    </Suspense>
  );
}
