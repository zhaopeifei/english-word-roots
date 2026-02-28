import type { WordEntry } from '@/types/content';

export const SERV_WORDS: WordEntry[] = [
  {
    slug: 'serve',
    lemma: 'serve',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/sɜːv/' },
      us: { ipa: '/sɝːv/' },
    },
    definition: {
      en: 'To perform duties or provide a service for someone.',
      zh: '服务；服役；供应',
    },
    examples: [
      {
        en: ['She served in the army for ten years.'],
        zh: ['她在军队服役了十年。'],
      },
    ],
    rootBreakdown: [
      { surface: 'serv', type: 'root', rootSlug: 'serv' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'serv ("to serve, to keep") → to attend to or work for.',
      zh: 'serv（服务、保持）→ 侍候或为之工作。',
    },
    relatedWords: ['service', 'servant', 'server'],
  },
  {
    slug: 'service',
    lemma: 'service',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈsɜː.vɪs/' },
      us: { ipa: '/ˈsɝː.vɪs/' },
    },
    definition: {
      en: 'The action of helping or doing work for someone; a system supplying a public need.',
      zh: '服务；公共事业；维修',
    },
    examples: [
      {
        en: ['The hotel is known for its excellent customer service.'],
        zh: ['这家酒店以其卓越的客户服务闻名。'],
      },
    ],
    rootBreakdown: [
      { surface: 'serv', type: 'root', rootSlug: 'serv' },
      { surface: 'ice', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'serv ("serve") + -ice (noun) → the act or system of serving.',
      zh: 'serv（服务）+ -ice（名词后缀）→ 服务的行为或体系。',
    },
    relatedWords: ['serve', 'servant', 'self-service'],
  },
  {
    slug: 'deserve',
    lemma: 'deserve',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/dɪˈzɜːv/' },
      us: { ipa: '/dɪˈzɝːv/' },
    },
    definition: {
      en: 'To be worthy of reward, punishment, or a particular treatment.',
      zh: '应得；值得',
    },
    examples: [
      {
        en: ['She deserves recognition for all her hard work.'],
        zh: ['她的辛勤工作值得被认可。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'serv', type: 'root', rootSlug: 'serv' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'de- ("completely") + serv ("serve") → to serve completely, hence to be entitled to.',
      zh: 'de-（完全地）+ serv（服务）→ 完全尽责地服务，故值得回报。',
    },
    relatedWords: ['deserved', 'undeserved', 'serve'],
  },
  {
    slug: 'reserve',
    lemma: 'reserve',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: {
      uk: { ipa: '/rɪˈzɜːv/' },
      us: { ipa: '/rɪˈzɝːv/' },
    },
    definition: {
      en: 'To keep something for future use; a supply set aside.',
      zh: '预订；保留；储备',
    },
    examples: [
      {
        en: ["Please reserve a table for two at eight o'clock."],
        zh: ['请预订八点的二人桌。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'serv', type: 'root', rootSlug: 'serv' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("back") + serv ("keep") → to keep back for later use.',
      zh: 're-（向后）+ serv（保存）→ 留存备用，即预订、储备。',
    },
    relatedWords: ['reservation', 'reserved', 'reservoir'],
  },
  {
    slug: 'preserve',
    lemma: 'preserve',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: {
      uk: { ipa: '/prɪˈzɜːv/' },
      us: { ipa: '/prɪˈzɝːv/' },
    },
    definition: {
      en: 'To maintain something in its existing state; to keep safe from harm.',
      zh: '保存；保护；保持',
    },
    examples: [
      {
        en: ['It is our duty to preserve the environment for future generations.'],
        zh: ['为后代保护环境是我们的责任。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pre', type: 'prefix' },
      { surface: 'serv', type: 'root', rootSlug: 'serv' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pre- ("before") + serv ("keep") → to keep safe beforehand.',
      zh: 'pre-（预先）+ serv（保存）→ 提前保管好，即保存、保护。',
    },
    relatedWords: ['preservation', 'preservative', 'conserve'],
  },
  {
    slug: 'conserve',
    lemma: 'conserve',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/kənˈsɜːv/' },
      us: { ipa: '/kənˈsɝːv/' },
    },
    definition: {
      en: 'To protect from harm or waste; to use carefully.',
      zh: '保护；节约；保存',
    },
    examples: [
      {
        en: ['We must conserve water during the drought.'],
        zh: ['干旱期间我们必须节约用水。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'serv', type: 'root', rootSlug: 'serv' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'con- ("together, thoroughly") + serv ("keep") → to keep thoroughly, i.e. to protect.',
      zh: 'con-（共同、彻底地）+ serv（保存）→ 彻底保存，即保护、节约。',
    },
    relatedWords: ['conservation', 'conservative', 'preserve'],
  },
  {
    slug: 'conservation',
    lemma: 'conservation',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˌkɒn.səˈveɪ.ʃən/' },
      us: { ipa: '/ˌkɑːn.sɚˈveɪ.ʃən/' },
    },
    definition: {
      en: 'The protection and careful management of natural resources or cultural heritage.',
      zh: '保护；保存；节约',
    },
    examples: [
      {
        en: ['Wildlife conservation efforts have helped endangered species recover.'],
        zh: ['野生动物保护工作帮助了濒危物种的恢复。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'serv', type: 'root', rootSlug: 'serv' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'con- ("together") + serv ("keep") + -ation (noun) → the act of keeping together and protecting.',
      zh: 'con-（共同）+ serv（保存）+ -ation（名词后缀）→ 共同保存的行为，即保护。',
    },
    relatedWords: ['conserve', 'conservative', 'preserve'],
  },
  {
    slug: 'observe',
    lemma: 'observe',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/əbˈzɜːv/' },
      us: { ipa: '/əbˈzɝːv/' },
    },
    definition: {
      en: 'To watch carefully; to notice; to follow a custom or rule.',
      zh: '观察；注意到；遵守',
    },
    examples: [
      {
        en: ['Scientists observe the behavior of animals in the wild.'],
        zh: ['科学家观察野生动物的行为。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ob', type: 'prefix' },
      { surface: 'serv', type: 'root', rootSlug: 'serv' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ob- ("toward, over") + serv ("watch, keep") → to watch over carefully.',
      zh: 'ob-（朝向）+ serv（看守、保持）→ 仔细看守，即观察。',
    },
    relatedWords: ['observation', 'observer', 'observatory'],
  },
  {
    slug: 'observation',
    lemma: 'observation',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˌɒb.zəˈveɪ.ʃən/' },
      us: { ipa: '/ˌɑːb.zɚˈveɪ.ʃən/' },
    },
    definition: {
      en: 'The act of watching or noticing something; a remark based on what one has seen.',
      zh: '观察；评论；注意',
    },
    examples: [
      {
        en: ['Her observation about the data led to a breakthrough discovery.'],
        zh: ['她对数据的观察促成了一项突破性发现。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ob', type: 'prefix' },
      { surface: 'serv', type: 'root', rootSlug: 'serv' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ob- ("toward") + serv ("watch") + -ation (noun) → the act of watching toward something.',
      zh: 'ob-（朝向）+ serv（看守）+ -ation（名词后缀）→ 朝向某物注视的行为。',
    },
    relatedWords: ['observe', 'observer', 'observatory'],
  },
  {
    slug: 'conservative',
    lemma: 'conservative',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: {
      uk: { ipa: '/kənˈsɜː.və.tɪv/' },
      us: { ipa: '/kənˈsɝː.və.t̬ɪv/' },
    },
    definition: {
      en: 'Favoring traditional views and values; averse to change.',
      zh: '保守的；守旧的',
    },
    examples: [
      {
        en: ['He holds conservative views on economic policy.'],
        zh: ['他在经济政策上持保守观点。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'serv', type: 'root', rootSlug: 'serv' },
      { surface: 'ative', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'con- ("together") + serv ("keep") + -ative (adj.) → tending to keep things as they are.',
      zh: 'con-（共同）+ serv（保存）+ -ative（形容词后缀）→ 倾向于保持现状的。',
    },
    relatedWords: ['conserve', 'conservation', 'conservatism'],
  },
  {
    slug: 'servant',
    lemma: 'servant',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈsɜː.vənt/' },
      us: { ipa: '/ˈsɝː.vənt/' },
    },
    definition: {
      en: 'A person who performs duties for others, especially in a household.',
      zh: '仆人；佣人；公务员',
    },
    examples: [
      {
        en: ['Public servants work to improve the lives of citizens.'],
        zh: ['公务员致力于改善公民的生活。'],
      },
    ],
    rootBreakdown: [
      { surface: 'serv', type: 'root', rootSlug: 'serv' },
      { surface: 'ant', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'serv ("serve") + -ant ("one who") → one who serves.',
      zh: 'serv（服务）+ -ant（…的人）→ 服务的人。',
    },
    relatedWords: ['serve', 'service', 'servile'],
  },
  {
    slug: 'reservoir',
    lemma: 'reservoir',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈrez.ə.vwɑːr/' },
      us: { ipa: '/ˈrez.ɚ.vwɑːr/' },
    },
    definition: {
      en: 'A large natural or artificial lake used as a source of water supply.',
      zh: '水库；蓄水池；储备',
    },
    examples: [
      {
        en: ['The reservoir supplies drinking water to the entire city.'],
        zh: ['水库为整个城市供应饮用水。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'serv', type: 'root', rootSlug: 'serv' },
      { surface: 'oir', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("back") + serv ("keep") + -oir (place) → a place that keeps water stored.',
      zh: 're-（回）+ serv（保存）+ -oir（场所后缀）→ 存储水的场所，即水库。',
    },
    relatedWords: ['reserve', 'reservation', 'preserve'],
  },
];
