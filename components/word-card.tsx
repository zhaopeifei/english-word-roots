'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { Volume2 } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';
import type { WordEntry } from '@/types/content';

// ---------------------------------------------------------------------------
// Definition text cleanup
// ---------------------------------------------------------------------------

/** Strip field markers like [计] [经] [医] and normalise line breaks */
function cleanDefinition(raw: string): string {
  return raw
    .replace(/\[[\u4e00-\u9fff]{1,4}\]\s*/g, '') // remove [计] [经] etc.
    .replace(/\\r\\n|\\r|\\n/g, '\n') // literal escaped sequences
    .replace(/\r\n|\r/g, '\n') // actual carriage returns
    .replace(/\n{2,}/g, '\n') // collapse multiple newlines
    .trim();
}

// ---------------------------------------------------------------------------
// Frequency → stars mapping
// ---------------------------------------------------------------------------

function getStarCount(word: WordEntry): number {
  if (word.collinsStars) return word.collinsStars;
  // Fallback: map frequency label to stars
  switch (word.frequency) {
    case 'common':
      return 3;
    case 'academic':
      return 2;
    case 'advanced':
      return 1;
    case 'rare':
      return 1;
    default:
      return 0;
  }
}

function FrequencyStars({ count }: { count: number }) {
  if (count === 0) return null;
  return (
    <span className="flex items-center gap-0.5" aria-label={`Frequency: ${count} stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`h-3 w-3 ${i < count ? 'text-secondary' : 'text-border'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Pronunciation button
// ---------------------------------------------------------------------------

function PronunciationButton({ lemma }: { lemma: string }) {
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    setSupported('speechSynthesis' in window);
  }, []);

  const handleSpeak = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault(); // don't navigate to word page
      e.stopPropagation();
      if (!supported) return;
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(lemma);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    },
    [supported, lemma],
  );

  if (!supported) return null;

  return (
    <button
      type="button"
      onClick={handleSpeak}
      className="text-muted-foreground hover:text-primary shrink-0 cursor-pointer rounded-full p-1 transition-colors"
      aria-label={`Play pronunciation of ${lemma}`}
    >
      <Volume2 className="h-4 w-4" />
    </button>
  );
}

// ---------------------------------------------------------------------------
// Card style rotation (consistent with roots-index)
// ---------------------------------------------------------------------------

export const wordCardStyles = [
  {
    bg: 'bg-card',
    border: 'border-[1.5px] border-primary/15 hover:border-primary',
  },
  {
    bg: 'bg-[var(--surface-purple)]',
    border: 'border-[1.5px] border-accent/15 hover:border-accent',
  },
  {
    bg: 'bg-[var(--surface-warm)]',
    border: 'border-[1.5px] border-secondary/15 hover:border-secondary',
  },
] as const;

// ---------------------------------------------------------------------------
// WordCard component
// ---------------------------------------------------------------------------

interface WordCardProps {
  word: WordEntry;
  styleIndex: number;
}

export function WordCard({ word, styleIndex }: WordCardProps) {
  const { locale } = useLanguage();
  const style = wordCardStyles[styleIndex % 3];
  const starCount = getStarCount(word);

  const rawDef = word.definition[locale] ?? word.definition.en ?? '';
  const cleaned = cleanDefinition(rawDef);

  return (
    <Link href={`/word/${word.slug}`} className="group block">
      <article
        className={`${style.bg} ${style.border} flex h-[140px] cursor-pointer flex-col rounded-[20px] p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg`}
      >
        {/* Top row: word + pronunciation */}
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-heading text-foreground truncate text-xl font-bold">
            {word.lemma}
          </h3>
          <PronunciationButton lemma={word.lemma} />
        </div>

        {/* Definition (cleaned, clamped) */}
        <p className="text-muted-foreground mt-2 line-clamp-2 whitespace-pre-line text-sm leading-relaxed">
          {cleaned}
        </p>

        {/* Bottom row: frequency stars */}
        <div className="mt-auto pt-2">
          <FrequencyStars count={starCount} />
        </div>
      </article>
    </Link>
  );
}
