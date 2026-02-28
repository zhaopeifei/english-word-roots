import type { WordEntry } from '@/types/content';

export const FORTUN_WORDS: WordEntry[] = [
  {
    slug: 'fortune',
    lemma: 'fortune',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈfɔː.tʃuːn/' }, us: { ipa: '/ˈfɔːr.tʃuːn/' } },
    definition: {
      en: 'Chance or luck as an external force affecting human affairs; a large amount of money.',
      zh: '财富；运气；命运',
    },
    examples: [
      { en: ['He made a fortune in the tech industry.'], zh: ['他在科技行业赚了一大笔财富。'] },
    ],
    rootBreakdown: [
      { surface: 'fortun', type: 'root', rootSlug: 'fortun' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From Latin fortuna ("chance, luck, fate"). Related to fors ("luck").',
      zh: '源自拉丁语 fortuna（机遇、运气、命运）。与 fors（运气）相关。',
    },
    relatedWords: ['fortunate', 'unfortunate', 'misfortune'],
  },
  {
    slug: 'fortunate',
    lemma: 'fortunate',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈfɔː.tʃə.nət/' }, us: { ipa: '/ˈfɔːr.tʃə.nət/' } },
    definition: { en: 'Favored by or involving good luck; auspicious.', zh: '幸运的；侥幸的' },
    examples: [
      {
        en: ['We were fortunate to escape the storm without injury.'],
        zh: ['我们幸运地在暴风雨中毫发无伤地逃脱了。'],
      },
    ],
    rootBreakdown: [
      { surface: 'fortun', type: 'root', rootSlug: 'fortun' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'fortun ("luck, chance") + -ate (adjective) → having good luck.',
      zh: 'fortun（运气、机遇）+ -ate（形容词后缀）→ 有好运的，即幸运的。',
    },
    relatedWords: ['fortune', 'fortunately', 'unfortunate'],
  },
  {
    slug: 'fortunately',
    lemma: 'fortunately',
    partOfSpeech: ['adv.'],
    pronunciation: { uk: { ipa: '/ˈfɔː.tʃə.nət.li/' }, us: { ipa: '/ˈfɔːr.tʃə.nət.li/' } },
    definition: { en: 'It is fortunate that; luckily.', zh: '幸运地；幸好' },
    examples: [
      {
        en: ['Fortunately, the damage from the earthquake was minimal.'],
        zh: ['幸运的是，地震造成的损失很小。'],
      },
    ],
    rootBreakdown: [
      { surface: 'fortun', type: 'root', rootSlug: 'fortun' },
      { surface: 'ate', type: 'suffix' },
      { surface: 'ly', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'fortunate + -ly (adverb) → in a fortunate manner.',
      zh: 'fortunate（幸运的）+ -ly（副词后缀）→ 以幸运的方式。',
    },
    relatedWords: ['fortunate', 'unfortunately', 'fortune'],
  },
  {
    slug: 'unfortunate',
    lemma: 'unfortunate',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ʌnˈfɔː.tʃə.nət/' }, us: { ipa: '/ʌnˈfɔːr.tʃə.nət/' } },
    definition: { en: 'Having or marked by bad fortune; unlucky.', zh: '不幸的；倒霉的' },
    examples: [
      {
        en: ['It was an unfortunate accident that could have been prevented.'],
        zh: ['这是一场本可避免的不幸事故。'],
      },
    ],
    rootBreakdown: [
      { surface: 'un', type: 'prefix' },
      { surface: 'fortun', type: 'root', rootSlug: 'fortun' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'un- ("not") + fortunate ("lucky") → not lucky, unfortunate.',
      zh: 'un-（不）+ fortunate（幸运的）→ 不幸运的。',
    },
    relatedWords: ['fortunate', 'unfortunately', 'misfortune'],
  },
  {
    slug: 'misfortune',
    lemma: 'misfortune',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌmɪsˈfɔː.tʃuːn/' }, us: { ipa: '/ˌmɪsˈfɔːr.tʃuːn/' } },
    definition: { en: 'Bad luck; an unfortunate event.', zh: '不幸；厄运' },
    examples: [
      {
        en: ['She had the misfortune of losing her passport abroad.'],
        zh: ['她不幸在国外丢失了护照。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mis', type: 'prefix' },
      { surface: 'fortun', type: 'root', rootSlug: 'fortun' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mis- ("bad, wrong") + fortune ("luck") → bad luck.',
      zh: 'mis-（坏的、错误的）+ fortune（运气）→ 坏运气，即不幸。',
    },
    relatedWords: ['fortune', 'unfortunate', 'fortunate'],
  },
  {
    slug: 'fortuitous',
    lemma: 'fortuitous',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/fɔːˈtjuː.ɪ.təs/' }, us: { ipa: '/fɔːrˈtuː.ɪ.t̬əs/' } },
    definition: { en: 'Happening by chance rather than design; accidental.', zh: '偶然的；意外的' },
    examples: [
      {
        en: ['Their fortuitous meeting at the airport led to a business partnership.'],
        zh: ['他们在机场的偶然相遇促成了一次商业合作。'],
      },
    ],
    rootBreakdown: [
      { surface: 'fortuit', type: 'root', rootSlug: 'fortun' },
      { surface: 'ous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'fortuit- (from fortuna, "chance") + -ous (adjective) → happening by chance.',
      zh: 'fortuit-（源自 fortuna，机遇）+ -ous（形容词后缀）→ 由机遇发生的，即偶然的。',
    },
    relatedWords: ['fortune', 'fortuitously', 'fortunate'],
  },
];
