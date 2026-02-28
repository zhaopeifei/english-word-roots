import type { WordEntry } from '@/types/content';

export const MIGR_WORDS: WordEntry[] = [
  {
    slug: 'migrate',
    lemma: 'migrate',
    partOfSpeech: ['vi.'],
    pronunciation: { uk: { ipa: '/maɪˈɡreɪt/' }, us: { ipa: '/ˈmaɪ.ɡreɪt/' } },
    definition: {
      en: 'To move from one region or country to another.',
      zh: '迁移；移居；随季节而移居',
    },
    examples: [
      { en: ['Many birds migrate south for the winter.'], zh: ['许多鸟类冬天迁徙到南方。'] },
    ],
    rootBreakdown: [
      { surface: 'migr', type: 'root', rootSlug: 'migr' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'migr ("move, wander") + -ate (verb) → to move from place to place.',
      zh: 'migr（迁移）+ -ate（动词后缀）→ 从一地移到另一地。',
    },
    relatedWords: ['migration', 'migrant', 'migratory'],
  },
  {
    slug: 'migration',
    lemma: 'migration',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/maɪˈɡreɪ.ʃən/' }, us: { ipa: '/maɪˈɡreɪ.ʃən/' } },
    definition: {
      en: 'The movement of people or animals from one place to another.',
      zh: '迁移；移民',
    },
    examples: [
      {
        en: ["The annual migration of wildebeest is one of nature's great spectacles."],
        zh: ['角马的年度迁徙是自然界最壮观的景象之一。'],
      },
    ],
    rootBreakdown: [
      { surface: 'migr', type: 'root', rootSlug: 'migr' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'migr ("move") + -ation (noun) → the act of moving.',
      zh: 'migr（迁移）+ -ation（名词后缀）→ 迁移的行为。',
    },
    relatedWords: ['migrate', 'migrant'],
  },
  {
    slug: 'migrant',
    lemma: 'migrant',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: { uk: { ipa: '/ˈmaɪ.ɡrənt/' }, us: { ipa: '/ˈmaɪ.ɡrənt/' } },
    definition: {
      en: 'A person or animal that moves from one place to another.',
      zh: '移民者；候鸟',
    },
    examples: [
      {
        en: ['Migrant workers play a vital role in the agricultural economy.'],
        zh: ['流动工人在农业经济中发挥着重要作用。'],
      },
    ],
    rootBreakdown: [
      { surface: 'migr', type: 'root', rootSlug: 'migr' },
      { surface: 'ant', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'migr ("move") + -ant (noun) → one who moves.',
      zh: 'migr（迁移）+ -ant（名词后缀）→ 迁移的人。',
    },
    relatedWords: ['migrate', 'immigration', 'emigrant'],
  },
  {
    slug: 'immigrate',
    lemma: 'immigrate',
    partOfSpeech: ['vi.'],
    pronunciation: { uk: { ipa: '/ˈɪm.ɪ.ɡreɪt/' }, us: { ipa: '/ˈɪm.ɪ.ɡreɪt/' } },
    definition: { en: 'To come to live permanently in a foreign country.', zh: '移入；移居入境' },
    examples: [
      {
        en: ['Her grandparents immigrated to the United States in the 1950s.'],
        zh: ['她的祖父母在20世纪50年代移民到美国。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'migr', type: 'root', rootSlug: 'migr' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- ("into") + migr ("move") + -ate (verb) → to move into a new country.',
      zh: 'im-（进入）+ migr（迁移）+ -ate（动词后缀）→ 迁入新国家。',
    },
    relatedWords: ['immigration', 'immigrant'],
  },
  {
    slug: 'immigrant',
    lemma: 'immigrant',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: { uk: { ipa: '/ˈɪm.ɪ.ɡrənt/' }, us: { ipa: '/ˈɪm.ɪ.ɡrənt/' } },
    definition: {
      en: 'A person who comes to live permanently in a foreign country.',
      zh: '移民；侨民',
    },
    examples: [
      {
        en: ['The city has a large immigrant population from many different countries.'],
        zh: ['这座城市有来自许多不同国家的大量移民。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'migr', type: 'root', rootSlug: 'migr' },
      { surface: 'ant', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- ("into") + migr ("move") + -ant (noun) → one who moves into a country.',
      zh: 'im-（进入）+ migr（迁移）+ -ant（名词后缀）→ 迁入的人。',
    },
    relatedWords: ['immigrate', 'immigration'],
  },
  {
    slug: 'emigrate',
    lemma: 'emigrate',
    partOfSpeech: ['vi.'],
    pronunciation: { uk: { ipa: '/ˈem.ɪ.ɡreɪt/' }, us: { ipa: '/ˈem.ɪ.ɡreɪt/' } },
    definition: {
      en: "To leave one's own country to settle permanently in another.",
      zh: '移居外国；移民出境',
    },
    examples: [
      {
        en: ['Many Irish people emigrated to America during the Great Famine.'],
        zh: ['许多爱尔兰人在大饥荒期间移居美国。'],
      },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'migr', type: 'root', rootSlug: 'migr' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'e- ("out") + migr ("move") + -ate (verb) → to move out of one\'s country.',
      zh: 'e-（出）+ migr（迁移）+ -ate（动词后缀）→ 从自己的国家迁出。',
    },
    relatedWords: ['emigration', 'emigrant'],
  },
  {
    slug: 'transmigrate',
    lemma: 'transmigrate',
    partOfSpeech: ['vi.'],
    pronunciation: { uk: { ipa: '/trænzˈmaɪ.ɡreɪt/' }, us: { ipa: '/trænzˈmaɪ.ɡreɪt/' } },
    definition: {
      en: 'To migrate to another country; (of the soul) to pass after death into another body.',
      zh: '移居他国；轮回转生',
    },
    examples: [
      {
        en: ['Some religions believe the soul transmigrates after death.'],
        zh: ['一些宗教信仰认为灵魂在死后会轮回转世。'],
      },
    ],
    rootBreakdown: [
      { surface: 'trans', type: 'prefix' },
      { surface: 'migr', type: 'root', rootSlug: 'migr' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'trans- ("across") + migr ("move") + -ate (verb) → to move across, to pass from one state to another.',
      zh: 'trans-（跨越）+ migr（迁移）+ -ate（动词后缀）→ 跨越迁移，即转世。',
    },
    relatedWords: ['transmigration', 'migrate'],
  },
  {
    slug: 'migratory',
    lemma: 'migratory',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈmaɪ.ɡrə.tər.i/' }, us: { ipa: '/ˈmaɪ.ɡrə.tɔːr.i/' } },
    definition: {
      en: 'Tending to migrate or having the habit of migrating.',
      zh: '迁移的；流浪的',
    },
    examples: [
      { en: ['Migratory birds fly thousands of miles each year.'], zh: ['候鸟每年飞行数千英里。'] },
    ],
    rootBreakdown: [
      { surface: 'migr', type: 'root', rootSlug: 'migr' },
      { surface: 'at', type: 'other' },
      { surface: 'ory', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'migr ("move") + -atory (adj.) → characterized by moving, migratory.',
      zh: 'migr（迁移）+ -atory（形容词后缀）→ 具有迁移特性的。',
    },
    relatedWords: ['migrate', 'migration', 'migrant'],
  },
];
