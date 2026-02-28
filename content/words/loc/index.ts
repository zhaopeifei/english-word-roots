import type { WordEntry } from '@/types/content';

export const LOC_WORDS: WordEntry[] = [
  {
    slug: 'local',
    lemma: 'local',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: { uk: { ipa: '/ˈləʊ.kəl/' }, us: { ipa: '/ˈloʊ.kəl/' } },
    definition: { en: 'Relating to a particular place or area.', zh: '当地的；局部的' },
    examples: [
      {
        en: ['We prefer to buy local produce from nearby farms.'],
        zh: ['我们更喜欢购买附近农场的本地农产品。'],
      },
    ],
    rootBreakdown: [
      { surface: 'loc', type: 'root', rootSlug: 'loc' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'loc ("place") + -al (adj.) → pertaining to a place.',
      zh: 'loc（地方）+ -al（形容词后缀）→ 与地方有关的。',
    },
    relatedWords: ['locally', 'locale', 'locality'],
  },
  {
    slug: 'locate',
    lemma: 'locate',
    partOfSpeech: ['vt.', 'vi.'],
    pronunciation: { uk: { ipa: '/ləʊˈkeɪt/' }, us: { ipa: '/ˈloʊ.keɪt/' } },
    definition: {
      en: 'To discover the exact position of something; to establish in a particular place.',
      zh: '定位；找到；位于',
    },
    examples: [
      { en: ['Police were unable to locate the missing child.'], zh: ['警方未能找到失踪的孩子。'] },
    ],
    rootBreakdown: [
      { surface: 'loc', type: 'root', rootSlug: 'loc' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'loc ("place") + -ate (verb) → to place, to find the place of.',
      zh: 'loc（地方）+ -ate（动词后缀）→ 确定位置，即定位。',
    },
    relatedWords: ['location', 'located', 'relocate'],
  },
  {
    slug: 'location',
    lemma: 'location',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ləʊˈkeɪ.ʃən/' }, us: { ipa: '/loʊˈkeɪ.ʃən/' } },
    definition: { en: 'A particular place or position.', zh: '位置；地点；所在地' },
    examples: [
      {
        en: ['The restaurant is in a prime location near the city center.'],
        zh: ['餐厅位于市中心附近的黄金地段。'],
      },
    ],
    rootBreakdown: [
      { surface: 'loc', type: 'root', rootSlug: 'loc' },
      { surface: 'at', type: 'other' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'loc ("place") + -ation (noun) → a specific place.',
      zh: 'loc（地方）+ -ation（名词后缀）→ 具体的地方，即位置。',
    },
    relatedWords: ['locate', 'local', 'relocate'],
  },
  {
    slug: 'allocate',
    lemma: 'allocate',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ˈæl.ə.keɪt/' }, us: { ipa: '/ˈæl.ə.keɪt/' } },
    definition: {
      en: 'To distribute resources or duties for a particular purpose.',
      zh: '分配；拨出；指派',
    },
    examples: [
      {
        en: ['The government allocated funds for disaster relief.'],
        zh: ['政府拨款用于灾难救济。'],
      },
    ],
    rootBreakdown: [
      { surface: 'al', type: 'prefix' },
      { surface: 'loc', type: 'root', rootSlug: 'loc' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'al- (variant of ad-, "to") + loc ("place") + -ate (verb) → to place toward, to assign.',
      zh: 'al-（ad- 的变体，朝向）+ loc（地方）+ -ate（动词后缀）→ 放置到某处，即分配。',
    },
    relatedWords: ['allocation', 'reallocate', 'misallocation'],
  },
  {
    slug: 'relocate',
    lemma: 'relocate',
    partOfSpeech: ['vt.', 'vi.'],
    pronunciation: { uk: { ipa: '/ˌriː.ləʊˈkeɪt/' }, us: { ipa: '/ˌriː.loʊˈkeɪt/' } },
    definition: {
      en: 'To move to a new place; to establish in a new location.',
      zh: '迁移；重新安置',
    },
    examples: [
      {
        en: ['The company decided to relocate its headquarters to Shanghai.'],
        zh: ['公司决定将总部迁往上海。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'loc', type: 'root', rootSlug: 'loc' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("again") + loc ("place") + -ate (verb) → to place again, to move to a new location.',
      zh: 're-（再次）+ loc（地方）+ -ate（动词后缀）→ 再次安置，即搬迁。',
    },
    relatedWords: ['relocation', 'locate', 'dislocate'],
  },
  {
    slug: 'dislocate',
    lemma: 'dislocate',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ˈdɪs.lə.keɪt/' }, us: { ipa: '/ˈdɪs.loʊ.keɪt/' } },
    definition: {
      en: 'To disturb the normal position of a bone or joint; to disrupt.',
      zh: '使脱臼；使混乱；扰乱',
    },
    examples: [
      {
        en: ['He dislocated his shoulder during the rugby match.'],
        zh: ['他在橄榄球比赛中肩膀脱臼了。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dis', type: 'prefix' },
      { surface: 'loc', type: 'root', rootSlug: 'loc' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dis- ("apart") + loc ("place") + -ate (verb) → to move out of place.',
      zh: 'dis-（分离）+ loc（地方）+ -ate（动词后缀）→ 离开原位，即脱臼。',
    },
    relatedWords: ['dislocation', 'locate', 'relocate'],
  },
  {
    slug: 'collocation',
    lemma: 'collocation',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌkɒl.əˈkeɪ.ʃən/' }, us: { ipa: '/ˌkɑː.ləˈkeɪ.ʃən/' } },
    definition: {
      en: 'The habitual pairing of particular words; arrangement in a specific position.',
      zh: '搭配；排列',
    },
    examples: [
      {
        en: ['Learning collocations helps you speak English more naturally.'],
        zh: ['学习搭配有助于你更自然地说英语。'],
      },
    ],
    rootBreakdown: [
      { surface: 'col', type: 'prefix' },
      { surface: 'loc', type: 'root', rootSlug: 'loc' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'col- (variant of con-, "together") + loc ("place") + -ation (noun) → placing together, a habitual combination.',
      zh: 'col-（con- 的变体，一起）+ loc（地方）+ -ation（名词后缀）→ 放在一起，即搭配。',
    },
    relatedWords: ['collocate', 'locate', 'local'],
  },
  {
    slug: 'locale',
    lemma: 'locale',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ləʊˈkɑːl/' }, us: { ipa: '/loʊˈkæl/' } },
    definition: {
      en: 'A place where something happens, especially in connection with particular events.',
      zh: '场所；现场',
    },
    examples: [
      {
        en: ['The film was shot on locale in the Italian countryside.'],
        zh: ['这部电影是在意大利乡村实地拍摄的。'],
      },
    ],
    rootBreakdown: [
      { surface: 'loc', type: 'root', rootSlug: 'loc' },
      { surface: 'ale', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'loc ("place") + -ale (noun) → a particular place, setting.',
      zh: 'loc（地方）+ -ale（名词后缀）→ 一个特定的地方，即场所。',
    },
    relatedWords: ['local', 'locate', 'locality'],
  },
  {
    slug: 'localize',
    lemma: 'localize',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ˈləʊ.kəl.aɪz/' }, us: { ipa: '/ˈloʊ.kəl.aɪz/' } },
    definition: {
      en: 'To make local; to restrict to a particular area; to adapt for a local market.',
      zh: '使本地化；使局部化',
    },
    examples: [
      {
        en: ['The company localized its software for the Chinese market.'],
        zh: ['公司将其软件本地化以适应中国市场。'],
      },
    ],
    rootBreakdown: [
      { surface: 'loc', type: 'root', rootSlug: 'loc' },
      { surface: 'al', type: 'suffix' },
      { surface: 'ize', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'loc ("place") + -al (adj.) + -ize (verb) → to make something fit a specific place.',
      zh: 'loc（地方）+ -al（形容词后缀）+ -ize（动词后缀）→ 使适合特定地方，即本地化。',
    },
    relatedWords: ['localization', 'local', 'locale'],
  },
  {
    slug: 'locomotion',
    lemma: 'locomotion',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌləʊ.kəˈməʊ.ʃən/' }, us: { ipa: '/ˌloʊ.kəˈmoʊ.ʃən/' } },
    definition: {
      en: 'Movement or the ability to move from one place to another.',
      zh: '运动；移动',
    },
    examples: [
      { en: ['Snakes have a unique form of locomotion.'], zh: ['蛇有一种独特的运动方式。'] },
    ],
    rootBreakdown: [
      { surface: 'loc', type: 'root', rootSlug: 'loc' },
      { surface: 'o', type: 'connector' },
      { surface: 'mot', type: 'root', rootSlug: 'mov' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'loc ("place") + o + mot ("move") + -ion (noun) → moving from place to place.',
      zh: 'loc（地方）+ o + mot（移动）+ -ion（名词后缀）→ 从一个地方移动到另一个地方。',
    },
    relatedWords: ['locomotive', 'locate', 'motion'],
  },
];
