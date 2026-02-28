import type { WordEntry } from '@/types/content';

export const PEL_WORDS: WordEntry[] = [
  {
    slug: 'impel',
    lemma: 'impel',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ɪmˈpel/' }, us: { ipa: '/ɪmˈpel/' } },
    definition: {
      en: 'To drive or urge someone to do something; to force forward.',
      zh: '推动；驱使；激励',
    },
    examples: [
      {
        en: ['A sense of duty impelled her to volunteer for the mission.'],
        zh: ['责任感驱使她自愿参加这项任务。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'pel', type: 'root', rootSlug: 'pel' },
    ],
    morphologyNote: {
      en: 'im- ("in, into") + pel ("drive, push") → to drive into, to urge forward.',
      zh: 'im-（进入）+ pel（驱动）→ 驱使前进，即推动。',
    },
    relatedWords: ['impulse', 'impulsive', 'compel'],
  },
  {
    slug: 'impulse',
    lemma: 'impulse',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈɪm.pʌls/' }, us: { ipa: '/ˈɪm.pʌls/' } },
    definition: {
      en: 'A sudden strong urge to act; a driving force; a pulse of energy.',
      zh: '冲动；推动力；脉冲',
    },
    examples: [
      {
        en: ['She resisted the impulse to buy the expensive dress.'],
        zh: ['她克制住了买那件昂贵裙子的冲动。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'puls', type: 'root', rootSlug: 'pel' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- ("in") + puls (variant of pel, "drive") + -e → a drive from within, a sudden urge.',
      zh: 'im-（进入）+ puls（pel 的变体，驱动）+ -e → 内在的驱力，即冲动。',
    },
    relatedWords: ['impel', 'impulsive'],
  },
  {
    slug: 'expel',
    lemma: 'expel',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ɪkˈspel/' }, us: { ipa: '/ɪkˈspel/' } },
    definition: {
      en: 'To force out or dismiss from a place, organization, or school.',
      zh: '驱逐；开除；排出',
    },
    examples: [
      {
        en: ['The student was expelled from school for repeated misconduct.'],
        zh: ['这名学生因屡次违纪被学校开除。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'pel', type: 'root', rootSlug: 'pel' },
    ],
    morphologyNote: {
      en: 'ex- ("out") + pel ("drive") → to drive out, to force to leave.',
      zh: 'ex-（出）+ pel（驱动）→ 驱赶出去，即驱逐。',
    },
    relatedWords: ['expulsion', 'expellable'],
  },
  {
    slug: 'propel',
    lemma: 'propel',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/prəˈpel/' }, us: { ipa: '/prəˈpel/' } },
    definition: { en: 'To drive or push forward.', zh: '推进；驱动' },
    examples: [
      {
        en: ['The rocket engines propel the spacecraft into orbit.'],
        zh: ['火箭发动机将航天器推入轨道。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pro', type: 'prefix' },
      { surface: 'pel', type: 'root', rootSlug: 'pel' },
    ],
    morphologyNote: {
      en: 'pro- ("forward") + pel ("drive") → to drive forward.',
      zh: 'pro-（向前）+ pel（驱动）→ 向前驱动，即推进。',
    },
    relatedWords: ['propeller', 'propulsion'],
  },
  {
    slug: 'propulsion',
    lemma: 'propulsion',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/prəˈpʌl.ʃən/' }, us: { ipa: '/prəˈpʌl.ʃən/' } },
    definition: {
      en: 'The action of driving or pushing forward; a force that propels.',
      zh: '推进；推进力',
    },
    examples: [
      {
        en: ['Jet propulsion revolutionized air travel in the 20th century.'],
        zh: ['喷气推进在20世纪彻底改变了航空旅行。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pro', type: 'prefix' },
      { surface: 'puls', type: 'root', rootSlug: 'pel' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pro- ("forward") + puls ("drive") + -ion (noun) → the act of driving forward.',
      zh: 'pro-（向前）+ puls（驱动）+ -ion（名词后缀）→ 向前驱动的行为，即推进。',
    },
    relatedWords: ['propel', 'propeller'],
  },
  {
    slug: 'compel',
    lemma: 'compel',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/kəmˈpel/' }, us: { ipa: '/kəmˈpel/' } },
    definition: { en: 'To force or oblige someone to do something.', zh: '强迫；迫使' },
    examples: [
      {
        en: ['The evidence compelled the jury to return a guilty verdict.'],
        zh: ['证据迫使陪审团做出有罪判决。'],
      },
    ],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'pel', type: 'root', rootSlug: 'pel' },
    ],
    morphologyNote: {
      en: 'com- ("together, intensifier") + pel ("drive") → to drive together, to force.',
      zh: 'com-（加强语气）+ pel（驱动）→ 强力驱使，即强迫。',
    },
    relatedWords: ['compelling', 'compulsion', 'compulsory'],
  },
  {
    slug: 'compelling',
    lemma: 'compelling',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/kəmˈpel.ɪŋ/' }, us: { ipa: '/kəmˈpel.ɪŋ/' } },
    definition: {
      en: 'Evoking interest or attention in an irresistible way; convincing.',
      zh: '引人注目的；令人信服的',
    },
    examples: [
      {
        en: ['The documentary presented a compelling argument for climate action.'],
        zh: ['这部纪录片为气候行动提出了令人信服的论据。'],
      },
    ],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'pel', type: 'root', rootSlug: 'pel' },
      { surface: 'ling', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'com- ("intensifier") + pel ("drive") + -ling (adj.) → that which drives forcefully, irresistibly engaging.',
      zh: 'com-（加强语气）+ pel（驱动）+ -ling（形容词后缀）→ 强力吸引的。',
    },
    relatedWords: ['compel', 'compulsion'],
  },
  {
    slug: 'compulsory',
    lemma: 'compulsory',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/kəmˈpʌl.sər.i/' }, us: { ipa: '/kəmˈpʌl.sɚ.i/' } },
    definition: { en: 'Required by law or rule; obligatory.', zh: '强制的；义务的；必修的' },
    examples: [
      {
        en: ['Education is compulsory for children between the ages of six and sixteen.'],
        zh: ['六到十六岁儿童必须接受义务教育。'],
      },
    ],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'puls', type: 'root', rootSlug: 'pel' },
      { surface: 'ory', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'com- ("intensifier") + puls ("drive") + -ory (adj.) → driven by force, mandatory.',
      zh: 'com-（加强语气）+ puls（驱动）+ -ory（形容词后缀）→ 被强制驱动的，即义务的。',
    },
    relatedWords: ['compel', 'compulsion'],
  },
  {
    slug: 'repel',
    lemma: 'repel',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/rɪˈpel/' }, us: { ipa: '/rɪˈpel/' } },
    definition: { en: 'To drive back or away; to cause disgust in.', zh: '击退；排斥；使反感' },
    examples: [
      {
        en: ['The fortress was strong enough to repel any attack.'],
        zh: ['这座堡垒足够坚固，可以击退任何进攻。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'pel', type: 'root', rootSlug: 'pel' },
    ],
    morphologyNote: {
      en: 're- ("back") + pel ("drive") → to drive back.',
      zh: 're-（回）+ pel（驱动）→ 驱赶回去，即击退。',
    },
    relatedWords: ['repellent', 'repulsive', 'repulsion'],
  },
  {
    slug: 'dispel',
    lemma: 'dispel',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/dɪˈspel/' }, us: { ipa: '/dɪˈspel/' } },
    definition: { en: 'To make a doubt, feeling, or belief disappear.', zh: '驱散；消除' },
    examples: [
      {
        en: ["The manager tried to dispel rumors about the company's closure."],
        zh: ['经理试图消除关于公司倒闭的谣言。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dis', type: 'prefix' },
      { surface: 'pel', type: 'root', rootSlug: 'pel' },
    ],
    morphologyNote: {
      en: 'dis- ("apart") + pel ("drive") → to drive apart, to scatter.',
      zh: 'dis-（分散）+ pel（驱动）→ 驱散。',
    },
    relatedWords: ['expel', 'compel'],
  },
  {
    slug: 'appeal',
    lemma: 'appeal',
    partOfSpeech: ['n.', 'vi.'],
    pronunciation: { uk: { ipa: '/əˈpiːl/' }, us: { ipa: '/əˈpiːl/' } },
    definition: {
      en: 'A serious or urgent request; attractiveness; to make a request to a higher court.',
      zh: '呼吁；吸引力；上诉',
    },
    examples: [
      {
        en: ['The charity made an appeal for donations to help the homeless.'],
        zh: ['慈善机构呼吁捐款帮助无家可归的人。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ap', type: 'prefix' },
      { surface: 'peal', type: 'root', rootSlug: 'pel' },
    ],
    morphologyNote: {
      en: 'ap- (variant of ad-, "to") + peal (variant of pel, "drive") → to drive toward, to direct a plea to.',
      zh: 'ap-（ad- 的变体，向）+ peal（pel 的变体，驱动）→ 驱向，即呼吁。',
    },
    relatedWords: ['appealing', 'appellant'],
  },
  {
    slug: 'pulsate',
    lemma: 'pulsate',
    partOfSpeech: ['vi.'],
    pronunciation: { uk: { ipa: '/pʌlˈseɪt/' }, us: { ipa: '/ˈpʌl.seɪt/' } },
    definition: { en: 'To expand and contract rhythmically; to throb.', zh: '搏动；跳动；悸动' },
    examples: [
      {
        en: ['You could see the veins in his neck pulsate with every heartbeat.'],
        zh: ['你可以看到他脖子上的血管随着每次心跳搏动。'],
      },
    ],
    rootBreakdown: [
      { surface: 'puls', type: 'root', rootSlug: 'pel' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'puls (variant of pel, "push, drive") + -ate (verb) → to push rhythmically, to throb.',
      zh: 'puls（pel 的变体，推动）+ -ate（动词后缀）→ 有节奏地推动，即搏动。',
    },
    relatedWords: ['pulsation', 'impulse', 'repulse'],
  },
];
