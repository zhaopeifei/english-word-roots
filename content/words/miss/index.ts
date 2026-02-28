import type { WordEntry } from '@/types/content';

export const MISS_WORDS: WordEntry[] = [
  {
    slug: 'mission',
    lemma: 'mission',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈmɪʃ.ən/' }, us: { ipa: '/ˈmɪʃ.ən/' } },
    definition: {
      en: 'An important assignment or task; a group sent to perform a specific duty.',
      zh: '使命；任务；代表团',
    },
    examples: [
      {
        en: ['The astronauts prepared for their mission to the space station.'],
        zh: ['宇航员们为前往空间站的任务做准备。'],
      },
    ],
    rootBreakdown: [
      { surface: 'miss', type: 'root', rootSlug: 'miss' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'miss ("send") + -ion (noun) → the act of sending, hence a task one is sent to do.',
      zh: 'miss（发送）+ -ion（名词后缀）→ 被派遣去做的事，即使命。',
    },
    relatedWords: ['missionary', 'missile', 'emit'],
  },
  {
    slug: 'missile',
    lemma: 'missile',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈmɪs.aɪl/' }, us: { ipa: '/ˈmɪs.əl/' } },
    definition: {
      en: 'An object or weapon that is fired or thrown at a target.',
      zh: '导弹；投射物',
    },
    examples: [
      {
        en: ['The defense system can intercept incoming missiles.'],
        zh: ['防御系统可以拦截来袭的导弹。'],
      },
    ],
    rootBreakdown: [
      { surface: 'miss', type: 'root', rootSlug: 'miss' },
      { surface: 'ile', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'miss ("send") + -ile (adj./noun) → something that can be sent, a projectile.',
      zh: 'miss（发送）+ -ile（后缀）→ 可被发射的东西，即导弹。',
    },
    relatedWords: ['mission', 'emit', 'transmit'],
  },
  {
    slug: 'admit',
    lemma: 'admit',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ədˈmɪt/' }, us: { ipa: '/ədˈmɪt/' } },
    definition: { en: 'To allow to enter; to confess or acknowledge.', zh: '承认；允许进入；接纳' },
    examples: [
      {
        en: ['He admitted that he had made a serious mistake.'],
        zh: ['他承认自己犯了一个严重的错误。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ad', type: 'prefix' },
      { surface: 'mit', type: 'root', rootSlug: 'miss' },
    ],
    morphologyNote: {
      en: 'ad- ("to") + mit (variant of miss, "send") → to send to, to let in.',
      zh: 'ad-（向）+ mit（miss 的变体，发送）→ 送入，即允许进入。',
    },
    relatedWords: ['admission', 'admittance', 'admissible'],
  },
  {
    slug: 'admission',
    lemma: 'admission',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ədˈmɪʃ.ən/' }, us: { ipa: '/ədˈmɪʃ.ən/' } },
    definition: {
      en: 'The process of being allowed to enter; a confession or acknowledgment.',
      zh: '准入；入场费；承认',
    },
    examples: [
      { en: ['Admission to the museum is free on Sundays.'], zh: ['博物馆周日免费入场。'] },
    ],
    rootBreakdown: [
      { surface: 'ad', type: 'prefix' },
      { surface: 'miss', type: 'root', rootSlug: 'miss' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ad- ("to") + miss ("send") + -ion (noun) → the act of sending to, hence entry.',
      zh: 'ad-（向）+ miss（发送）+ -ion（名词后缀）→ 送入的行为，即准入。',
    },
    relatedWords: ['admit', 'admissible'],
  },
  {
    slug: 'permit',
    lemma: 'permit',
    partOfSpeech: ['vt.', 'n.'],
    pronunciation: { uk: { ipa: '/pəˈmɪt/' }, us: { ipa: '/pɚˈmɪt/' } },
    definition: {
      en: 'To give authorization or consent; an official document granting permission.',
      zh: '允许；许可证',
    },
    examples: [
      {
        en: ['The city does not permit parking on this street after 6 PM.'],
        zh: ['该市不允许下午6点后在这条街上停车。'],
      },
    ],
    rootBreakdown: [
      { surface: 'per', type: 'prefix' },
      { surface: 'mit', type: 'root', rootSlug: 'miss' },
    ],
    morphologyNote: {
      en: 'per- ("through") + mit ("send") → to send through, to let pass.',
      zh: 'per-（通过）+ mit（发送）→ 让通过，即允许。',
    },
    relatedWords: ['permission', 'permissible', 'permissive'],
  },
  {
    slug: 'commit',
    lemma: 'commit',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/kəˈmɪt/' }, us: { ipa: '/kəˈmɪt/' } },
    definition: {
      en: 'To carry out or perpetrate; to pledge or dedicate oneself.',
      zh: '犯（罪）；承诺；委托',
    },
    examples: [
      {
        en: ['She committed herself to finishing the marathon.'],
        zh: ['她下定决心要完成马拉松。'],
      },
    ],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'mit', type: 'root', rootSlug: 'miss' },
    ],
    morphologyNote: {
      en: 'com- ("together, with") + mit ("send") → to send together, to entrust or pledge.',
      zh: 'com-（一起）+ mit（发送）→ 一起投入，即承诺或犯下。',
    },
    relatedWords: ['commitment', 'committee', 'commission'],
  },
  {
    slug: 'commission',
    lemma: 'commission',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: { uk: { ipa: '/kəˈmɪʃ.ən/' }, us: { ipa: '/kəˈmɪʃ.ən/' } },
    definition: {
      en: 'A group entrusted with authority; a fee paid for a service; to authorize.',
      zh: '委员会；佣金；委托',
    },
    examples: [
      {
        en: ['The artist received a commission to paint a mural for the library.'],
        zh: ['这位艺术家受委托为图书馆画一幅壁画。'],
      },
    ],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'miss', type: 'root', rootSlug: 'miss' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'com- ("together") + miss ("send") + -ion (noun) → sending together, an entrusted task.',
      zh: 'com-（一起）+ miss（发送）+ -ion（名词后缀）→ 共同委派，即委托。',
    },
    relatedWords: ['commit', 'committee'],
  },
  {
    slug: 'dismiss',
    lemma: 'dismiss',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/dɪsˈmɪs/' }, us: { ipa: '/dɪsˈmɪs/' } },
    definition: { en: 'To send away; to reject or disregard.', zh: '解散；解雇；驳回' },
    examples: [
      {
        en: ['The judge dismissed the case due to lack of evidence.'],
        zh: ['法官因证据不足驳回了案件。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dis', type: 'prefix' },
      { surface: 'miss', type: 'root', rootSlug: 'miss' },
    ],
    morphologyNote: {
      en: 'dis- ("away") + miss ("send") → to send away.',
      zh: 'dis-（离开）+ miss（发送）→ 遣散，即解雇或驳回。',
    },
    relatedWords: ['dismissal', 'dismissive'],
  },
  {
    slug: 'submit',
    lemma: 'submit',
    partOfSpeech: ['vt.', 'vi.'],
    pronunciation: { uk: { ipa: '/səbˈmɪt/' }, us: { ipa: '/səbˈmɪt/' } },
    definition: {
      en: 'To present for consideration; to yield to authority.',
      zh: '提交；服从；屈服',
    },
    examples: [
      {
        en: ['Please submit your application before the deadline.'],
        zh: ['请在截止日期前提交你的申请。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sub', type: 'prefix' },
      { surface: 'mit', type: 'root', rootSlug: 'miss' },
    ],
    morphologyNote: {
      en: 'sub- ("under") + mit ("send") → to send under, to yield or present.',
      zh: 'sub-（在下面）+ mit（发送）→ 从下面递送，即提交或服从。',
    },
    relatedWords: ['submission', 'submissive'],
  },
  {
    slug: 'transmit',
    lemma: 'transmit',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/trænzˈmɪt/' }, us: { ipa: '/trænzˈmɪt/' } },
    definition: {
      en: 'To send or convey from one person or place to another.',
      zh: '传输；传播；传送',
    },
    examples: [
      {
        en: ['Radio towers transmit signals across great distances.'],
        zh: ['无线电塔在远距离传输信号。'],
      },
    ],
    rootBreakdown: [
      { surface: 'trans', type: 'prefix' },
      { surface: 'mit', type: 'root', rootSlug: 'miss' },
    ],
    morphologyNote: {
      en: 'trans- ("across") + mit ("send") → to send across.',
      zh: 'trans-（跨越）+ mit（发送）→ 跨越发送，即传输。',
    },
    relatedWords: ['transmission', 'transmitter'],
  },
  {
    slug: 'omit',
    lemma: 'omit',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/əˈmɪt/' }, us: { ipa: '/oʊˈmɪt/' } },
    definition: { en: 'To leave out or exclude; to fail to do something.', zh: '省略；遗漏；忽略' },
    examples: [
      {
        en: ['She accidentally omitted several names from the guest list.'],
        zh: ['她不小心在宾客名单中遗漏了几个名字。'],
      },
    ],
    rootBreakdown: [
      { surface: 'o', type: 'prefix' },
      { surface: 'mit', type: 'root', rootSlug: 'miss' },
    ],
    morphologyNote: {
      en: 'o- (variant of ob-, "against") + mit ("send") → to send against, to let go, hence to leave out.',
      zh: 'o-（ob- 的变体，对面）+ mit（发送）→ 放过，即省略。',
    },
    relatedWords: ['omission', 'emit'],
  },
  {
    slug: 'promise',
    lemma: 'promise',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: { uk: { ipa: '/ˈprɒm.ɪs/' }, us: { ipa: '/ˈprɑː.mɪs/' } },
    definition: {
      en: 'A declaration that one will do something; potential for future success.',
      zh: '承诺；许诺；前景',
    },
    examples: [{ en: ['He made a promise to always tell the truth.'], zh: ['他承诺永远说实话。'] }],
    rootBreakdown: [
      { surface: 'pro', type: 'prefix' },
      { surface: 'miss', type: 'root', rootSlug: 'miss' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pro- ("forward") + miss ("send") → to send forth a word, hence a pledge.',
      zh: 'pro-（向前）+ miss（发送）→ 提前送出的话，即承诺。',
    },
    relatedWords: ['compromise', 'promissory'],
  },
  {
    slug: 'compromise',
    lemma: 'compromise',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: { uk: { ipa: '/ˈkɒm.prə.maɪz/' }, us: { ipa: '/ˈkɑːm.prə.maɪz/' } },
    definition: {
      en: 'An agreement reached by mutual concession; to settle by making concessions.',
      zh: '妥协；折衷；危及',
    },
    examples: [
      {
        en: ['Both sides had to compromise to reach an agreement.'],
        zh: ['双方都不得不妥协才能达成协议。'],
      },
    ],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'pro', type: 'prefix' },
      { surface: 'mise', type: 'root', rootSlug: 'miss' },
    ],
    morphologyNote: {
      en: 'com- ("together") + pro- ("forward") + mise ("send") → to send promises together, to settle mutually.',
      zh: 'com-（一起）+ pro-（向前）+ mise（发送）→ 共同做出承诺，即妥协。',
    },
    relatedWords: ['promise', 'commit'],
  },
];
