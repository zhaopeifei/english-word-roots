import type { WordEntry } from '@/types/content';

export const MERG_WORDS: WordEntry[] = [
  {
    slug: 'merge',
    lemma: 'merge',
    partOfSpeech: ['vt.', 'vi.'],
    pronunciation: { uk: { ipa: '/mɜːdʒ/' }, us: { ipa: '/mɝːdʒ/' } },
    definition: { en: 'To combine or cause to combine into one.', zh: '合并；融合' },
    examples: [
      {
        en: ['The two companies decided to merge into a single entity.'],
        zh: ['两家公司决定合并为一个实体。'],
      },
    ],
    rootBreakdown: [
      { surface: 'merg', type: 'root', rootSlug: 'merg' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'merg ("sink, dip") + -e → to sink into one another, to combine.',
      zh: 'merg（沉没）+ -e → 沉入合为一体，即合并。',
    },
    relatedWords: ['emerge', 'submerge', 'immerse'],
  },
  {
    slug: 'emerge',
    lemma: 'emerge',
    partOfSpeech: ['vi.'],
    pronunciation: { uk: { ipa: '/ɪˈmɜːdʒ/' }, us: { ipa: '/ɪˈmɝːdʒ/' } },
    definition: { en: 'To come into view; to become apparent.', zh: '浮现；出现；暴露' },
    examples: [
      { en: ['New evidence emerged during the investigation.'], zh: ['调查期间出现了新证据。'] },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'merg', type: 'root', rootSlug: 'merg' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'e- ("out") + merg ("sink") → to rise out of, to come forth.',
      zh: 'e-（出）+ merg（沉没）→ 从中浮出，即出现。',
    },
    relatedWords: ['emergence', 'emergent', 'emergency'],
  },
  {
    slug: 'emergency',
    lemma: 'emergency',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ɪˈmɜː.dʒən.si/' }, us: { ipa: '/ɪˈmɝː.dʒən.si/' } },
    definition: {
      en: 'A serious unexpected situation requiring immediate action.',
      zh: '紧急情况；突发事件',
    },
    examples: [
      {
        en: ['In case of emergency, dial 911 immediately.'],
        zh: ['如遇紧急情况，请立即拨打911。'],
      },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'merg', type: 'root', rootSlug: 'merg' },
      { surface: 'ency', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'e- ("out") + merg ("rise") + -ency (noun) → something that rises out suddenly.',
      zh: 'e-（出）+ merg（升起）+ -ency（名词后缀）→ 突然冒出的事情。',
    },
    relatedWords: ['emerge', 'emergent'],
  },
  {
    slug: 'immerse',
    lemma: 'immerse',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ɪˈmɜːs/' }, us: { ipa: '/ɪˈmɝːs/' } },
    definition: {
      en: 'To dip or submerge in a liquid; to involve oneself deeply.',
      zh: '沉浸；浸入',
    },
    examples: [
      {
        en: ['She immersed herself in studying for the exam.'],
        zh: ['她全身心投入到考试复习中。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'mers', type: 'root', rootSlug: 'merg' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- ("in") + mers (variant of merg, "sink") → to sink into.',
      zh: 'im-（进入）+ mers（merg 的变体，沉没）→ 沉入其中。',
    },
    relatedWords: ['immersion', 'immersive'],
  },
  {
    slug: 'submerge',
    lemma: 'submerge',
    partOfSpeech: ['vt.', 'vi.'],
    pronunciation: { uk: { ipa: '/səbˈmɜːdʒ/' }, us: { ipa: '/səbˈmɝːdʒ/' } },
    definition: { en: 'To go or put under water; to completely cover.', zh: '淹没；浸入；沉没' },
    examples: [
      { en: ['The flood waters submerged entire villages.'], zh: ['洪水淹没了整个村庄。'] },
    ],
    rootBreakdown: [
      { surface: 'sub', type: 'prefix' },
      { surface: 'merg', type: 'root', rootSlug: 'merg' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sub- ("under") + merg ("sink") → to sink under.',
      zh: 'sub-（在下面）+ merg（沉没）→ 沉到下面，即淹没。',
    },
    relatedWords: ['submerged', 'submersible'],
  },
  {
    slug: 'immersive',
    lemma: 'immersive',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ɪˈmɜː.sɪv/' }, us: { ipa: '/ɪˈmɝː.sɪv/' } },
    definition: {
      en: 'Providing a deeply engaging experience that surrounds the user.',
      zh: '沉浸式的',
    },
    examples: [
      {
        en: ['Virtual reality offers a truly immersive gaming experience.'],
        zh: ['虚拟现实提供了真正沉浸式的游戏体验。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'mers', type: 'root', rootSlug: 'merg' },
      { surface: 'ive', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- ("in") + mers ("sink") + -ive (adj.) → tending to sink one into, deeply engaging.',
      zh: 'im-（进入）+ mers（沉没）+ -ive（形容词后缀）→ 使人沉浸其中的。',
    },
    relatedWords: ['immerse', 'immersion'],
  },
  {
    slug: 'emergent',
    lemma: 'emergent',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ɪˈmɜː.dʒənt/' }, us: { ipa: '/ɪˈmɝː.dʒənt/' } },
    definition: {
      en: 'In the process of coming into being or becoming prominent.',
      zh: '新兴的；浮现的',
    },
    examples: [
      {
        en: ['Artificial intelligence is an emergent technology reshaping industries.'],
        zh: ['人工智能是一项正在重塑行业的新兴技术。'],
      },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'merg', type: 'root', rootSlug: 'merg' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'e- ("out") + merg ("rise") + -ent (adj.) → rising out, coming into existence.',
      zh: 'e-（出）+ merg（升起）+ -ent（形容词后缀）→ 正在升起的。',
    },
    relatedWords: ['emerge', 'emergence', 'emergency'],
  },
];
