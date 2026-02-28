import type { WordEntry } from '@/types/content';

export const BAR_WORDS: WordEntry[] = [
  {
    slug: 'barrier',
    lemma: 'barrier',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈbær.i.ər/' },
      us: { ipa: '/ˈber.i.ɚ/' },
    },
    definition: {
      en: 'A fence or obstacle that prevents movement or access.',
      zh: '障碍；关卡；屏障',
    },
    examples: [
      {
        en: ['Language can be a significant barrier to communication.'],
        zh: ['语言可能是沟通的重大障碍。'],
      },
    ],
    rootBreakdown: [
      { surface: 'bar', type: 'root', rootSlug: 'bar' },
      { surface: 'r', type: 'connector' },
      { surface: 'ier', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'bar ("bar, rod, obstacle") + -ier (noun suffix) → something that bars the way.',
      zh: 'bar（栏、杆、障碍）+ -ier（名词后缀）→ 阻挡道路的东西，即屏障。',
    },
    relatedWords: ['barricade', 'embarrass', 'ban'],
  },
  {
    slug: 'barricade',
    lemma: 'barricade',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˌbær.ɪˈkeɪd/' },
      us: { ipa: '/ˌber.ɪˈkeɪd/' },
    },
    definition: {
      en: 'An improvised barrier erected to block a passage; to block with a barricade.',
      zh: '路障；街垒；设路障阻挡',
    },
    examples: [
      {
        en: ['The protesters set up barricades across the main road.'],
        zh: ['抗议者在主干道上设置了路障。'],
      },
    ],
    rootBreakdown: [
      { surface: 'bar', type: 'root', rootSlug: 'bar' },
      { surface: 'r', type: 'connector' },
      { surface: 'ic', type: 'suffix' },
      { surface: 'ade', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'bar ("bar, obstacle") + -ric- + -ade (noun suffix) → a structure that bars passage.',
      zh: 'bar（栏、障碍）+ -ric- + -ade（名词后缀）→ 阻拦通行的结构，即路障。',
    },
    relatedWords: ['barrier', 'embarrass', 'ban'],
  },
  {
    slug: 'embarrass',
    lemma: 'embarrass',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ɪmˈbær.əs/' },
      us: { ipa: '/ɪmˈber.əs/' },
    },
    definition: {
      en: 'To cause someone to feel awkward, self-conscious, or ashamed.',
      zh: '使尴尬；使窘迫',
    },
    examples: [
      {
        en: ['His blunt question embarrassed her in front of everyone.'],
        zh: ['他直白的问题让她在众人面前很尴尬。'],
      },
    ],
    rootBreakdown: [
      { surface: 'em', type: 'prefix' },
      { surface: 'bar', type: 'root', rootSlug: 'bar' },
      { surface: 'r', type: 'connector' },
      { surface: 'ass', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'em- ("in") + bar ("bar, obstacle") + -ass → to put in an obstacle, to impede or fluster.',
      zh: 'em-（进入）+ bar（栏、障碍）+ -ass → 置入障碍中，即使困窘。',
    },
    relatedWords: ['embarrassment', 'embarrassing', 'barrier'],
  },
  {
    slug: 'embarrassment',
    lemma: 'embarrassment',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ɪmˈbær.əs.mənt/' },
      us: { ipa: '/ɪmˈber.əs.mənt/' },
    },
    definition: {
      en: 'A feeling of self-consciousness or shame; a cause of such feeling.',
      zh: '尴尬；窘迫',
    },
    examples: [
      {
        en: ['To her embarrassment, she had forgotten his name.'],
        zh: ['令她尴尬的是，她忘了他的名字。'],
      },
    ],
    rootBreakdown: [
      { surface: 'em', type: 'prefix' },
      { surface: 'bar', type: 'root', rootSlug: 'bar' },
      { surface: 'r', type: 'connector' },
      { surface: 'ass', type: 'suffix' },
      { surface: 'ment', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'embarrass + -ment (noun suffix) → the state of being embarrassed.',
      zh: 'embarrass（使尴尬）+ -ment（名词后缀）→ 尴尬的状态。',
    },
    relatedWords: ['embarrass', 'embarrassing', 'barrier'],
  },
  {
    slug: 'banish',
    lemma: 'banish',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˈbæn.ɪʃ/' },
      us: { ipa: '/ˈbæn.ɪʃ/' },
    },
    definition: {
      en: 'To send someone away from a place as an official punishment; to get rid of.',
      zh: '放逐；驱逐；消除',
    },
    examples: [
      {
        en: ['The king banished the traitor from the kingdom.'],
        zh: ['国王将叛徒逐出了王国。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ban', type: 'root', rootSlug: 'bar' },
      { surface: 'ish', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ban (from bar, "to bar/prohibit") + -ish (verb suffix) → to officially bar someone from a place.',
      zh: 'ban（源自 bar，禁止）+ -ish（动词后缀）→ 正式禁止某人进入某地，即放逐。',
    },
    relatedWords: ['abandon', 'banned', 'barrier'],
  },
  {
    slug: 'abandon',
    lemma: 'abandon',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: {
      uk: { ipa: '/əˈbæn.dən/' },
      us: { ipa: '/əˈbæn.dən/' },
    },
    definition: {
      en: 'To give up completely; to desert or leave behind.',
      zh: '放弃；遗弃；抛弃',
    },
    examples: [
      {
        en: ['They had to abandon the ship during the storm.'],
        zh: ['暴风雨中他们不得不弃船。'],
      },
    ],
    rootBreakdown: [
      { surface: 'a', type: 'prefix' },
      { surface: 'ban', type: 'root', rootSlug: 'bar' },
      { surface: 'don', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'a- ("to") + ban (from bar, "control, jurisdiction") + -don → to put out of one\'s control, to give up.',
      zh: 'a-（向）+ ban（源自 bar，控制、管辖）+ -don → 脱离控制，即放弃。',
    },
    relatedWords: ['abandoned', 'abandonment', 'banish'],
  },
  {
    slug: 'balance',
    lemma: 'balance',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈbæl.əns/' },
      us: { ipa: '/ˈbæl.əns/' },
    },
    definition: {
      en: 'An even distribution of weight; a state of equilibrium.',
      zh: '平衡；均衡；天平',
    },
    examples: [
      {
        en: ['It is important to maintain a healthy work-life balance.'],
        zh: ['保持健康的工作与生活平衡很重要。'],
      },
    ],
    rootBreakdown: [
      { surface: 'bal', type: 'root', rootSlug: 'bar' },
      { surface: 'ance', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'bal- (from bar, via Latin bilanx, "having two pans/bars") + -ance (noun) → a state of equal bars, equilibrium.',
      zh: 'bal-（源自 bar，经拉丁语 bilanx，两个盘/杆）+ -ance（名词后缀）→ 两杆平衡的状态。',
    },
    relatedWords: ['imbalanced', 'counterbalance', 'unbalanced'],
  },
  {
    slug: 'banquet',
    lemma: 'banquet',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈbæŋ.kwɪt/' },
      us: { ipa: '/ˈbæŋ.kwɪt/' },
    },
    definition: {
      en: 'An elaborate and formal meal for many people.',
      zh: '宴会；盛宴',
    },
    examples: [
      {
        en: ['A grand banquet was held to celebrate the anniversary.'],
        zh: ['举办了一场盛大的宴会来庆祝周年纪念。'],
      },
    ],
    rootBreakdown: [
      { surface: 'banqu', type: 'root', rootSlug: 'bar' },
      { surface: 'et', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From banc/bar ("bench, table") + -et (diminutive) → originally a small bench gathering, now a feast.',
      zh: '源自 banc/bar（长凳、桌子）+ -et（小词后缀）→ 原指小型聚餐，后演变为宴会。',
    },
    relatedWords: ['bank', 'barrier', 'bar'],
  },
  {
    slug: 'bank',
    lemma: 'bank',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/bæŋk/' },
      us: { ipa: '/bæŋk/' },
    },
    definition: {
      en: 'A financial institution; the land alongside a river.',
      zh: '银行；河岸',
    },
    examples: [
      {
        en: ['She went to the bank to open a savings account.'],
        zh: ['她去银行开了一个储蓄账户。'],
      },
    ],
    rootBreakdown: [{ surface: 'bank', type: 'root', rootSlug: 'bar' }],
    morphologyNote: {
      en: 'From banc/bar ("bench, counter") → the money-changer\'s bench, hence a bank.',
      zh: '源自 banc/bar（长凳、柜台）→ 兑换商的柜台，后引申为银行。',
    },
    relatedWords: ['banker', 'banking', 'banquet'],
  },
  {
    slug: 'barbaric',
    lemma: 'barbaric',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/bɑːˈbær.ɪk/' },
      us: { ipa: '/bɑːrˈber.ɪk/' },
    },
    definition: {
      en: 'Savagely cruel; exceedingly brutal or primitive.',
      zh: '野蛮的；残暴的',
    },
    examples: [
      {
        en: ['The barbaric treatment of prisoners shocked the international community.'],
        zh: ['对囚犯的野蛮待遇震惊了国际社会。'],
      },
    ],
    rootBreakdown: [
      { surface: 'bar', type: 'root', rootSlug: 'bar' },
      { surface: 'bar', type: 'root', rootSlug: 'bar' },
      { surface: 'ic', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'bar-bar (onomatopoeia for foreign speech, "bar-bar") + -ic (adjective) → sounding foreign, hence uncivilized.',
      zh: 'bar-bar（模拟外族人说话的拟声词）+ -ic（形容词后缀）→ 听起来像外族人的，即野蛮的。',
    },
    relatedWords: ['barbarian', 'barbarous', 'barbarism'],
  },
  {
    slug: 'contraband',
    lemma: 'contraband',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈkɒn.trə.bænd/' },
      us: { ipa: '/ˈkɑːn.trə.bænd/' },
    },
    definition: {
      en: 'Goods that have been imported or exported illegally.',
      zh: '走私品；违禁品',
    },
    examples: [
      {
        en: ['Customs officials seized a large shipment of contraband at the border.'],
        zh: ['海关官员在边境查获了一大批走私品。'],
      },
    ],
    rootBreakdown: [
      { surface: 'contra', type: 'prefix' },
      { surface: 'ban', type: 'root', rootSlug: 'bar' },
      { surface: 'd', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'contra- ("against") + ban (from bar, "ban, prohibition") → goods against the ban, smuggled items.',
      zh: 'contra-（违反）+ ban（源自 bar，禁令）→ 违反禁令的货物，即走私品。',
    },
    relatedWords: ['banned', 'banish', 'barrier'],
  },
];
