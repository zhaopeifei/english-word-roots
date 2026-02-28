import type { WordEntry } from '@/types/content';

export const MON_WORDS: WordEntry[] = [
  {
    slug: 'money',
    lemma: 'money',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈmʌn.i/' }, us: { ipa: '/ˈmʌn.i/' } },
    definition: {
      en: 'A medium of exchange in the form of coins and banknotes.',
      zh: '钱；货币；财富',
    },
    examples: [
      { en: ['She saved enough money to buy a new car.'], zh: ['她攒了足够的钱买了一辆新车。'] },
    ],
    rootBreakdown: [
      { surface: 'mon', type: 'root', rootSlug: 'mon' },
      { surface: 'ey', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mon ("warn, advise" → coin, from the mint at the temple of Juno Moneta) + -ey → a medium of exchange.',
      zh: 'mon（警告 → 铸币，源自朱诺·莫内塔神庙的铸币厂）+ -ey → 交换媒介。',
    },
    relatedWords: ['monetary', 'monetize'],
  },
  {
    slug: 'monetary',
    lemma: 'monetary',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈmʌn.ɪ.tər.i/' }, us: { ipa: '/ˈmɑː.nɪ.ter.i/' } },
    definition: { en: 'Relating to money or currency.', zh: '货币的；金融的' },
    examples: [
      {
        en: ["The central bank controls the country's monetary policy."],
        zh: ['中央银行掌控国家的货币政策。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mon', type: 'root', rootSlug: 'mon' },
      { surface: 'et', type: 'other' },
      { surface: 'ary', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mon ("coin") + -etary (adj.) → relating to coinage, hence financial.',
      zh: 'mon（铸币）+ -etary（形容词后缀）→ 与铸币相关的，即金融的。',
    },
    relatedWords: ['money', 'monetize'],
  },
  {
    slug: 'monitor',
    lemma: 'monitor',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: { uk: { ipa: '/ˈmɒn.ɪ.tər/' }, us: { ipa: '/ˈmɑː.nɪ.tɚ/' } },
    definition: {
      en: 'A device used for observing or checking; to watch and check over a period of time.',
      zh: '监视器；监控；监督',
    },
    examples: [
      {
        en: ["Doctors monitor the patient's heart rate around the clock."],
        zh: ['医生全天候监测病人的心率。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mon', type: 'root', rootSlug: 'mon' },
      { surface: 'itor', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mon ("warn, advise") + -itor (agent) → one who warns or watches, a supervisor.',
      zh: 'mon（警告）+ -itor（施动者后缀）→ 警告或监视的人，即监控器。',
    },
    relatedWords: ['monitoring', 'premonition', 'admonish'],
  },
  {
    slug: 'premonition',
    lemma: 'premonition',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌprem.əˈnɪʃ.ən/' }, us: { ipa: '/ˌpriː.məˈnɪʃ.ən/' } },
    definition: {
      en: 'A strong feeling that something is about to happen, especially something unpleasant.',
      zh: '预感；预兆',
    },
    examples: [
      {
        en: ['She had a premonition that something bad was going to happen.'],
        zh: ['她有一种不祥的预感。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pre', type: 'prefix' },
      { surface: 'mon', type: 'root', rootSlug: 'mon' },
      { surface: 'ition', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pre- ("before") + mon ("warn") + -ition (noun) → a warning beforehand.',
      zh: 'pre-（之前）+ mon（警告）+ -ition（名词后缀）→ 事先的警告，即预感。',
    },
    relatedWords: ['monitor', 'admonish', 'premonitory'],
  },
  {
    slug: 'admonish',
    lemma: 'admonish',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ədˈmɒn.ɪʃ/' }, us: { ipa: '/ədˈmɑː.nɪʃ/' } },
    definition: {
      en: 'To warn or reprimand someone firmly; to urge or advise earnestly.',
      zh: '告诫；警告；劝告',
    },
    examples: [
      {
        en: ['The teacher admonished the students for talking during the exam.'],
        zh: ['老师告诫学生们考试时不要说话。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ad', type: 'prefix' },
      { surface: 'mon', type: 'root', rootSlug: 'mon' },
      { surface: 'ish', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ad- ("to") + mon ("warn") + -ish (verb) → to warn toward, to reprimand.',
      zh: 'ad-（向）+ mon（警告）+ -ish（动词后缀）→ 向…警告，即告诫。',
    },
    relatedWords: ['admonition', 'monitor', 'premonition'],
  },
  {
    slug: 'monument',
    lemma: 'monument',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈmɒn.jʊ.mənt/' }, us: { ipa: '/ˈmɑː.njʊ.mənt/' } },
    definition: {
      en: 'A statue or building erected to commemorate a notable person or event.',
      zh: '纪念碑；丰碑',
    },
    examples: [
      {
        en: ['The Lincoln Memorial is one of the most visited monuments in Washington.'],
        zh: ['林肯纪念堂是华盛顿最受欢迎的纪念碑之一。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mon', type: 'root', rootSlug: 'mon' },
      { surface: 'u', type: 'connector' },
      { surface: 'ment', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mon ("remind, warn") + -ument (noun) → something that reminds, a memorial.',
      zh: 'mon（提醒）+ -ument（名词后缀）→ 提醒人的东西，即纪念碑。',
    },
    relatedWords: ['monumental', 'monitor'],
  },
  {
    slug: 'monumental',
    lemma: 'monumental',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˌmɒn.jʊˈmen.təl/' }, us: { ipa: '/ˌmɑː.njʊˈmen.t̬əl/' } },
    definition: {
      en: 'Great in importance, size, or extent; serving as a monument.',
      zh: '巨大的；纪念碑式的；不朽的',
    },
    examples: [
      {
        en: ['Building the Great Wall was a monumental achievement.'],
        zh: ['修建长城是一项不朽的成就。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mon', type: 'root', rootSlug: 'mon' },
      { surface: 'u', type: 'connector' },
      { surface: 'ment', type: 'other' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'monument + -al (adj.) → of the nature of a monument, hence immense.',
      zh: 'monument（纪念碑）+ -al（形容词后缀）→ 纪念碑般的，即巨大的。',
    },
    relatedWords: ['monument', 'monumentally'],
  },
  {
    slug: 'common',
    lemma: 'common',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈkɒm.ən/' }, us: { ipa: '/ˈkɑː.mən/' } },
    definition: {
      en: 'Occurring frequently; shared by two or more; ordinary.',
      zh: '常见的；共同的；普通的',
    },
    examples: [
      {
        en: ['It is common for people to feel nervous before a job interview.'],
        zh: ['人们在面试前感到紧张是很常见的。'],
      },
    ],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'mon', type: 'root', rootSlug: 'mon' },
    ],
    morphologyNote: {
      en: 'com- ("together") + mon ("shared duty") → shared by all, hence ordinary.',
      zh: 'com-（共同）+ mon（共有义务）→ 大家共有的，即普通的。',
    },
    relatedWords: ['commonly', 'uncommon', 'commons'],
  },
  {
    slug: 'monk',
    lemma: 'monk',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/mʌŋk/' }, us: { ipa: '/mʌŋk/' } },
    definition: {
      en: 'A member of a religious community of men living under vows.',
      zh: '僧侣；修道士',
    },
    examples: [
      {
        en: ['The monks spent their days in prayer and meditation.'],
        zh: ['僧侣们整日祈祷和冥想。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mon', type: 'root', rootSlug: 'mon' },
      { surface: 'k', type: 'other' },
    ],
    morphologyNote: {
      en: 'mon ("alone, one" from Greek monos) + -k → one who lives alone, a solitary religious person.',
      zh: 'mon（独自、一个，来自希腊语 monos）+ -k → 独居的宗教人士，即僧侣。',
    },
    relatedWords: ['monastery', 'monastic'],
  },
  {
    slug: 'monastery',
    lemma: 'monastery',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈmɒn.ə.stər.i/' }, us: { ipa: '/ˈmɑː.nə.ster.i/' } },
    definition: {
      en: 'A building occupied by a community of monks living under religious vows.',
      zh: '修道院；寺院',
    },
    examples: [
      {
        en: ['The ancient monastery sits atop a remote mountain.'],
        zh: ['这座古老的修道院坐落在偏僻的山顶上。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mon', type: 'root', rootSlug: 'mon' },
      { surface: 'astery', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mon ("alone") + -astery (place) → a place for those who live alone, a religious retreat.',
      zh: 'mon（独自）+ -astery（场所后缀）→ 独居者的地方，即修道院。',
    },
    relatedWords: ['monk', 'monastic'],
  },
  {
    slug: 'monopoly',
    lemma: 'monopoly',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/məˈnɒp.əl.i/' }, us: { ipa: '/məˈnɑː.pəl.i/' } },
    definition: {
      en: 'The exclusive possession or control of the supply of a commodity or service.',
      zh: '垄断；专卖权',
    },
    examples: [
      {
        en: ['The company held a virtual monopoly on the software market.'],
        zh: ['该公司实际上垄断了软件市场。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mono', type: 'root', rootSlug: 'mon' },
      { surface: 'poly', type: 'root' },
    ],
    morphologyNote: {
      en: 'mono ("one, alone") + poly ("sell") → sole seller, exclusive control.',
      zh: 'mono（单独）+ poly（卖）→ 唯一的卖家，即垄断。',
    },
    relatedWords: ['monochrome', 'monolingual'],
  },
  {
    slug: 'monetize',
    lemma: 'monetize',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ˈmʌn.ɪ.taɪz/' }, us: { ipa: '/ˈmɑː.nɪ.taɪz/' } },
    definition: {
      en: 'To convert into or express in terms of money; to earn revenue from.',
      zh: '货币化；变现',
    },
    examples: [
      {
        en: ['Many content creators struggle to monetize their online presence.'],
        zh: ['许多内容创作者努力将自己的网络影响力变现。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mon', type: 'root', rootSlug: 'mon' },
      { surface: 'et', type: 'other' },
      { surface: 'ize', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mon ("coin") + -etize (verb) → to turn into coin, to make money from.',
      zh: 'mon（铸币）+ -etize（动词后缀）→ 使变为货币，即变现。',
    },
    relatedWords: ['monetary', 'money', 'monetization'],
  },
];
