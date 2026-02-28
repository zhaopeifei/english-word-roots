import type { WordEntry } from '@/types/content';

export const MAIN_WORDS: WordEntry[] = [
  {
    slug: 'remain',
    lemma: 'remain',
    partOfSpeech: ['vi.'],
    pronunciation: { uk: { ipa: '/rɪˈmeɪn/' }, us: { ipa: '/rɪˈmeɪn/' } },
    definition: {
      en: 'To continue to exist or stay in the same place or condition.',
      zh: '保持；依然；留下；剩余',
    },
    examples: [
      {
        en: ['A few questions remain unanswered after the investigation.'],
        zh: ['调查之后仍有几个问题未得到解答。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'main', type: 'root', rootSlug: 'main' },
    ],
    morphologyNote: {
      en: 're- ("back") + main ("stay") → to stay back, to continue to be present.',
      zh: 're-（回）+ main（停留）→ 留下来，即保持、剩余。',
    },
    relatedWords: ['remains', 'remnant', 'remainder'],
  },
  {
    slug: 'permanent',
    lemma: 'permanent',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈpɜː.mə.nənt/' }, us: { ipa: '/ˈpɝː.mə.nənt/' } },
    definition: {
      en: 'Lasting or intended to last indefinitely; not temporary.',
      zh: '永久的；持久的；不变的',
    },
    examples: [
      {
        en: ['She finally found a permanent job after years of freelancing.'],
        zh: ['经过多年的自由职业后，她终于找到了一份固定工作。'],
      },
    ],
    rootBreakdown: [
      { surface: 'per', type: 'prefix' },
      { surface: 'man', type: 'root', rootSlug: 'main' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'per- ("through, completely") + man (variant of main, "stay") + -ent (adj.) → staying throughout, hence lasting.',
      zh: 'per-（完全地）+ man（main 的变体，停留）+ -ent（形容词后缀）→ 完全停留的，即永久的。',
    },
    relatedWords: ['permanently', 'permanency', 'impermanent'],
  },
  {
    slug: 'mansion',
    lemma: 'mansion',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈmæn.ʃən/' }, us: { ipa: '/ˈmæn.ʃən/' } },
    definition: { en: 'A large, impressive house.', zh: '大厦；宅邸；公馆' },
    examples: [
      {
        en: ['The governor lives in a grand mansion on the hilltop.'],
        zh: ['州长住在山顶上的一座大宅里。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mans', type: 'root', rootSlug: 'main' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mans (variant of main, "stay, dwell") + -ion (noun) → a dwelling place, a grand residence.',
      zh: 'mans（main 的变体，停留、居住）+ -ion（名词后缀）→ 居住的地方，即宅邸。',
    },
    relatedWords: ['manor', 'remain', 'permanent'],
  },
  {
    slug: 'manor',
    lemma: 'manor',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈmæn.ər/' }, us: { ipa: '/ˈmæn.ɚ/' } },
    definition: { en: 'A large country house with lands; a feudal estate.', zh: '庄园；领地' },
    examples: [
      {
        en: ['The family has owned this manor for over three centuries.'],
        zh: ['这个家族拥有这座庄园已超过三个世纪。'],
      },
    ],
    rootBreakdown: [
      { surface: 'man', type: 'root', rootSlug: 'main' },
      { surface: 'or', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'man (variant of main, "stay") + -or (noun) → a place where one stays, a landed estate.',
      zh: 'man（main 的变体，停留）+ -or（名词后缀）→ 停留居住之所，即庄园。',
    },
    relatedWords: ['mansion', 'manorial', 'permanent'],
  },
  {
    slug: 'remnant',
    lemma: 'remnant',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: { uk: { ipa: '/ˈrem.nənt/' }, us: { ipa: '/ˈrem.nənt/' } },
    definition: {
      en: 'A small remaining quantity of something; a piece of cloth left over.',
      zh: '剩余；残余；残片',
    },
    examples: [
      {
        en: ['Only remnants of the ancient wall still stand today.'],
        zh: ['古城墙如今只剩下断壁残垣。'],
      },
    ],
    rootBreakdown: [
      { surface: 'remn', type: 'root', rootSlug: 'main' },
      { surface: 'ant', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'remn (variant of remain, "stay") + -ant (noun/adj.) → that which stays behind, a leftover.',
      zh: 'remn（remain 的变体，留下）+ -ant（名词/形容词后缀）→ 留在后面的，即残余。',
    },
    relatedWords: ['remain', 'remains'],
  },
  {
    slug: 'emanate',
    lemma: 'emanate',
    partOfSpeech: ['vi.', 'vt.'],
    pronunciation: { uk: { ipa: '/ˈem.ə.neɪt/' }, us: { ipa: '/ˈem.ə.neɪt/' } },
    definition: { en: 'To originate from; to spread out from a source.', zh: '散发；发出；产生' },
    examples: [
      {
        en: ['A strong smell of garlic emanated from the kitchen.'],
        zh: ['一股浓烈的蒜味从厨房散发出来。'],
      },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'man', type: 'root', rootSlug: 'main' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'e- ("out") + man (variant of main, "stay, flow") + -ate (verb) → to flow out from, to originate.',
      zh: 'e-（出）+ man（main 的变体，停留、流出）+ -ate（动词后缀）→ 流出，即散发。',
    },
    relatedWords: ['remain', 'immanent'],
  },
  {
    slug: 'immanent',
    lemma: 'immanent',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈɪm.ə.nənt/' }, us: { ipa: '/ˈɪm.ə.nənt/' } },
    definition: { en: 'Existing or operating within; inherent.', zh: '内在的；固有的' },
    examples: [
      {
        en: ['Many philosophers believe that moral law is immanent in human nature.'],
        zh: ['许多哲学家认为道德法则是人性中固有的。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'man', type: 'root', rootSlug: 'main' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- (variant of in-, "in") + man (variant of main, "stay") + -ent (adj.) → staying within, hence inherent.',
      zh: 'im-（in- 的变体，在内）+ man（main 的变体，停留）+ -ent（形容词后缀）→ 停留在内部的，即内在的。',
    },
    relatedWords: ['immanence', 'permanent', 'remain'],
  },
  {
    slug: 'impermanent',
    lemma: 'impermanent',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ɪmˈpɜː.mə.nənt/' }, us: { ipa: '/ɪmˈpɝː.mə.nənt/' } },
    definition: { en: 'Not lasting forever; temporary.', zh: '暂时的；非永久的' },
    examples: [
      {
        en: ['Buddhist philosophy teaches that all things are impermanent.'],
        zh: ['佛教哲学教导万物皆无常。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'per', type: 'prefix' },
      { surface: 'man', type: 'root', rootSlug: 'main' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- ("not") + permanent ("lasting") → not lasting, temporary.',
      zh: 'im-（不）+ permanent（永久的）→ 不永久的，即暂时的。',
    },
    relatedWords: ['impermanence', 'permanent', 'remain'],
  },
];
