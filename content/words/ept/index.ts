import type { WordEntry } from '@/types/content';

export const EPT_WORDS: WordEntry[] = [
  {
    slug: 'adapt',
    lemma: 'adapt',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/əˈdæpt/' }, us: { ipa: '/əˈdæpt/' } },
    definition: { en: 'To adjust to new conditions or circumstances.', zh: '适应；改编' },
    examples: [
      {
        en: ['Animals must adapt to changing environments to survive.'],
        zh: ['动物必须适应变化的环境才能生存。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ad', type: 'prefix' },
      { surface: 'apt', type: 'root', rootSlug: 'apt' },
    ],
    morphologyNote: {
      en: 'ad- ("to") + apt (variant form related to ept, "fit") → to make fit, to adjust.',
      zh: 'ad-（向）+ apt（与 ept 相关的变体，适合）→ 使适合，即适应。',
    },
    relatedWords: ['adaptive', 'adaptable', 'adaptation'],
  },
  {
    slug: 'adaptive',
    lemma: 'adaptive',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/əˈdæp.tɪv/' }, us: { ipa: '/əˈdæp.tɪv/' } },
    definition: { en: 'Relating to or characterized by adaptation.', zh: '适应性的；自适应的' },
    examples: [
      {
        en: ["Adaptive learning software adjusts to each student's level."],
        zh: ['自适应学习软件会根据每个学生的水平进行调整。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ad', type: 'prefix' },
      { surface: 'apt', type: 'root', rootSlug: 'apt' },
      { surface: 'ive', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ad- ("to") + apt ("fit") + -ive (adjective) → tending to fit, adaptive.',
      zh: 'ad-（向）+ apt（适合）+ -ive（形容词后缀）→ 倾向于适应的。',
    },
    relatedWords: ['adapt', 'adaptable', 'adaptation'],
  },
  {
    slug: 'adaptable',
    lemma: 'adaptable',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/əˈdæp.tə.bəl/' }, us: { ipa: '/əˈdæp.tə.bəl/' } },
    definition: { en: 'Able to adjust to new conditions easily.', zh: '能适应的；适应性强的' },
    examples: [
      {
        en: ['An adaptable worker thrives in a fast-changing industry.'],
        zh: ['适应性强的员工在快速变化的行业中蓬勃发展。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ad', type: 'prefix' },
      { surface: 'apt', type: 'root', rootSlug: 'apt' },
      { surface: 'able', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ad- ("to") + apt ("fit") + -able ("able to be") → able to be fitted to new conditions.',
      zh: 'ad-（向）+ apt（适合）+ -able（能够）→ 能够适应新条件的。',
    },
    relatedWords: ['adapt', 'adaptive', 'adaptability'],
  },
  {
    slug: 'adept',
    lemma: 'adept',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: { uk: { ipa: '/əˈdept/' }, us: { ipa: '/əˈdept/' } },
    definition: { en: 'Very skilled or proficient at something.', zh: '熟练的；内行的' },
    examples: [
      {
        en: ['She is adept at solving complex mathematical problems.'],
        zh: ['她擅长解决复杂的数学问题。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ad', type: 'prefix' },
      { surface: 'ept', type: 'root', rootSlug: 'apt' },
    ],
    morphologyNote: {
      en: 'ad- ("to, thoroughly") + ept (variant of apt, "fit, skilled") → thoroughly fit, highly skilled.',
      zh: 'ad-（彻底地）+ ept（apt 的变体，适合、熟练）→ 非常适合的，即熟练的。',
    },
    relatedWords: ['adapt', 'adeptly', 'adeptness'],
  },
  {
    slug: 'adopt',
    lemma: 'adopt',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/əˈdɒpt/' }, us: { ipa: '/əˈdɑːpt/' } },
    definition: {
      en: "To legally take another's child as one's own; to take up or follow an idea or practice.",
      zh: '收养；采用；采纳',
    },
    examples: [
      {
        en: ['The company adopted a new strategy to boost sales.'],
        zh: ['公司采纳了一项新策略来提高销售额。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ad', type: 'prefix' },
      { surface: 'opt', type: 'root', rootSlug: 'apt' },
    ],
    morphologyNote: {
      en: 'ad- ("to") + opt (variant related to apt, "choose, fit") → to choose as one\'s own, to take up.',
      zh: 'ad-（向）+ opt（与 apt 相关的变体，选择、适合）→ 选为己有，即收养或采纳。',
    },
    relatedWords: ['adapt', 'adoption', 'adept'],
  },
];
