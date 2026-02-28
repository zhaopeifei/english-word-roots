import type { WordEntry } from '@/types/content';

export const LUD_WORDS: WordEntry[] = [
  {
    slug: 'illusion',
    lemma: 'illusion',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ɪˈluː.ʒən/' }, us: { ipa: '/ɪˈluː.ʒən/' } },
    definition: {
      en: 'A false idea or belief; a deceptive appearance or impression.',
      zh: '幻觉；错觉；假象',
    },
    examples: [
      {
        en: ['The magician created the illusion of a woman floating in the air.'],
        zh: ['魔术师制造了一个女人漂浮在空中的幻觉。'],
      },
    ],
    rootBreakdown: [
      { surface: 'il', type: 'prefix' },
      { surface: 'lus', type: 'root', rootSlug: 'lud' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'il- (variant of in-, "at, upon") + lus (variant of lud, "play") + -ion (noun) → a playing upon the mind, hence a false perception.',
      zh: 'il-（in- 的变体，在…上）+ lus（lud 的变体，游戏）+ -ion（名词后缀）→ 在心上玩弄，即幻觉。',
    },
    relatedWords: ['illusionist', 'disillusion', 'illusive'],
  },
  {
    slug: 'disillusion',
    lemma: 'disillusion',
    partOfSpeech: ['vt.', 'n.'],
    pronunciation: { uk: { ipa: '/ˌdɪs.ɪˈluː.ʒən/' }, us: { ipa: '/ˌdɪs.ɪˈluː.ʒən/' } },
    definition: {
      en: 'To free from illusion or false belief; disappointment resulting from the discovery of truth.',
      zh: '使醒悟；使幻灭',
    },
    examples: [
      {
        en: ['She was disillusioned when she discovered the truth about the company.'],
        zh: ['当她发现公司的真相时，她的幻想破灭了。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dis', type: 'prefix' },
      { surface: 'il', type: 'prefix' },
      { surface: 'lus', type: 'root', rootSlug: 'lud' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dis- ("away") + illusion ("false belief") → to take away illusions, to cause to see reality.',
      zh: 'dis-（去除）+ illusion（幻觉）→ 消除幻觉，即使醒悟。',
    },
    relatedWords: ['disillusionment', 'illusion'],
  },
  {
    slug: 'delude',
    lemma: 'delude',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/dɪˈluːd/' }, us: { ipa: '/dɪˈluːd/' } },
    definition: { en: 'To mislead the mind; to deceive.', zh: '欺骗；哄骗；使产生错觉' },
    examples: [
      {
        en: ["Don't delude yourself into thinking the problem will disappear."],
        zh: ['不要自欺欺人地认为问题会自行消失。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'lude', type: 'root', rootSlug: 'lud' },
    ],
    morphologyNote: {
      en: 'de- ("away, from") + lude ("play") → to play away from truth, hence to deceive.',
      zh: 'de-（偏离）+ lude（游戏）→ 远离真相地玩弄，即欺骗。',
    },
    relatedWords: ['delusion', 'delusive'],
  },
  {
    slug: 'delusion',
    lemma: 'delusion',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/dɪˈluː.ʒən/' }, us: { ipa: '/dɪˈluː.ʒən/' } },
    definition: {
      en: 'A false belief or opinion; a persistent mistaken understanding of reality.',
      zh: '妄想；错觉；欺骗',
    },
    examples: [
      {
        en: ['He suffers from the delusion that everyone is against him.'],
        zh: ['他患有一种妄想症，认为所有人都在反对他。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'lus', type: 'root', rootSlug: 'lud' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'de- ("away") + lus (variant of lud, "play") + -ion (noun) → a playing away from reality.',
      zh: 'de-（偏离）+ lus（lud 的变体，游戏）+ -ion（名词后缀）→ 远离现实的游戏，即错觉。',
    },
    relatedWords: ['delude', 'delusive', 'illusion'],
  },
  {
    slug: 'elusive',
    lemma: 'elusive',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ɪˈluː.sɪv/' }, us: { ipa: '/ɪˈluː.sɪv/' } },
    definition: {
      en: 'Difficult to find, catch, or achieve; hard to recall.',
      zh: '难以捉摸的；逃避的；不易记住的',
    },
    examples: [
      {
        en: ['The elusive criminal managed to escape once again.'],
        zh: ['这个难以捉摸的罪犯再次设法逃脱了。'],
      },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'lus', type: 'root', rootSlug: 'lud' },
      { surface: 'ive', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'e- ("out") + lus (variant of lud, "play") + -ive (adj.) → playing out of reach, hard to grasp.',
      zh: 'e-（出）+ lus（lud 的变体，游戏）+ -ive（形容词后缀）→ 跑出抓取范围之外的，即难以捉摸的。',
    },
    relatedWords: ['elusion', 'illusion', 'delude'],
  },
  {
    slug: 'collude',
    lemma: 'collude',
    partOfSpeech: ['vi.'],
    pronunciation: { uk: { ipa: '/kəˈluːd/' }, us: { ipa: '/kəˈluːd/' } },
    definition: {
      en: 'To secretly agree with someone to do something dishonest or illegal.',
      zh: '密谋；勾结；串通',
    },
    examples: [
      {
        en: ['The two companies were accused of colluding to fix prices.'],
        zh: ['两家公司被指控串通定价。'],
      },
    ],
    rootBreakdown: [
      { surface: 'col', type: 'prefix' },
      { surface: 'lude', type: 'root', rootSlug: 'lud' },
    ],
    morphologyNote: {
      en: 'col- (variant of con-, "together") + lude ("play") → to play together secretly, to conspire.',
      zh: 'col-（con- 的变体，一起）+ lude（游戏）→ 秘密地一起玩，即串通。',
    },
    relatedWords: ['collusion', 'collusive'],
  },
  {
    slug: 'prelude',
    lemma: 'prelude',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈprel.juːd/' }, us: { ipa: '/ˈprel.juːd/' } },
    definition: {
      en: 'An introduction or preliminary performance; something that precedes a main event.',
      zh: '序曲；前奏；开端',
    },
    examples: [
      {
        en: ['The meeting was just a prelude to the real negotiations.'],
        zh: ['这次会议只是正式谈判的序曲。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pre', type: 'prefix' },
      { surface: 'lude', type: 'root', rootSlug: 'lud' },
    ],
    morphologyNote: {
      en: 'pre- ("before") + lude ("play") → to play before, an opening performance.',
      zh: 'pre-（在…之前）+ lude（游戏、演奏）→ 在前面演奏的，即序曲。',
    },
    relatedWords: ['interlude', 'postlude'],
  },
  {
    slug: 'interlude',
    lemma: 'interlude',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈɪn.tə.luːd/' }, us: { ipa: '/ˈɪn.tɚ.luːd/' } },
    definition: {
      en: 'A pause between the acts of a play; an intervening period of time.',
      zh: '插曲；幕间休息；间奏',
    },
    examples: [
      {
        en: ['There was a brief musical interlude between the speeches.'],
        zh: ['演讲之间有一段简短的音乐插曲。'],
      },
    ],
    rootBreakdown: [
      { surface: 'inter', type: 'prefix' },
      { surface: 'lude', type: 'root', rootSlug: 'lud' },
    ],
    morphologyNote: {
      en: 'inter- ("between") + lude ("play") → a performance played between, an intermission.',
      zh: 'inter-（在…之间）+ lude（游戏、演奏）→ 在中间演奏的，即插曲。',
    },
    relatedWords: ['prelude', 'postlude'],
  },
  {
    slug: 'ludicrous',
    lemma: 'ludicrous',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈluː.dɪ.krəs/' }, us: { ipa: '/ˈluː.dɪ.krəs/' } },
    definition: {
      en: 'So foolish, unreasonable, or out of place as to be amusing; ridiculous.',
      zh: '荒谬的；可笑的；滑稽的',
    },
    examples: [
      {
        en: ['The idea of building a bridge to the moon is ludicrous.'],
        zh: ['建一座通往月球的桥的想法太荒谬了。'],
      },
    ],
    rootBreakdown: [
      { surface: 'lud', type: 'root', rootSlug: 'lud' },
      { surface: 'icr', type: 'other' },
      { surface: 'ous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'lud ("play, game") + -icrous (adj.) → playful to the point of absurdity, laughable.',
      zh: 'lud（游戏）+ -icrous（形容词后缀）→ 游戏般荒唐的，即可笑的。',
    },
    relatedWords: ['ridiculous', 'delude', 'illusion'],
  },
  {
    slug: 'collusion',
    lemma: 'collusion',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/kəˈluː.ʒən/' }, us: { ipa: '/kəˈluː.ʒən/' } },
    definition: {
      en: 'Secret or illegal cooperation or conspiracy, especially to deceive others.',
      zh: '共谋；勾结；串通',
    },
    examples: [
      {
        en: ['There was evidence of collusion between the officials and the contractors.'],
        zh: ['有证据表明官员和承包商之间存在勾结。'],
      },
    ],
    rootBreakdown: [
      { surface: 'col', type: 'prefix' },
      { surface: 'lus', type: 'root', rootSlug: 'lud' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'col- ("together") + lus (variant of lud, "play") + -ion (noun) → a playing together, secret conspiracy.',
      zh: 'col-（一起）+ lus（lud 的变体，游戏）+ -ion（名词后缀）→ 一起暗中活动，即串通。',
    },
    relatedWords: ['collude', 'collusive'],
  },
];
