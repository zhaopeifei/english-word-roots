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
              <Link href={`/root/${root.slug}`}>{root.variants[0] ?? root.slug}</Link>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">{root.overview[locale]}</p>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p className="text-xs uppercase tracking-wide text-brand">{dictionary.variants}</p>
              <div className="flex flex-wrap gap-2">
                {root.variants.map((variant) => (
                  <span key={variant} className="rounded-full border border-border px-2 py-0.5">
                    {variant}
                  </span>
                ))}
              </div>
            </div>
            <dl className="mt-4 space-y-3 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <dt>{dictionary.origin}</dt>
                <dd>{root.languageOfOrigin}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">{dictionary.domains}</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {root.semanticDomains.map((domain) => (
                    <span key={domain} className="rounded-full border border-border px-2 py-0.5 text-xs">
                      {domain}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
};
