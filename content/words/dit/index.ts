import type { WordEntry } from '@/types/content';

export const DIT_WORDS: WordEntry[] = [
  {
    slug: 'donate',
    lemma: 'donate',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/dəʊˈneɪt/' },
      us: { ipa: '/ˈdoʊ.neɪt/' },
    },
    definition: {
      en: 'To give money or goods to a charitable cause.',
      zh: '捐赠；捐献',
    },
    examples: [
      {
        en: ['She donated blood at the local hospital.'],
        zh: ['她在当地医院献了血。'],
      },
    ],
    rootBreakdown: [
      { surface: 'don', type: 'root', rootSlug: 'dit' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'don (variant of dit, "give") + -ate (verb suffix) → to give freely.',
      zh: 'don（dit 的变体，给予）+ -ate（动词后缀）→ 自愿给予，即捐赠。',
    },
    relatedWords: ['donation', 'donor', 'pardon'],
  },
  {
    slug: 'donation',
    lemma: 'donation',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/dəʊˈneɪ.ʃən/' },
      us: { ipa: '/doʊˈneɪ.ʃən/' },
    },
    definition: {
      en: 'Something given to a charity; the act of donating.',
      zh: '捐赠；捐款',
    },
    examples: [
      {
        en: ['The organization relies on donations from the public.'],
        zh: ['该组织依靠公众的捐款。'],
      },
    ],
    rootBreakdown: [
      { surface: 'don', type: 'root', rootSlug: 'dit' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'don ("give") + -ation (noun suffix) → the act of giving.',
      zh: 'don（给予）+ -ation（名词后缀）→ 给予的行为，即捐赠。',
    },
    relatedWords: ['donate', 'donor', 'pardon'],
  },
  {
    slug: 'pardon',
    lemma: 'pardon',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈpɑː.dən/' },
      us: { ipa: '/ˈpɑːr.dən/' },
    },
    definition: {
      en: 'The act of forgiving an offense; to forgive or excuse.',
      zh: '原谅；赦免；宽恕',
    },
    examples: [
      {
        en: ['The governor granted a full pardon to the wrongly convicted man.'],
        zh: ['州长对被错误定罪的人给予了完全赦免。'],
      },
    ],
    rootBreakdown: [
      { surface: 'par', type: 'prefix' },
      { surface: 'don', type: 'root', rootSlug: 'dit' },
    ],
    morphologyNote: {
      en: 'par- (from per-, "thoroughly") + don (variant of dit, "give") → to give thoroughly, to forgive completely.',
      zh: 'par-（源自 per-，彻底地）+ don（dit 的变体，给予）→ 彻底给予，即完全宽恕。',
    },
    relatedWords: ['donate', 'donor', 'condone'],
  },
  {
    slug: 'tradition',
    lemma: 'tradition',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/trəˈdɪʃ.ən/' },
      us: { ipa: '/trəˈdɪʃ.ən/' },
    },
    definition: {
      en: 'A custom or belief passed from generation to generation.',
      zh: '传统；惯例',
    },
    examples: [
      {
        en: ['It is a family tradition to gather for dinner every Sunday.'],
        zh: ['每周日聚餐是一个家庭传统。'],
      },
    ],
    rootBreakdown: [
      { surface: 'tra', type: 'prefix' },
      { surface: 'dit', type: 'root', rootSlug: 'dit' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'tra- (from trans-, "across") + dit ("give") + -ion (noun) → something given across generations.',
      zh: 'tra-（源自 trans-，跨越）+ dit（给予）+ -ion（名词后缀）→ 跨代传递的东西，即传统。',
    },
    relatedWords: ['traditional', 'traditionalist', 'donate'],
  },
  {
    slug: 'traditional',
    lemma: 'traditional',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/trəˈdɪʃ.ən.əl/' },
      us: { ipa: '/trəˈdɪʃ.ən.əl/' },
    },
    definition: {
      en: 'Existing in or as part of a tradition; long-established.',
      zh: '传统的；惯例的',
    },
    examples: [
      {
        en: ['Traditional medicine is still widely used in many countries.'],
        zh: ['传统医学在许多国家仍被广泛使用。'],
      },
    ],
    rootBreakdown: [
      { surface: 'tra', type: 'prefix' },
      { surface: 'dit', type: 'root', rootSlug: 'dit' },
      { surface: 'ion', type: 'suffix' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'tradition (from tra- + dit, "give across") + -al (adjective) → of or pertaining to tradition.',
      zh: 'tradition（源自 tra- + dit，跨代给予）+ -al（形容词后缀）→ 关于传统的。',
    },
    relatedWords: ['tradition', 'traditionalist', 'nontraditional'],
  },
  {
    slug: 'edition',
    lemma: 'edition',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ɪˈdɪʃ.ən/' },
      us: { ipa: '/ɪˈdɪʃ.ən/' },
    },
    definition: {
      en: 'A particular form of a published text; a version of something.',
      zh: '版本；版次',
    },
    examples: [
      {
        en: ['The second edition of the textbook includes updated content.'],
        zh: ['教科书的第二版包含了更新的内容。'],
      },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'dit', type: 'root', rootSlug: 'dit' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'e- (from ex-, "out") + dit ("give") + -ion (noun) → something given out, published.',
      zh: 'e-（源自 ex-，向外）+ dit（给予）+ -ion（名词后缀）→ 给予出去的东西，即出版物。',
    },
    relatedWords: ['editor', 'editorial', 'edit'],
  },
  {
    slug: 'editor',
    lemma: 'editor',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈed.ɪ.tər/' },
      us: { ipa: '/ˈed.ɪ.t̬ɚ/' },
    },
    definition: {
      en: 'A person who is in charge of and determines the content of a publication.',
      zh: '编辑；编者',
    },
    examples: [
      {
        en: ['The editor reviewed the manuscript before publication.'],
        zh: ['编辑在出版前审阅了手稿。'],
      },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'dit', type: 'root', rootSlug: 'dit' },
      { surface: 'or', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'e- ("out") + dit ("give") + -or (agent) → one who gives out/publishes, an editor.',
      zh: 'e-（向外）+ dit（给予）+ -or（施事者）→ 把内容给出去的人，即编辑。',
    },
    relatedWords: ['edition', 'editorial', 'edit'],
  },
  {
    slug: 'anecdote',
    lemma: 'anecdote',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈæn.ɪk.dəʊt/' },
      us: { ipa: '/ˈæn.ɪk.doʊt/' },
    },
    definition: {
      en: 'A short, entertaining account of a real incident or person.',
      zh: '趣闻；轶事；小故事',
    },
    examples: [
      {
        en: ['The professor often begins lectures with an amusing anecdote.'],
        zh: ['教授常常以一个有趣的趣闻开始讲座。'],
      },
    ],
    rootBreakdown: [
      { surface: 'an', type: 'prefix' },
      { surface: 'ec', type: 'prefix' },
      { surface: 'dote', type: 'root', rootSlug: 'dit' },
    ],
    morphologyNote: {
      en: 'an- ("not") + ec- ("out") + dote (variant of dit, "give") → something not given out publicly, unpublished tales.',
      zh: 'an-（不）+ ec-（向外）+ dote（dit 的变体，给予）→ 未公开的故事，即轶事。',
    },
    relatedWords: ['anecdotal', 'antidote', 'donate'],
  },
  {
    slug: 'antidote',
    lemma: 'antidote',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈæn.tɪ.dəʊt/' },
      us: { ipa: '/ˈæn.t̬ɪ.doʊt/' },
    },
    definition: {
      en: 'A medicine taken to counteract poison; something that counteracts an unpleasant situation.',
      zh: '解毒剂；对抗手段',
    },
    examples: [
      {
        en: ['Laughter is often the best antidote to stress.'],
        zh: ['笑声往往是对抗压力的最佳解药。'],
      },
    ],
    rootBreakdown: [
      { surface: 'anti', type: 'prefix' },
      { surface: 'dote', type: 'root', rootSlug: 'dit' },
    ],
    morphologyNote: {
      en: 'anti- ("against") + dote (variant of dit, "give") → something given against poison.',
      zh: 'anti-（对抗）+ dote（dit 的变体，给予）→ 给予以对抗毒素的东西，即解毒剂。',
    },
    relatedWords: ['anecdote', 'donate', 'dose'],
  },
  {
    slug: 'data',
    lemma: 'data',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈdeɪ.tə/' },
      us: { ipa: '/ˈdeɪ.t̬ə/' },
    },
    definition: {
      en: 'Facts and statistics collected for reference or analysis.',
      zh: '数据；资料',
    },
    examples: [
      {
        en: ['The research team collected data from thousands of participants.'],
        zh: ['研究团队从数千名参与者中收集了数据。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dat', type: 'root', rootSlug: 'dit' },
      { surface: 'a', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dat (variant of dit, "give") + -a (Latin plural) → things given, facts provided.',
      zh: 'dat（dit 的变体，给予）+ -a（拉丁语复数）→ 被给出的东西，即数据。',
    },
    relatedWords: ['database', 'date', 'donate'],
  },
  {
    slug: 'date',
    lemma: 'date',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/deɪt/' },
      us: { ipa: '/deɪt/' },
    },
    definition: {
      en: 'The day of the month or year; a social or romantic appointment.',
      zh: '日期；约会',
    },
    examples: [
      {
        en: ['What is the date of the next meeting?'],
        zh: ['下次会议的日期是什么时候？'],
      },
    ],
    rootBreakdown: [
      { surface: 'dat', type: 'root', rootSlug: 'dit' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dat (variant of dit, "give") + -e → what is given (the day given), a date.',
      zh: 'dat（dit 的变体，给予）+ -e → 被给定的（被指定的日子），即日期。',
    },
    relatedWords: ['data', 'update', 'outdated'],
  },
  {
    slug: 'condone',
    lemma: 'condone',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/kənˈdəʊn/' },
      us: { ipa: '/kənˈdoʊn/' },
    },
    definition: {
      en: 'To accept or forgive behavior that is considered wrong.',
      zh: '容忍；纵容；宽恕',
    },
    examples: [
      {
        en: ['The school does not condone cheating in any form.'],
        zh: ['学校不容忍任何形式的作弊行为。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'done', type: 'root', rootSlug: 'dit' },
    ],
    morphologyNote: {
      en: 'con- ("completely") + done (variant of dit, "give") → to give away completely, to forgive.',
      zh: 'con-（完全地）+ done（dit 的变体，给予）→ 完全给予宽恕，即纵容。',
    },
    relatedWords: ['pardon', 'donate', 'tradition'],
  },
];
