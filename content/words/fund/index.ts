import type { WordEntry } from '@/types/content';

export const FUND_WORDS: WordEntry[] = [
  {
    slug: 'found',
    lemma: 'found',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/faʊnd/' }, us: { ipa: '/faʊnd/' } },
    definition: {
      en: 'To establish or set up an institution or organization.',
      zh: '建立；创建；创办',
    },
    examples: [{ en: ['The university was founded in 1636.'], zh: ['这所大学创建于1636年。'] }],
    rootBreakdown: [{ surface: 'found', type: 'root', rootSlug: 'fund' }],
    morphologyNote: {
      en: 'From Latin fundare ("to lay the bottom"). Fund means "bottom, base, foundation".',
      zh: '源自拉丁语 fundare（奠定基础）。fund 意为"底部、基础"。',
    },
    relatedWords: ['founder', 'foundation', 'fundamental'],
  },
  {
    slug: 'foundation',
    lemma: 'foundation',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/faʊnˈdeɪ.ʃən/' }, us: { ipa: '/faʊnˈdeɪ.ʃən/' } },
    definition: {
      en: 'The basis on which something is built; an organization established for a charitable purpose.',
      zh: '基础；地基；基金会',
    },
    examples: [
      {
        en: ['Trust is the foundation of any strong relationship.'],
        zh: ['信任是任何牢固关系的基础。'],
      },
    ],
    rootBreakdown: [
      { surface: 'found', type: 'root', rootSlug: 'fund' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'found (from fund, "base") + -ation (noun) → the act of laying a base, a foundation.',
      zh: 'found（源自 fund，基础）+ -ation（名词后缀）→ 奠定基础的行为，即基础。',
    },
    relatedWords: ['found', 'founder', 'foundational'],
  },
  {
    slug: 'fundamental',
    lemma: 'fundamental',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: { uk: { ipa: '/ˌfʌn.dəˈmen.təl/' }, us: { ipa: '/ˌfʌn.dəˈmen.t̬əl/' } },
    definition: {
      en: 'Forming a necessary base or core; of central importance.',
      zh: '基本的；根本的；基础',
    },
    examples: [{ en: ['Freedom is a fundamental human right.'], zh: ['自由是一项基本人权。'] }],
    rootBreakdown: [
      { surface: 'fund', type: 'root', rootSlug: 'fund' },
      { surface: 'a', type: 'connector' },
      { surface: 'ment', type: 'suffix' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'fund ("base, bottom") + -a- + -ment- + -al (adjective) → relating to the base, essential.',
      zh: 'fund（基础、底部）+ -a- + -ment- + -al（形容词后缀）→ 关于基础的，即根本的。',
    },
    relatedWords: ['fundamentally', 'foundation', 'found'],
  },
  {
    slug: 'profound',
    lemma: 'profound',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/prəˈfaʊnd/' }, us: { ipa: '/prəˈfaʊnd/' } },
    definition: {
      en: 'Very great or intense; having deep insight or knowledge.',
      zh: '深刻的；深远的；渊博的',
    },
    examples: [
      {
        en: ['The book had a profound impact on her worldview.'],
        zh: ['这本书对她的世界观产生了深刻的影响。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pro', type: 'prefix' },
      { surface: 'found', type: 'root', rootSlug: 'fund' },
    ],
    morphologyNote: {
      en: 'pro- ("forth, forward") + found (from fund, "bottom") → reaching to the very bottom, deep.',
      zh: 'pro-（向前）+ found（源自 fund，底部）→ 达到最底部的，即深刻的。',
    },
    relatedWords: ['profoundly', 'profundity', 'foundation'],
  },
  {
    slug: 'fund',
    lemma: 'fund',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: { uk: { ipa: '/fʌnd/' }, us: { ipa: '/fʌnd/' } },
    definition: {
      en: 'A sum of money saved or available for a purpose; to provide money for.',
      zh: '基金；资金；资助',
    },
    examples: [
      {
        en: ['The government allocated a special fund for disaster relief.'],
        zh: ['政府拨出了一笔专项基金用于救灾。'],
      },
    ],
    rootBreakdown: [{ surface: 'fund', type: 'root', rootSlug: 'fund' }],
    morphologyNote: {
      en: 'From Latin fundus ("bottom, base, estate"). Money as a financial base.',
      zh: '源自拉丁语 fundus（底部、基础、财产）。作为经济基础的金钱。',
    },
    relatedWords: ['funding', 'refund', 'fundraise'],
  },
  {
    slug: 'refund',
    lemma: 'refund',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: { uk: { ipa: '/ˈriː.fʌnd/' }, us: { ipa: '/ˈriː.fʌnd/' } },
    definition: { en: 'A repayment of a sum of money; to pay back.', zh: '退款；偿还' },
    examples: [
      {
        en: ['The store offered a full refund for the defective product.'],
        zh: ['商店为有缺陷的产品提供了全额退款。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'fund', type: 'root', rootSlug: 'fund' },
    ],
    morphologyNote: {
      en: 're- ("back") + fund ("pour, base") → to pour back, to return money.',
      zh: 're-（回）+ fund（倾倒、基础）→ 倒回去，即退款。',
    },
    relatedWords: ['fund', 'refundable', 'nonrefundable'],
  },
  {
    slug: 'confound',
    lemma: 'confound',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/kənˈfaʊnd/' }, us: { ipa: '/kənˈfaʊnd/' } },
    definition: { en: 'To cause surprise or confusion; to mix up.', zh: '使困惑；使混乱；混淆' },
    examples: [
      {
        en: ['The unexpected results confounded the researchers.'],
        zh: ['意想不到的结果使研究人员困惑。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'found', type: 'root', rootSlug: 'fund' },
    ],
    morphologyNote: {
      en: 'con- ("together") + found (from fund, "pour, mix") → to pour together, to confuse.',
      zh: 'con-（一起）+ found（源自 fund，倾倒、混合）→ 倒在一起，即混淆。',
    },
    relatedWords: ['confounded', 'profound', 'found'],
  },
  {
    slug: 'fundraise',
    lemma: 'fundraise',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ˈfʌnd.reɪz/' }, us: { ipa: '/ˈfʌnd.reɪz/' } },
    definition: {
      en: 'To collect money for a particular purpose, especially a charity.',
      zh: '筹款；募捐',
    },
    examples: [
      {
        en: ['The school organized a bake sale to fundraise for new equipment.'],
        zh: ['学校组织了一次义卖会为新设备筹款。'],
      },
    ],
    rootBreakdown: [
      { surface: 'fund', type: 'root', rootSlug: 'fund' },
      { surface: 'raise', type: 'root' },
    ],
    morphologyNote: {
      en: 'fund ("money") + raise ("to collect, lift up") → to raise funds, to collect money.',
      zh: 'fund（资金）+ raise（募集、提高）→ 募集资金，即筹款。',
    },
    relatedWords: ['fund', 'funding', 'fund-raiser'],
  },
];
