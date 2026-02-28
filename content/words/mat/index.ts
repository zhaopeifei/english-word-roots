import type { WordEntry } from '@/types/content';

export const MAT_WORDS: WordEntry[] = [
  {
    slug: 'mature',
    lemma: 'mature',
    partOfSpeech: ['adj.', 'vi.'],
    pronunciation: { uk: { ipa: '/məˈtʃʊər/' }, us: { ipa: '/məˈtʃʊr/' } },
    definition: {
      en: 'Fully developed physically or mentally; to become fully grown.',
      zh: '成熟的；充分考虑的',
    },
    examples: [
      {
        en: ['It takes years for some wines to mature properly.'],
        zh: ['有些葡萄酒需要多年才能充分成熟。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mat', type: 'root', rootSlug: 'mat' },
      { surface: 'ure', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mat ("ripe, timely") + -ure (adj./verb) → having reached ripeness.',
      zh: 'mat（成熟）+ -ure（后缀）→ 达到成熟的。',
    },
    relatedWords: ['maturity', 'immature', 'premature'],
  },
  {
    slug: 'immature',
    lemma: 'immature',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˌɪm.əˈtjʊər/' }, us: { ipa: '/ˌɪm.əˈtʃʊr/' } },
    definition: { en: 'Not fully developed; childish in behavior.', zh: '不成熟的；幼稚的' },
    examples: [
      {
        en: ['His immature behavior embarrassed everyone at the meeting.'],
        zh: ['他不成熟的行为让会议上所有人都感到尴尬。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'mat', type: 'root', rootSlug: 'mat' },
      { surface: 'ure', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- ("not") + mature ("ripe") → not ripe, not fully developed.',
      zh: 'im-（不）+ mature（成熟的）→ 不成熟的。',
    },
    relatedWords: ['mature', 'immaturity'],
  },
  {
    slug: 'maturity',
    lemma: 'maturity',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/məˈtʃʊə.rɪ.ti/' }, us: { ipa: '/məˈtʃʊr.ə.t̬i/' } },
    definition: { en: 'The state of being mature; full development.', zh: '成熟；完备' },
    examples: [
      {
        en: ['Emotional maturity comes with experience and self-reflection.'],
        zh: ['情感上的成熟来自经验和自我反思。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mat', type: 'root', rootSlug: 'mat' },
      { surface: 'ur', type: 'other' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mat ("ripe") + -urity (noun) → the state of ripeness.',
      zh: 'mat（成熟）+ -urity（名词后缀）→ 成熟的状态。',
    },
    relatedWords: ['mature', 'immature', 'premature'],
  },
  {
    slug: 'premature',
    lemma: 'premature',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈprem.ə.tʃʊər/' }, us: { ipa: '/ˌpriː.məˈtʃʊr/' } },
    definition: {
      en: 'Occurring or done before the proper time; born before full term.',
      zh: '早产的；过早的；仓促的',
    },
    examples: [
      {
        en: ['It would be premature to draw conclusions before all data is collected.'],
        zh: ['在收集所有数据之前就下结论为时过早。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pre', type: 'prefix' },
      { surface: 'mat', type: 'root', rootSlug: 'mat' },
      { surface: 'ure', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pre- ("before") + mat ("ripe") + -ure (adj.) → before ripeness, too early.',
      zh: 'pre-（在…之前）+ mat（成熟）+ -ure（形容词后缀）→ 在成熟之前的，即过早的。',
    },
    relatedWords: ['mature', 'prematurely', 'prematurity'],
  },
  {
    slug: 'mate',
    lemma: 'mate',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: { uk: { ipa: '/meɪt/' }, us: { ipa: '/meɪt/' } },
    definition: {
      en: 'A companion or partner; to come together for breeding.',
      zh: '伙伴；配偶；交配',
    },
    examples: [
      {
        en: ['She found the perfect mate and they married last summer.'],
        zh: ['她找到了完美的伴侣，去年夏天结了婚。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mat', type: 'root', rootSlug: 'mat' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mat ("matched, suited") + -e → one matched together, a companion.',
      zh: 'mat（匹配）+ -e → 匹配在一起的人，即伴侣。',
    },
    relatedWords: ['match', 'mature'],
  },
  {
    slug: 'match',
    lemma: 'match',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: { uk: { ipa: '/mætʃ/' }, us: { ipa: '/mætʃ/' } },
    definition: {
      en: 'A contest between opponents; a person or thing equal to another.',
      zh: '比赛；匹配；火柴',
    },
    examples: [
      {
        en: ['The chess match lasted for over five hours.'],
        zh: ['国际象棋比赛持续了五个多小时。'],
      },
    ],
    rootBreakdown: [{ surface: 'match', type: 'root', rootSlug: 'mat' }],
    morphologyNote: {
      en: 'match (related to mat, "equal, paired") → things paired or equal, a contest between equals.',
      zh: 'match（与 mat 相关，匹配）→ 对等的事物，即比赛。',
    },
    relatedWords: ['mate', 'mature'],
  },
];
