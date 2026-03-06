'use client';

import { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import Link from 'next/link';
import { useAuth } from '@/components/auth-provider';
import { useMastery, type MasteryStatus, type ItemType } from '@/components/mastery-provider';
import { useLanguage } from '@/components/language-provider';
import { WordCard } from '@/components/word-card';
import { MasteryButtons } from '@/components/mastery-buttons';
import { Pagination, PAGE_SIZE } from '@/components/pagination';
import type { WordEntry, RootEntry } from '@/types/content';

// ---------------------------------------------------------------------------
// Status filter config
// ---------------------------------------------------------------------------

const STATUS_OPTIONS: { value: MasteryStatus; emoji: string; label: Record<string, string> }[] = [
  { value: 'seen', emoji: '🌱', label: { en: 'Seen', zh: '见过' } },
  { value: 'familiar', emoji: '🌿', label: { en: 'Familiar', zh: '熟悉' } },
  { value: 'mastered', emoji: '🌳', label: { en: 'Mastered', zh: '掌握' } },
];

const STAT_CARDS: { value: MasteryStatus; emoji: string; label: Record<string, string>; color: string }[] = [
  { value: 'unknown', emoji: '🫘', label: { en: 'Unknown', zh: '不认识' }, color: 'border-border' },
  { value: 'seen', emoji: '🌱', label: { en: 'Seen', zh: '见过' }, color: 'border-accent/30' },
  { value: 'familiar', emoji: '🌿', label: { en: 'Familiar', zh: '熟悉' }, color: 'border-secondary/30' },
  { value: 'mastered', emoji: '🌳', label: { en: 'Mastered', zh: '掌握' }, color: 'border-primary/30' },
];

// ---------------------------------------------------------------------------
// Root card (simplified, for vocabulary page)
// ---------------------------------------------------------------------------

const rootCardStyles = [
  { bg: 'bg-card', border: 'border-[1.5px] border-primary/15 hover:border-primary' },
  { bg: 'bg-[var(--surface-purple)]', border: 'border-[1.5px] border-accent/15 hover:border-accent' },
  { bg: 'bg-[var(--surface-warm)]', border: 'border-[1.5px] border-secondary/15 hover:border-secondary' },
] as const;

function RootCard({ root, styleIndex }: { root: RootEntry; styleIndex: number }) {
  const { locale } = useLanguage();
  const style = rootCardStyles[styleIndex % 3];
  const overview = root.overview[locale] ?? root.overview.en;

  return (
    <Link href={`/root/${root.slug}`} className="group block">
      <article
        className={`${style.bg} ${style.border} flex h-[170px] cursor-pointer flex-col rounded-[20px] p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg`}
      >
        <div className="flex items-center gap-2">
          <h3 className="font-heading text-foreground text-xl font-bold">{root.slug}</h3>
          <span className="text-muted-foreground text-sm">({root.variants.join(', ')})</span>
        </div>
        <p className="text-muted-foreground mt-2 line-clamp-2 text-sm leading-relaxed">
          {overview}
        </p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <span className="text-muted-foreground text-xs">{root.languageOfOrigin}</span>
          <MasteryButtons type="root" slug={root.slug} />
        </div>
      </article>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// VocabularyPage
// ---------------------------------------------------------------------------

export const VocabularyPage = () => {
  const { user, loading: authLoading, signInWithGoogle } = useAuth();
  const { wordMap, rootMap, isLoading: masteryLoading } = useMastery();
  const { locale, dictionary } = useLanguage();

  const [tab, setTab] = useState<ItemType>('word');
  const [statusFilter, setStatusFilter] = useState<MasteryStatus | 'all'>('all');
  const [words, setWords] = useState<WordEntry[]>([]);
  const [roots, setRoots] = useState<RootEntry[]>([]);
  const [fetchingWords, setFetchingWords] = useState(false);
  const [fetchingRoots, setFetchingRoots] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  // Compute counts
  const wordCounts = useMemo(() => {
    const counts: Record<MasteryStatus, number> = { unknown: 0, seen: 0, familiar: 0, mastered: 0 };
    for (const status of Object.values(wordMap)) counts[status]++;
    return counts;
  }, [wordMap]);

  const rootCounts = useMemo(() => {
    const counts: Record<MasteryStatus, number> = { unknown: 0, seen: 0, familiar: 0, mastered: 0 };
    for (const status of Object.values(rootMap)) counts[status]++;
    return counts;
  }, [rootMap]);

  const counts = tab === 'word' ? wordCounts : rootCounts;

  // Fetch word/root details when map changes
  const wordSlugs = useMemo(() => Object.keys(wordMap), [wordMap]);
  const rootSlugs = useMemo(() => Object.keys(rootMap), [rootMap]);

  useEffect(() => {
    if (wordSlugs.length === 0) { setWords([]); return; }
    setFetchingWords(true);
    fetch(`/api/words-by-slugs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slugs: wordSlugs }),
    })
      .then((r) => r.json())
      .then((data) => setWords(data))
      .catch(() => setWords([]))
      .finally(() => setFetchingWords(false));
  }, [wordSlugs]);

  useEffect(() => {
    if (rootSlugs.length === 0) { setRoots([]); return; }
    setFetchingRoots(true);
    fetch(`/api/roots-by-slugs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slugs: rootSlugs }),
    })
      .then((r) => r.json())
      .then((data) => setRoots(data))
      .catch(() => setRoots([]))
      .finally(() => setFetchingRoots(false));
  }, [rootSlugs]);

  // Filtered items
  const filteredWords = useMemo(() => {
    if (statusFilter === 'all') return words;
    return words.filter((w) => wordMap[w.slug] === statusFilter);
  }, [words, wordMap, statusFilter]);

  const filteredRoots = useMemo(() => {
    if (statusFilter === 'all') return roots;
    return roots.filter((r) => rootMap[r.slug] === statusFilter);
  }, [roots, rootMap, statusFilter]);

  const isLoading = authLoading || masteryLoading || fetchingWords || fetchingRoots;

  const goToPage = useCallback((page: number) => {
    setCurrentPage(page);
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  // Not logged in
  if (!authLoading && !user) {
    return (
      <article className="space-y-8">
        <header className="space-y-2">
          <h1 className="font-heading text-foreground text-4xl font-bold tracking-tight sm:text-5xl">
            {locale === 'zh' ? '我的词汇本' : 'My Vocabulary'}
          </h1>
          <p className="text-muted-foreground text-lg">
            {locale === 'zh' ? '登录后即可追踪单词和词根的掌握状态。' : 'Sign in to track your mastery of words and roots.'}
          </p>
        </header>
        <div className="border-border bg-card flex flex-col items-center gap-4 rounded-[20px] border p-12 text-center">
          <p className="text-muted-foreground text-lg">
            {locale === 'zh' ? '使用 Google 账号登录，开始记录你的学习进度' : 'Sign in with Google to start tracking your progress'}
          </p>
          <button
            type="button"
            onClick={() => signInWithGoogle()}
            className="bg-primary hover:bg-primary/90 cursor-pointer rounded-full px-6 py-2.5 font-medium text-white transition-colors"
          >
            {locale === 'zh' ? '使用 Google 登录' : 'Sign in with Google'}
          </button>
        </div>
      </article>
    );
  }

  return (
    <article className="space-y-8">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="font-heading text-foreground text-4xl font-bold tracking-tight sm:text-5xl">
          {locale === 'zh' ? '我的词汇本' : 'My Vocabulary'}
        </h1>
        <p className="text-muted-foreground text-lg">
          {locale === 'zh' ? '追踪你对单词和词根的掌握程度。' : 'Track your mastery of words and roots.'}
        </p>
      </header>

      {/* Stats cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {STAT_CARDS.map((card) => (
          <div
            key={card.value}
            className={`bg-card rounded-[16px] border-[1.5px] p-4 text-center ${card.color}`}
          >
            <span className="text-2xl">{card.emoji}</span>
            <p className="text-foreground mt-2 text-2xl font-bold">{counts[card.value]}</p>
            <p className="text-muted-foreground text-xs font-medium">{card.label[locale] ?? card.label.en}</p>
          </div>
        ))}
      </div>

      {/* Tabs + filters */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Word / Root tabs */}
        <div className="bg-muted inline-flex rounded-full p-1">
          <button
            type="button"
            onClick={() => { setTab('word'); setCurrentPage(1); }}
            className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              tab === 'word' ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground'
            }`}
          >
            {locale === 'zh' ? '单词' : 'Words'}
          </button>
          <button
            type="button"
            onClick={() => { setTab('root'); setCurrentPage(1); }}
            className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              tab === 'root' ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground'
            }`}
          >
            {locale === 'zh' ? '词根' : 'Roots'}
          </button>
        </div>

        {/* Status filter */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => { setStatusFilter('all'); setCurrentPage(1); }}
            className={`cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              statusFilter === 'all' ? 'bg-card text-foreground ring-1 ring-border shadow-sm' : 'text-muted-foreground hover:bg-muted'
            }`}
          >
            {locale === 'zh' ? '全部' : 'All'}
          </button>
          {STATUS_OPTIONS.map((s) => (
            <button
              key={s.value}
              type="button"
              onClick={() => { setStatusFilter(s.value); setCurrentPage(1); }}
              className={`cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                statusFilter === s.value ? 'bg-card text-foreground ring-1 ring-border shadow-sm' : 'text-muted-foreground hover:bg-muted'
              }`}
            >
              {s.emoji} {s.label[locale] ?? s.label.en}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {isLoading ? (
        <div className="text-muted-foreground py-12 text-center">
          {locale === 'zh' ? '加载中...' : 'Loading...'}
        </div>
      ) : tab === 'word' ? (
        filteredWords.length > 0 ? (
          <>
            <div ref={gridRef} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredWords.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE).map((word, idx) => (
                <WordCard key={word.slug} word={word} styleIndex={idx} />
              ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={Math.max(1, Math.ceil(filteredWords.length / PAGE_SIZE))} onPageChange={goToPage} />
          </>
        ) : (
          <EmptyState locale={locale} type="word" hasAny={words.length > 0} />
        )
      ) : filteredRoots.length > 0 ? (
        <>
          <div ref={gridRef} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredRoots.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE).map((root, idx) => (
              <RootCard key={root.slug} root={root} styleIndex={idx} />
            ))}
          </div>
          <Pagination currentPage={currentPage} totalPages={Math.max(1, Math.ceil(filteredRoots.length / PAGE_SIZE))} onPageChange={goToPage} />
        </>
      ) : (
        <EmptyState locale={locale} type="root" hasAny={roots.length > 0} />
      )}
    </article>
  );
};

function EmptyState({ locale, type, hasAny }: { locale: string; type: ItemType; hasAny: boolean }) {
  if (hasAny) {
    return (
      <div className="border-border bg-card rounded-[20px] border p-12 text-center">
        <p className="text-muted-foreground text-lg">
          {locale === 'zh' ? '当前筛选条件下没有结果' : 'No items match the current filter'}
        </p>
      </div>
    );
  }

  return (
    <div className="border-border bg-card rounded-[20px] border p-12 text-center">
      <p className="text-muted-foreground text-lg">
        {locale === 'zh'
          ? `还没有标记过任何${type === 'word' ? '单词' : '词根'}。`
          : `You haven't marked any ${type === 'word' ? 'words' : 'roots'} yet.`}
      </p>
      <Link
        href={type === 'word' ? '/explore' : '/root'}
        className="bg-primary hover:bg-primary/90 mt-4 inline-block rounded-full px-6 py-2.5 font-medium text-white transition-colors"
      >
        {locale === 'zh' ? '去探索' : 'Start exploring'}
      </Link>
    </div>
  );
}
