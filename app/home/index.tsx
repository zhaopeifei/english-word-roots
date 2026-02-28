'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';
import type { RootEntry, WordEntry, SemanticDomain, MorphemeSegment } from '@/types/content';

interface HomeScreenProps {
  roots: RootEntry[];
  words: WordEntry[];
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const DOMAIN_EMOJI: Record<string, string> = {
  life: '🧬',
  animals: '🧬',
  plants: '🧬',
  body: '🧬',
  health: '🧬',
  time: '⏳',
  earth: '🌍',
  nature: '🌍',
  water: '💧',
  fire: '🔥',
  light: '💡',
  sound: '🔊',
  mind: '🧠',
  knowledge: '🧠',
};

function emojiForDomains(domains: SemanticDomain[]): string {
  for (const d of domains) {
    if (DOMAIN_EMOJI[d]) return DOMAIN_EMOJI[d];
  }
  return '📖';
}

/** Pick the first three color schemes, rotating by index. */
const CARD_COLORS = [
  {
    border: 'border-primary/20',
    bg: 'bg-card',
    text: 'text-primary',
    hoverBar: 'bg-primary',
    badge: 'bg-card text-primary border border-primary/20',
  },
  {
    border: 'border-accent/20',
    bg: 'bg-[var(--surface-purple)]',
    text: 'text-accent',
    hoverBar: 'bg-accent',
    badge: 'bg-[var(--surface-purple)] text-accent border border-accent/20',
  },
  {
    border: 'border-secondary/20',
    bg: 'bg-[var(--surface-warm)]',
    text: 'text-secondary',
    hoverBar: 'bg-secondary',
    badge: 'bg-[var(--surface-warm)] text-secondary border border-secondary/20',
  },
] as const;

function colorAt(index: number) {
  return CARD_COLORS[index % 3];
}

/* ------------------------------------------------------------------ */
/*  Morpheme pill                                                      */
/* ------------------------------------------------------------------ */

function morphemeClass(type: MorphemeSegment['type']): string {
  switch (type) {
    case 'prefix':
      return 'morpheme-prefix';
    case 'root':
      return 'morpheme-root';
    case 'suffix':
      return 'morpheme-suffix';
    case 'connector':
      return 'morpheme-connector';
    default:
      return 'morpheme-connector';
  }
}

function morphemeLabel(type: MorphemeSegment['type'], locale: string): string {
  const labels: Record<string, Record<string, string>> = {
    prefix: { en: 'prefix', zh: '前缀' },
    root: { en: 'root', zh: '词根' },
    suffix: { en: 'suffix', zh: '后缀' },
    connector: { en: 'link', zh: '连接' },
    other: { en: 'other', zh: '其他' },
  };
  return labels[type]?.[locale] ?? labels[type]?.en ?? type;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export const HomeScreen = ({ roots, words }: HomeScreenProps) => {
  const { dictionary, locale } = useLanguage();

  /* ---- bilingual copy ---- */
  const copy = {
    en: {
      hero: {
        pills: ['Root-Based', 'Visual', 'Bilingual'],
        titleBefore: 'Learn English ',
        titleHighlight: 'smarter',
        titleAfter: ', not harder.',
        description:
          'We combine modern UI patterns with visual etymology so you begin from meaning, not rote memorization.',
        primaryCta: 'Explore roots index',
        secondaryCta: 'Understand our method',
      },
      stats: {
        roots: 'Word Roots',
        words: 'Vocabulary',
        languages: 'Languages',
      },
      featured: {
        label: 'Featured Roots',
        title: 'Start with the building blocks',
        description:
          'Each root connects to dozens of English words. Master the root, and the vocabulary follows.',
        viewAll: 'View all roots',
      },
      breakdown: {
        label: 'Morpheme Breakdown',
        title: 'See how words are built',
        description:
          'Every word is decomposed into its Latin or Greek building blocks, color-coded by type.',
        result: 'Result',
        viewWord: 'See full entry',
      },
    },
    zh: {
      hero: {
        pills: ['词根驱动', '可视化', '双语'],
        titleBefore: '更',
        titleHighlight: '聪明',
        titleAfter: '地学英语，而不是更辛苦。',
        description:
          '现代化界面搭配可视化词源，让每一次记忆都从理解出发，而不是死记硬背。',
        primaryCta: '进入词根索引',
        secondaryCta: '了解方法论',
      },
      stats: {
        roots: '个词根',
        words: '个词汇',
        languages: '种语言',
      },
      featured: {
        label: '精选词根',
        title: '从构词基石开始',
        description:
          '每个词根关联数十个英文单词。掌握词根，词汇量自然增长。',
        viewAll: '查看全部词根',
      },
      breakdown: {
        label: '构词拆解',
        title: '看看单词是怎么组装的',
        description:
          '每个单词都被拆解为拉丁或希腊语构件，按类型着色标注。',
        result: '结果',
        viewWord: '查看完整词条',
      },
    },
  } as const;

  const t = copy[locale as keyof typeof copy] ?? copy.en;

  /* ---- data slices ---- */
  const featuredRoots = roots.slice(0, 6);
  const breakdownWord =
    words.find((w) => w.rootBreakdown.length >= 3) ?? words[0];
  const languageCount = 2; // en + zh

  /* ---- pill badge colors ---- */
  const pillColors = [
    'bg-card text-primary border border-primary/20',
    'bg-[var(--surface-purple)] text-accent border border-accent/20',
    'bg-[var(--surface-warm)] text-secondary border border-secondary/20',
  ];

  return (
    <div className="space-y-16">
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12 sm:py-24">
        {/* decorative background dots */}
        <div className="bg-dots pointer-events-none absolute inset-0 opacity-40" />

        <div className="relative z-10 mx-auto max-w-2xl space-y-8">
          {/* pill badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {t.hero.pills.map((label, i) => (
              <span
                key={label}
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${pillColors[i]}`}
              >
                <span aria-hidden="true" className="text-[10px]">
                  ✦
                </span>
                {label}
              </span>
            ))}
          </div>

          {/* headline */}
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t.hero.titleBefore}
            <span className="text-primary">{t.hero.titleHighlight}</span>
            {t.hero.titleAfter}
          </h1>

          {/* subtitle */}
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            {t.hero.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/roots"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition hover:opacity-90"
            >
              {t.hero.primaryCta}
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground shadow-md transition hover:opacity-90"
            >
              {t.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  STATS ROW                                                   */}
      {/* ============================================================ */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          {
            value: roots.length,
            label: t.stats.roots,
            bg: 'bg-card',
            text: 'text-primary',
          },
          {
            value: words.length,
            label: t.stats.words,
            bg: 'bg-[var(--surface-purple)]',
            text: 'text-accent',
          },
          {
            value: languageCount,
            label: t.stats.languages,
            bg: 'bg-[var(--surface-warm)]',
            text: 'text-secondary',
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className={`rounded-2xl border border-border ${stat.bg} px-6 py-6 text-center`}
          >
            <p className={`font-heading text-4xl font-bold ${stat.text}`}>
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* ============================================================ */}
      {/*  FEATURED ROOTS                                              */}
      {/* ============================================================ */}
      <section className="space-y-8">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {t.featured.label}
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground">
            {t.featured.title}
          </h2>
          <p className="max-w-xl text-base text-muted-foreground">
            {t.featured.description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredRoots.map((root, i) => {
            const c = colorAt(i);
            const emoji = emojiForDomains(root.semanticDomains);
            return (
              <Link
                key={root.slug}
                href={`/root/${root.slug}`}
                className={`group relative flex flex-col gap-3 overflow-hidden rounded-2xl border ${c.border} ${c.bg} p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg`}
              >
                {/* colored top bar on hover */}
                <div
                  className={`absolute left-0 right-0 top-0 h-1 ${c.hoverBar} opacity-0 transition-opacity group-hover:opacity-100`}
                />

                {/* emoji + variants */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden="true">
                    {emoji}
                  </span>
                  <div>
                    <p className={`font-heading text-lg font-bold ${c.text}`}>
                      {root.variants.join(' / ')}
                    </p>
                    {/* origin badge */}
                    <span
                      className={`mt-0.5 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${c.badge}`}
                    >
                      {root.languageOfOrigin}
                    </span>
                  </div>
                </div>

                {/* overview */}
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {root.overview[locale as 'en' | 'zh'] ?? root.overview.en}
                </p>

                {/* word count + arrow */}
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {root.associatedWords.length}{' '}
                    {locale === 'zh' ? '个单词' : 'words'}
                  </span>
                  <span
                    className={`${c.text} text-sm transition-transform group-hover:translate-x-1`}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/roots"
            className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-5 py-2 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
          >
            {t.featured.viewAll}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  MORPHEME BREAKDOWN                                          */}
      {/* ============================================================ */}
      {breakdownWord && (
        <section className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-[var(--surface-purple)] to-[var(--surface-warm)] p-8 sm:p-12">
          <div className="mx-auto max-w-2xl space-y-8 text-center">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                {t.breakdown.label}
              </p>
              <h2 className="font-heading text-3xl font-bold text-foreground">
                {t.breakdown.title}
              </h2>
              <p className="text-base text-muted-foreground">
                {t.breakdown.description}
              </p>
            </div>

            {/* morpheme blocks */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {breakdownWord.rootBreakdown.map((seg, i) => (
                <div key={`${seg.surface}-${i}`} className="flex flex-col items-center gap-1">
                  <span
                    className={`${morphemeClass(seg.type)} inline-flex rounded-lg px-4 py-2 text-lg font-bold`}
                  >
                    {seg.surface}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    {morphemeLabel(seg.type, locale)}
                  </span>
                </div>
              ))}
            </div>

            {/* result */}
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {t.breakdown.result}
              </p>
              <p className="font-heading text-3xl font-bold">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  {breakdownWord.lemma}
                </span>
              </p>
              <p className="text-sm text-muted-foreground">
                {breakdownWord.definition[locale as 'en' | 'zh'] ??
                  breakdownWord.definition.en}
              </p>
            </div>

            <Link
              href={`/word/${breakdownWord.slug}`}
              className="inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow transition hover:opacity-90"
            >
              {t.breakdown.viewWord}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};
