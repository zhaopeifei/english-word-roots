import type { WordEntry } from '@/types/content';

export const TROP_WORDS: WordEntry[] = [
  {
    slug: 'tropical',
    lemma: 'tropical',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈtrɒp.ɪ.kəl/' },
      us: { ipa: '/ˈtrɑː.pɪ.kəl/' },
    },
    definition: {
      en: 'Relating to the tropics; very hot and humid.',
      zh: '热带的；炎热的',
    },
    examples: [
      {
        en: ['Tropical rainforests are home to an incredible variety of species.'],
        zh: ['热带雨林是种类繁多的物种的家园。'],
      },
    ],
    rootBreakdown: [
      { surface: 'trop', type: 'root', rootSlug: 'trop' },
      { surface: 'ical', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'trop ("turn") + -ical (adj.) → relating to where the sun turns back, i.e. the tropics.',
      zh: 'trop（转）+ -ical（形容词后缀）→ 与太阳折返之处有关的，即热带的。',
    },
    relatedWords: ['tropic', 'subtropical', 'heliotropism'],
  },
  {
    slug: 'trip',
    lemma: 'trip',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/trɪp/' },
      us: { ipa: '/trɪp/' },
    },
    definition: {
      en: "A journey; to stumble or lose one's footing.",
      zh: '旅行；绊倒',
    },
    examples: [
      {
        en: ['We planned a trip to the mountains for the weekend.'],
        zh: ['我们计划周末去山里旅行。'],
      },
    ],
    rootBreakdown: [{ surface: 'trip', type: 'root', rootSlug: 'trop' }],
    morphologyNote: {
      en: 'From trop ("turn") → a turning journey, i.e. a going out and returning.',
      zh: '源自 trop（转）→ 出去再回来的旅程。',
    },
    relatedWords: ['tropical', 'trophy'],
  },
  {
    slug: 'tropic',
    lemma: 'tropic',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈtrɒp.ɪk/' },
      us: { ipa: '/ˈtrɑː.pɪk/' },
    },
    definition: {
      en: 'Each of the two parallels of latitude where the sun reaches its zenith.',
      zh: '回归线；热带地区',
    },
    examples: [
      {
        en: ['The Tropic of Cancer lies north of the equator.'],
        zh: ['北回归线位于赤道以北。'],
      },
    ],
    rootBreakdown: [
      { surface: 'trop', type: 'root', rootSlug: 'trop' },
      { surface: 'ic', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'trop ("turn") + -ic (noun) → the line where the sun turns back.',
      zh: 'trop（转）+ -ic（名词后缀）→ 太阳折返的线，即回归线。',
    },
    relatedWords: ['tropical', 'subtropical', 'heliotropism'],
  },
  {
    slug: 'heliotropism',
    lemma: 'heliotropism',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˌhiː.liˈɒt.rə.pɪz.əm/' },
      us: { ipa: '/ˌhiː.liˈɑː.trə.pɪz.əm/' },
    },
    definition: {
      en: 'The tendency of plants to grow toward sunlight.',
      zh: '向日性；趋光性',
    },
    examples: [
      {
        en: ['Sunflowers are a well-known example of heliotropism.'],
        zh: ['向日葵是向日性的著名例子。'],
      },
    ],
    rootBreakdown: [
      { surface: 'helio', type: 'prefix' },
      { surface: 'trop', type: 'root', rootSlug: 'trop' },
      { surface: 'ism', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'helio ("sun") + trop ("turn") + -ism (noun) → the tendency to turn toward the sun.',
      zh: 'helio（太阳）+ trop（转向）+ -ism（名词后缀）→ 转向太阳的倾向。',
    },
    relatedWords: ['tropical', 'tropic'],
  },
];
