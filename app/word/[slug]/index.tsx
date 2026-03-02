'use client';

import Link from 'next/link';
import { Volume2 } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { useLanguage } from '@/components/language-provider';
import { Breadcrumb } from '@/components/breadcrumb';
import { getRootBySlug } from '@/lib/content';
import type { WordEntry, MorphemeSegment } from '@/types/content';

interface WordDetailProps {
  word: WordEntry;
}

const morphemeClass: Record<MorphemeSegment['type'], string> = {
  root: 'morpheme-root',
  prefix: 'morpheme-prefix',
  suffix: 'morpheme-suffix',
  connector: 'morpheme-connector',
  other: 'morpheme-connector',
};

const badgeColors = [
  'bg-primary text-primary-foreground',
  'bg-accent text-accent-foreground',
  'bg-secondary text-secondary-foreground',
  'bg-primary text-primary-foreground',
  'bg-accent text-accent-foreground',
];

export const WordDetail = ({ word }: WordDetailProps) => {
  const { dictionary, locale } = useLanguage();
  const localizedDefinition = word.definition[locale] ?? word.definition.en;
  const localizedMorphology = word.morphologyNote[locale] ?? word.morphologyNote.en;

  const parentRootSegment = word.rootBreakdown.find((s) => s.type === 'root' && s.rootSlug);
  const parentRoot = parentRootSegment?.rootSlug
    ? getRootBySlug(parentRootSegment.rootSlug)
    : undefined;

  const [speechSupported, setSpeechSupported] = useState(false);

  useEffect(() => {
    setSpeechSupported('speechSynthesis' in window);
  }, []);

  const handleSpeak = useCallback((text: string, lang: 'en-GB' | 'en-US') => {
    if (!speechSupported) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }, [speechSupported]);

  return (
    <article className="space-y-10">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: dictionary.home, href: '/home' },
          { label: dictionary.roots, href: '/root' },
          ...(parentRoot
            ? [{ label: parentRoot.variants[0] ?? parentRoot.slug, href: `/root/${parentRoot.slug}` }]
            : []),
          { label: word.lemma },
        ]}
      />

      {/* Header: lemma */}
      <header>
        <h1 className="font-heading text-foreground text-4xl">{word.lemma}</h1>
      </header>

      {/* Pronunciation pills */}
      <div className="flex flex-wrap gap-3">
        <span className="bg-card border-border inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
          <span>🇬🇧 UK</span>
          <span className="text-foreground font-mono">{word.pronunciation.uk.ipa}</span>
          {speechSupported && (
            <button
              type="button"
              onClick={() => handleSpeak(word.lemma, 'en-GB')}
              className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
              aria-label="Listen UK pronunciation"
            >
              <Volume2 className="h-4 w-4" />
            </button>
          )}
        </span>
        <span className="bg-card border-border inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
          <span>🇺🇸 US</span>
          <span className="text-foreground font-mono">{word.pronunciation.us.ipa}</span>
          {speechSupported && (
            <button
              type="button"
              onClick={() => handleSpeak(word.lemma, 'en-US')}
              className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
              aria-label="Listen US pronunciation"
            >
              <Volume2 className="h-4 w-4" />
            </button>
          )}
        </span>
      </div>

      {/* Definition card */}
      <section className="bg-card border-border rounded-[20px] border p-6">
        <p className="text-primary text-xs font-bold uppercase tracking-wide">
          {dictionary.wordOverview}
        </p>
        <p className="text-foreground mt-2 text-xl">{localizedDefinition}</p>
      </section>

      {/* Root Breakdown */}
      <section className="space-y-4">
        <h2 className="font-heading text-foreground text-2xl">🧩 {dictionary.wordBreakdown}</h2>

        <div className="flex flex-wrap items-center gap-3">
          {word.rootBreakdown.map((segment, idx) => {
            const block = (
              <div
                key={`${segment.surface}-${idx}`}
                className={`${morphemeClass[segment.type]} flex flex-col items-center rounded-2xl px-6 py-4`}
              >
                <span className="text-lg font-bold">{segment.surface}</span>
                <span className="mt-1 text-xs opacity-80">{segment.type}</span>
              </div>
            );

            const content = segment.rootSlug ? (
              <Link key={`${segment.surface}-${idx}`} href={`/root/${segment.rootSlug}`}>
                {block}
              </Link>
            ) : (
              block
            );

            return (
              <div key={`wrap-${idx}`} className="flex items-center gap-3">
                {idx > 0 && <span className="text-muted-foreground text-xl font-bold">+</span>}
                {content}
              </div>
            );
          })}

          <span className="text-muted-foreground text-xl font-bold">=</span>
          <span className="from-primary to-accent bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
            {word.lemma}
          </span>
        </div>

        {/* Morphology note */}
        <p className="text-muted-foreground">{localizedMorphology}</p>
      </section>

      {/* Examples */}
      <section className="space-y-4">
        <h2 className="font-heading text-foreground text-2xl">{dictionary.examples}</h2>

        <ul className="space-y-4">
          {word.examples.map((example, idx) => {
            const englishSentences = example.en ?? [];
            const localizedSentences = example[locale] ?? [];
            const englishText = englishSentences.join(' ');
            const localizedText = localizedSentences.join(' ');
            const showTranslation = locale !== 'en' && localizedText.length > 0;

            return (
              <li key={`${englishText}-${idx}`} className="flex items-start gap-4">
                <span
                  className={`${badgeColors[idx % badgeColors.length]} flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold`}
                >
                  {idx + 1}
                </span>
                <div className="space-y-1">
                  <p className="text-foreground text-lg">{englishText}</p>
                  {showTranslation && (
                    <p className="text-muted-foreground text-sm">{localizedText}</p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Related Words */}
      <section className="space-y-4">
        <h2 className="font-heading text-foreground text-2xl">{dictionary.relatedWords}</h2>
        <div className="flex flex-wrap gap-2">
          {word.relatedWords.map((related) => (
            <Link
              key={related}
              href={`/word/${related}`}
              className="border-border hover:border-primary hover:text-primary rounded-full border px-4 py-2 text-sm transition-colors"
            >
              {related}
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom back link */}
      <Link
        href="/root"
        className="bg-card hover:bg-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition hover:text-white"
      >
        ← {dictionary.backToRoots}
      </Link>
    </article>
  );
};
