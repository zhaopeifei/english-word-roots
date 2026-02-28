import type { WordEntry } from '@/types/content';

export const URB_WORDS: WordEntry[] = [
  {
    slug: 'urban',
    lemma: 'urban',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈɜː.bən/' },
      us: { ipa: '/ˈɝː.bən/' },
    },
    definition: {
      en: 'Relating to or characteristic of a city or town.',
      zh: '城市的；都市的',
    },
    examples: [
      {
        en: ['Urban areas tend to have better access to healthcare.'],
        zh: ['城市地区通常有更好的医疗服务。'],
      },
    ],
    rootBreakdown: [
      { surface: 'urb', type: 'root', rootSlug: 'urb' },
      { surface: 'an', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'urb ("city") + -an (adj.) → relating to a city.',
      zh: 'urb（城市）+ -an（形容词后缀）→ 与城市有关的。',
    },
    relatedWords: ['urbanize', 'urbane', 'suburb'],
  },
  {
    slug: 'urbanize',
    lemma: 'urbanize',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˈɜː.bən.aɪz/' },
      us: { ipa: '/ˈɝː.bən.aɪz/' },
    },
    definition: {
      en: 'To make or become urban in character.',
      zh: '使城市化',
    },
    examples: [
      {
        en: ['Rapid industrialization urbanized many rural communities.'],
        zh: ['快速的工业化使许多农村社区城市化了。'],
      },
    ],
    rootBreakdown: [
      { surface: 'urb', type: 'root', rootSlug: 'urb' },
      { surface: 'an', type: 'connector' },
      { surface: 'ize', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'urban ("city") + -ize (verb) → to make into a city.',
      zh: 'urban（城市的）+ -ize（使…化）→ 使城市化。',
    },
    relatedWords: ['urbanization', 'urban', 'suburb'],
  },
  {
    slug: 'urbane',
    lemma: 'urbane',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ɜːˈbeɪn/' },
      us: { ipa: '/ɝːˈbeɪn/' },
    },
    definition: {
      en: 'Suave, courteous, and refined in manner.',
      zh: '温文尔雅的；彬彬有礼的',
    },
    examples: [
      {
        en: ['He was known for his urbane wit and charm.'],
        zh: ['他以温文尔雅的机智和魅力闻名。'],
      },
    ],
    rootBreakdown: [
      { surface: 'urb', type: 'root', rootSlug: 'urb' },
      { surface: 'ane', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'urb ("city") + -ane (adj.) → having city-like refinement and polish.',
      zh: 'urb（城市）+ -ane（形容词后缀）→ 具有城市般的优雅和教养。',
    },
    relatedWords: ['urbanity', 'urban', 'suburb'],
  },
  {
    slug: 'suburb',
    lemma: 'suburb',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈsʌb.ɜːb/' },
      us: { ipa: '/ˈsʌb.ɝːb/' },
    },
    definition: {
      en: 'A residential area on the outskirts of a city.',
      zh: '郊区；近郊',
    },
    examples: [
      {
        en: ['Many families moved to the suburbs for more space.'],
        zh: ['许多家庭搬到郊区以获得更多空间。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sub', type: 'prefix' },
      { surface: 'urb', type: 'root', rootSlug: 'urb' },
    ],
    morphologyNote: {
      en: 'sub- ("near, under") + urb ("city") → near the city, i.e. the outskirts.',
      zh: 'sub-（在…附近）+ urb（城市）→ 城市附近的地方，即郊区。',
    },
    relatedWords: ['suburban', 'suburbanite', 'urban'],
  },
  {
    slug: 'suburban',
    lemma: 'suburban',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/səˈbɜː.bən/' },
      us: { ipa: '/səˈbɝː.bən/' },
    },
    definition: {
      en: 'Relating to or characteristic of a suburb.',
      zh: '郊区的；市郊的',
    },
    examples: [
      {
        en: ['Suburban neighborhoods are typically quieter than downtown.'],
        zh: ['郊区社区通常比市中心更安静。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sub', type: 'prefix' },
      { surface: 'urb', type: 'root', rootSlug: 'urb' },
      { surface: 'an', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sub- ("near") + urb ("city") + -an (adj.) → relating to areas near a city.',
      zh: 'sub-（在附近）+ urb（城市）+ -an（形容词后缀）→ 与城市附近区域有关的。',
    },
    relatedWords: ['suburb', 'urban', 'exurban'],
  },
  {
    slug: 'exurb',
    lemma: 'exurb',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈek.sɜːb/' },
      us: { ipa: '/ˈek.sɝːb/' },
    },
    definition: {
      en: 'A district outside a city, especially a prosperous area beyond the suburbs.',
      zh: '远郊；城市远郊区',
    },
    examples: [
      {
        en: ['More people are choosing to live in exurbs for lower housing costs.'],
        zh: ['越来越多的人选择住在远郊以降低住房成本。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'urb', type: 'root', rootSlug: 'urb' },
    ],
    morphologyNote: {
      en: 'ex- ("out of, beyond") + urb ("city") → beyond the city.',
      zh: 'ex-（在…之外）+ urb（城市）→ 在城市之外的区域。',
    },
    relatedWords: ['exurban', 'suburb', 'urban'],
  },
  {
    slug: 'conurbation',
    lemma: 'conurbation',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˌkɒn.ɜːˈbeɪ.ʃən/' },
      us: { ipa: '/ˌkɑːn.ɝːˈbeɪ.ʃən/' },
    },
    definition: {
      en: 'An extended urban area formed by the merging of several towns.',
      zh: '集合城市；城市群',
    },
    examples: [
      {
        en: ['The Tokyo-Yokohama conurbation is one of the largest in the world.'],
        zh: ['东京-横滨城市群是世界上最大的城市群之一。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'urb', type: 'root', rootSlug: 'urb' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'con- ("together") + urb ("city") + -ation (noun) → cities joined together.',
      zh: 'con-（一起）+ urb（城市）+ -ation（名词后缀）→ 连在一起的城市。',
    },
    relatedWords: ['urban', 'suburb', 'urbanize'],
  },
];
