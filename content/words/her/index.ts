import type { WordEntry } from '@/types/content';

export const HER_WORDS: WordEntry[] = [
  {
    slug: 'inherent',
    lemma: 'inherent',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ɪnˈhɪə.rənt/' }, us: { ipa: '/ɪnˈhɪr.ənt/' } },
    definition: {
      en: 'Existing as a natural or basic part of something; intrinsic.',
      zh: '固有的；内在的',
    },
    examples: [
      {
        en: ['There are inherent risks in any kind of investment.'],
        zh: ['任何投资都有内在风险。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'her', type: 'root', rootSlug: 'her' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("in") + her ("stick, cling") + -ent (adjective) → sticking in, naturally attached.',
      zh: 'in-（在……中）+ her（粘附）+ -ent（形容词后缀）→ 粘附在其中的，即固有的。',
    },
    relatedWords: ['inhere', 'inherently', 'adhere'],
  },
  {
    slug: 'hesitate',
    lemma: 'hesitate',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ˈhez.ɪ.teɪt/' }, us: { ipa: '/ˈhez.ɪ.teɪt/' } },
    definition: {
      en: 'To pause before saying or doing something out of uncertainty.',
      zh: '犹豫；踌躇',
    },
    examples: [
      {
        en: ["Don't hesitate to ask for help if you need it."],
        zh: ['如果你需要帮助，不要犹豫，尽管开口。'],
      },
    ],
    rootBreakdown: [
      { surface: 'hes', type: 'root', rootSlug: 'her' },
      { surface: 'it', type: 'connector' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'hes (variant of her, "stick, cling") + -it- + -ate (verb) → to stick, to be unable to move forward.',
      zh: 'hes（her 的变体，粘附）+ -it- + -ate（动词后缀）→ 粘住不动，即犹豫。',
    },
    relatedWords: ['hesitation', 'hesitant', 'adhere'],
  },
  {
    slug: 'adhere',
    lemma: 'adhere',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ədˈhɪər/' }, us: { ipa: '/ədˈhɪr/' } },
    definition: {
      en: 'To stick firmly to a surface; to follow closely or faithfully.',
      zh: '粘附；坚持；遵守',
    },
    examples: [
      {
        en: ["All employees must adhere to the company's code of conduct."],
        zh: ['所有员工必须遵守公司的行为准则。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ad', type: 'prefix' },
      { surface: 'here', type: 'root', rootSlug: 'her' },
    ],
    morphologyNote: {
      en: 'ad- ("to") + here (from her, "stick") → to stick to, to hold fast.',
      zh: 'ad-（向）+ here（源自 her，粘附）→ 粘附于，即坚持。',
    },
    relatedWords: ['adherent', 'adherence', 'adhesive'],
  },
  {
    slug: 'adhesive',
    lemma: 'adhesive',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: { uk: { ipa: '/ədˈhiː.sɪv/' }, us: { ipa: '/ədˈhiː.sɪv/' } },
    definition: {
      en: 'A substance used for sticking objects together; able to stick to a surface.',
      zh: '粘合剂；有粘性的',
    },
    examples: [
      {
        en: ['Use a strong adhesive to attach the tiles to the wall.'],
        zh: ['用强力粘合剂将瓷砖粘在墙上。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ad', type: 'prefix' },
      { surface: 'hes', type: 'root', rootSlug: 'her' },
      { surface: 'ive', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ad- ("to") + hes (variant of her, "stick") + -ive (adjective/noun) → tending to stick to.',
      zh: 'ad-（向）+ hes（her 的变体，粘附）+ -ive（形容词/名词后缀）→ 倾向于粘附的。',
    },
    relatedWords: ['adhere', 'adhesion', 'cohere'],
  },
  {
    slug: 'cohere',
    lemma: 'cohere',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/kəʊˈhɪər/' }, us: { ipa: '/koʊˈhɪr/' } },
    definition: { en: 'To hold firmly together; to form a unified whole.', zh: '粘合；连贯；一致' },
    examples: [
      {
        en: ['The paragraphs need to cohere into a logical argument.'],
        zh: ['这些段落需要连贯成一个合乎逻辑的论点。'],
      },
    ],
    rootBreakdown: [
      { surface: 'co', type: 'prefix' },
      { surface: 'here', type: 'root', rootSlug: 'her' },
    ],
    morphologyNote: {
      en: 'co- (from con-, "together") + here (from her, "stick") → to stick together, to be unified.',
      zh: 'co-（源自 con-，一起）+ here（源自 her，粘附）→ 粘在一起，即连贯。',
    },
    relatedWords: ['coherent', 'coherence', 'cohesion'],
  },
  {
    slug: 'coherent',
    lemma: 'coherent',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/kəʊˈhɪə.rənt/' }, us: { ipa: '/koʊˈhɪr.ənt/' } },
    definition: {
      en: 'Logical and consistent; able to speak clearly.',
      zh: '连贯的；一致的；清晰的',
    },
    examples: [
      {
        en: ['The witness gave a coherent account of the events.'],
        zh: ['证人对事件做了连贯的陈述。'],
      },
    ],
    rootBreakdown: [
      { surface: 'co', type: 'prefix' },
      { surface: 'her', type: 'root', rootSlug: 'her' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'co- ("together") + her ("stick") + -ent (adjective) → sticking together, logically consistent.',
      zh: 'co-（一起）+ her（粘附）+ -ent（形容词后缀）→ 粘在一起的，即连贯的。',
    },
    relatedWords: ['coherence', 'incoherent', 'cohere'],
  },
  {
    slug: 'inherit',
    lemma: 'inherit',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ɪnˈher.ɪt/' }, us: { ipa: '/ɪnˈher.ɪt/' } },
    definition: {
      en: 'To receive property or a title from a predecessor; to derive genetically from a parent.',
      zh: '继承；遗传',
    },
    examples: [
      {
        en: ["She inherited her grandmother's love of music."],
        zh: ['她继承了祖母对音乐的热爱。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'her', type: 'root', rootSlug: 'her' },
      { surface: 'it', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("in") + her ("stick, cling, heir") + -it → to stick to as an heir, to receive from ancestors.',
      zh: 'in-（在……中）+ her（粘附、继承人）+ -it → 作为继承人粘附，即继承。',
    },
    relatedWords: ['inheritance', 'heir', 'heritage'],
  },
  {
    slug: 'heritage',
    lemma: 'heritage',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈher.ɪ.tɪdʒ/' }, us: { ipa: '/ˈher.ɪ.t̬ɪdʒ/' } },
    definition: {
      en: 'Property or traditions that are passed from one generation to the next.',
      zh: '遗产；传统；传承',
    },
    examples: [
      {
        en: ["The ancient temple is part of the country's cultural heritage."],
        zh: ['这座古庙是该国文化遗产的一部分。'],
      },
    ],
    rootBreakdown: [
      { surface: 'her', type: 'root', rootSlug: 'her' },
      { surface: 'it', type: 'connector' },
      { surface: 'age', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'her ("heir, inherit") + -it- + -age (noun suffix) → what is passed down, legacy.',
      zh: 'her（继承人、继承）+ -it- + -age（名词后缀）→ 传下来的东西，即遗产。',
    },
    relatedWords: ['inherit', 'heir', 'hereditary'],
  },
  {
    slug: 'heir',
    lemma: 'heir',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/eər/' }, us: { ipa: '/er/' } },
    definition: {
      en: "A person legally entitled to the property or rank of another upon that person's death.",
      zh: '继承人；后嗣',
    },
    examples: [{ en: ['The prince is the heir to the throne.'], zh: ['王子是王位的继承人。'] }],
    rootBreakdown: [{ surface: 'heir', type: 'root', rootSlug: 'her' }],
    morphologyNote: {
      en: 'From Latin heres, related to her ("stick, cling to"). One who clings to or receives the legacy.',
      zh: '源自拉丁语 heres，与 her（粘附）相关。粘附于遗产的人，即继承人。',
    },
    relatedWords: ['heiress', 'inherit', 'heritage'],
  },
  {
    slug: 'hereditary',
    lemma: 'hereditary',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/hɪˈred.ɪ.tər.i/' }, us: { ipa: '/hɪˈred.ɪ.ter.i/' } },
    definition: {
      en: 'Passed or able to be passed from parent to offspring through genes; inherited.',
      zh: '遗传的；世袭的',
    },
    examples: [
      {
        en: ['Some diseases are hereditary and run in families.'],
        zh: ['一些疾病是遗传的，会在家族中传递。'],
      },
    ],
    rootBreakdown: [
      { surface: 'her', type: 'root', rootSlug: 'her' },
      { surface: 'edit', type: 'connector' },
      { surface: 'ary', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'her ("heir") + -edit- + -ary (adjective) → of or relating to inheritance.',
      zh: 'her（继承人）+ -edit- + -ary（形容词后缀）→ 与继承有关的，即遗传的。',
    },
    relatedWords: ['heredity', 'inherit', 'heritage'],
  },
];
