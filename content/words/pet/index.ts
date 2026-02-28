import type { WordEntry } from '@/types/content';

export const PET_WORDS: WordEntry[] = [
  {
    slug: 'compete',
    lemma: 'compete',
    partOfSpeech: ['vi.'],
    pronunciation: { uk: { ipa: '/kəmˈpiːt/' }, us: { ipa: '/kəmˈpiːt/' } },
    definition: { en: 'To strive to gain or win something by defeating others.', zh: '竞争；比赛' },
    examples: [
      {
        en: ['The two companies compete fiercely for market share.'],
        zh: ['两家公司为争夺市场份额激烈竞争。'],
      },
    ],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'pet', type: 'root', rootSlug: 'pet' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'com- ("together") + pet ("seek, strive") + -e → to seek together, to vie with one another.',
      zh: 'com-（一起）+ pet（追求）+ -e → 一起追求，即竞争。',
    },
    relatedWords: ['competition', 'competitor', 'competitive'],
  },
  {
    slug: 'competition',
    lemma: 'competition',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌkɒm.pəˈtɪʃ.ən/' }, us: { ipa: '/ˌkɑːm.pəˈtɪʃ.ən/' } },
    definition: {
      en: 'The activity of competing; a contest; rival businesses collectively.',
      zh: '竞争；比赛；竞赛',
    },
    examples: [
      {
        en: ['There is strong competition among tech companies for top talent.'],
        zh: ['科技公司之间对顶尖人才的竞争非常激烈。'],
      },
    ],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'pet', type: 'root', rootSlug: 'pet' },
      { surface: 'ition', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'com- ("together") + pet ("seek") + -ition (noun) → the act of seeking together, a contest.',
      zh: 'com-（一起）+ pet（追求）+ -ition（名词后缀）→ 一起追求的行为，即竞争。',
    },
    relatedWords: ['compete', 'competitive', 'competitor'],
  },
  {
    slug: 'competitive',
    lemma: 'competitive',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/kəmˈpet.ɪ.tɪv/' }, us: { ipa: '/kəmˈpet̬.ɪ.t̬ɪv/' } },
    definition: {
      en: 'Relating to competition; having a strong desire to win; as good as or better than others.',
      zh: '竞争的；有竞争力的；好胜的',
    },
    examples: [
      {
        en: ['We offer competitive prices on all our products.'],
        zh: ['我们所有产品都提供有竞争力的价格。'],
      },
    ],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'pet', type: 'root', rootSlug: 'pet' },
      { surface: 'itive', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'com- ("together") + pet ("seek") + -itive (adj.) → tending to seek against others, rivalry-oriented.',
      zh: 'com-（一起）+ pet（追求）+ -itive（形容词后缀）→ 倾向于与他人竞争的。',
    },
    relatedWords: ['compete', 'competition'],
  },
  {
    slug: 'competent',
    lemma: 'competent',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈkɒm.pɪ.tənt/' }, us: { ipa: '/ˈkɑːm.pɪ.t̬ənt/' } },
    definition: {
      en: 'Having the necessary ability, knowledge, or skill to do something successfully.',
      zh: '有能力的；胜任的',
    },
    examples: [
      {
        en: ['She is a highly competent manager who gets results.'],
        zh: ['她是一位非常有能力的经理，总能取得成果。'],
      },
    ],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'pet', type: 'root', rootSlug: 'pet' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'com- ("together") + pet ("seek, be fit") + -ent (adj.) → fitting together, adequate for the task.',
      zh: 'com-（一起）+ pet（追求、适合）+ -ent（形容词后缀）→ 合适的，即胜任的。',
    },
    relatedWords: ['competence', 'incompetent'],
  },
  {
    slug: 'perpetual',
    lemma: 'perpetual',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/pəˈpetʃ.u.əl/' }, us: { ipa: '/pɚˈpetʃ.u.əl/' } },
    definition: {
      en: 'Never ending or changing; occurring repeatedly.',
      zh: '永久的；永恒的；连续不断的',
    },
    examples: [
      {
        en: ['The region suffers from a perpetual cycle of drought and famine.'],
        zh: ['该地区遭受着干旱和饥荒的永恒循环。'],
      },
    ],
    rootBreakdown: [
      { surface: 'per', type: 'prefix' },
      { surface: 'pet', type: 'root', rootSlug: 'pet' },
      { surface: 'ual', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'per- ("through, completely") + pet ("seek, go toward") + -ual (adj.) → going through continuously, unceasing.',
      zh: 'per-（通过、完全）+ pet（追求）+ -ual（形容词后缀）→ 不断追求的，即永久的。',
    },
    relatedWords: ['perpetuate', 'perpetually'],
  },
  {
    slug: 'perpetuate',
    lemma: 'perpetuate',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/pəˈpetʃ.u.eɪt/' }, us: { ipa: '/pɚˈpetʃ.u.eɪt/' } },
    definition: {
      en: 'To make something continue indefinitely; to preserve.',
      zh: '使永存；使延续',
    },
    examples: [
      {
        en: ['Stereotypes are perpetuated by media portrayals.'],
        zh: ['媒体的刻画使刻板印象持续存在。'],
      },
    ],
    rootBreakdown: [
      { surface: 'per', type: 'prefix' },
      { surface: 'pet', type: 'root', rootSlug: 'pet' },
      { surface: 'uate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'per- ("through") + pet ("seek") + -uate (verb) → to make go on continuously.',
      zh: 'per-（通过）+ pet（追求）+ -uate（动词后缀）→ 使持续下去。',
    },
    relatedWords: ['perpetual', 'perpetuation'],
  },
  {
    slug: 'appetite',
    lemma: 'appetite',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈæp.ɪ.taɪt/' }, us: { ipa: '/ˈæp.ɪ.taɪt/' } },
    definition: {
      en: 'A natural desire to satisfy a bodily need, especially for food; a strong desire.',
      zh: '食欲；胃口；欲望',
    },
    examples: [{ en: ['Exercise gives me a healthy appetite.'], zh: ['运动让我有了健康的胃口。'] }],
    rootBreakdown: [
      { surface: 'ap', type: 'prefix' },
      { surface: 'pet', type: 'root', rootSlug: 'pet' },
      { surface: 'ite', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ap- (variant of ad-, "toward") + pet ("seek") + -ite (noun) → a seeking toward, a desire.',
      zh: 'ap-（ad- 的变体，向）+ pet（追求）+ -ite（名词后缀）→ 向往追求，即食欲。',
    },
    relatedWords: ['appetizing', 'appetizer'],
  },
  {
    slug: 'petition',
    lemma: 'petition',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: { uk: { ipa: '/pəˈtɪʃ.ən/' }, us: { ipa: '/pəˈtɪʃ.ən/' } },
    definition: {
      en: 'A formal written request signed by many people; to make a formal request.',
      zh: '请愿书；请愿；申请',
    },
    examples: [
      {
        en: ['Over a million people signed the petition against the new tax.'],
        zh: ['超过一百万人签署了反对新税的请愿书。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pet', type: 'root', rootSlug: 'pet' },
      { surface: 'ition', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pet ("seek, request") + -ition (noun) → the act of seeking, a formal request.',
      zh: 'pet（追求、请求）+ -ition（名词后缀）→ 请求的行为，即请愿。',
    },
    relatedWords: ['petitioner', 'compete'],
  },
  {
    slug: 'repeat',
    lemma: 'repeat',
    partOfSpeech: ['vt.', 'n.'],
    pronunciation: { uk: { ipa: '/rɪˈpiːt/' }, us: { ipa: '/rɪˈpiːt/' } },
    definition: {
      en: 'To say or do something again; an instance of repeating.',
      zh: '重复；重播；再做一次',
    },
    examples: [{ en: ['Could you please repeat the question?'], zh: ['你能重复一下这个问题吗？'] }],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'peat', type: 'root', rootSlug: 'pet' },
    ],
    morphologyNote: {
      en: 're- ("again") + peat (variant of pet, "seek, go to") → to seek again, to do over.',
      zh: 're-（再次）+ peat（pet 的变体，追求）→ 再次追求，即重复。',
    },
    relatedWords: ['repetition', 'repetitive'],
  },
  {
    slug: 'repetition',
    lemma: 'repetition',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌrep.əˈtɪʃ.ən/' }, us: { ipa: '/ˌrep.əˈtɪʃ.ən/' } },
    definition: { en: 'The action of repeating something; an instance of this.', zh: '重复；反复' },
    examples: [
      {
        en: ['Repetition is the key to mastering a new language.'],
        zh: ['重复是掌握一门新语言的关键。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'pet', type: 'root', rootSlug: 'pet' },
      { surface: 'ition', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("again") + pet ("seek") + -ition (noun) → the act of seeking again, doing over.',
      zh: 're-（再次）+ pet（追求）+ -ition（名词后缀）→ 再次追求的行为，即重复。',
    },
    relatedWords: ['repeat', 'repetitive'],
  },
  {
    slug: 'impetus',
    lemma: 'impetus',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈɪm.pɪ.təs/' }, us: { ipa: '/ˈɪm.pə.t̬əs/' } },
    definition: {
      en: 'The force that makes something happen or happen more quickly; a driving force.',
      zh: '推动力；动力；刺激',
    },
    examples: [
      {
        en: ['The scandal gave new impetus to calls for government reform.'],
        zh: ['丑闻为要求政府改革的呼声注入了新的推动力。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'pet', type: 'root', rootSlug: 'pet' },
      { surface: 'us', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- ("toward") + pet ("seek, rush") + -us (noun) → a rushing toward, a driving force.',
      zh: 'im-（向）+ pet（追求）+ -us（名词后缀）→ 向前冲的力量，即推动力。',
    },
    relatedWords: ['impetuous', 'compete'],
  },
  {
    slug: 'impetuous',
    lemma: 'impetuous',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ɪmˈpetʃ.u.əs/' }, us: { ipa: '/ɪmˈpetʃ.u.əs/' } },
    definition: { en: 'Acting or done quickly without thought; rash.', zh: '冲动的；鲁莽的' },
    examples: [
      {
        en: ['His impetuous decision to quit his job left him in financial difficulty.'],
        zh: ['他冲动辞职的决定让他陷入了经济困难。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'pet', type: 'root', rootSlug: 'pet' },
      { surface: 'uous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- ("toward") + pet ("rush, seek") + -uous (adj.) → rushing toward without thinking, rash.',
      zh: 'im-（向）+ pet（冲、追求）+ -uous（形容词后缀）→ 不假思索地冲向前的，即冲动的。',
    },
    relatedWords: ['impetus', 'impetuosity'],
  },
];
