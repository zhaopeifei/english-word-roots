import type { WordEntry } from '@/types/content';

export const ZO_WORDS: WordEntry[] = [
  {
    slug: 'zoo',
    lemma: 'zoo',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/zuː/' }, us: { ipa: '/zuː/' } },
    definition: { en: 'A place where wild animals are kept for public display.', zh: '动物园' },
    examples: [
      { en: ['The children were excited to visit the zoo.'], zh: ['孩子们对参观动物园感到兴奋。'] },
    ],
    rootBreakdown: [
      { surface: 'zo', type: 'root', rootSlug: 'zo' },
      { surface: 'o', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'zo ("animal, living being") + -o → a place for animals (shortened from "zoological garden").',
      zh: 'zo（动物）+ -o → 动物的地方（缩写自 zoological garden）。',
    },
    relatedWords: ['zoology', 'zoologist', 'zodiac'],
  },
  {
    slug: 'zoology',
    lemma: 'zoology',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/zuˈɒl.ə.dʒi/' }, us: { ipa: '/zuˈɑː.lə.dʒi/' } },
    definition: {
      en: 'The scientific study of the behavior, structure, and classification of animals.',
      zh: '动物学',
    },
    examples: [
      {
        en: ['She pursued a degree in zoology to study marine life.'],
        zh: ['她攻读动物学学位以研究海洋生物。'],
      },
    ],
    rootBreakdown: [
      { surface: 'zo', type: 'root', rootSlug: 'zo' },
      { surface: 'o', type: 'connector' },
      { surface: 'logy', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'zo ("animal") + -ology ("study of") → the study of animals.',
      zh: 'zo（动物）+ -ology（学科）→ 研究动物的学科。',
    },
    relatedWords: ['zoologist', 'zoological', 'zoo'],
  },
  {
    slug: 'zoologist',
    lemma: 'zoologist',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/zuˈɒl.ə.dʒɪst/' }, us: { ipa: '/zuˈɑː.lə.dʒɪst/' } },
    definition: { en: 'A scientist who studies animals.', zh: '动物学家' },
    examples: [
      {
        en: ['The zoologist spent years observing primates in the wild.'],
        zh: ['这位动物学家花了数年在野外观察灵长类动物。'],
      },
    ],
    rootBreakdown: [
      { surface: 'zo', type: 'root', rootSlug: 'zo' },
      { surface: 'o', type: 'connector' },
      { surface: 'log', type: 'root' },
      { surface: 'ist', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'zo ("animal") + log ("study") + -ist ("person") → a person who studies animals.',
      zh: 'zo（动物）+ log（研究）+ -ist（从事者）→ 研究动物的人。',
    },
    relatedWords: ['zoology', 'zoological', 'zoo'],
  },
  {
    slug: 'zodiac',
    lemma: 'zodiac',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈzəʊ.di.æk/' }, us: { ipa: '/ˈzoʊ.di.æk/' } },
    definition: {
      en: 'A belt of the sky divided into twelve signs, each associated with a constellation.',
      zh: '黄道带；十二宫',
    },
    examples: [
      {
        en: ['Many cultures developed their own version of the zodiac.'],
        zh: ['许多文化发展出了自己版本的黄道十二宫。'],
      },
    ],
    rootBreakdown: [
      { surface: 'zo', type: 'root', rootSlug: 'zo' },
      { surface: 'di', type: 'connector' },
      { surface: 'ac', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'zo ("animal, living creature") + -diac ("circle") → a circle of animal figures in the sky.',
      zh: 'zo（动物）+ -diac（圆圈）→ 天空中由动物形象组成的圆圈。',
    },
    relatedWords: ['zoo', 'zoology', 'zoological'],
  },
  {
    slug: 'zoological',
    lemma: 'zoological',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˌzuː.əˈlɒdʒ.ɪ.kəl/' }, us: { ipa: '/ˌzuː.əˈlɑː.dʒɪ.kəl/' } },
    definition: { en: 'Relating to the scientific study of animals.', zh: '动物学的' },
    examples: [
      {
        en: ['The zoological survey identified three new species.'],
        zh: ['动物学调查发现了三个新物种。'],
      },
    ],
    rootBreakdown: [
      { surface: 'zo', type: 'root', rootSlug: 'zo' },
      { surface: 'o', type: 'connector' },
      { surface: 'log', type: 'root' },
      { surface: 'ical', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'zo ("animal") + log ("study") + -ical (adj.) → relating to the study of animals.',
      zh: 'zo（动物）+ log（研究）+ -ical（形容词后缀）→ 与动物学有关的。',
    },
    relatedWords: ['zoology', 'zoologist', 'zoo'],
  },
];
