'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/components/language-provider';
import type { RootEntry, SemanticDomain } from '@/types/content';
import { WORDS_BY_ROOT } from '@/content/words/index';

/* ── Helpers ────────────────────────────────────────────────── */

const DOMAIN_EMOJI: Partial<Record<SemanticDomain, string>> = {
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
  action: '⚡',
  transport: '🚚',
  making: '🔨',
  writing: '✍️',
  seeing: '👁️',
  holding: '🤲',
  cutting: '✂️',
  pushing: '💨',
  pulling: '🪝',
  standing: '🧍',
  sitting: '🪑',
  walking: '🚶',
  eating: '🍽️',
  breathing: '🌬️',
  binding: '🔗',
  pressing: '🫸',
  flowing: '🌊',
  turning: '🔄',
  building: '🏗️',
  breaking: '💥',
  choosing: '☝️',
  giving: '🎁',
  sending: '📨',
  ordering: '📋',
  measuring: '📐',
  size: '📏',
  similarity: '🪞',
  strength: '💪',
  death: '💀',
  birth: '👶',
  sleep: '😴',
  food: '🍲',
};

const DOMAIN_COLORS: Partial<Record<SemanticDomain, string>> = {
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
  action: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  transport: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  making: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  writing: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  seeing: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
  holding: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
  cutting: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  pushing: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
  pulling: 'bg-stone-100 text-stone-700 dark:bg-stone-900/40 dark:text-stone-300',
  standing: 'bg-lime-100 text-lime-700 dark:bg-lime-900/40 dark:text-lime-300',
  sitting: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  walking: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  eating: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
  breathing: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
  binding: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  pressing: 'bg-zinc-100 text-zinc-700 dark:bg-zinc-900/40 dark:text-zinc-300',
  flowing: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
  turning: 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-300',
  building: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  breaking: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  choosing: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
  giving: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
  sending: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  ordering: 'bg-slate-100 text-slate-700 dark:bg-slate-900/40 dark:text-slate-300',
  measuring: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
  size: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  similarity: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  strength: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
  death: 'bg-stone-100 text-stone-700 dark:bg-stone-900/40 dark:text-stone-300',
  birth: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  sleep: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
  food: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
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
        className="bg-card text-muted-foreground hover:bg-primary inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all hover:text-white"
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
          <h1 className="font-heading text-foreground text-4xl font-bold sm:text-5xl">
            {root.slug}
          </h1>
          <span className={`ml-2 rounded-full px-3 py-1 text-xs font-bold ${originColor}`}>
            {root.languageOfOrigin}
          </span>
        </div>
      </header>

      {/* ── Info card ───────────────────────────────────── */}
      <section className="border-border bg-card rounded-[20px] border p-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Variants */}
          <div className="space-y-2">
            <p className="text-muted-foreground text-xs font-bold uppercase tracking-wider">
              {dictionary.variants}
            </p>
            <div className="flex flex-wrap gap-2">
              {root.variants.map((v) => (
                <span
                  key={v}
                  className="border-border bg-background text-foreground rounded-full border px-3 py-1 text-sm font-semibold"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* Origin */}
          <div className="space-y-2">
            <p className="text-muted-foreground text-xs font-bold uppercase tracking-wider">
              {dictionary.origin}
            </p>
            <p className="text-foreground text-lg font-semibold">{root.languageOfOrigin}</p>
          </div>

          {/* Semantic Domains */}
          <div className="space-y-2">
            <p className="text-muted-foreground text-xs font-bold uppercase tracking-wider">
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
            <p className="text-muted-foreground text-xs font-bold uppercase tracking-wider">
              {dictionary.relatedRoots}
            </p>
            <div className="flex flex-wrap gap-2">
              {root.relatedRoots.length > 0 ? (
                root.relatedRoots.map((slug) => (
                  <Link
                    key={slug}
                    href={`/root/${slug}`}
                    className="border-primary/30 bg-background text-primary hover:border-primary hover:bg-primary rounded-full border-[1.5px] px-3 py-1 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:text-white hover:shadow-md"
                  >
                    {slug}
                  </Link>
                ))
              ) : (
                <span className="text-muted-foreground text-sm">--</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Origin Summary ──────────────────────────────── */}
      <section className="space-y-2">
        <h2 className="font-heading text-foreground text-xl font-bold">{dictionary.origin}</h2>
        <p className="text-foreground/90 text-lg leading-relaxed">{localizedOrigin}</p>
      </section>

      {/* ── Overview ────────────────────────────────────── */}
      <section className="space-y-2">
        <h2 className="font-heading text-foreground text-xl font-bold">
          {dictionary.rootOverview}
        </h2>
        <p className="text-foreground/90 text-lg leading-relaxed">{localizedOverview}</p>
      </section>

      {/* ── Tree Visualization ──────────────────────────── */}
      {associatedWordEntries.length > 0 && (
        <section className="space-y-4">
          <h2 className="font-heading text-foreground text-xl font-bold">
            {locale === 'zh' ? '词根派生树' : 'Word Tree'}
          </h2>
          <div className="bg-card rounded-[24px] p-8 text-center">
            {/* Root node */}
            <div className="bg-primary font-heading inline-block rounded-xl px-8 py-4 text-xl font-bold text-white shadow-lg">
              {root.variants[0] ?? root.slug}
            </div>

            {/* Connector line */}
            <div className="bg-primary/30 mx-auto h-8 w-0.5" />

            {/* Branch nodes */}
            <div className="flex flex-wrap items-start justify-center gap-3">
              {associatedWordEntries.map((word) => (
                <Link
                  key={word.slug}
                  href={`/word/${word.slug}`}
                  className="border-primary bg-background font-heading text-foreground hover:bg-primary rounded-xl border-[1.5px] px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-1 hover:text-white hover:shadow-md"
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
        <h2 className="font-heading text-foreground text-xl font-bold">
          {dictionary.associatedWords}
        </h2>
        {associatedWordEntries.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {associatedWordEntries.map((word, idx) => {
              const localizedDefinition = word.definition[locale] ?? word.definition.en;
              const iconColorClass = WORD_CARD_ICON_COLORS[idx % WORD_CARD_ICON_COLORS.length];
              const iconEmoji = WORD_CARD_EMOJIS[idx % WORD_CARD_EMOJIS.length];

              return (
                <Link
                  key={word.slug}
                  href={`/word/${word.slug}`}
                  className="border-border bg-card group flex items-start gap-4 rounded-[20px] border p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg ${iconColorClass}`}
                    aria-hidden
                  >
                    {iconEmoji}
                  </span>
                  <div className="min-w-0">
                    <p className="font-heading text-foreground group-hover:text-primary text-lg font-bold">
                      {word.lemma}
                    </p>
                    <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                      {localizedDefinition}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">
            {locale === 'zh' ? '暂无关联词汇。' : 'No associated words recorded yet.'}
          </p>
        )}
      </section>
    </article>
  );
};
