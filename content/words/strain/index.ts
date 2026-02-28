import type { WordEntry } from '@/types/content';

export const STRAIN_WORDS: WordEntry[] = [
  {
    slug: 'strict',
    lemma: 'strict',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/strɪkt/' },
      us: { ipa: '/strɪkt/' },
    },
    definition: {
      en: 'Demanding that rules be obeyed; exact and precise.',
      zh: '严格的；严厉的；精确的',
    },
    examples: [
      {
        en: ['The school has strict rules about uniforms.'],
        zh: ['学校对校服有严格的规定。'],
      },
    ],
    rootBreakdown: [{ surface: 'strict', type: 'root', rootSlug: 'strain' }],
    morphologyNote: {
      en: 'strict (from strain, "draw tight, bind") → drawn tight, i.e. rigorous.',
      zh: 'strict（源自 strain，拉紧、束缚）→ 拉得紧的，即严格的。',
    },
    relatedWords: ['strictly', 'strictness', 'restrict'],
  },
  {
    slug: 'restrict',
    lemma: 'restrict',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/rɪˈstrɪkt/' },
      us: { ipa: '/rɪˈstrɪkt/' },
    },
    definition: {
      en: 'To put a limit on; to keep under control.',
      zh: '限制；约束；限定',
    },
    examples: [
      {
        en: ['The government restricted access to the military zone.'],
        zh: ['政府限制了进入军事区域的权限。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'strict', type: 'root', rootSlug: 'strain' },
    ],
    morphologyNote: {
      en: 're- ("back") + strict ("draw tight") → to draw back tightly, i.e. to limit.',
      zh: 're-（向后）+ strict（拉紧）→ 向后拉紧，即限制。',
    },
    relatedWords: ['restriction', 'restricted', 'restrictive'],
  },
  {
    slug: 'district',
    lemma: 'district',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈdɪs.trɪkt/' },
      us: { ipa: '/ˈdɪs.trɪkt/' },
    },
    definition: {
      en: 'An area of a city or country defined for administrative purposes.',
      zh: '区；地区；行政区',
    },
    examples: [
      {
        en: ['The business district is the most crowded part of the city.'],
        zh: ['商业区是城市中最拥挤的部分。'],
      },
    ],
    rootBreakdown: [
      { surface: 'di', type: 'prefix' },
      { surface: 'strict', type: 'root', rootSlug: 'strain' },
    ],
    morphologyNote: {
      en: 'di- ("apart") + strict ("draw tight, bind") → an area drawn apart and bounded.',
      zh: 'di-（分开）+ strict（拉紧、划定）→ 被划定边界分开的区域。',
    },
    relatedWords: ['restrict', 'constrict', 'strict'],
  },
  {
    slug: 'strain',
    lemma: 'strain',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/streɪn/' },
      us: { ipa: '/streɪn/' },
    },
    definition: {
      en: 'To exert force; a state of tension or pressure.',
      zh: '拉紧；紧张；劳损',
    },
    examples: [
      {
        en: ['Be careful not to strain your back when lifting.'],
        zh: ['搬重物时小心不要拉伤背部。'],
      },
    ],
    rootBreakdown: [{ surface: 'strain', type: 'root', rootSlug: 'strain' }],
    morphologyNote: {
      en: 'strain ("draw tight, stretch") → to pull tight or stretch beyond comfort.',
      zh: 'strain（拉紧、绷紧）→ 拉得过紧。',
    },
    relatedWords: ['restrain', 'constrain', 'stress'],
  },
  {
    slug: 'restrain',
    lemma: 'restrain',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/rɪˈstreɪn/' },
      us: { ipa: '/rɪˈstreɪn/' },
    },
    definition: {
      en: 'To prevent someone from doing something; to hold back.',
      zh: '抑制；约束；限制',
    },
    examples: [
      {
        en: ['Security guards restrained the unruly fan.'],
        zh: ['保安人员制止了那个闹事的球迷。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'strain', type: 'root', rootSlug: 'strain' },
    ],
    morphologyNote: {
      en: 're- ("back") + strain ("draw tight") → to draw back tightly, i.e. to hold back.',
      zh: 're-（向后）+ strain（拉紧）→ 向后拉紧，即约束。',
    },
    relatedWords: ['restraint', 'restrained', 'constrain'],
  },
  {
    slug: 'constraint',
    lemma: 'constraint',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/kənˈstreɪnt/' },
      us: { ipa: '/kənˈstreɪnt/' },
    },
    definition: {
      en: 'A limitation or restriction.',
      zh: '约束；限制；制约',
    },
    examples: [
      {
        en: ['Budget constraints forced the team to cut features.'],
        zh: ['预算限制迫使团队削减功能。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'strain', type: 'root', rootSlug: 'strain' },
      { surface: 't', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'con- ("together") + strain ("draw tight") + -t (noun) → being drawn tight together, i.e. a limitation.',
      zh: 'con-（一起）+ strain（拉紧）+ -t（名词后缀）→ 一起拉紧的状态，即限制。',
    },
    relatedWords: ['constrain', 'restrain', 'restrict'],
  },
  {
    slug: 'stress',
    lemma: 'stress',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/stres/' },
      us: { ipa: '/stres/' },
    },
    definition: {
      en: 'A state of mental or emotional strain; emphasis placed on something.',
      zh: '压力；紧张；强调',
    },
    examples: [
      {
        en: ['Too much stress can affect both physical and mental health.'],
        zh: ['过大的压力会影响身心健康。'],
      },
    ],
    rootBreakdown: [{ surface: 'stress', type: 'root', rootSlug: 'strain' }],
    morphologyNote: {
      en: 'From strain ("draw tight") → the state of being drawn too tight.',
      zh: '源自 strain（拉紧）→ 被拉得太紧的状态，即压力。',
    },
    relatedWords: ['stressful', 'distress', 'strain'],
  },
  {
    slug: 'distress',
    lemma: 'distress',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/dɪˈstres/' },
      us: { ipa: '/dɪˈstres/' },
    },
    definition: {
      en: 'Extreme anxiety, sorrow, or pain; to cause suffering to.',
      zh: '痛苦；苦恼；困境',
    },
    examples: [
      {
        en: ['The news caused great distress to the family.'],
        zh: ['这个消息给家人带来了巨大的痛苦。'],
      },
    ],
    rootBreakdown: [
      { surface: 'di', type: 'prefix' },
      { surface: 'stress', type: 'root', rootSlug: 'strain' },
    ],
    morphologyNote: {
      en: 'di- (from dis-, "apart") + stress ("strain") → strained apart, i.e. extreme suffering.',
      zh: 'di-（源自 dis-，分裂）+ stress（压力）→ 被撕裂般的压力，即痛苦。',
    },
    relatedWords: ['distressing', 'distressed', 'stress'],
  },
  {
    slug: 'stringent',
    lemma: 'stringent',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈstrɪn.dʒənt/' },
      us: { ipa: '/ˈstrɪn.dʒənt/' },
    },
    definition: {
      en: 'Very strict, precise, and exacting.',
      zh: '严格的；严厉的；紧缩的',
    },
    examples: [
      {
        en: ['The company has stringent quality control measures.'],
        zh: ['该公司有严格的质量控制措施。'],
      },
    ],
    rootBreakdown: [
      { surface: 'string', type: 'root', rootSlug: 'strain' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'string (from strain, "draw tight") + -ent (adj.) → drawn very tight, i.e. strict.',
      zh: 'string（源自 strain，拉紧）+ -ent（形容词后缀）→ 拉得很紧的，即严格的。',
    },
    relatedWords: ['stringency', 'strict', 'restrict'],
  },
  {
    slug: 'constrict',
    lemma: 'constrict',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/kənˈstrɪkt/' },
      us: { ipa: '/kənˈstrɪkt/' },
    },
    definition: {
      en: 'To make narrower by squeezing or compressing.',
      zh: '收缩；压缩；束紧',
    },
    examples: [
      {
        en: ['Cold weather causes blood vessels to constrict.'],
        zh: ['寒冷的天气导致血管收缩。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'strict', type: 'root', rootSlug: 'strain' },
    ],
    morphologyNote: {
      en: 'con- ("together") + strict ("draw tight") → to draw tightly together.',
      zh: 'con-（一起）+ strict（拉紧）→ 一起拉紧，即收缩。',
    },
    relatedWords: ['constriction', 'restrict', 'strict'],
  },
  {
    slug: 'strange',
    lemma: 'strange',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/streɪndʒ/' },
      us: { ipa: '/streɪndʒ/' },
    },
    definition: {
      en: 'Unusual or surprising; not previously visited or encountered.',
      zh: '奇怪的；陌生的',
    },
    examples: [
      {
        en: ['She had a strange feeling that something was wrong.'],
        zh: ['她有一种奇怪的感觉，觉得有什么不对。'],
      },
    ],
    rootBreakdown: [
      { surface: 'strang', type: 'root', rootSlug: 'strain' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From Latin extraneus ("external"), related to strain ("draw tight") → drawn from outside, hence unfamiliar.',
      zh: '源自拉丁语 extraneus（外部的），与 strain（拉紧）相关 → 从外面拉来的，即陌生的。',
    },
    relatedWords: ['stranger', 'strangeness', 'estrange'],
  },
];
