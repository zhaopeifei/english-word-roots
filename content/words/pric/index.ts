import type { WordEntry } from '@/types/content';

export const PRIC_WORDS: WordEntry[] = [
  {
    slug: 'price',
    lemma: 'price',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/praɪs/' },
      us: { ipa: '/praɪs/' },
    },
    definition: {
      en: 'The amount of money for which something is sold or bought.',
      zh: '价格；代价',
    },
    examples: [
      {
        en: ['The price of housing has risen sharply this year.'],
        zh: ['今年房价急剧上涨。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pric', type: 'root', rootSlug: 'pric' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From Latin pretium ("value, reward") → pric → the value set on something.',
      zh: '源自拉丁语 pretium（价值、报酬）→ pric → 某物的定价。',
    },
    relatedWords: ['priceless', 'precious', 'appreciate'],
  },
  {
    slug: 'priceless',
    lemma: 'priceless',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈpraɪs.ləs/' },
      us: { ipa: '/ˈpraɪs.ləs/' },
    },
    definition: {
      en: 'So valuable that no price can be set; invaluable.',
      zh: '无价的；极其珍贵的',
    },
    examples: [
      {
        en: ['The museum holds priceless works of art.'],
        zh: ['博物馆收藏着无价的艺术品。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pric', type: 'root', rootSlug: 'pric' },
      { surface: 'e', type: 'connector' },
      { surface: 'less', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'price ("value") + -less ("without") → without a price, i.e. invaluable.',
      zh: 'price（价格）+ -less（无…的）→ 无法定价的，即无价的。',
    },
    relatedWords: ['price', 'precious', 'prize'],
  },
  {
    slug: 'precious',
    lemma: 'precious',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈpreʃ.əs/' },
      us: { ipa: '/ˈpreʃ.əs/' },
    },
    definition: {
      en: 'Of great value; highly esteemed or cherished.',
      zh: '珍贵的；宝贵的',
    },
    examples: [
      {
        en: ['Time is our most precious resource.'],
        zh: ['时间是我们最宝贵的资源。'],
      },
    ],
    rootBreakdown: [
      { surface: 'preci', type: 'root', rootSlug: 'pric' },
      { surface: 'ous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'preci- (from pretium, "value") + -ous (adj.) → of great value.',
      zh: 'preci-（源自 pretium，价值）+ -ous（形容词后缀）→ 有极大价值的。',
    },
    relatedWords: ['price', 'appreciate', 'priceless'],
  },
  {
    slug: 'appreciate',
    lemma: 'appreciate',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/əˈpriː.ʃi.eɪt/' },
      us: { ipa: '/əˈpriː.ʃi.eɪt/' },
    },
    definition: {
      en: 'To recognize the value of; to be grateful for; to increase in value.',
      zh: '欣赏；感激；增值',
    },
    examples: [
      {
        en: ['I really appreciate your help with this project.'],
        zh: ['非常感谢你对这个项目的帮助。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ap', type: 'prefix' },
      { surface: 'preci', type: 'root', rootSlug: 'pric' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ap- ("to") + preci ("value") + -ate (verb) → to assign value to something.',
      zh: 'ap-（向）+ preci（价值）+ -ate（动词后缀）→ 赋予价值，即欣赏、感激。',
    },
    relatedWords: ['appreciation', 'appreciative', 'depreciate'],
  },
  {
    slug: 'depreciate',
    lemma: 'depreciate',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/dɪˈpriː.ʃi.eɪt/' },
      us: { ipa: '/dɪˈpriː.ʃi.eɪt/' },
    },
    definition: {
      en: 'To decrease in value over time.',
      zh: '贬值；折旧',
    },
    examples: [
      {
        en: ['New cars depreciate rapidly in the first year.'],
        zh: ['新车在第一年迅速贬值。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'preci', type: 'root', rootSlug: 'pric' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'de- ("down") + preci ("value") + -ate (verb) → to bring down the value.',
      zh: 'de-（向下）+ preci（价值）+ -ate（动词后缀）→ 降低价值，即贬值。',
    },
    relatedWords: ['depreciation', 'appreciate', 'price'],
  },
  {
    slug: 'appraise',
    lemma: 'appraise',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/əˈpreɪz/' },
      us: { ipa: '/əˈpreɪz/' },
    },
    definition: {
      en: 'To assess the value or quality of something.',
      zh: '评估；鉴定',
    },
    examples: [
      {
        en: ['An expert was called to appraise the antique furniture.'],
        zh: ['一位专家被请来评估这些古董家具。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ap', type: 'prefix' },
      { surface: 'prais', type: 'root', rootSlug: 'pric' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ap- ("to") + praise (variant of "price/value") → to set a value on something.',
      zh: 'ap-（向）+ praise（价格/价值的变体）→ 对某物定价，即评估。',
    },
    relatedWords: ['appraisal', 'appreciate', 'price'],
  },
  {
    slug: 'prize',
    lemma: 'prize',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/praɪz/' },
      us: { ipa: '/praɪz/' },
    },
    definition: {
      en: 'A reward given for winning or for outstanding achievement; to value highly.',
      zh: '奖品；奖赏；珍视',
    },
    examples: [
      {
        en: ['She won the Nobel Prize for her groundbreaking research.'],
        zh: ['她因突破性研究获得了诺贝尔奖。'],
      },
    ],
    rootBreakdown: [
      { surface: 'priz', type: 'root', rootSlug: 'pric' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From Old French pris ("price, value") → something valued, i.e. a reward.',
      zh: '源自古法语 pris（价格、价值）→ 有价值之物，即奖赏。',
    },
    relatedWords: ['price', 'precious', 'priceless'],
  },
  {
    slug: 'praise',
    lemma: 'praise',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: {
      uk: { ipa: '/preɪz/' },
      us: { ipa: '/preɪz/' },
    },
    definition: {
      en: 'To express warm approval or admiration.',
      zh: '赞扬；表扬；赞美',
    },
    examples: [
      {
        en: ['The teacher praised the student for her excellent essay.'],
        zh: ['老师表扬了这位学生写的优秀论文。'],
      },
    ],
    rootBreakdown: [
      { surface: 'prais', type: 'root', rootSlug: 'pric' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From Latin pretiare ("to value") → to assign high value, i.e. to commend.',
      zh: '源自拉丁语 pretiare（评价）→ 给予高评价，即赞扬。',
    },
    relatedWords: ['praiseworthy', 'appraise', 'appreciate'],
  },
  {
    slug: 'appreciation',
    lemma: 'appreciation',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/əˌpriː.ʃiˈeɪ.ʃən/' },
      us: { ipa: '/əˌpriː.ʃiˈeɪ.ʃən/' },
    },
    definition: {
      en: 'Gratitude; recognition of value; an increase in value.',
      zh: '感激；欣赏；升值',
    },
    examples: [
      {
        en: ['She expressed her appreciation with a heartfelt thank-you note.'],
        zh: ['她写了一封真诚的感谢信来表达感激之情。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ap', type: 'prefix' },
      { surface: 'preci', type: 'root', rootSlug: 'pric' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ap- ("to") + preci ("value") + -ation (noun) → the act of valuing.',
      zh: 'ap-（向）+ preci（价值）+ -ation（名词后缀）→ 赋予价值的行为。',
    },
    relatedWords: ['appreciate', 'appreciative', 'depreciation'],
  },
];
