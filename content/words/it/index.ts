import type { WordEntry } from '@/types/content';

export const IT_WORDS: WordEntry[] = [
  {
    slug: 'initial',
    lemma: 'initial',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ɪˈnɪʃ.əl/' },
      us: { ipa: '/ɪˈnɪʃ.əl/' },
    },
    definition: {
      en: 'Occurring at the beginning; first.',
      zh: '最初的；开始的',
    },
    examples: [
      {
        en: ['The initial results of the experiment were very promising.'],
        zh: ['实验的初步结果非常有希望。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'it', type: 'root', rootSlug: 'it' },
      { surface: 'ial', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("into") + it ("go") + -ial (adj.) → going into, i.e. at the beginning.',
      zh: 'in-（进入）+ it（走）+ -ial（形容词后缀）→ 走入，即最初的。',
    },
    relatedWords: ['initiate', 'initially'],
  },
  {
    slug: 'initiate',
    lemma: 'initiate',
    partOfSpeech: ['vt.'],
    pronunciation: {
      uk: { ipa: '/ɪˈnɪʃ.i.eɪt/' },
      us: { ipa: '/ɪˈnɪʃ.i.eɪt/' },
    },
    definition: {
      en: 'To begin or start something; to introduce someone to a new activity.',
      zh: '开始；创始；发起',
    },
    examples: [
      {
        en: ['The government initiated a new reform program.'],
        zh: ['政府发起了一项新的改革计划。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'it', type: 'root', rootSlug: 'it' },
      { surface: 'iate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("into") + it ("go") + -iate (verb) → to go into something, to set in motion.',
      zh: 'in-（进入）+ it（走）+ -iate（动词后缀）→ 走入某事，即开始、发起。',
    },
    relatedWords: ['initial', 'initiator', 'initiative'],
  },
  {
    slug: 'transit',
    lemma: 'transit',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈtræn.zɪt/' },
      us: { ipa: '/ˈtræn.zɪt/' },
    },
    definition: {
      en: 'The act of passing through or across; public transportation.',
      zh: '运输；经过；公共交通',
    },
    examples: [
      {
        en: ['The goods were damaged in transit.'],
        zh: ['货物在运输途中受损。'],
      },
    ],
    rootBreakdown: [
      { surface: 'trans', type: 'prefix' },
      { surface: 'it', type: 'root', rootSlug: 'it' },
    ],
    morphologyNote: {
      en: 'trans- ("across") + it ("go") → to go across, passage.',
      zh: 'trans-（跨越）+ it（走）→ 跨越走过，即运输、过境。',
    },
    relatedWords: ['transition', 'transitory', 'transient'],
  },
  {
    slug: 'transition',
    lemma: 'transition',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/trænˈzɪʃ.ən/' },
      us: { ipa: '/trænˈzɪʃ.ən/' },
    },
    definition: {
      en: 'The process of changing from one state or condition to another.',
      zh: '过渡；转变',
    },
    examples: [
      {
        en: ['The transition from school to work can be challenging.'],
        zh: ['从学校到工作的过渡可能充满挑战。'],
      },
    ],
    rootBreakdown: [
      { surface: 'trans', type: 'prefix' },
      { surface: 'it', type: 'root', rootSlug: 'it' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'trans- ("across") + it ("go") + -ion (noun) → the act of going across, a shift.',
      zh: 'trans-（跨越）+ it（走）+ -ion（名词后缀）→ 跨越行走的过程，即过渡、转变。',
    },
    relatedWords: ['transit', 'transitional', 'transitory'],
  },
  {
    slug: 'transient',
    lemma: 'transient',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈtræn.zi.ənt/' },
      us: { ipa: '/ˈtræn.zi.ənt/' },
    },
    definition: {
      en: 'Lasting only a short time; temporary.',
      zh: '短暂的；瞬间的',
    },
    examples: [
      {
        en: ['The pain was transient and disappeared within minutes.'],
        zh: ['疼痛是短暂的，几分钟内就消失了。'],
      },
    ],
    rootBreakdown: [
      { surface: 'trans', type: 'prefix' },
      { surface: 'i', type: 'root', rootSlug: 'it' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'trans- ("across") + i (variant of it, "go") + -ent (adj.) → going across quickly, hence fleeting.',
      zh: 'trans-（跨越）+ i（it 的变体，走）+ -ent（形容词后缀）→ 快速通过的，即短暂的。',
    },
    relatedWords: ['transience', 'transit', 'transitory'],
  },
  {
    slug: 'transitory',
    lemma: 'transitory',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈtræn.zɪ.tər.i/' },
      us: { ipa: '/ˈtræn.zɪ.tɔːr.i/' },
    },
    definition: {
      en: 'Not permanent; existing only briefly.',
      zh: '短暂的；暂时的',
    },
    examples: [
      {
        en: ['Fame can be transitory in the entertainment industry.'],
        zh: ['在娱乐行业中，名声可能是短暂的。'],
      },
    ],
    rootBreakdown: [
      { surface: 'trans', type: 'prefix' },
      { surface: 'it', type: 'root', rootSlug: 'it' },
      { surface: 'ory', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'trans- ("across") + it ("go") + -ory (adj.) → of the nature of passing across, hence temporary.',
      zh: 'trans-（跨越）+ it（走）+ -ory（形容词后缀）→ 具有通过性质的，即暂时的。',
    },
    relatedWords: ['transient', 'transit', 'transition'],
  },
  {
    slug: 'ambition',
    lemma: 'ambition',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/æmˈbɪʃ.ən/' },
      us: { ipa: '/æmˈbɪʃ.ən/' },
    },
    definition: {
      en: 'A strong desire to achieve something, such as success or power.',
      zh: '野心；雄心；抱负',
    },
    examples: [
      {
        en: ['Her ambition is to become a world-class surgeon.'],
        zh: ['她的雄心是成为一名世界级的外科医生。'],
      },
    ],
    rootBreakdown: [
      { surface: 'amb', type: 'prefix' },
      { surface: 'it', type: 'root', rootSlug: 'it' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'amb- ("around") + it ("go") + -ion (noun) → going around (canvassing for votes), hence ambition.',
      zh: 'amb-（到处）+ it（走）+ -ion（名词后缀）→ 到处走动（拉票），引申为雄心、抱负。',
    },
    relatedWords: ['ambitious', 'ambitiously'],
  },
  {
    slug: 'ambitious',
    lemma: 'ambitious',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/æmˈbɪʃ.əs/' },
      us: { ipa: '/æmˈbɪʃ.əs/' },
    },
    definition: {
      en: 'Having a strong desire for success, achievement, or distinction.',
      zh: '有雄心的；野心勃勃的',
    },
    examples: [
      {
        en: ['The company launched an ambitious expansion plan.'],
        zh: ['公司推出了一项雄心勃勃的扩张计划。'],
      },
    ],
    rootBreakdown: [
      { surface: 'amb', type: 'prefix' },
      { surface: 'it', type: 'root', rootSlug: 'it' },
      { surface: 'ious', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'amb- ("around") + it ("go") + -ious (adj.) → inclined to go around seeking, hence driven.',
      zh: 'amb-（到处）+ it（走）+ -ious（形容词后缀）→ 倾向于四处奔走追求的，即有雄心的。',
    },
    relatedWords: ['ambition', 'ambitiously', 'unambitious'],
  },
  {
    slug: 'elicit',
    lemma: 'elicit',
    partOfSpeech: ['vt.'],
    pronunciation: {
      uk: { ipa: '/ɪˈlɪs.ɪt/' },
      us: { ipa: '/ɪˈlɪs.ɪt/' },
    },
    definition: {
      en: 'To draw out a response, answer, or fact from someone.',
      zh: '引出；诱出；引起',
    },
    examples: [
      {
        en: ['The question elicited a strong reaction from the audience.'],
        zh: ['这个问题引起了观众的强烈反应。'],
      },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'lic', type: 'root', rootSlug: 'it' },
      { surface: 'it', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'e- ("out") + licit (from lacere, "to entice, go") → to draw out, to evoke.',
      zh: 'e-（出）+ licit（引诱，走）→ 引出，即诱出、引起。',
    },
    relatedWords: ['elite', 'elitism'],
  },
  {
    slug: 'elite',
    lemma: 'elite',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: {
      uk: { ipa: '/eɪˈliːt/' },
      us: { ipa: '/eɪˈliːt/' },
    },
    definition: {
      en: 'A select group that is superior in terms of ability, qualities, or social standing.',
      zh: '精英；上层人士',
    },
    examples: [
      {
        en: ['Only the elite athletes qualify for the Olympic team.'],
        zh: ['只有精英运动员才能入选奥运代表队。'],
      },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'lit', type: 'root', rootSlug: 'it' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'e- ("out") + lit (variant of lect/it, "choose, go") → chosen out, the select few.',
      zh: 'e-（出）+ lit（选择，走）→ 被选出来的，即精英。',
    },
    relatedWords: ['elitist', 'elitism', 'elicit'],
  },
];
