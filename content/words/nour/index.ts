import type { WordEntry } from '@/types/content';

export const NOUR_WORDS: WordEntry[] = [
  {
    slug: 'nurse',
    lemma: 'nurse',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: { uk: { ipa: '/nɜːs/' }, us: { ipa: '/nɝːs/' } },
    definition: {
      en: 'A person trained to care for the sick; to care for or tend to.',
      zh: '护士；看护；护理',
    },
    examples: [
      {
        en: ["The nurse checked the patient's vital signs every hour."],
        zh: ['护士每小时检查病人的生命体征。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nurs', type: 'root', rootSlug: 'nour' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nurs (variant of nour, "nourish, suckle") + -e → one who nourishes, a caretaker.',
      zh: 'nurs（nour 的变体，滋养）+ -e → 滋养者，即护士。',
    },
    relatedWords: ['nursing', 'nursery', 'nurture'],
  },
  {
    slug: 'nursery',
    lemma: 'nursery',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈnɜː.sər.i/' }, us: { ipa: '/ˈnɝː.sɚ.i/' } },
    definition: {
      en: 'A room or place for the care of young children; a place where plants are grown.',
      zh: '托儿所；苗圃',
    },
    examples: [
      {
        en: ['She drops the children off at the nursery before going to work.'],
        zh: ['她上班前把孩子们送到托儿所。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nurs', type: 'root', rootSlug: 'nour' },
      { surface: 'ery', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nurs ("nourish") + -ery (place) → a place of nourishing, where young ones are cared for.',
      zh: 'nurs（滋养）+ -ery（场所后缀）→ 滋养的地方，即托儿所。',
    },
    relatedWords: ['nurse', 'nurture'],
  },
  {
    slug: 'nurture',
    lemma: 'nurture',
    partOfSpeech: ['vt.', 'n.'],
    pronunciation: { uk: { ipa: '/ˈnɜː.tʃər/' }, us: { ipa: '/ˈnɝː.tʃɚ/' } },
    definition: {
      en: 'To care for and encourage growth; the process of raising and caring for.',
      zh: '养育；培养；滋养',
    },
    examples: [
      {
        en: ['Parents nurture their children with love and patience.'],
        zh: ['父母用爱和耐心养育孩子。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nurt', type: 'root', rootSlug: 'nour' },
      { surface: 'ure', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nurt (variant of nour, "nourish") + -ure (noun/verb) → the act of nourishing, to bring up.',
      zh: 'nurt（nour 的变体，滋养）+ -ure（后缀）→ 滋养的行为，即养育。',
    },
    relatedWords: ['nurse', 'nourish', 'nutrient'],
  },
  {
    slug: 'nutrient',
    lemma: 'nutrient',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: { uk: { ipa: '/ˈnjuː.tri.ənt/' }, us: { ipa: '/ˈnuː.tri.ənt/' } },
    definition: {
      en: 'A substance that provides essential nourishment for growth and life.',
      zh: '营养素；营养物质',
    },
    examples: [
      {
        en: ['Fruits and vegetables are rich in essential nutrients.'],
        zh: ['水果和蔬菜富含必需的营养素。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nutr', type: 'root', rootSlug: 'nour' },
      { surface: 'ient', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nutr (variant of nour, "nourish") + -ient (adj./noun) → that which nourishes.',
      zh: 'nutr（nour 的变体，滋养）+ -ient（后缀）→ 滋养的东西，即营养素。',
    },
    relatedWords: ['nutrition', 'nutritious', 'nourish'],
  },
  {
    slug: 'nutrition',
    lemma: 'nutrition',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/njuːˈtrɪʃ.ən/' }, us: { ipa: '/nuːˈtrɪʃ.ən/' } },
    definition: {
      en: 'The process of providing food necessary for health and growth.',
      zh: '营养；营养学',
    },
    examples: [
      {
        en: ['Good nutrition is essential for a healthy lifestyle.'],
        zh: ['良好的营养对健康的生活方式至关重要。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nutr', type: 'root', rootSlug: 'nour' },
      { surface: 'ition', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nutr ("nourish") + -ition (noun) → the act of nourishing.',
      zh: 'nutr（滋养）+ -ition（名词后缀）→ 滋养的行为，即营养。',
    },
    relatedWords: ['nutrient', 'nutritious', 'nutritional'],
  },
  {
    slug: 'nutritious',
    lemma: 'nutritious',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/njuːˈtrɪʃ.əs/' }, us: { ipa: '/nuːˈtrɪʃ.əs/' } },
    definition: {
      en: 'Full of nutrients; nourishing and beneficial to health.',
      zh: '有营养的；滋养的',
    },
    examples: [
      {
        en: ['A nutritious breakfast helps children concentrate in school.'],
        zh: ['营养丰富的早餐有助于孩子们在学校集中注意力。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nutr', type: 'root', rootSlug: 'nour' },
      { surface: 'itious', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nutr ("nourish") + -itious (adj.) → full of nourishment.',
      zh: 'nutr（滋养）+ -itious（形容词后缀）→ 充满营养的。',
    },
    relatedWords: ['nutrition', 'nutrient'],
  },
  {
    slug: 'nourish',
    lemma: 'nourish',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ˈnʌr.ɪʃ/' }, us: { ipa: '/ˈnɝː.ɪʃ/' } },
    definition: {
      en: 'To provide with food or other substances necessary for growth and health.',
      zh: '滋养；养育；怀有',
    },
    examples: [
      {
        en: ['The rich soil nourishes the crops throughout the growing season.'],
        zh: ['肥沃的土壤在整个生长季节滋养着庄稼。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nour', type: 'root', rootSlug: 'nour' },
      { surface: 'ish', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nour ("nourish, feed") + -ish (verb) → to feed, to sustain with food.',
      zh: 'nour（滋养）+ -ish（动词后缀）→ 喂养，即滋养。',
    },
    relatedWords: ['nourishment', 'nourishing'],
  },
  {
    slug: 'nourishment',
    lemma: 'nourishment',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈnʌr.ɪʃ.mənt/' }, us: { ipa: '/ˈnɝː.ɪʃ.mənt/' } },
    definition: {
      en: 'Food or substances needed for growth, health, and good condition.',
      zh: '营养品；食物；滋养',
    },
    examples: [
      {
        en: ['The body needs proper nourishment to recover from illness.'],
        zh: ['身体需要适当的营养来从疾病中恢复。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nour', type: 'root', rootSlug: 'nour' },
      { surface: 'ish', type: 'other' },
      { surface: 'ment', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nour ("feed") + -ishment (noun) → that which feeds, sustenance.',
      zh: 'nour（喂养）+ -ishment（名词后缀）→ 喂养的东西，即营养。',
    },
    relatedWords: ['nourish', 'nutrient'],
  },
  {
    slug: 'malnutrition',
    lemma: 'malnutrition',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌmæl.njuːˈtrɪʃ.ən/' }, us: { ipa: '/ˌmæl.nuːˈtrɪʃ.ən/' } },
    definition: {
      en: 'Lack of proper nutrition caused by not eating enough or not eating the right foods.',
      zh: '营养不良',
    },
    examples: [
      {
        en: ['Malnutrition remains a serious problem in many developing countries.'],
        zh: ['营养不良在许多发展中国家仍然是一个严重问题。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mal', type: 'prefix' },
      { surface: 'nutr', type: 'root', rootSlug: 'nour' },
      { surface: 'ition', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mal- ("bad") + nutr ("nourish") + -ition (noun) → bad nourishment, insufficient nutrition.',
      zh: 'mal-（坏的）+ nutr（滋养）+ -ition（名词后缀）→ 不良的滋养，即营养不良。',
    },
    relatedWords: ['nutrition', 'malnourished'],
  },
  {
    slug: 'nutritionist',
    lemma: 'nutritionist',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/njuːˈtrɪʃ.ən.ɪst/' }, us: { ipa: '/nuːˈtrɪʃ.ən.ɪst/' } },
    definition: { en: 'An expert or specialist in the study of nutrition.', zh: '营养学家' },
    examples: [
      {
        en: ['The nutritionist recommended a balanced diet with more vegetables.'],
        zh: ['营养学家建议均衡饮食，多吃蔬菜。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nutr', type: 'root', rootSlug: 'nour' },
      { surface: 'ition', type: 'other' },
      { surface: 'ist', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nutr ("nourish") + -ition + -ist (specialist) → a specialist in nourishment.',
      zh: 'nutr（滋养）+ -ition + -ist（专家后缀）→ 营养方面的专家。',
    },
    relatedWords: ['nutrition', 'nutritious'],
  },
];
