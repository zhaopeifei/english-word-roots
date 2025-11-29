'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';
import type { RootEntry } from '@/types/content';

interface RootDetailProps {
  root: RootEntry;
}

export const RootDetail = ({ root }: RootDetailProps) => {
  const { dictionary, locale } = useLanguage();
  const displayName = root.slug;
  const localizedOverview = root.overview[locale] ?? root.overview.en;
  const localizedOrigin = root.originSummary[locale] ?? root.originSummary.en;

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-widest text-brand">{dictionary.rootOverview}</p>
        <h1 className="text-4xl font-semibold text-foreground">{displayName}</h1>
        <p className="text-lg text-muted-foreground">{localizedOverview}</p>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="text-xs uppercase tracking-wide text-brand">{dictionary.variants}</p>
          <div className="flex flex-wrap gap-2">
            {root.variants.map((variant) => (
              <span key={variant} className="rounded-full border border-border px-2 py-1">
                {variant}
              </span>
            ))}
          </div>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground">{dictionary.origin}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{localizedOrigin}</p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground">{dictionary.details}</h2>
          <dl className="mt-3 space-y-4 text-sm text-muted-foreground">
            <div className="flex items-center justify-between">
              <dt>{dictionary.origin}</dt>
              <dd>{root.languageOfOrigin}</dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">{dictionary.domains}</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {root.semanticDomains.map((domain) => (
                  <span
                    key={domain}
                    className="rounded-full border border-border px-2 py-1 text-xs"
                  >
                    {domain}
                  </span>
                ))}
              </dd>
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
