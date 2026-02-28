import type { WordEntry } from '@/types/content';

export const MORT_WORDS: WordEntry[] = [
  {
    slug: 'mortal',
    lemma: 'mortal',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: { uk: { ipa: '/ˈmɔː.təl/' }, us: { ipa: '/ˈmɔːr.t̬əl/' } },
    definition: {
      en: 'Subject to death; causing death; a human being.',
      zh: '必死的；致命的；凡人',
    },
    examples: [
      { en: ['All mortal creatures must eventually face death.'], zh: ['所有凡人终将面对死亡。'] },
    ],
    rootBreakdown: [
      { surface: 'mort', type: 'root', rootSlug: 'mort' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mort ("death") + -al (adj.) → relating to death, subject to dying.',
      zh: 'mort（死亡）+ -al（形容词后缀）→ 与死亡相关的，即必死的。',
    },
    relatedWords: ['mortality', 'immortal', 'mortify'],
  },
  {
    slug: 'mortality',
    lemma: 'mortality',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/mɔːˈtæl.ɪ.ti/' }, us: { ipa: '/mɔːrˈtæl.ə.t̬i/' } },
    definition: {
      en: 'The state of being subject to death; the death rate.',
      zh: '死亡率；必死性',
    },
    examples: [
      {
        en: ['Infant mortality has decreased significantly in recent decades.'],
        zh: ['近几十年来，婴儿死亡率显著下降。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mort', type: 'root', rootSlug: 'mort' },
      { surface: 'al', type: 'other' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mort ("death") + -ality (noun) → the condition of being subject to death.',
      zh: 'mort（死亡）+ -ality（名词后缀）→ 受制于死亡的状态。',
    },
    relatedWords: ['mortal', 'immortality'],
  },
  {
    slug: 'immortal',
    lemma: 'immortal',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: { uk: { ipa: '/ɪˈmɔː.təl/' }, us: { ipa: '/ɪˈmɔːr.t̬əl/' } },
    definition: {
      en: 'Living forever; never forgotten; a being that lives forever.',
      zh: '不朽的；永生的；神仙',
    },
    examples: [
      {
        en: ["Shakespeare's plays have made him immortal in the world of literature."],
        zh: ['莎士比亚的戏剧使他在文学界永垂不朽。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'mort', type: 'root', rootSlug: 'mort' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- ("not") + mort ("death") + -al (adj.) → not subject to death, living forever.',
      zh: 'im-（不）+ mort（死亡）+ -al（形容词后缀）→ 不受死亡支配的，即永生的。',
    },
    relatedWords: ['mortal', 'immortality', 'immortalize'],
  },
  {
    slug: 'mortgage',
    lemma: 'mortgage',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: { uk: { ipa: '/ˈmɔː.ɡɪdʒ/' }, us: { ipa: '/ˈmɔːr.ɡɪdʒ/' } },
    definition: {
      en: 'A legal agreement to borrow money to buy property; the amount borrowed.',
      zh: '抵押贷款；按揭',
    },
    examples: [
      {
        en: ['They took out a thirty-year mortgage to buy their first house.'],
        zh: ['他们办了三十年的抵押贷款来买第一套房子。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mort', type: 'root', rootSlug: 'mort' },
      { surface: 'gage', type: 'root' },
    ],
    morphologyNote: {
      en: 'mort ("death") + gage ("pledge") → a death pledge — the deal dies when paid off or when payment fails.',
      zh: 'mort（死亡）+ gage（抵押）→ 死亡承诺——还清则承诺消亡，违约则财产消亡。',
    },
    relatedWords: ['mortal', 'mortify'],
  },
  {
    slug: 'mortify',
    lemma: 'mortify',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ˈmɔː.tɪ.faɪ/' }, us: { ipa: '/ˈmɔːr.t̬ɪ.faɪ/' } },
    definition: {
      en: 'To cause someone to feel extremely embarrassed or ashamed.',
      zh: '使羞辱；使难堪',
    },
    examples: [
      {
        en: ['She was mortified when she tripped on stage in front of the audience.'],
        zh: ['她在观众面前在台上绊倒，感到极其难堪。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mort', type: 'root', rootSlug: 'mort' },
      { surface: 'ify', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mort ("death") + -ify (verb) → to make dead, to cause such shame one wishes to die.',
      zh: 'mort（死亡）+ -ify（动词后缀）→ 使人恨不得去死，即使人极度尴尬。',
    },
    relatedWords: ['mortified', 'mortification'],
  },
  {
    slug: 'murder',
    lemma: 'murder',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: { uk: { ipa: '/ˈmɜː.dər/' }, us: { ipa: '/ˈmɝː.dɚ/' } },
    definition: {
      en: 'The unlawful premeditated killing of one person by another.',
      zh: '谋杀；凶杀',
    },
    examples: [
      {
        en: ['The detective was assigned to investigate the murder case.'],
        zh: ['侦探被指派调查这起谋杀案。'],
      },
    ],
    rootBreakdown: [
      { surface: 'murd', type: 'root', rootSlug: 'mort' },
      { surface: 'er', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'murd (variant of mort, "death") + -er → the act of causing death, killing.',
      zh: 'murd（mort 的变体，死亡）+ -er → 致人死亡的行为，即谋杀。',
    },
    relatedWords: ['murderer', 'murderous'],
  },
  {
    slug: 'mortician',
    lemma: 'mortician',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/mɔːˈtɪʃ.ən/' }, us: { ipa: '/mɔːrˈtɪʃ.ən/' } },
    definition: {
      en: 'A person whose business is preparing dead bodies for burial and arranging funerals.',
      zh: '殡葬业者',
    },
    examples: [
      {
        en: ['The mortician prepared the body for the viewing ceremony.'],
        zh: ['殡葬师为遗体告别仪式做了准备。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mort', type: 'root', rootSlug: 'mort' },
      { surface: 'ician', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mort ("death") + -ician (specialist) → a specialist in death, an undertaker.',
      zh: 'mort（死亡）+ -ician（专业人员后缀）→ 死亡方面的专业人员，即殡葬师。',
    },
    relatedWords: ['mortal', 'mortuary'],
  },
  {
    slug: 'mortuary',
    lemma: 'mortuary',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: { uk: { ipa: '/ˈmɔː.tʃʊ.ər.i/' }, us: { ipa: '/ˈmɔːr.tʃu.er.i/' } },
    definition: {
      en: 'A room or building where dead bodies are kept before burial or cremation.',
      zh: '太平间；殡仪馆',
    },
    examples: [
      {
        en: ['The body was taken to the mortuary for identification.'],
        zh: ['遗体被送到太平间进行辨认。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mort', type: 'root', rootSlug: 'mort' },
      { surface: 'uary', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mort ("death") + -uary (place) → a place related to death.',
      zh: 'mort（死亡）+ -uary（场所后缀）→ 与死亡相关的场所，即太平间。',
    },
    relatedWords: ['mortician', 'mortal'],
  },
  {
    slug: 'morbid',
    lemma: 'morbid',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈmɔː.bɪd/' }, us: { ipa: '/ˈmɔːr.bɪd/' } },
    definition: {
      en: 'Characterized by an abnormal and unhealthy interest in disturbing subjects, especially death.',
      zh: '病态的；不健康的；可怕的',
    },
    examples: [
      {
        en: ['He had a morbid fascination with horror movies and ghost stories.'],
        zh: ['他对恐怖电影和鬼故事有一种病态的迷恋。'],
      },
    ],
    rootBreakdown: [
      { surface: 'morb', type: 'root', rootSlug: 'mort' },
      { surface: 'id', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'morb (related to mort, "disease, death") + -id (adj.) → of a diseased or death-like nature.',
      zh: 'morb（与 mort 相关，疾病、死亡）+ -id（形容词后缀）→ 具有病态性质的。',
    },
    relatedWords: ['morbidity', 'mortal'],
  },
  {
    slug: 'moribund',
    lemma: 'moribund',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈmɒr.ɪ.bʌnd/' }, us: { ipa: '/ˈmɔːr.ɪ.bʌnd/' } },
    definition: { en: 'At the point of death; in terminal decline.', zh: '垂死的；停滞的' },
    examples: [
      {
        en: ['The moribund industry struggled to adapt to new technology.'],
        zh: ['这个濒临衰亡的行业努力适应新技术。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mori', type: 'root', rootSlug: 'mort' },
      { surface: 'bund', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mori (variant of mort, "die") + -bund (tending to) → tending to die, at the point of death.',
      zh: 'mori（mort 的变体，死亡）+ -bund（倾向于）→ 趋向于死亡的，即垂死的。',
    },
    relatedWords: ['mortal', 'mortality'],
  },
  {
    slug: 'amortize',
    lemma: 'amortize',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/əˈmɔː.taɪz/' }, us: { ipa: '/ˈæm.ɚ.taɪz/' } },
    definition: {
      en: 'To gradually write off the initial cost of an asset over a period.',
      zh: '分期偿还；摊销',
    },
    examples: [
      {
        en: ['The company will amortize the cost of the equipment over five years.'],
        zh: ['公司将在五年内摊销设备成本。'],
      },
    ],
    rootBreakdown: [
      { surface: 'a', type: 'prefix' },
      { surface: 'mort', type: 'root', rootSlug: 'mort' },
      { surface: 'ize', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'a- ("to") + mort ("death") + -ize (verb) → to bring to death, to extinguish a debt gradually.',
      zh: 'a-（向）+ mort（死亡）+ -ize（动词后缀）→ 使债务逐渐消亡，即分期偿还。',
    },
    relatedWords: ['amortization', 'mortgage'],
  },
];
