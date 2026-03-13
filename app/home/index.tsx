'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { useLanguage } from '@/components/language-provider';
import type { RootEntry, WordEntry, MorphemeSegment } from '@/types/content';

interface HomeScreenProps {
  roots: RootEntry[];
  words: WordEntry[];
  totalRoots: number;
  totalWords: number;
  totalAffixes: number;
  breakdownWord: WordEntry;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */


/* ------------------------------------------------------------------ */
/*  Morpheme pill                                                      */
/* ------------------------------------------------------------------ */

function morphemeClass(type: MorphemeSegment['type']): string {
  switch (type) {
    case 'prefix':
      return 'morpheme-prefix';
    case 'root':
    case 'stem':
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
    stem: { en: 'stem', zh: '词干' },
    suffix: { en: 'suffix', zh: '后缀' },
    connector: { en: 'link', zh: '连接' },
    other: { en: 'other', zh: '其他' },
  };
  return labels[type]?.[locale] ?? labels[type]?.en ?? type;
}

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const morphemeContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const morphemeItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export const HomeScreen = ({
  roots,
  words,
  totalRoots,
  totalWords,
  totalAffixes,
  breakdownWord,
}: HomeScreenProps) => {
  const { dictionary, locale } = useLanguage();

  /* ---- bilingual copy ---- */
  const copy = {
    en: {
      hero: {
        pills: ['Root-Based', "Grimm's Law", 'Bilingual'],
        titleBefore: 'Every English word ',
        titleHighlight: 'has a story',
        titleAfter: '.',
        description:
          'Powered by Grimm\'s Law and systematic root analysis, this atlas reveals the hidden connections inside everyday vocabulary.',
        primaryCta: 'Explore roots index',
        secondaryCta: 'Understand our method',
      },
      stats: {
        roots: 'Word Roots',
        words: 'Vocabulary',
        affixes: 'Affixes',
      },
      method: {
        label: 'The Method',
        title: "Grimm's Law at a glance",
        description:
          'Three core sound-shift patterns explain how one root can appear in dozens of different English words.',
        cards: [
          {
            icon: 'V',
            title: 'Vowel Interchange',
            example: 'sit / seat / set',
            description:
              'Vowels (a-e-i-o-u) regularly swap between related words, preserving the root meaning.',
          },
          {
            icon: 'C',
            title: 'Consonant Voicing',
            example: 'describe → description',
            description:
              'Consonants shift along predictable voice pairs: b/p/f/v, d/t/s/z, g/k/c/q.',
          },
          {
            icon: 'N',
            title: 'Nasal Interchange',
            example: 'in- + possible → impossible',
            description:
              'Nasal sounds (m, n) substitute for each other at morpheme boundaries.',
          },
        ],
        cta: 'See all 6 patterns',
      },
      featured: {
        label: 'Featured Roots',
        title: 'Start with the building blocks',
        description: `Each root connects to dozens of English words. Explore ${totalRoots} roots and the vocabulary follows.`,
        viewAll: `View all ${totalRoots} roots`,
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
        pills: ['词根驱动', '格林法则', '双语'],
        titleBefore: '每个英语单词都',
        titleHighlight: '有故事',
        titleAfter: '。',
        description:
          '以格林法则和系统化词根分析为核心，这份导图揭示日常词汇背后的隐藏关联。',
        primaryCta: '进入词根索引',
        secondaryCta: '了解方法论',
      },
      stats: {
        roots: '个词根',
        words: '个词汇',
        affixes: '个词缀',
      },
      method: {
        label: '方法论',
        title: '格林法则一览',
        description: '三大核心音变规律，解释一个词根如何衍生出数十个不同的英语单词。',
        cards: [
          {
            icon: 'V',
            title: '元音互换',
            example: 'sit / seat / set',
            description: '元音 (a-e-i-o-u) 在同源词之间有规律地交替，词根含义不变。',
          },
          {
            icon: 'C',
            title: '辅音浊化',
            example: 'describe → description',
            description: '辅音沿可预测的清浊对应关系变换：b/p/f/v、d/t/s/z、g/k/c/q。',
          },
          {
            icon: 'N',
            title: '鼻音互换',
            example: 'in- + possible → impossible',
            description: '鼻音 (m, n) 在语素边界处相互替代。',
          },
        ],
        cta: '查看全部 6 种规律',
      },
      featured: {
        label: '精选词根',
        title: '从构词基石开始',
        description: `每个词根关联数十个英文单词。探索 ${totalRoots} 个词根，词汇量自然增长。`,
        viewAll: `查看全部 ${totalRoots} 个词根`,
      },
      breakdown: {
        label: '构词拆解',
        title: '看看单词是怎么组装的',
        description: '每个单词都被拆解为拉丁或希腊语构件，按类型着色标注。',
        result: '结果',
        viewWord: '查看完整词条',
      },
    },
  } as const;

  const t = copy[locale as keyof typeof copy] ?? copy.en;

  /* ---- data slices ---- */
  const featuredRoots = roots.slice(0, 6);

  /* ---- pill badge colors ---- */
  const pillColors = [
    'bg-muted text-muted-foreground border border-border',
    'bg-muted text-muted-foreground border border-border',
    'bg-muted text-muted-foreground border border-border',
  ];

  /* ---- method card styles ---- */
  const methodStyle = {
    iconBg: 'bg-muted',
    iconText: 'text-foreground',
    border: 'border-border',
    bg: '',
  };

  return (
    <div className="space-y-16">
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="border-border bg-card relative overflow-hidden rounded-3xl border px-6 py-16 text-center sm:px-12 sm:py-24">
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
          <h1 className="font-heading text-foreground text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {t.hero.titleBefore}
            <span className="text-primary">{t.hero.titleHighlight}</span>
            {t.hero.titleAfter}
          </h1>

          {/* subtitle */}
          <p className="text-muted-foreground mx-auto max-w-xl text-lg">{t.hero.description}</p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/root"
              className="bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold shadow-md transition hover:bg-primary/90"
            >
              {t.hero.primaryCta}
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/about"
              className="border border-border text-foreground hover:text-primary inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition"
            >
              {t.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  STATS ROW (4 items)                                         */}
      {/* ============================================================ */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { value: totalRoots, label: t.stats.roots },
          { value: totalWords, label: t.stats.words },
          { value: totalAffixes, label: t.stats.affixes },
        ].map((stat) => (
          <div
            key={stat.label}
            className="border-border rounded-2xl border px-6 py-6 text-center"
          >
            <p className="font-heading text-primary text-4xl font-bold">{stat.value}</p>
            <p className="text-muted-foreground mt-1 text-sm">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* ============================================================ */}
      {/*  THE METHOD (Grimm's Law preview)                            */}
      {/* ============================================================ */}
      <section className="space-y-8">
        <div className="space-y-2">
          <p className="text-muted-foreground text-sm font-semibold uppercase tracking-widest">
            {t.method.label}
          </p>
          <h2 className="font-heading text-foreground text-3xl font-bold">{t.method.title}</h2>
          <p className="text-muted-foreground max-w-xl text-base">{t.method.description}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.method.cards.map((card) => {
            return (
              <div
                key={card.icon}
                className={`rounded-2xl border ${methodStyle.border} p-6 space-y-3`}
              >
                <div
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${methodStyle.iconBg} font-heading text-lg font-bold ${methodStyle.iconText}`}
                >
                  {card.icon}
                </div>
                <h3 className="text-foreground text-lg font-semibold">{card.title}</h3>
                <p className="text-muted-foreground text-sm font-mono">{card.example}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/about"
            className="border-border bg-background text-foreground hover:border-primary/40 hover:text-primary inline-flex items-center gap-1 rounded-full border px-5 py-2 text-sm font-semibold transition"
          >
            {t.method.cta}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FEATURED ROOTS                                              */}
      {/* ============================================================ */}
      <section className="space-y-8">
        <div className="space-y-2">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest">
            {t.featured.label}
          </p>
          <h2 className="font-heading text-foreground text-3xl font-bold">{t.featured.title}</h2>
          <p className="text-muted-foreground max-w-xl text-base">{t.featured.description}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredRoots.map((root) => {
            return (
              <Link
                key={root.slug}
                href={`/root/${root.slug}`}
                className="group flex flex-col gap-3 rounded-2xl border border-border p-5 transition-all duration-200 hover:-translate-y-1 hover:bg-muted hover:shadow-md"
              >
                {/* variants + origin */}
                <div>
                  <p className="font-heading text-foreground text-lg font-bold">
                    {root.variants.join(' / ')}
                  </p>
                  <span
                    className="bg-muted text-muted-foreground mt-1 inline-block rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold"
                  >
                    {root.languageOfOrigin}
                  </span>
                </div>

                {/* overview */}
                <p className="text-muted-foreground line-clamp-2 text-sm">
                  {root.overview[locale as 'en' | 'zh'] ?? root.overview.en}
                </p>

                {/* word count */}
                <div className="mt-auto pt-2">
                  <span className="text-muted-foreground text-xs">
                    {root.associatedWords.length} {locale === 'zh' ? '个单词' : 'words'}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/root"
            className="border-border bg-background text-foreground hover:border-primary/40 hover:text-primary inline-flex items-center gap-1 rounded-full border px-5 py-2 text-sm font-semibold transition"
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
        <section className="border-border bg-card overflow-hidden rounded-3xl border p-8 sm:p-12">
          <div className="mx-auto max-w-2xl space-y-8 text-center">
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm font-semibold uppercase tracking-widest">
                {t.breakdown.label}
              </p>
              <h2 className="font-heading text-foreground text-3xl font-bold">
                {t.breakdown.title}
              </h2>
              <p className="text-muted-foreground text-base">{t.breakdown.description}</p>
            </div>

            {/* morpheme blocks */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-3"
              variants={morphemeContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {breakdownWord.rootBreakdown.map((seg, i) => (
                <motion.div key={`${seg.surface}-${i}`} className="flex flex-col items-center gap-1" variants={morphemeItemVariants}>
                  <span
                    className={`${morphemeClass(seg.type)} inline-flex rounded-lg px-4 py-2 text-lg font-bold`}
                  >
                    {seg.surface}
                  </span>
                  <span className="text-muted-foreground text-[10px] font-medium uppercase tracking-wider">
                    {seg.meaning?.[locale] ?? seg.meaning?.en ?? morphemeLabel(seg.type, locale)}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* result */}
            <motion.div
              className="space-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 + breakdownWord.rootBreakdown.length * 0.1 }}
            >
              <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest">
                {t.breakdown.result}
              </p>
              <p className="font-heading text-3xl font-bold">
                <span className="text-primary">
                  {breakdownWord.lemma}
                </span>
              </p>
              <p className="text-muted-foreground text-sm">
                {breakdownWord.definition[locale as 'en' | 'zh'] ?? breakdownWord.definition.en}
              </p>
            </motion.div>

            <Link
              href={`/word/${breakdownWord.slug}`}
              className="bg-primary text-primary-foreground inline-flex items-center gap-1 rounded-full px-5 py-2 text-sm font-semibold shadow transition hover:bg-primary/90"
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
