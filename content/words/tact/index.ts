import type { WordEntry } from '@/types/content';

export const TACT_WORDS: WordEntry[] = [
  {
    slug: 'contact',
    lemma: 'contact',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈkɒn.tækt/' },
      us: { ipa: '/ˈkɑːn.tækt/' },
    },
    definition: {
      en: 'The state of touching or communicating with someone.',
      zh: '接触；联系；联络',
    },
    examples: [
      {
        en: ['Please contact us if you have any questions.'],
        zh: ['如有任何问题，请联系我们。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'tact', type: 'root', rootSlug: 'tact' },
    ],
    morphologyNote: {
      en: 'con- ("together") + tact ("touch") → to touch together, i.e. to get in touch.',
      zh: 'con-（一起）+ tact（触碰）→ 互相触碰，即接触、联系。',
    },
    relatedWords: ['intact', 'tangible', 'tact'],
  },
  {
    slug: 'tact',
    lemma: 'tact',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/tækt/' },
      us: { ipa: '/tækt/' },
    },
    definition: {
      en: 'A keen sense of what to say or do to avoid giving offense.',
      zh: '机智；圆滑；得体',
    },
    examples: [
      {
        en: ['She handled the situation with great tact.'],
        zh: ['她非常得体地处理了这个情况。'],
      },
    ],
    rootBreakdown: [{ surface: 'tact', type: 'root', rootSlug: 'tact' }],
    morphologyNote: {
      en: 'tact ("touch, sense of touch") → having a delicate sense of how to handle people.',
      zh: 'tact（触觉、感觉）→ 具有敏锐的人际感知力。',
    },
    relatedWords: ['tactful', 'tactless', 'contact'],
  },
  {
    slug: 'intact',
    lemma: 'intact',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ɪnˈtækt/' },
      us: { ipa: '/ɪnˈtækt/' },
    },
    definition: {
      en: 'Not damaged or impaired; complete.',
      zh: '完整的；未受损的',
    },
    examples: [
      {
        en: ['Surprisingly, the ancient vase was found completely intact.'],
        zh: ['令人惊讶的是，这个古花瓶被发现完好无损。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'tact', type: 'root', rootSlug: 'tact' },
    ],
    morphologyNote: {
      en: 'in- ("not") + tact ("touched") → not touched, i.e. undamaged.',
      zh: 'in-（未）+ tact（被触碰的）→ 未被触碰的，即完好无损的。',
    },
    relatedWords: ['contact', 'tact', 'tangible'],
  },
  {
    slug: 'tangible',
    lemma: 'tangible',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈtæn.dʒɪ.bəl/' },
      us: { ipa: '/ˈtæn.dʒə.bəl/' },
    },
    definition: {
      en: 'Perceptible by touch; clear and definite.',
      zh: '有形的；可触摸的；确实的',
    },
    examples: [
      {
        en: ['The project produced tangible results within six months.'],
        zh: ['项目在六个月内产出了切实的成果。'],
      },
    ],
    rootBreakdown: [
      { surface: 'tang', type: 'root', rootSlug: 'tact' },
      { surface: 'ible', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'tang (from tact, "touch") + -ible ("able to be") → able to be touched.',
      zh: 'tang（源自 tact，触碰）+ -ible（可…的）→ 可以触碰的，即有形的。',
    },
    relatedWords: ['intangible', 'contact', 'tact'],
  },
  {
    slug: 'contagious',
    lemma: 'contagious',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/kənˈteɪ.dʒəs/' },
      us: { ipa: '/kənˈteɪ.dʒəs/' },
    },
    definition: {
      en: 'Spread from one person to another by direct or indirect contact.',
      zh: '传染的；有感染力的',
    },
    examples: [
      {
        en: ['Her laughter was contagious and soon everyone was smiling.'],
        zh: ['她的笑声很有感染力，很快每个人都笑了。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'tag', type: 'root', rootSlug: 'tact' },
      { surface: 'ious', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'con- ("together") + tag (from tact, "touch") + -ious (adj.) → touching together, i.e. spreading by contact.',
      zh: 'con-（一起）+ tag（源自 tact，触碰）+ -ious（形容词后缀）→ 通过接触传播的。',
    },
    relatedWords: ['contagion', 'contact', 'tangible'],
  },
  {
    slug: 'tactic',
    lemma: 'tactic',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈtæk.tɪk/' },
      us: { ipa: '/ˈtæk.tɪk/' },
    },
    definition: {
      en: 'A planned action to achieve a specific end.',
      zh: '策略；战术；手段',
    },
    examples: [
      {
        en: ['The team changed tactics in the second half.'],
        zh: ['球队在下半场改变了战术。'],
      },
    ],
    rootBreakdown: [
      { surface: 'tact', type: 'root', rootSlug: 'tact' },
      { surface: 'ic', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From Greek taktikos ("of arranging"), related to tact ("touch, handle") → the art of handling a situation.',
      zh: '源自希腊语 taktikos（安排的），与 tact（触碰、处理）相关 → 处理局面的艺术。',
    },
    relatedWords: ['tactical', 'tactician', 'tact'],
  },
  {
    slug: 'taste',
    lemma: 'taste',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/teɪst/' },
      us: { ipa: '/teɪst/' },
    },
    definition: {
      en: "The sensation of flavor; a person's liking or preference.",
      zh: '味道；品味；尝',
    },
    examples: [
      {
        en: ['The soup has a rich, savory taste.'],
        zh: ['这汤有着浓郁鲜美的味道。'],
      },
    ],
    rootBreakdown: [{ surface: 'taste', type: 'root', rootSlug: 'tact' }],
    morphologyNote: {
      en: 'From Latin taxare ("to touch, handle"), related to tact → to test by touching to the tongue.',
      zh: '源自拉丁语 taxare（触碰、处理），与 tact 相关 → 用舌头触碰来检验，即品尝。',
    },
    relatedWords: ['tasty', 'tasteful', 'distaste'],
  },
  {
    slug: 'tactile',
    lemma: 'tactile',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈtæk.taɪl/' },
      us: { ipa: '/ˈtæk.tɪl/' },
    },
    definition: {
      en: 'Of or connected with the sense of touch.',
      zh: '触觉的；有触感的',
    },
    examples: [
      {
        en: ['Children learn through tactile experiences with different textures.'],
        zh: ['孩子们通过触摸不同材质来学习。'],
      },
    ],
    rootBreakdown: [
      { surface: 'tact', type: 'root', rootSlug: 'tact' },
      { surface: 'ile', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'tact ("touch") + -ile (adj.) → relating to touch.',
      zh: 'tact（触碰）+ -ile（形容词后缀）→ 与触觉有关的。',
    },
    relatedWords: ['tact', 'contact', 'tangible'],
  },
  {
    slug: 'intangible',
    lemma: 'intangible',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ɪnˈtæn.dʒɪ.bəl/' },
      us: { ipa: '/ɪnˈtæn.dʒə.bəl/' },
    },
    definition: {
      en: 'Unable to be touched or grasped; not having physical presence.',
      zh: '无形的；难以捉摸的',
    },
    examples: [
      {
        en: ['Brand reputation is an intangible asset.'],
        zh: ['品牌声誉是一种无形资产。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'tang', type: 'root', rootSlug: 'tact' },
      { surface: 'ible', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("not") + tang ("touch") + -ible ("able") → not able to be touched.',
      zh: 'in-（不）+ tang（触碰）+ -ible（可…的）→ 不可触碰的，即无形的。',
    },
    relatedWords: ['tangible', 'contact', 'intact'],
  },
  {
    slug: 'entangle',
    lemma: 'entangle',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ɪnˈtæŋ.ɡəl/' },
      us: { ipa: '/ɪnˈtæŋ.ɡəl/' },
    },
    definition: {
      en: 'To cause to become twisted together or involved in a complicated situation.',
      zh: '使纠缠；使卷入；使缠绕',
    },
    examples: [
      {
        en: ['The fishing line became entangled in the reeds.'],
        zh: ['鱼线缠绕在了芦苇中。'],
      },
    ],
    rootBreakdown: [
      { surface: 'en', type: 'prefix' },
      { surface: 'tangle', type: 'root', rootSlug: 'tact' },
    ],
    morphologyNote: {
      en: 'en- ("cause to be") + tangle (related to tact, "touch") → to cause to touch and intertwine.',
      zh: 'en-（使…）+ tangle（与 tact 触碰相关）→ 使互相缠绕。',
    },
    relatedWords: ['entanglement', 'disentangle', 'tangle'],
  },
];
