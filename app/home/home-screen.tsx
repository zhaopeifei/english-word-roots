'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';
import type { RootEntry, WordEntry } from '@/types/content';

interface HomeScreenProps {
  roots: RootEntry[];
  words: WordEntry[];
}

export const HomeScreen = ({ roots, words }: HomeScreenProps) => {
  const { dictionary, locale } = useLanguage();

  return (
    <div className="space-y-12">
      <section className="from-brand/10 rounded-2xl border border-border bg-gradient-to-br via-background to-background p-8 shadow-sm">
        <p className="text-sm uppercase tracking-widest text-brand">{dictionary.tagline}</p>
        <h1 className="mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
          English Word Roots
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{dictionary.heroSubtitle}</p>
      </section>
    </div>
  );
};
