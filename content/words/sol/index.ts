import type { WordEntry } from '@/types/content';

export const SOL_WORDS: WordEntry[] = [
  {
    slug: 'solo',
    lemma: 'solo',
    partOfSpeech: ['n.', 'adj.', 'adv.'],
    pronunciation: {
      uk: { ipa: '/ˈsəʊ.ləʊ/' },
      us: { ipa: '/ˈsoʊ.loʊ/' },
    },
    definition: {
      en: 'A performance or undertaking done by one person alone.',
      zh: '独奏；独唱；单独的',
    },
    examples: [
      {
        en: ['She performed a stunning piano solo at the concert.'],
        zh: ['她在音乐会上表演了一段精彩的钢琴独奏。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sol', type: 'root', rootSlug: 'sol' },
      { surface: 'o', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sol ("alone") + -o → done alone.',
      zh: 'sol（独自）+ -o → 独自完成的。',
    },
    relatedWords: ['soloist', 'solitary', 'solitude'],
  },
  {
    slug: 'solitary',
    lemma: 'solitary',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈsɒl.ɪ.tər.i/' },
      us: { ipa: '/ˈsɑː.lə.ter.i/' },
    },
    definition: {
      en: 'Done or existing alone; without companions.',
      zh: '孤独的；独居的；单独的',
    },
    examples: [
      {
        en: ['The solitary lighthouse stood on the cliff.'],
        zh: ['那座孤零零的灯塔矗立在悬崖上。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sol', type: 'root', rootSlug: 'sol' },
      { surface: 'it', type: 'connector' },
      { surface: 'ary', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sol ("alone") + -itary (adj.) → being alone.',
      zh: 'sol（独自）+ -itary（形容词后缀）→ 独自一人的。',
    },
    relatedWords: ['solitude', 'solo', 'sole'],
  },
  {
    slug: 'solitude',
    lemma: 'solitude',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈsɒl.ɪ.tjuːd/' },
      us: { ipa: '/ˈsɑː.lə.tuːd/' },
    },
    definition: {
      en: 'The state of being alone, especially in a peaceful way.',
      zh: '孤独；独处；独居',
    },
    examples: [
      {
        en: ['She enjoys the solitude of early morning walks.'],
        zh: ['她享受清晨散步的独处时光。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sol', type: 'root', rootSlug: 'sol' },
      { surface: 'itude', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sol ("alone") + -itude (noun, state) → the state of being alone.',
      zh: 'sol（独自）+ -itude（名词后缀，状态）→ 独自的状态。',
    },
    relatedWords: ['solitary', 'solo', 'sole'],
  },
  {
    slug: 'sole',
    lemma: 'sole',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: {
      uk: { ipa: '/səʊl/' },
      us: { ipa: '/soʊl/' },
    },
    definition: {
      en: 'One and only; the bottom of a shoe or foot.',
      zh: '唯一的；鞋底',
    },
    examples: [
      {
        en: ['She is the sole heir to the family fortune.'],
        zh: ['她是家族财产的唯一继承人。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sol', type: 'root', rootSlug: 'sol' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sol ("alone, single") → one and only.',
      zh: 'sol（独自的、唯一的）→ 仅此一个的。',
    },
    relatedWords: ['solely', 'solo', 'solitary'],
  },
  {
    slug: 'isolate',
    lemma: 'isolate',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˈaɪ.sə.leɪt/' },
      us: { ipa: '/ˈaɪ.sə.leɪt/' },
    },
    definition: {
      en: 'To set apart from others; to place alone.',
      zh: '隔离；使孤立',
    },
    examples: [
      {
        en: ['Scientists isolated the virus to study it safely.'],
        zh: ['科学家将病毒隔离以安全地进行研究。'],
      },
    ],
    rootBreakdown: [
      { surface: 'isol', type: 'root', rootSlug: 'sol' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From Italian isola ("island"), from Latin insula, related to sol ("alone") → to make into an island, i.e. to separate.',
      zh: '源自意大利语 isola（岛屿），与 sol（孤独）相关 → 使成为孤岛，即隔离。',
    },
    relatedWords: ['isolated', 'isolation', 'solitary'],
  },
  {
    slug: 'desolate',
    lemma: 'desolate',
    partOfSpeech: ['adj.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈdes.əl.ət/' },
      us: { ipa: '/ˈdes.əl.ət/' },
    },
    definition: {
      en: 'Empty and bleak; feeling wretched and lonely.',
      zh: '荒凉的；凄凉的；孤寂的',
    },
    examples: [
      {
        en: ['The abandoned village looked desolate in the winter fog.'],
        zh: ['被遗弃的村庄在冬雾中显得荒凉。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'sol', type: 'root', rootSlug: 'sol' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'de- ("completely") + sol ("alone") + -ate → made completely alone, i.e. forsaken.',
      zh: 'de-（完全地）+ sol（孤独）+ -ate → 完全孤独的，即荒凉的。',
    },
    relatedWords: ['desolation', 'solitary', 'isolate'],
  },
  {
    slug: 'solid',
    lemma: 'solid',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: {
      uk: { ipa: '/ˈsɒl.ɪd/' },
      us: { ipa: '/ˈsɑː.lɪd/' },
    },
    definition: {
      en: 'Firm and stable; not liquid or hollow.',
      zh: '固体的；坚固的；结实的',
    },
    examples: [
      {
        en: ['The table is made of solid oak wood.'],
        zh: ['这张桌子是实心橡木做的。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sol', type: 'root', rootSlug: 'sol' },
      { surface: 'id', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From Latin solidus ("whole, firm") → undivided and firm.',
      zh: '源自拉丁语 solidus（完整的、坚固的）→ 不可分的、坚固的。',
    },
    relatedWords: ['consolidate', 'solidarity', 'solidity'],
  },
  {
    slug: 'consolidate',
    lemma: 'consolidate',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/kənˈsɒl.ɪ.deɪt/' },
      us: { ipa: '/kənˈsɑː.lə.deɪt/' },
    },
    definition: {
      en: 'To combine or unite into a single more effective whole; to strengthen.',
      zh: '巩固；合并；加强',
    },
    examples: [
      {
        en: ['The company consolidated its position as the market leader.'],
        zh: ['该公司巩固了其市场领导者的地位。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'solid', type: 'root', rootSlug: 'sol' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'con- ("together") + solid ("firm") + -ate (verb) → to make firm together.',
      zh: 'con-（一起）+ solid（坚固）+ -ate（动词后缀）→ 使一起变坚固，即巩固。',
    },
    relatedWords: ['consolidation', 'solid', 'console'],
  },
  {
    slug: 'solar',
    lemma: 'solar',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈsəʊ.lər/' },
      us: { ipa: '/ˈsoʊ.lɚ/' },
    },
    definition: {
      en: 'Relating to or determined by the sun.',
      zh: '太阳的；太阳能的',
    },
    examples: [
      {
        en: ['Solar panels convert sunlight into electricity.'],
        zh: ['太阳能电池板将阳光转化为电能。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sol', type: 'root', rootSlug: 'sol' },
      { surface: 'ar', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sol (from Latin sol, "sun") + -ar (adj.) → relating to the sun.',
      zh: 'sol（源自拉丁语 sol，太阳）+ -ar（形容词后缀）→ 与太阳有关的。',
    },
    relatedWords: ['parasol', 'solstice', 'insolate'],
  },
  {
    slug: 'solemn',
    lemma: 'solemn',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈsɒl.əm/' },
      us: { ipa: '/ˈsɑː.ləm/' },
    },
    definition: {
      en: 'Formal and dignified; serious and sincere.',
      zh: '庄严的；严肃的；郑重的',
    },
    examples: [
      {
        en: ['The judge spoke in a solemn tone.'],
        zh: ['法官用庄严的语气说话。'],
      },
    ],
    rootBreakdown: [{ surface: 'solemn', type: 'root', rootSlug: 'sol' }],
    morphologyNote: {
      en: 'From Latin sollemnis ("yearly, established, formal") → performed with ritual seriousness.',
      zh: '源自拉丁语 sollemnis（每年的、正式的）→ 以仪式般的严肃态度进行的。',
    },
    relatedWords: ['solemnity', 'solemnize', 'solemnly'],
  },
  {
    slug: 'obsolete',
    lemma: 'obsolete',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˌɒb.səˈliːt/' },
      us: { ipa: '/ˌɑːb.səˈliːt/' },
    },
    definition: {
      en: 'No longer produced or used; out of date.',
      zh: '过时的；废弃的',
    },
    examples: [
      {
        en: ['Typewriters have become obsolete in the digital age.'],
        zh: ['打字机在数字时代已经过时了。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ob', type: 'prefix' },
      { surface: 'sol', type: 'root', rootSlug: 'sol' },
      { surface: 'ete', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ob- ("away") + sol (from solere, "be accustomed") + -ete → grown away from custom, i.e. no longer used.',
      zh: 'ob-（离开）+ sol（源自 solere，习惯于）+ -ete → 脱离了习惯，即不再使用的。',
    },
    relatedWords: ['obsolescence', 'obsolescent'],
  },
];
