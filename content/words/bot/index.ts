import type { WordEntry } from '@/types/content';

export const BOT_WORDS: WordEntry[] = [
  {
    slug: 'botany',
    lemma: 'botany',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈbɒt.ən.i/' },
      us: { ipa: '/ˈbɑː.t̬ən.i/' },
    },
    definition: {
      en: 'The scientific study of plants.',
      zh: '植物学',
    },
    examples: [
      {
        en: ['She studied botany to learn more about medicinal plants.'],
        zh: ['她学习植物学以了解更多药用植物知识。'],
      },
    ],
    rootBreakdown: [
      { surface: 'bot', type: 'root', rootSlug: 'bot' },
      { surface: 'an', type: 'connector' },
      { surface: 'y', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'bot (from Greek botane, "plant, herb") + -an- + -y (noun suffix) → the study of plants.',
      zh: 'bot（源自希腊语 botane，植物、草本）+ -an- + -y（名词后缀）→ 研究植物的学科。',
    },
    relatedWords: ['botanist', 'botanical', 'botanic'],
  },
  {
    slug: 'botanist',
    lemma: 'botanist',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈbɒt.ən.ɪst/' },
      us: { ipa: '/ˈbɑː.t̬ən.ɪst/' },
    },
    definition: {
      en: 'A scientist who specializes in the study of plants.',
      zh: '植物学家',
    },
    examples: [
      {
        en: ['The botanist discovered a new species of orchid in the rainforest.'],
        zh: ['这位植物学家在雨林中发现了一种新的兰花。'],
      },
    ],
    rootBreakdown: [
      { surface: 'bot', type: 'root', rootSlug: 'bot' },
      { surface: 'an', type: 'connector' },
      { surface: 'ist', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'bot ("plant") + -an- + -ist (person suffix) → a person who studies plants.',
      zh: 'bot（植物）+ -an- + -ist（人物后缀）→ 研究植物的人。',
    },
    relatedWords: ['botany', 'botanical', 'botanic'],
  },
  {
    slug: 'botanic',
    lemma: 'botanic',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/bəˈtæn.ɪk/' },
      us: { ipa: '/bəˈtæn.ɪk/' },
    },
    definition: {
      en: 'Relating to plants or botany.',
      zh: '植物学的；植物的',
    },
    examples: [
      {
        en: ['We visited the botanic garden to see rare tropical plants.'],
        zh: ['我们参观了植物园，欣赏稀有热带植物。'],
      },
    ],
    rootBreakdown: [
      { surface: 'bot', type: 'root', rootSlug: 'bot' },
      { surface: 'an', type: 'connector' },
      { surface: 'ic', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'bot ("plant") + -an- + -ic (adjective suffix) → relating to plants.',
      zh: 'bot（植物）+ -an- + -ic（形容词后缀）→ 与植物有关的。',
    },
    relatedWords: ['botany', 'botanist', 'botanical'],
  },
  {
    slug: 'botanical',
    lemma: 'botanical',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/bəˈtæn.ɪ.kəl/' },
      us: { ipa: '/bəˈtæn.ɪ.kəl/' },
    },
    definition: {
      en: 'Of or relating to plants or the study of plants.',
      zh: '植物学的；关于植物的',
    },
    examples: [
      {
        en: ['The botanical illustration captured every detail of the flower.'],
        zh: ['这幅植物学插图捕捉了花朵的每一个细节。'],
      },
    ],
    rootBreakdown: [
      { surface: 'bot', type: 'root', rootSlug: 'bot' },
      { surface: 'an', type: 'connector' },
      { surface: 'ical', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'bot ("plant") + -an- + -ical (adjective suffix) → pertaining to the study of plants.',
      zh: 'bot（植物）+ -an- + -ical（形容词后缀）→ 与植物学相关的。',
    },
    relatedWords: ['botany', 'botanist', 'botanic'],
  },
];
