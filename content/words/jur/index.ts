import type { WordEntry } from '@/types/content';

export const JUR_WORDS: WordEntry[] = [
  {
    slug: 'just',
    lemma: 'just',
    partOfSpeech: ['adj.', 'adv.'],
    pronunciation: {
      uk: { ipa: '/dʒʌst/' },
      us: { ipa: '/dʒʌst/' },
    },
    definition: {
      en: 'Based on what is morally right and fair; only, merely.',
      zh: '公正的；仅仅',
    },
    examples: [
      {
        en: ['A just society treats all citizens equally under the law.'],
        zh: ['一个公正的社会在法律面前平等对待所有公民。'],
      },
    ],
    rootBreakdown: [
      { surface: 'jus', type: 'root', rootSlug: 'jur' },
      { surface: 't', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'jus ("law, right") + -t → relating to law, hence righteous or fair.',
      zh: 'jus（法律、正义）+ -t → 与法律相关的，即公正的。',
    },
    relatedWords: ['justice', 'justify', 'unjust'],
  },
  {
    slug: 'justice',
    lemma: 'justice',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈdʒʌs.tɪs/' },
      us: { ipa: '/ˈdʒʌs.tɪs/' },
    },
    definition: {
      en: 'The quality of being fair and reasonable; the legal system.',
      zh: '正义；司法；公正',
    },
    examples: [
      {
        en: ['The victims demanded justice for the crime committed against them.'],
        zh: ['受害者要求对犯下的罪行伸张正义。'],
      },
    ],
    rootBreakdown: [
      { surface: 'jus', type: 'root', rootSlug: 'jur' },
      { surface: 't', type: 'other' },
      { surface: 'ice', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'jus ("law, right") + -tice (noun) → the state of lawfulness, fairness.',
      zh: 'jus（法律、正义）+ -tice（名词后缀）→ 合法公正的状态，即正义。',
    },
    relatedWords: ['just', 'injustice', 'justify'],
  },
  {
    slug: 'justify',
    lemma: 'justify',
    partOfSpeech: ['vt.'],
    pronunciation: {
      uk: { ipa: '/ˈdʒʌs.tɪ.faɪ/' },
      us: { ipa: '/ˈdʒʌs.tɪ.faɪ/' },
    },
    definition: {
      en: 'To show or prove to be right, reasonable, or warranted.',
      zh: '证明…正当；为…辩护',
    },
    examples: [
      {
        en: ['How can you justify spending so much money on this project?'],
        zh: ['你怎么能证明在这个项目上花这么多钱是合理的？'],
      },
    ],
    rootBreakdown: [
      { surface: 'just', type: 'root', rootSlug: 'jur' },
      { surface: 'ify', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'just ("right, law") + -ify ("to make") → to make right, to prove as fair.',
      zh: 'just（公正）+ -ify（使…）→ 使之正当，即辩护、证明合理。',
    },
    relatedWords: ['justification', 'justified', 'justifiable'],
  },
  {
    slug: 'adjust',
    lemma: 'adjust',
    partOfSpeech: ['vt.', 'vi.'],
    pronunciation: {
      uk: { ipa: '/əˈdʒʌst/' },
      us: { ipa: '/əˈdʒʌst/' },
    },
    definition: {
      en: 'To alter or modify something slightly; to adapt to new conditions.',
      zh: '调整；适应；校准',
    },
    examples: [
      {
        en: ['It took a few weeks to adjust to the new work environment.'],
        zh: ['花了几周时间才适应新的工作环境。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ad', type: 'prefix' },
      { surface: 'just', type: 'root', rootSlug: 'jur' },
    ],
    morphologyNote: {
      en: 'ad- ("to") + just ("right") → to make right, to bring to a proper state.',
      zh: 'ad-（朝向）+ just（正确）→ 使之正确，即调整、校准。',
    },
    relatedWords: ['adjustment', 'adjustable', 'readjust'],
  },
  {
    slug: 'judge',
    lemma: 'judge',
    partOfSpeech: ['n.', 'vt.', 'vi.'],
    pronunciation: {
      uk: { ipa: '/dʒʌdʒ/' },
      us: { ipa: '/dʒʌdʒ/' },
    },
    definition: {
      en: 'A public official who decides cases in a court of law; to form an opinion.',
      zh: '法官；裁判员；判断',
    },
    examples: [
      {
        en: ['The judge sentenced the defendant to five years in prison.'],
        zh: ['法官判处被告五年监禁。'],
      },
    ],
    rootBreakdown: [
      { surface: 'jud', type: 'root', rootSlug: 'jur' },
      { surface: 'ge', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'jud (variant of jur, "law") + -ge → one who speaks the law, a decision-maker.',
      zh: 'jud（jur 的变体，法律）+ -ge → 宣布法律的人，即法官。',
    },
    relatedWords: ['judgement', 'judgmental', 'prejudge'],
  },
  {
    slug: 'prejudice',
    lemma: 'prejudice',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: {
      uk: { ipa: '/ˈpredʒ.ʊ.dɪs/' },
      us: { ipa: '/ˈpredʒ.ə.dɪs/' },
    },
    definition: {
      en: 'Preconceived opinion not based on reason; harm or injury resulting from an action.',
      zh: '偏见；成见；损害',
    },
    examples: [
      {
        en: ['Racial prejudice remains a serious problem in many societies.'],
        zh: ['种族偏见在许多社会中仍然是一个严重问题。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pre', type: 'prefix' },
      { surface: 'jud', type: 'root', rootSlug: 'jur' },
      { surface: 'ice', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pre- ("before") + jud ("judge") + -ice (noun) → a judgment formed beforehand, a bias.',
      zh: 'pre-（预先）+ jud（判断）+ -ice（名词后缀）→ 预先做出的判断，即偏见。',
    },
    relatedWords: ['prejudiced', 'prejudicial', 'judge'],
  },
  {
    slug: 'jury',
    lemma: 'jury',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈdʒʊə.ri/' },
      us: { ipa: '/ˈdʒʊr.i/' },
    },
    definition: {
      en: 'A group of people sworn to give a verdict in a legal case.',
      zh: '陪审团；评审委员会',
    },
    examples: [
      {
        en: ['The jury reached a unanimous verdict of not guilty.'],
        zh: ['陪审团一致裁定无罪。'],
      },
    ],
    rootBreakdown: [
      { surface: 'jur', type: 'root', rootSlug: 'jur' },
      { surface: 'y', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'jur ("law, to swear") + -y (noun) → those who swear to uphold the law.',
      zh: 'jur（法律、宣誓）+ -y（名词后缀）→ 宣誓维护法律的人，即陪审团。',
    },
    relatedWords: ['juror', 'jurist', 'judiciary'],
  },
  {
    slug: 'jurist',
    lemma: 'jurist',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈdʒʊə.rɪst/' },
      us: { ipa: '/ˈdʒʊr.ɪst/' },
    },
    definition: {
      en: 'An expert in or writer on law.',
      zh: '法学家；法官；律师',
    },
    examples: [
      {
        en: ['The eminent jurist published a treatise on constitutional law.'],
        zh: ['这位杰出的法学家发表了一篇宪法学论文。'],
      },
    ],
    rootBreakdown: [
      { surface: 'jur', type: 'root', rootSlug: 'jur' },
      { surface: 'ist', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'jur ("law") + -ist ("person") → a person who specializes in law.',
      zh: 'jur（法律）+ -ist（从事…的人）→ 从事法律研究的人，即法学家。',
    },
    relatedWords: ['jury', 'judiciary', 'juristic'],
  },
  {
    slug: 'injure',
    lemma: 'injure',
    partOfSpeech: ['vt.'],
    pronunciation: {
      uk: { ipa: '/ˈɪn.dʒər/' },
      us: { ipa: '/ˈɪn.dʒɚ/' },
    },
    definition: {
      en: 'To cause physical harm or damage to someone or something.',
      zh: '伤害；损害',
    },
    examples: [
      {
        en: ['He injured his knee while playing football.'],
        zh: ['他踢足球时伤了膝盖。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'jur', type: 'root', rootSlug: 'jur' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("not") + jur ("right, law") + -e → to act against what is right, hence to harm.',
      zh: 'in-（不）+ jur（正义、法律）+ -e → 违反正义的，即伤害。',
    },
    relatedWords: ['injury', 'injured', 'injurious'],
  },
  {
    slug: 'perjure',
    lemma: 'perjure',
    partOfSpeech: ['vt.'],
    pronunciation: {
      uk: { ipa: '/ˈpɜː.dʒər/' },
      us: { ipa: '/ˈpɝː.dʒɚ/' },
    },
    definition: {
      en: 'To willfully tell a lie under oath in a court of law.',
      zh: '作伪证；发伪誓',
    },
    examples: [
      {
        en: ['The witness was charged with perjuring himself in court.'],
        zh: ['证人被控在法庭上作伪证。'],
      },
    ],
    rootBreakdown: [
      { surface: 'per', type: 'prefix' },
      { surface: 'jur', type: 'root', rootSlug: 'jur' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'per- ("thoroughly, wrongly") + jur ("swear") + -e → to swear falsely.',
      zh: 'per-（完全地、错误地）+ jur（宣誓）+ -e → 错误地宣誓，即作伪证。',
    },
    relatedWords: ['perjury', 'perjurer'],
  },
  {
    slug: 'adjudicate',
    lemma: 'adjudicate',
    partOfSpeech: ['vt.', 'vi.'],
    pronunciation: {
      uk: { ipa: '/əˈdʒuː.dɪ.keɪt/' },
      us: { ipa: '/əˈdʒuː.dɪ.keɪt/' },
    },
    definition: {
      en: 'To make a formal judgment or decision about a disputed matter.',
      zh: '裁定；判决；裁决',
    },
    examples: [
      {
        en: ['The tribunal was established to adjudicate disputes between neighbors.'],
        zh: ['仲裁庭的设立是为了裁决邻里之间的纠纷。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ad', type: 'prefix' },
      { surface: 'jud', type: 'root', rootSlug: 'jur' },
      { surface: 'ic', type: 'other' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ad- ("to") + jud ("judge") + -icate (verb) → to act as judge toward, to decide officially.',
      zh: 'ad-（朝向）+ jud（判断）+ -icate（动词后缀）→ 做出判决，即裁定。',
    },
    relatedWords: ['adjudication', 'adjudicator', 'judge'],
  },
  {
    slug: 'judicious',
    lemma: 'judicious',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/dʒuˈdɪʃ.əs/' },
      us: { ipa: '/dʒuˈdɪʃ.əs/' },
    },
    definition: {
      en: 'Having or showing good judgment; wise and careful.',
      zh: '明智的；审慎的',
    },
    examples: [
      {
        en: ['A judicious use of resources is essential for long-term success.'],
        zh: ['明智地使用资源对长期成功至关重要。'],
      },
    ],
    rootBreakdown: [
      { surface: 'jud', type: 'root', rootSlug: 'jur' },
      { surface: 'ic', type: 'other' },
      { surface: 'ious', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'jud ("judge") + -icious (adj.) → having the quality of good judgment.',
      zh: 'jud（判断）+ -icious（形容词后缀）→ 具有良好判断力的，即明智的。',
    },
    relatedWords: ['judge', 'judiciary', 'injudicious'],
  },
];
