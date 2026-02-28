import type { WordEntry } from '@/types/content';

export const NOMIN_WORDS: WordEntry[] = [
  {
    slug: 'name',
    lemma: 'name',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: { uk: { ipa: '/neɪm/' }, us: { ipa: '/neɪm/' } },
    definition: {
      en: 'A word by which a person, place, or thing is known; to give a name to.',
      zh: '名字；名称；命名',
    },
    examples: [
      {
        en: ['What is the name of the tallest mountain in the world?'],
        zh: ['世界上最高的山叫什么名字？'],
      },
    ],
    rootBreakdown: [{ surface: 'name', type: 'root', rootSlug: 'nomin' }],
    morphologyNote: {
      en: 'name (from the same root as nomin, "name") → what something is called.',
      zh: 'name（与 nomin 同源，名字）→ 事物被称呼的方式。',
    },
    relatedWords: ['nominal', 'nominate', 'rename'],
  },
  {
    slug: 'nominal',
    lemma: 'nominal',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈnɒm.ɪ.nəl/' }, us: { ipa: '/ˈnɑː.mɪ.nəl/' } },
    definition: {
      en: 'In name only; very small in amount; relating to a name.',
      zh: '名义上的；象征性的；微不足道的',
    },
    examples: [
      {
        en: ['They charged only a nominal fee for the service.'],
        zh: ['他们只收取了象征性的服务费。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nomin', type: 'root', rootSlug: 'nomin' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nomin ("name") + -al (adj.) → existing in name only, hence insignificant.',
      zh: 'nomin（名字）+ -al（形容词后缀）→ 仅存在于名义上的。',
    },
    relatedWords: ['nominate', 'name', 'nominally'],
  },
  {
    slug: 'nominate',
    lemma: 'nominate',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ˈnɒm.ɪ.neɪt/' }, us: { ipa: '/ˈnɑː.mɪ.neɪt/' } },
    definition: {
      en: 'To propose someone for an office or position; to name officially.',
      zh: '提名；任命',
    },
    examples: [{ en: ['The committee nominated her for the award.'], zh: ['委员会提名她获奖。'] }],
    rootBreakdown: [
      { surface: 'nomin', type: 'root', rootSlug: 'nomin' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nomin ("name") + -ate (verb) → to name for a position, to propose.',
      zh: 'nomin（名字）+ -ate（动词后缀）→ 为某职位命名，即提名。',
    },
    relatedWords: ['nomination', 'nominee', 'nominal'],
  },
  {
    slug: 'nomination',
    lemma: 'nomination',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌnɒm.ɪˈneɪ.ʃən/' }, us: { ipa: '/ˌnɑː.mɪˈneɪ.ʃən/' } },
    definition: {
      en: 'The act of proposing someone for an office, award, or honor.',
      zh: '提名；任命',
    },
    examples: [
      {
        en: ['Her nomination for Best Actress surprised many in the industry.'],
        zh: ['她获得最佳女演员提名让业界许多人感到惊讶。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nomin', type: 'root', rootSlug: 'nomin' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nomin ("name") + -ation (noun) → the act of naming for a position.',
      zh: 'nomin（名字）+ -ation（名词后缀）→ 命名的行为，即提名。',
    },
    relatedWords: ['nominate', 'nominee'],
  },
  {
    slug: 'nominee',
    lemma: 'nominee',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌnɒm.ɪˈniː/' }, us: { ipa: '/ˌnɑː.mɪˈniː/' } },
    definition: { en: 'A person who is proposed for a position or honor.', zh: '被提名者；候选人' },
    examples: [
      {
        en: ['All five nominees attended the awards ceremony.'],
        zh: ['五位被提名者全部出席了颁奖典礼。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nomin', type: 'root', rootSlug: 'nomin' },
      { surface: 'ee', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nomin ("name") + -ee (one who is) → one who is named, a candidate.',
      zh: 'nomin（名字）+ -ee（被…的人）→ 被提名的人。',
    },
    relatedWords: ['nominate', 'nomination'],
  },
  {
    slug: 'anonymous',
    lemma: 'anonymous',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/əˈnɒn.ɪ.məs/' }, us: { ipa: '/əˈnɑː.nɪ.məs/' } },
    definition: { en: 'Not identified by name; of unknown origin.', zh: '匿名的；不知名的' },
    examples: [
      {
        en: ['The donation was made by an anonymous benefactor.'],
        zh: ['捐款是由一位匿名捐赠者提供的。'],
      },
    ],
    rootBreakdown: [
      { surface: 'a', type: 'prefix' },
      { surface: 'nonym', type: 'root', rootSlug: 'nomin' },
      { surface: 'ous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'a- ("without") + nonym (variant of nomin, "name") + -ous (adj.) → without a name.',
      zh: 'a-（没有）+ nonym（nomin 的变体，名字）+ -ous（形容词后缀）→ 没有名字的，即匿名的。',
    },
    relatedWords: ['anonymity', 'pseudonym', 'synonym'],
  },
  {
    slug: 'synonym',
    lemma: 'synonymous',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/sɪˈnɒn.ɪ.məs/' }, us: { ipa: '/sɪˈnɑː.nɪ.məs/' } },
    definition: {
      en: 'Having the same or nearly the same meaning; closely associated with.',
      zh: '同义的；等同的',
    },
    examples: [
      {
        en: ["In many people's minds, Hollywood is synonymous with the film industry."],
        zh: ['在许多人心目中，好莱坞等同于电影行业。'],
      },
    ],
    rootBreakdown: [
      { surface: 'syn', type: 'prefix' },
      { surface: 'onym', type: 'root', rootSlug: 'nomin' },
      { surface: 'ous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'syn- ("together, same") + onym ("name") + -ous (adj.) → having the same name, hence having the same meaning.',
      zh: 'syn-（相同）+ onym（名字）+ -ous（形容词后缀）→ 同名的，即同义的。',
    },
    relatedWords: ['anonymous', 'pseudonym'],
  },
  {
    slug: 'pseudonym',
    lemma: 'pseudonym',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈsjuː.dən.ɪm/' }, us: { ipa: '/ˈsuː.dən.ɪm/' } },
    definition: {
      en: 'A fictitious name, especially one used by an author; a pen name.',
      zh: '笔名；假名',
    },
    examples: [
      {
        en: ['Mark Twain was the pseudonym of Samuel Clemens.'],
        zh: ['马克·吐温是塞缪尔·克莱门斯的笔名。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pseudo', type: 'prefix' },
      { surface: 'nym', type: 'root', rootSlug: 'nomin' },
    ],
    morphologyNote: {
      en: 'pseudo- ("false") + nym (variant of nomin, "name") → a false name.',
      zh: 'pseudo-（假的）+ nym（nomin 的变体，名字）→ 假名字，即笔名。',
    },
    relatedWords: ['anonymous', 'synonymous'],
  },
  {
    slug: 'ignominy',
    lemma: 'ignominy',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈɪɡ.nə.mɪn.i/' }, us: { ipa: '/ˈɪɡ.nə.mɪn.i/' } },
    definition: { en: 'Public shame or disgrace.', zh: '耻辱；不名誉' },
    examples: [
      {
        en: ['He suffered the ignominy of being fired in front of his colleagues.'],
        zh: ['他遭受了当着同事面被解雇的耻辱。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ig', type: 'prefix' },
      { surface: 'nomin', type: 'root', rootSlug: 'nomin' },
      { surface: 'y', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ig- (variant of in-, "not") + nomin ("name, repute") + -y (noun) → loss of good name, public disgrace.',
      zh: 'ig-（in- 的变体，不）+ nomin（名声）+ -y（名词后缀）→ 丧失好名声，即耻辱。',
    },
    relatedWords: ['ignominious', 'nominal'],
  },
  {
    slug: 'misnomer',
    lemma: 'misnomer',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌmɪsˈnəʊ.mər/' }, us: { ipa: '/ˌmɪsˈnoʊ.mɚ/' } },
    definition: { en: 'A wrong or inaccurate name or designation.', zh: '用词不当；误称' },
    examples: [
      {
        en: ['Calling it a smartphone is a misnomer — it is really a pocket computer.'],
        zh: ['称它为智能手机其实是一种误称——它实际上是一台口袋电脑。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mis', type: 'prefix' },
      { surface: 'nom', type: 'root', rootSlug: 'nomin' },
      { surface: 'er', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mis- ("wrong") + nom ("name") + -er → a wrong name, an inaccurate label.',
      zh: 'mis-（错误的）+ nom（名字）+ -er → 错误的名称，即误称。',
    },
    relatedWords: ['nominal', 'nominate'],
  },
  {
    slug: 'phenomenon',
    lemma: 'phenomenon',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/fɪˈnɒm.ɪ.nən/' }, us: { ipa: '/fɪˈnɑː.mɪ.nɑːn/' } },
    definition: {
      en: 'A fact or situation that is observed to exist; a remarkable person or thing.',
      zh: '现象；杰出的人或事物',
    },
    examples: [
      {
        en: ['The Northern Lights are one of the most spectacular natural phenomena.'],
        zh: ['北极光是最壮观的自然现象之一。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pheno', type: 'prefix' },
      { surface: 'men', type: 'root', rootSlug: 'nomin' },
      { surface: 'on', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pheno- ("appear, show") + menon ("that which appears") → something that appears, an observable fact.',
      zh: 'pheno-（显现）+ menon（出现的东西）→ 显现的事物，即现象。',
    },
    relatedWords: ['phenomenal'],
  },
];
