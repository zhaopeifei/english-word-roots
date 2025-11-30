'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/language-provider';
import type { WordEntry } from '@/types/content';

interface WordDetailProps {
  word: WordEntry;
}

export const WordDetail = ({ word }: WordDetailProps) => {
  const router = useRouter();
  const { dictionary, locale } = useLanguage();
  const localizedDefinition = word.definition[locale] ?? word.definition.en;
  const localizedMorphology = word.morphologyNote[locale] ?? word.morphologyNote.en;
  const breakdownDisplay = word.rootBreakdown.map((segment) => segment.surface).join(' + ');

  return (
    <article className="space-y-10">
      <header className="flex items-center justify-between gap-4">
        <h1 className="text-foreground text-4xl font-semibold">{word.slug}</h1>
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

      <div className="space-y-1">
        <p className="text-primary/60 text-xs font-medium uppercase tracking-wide">Lemma</p>
        <p className="text-foreground text-3xl">{word.lemma}</p>
      </div>

      <section className="border-border bg-surface space-y-6 rounded-2xl border p-6 shadow-sm">
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-primary/60 text-xs font-medium tracking-wide">Definition</p>
            <p className="text-foreground text-xl">{localizedDefinition}</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1">
            <p className="text-primary/60 text-xs font-medium tracking-wide">UK IPA</p>
            <p className="text-foreground text-xl">{word.pronunciation.uk.ipa}</p>
          </div>
          <div className="space-y-1">
            <p className="text-primary/60 text-xs font-medium tracking-wide">US IPA</p>
            <p className="text-foreground text-xl">{word.pronunciation.us.ipa}</p>
          </div>
        </div>
      </section>

      <section className="space-y-1">
        <p className="text-primary/60 text-xs font-medium tracking-wide">
          {dictionary.wordBreakdown}
        </p>
        <p className="text-foreground text-2xl">{breakdownDisplay}</p>
        <p className="text-muted-foreground text-lg">{localizedMorphology}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-primary/60 text-xs font-medium tracking-wide">{dictionary.examples}</h2>
        <ul className="mt-2 list-disc space-y-3 pl-5">
          {word.examples.map((example, idx) => {
            const englishSentences = example.en ?? [];
            const localizedSentences = example[locale] ?? [];
            const englishText = englishSentences.join(' ');
            const localizedText = localizedSentences.join(' ');
            const showTranslation = locale !== 'en' && localizedText.length > 0;

            return (
              <li key={`${englishText}-${idx}`} className="space-y-1">
                <p className="text-foreground text-lg">{englishText}</p>
                {showTranslation && (
                  <p className="text-muted-foreground text-sm">{localizedText}</p>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-primary/60 text-xs font-medium tracking-wide">
          {dictionary.relatedWords}
        </h2>
        <div className="flex flex-wrap gap-2">
          {word.relatedWords.map((related) => (
            <Link
              key={related}
              href={`/word/${related}`}
              className="border-border text-muted-foreground hover:border-brand hover:text-foreground rounded-full border px-3 py-1 text-sm transition-colors"
            >
              {related}
            </Link>
          ))}
        </div>
      </section>

      <Link
        href="/explore"
        className="text-brand inline-flex items-center text-sm font-medium transition-colors hover:underline"
      >
        ← {dictionary.backToWords}
      </Link>
    </article>
  );
};
