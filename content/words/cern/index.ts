import type { WordEntry } from '@/types/content';

export const CERN_WORDS: WordEntry[] = [
  {
    slug: 'secret',
    lemma: 'secret',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: {
      uk: { ipa: '/ˈsiː.krɪt/' },
      us: { ipa: '/ˈsiː.krɪt/' },
    },
    definition: {
      en: 'Something kept hidden from others; not known or seen by others.',
      zh: '秘密；秘密的；隐秘的',
    },
    examples: [
      {
        en: ['She kept the surprise party a secret from her friend.'],
        zh: ['她对朋友保密了惊喜派对的事。'],
      },
    ],
    rootBreakdown: [
      { surface: 'se', type: 'prefix' },
      { surface: 'cret', type: 'root', rootSlug: 'cern' },
    ],
    morphologyNote: {
      en: 'se- ("apart") + cret (variant of cern, "separate, sift") → set apart, hidden from view.',
      zh: 'se-（分开）+ cret（cern 的变体，分离、筛选）→ 分离开的，即隐藏的。',
    },
    relatedWords: ['secretary', 'secrete', 'secretion'],
  },
  {
    slug: 'secretary',
    lemma: 'secretary',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈsek.rə.tər.i/' },
      us: { ipa: '/ˈsek.rə.ter.i/' },
    },
    definition: {
      en: 'A person employed to handle correspondence and manage affairs; a government official.',
      zh: '秘书；部长；大臣',
    },
    examples: [
      {
        en: ['The secretary scheduled all the meetings for the week.'],
        zh: ['秘书安排了本周所有的会议。'],
      },
    ],
    rootBreakdown: [
      { surface: 'secret', type: 'root', rootSlug: 'cern' },
      { surface: 'ary', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'secret ("hidden, confidential") + -ary (person suffix) → one entrusted with secrets, a secretary.',
      zh: 'secret（秘密的、机密的）+ -ary（人物后缀）→ 被托付秘密的人，即秘书。',
    },
    relatedWords: ['secret', 'secretarial', 'secrete'],
  },
  {
    slug: 'secrete',
    lemma: 'secrete',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/sɪˈkriːt/' },
      us: { ipa: '/sɪˈkriːt/' },
    },
    definition: {
      en: 'To produce and discharge a substance from a cell or gland; to hide something.',
      zh: '分泌；隐藏',
    },
    examples: [
      {
        en: ['The glands secrete hormones that regulate body functions.'],
        zh: ['腺体分泌调节身体功能的激素。'],
      },
    ],
    rootBreakdown: [
      { surface: 'se', type: 'prefix' },
      { surface: 'crete', type: 'root', rootSlug: 'cern' },
    ],
    morphologyNote: {
      en: 'se- ("apart") + crete (variant of cern, "separate") → to separate out, to produce by separation.',
      zh: 'se-（分开）+ crete（cern 的变体，分离）→ 分离出来，即分泌。',
    },
    relatedWords: ['secretion', 'secret', 'discern'],
  },
  {
    slug: 'discern',
    lemma: 'discern',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/dɪˈsɜːn/' },
      us: { ipa: '/dɪˈsɝːn/' },
    },
    definition: {
      en: 'To perceive or recognize something clearly; to distinguish.',
      zh: '辨别；识别；看出',
    },
    examples: [
      {
        en: ['It was difficult to discern the truth from the lies.'],
        zh: ['很难辨别真假。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dis', type: 'prefix' },
      { surface: 'cern', type: 'root', rootSlug: 'cern' },
    ],
    morphologyNote: {
      en: 'dis- ("apart") + cern ("separate, sift") → to sift apart, to distinguish clearly.',
      zh: 'dis-（分开）+ cern（分离、筛选）→ 筛分开来，即辨别。',
    },
    relatedWords: ['discernment', 'discernible', 'discrete'],
  },
  {
    slug: 'discernible',
    lemma: 'discernible',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/dɪˈsɜː.nə.bəl/' },
      us: { ipa: '/dɪˈsɝː.nə.bəl/' },
    },
    definition: {
      en: 'Able to be perceived or recognized; distinguishable.',
      zh: '可辨别的；可识别的',
    },
    examples: [
      {
        en: ['There was no discernible difference between the two samples.'],
        zh: ['两个样本之间没有可辨别的差异。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dis', type: 'prefix' },
      { surface: 'cern', type: 'root', rootSlug: 'cern' },
      { surface: 'ible', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dis- ("apart") + cern ("sift") + -ible ("able to be") → able to be sifted apart, recognizable.',
      zh: 'dis-（分开）+ cern（筛选）+ -ible（能够被）→ 能够被筛分的，即可辨别的。',
    },
    relatedWords: ['discern', 'discernment', 'indiscernible'],
  },
  {
    slug: 'discrete',
    lemma: 'discrete',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/dɪˈskriːt/' },
      us: { ipa: '/dɪˈskriːt/' },
    },
    definition: {
      en: 'Individually separate and distinct.',
      zh: '分离的；离散的；不连续的',
    },
    examples: [
      {
        en: ['The data is organized into discrete categories.'],
        zh: ['数据被组织成离散的类别。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dis', type: 'prefix' },
      { surface: 'crete', type: 'root', rootSlug: 'cern' },
    ],
    morphologyNote: {
      en: 'dis- ("apart") + crete (variant of cern, "separate") → separated apart, individually distinct.',
      zh: 'dis-（分开）+ crete（cern 的变体，分离）→ 各自分开的，即离散的。',
    },
    relatedWords: ['discreet', 'discern', 'secret'],
  },
  {
    slug: 'discreet',
    lemma: 'discreet',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/dɪˈskriːt/' },
      us: { ipa: '/dɪˈskriːt/' },
    },
    definition: {
      en: 'Careful and prudent in speech or action to avoid causing offense or revealing private information.',
      zh: '谨慎的；审慎的；慎重的',
    },
    examples: [
      {
        en: ["She was discreet about her colleague's personal problems."],
        zh: ['她对同事的私人问题很谨慎。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dis', type: 'prefix' },
      { surface: 'creet', type: 'root', rootSlug: 'cern' },
    ],
    morphologyNote: {
      en: 'dis- ("apart") + creet (variant of cern, "sift, judge") → able to sift and judge, hence prudent.',
      zh: 'dis-（分开）+ creet（cern 的变体，筛选、判断）→ 能够筛选判断的，即谨慎的。',
    },
    relatedWords: ['discrete', 'discern', 'indiscreet'],
  },
  {
    slug: 'discernment',
    lemma: 'discernment',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/dɪˈsɜːn.mənt/' },
      us: { ipa: '/dɪˈsɝːn.mənt/' },
    },
    definition: {
      en: 'The ability to judge well; keen perception or insight.',
      zh: '辨别力；洞察力；鉴赏力',
    },
    examples: [
      {
        en: ['A good leader needs discernment to make wise decisions.'],
        zh: ['好的领导者需要洞察力来做出明智的决定。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dis', type: 'prefix' },
      { surface: 'cern', type: 'root', rootSlug: 'cern' },
      { surface: 'ment', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dis- ("apart") + cern ("sift") + -ment (noun suffix) → the quality of sifting well, good judgment.',
      zh: 'dis-（分开）+ cern（筛选）+ -ment（名词后缀）→ 善于筛选的品质，即洞察力。',
    },
    relatedWords: ['discern', 'discernible', 'discreet'],
  },
];
