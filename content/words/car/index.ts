import type { WordEntry } from '@/types/content';

export const CAR_WORDS: WordEntry[] = [
  {
    slug: 'car',
    lemma: 'car',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/kɑːr/' },
      us: { ipa: '/kɑːr/' },
    },
    definition: {
      en: 'A road vehicle powered by an engine, designed to carry a small number of people.',
      zh: '汽车；小轿车',
    },
    examples: [
      {
        en: ['He drove his car to work every morning.'],
        zh: ['他每天早上开车去上班。'],
      },
    ],
    rootBreakdown: [{ surface: 'car', type: 'root', rootSlug: 'car' }],
    morphologyNote: {
      en: 'From the root car/curr ("run, move"). Originally a wheeled vehicle that moves/runs.',
      zh: '源自词根 car/curr（跑、移动）。原指有轮的移动/行驶工具。',
    },
    relatedWords: ['carry', 'career', 'cart'],
  },
  {
    slug: 'carry',
    lemma: 'carry',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˈkær.i/' },
      us: { ipa: '/ˈker.i/' },
    },
    definition: {
      en: 'To move something from one place to another; to support the weight of.',
      zh: '搬运；携带；承载',
    },
    examples: [
      {
        en: ['She carried the heavy box upstairs by herself.'],
        zh: ['她独自把沉重的箱子搬上了楼。'],
      },
    ],
    rootBreakdown: [
      { surface: 'car', type: 'root', rootSlug: 'car' },
      { surface: 'ry', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'car ("run, move") + -ry (verb ending) → to move something from place to place.',
      zh: 'car（跑、移动）+ -ry（动词词尾）→ 把东西从一处移到另一处，即搬运。',
    },
    relatedWords: ['carrier', 'miscarry', 'car'],
  },
  {
    slug: 'career',
    lemma: 'career',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/kəˈrɪər/' },
      us: { ipa: '/kəˈrɪr/' },
    },
    definition: {
      en: "An occupation or profession pursued for a significant period of one's life.",
      zh: '职业；事业；生涯',
    },
    examples: [
      {
        en: ['She built a successful career in international finance.'],
        zh: ['她在国际金融领域建立了成功的事业。'],
      },
    ],
    rootBreakdown: [
      { surface: 'car', type: 'root', rootSlug: 'car' },
      { surface: 'eer', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'car ("run, move") + -eer (noun suffix) → one\'s running course through life, a career.',
      zh: 'car（跑、移动）+ -eer（名词后缀）→ 人生的奔跑轨迹，即职业生涯。',
    },
    relatedWords: ['car', 'carry', 'cursor'],
  },
  {
    slug: 'cart',
    lemma: 'cart',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/kɑːt/' },
      us: { ipa: '/kɑːrt/' },
    },
    definition: {
      en: 'A strong open vehicle with two or four wheels, used for carrying loads.',
      zh: '手推车；马车',
    },
    examples: [
      {
        en: ['The farmer loaded the harvest onto the cart.'],
        zh: ['农民把收成装上了马车。'],
      },
    ],
    rootBreakdown: [
      { surface: 'car', type: 'root', rootSlug: 'car' },
      { surface: 't', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'car ("run, move") + -t → a vehicle that moves or runs, a cart.',
      zh: 'car（跑、移动）+ -t → 可以移动的运载工具，即车。',
    },
    relatedWords: ['car', 'carry', 'charger'],
  },
  {
    slug: 'cursor',
    lemma: 'cursor',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈkɜː.sər/' },
      us: { ipa: '/ˈkɝː.sɚ/' },
    },
    definition: {
      en: 'A movable indicator on a computer screen; a sliding part of a measuring instrument.',
      zh: '光标；游标',
    },
    examples: [
      {
        en: ['Move the cursor to the top of the page and click.'],
        zh: ['将光标移到页面顶部并点击。'],
      },
    ],
    rootBreakdown: [
      { surface: 'curs', type: 'root', rootSlug: 'car' },
      { surface: 'or', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'curs (variant of car, "run") + -or (agent suffix) → a runner, something that runs across a surface.',
      zh: 'curs（car 的变体，跑）+ -or（施事者后缀）→ 奔跑者，即在表面移动的东西。',
    },
    relatedWords: ['cursory', 'incur', 'concur'],
  },
  {
    slug: 'cursory',
    lemma: 'cursory',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈkɜː.sər.i/' },
      us: { ipa: '/ˈkɝː.sɚ.i/' },
    },
    definition: {
      en: 'Hasty and therefore not thorough or detailed.',
      zh: '粗略的；匆忙的；草率的',
    },
    examples: [
      {
        en: ['A cursory glance at the report revealed several errors.'],
        zh: ['粗略看了一下报告就发现了几个错误。'],
      },
    ],
    rootBreakdown: [
      { surface: 'curs', type: 'root', rootSlug: 'car' },
      { surface: 'ory', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'curs (variant of car, "run") + -ory (adjective suffix) → running quickly, hence hasty and superficial.',
      zh: 'curs（car 的变体，跑）+ -ory（形容词后缀）→ 快速跑过的，即粗略的。',
    },
    relatedWords: ['cursor', 'incur', 'concur'],
  },
  {
    slug: 'incur',
    lemma: 'incur',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ɪnˈkɜːr/' },
      us: { ipa: '/ɪnˈkɝː/' },
    },
    definition: {
      en: "To become subject to something unpleasant as a result of one's actions.",
      zh: '招致；遭受；引起',
    },
    examples: [
      {
        en: ['Late payments will incur additional charges.'],
        zh: ['逾期付款将产生额外费用。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'cur', type: 'root', rootSlug: 'car' },
    ],
    morphologyNote: {
      en: 'in- ("into, upon") + cur (variant of car, "run") → to run into, to bring upon oneself.',
      zh: 'in-（进入、遭遇）+ cur（car 的变体，跑）→ 跑入，即招致。',
    },
    relatedWords: ['concur', 'cursor', 'career'],
  },
  {
    slug: 'concur',
    lemma: 'concur',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/kənˈkɜːr/' },
      us: { ipa: '/kənˈkɝː/' },
    },
    definition: {
      en: 'To agree with someone or something; to happen at the same time.',
      zh: '同意；一致；同时发生',
    },
    examples: [
      {
        en: ["The committee members concurred with the chairman's proposal."],
        zh: ['委员会成员同意了主席的提议。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'cur', type: 'root', rootSlug: 'car' },
    ],
    morphologyNote: {
      en: 'con- ("together") + cur (variant of car, "run") → to run together, to agree.',
      zh: 'con-（一起）+ cur（car 的变体，跑）→ 一起跑，即意见一致。',
    },
    relatedWords: ['incur', 'cursor', 'career'],
  },
  {
    slug: 'discharge',
    lemma: 'discharge',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: {
      uk: { ipa: '/dɪsˈtʃɑːdʒ/' },
      us: { ipa: '/dɪsˈtʃɑːrdʒ/' },
    },
    definition: {
      en: 'To release from duty or obligation; to emit or pour out.',
      zh: '释放；排出；解雇；履行',
    },
    examples: [
      {
        en: ['The patient was discharged from the hospital after recovery.'],
        zh: ['患者康复后出院了。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dis', type: 'prefix' },
      { surface: 'charge', type: 'root', rootSlug: 'car' },
    ],
    morphologyNote: {
      en: 'dis- ("away, reverse") + charge (from car, "load, carry") → to unload, to release.',
      zh: 'dis-（离开、相反）+ charge（源自 car，装载、运送）→ 卸载，即释放。',
    },
    relatedWords: ['charge', 'overcharge', 'carry'],
  },
  {
    slug: 'corridor',
    lemma: 'corridor',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈkɒr.ɪ.dɔːr/' },
      us: { ipa: '/ˈkɔːr.ɪ.dɔːr/' },
    },
    definition: {
      en: 'A long passage in a building from which doors lead into rooms.',
      zh: '走廊；通道',
    },
    examples: [
      {
        en: ['The hotel corridor was lined with paintings.'],
        zh: ['酒店走廊两侧挂满了画作。'],
      },
    ],
    rootBreakdown: [
      { surface: 'cor', type: 'root', rootSlug: 'car' },
      { surface: 'r', type: 'connector' },
      { surface: 'idor', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'cor- (variant of car, "run") + -ridor (place suffix) → a place for running through, a passageway.',
      zh: 'cor-（car 的变体，跑）+ -ridor（场所后缀）→ 供通行的场所，即走廊。',
    },
    relatedWords: ['cursor', 'career', 'car'],
  },
];
