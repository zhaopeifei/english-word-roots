'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';
import { Breadcrumb } from '@/components/breadcrumb';
import type { RootEntry, SemanticDomain, WordEntry } from '@/types/content';

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
  life: 'bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-200',
  animals: 'bg-amber-50 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200',
  plants: 'bg-emerald-50 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200',
  body: 'bg-rose-50 text-rose-800 dark:bg-rose-900/50 dark:text-rose-200',
  health: 'bg-pink-50 text-pink-800 dark:bg-pink-900/50 dark:text-pink-200',
  nature: 'bg-teal-50 text-teal-800 dark:bg-teal-900/50 dark:text-teal-200',
  water: 'bg-cyan-50 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200',
  earth: 'bg-stone-50 text-stone-800 dark:bg-stone-900/50 dark:text-stone-200',
  fire: 'bg-red-50 text-red-800 dark:bg-red-900/50 dark:text-red-200',
  air: 'bg-sky-50 text-sky-800 dark:bg-sky-900/50 dark:text-sky-200',
  light: 'bg-yellow-50 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200',
  sound: 'bg-indigo-50 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200',
  color: 'bg-fuchsia-50 text-fuchsia-800 dark:bg-fuchsia-900/50 dark:text-fuchsia-200',
  time: 'bg-orange-50 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200',
  space: 'bg-violet-50 text-violet-800 dark:bg-violet-900/50 dark:text-violet-200',
  number: 'bg-blue-50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200',
  position: 'bg-lime-50 text-lime-800 dark:bg-lime-900/50 dark:text-lime-200',
  movement: 'bg-cyan-50 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200',
  change: 'bg-purple-50 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200',
  amount: 'bg-emerald-50 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200',
  mind: 'bg-violet-50 text-violet-800 dark:bg-violet-900/50 dark:text-violet-200',
  emotion: 'bg-pink-50 text-pink-800 dark:bg-pink-900/50 dark:text-pink-200',
  speech: 'bg-amber-50 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200',
  knowledge: 'bg-blue-50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200',
  power: 'bg-yellow-50 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200',
  law: 'bg-slate-50 text-slate-800 dark:bg-slate-900/50 dark:text-slate-200',
  society: 'bg-indigo-50 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200',
  other: 'bg-gray-50 text-gray-800 dark:bg-gray-900/50 dark:text-gray-200',
  action: 'bg-orange-50 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200',
  transport: 'bg-blue-50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200',
  making: 'bg-amber-50 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200',
  writing: 'bg-violet-50 text-violet-800 dark:bg-violet-900/50 dark:text-violet-200',
  seeing: 'bg-cyan-50 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200',
  holding: 'bg-teal-50 text-teal-800 dark:bg-teal-900/50 dark:text-teal-200',
  cutting: 'bg-red-50 text-red-800 dark:bg-red-900/50 dark:text-red-200',
  pushing: 'bg-sky-50 text-sky-800 dark:bg-sky-900/50 dark:text-sky-200',
  pulling: 'bg-stone-50 text-stone-800 dark:bg-stone-900/50 dark:text-stone-200',
  standing: 'bg-lime-50 text-lime-800 dark:bg-lime-900/50 dark:text-lime-200',
  sitting: 'bg-emerald-50 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200',
  walking: 'bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-200',
  eating: 'bg-rose-50 text-rose-800 dark:bg-rose-900/50 dark:text-rose-200',
  breathing: 'bg-sky-50 text-sky-800 dark:bg-sky-900/50 dark:text-sky-200',
  binding: 'bg-purple-50 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200',
  pressing: 'bg-zinc-50 text-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-200',
  flowing: 'bg-cyan-50 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200',
  turning: 'bg-fuchsia-50 text-fuchsia-800 dark:bg-fuchsia-900/50 dark:text-fuchsia-200',
  building: 'bg-amber-50 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200',
  breaking: 'bg-red-50 text-red-800 dark:bg-red-900/50 dark:text-red-200',
  choosing: 'bg-indigo-50 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200',
  giving: 'bg-pink-50 text-pink-800 dark:bg-pink-900/50 dark:text-pink-200',
  sending: 'bg-blue-50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200',
  ordering: 'bg-slate-50 text-slate-800 dark:bg-slate-900/50 dark:text-slate-200',
  measuring: 'bg-teal-50 text-teal-800 dark:bg-teal-900/50 dark:text-teal-200',
  size: 'bg-orange-50 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200',
  similarity: 'bg-violet-50 text-violet-800 dark:bg-violet-900/50 dark:text-violet-200',
  strength: 'bg-yellow-50 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200',
  death: 'bg-stone-50 text-stone-800 dark:bg-stone-900/50 dark:text-stone-200',
  birth: 'bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-200',
  sleep: 'bg-indigo-50 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200',
  food: 'bg-amber-50 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200',
};

const ORIGIN_PILL_COLORS: Record<string, string> = {
  Greek: 'bg-blue-50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200',
  Latin: 'bg-amber-50 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200',
  'Old English': 'bg-emerald-50 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200',
  'Old French': 'bg-rose-50 text-rose-800 dark:bg-rose-900/50 dark:text-rose-200',
  Germanic: 'bg-stone-50 text-stone-800 dark:bg-stone-900/50 dark:text-stone-200',
};

const WORD_CARD_ICON_COLORS = [
  'bg-primary/10 text-primary',
  'bg-accent/10 text-accent',
  'bg-secondary/10 text-secondary',
  'bg-pink-50 text-pink-800 dark:bg-pink-900/50 dark:text-pink-200',
  'bg-cyan-50 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200',
];

const WORD_CARD_EMOJIS = ['📝', '🔤', '💬', '🏷️', '📖'];

function getPrimaryEmoji(domains: SemanticDomain[]): string {
  if (domains.length === 0) return '✨';
  return DOMAIN_EMOJI[domains[0]] ?? '✨';
}

/* ── Component ──────────────────────────────────────────────── */

interface RootDetailProps {
  root: RootEntry;
  associatedWords: WordEntry[];
}

export const RootDetail = ({ root, associatedWords }: RootDetailProps) => {
  const { dictionary, locale } = useLanguage();
  const localizedOverview = root.overview[locale] ?? root.overview.en;
  const localizedOrigin = root.originSummary[locale] ?? root.originSummary.en;
  const associatedWordEntries = associatedWords;
  const emoji = getPrimaryEmoji(root.semanticDomains);
  const originColor =
    ORIGIN_PILL_COLORS[root.languageOfOrigin] ??
    'bg-gray-50 text-gray-800 dark:bg-gray-900/50 dark:text-gray-200';

  return (
    <article className="space-y-10">
      {/* ── Breadcrumb ────────────────────────────────────── */}
      <Breadcrumb
        items={[
          { label: dictionary.home, href: '/home' },
          { label: dictionary.roots, href: '/root' },
          { label: root.variants[0] ?? root.slug },
        ]}
      />

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
