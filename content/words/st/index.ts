import type { WordEntry } from '@/types/content';

export const ST_WORDS: WordEntry[] = [
  {
    slug: 'state',
    lemma: 'state',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/steɪt/' },
      us: { ipa: '/steɪt/' },
    },
    definition: {
      en: 'The condition of something; a nation or territory; to express in words.',
      zh: '状态；国家；州；陈述',
    },
    examples: [
      {
        en: ['The building is in a poor state of repair.'],
        zh: ['这座建筑的维修状况很差。'],
      },
    ],
    rootBreakdown: [
      { surface: 'st', type: 'root', rootSlug: 'st' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'st ("stand") + -ate → that which stands, i.e. a condition or political entity.',
      zh: 'st（立、站）+ -ate → 站立之物，即状态或政治实体。',
    },
    relatedWords: ['statement', 'station', 'status'],
  },
  {
    slug: 'station',
    lemma: 'station',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈsteɪ.ʃən/' },
      us: { ipa: '/ˈsteɪ.ʃən/' },
    },
    definition: {
      en: 'A place where trains or buses stop; a place for a specified activity.',
      zh: '车站；站点；局',
    },
    examples: [
      {
        en: ['We arrived at the train station just in time.'],
        zh: ['我们及时到达了火车站。'],
      },
    ],
    rootBreakdown: [
      { surface: 'st', type: 'root', rootSlug: 'st' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'st ("stand") + -ation (noun) → a place where one stands or stops.',
      zh: 'st（立、站）+ -ation（名词后缀）→ 站立/停留的地方。',
    },
    relatedWords: ['stationary', 'state', 'status'],
  },
  {
    slug: 'status',
    lemma: 'status',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈsteɪ.təs/' },
      us: { ipa: '/ˈsteɪ.t̬əs/' },
    },
    definition: {
      en: 'The relative social, professional, or legal position of someone.',
      zh: '地位；身份；状态',
    },
    examples: [
      {
        en: ['She achieved celebrity status through her acting career.'],
        zh: ['她通过演艺事业获得了名人地位。'],
      },
    ],
    rootBreakdown: [
      { surface: 'st', type: 'root', rootSlug: 'st' },
      { surface: 'atus', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'st ("stand") + -atus → the standing or position one holds.',
      zh: 'st（立、站）+ -atus → 所处的位置，即地位、状态。',
    },
    relatedWords: ['state', 'statue', 'static'],
  },
  {
    slug: 'stable',
    lemma: 'stable',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: {
      uk: { ipa: '/ˈsteɪ.bəl/' },
      us: { ipa: '/ˈsteɪ.bəl/' },
    },
    definition: {
      en: 'Not likely to change or fail; firmly established.',
      zh: '稳定的；稳固的；马厩',
    },
    examples: [
      {
        en: ['The economy has remained stable despite global uncertainty.'],
        zh: ['尽管全球形势不确定，经济仍保持稳定。'],
      },
    ],
    rootBreakdown: [
      { surface: 'st', type: 'root', rootSlug: 'st' },
      { surface: 'able', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'st ("stand") + -able ("able to") → able to stand firm.',
      zh: 'st（立、站）+ -able（能…的）→ 能站稳的，即稳定的。',
    },
    relatedWords: ['stability', 'unstable', 'establish'],
  },
  {
    slug: 'establish',
    lemma: 'establish',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ɪˈstæb.lɪʃ/' },
      us: { ipa: '/ɪˈstæb.lɪʃ/' },
    },
    definition: {
      en: 'To set up on a firm or permanent basis; to found.',
      zh: '建立；设立；确立',
    },
    examples: [
      {
        en: ['The university was established in 1850.'],
        zh: ['这所大学成立于1850年。'],
      },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'stabl', type: 'root', rootSlug: 'st' },
      { surface: 'ish', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'e- (intensive) + stabl (from st, "stand") + -ish (verb) → to make stand firmly.',
      zh: 'e-（加强）+ stabl（源自 st，立）+ -ish（动词后缀）→ 使牢固地站立，即建立。',
    },
    relatedWords: ['establishment', 'stable', 'state'],
  },
  {
    slug: 'constant',
    lemma: 'constant',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: {
      uk: { ipa: '/ˈkɒn.stənt/' },
      us: { ipa: '/ˈkɑːn.stənt/' },
    },
    definition: {
      en: 'Occurring continuously; unchanged over time.',
      zh: '持续不断的；恒定的；常数',
    },
    examples: [
      {
        en: ['The noise was a constant distraction during the meeting.'],
        zh: ['噪音在会议期间一直是一个干扰因素。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'st', type: 'root', rootSlug: 'st' },
      { surface: 'ant', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'con- ("together, firmly") + st ("stand") + -ant (adj.) → standing firm together, i.e. unchanging.',
      zh: 'con-（一起、牢固地）+ st（立）+ -ant（形容词后缀）→ 牢固地站立，即恒定的。',
    },
    relatedWords: ['constantly', 'constancy', 'inconstant'],
  },
  {
    slug: 'instant',
    lemma: 'instant',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: {
      uk: { ipa: '/ˈɪn.stənt/' },
      us: { ipa: '/ˈɪn.stənt/' },
    },
    definition: {
      en: 'A very short period of time; happening immediately.',
      zh: '瞬间；即刻的；速溶的',
    },
    examples: [
      {
        en: ['The message was delivered in an instant.'],
        zh: ['信息瞬间就送达了。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'st', type: 'root', rootSlug: 'st' },
      { surface: 'ant', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("upon") + st ("stand") + -ant → standing upon the moment, i.e. immediate.',
      zh: 'in-（在…上）+ st（立）+ -ant → 站在当下，即即刻的。',
    },
    relatedWords: ['instantly', 'instantaneous', 'instance'],
  },
  {
    slug: 'substance',
    lemma: 'substance',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈsʌb.stəns/' },
      us: { ipa: '/ˈsʌb.stəns/' },
    },
    definition: {
      en: 'A particular kind of matter; the real or essential meaning.',
      zh: '物质；实质；内容',
    },
    examples: [
      {
        en: ['The substance was found to be highly toxic.'],
        zh: ['该物质被发现具有高毒性。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sub', type: 'prefix' },
      { surface: 'st', type: 'root', rootSlug: 'st' },
      { surface: 'ance', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sub- ("under") + st ("stand") + -ance (noun) → that which stands under, i.e. the underlying matter.',
      zh: 'sub-（在下面）+ st（立）+ -ance（名词后缀）→ 站在下面的东西，即实质。',
    },
    relatedWords: ['substantial', 'substantiate', 'substitute'],
  },
  {
    slug: 'substitute',
    lemma: 'substitute',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈsʌb.stɪ.tjuːt/' },
      us: { ipa: '/ˈsʌb.stɪ.tuːt/' },
    },
    definition: {
      en: 'A person or thing acting in place of another; to use instead.',
      zh: '替代品；代替者；替换',
    },
    examples: [
      {
        en: ['Honey can be used as a substitute for sugar.'],
        zh: ['蜂蜜可以用作糖的替代品。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sub', type: 'prefix' },
      { surface: 'stit', type: 'root', rootSlug: 'st' },
      { surface: 'ute', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sub- ("under, in place of") + stit (from st, "stand") + -ute → to stand in place of another.',
      zh: 'sub-（在下面、代替）+ stit（源自 st，立）+ -ute → 站在另一者的位置上，即替代。',
    },
    relatedWords: ['substitution', 'constitute', 'institute'],
  },
  {
    slug: 'constitute',
    lemma: 'constitute',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˈkɒn.stɪ.tjuːt/' },
      us: { ipa: '/ˈkɑːn.stɪ.tuːt/' },
    },
    definition: {
      en: 'To be a part of a whole; to establish or set up formally.',
      zh: '构成；组成；设立',
    },
    examples: [
      {
        en: ['Women constitute over half of the workforce.'],
        zh: ['女性占劳动力的一半以上。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'stit', type: 'root', rootSlug: 'st' },
      { surface: 'ute', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'con- ("together") + stit (from st, "stand") + -ute → to stand together as a whole.',
      zh: 'con-（一起）+ stit（源自 st，立）+ -ute → 一起站立成为整体，即构成。',
    },
    relatedWords: ['constitution', 'constitutional', 'institute'],
  },
  {
    slug: 'institute',
    lemma: 'institute',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈɪn.stɪ.tjuːt/' },
      us: { ipa: '/ˈɪn.stɪ.tuːt/' },
    },
    definition: {
      en: 'An organization for a special purpose; to set up or establish.',
      zh: '学院；研究所；设立',
    },
    examples: [
      {
        en: ['The institute conducts research on renewable energy.'],
        zh: ['该研究所进行可再生能源研究。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'stit', type: 'root', rootSlug: 'st' },
      { surface: 'ute', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("in, upon") + stit (from st, "stand") + -ute → to set up standing.',
      zh: 'in-（在…上）+ stit（源自 st，立）+ -ute → 使之站立起来，即创立。',
    },
    relatedWords: ['institution', 'institutional', 'constitute'],
  },
  {
    slug: 'exist',
    lemma: 'exist',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ɪɡˈzɪst/' },
      us: { ipa: '/ɪɡˈzɪst/' },
    },
    definition: {
      en: 'To have objective reality or being; to live.',
      zh: '存在；生存',
    },
    examples: [
      {
        en: ['Do aliens exist somewhere in the universe?'],
        zh: ['宇宙中某处存在外星人吗？'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'ist', type: 'root', rootSlug: 'st' },
    ],
    morphologyNote: {
      en: 'ex- ("out, forth") + ist (from st, "stand") → to stand forth, i.e. to be present.',
      zh: 'ex-（向外）+ ist（源自 st，立）→ 向外站出来，即存在。',
    },
    relatedWords: ['existence', 'existent', 'coexist'],
  },
  {
    slug: 'resist',
    lemma: 'resist',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/rɪˈzɪst/' },
      us: { ipa: '/rɪˈzɪst/' },
    },
    definition: {
      en: 'To withstand the action or effect of; to refuse to accept.',
      zh: '抵抗；抵制；耐受',
    },
    examples: [
      {
        en: ['She could not resist the temptation to eat the cake.'],
        zh: ['她无法抵挡吃蛋糕的诱惑。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'sist', type: 'root', rootSlug: 'st' },
    ],
    morphologyNote: {
      en: 're- ("back, against") + sist (from st, "stand") → to stand against.',
      zh: 're-（向后、反对）+ sist（源自 st，立）→ 站起来反对，即抵抗。',
    },
    relatedWords: ['resistance', 'resistant', 'irresistible'],
  },
  {
    slug: 'assist',
    lemma: 'assist',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/əˈsɪst/' },
      us: { ipa: '/əˈsɪst/' },
    },
    definition: {
      en: 'To help someone do something.',
      zh: '帮助；协助',
    },
    examples: [
      {
        en: ['A tutor assisted her with the difficult math problems.'],
        zh: ['一位家教帮助她解决了难题。'],
      },
    ],
    rootBreakdown: [
      { surface: 'as', type: 'prefix' },
      { surface: 'sist', type: 'root', rootSlug: 'st' },
    ],
    morphologyNote: {
      en: 'as- ("to, beside") + sist (from st, "stand") → to stand beside someone, i.e. to help.',
      zh: 'as-（在旁边）+ sist（源自 st，立）→ 站在某人身边，即帮助。',
    },
    relatedWords: ['assistant', 'assistance', 'consist'],
  },
  {
    slug: 'consistent',
    lemma: 'consistent',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/kənˈsɪs.tənt/' },
      us: { ipa: '/kənˈsɪs.tənt/' },
    },
    definition: {
      en: 'Acting or done in the same way over time; compatible.',
      zh: '一致的；始终如一的',
    },
    examples: [
      {
        en: ['Consistent effort leads to long-term success.'],
        zh: ['持之以恒的努力会带来长期的成功。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'sist', type: 'root', rootSlug: 'st' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'con- ("together") + sist ("stand") + -ent (adj.) → standing together, i.e. holding together over time.',
      zh: 'con-（一起）+ sist（立）+ -ent（形容词后缀）→ 一同站立，即始终一致的。',
    },
    relatedWords: ['consistency', 'inconsistent', 'consist'],
  },
];
