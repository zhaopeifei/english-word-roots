import type { WordEntry } from '@/types/content';

export const PLE_WORDS: WordEntry[] = [
  {
    slug: 'plenty',
    lemma: 'plenty',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: { uk: { ipa: '/ˈplen.ti/' }, us: { ipa: '/ˈplen.t̬i/' } },
    definition: { en: 'A large or sufficient amount; more than enough.', zh: '充足；大量' },
    examples: [
      { en: ['There is plenty of time to finish the assignment.'], zh: ['有充足的时间完成作业。'] },
    ],
    rootBreakdown: [
      { surface: 'ple', type: 'root', rootSlug: 'ple' },
      { surface: 'nty', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ple ("fill") + -nty (noun) → the state of being filled, abundance.',
      zh: 'ple（充满）+ -nty（名词后缀）→ 充满的状态，即充足。',
    },
    relatedWords: ['plentiful', 'replenish'],
  },
  {
    slug: 'plentiful',
    lemma: 'plentiful',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈplen.tɪ.fəl/' }, us: { ipa: '/ˈplen.t̬ɪ.fəl/' } },
    definition: { en: 'Existing in great quantity; abundant.', zh: '丰富的；大量的' },
    examples: [
      { en: ['Fresh fruit is plentiful during the summer months.'], zh: ['夏季鲜果很丰富。'] },
    ],
    rootBreakdown: [
      { surface: 'ple', type: 'root', rootSlug: 'ple' },
      { surface: 'nti', type: 'other' },
      { surface: 'ful', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'plenty + -ful (adj.) → full of plenty, abundant.',
      zh: 'plenty（充足）+ -ful（充满…的）→ 充满丰富的，即丰富的。',
    },
    relatedWords: ['plenty', 'replenish'],
  },
  {
    slug: 'replenish',
    lemma: 'replenish',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/rɪˈplen.ɪʃ/' }, us: { ipa: '/rɪˈplen.ɪʃ/' } },
    definition: {
      en: 'To fill up again; to restore to a former level or condition.',
      zh: '补充；重新装满',
    },
    examples: [
      {
        en: ['We need to replenish our water supplies before continuing the hike.'],
        zh: ['我们需要在继续远足前补充水源。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'ple', type: 'root', rootSlug: 'ple' },
      { surface: 'n', type: 'connector' },
      { surface: 'ish', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("again") + ple ("fill") + -nish (verb) → to fill again.',
      zh: 're-（再次）+ ple（充满）+ -nish（动词后缀）→ 再次充满，即补充。',
    },
    relatedWords: ['plenty', 'replenishment'],
  },
  {
    slug: 'complete',
    lemma: 'complete',
    partOfSpeech: ['adj.', 'vt.'],
    pronunciation: { uk: { ipa: '/kəmˈpliːt/' }, us: { ipa: '/kəmˈpliːt/' } },
    definition: {
      en: 'Having all necessary parts; to finish or make whole.',
      zh: '完整的；完成；使完整',
    },
    examples: [
      {
        en: ['She managed to complete the project ahead of schedule.'],
        zh: ['她设法提前完成了项目。'],
      },
    ],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'ple', type: 'root', rootSlug: 'ple' },
      { surface: 'te', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'com- ("completely") + ple ("fill") + -te (adj./verb) → completely filled, having all parts.',
      zh: 'com-（完全地）+ ple（充满）+ -te（后缀）→ 完全充满的，即完整的。',
    },
    relatedWords: ['completion', 'incomplete', 'completeness'],
  },
  {
    slug: 'incomplete',
    lemma: 'incomplete',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˌɪn.kəmˈpliːt/' }, us: { ipa: '/ˌɪn.kəmˈpliːt/' } },
    definition: { en: 'Not having all necessary parts; not finished.', zh: '不完整的；未完成的' },
    examples: [
      {
        en: ['The application was rejected because it was incomplete.'],
        zh: ['申请因不完整而被拒绝。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'com', type: 'prefix' },
      { surface: 'ple', type: 'root', rootSlug: 'ple' },
      { surface: 'te', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("not") + complete ("filled") → not completely filled, lacking parts.',
      zh: 'in-（不）+ complete（完整的）→ 不完整的。',
    },
    relatedWords: ['complete', 'incompleteness'],
  },
  {
    slug: 'deplete',
    lemma: 'deplete',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/dɪˈpliːt/' }, us: { ipa: '/dɪˈpliːt/' } },
    definition: {
      en: 'To use up the supply or resources of; to reduce severely.',
      zh: '耗尽；使枯竭',
    },
    examples: [
      {
        en: ["Overfishing has depleted the ocean's fish stocks."],
        zh: ['过度捕捞已耗尽了海洋的鱼类资源。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'ple', type: 'root', rootSlug: 'ple' },
      { surface: 'te', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'de- ("away, down") + ple ("fill") + -te → to un-fill, to empty out.',
      zh: 'de-（去除）+ ple（充满）+ -te → 使不再充满，即耗尽。',
    },
    relatedWords: ['depletion', 'replenish'],
  },
  {
    slug: 'accomplish',
    lemma: 'accomplish',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/əˈkʌm.plɪʃ/' }, us: { ipa: '/əˈkɑːm.plɪʃ/' } },
    definition: { en: 'To achieve or complete successfully.', zh: '完成；实现；达到' },
    examples: [
      {
        en: ['She accomplished everything she set out to do.'],
        zh: ['她完成了她着手要做的一切。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ac', type: 'prefix' },
      { surface: 'com', type: 'prefix' },
      { surface: 'pl', type: 'root', rootSlug: 'ple' },
      { surface: 'ish', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ac- + com- ("completely") + pl ("fill") + -ish (verb) → to fill completely, to bring to completion.',
      zh: 'ac- + com-（完全地）+ pl（充满）+ -ish（动词后缀）→ 完全填充，即完成。',
    },
    relatedWords: ['accomplishment', 'accomplished'],
  },
  {
    slug: 'comply',
    lemma: 'comply',
    partOfSpeech: ['vi.'],
    pronunciation: { uk: { ipa: '/kəmˈplaɪ/' }, us: { ipa: '/kəmˈplaɪ/' } },
    definition: {
      en: 'To act in accordance with a wish, command, or rule.',
      zh: '遵守；服从；顺从',
    },
    examples: [
      {
        en: ["All employees must comply with the company's safety regulations."],
        zh: ['所有员工必须遵守公司的安全规定。'],
      },
    ],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'ply', type: 'root', rootSlug: 'ple' },
    ],
    morphologyNote: {
      en: 'com- ("completely") + ply (variant of ple, "fill, fulfill") → to fulfill completely, to obey.',
      zh: 'com-（完全地）+ ply（ple 的变体，充满、实现）→ 完全实现要求，即遵守。',
    },
    relatedWords: ['compliance', 'compliant'],
  },
  {
    slug: 'implement',
    lemma: 'implement',
    partOfSpeech: ['vt.', 'n.'],
    pronunciation: { uk: { ipa: '/ˈɪm.plɪ.ment/' }, us: { ipa: '/ˈɪm.plɪ.ment/' } },
    definition: {
      en: 'To put into effect or action; a tool or instrument.',
      zh: '实施；执行；工具',
    },
    examples: [
      {
        en: ['The government plans to implement new education reforms next year.'],
        zh: ['政府计划明年实施新的教育改革。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'ple', type: 'root', rootSlug: 'ple' },
      { surface: 'ment', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- ("in") + ple ("fill") + -ment (noun/verb) → to fill in, to carry out; a tool that fills a need.',
      zh: 'im-（进入）+ ple（充满）+ -ment（后缀）→ 填充执行，即实施。',
    },
    relatedWords: ['implementation', 'complement'],
  },
  {
    slug: 'complement',
    lemma: 'complement',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: { uk: { ipa: '/ˈkɒm.plɪ.ment/' }, us: { ipa: '/ˈkɑːm.plɪ.ment/' } },
    definition: {
      en: 'A thing that completes or makes perfect; to add to in a way that enhances.',
      zh: '补充物；补足语；使完美',
    },
    examples: [
      {
        en: ['Red wine is a perfect complement to a steak dinner.'],
        zh: ['红酒是牛排晚餐的完美搭配。'],
      },
    ],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'ple', type: 'root', rootSlug: 'ple' },
      { surface: 'ment', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'com- ("completely") + ple ("fill") + -ment (noun) → that which fills completely, a completing addition.',
      zh: 'com-（完全地）+ ple（充满）+ -ment（名词后缀）→ 使完全充满的东西，即补充。',
    },
    relatedWords: ['complementary', 'complete'],
  },
  {
    slug: 'supplement',
    lemma: 'supplement',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: { uk: { ipa: '/ˈsʌp.lɪ.ment/' }, us: { ipa: '/ˈsʌp.lɪ.ment/' } },
    definition: {
      en: 'Something added to complete or enhance; to add an extra element.',
      zh: '补充；增刊；补充物',
    },
    examples: [
      {
        en: ['Many people take vitamin supplements to improve their health.'],
        zh: ['许多人服用维生素补充剂来改善健康。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sup', type: 'prefix' },
      { surface: 'ple', type: 'root', rootSlug: 'ple' },
      { surface: 'ment', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sup- (variant of sub-, "under, up") + ple ("fill") + -ment (noun) → to fill up from below, to add to.',
      zh: 'sup-（sub- 的变体，从下面）+ ple（充满）+ -ment（名词后缀）→ 从下补充，即增补。',
    },
    relatedWords: ['supplemental', 'complement'],
  },
  {
    slug: 'plethora',
    lemma: 'plethora',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈpleθ.ər.ə/' }, us: { ipa: '/ˈpleθ.ɚ.ə/' } },
    definition: { en: 'An excess of something; a large or excessive amount.', zh: '过量；过剩' },
    examples: [
      {
        en: ['There is a plethora of information available on the internet.'],
        zh: ['互联网上有过量的信息。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pleth', type: 'root', rootSlug: 'ple' },
      { surface: 'ora', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pleth (variant of ple, "fill") + -ora (noun) → an overfilling, excess.',
      zh: 'pleth（ple 的变体，充满）+ -ora（名词后缀）→ 过度充满，即过量。',
    },
    relatedWords: ['plenty', 'replete'],
  },
];
