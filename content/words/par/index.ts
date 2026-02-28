import type { WordEntry } from '@/types/content';

export const PAR_WORDS: WordEntry[] = [
  {
    slug: 'pair',
    lemma: 'pair',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: { uk: { ipa: '/peər/' }, us: { ipa: '/per/' } },
    definition: {
      en: 'A set of two things used together; to join or match.',
      zh: '一对；一双；配对',
    },
    examples: [
      { en: ['She bought a new pair of shoes for the wedding.'], zh: ['她为婚礼买了一双新鞋。'] },
    ],
    rootBreakdown: [{ surface: 'pair', type: 'root', rootSlug: 'par' }],
    morphologyNote: {
      en: 'pair (from par, "equal") → two equal things together.',
      zh: 'pair（源自 par，相等的）→ 两个相等的东西，即一对。',
    },
    relatedWords: ['compare', 'peer'],
  },
  {
    slug: 'compare',
    lemma: 'compare',
    partOfSpeech: ['vt.', 'vi.'],
    pronunciation: { uk: { ipa: '/kəmˈpeər/' }, us: { ipa: '/kəmˈper/' } },
    definition: {
      en: 'To examine the similarities and differences between two or more things.',
      zh: '比较；对比；比作',
    },
    examples: [
      {
        en: ['It is difficult to compare the two systems because they are so different.'],
        zh: ['这两个系统如此不同，很难进行比较。'],
      },
    ],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'par', type: 'root', rootSlug: 'par' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'com- ("together") + par ("equal") + -e → to put together as equals, to examine side by side.',
      zh: 'com-（一起）+ par（相等）+ -e → 放在一起对等看待，即比较。',
    },
    relatedWords: ['comparison', 'comparable'],
  },
  {
    slug: 'comparison',
    lemma: 'comparison',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/kəmˈpær.ɪ.sən/' }, us: { ipa: '/kəmˈper.ɪ.sən/' } },
    definition: {
      en: 'The act of examining similarities and differences; a likeness.',
      zh: '比较；对照',
    },
    examples: [
      {
        en: ['By comparison, the new model is much more efficient.'],
        zh: ['相比之下，新型号效率高得多。'],
      },
    ],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'par', type: 'root', rootSlug: 'par' },
      { surface: 'ison', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'com- ("together") + par ("equal") + -ison (noun) → the act of setting as equals, comparing.',
      zh: 'com-（一起）+ par（相等）+ -ison（名词后缀）→ 并列对等的行为，即比较。',
    },
    relatedWords: ['compare', 'comparable'],
  },
  {
    slug: 'comparable',
    lemma: 'comparable',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈkɒm.pər.ə.bəl/' }, us: { ipa: '/ˈkɑːm.pɚ.ə.bəl/' } },
    definition: {
      en: 'Able to be compared; of equivalent quality or standard.',
      zh: '可比较的；类似的',
    },
    examples: [
      {
        en: ['The two houses are comparable in size and price.'],
        zh: ['这两栋房子在面积和价格上是可比的。'],
      },
    ],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'par', type: 'root', rootSlug: 'par' },
      { surface: 'able', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'com- ("together") + par ("equal") + -able (adj.) → able to be set as equals.',
      zh: 'com-（一起）+ par（相等）+ -able（可…的）→ 可以并列对等的。',
    },
    relatedWords: ['compare', 'incomparable'],
  },
  {
    slug: 'disparity',
    lemma: 'disparity',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/dɪˈspær.ɪ.ti/' }, us: { ipa: '/dɪˈsper.ə.t̬i/' } },
    definition: { en: 'A great difference; inequality.', zh: '差异；不等；不同' },
    examples: [
      {
        en: ['There is a growing disparity between the rich and the poor.'],
        zh: ['贫富之间的差距越来越大。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dis', type: 'prefix' },
      { surface: 'par', type: 'root', rootSlug: 'par' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dis- ("not") + par ("equal") + -ity (noun) → not equal, a state of inequality.',
      zh: 'dis-（不）+ par（相等）+ -ity（名词后缀）→ 不相等的状态，即差异。',
    },
    relatedWords: ['pair', 'compare'],
  },
  {
    slug: 'impair',
    lemma: 'impair',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ɪmˈpeər/' }, us: { ipa: '/ɪmˈper/' } },
    definition: { en: 'To weaken or damage, especially a function or ability.', zh: '损害；削弱' },
    examples: [
      {
        en: ['Lack of sleep can seriously impair your ability to concentrate.'],
        zh: ['睡眠不足会严重损害你的注意力。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'pair', type: 'root', rootSlug: 'par' },
    ],
    morphologyNote: {
      en: 'im- (variant of in-, "making") + pair (from par, "worse") → to make worse, to damage.',
      zh: 'im-（使…）+ pair（源自 par，变差）→ 使变差，即损害。',
    },
    relatedWords: ['impairment', 'impaired'],
  },
  {
    slug: 'repair',
    lemma: 'repair',
    partOfSpeech: ['vt.', 'n.'],
    pronunciation: { uk: { ipa: '/rɪˈpeər/' }, us: { ipa: '/rɪˈper/' } },
    definition: {
      en: 'To restore to good condition; the act of fixing something.',
      zh: '修理；修复；补救',
    },
    examples: [
      {
        en: ['The mechanic repaired the engine in less than an hour.'],
        zh: ['机修工不到一小时就修好了引擎。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'pair', type: 'root', rootSlug: 'par' },
    ],
    morphologyNote: {
      en: 're- ("again, back") + pair (from par, "prepare, restore") → to make ready again, to fix.',
      zh: 're-（再次）+ pair（源自 par，准备、恢复）→ 再次准备好，即修理。',
    },
    relatedWords: ['reparable', 'irreparable'],
  },
  {
    slug: 'irreparable',
    lemma: 'irreparable',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ɪˈrep.ər.ə.bəl/' }, us: { ipa: '/ɪˈrep.ɚ.ə.bəl/' } },
    definition: { en: 'Impossible to repair or rectify.', zh: '不可修复的；无法弥补的' },
    examples: [
      {
        en: ['The scandal caused irreparable damage to his reputation.'],
        zh: ['丑闻对他的声誉造成了无法弥补的损害。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ir', type: 'prefix' },
      { surface: 're', type: 'prefix' },
      { surface: 'par', type: 'root', rootSlug: 'par' },
      { surface: 'able', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ir- ("not") + re- ("again") + par ("prepare") + -able (adj.) → not able to be prepared again, beyond fixing.',
      zh: 'ir-（不）+ re-（再次）+ par（准备）+ -able（可…的）→ 无法再修复的。',
    },
    relatedWords: ['repair', 'reparable'],
  },
  {
    slug: 'peer',
    lemma: 'peer',
    partOfSpeech: ['n.', 'vi.'],
    pronunciation: { uk: { ipa: '/pɪər/' }, us: { ipa: '/pɪr/' } },
    definition: {
      en: 'A person of the same age, status, or ability; to look closely.',
      zh: '同龄人；同辈；凝视',
    },
    examples: [
      {
        en: ['Children are often influenced by their peers at school.'],
        zh: ['孩子们在学校经常受到同龄人的影响。'],
      },
    ],
    rootBreakdown: [{ surface: 'peer', type: 'root', rootSlug: 'par' }],
    morphologyNote: {
      en: 'peer (from par, "equal") → one who is equal, a person of the same rank.',
      zh: 'peer（源自 par，相等的）→ 平等的人，即同辈。',
    },
    relatedWords: ['pair', 'compare', 'peerless'],
  },
  {
    slug: 'nonpareil',
    lemma: 'nonpareil',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: { uk: { ipa: '/ˌnɒn.pəˈreɪl/' }, us: { ipa: '/ˌnɑːn.pəˈrel/' } },
    definition: {
      en: 'Having no equal; unrivaled; an unmatched person or thing.',
      zh: '无比的；无双的',
    },
    examples: [
      {
        en: ['She is a nonpareil among contemporary novelists.'],
        zh: ['她在当代小说家中无人可比。'],
      },
    ],
    rootBreakdown: [
      { surface: 'non', type: 'prefix' },
      { surface: 'par', type: 'root', rootSlug: 'par' },
      { surface: 'eil', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'non- ("not") + par ("equal") + -eil → without equal, unmatched.',
      zh: 'non-（不）+ par（相等）+ -eil → 无人可比的。',
    },
    relatedWords: ['compare', 'pair', 'peer'],
  },
];
