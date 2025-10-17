import type { WordEntry } from '@/types/content';

export const WORDS: WordEntry[] = [
  {
    slug: 'biology',
    lemma: 'biology',
    definitions: {
      en: 'The scientific study of living organisms and life processes.',
      zh: '研究生物体及其生命过程的科学。'
    },
    example: {
      en: 'Biology explains how organisms grow, adapt, and interact.',
      zh: '生物学解释了生物如何生长、适应并相互作用。'
    },
    rootBreakdown: ['bio', 'logy'],
    relatedWords: ['geology', 'chronicle'],
    popularityScore: 91
  },
  {
    slug: 'chronicle',
    lemma: 'chronicle',
    definitions: {
      en: 'A detailed and factual written account of past events.',
      zh: '对过去事件的详细记录。'
    },
    example: {
      en: 'The documentary is a chronicle of the expedition.',
      zh: '这部纪录片记录了探险的全过程。'
    },
    rootBreakdown: ['chron', 'icle'],
    relatedWords: ['biology', 'geology'],
    popularityScore: 76
  },
  {
    slug: 'geology',
    lemma: 'geology',
    definitions: {
      en: 'The science that deals with the earth’s physical structure and substance.',
      zh: '研究地球物质和结构的科学。'
    },
    example: {
      en: 'Geology reveals the forces shaping our planet.',
      zh: '地质学揭示了塑造地球的力量。'
    },
    rootBreakdown: ['geo', 'logy'],
    relatedWords: ['biology', 'chronicle'],
    popularityScore: 83
  }
];

export const getWordBySlug = (slug: string) => WORDS.find((word) => word.slug === slug);
