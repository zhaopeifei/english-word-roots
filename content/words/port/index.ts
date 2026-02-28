import type { WordEntry } from '@/types/content';

export const PORT_WORDS: WordEntry[] = [
  {
    slug: 'portable',
    lemma: 'portable',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈpɔː.tə.bəl/' },
      us: { ipa: '/ˈpɔːr.t̬ə.bəl/' },
    },
    definition: {
      en: 'Easy to carry or move around.',
      zh: '便携的；可移动的',
    },
    examples: [
      {
        en: ['A portable charger is essential for long trips.'],
        zh: ['长途旅行中，便携充电器是必备品。'],
      },
    ],
    rootBreakdown: [
      { surface: 'port', type: 'root', rootSlug: 'port' },
      { surface: 'able', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'port ("carry") + -able ("capable of") → capable of being carried.',
      zh: 'port（搬运）+ -able（可…的）→ 可搬运的，即便携的。',
    },
    relatedWords: ['portability', 'transport', 'export'],
  },
  {
    slug: 'transport',
    lemma: 'transport',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈtræn.spɔːt/' },
      us: { ipa: '/ˈtræn.spɔːrt/' },
    },
    definition: {
      en: 'To carry people or goods from one place to another; the system for doing this.',
      zh: '运输；交通工具',
    },
    examples: [
      {
        en: ['Public transport reduces traffic congestion in cities.'],
        zh: ['公共交通减少了城市的交通拥堵。'],
      },
    ],
    rootBreakdown: [
      { surface: 'trans', type: 'prefix' },
      { surface: 'port', type: 'root', rootSlug: 'port' },
    ],
    morphologyNote: {
      en: 'trans- ("across") + port ("carry") → to carry across.',
      zh: 'trans-（跨越）+ port（搬运）→ 跨越搬运，即运输。',
    },
    relatedWords: ['import', 'export', 'portable'],
  },
  {
    slug: 'import',
    lemma: 'import',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ɪmˈpɔːt/' },
      us: { ipa: '/ɪmˈpɔːrt/' },
    },
    definition: {
      en: 'To bring goods or services into a country from abroad; something imported.',
      zh: '进口；输入',
    },
    examples: [
      {
        en: ['The country imports most of its oil from overseas.'],
        zh: ['该国大部分石油从海外进口。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'port', type: 'root', rootSlug: 'port' },
    ],
    morphologyNote: {
      en: 'im- ("into") + port ("carry") → to carry into a country.',
      zh: 'im-（进入）+ port（搬运）→ 搬运进来，即进口。',
    },
    relatedWords: ['export', 'important', 'portable'],
  },
  {
    slug: 'export',
    lemma: 'export',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ɪkˈspɔːt/' },
      us: { ipa: '/ɪkˈspɔːrt/' },
    },
    definition: {
      en: 'To send goods or services to another country for sale; something exported.',
      zh: '出口；输出',
    },
    examples: [
      {
        en: ['Japan exports electronics to countries around the world.'],
        zh: ['日本向世界各国出口电子产品。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'port', type: 'root', rootSlug: 'port' },
    ],
    morphologyNote: {
      en: 'ex- ("out") + port ("carry") → to carry out of a country.',
      zh: 'ex-（出去）+ port（搬运）→ 搬运出去，即出口。',
    },
    relatedWords: ['import', 'transport', 'portable'],
  },
  {
    slug: 'support',
    lemma: 'support',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/səˈpɔːt/' },
      us: { ipa: '/səˈpɔːrt/' },
    },
    definition: {
      en: 'To hold up or give assistance to someone or something.',
      zh: '支持；支撑；援助',
    },
    examples: [
      {
        en: ['Her family supported her through every challenge.'],
        zh: ['她的家人在每次困难中都支持她。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sup', type: 'prefix' },
      { surface: 'port', type: 'root', rootSlug: 'port' },
    ],
    morphologyNote: {
      en: 'sup- ("from below") + port ("carry") → to carry from below, i.e. to hold up.',
      zh: 'sup-（从下方）+ port（搬运）→ 从下方承载，即支撑、支持。',
    },
    relatedWords: ['supportive', 'supporter', 'transport'],
  },
  {
    slug: 'deport',
    lemma: 'deport',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/dɪˈpɔːt/' },
      us: { ipa: '/dɪˈpɔːrt/' },
    },
    definition: {
      en: 'To expel a foreigner from a country, typically for legal reasons.',
      zh: '驱逐出境',
    },
    examples: [
      {
        en: ['The government decided to deport illegal immigrants.'],
        zh: ['政府决定驱逐非法移民。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'port', type: 'root', rootSlug: 'port' },
    ],
    morphologyNote: {
      en: 'de- ("away") + port ("carry") → to carry away from a place.',
      zh: 'de-（离开）+ port（搬运）→ 搬离某地，即驱逐出境。',
    },
    relatedWords: ['export', 'transport', 'portable'],
  },
  {
    slug: 'opportunity',
    lemma: 'opportunity',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˌɒp.əˈtjuː.nə.ti/' },
      us: { ipa: '/ˌɑː.pɚˈtuː.nə.t̬i/' },
    },
    definition: {
      en: 'A favorable time or set of circumstances for doing something.',
      zh: '机会；时机',
    },
    examples: [
      {
        en: ['Education provides opportunities for a better future.'],
        zh: ['教育提供了获得更好未来的机会。'],
      },
    ],
    rootBreakdown: [
      { surface: 'op', type: 'prefix' },
      { surface: 'port', type: 'root', rootSlug: 'port' },
      { surface: 'un', type: 'suffix' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ob- ("toward") + port ("harbor, carry") + -unity → favorable winds carrying one toward harbor.',
      zh: 'ob-（朝向）+ port（港口/搬运）+ -unity → 顺风驶入港口，引申为机会。',
    },
    relatedWords: ['opportunist', 'opportunistic', 'import'],
  },
  {
    slug: 'airport',
    lemma: 'airport',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈeə.pɔːt/' },
      us: { ipa: '/ˈer.pɔːrt/' },
    },
    definition: {
      en: 'A place where aircraft regularly take off and land, with buildings for passengers.',
      zh: '机场；航空港',
    },
    examples: [
      {
        en: ['We arrived at the airport two hours before the flight.'],
        zh: ['我们在航班起飞前两小时到达了机场。'],
      },
    ],
    rootBreakdown: [
      { surface: 'air', type: 'other' },
      { surface: 'port', type: 'root', rootSlug: 'port' },
    ],
    morphologyNote: {
      en: 'air + port ("harbor, gateway") → a harbor for air travel.',
      zh: 'air（空中）+ port（港口）→ 空中的港口，即机场。',
    },
    relatedWords: ['seaport', 'transport', 'portable'],
  },
  {
    slug: 'report',
    lemma: 'report',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/rɪˈpɔːt/' },
      us: { ipa: '/rɪˈpɔːrt/' },
    },
    definition: {
      en: 'To give an account of something; a spoken or written description of an event.',
      zh: '报告；报道；汇报',
    },
    examples: [
      {
        en: ['The journalist reported live from the scene.'],
        zh: ['记者从现场进行了实时报道。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'port', type: 'root', rootSlug: 'port' },
    ],
    morphologyNote: {
      en: 're- ("back") + port ("carry") → to carry back information.',
      zh: 're-（回来）+ port（搬运）→ 将信息带回，即报告。',
    },
    relatedWords: ['reporter', 'import', 'export'],
  },
  {
    slug: 'important',
    lemma: 'important',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ɪmˈpɔː.tənt/' },
      us: { ipa: '/ɪmˈpɔːr.t̬ənt/' },
    },
    definition: {
      en: 'Of great significance or value.',
      zh: '重要的；有重大意义的',
    },
    examples: [
      {
        en: ['It is important to stay hydrated during exercise.'],
        zh: ['运动时保持水分补充很重要。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'port', type: 'root', rootSlug: 'port' },
      { surface: 'ant', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- ("in") + port ("carry") + -ant (adj.) → carrying weight in a matter.',
      zh: 'im-（进入）+ port（搬运）+ -ant（形容词后缀）→ 有分量的，即重要的。',
    },
    relatedWords: ['importance', 'unimportant', 'import'],
  },
  {
    slug: 'sport',
    lemma: 'sport',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/spɔːt/' },
      us: { ipa: '/spɔːrt/' },
    },
    definition: {
      en: 'An activity involving physical exertion and skill, often competitive.',
      zh: '运动；体育活动',
    },
    examples: [
      {
        en: ['Swimming is her favorite sport.'],
        zh: ['游泳是她最喜欢的运动。'],
      },
    ],
    rootBreakdown: [
      { surface: 's', type: 'other' },
      { surface: 'port', type: 'root', rootSlug: 'port' },
    ],
    morphologyNote: {
      en: 'Shortened from "disport" — dis- ("away") + port ("carry") → to carry oneself away from work, i.e. to play.',
      zh: '缩写自 disport — dis-（离开）+ port（搬运）→ 把自己从工作中搬走，即娱乐、运动。',
    },
    relatedWords: ['sportsmanship', 'transport', 'portable'],
  },
];
