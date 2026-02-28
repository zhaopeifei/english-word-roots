import type { WordEntry } from '@/types/content';

export const VINC_WORDS: WordEntry[] = [
  {
    slug: 'victory',
    lemma: 'victory',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈvɪk.tər.i/' }, us: { ipa: '/ˈvɪk.tɚ.i/' } },
    definition: { en: 'An act of defeating an enemy or opponent.', zh: '胜利；成功' },
    examples: [
      { en: ['The team celebrated their victory with great joy.'], zh: ['球队欢庆胜利。'] },
    ],
    rootBreakdown: [
      { surface: 'vict', type: 'root', rootSlug: 'vinc' },
      { surface: 'ory', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'vict (from vinc, "conquer") + -ory (noun) → the act of conquering.',
      zh: 'vict（源自 vinc，征服）+ -ory（名词后缀）→ 征服的行为，即胜利。',
    },
    relatedWords: ['victorious', 'victor', 'convince'],
  },
  {
    slug: 'convince',
    lemma: 'convince',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/kənˈvɪns/' }, us: { ipa: '/kənˈvɪns/' } },
    definition: {
      en: 'To cause someone to believe firmly in the truth of something.',
      zh: '说服；使确信',
    },
    examples: [
      {
        en: ['She convinced the board to approve the new plan.'],
        zh: ['她说服了董事会批准新计划。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'vinc', type: 'root', rootSlug: 'vinc' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'con- ("completely") + vinc ("conquer") → to conquer someone\'s doubts completely.',
      zh: 'con-（完全地）+ vinc（征服）→ 完全征服某人的疑虑，即说服。',
    },
    relatedWords: ['convincing', 'convinced', 'convict'],
  },
  {
    slug: 'invincible',
    lemma: 'invincible',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ɪnˈvɪn.sɪ.bəl/' }, us: { ipa: '/ɪnˈvɪn.sə.bəl/' } },
    definition: { en: 'Too powerful to be defeated or overcome.', zh: '不可战胜的；无敌的' },
    examples: [
      {
        en: ['The army seemed invincible after winning ten consecutive battles.'],
        zh: ['连续赢得十场战役后，这支军队似乎不可战胜。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'vinc', type: 'root', rootSlug: 'vinc' },
      { surface: 'ible', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("not") + vinc ("conquer") + -ible ("able") → not able to be conquered.',
      zh: 'in-（不）+ vinc（征服）+ -ible（可…的）→ 不可被征服的。',
    },
    relatedWords: ['invincibility', 'victory', 'convince'],
  },
  {
    slug: 'convict',
    lemma: 'convict',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: { uk: { ipa: '/kənˈvɪkt/' }, us: { ipa: '/kənˈvɪkt/' } },
    definition: {
      en: 'To declare someone guilty of a criminal offense; a person found guilty.',
      zh: '定罪；判罪；囚犯',
    },
    examples: [{ en: ['The jury convicted him of fraud.'], zh: ['陪审团判定他犯有欺诈罪。'] }],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'vict', type: 'root', rootSlug: 'vinc' },
    ],
    morphologyNote: {
      en: 'con- ("completely") + vict ("conquer, overcome") → overcome by evidence, i.e. proven guilty.',
      zh: 'con-（完全地）+ vict（征服）→ 被证据完全征服，即被判有罪。',
    },
    relatedWords: ['conviction', 'convince', 'evict'],
  },
  {
    slug: 'evict',
    lemma: 'evict',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ɪˈvɪkt/' }, us: { ipa: '/ɪˈvɪkt/' } },
    definition: {
      en: 'To expel someone from a property, especially by legal process.',
      zh: '驱逐；赶出',
    },
    examples: [
      {
        en: ['The landlord evicted the tenants for not paying rent.'],
        zh: ['房东因租户未交房租将其驱逐。'],
      },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'vict', type: 'root', rootSlug: 'vinc' },
    ],
    morphologyNote: {
      en: 'e- ("out") + vict ("conquer") → to conquer out, i.e. to force out.',
      zh: 'e-（向外）+ vict（征服）→ 将其征服赶出，即驱逐。',
    },
    relatedWords: ['eviction', 'convict', 'victory'],
  },
  {
    slug: 'victim',
    lemma: 'victim',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈvɪk.tɪm/' }, us: { ipa: '/ˈvɪk.tɪm/' } },
    definition: {
      en: 'A person harmed, injured, or killed as a result of a crime or event.',
      zh: '受害者；牺牲品',
    },
    examples: [
      {
        en: ['The charity supports victims of natural disasters.'],
        zh: ['该慈善机构帮助自然灾害的受害者。'],
      },
    ],
    rootBreakdown: [
      { surface: 'vict', type: 'root', rootSlug: 'vinc' },
      { surface: 'im', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'vict (from vinc, "conquer") + -im → one who is conquered, i.e. the defeated party.',
      zh: 'vict（源自 vinc，征服）+ -im → 被征服的人，即受害者。',
    },
    relatedWords: ['victimize', 'victimization', 'victory'],
  },
  {
    slug: 'province',
    lemma: 'province',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈprɒv.ɪns/' }, us: { ipa: '/ˈprɑː.vɪns/' } },
    definition: {
      en: 'A principal administrative division of a country; a scope of responsibility.',
      zh: '省份；领域；范围',
    },
    examples: [
      {
        en: ['Canada has ten provinces and three territories.'],
        zh: ['加拿大有十个省和三个地区。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pro', type: 'prefix' },
      { surface: 'vinc', type: 'root', rootSlug: 'vinc' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pro- ("before, for") + vinc ("conquer") → a territory conquered for Rome, hence an administrative region.',
      zh: 'pro-（为了）+ vinc（征服）→ 为罗马征服的领土，即行省。',
    },
    relatedWords: ['provincial', 'victory', 'convince'],
  },
  {
    slug: 'victorious',
    lemma: 'victorious',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/vɪkˈtɔː.ri.əs/' }, us: { ipa: '/vɪkˈtɔːr.i.əs/' } },
    definition: { en: 'Having won a victory; triumphant.', zh: '胜利的；获胜的' },
    examples: [
      {
        en: ['The victorious team was greeted by cheering fans.'],
        zh: ['获胜的球队受到了欢呼球迷的迎接。'],
      },
    ],
    rootBreakdown: [
      { surface: 'vict', type: 'root', rootSlug: 'vinc' },
      { surface: 'or', type: 'connector' },
      { surface: 'ious', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'victor ("winner") + -ious (adj.) → relating to winning.',
      zh: 'victor（胜利者）+ -ious（形容词后缀）→ 与胜利有关的。',
    },
    relatedWords: ['victory', 'victor', 'convince'],
  },
];
