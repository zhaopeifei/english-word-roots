import type { WordEntry } from '@/types/content';

export const SPIR_WORDS: WordEntry[] = [
  {
    slug: 'spirit',
    lemma: 'spirit',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈspɪr.ɪt/' },
      us: { ipa: '/ˈspɪr.ɪt/' },
    },
    definition: {
      en: 'The non-physical part of a person; enthusiasm and energy.',
      zh: '精神；灵魂；气概',
    },
    examples: [
      {
        en: ['The team showed great spirit in the final match.'],
        zh: ['球队在决赛中展现了伟大的精神。'],
      },
    ],
    rootBreakdown: [
      { surface: 'spir', type: 'root', rootSlug: 'spir' },
      { surface: 'it', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'spir ("breathe") + -it (noun) → that which breathes, i.e. the soul or life force.',
      zh: 'spir（呼吸）+ -it（名词后缀）→ 能呼吸之物，即灵魂、精神。',
    },
    relatedWords: ['spiritual', 'spirited', 'inspire'],
  },
  {
    slug: 'inspire',
    lemma: 'inspire',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ɪnˈspaɪər/' },
      us: { ipa: '/ɪnˈspaɪr/' },
    },
    definition: {
      en: 'To fill someone with the urge or ability to do something creative or extraordinary.',
      zh: '激励；启发；鼓舞',
    },
    examples: [
      {
        en: ['Her courage inspired millions around the world.'],
        zh: ['她的勇气激励了全世界数百万人。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'spir', type: 'root', rootSlug: 'spir' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("into") + spir ("breathe") → to breathe life or ideas into someone.',
      zh: 'in-（进入）+ spir（呼吸）→ 将生命或想法注入某人体内，即激励。',
    },
    relatedWords: ['inspiration', 'inspiring', 'inspired'],
  },
  {
    slug: 'inspiration',
    lemma: 'inspiration',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˌɪn.spɪˈreɪ.ʃən/' },
      us: { ipa: '/ˌɪn.spəˈreɪ.ʃən/' },
    },
    definition: {
      en: 'The process of being mentally stimulated to do something creative; a sudden brilliant idea.',
      zh: '灵感；启发；鼓舞',
    },
    examples: [
      {
        en: ['Nature has always been a source of inspiration for artists.'],
        zh: ['大自然一直是艺术家灵感的源泉。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'spir', type: 'root', rootSlug: 'spir' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("into") + spir ("breathe") + -ation (noun) → the act of breathing in ideas.',
      zh: 'in-（进入）+ spir（呼吸）+ -ation（名词后缀）→ 吸入思想的行为，即灵感。',
    },
    relatedWords: ['inspire', 'inspiring', 'expire'],
  },
  {
    slug: 'expire',
    lemma: 'expire',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ɪkˈspaɪər/' },
      us: { ipa: '/ɪkˈspaɪr/' },
    },
    definition: {
      en: 'To come to the end of a period of validity; to die.',
      zh: '到期；届满；死亡',
    },
    examples: [
      {
        en: ['My passport will expire next month.'],
        zh: ['我的护照下个月到期。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'pir', type: 'root', rootSlug: 'spir' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ex- ("out") + pir (from spir, "breathe") → to breathe out, i.e. to end.',
      zh: 'ex-（向外）+ pir（源自 spir，呼吸）→ 呼出最后一口气，即到期、死亡。',
    },
    relatedWords: ['expiration', 'inspire', 'respire'],
  },
  {
    slug: 'conspire',
    lemma: 'conspire',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/kənˈspaɪər/' },
      us: { ipa: '/kənˈspaɪr/' },
    },
    definition: {
      en: 'To make secret plans jointly to commit an unlawful act.',
      zh: '密谋；合谋；阴谋',
    },
    examples: [
      {
        en: ['They conspired to overthrow the government.'],
        zh: ['他们密谋推翻政府。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'spir', type: 'root', rootSlug: 'spir' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'con- ("together") + spir ("breathe") → to breathe together, i.e. to whisper together in secret.',
      zh: 'con-（一起）+ spir（呼吸）→ 一起呼吸/耳语，即密谋。',
    },
    relatedWords: ['conspiracy', 'conspirator', 'inspire'],
  },
  {
    slug: 'conspiracy',
    lemma: 'conspiracy',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/kənˈspɪr.ə.si/' },
      us: { ipa: '/kənˈspɪr.ə.si/' },
    },
    definition: {
      en: 'A secret plan by a group to do something unlawful or harmful.',
      zh: '阴谋；密谋',
    },
    examples: [
      {
        en: ['The police uncovered a conspiracy to commit fraud.'],
        zh: ['警方揭露了一起诈骗阴谋。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'spir', type: 'root', rootSlug: 'spir' },
      { surface: 'acy', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'con- ("together") + spir ("breathe") + -acy (noun) → the act of breathing together in secret.',
      zh: 'con-（一起）+ spir（呼吸）+ -acy（名词后缀）→ 秘密地一起呼吸的行为。',
    },
    relatedWords: ['conspire', 'conspirator', 'inspire'],
  },
  {
    slug: 'aspire',
    lemma: 'aspire',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/əˈspaɪər/' },
      us: { ipa: '/əˈspaɪr/' },
    },
    definition: {
      en: "To direct one's hopes or ambitions toward achieving something.",
      zh: '渴望；追求；有志于',
    },
    examples: [
      {
        en: ['She aspires to become a world-class surgeon.'],
        zh: ['她立志成为一名世界级的外科医生。'],
      },
    ],
    rootBreakdown: [
      { surface: 'a', type: 'prefix' },
      { surface: 'spir', type: 'root', rootSlug: 'spir' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'a- ("toward") + spir ("breathe") → to breathe toward a goal.',
      zh: 'a-（朝向）+ spir（呼吸）→ 朝着目标呼吸，即渴望、追求。',
    },
    relatedWords: ['aspiration', 'inspire', 'spirit'],
  },
  {
    slug: 'respire',
    lemma: 'respire',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/rɪˈspaɪər/' },
      us: { ipa: '/rɪˈspaɪr/' },
    },
    definition: {
      en: 'To breathe; to carry out respiration.',
      zh: '呼吸',
    },
    examples: [
      {
        en: ['All living organisms respire to produce energy.'],
        zh: ['所有生物都通过呼吸来产生能量。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'spir', type: 'root', rootSlug: 'spir' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("again, repeatedly") + spir ("breathe") → to breathe repeatedly.',
      zh: 're-（反复）+ spir（呼吸）→ 反复呼吸。',
    },
    relatedWords: ['respiration', 'respiratory', 'perspire'],
  },
  {
    slug: 'perspire',
    lemma: 'perspire',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/pəˈspaɪər/' },
      us: { ipa: '/pɚˈspaɪr/' },
    },
    definition: {
      en: 'To give out sweat through the pores of the skin.',
      zh: '出汗；排汗',
    },
    examples: [
      {
        en: ['Athletes perspire heavily during intense training.'],
        zh: ['运动员在高强度训练中大量出汗。'],
      },
    ],
    rootBreakdown: [
      { surface: 'per', type: 'prefix' },
      { surface: 'spir', type: 'root', rootSlug: 'spir' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'per- ("through") + spir ("breathe") → to breathe through the skin, i.e. to sweat.',
      zh: 'per-（穿过）+ spir（呼吸）→ 通过皮肤呼吸，即出汗。',
    },
    relatedWords: ['perspiration', 'respire', 'inspire'],
  },
  {
    slug: 'transpire',
    lemma: 'transpire',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/trænˈspaɪər/' },
      us: { ipa: '/trænˈspaɪr/' },
    },
    definition: {
      en: 'To occur or happen; to become known.',
      zh: '发生；为人所知；蒸发',
    },
    examples: [
      {
        en: ['It transpired that the documents had been forged.'],
        zh: ['后来得知那些文件是伪造的。'],
      },
    ],
    rootBreakdown: [
      { surface: 'trans', type: 'prefix' },
      { surface: 'pir', type: 'root', rootSlug: 'spir' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'trans- ("across, through") + pir (from spir, "breathe") → to breathe through, i.e. to come to light.',
      zh: 'trans-（穿过）+ pir（源自 spir，呼吸）→ 穿透呼出，引申为发生、透露。',
    },
    relatedWords: ['inspire', 'expire', 'perspire'],
  },
  {
    slug: 'spiritual',
    lemma: 'spiritual',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈspɪr.ɪ.tʃu.əl/' },
      us: { ipa: '/ˈspɪr.ɪ.tʃu.əl/' },
    },
    definition: {
      en: 'Relating to the human spirit or soul, as opposed to material things.',
      zh: '精神的；心灵的；宗教的',
    },
    examples: [
      {
        en: ['Meditation can promote spiritual well-being.'],
        zh: ['冥想可以促进心灵健康。'],
      },
    ],
    rootBreakdown: [
      { surface: 'spir', type: 'root', rootSlug: 'spir' },
      { surface: 'it', type: 'connector' },
      { surface: 'ual', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'spirit ("breath, soul") + -ual (adj.) → relating to the soul.',
      zh: 'spirit（呼吸、灵魂）+ -ual（形容词后缀）→ 与灵魂有关的。',
    },
    relatedWords: ['spirit', 'spiritually', 'inspire'],
  },
];
