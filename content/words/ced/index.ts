import type { WordEntry } from '@/types/content';

export const CED_WORDS: WordEntry[] = [
  {
    slug: 'succeed',
    lemma: 'succeed',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/səkˈsiːd/' },
      us: { ipa: '/səkˈsiːd/' },
    },
    definition: {
      en: 'To achieve the desired aim; to come after and take the place of.',
      zh: '成功；继任；继承',
    },
    examples: [
      {
        en: ['With hard work and determination, she succeeded in her goals.'],
        zh: ['凭借努力和决心，她实现了目标。'],
      },
    ],
    rootBreakdown: [
      { surface: 'suc', type: 'prefix' },
      { surface: 'ceed', type: 'root', rootSlug: 'ced' },
    ],
    morphologyNote: {
      en: 'suc- (from sub-, "under, after") + ceed (variant of ced, "go") → to go after, to follow and achieve.',
      zh: 'suc-（源自 sub-，在……之后）+ ceed（ced 的变体，走）→ 跟着走，即成功或继任。',
    },
    relatedWords: ['success', 'successor', 'succession'],
  },
  {
    slug: 'success',
    lemma: 'success',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/səkˈses/' },
      us: { ipa: '/səkˈses/' },
    },
    definition: {
      en: 'The accomplishment of an aim or purpose; a person or thing that achieves desired aims.',
      zh: '成功；成就',
    },
    examples: [
      {
        en: ['The project was a great success and exceeded all expectations.'],
        zh: ['这个项目取得了巨大的成功，超出了所有预期。'],
      },
    ],
    rootBreakdown: [
      { surface: 'suc', type: 'prefix' },
      { surface: 'cess', type: 'root', rootSlug: 'ced' },
    ],
    morphologyNote: {
      en: 'suc- ("after") + cess (variant of ced, "go") → the outcome of going forward, achievement.',
      zh: 'suc-（在……之后）+ cess（ced 的变体，走）→ 前进的结果，即成功。',
    },
    relatedWords: ['succeed', 'successful', 'successor'],
  },
  {
    slug: 'exceed',
    lemma: 'exceed',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ɪkˈsiːd/' },
      us: { ipa: '/ɪkˈsiːd/' },
    },
    definition: {
      en: 'To be greater than; to go beyond what is allowed or expected.',
      zh: '超过；超越；超出',
    },
    examples: [
      {
        en: ['Sales this quarter exceeded our most optimistic forecast.'],
        zh: ['本季度销售额超过了我们最乐观的预测。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'ceed', type: 'root', rootSlug: 'ced' },
    ],
    morphologyNote: {
      en: 'ex- ("out, beyond") + ceed (variant of ced, "go") → to go beyond, to surpass.',
      zh: 'ex-（超出、超越）+ ceed（ced 的变体，走）→ 走出去/超出，即超越。',
    },
    relatedWords: ['excess', 'exceedingly', 'succeed'],
  },
  {
    slug: 'access',
    lemma: 'access',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈæk.ses/' },
      us: { ipa: '/ˈæk.ses/' },
    },
    definition: {
      en: 'The means or opportunity to approach or enter; to retrieve or obtain.',
      zh: '通道；进入；获取',
    },
    examples: [
      {
        en: ['Students have access to the library around the clock.'],
        zh: ['学生们可以全天候进入图书馆。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ac', type: 'prefix' },
      { surface: 'cess', type: 'root', rootSlug: 'ced' },
    ],
    morphologyNote: {
      en: 'ac- (from ad-, "to") + cess (variant of ced, "go") → to go toward, a way of approach.',
      zh: 'ac-（源自 ad-，向）+ cess（ced 的变体，走）→ 走向，即通道/进入。',
    },
    relatedWords: ['accessible', 'inaccessible', 'process'],
  },
  {
    slug: 'proceed',
    lemma: 'proceed',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/prəˈsiːd/' },
      us: { ipa: '/proʊˈsiːd/' },
    },
    definition: {
      en: 'To begin or continue a course of action; to move forward.',
      zh: '继续进行；前进',
    },
    examples: [
      {
        en: ['Please proceed to the next chapter when you are ready.'],
        zh: ['准备好后请继续阅读下一章。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pro', type: 'prefix' },
      { surface: 'ceed', type: 'root', rootSlug: 'ced' },
    ],
    morphologyNote: {
      en: 'pro- ("forward") + ceed (variant of ced, "go") → to go forward.',
      zh: 'pro-（向前）+ ceed（ced 的变体，走）→ 向前走，即继续进行。',
    },
    relatedWords: ['process', 'procedure', 'procession'],
  },
  {
    slug: 'process',
    lemma: 'process',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈprəʊ.ses/' },
      us: { ipa: '/ˈprɑː.ses/' },
    },
    definition: {
      en: 'A series of actions or steps taken to achieve a result; to perform operations on data.',
      zh: '过程；流程；处理',
    },
    examples: [
      {
        en: ['The application process takes about two weeks.'],
        zh: ['申请流程大约需要两周时间。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pro', type: 'prefix' },
      { surface: 'cess', type: 'root', rootSlug: 'ced' },
    ],
    morphologyNote: {
      en: 'pro- ("forward") + cess (variant of ced, "go") → a going forward, a progression of steps.',
      zh: 'pro-（向前）+ cess（ced 的变体，走）→ 前进的过程，即流程。',
    },
    relatedWords: ['proceed', 'procedure', 'procession'],
  },
  {
    slug: 'precede',
    lemma: 'precede',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/prɪˈsiːd/' },
      us: { ipa: '/prɪˈsiːd/' },
    },
    definition: {
      en: 'To come before something in time, order, or position.',
      zh: '在……之前；先于',
    },
    examples: [
      {
        en: ['A brief introduction will precede the main presentation.'],
        zh: ['简短的介绍将在主要演讲之前进行。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pre', type: 'prefix' },
      { surface: 'cede', type: 'root', rootSlug: 'ced' },
    ],
    morphologyNote: {
      en: 'pre- ("before") + cede (from ced, "go") → to go before.',
      zh: 'pre-（在……之前）+ cede（源自 ced，走）→ 走在前面，即先于。',
    },
    relatedWords: ['precedent', 'predecessor', 'unprecedented'],
  },
  {
    slug: 'unprecedented',
    lemma: 'unprecedented',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ʌnˈpres.ɪ.den.tɪd/' },
      us: { ipa: '/ʌnˈpres.ɪ.den.t̬ɪd/' },
    },
    definition: {
      en: 'Never done or known before; without previous example.',
      zh: '前所未有的；史无前例的',
    },
    examples: [
      {
        en: ['The pandemic caused an unprecedented disruption to global travel.'],
        zh: ['疫情对全球旅行造成了前所未有的破坏。'],
      },
    ],
    rootBreakdown: [
      { surface: 'un', type: 'prefix' },
      { surface: 'pre', type: 'prefix' },
      { surface: 'ced', type: 'root', rootSlug: 'ced' },
      { surface: 'ent', type: 'suffix' },
      { surface: 'ed', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'un- ("not") + pre- ("before") + ced ("go") + -ent- + -ed → without anything that went before, never seen before.',
      zh: 'un-（不）+ pre-（在……之前）+ ced（走）+ -ent- + -ed → 没有先例的。',
    },
    relatedWords: ['precede', 'precedent', 'predecessor'],
  },
  {
    slug: 'recession',
    lemma: 'recession',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/rɪˈseʃ.ən/' },
      us: { ipa: '/rɪˈseʃ.ən/' },
    },
    definition: {
      en: 'A period of temporary economic decline; the act of receding.',
      zh: '经济衰退；后退',
    },
    examples: [
      {
        en: ['The country entered a deep recession after the financial crisis.'],
        zh: ['金融危机后，该国陷入了严重的经济衰退。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'cess', type: 'root', rootSlug: 'ced' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("back") + cess (variant of ced, "go") + -ion (noun) → a going back, a decline.',
      zh: 're-（回、退）+ cess（ced 的变体，走）+ -ion（名词后缀）→ 后退，即衰退。',
    },
    relatedWords: ['recede', 'recessive', 'proceed'],
  },
  {
    slug: 'concede',
    lemma: 'concede',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/kənˈsiːd/' },
      us: { ipa: '/kənˈsiːd/' },
    },
    definition: {
      en: 'To admit that something is true; to surrender or yield.',
      zh: '承认；让步；认输',
    },
    examples: [
      {
        en: ['After losing three games in a row, she conceded defeat.'],
        zh: ['连输三局后，她承认了失败。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'cede', type: 'root', rootSlug: 'ced' },
    ],
    morphologyNote: {
      en: 'con- ("with, completely") + cede (from ced, "go") → to go along with, to yield.',
      zh: 'con-（完全地）+ cede（源自 ced，走）→ 完全退让，即让步。',
    },
    relatedWords: ['concession', 'precede', 'succeed'],
  },
  {
    slug: 'necessary',
    lemma: 'necessary',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈnes.ə.sər.i/' },
      us: { ipa: '/ˈnes.ə.ser.i/' },
    },
    definition: {
      en: 'Required to be done or achieved; essential.',
      zh: '必要的；必需的',
    },
    examples: [
      {
        en: ['It is necessary to wear a helmet when riding a bicycle.'],
        zh: ['骑自行车时有必要戴头盔。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ne', type: 'prefix' },
      { surface: 'cess', type: 'root', rootSlug: 'ced' },
      { surface: 'ary', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ne- ("not") + cess (variant of ced, "go, yield") + -ary (adjective) → not yielding, unavoidable.',
      zh: 'ne-（不）+ cess（ced 的变体，走、让步）+ -ary（形容词后缀）→ 不可退让的，即必要的。',
    },
    relatedWords: ['necessity', 'necessitate', 'unnecessary'],
  },
  {
    slug: 'procedure',
    lemma: 'procedure',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/prəˈsiː.dʒər/' },
      us: { ipa: '/prəˈsiː.dʒɚ/' },
    },
    definition: {
      en: 'An established or official way of doing something.',
      zh: '程序；手续；步骤',
    },
    examples: [
      {
        en: ['Please follow the standard procedure when filing a complaint.'],
        zh: ['投诉时请遵循标准程序。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pro', type: 'prefix' },
      { surface: 'ced', type: 'root', rootSlug: 'ced' },
      { surface: 'ure', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pro- ("forward") + ced ("go") + -ure (noun suffix) → a way of going forward, a method.',
      zh: 'pro-（向前）+ ced（走）+ -ure（名词后缀）→ 前进的方式，即程序。',
    },
    relatedWords: ['proceed', 'process', 'precede'],
  },
];
