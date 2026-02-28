import type { WordEntry } from '@/types/content';

export const TRA_WORDS: WordEntry[] = [
  {
    slug: 'attract',
    lemma: 'attract',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/əˈtrækt/' },
      us: { ipa: '/əˈtrækt/' },
    },
    definition: {
      en: 'To cause someone to come to a place or participate in something; to draw toward.',
      zh: '吸引；引起…的注意',
    },
    examples: [
      {
        en: ['The bright lights attract moths at night.'],
        zh: ['明亮的灯光在夜间吸引飞蛾。'],
      },
    ],
    rootBreakdown: [
      { surface: 'at', type: 'prefix' },
      { surface: 'tract', type: 'root', rootSlug: 'tra' },
    ],
    morphologyNote: {
      en: 'at- (from ad, "toward") + tract ("pull, drag") → to pull toward.',
      zh: 'at-（源自 ad，朝向）+ tract（拉、拖）→ 向自己拉，即吸引。',
    },
    relatedWords: ['attraction', 'attractive', 'distract'],
  },
  {
    slug: 'contract',
    lemma: 'contract',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈkɒn.trækt/' },
      us: { ipa: '/ˈkɑːn.trækt/' },
    },
    definition: {
      en: 'A written legal agreement; to decrease in size; to enter into an agreement.',
      zh: '合同；收缩；签订',
    },
    examples: [
      {
        en: ['Both parties signed the contract after weeks of negotiation.'],
        zh: ['经过数周谈判，双方签订了合同。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'tract', type: 'root', rootSlug: 'tra' },
    ],
    morphologyNote: {
      en: 'con- ("together") + tract ("pull, draw") → to draw together, i.e. to agree or shrink.',
      zh: 'con-（一起）+ tract（拉、拖）→ 拉到一起，即签约或收缩。',
    },
    relatedWords: ['contraction', 'contractor', 'extract'],
  },
  {
    slug: 'extract',
    lemma: 'extract',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: {
      uk: { ipa: '/ɪkˈstrækt/' },
      us: { ipa: '/ɪkˈstrækt/' },
    },
    definition: {
      en: 'To remove or take out; a substance removed from something.',
      zh: '提取；摘录；提炼物',
    },
    examples: [
      {
        en: ['The dentist had to extract the damaged tooth.'],
        zh: ['牙医不得不拔掉那颗损坏的牙齿。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'tract', type: 'root', rootSlug: 'tra' },
    ],
    morphologyNote: {
      en: 'ex- ("out") + tract ("pull") → to pull out.',
      zh: 'ex-（向外）+ tract（拉）→ 拉出来，即提取。',
    },
    relatedWords: ['extraction', 'attract', 'abstract'],
  },
  {
    slug: 'distract',
    lemma: 'distract',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/dɪˈstrækt/' },
      us: { ipa: '/dɪˈstrækt/' },
    },
    definition: {
      en: 'To prevent someone from giving full attention to something.',
      zh: '分散注意力；使分心',
    },
    examples: [
      {
        en: ['Loud music can distract students from studying.'],
        zh: ['吵闹的音乐会分散学生的学习注意力。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dis', type: 'prefix' },
      { surface: 'tract', type: 'root', rootSlug: 'tra' },
    ],
    morphologyNote: {
      en: 'dis- ("apart, away") + tract ("pull") → to pull away from focus.',
      zh: 'dis-（分开）+ tract（拉）→ 把注意力拉开，即分心。',
    },
    relatedWords: ['distraction', 'attract', 'abstract'],
  },
  {
    slug: 'abstract',
    lemma: 'abstract',
    partOfSpeech: ['adj.', 'n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈæb.strækt/' },
      us: { ipa: '/ˈæb.strækt/' },
    },
    definition: {
      en: 'Existing in thought but not having physical reality; a summary.',
      zh: '抽象的；摘要',
    },
    examples: [
      {
        en: ['Justice is an abstract concept that varies across cultures.'],
        zh: ['正义是一个在不同文化中有不同理解的抽象概念。'],
      },
    ],
    rootBreakdown: [
      { surface: 'abs', type: 'prefix' },
      { surface: 'tract', type: 'root', rootSlug: 'tra' },
    ],
    morphologyNote: {
      en: 'abs- ("away from") + tract ("pull") → pulled away from concrete reality.',
      zh: 'abs-（远离）+ tract（拉）→ 从具体现实中抽离的，即抽象的。',
    },
    relatedWords: ['abstraction', 'attract', 'extract'],
  },
  {
    slug: 'subtract',
    lemma: 'subtract',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/səbˈtrækt/' },
      us: { ipa: '/səbˈtrækt/' },
    },
    definition: {
      en: 'To take away a number or amount from another.',
      zh: '减去；扣除',
    },
    examples: [
      {
        en: ['Subtract 15 from 100 and you get 85.'],
        zh: ['100减去15等于85。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sub', type: 'prefix' },
      { surface: 'tract', type: 'root', rootSlug: 'tra' },
    ],
    morphologyNote: {
      en: 'sub- ("from under") + tract ("pull") → to pull from under, i.e. to take away.',
      zh: 'sub-（从下方）+ tract（拉）→ 从下方拉走，即减去。',
    },
    relatedWords: ['subtraction', 'extract', 'attract'],
  },
  {
    slug: 'retract',
    lemma: 'retract',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/rɪˈtrækt/' },
      us: { ipa: '/rɪˈtrækt/' },
    },
    definition: {
      en: 'To draw back or withdraw a statement, accusation, or promise.',
      zh: '收回；撤回；缩回',
    },
    examples: [
      {
        en: ['The newspaper was forced to retract its false claims.'],
        zh: ['报纸被迫撤回其虚假报道。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'tract', type: 'root', rootSlug: 'tra' },
    ],
    morphologyNote: {
      en: 're- ("back") + tract ("pull") → to pull back.',
      zh: 're-（向后）+ tract（拉）→ 向后拉，即收回、撤回。',
    },
    relatedWords: ['retraction', 'attract', 'extract'],
  },
  {
    slug: 'procrastinate',
    lemma: 'procrastinate',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/prəˈkræs.tɪ.neɪt/' },
      us: { ipa: '/proʊˈkræs.tə.neɪt/' },
    },
    definition: {
      en: 'To delay or postpone action; to put off doing something.',
      zh: '拖延；耽搁',
    },
    examples: [
      {
        en: ['Stop procrastinating and start working on the assignment.'],
        zh: ['别再拖延了，开始做作业吧。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pro', type: 'prefix' },
      { surface: 'crastin', type: 'other' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pro- ("forward") + crastinus ("of tomorrow") → to push forward to tomorrow, i.e. to delay.',
      zh: 'pro-（向前）+ crastinus（明天的）→ 推到明天，即拖延。',
    },
    relatedWords: ['procrastination', 'protract', 'attract'],
  },
  {
    slug: 'treat',
    lemma: 'treat',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: {
      uk: { ipa: '/triːt/' },
      us: { ipa: '/triːt/' },
    },
    definition: {
      en: 'To behave toward or deal with; to give medical care; a special pleasure.',
      zh: '对待；治疗；款待',
    },
    examples: [
      {
        en: ['Doctors treated the patient for a broken arm.'],
        zh: ['医生治疗了患者的手臂骨折。'],
      },
    ],
    rootBreakdown: [{ surface: 'treat', type: 'root', rootSlug: 'tra' }],
    morphologyNote: {
      en: 'From Latin tractare ("to handle, manage"), from tra ("pull, drag") → to handle or manage.',
      zh: '源自拉丁语 tractare（处理、管理），源自 tra（拉、拖）→ 处理、对待。',
    },
    relatedWords: ['treatment', 'mistreat', 'retreat'],
  },
  {
    slug: 'portrait',
    lemma: 'portrait',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈpɔː.trɪt/' },
      us: { ipa: '/ˈpɔːr.trɪt/' },
    },
    definition: {
      en: 'A painting, drawing, or photograph of a person.',
      zh: '肖像；画像；描写',
    },
    examples: [
      {
        en: ['The artist painted a stunning portrait of the queen.'],
        zh: ['画家画了一幅精美的女王肖像。'],
      },
    ],
    rootBreakdown: [
      { surface: 'por', type: 'prefix' },
      { surface: 'trait', type: 'root', rootSlug: 'tra' },
    ],
    morphologyNote: {
      en: 'por- (from pro, "forth") + trait (from tra, "draw") → drawn forth, i.e. a likeness drawn out.',
      zh: 'por-（源自 pro，向前）+ trait（源自 tra，拖拉、描绘）→ 描绘出来的，即肖像。',
    },
    relatedWords: ['portray', 'portraiture', 'trait'],
  },
  {
    slug: 'trait',
    lemma: 'trait',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/treɪt/' },
      us: { ipa: '/treɪt/' },
    },
    definition: {
      en: 'A distinguishing quality or characteristic of a person.',
      zh: '特征；特点；品质',
    },
    examples: [
      {
        en: ['Honesty is one of her most admirable traits.'],
        zh: ['诚实是她最令人钦佩的品质之一。'],
      },
    ],
    rootBreakdown: [{ surface: 'trait', type: 'root', rootSlug: 'tra' }],
    morphologyNote: {
      en: 'From tra ("draw, pull") → something drawn out or outlined, i.e. a feature.',
      zh: '源自 tra（拉、描绘）→ 被勾勒出来的东西，即特征。',
    },
    relatedWords: ['portrait', 'attract', 'trace'],
  },
  {
    slug: 'train',
    lemma: 'train',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/treɪn/' },
      us: { ipa: '/treɪn/' },
    },
    definition: {
      en: 'A series of connected railroad cars; to teach skills through practice.',
      zh: '火车；训练；培训',
    },
    examples: [
      {
        en: ['She trained for months to prepare for the marathon.'],
        zh: ['她训练了几个月来准备马拉松。'],
      },
    ],
    rootBreakdown: [{ surface: 'train', type: 'root', rootSlug: 'tra' }],
    morphologyNote: {
      en: 'From tra ("pull, drag") → to pull along, hence a line of cars pulled, or to pull someone through learning.',
      zh: '源自 tra（拉、拖）→ 拖拉前行，引申为列车或训练（引导人学习）。',
    },
    relatedWords: ['training', 'trainer', 'trait'],
  },
];
