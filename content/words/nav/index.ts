import type { WordEntry } from '@/types/content';

export const NAV_WORDS: WordEntry[] = [
  {
    slug: 'navy',
    lemma: 'navy',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈneɪ.vi/' }, us: { ipa: '/ˈneɪ.vi/' } },
    definition: { en: "The branch of a country's armed forces that operates at sea.", zh: '海军' },
    examples: [
      {
        en: ['He served in the navy for twenty years before retiring.'],
        zh: ['他在海军服役了二十年后退休。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nav', type: 'root', rootSlug: 'nav' },
      { surface: 'y', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nav ("ship") + -y (noun) → the fleet of ships, the sea-going military force.',
      zh: 'nav（船）+ -y（名词后缀）→ 船队，即海军。',
    },
    relatedWords: ['naval', 'navigate'],
  },
  {
    slug: 'naval',
    lemma: 'naval',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈneɪ.vəl/' }, us: { ipa: '/ˈneɪ.vəl/' } },
    definition: { en: 'Relating to a navy or to ships and shipping.', zh: '海军的；军舰的' },
    examples: [
      {
        en: ['The naval base is located along the southern coast.'],
        zh: ['海军基地位于南部海岸。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nav', type: 'root', rootSlug: 'nav' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nav ("ship") + -al (adj.) → relating to ships or the navy.',
      zh: 'nav（船）+ -al（形容词后缀）→ 与船或海军相关的。',
    },
    relatedWords: ['navy', 'navigate'],
  },
  {
    slug: 'navigate',
    lemma: 'navigate',
    partOfSpeech: ['vt.', 'vi.'],
    pronunciation: { uk: { ipa: '/ˈnæv.ɪ.ɡeɪt/' }, us: { ipa: '/ˈnæv.ɪ.ɡeɪt/' } },
    definition: {
      en: "To plan and direct the course of a ship, aircraft, or vehicle; to find one's way.",
      zh: '航行；导航；驾驶',
    },
    examples: [
      {
        en: ['Modern GPS systems make it easy to navigate unfamiliar cities.'],
        zh: ['现代GPS系统使在陌生城市中导航变得容易。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nav', type: 'root', rootSlug: 'nav' },
      { surface: 'ig', type: 'other' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nav ("ship") + -igate (verb, "drive") → to drive a ship, to steer a course.',
      zh: 'nav（船）+ -igate（驾驶）→ 驾驶船只，即航行。',
    },
    relatedWords: ['navigation', 'navigator', 'navigable'],
  },
  {
    slug: 'navigator',
    lemma: 'navigator',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈnæv.ɪ.ɡeɪ.tər/' }, us: { ipa: '/ˈnæv.ɪ.ɡeɪ.tɚ/' } },
    definition: {
      en: 'A person who directs the route or course of a ship, aircraft, or vehicle.',
      zh: '领航员；导航器',
    },
    examples: [
      {
        en: ['The navigator plotted a course through the dangerous waters.'],
        zh: ['领航员规划了一条穿越危险水域的航线。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nav', type: 'root', rootSlug: 'nav' },
      { surface: 'ig', type: 'other' },
      { surface: 'ator', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nav ("ship") + -igator (agent, "one who drives") → one who steers a ship.',
      zh: 'nav（船）+ -igator（施动者后缀）→ 驾驶船只的人，即领航员。',
    },
    relatedWords: ['navigate', 'navigation'],
  },
  {
    slug: 'navigation',
    lemma: 'navigation',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌnæv.ɪˈɡeɪ.ʃən/' }, us: { ipa: '/ˌnæv.ɪˈɡeɪ.ʃən/' } },
    definition: {
      en: 'The process or activity of planning and directing a route.',
      zh: '航行；导航',
    },
    examples: [
      {
        en: ['Satellite navigation has revolutionized how we travel.'],
        zh: ['卫星导航彻底改变了我们的出行方式。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nav', type: 'root', rootSlug: 'nav' },
      { surface: 'ig', type: 'other' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nav ("ship") + -igation (noun) → the act of steering a ship, direction-finding.',
      zh: 'nav（船）+ -igation（名词后缀）→ 驾驶船的行为，即导航。',
    },
    relatedWords: ['navigate', 'navigator'],
  },
  {
    slug: 'navigable',
    lemma: 'navigable',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈnæv.ɪ.ɡə.bəl/' }, us: { ipa: '/ˈnæv.ɪ.ɡə.bəl/' } },
    definition: {
      en: 'Wide and deep enough to be sailed through; easy to move around in.',
      zh: '可通航的；适于航行的',
    },
    examples: [
      { en: ['The river is navigable for large cargo ships.'], zh: ['这条河可供大型货船通航。'] },
    ],
    rootBreakdown: [
      { surface: 'nav', type: 'root', rootSlug: 'nav' },
      { surface: 'ig', type: 'other' },
      { surface: 'able', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nav ("ship") + -igable (adj., "able to be driven") → able to be sailed through.',
      zh: 'nav（船）+ -igable（可…的）→ 可以航行的。',
    },
    relatedWords: ['navigate', 'navigation'],
  },
  {
    slug: 'circumnavigator',
    lemma: 'circumnavigator',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˌsɜː.kəmˈnæv.ɪ.ɡeɪ.tər/' },
      us: { ipa: '/ˌsɝː.kəmˈnæv.ɪ.ɡeɪ.tɚ/' },
    },
    definition: {
      en: 'A person who sails or travels all the way around something, especially the world.',
      zh: '环球航行者',
    },
    examples: [
      {
        en: ['Magellan is often credited as the first circumnavigator of the globe.'],
        zh: ['麦哲伦通常被认为是第一位环球航行者。'],
      },
    ],
    rootBreakdown: [
      { surface: 'circum', type: 'prefix' },
      { surface: 'nav', type: 'root', rootSlug: 'nav' },
      { surface: 'ig', type: 'other' },
      { surface: 'ator', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'circum- ("around") + nav ("ship") + -igator (agent) → one who sails around the world.',
      zh: 'circum-（围绕）+ nav（船）+ -igator（施动者后缀）→ 环球航行的人。',
    },
    relatedWords: ['navigate', 'navigator', 'circumnavigate'],
  },
];
