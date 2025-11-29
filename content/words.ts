import type { WordEntry } from '@/types/content';

export const WORDS: WordEntry[] = [
  {
    slug: 'biology',
    lemma: 'biology',
    definition: {
      en: 'The scientific study of living organisms and life processes.',
      zh: '研究生物体及其生命过程的科学。'
    },
    examples: {
      en: ['Biology explains how organisms grow, adapt, and interact.'],
      zh: ['生物学解释了生物如何生长、适应并相互作用。']
    },
    rootBreakdown: [
      { surface: 'bio', type: 'root', rootSlug: 'bio' },
      { surface: 'logy', type: 'suffix' }
    ],
    relatedWords: ['geology', 'chronicle']
  },
  {
    slug: 'chronicle',
    lemma: 'chronicle',
    definition: {
      en: 'A detailed and factual written account of past events.',
      zh: '对过去事件的详细记录。'
    },
    examples: {
      en: ['The documentary is a chronicle of the expedition.'],
      zh: ['这部纪录片记录了探险的全过程。']
    },
    rootBreakdown: [
      { surface: 'chron', type: 'root', rootSlug: 'chron' },
      { surface: 'icle', type: 'suffix' }
    ],
    relatedWords: ['biology', 'geology']
  },
  {
    slug: 'geology',
    lemma: 'geology',
    definition: {
      en: 'The science that deals with the earth’s physical structure and substance.',
      zh: '研究地球物质和结构的科学。'
    },
    examples: {
      en: ['Geology reveals the forces shaping our planet.'],
      zh: ['地质学揭示了塑造地球的力量。']
    },
    rootBreakdown: [
      { surface: 'geo', type: 'root', rootSlug: 'geo' },
      { surface: 'logy', type: 'suffix' }
    ],
    relatedWords: ['biology', 'chronicle']
  }
];

export const getWordBySlug = (slug: string) => WORDS.find((word) => word.slug === slug);
