'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';
import type { RootEntry, WordEntry } from '@/types/content';

interface HomeScreenProps {
  roots: RootEntry[];
  words: WordEntry[];
}

export const HomeScreen = ({ roots, words }: HomeScreenProps) => {
  const { dictionary, locale } = useLanguage();

  return (
    <div className="space-y-12">
      <section className="rounded-2xl border border-border bg-gradient-to-br from-brand/10 via-background to-background p-8 shadow-sm">
        <p className="text-sm uppercase tracking-widest text-brand">{dictionary.tagline}</p>
        <h1 className="mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
          English Word Roots
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {dictionary.heroSubtitle}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="rounded-full border border-border px-3 py-1">Next.js</span>
          <span className="rounded-full border border-border px-3 py-1">Tailwind CSS 4.0</span>
          <span className="rounded-full border border-border px-3 py-1">Static Export</span>
          <span className="rounded-full border border-border px-3 py-1">SEO-first</span>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-foreground">{dictionary.featuredRoots}</h2>
          <Link href="/root" className="text-sm font-medium text-brand hover:underline">
            {dictionary.backToRoots}
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {roots.map((root) => (
            <article key={root.slug} className="rounded-xl border border-border bg-surface p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">
                <Link href={`/root/${root.slug}`}>{root.canonicalForm}</Link>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{root.overview[locale]}</p>
              <dl className="mt-4 space-y-1 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <dt>{dictionary.origin}</dt>
                  <dd>{root.languageOfOrigin}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>{dictionary.popularity}</dt>
                  <dd>{root.popularityScore}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-foreground">{dictionary.trendingWords}</h2>
          <Link href="/explore" className="text-sm font-medium text-brand hover:underline">
            {dictionary.globalExploreCta}
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {words.map((word) => (
            <article key={word.slug} className="rounded-xl border border-border bg-surface p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">
                <Link href={`/word/${word.slug}`}>{word.lemma}</Link>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{word.definitions[locale]}</p>
              <dl className="mt-4 space-y-1 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <dt>{dictionary.popularity}</dt>
                  <dd>{word.popularityScore}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>{dictionary.relatedWords}</dt>
                  <dd>{word.relatedWords.join(', ')}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
