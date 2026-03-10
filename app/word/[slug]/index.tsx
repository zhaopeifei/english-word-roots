'use client';

import Link from 'next/link';
import { Volume2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/components/language-provider';
import { Breadcrumb } from '@/components/breadcrumb';
import { cn } from '@/lib/utils';
import { MasteryButtons } from '@/components/mastery-buttons';
import { useSpeech } from '@/hooks/use-speech';
import { getDetailTags } from '@/lib/tag-utils';
import type { WordEntry, MorphemeSegment, RootEntry } from '@/types/content';

interface WordDetailProps {
  word: WordEntry;
  parentRoot?: RootEntry;
}

const morphemeClass: Record<MorphemeSegment['type'], string> = {
  root: 'morpheme-root',
  stem: 'morpheme-root',
  prefix: 'morpheme-prefix',
  suffix: 'morpheme-suffix',
  connector: 'morpheme-connector',
  other: 'morpheme-connector',
};

const morphemeContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const morphemeItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

const badgeColors = [
  'bg-primary text-primary-foreground',
  'bg-accent text-accent-foreground',
  'bg-secondary text-secondary-foreground',
  'bg-primary text-primary-foreground',
  'bg-accent text-accent-foreground',
];

// ---------------------------------------------------------------------------
// Enrichment UI helpers
// ---------------------------------------------------------------------------

function getEtymologyTypeColor(type: string): string {
  const colors: Record<string, string> = {
    'root-derived': 'bg-green-50 text-green-700 dark:bg-green-900/50 dark:text-green-300',
    'native': 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300',
    'loanword': 'bg-amber-50 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300',
    'blend': 'bg-violet-50 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300',
    'onomatopoeia': 'bg-pink-50 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300',
    'eponym': 'bg-cyan-50 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300',
  };
  return colors[type] ?? 'bg-muted text-muted-foreground';
}

function getEtymologyTypeLabel(type: string, locale: string): string {
  const labels: Record<string, Record<string, string>> = {
    'root-derived': { en: 'Root-derived', zh: '词根派生' },
    'native': { en: 'Native English', zh: '原生英语' },
    'loanword': { en: 'Loanword', zh: '外来词' },
    'blend': { en: 'Blend', zh: '混合词' },
    'onomatopoeia': { en: 'Onomatopoeia', zh: '拟声词' },
    'eponym': { en: 'Eponym', zh: '人名词' },
  };
  return labels[type]?.[locale] ?? type;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export const WordDetail = ({ word, parentRoot }: WordDetailProps) => {
  const { dictionary, locale } = useLanguage();
  const localizedDefinition = word.definition[locale] ?? word.definition.en;
  const localizedMorphology = word.morphologyNote[locale] ?? word.morphologyNote.en;

  const parentRootSegment = word.rootBreakdown.find((s) => s.type === 'root' && s.rootSlug);

  const { supported: speechSupported, speakWord, speakSentence } = useSpeech();

  return (
    <article className="space-y-10">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: dictionary.home, href: '/home' },
          ...(parentRoot
            ? [{ label: parentRoot.variants[0] ?? parentRoot.slug, href: `/root/${parentRoot.slug}` }]
            : []),
          { label: word.lemma },
        ]}
      />

      {/* Header: lemma + mastery */}
      <header className="space-y-3">
        <h1 className="font-heading text-foreground text-4xl">{word.lemma}</h1>
        <MasteryButtons type="word" slug={word.slug} showLabels />
      </header>

      {/* Pronunciation pills */}
      <div className="flex flex-wrap gap-3">
        <span className="bg-card border-border inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
          <span>🇬🇧 UK</span>
          <span className="text-foreground font-mono">{word.pronunciation.uk.ipa}</span>
          {speechSupported && (
            <button
              type="button"
              onClick={() => speakWord(word.lemma, 'en-GB')}
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
              onClick={() => speakWord(word.lemma, 'en-US')}
              className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
              aria-label="Listen US pronunciation"
            >
              <Volume2 className="h-4 w-4" />
            </button>
          )}
        </span>
      </div>

      {/* Tags */}
      {word.tags && word.tags.length > 0 && (() => {
        const tags = getDetailTags(word.tags, locale);
        if (tags.length === 0) return null;
        return (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag.slug} className={`rounded-full px-2.5 py-1 text-xs font-bold ${tag.color}`}>
                {tag.label}
              </span>
            ))}
          </div>
        );
      })()}

      {/* Definition card */}
      <section className="bg-card border-border rounded-[20px] border p-6">
        <p className="text-primary text-xs font-bold uppercase tracking-wide">
          {dictionary.wordOverview}
        </p>
        <p className="text-foreground mt-2 text-xl">{localizedDefinition}</p>
      </section>

      {/* Root Breakdown */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <h2 className="font-heading text-foreground text-2xl">
            🧩 {dictionary.wordBreakdown}
          </h2>
          {/* B3: Etymology Type Badge */}
          {word.etymologyType && word.etymologyType !== 'unknown' && (
            <span className={cn('rounded-full px-2.5 py-0.5 text-xs font-semibold', getEtymologyTypeColor(word.etymologyType))}>
              {getEtymologyTypeLabel(word.etymologyType, locale)}
            </span>
          )}
        </div>

        <motion.div
          className="flex flex-wrap items-center gap-3"
          variants={morphemeContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {word.rootBreakdown.map((segment, idx) => {
            const block = (
              <div
                className={`${morphemeClass[segment.type]} flex flex-col items-center rounded-2xl px-6 py-4`}
              >
                <span className="text-lg font-bold">{segment.surface}</span>
                <span className="mt-1 text-xs opacity-80">{segment.meaning?.[locale] ?? segment.meaning?.en ?? segment.type}</span>
              </div>
            );

            const content = segment.rootSlug ? (
              <Link href={`/root/${segment.rootSlug}`}>
                {block}
              </Link>
            ) : (
              block
            );

            return (
              <motion.div key={`wrap-${idx}`} className="flex items-center gap-3" variants={morphemeItemVariants}>
                {idx > 0 && <span className="text-muted-foreground text-xl font-bold">+</span>}
                {content}
              </motion.div>
            );
          })}

          <motion.div className="flex items-center gap-3" variants={morphemeItemVariants}>
            <span className="text-muted-foreground text-xl font-bold">=</span>
            <span className="from-primary to-accent bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent">
              {word.lemma}
            </span>
          </motion.div>
        </motion.div>

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
                <div className="flex-1 space-y-1">
                  <div className="flex items-start gap-2">
                    <p className="text-foreground flex-1 text-lg">{englishText}</p>
                    {speechSupported && (
                      <button
                        type="button"
                        onClick={() => speakSentence(englishText)}
                        className="text-muted-foreground hover:text-primary mt-1 shrink-0 cursor-pointer transition-colors"
                        aria-label="Play example sentence"
                      >
                        <Volume2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                  {showTranslation && (
                    <p className="text-muted-foreground text-sm">{localizedText}</p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Collocations */}
      {word.collocations && (word.collocations[locale] ?? word.collocations.en)?.length > 0 && (
        <section className="space-y-4">
          <h2 className="font-heading text-foreground text-2xl">{dictionary.collocations}</h2>
          <div className="flex flex-wrap gap-2">
            {(word.collocations[locale] ?? word.collocations.en).map((collocation) => (
              <button
                key={collocation}
                type="button"
                onClick={() => speechSupported && speakSentence(collocation)}
                className="bg-card border-border inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-colors hover:border-primary"
              >
                {collocation}
                {speechSupported && <Volume2 className="text-muted-foreground h-3.5 w-3.5" />}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Related Words */}
      {word.relatedWords.length > 0 && (
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
      )}

      {/* Bottom back link */}
      <Link
        href={parentRoot ? `/root/${parentRoot.slug}` : '/root'}
        className="bg-card hover:bg-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition hover:text-white"
      >
        ← {parentRoot
          ? `${locale === 'zh' ? '返回词根' : 'Back to'} ${parentRoot.variants[0] ?? parentRoot.slug}`
          : dictionary.backToRoots}
      </Link>
    </article>
  );
};
