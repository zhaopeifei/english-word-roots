import type { WordEntry } from '@/types/content';

export const GEST_WORDS: WordEntry[] = [
  {
    slug: 'suggest',
    lemma: 'suggest',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/səˈdʒest/' }, us: { ipa: '/səˈdʒest/' } },
    definition: {
      en: 'To put forward for consideration; to imply or indicate.',
      zh: '建议；暗示；表明',
    },
    examples: [
      {
        en: ['I suggest we meet at the coffee shop tomorrow.'],
        zh: ['我建议我们明天在咖啡店见面。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sug', type: 'prefix' },
      { surface: 'gest', type: 'root', rootSlug: 'gest' },
    ],
    morphologyNote: {
      en: 'sug- (from sub-, "under") + gest ("carry, bring") → to bring under consideration.',
      zh: 'sug-（源自 sub-，在……之下）+ gest（携带、带来）→ 暗中带来，即建议。',
    },
    relatedWords: ['suggestion', 'suggestive', 'digest'],
  },
  {
    slug: 'suggestion',
    lemma: 'suggestion',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/səˈdʒes.tʃən/' }, us: { ipa: '/səˈdʒes.tʃən/' } },
    definition: { en: 'An idea or plan put forward for consideration.', zh: '建议；意见；暗示' },
    examples: [{ en: ['Thank you for your helpful suggestion.'], zh: ['感谢你有益的建议。'] }],
    rootBreakdown: [
      { surface: 'sug', type: 'prefix' },
      { surface: 'gest', type: 'root', rootSlug: 'gest' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sug- ("under") + gest ("carry") + -ion (noun) → something carried under, an idea offered.',
      zh: 'sug-（在……之下）+ gest（携带）+ -ion（名词后缀）→ 从下面带来的东西，即建议。',
    },
    relatedWords: ['suggest', 'suggestive', 'digest'],
  },
  {
    slug: 'digest',
    lemma: 'digest',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: { uk: { ipa: '/daɪˈdʒest/' }, us: { ipa: '/daɪˈdʒest/' } },
    definition: {
      en: 'To break down food in the body; to absorb and understand information.',
      zh: '消化；理解；摘要',
    },
    examples: [
      { en: ['It takes time to digest a heavy meal.'], zh: ['消化一顿丰盛的餐食需要时间。'] },
    ],
    rootBreakdown: [
      { surface: 'di', type: 'prefix' },
      { surface: 'gest', type: 'root', rootSlug: 'gest' },
    ],
    morphologyNote: {
      en: 'di- (from dis-, "apart") + gest ("carry") → to carry apart, to break down.',
      zh: 'di-（源自 dis-，分开）+ gest（携带）→ 分开携带，即消化。',
    },
    relatedWords: ['digestion', 'digestive', 'indigestion'],
  },
  {
    slug: 'congest',
    lemma: 'congest',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/kənˈdʒest/' }, us: { ipa: '/kənˈdʒest/' } },
    definition: { en: 'To make abnormally full or blocked; to overcrowd.', zh: '使拥塞；使充血' },
    examples: [
      {
        en: ['Rush hour traffic congests the city streets.'],
        zh: ['高峰时段的交通堵塞了城市街道。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'gest', type: 'root', rootSlug: 'gest' },
    ],
    morphologyNote: {
      en: 'con- ("together") + gest ("carry, heap") → to heap together, to overcrowd.',
      zh: 'con-（一起）+ gest（携带、堆积）→ 堆积在一起，即拥塞。',
    },
    relatedWords: ['congestion', 'congested', 'suggest'],
  },
  {
    slug: 'gesture',
    lemma: 'gesture',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: { uk: { ipa: '/ˈdʒes.tʃər/' }, us: { ipa: '/ˈdʒes.tʃɚ/' } },
    definition: {
      en: 'A movement of the body to express an idea or meaning.',
      zh: '手势；姿态；示意',
    },
    examples: [
      {
        en: ['He made a gesture of welcome as the guests arrived.'],
        zh: ['客人到达时他做了一个欢迎的手势。'],
      },
    ],
    rootBreakdown: [
      { surface: 'gest', type: 'root', rootSlug: 'gest' },
      { surface: 'ure', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'gest ("carry, bear") + -ure (noun suffix) → something carried by the body, a bodily expression.',
      zh: 'gest（携带、承载）+ -ure（名词后缀）→ 身体所承载的表达，即手势。',
    },
    relatedWords: ['gesticulate', 'gestural', 'suggest'],
  },
  {
    slug: 'register',
    lemma: 'register',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: { uk: { ipa: '/ˈredʒ.ɪ.stər/' }, us: { ipa: '/ˈredʒ.ɪ.stɚ/' } },
    definition: {
      en: "An official list or record; to enter one's name on a list.",
      zh: '登记；注册；登记簿',
    },
    examples: [
      {
        en: ['You need to register for the conference by Friday.'],
        zh: ['你需要在周五之前注册参加会议。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'gist', type: 'root', rootSlug: 'gest' },
      { surface: 'er', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("back") + gist (variant of gest, "carry, record") + -er → to carry back into record.',
      zh: 're-（回）+ gist（gest 的变体，携带、记录）+ -er → 带回记录中，即登记。',
    },
    relatedWords: ['registration', 'registered', 'suggest'],
  },
  {
    slug: 'ingest',
    lemma: 'ingest',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ɪnˈdʒest/' }, us: { ipa: '/ɪnˈdʒest/' } },
    definition: { en: 'To take food or drink into the body by swallowing.', zh: '摄取；咽下' },
    examples: [
      {
        en: ['Children should not ingest household chemicals.'],
        zh: ['儿童不应该摄入家用化学品。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'gest', type: 'root', rootSlug: 'gest' },
    ],
    morphologyNote: {
      en: 'in- ("into") + gest ("carry") → to carry into the body, to swallow.',
      zh: 'in-（进入）+ gest（携带）→ 携带进入体内，即摄取。',
    },
    relatedWords: ['ingestion', 'digest', 'suggest'],
  },
  {
    slug: 'exaggerate',
    lemma: 'exaggerate',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ɪɡˈzædʒ.ə.reɪt/' }, us: { ipa: '/ɪɡˈzædʒ.ə.reɪt/' } },
    definition: {
      en: 'To represent something as being larger or more important than it really is.',
      zh: '夸张；夸大',
    },
    examples: [
      {
        en: ['He tends to exaggerate the difficulties he faces at work.'],
        zh: ['他倾向于夸大工作中面临的困难。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'ag', type: 'prefix' },
      { surface: 'ger', type: 'root', rootSlug: 'gest' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ex- ("out") + ag- ("to") + ger (variant of gest, "carry, heap") + -ate → to heap up beyond measure, to overstate.',
      zh: 'ex-（向外）+ ag-（向）+ ger（gest 的变体，堆积）+ -ate → 过度堆积，即夸大。',
    },
    relatedWords: ['exaggeration', 'suggest', 'digest'],
  },
  {
    slug: 'gestate',
    lemma: 'gestate',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/dʒeˈsteɪt/' }, us: { ipa: '/ˈdʒes.teɪt/' } },
    definition: {
      en: 'To carry a fetus in the womb; to develop slowly over time.',
      zh: '妊娠；孕育',
    },
    examples: [
      { en: ['Elephants gestate for about 22 months.'], zh: ['大象的妊娠期大约为22个月。'] },
    ],
    rootBreakdown: [
      { surface: 'gest', type: 'root', rootSlug: 'gest' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'gest ("carry, bear") + -ate (verb) → to carry within, to bear offspring.',
      zh: 'gest（携带、承载）+ -ate（动词后缀）→ 在体内携带，即妊娠。',
    },
    relatedWords: ['gestation', 'gesture', 'digest'],
  },
];
