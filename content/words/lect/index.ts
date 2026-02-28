import type { WordEntry } from '@/types/content';

export const LECT_WORDS: WordEntry[] = [
  {
    slug: 'elect',
    lemma: 'elect',
    partOfSpeech: ['vt.', 'adj.'],
    pronunciation: {
      uk: { ipa: '/ɪˈlekt/' },
      us: { ipa: '/ɪˈlekt/' },
    },
    definition: {
      en: 'To choose someone for a position by voting.',
      zh: '选举；当选的',
    },
    examples: [
      {
        en: ['The committee will elect a new chairperson next month.'],
        zh: ['委员会下个月将选举一位新主席。'],
      },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'lect', type: 'root', rootSlug: 'lect' },
    ],
    morphologyNote: {
      en: 'e- ("out") + lect ("choose") → to choose out, to select by vote.',
      zh: 'e-（出）+ lect（选择）→ 选出，即选举。',
    },
    relatedWords: ['election', 'electoral', 'elective'],
  },
  {
    slug: 'collect',
    lemma: 'collect',
    partOfSpeech: ['vt.'],
    pronunciation: {
      uk: { ipa: '/kəˈlekt/' },
      us: { ipa: '/kəˈlekt/' },
    },
    definition: {
      en: 'To bring or gather things together; to accumulate.',
      zh: '收集；聚集；募捐',
    },
    examples: [
      {
        en: ['She loves to collect stamps from around the world.'],
        zh: ['她喜欢收集世界各地的邮票。'],
      },
    ],
    rootBreakdown: [
      { surface: 'col', type: 'prefix' },
      { surface: 'lect', type: 'root', rootSlug: 'lect' },
    ],
    morphologyNote: {
      en: 'col- (variant of con-, "together") + lect ("gather") → to gather together.',
      zh: 'col-（con- 的变体，一起）+ lect（收集）→ 聚集到一起，即收集。',
    },
    relatedWords: ['collection', 'collective', 'recollect'],
  },
  {
    slug: 'select',
    lemma: 'select',
    partOfSpeech: ['vt.', 'adj.'],
    pronunciation: {
      uk: { ipa: '/sɪˈlekt/' },
      us: { ipa: '/sɪˈlekt/' },
    },
    definition: {
      en: 'To carefully choose as being the best or most suitable.',
      zh: '挑选；选拔；精选的',
    },
    examples: [
      {
        en: ['Please select the option that best describes your situation.'],
        zh: ['请选择最能描述你情况的选项。'],
      },
    ],
    rootBreakdown: [
      { surface: 'se', type: 'prefix' },
      { surface: 'lect', type: 'root', rootSlug: 'lect' },
    ],
    morphologyNote: {
      en: 'se- ("apart") + lect ("choose") → to choose apart from others, to pick out.',
      zh: 'se-（分离）+ lect（选择）→ 从中挑选出，即精选。',
    },
    relatedWords: ['selection', 'selective', 'selectivity'],
  },
  {
    slug: 'intellect',
    lemma: 'intellect',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈɪn.tə.lekt/' },
      us: { ipa: '/ˈɪn.t̬ə.lekt/' },
    },
    definition: {
      en: 'The faculty of reasoning and understanding; mental ability.',
      zh: '智力；理解力；才智',
    },
    examples: [
      {
        en: ['Einstein was celebrated for his extraordinary intellect.'],
        zh: ['爱因斯坦因其非凡的智力而闻名。'],
      },
    ],
    rootBreakdown: [
      { surface: 'intel', type: 'prefix' },
      { surface: 'lect', type: 'root', rootSlug: 'lect' },
    ],
    morphologyNote: {
      en: 'intel- (variant of inter-, "between") + lect ("choose, read") → to choose/read between, to discern.',
      zh: 'intel-（inter- 的变体，之间）+ lect（选择、阅读）→ 在其中辨别选择，即智力。',
    },
    relatedWords: ['intellectual', 'intelligent', 'intelligence'],
  },
  {
    slug: 'intelligent',
    lemma: 'intelligent',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ɪnˈtel.ɪ.dʒənt/' },
      us: { ipa: '/ɪnˈtel.ɪ.dʒənt/' },
    },
    definition: {
      en: 'Having or showing intelligence; able to learn and understand easily.',
      zh: '聪明的；有才智的',
    },
    examples: [
      {
        en: ['Dolphins are among the most intelligent animals on Earth.'],
        zh: ['海豚是地球上最聪明的动物之一。'],
      },
    ],
    rootBreakdown: [
      { surface: 'intel', type: 'prefix' },
      { surface: 'lig', type: 'root', rootSlug: 'lect' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'intel- ("between") + lig (variant of lect, "choose") + -ent (adj.) → able to choose between, hence smart.',
      zh: 'intel-（之间）+ lig（lect 的变体，选择）+ -ent（形容词后缀）→ 能在其中辨别的，即聪明的。',
    },
    relatedWords: ['intelligence', 'intellect', 'intellectual'],
  },
  {
    slug: 'neglect',
    lemma: 'neglect',
    partOfSpeech: ['vt.', 'n.'],
    pronunciation: {
      uk: { ipa: '/nɪˈɡlekt/' },
      us: { ipa: '/nɪˈɡlekt/' },
    },
    definition: {
      en: 'To fail to care for properly; to pay insufficient attention to.',
      zh: '忽视；疏忽；忽略',
    },
    examples: [
      {
        en: ["Parents should never neglect their children's education."],
        zh: ['父母永远不应该忽视孩子的教育。'],
      },
    ],
    rootBreakdown: [
      { surface: 'neg', type: 'prefix' },
      { surface: 'lect', type: 'root', rootSlug: 'lect' },
    ],
    morphologyNote: {
      en: 'neg- ("not") + lect ("choose, pick up") → not to pick up, to leave unattended.',
      zh: 'neg-（不）+ lect（选择、拿取）→ 不去拿取，即忽视。',
    },
    relatedWords: ['neglectful', 'negligence', 'negligible'],
  },
  {
    slug: 'elegant',
    lemma: 'elegant',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈel.ɪ.ɡənt/' },
      us: { ipa: '/ˈel.ɪ.ɡənt/' },
    },
    definition: {
      en: 'Graceful and stylish in appearance or manner.',
      zh: '优雅的；高雅的；精美的',
    },
    examples: [
      {
        en: ['She wore an elegant black dress to the gala.'],
        zh: ['她穿了一件优雅的黑色礼服参加晚会。'],
      },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'leg', type: 'root', rootSlug: 'lect' },
      { surface: 'ant', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'e- ("out") + leg (variant of lect, "choose") + -ant (adj.) → chosen out with taste, hence refined.',
      zh: 'e-（出）+ leg（lect 的变体，选择）+ -ant（形容词后缀）→ 精心挑选出的，即优雅的。',
    },
    relatedWords: ['elegance', 'elegantly', 'inelegant'],
  },
  {
    slug: 'delegate',
    lemma: 'delegate',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: {
      uk: { ipa: '/ˈdel.ɪ.ɡeɪt/' },
      us: { ipa: '/ˈdel.ɪ.ɡeɪt/' },
    },
    definition: {
      en: 'A person sent to represent others; to entrust a task to another person.',
      zh: '代表；委派；授权',
    },
    examples: [
      {
        en: ['The manager decided to delegate the task to her assistant.'],
        zh: ['经理决定把任务委派给她的助手。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'leg', type: 'root', rootSlug: 'lect' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'de- ("away, from") + leg (variant of lect, "choose, send") + -ate (verb/noun) → to send on behalf of, to assign.',
      zh: 'de-（从）+ leg（lect 的变体，选择、派遣）+ -ate（动词/名词后缀）→ 代为派遣，即委托。',
    },
    relatedWords: ['delegation', 'delegator'],
  },
  {
    slug: 'legal',
    lemma: 'legal',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈliː.ɡəl/' },
      us: { ipa: '/ˈliː.ɡəl/' },
    },
    definition: {
      en: 'Relating to the law; permitted by law.',
      zh: '法律的；合法的',
    },
    examples: [
      {
        en: ['You should seek legal advice before signing the contract.'],
        zh: ['签合同前你应该寻求法律建议。'],
      },
    ],
    rootBreakdown: [
      { surface: 'leg', type: 'root', rootSlug: 'lect' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'leg (variant of lect, "law, read") + -al (adj.) → pertaining to law.',
      zh: 'leg（lect 的变体，法律、读）+ -al（形容词后缀）→ 与法律相关的。',
    },
    relatedWords: ['legally', 'legalize', 'illegal'],
  },
  {
    slug: 'legislate',
    lemma: 'legislate',
    partOfSpeech: ['vt.', 'vi.'],
    pronunciation: {
      uk: { ipa: '/ˈledʒ.ɪ.sleɪt/' },
      us: { ipa: '/ˈledʒ.ɪ.sleɪt/' },
    },
    definition: {
      en: 'To make or enact laws.',
      zh: '立法；制定法律',
    },
    examples: [
      {
        en: ['Congress voted to legislate stricter environmental standards.'],
        zh: ['国会投票通过了更严格的环保标准立法。'],
      },
    ],
    rootBreakdown: [
      { surface: 'leg', type: 'root', rootSlug: 'lect' },
      { surface: 'is', type: 'connector' },
      { surface: 'late', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'leg ("law") + -is- (connector) + -late ("carry, bring") → to bring/carry law, to enact.',
      zh: 'leg（法律）+ -is-（连接成分）+ -late（带来）→ 带来法律，即立法。',
    },
    relatedWords: ['legislation', 'legislator', 'legislature'],
  },
  {
    slug: 'legitimate',
    lemma: 'legitimate',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/lɪˈdʒɪt.ɪ.mət/' },
      us: { ipa: '/lɪˈdʒɪt.ɪ.mət/' },
    },
    definition: {
      en: 'Conforming to the law or rules; justifiable.',
      zh: '合法的；正当的；合理的',
    },
    examples: [
      {
        en: ['Is this a legitimate business or a front for illegal activity?'],
        zh: ['这是合法企业还是非法活动的幌子？'],
      },
    ],
    rootBreakdown: [
      { surface: 'leg', type: 'root', rootSlug: 'lect' },
      { surface: 'itim', type: 'other' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'leg ("law") + -itim- + -ate (adj.) → made lawful, hence rightful.',
      zh: 'leg（法律）+ -itim- + -ate（形容词后缀）→ 使之合法的，即正当的。',
    },
    relatedWords: ['legitimately', 'legitimize', 'illegitimate'],
  },
  {
    slug: 'lecture',
    lemma: 'lecture',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈlek.tʃər/' },
      us: { ipa: '/ˈlek.tʃɚ/' },
    },
    definition: {
      en: 'A talk given to an audience, especially as a form of teaching.',
      zh: '讲座；演讲；教训',
    },
    examples: [
      {
        en: ['The professor delivered an inspiring lecture on quantum physics.'],
        zh: ['教授做了一场关于量子物理的精彩演讲。'],
      },
    ],
    rootBreakdown: [
      { surface: 'lect', type: 'root', rootSlug: 'lect' },
      { surface: 'ure', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'lect ("read") + -ure (noun) → the act of reading aloud, a formal discourse.',
      zh: 'lect（读）+ -ure（名词后缀）→ 朗读的行为，即演讲。',
    },
    relatedWords: ['lecturer', 'lectureship'],
  },
  {
    slug: 'privilege',
    lemma: 'privilege',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈprɪv.əl.ɪdʒ/' },
      us: { ipa: '/ˈprɪv.əl.ɪdʒ/' },
    },
    definition: {
      en: 'A special right, advantage, or immunity granted to a particular person or group.',
      zh: '特权；荣幸；优惠',
    },
    examples: [
      {
        en: ['Education should be a right, not a privilege.'],
        zh: ['教育应该是一种权利，而不是特权。'],
      },
    ],
    rootBreakdown: [
      { surface: 'priv', type: 'prefix' },
      { surface: 'i', type: 'connector' },
      { surface: 'leg', type: 'root', rootSlug: 'lect' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'priv- ("private") + i + leg ("law") → a law for a private individual, hence a special right.',
      zh: 'priv-（私人）+ i + leg（法律）→ 为个人制定的法律，即特权。',
    },
    relatedWords: ['privileged', 'legal', 'legitimate'],
  },
];
