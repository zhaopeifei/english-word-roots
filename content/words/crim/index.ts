import type { WordEntry } from '@/types/content';

export const CRIM_WORDS: WordEntry[] = [
  {
    slug: 'crime',
    lemma: 'crime',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/kraɪm/' },
      us: { ipa: '/kraɪm/' },
    },
    definition: {
      en: 'An action that constitutes a serious offense against the law.',
      zh: '犯罪；罪行',
    },
    examples: [
      {
        en: ['The police are investigating a series of crimes in the area.'],
        zh: ['警方正在调查该地区的一系列犯罪事件。'],
      },
    ],
    rootBreakdown: [
      { surface: 'crim', type: 'root', rootSlug: 'crim' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From Latin crimen ("accusation, offense"). The root crim means "to judge, accuse, separate".',
      zh: '源自拉丁语 crimen（指控、罪行）。词根 crim 意为"判断、指控、区分"。',
    },
    relatedWords: ['criminal', 'criminology', 'incriminate'],
  },
  {
    slug: 'criminal',
    lemma: 'criminal',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: {
      uk: { ipa: '/ˈkrɪm.ɪ.nəl/' },
      us: { ipa: '/ˈkrɪm.ɪ.nəl/' },
    },
    definition: {
      en: 'A person who has committed a crime; relating to crime.',
      zh: '罪犯；犯罪的',
    },
    examples: [
      {
        en: ['The criminal was sentenced to ten years in prison.'],
        zh: ['罪犯被判处十年监禁。'],
      },
    ],
    rootBreakdown: [
      { surface: 'crim', type: 'root', rootSlug: 'crim' },
      { surface: 'in', type: 'connector' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'crim ("accusation, offense") + -in- + -al (adjective/noun) → relating to crime or one who commits crime.',
      zh: 'crim（指控、罪行）+ -in- + -al（形容词/名词后缀）→ 与犯罪有关的，或犯罪者。',
    },
    relatedWords: ['crime', 'criminology', 'criminalize'],
  },
  {
    slug: 'criminology',
    lemma: 'criminology',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˌkrɪm.ɪˈnɒl.ə.dʒi/' },
      us: { ipa: '/ˌkrɪm.ɪˈnɑː.lə.dʒi/' },
    },
    definition: {
      en: 'The scientific study of crime and criminals.',
      zh: '犯罪学',
    },
    examples: [
      {
        en: ['She majored in criminology to understand the causes of crime.'],
        zh: ['她主修犯罪学以了解犯罪的成因。'],
      },
    ],
    rootBreakdown: [
      { surface: 'crim', type: 'root', rootSlug: 'crim' },
      { surface: 'in', type: 'connector' },
      { surface: 'o', type: 'connector' },
      { surface: 'logy', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'crim ("crime") + -in- + -o- + -logy ("study") → the study of crime.',
      zh: 'crim（犯罪）+ -in- + -o- + -logy（学科）→ 研究犯罪的学科。',
    },
    relatedWords: ['crime', 'criminal', 'criminologist'],
  },
  {
    slug: 'discriminate',
    lemma: 'discriminate',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/dɪˈskrɪm.ɪ.neɪt/' },
      us: { ipa: '/dɪˈskrɪm.ɪ.neɪt/' },
    },
    definition: {
      en: 'To recognize a distinction; to treat a person unfairly based on prejudice.',
      zh: '区别对待；歧视；辨别',
    },
    examples: [
      {
        en: ['It is illegal to discriminate against someone based on their race.'],
        zh: ['基于种族歧视某人是违法的。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dis', type: 'prefix' },
      { surface: 'crim', type: 'root', rootSlug: 'crim' },
      { surface: 'in', type: 'connector' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dis- ("apart") + crim ("separate, judge") + -in- + -ate (verb) → to separate apart, to distinguish or treat differently.',
      zh: 'dis-（分开）+ crim（分离、判断）+ -in- + -ate（动词后缀）→ 分开对待，即歧视或辨别。',
    },
    relatedWords: ['discrimination', 'discriminatory', 'indiscriminate'],
  },
  {
    slug: 'discrimination',
    lemma: 'discrimination',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/dɪˌskrɪm.ɪˈneɪ.ʃən/' },
      us: { ipa: '/dɪˌskrɪm.ɪˈneɪ.ʃən/' },
    },
    definition: {
      en: 'Unjust treatment of different categories of people; the ability to distinguish.',
      zh: '歧视；辨别力',
    },
    examples: [
      {
        en: ['Laws were passed to combat racial discrimination.'],
        zh: ['通过了法律来打击种族歧视。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dis', type: 'prefix' },
      { surface: 'crim', type: 'root', rootSlug: 'crim' },
      { surface: 'in', type: 'connector' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dis- ("apart") + crim ("judge, separate") + -in- + -ation (noun) → the act of separating apart, treating differently.',
      zh: 'dis-（分开）+ crim（判断、分离）+ -in- + -ation（名词后缀）→ 区别对待的行为。',
    },
    relatedWords: ['discriminate', 'discriminatory', 'indiscriminate'],
  },
  {
    slug: 'incriminate',
    lemma: 'incriminate',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ɪnˈkrɪm.ɪ.neɪt/' },
      us: { ipa: '/ɪnˈkrɪm.ɪ.neɪt/' },
    },
    definition: {
      en: 'To make someone appear guilty of a crime or wrongdoing.',
      zh: '使负罪；控告；牵连',
    },
    examples: [
      {
        en: ['The evidence could incriminate several high-ranking officials.'],
        zh: ['这些证据可能牵连到几位高级官员。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'crim', type: 'root', rootSlug: 'crim' },
      { surface: 'in', type: 'connector' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("in, into") + crim ("accuse, crime") + -in- + -ate (verb) → to bring into a crime, to accuse.',
      zh: 'in-（进入）+ crim（指控、犯罪）+ -in- + -ate（动词后缀）→ 使牵涉犯罪，即控告。',
    },
    relatedWords: ['crime', 'criminal', 'incrimination'],
  },
  {
    slug: 'indiscriminate',
    lemma: 'indiscriminate',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˌɪn.dɪˈskrɪm.ɪ.nət/' },
      us: { ipa: '/ˌɪn.dɪˈskrɪm.ɪ.nət/' },
    },
    definition: {
      en: 'Done at random or without careful judgment.',
      zh: '不加区分的；任意的；不分青红皂白的',
    },
    examples: [
      {
        en: ['The indiscriminate use of antibiotics has led to drug resistance.'],
        zh: ['不加区分地使用抗生素导致了耐药性。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'dis', type: 'prefix' },
      { surface: 'crim', type: 'root', rootSlug: 'crim' },
      { surface: 'in', type: 'connector' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("not") + discriminate ("distinguish") → not distinguishing, random.',
      zh: 'in-（不）+ discriminate（区分）→ 不加区分的，即任意的。',
    },
    relatedWords: ['discriminate', 'discrimination', 'crime'],
  },
];
