'use client';

import Image from 'next/image';
import Link from 'next/link';
import heroIllustration from '../assets/hero_1.png';
import { useLanguage } from '@/components/language-provider';
import type { RootEntry, WordEntry } from '@/types/content';

interface HomeScreenProps {
  roots: RootEntry[];
  words: WordEntry[];
}

export const HomeScreen = ({ roots, words }: HomeScreenProps) => {
  const { dictionary, locale } = useLanguage();

  const copy = {
    en: {
      hero: {
        title: 'Learn English smarter, not harder.',
        description:
          'We combine modern UI patterns with visual etymology so you begin from meaning, not rote memorization.',
        primaryCta: 'Explore the roots index',
        secondaryCta: 'Understand our method',
        alt: 'Illustration of an English vocabulary tree filled with word roots.',
      },
      detail: {
        label: 'Root-based guidance',
        title: 'Every entry is traced back to its origin.',
        description:
          'The site dissects each word into Latin or Greek building blocks, aligns related families, and guides you directly to the dedicated roots page.',
        support:
          'Compare definitions, pronunciations, and semantic clusters side by side to reinforce long-term memory.',
        cta: 'Take me to the roots',
        highlights: [
          {
            title: 'Step-by-step breakdowns',
            description: 'See prefixes, stems, and suffixes annotated with plain-language notes.',
          },
          {
            title: 'Connected families',
            description: 'Follow backlinks between roots and the hundreds of words they generate.',
          },
          {
            title: 'Memory-friendly summaries',
            description: 'Color-coded tags and usage hints keep everything modern and visual.',
          },
        ],
      },
    },
    zh: {
      hero: {
        title: '更聪明地学英语，而不是更辛苦。',
        description: '现代化界面搭配可视化词源，让每一次记忆都从理解出发，而不是死记硬背。',
        primaryCta: '进入词根索引',
        secondaryCta: '了解方法论',
        alt: '一棵由英文词根组成的词汇树插画。',
      },
      detail: {
        label: '词根路线',
        title: '每个词条都被追溯到最初的词根。',
        description:
          '我们把单词拆解到拉丁或希腊词根，自动串联同源词，并引导你深入专属的词根页面。',
        support: '在词根页中对比释义、音标、语义领域等内容，建立持久的记忆网络。',
        cta: '立即前往词根页',
        highlights: [
          {
            title: '分步骤拆分',
            description: '前缀、词干、后缀逐一标注，辅以易懂的中文提示。',
          },
          {
            title: '同源词关联',
            description: '通过反向链接查看一个词根如何衍生出大量单词。',
          },
          {
            title: '记忆辅助',
            description: '主题标签与配色提示带来更现代的视觉记忆体验。',
          },
        ],
      },
    },
  } as const;

  const localeCopy = copy[locale as keyof typeof copy] ?? copy.en;

  return (
    <div className="space-y-12">
      <section className="grid gap-10 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-brand/5 via-background to-background p-8 shadow-lg md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-brand">{dictionary.tagline}</p>
          <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
            {localeCopy.hero.title}
          </h1>
          <p className="text-lg text-muted-foreground">{dictionary.heroSubtitle}</p>
          <p className="text-base text-muted-foreground">{localeCopy.hero.description}</p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/roots"
              className="inline-flex items-center rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition hover:opacity-90"
            >
              {localeCopy.hero.primaryCta}
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground transition hover:border-foreground/60"
            >
              {localeCopy.hero.secondaryCta}
            </Link>
          </div>
        </div>
        <div className="relative min-h-[280px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-2xl border border-border/80 bg-gradient-to-tr from-background via-transparent to-brand/30"
          />
          <Image
            src={heroIllustration}
            alt={localeCopy.hero.alt}
            priority
            className="relative h-full w-full rounded-2xl border border-border/50 object-cover shadow-2xl"
            sizes="(min-width: 768px) 40vw, 90vw"
          />
        </div>
      </section>
      <section className="grid gap-8 rounded-3xl border border-border bg-surface/60 p-8 shadow-sm md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            {localeCopy.detail.label}
          </p>
          <h2 className="text-3xl font-semibold text-foreground">{localeCopy.detail.title}</h2>
          <p className="text-lg text-muted-foreground">{localeCopy.detail.description}</p>
          <p className="text-base text-muted-foreground">{localeCopy.detail.support}</p>
          <Link
            href="/roots"
            className="inline-flex items-center text-sm font-semibold text-brand underline-offset-4 hover:underline"
          >
            {localeCopy.detail.cta}
          </Link>
        </div>
        <div className="grid gap-4">
          {localeCopy.detail.highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="rounded-2xl border border-border/80 bg-background/70 p-5 shadow-sm"
            >
              <p className="text-base font-semibold text-foreground">{highlight.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
