import type { WordEntry } from '@/types/content';

export const ACT_WORDS: WordEntry[] = [
  {
    slug: 'act',
    lemma: 'act',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: {
      uk: { ipa: '/ækt/' },
      us: { ipa: '/ækt/' },
    },
    definition: {
      en: 'To perform a role or take action; a deed or a performance.',
      zh: '扮演；行动；行为',
    },
    examples: [
      {
        en: ['She decided to act quickly before the opportunity was lost.'],
        zh: ['她决定在机会消失前迅速行动。'],
      },
    ],
    rootBreakdown: [{ surface: 'act', type: 'root', rootSlug: 'act' }],
    morphologyNote: {
      en: 'From Latin agere/actum ("to do, drive"). The base root meaning "to do".',
      zh: '源自拉丁语 agere/actum（做、驱动）。词根本义为"做"。',
    },
    relatedWords: ['action', 'actor', 'active'],
  },
  {
    slug: 'actor',
    lemma: 'actor',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈæk.tər/' },
      us: { ipa: '/ˈæk.tɚ/' },
    },
    definition: {
      en: 'A person who performs in plays, films, or television.',
      zh: '演员',
    },
    examples: [
      {
        en: ['The actor delivered a powerful performance on stage.'],
        zh: ['这位演员在舞台上呈现了精彩的表演。'],
      },
    ],
    rootBreakdown: [
      { surface: 'act', type: 'root', rootSlug: 'act' },
      { surface: 'or', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'act ("do, perform") + -or (agent suffix) → one who performs.',
      zh: 'act（做、表演）+ -or（施事者后缀）→ 表演的人，即演员。',
    },
    relatedWords: ['actress', 'act', 'action'],
  },
  {
    slug: 'action',
    lemma: 'action',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈæk.ʃən/' },
      us: { ipa: '/ˈæk.ʃən/' },
    },
    definition: {
      en: 'The process of doing something; a thing done.',
      zh: '行动；行为',
    },
    examples: [
      {
        en: ['We need to take action before it is too late.'],
        zh: ['我们需要在为时已晚之前采取行动。'],
      },
    ],
    rootBreakdown: [
      { surface: 'act', type: 'root', rootSlug: 'act' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'act ("do") + -ion (noun suffix) → the process of doing.',
      zh: 'act（做）+ -ion（名词后缀）→ 做的过程，即行动。',
    },
    relatedWords: ['act', 'active', 'react'],
  },
  {
    slug: 'active',
    lemma: 'active',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈæk.tɪv/' },
      us: { ipa: '/ˈæk.tɪv/' },
    },
    definition: {
      en: 'Engaged in activity; energetic or lively.',
      zh: '积极的；活跃的',
    },
    examples: [
      {
        en: ['She leads an active lifestyle with daily exercise.'],
        zh: ['她过着积极的生活方式，每天锻炼。'],
      },
    ],
    rootBreakdown: [
      { surface: 'act', type: 'root', rootSlug: 'act' },
      { surface: 'ive', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'act ("do") + -ive (adjective suffix) → inclined to do, energetic.',
      zh: 'act（做）+ -ive（形容词后缀）→ 倾向于做的，即积极的。',
    },
    relatedWords: ['activity', 'activate', 'activist'],
  },
  {
    slug: 'activity',
    lemma: 'activity',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ækˈtɪv.ɪ.ti/' },
      us: { ipa: '/ækˈtɪv.ə.t̬i/' },
    },
    definition: {
      en: 'The state of being active; a specific pursuit or pastime.',
      zh: '活动',
    },
    examples: [
      {
        en: ['Outdoor activities are popular among young people.'],
        zh: ['户外活动在年轻人中很受欢迎。'],
      },
    ],
    rootBreakdown: [
      { surface: 'act', type: 'root', rootSlug: 'act' },
      { surface: 'iv', type: 'suffix' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'act ("do") + -iv- (adjective) + -ity (noun suffix) → the state of doing, an activity.',
      zh: 'act（做）+ -iv-（形容词）+ -ity（名词后缀）→ 做的状态，即活动。',
    },
    relatedWords: ['active', 'activate', 'act'],
  },
  {
    slug: 'activist',
    lemma: 'activist',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈæk.tɪ.vɪst/' },
      us: { ipa: '/ˈæk.tɪ.vɪst/' },
    },
    definition: {
      en: 'A person who campaigns vigorously for social or political change.',
      zh: '积极分子；活动家',
    },
    examples: [
      {
        en: ['The activist organized a rally to raise environmental awareness.'],
        zh: ['这位活动家组织了一场集会以提高环保意识。'],
      },
    ],
    rootBreakdown: [
      { surface: 'act', type: 'root', rootSlug: 'act' },
      { surface: 'iv', type: 'suffix' },
      { surface: 'ist', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'act ("do") + -iv- (adjective) + -ist (person) → a person who actively does things for a cause.',
      zh: 'act（做）+ -iv-（形容词）+ -ist（人）→ 积极做事的人，即活动家。',
    },
    relatedWords: ['active', 'activity', 'activate'],
  },
  {
    slug: 'activate',
    lemma: 'activate',
    partOfSpeech: ['vt.'],
    pronunciation: {
      uk: { ipa: '/ˈæk.tɪ.veɪt/' },
      us: { ipa: '/ˈæk.tɪ.veɪt/' },
    },
    definition: {
      en: 'To make something active or operative; to trigger.',
      zh: '激活；触发；启动',
    },
    examples: [
      {
        en: ['You need to activate the software before using it.'],
        zh: ['你需要在使用前激活这个软件。'],
      },
    ],
    rootBreakdown: [
      { surface: 'act', type: 'root', rootSlug: 'act' },
      { surface: 'iv', type: 'suffix' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'act ("do") + -iv- (adjective) + -ate (verb suffix) → to make active.',
      zh: 'act（做）+ -iv-（形容词）+ -ate（动词后缀）→ 使变得活跃，即激活。',
    },
    relatedWords: ['active', 'activity', 'hyperactive'],
  },
  {
    slug: 'enact',
    lemma: 'enact',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ɪˈnækt/' },
      us: { ipa: '/ɪˈnækt/' },
    },
    definition: {
      en: 'To make into law; to act out or perform.',
      zh: '颁布；制定法律；扮演',
    },
    examples: [
      {
        en: ['The government enacted new regulations on carbon emissions.'],
        zh: ['政府颁布了关于碳排放的新法规。'],
      },
    ],
    rootBreakdown: [
      { surface: 'en', type: 'prefix' },
      { surface: 'act', type: 'root', rootSlug: 'act' },
    ],
    morphologyNote: {
      en: 'en- ("make, put into") + act ("do") → to put into action, especially as law.',
      zh: 'en-（使、置于）+ act（做）→ 付诸行动，尤其指立法。',
    },
    relatedWords: ['act', 'action', 'reenact'],
  },
  {
    slug: 'interact',
    lemma: 'interact',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˌɪn.tərˈækt/' },
      us: { ipa: '/ˌɪn.t̬ɚˈækt/' },
    },
    definition: {
      en: 'To communicate or act upon each other reciprocally.',
      zh: '互动；相互作用',
    },
    examples: [
      {
        en: ['Students are encouraged to interact with their classmates during group work.'],
        zh: ['鼓励学生在小组活动中与同学互动。'],
      },
    ],
    rootBreakdown: [
      { surface: 'inter', type: 'prefix' },
      { surface: 'act', type: 'root', rootSlug: 'act' },
    ],
    morphologyNote: {
      en: 'inter- ("between, among") + act ("do") → to do things between each other.',
      zh: 'inter-（在……之间）+ act（做）→ 相互之间做事，即互动。',
    },
    relatedWords: ['action', 'active', 'react'],
  },
  {
    slug: 'hyperactive',
    lemma: 'hyperactive',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˌhaɪ.pərˈæk.tɪv/' },
      us: { ipa: '/ˌhaɪ.pɚˈæk.tɪv/' },
    },
    definition: {
      en: 'Abnormally or excessively active.',
      zh: '极度活跃的；多动的',
    },
    examples: [
      {
        en: ['The hyperactive child could not sit still for more than a minute.'],
        zh: ['这个多动的孩子一分钟也坐不住。'],
      },
    ],
    rootBreakdown: [
      { surface: 'hyper', type: 'prefix' },
      { surface: 'act', type: 'root', rootSlug: 'act' },
      { surface: 'ive', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'hyper- ("over, excessive") + act ("do") + -ive (adjective) → excessively active.',
      zh: 'hyper-（过度）+ act（做）+ -ive（形容词后缀）→ 过度活跃的。',
    },
    relatedWords: ['active', 'activate', 'activity'],
  },
];
