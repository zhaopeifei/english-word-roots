import type { WordEntry } from '@/types/content';

export const SON_WORDS: WordEntry[] = [
  {
    slug: 'sonic',
    lemma: 'sonic',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈsɒn.ɪk/' },
      us: { ipa: '/ˈsɑː.nɪk/' },
    },
    definition: {
      en: 'Relating to or using sound waves.',
      zh: '声音的；音速的',
    },
    examples: [
      {
        en: ['The jet broke the sonic barrier with a loud boom.'],
        zh: ['喷气式飞机以巨响突破了音障。'],
      },
    ],
    rootBreakdown: [
      { surface: 'son', type: 'root', rootSlug: 'son' },
      { surface: 'ic', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'son ("sound") + -ic (adj.) → relating to sound.',
      zh: 'son（声音）+ -ic（形容词后缀）→ 与声音有关的。',
    },
    relatedWords: ['supersonic', 'ultrasonic', 'sonar'],
  },
  {
    slug: 'sonar',
    lemma: 'sonar',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈsəʊ.nɑːr/' },
      us: { ipa: '/ˈsoʊ.nɑːr/' },
    },
    definition: {
      en: 'A system for detecting objects underwater using sound waves.',
      zh: '声呐',
    },
    examples: [
      {
        en: ['The submarine used sonar to navigate through dark waters.'],
        zh: ['潜艇使用声呐在黑暗的水域中导航。'],
      },
    ],
    rootBreakdown: [
      { surface: 'son', type: 'root', rootSlug: 'son' },
      { surface: 'ar', type: 'other' },
    ],
    morphologyNote: {
      en: 'Acronym from "SOund NAvigation and Ranging" — son ("sound") at its core.',
      zh: '缩写自 "SOund NAvigation and Ranging"（声音导航与测距）— 核心是 son（声音）。',
    },
    relatedWords: ['sonic', 'supersonic', 'resonate'],
  },
  {
    slug: 'supersonic',
    lemma: 'supersonic',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˌsuː.pəˈsɒn.ɪk/' },
      us: { ipa: '/ˌsuː.pɚˈsɑː.nɪk/' },
    },
    definition: {
      en: 'Exceeding the speed of sound.',
      zh: '超音速的',
    },
    examples: [
      {
        en: ['Concorde was the most famous supersonic passenger aircraft.'],
        zh: ['协和号是最著名的超音速客机。'],
      },
    ],
    rootBreakdown: [
      { surface: 'super', type: 'prefix' },
      { surface: 'son', type: 'root', rootSlug: 'son' },
      { surface: 'ic', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'super- ("above, beyond") + son ("sound") + -ic (adj.) → beyond the speed of sound.',
      zh: 'super-（超越）+ son（声音）+ -ic（形容词后缀）→ 超越声速的。',
    },
    relatedWords: ['sonic', 'ultrasonic', 'sonar'],
  },
  {
    slug: 'resonate',
    lemma: 'resonate',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˈrez.ə.neɪt/' },
      us: { ipa: '/ˈrez.ə.neɪt/' },
    },
    definition: {
      en: 'To produce or be filled with a deep, full sound; to evoke a strong response.',
      zh: '共鸣；回响；引起共鸣',
    },
    examples: [
      {
        en: ['Her message resonated with millions of people.'],
        zh: ['她的话引起了数百万人的共鸣。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'son', type: 'root', rootSlug: 'son' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("back, again") + son ("sound") + -ate (verb) → to sound back again, i.e. to echo.',
      zh: 're-（回来）+ son（声音）+ -ate（动词后缀）→ 声音回响，即共鸣。',
    },
    relatedWords: ['resonance', 'resonant', 'sonic'],
  },
  {
    slug: 'dissonance',
    lemma: 'dissonance',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈdɪs.ən.əns/' },
      us: { ipa: '/ˈdɪs.ən.əns/' },
    },
    definition: {
      en: 'A lack of harmony; a combination of sounds that clash.',
      zh: '不和谐；不协调',
    },
    examples: [
      {
        en: ['Cognitive dissonance occurs when beliefs conflict with actions.'],
        zh: ['当信念与行为冲突时就会产生认知失调。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dis', type: 'prefix' },
      { surface: 'son', type: 'root', rootSlug: 'son' },
      { surface: 'ance', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dis- ("apart") + son ("sound") + -ance (noun) → sounds that are apart, i.e. clashing.',
      zh: 'dis-（分离）+ son（声音）+ -ance（名词后缀）→ 声音不一致的状态，即不和谐。',
    },
    relatedWords: ['dissonant', 'consonance', 'resonance'],
  },
  {
    slug: 'consonant',
    lemma: 'consonant',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: {
      uk: { ipa: '/ˈkɒn.sə.nənt/' },
      us: { ipa: '/ˈkɑːn.sə.nənt/' },
    },
    definition: {
      en: 'A speech sound that is not a vowel; in agreement or harmony with.',
      zh: '辅音；一致的',
    },
    examples: [
      {
        en: ['The English alphabet has 21 consonants and 5 vowels.'],
        zh: ['英语字母表有21个辅音和5个元音。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'son', type: 'root', rootSlug: 'son' },
      { surface: 'ant', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'con- ("together") + son ("sound") + -ant → sounding together with vowels.',
      zh: 'con-（一起）+ son（声音）+ -ant → 与元音一起发声的。',
    },
    relatedWords: ['consonance', 'dissonance', 'resonant'],
  },
  {
    slug: 'sonorous',
    lemma: 'sonorous',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈsɒn.ər.əs/' },
      us: { ipa: '/ˈsɑː.nɚ.əs/' },
    },
    definition: {
      en: 'Imposingly deep and full in sound.',
      zh: '洪亮的；响亮的',
    },
    examples: [
      {
        en: ['The actor has a deep, sonorous voice.'],
        zh: ['这位演员有着低沉洪亮的嗓音。'],
      },
    ],
    rootBreakdown: [
      { surface: 'son', type: 'root', rootSlug: 'son' },
      { surface: 'or', type: 'connector' },
      { surface: 'ous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'son ("sound") + -orous (adj.) → full of sound.',
      zh: 'son（声音）+ -orous（形容词后缀）→ 充满声音的，即洪亮的。',
    },
    relatedWords: ['sonic', 'resonate', 'sonar'],
  },
  {
    slug: 'ultrasonic',
    lemma: 'ultrasonic',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˌʌl.trəˈsɒn.ɪk/' },
      us: { ipa: '/ˌʌl.trəˈsɑː.nɪk/' },
    },
    definition: {
      en: 'Of or involving sound waves with a frequency above the upper limit of human hearing.',
      zh: '超声波的',
    },
    examples: [
      {
        en: ['Ultrasonic sensors detect objects by emitting high-frequency sound.'],
        zh: ['超声波传感器通过发射高频声波来探测物体。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ultra', type: 'prefix' },
      { surface: 'son', type: 'root', rootSlug: 'son' },
      { surface: 'ic', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ultra- ("beyond") + son ("sound") + -ic (adj.) → beyond audible sound.',
      zh: 'ultra-（超越）+ son（声音）+ -ic（形容词后缀）→ 超越可听声音的。',
    },
    relatedWords: ['supersonic', 'sonic', 'sonar'],
  },
];
