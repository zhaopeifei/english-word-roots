import type { WordEntry } from '@/types/content';

export const TURB_WORDS: WordEntry[] = [
  {
    slug: 'disturb',
    lemma: 'disturb',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/dɪˈstɜːb/' },
      us: { ipa: '/dɪˈstɝːb/' },
    },
    definition: {
      en: 'To interfere with the normal arrangement or function of something.',
      zh: '打扰；干扰；使不安',
    },
    examples: [
      {
        en: ['Please do not disturb the guests during their stay.'],
        zh: ['客人入住期间请勿打扰。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dis', type: 'prefix' },
      { surface: 'turb', type: 'root', rootSlug: 'turb' },
    ],
    morphologyNote: {
      en: 'dis- ("thoroughly") + turb ("stir, agitate") → to thoroughly stir up, i.e. to disrupt.',
      zh: 'dis-（彻底地）+ turb（搅动）→ 彻底搅动，即打扰。',
    },
    relatedWords: ['disturbance', 'disturbing', 'turbulent'],
  },
  {
    slug: 'trouble',
    lemma: 'trouble',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈtrʌb.əl/' },
      us: { ipa: '/ˈtrʌb.əl/' },
    },
    definition: {
      en: 'Difficulty or problems; to cause distress or worry.',
      zh: '麻烦；困难；使烦恼',
    },
    examples: [
      {
        en: ['The company ran into financial trouble last year.'],
        zh: ['该公司去年遇到了财务困难。'],
      },
    ],
    rootBreakdown: [
      { surface: 'troubl', type: 'root', rootSlug: 'turb' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From turb ("stir, agitate") → a state of agitation or disorder.',
      zh: '源自 turb（搅动）→ 搅动不安的状态，即麻烦。',
    },
    relatedWords: ['troublesome', 'disturb', 'turbulent'],
  },
  {
    slug: 'turbulent',
    lemma: 'turbulent',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈtɜː.bjʊ.lənt/' },
      us: { ipa: '/ˈtɝː.bjə.lənt/' },
    },
    definition: {
      en: 'Characterized by disorder, unrest, or violent agitation.',
      zh: '动荡的；湍急的；混乱的',
    },
    examples: [
      {
        en: ['The flight experienced severe turbulent conditions.'],
        zh: ['航班遭遇了严重的颠簸。'],
      },
    ],
    rootBreakdown: [
      { surface: 'turb', type: 'root', rootSlug: 'turb' },
      { surface: 'ulent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'turb ("stir, agitate") + -ulent (adj.) → full of agitation.',
      zh: 'turb（搅动）+ -ulent（形容词后缀）→ 充满搅动的，即动荡的。',
    },
    relatedWords: ['turbulence', 'disturb', 'perturb'],
  },
  {
    slug: 'perturb',
    lemma: 'perturb',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/pəˈtɜːb/' },
      us: { ipa: '/pɚˈtɝːb/' },
    },
    definition: {
      en: 'To make someone anxious or unsettled; to cause disorder.',
      zh: '使不安；扰乱',
    },
    examples: [
      {
        en: ['The unexpected news perturbed everyone in the office.'],
        zh: ['这个突如其来的消息让办公室里的每个人都感到不安。'],
      },
    ],
    rootBreakdown: [
      { surface: 'per', type: 'prefix' },
      { surface: 'turb', type: 'root', rootSlug: 'turb' },
    ],
    morphologyNote: {
      en: 'per- ("thoroughly") + turb ("stir") → to stir thoroughly, i.e. to upset deeply.',
      zh: 'per-（彻底地）+ turb（搅动）→ 彻底搅动，即深深地扰乱。',
    },
    relatedWords: ['perturbed', 'imperturbable', 'disturb'],
  },
  {
    slug: 'turbine',
    lemma: 'turbine',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈtɜː.baɪn/' },
      us: { ipa: '/ˈtɝː.baɪn/' },
    },
    definition: {
      en: 'A machine with rotating blades driven by water, steam, or gas.',
      zh: '涡轮机；汽轮机',
    },
    examples: [
      {
        en: ['Wind turbines generate clean energy from wind.'],
        zh: ['风力涡轮机利用风力发电。'],
      },
    ],
    rootBreakdown: [
      { surface: 'turb', type: 'root', rootSlug: 'turb' },
      { surface: 'ine', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'turb ("spin, stir") + -ine (noun) → a spinning machine.',
      zh: 'turb（旋转、搅动）+ -ine（名词后缀）→ 旋转的机器。',
    },
    relatedWords: ['turbo', 'turbulent', 'disturb'],
  },
  {
    slug: 'imperturbable',
    lemma: 'imperturbable',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˌɪm.pəˈtɜː.bə.bəl/' },
      us: { ipa: '/ˌɪm.pɚˈtɝː.bə.bəl/' },
    },
    definition: {
      en: 'Unable to be upset or excited; perfectly calm.',
      zh: '沉着的；冷静的；泰然自若的',
    },
    examples: [
      {
        en: ['The captain remained imperturbable during the crisis.'],
        zh: ['船长在危机中保持泰然自若。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'per', type: 'prefix' },
      { surface: 'turb', type: 'root', rootSlug: 'turb' },
      { surface: 'able', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- ("not") + per- ("thoroughly") + turb ("stir") + -able → not able to be stirred up.',
      zh: 'im-（不）+ per-（彻底）+ turb（搅动）+ -able（可…的）→ 不可被搅动的，即泰然自若的。',
    },
    relatedWords: ['perturb', 'disturb', 'turbulent'],
  },
  {
    slug: 'turmoil',
    lemma: 'turmoil',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈtɜː.mɔɪl/' },
      us: { ipa: '/ˈtɝː.mɔɪl/' },
    },
    definition: {
      en: 'A state of great disturbance, confusion, or uncertainty.',
      zh: '混乱；骚动；动荡',
    },
    examples: [
      {
        en: ['The country was in political turmoil after the election.'],
        zh: ['选举后国家陷入了政治动荡。'],
      },
    ],
    rootBreakdown: [
      { surface: 'tur', type: 'root', rootSlug: 'turb' },
      { surface: 'moil', type: 'other' },
    ],
    morphologyNote: {
      en: 'Related to turb ("stir, agitate") → a state of great agitation.',
      zh: '与 turb（搅动）相关 → 极度搅动的状态，即混乱。',
    },
    relatedWords: ['turbulent', 'disturb', 'trouble'],
  },
];
