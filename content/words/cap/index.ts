import type { WordEntry } from '@/types/content';

export const CAP_WORDS: WordEntry[] = [
  {
    slug: 'capable',
    lemma: 'capable',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈkeɪ.pə.bəl/' },
      us: { ipa: '/ˈkeɪ.pə.bəl/' },
    },
    definition: {
      en: 'Having the ability or quality necessary to do something.',
      zh: '有能力的；能干的',
    },
    examples: [
      {
        en: ['She is a highly capable manager who handles stress well.'],
        zh: ['她是一位非常能干的经理，善于应对压力。'],
      },
    ],
    rootBreakdown: [
      { surface: 'cap', type: 'root', rootSlug: 'cap' },
      { surface: 'able', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'cap ("take, seize, hold") + -able ("able to") → able to take hold, competent.',
      zh: 'cap（抓住、容纳）+ -able（能够）→ 能够掌握的，即有能力的。',
    },
    relatedWords: ['capacity', 'incapable', 'capture'],
  },
  {
    slug: 'capacity',
    lemma: 'capacity',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/kəˈpæs.ɪ.ti/' },
      us: { ipa: '/kəˈpæs.ə.t̬i/' },
    },
    definition: {
      en: 'The maximum amount that something can contain; the ability to do something.',
      zh: '容量；能力；才能',
    },
    examples: [
      {
        en: ['The stadium has a capacity of fifty thousand people.'],
        zh: ['这座体育场可容纳五万人。'],
      },
    ],
    rootBreakdown: [
      { surface: 'cap', type: 'root', rootSlug: 'cap' },
      { surface: 'ac', type: 'connector' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'cap ("take, hold") + -ac- + -ity (noun suffix) → the ability to hold or contain.',
      zh: 'cap（抓住、容纳）+ -ac- + -ity（名词后缀）→ 容纳的能力，即容量。',
    },
    relatedWords: ['capable', 'incapacity', 'capsule'],
  },
  {
    slug: 'capture',
    lemma: 'capture',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: {
      uk: { ipa: '/ˈkæp.tʃər/' },
      us: { ipa: '/ˈkæp.tʃɚ/' },
    },
    definition: {
      en: "To take into one's possession by force; the act of capturing.",
      zh: '捕获；俘获；夺取',
    },
    examples: [
      {
        en: ['The photographer managed to capture the perfect sunset.'],
        zh: ['摄影师成功捕捉到了完美的日落。'],
      },
    ],
    rootBreakdown: [
      { surface: 'cap', type: 'root', rootSlug: 'cap' },
      { surface: 'ture', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'cap ("take, seize") + -ture (noun/verb suffix) → the act of taking or seizing.',
      zh: 'cap（抓住、夺取）+ -ture（名词/动词后缀）→ 抓住的行为，即捕获。',
    },
    relatedWords: ['captive', 'captivate', 'caption'],
  },
  {
    slug: 'captive',
    lemma: 'captive',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: {
      uk: { ipa: '/ˈkæp.tɪv/' },
      us: { ipa: '/ˈkæp.tɪv/' },
    },
    definition: {
      en: 'A person who has been taken prisoner; held in confinement.',
      zh: '俘虏；被囚禁的人',
    },
    examples: [
      {
        en: ['The captive animals were eventually released back into the wild.'],
        zh: ['被圈养的动物最终被放归野外。'],
      },
    ],
    rootBreakdown: [
      { surface: 'cap', type: 'root', rootSlug: 'cap' },
      { surface: 't', type: 'connector' },
      { surface: 'ive', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'cap ("take, seize") + -t- + -ive (adjective/noun) → one who has been taken, a prisoner.',
      zh: 'cap（抓住、夺取）+ -t- + -ive（形容词/名词后缀）→ 被抓住的人，即俘虏。',
    },
    relatedWords: ['captivate', 'capture', 'escape'],
  },
  {
    slug: 'captivate',
    lemma: 'captivate',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˈkæp.tɪ.veɪt/' },
      us: { ipa: '/ˈkæp.tɪ.veɪt/' },
    },
    definition: {
      en: 'To attract and hold the attention or interest of someone; to charm.',
      zh: '迷住；吸引；使着迷',
    },
    examples: [
      {
        en: ['The speaker captivated the audience with her personal story.'],
        zh: ['演讲者用她的个人故事吸引了听众。'],
      },
    ],
    rootBreakdown: [
      { surface: 'cap', type: 'root', rootSlug: 'cap' },
      { surface: 't', type: 'connector' },
      { surface: 'iv', type: 'suffix' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'cap ("take, seize") + -t- + -iv- + -ate (verb) → to take hold of someone\'s attention.',
      zh: 'cap（抓住）+ -t- + -iv- + -ate（动词后缀）→ 抓住某人的注意力，即迷住。',
    },
    relatedWords: ['captive', 'capture', 'caption'],
  },
  {
    slug: 'accept',
    lemma: 'accept',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/əkˈsept/' },
      us: { ipa: '/əkˈsept/' },
    },
    definition: {
      en: 'To consent to receive or undertake something.',
      zh: '接受；承认',
    },
    examples: [
      {
        en: ['She decided to accept the job offer without hesitation.'],
        zh: ['她毫不犹豫地决定接受这份工作。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ac', type: 'prefix' },
      { surface: 'cept', type: 'root', rootSlug: 'cap' },
    ],
    morphologyNote: {
      en: 'ac- (from ad-, "to") + cept (variant of cap, "take") → to take toward oneself, to accept.',
      zh: 'ac-（源自 ad-，向）+ cept（cap 的变体，拿）→ 拿向自己，即接受。',
    },
    relatedWords: ['acceptance', 'acceptable', 'exception'],
  },
  {
    slug: 'concept',
    lemma: 'concept',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈkɒn.sept/' },
      us: { ipa: '/ˈkɑːn.sept/' },
    },
    definition: {
      en: 'An abstract idea or a general notion.',
      zh: '概念；观念',
    },
    examples: [
      {
        en: ['The concept of democracy has evolved over centuries.'],
        zh: ['民主的概念经过几个世纪的演变。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'cept', type: 'root', rootSlug: 'cap' },
    ],
    morphologyNote: {
      en: 'con- ("together") + cept (variant of cap, "take") → something taken together in the mind, an idea.',
      zh: 'con-（一起）+ cept（cap 的变体，拿）→ 在心中综合起来的东西，即概念。',
    },
    relatedWords: ['conception', 'conceptual', 'conceive'],
  },
  {
    slug: 'perceive',
    lemma: 'perceive',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/pəˈsiːv/' },
      us: { ipa: '/pɚˈsiːv/' },
    },
    definition: {
      en: 'To become aware of something through the senses; to understand or interpret.',
      zh: '感知；察觉；理解',
    },
    examples: [
      {
        en: ['People perceive the world differently based on their experiences.'],
        zh: ['人们基于自身经历对世界有不同的感知。'],
      },
    ],
    rootBreakdown: [
      { surface: 'per', type: 'prefix' },
      { surface: 'ceive', type: 'root', rootSlug: 'cap' },
    ],
    morphologyNote: {
      en: 'per- ("thoroughly") + ceive (variant of cap, "take") → to take in thoroughly, to perceive.',
      zh: 'per-（彻底地）+ ceive（cap 的变体，拿）→ 彻底接收，即感知。',
    },
    relatedWords: ['perception', 'perceptive', 'conceive'],
  },
  {
    slug: 'receive',
    lemma: 'receive',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/rɪˈsiːv/' },
      us: { ipa: '/rɪˈsiːv/' },
    },
    definition: {
      en: 'To be given, presented with, or paid something.',
      zh: '收到；接收；接待',
    },
    examples: [
      {
        en: ['She was delighted to receive flowers on her birthday.'],
        zh: ['她很高兴在生日那天收到鲜花。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'ceive', type: 'root', rootSlug: 'cap' },
    ],
    morphologyNote: {
      en: 're- ("back") + ceive (variant of cap, "take") → to take back, to receive.',
      zh: 're-（回）+ ceive（cap 的变体，拿）→ 拿回来，即接收。',
    },
    relatedWords: ['reception', 'receiver', 'receipt'],
  },
  {
    slug: 'deceive',
    lemma: 'deceive',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/dɪˈsiːv/' },
      us: { ipa: '/dɪˈsiːv/' },
    },
    definition: {
      en: 'To deliberately cause someone to believe something false; to mislead.',
      zh: '欺骗；蒙蔽',
    },
    examples: [
      {
        en: ['He deceived his business partners by hiding the losses.'],
        zh: ['他隐瞒了亏损，欺骗了商业伙伴。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'ceive', type: 'root', rootSlug: 'cap' },
    ],
    morphologyNote: {
      en: 'de- ("away, from") + ceive (variant of cap, "take") → to take away from the truth, to mislead.',
      zh: 'de-（离开、偏离）+ ceive（cap 的变体，拿）→ 拿离真相，即欺骗。',
    },
    relatedWords: ['deception', 'deceptive', 'deceit'],
  },
  {
    slug: 'escape',
    lemma: 'escape',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: {
      uk: { ipa: '/ɪˈskeɪp/' },
      us: { ipa: '/ɪˈskeɪp/' },
    },
    definition: {
      en: 'To break free from confinement or control; an act of escaping.',
      zh: '逃跑；逃脱；逃避',
    },
    examples: [
      {
        en: ['The prisoners managed to escape through a tunnel.'],
        zh: ['囚犯们设法通过一条隧道逃跑了。'],
      },
    ],
    rootBreakdown: [
      { surface: 'es', type: 'prefix' },
      { surface: 'cape', type: 'root', rootSlug: 'cap' },
    ],
    morphologyNote: {
      en: 'es- (from ex-, "out of") + cape (variant of cap, "cloak/seize") → to slip out of one\'s cloak (when seized), to flee.',
      zh: 'es-（源自 ex-，从……中出来）+ cape（cap 的变体，斗篷/抓住）→ 从被抓住时的斗篷中脱出，即逃跑。',
    },
    relatedWords: ['escapee', 'escapism', 'captive'],
  },
  {
    slug: 'occupy',
    lemma: 'occupy',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˈɒk.jʊ.paɪ/' },
      us: { ipa: '/ˈɑːk.jə.paɪ/' },
    },
    definition: {
      en: "To reside or have one's place in; to fill or take up a space or time.",
      zh: '占据；居住；使忙碌',
    },
    examples: [
      {
        en: ['The company occupies the entire top floor of the building.'],
        zh: ['这家公司占据了大楼的整个顶层。'],
      },
    ],
    rootBreakdown: [
      { surface: 'oc', type: 'prefix' },
      { surface: 'cup', type: 'root', rootSlug: 'cap' },
      { surface: 'y', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'oc- (from ob-, "toward") + cup (variant of cap, "take, seize") + -y → to seize toward, to take possession of.',
      zh: 'oc-（源自 ob-，向）+ cup（cap 的变体，拿、夺取）+ -y → 向前夺取，即占据。',
    },
    relatedWords: ['occupation', 'occupant', 'preoccupy'],
  },
  {
    slug: 'anticipate',
    lemma: 'anticipate',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ænˈtɪs.ɪ.peɪt/' },
      us: { ipa: '/ænˈtɪs.ɪ.peɪt/' },
    },
    definition: {
      en: 'To expect or look forward to something; to act in advance of.',
      zh: '预期；预料；期盼',
    },
    examples: [
      {
        en: ['We anticipate strong growth in the next quarter.'],
        zh: ['我们预期下个季度会有强劲增长。'],
      },
    ],
    rootBreakdown: [
      { surface: 'anti', type: 'prefix' },
      { surface: 'cip', type: 'root', rootSlug: 'cap' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'anti- (from ante-, "before") + cip (variant of cap, "take") + -ate (verb) → to take before it happens, to foresee.',
      zh: 'anti-（源自 ante-，在……之前）+ cip（cap 的变体，拿）+ -ate（动词后缀）→ 在事情发生前拿取，即预期。',
    },
    relatedWords: ['anticipation', 'capable', 'perceive'],
  },
  {
    slug: 'capital',
    lemma: 'capital',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: {
      uk: { ipa: '/ˈkæp.ɪ.təl/' },
      us: { ipa: '/ˈkæp.ɪ.t̬əl/' },
    },
    definition: {
      en: 'The most important city of a country; wealth used to generate more wealth.',
      zh: '首都；资本；大写字母',
    },
    examples: [
      {
        en: ['The company needs more capital to expand its operations.'],
        zh: ['公司需要更多资本来扩展业务。'],
      },
    ],
    rootBreakdown: [
      { surface: 'cap', type: 'root', rootSlug: 'cap' },
      { surface: 'it', type: 'connector' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'cap ("head, chief") + -it- + -al (adjective/noun) → relating to the head, chief city or main wealth.',
      zh: 'cap（头、首要）+ -it- + -al（形容词/名词后缀）→ 与头部/首要相关的，即首都或资本。',
    },
    relatedWords: ['capitalism', 'capitalize', 'captain'],
  },
];
