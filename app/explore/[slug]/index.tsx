'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';
import { CustomSelect } from '@/components/ui/custom-select';
import type { Collection } from '@/content/collections';
import type { RootEntry, SemanticDomain, WordEntry } from '@/types/content';

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface CollectionDetailProps {
  collection: Collection;
  roots: RootEntry[];
  words: WordEntry[];
}

// ---------------------------------------------------------------------------
// Shared styles (consistent with roots-index card rotation)
// ---------------------------------------------------------------------------

const cardStyles = [
  {
    bg: 'bg-card',
    border: 'border-[1.5px] border-primary/15 hover:border-primary',
    pill: 'bg-primary/10 text-primary',
    accentText: 'text-primary',
    tag: 'bg-primary/5 text-primary/80',
  },
  {
    bg: 'bg-[var(--surface-purple)]',
    border: 'border-[1.5px] border-accent/15 hover:border-accent',
    pill: 'bg-accent/10 text-accent',
    accentText: 'text-accent',
    tag: 'bg-accent/5 text-accent/80',
  },
  {
    bg: 'bg-[var(--surface-warm)]',
    border: 'border-[1.5px] border-secondary/15 hover:border-secondary',
    pill: 'bg-secondary/10 text-secondary',
    accentText: 'text-secondary',
    tag: 'bg-secondary/5 text-secondary/80',
  },
] as const;

const domainEmojiMap: Partial<Record<SemanticDomain, string>> = {
  life: '🧬', animals: '🐾', plants: '🌿', body: '🫀', health: '💊',
  nature: '🌱', water: '💧', earth: '🌍', fire: '🔥', air: '🌬️',
  light: '💡', sound: '🔊', color: '🎨', time: '⏳', space: '🚀',
  number: '🔢', position: '📍', movement: '🏃', change: '🔄', amount: '📊',
  mind: '🧠', emotion: '💛', speech: '💬', knowledge: '📚', power: '⚡',
  law: '⚖️', society: '🏛️',
};

function getEmoji(domains: SemanticDomain[]): string {
  for (const domain of domains) {
    if (domainEmojiMap[domain]) return domainEmojiMap[domain]!;
  }
  return '📖';
}

// ---------------------------------------------------------------------------
// Frequency pill
// ---------------------------------------------------------------------------

const frequencyColors: Record<string, string> = {
  common: 'bg-primary/10 text-primary',
  academic: 'bg-accent/10 text-accent',
  advanced: 'bg-secondary/10 text-secondary',
  rare: 'bg-muted text-muted-foreground',
};

// ---------------------------------------------------------------------------
// Root collection view
// ---------------------------------------------------------------------------

const RootCollectionView = ({ roots }: { roots: RootEntry[] }) => {
  const { dictionary, locale } = useLanguage();

  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('most');

  const allDomains = useMemo(() => {
    const set = new Set<string>();
    roots.forEach((r) => r.semanticDomains.forEach((d) => set.add(d)));
    return [...set].sort();
  }, [roots]);

  const domainOptions = useMemo(
    () => [
      { value: 'all', label: dictionary.allDomains },
      ...allDomains.map((d) => ({
        value: d,
        label: `${domainEmojiMap[d as SemanticDomain] ?? '📖'} ${d}`,
      })),
    ],
    [allDomains, dictionary.allDomains],
  );

  const sortOptions = useMemo(
    () => [
      { value: 'most', label: dictionary.sortMostWords },
      { value: 'fewest', label: dictionary.sortFewestWords },
      { value: 'az', label: dictionary.sortAZ },
      { value: 'za', label: dictionary.sortZA },
    ],
    [dictionary],
  );

  const filteredRoots = useMemo(() => {
    let result = roots;
    if (selectedDomain !== 'all') {
      result = result.filter((r) =>
        r.semanticDomains.includes(selectedDomain as SemanticDomain),
      );
    }
    switch (sortBy) {
      case 'az':
        result = [...result].sort((a, b) => a.slug.localeCompare(b.slug));
        break;
      case 'za':
        result = [...result].sort((a, b) => b.slug.localeCompare(a.slug));
        break;
      case 'most':
        result = [...result].sort(
          (a, b) => b.associatedWords.length - a.associatedWords.length,
        );
        break;
      case 'fewest':
        result = [...result].sort(
          (a, b) => a.associatedWords.length - b.associatedWords.length,
        );
        break;
    }
    return result;
  }, [roots, selectedDomain, sortBy]);

  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <CustomSelect
          value={selectedDomain}
          onChange={setSelectedDomain}
          aria-label={dictionary.allDomains}
          options={domainOptions}
        />
        <CustomSelect
          value={sortBy}
          onChange={setSortBy}
          aria-label={dictionary.sortMostWords}
          options={sortOptions}
        />
        <span className="text-muted-foreground text-sm">
          {dictionary.showing} {filteredRoots.length} {dictionary.of} {roots.length}
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredRoots.map((root, index) => {
          const style = cardStyles[index % 3];
          const emoji = getEmoji(root.semanticDomains);

          return (
            <Link key={root.slug} href={`/root/${root.slug}`} className="group block">
              <article
                className={`${style.bg} ${style.border} flex h-full cursor-pointer flex-col rounded-[20px] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl leading-none" role="img" aria-hidden="true">
                    {emoji}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="font-heading text-foreground text-2xl font-bold">
                      {root.variants[0] ?? root.slug}
                    </h2>
                    <span
                      className={`${style.pill} mt-2 inline-block rounded-full px-3 py-0.5 text-xs font-semibold`}
                    >
                      {root.languageOfOrigin}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mt-4 line-clamp-3 text-sm leading-relaxed">
                  {root.overview[locale]}
                </p>

                {root.semanticDomains.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {root.semanticDomains.map((domain) => (
                      <span
                        key={domain}
                        className={`${style.tag} rounded-full px-2.5 py-0.5 text-[11px] font-medium`}
                      >
                        {domain}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-auto flex items-center justify-between pt-5">
                  <span className={`${style.accentText} text-sm font-semibold`}>
                    → {root.associatedWords.length} {dictionary.words}
                  </span>
                  <span
                    className={`${style.accentText} flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] border-current opacity-0 transition-opacity duration-200 group-hover:opacity-100`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </>
  );
};

// ---------------------------------------------------------------------------
// Word collection view
// ---------------------------------------------------------------------------

const WordCollectionView = ({ words }: { words: WordEntry[] }) => {
  const { dictionary, locale } = useLanguage();

  const [posFilter, setPosFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('az');

  const posOptions = useMemo(
    () => [
      { value: 'all', label: dictionary.filterAll },
      { value: 'n.', label: dictionary.filterNoun },
      { value: 'v.', label: dictionary.filterVerb },
      { value: 'adj.', label: dictionary.filterAdj },
      { value: 'adv.', label: dictionary.filterAdv },
    ],
    [dictionary],
  );

  const sortOptions = useMemo(
    () => [
      { value: 'az', label: dictionary.sortAZ },
      { value: 'za', label: dictionary.sortZA },
      { value: 'freq', label: dictionary.sortFrequency },
    ],
    [dictionary],
  );

  const filteredWords = useMemo(() => {
    let result = words;
    if (posFilter !== 'all') {
      result = result.filter((w) => w.partOfSpeech.includes(posFilter));
    }
    switch (sortBy) {
      case 'az':
        result = [...result].sort((a, b) => a.slug.localeCompare(b.slug));
        break;
      case 'za':
        result = [...result].sort((a, b) => b.slug.localeCompare(a.slug));
        break;
      case 'freq':
        result = [...result].sort((a, b) => {
          const aRank = a.frequencyRank ?? 999999;
          const bRank = b.frequencyRank ?? 999999;
          return aRank - bRank;
        });
        break;
    }
    return result;
  }, [words, posFilter, sortBy]);

  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <CustomSelect
          value={posFilter}
          onChange={setPosFilter}
          aria-label={dictionary.filterAll}
          options={posOptions}
        />
        <CustomSelect
          value={sortBy}
          onChange={setSortBy}
          aria-label={dictionary.sortAZ}
          options={sortOptions}
        />
        <span className="text-muted-foreground text-sm">
          {dictionary.showing} {filteredWords.length} {dictionary.of} {words.length}
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredWords.map((word, index) => {
          const style = cardStyles[index % 3];

          return (
            <Link key={word.slug} href={`/word/${word.slug}`} className="group block">
              <article
                className={`${style.bg} ${style.border} flex h-full cursor-pointer flex-col rounded-[20px] p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg`}
              >
                {/* Word name + POS */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading text-foreground text-xl font-bold">
                    {word.lemma}
                  </h3>
                  {word.frequency && (
                    <span
                      className={`${frequencyColors[word.frequency] ?? ''} shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold`}
                    >
                      {word.frequency}
                    </span>
                  )}
                </div>

                {/* POS + IPA */}
                <div className="text-muted-foreground mt-1 flex flex-wrap items-center gap-2 text-xs">
                  {word.partOfSpeech.length > 0 && (
                    <span className="font-medium">
                      {word.partOfSpeech.join(', ')}
                    </span>
                  )}
                  {word.pronunciation.us.ipa && (
                    <span className="opacity-70">/{word.pronunciation.us.ipa}/</span>
                  )}
                </div>

                {/* Definition */}
                <p className="text-muted-foreground mt-3 line-clamp-2 text-sm leading-relaxed">
                  {word.definition[locale]}
                </p>

                {/* Morpheme breakdown preview */}
                {word.rootBreakdown.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1">
                    {word.rootBreakdown.map((seg, i) => {
                      let segClass = 'bg-muted text-muted-foreground';
                      if (seg.type === 'root' || seg.type === 'stem')
                        segClass = 'bg-primary/10 text-primary';
                      else if (seg.type === 'prefix')
                        segClass = 'bg-[#0891b2]/10 text-[#0891b2] dark:text-[#22d3ee]';
                      else if (seg.type === 'suffix')
                        segClass = 'bg-accent/10 text-accent';

                      return (
                        <span
                          key={`${seg.surface}-${i}`}
                          className={`${segClass} rounded px-1.5 py-0.5 text-[11px] font-medium`}
                        >
                          {seg.surface}
                        </span>
                      );
                    })}
                  </div>
                )}

                {/* Arrow */}
                <div className="mt-auto flex items-center justify-end pt-4">
                  <span
                    className={`${style.accentText} flex h-7 w-7 items-center justify-center rounded-full border-[1.5px] border-current opacity-0 transition-opacity duration-200 group-hover:opacity-100`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </>
  );
};

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export const CollectionDetail = ({
  collection,
  roots,
  words,
}: CollectionDetailProps) => {
  const { locale } = useLanguage();
  const total = collection.type === 'root' ? roots.length : words.length;
  const unit = collection.type === 'root' ? 'roots' : 'words';

  return (
    <div className="space-y-8">
      {/* Back link */}
      <Link
        href="/explore"
        className="text-muted-foreground hover:text-primary inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        {locale === 'zh' ? '全部集合' : 'All Collections'}
      </Link>

      {/* Header */}
      <header className="space-y-3">
        <h1 className="font-heading text-foreground text-4xl font-bold sm:text-5xl">
          <span className="mr-3 inline-block">{collection.icon}</span>
          {collection.name[locale]}
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg">
          {collection.description[locale]}
        </p>
        <p className="text-muted-foreground text-sm">
          {total.toLocaleString()} {unit}
        </p>
      </header>

      {/* Content */}
      {collection.type === 'root' ? (
        <RootCollectionView roots={roots} />
      ) : (
        <WordCollectionView words={words} />
      )}
    </div>
  );
};
