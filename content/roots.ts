import type { RootEntry } from '@/types/content';

export const ROOTS: RootEntry[] = [
  {
    slug: 'bio',
    variants: ['bio', 'bios', 'bi'],
    languageOfOrigin: 'Greek',
    overview: {
      en: 'An essential root for life sciences, appearing in academic and popular vocabulary.',
      zh: '生命科学领域的基础词根，在学术和日常词汇中都十分常见。'
    },
    originSummary: {
      en: 'Derived from the Greek “βίος” meaning life, used across biology-related terminology.',
      zh: '源自希腊语 “βίος”，意为“生命”，广泛用于生物学相关术语。'
    },
    semanticDomains: ['life', 'knowledge'],
    relatedRoots: ['chron', 'geo'],
    associatedWords: ['biology']
  },
  {
    slug: 'chron',
    variants: ['chron', 'chrono'],
    languageOfOrigin: 'Greek',
    overview: {
      en: 'Chron connects terms about time, sequence, and historical narration.',
      zh: 'Chron 关联时间、顺序和历史叙述相关的词汇。'
    },
    originSummary: {
      en: 'From “χρόνος” meaning time, it forms words about timekeeping and history.',
      zh: '源自希腊语 “χρόνος”，表示时间，多见于计时和历史相关词汇。'
    },
    semanticDomains: ['time'],
    relatedRoots: ['bio', 'geo'],
    associatedWords: ['chronicle']
  },
  {
    slug: 'geo',
    variants: ['geo', 'ge'],
    languageOfOrigin: 'Greek',
    overview: {
      en: 'Geo links earth science and spatial reasoning vocabulary.',
      zh: 'Geo 将地球科学与空间概念的词汇连接起来。'
    },
    originSummary: {
      en: 'From “γῆ” meaning earth, appearing in geography and geology-related terms.',
      zh: '源自希腊语 “γῆ”，意为“土地/大地”，常见于地理和地质词汇。'
    },
    semanticDomains: ['earth', 'nature'],
    relatedRoots: ['bio', 'chron'],
    associatedWords: ['geology']
  }
];

export const getRootBySlug = (slug: string) => ROOTS.find((root) => root.slug === slug);
