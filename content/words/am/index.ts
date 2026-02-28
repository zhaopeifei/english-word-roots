import type { WordEntry } from '@/types/content';

export const AM_WORDS: WordEntry[] = [
  {
    slug: 'amour',
    lemma: 'amour',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/əˈmʊər/' },
      us: { ipa: '/əˈmʊr/' },
    },
    definition: {
      en: 'A love affair, especially a secret one.',
      zh: '恋情；秘密的爱情',
    },
    examples: [
      {
        en: ['The novel chronicles the amour between two artists in Paris.'],
        zh: ['这部小说记述了两位艺术家在巴黎的恋情。'],
      },
    ],
    rootBreakdown: [
      { surface: 'am', type: 'root', rootSlug: 'am' },
      { surface: 'our', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'am ("love") + -our (noun suffix from French) → a love affair.',
      zh: 'am（爱）+ -our（法语名词后缀）→ 恋爱关系。',
    },
    relatedWords: ['amorous', 'enamor', 'amateur'],
  },
  {
    slug: 'amateur',
    lemma: 'amateur',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈæm.ə.tər/' },
      us: { ipa: '/ˈæm.ə.tɚ/' },
    },
    definition: {
      en: 'A person who does something for enjoyment rather than as a profession.',
      zh: '业余爱好者；外行',
    },
    examples: [
      {
        en: ['He is an amateur photographer who takes pictures on weekends.'],
        zh: ['他是一个业余摄影爱好者，周末拍照。'],
      },
    ],
    rootBreakdown: [
      { surface: 'am', type: 'root', rootSlug: 'am' },
      { surface: 'ateur', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'am ("love") + -ateur (French agent suffix) → one who does something out of love, not profession.',
      zh: 'am（爱）+ -ateur（法语施事者后缀）→ 出于热爱做某事的人，即业余爱好者。',
    },
    relatedWords: ['amour', 'amateurish', 'amorous'],
  },
  {
    slug: 'enemy',
    lemma: 'enemy',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈen.ə.mi/' },
      us: { ipa: '/ˈen.ə.mi/' },
    },
    definition: {
      en: 'A person who is hostile to or opposes another; an adversary.',
      zh: '仇敌；敌人',
    },
    examples: [
      {
        en: ['Procrastination is the enemy of productivity.'],
        zh: ['拖延是效率的大敌。'],
      },
    ],
    rootBreakdown: [
      { surface: 'en', type: 'prefix' },
      { surface: 'em', type: 'root', rootSlug: 'am' },
      { surface: 'y', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'en- (from Latin in-, "not") + em (variant of am, "love") + -y → one who is not loved, an enemy.',
      zh: 'en-（源自拉丁语 in-，不）+ em（am 的变体，爱）+ -y → 不被爱的人，即敌人。',
    },
    relatedWords: ['enmity', 'inimical', 'amity'],
  },
  {
    slug: 'enmity',
    lemma: 'enmity',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈen.mə.ti/' },
      us: { ipa: '/ˈen.mə.t̬i/' },
    },
    definition: {
      en: 'A state of deep-seated hostility or hatred.',
      zh: '仇恨；敌意',
    },
    examples: [
      {
        en: ['Years of enmity between the two families finally came to an end.'],
        zh: ['两个家族之间多年的敌意终于结束了。'],
      },
    ],
    rootBreakdown: [
      { surface: 'en', type: 'prefix' },
      { surface: 'em', type: 'root', rootSlug: 'am' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'en- ("not") + em (variant of am, "love") + -ity (noun suffix) → the state of not loving, hostility.',
      zh: 'en-（不）+ em（am 的变体，爱）+ -ity（名词后缀）→ 不爱的状态，即敌意。',
    },
    relatedWords: ['enemy', 'inimical', 'amity'],
  },
  {
    slug: 'inimical',
    lemma: 'inimical',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ɪˈnɪm.ɪ.kəl/' },
      us: { ipa: '/ɪˈnɪm.ɪ.kəl/' },
    },
    definition: {
      en: 'Hostile; tending to obstruct or harm.',
      zh: '敌意的；有害的',
    },
    examples: [
      {
        en: ['The harsh climate is inimical to most forms of agriculture.'],
        zh: ['恶劣的气候对大多数农业形式是不利的。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'im', type: 'root', rootSlug: 'am' },
      { surface: 'ic', type: 'suffix' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("not") + im (variant of am, "love") + -ical (adjective) → not loving, hostile.',
      zh: 'in-（不）+ im（am 的变体，爱）+ -ical（形容词后缀）→ 不友爱的，即有敌意的。',
    },
    relatedWords: ['enemy', 'enmity', 'amity'],
  },
  {
    slug: 'enamor',
    lemma: 'enamor',
    partOfSpeech: ['vt.'],
    pronunciation: {
      uk: { ipa: '/ɪˈnæm.ər/' },
      us: { ipa: '/ɪˈnæm.ɚ/' },
    },
    definition: {
      en: 'To fill with love or fascination; to charm.',
      zh: '使迷恋；使倾心',
    },
    examples: [
      {
        en: ['She was enamored of the city from her very first visit.'],
        zh: ['她从第一次到访就迷上了这座城市。'],
      },
    ],
    rootBreakdown: [
      { surface: 'en', type: 'prefix' },
      { surface: 'am', type: 'root', rootSlug: 'am' },
      { surface: 'or', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'en- ("cause to be in") + am ("love") + -or → to cause to be in love.',
      zh: 'en-（使处于）+ am（爱）+ -or → 使处于恋爱中，即使迷恋。',
    },
    relatedWords: ['enamored', 'amour', 'amorous'],
  },
  {
    slug: 'amorous',
    lemma: 'amorous',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈæm.ər.əs/' },
      us: { ipa: '/ˈæm.ɚ.əs/' },
    },
    definition: {
      en: 'Showing or feeling romantic love or desire.',
      zh: '多情的；恋爱的',
    },
    examples: [
      {
        en: ['He cast amorous glances at her across the room.'],
        zh: ['他隔着房间向她投去多情的目光。'],
      },
    ],
    rootBreakdown: [
      { surface: 'am', type: 'root', rootSlug: 'am' },
      { surface: 'or', type: 'connector' },
      { surface: 'ous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'am ("love") + -or- + -ous (adjective suffix) → full of love, amorous.',
      zh: 'am（爱）+ -or- + -ous（形容词后缀）→ 充满爱的，即多情的。',
    },
    relatedWords: ['amour', 'enamor', 'amateur'],
  },
  {
    slug: 'amiable',
    lemma: 'amiable',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈeɪ.mi.ə.bəl/' },
      us: { ipa: '/ˈeɪ.mi.ə.bəl/' },
    },
    definition: {
      en: 'Friendly and pleasant in manner; likeable.',
      zh: '和蔼可亲的；亲切的',
    },
    examples: [
      {
        en: ['The amiable host made every guest feel welcome.'],
        zh: ['和蔼的主人让每位客人都感到宾至如归。'],
      },
    ],
    rootBreakdown: [
      { surface: 'am', type: 'root', rootSlug: 'am' },
      { surface: 'i', type: 'connector' },
      { surface: 'able', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'am ("love") + -i- + -able ("worthy of") → worthy of love, friendly.',
      zh: 'am（爱）+ -i- + -able（值得……的）→ 值得爱的，即和蔼可亲的。',
    },
    relatedWords: ['amity', 'amorous', 'enamor'],
  },
  {
    slug: 'amity',
    lemma: 'amity',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈæm.ɪ.ti/' },
      us: { ipa: '/ˈæm.ɪ.t̬i/' },
    },
    definition: {
      en: 'Friendly and peaceful relations between people or nations.',
      zh: '友好；亲善关系',
    },
    examples: [
      {
        en: ['The treaty established amity between the two neighboring countries.'],
        zh: ['该条约建立了两个邻国之间的友好关系。'],
      },
    ],
    rootBreakdown: [
      { surface: 'am', type: 'root', rootSlug: 'am' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'am ("love") + -ity (noun suffix) → a state of love/friendliness.',
      zh: 'am（爱）+ -ity（名词后缀）→ 爱/友善的状态，即友好。',
    },
    relatedWords: ['amiable', 'enemy', 'enmity'],
  },
  {
    slug: 'amatory',
    lemma: 'amatory',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈæm.ə.tər.i/' },
      us: { ipa: '/ˈæm.ə.tɔːr.i/' },
    },
    definition: {
      en: 'Relating to or expressing romantic love.',
      zh: '恋爱的；情爱的',
    },
    examples: [
      {
        en: ['The poet is known for his amatory verses.'],
        zh: ['这位诗人以情诗闻名。'],
      },
    ],
    rootBreakdown: [
      { surface: 'am', type: 'root', rootSlug: 'am' },
      { surface: 'atory', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'am ("love") + -atory (adjective suffix) → relating to love.',
      zh: 'am（爱）+ -atory（形容词后缀）→ 与爱情相关的。',
    },
    relatedWords: ['amour', 'amorous', 'enamor'],
  },
];
