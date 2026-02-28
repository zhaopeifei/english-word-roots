import type { WordEntry } from '@/types/content';

export const NAT_WORDS: WordEntry[] = [
  {
    slug: 'nation',
    lemma: 'nation',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈneɪ.ʃən/' }, us: { ipa: '/ˈneɪ.ʃən/' } },
    definition: {
      en: 'A large body of people united by common descent, history, or language, inhabiting a particular territory.',
      zh: '国家；民族',
    },
    examples: [
      {
        en: ["The entire nation celebrated the team's victory."],
        zh: ['全国人民庆祝球队的胜利。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nat', type: 'root', rootSlug: 'nat' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nat ("born") + -ion (noun) → a group born together, a people sharing birth and origin.',
      zh: 'nat（出生）+ -ion（名词后缀）→ 同生同源的群体，即民族。',
    },
    relatedWords: ['national', 'nationality', 'international'],
  },
  {
    slug: 'national',
    lemma: 'national',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: { uk: { ipa: '/ˈnæʃ.ən.əl/' }, us: { ipa: '/ˈnæʃ.ən.əl/' } },
    definition: { en: 'Relating to a nation; common to the whole nation.', zh: '国家的；全国性的' },
    examples: [
      {
        en: ['The president gave a speech on national television.'],
        zh: ['总统在全国电视上发表了讲话。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nat', type: 'root', rootSlug: 'nat' },
      { surface: 'ion', type: 'other' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nat ("born") + -ional (adj.) → relating to a nation of shared birth.',
      zh: 'nat（出生）+ -ional（形容词后缀）→ 与同源国家相关的。',
    },
    relatedWords: ['nation', 'nationality', 'nationalism'],
  },
  {
    slug: 'international',
    lemma: 'international',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˌɪn.təˈnæʃ.ən.əl/' }, us: { ipa: '/ˌɪn.tɚˈnæʃ.ən.əl/' } },
    definition: { en: 'Existing or occurring between nations.', zh: '国际的' },
    examples: [
      {
        en: ['International trade has expanded rapidly in the last century.'],
        zh: ['国际贸易在上个世纪迅速扩展。'],
      },
    ],
    rootBreakdown: [
      { surface: 'inter', type: 'prefix' },
      { surface: 'nat', type: 'root', rootSlug: 'nat' },
      { surface: 'ion', type: 'other' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'inter- ("between") + nat ("born") + -ional (adj.) → between nations.',
      zh: 'inter-（在…之间）+ nat（出生）+ -ional（形容词后缀）→ 在各国之间的。',
    },
    relatedWords: ['nation', 'internationally'],
  },
  {
    slug: 'native',
    lemma: 'native',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: { uk: { ipa: '/ˈneɪ.tɪv/' }, us: { ipa: '/ˈneɪ.t̬ɪv/' } },
    definition: {
      en: "Associated with the place of one's birth; a person born in a specified place.",
      zh: '本地的；土著的；天生的',
    },
    examples: [
      { en: ['She is a native speaker of Mandarin Chinese.'], zh: ['她的母语是普通话。'] },
    ],
    rootBreakdown: [
      { surface: 'nat', type: 'root', rootSlug: 'nat' },
      { surface: 'ive', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nat ("born") + -ive (adj.) → relating to where one was born, indigenous.',
      zh: 'nat（出生）+ -ive（形容词后缀）→ 与出生地相关的，即本土的。',
    },
    relatedWords: ['nation', 'nature', 'innate'],
  },
  {
    slug: 'nature',
    lemma: 'nature',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈneɪ.tʃər/' }, us: { ipa: '/ˈneɪ.tʃɚ/' } },
    definition: {
      en: 'The physical world and everything in it; the inherent qualities of a person or thing.',
      zh: '自然；本性；天性',
    },
    examples: [
      {
        en: ['We spent the weekend hiking and enjoying nature.'],
        zh: ['我们周末去远足，享受大自然。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nat', type: 'root', rootSlug: 'nat' },
      { surface: 'ure', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nat ("born") + -ure (noun) → the quality of being born, the essential character.',
      zh: 'nat（出生）+ -ure（名词后缀）→ 与生俱来的品质，即自然或本性。',
    },
    relatedWords: ['natural', 'supernatural', 'native'],
  },
  {
    slug: 'natural',
    lemma: 'natural',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈnætʃ.ər.əl/' }, us: { ipa: '/ˈnætʃ.ɚ.əl/' } },
    definition: {
      en: 'Existing in or derived from nature; not made or caused by humans.',
      zh: '自然的；天然的；天生的',
    },
    examples: [
      {
        en: ['The product is made from all natural ingredients.'],
        zh: ['该产品由全天然成分制成。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nat', type: 'root', rootSlug: 'nat' },
      { surface: 'ur', type: 'other' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nat ("born") + -ural (adj.) → of or according to birth, hence of nature.',
      zh: 'nat（出生）+ -ural（形容词后缀）→ 依据天生的，即自然的。',
    },
    relatedWords: ['nature', 'naturally', 'unnatural'],
  },
  {
    slug: 'supernatural',
    lemma: 'supernatural',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˌsuː.pəˈnætʃ.ər.əl/' }, us: { ipa: '/ˌsuː.pɚˈnætʃ.ɚ.əl/' } },
    definition: {
      en: 'Attributed to a force beyond scientific understanding or the laws of nature.',
      zh: '超自然的；神奇的',
    },
    examples: [
      {
        en: ['Many ancient cultures believed in supernatural powers.'],
        zh: ['许多古代文化信仰超自然力量。'],
      },
    ],
    rootBreakdown: [
      { surface: 'super', type: 'prefix' },
      { surface: 'nat', type: 'root', rootSlug: 'nat' },
      { surface: 'ur', type: 'other' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'super- ("above") + nat ("born, nature") + -ural (adj.) → above nature, beyond the natural.',
      zh: 'super-（超越）+ nat（自然）+ -ural（形容词后缀）→ 超越自然的。',
    },
    relatedWords: ['natural', 'nature'],
  },
  {
    slug: 'innate',
    lemma: 'innate',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ɪˈneɪt/' }, us: { ipa: '/ɪˈneɪt/' } },
    definition: { en: 'Inborn; natural rather than acquired.', zh: '天生的；固有的' },
    examples: [
      {
        en: ['She has an innate talent for music that was evident from early childhood.'],
        zh: ['她有与生俱来的音乐天赋，从幼年时期就很明显。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'nat', type: 'root', rootSlug: 'nat' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("in") + nat ("born") + -e → born in, hence inborn.',
      zh: 'in-（在内）+ nat（出生）+ -e → 生来就有的，即天生的。',
    },
    relatedWords: ['innately', 'native', 'nature'],
  },
  {
    slug: 'prenatal',
    lemma: 'prenatal',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˌpriːˈneɪ.təl/' }, us: { ipa: '/ˌpriːˈneɪ.t̬əl/' } },
    definition: { en: 'Before birth; relating to pregnancy.', zh: '产前的；出生前的' },
    examples: [
      {
        en: ['Prenatal care is essential for the health of both mother and baby.'],
        zh: ['产前护理对母亲和婴儿的健康至关重要。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pre', type: 'prefix' },
      { surface: 'nat', type: 'root', rootSlug: 'nat' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pre- ("before") + nat ("born") + -al (adj.) → before birth.',
      zh: 'pre-（在…之前）+ nat（出生）+ -al（形容词后缀）→ 出生之前的。',
    },
    relatedWords: ['postnatal', 'neonatal', 'native'],
  },
  {
    slug: 'naive',
    lemma: 'naive',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/naɪˈiːv/' }, us: { ipa: '/naɪˈiːv/' } },
    definition: {
      en: 'Showing a lack of experience or wisdom; innocent and unsophisticated.',
      zh: '天真的；幼稚的',
    },
    examples: [
      {
        en: ['It would be naive to think the problem will solve itself.'],
        zh: ['认为问题会自行解决未免太天真了。'],
      },
    ],
    rootBreakdown: [
      { surface: 'na', type: 'root', rootSlug: 'nat' },
      { surface: 'ive', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'na (variant of nat, "born") + -ive (adj.) → as one was born, hence unsophisticated.',
      zh: 'na（nat 的变体，出生）+ -ive（形容词后缀）→ 如初生般的，即天真的。',
    },
    relatedWords: ['native', 'natural'],
  },
  {
    slug: 'renaissance',
    lemma: 'renaissance',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/rɪˈneɪ.səns/' }, us: { ipa: '/ˈren.ə.sɑːns/' } },
    definition: {
      en: 'A revival or renewed interest in something; the period of European cultural rebirth from the 14th to 17th century.',
      zh: '复兴；文艺复兴',
    },
    examples: [
      {
        en: ['The city is experiencing a cultural renaissance with new galleries and theaters.'],
        zh: ['这座城市正经历文化复兴，新的画廊和剧院纷纷涌现。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'naiss', type: 'root', rootSlug: 'nat' },
      { surface: 'ance', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("again") + naiss (variant of nat, "born") + -ance (noun) → rebirth, a new beginning.',
      zh: 're-（再次）+ naiss（nat 的变体，出生）+ -ance（名词后缀）→ 再次诞生，即复兴。',
    },
    relatedWords: ['native', 'nation', 'nature'],
  },
  {
    slug: 'nationalize',
    lemma: 'nationalize',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ˈnæʃ.ən.əl.aɪz/' }, us: { ipa: '/ˈnæʃ.ən.əl.aɪz/' } },
    definition: {
      en: 'To transfer from private to state ownership or control.',
      zh: '国有化；收归国有',
    },
    examples: [
      {
        en: ['The government decided to nationalize the oil industry.'],
        zh: ['政府决定将石油行业国有化。'],
      },
    ],
    rootBreakdown: [
      { surface: 'nat', type: 'root', rootSlug: 'nat' },
      { surface: 'ion', type: 'other' },
      { surface: 'al', type: 'other' },
      { surface: 'ize', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'nation + -al + -ize (verb) → to make national, to bring under state control.',
      zh: 'nation（国家）+ -al + -ize（动词后缀）→ 使成为国家所有。',
    },
    relatedWords: ['nation', 'national', 'denationalize'],
  },
];
