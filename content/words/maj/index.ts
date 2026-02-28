import type { WordEntry } from '@/types/content';

export const MAJ_WORDS: WordEntry[] = [
  {
    slug: 'major',
    lemma: 'major',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: { uk: { ipa: '/ˈmeɪ.dʒər/' }, us: { ipa: '/ˈmeɪ.dʒɚ/' } },
    definition: {
      en: 'Important, serious, or significant; a principal subject of study.',
      zh: '主要的；重要的；专业',
    },
    examples: [
      {
        en: ['Climate change is a major challenge facing humanity.'],
        zh: ['气候变化是人类面临的一项重大挑战。'],
      },
    ],
    rootBreakdown: [
      { surface: 'maj', type: 'root', rootSlug: 'maj' },
      { surface: 'or', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'maj ("great, large") + -or (comparative) → greater, hence important.',
      zh: 'maj（大）+ -or（比较级后缀）→ 更大的，即重要的。',
    },
    relatedWords: ['majority', 'majorly'],
  },
  {
    slug: 'majority',
    lemma: 'majority',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/məˈdʒɒr.ɪ.ti/' }, us: { ipa: '/məˈdʒɔːr.ə.t̬i/' } },
    definition: {
      en: 'The greater number or part; the age at which a person is legally an adult.',
      zh: '多数；成年',
    },
    examples: [
      { en: ['The majority of voters supported the new policy.'], zh: ['大多数选民支持新政策。'] },
    ],
    rootBreakdown: [
      { surface: 'major', type: 'root', rootSlug: 'maj' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'major ("greater") + -ity (noun) → the state of being greater in number.',
      zh: 'major（较大的）+ -ity（名词后缀）→ 数量较大的状态，即多数。',
    },
    relatedWords: ['major', 'minority'],
  },
  {
    slug: 'maximum',
    lemma: 'maximum',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: { uk: { ipa: '/ˈmæk.sɪ.məm/' }, us: { ipa: '/ˈmæk.sɪ.məm/' } },
    definition: {
      en: 'The greatest amount, extent, or intensity possible or allowed.',
      zh: '最大值；最大限度',
    },
    examples: [
      {
        en: ['The maximum speed on this highway is 120 km/h.'],
        zh: ['这条高速公路的最高限速是120公里/小时。'],
      },
    ],
    rootBreakdown: [
      { surface: 'max', type: 'root', rootSlug: 'maj' },
      { surface: 'im', type: 'other' },
      { surface: 'um', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'max (variant of maj, "great") + -imum (superlative) → the greatest possible.',
      zh: 'max（maj 的变体，大）+ -imum（最高级后缀）→ 最大的，即最大值。',
    },
    relatedWords: ['maximize', 'maximal'],
  },
  {
    slug: 'maximize',
    lemma: 'maximize',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ˈmæk.sɪ.maɪz/' }, us: { ipa: '/ˈmæk.sɪ.maɪz/' } },
    definition: { en: 'To make as large or great as possible.', zh: '最大化；使增加到最大限度' },
    examples: [
      {
        en: ['The company aims to maximize profits while minimizing costs.'],
        zh: ['公司的目标是在降低成本的同时实现利润最大化。'],
      },
    ],
    rootBreakdown: [
      { surface: 'max', type: 'root', rootSlug: 'maj' },
      { surface: 'im', type: 'other' },
      { surface: 'ize', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'max ("greatest") + -imize (verb) → to make the greatest, to increase to the limit.',
      zh: 'max（最大）+ -imize（动词后缀）→ 使达到最大，即最大化。',
    },
    relatedWords: ['maximum', 'maximal', 'maximization'],
  },
  {
    slug: 'magnify',
    lemma: 'magnify',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ˈmæɡ.nɪ.faɪ/' }, us: { ipa: '/ˈmæɡ.nɪ.faɪ/' } },
    definition: {
      en: 'To make something appear larger than it is; to intensify.',
      zh: '放大；扩大；夸大',
    },
    examples: [
      {
        en: ['A microscope magnifies objects that are too small to see with the naked eye.'],
        zh: ['显微镜能放大肉眼看不到的微小物体。'],
      },
    ],
    rootBreakdown: [
      { surface: 'magn', type: 'root', rootSlug: 'maj' },
      { surface: 'ify', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'magn (variant of maj, "great") + -ify ("to make") → to make great, to enlarge.',
      zh: 'magn（maj 的变体，大）+ -ify（使…）→ 使变大，即放大。',
    },
    relatedWords: ['magnification', 'magnifier', 'magnificent'],
  },
  {
    slug: 'magnificent',
    lemma: 'magnificent',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/mæɡˈnɪf.ɪ.sənt/' }, us: { ipa: '/mæɡˈnɪf.ɪ.sənt/' } },
    definition: {
      en: 'Extremely beautiful, elaborate, or impressive.',
      zh: '壮丽的；宏伟的；华丽的',
    },
    examples: [
      {
        en: ['The view from the mountaintop was absolutely magnificent.'],
        zh: ['从山顶看到的景色绝对壮丽。'],
      },
    ],
    rootBreakdown: [
      { surface: 'magn', type: 'root', rootSlug: 'maj' },
      { surface: 'ific', type: 'other' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'magn ("great") + -ific ("making") + -ent (adj.) → making great, hence splendid.',
      zh: 'magn（大）+ -ific（制造）+ -ent（形容词后缀）→ 展现伟大的，即壮丽的。',
    },
    relatedWords: ['magnificently', 'magnificence', 'magnify'],
  },
  {
    slug: 'magnitude',
    lemma: 'magnitude',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈmæɡ.nɪ.tjuːd/' }, us: { ipa: '/ˈmæɡ.nɪ.tuːd/' } },
    definition: {
      en: 'The great size or extent of something; the degree of brightness of a star.',
      zh: '大小；量级；震级；重要性',
    },
    examples: [
      {
        en: ['The earthquake measured 7.2 on the magnitude scale.'],
        zh: ['这次地震的震级为7.2级。'],
      },
    ],
    rootBreakdown: [
      { surface: 'magn', type: 'root', rootSlug: 'maj' },
      { surface: 'itude', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'magn ("great") + -itude (noun) → the quality of being great, size or extent.',
      zh: 'magn（大）+ -itude（名词后缀）→ 大的程度，即大小、量级。',
    },
    relatedWords: ['magnify', 'magnificent', 'magnate'],
  },
  {
    slug: 'magnate',
    lemma: 'magnate',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈmæɡ.neɪt/' }, us: { ipa: '/ˈmæɡ.neɪt/' } },
    definition: {
      en: 'A wealthy and influential person, especially in business or industry.',
      zh: '巨头；大亨；权贵',
    },
    examples: [
      {
        en: ['The media magnate owns newspapers across three continents.'],
        zh: ['这位媒体大亨在三大洲拥有报纸。'],
      },
    ],
    rootBreakdown: [
      { surface: 'magn', type: 'root', rootSlug: 'maj' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'magn ("great") + -ate (noun) → a great person, one of power and wealth.',
      zh: 'magn（大）+ -ate（名词后缀）→ 伟大的人物，即大亨。',
    },
    relatedWords: ['magnitude', 'magnificent', 'magnify'],
  },
  {
    slug: 'magnanimity',
    lemma: 'magnanimity',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌmæɡ.nəˈnɪm.ɪ.ti/' }, us: { ipa: '/ˌmæɡ.nəˈnɪm.ə.t̬i/' } },
    definition: {
      en: 'The quality of being generous and forgiving, especially toward a rival.',
      zh: '宽宏大量；慷慨',
    },
    examples: [
      {
        en: ['He showed great magnanimity in forgiving his opponents.'],
        zh: ['他宽宏大量地原谅了对手。'],
      },
    ],
    rootBreakdown: [
      { surface: 'magn', type: 'root', rootSlug: 'maj' },
      { surface: 'anim', type: 'root' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'magn ("great") + anim ("spirit, soul") + -ity (noun) → greatness of spirit.',
      zh: 'magn（大）+ anim（精神、灵魂）+ -ity（名词后缀）→ 精神的伟大，即宽宏大量。',
    },
    relatedWords: ['magnate', 'magnificent', 'magnitude'],
  },
];
