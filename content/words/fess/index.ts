import type { WordEntry } from '@/types/content';

export const FESS_WORDS: WordEntry[] = [
  {
    slug: 'confess',
    lemma: 'confess',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/kənˈfes/' }, us: { ipa: '/kənˈfes/' } },
    definition: {
      en: 'To admit or acknowledge a fault, crime, or wrongdoing.',
      zh: '承认；坦白；忏悔',
    },
    examples: [
      {
        en: ['He confessed to stealing the money from the register.'],
        zh: ['他承认从收银台偷了钱。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'fess', type: 'root', rootSlug: 'fess' },
    ],
    morphologyNote: {
      en: 'con- ("together, fully") + fess ("speak, acknowledge") → to speak fully, to admit.',
      zh: 'con-（完全地）+ fess（说、承认）→ 完全说出，即坦白。',
    },
    relatedWords: ['confession', 'confessor', 'profess'],
  },
  {
    slug: 'confession',
    lemma: 'confession',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/kənˈfeʃ.ən/' }, us: { ipa: '/kənˈfeʃ.ən/' } },
    definition: {
      en: 'A formal statement admitting guilt; a declaration of religious beliefs.',
      zh: '忏悔；供词；告解',
    },
    examples: [
      {
        en: ['The suspect signed a written confession at the police station.'],
        zh: ['嫌疑人在警察局签署了书面供词。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'fess', type: 'root', rootSlug: 'fess' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'con- ("fully") + fess ("speak") + -ion (noun) → the act of speaking fully, an admission.',
      zh: 'con-（完全地）+ fess（说）+ -ion（名词后缀）→ 完全说出的行为，即供认。',
    },
    relatedWords: ['confess', 'confessional', 'profess'],
  },
  {
    slug: 'profess',
    lemma: 'profess',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/prəˈfes/' }, us: { ipa: '/prəˈfes/' } },
    definition: {
      en: 'To claim openly; to declare a belief or feeling.',
      zh: '声称；公开表示；宣称信仰',
    },
    examples: [
      {
        en: ['He professed his innocence throughout the trial.'],
        zh: ['他在整个审判过程中都声称自己无罪。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pro', type: 'prefix' },
      { surface: 'fess', type: 'root', rootSlug: 'fess' },
    ],
    morphologyNote: {
      en: 'pro- ("forth, publicly") + fess ("speak, declare") → to declare publicly.',
      zh: 'pro-（公开地）+ fess（说、宣布）→ 公开宣布，即声称。',
    },
    relatedWords: ['professor', 'profession', 'professional'],
  },
  {
    slug: 'professor',
    lemma: 'professor',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/prəˈfes.ər/' }, us: { ipa: '/prəˈfes.ɚ/' } },
    definition: { en: 'A university academic of the highest rank; a senior teacher.', zh: '教授' },
    examples: [
      {
        en: ['The professor gave an inspiring lecture on quantum physics.'],
        zh: ['教授做了一场关于量子物理学的精彩讲座。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pro', type: 'prefix' },
      { surface: 'fess', type: 'root', rootSlug: 'fess' },
      { surface: 'or', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pro- ("publicly") + fess ("declare") + -or (agent) → one who declares publicly, a teacher.',
      zh: 'pro-（公开地）+ fess（宣布）+ -or（施事者）→ 公开宣讲的人，即教授。',
    },
    relatedWords: ['profess', 'profession', 'professional'],
  },
  {
    slug: 'profession',
    lemma: 'profession',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/prəˈfeʃ.ən/' }, us: { ipa: '/prəˈfeʃ.ən/' } },
    definition: {
      en: 'A paid occupation requiring training and formal qualifications.',
      zh: '职业；专业',
    },
    examples: [
      { en: ['Medicine is a highly respected profession.'], zh: ['医学是一个备受尊敬的职业。'] },
    ],
    rootBreakdown: [
      { surface: 'pro', type: 'prefix' },
      { surface: 'fess', type: 'root', rootSlug: 'fess' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pro- ("forth") + fess ("declare") + -ion (noun) → a public declaration of skill, a vocation.',
      zh: 'pro-（向前）+ fess（宣布）+ -ion（名词后缀）→ 公开宣布自己的技能，即职业。',
    },
    relatedWords: ['professional', 'professor', 'profess'],
  },
  {
    slug: 'professional',
    lemma: 'professional',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: { uk: { ipa: '/prəˈfeʃ.ən.əl/' }, us: { ipa: '/prəˈfeʃ.ən.əl/' } },
    definition: {
      en: 'Relating to or connected with a profession; a person engaged in a profession.',
      zh: '专业的；职业的；专业人士',
    },
    examples: [
      {
        en: ['She sought professional advice before making the investment.'],
        zh: ['她在投资前寻求了专业建议。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pro', type: 'prefix' },
      { surface: 'fess', type: 'root', rootSlug: 'fess' },
      { surface: 'ion', type: 'suffix' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'profession + -al (adjective) → of or relating to a profession.',
      zh: 'profession（职业）+ -al（形容词后缀）→ 与职业相关的，即专业的。',
    },
    relatedWords: ['profession', 'professor', 'unprofessional'],
  },
];
