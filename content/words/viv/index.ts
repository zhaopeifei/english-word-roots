import type { WordEntry } from '@/types/content';

export const VIV_WORDS: WordEntry[] = [
  {
    slug: 'vivid',
    lemma: 'vivid',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈvɪv.ɪd/' }, us: { ipa: '/ˈvɪv.ɪd/' } },
    definition: {
      en: 'Producing powerful feelings or strong, clear images in the mind.',
      zh: '生动的；鲜明的',
    },
    examples: [
      {
        en: ['She gave a vivid description of her travels.'],
        zh: ['她对旅行经历做了生动的描述。'],
      },
    ],
    rootBreakdown: [
      { surface: 'viv', type: 'root', rootSlug: 'viv' },
      { surface: 'id', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'viv ("live") + -id (adj.) → full of life, i.e. strikingly alive.',
      zh: 'viv（活）+ -id（形容词后缀）→ 充满生命力的，即生动的。',
    },
    relatedWords: ['vividly', 'vivacity', 'revive'],
  },
  {
    slug: 'survive',
    lemma: 'survive',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/səˈvaɪv/' }, us: { ipa: '/sɚˈvaɪv/' } },
    definition: {
      en: 'To continue to live or exist, especially in spite of danger or hardship.',
      zh: '幸存；生还；挺过',
    },
    examples: [
      {
        en: ['Only a few passengers survived the plane crash.'],
        zh: ['只有少数乘客在空难中幸存。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sur', type: 'prefix' },
      { surface: 'viv', type: 'root', rootSlug: 'viv' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sur- ("above, beyond") + viv ("live") → to live beyond danger.',
      zh: 'sur-（超越）+ viv（活）→ 超越危险而存活。',
    },
    relatedWords: ['survival', 'survivor', 'revive'],
  },
  {
    slug: 'revive',
    lemma: 'revive',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/rɪˈvaɪv/' }, us: { ipa: '/rɪˈvaɪv/' } },
    definition: { en: 'To restore to life, consciousness, or strength.', zh: '复苏；恢复；使复兴' },
    examples: [
      {
        en: ['The doctor managed to revive the patient after cardiac arrest.'],
        zh: ['医生在心脏骤停后成功使患者复苏。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'viv', type: 'root', rootSlug: 'viv' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("again") + viv ("live") → to live again.',
      zh: 're-（再次）+ viv（活）→ 再次活过来。',
    },
    relatedWords: ['revival', 'survive', 'vivid'],
  },
  {
    slug: 'vital',
    lemma: 'vital',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈvaɪ.təl/' }, us: { ipa: '/ˈvaɪ.t̬əl/' } },
    definition: { en: 'Absolutely necessary or important; essential.', zh: '至关重要的；生命的' },
    examples: [
      { en: ['Clean water is vital for human survival.'], zh: ['清洁的水对人类生存至关重要。'] },
    ],
    rootBreakdown: [
      { surface: 'vit', type: 'root', rootSlug: 'viv' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'vit (from viv, "live") + -al (adj.) → relating to life, hence essential.',
      zh: 'vit（源自 viv，活）+ -al（形容词后缀）→ 与生命有关的，即至关重要的。',
    },
    relatedWords: ['vitality', 'revitalize', 'vivid'],
  },
  {
    slug: 'vigor',
    lemma: 'vigor',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈvɪɡ.ər/' }, us: { ipa: '/ˈvɪɡ.ɚ/' } },
    definition: {
      en: 'Physical strength and good health; energy and enthusiasm.',
      zh: '活力；精力；元气',
    },
    examples: [
      { en: ['She pursued the project with great vigor.'], zh: ['她精力充沛地推进这个项目。'] },
    ],
    rootBreakdown: [
      { surface: 'vig', type: 'root', rootSlug: 'viv' },
      { surface: 'or', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'vig (from viv, "live, be strong") + -or (noun) → the state of being alive and strong.',
      zh: 'vig（源自 viv，活、有力）+ -or（名词后缀）→ 充满活力的状态。',
    },
    relatedWords: ['vigorous', 'invigorate', 'vivid'],
  },
  {
    slug: 'vivacious',
    lemma: 'vivacious',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/vɪˈveɪ.ʃəs/' }, us: { ipa: '/vɪˈveɪ.ʃəs/' } },
    definition: { en: 'Attractively lively and animated.', zh: '活泼的；有生气的' },
    examples: [
      {
        en: ['Her vivacious personality made her the center of attention.'],
        zh: ['她活泼的个性使她成为众人关注的焦点。'],
      },
    ],
    rootBreakdown: [
      { surface: 'viv', type: 'root', rootSlug: 'viv' },
      { surface: 'acious', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'viv ("live") + -acious (adj.) → full of life.',
      zh: 'viv（活）+ -acious（形容词后缀）→ 充满生命力的。',
    },
    relatedWords: ['vivacity', 'vivid', 'revive'],
  },
  {
    slug: 'revitalize',
    lemma: 'revitalize',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/riːˈvaɪ.tə.laɪz/' }, us: { ipa: '/riːˈvaɪ.t̬əl.aɪz/' } },
    definition: { en: 'To give new life or vigor to.', zh: '使复兴；使恢复活力' },
    examples: [
      {
        en: ['The new investment helped revitalize the downtown area.'],
        zh: ['新投资帮助振兴了市中心区域。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'vital', type: 'root', rootSlug: 'viv' },
      { surface: 'ize', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("again") + vital ("life") + -ize (verb) → to give life again.',
      zh: 're-（再次）+ vital（生命）+ -ize（使…）→ 使再次有生命力。',
    },
    relatedWords: ['revitalization', 'vital', 'revive'],
  },
  {
    slug: 'vigilant',
    lemma: 'vigilant',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈvɪdʒ.ɪ.lənt/' }, us: { ipa: '/ˈvɪdʒ.ə.lənt/' } },
    definition: {
      en: 'Keeping careful watch for possible danger or difficulties.',
      zh: '警惕的；警觉的',
    },
    examples: [
      {
        en: ['Security guards remained vigilant throughout the night.'],
        zh: ['保安整夜保持警惕。'],
      },
    ],
    rootBreakdown: [
      { surface: 'vigil', type: 'root', rootSlug: 'viv' },
      { surface: 'ant', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'vigil (from viv, "be alive, be awake") + -ant (adj.) → being awake and alert.',
      zh: 'vigil（源自 viv，清醒、活着）+ -ant（形容词后缀）→ 保持清醒警觉的。',
    },
    relatedWords: ['vigilance', 'vigor', 'vivid'],
  },
];
