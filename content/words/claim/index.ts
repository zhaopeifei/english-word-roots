import type { WordEntry } from '@/types/content';

export const CLAIM_WORDS: WordEntry[] = [
  {
    slug: 'claim',
    lemma: 'claim',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: {
      uk: { ipa: '/kleɪm/' },
      us: { ipa: '/kleɪm/' },
    },
    definition: {
      en: "To state or assert something as a fact; a demand for something as one's due.",
      zh: '声称；要求；索赔',
    },
    examples: [
      {
        en: ['He claims to have invented a new type of engine.'],
        zh: ['他声称发明了一种新型发动机。'],
      },
    ],
    rootBreakdown: [{ surface: 'claim', type: 'root', rootSlug: 'claim' }],
    morphologyNote: {
      en: 'From Latin clamare ("to shout, cry out"). To call out for what is due.',
      zh: '源自拉丁语 clamare（喊叫、呼喊）。为应得之物而呼喊。',
    },
    relatedWords: ['exclaim', 'proclaim', 'acclaim'],
  },
  {
    slug: 'exclaim',
    lemma: 'exclaim',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ɪkˈskleɪm/' },
      us: { ipa: '/ɪkˈskleɪm/' },
    },
    definition: {
      en: 'To cry out suddenly in surprise, strong emotion, or pain.',
      zh: '呼喊；惊叫',
    },
    examples: [
      {
        en: ['"What a beautiful view!" she exclaimed.'],
        zh: ['"多么美丽的景色！"她惊叹道。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'claim', type: 'root', rootSlug: 'claim' },
    ],
    morphologyNote: {
      en: 'ex- ("out") + claim ("cry out") → to cry out loudly.',
      zh: 'ex-（向外）+ claim（喊叫）→ 大声呼喊，即惊叫。',
    },
    relatedWords: ['exclamation', 'claim', 'proclaim'],
  },
  {
    slug: 'exclamation',
    lemma: 'exclamation',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˌek.skləˈmeɪ.ʃən/' },
      us: { ipa: '/ˌek.skləˈmeɪ.ʃən/' },
    },
    definition: {
      en: 'A sudden cry or remark expressing surprise, pain, or emotion.',
      zh: '感叹；惊叫',
    },
    examples: [
      {
        en: ['An exclamation mark is used to express strong feeling.'],
        zh: ['感叹号用于表达强烈的情感。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'clam', type: 'root', rootSlug: 'claim' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ex- ("out") + clam (variant of claim, "cry") + -ation (noun) → the act of crying out.',
      zh: 'ex-（向外）+ clam（claim 的变体，喊叫）+ -ation（名词后缀）→ 呼喊的行为。',
    },
    relatedWords: ['exclaim', 'exclamatory', 'claim'],
  },
  {
    slug: 'proclaim',
    lemma: 'proclaim',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/prəˈkleɪm/' },
      us: { ipa: '/proʊˈkleɪm/' },
    },
    definition: {
      en: 'To announce officially or publicly.',
      zh: '宣告；宣布；声明',
    },
    examples: [
      {
        en: ['The governor proclaimed a state of emergency after the flood.'],
        zh: ['洪灾后，州长宣布进入紧急状态。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pro', type: 'prefix' },
      { surface: 'claim', type: 'root', rootSlug: 'claim' },
    ],
    morphologyNote: {
      en: 'pro- ("forth, forward") + claim ("cry out") → to cry forth publicly, to announce.',
      zh: 'pro-（向前）+ claim（喊叫）→ 向前方呼喊，即公开宣布。',
    },
    relatedWords: ['proclamation', 'claim', 'exclaim'],
  },
  {
    slug: 'acclaim',
    lemma: 'acclaim',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: {
      uk: { ipa: '/əˈkleɪm/' },
      us: { ipa: '/əˈkleɪm/' },
    },
    definition: {
      en: 'To praise enthusiastically and publicly; enthusiastic approval.',
      zh: '称赞；喝彩；赞誉',
    },
    examples: [
      {
        en: ['The film received critical acclaim from audiences worldwide.'],
        zh: ['这部电影受到了全球观众的广泛好评。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ac', type: 'prefix' },
      { surface: 'claim', type: 'root', rootSlug: 'claim' },
    ],
    morphologyNote: {
      en: 'ac- (from ad-, "to") + claim ("cry out") → to cry out toward, to praise loudly.',
      zh: 'ac-（源自 ad-，向）+ claim（喊叫）→ 向某人呼喊，即称赞。',
    },
    relatedWords: ['acclamation', 'claim', 'proclaim'],
  },
  {
    slug: 'reclaim',
    lemma: 'reclaim',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/rɪˈkleɪm/' },
      us: { ipa: '/rɪˈkleɪm/' },
    },
    definition: {
      en: 'To retrieve or recover something previously lost; to make land usable.',
      zh: '收回；开垦；回收利用',
    },
    examples: [
      {
        en: ['The city reclaimed the abandoned lot and turned it into a park.'],
        zh: ['这座城市收回了废弃的地块并将其改建为公园。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'claim', type: 'root', rootSlug: 'claim' },
    ],
    morphologyNote: {
      en: 're- ("back") + claim ("call out, demand") → to call back, to recover what was lost.',
      zh: 're-（回）+ claim（呼喊、要求）→ 呼喊要回来，即收回。',
    },
    relatedWords: ['claim', 'proclaim', 'disclaim'],
  },
  {
    slug: 'disclaim',
    lemma: 'disclaim',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/dɪsˈkleɪm/' },
      us: { ipa: '/dɪsˈkleɪm/' },
    },
    definition: {
      en: 'To deny or renounce a claim or connection with.',
      zh: '否认；放弃；拒绝承认',
    },
    examples: [
      {
        en: ['The company disclaimed any responsibility for the accident.'],
        zh: ['公司否认对事故承担任何责任。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dis', type: 'prefix' },
      { surface: 'claim', type: 'root', rootSlug: 'claim' },
    ],
    morphologyNote: {
      en: 'dis- ("away, not") + claim ("demand, call out") → to call away from, to deny a claim.',
      zh: 'dis-（否定）+ claim（要求、呼喊）→ 拒绝要求，即否认。',
    },
    relatedWords: ['claim', 'claimant', 'proclaim'],
  },
  {
    slug: 'clamour',
    lemma: 'clamour',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈklæm.ər/' },
      us: { ipa: '/ˈklæm.ɚ/' },
    },
    definition: {
      en: 'A loud and confused noise; to shout loudly.',
      zh: '喧嚷；吵闹；强烈要求',
    },
    examples: [
      {
        en: ['The crowd raised a clamour demanding justice.'],
        zh: ['人群喧嚷着要求正义。'],
      },
    ],
    rootBreakdown: [
      { surface: 'clam', type: 'root', rootSlug: 'claim' },
      { surface: 'our', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'clam (variant of claim, "cry out") + -our (noun suffix) → a loud crying out, an uproar.',
      zh: 'clam（claim 的变体，喊叫）+ -our（名词后缀）→ 大声叫喊，即喧嚷。',
    },
    relatedWords: ['clamorous', 'claim', 'exclaim'],
  },
];
