import type { WordEntry } from '@/types/content';

export const QUAINT_WORDS: WordEntry[] = [
  {
    slug: 'acquaint',
    lemma: 'acquaint',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/əˈkweɪnt/' },
      us: { ipa: '/əˈkweɪnt/' },
    },
    definition: {
      en: 'To make someone aware of or familiar with something.',
      zh: '使熟悉；使了解',
    },
    examples: [
      {
        en: ['Let me acquaint you with the new procedures.'],
        zh: ['让我给你介绍一下新的流程。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ac', type: 'prefix' },
      { surface: 'quaint', type: 'root', rootSlug: 'quaint' },
    ],
    morphologyNote: {
      en: 'ac- ("to") + quaint ("know") → to cause to know.',
      zh: 'ac-（向）+ quaint（知道）→ 使之知道，即使熟悉。',
    },
    relatedWords: ['acquaintance', 'quaint'],
  },
  {
    slug: 'acquaintance',
    lemma: 'acquaintance',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/əˈkweɪn.təns/' },
      us: { ipa: '/əˈkweɪn.t̬əns/' },
    },
    definition: {
      en: 'A person one knows slightly; knowledge or experience of something.',
      zh: '相识的人；熟人；了解',
    },
    examples: [
      {
        en: ['She is an acquaintance from college, not a close friend.'],
        zh: ['她是大学时的熟人，不是亲密的朋友。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ac', type: 'prefix' },
      { surface: 'quaint', type: 'root', rootSlug: 'quaint' },
      { surface: 'ance', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ac- ("to") + quaint ("know") + -ance (noun) → the state of knowing someone.',
      zh: 'ac-（向）+ quaint（知道）+ -ance（名词后缀）→ 认识某人的状态。',
    },
    relatedWords: ['acquaint', 'quaint'],
  },
  {
    slug: 'quaint',
    lemma: 'quaint',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/kweɪnt/' },
      us: { ipa: '/kweɪnt/' },
    },
    definition: {
      en: 'Attractively unusual or old-fashioned.',
      zh: '古雅的；奇特而有趣的',
    },
    examples: [
      {
        en: ['They stayed in a quaint little village in the countryside.'],
        zh: ['他们住在乡下一个古雅的小村庄里。'],
      },
    ],
    rootBreakdown: [{ surface: 'quaint', type: 'root', rootSlug: 'quaint' }],
    morphologyNote: {
      en: 'From Latin cognitus ("known") → something well-crafted and notable, hence charmingly unusual.',
      zh: '源自拉丁语 cognitus（已知的）→ 精巧而引人注目的，引申为古雅的。',
    },
    relatedWords: ['acquaint', 'acquaintance'],
  },
];
