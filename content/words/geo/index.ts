import type { WordEntry } from '@/types/content';

export const GEO_WORDS: WordEntry[] = [
  {
    slug: 'geology',
    lemma: 'geology',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/dʒiˈɒl.ə.dʒi/' },
      us: { ipa: '/dʒiˈɑː.lə.dʒi/' },
    },
    definition: {
      en: 'The science that deals with the earth’s physical structure and substance.',
      zh: '研究地球物质和结构的科学。',
    },
    examples: [
      {
        en: ['Geology reveals the forces shaping our planet.'],
        zh: ['地质学揭示了塑造地球的力量。'],
      },
      {
        en: ['Fieldwork in geology often requires weeks in remote deserts.'],
        zh: ['地质野外调查常常需要在偏远沙漠驻扎数周。'],
      },
      {
        en: ['Geology classes teach students to read rock layers like a timeline of Earth.'],
        zh: ['地质课教学生像读时间轴一样解读岩层。'],
      },
    ],
    rootBreakdown: [
      { surface: 'geo', type: 'root', rootSlug: 'geo' },
      { surface: 'logy', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'geo ("earth") + -logy ("study of") -> the study of Earth.',
      zh: 'geo（地球）+ -logy（学科）→ 研究地球的学科。',
    },
    relatedWords: ['biology', 'chronicle'],
  },
];
