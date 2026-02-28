import type { WordEntry } from '@/types/content';

export const SOLV_WORDS: WordEntry[] = [
  {
    slug: 'solve',
    lemma: 'solve',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/sɒlv/' },
      us: { ipa: '/sɑːlv/' },
    },
    definition: {
      en: 'To find an answer to a problem or mystery.',
      zh: '解决；解答',
    },
    examples: [
      {
        en: ['Scientists are working to solve the energy crisis.'],
        zh: ['科学家们正在努力解决能源危机。'],
      },
    ],
    rootBreakdown: [
      { surface: 'solv', type: 'root', rootSlug: 'solv' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'solv ("loosen, release") → to loosen the knot of a problem.',
      zh: 'solv（松开、释放）→ 松开问题的结，即解决。',
    },
    relatedWords: ['solution', 'resolve', 'dissolve'],
  },
  {
    slug: 'solution',
    lemma: 'solution',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/səˈluː.ʃən/' },
      us: { ipa: '/səˈluː.ʃən/' },
    },
    definition: {
      en: 'A means of solving a problem; a liquid mixture.',
      zh: '解决办法；溶液',
    },
    examples: [
      {
        en: ['We need to find a practical solution to this issue.'],
        zh: ['我们需要找到一个切实可行的解决方案。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sol', type: 'root', rootSlug: 'solv' },
      { surface: 'ution', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sol (from solv, "loosen") + -ution (noun) → the act of loosening a problem.',
      zh: 'sol（源自 solv，松开）+ -ution（名词后缀）→ 松开问题的过程，即解决方案。',
    },
    relatedWords: ['solve', 'resolve', 'resolution'],
  },
  {
    slug: 'resolve',
    lemma: 'resolve',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: {
      uk: { ipa: '/rɪˈzɒlv/' },
      us: { ipa: '/rɪˈzɑːlv/' },
    },
    definition: {
      en: 'To settle or find a solution to; firm determination.',
      zh: '决心；解决；决议',
    },
    examples: [
      {
        en: ['She resolved to study harder for the next exam.'],
        zh: ['她下定决心为下次考试更加努力学习。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'solv', type: 'root', rootSlug: 'solv' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("intensely, again") + solv ("loosen") → to loosen thoroughly, i.e. to settle firmly.',
      zh: 're-（加强）+ solv（松开）→ 彻底松开，引申为下定决心、解决。',
    },
    relatedWords: ['resolution', 'resolute', 'solve'],
  },
  {
    slug: 'resolution',
    lemma: 'resolution',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˌrez.əˈluː.ʃən/' },
      us: { ipa: '/ˌrez.əˈluː.ʃən/' },
    },
    definition: {
      en: 'A firm decision; the solving of a problem; clarity of an image.',
      zh: '决议；决心；分辨率',
    },
    examples: [
      {
        en: ["Her New Year's resolution was to exercise more."],
        zh: ['她的新年决心是多运动。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'sol', type: 'root', rootSlug: 'solv' },
      { surface: 'ution', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("again, intensely") + sol ("loosen") + -ution (noun) → a thorough loosening, i.e. a firm decision or solution.',
      zh: 're-（加强）+ sol（松开）+ -ution（名词后缀）→ 彻底的解开，即决议或解决。',
    },
    relatedWords: ['resolve', 'resolute', 'solution'],
  },
  {
    slug: 'dissolve',
    lemma: 'dissolve',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/dɪˈzɒlv/' },
      us: { ipa: '/dɪˈzɑːlv/' },
    },
    definition: {
      en: 'To become incorporated into a liquid; to bring to an end.',
      zh: '溶解；解散；消失',
    },
    examples: [
      {
        en: ['Sugar dissolves quickly in hot water.'],
        zh: ['糖在热水中迅速溶解。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dis', type: 'prefix' },
      { surface: 'solv', type: 'root', rootSlug: 'solv' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dis- ("apart") + solv ("loosen") → to loosen apart into pieces.',
      zh: 'dis-（分散）+ solv（松开）→ 松散分开，即溶解。',
    },
    relatedWords: ['dissolution', 'solve', 'solvent'],
  },
  {
    slug: 'absolve',
    lemma: 'absolve',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/əbˈzɒlv/' },
      us: { ipa: '/əbˈzɑːlv/' },
    },
    definition: {
      en: 'To declare someone free from blame, guilt, or responsibility.',
      zh: '免除；赦免；宣告无罪',
    },
    examples: [
      {
        en: ['The jury absolved the defendant of all charges.'],
        zh: ['陪审团宣告被告所有指控无罪。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ab', type: 'prefix' },
      { surface: 'solv', type: 'root', rootSlug: 'solv' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ab- ("from") + solv ("loosen") → to loosen from guilt.',
      zh: 'ab-（从…中）+ solv（松开）→ 从罪责中松开，即赦免。',
    },
    relatedWords: ['absolution', 'absolute', 'resolve'],
  },
  {
    slug: 'absolute',
    lemma: 'absolute',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈæb.sə.luːt/' },
      us: { ipa: '/ˈæb.sə.luːt/' },
    },
    definition: {
      en: 'Complete and total; not qualified or diminished.',
      zh: '绝对的；完全的；不受限制的',
    },
    examples: [
      {
        en: ['The king held absolute power over the kingdom.'],
        zh: ['国王对王国拥有绝对权力。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ab', type: 'prefix' },
      { surface: 'solut', type: 'root', rootSlug: 'solv' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ab- ("from") + solut (from solv, "loosen") → loosened from all restrictions, i.e. total.',
      zh: 'ab-（从…中）+ solut（源自 solv，松开）→ 从一切限制中松开，即绝对的。',
    },
    relatedWords: ['absolutely', 'absolutism', 'absolve'],
  },
  {
    slug: 'resolute',
    lemma: 'resolute',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈrez.ə.luːt/' },
      us: { ipa: '/ˈrez.ə.luːt/' },
    },
    definition: {
      en: 'Admirably purposeful, determined, and unwavering.',
      zh: '坚定的；果断的',
    },
    examples: [
      {
        en: ['She remained resolute in her decision despite criticism.'],
        zh: ['尽管受到批评，她仍然坚持自己的决定。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'solut', type: 'root', rootSlug: 'solv' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("again, intensely") + solut ("loosened") → having loosened all doubt, i.e. firmly decided.',
      zh: 're-（加强）+ solut（松开）→ 解开所有疑虑的，即坚定的。',
    },
    relatedWords: ['resolution', 'resolve', 'irresolute'],
  },
  {
    slug: 'solvent',
    lemma: 'solvent',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: {
      uk: { ipa: '/ˈsɒl.vənt/' },
      us: { ipa: '/ˈsɑːl.vənt/' },
    },
    definition: {
      en: 'A liquid able to dissolve other substances; having enough money to pay debts.',
      zh: '溶剂；有偿付能力的',
    },
    examples: [
      {
        en: ['Water is known as the universal solvent.'],
        zh: ['水被称为万能溶剂。'],
      },
    ],
    rootBreakdown: [
      { surface: 'solv', type: 'root', rootSlug: 'solv' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'solv ("loosen") + -ent (noun/adj.) → something that loosens or dissolves.',
      zh: 'solv（松开）+ -ent（名词/形容词后缀）→ 能松开、溶解他物的东西。',
    },
    relatedWords: ['insolvent', 'dissolve', 'solve'],
  },
  {
    slug: 'insolvent',
    lemma: 'insolvent',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ɪnˈsɒl.vənt/' },
      us: { ipa: '/ɪnˈsɑːl.vənt/' },
    },
    definition: {
      en: 'Unable to pay debts owed; bankrupt.',
      zh: '无力偿债的；破产的',
    },
    examples: [
      {
        en: ['The company was declared insolvent and closed its doors.'],
        zh: ['该公司被宣告破产并关门停业。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'solv', type: 'root', rootSlug: 'solv' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("not") + solv ("loosen, pay") + -ent (adj.) → not able to loosen (release) debts.',
      zh: 'in-（不）+ solv（松开、偿付）+ -ent（形容词后缀）→ 无法偿付的。',
    },
    relatedWords: ['insolvency', 'solvent', 'dissolve'],
  },
];
