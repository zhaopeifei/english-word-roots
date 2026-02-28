import type { WordEntry } from '@/types/content';

export const MEDI_WORDS: WordEntry[] = [
  {
    slug: 'medicine',
    lemma: 'medicine',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈmed.ɪ.sən/' }, us: { ipa: '/ˈmed.ə.sən/' } },
    definition: {
      en: 'The science of diagnosing and treating illness; a substance used to treat disease.',
      zh: '医学；药物',
    },
    examples: [
      {
        en: ['Modern medicine has dramatically increased life expectancy.'],
        zh: ['现代医学大大提高了预期寿命。'],
      },
    ],
    rootBreakdown: [
      { surface: 'medi', type: 'root', rootSlug: 'medi' },
      { surface: 'c', type: 'other' },
      { surface: 'ine', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'medi ("heal, middle") + -cine (noun) → the art of healing.',
      zh: 'medi（治疗）+ -cine（名词后缀）→ 治疗的技艺。',
    },
    relatedWords: ['medical', 'medication', 'remedy'],
  },
  {
    slug: 'medical',
    lemma: 'medical',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈmed.ɪ.kəl/' }, us: { ipa: '/ˈmed.ɪ.kəl/' } },
    definition: {
      en: 'Relating to the science of medicine or treatment of illness.',
      zh: '医学的；医疗的',
    },
    examples: [
      {
        en: ['She received medical treatment at the emergency room.'],
        zh: ['她在急诊室接受了医疗救治。'],
      },
    ],
    rootBreakdown: [
      { surface: 'medi', type: 'root', rootSlug: 'medi' },
      { surface: 'c', type: 'other' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'medi ("heal") + -cal (adj.) → relating to healing.',
      zh: 'medi（治疗）+ -cal（形容词后缀）→ 与治疗相关的。',
    },
    relatedWords: ['medicine', 'medication', 'medically'],
  },
  {
    slug: 'medium',
    lemma: 'medium',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: { uk: { ipa: '/ˈmiː.di.əm/' }, us: { ipa: '/ˈmiː.di.əm/' } },
    definition: { en: 'A middle state or condition; of average size.', zh: '中间的；媒介；中等的' },
    examples: [
      {
        en: ['Choose a medium-sized shirt if you are unsure of your fit.'],
        zh: ['如果不确定尺码，就选中号。'],
      },
    ],
    rootBreakdown: [
      { surface: 'medi', type: 'root', rootSlug: 'medi' },
      { surface: 'um', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'medi ("middle") + -um (noun) → the middle point, an intermediate.',
      zh: 'medi（中间）+ -um（名词后缀）→ 中间点，即中等。',
    },
    relatedWords: ['media', 'mediate', 'mediocre'],
  },
  {
    slug: 'media',
    lemma: 'media',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈmiː.di.ə/' }, us: { ipa: '/ˈmiː.di.ə/' } },
    definition: {
      en: 'The main means of mass communication such as television, radio, and newspapers.',
      zh: '媒体；传媒',
    },
    examples: [
      {
        en: ['Social media has transformed how people communicate.'],
        zh: ['社交媒体改变了人们的沟通方式。'],
      },
    ],
    rootBreakdown: [
      { surface: 'medi', type: 'root', rootSlug: 'medi' },
      { surface: 'a', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'medi ("middle") + -a (plural) → things in the middle, channels between sender and receiver.',
      zh: 'medi（中间）+ -a（复数后缀）→ 居中之物，即传播媒介。',
    },
    relatedWords: ['medium', 'multimedia'],
  },
  {
    slug: 'immediate',
    lemma: 'immediate',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ɪˈmiː.di.ət/' }, us: { ipa: '/ɪˈmiː.di.ət/' } },
    definition: {
      en: 'Occurring without delay; nearest in time or relationship.',
      zh: '立即的；直接的；最接近的',
    },
    examples: [{ en: ['The situation requires immediate attention.'], zh: ['情况需要立即处理。'] }],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'medi', type: 'root', rootSlug: 'medi' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- ("not") + medi ("middle") + -ate (adj.) → with nothing in the middle, hence direct.',
      zh: 'im-（没有）+ medi（中间）+ -ate（形容词后缀）→ 中间没有障碍的，即立即的。',
    },
    relatedWords: ['immediately', 'immediacy'],
  },
  {
    slug: 'meditate',
    lemma: 'meditate',
    partOfSpeech: ['vt.', 'vi.'],
    pronunciation: { uk: { ipa: '/ˈmed.ɪ.teɪt/' }, us: { ipa: '/ˈmed.ɪ.teɪt/' } },
    definition: {
      en: 'To think deeply or focus the mind for relaxation or spiritual purposes.',
      zh: '冥想；沉思',
    },
    examples: [
      { en: ['She meditates for twenty minutes every morning.'], zh: ['她每天早上冥想二十分钟。'] },
    ],
    rootBreakdown: [
      { surface: 'medi', type: 'root', rootSlug: 'medi' },
      { surface: 'tate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'medi ("middle, consider") + -tate (verb) → to go to the center of thought.',
      zh: 'medi（中间、思考）+ -tate（动词后缀）→ 深入思想的中心，即冥想。',
    },
    relatedWords: ['meditation', 'meditative'],
  },
  {
    slug: 'medieval',
    lemma: 'medieval',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˌmed.iˈiː.vəl/' }, us: { ipa: '/ˌmed.iˈiː.vəl/' } },
    definition: {
      en: 'Relating to the Middle Ages, roughly the 5th to 15th century.',
      zh: '中世纪的',
    },
    examples: [
      {
        en: ['The medieval castle has been preserved as a tourist attraction.'],
        zh: ['这座中世纪城堡被保留为旅游景点。'],
      },
    ],
    rootBreakdown: [
      { surface: 'medi', type: 'root', rootSlug: 'medi' },
      { surface: 'ev', type: 'root' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'medi ("middle") + ev ("age") + -al (adj.) → of the middle age.',
      zh: 'medi（中间）+ ev（时代）+ -al（形容词后缀）→ 中间时代的。',
    },
    relatedWords: ['medium', 'intermediate'],
  },
  {
    slug: 'intermediate',
    lemma: 'intermediate',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: { uk: { ipa: '/ˌɪn.təˈmiː.di.ət/' }, us: { ipa: '/ˌɪn.tɚˈmiː.di.ət/' } },
    definition: { en: 'Coming between two things in time, place, or level.', zh: '中间的；中级的' },
    examples: [
      {
        en: ['This course is designed for intermediate-level students.'],
        zh: ['这门课程是为中级水平的学生设计的。'],
      },
    ],
    rootBreakdown: [
      { surface: 'inter', type: 'prefix' },
      { surface: 'medi', type: 'root', rootSlug: 'medi' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'inter- ("between") + medi ("middle") + -ate (adj.) → in the middle between two things.',
      zh: 'inter-（在…之间）+ medi（中间）+ -ate（形容词后缀）→ 在两者之间的。',
    },
    relatedWords: ['medium', 'mediate'],
  },
  {
    slug: 'mediocre',
    lemma: 'mediocre',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˌmiː.diˈəʊ.kər/' }, us: { ipa: '/ˌmiː.diˈoʊ.kɚ/' } },
    definition: { en: 'Of only moderate quality; not very good.', zh: '平庸的；中等的；普通的' },
    examples: [{ en: ['The food was mediocre at best.'], zh: ['食物充其量只是平庸。'] }],
    rootBreakdown: [
      { surface: 'medi', type: 'root', rootSlug: 'medi' },
      { surface: 'ocr', type: 'other' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'medi ("middle") + ocris ("mountain") → halfway up the mountain, hence middling.',
      zh: 'medi（中间）+ ocris（山峰）→ 在山的半腰，即平庸的。',
    },
    relatedWords: ['mediocrity', 'medium'],
  },
  {
    slug: 'remedy',
    lemma: 'remedy',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: { uk: { ipa: '/ˈrem.ə.di/' }, us: { ipa: '/ˈrem.ə.di/' } },
    definition: {
      en: 'A medicine or treatment for a disease; a means of correcting something.',
      zh: '疗法；药物；补救措施',
    },
    examples: [
      {
        en: ['Honey and lemon tea is a popular remedy for sore throats.'],
        zh: ['蜂蜜柠檬茶是治疗喉咙痛的常见偏方。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'med', type: 'root', rootSlug: 'medi' },
      { surface: 'y', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("again") + med ("heal") + -y (noun) → to heal again, a cure.',
      zh: 're-（再次）+ med（治疗）+ -y（名词后缀）→ 再次治疗，即疗法。',
    },
    relatedWords: ['medicine', 'medical'],
  },
  {
    slug: 'mediator',
    lemma: 'mediator',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈmiː.di.eɪ.tər/' }, us: { ipa: '/ˈmiː.di.eɪ.tɚ/' } },
    definition: {
      en: 'A person who attempts to make people involved in a conflict reach an agreement.',
      zh: '调停者；中介人',
    },
    examples: [
      {
        en: ['The United Nations served as a mediator in the peace talks.'],
        zh: ['联合国在和平谈判中充当调停者。'],
      },
    ],
    rootBreakdown: [
      { surface: 'medi', type: 'root', rootSlug: 'medi' },
      { surface: 'at', type: 'other' },
      { surface: 'or', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'medi ("middle") + -ator (agent noun) → one who stands in the middle, a go-between.',
      zh: 'medi（中间）+ -ator（施动者后缀）→ 站在中间的人，即调停者。',
    },
    relatedWords: ['mediation', 'mediate', 'medium'],
  },
];
