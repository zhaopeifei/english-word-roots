import type { WordEntry } from '@/types/content';

export const HOSPIT_WORDS: WordEntry[] = [
  {
    slug: 'hospital',
    lemma: 'hospital',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈhɒs.pɪ.təl/' }, us: { ipa: '/ˈhɑː.spɪ.t̬əl/' } },
    definition: {
      en: 'An institution providing medical and surgical treatment and nursing care.',
      zh: '医院',
    },
    examples: [
      {
        en: ['He was rushed to the hospital after the accident.'],
        zh: ['事故发生后他被紧急送往医院。'],
      },
    ],
    rootBreakdown: [
      { surface: 'hospit', type: 'root', rootSlug: 'hospit' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'hospit ("host, guest, stranger") + -al (noun/adjective) → a place for receiving guests/strangers in need.',
      zh: 'hospit（主人、客人、陌生人）+ -al（名词/形容词后缀）→ 接待有需要的客人/陌生人的地方。',
    },
    relatedWords: ['hospitalize', 'hospitality', 'host'],
  },
  {
    slug: 'hospitalize',
    lemma: 'hospitalize',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ˈhɒs.pɪ.təl.aɪz/' }, us: { ipa: '/ˈhɑː.spɪ.t̬əl.aɪz/' } },
    definition: { en: 'To admit someone to a hospital for treatment.', zh: '送……住院' },
    examples: [
      { en: ['The patient was hospitalized for observation.'], zh: ['患者住院接受观察。'] },
    ],
    rootBreakdown: [
      { surface: 'hospit', type: 'root', rootSlug: 'hospit' },
      { surface: 'al', type: 'suffix' },
      { surface: 'ize', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'hospital + -ize (verb, "to make/place in") → to place in a hospital.',
      zh: 'hospital（医院）+ -ize（动词后缀，使）→ 使进入医院，即住院。',
    },
    relatedWords: ['hospital', 'hospitality', 'host'],
  },
  {
    slug: 'hospitality',
    lemma: 'hospitality',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌhɒs.pɪˈtæl.ɪ.ti/' }, us: { ipa: '/ˌhɑː.spɪˈtæl.ə.t̬i/' } },
    definition: {
      en: 'The friendly and generous reception and entertainment of guests.',
      zh: '好客；款待；殷勤',
    },
    examples: [
      {
        en: ['We were overwhelmed by the hospitality of the local people.'],
        zh: ['当地人的热情好客让我们感动不已。'],
      },
    ],
    rootBreakdown: [
      { surface: 'hospit', type: 'root', rootSlug: 'hospit' },
      { surface: 'al', type: 'connector' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'hospit ("host, guest") + -al- + -ity (noun) → the quality of being a good host.',
      zh: 'hospit（主人、客人）+ -al- + -ity（名词后缀）→ 做好主人的品质，即好客。',
    },
    relatedWords: ['hospital', 'host', 'hostile'],
  },
  {
    slug: 'hotel',
    lemma: 'hotel',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/həʊˈtel/' }, us: { ipa: '/hoʊˈtel/' } },
    definition: {
      en: 'An establishment providing accommodations, meals, and other services for travelers.',
      zh: '酒店；旅馆',
    },
    examples: [
      {
        en: ['We booked a hotel near the conference center.'],
        zh: ['我们预订了会议中心附近的一家酒店。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ho', type: 'root', rootSlug: 'hospit' },
      { surface: 'tel', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From hospit ("host, guest") via French hotel → a place for hosting travelers.',
      zh: '源自 hospit（主人、客人），经法语 hotel → 招待旅客的场所。',
    },
    relatedWords: ['hostel', 'hospital', 'host'],
  },
  {
    slug: 'host',
    lemma: 'host',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: { uk: { ipa: '/həʊst/' }, us: { ipa: '/hoʊst/' } },
    definition: {
      en: 'A person who receives or entertains guests; to act as host.',
      zh: '主人；东道主；主持',
    },
    examples: [
      { en: ['She hosted a dinner party for her colleagues.'], zh: ['她为同事们举办了一场晚宴。'] },
    ],
    rootBreakdown: [{ surface: 'host', type: 'root', rootSlug: 'hospit' }],
    morphologyNote: {
      en: 'From hospit ("host, guest-receiver") → one who receives guests.',
      zh: '源自 hospit（主人、接待客人者）→ 接待客人的人。',
    },
    relatedWords: ['hostess', 'hospital', 'hospitality'],
  },
  {
    slug: 'hostage',
    lemma: 'hostage',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈhɒs.tɪdʒ/' }, us: { ipa: '/ˈhɑː.stɪdʒ/' } },
    definition: {
      en: 'A person seized and held as security for the fulfillment of a condition.',
      zh: '人质',
    },
    examples: [
      {
        en: ['The terrorists held several hostages in the building.'],
        zh: ['恐怖分子在大楼里扣押了几名人质。'],
      },
    ],
    rootBreakdown: [
      { surface: 'host', type: 'root', rootSlug: 'hospit' },
      { surface: 'age', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'host (from hospit, "guest/host") + -age (noun suffix) → originally a guest given as security, a hostage.',
      zh: 'host（源自 hospit，客人/主人）+ -age（名词后缀）→ 原指作为担保的客人，即人质。',
    },
    relatedWords: ['host', 'hostile', 'hospital'],
  },
  {
    slug: 'hostile',
    lemma: 'hostile',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈhɒs.taɪl/' }, us: { ipa: '/ˈhɑː.stəl/' } },
    definition: {
      en: 'Unfriendly and antagonistic; of or belonging to an enemy.',
      zh: '敌对的；不友好的',
    },
    examples: [
      { en: ['The hostile crowd booed the visiting team.'], zh: ['充满敌意的观众嘘了客队。'] },
    ],
    rootBreakdown: [
      { surface: 'host', type: 'root', rootSlug: 'hospit' },
      { surface: 'ile', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'host (from hospit, "stranger") + -ile (adjective) → like a stranger/enemy, unfriendly.',
      zh: 'host（源自 hospit，陌生人）+ -ile（形容词后缀）→ 像陌生人/敌人一样的，即敌对的。',
    },
    relatedWords: ['hostility', 'host', 'hospital'],
  },
  {
    slug: 'hostility',
    lemma: 'hostility',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/hɒˈstɪl.ɪ.ti/' }, us: { ipa: '/hɑːˈstɪl.ə.t̬i/' } },
    definition: { en: 'Hostile behavior or attitude; acts of warfare.', zh: '敌意；敌对' },
    examples: [
      {
        en: ['There was open hostility between the two rival factions.'],
        zh: ['两个对立派系之间存在公开的敌意。'],
      },
    ],
    rootBreakdown: [
      { surface: 'host', type: 'root', rootSlug: 'hospit' },
      { surface: 'il', type: 'connector' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'hostile + -ity (noun suffix) → the state of being hostile.',
      zh: 'hostile（敌对的）+ -ity（名词后缀）→ 敌对的状态。',
    },
    relatedWords: ['hostile', 'host', 'hospitality'],
  },
];
