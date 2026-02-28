import type { WordEntry } from '@/types/content';

export const CID_WORDS: WordEntry[] = [
  {
    slug: 'decide',
    lemma: 'decide',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/dɪˈsaɪd/' },
      us: { ipa: '/dɪˈsaɪd/' },
    },
    definition: {
      en: 'To make a choice or come to a conclusion after consideration.',
      zh: '决定；下决心',
    },
    examples: [
      {
        en: ['She decided to study abroad after graduating from college.'],
        zh: ['她决定大学毕业后出国留学。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'cide', type: 'root', rootSlug: 'cid' },
    ],
    morphologyNote: {
      en: 'de- ("off, away") + cide (from cid, "cut") → to cut off alternatives, to make a firm choice.',
      zh: 'de-（去除）+ cide（源自 cid，切）→ 切断其他选项，即做出决定。',
    },
    relatedWords: ['decision', 'decisive', 'undecided'],
  },
  {
    slug: 'decision',
    lemma: 'decision',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/dɪˈsɪʒ.ən/' },
      us: { ipa: '/dɪˈsɪʒ.ən/' },
    },
    definition: {
      en: 'A conclusion or resolution reached after consideration.',
      zh: '决定；决策；判决',
    },
    examples: [
      {
        en: ['Making the right decision requires careful thought.'],
        zh: ['做出正确的决定需要仔细思考。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'cis', type: 'root', rootSlug: 'cid' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'de- ("off") + cis (variant of cid, "cut") + -ion (noun) → the act of cutting off options, a decision.',
      zh: 'de-（去除）+ cis（cid 的变体，切）+ -ion（名词后缀）→ 切断选择的行为，即决定。',
    },
    relatedWords: ['decide', 'decisive', 'indecision'],
  },
  {
    slug: 'decisive',
    lemma: 'decisive',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/dɪˈsaɪ.sɪv/' },
      us: { ipa: '/dɪˈsaɪ.sɪv/' },
    },
    definition: {
      en: 'Settling an issue quickly and effectively; having the ability to make decisions firmly.',
      zh: '决定性的；果断的',
    },
    examples: [
      {
        en: ["The general's decisive action turned the tide of the battle."],
        zh: ['将军果断的行动扭转了战局。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'cis', type: 'root', rootSlug: 'cid' },
      { surface: 'ive', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'de- ("off") + cis (variant of cid, "cut") + -ive (adjective) → tending to cut through, resolute.',
      zh: 'de-（去除）+ cis（cid 的变体，切）+ -ive（形容词后缀）→ 倾向于切断犹豫的，即果断的。',
    },
    relatedWords: ['decide', 'decision', 'indecisive'],
  },
  {
    slug: 'precise',
    lemma: 'precise',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/prɪˈsaɪs/' },
      us: { ipa: '/prɪˈsaɪs/' },
    },
    definition: {
      en: 'Marked by exactness and accuracy; clearly expressed.',
      zh: '精确的；准确的',
    },
    examples: [
      {
        en: ['The scientist took precise measurements of the specimens.'],
        zh: ['科学家对标本进行了精确的测量。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pre', type: 'prefix' },
      { surface: 'cise', type: 'root', rootSlug: 'cid' },
    ],
    morphologyNote: {
      en: 'pre- ("before") + cise (variant of cid, "cut") → cut beforehand, trimmed to exactness.',
      zh: 'pre-（在……之前）+ cise（cid 的变体，切）→ 事先裁剪好的，即精确的。',
    },
    relatedWords: ['precision', 'imprecise', 'concise'],
  },
  {
    slug: 'concise',
    lemma: 'concise',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/kənˈsaɪs/' },
      us: { ipa: '/kənˈsaɪs/' },
    },
    definition: {
      en: 'Giving a lot of information clearly and in a few words; brief but comprehensive.',
      zh: '简洁的；简明的',
    },
    examples: [
      {
        en: ['A good summary should be clear and concise.'],
        zh: ['好的摘要应该清晰简洁。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'cise', type: 'root', rootSlug: 'cid' },
    ],
    morphologyNote: {
      en: 'con- ("together, thoroughly") + cise (variant of cid, "cut") → thoroughly cut, trimmed down to essentials.',
      zh: 'con-（彻底地）+ cise（cid 的变体，切）→ 彻底裁剪的，即简洁的。',
    },
    relatedWords: ['concision', 'precise', 'excise'],
  },
  {
    slug: 'incisive',
    lemma: 'incisive',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ɪnˈsaɪ.sɪv/' },
      us: { ipa: '/ɪnˈsaɪ.sɪv/' },
    },
    definition: {
      en: 'Intelligently analytical and clear-thinking; sharp.',
      zh: '敏锐的；犀利的；深刻的',
    },
    examples: [
      {
        en: ['Her incisive analysis revealed the root cause of the problem.'],
        zh: ['她犀利的分析揭示了问题的根本原因。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'cis', type: 'root', rootSlug: 'cid' },
      { surface: 'ive', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("into") + cis (variant of cid, "cut") + -ive (adjective) → cutting into, sharp and penetrating.',
      zh: 'in-（进入）+ cis（cid 的变体，切）+ -ive（形容词后缀）→ 切入的，即犀利的。',
    },
    relatedWords: ['incision', 'precise', 'decide'],
  },
  {
    slug: 'suicide',
    lemma: 'suicide',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈsuː.ɪ.saɪd/' },
      us: { ipa: '/ˈsuː.ɪ.saɪd/' },
    },
    definition: {
      en: "The act of intentionally causing one's own death.",
      zh: '自杀',
    },
    examples: [
      {
        en: ['Suicide prevention hotlines provide crucial support to those in crisis.'],
        zh: ['自杀预防热线为处于危机中的人提供了至关重要的支持。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sui', type: 'prefix' },
      { surface: 'cide', type: 'root', rootSlug: 'cid' },
    ],
    morphologyNote: {
      en: 'sui ("self") + cide (from cid, "cut, kill") → to cut/kill oneself.',
      zh: 'sui（自己）+ cide（源自 cid，切、杀）→ 杀死自己，即自杀。',
    },
    relatedWords: ['homicide', 'pesticide', 'insecticide'],
  },
  {
    slug: 'pesticide',
    lemma: 'pesticide',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈpes.tɪ.saɪd/' },
      us: { ipa: '/ˈpes.tɪ.saɪd/' },
    },
    definition: {
      en: 'A substance used for destroying insects or other organisms harmful to cultivated plants.',
      zh: '杀虫剂；农药',
    },
    examples: [
      {
        en: ['Organic farmers avoid using chemical pesticides.'],
        zh: ['有机农户避免使用化学农药。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pest', type: 'root' },
      { surface: 'i', type: 'connector' },
      { surface: 'cide', type: 'root', rootSlug: 'cid' },
    ],
    morphologyNote: {
      en: 'pest ("pest, harmful creature") + -i- + cide (from cid, "kill") → something that kills pests.',
      zh: 'pest（害虫）+ -i- + cide（源自 cid，杀）→ 杀害虫的物质，即杀虫剂。',
    },
    relatedWords: ['insecticide', 'herbicide', 'suicide'],
  },
  {
    slug: 'excise',
    lemma: 'excise',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: {
      uk: { ipa: '/ɪkˈsaɪz/' },
      us: { ipa: '/ɪkˈsaɪz/' },
    },
    definition: {
      en: 'To cut out surgically; a tax levied on certain goods.',
      zh: '切除；消费税',
    },
    examples: [
      {
        en: ['The surgeon excised the tumor during the operation.'],
        zh: ['外科医生在手术中切除了肿瘤。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'cise', type: 'root', rootSlug: 'cid' },
    ],
    morphologyNote: {
      en: 'ex- ("out") + cise (variant of cid, "cut") → to cut out.',
      zh: 'ex-（出）+ cise（cid 的变体，切）→ 切除。',
    },
    relatedWords: ['excision', 'precise', 'incisive'],
  },
  {
    slug: 'scissors',
    lemma: 'scissors',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈsɪz.əz/' },
      us: { ipa: '/ˈsɪz.ɚz/' },
    },
    definition: {
      en: 'An instrument with two blades joined for cutting paper, cloth, etc.',
      zh: '剪刀',
    },
    examples: [
      {
        en: ['She used scissors to cut the wrapping paper.'],
        zh: ['她用剪刀剪开包装纸。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sciss', type: 'root', rootSlug: 'cid' },
      { surface: 'ors', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sciss (from cid, "cut") + -ors (instrument suffix) → a cutting instrument.',
      zh: 'sciss（源自 cid，切）+ -ors（工具后缀）→ 切割工具，即剪刀。',
    },
    relatedWords: ['excise', 'incisive', 'precise'],
  },
];
