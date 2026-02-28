import type { WordEntry } from '@/types/content';

export const MIN_WORDS: WordEntry[] = [
  {
    slug: 'minor',
    lemma: 'minor',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: { uk: { ipa: '/ˈmaɪ.nər/' }, us: { ipa: '/ˈmaɪ.nɚ/' } },
    definition: {
      en: 'Lesser in importance, size, or degree; a person under the legal age of adulthood.',
      zh: '较小的；次要的；未成年人',
    },
    examples: [{ en: ['The damage to the car was only minor.'], zh: ['汽车的损坏只是轻微的。'] }],
    rootBreakdown: [
      { surface: 'min', type: 'root', rootSlug: 'min' },
      { surface: 'or', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'min ("small, less") + -or (comparative) → the lesser one.',
      zh: 'min（小的）+ -or（比较级后缀）→ 较小的。',
    },
    relatedWords: ['minority', 'minimize', 'minute'],
  },
  {
    slug: 'minority',
    lemma: 'minority',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/maɪˈnɒr.ɪ.ti/' }, us: { ipa: '/maɪˈnɔːr.ə.t̬i/' } },
    definition: {
      en: 'The smaller number or part; a group differing from the majority.',
      zh: '少数；少数民族',
    },
    examples: [
      {
        en: ['Only a minority of voters supported the proposal.'],
        zh: ['只有少数选民支持该提案。'],
      },
    ],
    rootBreakdown: [
      { surface: 'min', type: 'root', rootSlug: 'min' },
      { surface: 'or', type: 'other' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'min ("small") + -ority (noun) → the state of being smaller in number.',
      zh: 'min（小的）+ -ority（名词后缀）→ 较少的状态。',
    },
    relatedWords: ['minor', 'majority'],
  },
  {
    slug: 'minimal',
    lemma: 'minimal',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈmɪn.ɪ.məl/' }, us: { ipa: '/ˈmɪn.ɪ.məl/' } },
    definition: { en: 'Of the least possible amount or degree.', zh: '最小的；极少的' },
    examples: [
      { en: ['The project was completed with minimal cost.'], zh: ['该项目以最小的成本完成。'] },
    ],
    rootBreakdown: [
      { surface: 'min', type: 'root', rootSlug: 'min' },
      { surface: 'im', type: 'other' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'min ("small") + -imal (adj.) → of the smallest degree.',
      zh: 'min（小的）+ -imal（形容词后缀）→ 最小程度的。',
    },
    relatedWords: ['minimize', 'minimalism', 'minimum'],
  },
  {
    slug: 'minimalism',
    lemma: 'minimalism',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈmɪn.ɪ.mə.lɪ.zəm/' }, us: { ipa: '/ˈmɪn.ɪ.mə.lɪ.zəm/' } },
    definition: {
      en: 'A style or technique characterized by extreme simplicity and sparseness.',
      zh: '极简主义',
    },
    examples: [
      {
        en: ['Minimalism in design focuses on stripping away the unnecessary.'],
        zh: ['设计中的极简主义注重去除不必要的元素。'],
      },
    ],
    rootBreakdown: [
      { surface: 'min', type: 'root', rootSlug: 'min' },
      { surface: 'imal', type: 'other' },
      { surface: 'ism', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'min ("small") + -imal + -ism (doctrine) → the doctrine of the least.',
      zh: 'min（小的）+ -imal + -ism（主义）→ 极少主义。',
    },
    relatedWords: ['minimal', 'minimalist'],
  },
  {
    slug: 'minister',
    lemma: 'minister',
    partOfSpeech: ['n.', 'vi.'],
    pronunciation: { uk: { ipa: '/ˈmɪn.ɪ.stər/' }, us: { ipa: '/ˈmɪn.ɪ.stɚ/' } },
    definition: {
      en: 'A head of a government department; a member of the clergy; to attend to the needs of.',
      zh: '部长；牧师；服务',
    },
    examples: [
      {
        en: ['The prime minister addressed the nation on television.'],
        zh: ['首相在电视上向全国发表讲话。'],
      },
    ],
    rootBreakdown: [
      { surface: 'min', type: 'root', rootSlug: 'min' },
      { surface: 'ister', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'min ("less, serve") + -ister (agent) → one who serves, a subordinate attendant.',
      zh: 'min（较小、服务）+ -ister（施动者后缀）→ 服务者，即部长或牧师。',
    },
    relatedWords: ['ministry', 'administer', 'administrator'],
  },
  {
    slug: 'ministry',
    lemma: 'ministry',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈmɪn.ɪ.stri/' }, us: { ipa: '/ˈmɪn.ɪ.stri/' } },
    definition: {
      en: 'A government department headed by a minister; the work of a religious minister.',
      zh: '（政府）部门；牧师的职责',
    },
    examples: [
      {
        en: ['The Ministry of Education announced new policies for schools.'],
        zh: ['教育部宣布了新的学校政策。'],
      },
    ],
    rootBreakdown: [
      { surface: 'min', type: 'root', rootSlug: 'min' },
      { surface: 'istry', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'min ("serve") + -istry (noun) → the office or service of a minister.',
      zh: 'min（服务）+ -istry（名词后缀）→ 部长的职务或服务。',
    },
    relatedWords: ['minister', 'administer'],
  },
  {
    slug: 'administer',
    lemma: 'administer',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ədˈmɪn.ɪ.stər/' }, us: { ipa: '/ədˈmɪn.ɪ.stɚ/' } },
    definition: {
      en: 'To manage or direct the affairs of; to give or apply.',
      zh: '管理；执行；给予',
    },
    examples: [
      {
        en: ['Nurses administer medication to patients throughout the day.'],
        zh: ['护士全天给患者施药。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ad', type: 'prefix' },
      { surface: 'min', type: 'root', rootSlug: 'min' },
      { surface: 'ister', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ad- ("to") + min ("serve") + -ister → to serve toward, to manage.',
      zh: 'ad-（向）+ min（服务）+ -ister → 为…服务，即管理。',
    },
    relatedWords: ['administration', 'administrator', 'minister'],
  },
  {
    slug: 'administrator',
    lemma: 'administrator',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ədˈmɪn.ɪ.streɪ.tər/' }, us: { ipa: '/ədˈmɪn.ɪ.streɪ.tɚ/' } },
    definition: {
      en: 'A person responsible for managing an organization or system.',
      zh: '管理者；行政人员',
    },
    examples: [
      {
        en: ['The school administrator organized the annual fundraiser.'],
        zh: ['学校管理者组织了年度筹款活动。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ad', type: 'prefix' },
      { surface: 'min', type: 'root', rootSlug: 'min' },
      { surface: 'istr', type: 'other' },
      { surface: 'ator', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ad- ("to") + min ("serve") + -istrator (agent) → one who manages or serves.',
      zh: 'ad-（向）+ min（服务）+ -istrator（施动者后缀）→ 管理者。',
    },
    relatedWords: ['administer', 'administration'],
  },
  {
    slug: 'diminish',
    lemma: 'diminish',
    partOfSpeech: ['vt.', 'vi.'],
    pronunciation: { uk: { ipa: '/dɪˈmɪn.ɪʃ/' }, us: { ipa: '/dɪˈmɪn.ɪʃ/' } },
    definition: {
      en: 'To make or become less; to reduce in size, importance, or value.',
      zh: '减少；缩小；贬低',
    },
    examples: [
      {
        en: ['Nothing could diminish her enthusiasm for the project.'],
        zh: ['什么都无法减少她对这个项目的热情。'],
      },
    ],
    rootBreakdown: [
      { surface: 'di', type: 'prefix' },
      { surface: 'min', type: 'root', rootSlug: 'min' },
      { surface: 'ish', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'di- ("apart") + min ("small") + -ish (verb) → to make smaller.',
      zh: 'di-（分离）+ min（小的）+ -ish（动词后缀）→ 使变小，即减少。',
    },
    relatedWords: ['diminished', 'diminishment', 'minor'],
  },
  {
    slug: 'minute',
    lemma: 'minute',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: { uk: { ipa: '/ˈmɪn.ɪt/' }, us: { ipa: '/ˈmɪn.ɪt/' } },
    definition: {
      en: 'A unit of time equal to sixty seconds; extremely small or insignificant.',
      zh: '分钟；微小的；详细的',
    },
    examples: [
      {
        en: ['The scientist examined the minute details of the specimen.'],
        zh: ['科学家检查了标本的微小细节。'],
      },
    ],
    rootBreakdown: [
      { surface: 'min', type: 'root', rootSlug: 'min' },
      { surface: 'ute', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'min ("small") + -ute (adj.) → very small, a small division of an hour.',
      zh: 'min（小的）+ -ute（后缀）→ 极小的；一小时的小划分。',
    },
    relatedWords: ['minor', 'minimal', 'diminish'],
  },
  {
    slug: 'prominent',
    lemma: 'prominent',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈprɒm.ɪ.nənt/' }, us: { ipa: '/ˈprɑː.mɪ.nənt/' } },
    definition: {
      en: 'Important or famous; projecting outward; easily noticeable.',
      zh: '突出的；著名的；显眼的',
    },
    examples: [
      {
        en: ['She became a prominent figure in the civil rights movement.'],
        zh: ['她成为民权运动中的杰出人物。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pro', type: 'prefix' },
      { surface: 'min', type: 'root', rootSlug: 'min' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pro- ("forward") + min ("project, jut") + -ent (adj.) → jutting forward, hence conspicuous.',
      zh: 'pro-（向前）+ min（突出）+ -ent（形容词后缀）→ 向前突出的，即显著的。',
    },
    relatedWords: ['prominence', 'preeminent'],
  },
  {
    slug: 'preeminent',
    lemma: 'preeminent',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/priːˈem.ɪ.nənt/' }, us: { ipa: '/priːˈem.ɪ.nənt/' } },
    definition: { en: 'Surpassing all others; outstanding.', zh: '卓越的；杰出的' },
    examples: [
      {
        en: ['He is the preeminent scholar in the field of quantum physics.'],
        zh: ['他是量子物理学领域最杰出的学者。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pre', type: 'prefix' },
      { surface: 'e', type: 'prefix' },
      { surface: 'min', type: 'root', rootSlug: 'min' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pre- ("before") + e- ("out") + min ("project") + -ent (adj.) → projecting out before all others.',
      zh: 'pre-（在前）+ e-（出）+ min（突出）+ -ent（形容词后缀）→ 超越所有人之上的。',
    },
    relatedWords: ['prominent', 'eminent'],
  },
];
