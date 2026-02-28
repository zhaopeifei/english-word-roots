import type { WordEntry } from '@/types/content';

export const DORM_WORDS: WordEntry[] = [
  {
    slug: 'dorm',
    lemma: 'dorm',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/dɔːm/' }, us: { ipa: '/dɔːrm/' } },
    definition: {
      en: 'A residential building at a college or university; short for dormitory.',
      zh: '宿舍',
    },
    examples: [
      {
        en: ['Most freshmen live in a dorm during their first year.'],
        zh: ['大多数新生在第一年住宿舍。'],
      },
    ],
    rootBreakdown: [{ surface: 'dorm', type: 'root', rootSlug: 'dorm' }],
    morphologyNote: {
      en: 'From Latin dormire ("to sleep"). A place for sleeping.',
      zh: '源自拉丁语 dormire（睡觉）。睡觉的地方。',
    },
    relatedWords: ['dormitory', 'dormant', 'dormancy'],
  },
  {
    slug: 'dormitory',
    lemma: 'dormitory',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈdɔː.mɪ.tər.i/' }, us: { ipa: '/ˈdɔːr.mɪ.tɔːr.i/' } },
    definition: {
      en: 'A large sleeping room with many beds; a residential hall.',
      zh: '宿舍；寝室',
    },
    examples: [
      {
        en: ['The university built a new dormitory to accommodate more students.'],
        zh: ['大学新建了一栋宿舍楼以容纳更多学生。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dorm', type: 'root', rootSlug: 'dorm' },
      { surface: 'itory', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dorm ("sleep") + -itory (place suffix) → a place for sleeping.',
      zh: 'dorm（睡觉）+ -itory（场所后缀）→ 睡觉的场所，即宿舍。',
    },
    relatedWords: ['dorm', 'dormant', 'dormancy'],
  },
  {
    slug: 'dormant',
    lemma: 'dormant',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈdɔː.mənt/' }, us: { ipa: '/ˈdɔːr.mənt/' } },
    definition: {
      en: 'In a state of rest or inactivity; temporarily inactive.',
      zh: '休眠的；蛰伏的；静止的',
    },
    examples: [
      { en: ['The volcano has been dormant for centuries.'], zh: ['这座火山已经休眠了几个世纪。'] },
    ],
    rootBreakdown: [
      { surface: 'dorm', type: 'root', rootSlug: 'dorm' },
      { surface: 'ant', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dorm ("sleep") + -ant (adjective) → sleeping, inactive.',
      zh: 'dorm（睡觉）+ -ant（形容词后缀）→ 正在沉睡的，即休眠的。',
    },
    relatedWords: ['dormancy', 'dormitory', 'dorm'],
  },
  {
    slug: 'dormancy',
    lemma: 'dormancy',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈdɔː.mən.si/' }, us: { ipa: '/ˈdɔːr.mən.si/' } },
    definition: {
      en: 'The state of being dormant; a period of inactivity.',
      zh: '休眠状态；蛰伏期',
    },
    examples: [
      {
        en: ['Many plants enter dormancy during the winter months.'],
        zh: ['许多植物在冬季进入休眠状态。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dorm', type: 'root', rootSlug: 'dorm' },
      { surface: 'ancy', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dorm ("sleep") + -ancy (noun suffix for state) → the state of sleeping, inactivity.',
      zh: 'dorm（睡觉）+ -ancy（状态名词后缀）→ 沉睡的状态，即休眠。',
    },
    relatedWords: ['dormant', 'dormitory', 'dorm'],
  },
];
