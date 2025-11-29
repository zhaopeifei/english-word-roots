import type { Locale } from '@/content/site';

type Dictionary = Record<string, string>;

type Dictionaries = Record<Locale, Dictionary>;

export const dictionaries: Dictionaries = {
  en: {
    tagline: 'Build vocabulary from the root up.',
    heroSubtitle: 'Root-driven discovery, multilingual context, and SEO-first performance.',

    origin: 'Origin',
    popularity: 'Popularity',
    relatedRoots: 'Related Roots',
    associatedWords: 'Associated Words',
    relatedWords: 'Related Words',
    backToRoots: 'Browse all roots',
    backToWords: 'Browse all words',

    aboutTitle: 'About English Word Roots',
    aboutMission:
      'Our mission is to make etymology-driven learning accessible to every language learner.',
    translatedBy: 'Translated copy (beta)',
    language: 'Language',
    theme: 'Theme',
    light: 'Light',
    dark: 'Dark',
    system: 'System',
    rootOverview: 'Root Overview',
    wordOverview: 'Word Overview',
    wordBreakdown: 'Root Breakdown',
    example: 'Example Sentence',
    exploreIntro: 'Filterable catalog of every root and word in the static dataset.',
  },
  zh: {
    tagline: '从词根出发，拓展词汇。',
    heroSubtitle: '词根驱动的探索，多语言上下文，以及以 SEO 为核心的性能。',

    origin: '来源',
    popularity: '热度',
    relatedRoots: '相关词根',
    associatedWords: '关联词汇',
    relatedWords: '相关词汇',
    backToRoots: '浏览全部词根',
    backToWords: '浏览全部词汇',

    aboutTitle: '关于 English Word Roots',
    aboutMission: '我们的使命是让词源驱动的学习惠及每一位语言学习者。',
    translatedBy: '翻译文本（测试版）',
    language: '语言',
    theme: '主题',
    light: '浅色',
    dark: '深色',
    system: '系统',
    rootOverview: '词根概览',
    wordOverview: '单词概览',
    wordBreakdown: '词根拆分',
    example: '例句',
    exploreIntro: '可过滤的静态数据集目录，涵盖所有词根与单词。',
  },
};

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
