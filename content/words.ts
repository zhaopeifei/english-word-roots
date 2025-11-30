import type { WordEntry } from '@/types/content';

export const WORDS: WordEntry[] = [
  {
    slug: 'biology',
    lemma: 'biology',
    pronunciation: {
      uk: { ipa: '/baɪˈɒl.ə.dʒi/' },
      us: { ipa: '/baɪˈɑː.lə.dʒi/' },
    },
    definition: {
      en: 'The scientific study of living organisms and life processes.',
      zh: '研究生物体及其生命过程的科学。',
    },
    examples: [
      {
        en: ['Biology explains how organisms grow, adapt, and interact.'],
        zh: ['生物学解释了生物如何生长、适应并相互作用。'],
      },
      {
        en: ['She decided to major in biology to study marine ecosystems.'],
        zh: ['她决定主修生物学，以研究海洋生态系统。'],
      },
      {
        en: ['Advances in biology often lead to breakthroughs in modern medicine.'],
        zh: ['生物学的突破往往能推动现代医学的发展。'],
      },
    ],
    rootBreakdown: [
      { surface: 'bio', type: 'root', rootSlug: 'bio' },
      { surface: 'logy', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'bio ("life") + -logy ("study of") -> the study of life.',
      zh: 'bio（生命）+ -logy（学科）→ 研究生命的学科。',
    },
    relatedWords: ['geology', 'chronicle'],
  },
  {
    slug: 'chronicle',
    lemma: 'chronicle',
    pronunciation: {
      uk: { ipa: '/ˈkrɒn.ɪ.kəl/' },
      us: { ipa: '/ˈkrɑː.nɪ.kəl/' },
    },
    definition: {
      en: 'A detailed and factual written account of past events.',
      zh: '对过去事件的详细记录。',
    },
    examples: [
      {
        en: ['The documentary is a chronicle of the expedition.'],
        zh: ['这部纪录片记录了探险的全过程。'],
      },
      {
        en: ["Medieval monks kept a chronicle of the kingdom's rulers."],
        zh: ['中世纪的修士记录了王国统治者的编年史。'],
      },
      {
        en: ['Each entry in the chronicle highlights a major turning point.'],
        zh: ['这部编年史中的每篇记录都强调了一个重大转折点。'],
      },
    ],
    rootBreakdown: [
      { surface: 'chron', type: 'root', rootSlug: 'chron' },
      { surface: 'icle', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'chron ("time") + -icle (noun suffix) -> a record anchored in time.',
      zh: 'chron（时间）+ -icle（名词后缀）→ 以时间为线索的记录。',
    },
    relatedWords: ['biology', 'geology'],
  },
  {
    slug: 'geology',
    lemma: 'geology',
    pronunciation: {
      uk: { ipa: '/dʒiˈɒl.ə.dʒi/' },
      us: { ipa: '/dʒiˈɑː.lə.dʒi/' },
    },
    definition: {
      en: 'The science that deals with the earth’s physical structure and substance.',
      zh: '研究地球物质和结构的科学。',
    },
    examples: [
      {
        en: ['Geology reveals the forces shaping our planet.'],
        zh: ['地质学揭示了塑造地球的力量。'],
      },
      {
        en: ['Fieldwork in geology often requires weeks in remote deserts.'],
        zh: ['地质野外调查常常需要在偏远沙漠驻扎数周。'],
      },
      {
        en: ['Geology classes teach students to read rock layers like a timeline of Earth.'],
        zh: ['地质课教学生像读时间轴一样解读岩层。'],
      },
    ],
    rootBreakdown: [
      { surface: 'geo', type: 'root', rootSlug: 'geo' },
      { surface: 'logy', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'geo ("earth") + -logy ("study of") -> the study of Earth.',
      zh: 'geo（地球）+ -logy（学科）→ 研究地球的学科。',
    },
    relatedWords: ['biology', 'chronicle'],
  },
];

export const getWordBySlug = (slug: string) => WORDS.find((word) => word.slug === slug);
