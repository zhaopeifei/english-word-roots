import type { WordEntry } from '@/types/content';

export const PATH_WORDS: WordEntry[] = [
  {
    slug: 'patient',
    lemma: 'patient',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: { uk: { ipa: '/ˈpeɪ.ʃənt/' }, us: { ipa: '/ˈpeɪ.ʃənt/' } },
    definition: {
      en: 'Able to wait without becoming annoyed; a person receiving medical treatment.',
      zh: '耐心的；病人',
    },
    examples: [
      {
        en: ['You need to be patient — good things take time.'],
        zh: ['你需要有耐心——好事需要时间。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pat', type: 'root', rootSlug: 'path' },
      { surface: 'ient', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pat (variant of path, "suffer, endure") + -ient (adj.) → one who endures, hence tolerant or one who suffers illness.',
      zh: 'pat（path 的变体，承受）+ -ient（后缀）→ 能承受的人，即耐心的或病人。',
    },
    relatedWords: ['patience', 'impatient'],
  },
  {
    slug: 'patience',
    lemma: 'patience',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈpeɪ.ʃəns/' }, us: { ipa: '/ˈpeɪ.ʃəns/' } },
    definition: {
      en: 'The capacity to accept delay or trouble without getting angry.',
      zh: '耐心；忍耐',
    },
    examples: [
      {
        en: ['Teaching young children requires a great deal of patience.'],
        zh: ['教小孩子需要极大的耐心。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pat', type: 'root', rootSlug: 'path' },
      { surface: 'ience', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pat ("suffer, endure") + -ience (noun) → the quality of enduring, forbearance.',
      zh: 'pat（承受）+ -ience（名词后缀）→ 承受的品质，即耐心。',
    },
    relatedWords: ['patient', 'impatience'],
  },
  {
    slug: 'passion',
    lemma: 'passion',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈpæʃ.ən/' }, us: { ipa: '/ˈpæʃ.ən/' } },
    definition: {
      en: 'A strong and barely controllable emotion; intense enthusiasm for something.',
      zh: '激情；热情；酷爱',
    },
    examples: [
      {
        en: ['She has a passion for painting and spends every weekend in her studio.'],
        zh: ['她对绘画充满热情，每个周末都在画室度过。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pass', type: 'root', rootSlug: 'path' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pass (variant of path, "suffer, feel") + -ion (noun) → intense feeling, strong emotion.',
      zh: 'pass（path 的变体，感受）+ -ion（名词后缀）→ 强烈的感受，即激情。',
    },
    relatedWords: ['passionate', 'compassion', 'dispassionate'],
  },
  {
    slug: 'passionate',
    lemma: 'passionate',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈpæʃ.ən.ət/' }, us: { ipa: '/ˈpæʃ.ən.ət/' } },
    definition: {
      en: 'Showing or caused by strong feelings or beliefs.',
      zh: '充满激情的；热烈的',
    },
    examples: [
      {
        en: ['He gave a passionate speech about environmental conservation.'],
        zh: ['他发表了一场关于环境保护的激情演讲。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pass', type: 'root', rootSlug: 'path' },
      { surface: 'ion', type: 'other' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'passion + -ate (adj.) → full of passion, intensely emotional.',
      zh: 'passion（激情）+ -ate（形容词后缀）→ 充满激情的。',
    },
    relatedWords: ['passion', 'dispassionate'],
  },
  {
    slug: 'compassion',
    lemma: 'compassion',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/kəmˈpæʃ.ən/' }, us: { ipa: '/kəmˈpæʃ.ən/' } },
    definition: { en: 'Sympathetic concern for the sufferings of others.', zh: '同情；怜悯' },
    examples: [
      {
        en: ['She showed great compassion for the flood victims.'],
        zh: ['她对洪水受灾者表现出极大的同情。'],
      },
    ],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'pass', type: 'root', rootSlug: 'path' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'com- ("together, with") + pass ("suffer") + -ion (noun) → to suffer with another, fellow-feeling.',
      zh: 'com-（一起）+ pass（承受）+ -ion（名词后缀）→ 与他人一起承受痛苦，即同情。',
    },
    relatedWords: ['compassionate', 'passion'],
  },
  {
    slug: 'sympathy',
    lemma: 'sympathy',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈsɪm.pə.θi/' }, us: { ipa: '/ˈsɪm.pə.θi/' } },
    definition: {
      en: "Feelings of pity and sorrow for someone else's misfortune; understanding between people.",
      zh: '同情；同感；慰问',
    },
    examples: [
      {
        en: ['We sent flowers to express our sympathy after the loss.'],
        zh: ['我们送了鲜花以表达我们的哀悼之情。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sym', type: 'prefix' },
      { surface: 'path', type: 'root', rootSlug: 'path' },
      { surface: 'y', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sym- ("together, with") + path ("feel, suffer") + -y (noun) → feeling together with, shared emotion.',
      zh: 'sym-（一起）+ path（感受）+ -y（名词后缀）→ 一起感受，即同情。',
    },
    relatedWords: ['sympathize', 'sympathetic', 'empathy'],
  },
  {
    slug: 'empathy',
    lemma: 'empathy',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈem.pə.θi/' }, us: { ipa: '/ˈem.pə.θi/' } },
    definition: {
      en: 'The ability to understand and share the feelings of another.',
      zh: '共情；同理心',
    },
    examples: [
      {
        en: ['A good counselor must have empathy for their clients.'],
        zh: ['一个好的咨询师必须对来访者有同理心。'],
      },
    ],
    rootBreakdown: [
      { surface: 'em', type: 'prefix' },
      { surface: 'path', type: 'root', rootSlug: 'path' },
      { surface: 'y', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'em- ("in") + path ("feel") + -y (noun) → feeling into, understanding another\'s feelings.',
      zh: 'em-（进入）+ path（感受）+ -y（名词后缀）→ 深入感受，即共情。',
    },
    relatedWords: ['empathize', 'empathetic', 'sympathy'],
  },
  {
    slug: 'apathy',
    lemma: 'apathy',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈæp.ə.θi/' }, us: { ipa: '/ˈæp.ə.θi/' } },
    definition: { en: 'Lack of interest, enthusiasm, or concern.', zh: '冷漠；无动于衷' },
    examples: [
      {
        en: ['Voter apathy led to the lowest turnout in decades.'],
        zh: ['选民的冷漠导致了数十年来最低的投票率。'],
      },
    ],
    rootBreakdown: [
      { surface: 'a', type: 'prefix' },
      { surface: 'path', type: 'root', rootSlug: 'path' },
      { surface: 'y', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'a- ("without") + path ("feeling") + -y (noun) → without feeling, indifference.',
      zh: 'a-（没有）+ path（感受）+ -y（名词后缀）→ 没有感受，即冷漠。',
    },
    relatedWords: ['apathetic', 'sympathy', 'empathy'],
  },
  {
    slug: 'antipathy',
    lemma: 'antipathy',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ænˈtɪp.ə.θi/' }, us: { ipa: '/ænˈtɪp.ə.θi/' } },
    definition: { en: 'A deep-seated feeling of dislike or aversion.', zh: '反感；厌恶' },
    examples: [
      {
        en: ['There was a mutual antipathy between the two rival teams.'],
        zh: ['两支对手球队之间存在相互的反感。'],
      },
    ],
    rootBreakdown: [
      { surface: 'anti', type: 'prefix' },
      { surface: 'path', type: 'root', rootSlug: 'path' },
      { surface: 'y', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'anti- ("against") + path ("feeling") + -y (noun) → feeling against, strong dislike.',
      zh: 'anti-（对抗）+ path（感受）+ -y（名词后缀）→ 对抗的感受，即反感。',
    },
    relatedWords: ['antipathetic', 'sympathy'],
  },
  {
    slug: 'pathetic',
    lemma: 'pathetic',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/pəˈθet.ɪk/' }, us: { ipa: '/pəˈθet.ɪk/' } },
    definition: { en: 'Arousing pity; miserably inadequate.', zh: '可悲的；可怜的；差劲的' },
    examples: [
      {
        en: ['His pathetic excuse failed to convince anyone.'],
        zh: ['他可悲的借口没能说服任何人。'],
      },
    ],
    rootBreakdown: [
      { surface: 'path', type: 'root', rootSlug: 'path' },
      { surface: 'etic', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'path ("feeling, suffering") + -etic (adj.) → causing feeling, arousing pity.',
      zh: 'path（感受、痛苦）+ -etic（形容词后缀）→ 引发情感的，即可悲的。',
    },
    relatedWords: ['pathos', 'sympathetic'],
  },
  {
    slug: 'compatible',
    lemma: 'compatible',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/kəmˈpæt.ɪ.bəl/' }, us: { ipa: '/kəmˈpæt̬.ə.bəl/' } },
    definition: { en: 'Able to exist or work together without conflict.', zh: '兼容的；合得来的' },
    examples: [
      {
        en: ['Make sure the software is compatible with your operating system.'],
        zh: ['确保该软件与你的操作系统兼容。'],
      },
    ],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'pat', type: 'root', rootSlug: 'path' },
      { surface: 'ible', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'com- ("together") + pat ("suffer, endure") + -ible (adj.) → able to suffer or exist together, harmonious.',
      zh: 'com-（一起）+ pat（承受）+ -ible（可…的）→ 能一起共处的，即兼容的。',
    },
    relatedWords: ['compatibility', 'incompatible'],
  },
  {
    slug: 'psychopath',
    lemma: 'psychopath',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈsaɪ.kə.pæθ/' }, us: { ipa: '/ˈsaɪ.koʊ.pæθ/' } },
    definition: {
      en: 'A person suffering from a personality disorder marked by antisocial behavior and lack of empathy.',
      zh: '精神病患者；变态者',
    },
    examples: [
      {
        en: ['The film tells the story of a dangerous psychopath on the run.'],
        zh: ['这部电影讲述了一个危险的精神变态者逃亡的故事。'],
      },
    ],
    rootBreakdown: [
      { surface: 'psycho', type: 'prefix' },
      { surface: 'path', type: 'root', rootSlug: 'path' },
    ],
    morphologyNote: {
      en: 'psycho- ("mind, soul") + path ("suffering, disease") → one whose mind suffers, a person with a mental disorder.',
      zh: 'psycho-（心灵）+ path（疾病）→ 心灵有疾病的人，即精神病患者。',
    },
    relatedWords: ['psychopathy', 'sociopath'],
  },
];
