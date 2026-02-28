import type { WordEntry } from '@/types/content';

export const MOV_WORDS: WordEntry[] = [
  {
    slug: 'move',
    lemma: 'move',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: { uk: { ipa: '/muːv/' }, us: { ipa: '/muːv/' } },
    definition: {
      en: 'To change position or place; an act of changing position.',
      zh: '移动；搬家；举措',
    },
    examples: [
      { en: ['We decided to move to a bigger apartment.'], zh: ['我们决定搬到一个更大的公寓。'] },
    ],
    rootBreakdown: [
      { surface: 'mov', type: 'root', rootSlug: 'mov' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mov ("move") + -e → to change place or position.',
      zh: 'mov（移动）+ -e → 改变位置。',
    },
    relatedWords: ['movement', 'remove', 'motive'],
  },
  {
    slug: 'movement',
    lemma: 'movement',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈmuːv.mənt/' }, us: { ipa: '/ˈmuːv.mənt/' } },
    definition: {
      en: 'The act of moving; a group of people working together to advance a cause.',
      zh: '运动；动作；乐章',
    },
    examples: [
      {
        en: ['The civil rights movement changed the course of history.'],
        zh: ['民权运动改变了历史的进程。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mov', type: 'root', rootSlug: 'mov' },
      { surface: 'e', type: 'connector' },
      { surface: 'ment', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mov ("move") + -ement (noun) → the act or process of moving.',
      zh: 'mov（移动）+ -ement（名词后缀）→ 移动的行为或过程。',
    },
    relatedWords: ['move', 'mover'],
  },
  {
    slug: 'remove',
    lemma: 'remove',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/rɪˈmuːv/' }, us: { ipa: '/rɪˈmuːv/' } },
    definition: {
      en: 'To take away from a position or place; to eliminate.',
      zh: '移除；去掉；免职',
    },
    examples: [
      { en: ['Please remove your shoes before entering the house.'], zh: ['请在进屋前脱掉鞋子。'] },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'mov', type: 'root', rootSlug: 'mov' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("back, away") + mov ("move") + -e → to move back or away, to take off.',
      zh: 're-（回、离开）+ mov（移动）+ -e → 移走，即移除。',
    },
    relatedWords: ['removal', 'removable'],
  },
  {
    slug: 'movie',
    lemma: 'movie',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈmuː.vi/' }, us: { ipa: '/ˈmuː.vi/' } },
    definition: { en: 'A series of moving images shown on a screen; a film.', zh: '电影' },
    examples: [
      {
        en: ['We watched a great movie at the cinema last night.'],
        zh: ['我们昨晚在电影院看了一部好电影。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mov', type: 'root', rootSlug: 'mov' },
      { surface: 'ie', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mov ("move") + -ie (diminutive) → moving pictures, a film.',
      zh: 'mov（移动）+ -ie（小词后缀）→ 活动的画面，即电影。',
    },
    relatedWords: ['move', 'movement'],
  },
  {
    slug: 'motive',
    lemma: 'motive',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: { uk: { ipa: '/ˈməʊ.tɪv/' }, us: { ipa: '/ˈmoʊ.t̬ɪv/' } },
    definition: { en: 'A reason for doing something; causing motion.', zh: '动机；目的；推动的' },
    examples: [
      {
        en: ['The detective tried to determine the motive for the crime.'],
        zh: ['侦探试图确定犯罪动机。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mot', type: 'root', rootSlug: 'mov' },
      { surface: 'ive', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mot (variant of mov, "move") + -ive (adj./noun) → that which moves one to act.',
      zh: 'mot（mov 的变体，移动）+ -ive（后缀）→ 推动人行动的东西，即动机。',
    },
    relatedWords: ['motivate', 'motivation', 'motor'],
  },
  {
    slug: 'motivate',
    lemma: 'motivate',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ˈməʊ.tɪ.veɪt/' }, us: { ipa: '/ˈmoʊ.t̬ɪ.veɪt/' } },
    definition: {
      en: 'To provide with a reason or incentive to act; to inspire.',
      zh: '激励；激发',
    },
    examples: [
      {
        en: ['A good leader knows how to motivate the team.'],
        zh: ['一个好的领导者知道如何激励团队。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mot', type: 'root', rootSlug: 'mov' },
      { surface: 'iv', type: 'other' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mot ("move") + -ivate (verb) → to cause to move, to inspire action.',
      zh: 'mot（移动）+ -ivate（动词后缀）→ 使人行动，即激励。',
    },
    relatedWords: ['motivation', 'motive'],
  },
  {
    slug: 'promote',
    lemma: 'promote',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/prəˈməʊt/' }, us: { ipa: '/prəˈmoʊt/' } },
    definition: {
      en: 'To advance in rank; to support or encourage; to publicize.',
      zh: '促进；推广；晋升',
    },
    examples: [
      {
        en: ['The company launched a campaign to promote its new product.'],
        zh: ['公司发起了一场推广新产品的活动。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pro', type: 'prefix' },
      { surface: 'mot', type: 'root', rootSlug: 'mov' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pro- ("forward") + mot ("move") + -e → to move forward, to advance.',
      zh: 'pro-（向前）+ mot（移动）+ -e → 向前推动，即促进。',
    },
    relatedWords: ['promotion', 'promoter', 'demote'],
  },
  {
    slug: 'demote',
    lemma: 'demote',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/dɪˈməʊt/' }, us: { ipa: '/dɪˈmoʊt/' } },
    definition: { en: 'To lower in rank or position.', zh: '降级；降职' },
    examples: [
      {
        en: ['The officer was demoted for his poor performance.'],
        zh: ['这名军官因表现不佳而被降职。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'mot', type: 'root', rootSlug: 'mov' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'de- ("down") + mot ("move") + -e → to move down in rank.',
      zh: 'de-（向下）+ mot（移动）+ -e → 向下移动，即降级。',
    },
    relatedWords: ['demotion', 'promote'],
  },
  {
    slug: 'emotion',
    lemma: 'emotion',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ɪˈməʊ.ʃən/' }, us: { ipa: '/ɪˈmoʊ.ʃən/' } },
    definition: { en: 'A strong feeling such as love, fear, or anger.', zh: '情感；情绪' },
    examples: [
      {
        en: ['Music has the power to stir deep emotions in listeners.'],
        zh: ['音乐有激发听众深层情感的力量。'],
      },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'mot', type: 'root', rootSlug: 'mov' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'e- ("out") + mot ("move") + -ion (noun) → a moving out of feelings, an agitation of mind.',
      zh: 'e-（出）+ mot（移动）+ -ion（名词后缀）→ 心理上的激动，即情感。',
    },
    relatedWords: ['emotional', 'emotive'],
  },
  {
    slug: 'remote',
    lemma: 'remote',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/rɪˈməʊt/' }, us: { ipa: '/rɪˈmoʊt/' } },
    definition: {
      en: 'Far away in distance or time; having very little connection.',
      zh: '遥远的；偏僻的；微小的',
    },
    examples: [
      {
        en: ['They lived in a remote village with no internet access.'],
        zh: ['他们住在一个没有互联网的偏僻村庄。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'mot', type: 'root', rootSlug: 'mov' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("back") + mot ("move") + -e → moved back, far away.',
      zh: 're-（回）+ mot（移动）+ -e → 移开很远的，即遥远的。',
    },
    relatedWords: ['remotely', 'remoteness'],
  },
  {
    slug: 'motor',
    lemma: 'motor',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: { uk: { ipa: '/ˈməʊ.tər/' }, us: { ipa: '/ˈmoʊ.t̬ɚ/' } },
    definition: {
      en: 'A machine that provides power for movement; relating to movement.',
      zh: '发动机；马达；运动的',
    },
    examples: [
      {
        en: ['The electric motor runs quietly and efficiently.'],
        zh: ['电动马达运行安静且高效。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mot', type: 'root', rootSlug: 'mov' },
      { surface: 'or', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mot ("move") + -or (agent) → that which causes movement.',
      zh: 'mot（移动）+ -or（施动者后缀）→ 引起运动的东西，即发动机。',
    },
    relatedWords: ['motorist', 'motorcycle', 'automotive'],
  },
  {
    slug: 'locomotive',
    lemma: 'locomotive',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: { uk: { ipa: '/ˌləʊ.kəˈməʊ.tɪv/' }, us: { ipa: '/ˌloʊ.kəˈmoʊ.t̬ɪv/' } },
    definition: {
      en: 'A powered railway vehicle used for pulling trains; relating to movement.',
      zh: '火车头；机车；运动的',
    },
    examples: [
      {
        en: ['The old steam locomotive is now displayed in the railway museum.'],
        zh: ['那辆老式蒸汽机车现在陈列在铁路博物馆里。'],
      },
    ],
    rootBreakdown: [
      { surface: 'loco', type: 'root' },
      { surface: 'mot', type: 'root', rootSlug: 'mov' },
      { surface: 'ive', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'loco ("from a place") + mot ("move") + -ive (adj.) → able to move from place to place.',
      zh: 'loco（从某处）+ mot（移动）+ -ive（形容词后缀）→ 能从一个地方移到另一个地方的。',
    },
    relatedWords: ['locomotion', 'motor', 'move'],
  },
  {
    slug: 'commotion',
    lemma: 'commotion',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/kəˈməʊ.ʃən/' }, us: { ipa: '/kəˈmoʊ.ʃən/' } },
    definition: { en: 'A state of confused and noisy disturbance.', zh: '骚动；喧闹' },
    examples: [
      {
        en: ['The sudden fire alarm caused a commotion in the building.'],
        zh: ['突然响起的火警在大楼里引起了一阵骚动。'],
      },
    ],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'mot', type: 'root', rootSlug: 'mov' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'com- ("together") + mot ("move") + -ion (noun) → moving together, a tumultuous disturbance.',
      zh: 'com-（一起）+ mot（移动）+ -ion（名词后缀）→ 一起骚动，即喧闹。',
    },
    relatedWords: ['motion', 'emotion', 'promote'],
  },
  {
    slug: 'mobilize',
    lemma: 'mobilize',
    partOfSpeech: ['vt.', 'vi.'],
    pronunciation: { uk: { ipa: '/ˈməʊ.bɪ.laɪz/' }, us: { ipa: '/ˈmoʊ.bɪ.laɪz/' } },
    definition: {
      en: 'To organize and prepare for action or use; to assemble troops for war.',
      zh: '动员；调动',
    },
    examples: [
      {
        en: ['The government mobilized resources to help the flood victims.'],
        zh: ['政府动员资源帮助洪水受灾者。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mob', type: 'root', rootSlug: 'mov' },
      { surface: 'il', type: 'other' },
      { surface: 'ize', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mob (variant of mov, "move") + -ilize (verb) → to make movable, to put into action.',
      zh: 'mob（mov 的变体，移动）+ -ilize（动词后缀）→ 使可移动，即动员。',
    },
    relatedWords: ['mobilization', 'mobile', 'immobile'],
  },
];
