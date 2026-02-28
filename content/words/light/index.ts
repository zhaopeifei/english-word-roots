import type { WordEntry } from '@/types/content';

export const LIGHT_WORDS: WordEntry[] = [
  {
    slug: 'light',
    lemma: 'light',
    partOfSpeech: ['n.', 'adj.', 'v.'],
    pronunciation: {
      uk: { ipa: '/laɪt/' },
      us: { ipa: '/laɪt/' },
    },
    definition: {
      en: 'The natural agent that makes things visible; not heavy; to ignite.',
      zh: '光；轻的；点燃',
    },
    examples: [
      {
        en: ['The morning light streamed through the window.'],
        zh: ['晨光透过窗户照射进来。'],
      },
    ],
    rootBreakdown: [{ surface: 'light', type: 'root', rootSlug: 'light' }],
    morphologyNote: {
      en: 'light → from Old English leoht, meaning brightness or illumination.',
      zh: 'light → 源自古英语 leoht，意为光亮或照明。',
    },
    relatedWords: ['lighten', 'lighting', 'daylight'],
  },
  {
    slug: 'daylight',
    lemma: 'daylight',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈdeɪ.laɪt/' },
      us: { ipa: '/ˈdeɪ.laɪt/' },
    },
    definition: {
      en: 'The natural light of the day; the period of time during which there is daylight.',
      zh: '日光；白天',
    },
    examples: [
      {
        en: ['We should finish the hike before we lose daylight.'],
        zh: ['我们应该在天黑之前完成远足。'],
      },
    ],
    rootBreakdown: [
      { surface: 'day', type: 'other' },
      { surface: 'light', type: 'root', rootSlug: 'light' },
    ],
    morphologyNote: {
      en: 'day + light ("light") → the light of day, natural sunlight.',
      zh: 'day（白天）+ light（光）→ 白天的光，即日光。',
    },
    relatedWords: ['sunlight', 'moonlight', 'twilight'],
  },
  {
    slug: 'sunlight',
    lemma: 'sunlight',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈsʌn.laɪt/' },
      us: { ipa: '/ˈsʌn.laɪt/' },
    },
    definition: {
      en: 'Light from the sun.',
      zh: '阳光；日光',
    },
    examples: [
      {
        en: ['Plants need sunlight to grow through photosynthesis.'],
        zh: ['植物需要阳光通过光合作用来生长。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sun', type: 'other' },
      { surface: 'light', type: 'root', rootSlug: 'light' },
    ],
    morphologyNote: {
      en: 'sun + light ("light") → the light emitted by the sun.',
      zh: 'sun（太阳）+ light（光）→ 太阳发出的光，即阳光。',
    },
    relatedWords: ['daylight', 'moonlight', 'starlight'],
  },
  {
    slug: 'twilight',
    lemma: 'twilight',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: {
      uk: { ipa: '/ˈtwaɪ.laɪt/' },
      us: { ipa: '/ˈtwaɪ.laɪt/' },
    },
    definition: {
      en: 'The soft glowing light from the sky when the sun is below the horizon; a period of decline.',
      zh: '黄昏；薄暮；暮年',
    },
    examples: [
      {
        en: ['They walked along the beach at twilight.'],
        zh: ['他们在黄昏时分沿着海滩散步。'],
      },
    ],
    rootBreakdown: [
      { surface: 'twi', type: 'prefix' },
      { surface: 'light', type: 'root', rootSlug: 'light' },
    ],
    morphologyNote: {
      en: 'twi- ("half, between") + light ("light") → half-light, the dim light between day and night.',
      zh: 'twi-（半、之间）+ light（光）→ 半明半暗的光，即黄昏。',
    },
    relatedWords: ['daylight', 'moonlight', 'spotlight'],
  },
  {
    slug: 'spotlight',
    lemma: 'spotlight',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: {
      uk: { ipa: '/ˈspɒt.laɪt/' },
      us: { ipa: '/ˈspɑːt.laɪt/' },
    },
    definition: {
      en: 'A strong beam of light focused on a particular area; public attention.',
      zh: '聚光灯；公众注意的焦点',
    },
    examples: [
      {
        en: ['The scandal put the company in the spotlight.'],
        zh: ['丑闻使该公司成为公众关注的焦点。'],
      },
    ],
    rootBreakdown: [
      { surface: 'spot', type: 'other' },
      { surface: 'light', type: 'root', rootSlug: 'light' },
    ],
    morphologyNote: {
      en: 'spot ("a point") + light ("light") → light directed at a specific spot.',
      zh: 'spot（一个点）+ light（光）→ 聚焦于一点的光，即聚光灯。',
    },
    relatedWords: ['highlight', 'flashlight', 'searchlight'],
  },
  {
    slug: 'highlight',
    lemma: 'highlight',
    partOfSpeech: ['vt.', 'n.'],
    pronunciation: {
      uk: { ipa: '/ˈhaɪ.laɪt/' },
      us: { ipa: '/ˈhaɪ.laɪt/' },
    },
    definition: {
      en: 'To emphasize or make prominent; the most interesting or memorable part.',
      zh: '突出；强调；最精彩的部分',
    },
    examples: [
      {
        en: ['The report highlights the need for better infrastructure.'],
        zh: ['报告强调了改善基础设施的需要。'],
      },
    ],
    rootBreakdown: [
      { surface: 'high', type: 'other' },
      { surface: 'light', type: 'root', rootSlug: 'light' },
    ],
    morphologyNote: {
      en: 'high + light ("light") → to bring into high light, to make stand out.',
      zh: 'high（高）+ light（光）→ 放在高光下，即突出、强调。',
    },
    relatedWords: ['highlighter', 'spotlight', 'lighten'],
  },
  {
    slug: 'delight',
    lemma: 'delight',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: {
      uk: { ipa: '/dɪˈlaɪt/' },
      us: { ipa: '/dɪˈlaɪt/' },
    },
    definition: {
      en: 'Great pleasure; to please someone greatly.',
      zh: '高兴；愉快；使高兴',
    },
    examples: [
      {
        en: ['The children squealed with delight when they saw the presents.'],
        zh: ['孩子们看到礼物时高兴得尖叫起来。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'light', type: 'root', rootSlug: 'light' },
    ],
    morphologyNote: {
      en: 'de- (intensive) + light ("light, joy") → to fill with light and joy.',
      zh: 'de-（加强语气）+ light（光、愉悦）→ 充满光明与喜悦，即高兴。',
    },
    relatedWords: ['delighted', 'delightful', 'delightfully'],
  },
  {
    slug: 'enlighten',
    lemma: 'enlighten',
    partOfSpeech: ['vt.'],
    pronunciation: {
      uk: { ipa: '/ɪnˈlaɪ.tən/' },
      us: { ipa: '/ɪnˈlaɪ.tən/' },
    },
    definition: {
      en: 'To give someone greater knowledge and understanding; to illuminate.',
      zh: '启发；启蒙；开导',
    },
    examples: [
      {
        en: ['The documentary enlightened viewers about the effects of climate change.'],
        zh: ['这部纪录片让观众了解了气候变化的影响。'],
      },
    ],
    rootBreakdown: [
      { surface: 'en', type: 'prefix' },
      { surface: 'light', type: 'root', rootSlug: 'light' },
      { surface: 'en', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'en- ("cause to be") + light ("light") + -en (verb) → to cause to be in light, to illuminate the mind.',
      zh: 'en-（使）+ light（光）+ -en（动词后缀）→ 使处于光明中，即启发、启蒙。',
    },
    relatedWords: ['enlightenment', 'enlightened', 'enlightening'],
  },
  {
    slug: 'lighten',
    lemma: 'lighten',
    partOfSpeech: ['vt.', 'vi.'],
    pronunciation: {
      uk: { ipa: '/ˈlaɪ.tən/' },
      us: { ipa: '/ˈlaɪ.tən/' },
    },
    definition: {
      en: 'To make or become lighter in weight, color, or mood.',
      zh: '使变亮；使变轻；减轻',
    },
    examples: [
      {
        en: ['A good joke can lighten the mood in the room.'],
        zh: ['一个好笑话能缓和房间里的气氛。'],
      },
    ],
    rootBreakdown: [
      { surface: 'light', type: 'root', rootSlug: 'light' },
      { surface: 'en', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'light ("light, not heavy") + -en (verb) → to make lighter.',
      zh: 'light（光亮、轻的）+ -en（动词后缀）→ 使之变亮或变轻。',
    },
    relatedWords: ['light', 'lighter', 'enlighten'],
  },
  {
    slug: 'lightweight',
    lemma: 'lightweight',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: {
      uk: { ipa: '/ˈlaɪt.weɪt/' },
      us: { ipa: '/ˈlaɪt.weɪt/' },
    },
    definition: {
      en: 'Below average in weight; a person of little importance or influence.',
      zh: '轻量级；不重要的人',
    },
    examples: [
      {
        en: ['This laptop is popular because of its lightweight design.'],
        zh: ['这款笔记本电脑因其轻量化设计而广受欢迎。'],
      },
    ],
    rootBreakdown: [
      { surface: 'light', type: 'root', rootSlug: 'light' },
      { surface: 'weight', type: 'other' },
    ],
    morphologyNote: {
      en: 'light ("not heavy") + weight → of light weight.',
      zh: 'light（轻的）+ weight（重量）→ 重量轻的，即轻量级。',
    },
    relatedWords: ['light', 'lighten', 'ultralight'],
  },
  {
    slug: 'lighthouse',
    lemma: 'lighthouse',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈlaɪt.haʊs/' },
      us: { ipa: '/ˈlaɪt.haʊs/' },
    },
    definition: {
      en: 'A tower containing a beacon light to warn or guide ships at sea.',
      zh: '灯塔',
    },
    examples: [
      {
        en: ['The lighthouse guided the ships safely to the harbor.'],
        zh: ['灯塔引导船只安全驶入港口。'],
      },
    ],
    rootBreakdown: [
      { surface: 'light', type: 'root', rootSlug: 'light' },
      { surface: 'house', type: 'other' },
    ],
    morphologyNote: {
      en: 'light ("light") + house ("building") → a building that emits light for navigation.',
      zh: 'light（光）+ house（房子）→ 发出光的建筑，即灯塔。',
    },
    relatedWords: ['light', 'flashlight', 'searchlight'],
  },
  {
    slug: 'flashlight',
    lemma: 'flashlight',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈflæʃ.laɪt/' },
      us: { ipa: '/ˈflæʃ.laɪt/' },
    },
    definition: {
      en: 'A small portable electric light powered by batteries.',
      zh: '手电筒',
    },
    examples: [
      {
        en: ['He used a flashlight to find his way through the dark cave.'],
        zh: ['他用手电筒在漆黑的洞穴中寻路。'],
      },
    ],
    rootBreakdown: [
      { surface: 'flash', type: 'other' },
      { surface: 'light', type: 'root', rootSlug: 'light' },
    ],
    morphologyNote: {
      en: 'flash ("a sudden burst") + light ("light") → a light that can flash, a portable lamp.',
      zh: 'flash（闪光）+ light（光）→ 能闪光的灯，即手电筒。',
    },
    relatedWords: ['spotlight', 'searchlight', 'lighthouse'],
  },
];
