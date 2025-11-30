import type { WordEntry } from '@/types/content';

export const CHRON_WORDS: WordEntry[] = [
  {
    slug: 'chronicle',
    lemma: 'chronicle',
    pronunciation: {
      uk: { ipa: '/ˈkrɒn.ɪ.kəl/' },
      us: { ipa: '/ˈkrɑː.nɪ.kəl/' },
    },
    definition: {
      en: 'A detailed and factual written account of past events.',
      zh: '对过去事件的详细记录。',
    },
    examples: [
      {
        en: ['The documentary is a chronicle of the expedition.'],
        zh: ['这部纪录片记录了探险的全过程。'],
      },
      {
        en: ["Medieval monks kept a chronicle of the kingdom's rulers."],
        zh: ['中世纪的修士记录了王国统治者的编年史。'],
      },
      {
        en: ['Each entry in the chronicle highlights a major turning point.'],
        zh: ['这部编年史中的每篇记录都强调了一个重大转折点。'],
      },
    ],
    rootBreakdown: [
      { surface: 'chron', type: 'root', rootSlug: 'chron' },
      { surface: 'icle', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'chron ("time") + -icle (noun suffix) -> a record anchored in time.',
      zh: 'chron（时间）+ -icle（名词后缀）→ 以时间为线索的记录。',
    },
    relatedWords: ['biology', 'geology'],
  },
];
