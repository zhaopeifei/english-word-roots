import type { WordEntry } from '@/types/content';

export const VIS_WORDS: WordEntry[] = [
  {
    slug: 'visible',
    lemma: 'visible',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈvɪz.ə.bəl/' }, us: { ipa: '/ˈvɪz.ə.bəl/' } },
    definition: { en: 'Able to be seen; obvious to the eye.', zh: '可见的；明显的' },
    examples: [
      {
        en: ['Stars are more visible on clear, dark nights.'],
        zh: ['在晴朗的夜晚，星星更加清晰可见。'],
      },
    ],
    rootBreakdown: [
      { surface: 'vis', type: 'root', rootSlug: 'vis' },
      { surface: 'ible', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'vis ("see") + -ible ("able to be") → able to be seen.',
      zh: 'vis（看）+ -ible（可…的）→ 可以被看到的。',
    },
    relatedWords: ['invisible', 'vision', 'visual'],
  },
  {
    slug: 'vision',
    lemma: 'vision',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈvɪʒ.ən/' }, us: { ipa: '/ˈvɪʒ.ən/' } },
    definition: {
      en: 'The ability to see; the ability to think about the future with imagination.',
      zh: '视力；视野；愿景',
    },
    examples: [
      {
        en: ["The CEO shared her vision for the company's future."],
        zh: ['首席执行官分享了她对公司未来的愿景。'],
      },
    ],
    rootBreakdown: [
      { surface: 'vis', type: 'root', rootSlug: 'vis' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'vis ("see") + -ion (noun) → the act or power of seeing.',
      zh: 'vis（看）+ -ion（名词后缀）→ 看的能力或行为。',
    },
    relatedWords: ['visionary', 'visible', 'envision'],
  },
  {
    slug: 'visual',
    lemma: 'visual',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈvɪʒ.u.əl/' }, us: { ipa: '/ˈvɪʒ.u.əl/' } },
    definition: { en: 'Relating to seeing or sight.', zh: '视觉的；可视的' },
    examples: [
      {
        en: ['The presentation included impressive visual effects.'],
        zh: ['演示文稿包含令人印象深刻的视觉效果。'],
      },
    ],
    rootBreakdown: [
      { surface: 'vis', type: 'root', rootSlug: 'vis' },
      { surface: 'ual', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'vis ("see") + -ual (adj.) → relating to seeing.',
      zh: 'vis（看）+ -ual（形容词后缀）→ 与看有关的。',
    },
    relatedWords: ['visualize', 'visible', 'vision'],
  },
  {
    slug: 'supervise',
    lemma: 'supervise',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ˈsuː.pə.vaɪz/' }, us: { ipa: '/ˈsuː.pɚ.vaɪz/' } },
    definition: { en: 'To observe and direct the work of others.', zh: '监督；管理；指导' },
    examples: [
      {
        en: ['A teacher supervises the children during recess.'],
        zh: ['老师在课间休息时监督孩子们。'],
      },
    ],
    rootBreakdown: [
      { surface: 'super', type: 'prefix' },
      { surface: 'vis', type: 'root', rootSlug: 'vis' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'super- ("over, above") + vis ("see") → to see over, i.e. to oversee.',
      zh: 'super-（在上方）+ vis（看）→ 从上面看，即监督。',
    },
    relatedWords: ['supervisor', 'supervision', 'advise'],
  },
  {
    slug: 'advise',
    lemma: 'advise',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ədˈvaɪz/' }, us: { ipa: '/ədˈvaɪz/' } },
    definition: { en: 'To offer suggestions about the best course of action.', zh: '建议；劝告' },
    examples: [
      { en: ['The doctor advised him to rest for a week.'], zh: ['医生建议他休息一周。'] },
    ],
    rootBreakdown: [
      { surface: 'ad', type: 'prefix' },
      { surface: 'vis', type: 'root', rootSlug: 'vis' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ad- ("toward") + vis ("see") → to look toward a situation and offer guidance.',
      zh: 'ad-（朝向）+ vis（看）→ 审视局势并提供指导，即建议。',
    },
    relatedWords: ['advice', 'adviser', 'advisory'],
  },
  {
    slug: 'revise',
    lemma: 'revise',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/rɪˈvaɪz/' }, us: { ipa: '/rɪˈvaɪz/' } },
    definition: { en: 'To examine and improve or amend a text or plan.', zh: '修改；复习；修订' },
    examples: [
      { en: ['She revised her essay before submitting it.'], zh: ['她在提交前修改了论文。'] },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'vis', type: 'root', rootSlug: 'vis' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("again") + vis ("see") → to look at again, i.e. to reconsider and improve.',
      zh: 're-（再次）+ vis（看）→ 再次审视，即修改。',
    },
    relatedWords: ['revision', 'visible', 'visit'],
  },
  {
    slug: 'evidence',
    lemma: 'evidence',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈev.ɪ.dəns/' }, us: { ipa: '/ˈev.ə.dəns/' } },
    definition: {
      en: 'Information indicating whether a belief or proposition is true.',
      zh: '证据；证明；迹象',
    },
    examples: [
      {
        en: ['The police found evidence linking the suspect to the crime.'],
        zh: ['警方找到了将嫌疑人与犯罪联系起来的证据。'],
      },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'vid', type: 'root', rootSlug: 'vis' },
      { surface: 'ence', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'e- ("out") + vid (from vis, "see") + -ence (noun) → what can be seen clearly.',
      zh: 'e-（向外）+ vid（源自 vis，看）+ -ence（名词后缀）→ 能被清楚看到的东西。',
    },
    relatedWords: ['evident', 'video', 'visible'],
  },
  {
    slug: 'television',
    lemma: 'television',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈtel.ɪ.vɪʒ.ən/' }, us: { ipa: '/ˈtel.ə.vɪʒ.ən/' } },
    definition: {
      en: 'A system for transmitting visual images and sound at a distance.',
      zh: '电视；电视机',
    },
    examples: [
      {
        en: ['Television has transformed the way we receive news.'],
        zh: ['电视改变了我们接收新闻的方式。'],
      },
    ],
    rootBreakdown: [
      { surface: 'tele', type: 'prefix' },
      { surface: 'vis', type: 'root', rootSlug: 'vis' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'tele- ("far") + vis ("see") + -ion (noun) → seeing from afar.',
      zh: 'tele-（远距离）+ vis（看）+ -ion（名词后缀）→ 从远处看，即电视。',
    },
    relatedWords: ['visible', 'vision', 'video'],
  },
  {
    slug: 'video',
    lemma: 'video',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈvɪd.i.əʊ/' }, us: { ipa: '/ˈvɪd.i.oʊ/' } },
    definition: {
      en: 'The recording, reproducing, or broadcasting of moving visual images.',
      zh: '视频；录像',
    },
    examples: [
      {
        en: ['She uploaded a video of her trip to the platform.'],
        zh: ['她将旅行视频上传到了平台上。'],
      },
    ],
    rootBreakdown: [
      { surface: 'vid', type: 'root', rootSlug: 'vis' },
      { surface: 'eo', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'vid (from vis, "see") + -eo → "I see" in Latin, hence moving images.',
      zh: 'vid（源自 vis，看）+ -eo → 拉丁语"我看"，引申为视频。',
    },
    relatedWords: ['television', 'visible', 'evidence'],
  },
  {
    slug: 'survey',
    lemma: 'survey',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: { uk: { ipa: '/ˈsɜː.veɪ/' }, us: { ipa: '/ˈsɝː.veɪ/' } },
    definition: {
      en: 'A general view or examination; to look closely at or examine.',
      zh: '调查；测量；概观',
    },
    examples: [
      {
        en: ['A recent survey showed that 70% of people support the policy.'],
        zh: ['最近的一项调查显示70%的人支持该政策。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sur', type: 'prefix' },
      { surface: 'vey', type: 'root', rootSlug: 'vis' },
    ],
    morphologyNote: {
      en: 'sur- (from super, "over") + vey (from vis, "see") → to see over, i.e. to examine broadly.',
      zh: 'sur-（源自 super，在上方）+ vey（源自 vis，看）→ 从上面看，即全面调查。',
    },
    relatedWords: ['surveyor', 'overview', 'supervise'],
  },
  {
    slug: 'envision',
    lemma: 'envision',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ɪnˈvɪʒ.ən/' }, us: { ipa: '/ɪnˈvɪʒ.ən/' } },
    definition: { en: 'To imagine as a future possibility.', zh: '设想；展望' },
    examples: [
      {
        en: ['She envisioned a world where everyone has equal opportunities.'],
        zh: ['她设想了一个人人机会均等的世界。'],
      },
    ],
    rootBreakdown: [
      { surface: 'en', type: 'prefix' },
      { surface: 'vis', type: 'root', rootSlug: 'vis' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'en- ("in") + vis ("see") + -ion → to see something in the mind.',
      zh: 'en-（在…中）+ vis（看）+ -ion → 在脑海中看到，即设想。',
    },
    relatedWords: ['vision', 'visionary', 'visible'],
  },
  {
    slug: 'improvise',
    lemma: 'improvise',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ˈɪm.prə.vaɪz/' }, us: { ipa: '/ˈɪm.prə.vaɪz/' } },
    definition: {
      en: 'To create and perform spontaneously without preparation.',
      zh: '即兴创作；临时凑合',
    },
    examples: [
      {
        en: ['The musician had to improvise when she forgot the melody.'],
        zh: ['音乐家忘了旋律后不得不即兴发挥。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'pro', type: 'prefix' },
      { surface: 'vis', type: 'root', rootSlug: 'vis' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- ("not") + pro- ("before") + vis ("see") → not seen before, i.e. unprepared.',
      zh: 'im-（不）+ pro-（提前）+ vis（看）→ 事先没看过的，即即兴的。',
    },
    relatedWords: ['improvisation', 'improvised', 'provision'],
  },
];
