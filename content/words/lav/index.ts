import type { WordEntry } from '@/types/content';

export const LAV_WORDS: WordEntry[] = [
  {
    slug: 'lavatory',
    lemma: 'lavatory',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈlæv.ə.tri/' },
      us: { ipa: '/ˈlæv.ə.tɔːr.i/' },
    },
    definition: {
      en: 'A room or building equipped with washing and toilet facilities.',
      zh: '厕所；盥洗室',
    },
    examples: [
      {
        en: ['The lavatory on the airplane was occupied.'],
        zh: ['飞机上的洗手间有人使用。'],
      },
    ],
    rootBreakdown: [
      { surface: 'lav', type: 'root', rootSlug: 'lav' },
      { surface: 'atory', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'lav ("wash") + -atory ("place for") → a place for washing.',
      zh: 'lav（冲洗）+ -atory（场所后缀）→ 冲洗的地方，即盥洗室。',
    },
    relatedWords: ['launder', 'lavish'],
  },
  {
    slug: 'launder',
    lemma: 'launder',
    partOfSpeech: ['vt.'],
    pronunciation: {
      uk: { ipa: '/ˈlɔːn.dər/' },
      us: { ipa: '/ˈlɑːn.dɚ/' },
    },
    definition: {
      en: 'To wash clothes or linens; to transfer illegally obtained money to make it appear legitimate.',
      zh: '洗涤；洗钱',
    },
    examples: [
      {
        en: ['The criminals laundered money through a series of shell companies.'],
        zh: ['犯罪分子通过一系列空壳公司洗钱。'],
      },
    ],
    rootBreakdown: [
      { surface: 'laund', type: 'root', rootSlug: 'lav' },
      { surface: 'er', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'laund (variant of lav, "wash") + -er → to wash, extended to cleaning dirty money.',
      zh: 'laund（lav 的变体，冲洗）+ -er → 清洗，引申为洗钱。',
    },
    relatedWords: ['laundry', 'lavatory'],
  },
  {
    slug: 'laundry',
    lemma: 'laundry',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈlɔːn.dri/' },
      us: { ipa: '/ˈlɑːn.dri/' },
    },
    definition: {
      en: 'Clothes and linens that need washing; a place where clothes are washed.',
      zh: '待洗衣物；洗衣店',
    },
    examples: [
      {
        en: ['I need to do the laundry before the weekend.'],
        zh: ['我需要在周末前洗衣服。'],
      },
    ],
    rootBreakdown: [
      { surface: 'laundr', type: 'root', rootSlug: 'lav' },
      { surface: 'y', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'laundr (variant of lav, "wash") + -y (noun) → things to be washed or a washing place.',
      zh: 'laundr（lav 的变体，冲洗）+ -y（名词后缀）→ 待洗的东西或洗涤的地方。',
    },
    relatedWords: ['launder', 'lavatory'],
  },
  {
    slug: 'lavish',
    lemma: 'lavish',
    partOfSpeech: ['adj.', 'vt.'],
    pronunciation: {
      uk: { ipa: '/ˈlæv.ɪʃ/' },
      us: { ipa: '/ˈlæv.ɪʃ/' },
    },
    definition: {
      en: 'Sumptuously rich or elaborate; to bestow something in generous quantities.',
      zh: '奢华的；慷慨的；大量给予',
    },
    examples: [
      {
        en: ['The couple held a lavish wedding ceremony at a five-star hotel.'],
        zh: ['这对新人在五星级酒店举办了一场奢华的婚礼。'],
      },
    ],
    rootBreakdown: [
      { surface: 'lav', type: 'root', rootSlug: 'lav' },
      { surface: 'ish', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'lav ("wash, pour") + -ish (adj.) → pouring forth abundantly, hence extravagant.',
      zh: 'lav（冲洗、倾泻）+ -ish（形容词后缀）→ 大量倾泻的，即奢华的、慷慨的。',
    },
    relatedWords: ['lavishly', 'lavishness'],
  },
  {
    slug: 'dilute',
    lemma: 'dilute',
    partOfSpeech: ['vt.', 'adj.'],
    pronunciation: {
      uk: { ipa: '/daɪˈluːt/' },
      us: { ipa: '/daɪˈluːt/' },
    },
    definition: {
      en: 'To make a liquid thinner or weaker by adding water or another substance.',
      zh: '稀释；冲淡；削弱',
    },
    examples: [
      {
        en: ['You should dilute the concentrate with three parts water.'],
        zh: ['你应该用三份水稀释浓缩液。'],
      },
    ],
    rootBreakdown: [
      { surface: 'di', type: 'prefix' },
      { surface: 'lut', type: 'root', rootSlug: 'lav' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'di- (variant of dis-, "away") + lut (variant of lav, "wash") → to wash away, hence to weaken.',
      zh: 'di-（dis- 的变体，离开）+ lut（lav 的变体，冲洗）→ 冲洗掉，即稀释。',
    },
    relatedWords: ['dilution', 'diluted', 'undiluted'],
  },
  {
    slug: 'deluge',
    lemma: 'deluge',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: {
      uk: { ipa: '/ˈdel.juːdʒ/' },
      us: { ipa: '/ˈdel.juːdʒ/' },
    },
    definition: {
      en: 'A great flood of water; an overwhelming amount of something.',
      zh: '洪水；大量涌来的事物',
    },
    examples: [
      {
        en: ['The company received a deluge of complaints after the product recall.'],
        zh: ['产品召回后，公司收到了大量投诉。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'lug', type: 'root', rootSlug: 'lav' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'de- ("away, off") + lug (variant of lav, "wash") → a washing away, a flood.',
      zh: 'de-（向下）+ lug（lav 的变体，冲洗）→ 冲刷而下，即洪水。',
    },
    relatedWords: ['dilute', 'lavish'],
  },
  {
    slug: 'lava',
    lemma: 'lava',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈlɑː.və/' },
      us: { ipa: '/ˈlɑː.və/' },
    },
    definition: {
      en: 'Hot molten or semi-fluid rock erupted from a volcano.',
      zh: '熔岩；火山岩',
    },
    examples: [
      {
        en: ['The lava flowed down the mountainside, destroying everything in its path.'],
        zh: ['熔岩从山坡上流下，摧毁了沿途一切。'],
      },
    ],
    rootBreakdown: [
      { surface: 'lav', type: 'root', rootSlug: 'lav' },
      { surface: 'a', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'lav ("wash, flow") + -a → that which flows, volcanic rock that pours out.',
      zh: 'lav（冲洗、流动）+ -a → 流淌之物，即火山喷出的熔岩。',
    },
    relatedWords: ['avalanche', 'lavish'],
  },
  {
    slug: 'ablution',
    lemma: 'ablution',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/əˈbluː.ʃən/' },
      us: { ipa: '/əˈbluː.ʃən/' },
    },
    definition: {
      en: 'The act of washing oneself, especially as a religious ritual.',
      zh: '沐浴；洗礼仪式',
    },
    examples: [
      {
        en: ['The monks performed their morning ablutions before prayer.'],
        zh: ['僧侣们在祈祷前进行了晨间沐浴仪式。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ab', type: 'prefix' },
      { surface: 'lut', type: 'root', rootSlug: 'lav' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ab- ("away") + lut (variant of lav, "wash") + -ion (noun) → a washing away, ritual cleansing.',
      zh: 'ab-（去除）+ lut（lav 的变体，冲洗）+ -ion（名词后缀）→ 洗去，即沐浴仪式。',
    },
    relatedWords: ['lavatory', 'dilute', 'lotion'],
  },
  {
    slug: 'lotion',
    lemma: 'lotion',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈləʊ.ʃən/' },
      us: { ipa: '/ˈloʊ.ʃən/' },
    },
    definition: {
      en: 'A thick smooth liquid applied to the skin for medicinal or cosmetic purposes.',
      zh: '护肤液；润肤乳',
    },
    examples: [
      {
        en: ['Apply sunscreen lotion before going to the beach.'],
        zh: ['去海滩前涂防晒乳。'],
      },
    ],
    rootBreakdown: [
      { surface: 'lot', type: 'root', rootSlug: 'lav' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'lot (variant of lav, "wash") + -ion (noun) → something for washing, a liquid preparation.',
      zh: 'lot（lav 的变体，冲洗）+ -ion（名词后缀）→ 用于冲洗的东西，即护肤液。',
    },
    relatedWords: ['ablution', 'lavatory', 'dilute'],
  },
  {
    slug: 'avalanche',
    lemma: 'avalanche',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈæv.əl.ɑːnʃ/' },
      us: { ipa: '/ˈæv.əl.æntʃ/' },
    },
    definition: {
      en: 'A mass of snow, ice, and rocks falling rapidly down a mountainside.',
      zh: '雪崩；大量涌来',
    },
    examples: [
      {
        en: ['The hikers were warned of possible avalanches in the area.'],
        zh: ['登山者被警告该地区可能发生雪崩。'],
      },
    ],
    rootBreakdown: [
      { surface: 'a', type: 'prefix' },
      { surface: 'val', type: 'other' },
      { surface: 'anche', type: 'root', rootSlug: 'lav' },
    ],
    morphologyNote: {
      en: 'From French avalanche, related to lav ("wash, slide down") → a mass sliding and washing down.',
      zh: '源自法语 avalanche，与 lav（冲洗、滑落）相关 → 大量滑落冲下，即雪崩。',
    },
    relatedWords: ['deluge', 'lava'],
  },
];
