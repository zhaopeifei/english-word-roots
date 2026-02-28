import type { WordEntry } from '@/types/content';

export const GEN_WORDS: WordEntry[] = [
  {
    slug: 'gene',
    lemma: 'gene',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/dʒiːn/' }, us: { ipa: '/dʒiːn/' } },
    definition: {
      en: 'A unit of heredity that determines a particular characteristic of an organism.',
      zh: '基因；遗传因子',
    },
    examples: [
      {
        en: ['Scientists identified the gene responsible for the disease.'],
        zh: ['科学家识别了导致这种疾病的基因。'],
      },
    ],
    rootBreakdown: [
      { surface: 'gen', type: 'root', rootSlug: 'gen' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'gen ("birth, origin, produce") + -e → a unit of biological origin.',
      zh: 'gen（出生、起源、产生）+ -e → 生物起源的单位，即基因。',
    },
    relatedWords: ['genetic', 'genetics', 'generate'],
  },
  {
    slug: 'genetic',
    lemma: 'genetic',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/dʒɪˈnet.ɪk/' }, us: { ipa: '/dʒɪˈnet.ɪk/' } },
    definition: { en: 'Relating to genes or heredity.', zh: '遗传的；基因的' },
    examples: [
      {
        en: ['Genetic testing can reveal a predisposition to certain diseases.'],
        zh: ['基因检测可以揭示对某些疾病的易感性。'],
      },
    ],
    rootBreakdown: [
      { surface: 'gen', type: 'root', rootSlug: 'gen' },
      { surface: 'etic', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'gen ("birth, origin") + -etic (adjective) → relating to origin or heredity.',
      zh: 'gen（出生、起源）+ -etic（形容词后缀）→ 与起源或遗传相关的。',
    },
    relatedWords: ['gene', 'genetics', 'genetically'],
  },
  {
    slug: 'generate',
    lemma: 'generate',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ˈdʒen.ə.reɪt/' }, us: { ipa: '/ˈdʒen.ə.reɪt/' } },
    definition: {
      en: 'To cause something to arise or come about; to produce.',
      zh: '产生；生成；发电',
    },
    examples: [
      {
        en: ['Solar panels generate electricity from sunlight.'],
        zh: ['太阳能电池板利用阳光发电。'],
      },
    ],
    rootBreakdown: [
      { surface: 'gen', type: 'root', rootSlug: 'gen' },
      { surface: 'er', type: 'connector' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'gen ("produce, bring forth") + -er- + -ate (verb) → to bring forth, to produce.',
      zh: 'gen（产生、带来）+ -er- + -ate（动词后缀）→ 带来，即产生。',
    },
    relatedWords: ['generation', 'generator', 'regenerate'],
  },
  {
    slug: 'generation',
    lemma: 'generation',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌdʒen.əˈreɪ.ʃən/' }, us: { ipa: '/ˌdʒen.əˈreɪ.ʃən/' } },
    definition: {
      en: 'All the people born around the same time; the production of something.',
      zh: '一代人；产生',
    },
    examples: [
      {
        en: ['Each generation faces its own unique challenges.'],
        zh: ['每一代人都面临着各自独特的挑战。'],
      },
    ],
    rootBreakdown: [
      { surface: 'gen', type: 'root', rootSlug: 'gen' },
      { surface: 'er', type: 'connector' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'gen ("produce, birth") + -er- + -ation (noun) → the act of producing; those produced together.',
      zh: 'gen（产生、出生）+ -er- + -ation（名词后缀）→ 产生的行为；一起出生的人们。',
    },
    relatedWords: ['generate', 'regenerate', 'degenerate'],
  },
  {
    slug: 'generous',
    lemma: 'generous',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈdʒen.ər.əs/' }, us: { ipa: '/ˈdʒen.ɚ.əs/' } },
    definition: {
      en: 'Showing a readiness to give more than is necessary; kind.',
      zh: '慷慨的；大方的',
    },
    examples: [
      {
        en: ['The generous donation helped rebuild the community center.'],
        zh: ['慷慨的捐赠帮助重建了社区中心。'],
      },
    ],
    rootBreakdown: [
      { surface: 'gen', type: 'root', rootSlug: 'gen' },
      { surface: 'er', type: 'connector' },
      { surface: 'ous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'gen ("birth, noble origin") + -er- + -ous (adjective) → of noble birth, hence liberal and giving.',
      zh: 'gen（出生、高贵的出身）+ -er- + -ous（形容词后缀）→ 出身高贵的，引申为慷慨的。',
    },
    relatedWords: ['generosity', 'generate', 'genuine'],
  },
  {
    slug: 'genuine',
    lemma: 'genuine',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈdʒen.ju.ɪn/' }, us: { ipa: '/ˈdʒen.ju.ɪn/' } },
    definition: { en: 'Truly what something is said to be; authentic.', zh: '真正的；真诚的' },
    examples: [
      {
        en: ['Her concern for others is genuine and heartfelt.'],
        zh: ['她对他人的关心是真诚和发自内心的。'],
      },
    ],
    rootBreakdown: [
      { surface: 'gen', type: 'root', rootSlug: 'gen' },
      { surface: 'u', type: 'connector' },
      { surface: 'ine', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'gen ("birth, origin") + -u- + -ine (adjective) → of true origin, authentic.',
      zh: 'gen（出生、起源）+ -u- + -ine（形容词后缀）→ 出身真实的，即真正的。',
    },
    relatedWords: ['genuinely', 'ingenuous', 'generate'],
  },
  {
    slug: 'general',
    lemma: 'general',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: { uk: { ipa: '/ˈdʒen.ər.əl/' }, us: { ipa: '/ˈdʒen.ɚ.əl/' } },
    definition: {
      en: 'Affecting or concerning all or most people; a high-ranking military officer.',
      zh: '一般的；普遍的；将军',
    },
    examples: [
      { en: ['The general public has access to the park.'], zh: ['公众可以进入这个公园。'] },
    ],
    rootBreakdown: [
      { surface: 'gen', type: 'root', rootSlug: 'gen' },
      { surface: 'er', type: 'connector' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'gen ("kind, class, birth") + -er- + -al (adjective) → of the whole class/kind, universal.',
      zh: 'gen（种类、类别、出生）+ -er- + -al（形容词后缀）→ 整个类别的，即普遍的。',
    },
    relatedWords: ['generally', 'generalize', 'generate'],
  },
  {
    slug: 'gender',
    lemma: 'gender',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈdʒen.dər/' }, us: { ipa: '/ˈdʒen.dɚ/' } },
    definition: {
      en: 'The state of being male or female; the social and cultural roles associated with sex.',
      zh: '性别',
    },
    examples: [
      {
        en: ['The discussion focused on gender equality in the workplace.'],
        zh: ['讨论集中在职场性别平等问题上。'],
      },
    ],
    rootBreakdown: [
      { surface: 'gen', type: 'root', rootSlug: 'gen' },
      { surface: 'der', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'gen ("birth, kind") + -der (from Latin genus) → the kind one is born as.',
      zh: 'gen（出生、种类）+ -der（源自拉丁语 genus）→ 出生时所属的类别，即性别。',
    },
    relatedWords: ['genre', 'gene', 'generate'],
  },
  {
    slug: 'genius',
    lemma: 'genius',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈdʒiː.ni.əs/' }, us: { ipa: '/ˈdʒiː.ni.əs/' } },
    definition: {
      en: 'Exceptional intellectual or creative power; a person of such ability.',
      zh: '天才；天赋',
    },
    examples: [
      {
        en: ['Einstein is widely regarded as a scientific genius.'],
        zh: ['爱因斯坦被普遍视为科学天才。'],
      },
    ],
    rootBreakdown: [
      { surface: 'gen', type: 'root', rootSlug: 'gen' },
      { surface: 'ius', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'gen ("birth, spirit") + -ius (Latin noun) → an inborn spirit or talent.',
      zh: 'gen（出生、精神）+ -ius（拉丁语名词后缀）→ 与生俱来的精神或才能。',
    },
    relatedWords: ['ingenious', 'ingenuity', 'gene'],
  },
  {
    slug: 'ingenious',
    lemma: 'ingenious',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ɪnˈdʒiː.ni.əs/' }, us: { ipa: '/ɪnˈdʒiː.ni.əs/' } },
    definition: { en: 'Clever, original, and inventive.', zh: '巧妙的；有独创性的' },
    examples: [
      {
        en: ['The engineer devised an ingenious solution to the problem.'],
        zh: ['工程师想出了一个巧妙的解决方案。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'gen', type: 'root', rootSlug: 'gen' },
      { surface: 'ious', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("in") + gen ("born, talent") + -ious (adjective) → born with talent, cleverly inventive.',
      zh: 'in-（在……中）+ gen（出生、才能）+ -ious（形容词后缀）→ 天生有才的，即巧妙的。',
    },
    relatedWords: ['ingenuity', 'genius', 'genuine'],
  },
  {
    slug: 'gentle',
    lemma: 'gentle',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈdʒen.təl/' }, us: { ipa: '/ˈdʒen.t̬əl/' } },
    definition: { en: 'Mild in temperament; kind and tender.', zh: '温柔的；温和的' },
    examples: [
      {
        en: ['She spoke in a gentle voice to calm the frightened child.'],
        zh: ['她用温柔的声音安慰受惊的孩子。'],
      },
    ],
    rootBreakdown: [
      { surface: 'gen', type: 'root', rootSlug: 'gen' },
      { surface: 'tle', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'gen ("birth, noble") + -tle (adjective ending) → of noble birth, hence refined and kind.',
      zh: 'gen（出生、高贵）+ -tle（形容词词尾）→ 出身高贵的，引申为温和的。',
    },
    relatedWords: ['gently', 'gentleman', 'generous'],
  },
  {
    slug: 'oxygen',
    lemma: 'oxygen',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈɒk.sɪ.dʒən/' }, us: { ipa: '/ˈɑːk.sɪ.dʒən/' } },
    definition: {
      en: 'A chemical element essential for respiration and combustion.',
      zh: '氧；氧气',
    },
    examples: [
      {
        en: ['Plants produce oxygen through the process of photosynthesis.'],
        zh: ['植物通过光合作用产生氧气。'],
      },
    ],
    rootBreakdown: [
      { surface: 'oxy', type: 'root' },
      { surface: 'gen', type: 'root', rootSlug: 'gen' },
    ],
    morphologyNote: {
      en: 'oxy ("acid, sharp") + gen ("produce") → acid-producer (originally thought to produce all acids).',
      zh: 'oxy（酸、尖锐的）+ gen（产生）→ 产生酸的（最初被认为产生所有酸）。',
    },
    relatedWords: ['hydrogen', 'nitrogen', 'gene'],
  },
];
