import type { WordEntry } from '@/types/content';

export const CAND_WORDS: WordEntry[] = [
  {
    slug: 'candle',
    lemma: 'candle',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈkæn.dəl/' },
      us: { ipa: '/ˈkæn.dəl/' },
    },
    definition: {
      en: 'A cylinder of wax with a central wick that is lit to produce light.',
      zh: '蜡烛',
    },
    examples: [
      {
        en: ['She lit a candle to create a warm atmosphere.'],
        zh: ['她点了一支蜡烛来营造温馨的氛围。'],
      },
    ],
    rootBreakdown: [
      { surface: 'cand', type: 'root', rootSlug: 'cand' },
      { surface: 'le', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'cand ("glow, shine, white") + -le (noun suffix) → a glowing object, a candle.',
      zh: 'cand（发光、闪耀、白色）+ -le（名词后缀）→ 发光的物体，即蜡烛。',
    },
    relatedWords: ['candid', 'candidate', 'candor'],
  },
  {
    slug: 'candid',
    lemma: 'candid',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈkæn.dɪd/' },
      us: { ipa: '/ˈkæn.dɪd/' },
    },
    definition: {
      en: 'Truthful and straightforward; frank.',
      zh: '坦白的；直率的',
    },
    examples: [
      {
        en: ['I appreciate your candid feedback on my presentation.'],
        zh: ['我很感谢你对我演讲的坦率反馈。'],
      },
    ],
    rootBreakdown: [
      { surface: 'cand', type: 'root', rootSlug: 'cand' },
      { surface: 'id', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'cand ("white, bright") + -id (adjective suffix) → bright and clear, hence honest and frank.',
      zh: 'cand（白色、明亮）+ -id（形容词后缀）→ 光明磊落的，即坦白的。',
    },
    relatedWords: ['candor', 'candidate', 'candle'],
  },
  {
    slug: 'candor',
    lemma: 'candor',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈkæn.dər/' },
      us: { ipa: '/ˈkæn.dɚ/' },
    },
    definition: {
      en: 'The quality of being open, honest, and direct.',
      zh: '坦率；直率',
    },
    examples: [
      {
        en: ['She spoke with refreshing candor about her mistakes.'],
        zh: ['她以令人耳目一新的坦率谈论自己的错误。'],
      },
    ],
    rootBreakdown: [
      { surface: 'cand', type: 'root', rootSlug: 'cand' },
      { surface: 'or', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'cand ("white, bright") + -or (noun suffix) → brightness of character, openness.',
      zh: 'cand（白色、明亮）+ -or（名词后缀）→ 品性的光明，即坦率。',
    },
    relatedWords: ['candid', 'candidate', 'candle'],
  },
  {
    slug: 'candidate',
    lemma: 'candidate',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈkæn.dɪ.dət/' },
      us: { ipa: '/ˈkæn.dɪ.deɪt/' },
    },
    definition: {
      en: 'A person who applies for a job or is nominated for an election.',
      zh: '候选人；申请者',
    },
    examples: [
      {
        en: ['Three candidates are running for president this year.'],
        zh: ['今年有三位候选人竞选总统。'],
      },
    ],
    rootBreakdown: [
      { surface: 'cand', type: 'root', rootSlug: 'cand' },
      { surface: 'id', type: 'suffix' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'cand ("white, bright") + -id- + -ate (noun suffix) → one dressed in white (Roman candidates wore white togas), a candidate.',
      zh: 'cand（白色、明亮）+ -id- + -ate（名词后缀）→ 穿白衣的人（古罗马候选人穿白色托加），即候选人。',
    },
    relatedWords: ['candidacy', 'candid', 'candor'],
  },
  {
    slug: 'candidacy',
    lemma: 'candidacy',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈkæn.dɪ.də.si/' },
      us: { ipa: '/ˈkæn.dɪ.də.si/' },
    },
    definition: {
      en: 'The fact or condition of being a candidate.',
      zh: '候选资格；候选人的身份',
    },
    examples: [
      {
        en: ['She announced her candidacy for the Senate seat.'],
        zh: ['她宣布竞选参议院席位。'],
      },
    ],
    rootBreakdown: [
      { surface: 'cand', type: 'root', rootSlug: 'cand' },
      { surface: 'id', type: 'suffix' },
      { surface: 'acy', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'cand ("white") + -id- + -acy (state/condition suffix) → the state of being a candidate.',
      zh: 'cand（白色）+ -id- + -acy（状态后缀）→ 候选人的状态，即候选资格。',
    },
    relatedWords: ['candidate', 'candid', 'candor'],
  },
  {
    slug: 'scandal',
    lemma: 'scandal',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈskæn.dəl/' },
      us: { ipa: '/ˈskæn.dəl/' },
    },
    definition: {
      en: 'An action or event regarded as morally wrong and causing public outrage.',
      zh: '丑闻；丑事',
    },
    examples: [
      {
        en: ['The financial scandal forced several executives to resign.'],
        zh: ['这起金融丑闻迫使几位高管辞职。'],
      },
    ],
    rootBreakdown: [
      { surface: 's', type: 'prefix' },
      { surface: 'cand', type: 'root', rootSlug: 'cand' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 's- (from Greek skandalon) + cand ("shine/expose") + -al → something brought to light that causes disgrace.',
      zh: 's-（源自希腊语 skandalon）+ cand（照亮/暴露）+ -al → 被曝光的令人蒙羞之事。',
    },
    relatedWords: ['scandalous', 'candid', 'candle'],
  },
  {
    slug: 'scandalous',
    lemma: 'scandalous',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈskæn.dəl.əs/' },
      us: { ipa: '/ˈskæn.dəl.əs/' },
    },
    definition: {
      en: 'Causing general public outrage by perceived moral wrongdoing.',
      zh: '丑闻的；可耻的；令人愤慨的',
    },
    examples: [
      {
        en: ['The scandalous behavior of the politician dominated the news.'],
        zh: ['这位政客的丑闻行为占据了新闻头条。'],
      },
    ],
    rootBreakdown: [
      { surface: 's', type: 'prefix' },
      { surface: 'cand', type: 'root', rootSlug: 'cand' },
      { surface: 'al', type: 'suffix' },
      { surface: 'ous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'scandal + -ous (adjective suffix) → causing or involving scandal.',
      zh: 'scandal（丑闻）+ -ous（形容词后缀）→ 引起丑闻的。',
    },
    relatedWords: ['scandal', 'candid', 'candidate'],
  },
];
