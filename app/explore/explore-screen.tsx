'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useLanguage } from '@/components/language-provider';
import type { RootEntry, WordEntry } from '@/types/content';

interface ExploreScreenProps {
  roots: RootEntry[];
  words: WordEntry[];
}

type TabKey = 'roots' | 'words' | 'all';

export const ExploreScreen = ({ roots, words }: ExploreScreenProps) => {
  const { dictionary, locale } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabKey>('all');
  const [query, setQuery] = useState('');

  const filteredRoots = useMemo(() => {
    return roots.filter((root) => root.canonicalForm.toLowerCase().includes(query.toLowerCase()));
  }, [roots, query]);

  const filteredWords = useMemo(() => {
    return words.filter((word) => word.lemma.toLowerCase().includes(query.toLowerCase()));
  }, [words, query]);

  const tabCounts: Record<TabKey, number> = {
    all: filteredRoots.length + filteredWords.length,
    roots: filteredRoots.length,
    words: filteredWords.length,
  };

  const shouldShowRoots = activeTab === 'all' || activeTab === 'roots';
  const shouldShowWords = activeTab === 'all' || activeTab === 'words';

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold text-foreground">Explore</h1>
        <p className="text-lg text-muted-foreground">{dictionary.exploreIntro}</p>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by root or word"
          className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </header>
    </div>
  );
};
