import type { WordEntry } from '@/types/content';

export const FLU_WORDS: WordEntry[] = [
  {
    slug: 'fluent',
    lemma: 'fluent',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈfluː.ənt/' }, us: { ipa: '/ˈfluː.ənt/' } },
    definition: {
      en: 'Able to express oneself easily and smoothly; flowing.',
      zh: '流利的；流畅的',
    },
    examples: [{ en: ['She is fluent in three languages.'], zh: ['她能流利地说三种语言。'] }],
    rootBreakdown: [
      { surface: 'flu', type: 'root', rootSlug: 'flu' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'flu ("flow") + -ent (adjective) → flowing smoothly, fluent.',
      zh: 'flu（流动）+ -ent（形容词后缀）→ 流畅的。',
    },
    relatedWords: ['fluency', 'influence', 'affluent'],
  },
  {
    slug: 'influence',
    lemma: 'influence',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: { uk: { ipa: '/ˈɪn.flu.əns/' }, us: { ipa: '/ˈɪn.flu.əns/' } },
    definition: {
      en: "The power to affect someone's character or actions; to have an effect on.",
      zh: '影响；影响力',
    },
    examples: [
      {
        en: ["Parents have a strong influence on their children's values."],
        zh: ['父母对孩子的价值观有很大的影响。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'flu', type: 'root', rootSlug: 'flu' },
      { surface: 'ence', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("into") + flu ("flow") + -ence (noun) → flowing into, having an effect upon.',
      zh: 'in-（进入）+ flu（流动）+ -ence（名词后缀）→ 流入，即影响。',
    },
    relatedWords: ['influential', 'influenza', 'fluent'],
  },
  {
    slug: 'influential',
    lemma: 'influential',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˌɪn.fluˈen.ʃəl/' }, us: { ipa: '/ˌɪn.fluˈen.ʃəl/' } },
    definition: { en: 'Having great influence on someone or something.', zh: '有影响力的' },
    examples: [
      {
        en: ['She is one of the most influential figures in modern art.'],
        zh: ['她是现代艺术中最有影响力的人物之一。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'flu', type: 'root', rootSlug: 'flu' },
      { surface: 'ent', type: 'connector' },
      { surface: 'ial', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'influence + -ial (adjective) → having the power to flow into and affect.',
      zh: 'influence（影响）+ -ial（形容词后缀）→ 有能力流入和影响的。',
    },
    relatedWords: ['influence', 'fluent', 'affluent'],
  },
  {
    slug: 'affluent',
    lemma: 'affluent',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈæf.lu.ənt/' }, us: { ipa: '/ˈæf.lu.ənt/' } },
    definition: { en: 'Having a great deal of money; wealthy.', zh: '富裕的；富足的' },
    examples: [
      {
        en: ['The affluent neighborhood is known for its luxurious homes.'],
        zh: ['这个富裕的社区以豪华住宅闻名。'],
      },
    ],
    rootBreakdown: [
      { surface: 'af', type: 'prefix' },
      { surface: 'flu', type: 'root', rootSlug: 'flu' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'af- (from ad-, "to") + flu ("flow") + -ent (adjective) → flowing toward, having wealth flowing in.',
      zh: 'af-（源自 ad-，向）+ flu（流动）+ -ent（形容词后缀）→ 财富流向的，即富裕的。',
    },
    relatedWords: ['affluence', 'fluent', 'influence'],
  },
  {
    slug: 'confluence',
    lemma: 'confluence',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈkɒn.flu.əns/' }, us: { ipa: '/ˈkɑːn.flu.əns/' } },
    definition: {
      en: 'The junction of two rivers; a coming together of things.',
      zh: '汇合处；汇集',
    },
    examples: [
      {
        en: ['The city sits at the confluence of two major rivers.'],
        zh: ['这座城市位于两条大河的汇合处。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'flu', type: 'root', rootSlug: 'flu' },
      { surface: 'ence', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'con- ("together") + flu ("flow") + -ence (noun) → a flowing together.',
      zh: 'con-（一起）+ flu（流动）+ -ence（名词后缀）→ 流到一起，即汇合。',
    },
    relatedWords: ['fluent', 'influence', 'affluent'],
  },
  {
    slug: 'superfluous',
    lemma: 'superfluous',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/suːˈpɜː.flu.əs/' }, us: { ipa: '/suːˈpɝː.flu.əs/' } },
    definition: { en: 'Unnecessary; more than what is needed.', zh: '多余的；过剩的' },
    examples: [
      {
        en: ['Remove any superfluous words to make the essay more concise.'],
        zh: ['删除多余的词语使文章更简洁。'],
      },
    ],
    rootBreakdown: [
      { surface: 'super', type: 'prefix' },
      { surface: 'flu', type: 'root', rootSlug: 'flu' },
      { surface: 'ous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'super- ("over, above") + flu ("flow") + -ous (adjective) → flowing over, more than needed.',
      zh: 'super-（超过、在……之上）+ flu（流动）+ -ous（形容词后缀）→ 溢流的，即多余的。',
    },
    relatedWords: ['fluent', 'influence', 'affluent'],
  },
  {
    slug: 'fluid',
    lemma: 'fluid',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: { uk: { ipa: '/ˈfluː.ɪd/' }, us: { ipa: '/ˈfluː.ɪd/' } },
    definition: {
      en: 'A substance that flows freely; smooth and graceful; not fixed.',
      zh: '流体；液体；流动的；不固定的',
    },
    examples: [
      {
        en: ['The situation remains fluid and could change at any time.'],
        zh: ['局势仍然不确定，随时可能变化。'],
      },
    ],
    rootBreakdown: [
      { surface: 'flu', type: 'root', rootSlug: 'flu' },
      { surface: 'id', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'flu ("flow") + -id (adjective/noun suffix) → that which flows, a liquid.',
      zh: 'flu（流动）+ -id（形容词/名词后缀）→ 能流动的，即流体。',
    },
    relatedWords: ['fluent', 'fluidity', 'flush'],
  },
  {
    slug: 'confuse',
    lemma: 'confuse',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/kənˈfjuːz/' }, us: { ipa: '/kənˈfjuːz/' } },
    definition: { en: 'To make someone unable to think clearly; to mix up.', zh: '使困惑；混淆' },
    examples: [
      {
        en: ['The complicated instructions confused many of the participants.'],
        zh: ['复杂的说明让许多参与者感到困惑。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'fuse', type: 'root', rootSlug: 'flu' },
    ],
    morphologyNote: {
      en: 'con- ("together") + fuse (variant of flu, "pour, flow") → to pour together, to mix up.',
      zh: 'con-（一起）+ fuse（flu 的变体，倾倒、流）→ 倒到一起，即混淆。',
    },
    relatedWords: ['confusion', 'diffuse', 'infuse'],
  },
  {
    slug: 'diffuse',
    lemma: 'diffuse',
    partOfSpeech: ['v.', 'adj.'],
    pronunciation: { uk: { ipa: '/dɪˈfjuːz/' }, us: { ipa: '/dɪˈfjuːz/' } },
    definition: {
      en: 'To spread or scatter widely; spread out and not concentrated.',
      zh: '扩散；传播；弥漫的',
    },
    examples: [
      { en: ['The scent of flowers diffused through the room.'], zh: ['花香弥漫了整个房间。'] },
    ],
    rootBreakdown: [
      { surface: 'dif', type: 'prefix' },
      { surface: 'fuse', type: 'root', rootSlug: 'flu' },
    ],
    morphologyNote: {
      en: 'dif- (from dis-, "apart") + fuse (variant of flu, "pour") → to pour apart, to spread widely.',
      zh: 'dif-（源自 dis-，分散）+ fuse（flu 的变体，倾倒）→ 分散倒出，即扩散。',
    },
    relatedWords: ['diffusion', 'confuse', 'infuse'],
  },
  {
    slug: 'infuse',
    lemma: 'infuse',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ɪnˈfjuːz/' }, us: { ipa: '/ɪnˈfjuːz/' } },
    definition: {
      en: 'To fill or inspire with a quality; to soak in liquid to extract flavor.',
      zh: '注入；灌输；浸泡',
    },
    examples: [
      {
        en: ['The coach infused the team with a sense of confidence.'],
        zh: ['教练给团队注入了信心。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'fuse', type: 'root', rootSlug: 'flu' },
    ],
    morphologyNote: {
      en: 'in- ("into") + fuse (variant of flu, "pour") → to pour into, to fill with.',
      zh: 'in-（进入）+ fuse（flu 的变体，倾倒）→ 倒入，即注入。',
    },
    relatedWords: ['infusion', 'confuse', 'diffuse'],
  },
  {
    slug: 'transfusion',
    lemma: 'transfusion',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/trænsˈfjuː.ʒən/' }, us: { ipa: '/trænsˈfjuː.ʒən/' } },
    definition: { en: 'The transfer of blood from one person to another.', zh: '输血' },
    examples: [
      { en: ['The patient needed an emergency blood transfusion.'], zh: ['患者需要紧急输血。'] },
    ],
    rootBreakdown: [
      { surface: 'trans', type: 'prefix' },
      { surface: 'fus', type: 'root', rootSlug: 'flu' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'trans- ("across") + fus (variant of flu, "pour") + -ion (noun) → a pouring across, the transfer of fluid.',
      zh: 'trans-（跨越）+ fus（flu 的变体，倾倒）+ -ion（名词后缀）→ 跨过来倾倒，即输血。',
    },
    relatedWords: ['infuse', 'diffuse', 'confuse'],
  },
];
