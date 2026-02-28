import type { WordEntry } from '@/types/content';

export const VAL_WORDS: WordEntry[] = [
  {
    slug: 'value',
    lemma: 'value',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈvæl.juː/' },
      us: { ipa: '/ˈvæl.juː/' },
    },
    definition: {
      en: 'The importance, worth, or usefulness of something; to consider important.',
      zh: '价值；重视；估价',
    },
    examples: [
      {
        en: ['She values honesty above all other qualities.'],
        zh: ['她把诚实看得比其他一切品质都重要。'],
      },
    ],
    rootBreakdown: [
      { surface: 'val', type: 'root', rootSlug: 'val' },
      { surface: 'ue', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'val ("be strong, be worth") + -ue (noun) → what something is worth.',
      zh: 'val（强壮、值得）+ -ue（名词后缀）→ 某物的价值。',
    },
    relatedWords: ['valuable', 'evaluate', 'valid'],
  },
  {
    slug: 'valuable',
    lemma: 'valuable',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈvæl.jʊ.ə.bəl/' },
      us: { ipa: '/ˈvæl.jə.bəl/' },
    },
    definition: {
      en: 'Worth a great deal of money or very useful.',
      zh: '有价值的；贵重的；有用的',
    },
    examples: [
      {
        en: ['Experience is the most valuable teacher.'],
        zh: ['经验是最宝贵的老师。'],
      },
    ],
    rootBreakdown: [
      { surface: 'valu', type: 'root', rootSlug: 'val' },
      { surface: 'able', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'value ("worth") + -able ("worthy of") → worthy of high regard.',
      zh: 'value（价值）+ -able（值得…的）→ 值得重视的。',
    },
    relatedWords: ['invaluable', 'value', 'evaluate'],
  },
  {
    slug: 'evaluate',
    lemma: 'evaluate',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ɪˈvæl.ju.eɪt/' },
      us: { ipa: '/ɪˈvæl.ju.eɪt/' },
    },
    definition: {
      en: 'To form an idea of the amount, number, or value of; to assess.',
      zh: '评估；评价；估算',
    },
    examples: [
      {
        en: ['Teachers evaluate student performance throughout the semester.'],
        zh: ['教师在整个学期中评估学生的表现。'],
      },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'valu', type: 'root', rootSlug: 'val' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'e- ("out") + valu ("worth") + -ate (verb) → to work out the worth of something.',
      zh: 'e-（出来）+ valu（价值）+ -ate（动词后缀）→ 算出价值，即评估。',
    },
    relatedWords: ['evaluation', 'value', 'devalue'],
  },
  {
    slug: 'valid',
    lemma: 'valid',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈvæl.ɪd/' },
      us: { ipa: '/ˈvæl.ɪd/' },
    },
    definition: {
      en: 'Having a sound basis in logic or fact; legally acceptable.',
      zh: '有效的；合理的；有根据的',
    },
    examples: [
      {
        en: ['You need a valid passport to travel abroad.'],
        zh: ['出国旅行需要有效的护照。'],
      },
    ],
    rootBreakdown: [
      { surface: 'val', type: 'root', rootSlug: 'val' },
      { surface: 'id', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'val ("strong, worthy") + -id (adj.) → strong enough to stand, i.e. sound and acceptable.',
      zh: 'val（强壮、有价值）+ -id（形容词后缀）→ 足够有力站得住的，即有效的。',
    },
    relatedWords: ['validity', 'invalid', 'validate'],
  },
  {
    slug: 'prevalent',
    lemma: 'prevalent',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈprev.əl.ənt/' },
      us: { ipa: '/ˈprev.əl.ənt/' },
    },
    definition: {
      en: 'Widespread in a particular area or at a particular time.',
      zh: '流行的；普遍的；盛行的',
    },
    examples: [
      {
        en: ['Obesity is becoming increasingly prevalent in developed countries.'],
        zh: ['肥胖在发达国家越来越普遍。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pre', type: 'prefix' },
      { surface: 'val', type: 'root', rootSlug: 'val' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pre- ("before, above") + val ("be strong") + -ent (adj.) → being strong above others, i.e. widespread.',
      zh: 'pre-（在前面）+ val（强壮）+ -ent（形容词后缀）→ 力量在前的，即普遍流行的。',
    },
    relatedWords: ['prevalence', 'prevail', 'value'],
  },
  {
    slug: 'valiant',
    lemma: 'valiant',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈvæl.i.ənt/' },
      us: { ipa: '/ˈvæl.jənt/' },
    },
    definition: {
      en: 'Possessing or showing courage and determination.',
      zh: '英勇的；勇敢的',
    },
    examples: [
      {
        en: ['The soldiers made a valiant effort to defend the city.'],
        zh: ['士兵们英勇地保卫城市。'],
      },
    ],
    rootBreakdown: [
      { surface: 'val', type: 'root', rootSlug: 'val' },
      { surface: 'iant', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'val ("be strong") + -iant (adj.) → being strong and brave.',
      zh: 'val（强壮）+ -iant（形容词后缀）→ 强壮勇敢的。',
    },
    relatedWords: ['valiantly', 'value', 'valid'],
  },
  {
    slug: 'ambivalent',
    lemma: 'ambivalent',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/æmˈbɪv.əl.ənt/' },
      us: { ipa: '/æmˈbɪv.əl.ənt/' },
    },
    definition: {
      en: 'Having mixed feelings or contradictory ideas about something.',
      zh: '矛盾的；犹豫不决的',
    },
    examples: [
      {
        en: ['She felt ambivalent about accepting the job offer.'],
        zh: ['她对是否接受这份工作感到矛盾。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ambi', type: 'prefix' },
      { surface: 'val', type: 'root', rootSlug: 'val' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ambi- ("both") + val ("be strong, have power") + -ent (adj.) → pulled strongly in both directions.',
      zh: 'ambi-（两个）+ val（强壮、有力）+ -ent（形容词后缀）→ 被两个方向用力拉扯的，即矛盾的。',
    },
    relatedWords: ['ambivalence', 'value', 'prevalent'],
  },
  {
    slug: 'invaluable',
    lemma: 'invaluable',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ɪnˈvæl.jʊ.ə.bəl/' },
      us: { ipa: '/ɪnˈvæl.jə.bəl/' },
    },
    definition: {
      en: 'Extremely useful; priceless.',
      zh: '无价的；极为宝贵的',
    },
    examples: [
      {
        en: ['Her advice has been invaluable throughout my career.'],
        zh: ['她的建议在我的整个职业生涯中都极为宝贵。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'valu', type: 'root', rootSlug: 'val' },
      { surface: 'able', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("not") + valu ("worth") + -able → not able to be valued, i.e. beyond price.',
      zh: 'in-（不）+ valu（价值）+ -able（可…的）→ 无法估量价值的，即无价的。',
    },
    relatedWords: ['valuable', 'value', 'evaluate'],
  },
];
