import type { RootEntry } from '@/types/content';

export const ROOTS: RootEntry[] = [
  {
    slug: 'bio',
    canonicalForm: 'bio',
    languageOfOrigin: 'Greek',
    originSummary: 'Derived from the Greek “βίος” meaning life, used across biology-related terminology.',
    semanticDomain: ['science', 'life'],
    popularityScore: 92,
    relatedRoots: ['chron', 'geo'],
    associatedWords: ['biology'],
    overview: {
      en: 'An essential root for life sciences, appearing in academic and popular vocabulary.',
      zh: '生命科学领域的基础词根，在学术和日常词汇中都十分常见。'
    }
  },
  {
    slug: 'chron',
    canonicalForm: 'chron',
    languageOfOrigin: 'Greek',
    originSummary: 'From “χρόνος” meaning time, it forms words about timekeeping and history.',
    semanticDomain: ['time', 'history'],
    popularityScore: 81,
    relatedRoots: ['bio', 'geo'],
    associatedWords: ['chronicle'],
    overview: {
      en: 'Chron connects terms about time, sequence, and historical narration.',
      zh: 'Chron 关联时间、顺序和历史叙述相关的词汇。'
    }
  },
  {
    slug: 'geo',
    canonicalForm: 'geo',
    languageOfOrigin: 'Greek',
    originSummary: 'From “γῆ” meaning earth, appearing in geography and geology-related terms.',
    semanticDomain: ['earth', 'science'],
    popularityScore: 88,
    relatedRoots: ['bio', 'chron'],
    associatedWords: ['geology'],
    overview: {
      en: 'Geo links earth science and spatial reasoning vocabulary.',
      zh: 'Geo 将地球科学与空间概念的词汇连接起来。'
    }
  }
];

export const getRootBySlug = (slug: string) => ROOTS.find((root) => root.slug === slug);
