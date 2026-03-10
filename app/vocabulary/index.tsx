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
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  // Counts directly from mastery maps (complete data, no API needed)
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

  // Filter slugs by status, then paginate — only fetch the current page
  const filteredWordSlugs = useMemo(() => {
    const slugs = Object.keys(wordMap).sort();
    if (statusFilter === 'all') return slugs;
    return slugs.filter((s) => wordMap[s] === statusFilter);
  }, [wordMap, statusFilter]);

  const filteredRootSlugs = useMemo(() => {
    const slugs = Object.keys(rootMap).sort();
    if (statusFilter === 'all') return slugs;
    return slugs.filter((s) => rootMap[s] === statusFilter);
  }, [rootMap, statusFilter]);

  const totalItems = tab === 'word' ? filteredWordSlugs.length : filteredRootSlugs.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));

  // Slugs for the current page only
  const pageSlugs = useMemo(() => {
    const source = tab === 'word' ? filteredWordSlugs : filteredRootSlugs;
    const start = (currentPage - 1) * PAGE_SIZE;
    return source.slice(start, start + PAGE_SIZE);
  }, [tab, filteredWordSlugs, filteredRootSlugs, currentPage]);

  // Stabilise fetch: only re-fetch when the actual page slugs change
  const pageSlugKey = useMemo(() => pageSlugs.join(','), [pageSlugs]);

  const [pageWords, setPageWords] = useState<WordEntry[]>([]);
  const [pageRoots, setPageRoots] = useState<RootEntry[]>([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if (!pageSlugKey) {
      setPageWords([]);
      setPageRoots([]);
      return;
    }
    const slugs = pageSlugKey.split(',');
    const endpoint = tab === 'word' ? '/api/words-by-slugs' : '/api/roots-by-slugs';
    setFetching(true);
    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slugs }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (tab === 'word') setPageWords(data);
        else setPageRoots(data);
      })
      .catch(() => {
        if (tab === 'word') setPageWords([]);
        else setPageRoots([]);
      })
      .finally(() => setFetching(false));
  }, [pageSlugKey, tab]);

  const isLoading = authLoading || masteryLoading || fetching;

  const goToPage = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

      {/* Word / Root tabs */}
      <div className="bg-muted inline-flex rounded-full p-1">
        <button
          type="button"
          onClick={() => { setTab('word'); setStatusFilter('all'); setCurrentPage(1); }}
          className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            tab === 'word' ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground'
          }`}
        >
          {locale === 'zh' ? '单词' : 'Words'}
        </button>
        <button
          type="button"
          onClick={() => { setTab('root'); setStatusFilter('all'); setCurrentPage(1); }}
          className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            tab === 'root' ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground'
          }`}
        >
          {locale === 'zh' ? '词根' : 'Roots'}
        </button>
      </div>

      {/* Stats cards (clickable as filter) */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {STAT_CARDS.map((card) => {
          const isActive = statusFilter === card.value;
          return (
            <button
              key={card.value}
              type="button"
              onClick={() => { setStatusFilter(isActive ? 'all' : card.value); setCurrentPage(1); }}
              className={`bg-card flex cursor-pointer items-center justify-center rounded-[16px] border-[1.5px] py-3.5 pl-1 pr-5 transition-all active:scale-95 ${card.color} ${
                isActive ? 'ring-2 ring-primary/40 shadow-md' : 'hover:shadow-sm'
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{card.emoji}</span>
                <div>
                  <p className="text-foreground text-2xl font-bold leading-tight">{counts[card.value]}</p>
                  <p className="text-muted-foreground text-xs font-medium">{card.label[locale] ?? card.label.en}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Content */}
      {isLoading ? (
        <div className="text-muted-foreground py-12 text-center">
          {locale === 'zh' ? '加载中...' : 'Loading...'}
        </div>
      ) : tab === 'word' ? (
        totalItems > 0 ? (
          <>
            <div ref={gridRef} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pageWords.map((word, idx) => (
                <WordCard key={word.slug} word={word} styleIndex={idx} />
              ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={goToPage} />
          </>
        ) : (
          <EmptyState locale={locale} type="word" hasAny={Object.keys(wordMap).length > 0} />
        )
      ) : totalItems > 0 ? (
        <>
          <div ref={gridRef} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pageRoots.map((root, idx) => (
              <RootCard key={root.slug} root={root} styleIndex={idx} />
            ))}
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={goToPage} />
        </>
      ) : (
        <EmptyState locale={locale} type="root" hasAny={Object.keys(rootMap).length > 0} />
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
