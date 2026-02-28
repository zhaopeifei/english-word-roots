import type { WordEntry } from '@/types/content';

export const DIC_WORDS: WordEntry[] = [
  {
    slug: 'dictionary',
    lemma: 'dictionary',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈdɪk.ʃən.ər.i/' },
      us: { ipa: '/ˈdɪk.ʃən.er.i/' },
    },
    definition: {
      en: 'A book or electronic resource that lists words and gives their meanings.',
      zh: '词典；字典',
    },
    examples: [
      {
        en: ['She looked up the unfamiliar word in the dictionary.'],
        zh: ['她在词典中查了这个不认识的词。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dic', type: 'root', rootSlug: 'dic' },
      { surface: 'tion', type: 'suffix' },
      { surface: 'ary', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dic ("say, speak") + -tion- + -ary (collection) → a collection of sayings/words.',
      zh: 'dic（说）+ -tion- + -ary（集合）→ 词语的集合，即词典。',
    },
    relatedWords: ['diction', 'dictate', 'predict'],
  },
  {
    slug: 'dictator',
    lemma: 'dictator',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/dɪkˈteɪ.tər/' },
      us: { ipa: '/ˈdɪk.teɪ.t̬ɚ/' },
    },
    definition: {
      en: 'A ruler with total power over a country, typically one who governs by force.',
      zh: '独裁者；专制者',
    },
    examples: [
      {
        en: ['The dictator suppressed all political opposition.'],
        zh: ['独裁者镇压了所有政治反对力量。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dic', type: 'root', rootSlug: 'dic' },
      { surface: 'tat', type: 'connector' },
      { surface: 'or', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dic ("say, command") + -tat- + -or (agent) → one who commands, a dictator.',
      zh: 'dic（说、命令）+ -tat- + -or（施事者）→ 发号施令的人，即独裁者。',
    },
    relatedWords: ['dictatorial', 'dictatorship', 'dictate'],
  },
  {
    slug: 'predict',
    lemma: 'predict',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/prɪˈdɪkt/' },
      us: { ipa: '/prɪˈdɪkt/' },
    },
    definition: {
      en: 'To say or estimate that something will happen in the future.',
      zh: '预测；预言',
    },
    examples: [
      {
        en: ['Scientists predict that sea levels will continue to rise.'],
        zh: ['科学家预测海平面将持续上升。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pre', type: 'prefix' },
      { surface: 'dict', type: 'root', rootSlug: 'dic' },
    ],
    morphologyNote: {
      en: 'pre- ("before") + dict (variant of dic, "say") → to say beforehand, to foretell.',
      zh: 'pre-（在……之前）+ dict（dic 的变体，说）→ 事先说出，即预测。',
    },
    relatedWords: ['prediction', 'predictable', 'unpredictable'],
  },
  {
    slug: 'contradict',
    lemma: 'contradict',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˌkɒn.trəˈdɪkt/' },
      us: { ipa: '/ˌkɑːn.trəˈdɪkt/' },
    },
    definition: {
      en: 'To assert the opposite of a statement; to deny or be inconsistent with.',
      zh: '反驳；矛盾；相抵触',
    },
    examples: [
      {
        en: ['The new evidence contradicts the original theory.'],
        zh: ['新证据与原来的理论相矛盾。'],
      },
    ],
    rootBreakdown: [
      { surface: 'contra', type: 'prefix' },
      { surface: 'dict', type: 'root', rootSlug: 'dic' },
    ],
    morphologyNote: {
      en: 'contra- ("against") + dict (variant of dic, "say") → to say against, to oppose.',
      zh: 'contra-（反对）+ dict（dic 的变体，说）→ 说反话，即反驳。',
    },
    relatedWords: ['contradiction', 'contradictory', 'predict'],
  },
  {
    slug: 'indicate',
    lemma: 'indicate',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˈɪn.dɪ.keɪt/' },
      us: { ipa: '/ˈɪn.dɪ.keɪt/' },
    },
    definition: {
      en: 'To point out or show; to be a sign of.',
      zh: '表明；指示；暗示',
    },
    examples: [
      {
        en: ['Research indicates that exercise improves mental health.'],
        zh: ['研究表明锻炼能改善心理健康。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'dic', type: 'root', rootSlug: 'dic' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("toward") + dic ("say, point") + -ate (verb) → to point toward, to show.',
      zh: 'in-（向）+ dic（说、指）+ -ate（动词后缀）→ 指向，即指示。',
    },
    relatedWords: ['indication', 'indicator', 'indicative'],
  },
  {
    slug: 'addict',
    lemma: 'addict',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈæd.ɪkt/' },
      us: { ipa: '/ˈæd.ɪkt/' },
    },
    definition: {
      en: 'A person physically or mentally dependent on a substance or activity.',
      zh: '有瘾的人；上瘾者',
    },
    examples: [
      {
        en: ['The clinic helps drug addicts recover from their dependency.'],
        zh: ['这家诊所帮助吸毒成瘾者戒除依赖。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ad', type: 'prefix' },
      { surface: 'dict', type: 'root', rootSlug: 'dic' },
    ],
    morphologyNote: {
      en: 'ad- ("to") + dict (variant of dic, "say, assign") → assigned to, given over to a habit.',
      zh: 'ad-（向）+ dict（dic 的变体，说、指定）→ 被指定给、被交付于某习惯，即上瘾。',
    },
    relatedWords: ['addictive', 'addiction', 'addicted'],
  },
  {
    slug: 'condition',
    lemma: 'condition',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/kənˈdɪʃ.ən/' },
      us: { ipa: '/kənˈdɪʃ.ən/' },
    },
    definition: {
      en: 'The state of something; a circumstance that must be met; to train or accustom.',
      zh: '条件；状况；状态',
    },
    examples: [
      {
        en: ['The house was in excellent condition when we bought it.'],
        zh: ['我们买下这栋房子时，它状况极佳。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'dit', type: 'root', rootSlug: 'dic' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'con- ("together") + dit (variant of dic, "say, declare") + -ion (noun) → what is declared together, agreed terms.',
      zh: 'con-（共同）+ dit（dic 的变体，说、宣布）+ -ion（名词后缀）→ 共同宣布的事项，即条件。',
    },
    relatedWords: ['conditional', 'unconditional', 'precondition'],
  },
  {
    slug: 'verdict',
    lemma: 'verdict',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈvɜː.dɪkt/' },
      us: { ipa: '/ˈvɝː.dɪkt/' },
    },
    definition: {
      en: 'A decision on an issue in a civil or criminal case; a judgment or opinion.',
      zh: '裁决；判决；定论',
    },
    examples: [
      {
        en: ['The jury delivered a guilty verdict after two days of deliberation.'],
        zh: ['陪审团经过两天审议后做出了有罪裁决。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ver', type: 'root' },
      { surface: 'dict', type: 'root', rootSlug: 'dic' },
    ],
    morphologyNote: {
      en: 'ver ("true") + dict (variant of dic, "say") → a true saying, a judgment spoken as truth.',
      zh: 'ver（真实的）+ dict（dic 的变体，说）→ 说出真相，即裁决。',
    },
    relatedWords: ['predict', 'dictate', 'contradict'],
  },
  {
    slug: 'predictable',
    lemma: 'predictable',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/prɪˈdɪk.tə.bəl/' },
      us: { ipa: '/prɪˈdɪk.tə.bəl/' },
    },
    definition: {
      en: 'Able to be predicted; behaving or occurring in a way that is expected.',
      zh: '可预测的；意料之中的',
    },
    examples: [
      {
        en: ['The outcome of the election was entirely predictable.'],
        zh: ['选举结果完全在意料之中。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pre', type: 'prefix' },
      { surface: 'dict', type: 'root', rootSlug: 'dic' },
      { surface: 'able', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pre- ("before") + dict ("say") + -able ("able to be") → able to be said beforehand.',
      zh: 'pre-（在……之前）+ dict（说）+ -able（能够被）→ 能够被事先说出的，即可预测的。',
    },
    relatedWords: ['predict', 'prediction', 'unpredictable'],
  },
  {
    slug: 'benediction',
    lemma: 'benediction',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˌben.ɪˈdɪk.ʃən/' },
      us: { ipa: '/ˌben.ɪˈdɪk.ʃən/' },
    },
    definition: {
      en: 'The utterance of a blessing; a prayer invoking divine care.',
      zh: '祝福；祈祷',
    },
    examples: [
      {
        en: ['The priest gave the benediction at the end of the service.'],
        zh: ['牧师在仪式结束时给予了祝福。'],
      },
    ],
    rootBreakdown: [
      { surface: 'bene', type: 'prefix' },
      { surface: 'dic', type: 'root', rootSlug: 'dic' },
      { surface: 'tion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'bene- ("good, well") + dic ("say") + -tion (noun) → to say good things, a blessing.',
      zh: 'bene-（好的）+ dic（说）+ -tion（名词后缀）→ 说好话，即祝福。',
    },
    relatedWords: ['malediction', 'dictate', 'predict'],
  },
];
