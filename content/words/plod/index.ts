import type { WordEntry } from '@/types/content';

export const PLOD_WORDS: WordEntry[] = [
  {
    slug: 'applaud',
    lemma: 'applaud',
    partOfSpeech: ['vt.', 'vi.'],
    pronunciation: { uk: { ipa: '/əˈplɔːd/' }, us: { ipa: '/əˈplɔːd/' } },
    definition: {
      en: 'To show approval by clapping the hands; to express strong approval.',
      zh: '鼓掌；赞赏；称赞',
    },
    examples: [
      {
        en: ['The audience applauded enthusiastically after the performance.'],
        zh: ['演出结束后，观众热烈鼓掌。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ap', type: 'prefix' },
      { surface: 'plaud', type: 'root', rootSlug: 'plod' },
    ],
    morphologyNote: {
      en: 'ap- (variant of ad-, "to") + plaud (variant of plod, "clap, strike") → to clap toward, to show approval.',
      zh: 'ap-（ad- 的变体，向）+ plaud（plod 的变体，拍击）→ 向…拍手，即鼓掌。',
    },
    relatedWords: ['applause', 'plaudit'],
  },
  {
    slug: 'applause',
    lemma: 'applause',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/əˈplɔːz/' }, us: { ipa: '/əˈplɔːz/' } },
    definition: {
      en: 'Approval shown by clapping hands; enthusiastic praise.',
      zh: '掌声；喝彩；赞赏',
    },
    examples: [
      {
        en: ['The speaker received a standing ovation and thunderous applause.'],
        zh: ['演讲者获得了起立鼓掌和雷鸣般的掌声。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ap', type: 'prefix' },
      { surface: 'plaus', type: 'root', rootSlug: 'plod' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ap- ("to") + plaus (variant of plod, "clap") + -e → the act of clapping, approval.',
      zh: 'ap-（向）+ plaus（plod 的变体，拍击）+ -e → 拍手的行为，即掌声。',
    },
    relatedWords: ['applaud', 'plaudit'],
  },
  {
    slug: 'plaudit',
    lemma: 'plaudit',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈplɔː.dɪt/' }, us: { ipa: '/ˈplɔː.dɪt/' } },
    definition: { en: 'An expression of praise or approval; acclaim.', zh: '赞美；喝彩' },
    examples: [
      {
        en: ['The new policy won plaudits from environmental groups.'],
        zh: ['新政策赢得了环保团体的赞扬。'],
      },
    ],
    rootBreakdown: [
      { surface: 'plaud', type: 'root', rootSlug: 'plod' },
      { surface: 'it', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'plaud ("clap, approve") + -it (noun) → an act of clapping, hence praise.',
      zh: 'plaud（拍手、赞同）+ -it（名词后缀）→ 拍手的行为，即赞美。',
    },
    relatedWords: ['applaud', 'applause'],
  },
  {
    slug: 'plausible',
    lemma: 'plausible',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈplɔː.zɪ.bəl/' }, us: { ipa: '/ˈplɔː.zɪ.bəl/' } },
    definition: { en: 'Seeming reasonable or probable; convincing.', zh: '似乎合理的；看似可信的' },
    examples: [
      {
        en: ['Her explanation sounded plausible, but the evidence told a different story.'],
        zh: ['她的解释听起来似乎合理，但证据讲述了不同的故事。'],
      },
    ],
    rootBreakdown: [
      { surface: 'plaus', type: 'root', rootSlug: 'plod' },
      { surface: 'ible', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'plaus (variant of plod, "clap, approve") + -ible (adj.) → worthy of applause, hence believable.',
      zh: 'plaus（plod 的变体，拍手赞同）+ -ible（可…的）→ 值得赞同的，即可信的。',
    },
    relatedWords: ['implausible', 'plausibility'],
  },
  {
    slug: 'implausible',
    lemma: 'implausible',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ɪmˈplɔː.zɪ.bəl/' }, us: { ipa: '/ɪmˈplɔː.zɪ.bəl/' } },
    definition: {
      en: 'Not seeming reasonable or probable; hard to believe.',
      zh: '难以置信的；不合情理的',
    },
    examples: [
      {
        en: ["The movie's plot was entertaining but highly implausible."],
        zh: ['这部电影的情节很有趣，但非常不合情理。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'plaus', type: 'root', rootSlug: 'plod' },
      { surface: 'ible', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- ("not") + plaus ("approve") + -ible (adj.) → not worthy of approval, unbelievable.',
      zh: 'im-（不）+ plaus（赞同）+ -ible（可…的）→ 不值得赞同的，即不可信的。',
    },
    relatedWords: ['plausible', 'plausibility'],
  },
  {
    slug: 'explode',
    lemma: 'explode',
    partOfSpeech: ['vi.', 'vt.'],
    pronunciation: { uk: { ipa: '/ɪkˈspləʊd/' }, us: { ipa: '/ɪkˈsploʊd/' } },
    definition: {
      en: 'To burst or shatter violently; to increase suddenly and rapidly.',
      zh: '爆炸；激增；爆发',
    },
    examples: [
      {
        en: ['The bomb exploded in an empty parking lot, causing no injuries.'],
        zh: ['炸弹在空旷的停车场爆炸，没有造成人员伤亡。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'plod', type: 'root', rootSlug: 'plod' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ex- ("out") + plod ("clap, drive off stage") → originally to drive an actor off stage by clapping; later, to burst outward.',
      zh: 'ex-（出）+ plod（拍击）→ 原为拍手将演员赶下台；后引申为向外爆裂。',
    },
    relatedWords: ['explosion', 'explosive', 'implode'],
  },
  {
    slug: 'explosion',
    lemma: 'explosion',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ɪkˈspləʊ.ʒən/' }, us: { ipa: '/ɪkˈsploʊ.ʒən/' } },
    definition: {
      en: 'A violent shattering or blowing apart; a sudden outburst or rapid increase.',
      zh: '爆炸；激增；爆发',
    },
    examples: [
      {
        en: ['The population explosion has put pressure on natural resources.'],
        zh: ['人口爆炸给自然资源带来了压力。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'plos', type: 'root', rootSlug: 'plod' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ex- ("out") + plos (variant of plod, "burst") + -ion (noun) → a bursting outward.',
      zh: 'ex-（出）+ plos（plod 的变体，爆裂）+ -ion（名词后缀）→ 向外爆裂，即爆炸。',
    },
    relatedWords: ['explode', 'explosive'],
  },
  {
    slug: 'explosive',
    lemma: 'explosive',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: { uk: { ipa: '/ɪkˈspləʊ.sɪv/' }, us: { ipa: '/ɪkˈsploʊ.sɪv/' } },
    definition: {
      en: 'Able or likely to explode; a substance that can cause an explosion.',
      zh: '爆炸性的；炸药',
    },
    examples: [
      {
        en: ['The situation in the region remains explosive and unpredictable.'],
        zh: ['该地区的局势仍然是爆炸性的且不可预测。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'plos', type: 'root', rootSlug: 'plod' },
      { surface: 'ive', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ex- ("out") + plos ("burst") + -ive (adj.) → tending to burst outward.',
      zh: 'ex-（出）+ plos（爆裂）+ -ive（形容词后缀）→ 倾向于爆裂的。',
    },
    relatedWords: ['explode', 'explosion'],
  },
  {
    slug: 'implode',
    lemma: 'implode',
    partOfSpeech: ['vi.'],
    pronunciation: { uk: { ipa: '/ɪmˈpləʊd/' }, us: { ipa: '/ɪmˈploʊd/' } },
    definition: {
      en: 'To collapse violently inward; to fail suddenly and completely.',
      zh: '内爆；崩溃',
    },
    examples: [
      {
        en: ['When the old building was demolished, it imploded within seconds.'],
        zh: ['旧建筑被拆除时，几秒钟内就向内坍塌了。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'plod', type: 'root', rootSlug: 'plod' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- ("in, inward") + plod ("burst") + -e → to burst inward, the opposite of explode.',
      zh: 'im-（向内）+ plod（爆裂）+ -e → 向内爆裂，即内爆。',
    },
    relatedWords: ['implosion', 'explode'],
  },
  {
    slug: 'implosion',
    lemma: 'implosion',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ɪmˈpləʊ.ʒən/' }, us: { ipa: '/ɪmˈploʊ.ʒən/' } },
    definition: {
      en: 'An instance of collapsing violently inward; a sudden failure or collapse.',
      zh: '内爆；内部崩溃',
    },
    examples: [
      {
        en: ['The financial implosion of the company shocked the entire industry.'],
        zh: ['公司的财务崩溃震惊了整个行业。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'plos', type: 'root', rootSlug: 'plod' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- ("inward") + plos ("burst") + -ion (noun) → a bursting inward.',
      zh: 'im-（向内）+ plos（爆裂）+ -ion（名词后缀）→ 向内爆裂，即内爆。',
    },
    relatedWords: ['implode', 'explosion'],
  },
];
