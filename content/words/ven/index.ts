import type { WordEntry } from '@/types/content';

export const VEN_WORDS: WordEntry[] = [
  {
    slug: 'event',
    lemma: 'event',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ɪˈvent/' }, us: { ipa: '/ɪˈvent/' } },
    definition: { en: 'A thing that happens, especially one of importance.', zh: '事件；活动' },
    examples: [
      {
        en: ['The charity gala was the biggest event of the year.'],
        zh: ['慈善晚会是今年最大的活动。'],
      },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'vent', type: 'root', rootSlug: 'ven' },
    ],
    morphologyNote: {
      en: 'e- ("out") + vent ("come") → something that comes out, i.e. an occurrence.',
      zh: 'e-（向外）+ vent（来）→ 冒出来的事情，即事件。',
    },
    relatedWords: ['eventual', 'adventure', 'invent'],
  },
  {
    slug: 'convention',
    lemma: 'convention',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/kənˈven.ʃən/' }, us: { ipa: '/kənˈven.ʃən/' } },
    definition: {
      en: 'A way in which something is usually done; a large meeting or conference.',
      zh: '惯例；大会；公约',
    },
    examples: [
      {
        en: ['The annual convention attracted thousands of delegates.'],
        zh: ['年度大会吸引了数千名代表。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'ven', type: 'root', rootSlug: 'ven' },
      { surface: 'tion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'con- ("together") + ven ("come") + -tion (noun) → a coming together.',
      zh: 'con-（一起）+ ven（来）+ -tion（名词后缀）→ 走到一起，即大会、惯例。',
    },
    relatedWords: ['conventional', 'convene', 'unconventional'],
  },
  {
    slug: 'invent',
    lemma: 'invent',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ɪnˈvent/' }, us: { ipa: '/ɪnˈvent/' } },
    definition: {
      en: 'To create or design something that has not existed before.',
      zh: '发明；创造',
    },
    examples: [
      {
        en: ['Thomas Edison invented the practical light bulb.'],
        zh: ['托马斯·爱迪生发明了实用的灯泡。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'vent', type: 'root', rootSlug: 'ven' },
    ],
    morphologyNote: {
      en: 'in- ("upon") + vent ("come") → to come upon something new.',
      zh: 'in-（到…上）+ vent（来）→ 发现新事物，即发明。',
    },
    relatedWords: ['invention', 'inventor', 'reinvent'],
  },
  {
    slug: 'prevent',
    lemma: 'prevent',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/prɪˈvent/' }, us: { ipa: '/prɪˈvent/' } },
    definition: { en: 'To keep something from happening.', zh: '阻止；预防' },
    examples: [
      { en: ['Vaccines help prevent the spread of disease.'], zh: ['疫苗有助于预防疾病传播。'] },
    ],
    rootBreakdown: [
      { surface: 'pre', type: 'prefix' },
      { surface: 'vent', type: 'root', rootSlug: 'ven' },
    ],
    morphologyNote: {
      en: 'pre- ("before") + vent ("come") → to come before and block.',
      zh: 'pre-（在前面）+ vent（来）→ 提前到来阻挡，即预防。',
    },
    relatedWords: ['prevention', 'preventable', 'event'],
  },
  {
    slug: 'intervene',
    lemma: 'intervene',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ˌɪn.təˈviːn/' }, us: { ipa: '/ˌɪn.t̬ɚˈviːn/' } },
    definition: {
      en: 'To come between in order to prevent or alter an outcome.',
      zh: '干预；介入；调停',
    },
    examples: [
      {
        en: ['The government decided to intervene in the crisis.'],
        zh: ['政府决定干预这场危机。'],
      },
    ],
    rootBreakdown: [
      { surface: 'inter', type: 'prefix' },
      { surface: 'ven', type: 'root', rootSlug: 'ven' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'inter- ("between") + ven ("come") → to come between.',
      zh: 'inter-（在…之间）+ ven（来）→ 介于其间，即干预。',
    },
    relatedWords: ['intervention', 'convene', 'prevent'],
  },
  {
    slug: 'adventure',
    lemma: 'adventure',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ədˈven.tʃər/' }, us: { ipa: '/ədˈven.tʃɚ/' } },
    definition: { en: 'An unusual and exciting experience or activity.', zh: '冒险；奇遇' },
    examples: [
      {
        en: ['Hiking in the Himalayas was a great adventure.'],
        zh: ['在喜马拉雅山徒步是一次伟大的冒险。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ad', type: 'prefix' },
      { surface: 'vent', type: 'root', rootSlug: 'ven' },
      { surface: 'ure', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ad- ("toward") + vent ("come") + -ure (noun) → something that comes toward you, i.e. an exciting event.',
      zh: 'ad-（朝向）+ vent（来）+ -ure（名词后缀）→ 向你涌来的事物，即冒险。',
    },
    relatedWords: ['adventurous', 'venture', 'event'],
  },
  {
    slug: 'convenient',
    lemma: 'convenient',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/kənˈviː.ni.ənt/' }, us: { ipa: '/kənˈviː.ni.ənt/' } },
    definition: {
      en: "Fitting in well with a person's needs or plans; involving little trouble.",
      zh: '方便的；便利的',
    },
    examples: [
      {
        en: ['The hotel is in a convenient location near the station.'],
        zh: ['酒店位于车站附近，位置便利。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'ven', type: 'root', rootSlug: 'ven' },
      { surface: 'ient', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'con- ("together") + ven ("come") + -ient (adj.) → coming together well, i.e. suitable.',
      zh: 'con-（一起）+ ven（来）+ -ient（形容词后缀）→ 合在一起恰好合适的，即方便的。',
    },
    relatedWords: ['convenience', 'inconvenient', 'convention'],
  },
  {
    slug: 'revenue',
    lemma: 'revenue',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈrev.ən.juː/' }, us: { ipa: '/ˈrev.ən.uː/' } },
    definition: {
      en: 'Income, especially when of an organization and of a substantial nature.',
      zh: '收入；税收；营收',
    },
    examples: [
      {
        en: ['The company reported record revenue this quarter.'],
        zh: ['公司本季度报告了创纪录的营收。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'ven', type: 'root', rootSlug: 'ven' },
      { surface: 'ue', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("back") + ven ("come") + -ue (noun) → that which comes back, i.e. returns on investment.',
      zh: 're-（回来）+ ven（来）+ -ue（名词后缀）→ 回来的东西，即收入。',
    },
    relatedWords: ['event', 'advent', 'invent'],
  },
  {
    slug: 'circumvent',
    lemma: 'circumvent',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ˌsɜː.kəmˈvent/' }, us: { ipa: '/ˌsɝː.kəmˈvent/' } },
    definition: { en: 'To find a way around an obstacle or rule.', zh: '规避；绕过' },
    examples: [
      {
        en: ['They tried to circumvent the regulations by using a loophole.'],
        zh: ['他们试图利用漏洞规避规定。'],
      },
    ],
    rootBreakdown: [
      { surface: 'circum', type: 'prefix' },
      { surface: 'vent', type: 'root', rootSlug: 'ven' },
    ],
    morphologyNote: {
      en: 'circum- ("around") + vent ("come") → to come around, i.e. to bypass.',
      zh: 'circum-（绕过）+ vent（来）→ 绕过来，即规避。',
    },
    relatedWords: ['prevent', 'intervene', 'convene'],
  },
  {
    slug: 'venture',
    lemma: 'venture',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: { uk: { ipa: '/ˈven.tʃər/' }, us: { ipa: '/ˈven.tʃɚ/' } },
    definition: {
      en: 'A risky or daring undertaking; to dare to do something.',
      zh: '冒险事业；敢于',
    },
    examples: [
      {
        en: ['Starting a business is always a risky venture.'],
        zh: ['创业总是一项充满风险的事业。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ven', type: 'root', rootSlug: 'ven' },
      { surface: 'ture', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ven ("come") + -ture (noun) → a coming into the unknown.',
      zh: 'ven（来）+ -ture（名词后缀）→ 走进未知，即冒险。',
    },
    relatedWords: ['adventure', 'venturesome', 'event'],
  },
];
