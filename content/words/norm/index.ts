import type { WordEntry } from '@/types/content';

export const NORM_WORDS: WordEntry[] = [
  {
    slug: 'norm',
    lemma: 'norm',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/nɔːm/' }, us: { ipa: '/nɔːrm/' } },
    definition: {
      en: 'A standard or pattern regarded as typical; an accepted standard of behavior.',
      zh: '规范；标准；准则',
    },
    examples: [
      {
        en: ['Working from home has become the norm for many companies.'],
        zh: ['居家办公已成为许多公司的常态。'],
      },
    ],
    rootBreakdown: [{ surface: 'norm', type: 'root', rootSlug: 'norm' }],
    morphologyNote: {
      en: 'norm ("standard, rule") → an established standard or pattern.',
      zh: 'norm（标准、规则）→ 既定的标准或模式。',
    },
    relatedWords: ['normal', 'normalize', 'abnormal'],
  },
  {
    slug: 'normal',
    lemma: 'normal',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈnɔː.məl/' }, us: { ipa: '/ˈnɔːr.məl/' } },
    definition: {
      en: 'Conforming to a standard; usual, typical, or expected.',
      zh: '正常的；标准的',
    },
    examples: [
      {
        en: ['It is perfectly normal to feel anxious before a big presentation.'],
        zh: ['在重要演讲前感到焦虑是完全正常的。'],
      },
    ],
    rootBreakdown: [
      { surface: 'norm', type: 'root', rootSlug: 'norm' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'norm ("standard") + -al (adj.) → conforming to the standard.',
      zh: 'norm（标准）+ -al（形容词后缀）→ 符合标准的，即正常的。',
    },
    relatedWords: ['normally', 'abnormal', 'normalize'],
  },
  {
    slug: 'normalize',
    lemma: 'normalize',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ˈnɔː.mə.laɪz/' }, us: { ipa: '/ˈnɔːr.mə.laɪz/' } },
    definition: {
      en: 'To bring to a normal or standard state; to make typical.',
      zh: '使正常化；使标准化',
    },
    examples: [
      {
        en: ['The new policy aims to normalize relations between the two countries.'],
        zh: ['新政策旨在使两国关系正常化。'],
      },
    ],
    rootBreakdown: [
      { surface: 'norm', type: 'root', rootSlug: 'norm' },
      { surface: 'al', type: 'other' },
      { surface: 'ize', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'norm ("standard") + -alize (verb) → to make standard, to bring to the norm.',
      zh: 'norm（标准）+ -alize（动词后缀）→ 使变为标准，即正常化。',
    },
    relatedWords: ['normal', 'normalization'],
  },
  {
    slug: 'normative',
    lemma: 'normative',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈnɔː.mə.tɪv/' }, us: { ipa: '/ˈnɔːr.mə.t̬ɪv/' } },
    definition: {
      en: 'Establishing, relating to, or deriving from a standard or norm.',
      zh: '规范的；标准的',
    },
    examples: [
      {
        en: ['Normative ethics deals with how people should behave.'],
        zh: ['规范伦理学研究人们应该如何行为。'],
      },
    ],
    rootBreakdown: [
      { surface: 'norm', type: 'root', rootSlug: 'norm' },
      { surface: 'ative', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'norm ("standard") + -ative (adj.) → relating to or prescribing a standard.',
      zh: 'norm（标准）+ -ative（形容词后缀）→ 与标准相关的，即规范的。',
    },
    relatedWords: ['norm', 'normal'],
  },
  {
    slug: 'abnormal',
    lemma: 'abnormal',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/æbˈnɔː.məl/' }, us: { ipa: '/æbˈnɔːr.məl/' } },
    definition: {
      en: 'Deviating from what is normal or usual; not typical.',
      zh: '异常的；反常的',
    },
    examples: [
      {
        en: ['The doctor noticed an abnormal growth on the X-ray.'],
        zh: ['医生在X光片上发现了一个异常的增生。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ab', type: 'prefix' },
      { surface: 'norm', type: 'root', rootSlug: 'norm' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ab- ("away from") + norm ("standard") + -al (adj.) → away from the standard, not normal.',
      zh: 'ab-（偏离）+ norm（标准）+ -al（形容词后缀）→ 偏离标准的，即异常的。',
    },
    relatedWords: ['abnormality', 'normal'],
  },
  {
    slug: 'abnormality',
    lemma: 'abnormality',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌæb.nɔːˈmæl.ɪ.ti/' }, us: { ipa: '/ˌæb.nɔːrˈmæl.ə.t̬i/' } },
    definition: {
      en: 'A feature or characteristic that is not normal; a deviation from the standard.',
      zh: '异常；畸形；变态',
    },
    examples: [
      {
        en: ['Genetic testing can detect certain abnormalities before birth.'],
        zh: ['基因检测可以在出生前发现某些异常。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ab', type: 'prefix' },
      { surface: 'norm', type: 'root', rootSlug: 'norm' },
      { surface: 'al', type: 'other' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ab- ("away from") + norm ("standard") + -ality (noun) → the state of being away from the norm.',
      zh: 'ab-（偏离）+ norm（标准）+ -ality（名词后缀）→ 偏离标准的状态。',
    },
    relatedWords: ['abnormal', 'normality'],
  },
  {
    slug: 'enormous',
    lemma: 'enormous',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ɪˈnɔː.məs/' }, us: { ipa: '/ɪˈnɔːr.məs/' } },
    definition: { en: 'Very large in size, quantity, or extent.', zh: '巨大的；庞大的' },
    examples: [
      {
        en: ['The project required an enormous amount of time and money.'],
        zh: ['这个项目需要大量的时间和金钱。'],
      },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'norm', type: 'root', rootSlug: 'norm' },
      { surface: 'ous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'e- ("out of") + norm ("standard") + -ous (adj.) → out of the norm, hence immense.',
      zh: 'e-（超出）+ norm（标准）+ -ous（形容词后缀）→ 超出标准的，即巨大的。',
    },
    relatedWords: ['enormously', 'enormity'],
  },
  {
    slug: 'enormity',
    lemma: 'enormity',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ɪˈnɔː.mɪ.ti/' }, us: { ipa: '/ɪˈnɔːr.mə.t̬i/' } },
    definition: {
      en: 'The great or extreme scale of something; great wickedness.',
      zh: '巨大；严重性；暴行',
    },
    examples: [
      {
        en: ['The enormity of the disaster became clear only days later.'],
        zh: ['灾难的严重性直到几天后才变得清晰。'],
      },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'norm', type: 'root', rootSlug: 'norm' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'e- ("out of") + norm ("standard") + -ity (noun) → the state of being beyond the norm.',
      zh: 'e-（超出）+ norm（标准）+ -ity（名词后缀）→ 超越标准的状态，即巨大或严重。',
    },
    relatedWords: ['enormous', 'abnormal'],
  },
  {
    slug: 'paranormal',
    lemma: 'paranormal',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˌpær.əˈnɔː.məl/' }, us: { ipa: '/ˌper.əˈnɔːr.məl/' } },
    definition: {
      en: 'Beyond the scope of normal scientific understanding; supernatural.',
      zh: '超自然的；超常的',
    },
    examples: [
      {
        en: ['The investigators searched for paranormal activity in the old house.'],
        zh: ['调查人员在老房子里搜寻超自然活动。'],
      },
    ],
    rootBreakdown: [
      { surface: 'para', type: 'prefix' },
      { surface: 'norm', type: 'root', rootSlug: 'norm' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'para- ("beside, beyond") + norm ("standard") + -al (adj.) → beyond the normal, supernatural.',
      zh: 'para-（超越）+ norm（标准）+ -al（形容词后缀）→ 超越正常的，即超自然的。',
    },
    relatedWords: ['normal', 'abnormal'],
  },
];
