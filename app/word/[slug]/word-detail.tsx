'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';
import type { WordEntry } from '@/types/content';

interface WordDetailProps {
  word: WordEntry;
}

export const WordDetail = ({ word }: WordDetailProps) => {
  const { dictionary, locale } = useLanguage();

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-widest text-brand">{dictionary.wordOverview}</p>
        <h1 className="text-4xl font-semibold text-foreground">{word.lemma}</h1>
        <p className="text-lg text-muted-foreground">{word.definitions[locale]}</p>
      </header>

      <section className="rounded-xl border border-border bg-surface p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">{dictionary.wordBreakdown}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{word.rootBreakdown.join(' + ')}</p>
      </section>

      <section className="rounded-xl border border-border bg-surface p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">{dictionary.example}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{word.example[locale]}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-foreground">{dictionary.relatedWords}</h2>
        <div className="flex flex-wrap gap-2">
          {word.relatedWords.map((related) => (
            <Link
              key={related}
              href={`/word/${related}`}
              className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-brand hover:text-foreground"
            >
              {related}
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-surface p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">{dictionary.popularity}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{word.popularityScore}</p>
      </section>

      <Link
        href="/explore"
        className="inline-flex items-center text-sm font-medium text-brand transition-colors hover:underline"
      >
        ← {dictionary.backToWords}
      </Link>
    </article>
  );
};
