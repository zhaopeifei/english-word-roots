import type { WordEntry } from '@/types/content';

export const UNI_WORDS: WordEntry[] = [
  {
    slug: 'unit',
    lemma: 'unit',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈjuː.nɪt/' },
      us: { ipa: '/ˈjuː.nɪt/' },
    },
    definition: {
      en: 'An individual thing regarded as a single entity; a quantity used as a standard of measurement.',
      zh: '单位；单元；部件',
    },
    examples: [
      {
        en: ['Each unit in the building has its own entrance.'],
        zh: ['大楼里的每个单元都有独立入口。'],
      },
    ],
    rootBreakdown: [
      { surface: 'un', type: 'root', rootSlug: 'uni' },
      { surface: 'it', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'un (from uni, "one") + -it → a single entity.',
      zh: 'un（源自 uni，一）+ -it → 单独的个体。',
    },
    relatedWords: ['unite', 'unity', 'uniform'],
  },
  {
    slug: 'unite',
    lemma: 'unite',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/juˈnaɪt/' },
      us: { ipa: '/juˈnaɪt/' },
    },
    definition: {
      en: 'To come or bring together for a common purpose.',
      zh: '联合；统一；团结',
    },
    examples: [
      {
        en: ['The crisis united people from all walks of life.'],
        zh: ['危机使各行各业的人团结在一起。'],
      },
    ],
    rootBreakdown: [
      { surface: 'un', type: 'root', rootSlug: 'uni' },
      { surface: 'ite', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'un (from uni, "one") + -ite (verb) → to make one.',
      zh: 'un（源自 uni，一）+ -ite（动词后缀）→ 使合为一体。',
    },
    relatedWords: ['united', 'reunion', 'unity'],
  },
  {
    slug: 'unity',
    lemma: 'unity',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈjuː.nə.ti/' },
      us: { ipa: '/ˈjuː.nə.t̬i/' },
    },
    definition: {
      en: 'The state of being united or joined as a whole.',
      zh: '统一；团结；一致',
    },
    examples: [
      {
        en: ['National unity is essential during times of crisis.'],
        zh: ['在危机时期，国家团结至关重要。'],
      },
    ],
    rootBreakdown: [
      { surface: 'un', type: 'root', rootSlug: 'uni' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'un (from uni, "one") + -ity (noun) → the state of being one.',
      zh: 'un（源自 uni，一）+ -ity（名词后缀）→ 成为一体的状态。',
    },
    relatedWords: ['unite', 'union', 'uniform'],
  },
  {
    slug: 'uniform',
    lemma: 'uniform',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: {
      uk: { ipa: '/ˈjuː.nɪ.fɔːm/' },
      us: { ipa: '/ˈjuː.nɪ.fɔːrm/' },
    },
    definition: {
      en: 'A distinctive set of clothing; remaining the same in all cases.',
      zh: '制服；统一的；一致的',
    },
    examples: [
      {
        en: ['Students must wear a uniform to school.'],
        zh: ['学生必须穿校服上学。'],
      },
    ],
    rootBreakdown: [
      { surface: 'uni', type: 'root', rootSlug: 'uni' },
      { surface: 'form', type: 'root' },
    ],
    morphologyNote: {
      en: 'uni ("one") + form ("shape") → of one shape, i.e. all the same.',
      zh: 'uni（一）+ form（形式）→ 统一形式的。',
    },
    relatedWords: ['uniformity', 'unite', 'unique'],
  },
  {
    slug: 'unique',
    lemma: 'unique',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/juˈniːk/' },
      us: { ipa: '/juˈniːk/' },
    },
    definition: {
      en: 'Being the only one of its kind; unlike anything else.',
      zh: '独特的；唯一的',
    },
    examples: [
      {
        en: ['Every snowflake has a unique crystal pattern.'],
        zh: ['每片雪花都有独特的晶体图案。'],
      },
    ],
    rootBreakdown: [
      { surface: 'uni', type: 'root', rootSlug: 'uni' },
      { surface: 'que', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'uni ("one") + -que → being one of a kind.',
      zh: 'uni（一）+ -que → 仅此一个的，即独特的。',
    },
    relatedWords: ['uniqueness', 'uniform', 'unify'],
  },
  {
    slug: 'universal',
    lemma: 'universal',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˌjuː.nɪˈvɜː.səl/' },
      us: { ipa: '/ˌjuː.nɪˈvɝː.səl/' },
    },
    definition: {
      en: 'Relating to or affecting the whole world; applicable to all cases.',
      zh: '普遍的；全球的；通用的',
    },
    examples: [
      {
        en: ['Access to clean water should be a universal right.'],
        zh: ['获得清洁饮用水应是一项普遍权利。'],
      },
    ],
    rootBreakdown: [
      { surface: 'uni', type: 'root', rootSlug: 'uni' },
      { surface: 'vers', type: 'root', rootSlug: 'vers' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'uni ("one") + vers ("turn") + -al (adj.) → turned into one, i.e. all-encompassing.',
      zh: 'uni（一）+ vers（转）+ -al（形容词后缀）→ 转为一体的，即普遍的。',
    },
    relatedWords: ['universe', 'university', 'universally'],
  },
  {
    slug: 'university',
    lemma: 'university',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˌjuː.nɪˈvɜː.sə.ti/' },
      us: { ipa: '/ˌjuː.nɪˈvɝː.sə.t̬i/' },
    },
    definition: {
      en: 'An institution of higher education and research.',
      zh: '大学',
    },
    examples: [
      {
        en: ['She graduated from a prestigious university in London.'],
        zh: ['她毕业于伦敦一所著名大学。'],
      },
    ],
    rootBreakdown: [
      { surface: 'uni', type: 'root', rootSlug: 'uni' },
      { surface: 'vers', type: 'root', rootSlug: 'vers' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'uni ("one") + vers ("turn") + -ity (noun) → a community turned into one body of scholars.',
      zh: 'uni（一）+ vers（转）+ -ity（名词后缀）→ 学者聚为一体的社区。',
    },
    relatedWords: ['universal', 'universe', 'unite'],
  },
  {
    slug: 'unanimous',
    lemma: 'unanimous',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/juˈnæn.ɪ.məs/' },
      us: { ipa: '/juˈnæn.ə.məs/' },
    },
    definition: {
      en: 'Fully in agreement; with complete consensus.',
      zh: '一致同意的；全体一致的',
    },
    examples: [
      {
        en: ['The decision was unanimous among all board members.'],
        zh: ['所有董事会成员一致同意了这个决定。'],
      },
    ],
    rootBreakdown: [
      { surface: 'un', type: 'root', rootSlug: 'uni' },
      { surface: 'anim', type: 'root' },
      { surface: 'ous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'un- (from uni, "one") + anim ("mind") + -ous (adj.) → of one mind.',
      zh: 'un-（源自 uni，一）+ anim（心灵）+ -ous（形容词后缀）→ 一心一意的。',
    },
    relatedWords: ['unanimity', 'unite', 'unify'],
  },
  {
    slug: 'unify',
    lemma: 'unify',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˈjuː.nɪ.faɪ/' },
      us: { ipa: '/ˈjuː.nɪ.faɪ/' },
    },
    definition: {
      en: 'To make or become united or uniform.',
      zh: '统一；使一体化',
    },
    examples: [
      {
        en: ['The leader worked to unify the divided nation.'],
        zh: ['领导人努力统一分裂的国家。'],
      },
    ],
    rootBreakdown: [
      { surface: 'uni', type: 'root', rootSlug: 'uni' },
      { surface: 'fy', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'uni ("one") + -fy ("make") → to make into one.',
      zh: 'uni（一）+ -fy（使…）→ 使合为一。',
    },
    relatedWords: ['unification', 'unite', 'unity'],
  },
  {
    slug: 'progress',
    lemma: 'progress',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈprəʊ.ɡres/' },
      us: { ipa: '/ˈprɑː.ɡres/' },
    },
    definition: {
      en: 'Forward movement toward a destination; development toward a better condition.',
      zh: '进步；进展；前进',
    },
    examples: [
      {
        en: ['The student has made significant progress in math.'],
        zh: ['这位学生在数学方面取得了显著进步。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pro', type: 'prefix' },
      { surface: 'gress', type: 'root', rootSlug: 'uni' },
    ],
    morphologyNote: {
      en: 'pro- ("forward") + gress (from grad, "step") → to step forward.',
      zh: 'pro-（向前）+ gress（源自 grad，步伐）→ 向前迈步，即进步。',
    },
    relatedWords: ['progressive', 'congress', 'graduate'],
  },
  {
    slug: 'graduate',
    lemma: 'graduate',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈɡrædʒ.u.eɪt/' },
      us: { ipa: '/ˈɡrædʒ.u.eɪt/' },
    },
    definition: {
      en: 'A person who has completed a course of study; to complete a degree.',
      zh: '毕业生；毕业；获得学位',
    },
    examples: [
      {
        en: ['She graduated from university with honors.'],
        zh: ['她以优异成绩从大学毕业。'],
      },
    ],
    rootBreakdown: [
      { surface: 'grad', type: 'root', rootSlug: 'uni' },
      { surface: 'u', type: 'connector' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'grad ("step, degree") + -uate (verb) → to take a step up in degree.',
      zh: 'grad（步伐、等级）+ -uate（动词后缀）→ 提升一个等级，即毕业。',
    },
    relatedWords: ['graduation', 'undergraduate', 'gradual'],
  },
];
