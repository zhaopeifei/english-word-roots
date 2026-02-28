import type { WordEntry } from '@/types/content';

export const CIRC_WORDS: WordEntry[] = [
  {
    slug: 'circle',
    lemma: 'circle',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈsɜː.kəl/' },
      us: { ipa: '/ˈsɝː.kəl/' },
    },
    definition: {
      en: 'A round plane figure; a group of people with shared interests; to move around.',
      zh: '圆；圈子；盘旋',
    },
    examples: [
      {
        en: ['The children sat in a circle to listen to the story.'],
        zh: ['孩子们围坐成一圈听故事。'],
      },
    ],
    rootBreakdown: [
      { surface: 'circ', type: 'root', rootSlug: 'circ' },
      { surface: 'le', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'circ ("ring, round") + -le (diminutive suffix) → a small ring shape, a circle.',
      zh: 'circ（环、圆）+ -le（小词后缀）→ 小环形，即圆。',
    },
    relatedWords: ['circular', 'circulate', 'encircle'],
  },
  {
    slug: 'circular',
    lemma: 'circular',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈsɜː.kjʊ.lər/' },
      us: { ipa: '/ˈsɝː.kjə.lɚ/' },
    },
    definition: {
      en: 'Having the form of a circle; moving around in a circle.',
      zh: '圆形的；循环的',
    },
    examples: [
      {
        en: ['The building has a striking circular design.'],
        zh: ['这座建筑有着引人注目的圆形设计。'],
      },
    ],
    rootBreakdown: [
      { surface: 'circ', type: 'root', rootSlug: 'circ' },
      { surface: 'ul', type: 'connector' },
      { surface: 'ar', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'circ ("ring") + -ul- + -ar (adjective suffix) → shaped like a ring, round.',
      zh: 'circ（环）+ -ul- + -ar（形容词后缀）→ 像环一样的形状，即圆形的。',
    },
    relatedWords: ['circle', 'circulate', 'semicircular'],
  },
  {
    slug: 'circulate',
    lemma: 'circulate',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˈsɜː.kjʊ.leɪt/' },
      us: { ipa: '/ˈsɝː.kjə.leɪt/' },
    },
    definition: {
      en: 'To move continuously through a closed system; to pass from person to person.',
      zh: '循环；流通；传播',
    },
    examples: [
      {
        en: ['Blood circulates through the body via arteries and veins.'],
        zh: ['血液通过动脉和静脉在体内循环。'],
      },
    ],
    rootBreakdown: [
      { surface: 'circ', type: 'root', rootSlug: 'circ' },
      { surface: 'ul', type: 'connector' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'circ ("ring") + -ul- + -ate (verb suffix) → to move in a ring, to go around.',
      zh: 'circ（环）+ -ul- + -ate（动词后缀）→ 沿环形运动，即循环。',
    },
    relatedWords: ['circulation', 'circular', 'circle'],
  },
  {
    slug: 'circuit',
    lemma: 'circuit',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈsɜː.kɪt/' },
      us: { ipa: '/ˈsɝː.kɪt/' },
    },
    definition: {
      en: 'A roughly circular line or route; a complete path for electrical current.',
      zh: '电路；回路；巡回',
    },
    examples: [
      {
        en: ['The electrician checked the circuit for any faults.'],
        zh: ['电工检查了电路是否有故障。'],
      },
    ],
    rootBreakdown: [
      { surface: 'circ', type: 'root', rootSlug: 'circ' },
      { surface: 'u', type: 'connector' },
      { surface: 'it', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'circ ("ring, around") + -u- + -it ("go") → to go around, a closed loop.',
      zh: 'circ（环、周围）+ -u- + -it（走）→ 绕行一周，即回路。',
    },
    relatedWords: ['circuitry', 'circuitous', 'circle'],
  },
  {
    slug: 'circumstance',
    lemma: 'circumstance',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈsɜː.kəm.stəns/' },
      us: { ipa: '/ˈsɝː.kəm.stæns/' },
    },
    definition: {
      en: 'A condition or fact connected with an event or situation.',
      zh: '情况；环境；境遇',
    },
    examples: [
      {
        en: ['Under no circumstances should you share your password.'],
        zh: ['在任何情况下都不应该分享你的密码。'],
      },
    ],
    rootBreakdown: [
      { surface: 'circum', type: 'prefix' },
      { surface: 'st', type: 'root' },
      { surface: 'ance', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'circum- (from circ, "around") + st ("stand") + -ance (noun) → what stands around, the surrounding conditions.',
      zh: 'circum-（源自 circ，周围）+ st（站立）+ -ance（名词后缀）→ 围绕着站立的东西，即环境。',
    },
    relatedWords: ['circle', 'circumference', 'circulate'],
  },
  {
    slug: 'circumference',
    lemma: 'circumference',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/səˈkʌm.fər.əns/' },
      us: { ipa: '/sɚˈkʌm.fɚ.əns/' },
    },
    definition: {
      en: 'The distance around a circular object; the boundary of a circle.',
      zh: '周长；圆周',
    },
    examples: [
      {
        en: ['The circumference of the Earth is about 40,000 kilometers.'],
        zh: ['地球的周长大约为四万公里。'],
      },
    ],
    rootBreakdown: [
      { surface: 'circum', type: 'prefix' },
      { surface: 'fer', type: 'root' },
      { surface: 'ence', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'circum- (from circ, "around") + fer ("carry") + -ence (noun) → to carry around, the distance around.',
      zh: 'circum-（源自 circ，周围）+ fer（携带）+ -ence（名词后缀）→ 绕一圈携带，即周长。',
    },
    relatedWords: ['circle', 'circular', 'circuit'],
  },
  {
    slug: 'encircle',
    lemma: 'encircle',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ɪnˈsɜː.kəl/' },
      us: { ipa: '/ɪnˈsɝː.kəl/' },
    },
    definition: {
      en: 'To form a circle around; to surround.',
      zh: '包围；环绕',
    },
    examples: [
      {
        en: ['Mountains encircle the peaceful valley.'],
        zh: ['群山环绕着宁静的山谷。'],
      },
    ],
    rootBreakdown: [
      { surface: 'en', type: 'prefix' },
      { surface: 'circ', type: 'root', rootSlug: 'circ' },
      { surface: 'le', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'en- ("make, put in") + circle (from circ, "ring") → to make a circle around, to surround.',
      zh: 'en-（使）+ circle（源自 circ，环）→ 使成环形围绕，即包围。',
    },
    relatedWords: ['circle', 'encirclement', 'circular'],
  },
  {
    slug: 'cycle',
    lemma: 'cycle',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈsaɪ.kəl/' },
      us: { ipa: '/ˈsaɪ.kəl/' },
    },
    definition: {
      en: 'A series of events that are regularly repeated in the same order; to ride a bicycle.',
      zh: '循环；周期；骑自行车',
    },
    examples: [
      {
        en: ['The water cycle is essential to life on Earth.'],
        zh: ['水循环对地球上的生命至关重要。'],
      },
    ],
    rootBreakdown: [
      { surface: 'cycl', type: 'root', rootSlug: 'circ' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'cycl (from Greek kyklos, related to circ, "circle, ring") + -e → a circular sequence, a cycle.',
      zh: 'cycl（源自希腊语 kyklos，与 circ 相关，圆、环）+ -e → 圆形序列，即循环。',
    },
    relatedWords: ['recycle', 'bicycle', 'cyclone'],
  },
  {
    slug: 'recycle',
    lemma: 'recycle',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/riːˈsaɪ.kəl/' },
      us: { ipa: '/riːˈsaɪ.kəl/' },
    },
    definition: {
      en: 'To convert waste into reusable material.',
      zh: '回收利用；再循环',
    },
    examples: [
      {
        en: ['Please recycle your plastic bottles instead of throwing them away.'],
        zh: ['请回收塑料瓶，不要扔掉。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'cycl', type: 'root', rootSlug: 'circ' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("again") + cycle (from circ, "circle") → to cycle again, to reuse materials.',
      zh: 're-（再次）+ cycle（源自 circ，循环）→ 再次循环，即回收利用。',
    },
    relatedWords: ['cycle', 'recyclable', 'circulate'],
  },
  {
    slug: 'encyclopedia',
    lemma: 'encyclopedia',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ɪnˌsaɪ.kləˈpiː.di.ə/' },
      us: { ipa: '/ɪnˌsaɪ.kləˈpiː.di.ə/' },
    },
    definition: {
      en: 'A comprehensive reference work covering all branches of knowledge.',
      zh: '百科全书',
    },
    examples: [
      {
        en: ['The online encyclopedia is used by millions of people daily.'],
        zh: ['这部在线百科全书每天被数百万人使用。'],
      },
    ],
    rootBreakdown: [
      { surface: 'en', type: 'prefix' },
      { surface: 'cyclo', type: 'root', rootSlug: 'circ' },
      { surface: 'pedia', type: 'root' },
    ],
    morphologyNote: {
      en: 'en- ("in") + cyclo (from circ, "circle, all-around") + pedia ("education") → all-around education, comprehensive knowledge.',
      zh: 'en-（在……中）+ cyclo（源自 circ，圆、全面）+ pedia（教育）→ 全面的教育，即百科全书。',
    },
    relatedWords: ['cycle', 'encyclopedic', 'circulate'],
  },
];
