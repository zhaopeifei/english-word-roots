import type { WordEntry } from '@/types/content';

export const DEC_WORDS: WordEntry[] = [
  {
    slug: 'decade',
    lemma: 'decade',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈdek.eɪd/' },
      us: { ipa: '/ˈdek.eɪd/' },
    },
    definition: {
      en: 'A period of ten years.',
      zh: '十年',
    },
    examples: [
      {
        en: ['The city has changed dramatically over the past decade.'],
        zh: ['这座城市在过去十年中发生了巨大变化。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dec', type: 'root', rootSlug: 'dec' },
      { surface: 'ade', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dec ("ten, fitting, proper") + -ade (noun suffix) → a group of ten (years).',
      zh: 'dec（十、合适的）+ -ade（名词后缀）→ 十个（年）的一组，即十年。',
    },
    relatedWords: ['decorate', 'decorous', 'decent'],
  },
  {
    slug: 'decorate',
    lemma: 'decorate',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˈdek.ə.reɪt/' },
      us: { ipa: '/ˈdek.ə.reɪt/' },
    },
    definition: {
      en: 'To make something look more attractive by adding extra items or ornament.',
      zh: '装饰；装修；布置',
    },
    examples: [
      {
        en: ['They decorated the room with balloons and streamers for the party.'],
        zh: ['他们用气球和彩带装饰房间来举办派对。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dec', type: 'root', rootSlug: 'dec' },
      { surface: 'or', type: 'connector' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dec ("fitting, beautiful") + -or- + -ate (verb suffix) → to make fitting or beautiful.',
      zh: 'dec（合适的、美丽的）+ -or- + -ate（动词后缀）→ 使变得合适或美丽，即装饰。',
    },
    relatedWords: ['decoration', 'decorative', 'decor'],
  },
  {
    slug: 'decoration',
    lemma: 'decoration',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˌdek.əˈreɪ.ʃən/' },
      us: { ipa: '/ˌdek.əˈreɪ.ʃən/' },
    },
    definition: {
      en: 'The process of decorating; an ornamental item.',
      zh: '装饰；装饰品',
    },
    examples: [
      {
        en: ['The holiday decorations brought warmth to the entire street.'],
        zh: ['节日装饰给整条街道带来了温暖。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dec', type: 'root', rootSlug: 'dec' },
      { surface: 'or', type: 'connector' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dec ("fitting") + -or- + -ation (noun suffix) → the act of making fitting, an ornament.',
      zh: 'dec（合适的）+ -or- + -ation（名词后缀）→ 使合适的行为，即装饰。',
    },
    relatedWords: ['decorate', 'decorative', 'decor'],
  },
  {
    slug: 'decorative',
    lemma: 'decorative',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈdek.ər.ə.tɪv/' },
      us: { ipa: '/ˈdek.ɚ.ə.t̬ɪv/' },
    },
    definition: {
      en: 'Serving to make something look more attractive; ornamental.',
      zh: '装饰的；装饰性的',
    },
    examples: [
      {
        en: ['The vase serves a purely decorative purpose.'],
        zh: ['这个花瓶纯粹是装饰用的。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dec', type: 'root', rootSlug: 'dec' },
      { surface: 'or', type: 'connector' },
      { surface: 'ative', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dec ("fitting") + -or- + -ative (adjective) → serving to make fitting or beautiful.',
      zh: 'dec（合适的）+ -or- + -ative（形容词后缀）→ 用于使之美观的。',
    },
    relatedWords: ['decorate', 'decoration', 'decor'],
  },
  {
    slug: 'decorous',
    lemma: 'decorous',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈdek.ər.əs/' },
      us: { ipa: '/ˈdek.ɚ.əs/' },
    },
    definition: {
      en: 'Polite and restrained in a way that is socially correct.',
      zh: '得体的；端庄的；有礼貌的',
    },
    examples: [
      {
        en: ['The guests maintained decorous behavior throughout the ceremony.'],
        zh: ['客人们在整个仪式中保持了得体的举止。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dec', type: 'root', rootSlug: 'dec' },
      { surface: 'or', type: 'connector' },
      { surface: 'ous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dec ("fitting, proper") + -or- + -ous (adjective) → fitting and proper in behavior.',
      zh: 'dec（合适的、得体的）+ -or- + -ous（形容词后缀）→ 行为得体的。',
    },
    relatedWords: ['decorate', 'indecorous', 'decent'],
  },
  {
    slug: 'decor',
    lemma: 'decor',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈdeɪ.kɔːr/' },
      us: { ipa: '/deɪˈkɔːr/' },
    },
    definition: {
      en: 'The furnishing and decoration of a room or building.',
      zh: '装潢；装饰风格',
    },
    examples: [
      {
        en: ["The hotel's modern decor impressed all the guests."],
        zh: ['酒店的现代装潢给所有客人留下了深刻印象。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dec', type: 'root', rootSlug: 'dec' },
      { surface: 'or', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dec ("fitting, beautiful") + -or (noun suffix) → what makes a place fitting, decor.',
      zh: 'dec（合适的、美丽的）+ -or（名词后缀）→ 使场所合适的东西，即装潢。',
    },
    relatedWords: ['decorate', 'decoration', 'decorative'],
  },
  {
    slug: 'indecent',
    lemma: 'indecent',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ɪnˈdiː.sənt/' },
      us: { ipa: '/ɪnˈdiː.sənt/' },
    },
    definition: {
      en: 'Not conforming with generally accepted standards of behavior; offensive.',
      zh: '不雅的；下流的；不得体的',
    },
    examples: [
      {
        en: ['The comedian was criticized for making indecent jokes.'],
        zh: ['这位喜剧演员因讲了不雅笑话而受到批评。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'dec', type: 'root', rootSlug: 'dec' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("not") + dec ("fitting, proper") + -ent (adjective) → not fitting, improper.',
      zh: 'in-（不）+ dec（合适的、得体的）+ -ent（形容词后缀）→ 不得体的。',
    },
    relatedWords: ['decent', 'decorous', 'indecorous'],
  },
];
