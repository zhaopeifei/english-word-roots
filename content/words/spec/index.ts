import type { WordEntry } from '@/types/content';

export const SPEC_WORDS: WordEntry[] = [
  {
    slug: 'special',
    lemma: 'special',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈspeʃ.əl/' },
      us: { ipa: '/ˈspeʃ.əl/' },
    },
    definition: {
      en: 'Better, greater, or otherwise different from what is usual.',
      zh: '特别的；专门的；特殊的',
    },
    examples: [
      {
        en: ['This is a special occasion that deserves celebration.'],
        zh: ['这是一个值得庆祝的特殊场合。'],
      },
    ],
    rootBreakdown: [
      { surface: 'spec', type: 'root', rootSlug: 'spec' },
      { surface: 'ial', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'spec ("look, kind") + -ial (adj.) → of a particular kind, i.e. distinctive.',
      zh: 'spec（看、种类）+ -ial（形容词后缀）→ 属于特定种类的，即特别的。',
    },
    relatedWords: ['specialist', 'specialize', 'species'],
  },
  {
    slug: 'species',
    lemma: 'species',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈspiː.ʃiːz/' },
      us: { ipa: '/ˈspiː.ʃiːz/' },
    },
    definition: {
      en: 'A group of living organisms with shared characteristics that can interbreed.',
      zh: '物种；种类',
    },
    examples: [
      {
        en: ['Many species are threatened by habitat destruction.'],
        zh: ['许多物种受到栖息地破坏的威胁。'],
      },
    ],
    rootBreakdown: [
      { surface: 'spec', type: 'root', rootSlug: 'spec' },
      { surface: 'ies', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'spec ("look, appearance") + -ies → things that look alike, i.e. a kind or type.',
      zh: 'spec（外观、看）+ -ies → 看起来相似的一类，即物种。',
    },
    relatedWords: ['special', 'specific', 'specimen'],
  },
  {
    slug: 'specific',
    lemma: 'specific',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/spəˈsɪf.ɪk/' },
      us: { ipa: '/spəˈsɪf.ɪk/' },
    },
    definition: {
      en: 'Clearly defined or identified; particular.',
      zh: '具体的；特定的；明确的',
    },
    examples: [
      {
        en: ['Can you be more specific about what you need?'],
        zh: ['你能更具体地说明你需要什么吗？'],
      },
    ],
    rootBreakdown: [
      { surface: 'spec', type: 'root', rootSlug: 'spec' },
      { surface: 'ific', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'spec ("look, kind") + -ific ("making") → making something look particular.',
      zh: 'spec（看、种类）+ -ific（使成为）→ 使其看起来特定的。',
    },
    relatedWords: ['specify', 'specification', 'special'],
  },
  {
    slug: 'respect',
    lemma: 'respect',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/rɪˈspekt/' },
      us: { ipa: '/rɪˈspekt/' },
    },
    definition: {
      en: 'A feeling of deep admiration; to regard with esteem.',
      zh: '尊重；敬意；尊敬',
    },
    examples: [
      {
        en: ['We should respect the opinions of others.'],
        zh: ['我们应该尊重他人的意见。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'spect', type: 'root', rootSlug: 'spec' },
    ],
    morphologyNote: {
      en: 're- ("back, again") + spect ("look") → to look back at, i.e. to regard with admiration.',
      zh: 're-（回头）+ spect（看）→ 回头看，即尊重、敬仰。',
    },
    relatedWords: ['respectable', 'respectful', 'disrespect'],
  },
  {
    slug: 'expect',
    lemma: 'expect',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ɪkˈspekt/' },
      us: { ipa: '/ɪkˈspekt/' },
    },
    definition: {
      en: 'To regard something as likely to happen.',
      zh: '期待；预料；期望',
    },
    examples: [
      {
        en: ['We expect the project to be finished by Friday.'],
        zh: ['我们预计项目将在周五前完成。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'pect', type: 'root', rootSlug: 'spec' },
    ],
    morphologyNote: {
      en: 'ex- ("out") + pect (from spec, "look") → to look out for something.',
      zh: 'ex-（向外）+ pect（源自 spec，看）→ 向外张望，即期待。',
    },
    relatedWords: ['expectation', 'unexpected', 'expectancy'],
  },
  {
    slug: 'inspect',
    lemma: 'inspect',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ɪnˈspekt/' },
      us: { ipa: '/ɪnˈspekt/' },
    },
    definition: {
      en: 'To look at something closely in order to assess its condition or quality.',
      zh: '检查；视察；审视',
    },
    examples: [
      {
        en: ['Officials will inspect the building for safety violations.'],
        zh: ['官员将检查建筑物是否存在安全违规。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'spect', type: 'root', rootSlug: 'spec' },
    ],
    morphologyNote: {
      en: 'in- ("into") + spect ("look") → to look into closely.',
      zh: 'in-（进入）+ spect（看）→ 深入地看，即检查。',
    },
    relatedWords: ['inspection', 'inspector', 'suspect'],
  },
  {
    slug: 'perspective',
    lemma: 'perspective',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/pəˈspek.tɪv/' },
      us: { ipa: '/pɚˈspek.tɪv/' },
    },
    definition: {
      en: 'A particular attitude or way of regarding something; a point of view.',
      zh: '观点；视角；透视',
    },
    examples: [
      {
        en: ['Traveling gives you a new perspective on life.'],
        zh: ['旅行让你对生活有了新的视角。'],
      },
    ],
    rootBreakdown: [
      { surface: 'per', type: 'prefix' },
      { surface: 'spect', type: 'root', rootSlug: 'spec' },
      { surface: 'ive', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'per- ("through") + spect ("look") + -ive (noun/adj.) → the way one looks through things.',
      zh: 'per-（穿过）+ spect（看）+ -ive（名词/形容词后缀）→ 透过事物看的方式，即视角。',
    },
    relatedWords: ['prospect', 'retrospect', 'introspect'],
  },
  {
    slug: 'suspect',
    lemma: 'suspect',
    partOfSpeech: ['v.', 'n.', 'adj.'],
    pronunciation: {
      uk: { ipa: '/səˈspekt/' },
      us: { ipa: '/səˈspekt/' },
    },
    definition: {
      en: 'To believe something is likely or possible; a person believed to be guilty.',
      zh: '怀疑；嫌疑犯',
    },
    examples: [
      {
        en: ['Police suspect that the fire was started deliberately.'],
        zh: ['警方怀疑大火是被人故意点燃的。'],
      },
    ],
    rootBreakdown: [
      { surface: 'su', type: 'prefix' },
      { surface: 'spect', type: 'root', rootSlug: 'spec' },
    ],
    morphologyNote: {
      en: 'su- (from sub, "under, secretly") + spect ("look") → to look at secretly, i.e. to distrust.',
      zh: 'su-（源自 sub，暗中）+ spect（看）→ 暗中察看，即怀疑。',
    },
    relatedWords: ['suspicion', 'suspicious', 'inspect'],
  },
  {
    slug: 'spectacle',
    lemma: 'spectacle',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈspek.tə.kəl/' },
      us: { ipa: '/ˈspek.tə.kəl/' },
    },
    definition: {
      en: 'A visually striking performance or display; (pl.) eyeglasses.',
      zh: '景象；壮观场面；眼镜',
    },
    examples: [
      {
        en: ['The fireworks display was a magnificent spectacle.'],
        zh: ['烟花表演是一场壮丽的景象。'],
      },
    ],
    rootBreakdown: [
      { surface: 'spect', type: 'root', rootSlug: 'spec' },
      { surface: 'acle', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'spect ("look") + -acle (noun) → something worth looking at.',
      zh: 'spect（看）+ -acle（名词后缀）→ 值得一看的东西，即景象。',
    },
    relatedWords: ['spectacular', 'spectator', 'spectrum'],
  },
  {
    slug: 'spectrum',
    lemma: 'spectrum',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈspek.trəm/' },
      us: { ipa: '/ˈspek.trəm/' },
    },
    definition: {
      en: 'A band of colors produced by light; a wide range.',
      zh: '光谱；频谱；范围',
    },
    examples: [
      {
        en: ['The political spectrum ranges from far left to far right.'],
        zh: ['政治光谱从极左到极右。'],
      },
    ],
    rootBreakdown: [
      { surface: 'spect', type: 'root', rootSlug: 'spec' },
      { surface: 'rum', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'spect ("look, see") + -rum (noun) → something seen or observed, originally the band of light colors.',
      zh: 'spect（看）+ -rum（名词后缀）→ 所见之物，最初指光的色带。',
    },
    relatedWords: ['spectacle', 'spectacular', 'inspect'],
  },
  {
    slug: 'prospect',
    lemma: 'prospect',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈprɒs.pekt/' },
      us: { ipa: '/ˈprɑː.spekt/' },
    },
    definition: {
      en: 'The possibility of a future event; a potential customer or candidate.',
      zh: '前景；展望；潜在客户',
    },
    examples: [
      {
        en: ['The prospect of a promotion motivated her to work harder.'],
        zh: ['升职的前景激励她更加努力地工作。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pro', type: 'prefix' },
      { surface: 'spect', type: 'root', rootSlug: 'spec' },
    ],
    morphologyNote: {
      en: 'pro- ("forward") + spect ("look") → to look forward, i.e. what lies ahead.',
      zh: 'pro-（向前）+ spect（看）→ 向前看，即前景、展望。',
    },
    relatedWords: ['prospective', 'perspective', 'retrospect'],
  },
  {
    slug: 'retrospect',
    lemma: 'retrospect',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈret.rə.spekt/' },
      us: { ipa: '/ˈret.rə.spekt/' },
    },
    definition: {
      en: 'A survey or review of past events.',
      zh: '回顾；追溯',
    },
    examples: [
      {
        en: ['In retrospect, the decision was clearly a mistake.'],
        zh: ['回想起来，这个决定显然是个错误。'],
      },
    ],
    rootBreakdown: [
      { surface: 'retro', type: 'prefix' },
      { surface: 'spect', type: 'root', rootSlug: 'spec' },
    ],
    morphologyNote: {
      en: 'retro- ("backward") + spect ("look") → to look backward at the past.',
      zh: 'retro-（向后）+ spect（看）→ 向后看，即回顾。',
    },
    relatedWords: ['retrospective', 'prospect', 'introspect'],
  },
  {
    slug: 'speculation',
    lemma: 'speculation',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˌspek.jʊˈleɪ.ʃən/' },
      us: { ipa: '/ˌspek.jəˈleɪ.ʃən/' },
    },
    definition: {
      en: 'The forming of theories without firm evidence; investment in risky ventures.',
      zh: '推测；猜测；投机',
    },
    examples: [
      {
        en: ['There is much speculation about who will be the next CEO.'],
        zh: ['关于谁将成为下一任首席执行官有很多猜测。'],
      },
    ],
    rootBreakdown: [
      { surface: 'spec', type: 'root', rootSlug: 'spec' },
      { surface: 'ul', type: 'connector' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'spec ("look") + -ulation (noun) → the act of looking ahead without certainty.',
      zh: 'spec（看）+ -ulation（名词后缀）→ 不确定地向前看的行为，即推测。',
    },
    relatedWords: ['speculative', 'speculator', 'spectacle'],
  },
  {
    slug: 'despise',
    lemma: 'despise',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/dɪˈspaɪz/' },
      us: { ipa: '/dɪˈspaɪz/' },
    },
    definition: {
      en: 'To feel contempt or a deep dislike for someone or something.',
      zh: '鄙视；蔑视',
    },
    examples: [
      {
        en: ['She despised dishonesty in any form.'],
        zh: ['她鄙视任何形式的不诚实。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'spise', type: 'root', rootSlug: 'spec' },
    ],
    morphologyNote: {
      en: 'de- ("down") + spise (from spec, "look") → to look down upon.',
      zh: 'de-（向下）+ spise（源自 spec，看）→ 向下看，即鄙视。',
    },
    relatedWords: ['despicable', 'respect', 'inspect'],
  },
];
