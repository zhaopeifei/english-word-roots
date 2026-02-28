import type { WordEntry } from '@/types/content';

export const VAD_WORDS: WordEntry[] = [
  {
    slug: 'invade',
    lemma: 'invade',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ɪnˈveɪd/' },
      us: { ipa: '/ɪnˈveɪd/' },
    },
    definition: {
      en: 'To enter a country or territory with armed forces; to intrude upon.',
      zh: '入侵；侵略；侵犯',
    },
    examples: [
      {
        en: ['Enemy forces invaded the country at dawn.'],
        zh: ['敌军在黎明时分入侵了该国。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'vad', type: 'root', rootSlug: 'vad' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("into") + vad ("go, walk") → to go into, i.e. to enter by force.',
      zh: 'in-（进入）+ vad（走）→ 走进去，即入侵。',
    },
    relatedWords: ['invasion', 'invader', 'invasive'],
  },
  {
    slug: 'evade',
    lemma: 'evade',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ɪˈveɪd/' },
      us: { ipa: '/ɪˈveɪd/' },
    },
    definition: {
      en: 'To escape from or avoid, especially by cleverness or trickery.',
      zh: '逃避；规避；回避',
    },
    examples: [
      {
        en: ['The suspect tried to evade the police by hiding in a warehouse.'],
        zh: ['嫌疑人试图藏在仓库里躲避警察。'],
      },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'vad', type: 'root', rootSlug: 'vad' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'e- ("out, away") + vad ("go") → to go away from, i.e. to escape.',
      zh: 'e-（向外）+ vad（走）→ 走开，即逃避。',
    },
    relatedWords: ['evasion', 'evasive', 'invade'],
  },
  {
    slug: 'pervade',
    lemma: 'pervade',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/pəˈveɪd/' },
      us: { ipa: '/pɚˈveɪd/' },
    },
    definition: {
      en: 'To spread throughout; to be present and apparent throughout.',
      zh: '弥漫；渗透；遍及',
    },
    examples: [
      {
        en: ['A sense of optimism pervaded the entire organization.'],
        zh: ['一种乐观的情绪弥漫在整个组织中。'],
      },
    ],
    rootBreakdown: [
      { surface: 'per', type: 'prefix' },
      { surface: 'vad', type: 'root', rootSlug: 'vad' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'per- ("through") + vad ("go") → to go through completely.',
      zh: 'per-（穿过）+ vad（走）→ 完全穿过，即弥漫。',
    },
    relatedWords: ['pervasive', 'invade', 'evade'],
  },
  {
    slug: 'pervasive',
    lemma: 'pervasive',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/pəˈveɪ.sɪv/' },
      us: { ipa: '/pɚˈveɪ.sɪv/' },
    },
    definition: {
      en: 'Spreading widely throughout an area or group of people.',
      zh: '普遍的；弥漫的；无处不在的',
    },
    examples: [
      {
        en: ['Social media has become pervasive in modern life.'],
        zh: ['社交媒体已经渗透到现代生活的方方面面。'],
      },
    ],
    rootBreakdown: [
      { surface: 'per', type: 'prefix' },
      { surface: 'vas', type: 'root', rootSlug: 'vad' },
      { surface: 'ive', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'per- ("through") + vas (from vad, "go") + -ive (adj.) → tending to go through everything.',
      zh: 'per-（穿过）+ vas（源自 vad，走）+ -ive（形容词后缀）→ 倾向于穿透一切的。',
    },
    relatedWords: ['pervade', 'invasive', 'evasive'],
  },
  {
    slug: 'invasive',
    lemma: 'invasive',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ɪnˈveɪ.sɪv/' },
      us: { ipa: '/ɪnˈveɪ.sɪv/' },
    },
    definition: {
      en: 'Tending to spread harmfully; involving entry into the body.',
      zh: '侵入性的；入侵的',
    },
    examples: [
      {
        en: ['Invasive species threaten local biodiversity.'],
        zh: ['入侵物种威胁着当地的生物多样性。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'vas', type: 'root', rootSlug: 'vad' },
      { surface: 'ive', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("into") + vas (from vad, "go") + -ive (adj.) → tending to go into.',
      zh: 'in-（进入）+ vas（源自 vad，走）+ -ive（形容词后缀）→ 倾向于侵入的。',
    },
    relatedWords: ['invade', 'invasion', 'pervade'],
  },
  {
    slug: 'vague',
    lemma: 'vague',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/veɪɡ/' },
      us: { ipa: '/veɪɡ/' },
    },
    definition: {
      en: 'Of uncertain, indefinite, or unclear character or meaning.',
      zh: '模糊的；含糊的；不明确的',
    },
    examples: [
      {
        en: ['His instructions were too vague to follow.'],
        zh: ['他的指示太模糊了，无法执行。'],
      },
    ],
    rootBreakdown: [
      { surface: 'vag', type: 'root', rootSlug: 'vad' },
      { surface: 'ue', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From vag (related to vad, "wander, go") → wandering, hence not fixed or clear.',
      zh: '源自 vag（与 vad 走、游荡相关）→ 游荡不定的，即模糊的。',
    },
    relatedWords: ['vaguely', 'vagabond', 'vagrant'],
  },
  {
    slug: 'extravagant',
    lemma: 'extravagant',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ɪkˈstræv.ə.ɡənt/' },
      us: { ipa: '/ɪkˈstræv.ə.ɡənt/' },
    },
    definition: {
      en: 'Lacking restraint in spending money; exceeding what is reasonable.',
      zh: '奢侈的；铺张的；过度的',
    },
    examples: [
      {
        en: ['The wedding was an extravagant affair with hundreds of guests.'],
        zh: ['这场婚礼非常奢华，有数百位客人。'],
      },
    ],
    rootBreakdown: [
      { surface: 'extra', type: 'prefix' },
      { surface: 'vag', type: 'root', rootSlug: 'vad' },
      { surface: 'ant', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'extra- ("beyond") + vag (from vad, "wander") + -ant (adj.) → wandering beyond limits, i.e. excessive.',
      zh: 'extra-（超越）+ vag（源自 vad，游荡）+ -ant（形容词后缀）→ 游荡超出界限的，即奢侈的。',
    },
    relatedWords: ['extravagance', 'vague', 'vagabond'],
  },
  {
    slug: 'wade',
    lemma: 'wade',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/weɪd/' },
      us: { ipa: '/weɪd/' },
    },
    definition: {
      en: 'To walk through water or another liquid.',
      zh: '蹚水；涉水',
    },
    examples: [
      {
        en: ['We had to wade across the shallow stream.'],
        zh: ['我们不得不蹚过那条浅溪。'],
      },
    ],
    rootBreakdown: [{ surface: 'wade', type: 'root', rootSlug: 'vad' }],
    morphologyNote: {
      en: 'Cognate with Latin vadere ("to go, walk") via Grimm\'s Law → to walk through water.',
      zh: '通过格林法则与拉丁语 vadere（走）同源 → 在水中行走。',
    },
    relatedWords: ['invade', 'evade', 'pervade'],
  },
];
