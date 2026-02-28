import type { WordEntry } from '@/types/content';

export const MAND_WORDS: WordEntry[] = [
  {
    slug: 'command',
    lemma: 'command',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: { uk: { ipa: '/kəˈmɑːnd/' }, us: { ipa: '/kəˈmænd/' } },
    definition: { en: 'To give an authoritative order; an order given.', zh: '命令；指挥；控制' },
    examples: [
      { en: ['The general commanded the troops to advance.'], zh: ['将军命令部队前进。'] },
    ],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'mand', type: 'root', rootSlug: 'mand' },
    ],
    morphologyNote: {
      en: 'com- ("intensifier") + mand ("order, entrust") → to give an order with authority.',
      zh: 'com-（加强语气）+ mand（命令）→ 强有力地下令，即命令。',
    },
    relatedWords: ['commander', 'commandment', 'commanding'],
  },
  {
    slug: 'demand',
    lemma: 'demand',
    partOfSpeech: ['vt.', 'n.'],
    pronunciation: { uk: { ipa: '/dɪˈmɑːnd/' }, us: { ipa: '/dɪˈmænd/' } },
    definition: {
      en: 'To ask for something firmly; a strong request or need.',
      zh: '要求；需要；需求',
    },
    examples: [
      {
        en: ['Workers demanded higher wages and better conditions.'],
        zh: ['工人们要求更高的工资和更好的条件。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'mand', type: 'root', rootSlug: 'mand' },
    ],
    morphologyNote: {
      en: 'de- ("fully, away") + mand ("order") → to order fully, to insist upon.',
      zh: 'de-（完全地）+ mand（命令）→ 完全地命令，即要求。',
    },
    relatedWords: ['demanding', 'on-demand'],
  },
  {
    slug: 'mandate',
    lemma: 'mandate',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: { uk: { ipa: '/ˈmæn.deɪt/' }, us: { ipa: '/ˈmæn.deɪt/' } },
    definition: {
      en: 'An official order or commission to do something; authority given.',
      zh: '授权；命令；委托',
    },
    examples: [
      {
        en: ['The president received a clear mandate from the voters.'],
        zh: ['总统获得了选民的明确授权。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mand', type: 'root', rootSlug: 'mand' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mand ("order, entrust") + -ate (noun/verb) → an authoritative order or commission.',
      zh: 'mand（命令、委托）+ -ate（名词/动词后缀）→ 权威的命令，即授权。',
    },
    relatedWords: ['mandatory', 'mandated'],
  },
  {
    slug: 'mandatory',
    lemma: 'mandatory',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈmæn.də.tər.i/' }, us: { ipa: '/ˈmæn.də.tɔːr.i/' } },
    definition: { en: 'Required by law or mandate; compulsory.', zh: '强制的；义务的；命令的' },
    examples: [
      {
        en: ['Wearing a seatbelt is mandatory in most countries.'],
        zh: ['在大多数国家，系安全带是强制性的。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mand', type: 'root', rootSlug: 'mand' },
      { surface: 'at', type: 'other' },
      { surface: 'ory', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mand ("order") + -atory (adj.) → relating to an order, hence compulsory.',
      zh: 'mand（命令）+ -atory（形容词后缀）→ 与命令相关的，即强制的。',
    },
    relatedWords: ['mandate', 'command'],
  },
  {
    slug: 'commend',
    lemma: 'commend',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/kəˈmend/' }, us: { ipa: '/kəˈmend/' } },
    definition: { en: 'To praise formally or officially; to recommend.', zh: '赞扬；推荐；委托' },
    examples: [
      {
        en: ['The teacher commended the student for her outstanding essay.'],
        zh: ['老师表扬了这位学生出色的论文。'],
      },
    ],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'mend', type: 'root', rootSlug: 'mand' },
    ],
    morphologyNote: {
      en: 'com- ("intensifier") + mend (variant of mand, "entrust") → to entrust fully, hence to praise.',
      zh: 'com-（加强语气）+ mend（mand 的变体，委托）→ 完全地委托、赞赏。',
    },
    relatedWords: ['commendable', 'commendation', 'recommend'],
  },
  {
    slug: 'recommend',
    lemma: 'recommend',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ˌrek.əˈmend/' }, us: { ipa: '/ˌrek.əˈmend/' } },
    definition: {
      en: 'To suggest something as worthy of acceptance; to advise.',
      zh: '推荐；建议',
    },
    examples: [
      {
        en: ['I recommend this restaurant for its excellent seafood.'],
        zh: ['我推荐这家餐厅，因为它的海鲜很棒。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'com', type: 'prefix' },
      { surface: 'mend', type: 'root', rootSlug: 'mand' },
    ],
    morphologyNote: {
      en: 're- ("again") + com- ("with") + mend ("entrust") → to entrust again, to endorse.',
      zh: 're-（再次）+ com-（一起）+ mend（委托）→ 再次委托，即推荐。',
    },
    relatedWords: ['recommendation', 'commend'],
  },
  {
    slug: 'countermand',
    lemma: 'countermand',
    partOfSpeech: ['vt.', 'n.'],
    pronunciation: { uk: { ipa: '/ˌkaʊn.təˈmɑːnd/' }, us: { ipa: '/ˌkaʊn.tɚˈmænd/' } },
    definition: { en: 'To revoke a command or order; a contrary order.', zh: '撤回命令；取消' },
    examples: [
      { en: ['The general countermanded the order to retreat.'], zh: ['将军撤回了撤退的命令。'] },
    ],
    rootBreakdown: [
      { surface: 'counter', type: 'prefix' },
      { surface: 'mand', type: 'root', rootSlug: 'mand' },
    ],
    morphologyNote: {
      en: 'counter- ("against") + mand ("order") → to order against, to revoke a previous command.',
      zh: 'counter-（对立）+ mand（命令）→ 下达相反的命令，即撤销。',
    },
    relatedWords: ['command', 'demand', 'mandate'],
  },
  {
    slug: 'commanding',
    lemma: 'commanding',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/kəˈmɑːn.dɪŋ/' }, us: { ipa: '/kəˈmæn.dɪŋ/' } },
    definition: {
      en: 'Having authority; dominating by position or manner.',
      zh: '指挥的；居高临下的；威严的',
    },
    examples: [
      {
        en: ['The castle sits in a commanding position overlooking the valley.'],
        zh: ['城堡坐落在一个俯瞰山谷的高处。'],
      },
    ],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'mand', type: 'root', rootSlug: 'mand' },
      { surface: 'ing', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'com- + mand ("order") + -ing (adj.) → ordering, having authority.',
      zh: 'com- + mand（命令）+ -ing（形容词后缀）→ 发号施令的，即威严的。',
    },
    relatedWords: ['command', 'commander'],
  },
];
