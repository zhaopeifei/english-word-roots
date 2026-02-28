import type { WordEntry } from '@/types/content';

export const TREM_WORDS: WordEntry[] = [
  {
    slug: 'tremble',
    lemma: 'tremble',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: {
      uk: { ipa: '/ˈtrem.bəl/' },
      us: { ipa: '/ˈtrem.bəl/' },
    },
    definition: {
      en: 'To shake involuntarily from fear, cold, or weakness.',
      zh: '颤抖；发抖；哆嗦',
    },
    examples: [
      {
        en: ['Her hands trembled as she opened the letter.'],
        zh: ['她打开信时双手颤抖。'],
      },
    ],
    rootBreakdown: [
      { surface: 'trem', type: 'root', rootSlug: 'trem' },
      { surface: 'ble', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'trem ("shake, quiver") + -ble (verb) → to shake or quiver.',
      zh: 'trem（震动、颤动）+ -ble（动词后缀）→ 震颤。',
    },
    relatedWords: ['tremor', 'tremendous', 'tremulous'],
  },
  {
    slug: 'tremor',
    lemma: 'tremor',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈtrem.ər/' },
      us: { ipa: '/ˈtrem.ɚ/' },
    },
    definition: {
      en: 'An involuntary shaking movement; a slight earthquake.',
      zh: '震颤；微震',
    },
    examples: [
      {
        en: ['A slight tremor was felt across the city.'],
        zh: ['全城感受到了轻微的震动。'],
      },
    ],
    rootBreakdown: [
      { surface: 'trem', type: 'root', rootSlug: 'trem' },
      { surface: 'or', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'trem ("shake") + -or (noun) → a shaking.',
      zh: 'trem（震动）+ -or（名词后缀）→ 震动。',
    },
    relatedWords: ['tremble', 'tremendous', 'tremulous'],
  },
  {
    slug: 'tremendous',
    lemma: 'tremendous',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/trɪˈmen.dəs/' },
      us: { ipa: '/trɪˈmen.dəs/' },
    },
    definition: {
      en: 'Very great in amount, size, or intensity; extremely good.',
      zh: '巨大的；极大的；了不起的',
    },
    examples: [
      {
        en: ['The team made tremendous progress this quarter.'],
        zh: ['团队在这个季度取得了巨大的进步。'],
      },
    ],
    rootBreakdown: [
      { surface: 'trem', type: 'root', rootSlug: 'trem' },
      { surface: 'end', type: 'connector' },
      { surface: 'ous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'trem ("shake") + -endous (adj.) → so great as to cause trembling.',
      zh: 'trem（震动）+ -endous（形容词后缀）→ 大到令人发抖的，即巨大的。',
    },
    relatedWords: ['tremble', 'tremor', 'tremulous'],
  },
  {
    slug: 'tremulous',
    lemma: 'tremulous',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈtrem.jʊ.ləs/' },
      us: { ipa: '/ˈtrem.jə.ləs/' },
    },
    definition: {
      en: 'Shaking or quivering slightly; timid or nervous.',
      zh: '颤抖的；胆怯的',
    },
    examples: [
      {
        en: ['She spoke in a tremulous voice during the speech.'],
        zh: ['她演讲时声音颤抖。'],
      },
    ],
    rootBreakdown: [
      { surface: 'trem', type: 'root', rootSlug: 'trem' },
      { surface: 'ul', type: 'connector' },
      { surface: 'ous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'trem ("shake") + -ulous (adj.) → characterized by shaking.',
      zh: 'trem（震动）+ -ulous（形容词后缀）→ 以颤抖为特征的。',
    },
    relatedWords: ['tremble', 'tremor', 'tremendous'],
  },
  {
    slug: 'intrepid',
    lemma: 'intrepid',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ɪnˈtrep.ɪd/' },
      us: { ipa: '/ɪnˈtrep.ɪd/' },
    },
    definition: {
      en: 'Fearless and adventurous.',
      zh: '无畏的；勇敢的',
    },
    examples: [
      {
        en: ['The intrepid explorers ventured deep into the jungle.'],
        zh: ['无畏的探险者们深入丛林探险。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'trepid', type: 'root', rootSlug: 'trem' },
    ],
    morphologyNote: {
      en: 'in- ("not") + trepid (from trem, "tremble, fear") → not trembling, i.e. fearless.',
      zh: 'in-（不）+ trepid（源自 trem，颤抖、恐惧）→ 不颤抖的，即无畏的。',
    },
    relatedWords: ['tremble', 'tremor', 'trepidation'],
  },
];
