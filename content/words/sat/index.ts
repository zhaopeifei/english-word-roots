import type { WordEntry } from '@/types/content';

export const SAT_WORDS: WordEntry[] = [
  {
    slug: 'satisfy',
    lemma: 'satisfy',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˈsæt.ɪs.faɪ/' },
      us: { ipa: '/ˈsæt̬.ɪs.faɪ/' },
    },
    definition: {
      en: 'To meet the expectations, needs, or desires of someone.',
      zh: '满足；使满意',
    },
    examples: [
      {
        en: ['The meal was enough to satisfy everyone at the table.'],
        zh: ['这顿饭足以让桌上的每个人都满意。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sat', type: 'root', rootSlug: 'sat' },
      { surface: 'is', type: 'connector' },
      { surface: 'fy', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sat ("enough") + -fy ("make") → to make enough, i.e. to fulfill.',
      zh: 'sat（足够）+ -fy（使…）→ 使足够，即满足。',
    },
    relatedWords: ['satisfaction', 'satisfactory', 'dissatisfy'],
  },
  {
    slug: 'satisfaction',
    lemma: 'satisfaction',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˌsæt.ɪsˈfæk.ʃən/' },
      us: { ipa: '/ˌsæt̬.ɪsˈfæk.ʃən/' },
    },
    definition: {
      en: "The fulfillment of one's wishes or expectations; a feeling of contentment.",
      zh: '满足；满意',
    },
    examples: [
      {
        en: ['She felt a deep sense of satisfaction after finishing the project.'],
        zh: ['完成项目后她感到一种深深的满足感。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sat', type: 'root', rootSlug: 'sat' },
      { surface: 'is', type: 'connector' },
      { surface: 'fact', type: 'root' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sat ("enough") + fac ("make") + -tion (noun) → the state of being made content.',
      zh: 'sat（足够）+ fac（做）+ -tion（名词后缀）→ 被满足的状态。',
    },
    relatedWords: ['satisfy', 'satisfactory', 'dissatisfaction'],
  },
  {
    slug: 'satisfactory',
    lemma: 'satisfactory',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˌsæt.ɪsˈfæk.tər.i/' },
      us: { ipa: '/ˌsæt̬.ɪsˈfæk.t̬ɚ.i/' },
    },
    definition: {
      en: 'Fulfilling expectations or needs; acceptable but not outstanding.',
      zh: '令人满意的；合格的',
    },
    examples: [
      {
        en: ["The student's progress has been satisfactory this semester."],
        zh: ['该学生这学期的进步令人满意。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sat', type: 'root', rootSlug: 'sat' },
      { surface: 'is', type: 'connector' },
      { surface: 'fact', type: 'root' },
      { surface: 'ory', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'satisfy + -ory (adj.) → tending to satisfy.',
      zh: 'satisfy（满足）+ -ory（形容词后缀）→ 能令人满意的。',
    },
    relatedWords: ['satisfy', 'satisfaction', 'unsatisfactory'],
  },
  {
    slug: 'saturate',
    lemma: 'saturate',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˈsætʃ.ə.reɪt/' },
      us: { ipa: '/ˈsætʃ.ə.reɪt/' },
    },
    definition: {
      en: 'To soak thoroughly; to fill completely with something.',
      zh: '使饱和；浸透',
    },
    examples: [
      {
        en: ['Heavy rain saturated the ground overnight.'],
        zh: ['大雨一夜间浸透了地面。'],
      },
    ],
    rootBreakdown: [
      { surface: 'satur', type: 'root', rootSlug: 'sat' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'satur- (from sat, "enough, full") + -ate (verb) → to fill to capacity.',
      zh: 'satur-（源自 sat，足够、充满）+ -ate（动词后缀）→ 充满到极限。',
    },
    relatedWords: ['saturation', 'saturated', 'sate'],
  },
  {
    slug: 'insatiable',
    lemma: 'insatiable',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ɪnˈseɪ.ʃə.bəl/' },
      us: { ipa: '/ɪnˈseɪ.ʃə.bəl/' },
    },
    definition: {
      en: 'Impossible to satisfy; always wanting more.',
      zh: '贪得无厌的；无法满足的',
    },
    examples: [
      {
        en: ['She has an insatiable appetite for knowledge.'],
        zh: ['她对知识有着无法满足的渴望。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'sati', type: 'root', rootSlug: 'sat' },
      { surface: 'able', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("not") + sati ("enough") + -able ("capable") → not capable of having enough.',
      zh: 'in-（不）+ sati（足够）+ -able（可…的）→ 不可能满足的。',
    },
    relatedWords: ['satiable', 'satiate', 'satisfy'],
  },
  {
    slug: 'satiate',
    lemma: 'satiate',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˈseɪ.ʃi.eɪt/' },
      us: { ipa: '/ˈseɪ.ʃi.eɪt/' },
    },
    definition: {
      en: 'To satisfy fully; to provide more than enough.',
      zh: '使充分满足；使饱足',
    },
    examples: [
      {
        en: ['A large buffet satiated even the hungriest guests.'],
        zh: ['丰盛的自助餐让最饥饿的客人都吃饱了。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sati', type: 'root', rootSlug: 'sat' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sati ("enough") + -ate (verb) → to make fully enough.',
      zh: 'sati（足够）+ -ate（动词后缀）→ 使完全满足。',
    },
    relatedWords: ['satiation', 'insatiable', 'satisfy'],
  },
  {
    slug: 'dissatisfied',
    lemma: 'dissatisfied',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/dɪsˈsæt.ɪs.faɪd/' },
      us: { ipa: '/dɪsˈsæt̬.ɪs.faɪd/' },
    },
    definition: {
      en: 'Not content or happy with something.',
      zh: '不满意的；不满足的',
    },
    examples: [
      {
        en: ['Many customers were dissatisfied with the slow service.'],
        zh: ['许多顾客对缓慢的服务感到不满。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dis', type: 'prefix' },
      { surface: 'sat', type: 'root', rootSlug: 'sat' },
      { surface: 'is', type: 'connector' },
      { surface: 'fi', type: 'suffix' },
      { surface: 'ed', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dis- ("not") + satisfied → not made content.',
      zh: 'dis-（不）+ satisfied（满意的）→ 不满意的。',
    },
    relatedWords: ['dissatisfaction', 'satisfy', 'satisfied'],
  },
  {
    slug: 'asset',
    lemma: 'asset',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈæs.et/' },
      us: { ipa: '/ˈæs.et/' },
    },
    definition: {
      en: 'A useful or valuable thing or person; property owned by a person or company.',
      zh: '资产；有价值的人或物',
    },
    examples: [
      {
        en: ['Her experience is a great asset to the team.'],
        zh: ['她的经验是团队的宝贵资产。'],
      },
    ],
    rootBreakdown: [
      { surface: 'as', type: 'prefix' },
      { surface: 'set', type: 'root', rootSlug: 'sat' },
    ],
    morphologyNote: {
      en: 'From Latin ad satis ("to sufficiency") → enough property to settle debts, hence valuable possessions.',
      zh: '源自拉丁语 ad satis（到足够）→ 足以偿债的财产，即资产。',
    },
    relatedWords: ['satisfy', 'saturate', 'satellite'],
  },
  {
    slug: 'satire',
    lemma: 'satire',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈsæt.aɪər/' },
      us: { ipa: '/ˈsæt̬.aɪr/' },
    },
    definition: {
      en: 'The use of humor, irony, or exaggeration to expose and criticize.',
      zh: '讽刺；讽刺作品',
    },
    examples: [
      {
        en: ['The novel is a biting satire on modern politics.'],
        zh: ['这部小说是对现代政治的辛辣讽刺。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sat', type: 'root', rootSlug: 'sat' },
      { surface: 'ire', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From Latin satura ("medley, full dish") → a full mixture of criticism, i.e. satirical commentary.',
      zh: '源自拉丁语 satura（大杂烩、满盘）→ 充满批评的混合体，即讽刺。',
    },
    relatedWords: ['satirize', 'satirical', 'sarcasm'],
  },
  {
    slug: 'satellite',
    lemma: 'satellite',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈsæt.əl.aɪt/' },
      us: { ipa: '/ˈsæt̬.əl.aɪt/' },
    },
    definition: {
      en: 'An object orbiting a planet; an artificial body placed in orbit.',
      zh: '卫星；人造卫星',
    },
    examples: [
      {
        en: ['The satellite transmits weather data back to Earth.'],
        zh: ['卫星将天气数据传回地球。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sat', type: 'root', rootSlug: 'sat' },
      { surface: 'ellite', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From Latin satelles ("attendant, guard") → one who accompanies, like a moon orbiting a planet.',
      zh: '源自拉丁语 satelles（随从、护卫）→ 陪伴者，如围绕行星运行的卫星。',
    },
    relatedWords: ['satisfy', 'saturate'],
  },
];
