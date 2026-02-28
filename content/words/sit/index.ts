import type { WordEntry } from '@/types/content';

export const SIT_WORDS: WordEntry[] = [
  {
    slug: 'site',
    lemma: 'site',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/saɪt/' },
      us: { ipa: '/saɪt/' },
    },
    definition: {
      en: 'A place where something is located or takes place.',
      zh: '地点；场所；网站',
    },
    examples: [
      {
        en: ['The construction site was closed due to safety concerns.'],
        zh: ['由于安全问题，施工现场被关闭。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sit', type: 'root', rootSlug: 'sit' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From Latin situs ("position, place") → sit ("to settle") → a place where something sits.',
      zh: '源自拉丁语 situs（位置）→ sit（坐落）→ 某物坐落的地方。',
    },
    relatedWords: ['website', 'situation', 'situate'],
  },
  {
    slug: 'situation',
    lemma: 'situation',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˌsɪtʃ.uˈeɪ.ʃən/' },
      us: { ipa: '/ˌsɪtʃ.uˈeɪ.ʃən/' },
    },
    definition: {
      en: 'A set of circumstances in which one finds oneself; a state of affairs.',
      zh: '情况；形势；处境',
    },
    examples: [
      {
        en: ['We need to assess the situation before making a decision.'],
        zh: ['我们需要在做决定之前评估形势。'],
      },
    ],
    rootBreakdown: [
      { surface: 'situ', type: 'root', rootSlug: 'sit' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'situ ("place, position") + -ation (noun) → the state of how things are placed.',
      zh: 'situ（位置）+ -ation（名词后缀）→ 事物所处的状态，即形势。',
    },
    relatedWords: ['situate', 'site', 'situated'],
  },
  {
    slug: 'consider',
    lemma: 'consider',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/kənˈsɪd.ər/' },
      us: { ipa: '/kənˈsɪd.ɚ/' },
    },
    definition: {
      en: 'To think carefully about something before making a decision.',
      zh: '考虑；认为；细想',
    },
    examples: [
      {
        en: ['Please consider all options before choosing.'],
        zh: ['请在选择之前考虑所有选项。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'sider', type: 'root', rootSlug: 'sit' },
    ],
    morphologyNote: {
      en: 'con- ("with, together") + sider (from sidus "star", related to sit "observe") → to observe the stars together, i.e. to think carefully.',
      zh: 'con-（一起）+ sider（源自 sidus 星辰，与 sit 观察相关）→ 一起观察星象，引申为仔细考虑。',
    },
    relatedWords: ['consideration', 'considerable', 'considerate'],
  },
  {
    slug: 'president',
    lemma: 'president',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈprez.ɪ.dənt/' },
      us: { ipa: '/ˈprez.ə.dənt/' },
    },
    definition: {
      en: 'The elected head of a republic; the head of an organization.',
      zh: '总统；主席；总裁',
    },
    examples: [
      {
        en: ['The president addressed the nation on television.'],
        zh: ['总统在电视上向全国发表讲话。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pre', type: 'prefix' },
      { surface: 'sid', type: 'root', rootSlug: 'sit' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pre- ("before") + sid ("sit") + -ent ("one who") → one who sits before others, i.e. presides.',
      zh: 'pre-（在前面）+ sid（坐）+ -ent（…的人）→ 坐在前面的人，即主持者、总统。',
    },
    relatedWords: ['presidency', 'presidential', 'preside'],
  },
  {
    slug: 'resident',
    lemma: 'resident',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: {
      uk: { ipa: '/ˈrez.ɪ.dənt/' },
      us: { ipa: '/ˈrez.ə.dənt/' },
    },
    definition: {
      en: 'A person who lives somewhere permanently or on a long-term basis.',
      zh: '居民；住户',
    },
    examples: [
      {
        en: ['Local residents opposed the construction of the new highway.'],
        zh: ['当地居民反对修建新公路。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'sid', type: 'root', rootSlug: 'sit' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("back, again") + sid ("sit") + -ent ("one who") → one who sits back and stays, i.e. an inhabitant.',
      zh: 're-（回来）+ sid（坐）+ -ent（…的人）→ 坐回来安居的人，即居民。',
    },
    relatedWords: ['residence', 'residential', 'residency'],
  },
  {
    slug: 'subside',
    lemma: 'subside',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/səbˈsaɪd/' },
      us: { ipa: '/səbˈsaɪd/' },
    },
    definition: {
      en: 'To become less intense, violent, or severe; to sink to a lower level.',
      zh: '平息；消退；沉降',
    },
    examples: [
      {
        en: ['The floodwaters began to subside after three days.'],
        zh: ['洪水在三天后开始消退。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sub', type: 'prefix' },
      { surface: 'sid', type: 'root', rootSlug: 'sit' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sub- ("under, down") + sid ("sit") → to sit down, i.e. to settle or diminish.',
      zh: 'sub-（向下）+ sid（坐）→ 坐下去，即沉降、消退。',
    },
    relatedWords: ['subsidence', 'subsidize', 'subsidy'],
  },
  {
    slug: 'possess',
    lemma: 'possess',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/pəˈzes/' },
      us: { ipa: '/pəˈzes/' },
    },
    definition: {
      en: "To have or own something; to dominate someone's thoughts.",
      zh: '拥有；占有；支配',
    },
    examples: [
      {
        en: ['She possesses a remarkable talent for music.'],
        zh: ['她拥有非凡的音乐天赋。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pos', type: 'prefix' },
      { surface: 'sess', type: 'root', rootSlug: 'sit' },
    ],
    morphologyNote: {
      en: 'pos- (from potis, "powerful") + sess ("sit") → to sit upon something as master, i.e. to own.',
      zh: 'pos-（有力的）+ sess（坐）→ 以主人身份坐在某物上，即拥有。',
    },
    relatedWords: ['possession', 'possessive', 'dispossess'],
  },
  {
    slug: 'obsess',
    lemma: 'obsess',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/əbˈses/' },
      us: { ipa: '/əbˈses/' },
    },
    definition: {
      en: 'To preoccupy or fill the mind continually and disturbingly.',
      zh: '使着迷；使困扰；念念不忘',
    },
    examples: [
      {
        en: ['He became obsessed with finding the perfect solution.'],
        zh: ['他变得执着于寻找完美的解决方案。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ob', type: 'prefix' },
      { surface: 'sess', type: 'root', rootSlug: 'sit' },
    ],
    morphologyNote: {
      en: 'ob- ("before, upon") + sess ("sit") → to sit upon one\'s mind, i.e. to haunt thoughts.',
      zh: 'ob-（在…上面）+ sess（坐）→ 盘踞在心头，即困扰、着迷。',
    },
    relatedWords: ['obsession', 'obsessive', 'possess'],
  },
  {
    slug: 'assess',
    lemma: 'assess',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/əˈses/' },
      us: { ipa: '/əˈses/' },
    },
    definition: {
      en: 'To evaluate or estimate the nature, ability, or quality of something.',
      zh: '评估；估价；评定',
    },
    examples: [
      {
        en: ['Experts were called in to assess the damage after the earthquake.'],
        zh: ['地震后，专家被请来评估损失。'],
      },
    ],
    rootBreakdown: [
      { surface: 'as', type: 'prefix' },
      { surface: 'sess', type: 'root', rootSlug: 'sit' },
    ],
    morphologyNote: {
      en: 'as- ("to, beside") + sess ("sit") → to sit beside a judge, i.e. to evaluate.',
      zh: 'as-（在旁边）+ sess（坐）→ 坐在法官旁边，引申为评估。',
    },
    relatedWords: ['assessment', 'assessor', 'reassess'],
  },
  {
    slug: 'sediment',
    lemma: 'sediment',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈsed.ɪ.mənt/' },
      us: { ipa: '/ˈsed.ə.mənt/' },
    },
    definition: {
      en: 'Matter that settles to the bottom of a liquid.',
      zh: '沉积物；沉淀物',
    },
    examples: [
      {
        en: ['Layers of sediment built up over millions of years.'],
        zh: ['沉积物层在数百万年间不断积累。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sed', type: 'root', rootSlug: 'sit' },
      { surface: 'iment', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sed ("sit, settle") + -iment (noun) → material that settles and sits at the bottom.',
      zh: 'sed（坐、沉降）+ -iment（名词后缀）→ 沉降到底部的物质。',
    },
    relatedWords: ['sedimentary', 'sedate', 'sedentary'],
  },
  {
    slug: 'sedentary',
    lemma: 'sedentary',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈsed.ən.tər.i/' },
      us: { ipa: '/ˈsed.ən.ter.i/' },
    },
    definition: {
      en: 'Involving much sitting and little physical activity.',
      zh: '久坐的；缺乏运动的',
    },
    examples: [
      {
        en: ['A sedentary lifestyle increases the risk of heart disease.'],
        zh: ['久坐不动的生活方式会增加患心脏病的风险。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sed', type: 'root', rootSlug: 'sit' },
      { surface: 'ent', type: 'connector' },
      { surface: 'ary', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sed ("sit") + -entary (adj.) → characterized by sitting.',
      zh: 'sed（坐）+ -entary（形容词后缀）→ 以坐着为特征的。',
    },
    relatedWords: ['sediment', 'sedate', 'session'],
  },
  {
    slug: 'supersede',
    lemma: 'supersede',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˌsuː.pəˈsiːd/' },
      us: { ipa: '/ˌsuː.pɚˈsiːd/' },
    },
    definition: {
      en: 'To take the place of something previously in authority or use.',
      zh: '取代；替代',
    },
    examples: [
      {
        en: ['Digital streaming has largely superseded physical media.'],
        zh: ['数字流媒体在很大程度上取代了实体媒介。'],
      },
    ],
    rootBreakdown: [
      { surface: 'super', type: 'prefix' },
      { surface: 'sede', type: 'root', rootSlug: 'sit' },
    ],
    morphologyNote: {
      en: 'super- ("above") + sede ("sit") → to sit above, i.e. to replace.',
      zh: 'super-（在上方）+ sede（坐）→ 坐在上面，即取代。',
    },
    relatedWords: ['supersession', 'president', 'resident'],
  },
  {
    slug: 'dissident',
    lemma: 'dissident',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: {
      uk: { ipa: '/ˈdɪs.ɪ.dənt/' },
      us: { ipa: '/ˈdɪs.ə.dənt/' },
    },
    definition: {
      en: 'A person who opposes official policy; holding opposing views.',
      zh: '持不同政见者；异议的',
    },
    examples: [
      {
        en: ['Political dissidents were arrested during the crackdown.'],
        zh: ['政治异见人士在镇压期间被逮捕。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dis', type: 'prefix' },
      { surface: 'sid', type: 'root', rootSlug: 'sit' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dis- ("apart") + sid ("sit") + -ent ("one who") → one who sits apart, i.e. disagrees.',
      zh: 'dis-（分开）+ sid（坐）+ -ent（…的人）→ 坐在一旁的人，即持不同意见者。',
    },
    relatedWords: ['dissidence', 'president', 'resident'],
  },
];
