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
    variants: 'Variants',
    domains: 'Semantic Domains',
    details: 'Root Details',
    backToRoots: 'Browse all roots',
    backToWords: 'Browse all words',

    aboutTitle: 'About English Word Roots',
    aboutMission:
      'A bilingual etymology atlas powered by Grimm\'s Law, mapping how English words grow from shared roots.',
    translatedBy: 'Translated copy (beta)',
    language: 'Language',
    langAuto: 'Auto',
    langEnglish: 'English',
    langChinese: '中文',
    theme: 'Theme',
    light: 'Light',
    dark: 'Dark',
    system: 'System',
    rootOverview: 'Root Overview',
    wordOverview: 'Word Overview',
    wordBreakdown: 'Root Breakdown',
    examples: 'Example Sentences',
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
    variants: '变体',
    domains: '语义领域',
    details: '词根信息',
    backToRoots: '浏览全部词根',
    backToWords: '浏览全部词汇',

    aboutTitle: '关于 English Word Roots',
    aboutMission: '以格林法则为核心，梳理英语单词如何从共同词根生长的双语词源导图。',
    translatedBy: '翻译文本（测试版）',
    language: '语言',
    langAuto: '自动',
    langEnglish: 'English',
    langChinese: '中文',
    theme: '主题',
    light: '浅色',
    dark: '深色',
    system: '系统',
    rootOverview: '词根概览',
    wordOverview: '单词概览',
    wordBreakdown: '词根拆分',
    examples: '例句',
    exploreIntro: '可过滤的静态数据集目录，涵盖所有词根与单词。',
  },
};

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
