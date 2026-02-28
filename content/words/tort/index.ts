import type { WordEntry } from '@/types/content';

export const TORT_WORDS: WordEntry[] = [
  {
    slug: 'torture',
    lemma: 'torture',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈtɔː.tʃər/' },
      us: { ipa: '/ˈtɔːr.tʃɚ/' },
    },
    definition: {
      en: 'The act of inflicting severe pain; to cause great suffering.',
      zh: '酷刑；折磨；拷打',
    },
    examples: [
      {
        en: ['The use of torture is prohibited under international law.'],
        zh: ['国际法禁止使用酷刑。'],
      },
    ],
    rootBreakdown: [
      { surface: 'tort', type: 'root', rootSlug: 'tort' },
      { surface: 'ure', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'tort ("twist") + -ure (noun) → the act of twisting someone in pain.',
      zh: 'tort（扭曲）+ -ure（名词后缀）→ 扭曲某人的行为，即折磨。',
    },
    relatedWords: ['torment', 'tortuous', 'distort'],
  },
  {
    slug: 'distort',
    lemma: 'distort',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/dɪˈstɔːt/' },
      us: { ipa: '/dɪˈstɔːrt/' },
    },
    definition: {
      en: 'To pull or twist out of shape; to give a misleading account of.',
      zh: '扭曲；歪曲；变形',
    },
    examples: [
      {
        en: ['The media can distort the truth to create sensational headlines.'],
        zh: ['媒体可能歪曲事实来制造耸人听闻的标题。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dis', type: 'prefix' },
      { surface: 'tort', type: 'root', rootSlug: 'tort' },
    ],
    morphologyNote: {
      en: 'dis- ("apart") + tort ("twist") → to twist apart, i.e. to deform.',
      zh: 'dis-（分开）+ tort（扭曲）→ 向不同方向扭曲，即歪曲。',
    },
    relatedWords: ['distortion', 'distorted', 'torture'],
  },
  {
    slug: 'extort',
    lemma: 'extort',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ɪkˈstɔːt/' },
      us: { ipa: '/ɪkˈstɔːrt/' },
    },
    definition: {
      en: 'To obtain something by force, threats, or other unfair means.',
      zh: '勒索；敲诈',
    },
    examples: [
      {
        en: ['The criminals tried to extort money from local businesses.'],
        zh: ['犯罪分子试图向当地商家勒索钱财。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'tort', type: 'root', rootSlug: 'tort' },
    ],
    morphologyNote: {
      en: 'ex- ("out") + tort ("twist") → to twist something out of someone.',
      zh: 'ex-（出来）+ tort（扭曲）→ 从他人身上扭出来，即勒索。',
    },
    relatedWords: ['extortion', 'distort', 'torture'],
  },
  {
    slug: 'contort',
    lemma: 'contort',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/kənˈtɔːt/' },
      us: { ipa: '/kənˈtɔːrt/' },
    },
    definition: {
      en: 'To twist or bend out of normal shape.',
      zh: '扭曲；变形',
    },
    examples: [
      {
        en: ['His face contorted with pain.'],
        zh: ['他的脸因疼痛而扭曲。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'tort', type: 'root', rootSlug: 'tort' },
    ],
    morphologyNote: {
      en: 'con- ("together, intensely") + tort ("twist") → to twist intensely.',
      zh: 'con-（加强）+ tort（扭曲）→ 剧烈扭曲。',
    },
    relatedWords: ['contortion', 'distort', 'torture'],
  },
  {
    slug: 'retort',
    lemma: 'retort',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: {
      uk: { ipa: '/rɪˈtɔːt/' },
      us: { ipa: '/rɪˈtɔːrt/' },
    },
    definition: {
      en: 'To say something sharp or witty in response to a criticism.',
      zh: '反驳；回嘴',
    },
    examples: [
      {
        en: ['She retorted angrily when he questioned her competence.'],
        zh: ['当他质疑她的能力时，她愤怒地反驳。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'tort', type: 'root', rootSlug: 'tort' },
    ],
    morphologyNote: {
      en: 're- ("back") + tort ("twist") → to twist back, i.e. to throw words back.',
      zh: 're-（回来）+ tort（扭曲）→ 扭回去，即反驳。',
    },
    relatedWords: ['distort', 'torture', 'contort'],
  },
  {
    slug: 'tortuous',
    lemma: 'tortuous',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈtɔː.tʃu.əs/' },
      us: { ipa: '/ˈtɔːr.tʃu.əs/' },
    },
    definition: {
      en: 'Full of twists and turns; excessively complex.',
      zh: '曲折的；迂回的',
    },
    examples: [
      {
        en: ['The tortuous mountain road was dangerous at night.'],
        zh: ['这条曲折的山路在夜间十分危险。'],
      },
    ],
    rootBreakdown: [
      { surface: 'tort', type: 'root', rootSlug: 'tort' },
      { surface: 'uous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'tort ("twist") + -uous (adj.) → full of twists.',
      zh: 'tort（扭曲）+ -uous（形容词后缀）→ 充满扭曲的。',
    },
    relatedWords: ['torture', 'distort', 'contort'],
  },
  {
    slug: 'torment',
    lemma: 'torment',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈtɔː.ment/' },
      us: { ipa: '/ˈtɔːr.ment/' },
    },
    definition: {
      en: 'Severe physical or mental suffering; to cause great anguish.',
      zh: '折磨；痛苦；使苦恼',
    },
    examples: [
      {
        en: ['The memories continued to torment him for years.'],
        zh: ['那些记忆多年来一直折磨着他。'],
      },
    ],
    rootBreakdown: [
      { surface: 'tor', type: 'root', rootSlug: 'tort' },
      { surface: 'ment', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'tor (from tort, "twist") + -ment (noun) → the state of being twisted in agony.',
      zh: 'tor（源自 tort，扭曲）+ -ment（名词后缀）→ 被痛苦扭曲的状态。',
    },
    relatedWords: ['torture', 'distort', 'tortuous'],
  },
  {
    slug: 'tornado',
    lemma: 'tornado',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/tɔːˈneɪ.dəʊ/' },
      us: { ipa: '/tɔːrˈneɪ.doʊ/' },
    },
    definition: {
      en: 'A violently rotating column of air extending from a thunderstorm.',
      zh: '龙卷风',
    },
    examples: [
      {
        en: ['The tornado destroyed dozens of homes in the area.'],
        zh: ['龙卷风摧毁了该地区数十座房屋。'],
      },
    ],
    rootBreakdown: [
      { surface: 'torn', type: 'root', rootSlug: 'tort' },
      { surface: 'ado', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'torn (from tort, "twist, turn") + -ado → a great twisting wind.',
      zh: 'torn（源自 tort，扭转）+ -ado → 巨大的旋转之风。',
    },
    relatedWords: ['tortuous', 'distort', 'contort'],
  },
  {
    slug: 'attorney',
    lemma: 'attorney',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/əˈtɜː.ni/' },
      us: { ipa: '/əˈtɝː.ni/' },
    },
    definition: {
      en: 'A person appointed to act for another in legal matters; a lawyer.',
      zh: '律师；代理人',
    },
    examples: [
      {
        en: ['She hired an attorney to handle the lawsuit.'],
        zh: ['她聘请了一位律师来处理这场诉讼。'],
      },
    ],
    rootBreakdown: [
      { surface: 'at', type: 'prefix' },
      { surface: 'torn', type: 'root', rootSlug: 'tort' },
      { surface: 'ey', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'at- (from ad, "to") + torn (from tort, "turn") → one turned to for legal help.',
      zh: 'at-（源自 ad，向）+ torn（源自 tort，转向）→ 受托转向处理事务的人，即律师。',
    },
    relatedWords: ['torture', 'distort', 'tour'],
  },
  {
    slug: 'tour',
    lemma: 'tour',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/tʊər/' },
      us: { ipa: '/tʊr/' },
    },
    definition: {
      en: 'A journey for pleasure visiting various places; to make such a journey.',
      zh: '旅行；巡回；游览',
    },
    examples: [
      {
        en: ['They went on a guided tour of the ancient ruins.'],
        zh: ['他们参加了古遗迹的导览游。'],
      },
    ],
    rootBreakdown: [{ surface: 'tour', type: 'root', rootSlug: 'tort' }],
    morphologyNote: {
      en: 'From tort ("turn") → a turning journey that returns to its starting point.',
      zh: '源自 tort（转）→ 转一圈回到起点的旅程。',
    },
    relatedWords: ['tourist', 'tourism', 'detour'],
  },
];
