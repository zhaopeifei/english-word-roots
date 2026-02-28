import type { WordEntry } from '@/types/content';

export const NOV_WORDS: WordEntry[] = [
  {
    slug: 'novel',
    lemma: 'novel',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: { uk: { ipa: '/ˈnɒv.əl/' }, us: { ipa: '/ˈnɑː.vəl/' } },
    definition: {
      en: 'A long fictional prose narrative; new and original, not resembling something formerly known.',
      zh: '小说；新颖的',
    },
    examples: [
      {
        en: ['The scientist proposed a novel approach to solving the problem.'],
        zh: ['这位科学家提出了一种解决问题的新颖方法。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nov', type: 'root', rootSlug: 'nov' },
      { surface: 'el', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nov ("new") + -el (noun/adj.) → something new, a new story or a new idea.',
      zh: 'nov（新的）+ -el（后缀）→ 新的东西，即小说或新颖的。',
    },
    relatedWords: ['novelty', 'novelist', 'novice'],
  },
  {
    slug: 'novelty',
    lemma: 'novelty',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈnɒv.əl.ti/' }, us: { ipa: '/ˈnɑː.vəl.t̬i/' } },
    definition: {
      en: 'The quality of being new and unusual; a small inexpensive toy or ornament.',
      zh: '新奇；新颖；新奇的事物',
    },
    examples: [
      {
        en: ['The novelty of the new gadget wore off after a few weeks.'],
        zh: ['新设备的新鲜感在几周后就消退了。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nov', type: 'root', rootSlug: 'nov' },
      { surface: 'el', type: 'other' },
      { surface: 'ty', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nov ("new") + -elty (noun) → the state of being new, newness.',
      zh: 'nov（新的）+ -elty（名词后缀）→ 新的状态，即新奇。',
    },
    relatedWords: ['novel', 'novice'],
  },
  {
    slug: 'novelist',
    lemma: 'novelist',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈnɒv.əl.ɪst/' }, us: { ipa: '/ˈnɑː.vəl.ɪst/' } },
    definition: { en: 'A person who writes novels.', zh: '小说家' },
    examples: [
      {
        en: ['The novelist spent three years writing her latest book.'],
        zh: ['这位小说家花了三年时间写她的最新作品。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nov', type: 'root', rootSlug: 'nov' },
      { surface: 'el', type: 'other' },
      { surface: 'ist', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'novel ("new story") + -ist (person) → one who writes novels.',
      zh: 'novel（小说）+ -ist（人物后缀）→ 写小说的人。',
    },
    relatedWords: ['novel', 'novelty'],
  },
  {
    slug: 'novice',
    lemma: 'novice',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈnɒv.ɪs/' }, us: { ipa: '/ˈnɑː.vɪs/' } },
    definition: {
      en: 'A person new to or inexperienced in a particular activity; a beginner.',
      zh: '新手；初学者',
    },
    examples: [
      {
        en: ['This tutorial is designed for novice programmers.'],
        zh: ['这个教程是为编程新手设计的。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nov', type: 'root', rootSlug: 'nov' },
      { surface: 'ice', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nov ("new") + -ice (noun) → a new person, a beginner.',
      zh: 'nov（新的）+ -ice（名词后缀）→ 新来的人，即初学者。',
    },
    relatedWords: ['novel', 'novelty'],
  },
  {
    slug: 'innovate',
    lemma: 'innovate',
    partOfSpeech: ['vt.', 'vi.'],
    pronunciation: { uk: { ipa: '/ˈɪn.ə.veɪt/' }, us: { ipa: '/ˈɪn.ə.veɪt/' } },
    definition: {
      en: 'To introduce something new; to make changes in something established.',
      zh: '创新；革新',
    },
    examples: [
      {
        en: ['Companies must constantly innovate to stay competitive.'],
        zh: ['企业必须不断创新以保持竞争力。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'nov', type: 'root', rootSlug: 'nov' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("into") + nov ("new") + -ate (verb) → to bring in something new.',
      zh: 'in-（进入）+ nov（新的）+ -ate（动词后缀）→ 引入新事物，即创新。',
    },
    relatedWords: ['innovation', 'innovative', 'innovator'],
  },
  {
    slug: 'innovation',
    lemma: 'innovation',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌɪn.əˈveɪ.ʃən/' }, us: { ipa: '/ˌɪn.əˈveɪ.ʃən/' } },
    definition: {
      en: 'A new method, idea, or product; the act of introducing something new.',
      zh: '创新；革新；新发明',
    },
    examples: [
      { en: ['Technological innovation drives economic growth.'], zh: ['技术创新推动经济增长。'] },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'nov', type: 'root', rootSlug: 'nov' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("into") + nov ("new") + -ation (noun) → the act of making new.',
      zh: 'in-（进入）+ nov（新的）+ -ation（名词后缀）→ 使新的行为，即创新。',
    },
    relatedWords: ['innovate', 'innovative'],
  },
  {
    slug: 'innovative',
    lemma: 'innovative',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈɪn.ə.veɪ.tɪv/' }, us: { ipa: '/ˈɪn.ə.veɪ.t̬ɪv/' } },
    definition: {
      en: 'Featuring new methods or ideas; original and creative.',
      zh: '创新的；革新的',
    },
    examples: [
      {
        en: ['The company is known for its innovative product designs.'],
        zh: ['这家公司以其创新的产品设计而闻名。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'nov', type: 'root', rootSlug: 'nov' },
      { surface: 'ative', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("into") + nov ("new") + -ative (adj.) → tending to bring in new things.',
      zh: 'in-（进入）+ nov（新的）+ -ative（形容词后缀）→ 倾向于引入新事物的。',
    },
    relatedWords: ['innovate', 'innovation'],
  },
  {
    slug: 'renovate',
    lemma: 'renovate',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ˈren.ə.veɪt/' }, us: { ipa: '/ˈren.ə.veɪt/' } },
    definition: {
      en: 'To restore to good condition; to repair and improve a building.',
      zh: '翻新；修复；整修',
    },
    examples: [
      {
        en: ['They plan to renovate the old farmhouse into a modern home.'],
        zh: ['他们计划把旧农舍翻新成一个现代住宅。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'nov', type: 'root', rootSlug: 'nov' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("again") + nov ("new") + -ate (verb) → to make new again, to restore.',
      zh: 're-（再次）+ nov（新的）+ -ate（动词后缀）→ 使再次变新，即翻新。',
    },
    relatedWords: ['renovation', 'renovator'],
  },
  {
    slug: 'renovation',
    lemma: 'renovation',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌren.əˈveɪ.ʃən/' }, us: { ipa: '/ˌren.əˈveɪ.ʃən/' } },
    definition: {
      en: 'The act of restoring something to good condition; the process of repairing and improving.',
      zh: '翻新；整修；修复',
    },
    examples: [
      {
        en: ['The renovation of the historic building took two years to complete.'],
        zh: ['这座历史建筑的翻修花了两年时间才完成。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'nov', type: 'root', rootSlug: 'nov' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("again") + nov ("new") + -ation (noun) → the act of making new again.',
      zh: 're-（再次）+ nov（新的）+ -ation（名词后缀）→ 再次使新的行为，即翻新。',
    },
    relatedWords: ['renovate', 'innovation'],
  },
];
