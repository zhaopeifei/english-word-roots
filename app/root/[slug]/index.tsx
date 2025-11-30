'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/language-provider';
import type { RootEntry } from '@/types/content';

interface RootDetailProps {
  root: RootEntry;
}

export const RootDetail = ({ root }: RootDetailProps) => {
  const router = useRouter();
  const { dictionary, locale } = useLanguage();
  const localizedOverview = root.overview[locale] ?? root.overview.en;
  const localizedOrigin = root.originSummary[locale] ?? root.originSummary.en;

  return (
    <article className="space-y-10">
      <header className="flex items-center justify-between gap-4">
        <h1 className="text-foreground text-4xl font-semibold">{root.slug}</h1>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          className="text-brand hover:bg-primary/10 cursor-pointer rounded-full"
          aria-label={locale === 'zh' ? '返回' : 'Back'}
        >
          <ArrowLeft className="h-5 w-5" aria-hidden />
        </Button>
      </header>

      <section className="border-border bg-surface rounded-2xl border p-6 shadow-sm">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-1">
            <p className="text-primary/60 text-xs font-medium tracking-wide">
              {dictionary.variants}
            </p>
            <p className="text-foreground text-xl">{root.variants.join(', ')}</p>
          </div>
          <div className="space-y-1">
            <p className="text-primary/60 text-xs font-medium tracking-wide">{dictionary.origin}</p>
            <p className="text-foreground text-xl">{root.languageOfOrigin}</p>
          </div>
          <div className="space-y-1">
            <p className="text-primary/60 text-xs font-medium tracking-wide">
              {dictionary.domains}
            </p>
            <div className="text-foreground flex flex-wrap gap-2 text-xl">
              {root.semanticDomains.join(', ')}
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-primary/60 text-xs font-medium tracking-wide">
              {dictionary.relatedRoots}
            </p>
            <div className="flex flex-wrap gap-2">
              {root.relatedRoots.map((slug) => (
                <Link
                  key={slug}
                  href={`/root/${slug}`}
                  className="text-foreground hover:text-primary text-xl underline"
                >
                  {slug}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-1">
        <h3 className="text-primary/60 text-xs">{dictionary.origin}</h3>
        <p className="text-foregroud text-2xl">{localizedOrigin}</p>
      </section>

      <section className="space-y-1">
        <h3 className="text-primary/60 text-xs">{dictionary.rootOverview}</h3>
        <p className="text-foregroud text-2xl">{localizedOverview}</p>
      </section>

      <section className="space-y-4">
        <h3 className="text-primary/60 text-xs">{dictionary.associatedWords}</h3>
        <div className="flex flex-wrap gap-2">
          {root.associatedWords.map((wordSlug) => (
            <Link
              key={wordSlug}
              href={`/word/${wordSlug}`}
              className="border-border text-muted-foreground hover:border-brand hover:text-foreground rounded-full border px-3 py-1 text-sm transition-colors"
            >
              {wordSlug}
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
};
