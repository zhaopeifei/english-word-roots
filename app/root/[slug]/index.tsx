'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/components/language-provider';
import type { RootEntry, SemanticDomain } from '@/types/content';
import { WORDS_BY_ROOT } from '@/content/words/index';

/* ── Helpers ────────────────────────────────────────────────── */

const DOMAIN_EMOJI: Record<SemanticDomain, string> = {
  life: '🧬',
  animals: '🐾',
  plants: '🌱',
  body: '🫀',
  health: '💊',
  nature: '🌍',
  water: '💧',
  earth: '🪨',
  fire: '🔥',
  air: '💨',
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
  emotion: '💖',
  speech: '🗣️',
  knowledge: '📚',
  power: '⚡',
  law: '⚖️',
  society: '🏛️',
  other: '✨',
};

const DOMAIN_COLORS: Record<SemanticDomain, string> = {
  life: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  animals: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  plants: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  body: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
  health: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
  nature: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
  water: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
  earth: 'bg-stone-100 text-stone-700 dark:bg-stone-900/40 dark:text-stone-300',
  fire: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  air: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
  light: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
  sound: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
  color: 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-300',
  time: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  space: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  number: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  position: 'bg-lime-100 text-lime-700 dark:bg-lime-900/40 dark:text-lime-300',
  movement: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
  change: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  amount: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  mind: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  emotion: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
  speech: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  knowledge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  power: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
  law: 'bg-slate-100 text-slate-700 dark:bg-slate-900/40 dark:text-slate-300',
  society: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
  other: 'bg-gray-100 text-gray-700 dark:bg-gray-900/40 dark:text-gray-300',
};

const ORIGIN_PILL_COLORS: Record<string, string> = {
  Greek: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  Latin: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  'Old English': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  'Old French': 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
  Germanic: 'bg-stone-100 text-stone-700 dark:bg-stone-900/40 dark:text-stone-300',
};

const WORD_CARD_ICON_COLORS = [
  'bg-primary/10 text-primary',
  'bg-accent/10 text-accent',
  'bg-secondary/10 text-secondary',
  'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400',
  'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400',
];

const WORD_CARD_EMOJIS = ['📝', '🔤', '💬', '🏷️', '📖'];

function getPrimaryEmoji(domains: SemanticDomain[]): string {
  if (domains.length === 0) return '✨';
  return DOMAIN_EMOJI[domains[0]] ?? '✨';
}

/* ── Component ──────────────────────────────────────────────── */

interface RootDetailProps {
  root: RootEntry;
}

export const RootDetail = ({ root }: RootDetailProps) => {
  const router = useRouter();
  const { dictionary, locale } = useLanguage();
  const localizedOverview = root.overview[locale] ?? root.overview.en;
  const localizedOrigin = root.originSummary[locale] ?? root.originSummary.en;
  const associatedWordEntries = WORDS_BY_ROOT[root.slug] ?? [];
  const emoji = getPrimaryEmoji(root.semanticDomains);
  const originColor =
    ORIGIN_PILL_COLORS[root.languageOfOrigin] ??
    'bg-gray-100 text-gray-700 dark:bg-gray-900/40 dark:text-gray-300';

  return (
    <article className="space-y-10">
      {/* ── Back button ─────────────────────────────────── */}
      <button
        type="button"
        onClick={() => router.back()}
        className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-bold text-muted-foreground transition-all hover:bg-primary hover:text-white"
        aria-label={locale === 'zh' ? '返回' : 'Back'}
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        {locale === 'zh' ? '返回' : 'Back'}
      </button>

      {/* ── Header ──────────────────────────────────────── */}
      <header className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="text-4xl" role="img" aria-hidden>
            {emoji}
          </span>
          <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
            {root.slug}
          </h1>
          <span
            className={`ml-2 rounded-full px-3 py-1 text-xs font-bold ${originColor}`}
          >
            {root.languageOfOrigin}
          </span>
        </div>
      </header>

      {/* ── Info card ───────────────────────────────────── */}
      <section className="rounded-[20px] border border-border bg-card p-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Variants */}
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {dictionary.variants}
            </p>
            <div className="flex flex-wrap gap-2">
              {root.variants.map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-border bg-background px-3 py-1 text-sm font-semibold text-foreground"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* Origin */}
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {dictionary.origin}
            </p>
            <p className="text-lg font-semibold text-foreground">
              {root.languageOfOrigin}
            </p>
          </div>

          {/* Semantic Domains */}
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {dictionary.domains}
            </p>
            <div className="flex flex-wrap gap-2">
              {root.semanticDomains.map((domain) => (
                <span
                  key={domain}
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${DOMAIN_COLORS[domain] ?? ''}`}
                >
                  <span aria-hidden>{DOMAIN_EMOJI[domain]}</span>
                  {domain}
                </span>
              ))}
            </div>
          </div>

          {/* Related Roots */}
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {dictionary.relatedRoots}
            </p>
            <div className="flex flex-wrap gap-2">
              {root.relatedRoots.length > 0 ? (
                root.relatedRoots.map((slug) => (
                  <Link
                    key={slug}
                    href={`/root/${slug}`}
                    className="rounded-full border-[1.5px] border-primary/30 bg-background px-3 py-1 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white hover:shadow-md"
                  >
                    {slug}
                  </Link>
                ))
              ) : (
                <span className="text-sm text-muted-foreground">--</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Origin Summary ──────────────────────────────── */}
      <section className="space-y-2">
        <h2 className="font-heading text-xl font-bold text-foreground">
          {dictionary.origin}
        </h2>
        <p className="text-lg leading-relaxed text-foreground/90">
          {localizedOrigin}
        </p>
      </section>

      {/* ── Overview ────────────────────────────────────── */}
      <section className="space-y-2">
        <h2 className="font-heading text-xl font-bold text-foreground">
          {dictionary.rootOverview}
        </h2>
        <p className="text-lg leading-relaxed text-foreground/90">
          {localizedOverview}
        </p>
      </section>

      {/* ── Tree Visualization ──────────────────────────── */}
      {associatedWordEntries.length > 0 && (
        <section className="space-y-4">
          <h2 className="font-heading text-xl font-bold text-foreground">
            {locale === 'zh' ? '词根派生树' : 'Word Tree'}
          </h2>
          <div className="rounded-[24px] bg-card p-8 text-center">
            {/* Root node */}
            <div className="inline-block rounded-xl bg-primary px-8 py-4 font-heading text-xl font-bold text-white shadow-lg">
              {root.variants[0] ?? root.slug}
            </div>

            {/* Connector line */}
            <div className="mx-auto h-8 w-0.5 bg-primary/30" />

            {/* Branch nodes */}
            <div className="flex flex-wrap items-start justify-center gap-3">
              {associatedWordEntries.map((word) => (
                <Link
                  key={word.slug}
                  href={`/word/${word.slug}`}
                  className="rounded-xl border-[1.5px] border-primary bg-background px-5 py-3 font-heading text-sm font-semibold text-foreground transition-all hover:-translate-y-1 hover:bg-primary hover:text-white hover:shadow-md"
                >
                  {word.lemma}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Associated Words ────────────────────────────── */}
      <section className="space-y-4">
        <h2 className="font-heading text-xl font-bold text-foreground">
          {dictionary.associatedWords}
        </h2>
        {associatedWordEntries.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {associatedWordEntries.map((word, idx) => {
              const localizedDefinition =
                word.definition[locale] ?? word.definition.en;
              const iconColorClass =
                WORD_CARD_ICON_COLORS[idx % WORD_CARD_ICON_COLORS.length];
              const iconEmoji =
                WORD_CARD_EMOJIS[idx % WORD_CARD_EMOJIS.length];

              return (
                <Link
                  key={word.slug}
                  href={`/word/${word.slug}`}
                  className="group flex items-start gap-4 rounded-[20px] border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg ${iconColorClass}`}
                    aria-hidden
                  >
                    {iconEmoji}
                  </span>
                  <div className="min-w-0">
                    <p className="font-heading text-lg font-bold text-foreground group-hover:text-primary">
                      {word.lemma}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {localizedDefinition}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            {locale === 'zh'
              ? '暂无关联词汇。'
              : 'No associated words recorded yet.'}
          </p>
        )}
      </section>
    </article>
  );
};
