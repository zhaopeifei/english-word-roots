'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';
import type { RootEntry } from '@/types/content';

interface RootDetailProps {
  root: RootEntry;
}

export const RootDetail = ({ root }: RootDetailProps) => {
  const { dictionary, locale } = useLanguage();

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-widest text-brand">{dictionary.rootOverview}</p>
        <h1 className="text-4xl font-semibold text-foreground">{root.canonicalForm}</h1>
        <p className="text-lg text-muted-foreground">{root.overview[locale]}</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground">{dictionary.origin}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{root.originSummary}</p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground">Analytics</h2>
          <dl className="mt-3 space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center justify-between">
              <dt>{dictionary.popularity}</dt>
              <dd>{root.popularityScore}</dd>
            </div>
            <div className="flex flex-wrap gap-2">
              {root.semanticDomain.map((domain) => (
                <span key={domain} className="rounded-full border border-border px-2 py-1 text-xs">
                  {domain}
                </span>
              ))}
            </div>
          </dl>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">{dictionary.relatedRoots}</h2>
        <div className="flex flex-wrap gap-2">
          {root.relatedRoots.map((slug) => (
            <Link
              key={slug}
              href={`/root/${slug}`}
              className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-brand hover:text-foreground"
            >
              {slug}
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">{dictionary.associatedWords}</h2>
        <div className="flex flex-wrap gap-2">
          {root.associatedWords.map((wordSlug) => (
            <Link
              key={wordSlug}
              href={`/word/${wordSlug}`}
              className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-brand hover:text-foreground"
            >
              {wordSlug}
            </Link>
          ))}
        </div>
      </section>

      <Link
        href="/root"
        className="inline-flex items-center text-sm font-medium text-brand transition-colors hover:underline"
      >
        ← {dictionary.backToRoots}
      </Link>
    </article>
  );
};
