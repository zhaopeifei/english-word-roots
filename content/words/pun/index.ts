import type { WordEntry } from '@/types/content';

export const PUN_WORDS: WordEntry[] = [
  {
    slug: 'punish',
    lemma: 'punish',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˈpʌn.ɪʃ/' },
      us: { ipa: '/ˈpʌn.ɪʃ/' },
    },
    definition: {
      en: 'To impose a penalty on someone for an offense.',
      zh: '惩罚；处罚',
    },
    examples: [
      {
        en: ['The court will punish those who break the law.'],
        zh: ['法院将惩罚违法者。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pun', type: 'root', rootSlug: 'pun' },
      { surface: 'ish', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pun ("penalty") + -ish (verb) → to inflict a penalty.',
      zh: 'pun（惩罚）+ -ish（动词后缀）→ 施加惩罚。',
    },
    relatedWords: ['punishment', 'punitive', 'impunity'],
  },
  {
    slug: 'punishment',
    lemma: 'punishment',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈpʌn.ɪʃ.mənt/' },
      us: { ipa: '/ˈpʌn.ɪʃ.mənt/' },
    },
    definition: {
      en: 'The act of punishing or the penalty imposed.',
      zh: '惩罚；处罚',
    },
    examples: [
      {
        en: ['The punishment should fit the crime.'],
        zh: ['刑罚应当与罪行相适应。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pun', type: 'root', rootSlug: 'pun' },
      { surface: 'ish', type: 'suffix' },
      { surface: 'ment', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'punish + -ment (noun) → the result or act of punishing.',
      zh: 'punish（惩罚）+ -ment（名词后缀）→ 惩罚的行为或结果。',
    },
    relatedWords: ['punish', 'punitive', 'penalty'],
  },
  {
    slug: 'punitive',
    lemma: 'punitive',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈpjuː.nə.tɪv/' },
      us: { ipa: '/ˈpjuː.nə.t̬ɪv/' },
    },
    definition: {
      en: 'Inflicting or intended as punishment.',
      zh: '惩罚性的；处罚的',
    },
    examples: [
      {
        en: ['The company faced punitive damages for its negligence.'],
        zh: ['该公司因疏忽面临惩罚性赔偿。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pun', type: 'root', rootSlug: 'pun' },
      { surface: 'it', type: 'connector' },
      { surface: 'ive', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pun ("penalty") + -itive (adj.) → relating to or serving as punishment.',
      zh: 'pun（惩罚）+ -itive（形容词后缀）→ 与惩罚相关的。',
    },
    relatedWords: ['punish', 'punishment', 'impunity'],
  },
  {
    slug: 'impunity',
    lemma: 'impunity',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ɪmˈpjuː.nə.ti/' },
      us: { ipa: '/ɪmˈpjuː.nə.t̬i/' },
    },
    definition: {
      en: 'Exemption from punishment or freedom from harmful consequences.',
      zh: '免受惩罚；逍遥法外',
    },
    examples: [
      {
        en: ['Corrupt officials acted with impunity for years.'],
        zh: ['腐败官员多年来逍遥法外。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'pun', type: 'root', rootSlug: 'pun' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- ("not") + pun ("penalty") + -ity (noun) → the state of not being penalized.',
      zh: 'im-（不）+ pun（惩罚）+ -ity（名词后缀）→ 不受惩罚的状态。',
    },
    relatedWords: ['punish', 'punitive', 'penalty'],
  },
  {
    slug: 'penalty',
    lemma: 'penalty',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈpen.əl.ti/' },
      us: { ipa: '/ˈpen.əl.t̬i/' },
    },
    definition: {
      en: 'A punishment imposed for breaking a law, rule, or contract.',
      zh: '罚款；处罚；刑罚',
    },
    examples: [
      {
        en: ['There is a heavy penalty for tax evasion.'],
        zh: ['逃税将面临严厉的处罚。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pen', type: 'root', rootSlug: 'pun' },
      { surface: 'al', type: 'suffix' },
      { surface: 'ty', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pen- (variant of pun, "penalty") + -alty (noun) → a punitive consequence.',
      zh: 'pen-（pun 的变体，惩罚）+ -alty（名词后缀）→ 惩罚性的后果。',
    },
    relatedWords: ['penalize', 'penal', 'punish'],
  },
  {
    slug: 'repent',
    lemma: 'repent',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/rɪˈpent/' },
      us: { ipa: '/rɪˈpent/' },
    },
    definition: {
      en: 'To feel deep regret for a wrongdoing and resolve to change.',
      zh: '忏悔；悔改',
    },
    examples: [
      {
        en: ['He repented his mistakes and tried to make amends.'],
        zh: ['他为自己的错误忏悔并试图弥补。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'pent', type: 'root', rootSlug: 'pun' },
    ],
    morphologyNote: {
      en: 're- ("intensely") + pent (from poenitere, related to pun "penalty") → to feel intense inner penalty.',
      zh: 're-（加强）+ pent（源自 poenitere，与 pun 惩罚相关）→ 内心感到强烈惩罚，即忏悔。',
    },
    relatedWords: ['repentance', 'repentant', 'punish'],
  },
  {
    slug: 'pain',
    lemma: 'pain',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/peɪn/' },
      us: { ipa: '/peɪn/' },
    },
    definition: {
      en: 'Physical suffering or discomfort; mental distress.',
      zh: '疼痛；痛苦',
    },
    examples: [
      {
        en: ['She felt a sharp pain in her lower back.'],
        zh: ['她感到腰部一阵剧痛。'],
      },
    ],
    rootBreakdown: [{ surface: 'pain', type: 'root', rootSlug: 'pun' }],
    morphologyNote: {
      en: 'From Latin poena ("penalty, punishment") → suffering as a consequence.',
      zh: '源自拉丁语 poena（惩罚）→ 作为后果的痛苦。',
    },
    relatedWords: ['painful', 'painless', 'painkiller'],
  },
  {
    slug: 'painful',
    lemma: 'painful',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈpeɪn.fəl/' },
      us: { ipa: '/ˈpeɪn.fəl/' },
    },
    definition: {
      en: 'Causing physical or emotional pain.',
      zh: '痛苦的；令人疼痛的',
    },
    examples: [
      {
        en: ['Recovery from surgery can be a painful process.'],
        zh: ['手术后的恢复可能是一个痛苦的过程。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pain', type: 'root', rootSlug: 'pun' },
      { surface: 'ful', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pain ("suffering") + -ful ("full of") → full of suffering.',
      zh: 'pain（痛苦）+ -ful（充满…的）→ 充满痛苦的。',
    },
    relatedWords: ['pain', 'painless', 'painstaking'],
  },
  {
    slug: 'penalize',
    lemma: 'penalize',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˈpiː.nəl.aɪz/' },
      us: { ipa: '/ˈpiː.nəl.aɪz/' },
    },
    definition: {
      en: 'To impose a penalty on someone for a rule violation.',
      zh: '处罚；惩罚',
    },
    examples: [
      {
        en: ['Players who commit fouls will be penalized.'],
        zh: ['犯规的球员将受到处罚。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pen', type: 'root', rootSlug: 'pun' },
      { surface: 'al', type: 'suffix' },
      { surface: 'ize', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pen- (variant of pun, "penalty") + -al + -ize (verb) → to make subject to a penalty.',
      zh: 'pen-（pun 的变体，惩罚）+ -al + -ize（动词后缀）→ 使受到惩罚。',
    },
    relatedWords: ['penalty', 'penal', 'punish'],
  },
  {
    slug: 'painstaking',
    lemma: 'painstaking',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈpeɪnz.teɪ.kɪŋ/' },
      us: { ipa: '/ˈpeɪnz.teɪ.kɪŋ/' },
    },
    definition: {
      en: 'Done with or employing great care and thoroughness.',
      zh: '煞费苦心的；极其仔细的',
    },
    examples: [
      {
        en: ['The restoration required painstaking attention to detail.'],
        zh: ['修复工作需要煞费苦心地关注细节。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pain', type: 'root', rootSlug: 'pun' },
      { surface: 's', type: 'connector' },
      { surface: 'taking', type: 'other' },
    ],
    morphologyNote: {
      en: 'pains ("effort, trouble") + taking → taking great pains, i.e. extremely careful.',
      zh: 'pains（辛苦、努力）+ taking（承受）→ 承受巨大辛苦，即极为细致的。',
    },
    relatedWords: ['pain', 'painful', 'painless'],
  },
];
