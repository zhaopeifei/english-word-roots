import type { WordEntry } from '@/types/content';

export const HUM_WORDS: WordEntry[] = [
  {
    slug: 'human',
    lemma: 'human',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: { uk: { ipa: '/ˈhjuː.mən/' }, us: { ipa: '/ˈhjuː.mən/' } },
    definition: {
      en: 'A man, woman, or child; relating to or characteristic of people.',
      zh: '人；人类的',
    },
    examples: [
      {
        en: ['Human beings have the capacity for both great kindness and cruelty.'],
        zh: ['人类既有巨大的善良能力，也有残忍的一面。'],
      },
    ],
    rootBreakdown: [
      { surface: 'hum', type: 'root', rootSlug: 'hum' },
      { surface: 'an', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'hum ("earth, ground, person") + -an (adjective/noun) → of the earth, a human being.',
      zh: 'hum（土地、大地、人）+ -an（形容词/名词后缀）→ 属于大地的，即人类。',
    },
    relatedWords: ['humanity', 'humane', 'humanitarian'],
  },
  {
    slug: 'humanity',
    lemma: 'humanity',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/hjuːˈmæn.ɪ.ti/' }, us: { ipa: '/hjuːˈmæn.ə.t̬i/' } },
    definition: {
      en: 'Human beings collectively; the quality of being humane; compassion.',
      zh: '人类；人性；人道',
    },
    examples: [
      {
        en: ['The charity works to improve conditions for all of humanity.'],
        zh: ['这个慈善组织致力于改善全人类的生活条件。'],
      },
    ],
    rootBreakdown: [
      { surface: 'hum', type: 'root', rootSlug: 'hum' },
      { surface: 'an', type: 'connector' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'hum ("person") + -an- + -ity (noun suffix) → the state of being human, humankind.',
      zh: 'hum（人）+ -an- + -ity（名词后缀）→ 做人的状态，即人性或人类。',
    },
    relatedWords: ['human', 'humane', 'inhumanity'],
  },
  {
    slug: 'humane',
    lemma: 'humane',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/hjuːˈmeɪn/' }, us: { ipa: '/hjuːˈmeɪn/' } },
    definition: { en: 'Having or showing compassion or benevolence.', zh: '人道的；仁慈的' },
    examples: [
      {
        en: ['The organization advocates for the humane treatment of animals.'],
        zh: ['该组织倡导人道对待动物。'],
      },
    ],
    rootBreakdown: [
      { surface: 'hum', type: 'root', rootSlug: 'hum' },
      { surface: 'ane', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'hum ("person") + -ane (adjective) → having the best qualities of a person, compassionate.',
      zh: 'hum（人）+ -ane（形容词后缀）→ 具有人的最好品质的，即仁慈的。',
    },
    relatedWords: ['human', 'humanitarian', 'inhumane'],
  },
  {
    slug: 'humanitarian',
    lemma: 'humanitarian',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: { uk: { ipa: '/hjuːˌmæn.ɪˈteə.ri.ən/' }, us: { ipa: '/hjuːˌmæn.ɪˈter.i.ən/' } },
    definition: {
      en: 'Concerned with or seeking to promote human welfare; a person who does so.',
      zh: '人道主义的；人道主义者',
    },
    examples: [
      {
        en: ['The humanitarian crisis affected millions of refugees.'],
        zh: ['这场人道主义危机影响了数百万难民。'],
      },
    ],
    rootBreakdown: [
      { surface: 'hum', type: 'root', rootSlug: 'hum' },
      { surface: 'an', type: 'connector' },
      { surface: 'it', type: 'connector' },
      { surface: 'arian', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'humanity + -arian (one who supports) → one who supports human welfare.',
      zh: 'humanity（人性）+ -arian（支持者）→ 支持人类福祉的人。',
    },
    relatedWords: ['humanity', 'humane', 'humanitarianism'],
  },
  {
    slug: 'humble',
    lemma: 'humble',
    partOfSpeech: ['adj.', 'v.'],
    pronunciation: { uk: { ipa: '/ˈhʌm.bəl/' }, us: { ipa: '/ˈhʌm.bəl/' } },
    definition: {
      en: "Having a modest view of one's own importance; to make someone less proud.",
      zh: '谦虚的；卑微的；使谦卑',
    },
    examples: [
      {
        en: ['Despite his success, he remained humble and approachable.'],
        zh: ['尽管取得了成功，他仍然谦虚随和。'],
      },
    ],
    rootBreakdown: [
      { surface: 'hum', type: 'root', rootSlug: 'hum' },
      { surface: 'ble', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'hum ("earth, ground") + -ble (adjective suffix) → close to the ground, lowly, modest.',
      zh: 'hum（土地、大地）+ -ble（形容词后缀）→ 接近大地的，即谦卑的。',
    },
    relatedWords: ['humility', 'humbleness', 'humiliate'],
  },
  {
    slug: 'humility',
    lemma: 'humility',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/hjuːˈmɪl.ɪ.ti/' }, us: { ipa: '/hjuːˈmɪl.ə.t̬i/' } },
    definition: { en: "A modest view of one's own importance; humbleness.", zh: '谦逊；谦虚' },
    examples: [
      { en: ['True humility is a sign of inner strength.'], zh: ['真正的谦逊是内在力量的标志。'] },
    ],
    rootBreakdown: [
      { surface: 'hum', type: 'root', rootSlug: 'hum' },
      { surface: 'il', type: 'connector' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'hum ("earth, ground") + -il- + -ity (noun) → the quality of being close to the ground, modesty.',
      zh: 'hum（土地、大地）+ -il- + -ity（名词后缀）→ 接近大地的品质，即谦逊。',
    },
    relatedWords: ['humble', 'humiliate', 'humiliation'],
  },
  {
    slug: 'humiliate',
    lemma: 'humiliate',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/hjuːˈmɪl.i.eɪt/' }, us: { ipa: '/hjuːˈmɪl.i.eɪt/' } },
    definition: {
      en: 'To make someone feel ashamed and foolish by injuring their dignity.',
      zh: '羞辱；使丢脸',
    },
    examples: [
      { en: ['The bully tried to humiliate the new student.'], zh: ['那个恶霸试图羞辱新同学。'] },
    ],
    rootBreakdown: [
      { surface: 'hum', type: 'root', rootSlug: 'hum' },
      { surface: 'il', type: 'connector' },
      { surface: 'i', type: 'connector' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'hum ("earth") + -il- + -iate (verb) → to bring down to the earth, to degrade.',
      zh: 'hum（大地）+ -il- + -iate（动词后缀）→ 压到地上，即羞辱。',
    },
    relatedWords: ['humiliation', 'humble', 'humility'],
  },
  {
    slug: 'humor',
    lemma: 'humor',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈhjuː.mər/' }, us: { ipa: '/ˈhjuː.mɚ/' } },
    definition: { en: 'The quality of being amusing; a mood or state of mind.', zh: '幽默；诙谐' },
    examples: [
      {
        en: ['A good sense of humor helps people cope with stress.'],
        zh: ['良好的幽默感有助于人们应对压力。'],
      },
    ],
    rootBreakdown: [
      { surface: 'hum', type: 'root', rootSlug: 'hum' },
      { surface: 'or', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'hum ("moist, fluid") + -or (noun suffix) → originally bodily fluid (thought to affect mood), now amusement.',
      zh: 'hum（湿润的、液体）+ -or（名词后缀）→ 原指体液（被认为影响情绪），现指幽默。',
    },
    relatedWords: ['humorous', 'humorist', 'humorless'],
  },
  {
    slug: 'humid',
    lemma: 'humid',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈhjuː.mɪd/' }, us: { ipa: '/ˈhjuː.mɪd/' } },
    definition: { en: 'Having a high level of moisture in the air.', zh: '潮湿的；湿润的' },
    examples: [
      {
        en: ['The tropical climate is hot and humid throughout the year.'],
        zh: ['热带气候全年又热又潮湿。'],
      },
    ],
    rootBreakdown: [
      { surface: 'hum', type: 'root', rootSlug: 'hum' },
      { surface: 'id', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'hum ("moist, earth") + -id (adjective suffix) → moist, damp.',
      zh: 'hum（湿润的、土地）+ -id（形容词后缀）→ 湿润的。',
    },
    relatedWords: ['humidity', 'humidify', 'humidifier'],
  },
  {
    slug: 'exhume',
    lemma: 'exhume',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/eksˈhjuːm/' }, us: { ipa: '/ɪɡˈzjuːm/' } },
    definition: { en: 'To dig out something buried, especially a corpse.', zh: '掘出；发掘' },
    examples: [
      {
        en: ['The body was exhumed for a second autopsy.'],
        zh: ['尸体被挖掘出来进行第二次尸检。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'hum', type: 'root', rootSlug: 'hum' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ex- ("out of") + hum ("earth, ground") → to take out of the ground, to dig up.',
      zh: 'ex-（从……中取出）+ hum（土地、大地）→ 从地里取出，即掘出。',
    },
    relatedWords: ['exhumation', 'posthumous', 'humble'],
  },
  {
    slug: 'posthumous',
    lemma: 'posthumous',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈpɒs.tʃʊ.məs/' }, us: { ipa: '/ˈpɑːs.tʃə.məs/' } },
    definition: {
      en: 'Occurring or awarded after the death of the person concerned.',
      zh: '死后的；遗腹的',
    },
    examples: [
      {
        en: ['The artist received posthumous recognition for her work.'],
        zh: ['这位艺术家在死后获得了对其作品的认可。'],
      },
    ],
    rootBreakdown: [
      { surface: 'post', type: 'prefix' },
      { surface: 'hum', type: 'root', rootSlug: 'hum' },
      { surface: 'ous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'post- ("after") + hum ("earth, burial") + -ous (adjective) → after being put in the earth, after death.',
      zh: 'post-（在……之后）+ hum（大地、埋葬）+ -ous（形容词后缀）→ 入土之后的，即死后的。',
    },
    relatedWords: ['exhume', 'human', 'humble'],
  },
];
