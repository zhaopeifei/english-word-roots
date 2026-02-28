import type { WordEntry } from '@/types/content';

export const ROT_WORDS: WordEntry[] = [
  {
    slug: 'rotate',
    lemma: 'rotate',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/rəʊˈteɪt/' },
      us: { ipa: '/ˈroʊ.teɪt/' },
    },
    definition: {
      en: 'To move in a circle around an axis or center.',
      zh: '旋转；轮流',
    },
    examples: [
      {
        en: ['The Earth rotates on its axis once every 24 hours.'],
        zh: ['地球每24小时绕自转轴旋转一周。'],
      },
    ],
    rootBreakdown: [
      { surface: 'rot', type: 'root', rootSlug: 'rot' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'rot ("wheel, turn") + -ate (verb) → to turn in a circle.',
      zh: 'rot（轮、转）+ -ate（动词后缀）→ 做圆周运动，即旋转。',
    },
    relatedWords: ['rotation', 'rotary'],
  },
  {
    slug: 'rotation',
    lemma: 'rotation',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/rəʊˈteɪ.ʃən/' },
      us: { ipa: '/roʊˈteɪ.ʃən/' },
    },
    definition: {
      en: 'The action of rotating; a regular cycle of changes.',
      zh: '旋转；轮换',
    },
    examples: [
      {
        en: ['Crop rotation helps maintain soil fertility.'],
        zh: ['轮作有助于保持土壤肥力。'],
      },
    ],
    rootBreakdown: [
      { surface: 'rot', type: 'root', rootSlug: 'rot' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'rot ("turn") + -ation (noun) → the act of turning.',
      zh: 'rot（转）+ -ation（名词后缀）→ 转动的行为，即旋转、轮换。',
    },
    relatedWords: ['rotate', 'rotary', 'rotational'],
  },
  {
    slug: 'rotary',
    lemma: 'rotary',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: {
      uk: { ipa: '/ˈrəʊ.tər.i/' },
      us: { ipa: '/ˈroʊ.t̬ɚ.i/' },
    },
    definition: {
      en: 'Relating to or involving rotation; a traffic circle.',
      zh: '旋转的；环形交叉路口',
    },
    examples: [
      {
        en: ['The old telephone had a rotary dial.'],
        zh: ['那部老电话有一个旋转拨盘。'],
      },
    ],
    rootBreakdown: [
      { surface: 'rot', type: 'root', rootSlug: 'rot' },
      { surface: 'ary', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'rot ("turn") + -ary (adj.) → relating to turning.',
      zh: 'rot（转）+ -ary（形容词后缀）→ 与转动有关的。',
    },
    relatedWords: ['rotate', 'rotation'],
  },
  {
    slug: 'rote',
    lemma: 'rote',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/rəʊt/' },
      us: { ipa: '/roʊt/' },
    },
    definition: {
      en: 'Mechanical or habitual repetition as a way of learning.',
      zh: '死记硬背；机械学习',
    },
    examples: [
      {
        en: ['He learned the poem by rote without understanding its meaning.'],
        zh: ['他死记硬背了这首诗，却不理解其含义。'],
      },
    ],
    rootBreakdown: [{ surface: 'rote', type: 'root', rootSlug: 'rot' }],
    morphologyNote: {
      en: 'From rot ("wheel, routine") → learning by repetitive cycling, like a wheel.',
      zh: '源自 rot（轮、循环）→ 像轮子一样反复循环的学习，即死记硬背。',
    },
    relatedWords: ['rotate', 'rotation', 'routine'],
  },
];
