import type { WordEntry } from '@/types/content';

export const CULT_WORDS: WordEntry[] = [
  {
    slug: 'culture',
    lemma: 'culture',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈkʌl.tʃər/' },
      us: { ipa: '/ˈkʌl.tʃɚ/' },
    },
    definition: {
      en: 'The arts, customs, and social institutions of a particular group; the cultivation of organisms.',
      zh: '文化；文明；培养',
    },
    examples: [
      {
        en: ['Japanese culture places great emphasis on politeness and respect.'],
        zh: ['日本文化非常重视礼貌和尊重。'],
      },
    ],
    rootBreakdown: [
      { surface: 'cult', type: 'root', rootSlug: 'cult' },
      { surface: 'ure', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'cult ("cultivate, tend") + -ure (noun suffix) → the result of cultivating, culture.',
      zh: 'cult（耕种、培养）+ -ure（名词后缀）→ 培养的成果，即文化。',
    },
    relatedWords: ['cultural', 'cultivate', 'agriculture'],
  },
  {
    slug: 'cultural',
    lemma: 'cultural',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈkʌl.tʃər.əl/' },
      us: { ipa: '/ˈkʌl.tʃɚ.əl/' },
    },
    definition: {
      en: 'Relating to the ideas, customs, and social behavior of a society.',
      zh: '文化的；人文的',
    },
    examples: [
      {
        en: ['Cultural exchange programs promote mutual understanding between nations.'],
        zh: ['文化交流项目促进了各国之间的相互理解。'],
      },
    ],
    rootBreakdown: [
      { surface: 'cult', type: 'root', rootSlug: 'cult' },
      { surface: 'ur', type: 'connector' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'cult ("cultivate") + -ur- + -al (adjective) → relating to cultivation/culture.',
      zh: 'cult（耕种）+ -ur- + -al（形容词后缀）→ 与文化相关的。',
    },
    relatedWords: ['culture', 'multicultural', 'cultivate'],
  },
  {
    slug: 'cultivate',
    lemma: 'cultivate',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˈkʌl.tɪ.veɪt/' },
      us: { ipa: '/ˈkʌl.tɪ.veɪt/' },
    },
    definition: {
      en: 'To prepare land for crops; to develop a quality, skill, or relationship.',
      zh: '耕种；培养；培育',
    },
    examples: [
      {
        en: ['She cultivated a strong network of professional contacts.'],
        zh: ['她培养了强大的职业关系网络。'],
      },
    ],
    rootBreakdown: [
      { surface: 'cult', type: 'root', rootSlug: 'cult' },
      { surface: 'iv', type: 'connector' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'cult ("cultivate, till") + -iv- + -ate (verb suffix) → to till the soil, to develop.',
      zh: 'cult（耕种、培养）+ -iv- + -ate（动词后缀）→ 耕种土地，引申为培养。',
    },
    relatedWords: ['cultivation', 'culture', 'agriculture'],
  },
  {
    slug: 'agriculture',
    lemma: 'agriculture',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈæɡ.rɪ.kʌl.tʃər/' },
      us: { ipa: '/ˈæɡ.rɪ.kʌl.tʃɚ/' },
    },
    definition: {
      en: 'The science or practice of farming, including cultivation of soil and raising of animals.',
      zh: '农业；农学',
    },
    examples: [
      {
        en: ['Agriculture remains the backbone of many developing economies.'],
        zh: ['农业仍然是许多发展中经济体的支柱。'],
      },
    ],
    rootBreakdown: [
      { surface: 'agri', type: 'root' },
      { surface: 'cult', type: 'root', rootSlug: 'cult' },
      { surface: 'ure', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'agri ("field") + cult ("cultivate") + -ure (noun) → the cultivation of fields, farming.',
      zh: 'agri（田地）+ cult（耕种）+ -ure（名词后缀）→ 耕种田地，即农业。',
    },
    relatedWords: ['agricultural', 'cultivate', 'culture'],
  },
  {
    slug: 'multicultural',
    lemma: 'multicultural',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˌmʌl.tiˈkʌl.tʃər.əl/' },
      us: { ipa: '/ˌmʌl.tiˈkʌl.tʃɚ.əl/' },
    },
    definition: {
      en: 'Relating to or containing several cultural or ethnic groups.',
      zh: '多元文化的',
    },
    examples: [
      {
        en: ['London is one of the most multicultural cities in the world.'],
        zh: ['伦敦是世界上最具多元文化的城市之一。'],
      },
    ],
    rootBreakdown: [
      { surface: 'multi', type: 'prefix' },
      { surface: 'cult', type: 'root', rootSlug: 'cult' },
      { surface: 'ur', type: 'connector' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'multi- ("many") + cult ("cultivate") + -ur- + -al (adjective) → of many cultures.',
      zh: 'multi-（多）+ cult（培养）+ -ur- + -al（形容词后缀）→ 多种文化的。',
    },
    relatedWords: ['culture', 'cultural', 'multiculturalism'],
  },
  {
    slug: 'horticulture',
    lemma: 'horticulture',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈhɔː.tɪ.kʌl.tʃər/' },
      us: { ipa: '/ˈhɔːr.tɪ.kʌl.tʃɚ/' },
    },
    definition: {
      en: 'The art or practice of garden cultivation and management.',
      zh: '园艺学；园艺',
    },
    examples: [
      {
        en: ['She studied horticulture to learn how to design beautiful gardens.'],
        zh: ['她学习园艺学以了解如何设计美丽的花园。'],
      },
    ],
    rootBreakdown: [
      { surface: 'horti', type: 'root' },
      { surface: 'cult', type: 'root', rootSlug: 'cult' },
      { surface: 'ure', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'horti ("garden") + cult ("cultivate") + -ure (noun) → the cultivation of gardens.',
      zh: 'horti（花园）+ cult（耕种）+ -ure（名词后缀）→ 耕种花园，即园艺。',
    },
    relatedWords: ['agriculture', 'cultivate', 'culture'],
  },
  {
    slug: 'subculture',
    lemma: 'subculture',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈsʌb.kʌl.tʃər/' },
      us: { ipa: '/ˈsʌb.kʌl.tʃɚ/' },
    },
    definition: {
      en: 'A cultural group within a larger culture, often with beliefs or interests distinct from the mainstream.',
      zh: '亚文化；次文化',
    },
    examples: [
      {
        en: ['The punk subculture emerged in the 1970s as a form of rebellion.'],
        zh: ['朋克亚文化在20世纪70年代作为一种叛逆形式出现。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sub', type: 'prefix' },
      { surface: 'cult', type: 'root', rootSlug: 'cult' },
      { surface: 'ure', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sub- ("under, below") + culture → a culture within a larger culture.',
      zh: 'sub-（在……之下）+ culture（文化）→ 大文化之下的文化，即亚文化。',
    },
    relatedWords: ['culture', 'cultural', 'multicultural'],
  },
  {
    slug: 'cultured',
    lemma: 'cultured',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈkʌl.tʃəd/' },
      us: { ipa: '/ˈkʌl.tʃɚd/' },
    },
    definition: {
      en: 'Characterized by refined taste and manners; educated.',
      zh: '有教养的；有文化的',
    },
    examples: [
      {
        en: ['She is a cultured woman who appreciates fine art and music.'],
        zh: ['她是一位有教养的女性，欣赏高雅的艺术和音乐。'],
      },
    ],
    rootBreakdown: [
      { surface: 'cult', type: 'root', rootSlug: 'cult' },
      { surface: 'ur', type: 'connector' },
      { surface: 'ed', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'cult ("cultivate") + -ur- + -ed (adjective) → having been cultivated, refined.',
      zh: 'cult（培养）+ -ur- + -ed（形容词后缀）→ 被培养过的，即有教养的。',
    },
    relatedWords: ['culture', 'uncultured', 'cultivate'],
  },
];
