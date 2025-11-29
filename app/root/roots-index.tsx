'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';
import type { RootEntry } from '@/types/content';

interface RootsIndexProps {
  roots: RootEntry[];
}

export const RootsIndex = ({ roots }: RootsIndexProps) => {
  const { dictionary, locale } = useLanguage();

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold text-foreground">{dictionary.roots}</h1>
        <p className="text-lg text-muted-foreground">{dictionary.rootOverview}</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {roots.map((root) => (
          <article key={root.slug} className="rounded-xl border border-border bg-surface p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">
              <Link href={`/root/${root.slug}`}>{root.canonicalForm}</Link>
            </h2>
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
    </div>
  );
};
