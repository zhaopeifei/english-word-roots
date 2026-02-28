import type { WordEntry } from '@/types/content';

export const JEC_WORDS: WordEntry[] = [
  {
    slug: 'inject',
    lemma: 'inject',
    partOfSpeech: ['vt.'],
    pronunciation: {
      uk: { ipa: '/ɪnˈdʒekt/' },
      us: { ipa: '/ɪnˈdʒekt/' },
    },
    definition: {
      en: 'To introduce a substance into the body with a syringe; to introduce something new.',
      zh: '注射；注入',
    },
    examples: [
      {
        en: ['The nurse injected the vaccine into his arm.'],
        zh: ['护士将疫苗注射到他的手臂上。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'ject', type: 'root', rootSlug: 'jec' },
    ],
    morphologyNote: {
      en: 'in- ("into") + ject ("throw") → to throw into, hence to inject.',
      zh: 'in-（进入）+ ject（投掷）→ 投入，即注射。',
    },
    relatedWords: ['injection', 'injector'],
  },
  {
    slug: 'project',
    lemma: 'project',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: {
      uk: { ipa: '/ˈprɒdʒ.ekt/' },
      us: { ipa: '/ˈprɑː.dʒekt/' },
    },
    definition: {
      en: 'A planned piece of work; to throw forward or cause an image to appear on a surface.',
      zh: '项目；工程；投射',
    },
    examples: [
      {
        en: ['The team completed the construction project ahead of schedule.'],
        zh: ['团队提前完成了这个建设项目。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pro', type: 'prefix' },
      { surface: 'ject', type: 'root', rootSlug: 'jec' },
    ],
    morphologyNote: {
      en: 'pro- ("forward") + ject ("throw") → to throw forward, to plan ahead.',
      zh: 'pro-（向前）+ ject（投掷）→ 向前投出，即项目、投射。',
    },
    relatedWords: ['projection', 'projector'],
  },
  {
    slug: 'subject',
    lemma: 'subject',
    partOfSpeech: ['n.', 'adj.', 'vt.'],
    pronunciation: {
      uk: { ipa: '/ˈsʌb.dʒekt/' },
      us: { ipa: '/ˈsʌb.dʒekt/' },
    },
    definition: {
      en: 'A topic of discussion; a person or thing being studied; to cause to undergo.',
      zh: '主题；科目；使遭受',
    },
    examples: [
      {
        en: ['Mathematics was his favorite subject in school.'],
        zh: ['数学是他在学校最喜欢的科目。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sub', type: 'prefix' },
      { surface: 'ject', type: 'root', rootSlug: 'jec' },
    ],
    morphologyNote: {
      en: 'sub- ("under") + ject ("throw") → thrown under, placed beneath (authority), hence a topic under discussion.',
      zh: 'sub-（在下面）+ ject（投掷）→ 放在下面的，即受制于的，引申为主题、科目。',
    },
    relatedWords: ['subjective', 'subjection'],
  },
  {
    slug: 'object',
    lemma: 'object',
    partOfSpeech: ['n.', 'vi.'],
    pronunciation: {
      uk: { ipa: '/ˈɒb.dʒekt/' },
      us: { ipa: '/ˈɑːb.dʒekt/' },
    },
    definition: {
      en: 'A material thing; a purpose; to express disapproval or opposition.',
      zh: '物体；目标；反对',
    },
    examples: [
      {
        en: ['Several members objected to the proposed changes.'],
        zh: ['几位成员反对提议的变更。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ob', type: 'prefix' },
      { surface: 'ject', type: 'root', rootSlug: 'jec' },
    ],
    morphologyNote: {
      en: 'ob- ("against, toward") + ject ("throw") → thrown against, hence something placed before one or opposition.',
      zh: 'ob-（对面，朝向）+ ject（投掷）→ 投向对面的，即物体或反对。',
    },
    relatedWords: ['objection', 'objective', 'objectively'],
  },
  {
    slug: 'objective',
    lemma: 'objective',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: {
      uk: { ipa: '/əbˈdʒek.tɪv/' },
      us: { ipa: '/əbˈdʒek.tɪv/' },
    },
    definition: {
      en: 'Based on facts rather than feelings; a goal or aim.',
      zh: '客观的；目标',
    },
    examples: [
      {
        en: ['Scientists must remain objective when analyzing data.'],
        zh: ['科学家在分析数据时必须保持客观。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ob', type: 'prefix' },
      { surface: 'ject', type: 'root', rootSlug: 'jec' },
      { surface: 'ive', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ob- ("toward") + ject ("throw") + -ive (adj.) → relating to the object thrown before one, hence factual.',
      zh: 'ob-（朝向）+ ject（投掷）+ -ive（形容词后缀）→ 与投向面前的物体有关的，即客观的。',
    },
    relatedWords: ['object', 'objectively', 'objectivity'],
  },
  {
    slug: 'reject',
    lemma: 'reject',
    partOfSpeech: ['vt.', 'n.'],
    pronunciation: {
      uk: { ipa: '/rɪˈdʒekt/' },
      us: { ipa: '/rɪˈdʒekt/' },
    },
    definition: {
      en: 'To refuse to accept, consider, or use something.',
      zh: '拒绝；排斥；丢弃',
    },
    examples: [
      {
        en: ['The committee rejected the proposal due to lack of funding.'],
        zh: ['委员会因资金不足而否决了该提案。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'ject', type: 'root', rootSlug: 'jec' },
    ],
    morphologyNote: {
      en: 're- ("back") + ject ("throw") → to throw back, hence to refuse.',
      zh: 're-（回）+ ject（投掷）→ 扔回去，即拒绝。',
    },
    relatedWords: ['rejection', 'rejected'],
  },
  {
    slug: 'eject',
    lemma: 'eject',
    partOfSpeech: ['vt.'],
    pronunciation: {
      uk: { ipa: '/iˈdʒekt/' },
      us: { ipa: '/iˈdʒekt/' },
    },
    definition: {
      en: 'To force or throw something out; to expel.',
      zh: '喷射；驱逐；弹出',
    },
    examples: [
      {
        en: ['The pilot ejected from the aircraft just before the crash.'],
        zh: ['飞行员在坠毁前弹射出了飞机。'],
      },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'ject', type: 'root', rootSlug: 'jec' },
    ],
    morphologyNote: {
      en: 'e- ("out") + ject ("throw") → to throw out, to expel.',
      zh: 'e-（出）+ ject（投掷）→ 扔出去，即喷出、驱逐。',
    },
    relatedWords: ['ejection', 'ejector'],
  },
  {
    slug: 'deject',
    lemma: 'deject',
    partOfSpeech: ['vt.'],
    pronunciation: {
      uk: { ipa: '/dɪˈdʒekt/' },
      us: { ipa: '/dɪˈdʒekt/' },
    },
    definition: {
      en: 'To make someone feel sad or dispirited.',
      zh: '使沮丧；使灰心',
    },
    examples: [
      {
        en: ['The bad news dejected the entire team.'],
        zh: ['坏消息让整个团队感到沮丧。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'ject', type: 'root', rootSlug: 'jec' },
    ],
    morphologyNote: {
      en: 'de- ("down") + ject ("throw") → to throw down, hence to lower spirits.',
      zh: 'de-（向下）+ ject（投掷）→ 抛下，即使沮丧。',
    },
    relatedWords: ['dejected', 'dejection'],
  },
  {
    slug: 'interject',
    lemma: 'interject',
    partOfSpeech: ['vt.'],
    pronunciation: {
      uk: { ipa: '/ˌɪn.təˈdʒekt/' },
      us: { ipa: '/ˌɪn.tərˈdʒekt/' },
    },
    definition: {
      en: 'To insert a remark abruptly into a conversation.',
      zh: '插嘴；突然插入',
    },
    examples: [
      {
        en: ['She interjected a comment during the heated debate.'],
        zh: ['她在激烈的辩论中插了一句话。'],
      },
    ],
    rootBreakdown: [
      { surface: 'inter', type: 'prefix' },
      { surface: 'ject', type: 'root', rootSlug: 'jec' },
    ],
    morphologyNote: {
      en: 'inter- ("between") + ject ("throw") → to throw between, to interrupt with a remark.',
      zh: 'inter-（在…之间）+ ject（投掷）→ 在中间投入，即插话。',
    },
    relatedWords: ['inject', 'eject', 'project'],
  },
  {
    slug: 'conjecture',
    lemma: 'conjecture',
    partOfSpeech: ['n.', 'vi.'],
    pronunciation: {
      uk: { ipa: '/kənˈdʒek.tʃər/' },
      us: { ipa: '/kənˈdʒek.tʃər/' },
    },
    definition: {
      en: 'An opinion or conclusion formed on the basis of incomplete information; a guess.',
      zh: '推测；猜想',
    },
    examples: [
      {
        en: ['Without evidence, it remains mere conjecture.'],
        zh: ['没有证据，这仍然只是猜测。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'ject', type: 'root', rootSlug: 'jec' },
      { surface: 'ure', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'con- ("together") + ject ("throw") + -ure (noun) → to throw ideas together, hence a guess.',
      zh: 'con-（一起）+ ject（投掷）+ -ure（名词后缀）→ 把想法凑到一起，即推测。',
    },
    relatedWords: ['conjectural', 'project', 'subject'],
  },
  {
    slug: 'adjacent',
    lemma: 'adjacent',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/əˈdʒeɪ.sənt/' },
      us: { ipa: '/əˈdʒeɪ.sənt/' },
    },
    definition: {
      en: 'Next to or near something; neighboring.',
      zh: '邻近的；毗连的',
    },
    examples: [
      {
        en: ['The hotel is adjacent to the train station.'],
        zh: ['这家酒店紧邻火车站。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ad', type: 'prefix' },
      { surface: 'jac', type: 'root', rootSlug: 'jec' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ad- ("to, near") + jac (variant of jec, "throw, lie") + -ent (adj.) → lying near to, hence neighboring.',
      zh: 'ad-（靠近）+ jac（jec 的变体，投、躺）+ -ent（形容词后缀）→ 靠近躺着的，即毗邻的。',
    },
    relatedWords: ['adjacency', 'inject', 'project'],
  },
  {
    slug: 'abject',
    lemma: 'abject',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈæb.dʒekt/' },
      us: { ipa: '/ˈæb.dʒekt/' },
    },
    definition: {
      en: 'Extremely bad or severe; experienced to the maximum degree.',
      zh: '卑鄙的；悲惨的；极其恶劣的',
    },
    examples: [
      {
        en: ['Millions of people live in abject poverty.'],
        zh: ['数以百万计的人生活在赤贫之中。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ab', type: 'prefix' },
      { surface: 'ject', type: 'root', rootSlug: 'jec' },
    ],
    morphologyNote: {
      en: 'ab- ("away") + ject ("throw") → thrown away, hence lowly, wretched.',
      zh: 'ab-（远离）+ ject（投掷）→ 被扔掉的，即卑微的、悲惨的。',
    },
    relatedWords: ['abjection', 'abjectly', 'reject'],
  },
];
