import type { WordEntry } from '@/types/content';

export const VOL_WORDS: WordEntry[] = [
  {
    slug: 'involve',
    lemma: 'involve',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ɪnˈvɒlv/' }, us: { ipa: '/ɪnˈvɑːlv/' } },
    definition: {
      en: 'To include as a necessary part; to cause to participate.',
      zh: '涉及；包含；使参与',
    },
    examples: [
      {
        en: ['The project involves collaboration between several departments.'],
        zh: ['该项目涉及多个部门之间的合作。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'volv', type: 'root', rootSlug: 'vol' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("in") + volv ("roll, turn") → to roll into, i.e. to draw in.',
      zh: 'in-（进入）+ volv（滚、卷）→ 卷入，即涉及。',
    },
    relatedWords: ['involvement', 'evolve', 'revolve'],
  },
  {
    slug: 'evolve',
    lemma: 'evolve',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ɪˈvɒlv/' }, us: { ipa: '/ɪˈvɑːlv/' } },
    definition: {
      en: 'To develop gradually over time; to undergo biological evolution.',
      zh: '进化；发展；演变',
    },
    examples: [
      { en: ['Languages evolve naturally over centuries.'], zh: ['语言在几个世纪中自然演变。'] },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'volv', type: 'root', rootSlug: 'vol' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'e- ("out") + volv ("roll") → to unroll, i.e. to unfold over time.',
      zh: 'e-（向外）+ volv（滚动）→ 展开，即逐步发展。',
    },
    relatedWords: ['evolution', 'evolutionary', 'revolve'],
  },
  {
    slug: 'revolution',
    lemma: 'revolution',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌrev.əˈluː.ʃən/' }, us: { ipa: '/ˌrev.əˈluː.ʃən/' } },
    definition: {
      en: 'A forcible overthrow of a government; a dramatic and wide-reaching change.',
      zh: '革命；旋转；巨变',
    },
    examples: [
      { en: ['The Industrial Revolution transformed society.'], zh: ['工业革命改变了社会。'] },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'vol', type: 'root', rootSlug: 'vol' },
      { surface: 'ution', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("back, again") + vol ("turn, roll") + -ution (noun) → a complete turning around.',
      zh: 're-（回来）+ vol（转、滚）+ -ution（名词后缀）→ 完全翻转，即革命。',
    },
    relatedWords: ['revolutionary', 'revolve', 'revolt'],
  },
  {
    slug: 'revolve',
    lemma: 'revolve',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/rɪˈvɒlv/' }, us: { ipa: '/rɪˈvɑːlv/' } },
    definition: {
      en: 'To move in a circular orbit; to turn around a central point.',
      zh: '旋转；围绕',
    },
    examples: [
      { en: ['The Earth revolves around the Sun once a year.'], zh: ['地球每年绕太阳公转一周。'] },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'volv', type: 'root', rootSlug: 'vol' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("back, again") + volv ("roll") → to roll back repeatedly, i.e. to go in circles.',
      zh: 're-（反复）+ volv（滚动）→ 反复滚动，即旋转。',
    },
    relatedWords: ['revolution', 'revolving', 'involve'],
  },
  {
    slug: 'volunteer',
    lemma: 'volunteer',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: { uk: { ipa: '/ˌvɒl.ənˈtɪər/' }, us: { ipa: '/ˌvɑː.lənˈtɪr/' } },
    definition: {
      en: 'A person who freely offers to do something; to offer to do something willingly.',
      zh: '志愿者；自愿做',
    },
    examples: [
      {
        en: ['She volunteered at the local food bank every weekend.'],
        zh: ['她每个周末都在当地食物银行做志愿者。'],
      },
    ],
    rootBreakdown: [
      { surface: 'volunt', type: 'root', rootSlug: 'vol' },
      { surface: 'eer', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'volunt (from vol, "will, wish") + -eer (one who) → one who acts by free will.',
      zh: 'volunt（源自 vol，意愿）+ -eer（…的人）→ 出于自愿行动的人。',
    },
    relatedWords: ['voluntary', 'volunteerism', 'volition'],
  },
  {
    slug: 'voluntary',
    lemma: 'voluntary',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈvɒl.ən.tər.i/' }, us: { ipa: '/ˈvɑː.lən.ter.i/' } },
    definition: { en: "Done, given, or acting of one's own free will.", zh: '自愿的；志愿的' },
    examples: [
      {
        en: ['Participation in the program is entirely voluntary.'],
        zh: ['参加该项目完全是自愿的。'],
      },
    ],
    rootBreakdown: [
      { surface: 'volunt', type: 'root', rootSlug: 'vol' },
      { surface: 'ary', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'volunt (from vol, "will") + -ary (adj.) → of one\'s own will.',
      zh: 'volunt（源自 vol，意愿）+ -ary（形容词后缀）→ 出于自己意愿的。',
    },
    relatedWords: ['volunteer', 'involuntary', 'volition'],
  },
  {
    slug: 'volume',
    lemma: 'volume',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈvɒl.juːm/' }, us: { ipa: '/ˈvɑːl.juːm/' } },
    definition: {
      en: 'The amount of space occupied; the degree of loudness; a book forming part of a set.',
      zh: '体积；音量；卷',
    },
    examples: [{ en: ['Please turn down the volume on the TV.'], zh: ['请把电视音量调低。'] }],
    rootBreakdown: [
      { surface: 'vol', type: 'root', rootSlug: 'vol' },
      { surface: 'ume', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'vol ("roll") + -ume (noun) → a roll of parchment, hence a book; later, the space something fills.',
      zh: 'vol（卷）+ -ume（名词后缀）→ 一卷羊皮纸，即书卷；后引申为体积。',
    },
    relatedWords: ['voluble', 'revolve', 'evolve'],
  },
  {
    slug: 'volatile',
    lemma: 'volatile',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈvɒl.ə.taɪl/' }, us: { ipa: '/ˈvɑː.lə.t̬əl/' } },
    definition: {
      en: 'Liable to change rapidly and unpredictably; easily evaporated.',
      zh: '易变的；不稳定的；挥发性的',
    },
    examples: [
      {
        en: ['The stock market has been extremely volatile this year.'],
        zh: ['今年股市极其不稳定。'],
      },
    ],
    rootBreakdown: [
      { surface: 'vol', type: 'root', rootSlug: 'vol' },
      { surface: 'atile', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'vol ("fly, roll") + -atile (adj.) → tending to fly off, i.e. unstable.',
      zh: 'vol（飞、滚）+ -atile（形容词后缀）→ 倾向于飞走的，即不稳定的。',
    },
    relatedWords: ['volatility', 'revolve', 'evolve'],
  },
  {
    slug: 'benevolent',
    lemma: 'benevolent',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/bəˈnev.əl.ənt/' }, us: { ipa: '/bəˈnev.əl.ənt/' } },
    definition: { en: 'Well-meaning and kindly; charitable.', zh: '仁慈的；善意的；慈善的' },
    examples: [
      {
        en: ['The benevolent donor funded scholarships for underprivileged students.'],
        zh: ['仁慈的捐赠者为贫困学生资助奖学金。'],
      },
    ],
    rootBreakdown: [
      { surface: 'bene', type: 'prefix' },
      { surface: 'vol', type: 'root', rootSlug: 'vol' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'bene- ("well, good") + vol ("wish") + -ent (adj.) → wishing well for others.',
      zh: 'bene-（好的）+ vol（意愿）+ -ent（形容词后缀）→ 对他人有美好意愿的。',
    },
    relatedWords: ['benevolence', 'malevolent', 'volunteer'],
  },
  {
    slug: 'vulnerable',
    lemma: 'vulnerable',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈvʌl.nər.ə.bəl/' }, us: { ipa: '/ˈvʌl.nɚ.ə.bəl/' } },
    definition: { en: 'Susceptible to physical or emotional harm.', zh: '脆弱的；易受伤的' },
    examples: [
      {
        en: ['Children are especially vulnerable to the effects of pollution.'],
        zh: ['儿童特别容易受到污染的影响。'],
      },
    ],
    rootBreakdown: [
      { surface: 'vulner', type: 'root', rootSlug: 'vol' },
      { surface: 'able', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'vulner (from vulnus, "wound") + -able ("capable of") → capable of being wounded.',
      zh: 'vulner（源自 vulnus，伤口）+ -able（可…的）→ 可能被伤害的。',
    },
    relatedWords: ['vulnerability', 'invulnerable', 'volunteer'],
  },
];
