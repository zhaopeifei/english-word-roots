'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useLanguage } from '@/components/language-provider';
import { CustomSelect } from '@/components/ui/custom-select';
import type { RootEntry, SemanticDomain } from '@/types/content';

interface RootsIndexProps {
  roots: RootEntry[];
}

const domainEmojiMap: Partial<Record<SemanticDomain, string>> = {
  life: '🧬',
  animals: '🐾',
  plants: '🌿',
  body: '🫀',
  health: '💊',
  nature: '🌱',
  water: '💧',
  earth: '🌍',
  fire: '🔥',
  air: '🌬️',
  light: '💡',
  sound: '🔊',
  color: '🎨',
  time: '⏳',
  space: '🚀',
  number: '🔢',
  position: '📍',
  movement: '🏃',
  change: '🔄',
  amount: '📊',
  mind: '🧠',
  emotion: '💛',
  speech: '💬',
  knowledge: '📚',
  power: '⚡',
  law: '⚖️',
  society: '🏛️',
};

function getEmoji(domains: SemanticDomain[]): string {
  for (const domain of domains) {
    if (domainEmojiMap[domain]) return domainEmojiMap[domain]!;
  }
  return '📖';
}

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

export const RootsIndex = ({ roots }: RootsIndexProps) => {
  const { dictionary, locale } = useLanguage();

  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('az');

  // Collect all unique domains from the data
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
      { value: 'az', label: dictionary.sortAZ },
      { value: 'za', label: dictionary.sortZA },
      { value: 'most', label: dictionary.sortMostWords },
      { value: 'fewest', label: dictionary.sortFewestWords },
    ],
    [dictionary.sortAZ, dictionary.sortZA, dictionary.sortMostWords, dictionary.sortFewestWords],
  );

  // Filter and sort
  const filteredRoots = useMemo(() => {
    let result = roots;

    if (selectedDomain !== 'all') {
      result = result.filter((r) =>
        r.semanticDomains.includes(selectedDomain as SemanticDomain),
      );
    }

    switch (sortBy) {
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
      case 'az':
      default:
        result = [...result].sort((a, b) => a.slug.localeCompare(b.slug));
        break;
    }

    return result;
  }, [roots, selectedDomain, sortBy]);

  return (
    <div className="space-y-10">
      {/* Section header */}
      <header className="space-y-3">
        <h1 className="font-heading text-foreground text-4xl font-bold sm:text-5xl">
          <span className="mr-3 inline-block">🌳</span>
          {dictionary.roots}
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg">{dictionary.rootOverview}</p>
      </header>

      {/* Filter bar */}
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
          aria-label={dictionary.sortAZ}
          options={sortOptions}
        />

        <span className="text-muted-foreground text-sm">
          {dictionary.showing} {filteredRoots.length} {dictionary.of} {roots.length}
        </span>
      </div>

      {/* Root cards grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredRoots.map((root, index) => {
          const style = cardStyles[index % 3];
          const emoji = getEmoji(root.semanticDomains);

          return (
            <Link key={root.slug} href={`/root/${root.slug}`} className="group block">
              <article
                className={`${style.bg} ${style.border} flex h-full cursor-pointer flex-col rounded-[20px] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg`}
              >
                {/* Icon + name row */}
                <div className="flex items-start gap-4">
                  <span className="text-4xl leading-none" role="img" aria-hidden="true">
                    {emoji}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="font-heading text-foreground text-2xl font-bold">
                      {root.variants[0] ?? root.slug}
                    </h2>
                    {/* Origin pill */}
                    <span
                      className={`${style.pill} mt-2 inline-block rounded-full px-3 py-0.5 text-xs font-semibold`}
                    >
                      {root.languageOfOrigin}
                    </span>
                  </div>
                </div>

                {/* Overview */}
                <p className="text-muted-foreground mt-4 line-clamp-3 text-sm leading-relaxed">
                  {root.overview[locale]}
                </p>

                {/* Semantic domain tags */}
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

                {/* Footer: word count + arrow */}
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
    </div>
  );
};
