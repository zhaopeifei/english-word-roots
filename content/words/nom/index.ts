import type { WordEntry } from '@/types/content';

export const NOM_WORDS: WordEntry[] = [
  {
    slug: 'autonomous',
    lemma: 'autonomous',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ɔːˈtɒn.ə.məs/' }, us: { ipa: '/ɔːˈtɑː.nə.məs/' } },
    definition: { en: 'Having self-governance; acting independently.', zh: '自治的；自主的' },
    examples: [
      {
        en: ['The region was granted autonomous status by the central government.'],
        zh: ['该地区被中央政府授予了自治地位。'],
      },
    ],
    rootBreakdown: [
      { surface: 'auto', type: 'prefix' },
      { surface: 'nom', type: 'root', rootSlug: 'nom' },
      { surface: 'ous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'auto- ("self") + nom ("law, rule") + -ous (adj.) → ruling oneself, self-governing.',
      zh: 'auto-（自己）+ nom（法则）+ -ous（形容词后缀）→ 自我管理的，即自治的。',
    },
    relatedWords: ['autonomy', 'economy'],
  },
  {
    slug: 'economy',
    lemma: 'economy',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ɪˈkɒn.ə.mi/' }, us: { ipa: '/ɪˈkɑː.nə.mi/' } },
    definition: {
      en: 'The system of production, distribution, and consumption of goods and services; careful management of resources.',
      zh: '经济；节约',
    },
    examples: [
      {
        en: ['The global economy has faced many challenges in recent years.'],
        zh: ['全球经济近年来面临了许多挑战。'],
      },
    ],
    rootBreakdown: [
      { surface: 'eco', type: 'prefix' },
      { surface: 'nom', type: 'root', rootSlug: 'nom' },
      { surface: 'y', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'eco- ("house") + nom ("law, manage") + -y (noun) → the management of a household, hence resource management.',
      zh: 'eco-（家）+ nom（法则、管理）+ -y（名词后缀）→ 家庭管理，即经济。',
    },
    relatedWords: ['economic', 'economics', 'economical'],
  },
  {
    slug: 'economic',
    lemma: 'economic',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˌiː.kəˈnɒm.ɪk/' }, us: { ipa: '/ˌiː.kəˈnɑː.mɪk/' } },
    definition: { en: 'Relating to the economy or economics; profitable.', zh: '经济的；经济学的' },
    examples: [
      { en: ['Economic growth slowed during the second quarter.'], zh: ['第二季度经济增长放缓。'] },
    ],
    rootBreakdown: [
      { surface: 'eco', type: 'prefix' },
      { surface: 'nom', type: 'root', rootSlug: 'nom' },
      { surface: 'ic', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'eco- ("house") + nom ("manage") + -ic (adj.) → relating to household management, hence economic.',
      zh: 'eco-（家）+ nom（管理）+ -ic（形容词后缀）→ 与管理相关的，即经济的。',
    },
    relatedWords: ['economy', 'economics', 'economical'],
  },
  {
    slug: 'economics',
    lemma: 'economics',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌiː.kəˈnɒm.ɪks/' }, us: { ipa: '/ˌiː.kəˈnɑː.mɪks/' } },
    definition: {
      en: 'The branch of knowledge concerned with production, consumption, and transfer of wealth.',
      zh: '经济学',
    },
    examples: [
      {
        en: ['She studied economics at university before becoming a financial analyst.'],
        zh: ['她在大学学习经济学，之后成为一名金融分析师。'],
      },
    ],
    rootBreakdown: [
      { surface: 'eco', type: 'prefix' },
      { surface: 'nom', type: 'root', rootSlug: 'nom' },
      { surface: 'ics', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'eco- ("house") + nom ("law") + -ics (field of study) → the study of household management, hence the study of wealth.',
      zh: 'eco-（家）+ nom（法则）+ -ics（学科后缀）→ 研究家庭管理的学科，即经济学。',
    },
    relatedWords: ['economy', 'economic', 'economist'],
  },
  {
    slug: 'economical',
    lemma: 'economical',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˌiː.kəˈnɒm.ɪ.kəl/' }, us: { ipa: '/ˌiː.kəˈnɑː.mɪ.kəl/' } },
    definition: {
      en: 'Giving good value relative to the cost; not wasteful.',
      zh: '节约的；经济实惠的',
    },
    examples: [{ en: ['This car is very economical on fuel.'], zh: ['这辆车非常省油。'] }],
    rootBreakdown: [
      { surface: 'eco', type: 'prefix' },
      { surface: 'nom', type: 'root', rootSlug: 'nom' },
      { surface: 'ical', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'eco- ("house") + nom ("manage") + -ical (adj.) → well-managed, thrifty.',
      zh: 'eco-（家）+ nom（管理）+ -ical（形容词后缀）→ 善于管理的，即节约的。',
    },
    relatedWords: ['economy', 'economic'],
  },
];
