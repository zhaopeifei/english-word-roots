import type { WordEntry } from '@/types/content';

export const FER_WORDS: WordEntry[] = [
  {
    slug: 'prefer',
    lemma: 'prefer',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/prɪˈfɜːr/' }, us: { ipa: '/prɪˈfɝː/' } },
    definition: { en: 'To like one thing better than another; to choose.', zh: '更喜欢；偏好' },
    examples: [
      { en: ['I prefer tea to coffee in the morning.'], zh: ['早上我更喜欢喝茶而不是咖啡。'] },
    ],
    rootBreakdown: [
      { surface: 'pre', type: 'prefix' },
      { surface: 'fer', type: 'root', rootSlug: 'fer' },
    ],
    morphologyNote: {
      en: 'pre- ("before") + fer ("carry, bear") → to carry before others, to favor.',
      zh: 'pre-（在……之前）+ fer（携带、承载）→ 放在其他之前，即偏好。',
    },
    relatedWords: ['preference', 'preferable', 'confer'],
  },
  {
    slug: 'confer',
    lemma: 'confer',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/kənˈfɜːr/' }, us: { ipa: '/kənˈfɝː/' } },
    definition: {
      en: 'To grant a title or honor; to discuss something with someone.',
      zh: '授予；协商；讨论',
    },
    examples: [
      {
        en: ['The university conferred an honorary degree upon the scientist.'],
        zh: ['大学授予这位科学家荣誉学位。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'fer', type: 'root', rootSlug: 'fer' },
    ],
    morphologyNote: {
      en: 'con- ("together") + fer ("carry, bring") → to bring together, to consult or grant.',
      zh: 'con-（一起）+ fer（携带、带来）→ 带到一起，即协商或授予。',
    },
    relatedWords: ['conference', 'prefer', 'refer'],
  },
  {
    slug: 'differ',
    lemma: 'differ',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ˈdɪf.ər/' }, us: { ipa: '/ˈdɪf.ɚ/' } },
    definition: { en: 'To be unlike or distinct; to disagree.', zh: '不同；相异；不同意' },
    examples: [
      {
        en: ['Opinions differ on the best approach to the problem.'],
        zh: ['关于解决问题的最佳方法，意见不一。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dif', type: 'prefix' },
      { surface: 'fer', type: 'root', rootSlug: 'fer' },
    ],
    morphologyNote: {
      en: 'dif- (from dis-, "apart") + fer ("carry") → to carry apart, to be distinct.',
      zh: 'dif-（源自 dis-，分开）+ fer（携带）→ 各自携带不同的东西，即相异。',
    },
    relatedWords: ['difference', 'different', 'differentiate'],
  },
  {
    slug: 'difference',
    lemma: 'difference',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈdɪf.ər.əns/' }, us: { ipa: '/ˈdɪf.ɚ.əns/' } },
    definition: {
      en: 'A point or way in which people or things are unlike.',
      zh: '差异；不同；差别',
    },
    examples: [
      {
        en: ['There is a big difference between the two proposals.'],
        zh: ['两个提案之间有很大的差异。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dif', type: 'prefix' },
      { surface: 'fer', type: 'root', rootSlug: 'fer' },
      { surface: 'ence', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dif- ("apart") + fer ("carry") + -ence (noun) → the state of being carried apart, a distinction.',
      zh: 'dif-（分开）+ fer（携带）+ -ence（名词后缀）→ 被分开携带的状态，即差异。',
    },
    relatedWords: ['differ', 'different', 'indifferent'],
  },
  {
    slug: 'refer',
    lemma: 'refer',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/rɪˈfɜːr/' }, us: { ipa: '/rɪˈfɝː/' } },
    definition: {
      en: 'To direct attention to; to consult a source for information.',
      zh: '参考；提及；指的是',
    },
    examples: [
      {
        en: ['Please refer to the manual for further instructions.'],
        zh: ['请参考手册以获取更多说明。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'fer', type: 'root', rootSlug: 'fer' },
    ],
    morphologyNote: {
      en: 're- ("back") + fer ("carry") → to carry back, to direct back to a source.',
      zh: 're-（回）+ fer（携带）→ 带回去，即参考。',
    },
    relatedWords: ['reference', 'referral', 'defer'],
  },
  {
    slug: 'infer',
    lemma: 'infer',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ɪnˈfɜːr/' }, us: { ipa: '/ɪnˈfɝː/' } },
    definition: { en: 'To deduce or conclude from evidence and reasoning.', zh: '推断；推论' },
    examples: [
      {
        en: ['From the data, we can infer that the trend will continue.'],
        zh: ['根据数据，我们可以推断这一趋势将持续。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'fer', type: 'root', rootSlug: 'fer' },
    ],
    morphologyNote: {
      en: 'in- ("in, into") + fer ("carry") → to carry in, to bring to a conclusion.',
      zh: 'in-（进入）+ fer（携带）→ 携带进来，即推断出结论。',
    },
    relatedWords: ['inference', 'refer', 'confer'],
  },
  {
    slug: 'defer',
    lemma: 'defer',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/dɪˈfɜːr/' }, us: { ipa: '/dɪˈfɝː/' } },
    definition: {
      en: "To put off to a later time; to yield to someone's opinion.",
      zh: '推迟；延期；顺从',
    },
    examples: [
      {
        en: ['They decided to defer the decision until next month.'],
        zh: ['他们决定将决定推迟到下个月。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'fer', type: 'root', rootSlug: 'fer' },
    ],
    morphologyNote: {
      en: 'de- ("away, down") + fer ("carry") → to carry away/down, to postpone or yield.',
      zh: 'de-（离开、向下）+ fer（携带）→ 携带离开，即推迟或顺从。',
    },
    relatedWords: ['deferral', 'deference', 'refer'],
  },
  {
    slug: 'suffer',
    lemma: 'suffer',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ˈsʌf.ər/' }, us: { ipa: '/ˈsʌf.ɚ/' } },
    definition: { en: 'To experience pain, distress, or hardship.', zh: '遭受；忍受；受苦' },
    examples: [
      {
        en: ['Millions of people suffer from food insecurity.'],
        zh: ['数百万人遭受粮食不安全的困扰。'],
      },
    ],
    rootBreakdown: [
      { surface: 'suf', type: 'prefix' },
      { surface: 'fer', type: 'root', rootSlug: 'fer' },
    ],
    morphologyNote: {
      en: 'suf- (from sub-, "under") + fer ("carry, bear") → to carry under, to bear a burden.',
      zh: 'suf-（源自 sub-，在……之下）+ fer（携带、承受）→ 在重压下承受，即受苦。',
    },
    relatedWords: ['suffering', 'sufferer', 'insufferable'],
  },
  {
    slug: 'transfer',
    lemma: 'transfer',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: { uk: { ipa: '/trænsˈfɜːr/' }, us: { ipa: '/trænsˈfɝː/' } },
    definition: { en: 'To move from one place or person to another.', zh: '转移；调动；转让' },
    examples: [
      {
        en: ['She transferred to a different department within the company.'],
        zh: ['她调到了公司的另一个部门。'],
      },
    ],
    rootBreakdown: [
      { surface: 'trans', type: 'prefix' },
      { surface: 'fer', type: 'root', rootSlug: 'fer' },
    ],
    morphologyNote: {
      en: 'trans- ("across") + fer ("carry") → to carry across, to move.',
      zh: 'trans-（跨越）+ fer（携带）→ 携带到对面，即转移。',
    },
    relatedWords: ['transference', 'transferable', 'refer'],
  },
  {
    slug: 'fertile',
    lemma: 'fertile',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈfɜː.taɪl/' }, us: { ipa: '/ˈfɝː.t̬əl/' } },
    definition: {
      en: 'Producing abundant vegetation or offspring; inventive.',
      zh: '肥沃的；能生育的；富有创造力的',
    },
    examples: [
      {
        en: ['The fertile soil of the river valley supports diverse crops.'],
        zh: ['河谷肥沃的土壤养育了多样的作物。'],
      },
    ],
    rootBreakdown: [
      { surface: 'fer', type: 'root', rootSlug: 'fer' },
      { surface: 'tile', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'fer ("carry, bear") + -tile (adjective suffix) → able to bear fruit, productive.',
      zh: 'fer（携带、结出）+ -tile（形容词后缀）→ 能结出果实的，即肥沃的。',
    },
    relatedWords: ['fertility', 'fertilize', 'infertile'],
  },
  {
    slug: 'conference',
    lemma: 'conference',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈkɒn.fər.əns/' }, us: { ipa: '/ˈkɑːn.fɚ.əns/' } },
    definition: { en: 'A formal meeting for discussion.', zh: '会议；研讨会' },
    examples: [
      {
        en: ['The annual conference attracts researchers from around the world.'],
        zh: ['年度研讨会吸引了来自世界各地的研究人员。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'fer', type: 'root', rootSlug: 'fer' },
      { surface: 'ence', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'con- ("together") + fer ("bring") + -ence (noun) → a bringing together, a meeting.',
      zh: 'con-（一起）+ fer（带来）+ -ence（名词后缀）→ 聚到一起，即会议。',
    },
    relatedWords: ['confer', 'prefer', 'refer'],
  },
];
