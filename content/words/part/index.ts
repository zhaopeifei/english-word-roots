import type { WordEntry } from '@/types/content';

export const PART_WORDS: WordEntry[] = [
  {
    slug: 'part',
    lemma: 'part',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: { uk: { ipa: '/pɑːt/' }, us: { ipa: '/pɑːrt/' } },
    definition: {
      en: 'A piece or segment of something; to divide or separate.',
      zh: '部分；角色；分开',
    },
    examples: [{ en: ['This is only part of the story.'], zh: ['这只是故事的一部分。'] }],
    rootBreakdown: [{ surface: 'part', type: 'root', rootSlug: 'part' }],
    morphologyNote: {
      en: 'part ("divide, share") → a divided piece, a portion.',
      zh: 'part（分割、分享）→ 被分出的一块，即部分。',
    },
    relatedWords: ['partial', 'participate', 'partner'],
  },
  {
    slug: 'partial',
    lemma: 'partial',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈpɑː.ʃəl/' }, us: { ipa: '/ˈpɑːr.ʃəl/' } },
    definition: {
      en: 'Existing only in part; incomplete; biased in favor of one side.',
      zh: '部分的；偏袒的',
    },
    examples: [
      {
        en: ['The report only gives a partial picture of the situation.'],
        zh: ['该报告只描绘了部分情况。'],
      },
    ],
    rootBreakdown: [
      { surface: 'part', type: 'root', rootSlug: 'part' },
      { surface: 'ial', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'part ("divide") + -ial (adj.) → of a part, not complete.',
      zh: 'part（分割）+ -ial（形容词后缀）→ 属于部分的，即不完整的。',
    },
    relatedWords: ['impartial', 'partiality'],
  },
  {
    slug: 'impartial',
    lemma: 'impartial',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ɪmˈpɑː.ʃəl/' }, us: { ipa: '/ɪmˈpɑːr.ʃəl/' } },
    definition: {
      en: 'Treating all rivals or disputants equally; fair and unbiased.',
      zh: '公正的；不偏不倚的',
    },
    examples: [
      {
        en: ['A judge must remain impartial throughout the trial.'],
        zh: ['法官在整个审判过程中必须保持公正。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'part', type: 'root', rootSlug: 'part' },
      { surface: 'ial', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- ("not") + part ("side") + -ial (adj.) → not taking a side, unbiased.',
      zh: 'im-（不）+ part（一方）+ -ial（形容词后缀）→ 不偏向任何一方的。',
    },
    relatedWords: ['partial', 'impartiality'],
  },
  {
    slug: 'participate',
    lemma: 'participate',
    partOfSpeech: ['vi.'],
    pronunciation: { uk: { ipa: '/pɑːˈtɪs.ɪ.peɪt/' }, us: { ipa: '/pɑːrˈtɪs.ɪ.peɪt/' } },
    definition: { en: 'To take part in an activity or event.', zh: '参加；参与' },
    examples: [
      {
        en: ['Everyone is encouraged to participate in the discussion.'],
        zh: ['鼓励每个人参与讨论。'],
      },
    ],
    rootBreakdown: [
      { surface: 'part', type: 'root', rootSlug: 'part' },
      { surface: 'icip', type: 'other' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'part ("share") + -icipate (verb, "take") → to take a share, to join in.',
      zh: 'part（分享）+ -icipate（拿取）→ 拿到一份，即参与。',
    },
    relatedWords: ['participation', 'participant'],
  },
  {
    slug: 'partner',
    lemma: 'partner',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈpɑːt.nər/' }, us: { ipa: '/ˈpɑːrt.nɚ/' } },
    definition: {
      en: 'A person who shares in an activity or business; a spouse or companion.',
      zh: '伙伴；合作者；搭档',
    },
    examples: [
      {
        en: ['She and her business partner opened a new restaurant.'],
        zh: ['她和她的商业伙伴开了一家新餐厅。'],
      },
    ],
    rootBreakdown: [
      { surface: 'part', type: 'root', rootSlug: 'part' },
      { surface: 'ner', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'part ("share") + -ner (agent) → one who shares, a co-participant.',
      zh: 'part（分享）+ -ner（施动者后缀）→ 共享者，即伙伴。',
    },
    relatedWords: ['partnership', 'part'],
  },
  {
    slug: 'depart',
    lemma: 'depart',
    partOfSpeech: ['vi.'],
    pronunciation: { uk: { ipa: '/dɪˈpɑːt/' }, us: { ipa: '/dɪˈpɑːrt/' } },
    definition: { en: 'To leave, especially in order to start a journey.', zh: '出发；离开；背离' },
    examples: [
      { en: ['The train departs from platform three at noon.'], zh: ['火车中午从三号站台出发。'] },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'part', type: 'root', rootSlug: 'part' },
    ],
    morphologyNote: {
      en: 'de- ("away") + part ("divide, separate") → to separate away, to leave.',
      zh: 'de-（离开）+ part（分离）→ 分离开去，即出发。',
    },
    relatedWords: ['departure', 'department'],
  },
  {
    slug: 'department',
    lemma: 'department',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/dɪˈpɑːt.mənt/' }, us: { ipa: '/dɪˈpɑːrt.mənt/' } },
    definition: {
      en: 'A division of a large organization; a section of a store or government.',
      zh: '部门；系；科',
    },
    examples: [{ en: ['She works in the marketing department.'], zh: ['她在市场部工作。'] }],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'part', type: 'root', rootSlug: 'part' },
      { surface: 'ment', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'de- ("away") + part ("divide") + -ment (noun) → a divided section, a separate division.',
      zh: 'de-（离开）+ part（分割）+ -ment（名词后缀）→ 被划分出的部分，即部门。',
    },
    relatedWords: ['depart', 'departmental'],
  },
  {
    slug: 'apart',
    lemma: 'apart',
    partOfSpeech: ['adv.'],
    pronunciation: { uk: { ipa: '/əˈpɑːt/' }, us: { ipa: '/əˈpɑːrt/' } },
    definition: { en: 'Separated by a distance; into pieces.', zh: '分开地；相距；分离' },
    examples: [
      { en: ['The two cities are about fifty miles apart.'], zh: ['两座城市相距约五十英里。'] },
    ],
    rootBreakdown: [
      { surface: 'a', type: 'prefix' },
      { surface: 'part', type: 'root', rootSlug: 'part' },
    ],
    morphologyNote: {
      en: 'a- ("to") + part ("divide") → to the side, separated.',
      zh: 'a-（向）+ part（分割）→ 分到一旁，即分开的。',
    },
    relatedWords: ['apartment', 'part'],
  },
  {
    slug: 'counterpart',
    lemma: 'counterpart',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈkaʊn.tə.pɑːt/' }, us: { ipa: '/ˈkaʊn.tɚ.pɑːrt/' } },
    definition: {
      en: 'A person or thing that corresponds to another; an equivalent.',
      zh: '对应的人或物；副本',
    },
    examples: [
      {
        en: ['The foreign minister met with his American counterpart.'],
        zh: ['外交部长会见了他的美国同行。'],
      },
    ],
    rootBreakdown: [
      { surface: 'counter', type: 'prefix' },
      { surface: 'part', type: 'root', rootSlug: 'part' },
    ],
    morphologyNote: {
      en: 'counter- ("corresponding") + part ("piece") → a corresponding piece, an equivalent.',
      zh: 'counter-（相对的）+ part（部分）→ 对应的部分，即对等之人或物。',
    },
    relatedWords: ['part', 'partner'],
  },
  {
    slug: 'particular',
    lemma: 'particular',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: { uk: { ipa: '/pəˈtɪk.jʊ.lər/' }, us: { ipa: '/pɚˈtɪk.jʊ.lɚ/' } },
    definition: {
      en: 'Used to single out one member of a group; especially great or intense; fastidious.',
      zh: '特定的；特别的；挑剔的',
    },
    examples: [
      {
        en: ['Is there a particular reason you chose this restaurant?'],
        zh: ['你选这家餐厅有什么特别的原因吗？'],
      },
    ],
    rootBreakdown: [
      { surface: 'part', type: 'root', rootSlug: 'part' },
      { surface: 'icul', type: 'other' },
      { surface: 'ar', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'part ("piece") + -icular (adj., "small piece") → relating to a single small part, hence specific.',
      zh: 'part（部分）+ -icular（小部分的）→ 与单个小部分相关的，即特定的。',
    },
    relatedWords: ['particularly', 'particularity'],
  },
  {
    slug: 'proportion',
    lemma: 'proportion',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/prəˈpɔː.ʃən/' }, us: { ipa: '/prəˈpɔːr.ʃən/' } },
    definition: {
      en: 'A part or share of a whole; the comparative relationship between things.',
      zh: '比例；部分；均衡',
    },
    examples: [
      {
        en: ['A large proportion of the budget is spent on education.'],
        zh: ['预算的很大一部分用于教育。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pro', type: 'prefix' },
      { surface: 'port', type: 'root', rootSlug: 'part' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pro- ("for, according to") + port (variant of part, "share") + -ion (noun) → a share according to measure, a balanced relationship.',
      zh: 'pro-（按照）+ port（part 的变体，份额）+ -ion（名词后缀）→ 按比例的份额。',
    },
    relatedWords: ['disproportion', 'portion'],
  },
  {
    slug: 'impart',
    lemma: 'impart',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ɪmˈpɑːt/' }, us: { ipa: '/ɪmˈpɑːrt/' } },
    definition: {
      en: 'To make information known; to give a quality to something.',
      zh: '传授；给予；告知',
    },
    examples: [
      {
        en: ['Teachers impart knowledge and skills to their students.'],
        zh: ['老师向学生传授知识和技能。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'part', type: 'root', rootSlug: 'part' },
    ],
    morphologyNote: {
      en: 'im- ("in, into") + part ("share") → to share into, to bestow.',
      zh: 'im-（进入）+ part（分享）→ 分享给，即传授。',
    },
    relatedWords: ['part', 'impartial'],
  },
];
