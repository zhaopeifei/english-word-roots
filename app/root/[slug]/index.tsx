'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/language-provider';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import type { RootEntry } from '@/types/content';
import { WORDS_BY_ROOT } from '@/content/words/index';

interface RootDetailProps {
  root: RootEntry;
}

export const RootDetail = ({ root }: RootDetailProps) => {
  const router = useRouter();
  const { dictionary, locale } = useLanguage();
  const localizedOverview = root.overview[locale] ?? root.overview.en;
  const localizedOrigin = root.originSummary[locale] ?? root.originSummary.en;
  const associatedWordEntries = WORDS_BY_ROOT[root.slug] ?? [];

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
                  className="text-foreground hover:text-primary text-xl hover:underline"
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
        {associatedWordEntries.length > 0 ? (
          <div className="border-border bg-surface/60 rounded-2xl border">
            <Table className="text-base">
              <TableBody>
                {associatedWordEntries.map((word) => {
                  const localizedDefinition = word.definition[locale] ?? word.definition.en;

                  return (
                    <TableRow key={word.slug}>
                      <TableCell className="w-50 whitespace-nowrap px-6 align-top">
                        <Link
                          href={`/word/${word.slug}`}
                          className="text-primary hover:text-brand font-medium transition-colors"
                        >
                          {word.lemma}
                        </Link>
                      </TableCell>
                      <TableCell className="text-foreground text-base leading-snug">
                        {localizedDefinition}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="text-muted-foreground text-sm">No associated words recorded yet.</div>
        )}
      </section>
    </article>
  );
};
