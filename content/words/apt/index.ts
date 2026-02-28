import type { WordEntry } from '@/types/content';

export const APT_WORDS: WordEntry[] = [
  {
    slug: 'aptly',
    lemma: 'aptly',
    partOfSpeech: ['adv.'],
    pronunciation: {
      uk: { ipa: '/ˈæpt.li/' },
      us: { ipa: '/ˈæpt.li/' },
    },
    definition: {
      en: 'In a manner that is appropriate or fitting.',
      zh: '适当地；恰当地',
    },
    examples: [
      {
        en: ['The restaurant was aptly named "The Garden" for its lush patio.'],
        zh: ['这家餐厅因其郁郁葱葱的露台而恰如其分地取名为"花园"。'],
      },
    ],
    rootBreakdown: [
      { surface: 'apt', type: 'root', rootSlug: 'apt' },
      { surface: 'ly', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'apt ("fitting") + -ly (adverb suffix) → in a fitting manner.',
      zh: 'apt（适合的）+ -ly（副词后缀）→ 以适合的方式。',
    },
    relatedWords: ['aptitude', 'inapt', 'inept'],
  },
  {
    slug: 'inapt',
    lemma: 'inapt',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ɪnˈæpt/' },
      us: { ipa: '/ɪnˈæpt/' },
    },
    definition: {
      en: 'Not suitable or appropriate in the circumstances.',
      zh: '不适当的；不合适的',
    },
    examples: [
      {
        en: ['His inapt comment made the situation even more awkward.'],
        zh: ['他不恰当的评论使局面更加尴尬。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'apt', type: 'root', rootSlug: 'apt' },
    ],
    morphologyNote: {
      en: 'in- ("not") + apt ("fitting") → not fitting, inappropriate.',
      zh: 'in-（不）+ apt（适合的）→ 不适合的，即不恰当的。',
    },
    relatedWords: ['aptly', 'aptitude', 'inept'],
  },
  {
    slug: 'aptitude',
    lemma: 'aptitude',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈæp.tɪ.tjuːd/' },
      us: { ipa: '/ˈæp.tɪ.tuːd/' },
    },
    definition: {
      en: 'A natural ability or talent for something.',
      zh: '天资；天赋；才能',
    },
    examples: [
      {
        en: ['She showed a strong aptitude for mathematics from an early age.'],
        zh: ['她从小就展现出很强的数学天赋。'],
      },
    ],
    rootBreakdown: [
      { surface: 'apt', type: 'root', rootSlug: 'apt' },
      { surface: 'itude', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'apt ("fitting, suited") + -itude (noun suffix for quality) → the quality of being naturally suited.',
      zh: 'apt（适合的）+ -itude（表示性质的名词后缀）→ 天然适合的品质，即天赋。',
    },
    relatedWords: ['aptly', 'inapt', 'ineptitude'],
  },
  {
    slug: 'inept',
    lemma: 'inept',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ɪˈnept/' },
      us: { ipa: '/ɪˈnept/' },
    },
    definition: {
      en: 'Having or showing no skill; clumsy or incompetent.',
      zh: '笨拙的；无能的',
    },
    examples: [
      {
        en: ['The inept handling of the crisis led to public outrage.'],
        zh: ['对危机的笨拙处理引发了公众的愤怒。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'ept', type: 'root', rootSlug: 'apt' },
    ],
    morphologyNote: {
      en: 'in- ("not") + ept (variant of apt, "fitting") → not fitting, clumsy.',
      zh: 'in-（不）+ ept（apt 的变体，适合的）→ 不适合的，即笨拙的。',
    },
    relatedWords: ['ineptitude', 'aptitude', 'inapt'],
  },
  {
    slug: 'ineptitude',
    lemma: 'ineptitude',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ɪˈnep.tɪ.tjuːd/' },
      us: { ipa: '/ɪˈnep.tɪ.tuːd/' },
    },
    definition: {
      en: 'Lack of skill or ability; incompetence.',
      zh: '无能；笨拙；不称职',
    },
    examples: [
      {
        en: ["The project failed due to the manager's sheer ineptitude."],
        zh: ['项目因经理的极度无能而失败。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'ept', type: 'root', rootSlug: 'apt' },
      { surface: 'itude', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("not") + ept (variant of apt, "fitting") + -itude (noun) → the quality of not being fit, incompetence.',
      zh: 'in-（不）+ ept（apt 的变体，适合的）+ -itude（名词后缀）→ 不适合的品质，即无能。',
    },
    relatedWords: ['inept', 'aptitude', 'aptly'],
  },
];
