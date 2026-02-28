import type { WordEntry } from '@/types/content';

export const MONSTR_WORDS: WordEntry[] = [
  {
    slug: 'monster',
    lemma: 'monster',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈmɒn.stər/' }, us: { ipa: '/ˈmɑːn.stɚ/' } },
    definition: {
      en: 'An imaginary creature that is large, ugly, and frightening; something abnormally large.',
      zh: '怪物；巨大的东西',
    },
    examples: [
      {
        en: ['The children believed a monster was hiding under the bed.'],
        zh: ['孩子们相信床底下藏着一个怪物。'],
      },
    ],
    rootBreakdown: [
      { surface: 'monstr', type: 'root', rootSlug: 'monstr' },
      { surface: 'er', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'monstr ("show, warn" — an omen) + -er (noun) → something shown as a warning, a prodigy or creature.',
      zh: 'monstr（展示、警告——预兆）+ -er（名词后缀）→ 作为警告而展示的东西，即怪物。',
    },
    relatedWords: ['monstrous', 'demonstrate'],
  },
  {
    slug: 'monstrous',
    lemma: 'monstrous',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈmɒn.strəs/' }, us: { ipa: '/ˈmɑːn.strəs/' } },
    definition: {
      en: 'Having the qualities of a monster; shockingly wrong or unfair; extremely large.',
      zh: '骇人的；巨大的；极其不公正的',
    },
    examples: [
      {
        en: ['The dictator committed monstrous crimes against humanity.'],
        zh: ['独裁者犯下了骇人听闻的反人类罪行。'],
      },
    ],
    rootBreakdown: [
      { surface: 'monstr', type: 'root', rootSlug: 'monstr' },
      { surface: 'ous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'monstr ("show, omen") + -ous (adj.) → like a monster, terrifyingly unnatural.',
      zh: 'monstr（展示、预兆）+ -ous（形容词后缀）→ 如怪物般的，骇人的。',
    },
    relatedWords: ['monster', 'monstrously'],
  },
  {
    slug: 'demonstrate',
    lemma: 'demonstrate',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ˈdem.ən.streɪt/' }, us: { ipa: '/ˈdem.ən.streɪt/' } },
    definition: {
      en: 'To show clearly by giving proof or evidence; to take part in a public protest.',
      zh: '证明；演示；示威',
    },
    examples: [
      {
        en: ['The experiment demonstrated that the theory was correct.'],
        zh: ['实验证明了该理论是正确的。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'monstr', type: 'root', rootSlug: 'monstr' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'de- ("completely") + monstr ("show") + -ate (verb) → to show completely, to prove.',
      zh: 'de-（完全地）+ monstr（展示）+ -ate（动词后缀）→ 完全展示，即证明。',
    },
    relatedWords: ['demonstration', 'demonstrative'],
  },
  {
    slug: 'demonstration',
    lemma: 'demonstration',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌdem.ənˈstreɪ.ʃən/' }, us: { ipa: '/ˌdem.ənˈstreɪ.ʃən/' } },
    definition: {
      en: 'The act of showing or proving; a public display of group feelings toward a cause.',
      zh: '示范；证明；示威游行',
    },
    examples: [
      {
        en: ['Thousands joined the demonstration against the new law.'],
        zh: ['数千人参加了反对新法律的示威活动。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'monstr', type: 'root', rootSlug: 'monstr' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'de- ("completely") + monstr ("show") + -ation (noun) → the act of showing completely.',
      zh: 'de-（完全地）+ monstr（展示）+ -ation（名词后缀）→ 完全展示的行为。',
    },
    relatedWords: ['demonstrate', 'demonstrative'],
  },
  {
    slug: 'demonstrative',
    lemma: 'demonstrative',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/dɪˈmɒn.strə.tɪv/' }, us: { ipa: '/dɪˈmɑːn.strə.t̬ɪv/' } },
    definition: {
      en: 'Tending to show feelings openly; serving to prove or demonstrate.',
      zh: '感情外露的；证明的；指示的',
    },
    examples: [
      {
        en: ['He was never very demonstrative about his affections.'],
        zh: ['他从不太外露地表达自己的感情。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'monstr', type: 'root', rootSlug: 'monstr' },
      { surface: 'ative', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'de- ("completely") + monstr ("show") + -ative (adj.) → tending to show completely, openly expressive.',
      zh: 'de-（完全地）+ monstr（展示）+ -ative（形容词后缀）→ 倾向于完全展示的。',
    },
    relatedWords: ['demonstrate', 'demonstration'],
  },
  {
    slug: 'remonstrate',
    lemma: 'remonstrate',
    partOfSpeech: ['vi.'],
    pronunciation: { uk: { ipa: '/ˈrem.ən.streɪt/' }, us: { ipa: '/rɪˈmɑːn.streɪt/' } },
    definition: { en: 'To make a forceful protest or objection.', zh: '抗议；规劝；反对' },
    examples: [
      {
        en: ["The citizens remonstrated against the government's decision."],
        zh: ['市民们对政府的决定提出了抗议。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'monstr', type: 'root', rootSlug: 'monstr' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("again, back") + monstr ("show") + -ate (verb) → to show back, to protest by pointing out.',
      zh: 're-（再次）+ monstr（展示）+ -ate（动词后缀）→ 展示回来，即抗议。',
    },
    relatedWords: ['demonstrate', 'monster'],
  },
];
