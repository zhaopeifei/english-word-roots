import type { WordEntry } from '@/types/content';

export const SIM_WORDS: WordEntry[] = [
  {
    slug: 'similar',
    lemma: 'similar',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈsɪm.ɪ.lər/' },
      us: { ipa: '/ˈsɪm.ə.lɚ/' },
    },
    definition: {
      en: 'Resembling without being identical.',
      zh: '相似的；类似的',
    },
    examples: [
      {
        en: ['The two paintings are similar in style but different in color.'],
        zh: ['这两幅画风格相似，但颜色不同。'],
      },
    ],
    rootBreakdown: [
      { surface: 'simil', type: 'root', rootSlug: 'sim' },
      { surface: 'ar', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'simil (from sim, "same, like") + -ar (adj.) → being like something else.',
      zh: 'simil（源自 sim，相同、相似）+ -ar（形容词后缀）→ 与其他事物相像的。',
    },
    relatedWords: ['similarity', 'dissimilar', 'simulate'],
  },
  {
    slug: 'simple',
    lemma: 'simple',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈsɪm.pəl/' },
      us: { ipa: '/ˈsɪm.pəl/' },
    },
    definition: {
      en: 'Easily understood or done; not complicated.',
      zh: '简单的；朴素的',
    },
    examples: [
      {
        en: ['The instructions are simple and easy to follow.'],
        zh: ['说明简单，容易遵循。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sim', type: 'root', rootSlug: 'sim' },
      { surface: 'ple', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sim ("one, same") + -ple (from plicare, "fold") → having one fold, i.e. uncomplicated.',
      zh: 'sim（一、相同）+ -ple（源自 plicare，折叠）→ 只有一层折叠的，即简单的。',
    },
    relatedWords: ['simplify', 'simplistic', 'simply'],
  },
  {
    slug: 'simplify',
    lemma: 'simplify',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˈsɪm.plɪ.faɪ/' },
      us: { ipa: '/ˈsɪm.plɪ.faɪ/' },
    },
    definition: {
      en: 'To make something simpler or easier to do or understand.',
      zh: '简化；使简单',
    },
    examples: [
      {
        en: ['The new software aims to simplify the accounting process.'],
        zh: ['新软件旨在简化会计流程。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sim', type: 'root', rootSlug: 'sim' },
      { surface: 'pli', type: 'other' },
      { surface: 'fy', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'simple + -fy ("make") → to make simple.',
      zh: 'simple（简单的）+ -fy（使…）→ 使变简单。',
    },
    relatedWords: ['simple', 'simplification', 'oversimplify'],
  },
  {
    slug: 'simulate',
    lemma: 'simulate',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˈsɪm.jʊ.leɪt/' },
      us: { ipa: '/ˈsɪm.jə.leɪt/' },
    },
    definition: {
      en: 'To imitate the appearance or character of something.',
      zh: '模拟；模仿',
    },
    examples: [
      {
        en: ['The software can simulate real-world driving conditions.'],
        zh: ['该软件可以模拟真实的驾驶条件。'],
      },
    ],
    rootBreakdown: [
      { surface: 'simul', type: 'root', rootSlug: 'sim' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'simul (from sim, "same, like") + -ate (verb) → to make something seem the same.',
      zh: 'simul（源自 sim，相同）+ -ate（动词后缀）→ 使看起来相同，即模拟。',
    },
    relatedWords: ['simulation', 'simulator', 'similar'],
  },
  {
    slug: 'simultaneous',
    lemma: 'simultaneous',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˌsɪm.əlˈteɪ.ni.əs/' },
      us: { ipa: '/ˌsaɪ.məlˈteɪ.ni.əs/' },
    },
    definition: {
      en: 'Occurring or existing at the same time.',
      zh: '同时的；同步的',
    },
    examples: [
      {
        en: ['The event was broadcast with simultaneous translation.'],
        zh: ['活动配有同声传译进行转播。'],
      },
    ],
    rootBreakdown: [
      { surface: 'simul', type: 'root', rootSlug: 'sim' },
      { surface: 'tane', type: 'connector' },
      { surface: 'ous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'simul ("at the same time") + -taneous (adj.) → happening at the same time.',
      zh: 'simul（同时）+ -taneous（形容词后缀）→ 在同一时间发生的。',
    },
    relatedWords: ['simultaneously', 'simulate', 'similar'],
  },
  {
    slug: 'assimilate',
    lemma: 'assimilate',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/əˈsɪm.ɪ.leɪt/' },
      us: { ipa: '/əˈsɪm.ə.leɪt/' },
    },
    definition: {
      en: 'To absorb and integrate into a wider society or culture; to take in knowledge.',
      zh: '同化；吸收；融入',
    },
    examples: [
      {
        en: ['Immigrants often assimilate into the local culture over time.'],
        zh: ['移民通常会随着时间融入当地文化。'],
      },
    ],
    rootBreakdown: [
      { surface: 'as', type: 'prefix' },
      { surface: 'simil', type: 'root', rootSlug: 'sim' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'as- ("to") + simil ("same") + -ate (verb) → to make the same, i.e. to absorb into.',
      zh: 'as-（向）+ simil（相同）+ -ate（动词后缀）→ 使变得相同，即同化。',
    },
    relatedWords: ['assimilation', 'similar', 'simulate'],
  },
  {
    slug: 'resemble',
    lemma: 'resemble',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/rɪˈzem.bəl/' },
      us: { ipa: '/rɪˈzem.bəl/' },
    },
    definition: {
      en: 'To look or seem like something else.',
      zh: '像；类似于',
    },
    examples: [
      {
        en: ['The child closely resembles her mother.'],
        zh: ['这个孩子长得很像她妈妈。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'semble', type: 'root', rootSlug: 'sim' },
    ],
    morphologyNote: {
      en: 're- ("again, intensifier") + semble (from sim, "same, like") → to be like.',
      zh: 're-（加强语气）+ semble（源自 sim，相似）→ 相像。',
    },
    relatedWords: ['resemblance', 'assemble', 'similar'],
  },
  {
    slug: 'assemble',
    lemma: 'assemble',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/əˈsem.bəl/' },
      us: { ipa: '/əˈsem.bəl/' },
    },
    definition: {
      en: 'To come together in a group; to fit parts together.',
      zh: '集合；组装；装配',
    },
    examples: [
      {
        en: ['Workers assemble cars on the production line.'],
        zh: ['工人在生产线上组装汽车。'],
      },
    ],
    rootBreakdown: [
      { surface: 'as', type: 'prefix' },
      { surface: 'semble', type: 'root', rootSlug: 'sim' },
    ],
    morphologyNote: {
      en: 'as- ("to, together") + semble (from sim, "same") → to bring to the same place.',
      zh: 'as-（向、一起）+ semble（源自 sim，相同）→ 带到同一处，即集合、组装。',
    },
    relatedWords: ['assembly', 'reassemble', 'disassemble'],
  },
  {
    slug: 'symphony',
    lemma: 'symphony',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈsɪm.fə.ni/' },
      us: { ipa: '/ˈsɪm.fə.ni/' },
    },
    definition: {
      en: 'An elaborate musical composition for a full orchestra.',
      zh: '交响曲；交响乐',
    },
    examples: [
      {
        en: ["Beethoven's Fifth Symphony is one of the most famous works in classical music."],
        zh: ['贝多芬的第五交响曲是古典音乐中最著名的作品之一。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sym', type: 'prefix' },
      { surface: 'phon', type: 'root' },
      { surface: 'y', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sym- (from sim, "together") + phon ("sound") + -y (noun) → sounds together in harmony.',
      zh: 'sym-（源自 sim，共同）+ phon（声音）+ -y（名词后缀）→ 声音和谐地在一起。',
    },
    relatedWords: ['symphonic', 'symbiosis', 'symmetry'],
  },
  {
    slug: 'symbol',
    lemma: 'symbol',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈsɪm.bəl/' },
      us: { ipa: '/ˈsɪm.bəl/' },
    },
    definition: {
      en: 'A mark, sign, or word that represents an idea or object.',
      zh: '符号；象征',
    },
    examples: [
      {
        en: ['The dove is a symbol of peace.'],
        zh: ['鸽子是和平的象征。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sym', type: 'prefix' },
      { surface: 'bol', type: 'root' },
    ],
    morphologyNote: {
      en: 'sym- (from sim, "together") + bol ("throw") → things thrown together to represent a concept.',
      zh: 'sym-（源自 sim，共同）+ bol（投掷）→ 放在一起代表某个概念的东西。',
    },
    relatedWords: ['symbolic', 'symbolize', 'symmetry'],
  },
  {
    slug: 'symmetry',
    lemma: 'symmetry',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈsɪm.ə.tri/' },
      us: { ipa: '/ˈsɪm.ə.tri/' },
    },
    definition: {
      en: 'The quality of being made up of exactly similar parts facing each other.',
      zh: '对称；匀称',
    },
    examples: [
      {
        en: ['The building exhibits perfect bilateral symmetry.'],
        zh: ['这座建筑展现了完美的双侧对称。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sym', type: 'prefix' },
      { surface: 'metr', type: 'root' },
      { surface: 'y', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sym- (from sim, "together, same") + metr ("measure") + -y (noun) → the same measure on both sides.',
      zh: 'sym-（源自 sim，共同、相同）+ metr（测量）+ -y（名词后缀）→ 两边测量相同。',
    },
    relatedWords: ['asymmetry', 'symmetrical', 'symbol'],
  },
  {
    slug: 'synonym',
    lemma: 'synonym',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈsɪn.ə.nɪm/' },
      us: { ipa: '/ˈsɪn.ə.nɪm/' },
    },
    definition: {
      en: 'A word having the same or nearly the same meaning as another.',
      zh: '同义词',
    },
    examples: [
      {
        en: ['"Happy" and "glad" are synonyms.'],
        zh: ['"happy" 和 "glad" 是同义词。'],
      },
    ],
    rootBreakdown: [
      { surface: 'syn', type: 'prefix' },
      { surface: 'onym', type: 'root' },
    ],
    morphologyNote: {
      en: 'syn- (from sim, "same, together") + onym ("name") → the same name, i.e. a word with the same meaning.',
      zh: 'syn-（源自 sim，相同）+ onym（名字）→ 相同的名字，即同义词。',
    },
    relatedWords: ['symptom', 'symbiosis', 'similar'],
  },
  {
    slug: 'symptom',
    lemma: 'symptom',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈsɪmp.təm/' },
      us: { ipa: '/ˈsɪmp.təm/' },
    },
    definition: {
      en: 'A physical or mental sign of a disease or condition.',
      zh: '症状；征兆',
    },
    examples: [
      {
        en: ['Fever is a common symptom of infection.'],
        zh: ['发烧是感染的常见症状。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sym', type: 'prefix' },
      { surface: 'ptom', type: 'root' },
    ],
    morphologyNote: {
      en: 'sym- (from sim, "together") + ptom ("fall") → something that falls together with a disease.',
      zh: 'sym-（源自 sim，共同）+ ptom（降临）→ 与疾病一起出现的东西，即症状。',
    },
    relatedWords: ['symptomatic', 'asymptomatic', 'synonym'],
  },
];
