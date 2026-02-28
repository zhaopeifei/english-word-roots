import type { WordEntry } from '@/types/content';

export const PRESS_WORDS: WordEntry[] = [
  {
    slug: 'press',
    lemma: 'press',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: {
      uk: { ipa: '/pres/' },
      us: { ipa: '/pres/' },
    },
    definition: {
      en: 'To push firmly; the act of pressing; newspapers and journalists collectively.',
      zh: '按；压；新闻界',
    },
    examples: [
      {
        en: ['Press the button to start the machine.'],
        zh: ['按下按钮启动机器。'],
      },
    ],
    rootBreakdown: [{ surface: 'press', type: 'root', rootSlug: 'press' }],
    morphologyNote: {
      en: 'press ("push, squeeze") → the basic root meaning to push or apply force.',
      zh: 'press（推、挤压）→ 词根本义为施压。',
    },
    relatedWords: ['pressure', 'impress', 'express'],
  },
  {
    slug: 'pressure',
    lemma: 'pressure',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈpreʃ.ər/' },
      us: { ipa: '/ˈpreʃ.ɚ/' },
    },
    definition: {
      en: 'The force exerted on a surface; the feeling of stress or urgency.',
      zh: '压力；压强；施压',
    },
    examples: [
      {
        en: ['High blood pressure can lead to serious health problems.'],
        zh: ['高血压可能导致严重的健康问题。'],
      },
    ],
    rootBreakdown: [
      { surface: 'press', type: 'root', rootSlug: 'press' },
      { surface: 'ure', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'press ("push") + -ure (noun) → the state of pushing or being pushed.',
      zh: 'press（推压）+ -ure（名词后缀）→ 推压的状态，即压力。',
    },
    relatedWords: ['pressurize', 'press', 'compress'],
  },
  {
    slug: 'impress',
    lemma: 'impress',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ɪmˈpres/' },
      us: { ipa: '/ɪmˈpres/' },
    },
    definition: {
      en: 'To make someone feel admiration and respect.',
      zh: '给…留下深刻印象；使钦佩',
    },
    examples: [
      {
        en: ['Her speech impressed everyone in the audience.'],
        zh: ['她的演讲给在场所有人留下了深刻印象。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'press', type: 'root', rootSlug: 'press' },
    ],
    morphologyNote: {
      en: 'im- ("into") + press ("push") → to push an image into someone\'s mind.',
      zh: 'im-（进入）+ press（压）→ 将印象压入内心，即打动。',
    },
    relatedWords: ['impression', 'impressive', 'express'],
  },
  {
    slug: 'impressive',
    lemma: 'impressive',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ɪmˈpres.ɪv/' },
      us: { ipa: '/ɪmˈpres.ɪv/' },
    },
    definition: {
      en: 'Evoking admiration through size, quality, or skill.',
      zh: '令人印象深刻的；给人深刻印象的',
    },
    examples: [
      {
        en: ['The cathedral has an impressive Gothic facade.'],
        zh: ['这座大教堂有着令人印象深刻的哥特式外观。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'press', type: 'root', rootSlug: 'press' },
      { surface: 'ive', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- ("into") + press ("push") + -ive (adj.) → tending to push into one\'s mind.',
      zh: 'im-（进入）+ press（压）+ -ive（形容词后缀）→ 能压入内心的，即令人印象深刻的。',
    },
    relatedWords: ['impress', 'impression', 'unimpressive'],
  },
  {
    slug: 'express',
    lemma: 'express',
    partOfSpeech: ['v.', 'adj.', 'n.'],
    pronunciation: {
      uk: { ipa: '/ɪkˈspres/' },
      us: { ipa: '/ɪkˈspres/' },
    },
    definition: {
      en: 'To convey a thought or feeling in words or actions; fast or direct.',
      zh: '表达；快速的；快递',
    },
    examples: [
      {
        en: ['Art allows people to express their deepest emotions.'],
        zh: ['艺术让人们表达最深层的情感。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'press', type: 'root', rootSlug: 'press' },
    ],
    morphologyNote: {
      en: 'ex- ("out") + press ("push") → to push out thoughts or feelings.',
      zh: 'ex-（向外）+ press（压）→ 将想法挤压出来，即表达。',
    },
    relatedWords: ['expression', 'expressive', 'impress'],
  },
  {
    slug: 'expression',
    lemma: 'expression',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ɪkˈspreʃ.ən/' },
      us: { ipa: '/ɪkˈspreʃ.ən/' },
    },
    definition: {
      en: "The act of making feelings or thoughts known; a look on someone's face.",
      zh: '表达；表情；措辞',
    },
    examples: [
      {
        en: ['Freedom of expression is a fundamental human right.'],
        zh: ['言论自由是一项基本人权。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'press', type: 'root', rootSlug: 'press' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ex- ("out") + press ("push") + -ion (noun) → the act of pushing out.',
      zh: 'ex-（向外）+ press（压）+ -ion（名词后缀）→ 向外推出的行为，即表达。',
    },
    relatedWords: ['express', 'expressive', 'expressionless'],
  },
  {
    slug: 'depress',
    lemma: 'depress',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/dɪˈpres/' },
      us: { ipa: '/dɪˈpres/' },
    },
    definition: {
      en: 'To make someone feel sad; to push down or reduce.',
      zh: '使沮丧；压低；使萧条',
    },
    examples: [
      {
        en: ['The long winter months can depress even cheerful people.'],
        zh: ['漫长的冬季甚至会让开朗的人感到沮丧。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'press', type: 'root', rootSlug: 'press' },
    ],
    morphologyNote: {
      en: 'de- ("down") + press ("push") → to push down emotionally or physically.',
      zh: 'de-（向下）+ press（压）→ 向下压，即使沮丧、使萧条。',
    },
    relatedWords: ['depression', 'depressed', 'depressing'],
  },
  {
    slug: 'compress',
    lemma: 'compress',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: {
      uk: { ipa: '/kəmˈpres/' },
      us: { ipa: '/kəmˈpres/' },
    },
    definition: {
      en: 'To press or squeeze together; to make something smaller.',
      zh: '压缩；压紧',
    },
    examples: [
      {
        en: ['You can compress files to save disk space.'],
        zh: ['你可以压缩文件以节省磁盘空间。'],
      },
    ],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'press', type: 'root', rootSlug: 'press' },
    ],
    morphologyNote: {
      en: 'com- ("together") + press ("push") → to push together into a smaller space.',
      zh: 'com-（一起）+ press（压）→ 挤压到一起，即压缩。',
    },
    relatedWords: ['compression', 'decompress', 'express'],
  },
  {
    slug: 'oppress',
    lemma: 'oppress',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/əˈpres/' },
      us: { ipa: '/əˈpres/' },
    },
    definition: {
      en: 'To keep someone in hardship or subjection by the unjust use of authority.',
      zh: '压迫；压制',
    },
    examples: [
      {
        en: ['The regime oppressed its citizens for decades.'],
        zh: ['该政权压迫其公民长达数十年。'],
      },
    ],
    rootBreakdown: [
      { surface: 'op', type: 'prefix' },
      { surface: 'press', type: 'root', rootSlug: 'press' },
    ],
    morphologyNote: {
      en: 'op- ("against") + press ("push") → to push against someone, i.e. to tyrannize.',
      zh: 'op-（对着）+ press（压）→ 对人施压，即压迫。',
    },
    relatedWords: ['oppression', 'oppressive', 'oppressor'],
  },
  {
    slug: 'suppress',
    lemma: 'suppress',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/səˈpres/' },
      us: { ipa: '/səˈpres/' },
    },
    definition: {
      en: 'To forcibly put an end to; to prevent from being expressed.',
      zh: '镇压；压制；抑制',
    },
    examples: [
      {
        en: ['She tried to suppress a smile during the meeting.'],
        zh: ['她在会议中努力抑制住笑容。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sup', type: 'prefix' },
      { surface: 'press', type: 'root', rootSlug: 'press' },
    ],
    morphologyNote: {
      en: 'sup- ("under, down") + press ("push") → to push down and keep hidden.',
      zh: 'sup-（在下面）+ press（压）→ 向下压住，即镇压、抑制。',
    },
    relatedWords: ['suppression', 'repress', 'oppress'],
  },
  {
    slug: 'repress',
    lemma: 'repress',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/rɪˈpres/' },
      us: { ipa: '/rɪˈpres/' },
    },
    definition: {
      en: 'To restrain or hold back feelings or actions.',
      zh: '压抑；克制',
    },
    examples: [
      {
        en: ['He repressed his anger and spoke calmly.'],
        zh: ['他压抑住怒火，平静地说话。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'press', type: 'root', rootSlug: 'press' },
    ],
    morphologyNote: {
      en: 're- ("back") + press ("push") → to push back and restrain.',
      zh: 're-（向后）+ press（压）→ 向后压住，即压抑、克制。',
    },
    relatedWords: ['repression', 'suppress', 'depress'],
  },
  {
    slug: 'depression',
    lemma: 'depression',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/dɪˈpreʃ.ən/' },
      us: { ipa: '/dɪˈpreʃ.ən/' },
    },
    definition: {
      en: 'A mental condition marked by persistent sadness; an economic downturn.',
      zh: '抑郁症；萧条；凹陷',
    },
    examples: [
      {
        en: ['The Great Depression of the 1930s affected the entire world.'],
        zh: ['20世纪30年代的大萧条影响了全世界。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'press', type: 'root', rootSlug: 'press' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'de- ("down") + press ("push") + -ion (noun) → the state of being pushed down.',
      zh: 'de-（向下）+ press（压）+ -ion（名词后缀）→ 被压下的状态，即抑郁、萧条。',
    },
    relatedWords: ['depress', 'depressed', 'antidepressant'],
  },
];
