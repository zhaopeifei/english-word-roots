import type { WordEntry } from '@/types/content';

export const TAIL_WORDS: WordEntry[] = [
  {
    slug: 'detail',
    lemma: 'detail',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈdiː.teɪl/' },
      us: { ipa: '/dɪˈteɪl/' },
    },
    definition: {
      en: 'An individual feature or item; to describe something thoroughly.',
      zh: '细节；详情；详述',
    },
    examples: [
      {
        en: ['Please pay attention to every detail of the contract.'],
        zh: ['请注意合同的每一个细节。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'tail', type: 'root', rootSlug: 'tail' },
    ],
    morphologyNote: {
      en: 'de- ("completely") + tail ("cut") → to cut completely, i.e. to divide into small parts.',
      zh: 'de-（完全地）+ tail（切割）→ 完全切开，即分成细小部分，即细节。',
    },
    relatedWords: ['detailed', 'retail', 'tailor'],
  },
  {
    slug: 'retail',
    lemma: 'retail',
    partOfSpeech: ['n.', 'v.', 'adj.'],
    pronunciation: {
      uk: { ipa: '/ˈriː.teɪl/' },
      us: { ipa: '/ˈriː.teɪl/' },
    },
    definition: {
      en: 'The sale of goods to the public in small quantities.',
      zh: '零售',
    },
    examples: [
      {
        en: ['The retail price is much higher than the wholesale price.'],
        zh: ['零售价比批发价高很多。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'tail', type: 'root', rootSlug: 'tail' },
    ],
    morphologyNote: {
      en: 're- ("again") + tail ("cut") → to cut again into small pieces, i.e. to sell in small quantities.',
      zh: 're-（再次）+ tail（切割）→ 再次切成小块，即零售。',
    },
    relatedWords: ['retailer', 'detail', 'tailor'],
  },
  {
    slug: 'tailor',
    lemma: 'tailor',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈteɪ.lər/' },
      us: { ipa: '/ˈteɪ.lɚ/' },
    },
    definition: {
      en: 'A person who makes or alters clothing; to adapt for a particular purpose.',
      zh: '裁缝；量身定制',
    },
    examples: [
      {
        en: ['The program is tailored to meet individual learning needs.'],
        zh: ['该课程是根据个人学习需求量身定制的。'],
      },
    ],
    rootBreakdown: [
      { surface: 'tail', type: 'root', rootSlug: 'tail' },
      { surface: 'or', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'tail ("cut") + -or ("one who") → one who cuts cloth, i.e. a garment maker.',
      zh: 'tail（切割）+ -or（…的人）→ 裁剪布料的人，即裁缝。',
    },
    relatedWords: ['tailored', 'detail', 'retail'],
  },
  {
    slug: 'detailed',
    lemma: 'detailed',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈdiː.teɪld/' },
      us: { ipa: '/dɪˈteɪld/' },
    },
    definition: {
      en: 'Including many details; thorough and comprehensive.',
      zh: '详细的；详尽的',
    },
    examples: [
      {
        en: ['The report gave a detailed account of the incident.'],
        zh: ['报告详细描述了事件经过。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'tail', type: 'root', rootSlug: 'tail' },
      { surface: 'ed', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'detail ("fine points") + -ed (adj.) → having many fine points, i.e. thorough.',
      zh: 'detail（细节）+ -ed（形容词后缀）→ 有很多细节的，即详细的。',
    },
    relatedWords: ['detail', 'retail', 'tailor'],
  },
  {
    slug: 'tail',
    lemma: 'tail',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/teɪl/' },
      us: { ipa: '/teɪl/' },
    },
    definition: {
      en: 'The rear part of an animal; to follow and observe someone secretly.',
      zh: '尾巴；尾随；跟踪',
    },
    examples: [
      {
        en: ['The dog wagged its tail excitedly.'],
        zh: ['那只狗兴奋地摇着尾巴。'],
      },
    ],
    rootBreakdown: [{ surface: 'tail', type: 'root', rootSlug: 'tail' }],
    morphologyNote: {
      en: 'tail ("cut") → originally the cut-off end, hence the rear part.',
      zh: 'tail（切割）→ 原指被切断的末端，即尾部。',
    },
    relatedWords: ['detail', 'tailor', 'retail'],
  },
];
