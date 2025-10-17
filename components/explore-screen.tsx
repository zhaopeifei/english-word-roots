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
    words: filteredWords.length
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

      <div className="flex flex-wrap items-center gap-3">
        {(['all', 'roots', 'words'] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`rounded-full border px-4 py-1 text-sm transition-colors ${
              activeTab === tab ? 'border-brand bg-brand text-white' : 'border-border text-muted-foreground hover:text-foreground'
            }`}
          >
            {dictionary[tab] ?? tab}
            <span className="ml-2 rounded-full bg-background/60 px-2 py-0.5 text-xs text-muted-foreground">
              {tabCounts[tab]}
            </span>
          </button>
        ))}
      </div>

      {tabCounts[activeTab] === 0 && (
        <p className="rounded-lg border border-dashed border-border p-6 text-center text-muted-foreground">
          {dictionary.noContent}
        </p>
      )}

      <div className="grid gap-10 md:grid-cols-2">
        {shouldShowRoots && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">{dictionary.roots}</h2>
            <div className="space-y-4">
              {filteredRoots.map((root) => (
                <article key={root.slug} className="rounded-xl border border-border bg-surface p-5 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground">
                    <Link href={`/root/${root.slug}`}>{root.canonicalForm}</Link>
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{root.overview[locale]}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                    {root.semanticDomain.map((domain) => (
                      <span key={domain} className="rounded-full border border-border px-2 py-1">
                        {domain}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {shouldShowWords && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">{dictionary.words}</h2>
            <div className="space-y-4">
              {filteredWords.map((word) => (
                <article key={word.slug} className="rounded-xl border border-border bg-surface p-5 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground">
                    <Link href={`/word/${word.slug}`}>{word.lemma}</Link>
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{word.definitions[locale]}</p>
                  <div className="mt-3 text-xs text-muted-foreground">
                    <span className="font-semibold">{dictionary.wordBreakdown}:</span> {word.rootBreakdown.join(' + ')}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
