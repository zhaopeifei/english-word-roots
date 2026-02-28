import type { WordEntry } from '@/types/content';

export const RUD_WORDS: WordEntry[] = [
  {
    slug: 'rude',
    lemma: 'rude',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ruːd/' },
      us: { ipa: '/ruːd/' },
    },
    definition: {
      en: 'Offensively impolite or bad-mannered; rough or primitive.',
      zh: '粗鲁的；无礼的；粗糙的',
    },
    examples: [
      {
        en: ['It is rude to interrupt someone while they are speaking.'],
        zh: ['在别人说话时打断是不礼貌的。'],
      },
    ],
    rootBreakdown: [
      { surface: 'rud', type: 'root', rootSlug: 'rud' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From Latin rudis ("rough, raw, unworked") → lacking refinement.',
      zh: '源自拉丁语 rudis（粗糙的、未加工的）→ 缺乏教养的。',
    },
    relatedWords: ['rudeness', 'rudiment', 'crude'],
  },
  {
    slug: 'cruel',
    lemma: 'cruel',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈkruː.əl/' },
      us: { ipa: '/ˈkruː.əl/' },
    },
    definition: {
      en: 'Willfully causing pain or suffering; merciless.',
      zh: '残忍的；残酷的',
    },
    examples: [
      {
        en: ['It is cruel to keep wild animals in small cages.'],
        zh: ['把野生动物关在小笼子里是残忍的。'],
      },
    ],
    rootBreakdown: [
      { surface: 'cru', type: 'root', rootSlug: 'rud' },
      { surface: 'el', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From Latin crudus ("raw, rough"), related to rudis → raw and unfeeling, hence merciless.',
      zh: '源自拉丁语 crudus（生的、粗糙的），与 rudis 相关 → 生硬无情的，即残忍。',
    },
    relatedWords: ['cruelty', 'crude', 'rude'],
  },
  {
    slug: 'raw',
    lemma: 'raw',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/rɔː/' },
      us: { ipa: '/rɑː/' },
    },
    definition: {
      en: 'Not cooked; in its natural state; unprocessed.',
      zh: '生的；未加工的；原始的',
    },
    examples: [
      {
        en: ['Sashimi is made from raw fish.'],
        zh: ['生鱼片是用生鱼做的。'],
      },
    ],
    rootBreakdown: [{ surface: 'raw', type: 'root', rootSlug: 'rud' }],
    morphologyNote: {
      en: 'Cognate with Latin rudis ("rough") via Grimm\'s Law → in its natural, unprocessed state.',
      zh: '通过格林法则与拉丁语 rudis（粗糙的）同源 → 处于自然未加工状态。',
    },
    relatedWords: ['rude', 'crude', 'rural'],
  },
  {
    slug: 'rural',
    lemma: 'rural',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈrʊə.rəl/' },
      us: { ipa: '/ˈrʊr.əl/' },
    },
    definition: {
      en: 'Relating to the countryside rather than the town.',
      zh: '农村的；乡村的',
    },
    examples: [
      {
        en: ['Many young people are leaving rural areas for the city.'],
        zh: ['许多年轻人正在离开农村前往城市。'],
      },
    ],
    rootBreakdown: [
      { surface: 'rur', type: 'root', rootSlug: 'rud' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From Latin rus ("countryside, open land"), related to rudis ("rough") → pertaining to the open countryside.',
      zh: '源自拉丁语 rus（乡村、旷野），与 rudis（粗糙的）相关 → 与乡村有关的。',
    },
    relatedWords: ['rustic', 'rude', 'rudiment'],
  },
  {
    slug: 'rudiment',
    lemma: 'rudiment',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈruː.dɪ.mənt/' },
      us: { ipa: '/ˈruː.dɪ.mənt/' },
    },
    definition: {
      en: 'The most basic elements or principles of a subject.',
      zh: '基础；入门知识；雏形',
    },
    examples: [
      {
        en: ['Students must first learn the rudiments of grammar.'],
        zh: ['学生必须先学习语法的基础知识。'],
      },
    ],
    rootBreakdown: [
      { surface: 'rud', type: 'root', rootSlug: 'rud' },
      { surface: 'iment', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'rud ("raw, rough") + -iment (noun) → the raw beginning stage of knowledge.',
      zh: 'rud（粗糙的、原始的）+ -iment（名词后缀）→ 知识的原始阶段，即基础。',
    },
    relatedWords: ['rudimentary', 'rude', 'crude'],
  },
  {
    slug: 'rudimentary',
    lemma: 'rudimentary',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˌruː.dɪˈmen.tər.i/' },
      us: { ipa: '/ˌruː.dɪˈmen.t̬ɚ.i/' },
    },
    definition: {
      en: 'Involving or limited to basic principles; undeveloped.',
      zh: '基本的；初步的；未发展的',
    },
    examples: [
      {
        en: ['He has only a rudimentary understanding of the language.'],
        zh: ['他对这门语言只有初步的了解。'],
      },
    ],
    rootBreakdown: [
      { surface: 'rud', type: 'root', rootSlug: 'rud' },
      { surface: 'iment', type: 'suffix' },
      { surface: 'ary', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'rudiment ("basic element") + -ary (adj.) → relating to the basics.',
      zh: 'rudiment（基础）+ -ary（形容词后缀）→ 与基础有关的。',
    },
    relatedWords: ['rudiment', 'rude', 'erudite'],
  },
  {
    slug: 'erudite',
    lemma: 'erudite',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈer.ʊ.daɪt/' },
      us: { ipa: '/ˈer.ʊ.daɪt/' },
    },
    definition: {
      en: 'Having or showing great knowledge or learning.',
      zh: '博学的；有学问的',
    },
    examples: [
      {
        en: ['The professor gave an erudite lecture on Renaissance art.'],
        zh: ['教授做了一场关于文艺复兴艺术的博学讲座。'],
      },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'rud', type: 'root', rootSlug: 'rud' },
      { surface: 'ite', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'e- ("out of") + rud ("raw, rough") + -ite (adj.) → polished out of roughness, i.e. well-educated.',
      zh: 'e-（从…出来）+ rud（粗糙的）+ -ite（形容词后缀）→ 从粗糙中磨练出来的，即博学的。',
    },
    relatedWords: ['erudition', 'rudiment', 'rude'],
  },
  {
    slug: 'rustic',
    lemma: 'rustic',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈrʌs.tɪk/' },
      us: { ipa: '/ˈrʌs.tɪk/' },
    },
    definition: {
      en: 'Relating to the countryside; simple and charming in style.',
      zh: '乡村的；质朴的；田园风格的',
    },
    examples: [
      {
        en: ['The cabin had a rustic charm with its wooden beams.'],
        zh: ['小屋的木梁散发着质朴的魅力。'],
      },
    ],
    rootBreakdown: [
      { surface: 'rust', type: 'root', rootSlug: 'rud' },
      { surface: 'ic', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From Latin rusticus ("of the country"), related to rudis ("rough") → having country-style simplicity.',
      zh: '源自拉丁语 rusticus（乡村的），与 rudis（粗糙的）相关 → 具有乡村式的质朴。',
    },
    relatedWords: ['rural', 'rude', 'rudiment'],
  },
];
