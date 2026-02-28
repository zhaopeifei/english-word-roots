import type { WordEntry } from '@/types/content';

export const GRAV_WORDS: WordEntry[] = [
  {
    slug: 'gravity',
    lemma: 'gravity',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈɡræv.ɪ.ti/' }, us: { ipa: '/ˈɡræv.ə.t̬i/' } },
    definition: {
      en: 'The force that attracts a body toward the center of the Earth; extreme importance or seriousness.',
      zh: '重力；引力；严重性',
    },
    examples: [
      {
        en: ['The gravity of the situation demanded immediate action.'],
        zh: ['形势的严重性要求立即采取行动。'],
      },
    ],
    rootBreakdown: [
      { surface: 'grav', type: 'root', rootSlug: 'grav' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'grav ("heavy, serious") + -ity (noun suffix) → the state of being heavy, weight or seriousness.',
      zh: 'grav（重的、严肃的）+ -ity（名词后缀）→ 沉重的状态，即重力或严重性。',
    },
    relatedWords: ['gravitate', 'gravitational', 'grave'],
  },
  {
    slug: 'grave',
    lemma: 'grave',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: { uk: { ipa: '/ɡreɪv/' }, us: { ipa: '/ɡreɪv/' } },
    definition: {
      en: 'A place of burial; giving cause for alarm or concern; serious.',
      zh: '坟墓；严重的；庄严的',
    },
    examples: [
      {
        en: ['The doctor wore a grave expression as she delivered the news.'],
        zh: ['医生带着严肃的表情传达了这个消息。'],
      },
    ],
    rootBreakdown: [
      { surface: 'grav', type: 'root', rootSlug: 'grav' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From grav ("heavy, serious") + -e → heavy, weighty in meaning; also a heavy resting place.',
      zh: '源自 grav（重的、严肃的）+ -e → 沉重的、意义深重的；也指沉重的安息之所。',
    },
    relatedWords: ['gravity', 'gravitate', 'aggravate'],
  },
  {
    slug: 'gravitate',
    lemma: 'gravitate',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ˈɡræv.ɪ.teɪt/' }, us: { ipa: '/ˈɡræv.ɪ.teɪt/' } },
    definition: {
      en: 'To move or be attracted toward something; to be drawn by gravity.',
      zh: '受引力吸引；被吸引',
    },
    examples: [
      {
        en: ['Students naturally gravitate toward subjects they find interesting.'],
        zh: ['学生们自然而然地被自己感兴趣的科目所吸引。'],
      },
    ],
    rootBreakdown: [
      { surface: 'grav', type: 'root', rootSlug: 'grav' },
      { surface: 'it', type: 'connector' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'grav ("heavy, pull") + -it- + -ate (verb) → to be pulled toward, to be attracted.',
      zh: 'grav（重的、拉力）+ -it- + -ate（动词后缀）→ 被拉向，即被吸引。',
    },
    relatedWords: ['gravity', 'gravitation', 'gravitational'],
  },
  {
    slug: 'gravitational',
    lemma: 'gravitational',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˌɡræv.ɪˈteɪ.ʃən.əl/' }, us: { ipa: '/ˌɡræv.ɪˈteɪ.ʃən.əl/' } },
    definition: { en: 'Relating to or caused by gravity.', zh: '引力的；万有引力的' },
    examples: [
      {
        en: ["The moon's gravitational pull causes ocean tides on Earth."],
        zh: ['月球的引力导致了地球上的海洋潮汐。'],
      },
    ],
    rootBreakdown: [
      { surface: 'grav', type: 'root', rootSlug: 'grav' },
      { surface: 'it', type: 'connector' },
      { surface: 'ation', type: 'suffix' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'gravitation + -al (adjective) → relating to gravitational force.',
      zh: 'gravitation（引力）+ -al（形容词后缀）→ 与引力相关的。',
    },
    relatedWords: ['gravity', 'gravitate', 'gravitation'],
  },
  {
    slug: 'aggravate',
    lemma: 'aggravate',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ˈæɡ.rə.veɪt/' }, us: { ipa: '/ˈæɡ.rə.veɪt/' } },
    definition: {
      en: 'To make a problem or situation worse; to annoy or exasperate.',
      zh: '加重；使恶化；激怒',
    },
    examples: [
      { en: ['Smoking can aggravate respiratory conditions.'], zh: ['吸烟会加重呼吸系统疾病。'] },
    ],
    rootBreakdown: [
      { surface: 'ag', type: 'prefix' },
      { surface: 'grav', type: 'root', rootSlug: 'grav' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ag- (from ad-, "to") + grav ("heavy") + -ate (verb) → to make heavier, to worsen.',
      zh: 'ag-（源自 ad-，向）+ grav（重的）+ -ate（动词后缀）→ 使更重，即加重。',
    },
    relatedWords: ['aggravation', 'gravity', 'grave'],
  },
  {
    slug: 'grief',
    lemma: 'grief',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ɡriːf/' }, us: { ipa: '/ɡriːf/' } },
    definition: { en: "Intense sorrow, especially caused by someone's death.", zh: '悲伤；悲痛' },
    examples: [
      {
        en: ['She was overcome with grief after losing her mother.'],
        zh: ['失去母亲后，她被悲痛所笼罩。'],
      },
    ],
    rootBreakdown: [{ surface: 'grief', type: 'root', rootSlug: 'grav' }],
    morphologyNote: {
      en: 'From grav ("heavy") via Old French grief → a heavy feeling, deep sorrow.',
      zh: '源自 grav（重的），经古法语 grief → 沉重的感受，即悲痛。',
    },
    relatedWords: ['grieve', 'grave', 'gravity'],
  },
  {
    slug: 'grieve',
    lemma: 'grieve',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ɡriːv/' }, us: { ipa: '/ɡriːv/' } },
    definition: { en: 'To feel intense sorrow; to mourn.', zh: '悲伤；哀悼' },
    examples: [
      {
        en: ['The whole nation grieved the loss of the beloved leader.'],
        zh: ['全国哀悼这位敬爱的领导人的逝世。'],
      },
    ],
    rootBreakdown: [{ surface: 'grieve', type: 'root', rootSlug: 'grav' }],
    morphologyNote: {
      en: 'From grav ("heavy") via Old French grever → to be heavy with sorrow.',
      zh: '源自 grav（重的），经古法语 grever → 因悲伤而沉重。',
    },
    relatedWords: ['grief', 'grave', 'aggravate'],
  },
];
