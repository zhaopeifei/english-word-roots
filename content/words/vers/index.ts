import type { WordEntry } from '@/types/content';

export const VERS_WORDS: WordEntry[] = [
  {
    slug: 'universe',
    lemma: 'universe',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈjuː.nɪ.vɜːs/' }, us: { ipa: '/ˈjuː.nɪ.vɝːs/' } },
    definition: {
      en: 'All existing matter and space considered as a whole.',
      zh: '宇宙；天地万物',
    },
    examples: [{ en: ['The universe is constantly expanding.'], zh: ['宇宙在不断膨胀。'] }],
    rootBreakdown: [
      { surface: 'uni', type: 'root', rootSlug: 'uni' },
      { surface: 'vers', type: 'root', rootSlug: 'vers' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'uni ("one") + vers ("turn") → everything turned into one whole.',
      zh: 'uni（一）+ vers（转）→ 一切化为一体的整体。',
    },
    relatedWords: ['universal', 'diverse', 'reverse'],
  },
  {
    slug: 'diverse',
    lemma: 'diverse',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/daɪˈvɜːs/' }, us: { ipa: '/daɪˈvɝːs/' } },
    definition: { en: 'Showing a great deal of variety; very different.', zh: '多样的；不同的' },
    examples: [
      {
        en: ['The city has a diverse population from many backgrounds.'],
        zh: ['这座城市有来自多种背景的多元化人口。'],
      },
    ],
    rootBreakdown: [
      { surface: 'di', type: 'prefix' },
      { surface: 'vers', type: 'root', rootSlug: 'vers' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'di- ("apart") + vers ("turn") → turned in different directions, i.e. varied.',
      zh: 'di-（分开）+ vers（转）→ 向不同方向转的，即多样的。',
    },
    relatedWords: ['diversity', 'divert', 'versatile'],
  },
  {
    slug: 'reverse',
    lemma: 'reverse',
    partOfSpeech: ['v.', 'n.', 'adj.'],
    pronunciation: { uk: { ipa: '/rɪˈvɜːs/' }, us: { ipa: '/rɪˈvɝːs/' } },
    definition: {
      en: 'To move backward; to turn something the other way round.',
      zh: '反转；倒退；相反',
    },
    examples: [{ en: ['The court reversed the previous ruling.'], zh: ['法院推翻了之前的裁决。'] }],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'vers', type: 'root', rootSlug: 'vers' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("back") + vers ("turn") → to turn back.',
      zh: 're-（向后）+ vers（转）→ 转回来，即反转。',
    },
    relatedWords: ['reversible', 'irreversible', 'reversion'],
  },
  {
    slug: 'versatile',
    lemma: 'versatile',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈvɜː.sə.taɪl/' }, us: { ipa: '/ˈvɝː.sə.t̬əl/' } },
    definition: {
      en: 'Able to adapt or be adapted to many different functions.',
      zh: '多才多艺的；通用的',
    },
    examples: [
      {
        en: ['She is a versatile musician who plays five instruments.'],
        zh: ['她是一位多才多艺的音乐家，能演奏五种乐器。'],
      },
    ],
    rootBreakdown: [
      { surface: 'vers', type: 'root', rootSlug: 'vers' },
      { surface: 'atile', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'vers ("turn") + -atile (adj.) → able to turn in many directions.',
      zh: 'vers（转）+ -atile（形容词后缀）→ 能向多个方向转的，即多才多艺的。',
    },
    relatedWords: ['versatility', 'diverse', 'reverse'],
  },
  {
    slug: 'controversy',
    lemma: 'controversy',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈkɒn.trə.vɜː.si/' }, us: { ipa: '/ˈkɑːn.trə.vɝː.si/' } },
    definition: { en: 'Prolonged public disagreement or heated discussion.', zh: '争论；争议' },
    examples: [
      {
        en: ['The policy sparked considerable controversy.'],
        zh: ['这项政策引发了相当大的争议。'],
      },
    ],
    rootBreakdown: [
      { surface: 'contra', type: 'prefix' },
      { surface: 'vers', type: 'root', rootSlug: 'vers' },
      { surface: 'y', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'contra- ("against") + vers ("turn") + -y (noun) → a turning against each other.',
      zh: 'contra-（对着）+ vers（转）+ -y（名词后缀）→ 相互对转，即争议。',
    },
    relatedWords: ['controversial', 'converse', 'reverse'],
  },
  {
    slug: 'convert',
    lemma: 'convert',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: { uk: { ipa: '/kənˈvɜːt/' }, us: { ipa: '/kənˈvɝːt/' } },
    definition: {
      en: 'To change from one form, nature, or function to another.',
      zh: '转换；转变；改信',
    },
    examples: [
      {
        en: ['They converted the old factory into luxury apartments.'],
        zh: ['他们将旧工厂改造成了豪华公寓。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'vert', type: 'root', rootSlug: 'vers' },
    ],
    morphologyNote: {
      en: 'con- ("completely") + vert ("turn") → to turn completely into something else.',
      zh: 'con-（完全地）+ vert（转）→ 完全转变。',
    },
    relatedWords: ['conversion', 'converse', 'divert'],
  },
  {
    slug: 'conversation',
    lemma: 'conversation',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌkɒn.vəˈseɪ.ʃən/' }, us: { ipa: '/ˌkɑːn.vɚˈseɪ.ʃən/' } },
    definition: { en: 'A talk between two or more people.', zh: '对话；谈话' },
    examples: [
      {
        en: ['We had a long conversation about our future plans.'],
        zh: ['我们就未来计划进行了长时间的交谈。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'vers', type: 'root', rootSlug: 'vers' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'con- ("with") + vers ("turn") + -ation (noun) → a turning of words with someone.',
      zh: 'con-（与…一起）+ vers（转）+ -ation（名词后缀）→ 与他人轮流说话。',
    },
    relatedWords: ['converse', 'convert', 'conversational'],
  },
  {
    slug: 'introvert',
    lemma: 'introvert',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈɪn.trə.vɜːt/' }, us: { ipa: '/ˈɪn.trə.vɝːt/' } },
    definition: {
      en: 'A shy, reticent person who is more focused on inner thoughts.',
      zh: '内向的人',
    },
    examples: [
      {
        en: ['As an introvert, she preferred reading to parties.'],
        zh: ['作为一个内向的人，她更喜欢读书而非参加派对。'],
      },
    ],
    rootBreakdown: [
      { surface: 'intro', type: 'prefix' },
      { surface: 'vert', type: 'root', rootSlug: 'vers' },
    ],
    morphologyNote: {
      en: 'intro- ("inward") + vert ("turn") → one turned inward.',
      zh: 'intro-（向内）+ vert（转）→ 向内转的人。',
    },
    relatedWords: ['introverted', 'extrovert', 'divert'],
  },
  {
    slug: 'extrovert',
    lemma: 'extrovert',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈek.strə.vɜːt/' }, us: { ipa: '/ˈek.strə.vɝːt/' } },
    definition: { en: 'An outgoing, socially confident person.', zh: '外向的人' },
    examples: [
      {
        en: ['Extroverts tend to thrive in team environments.'],
        zh: ['外向的人往往在团队环境中表现出色。'],
      },
    ],
    rootBreakdown: [
      { surface: 'extro', type: 'prefix' },
      { surface: 'vert', type: 'root', rootSlug: 'vers' },
    ],
    morphologyNote: {
      en: 'extro- ("outward") + vert ("turn") → one turned outward.',
      zh: 'extro-（向外）+ vert（转）→ 向外转的人。',
    },
    relatedWords: ['extroverted', 'introvert', 'convert'],
  },
  {
    slug: 'advertise',
    lemma: 'advertise',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ˈæd.və.taɪz/' }, us: { ipa: '/ˈæd.vɚ.taɪz/' } },
    definition: {
      en: 'To describe or draw attention to a product or event in a public medium.',
      zh: '做广告；宣传',
    },
    examples: [
      {
        en: ['Companies advertise their products on social media.'],
        zh: ['企业在社交媒体上为产品做广告。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ad', type: 'prefix' },
      { surface: 'vert', type: 'root', rootSlug: 'vers' },
      { surface: 'ise', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ad- ("toward") + vert ("turn") + -ise (verb) → to turn attention toward.',
      zh: 'ad-（朝向）+ vert（转）+ -ise（动词后缀）→ 将注意力转向，即宣传。',
    },
    relatedWords: ['advertisement', 'advertiser', 'divert'],
  },
  {
    slug: 'subvert',
    lemma: 'subvert',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/səbˈvɜːt/' }, us: { ipa: '/səbˈvɝːt/' } },
    definition: {
      en: 'To undermine the power or authority of an established system.',
      zh: '颠覆；破坏',
    },
    examples: [
      {
        en: ['The group attempted to subvert the democratic process.'],
        zh: ['该组织试图颠覆民主进程。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sub', type: 'prefix' },
      { surface: 'vert', type: 'root', rootSlug: 'vers' },
    ],
    morphologyNote: {
      en: 'sub- ("from below") + vert ("turn") → to turn from below, i.e. to overthrow.',
      zh: 'sub-（从下面）+ vert（转）→ 从下面翻转，即颠覆。',
    },
    relatedWords: ['subversion', 'subversive', 'convert'],
  },
];
