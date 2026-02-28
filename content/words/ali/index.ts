import type { WordEntry } from '@/types/content';

export const ALI_WORDS: WordEntry[] = [
  {
    slug: 'alien',
    lemma: 'alien',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: {
      uk: { ipa: '/ˈeɪ.li.ən/' },
      us: { ipa: '/ˈeɪ.li.ən/' },
    },
    definition: {
      en: 'Belonging to a foreign country or civilization; a foreigner or extraterrestrial being.',
      zh: '外国的；相异的；外星人',
    },
    examples: [
      {
        en: ['The customs of this country felt completely alien to her.'],
        zh: ['这个国家的风俗让她感到完全陌生。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ali', type: 'root', rootSlug: 'ali' },
      { surface: 'en', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ali ("other") + -en (adjective suffix) → of another kind, foreign.',
      zh: 'ali（其他的）+ -en（形容词后缀）→ 另一种的，即外来的。',
    },
    relatedWords: ['alienate', 'alienation', 'inalienable'],
  },
  {
    slug: 'alienate',
    lemma: 'alienate',
    partOfSpeech: ['vt.'],
    pronunciation: {
      uk: { ipa: '/ˈeɪ.li.ə.neɪt/' },
      us: { ipa: '/ˈeɪ.li.ə.neɪt/' },
    },
    definition: {
      en: 'To cause someone to feel isolated or estranged.',
      zh: '使疏远；离间',
    },
    examples: [
      {
        en: ['His rude behavior alienated many of his colleagues.'],
        zh: ['他粗鲁的行为疏远了许多同事。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ali', type: 'root', rootSlug: 'ali' },
      { surface: 'en', type: 'suffix' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ali ("other") + -en- + -ate (verb suffix) → to make someone feel like an other.',
      zh: 'ali（其他的）+ -en- + -ate（动词后缀）→ 使某人成为"他者"，即疏远。',
    },
    relatedWords: ['alien', 'alienation', 'alienated'],
  },
  {
    slug: 'alienation',
    lemma: 'alienation',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˌeɪ.li.əˈneɪ.ʃən/' },
      us: { ipa: '/ˌeɪ.li.əˈneɪ.ʃən/' },
    },
    definition: {
      en: 'The state of being isolated or estranged from a group or activity.',
      zh: '异化；疏远',
    },
    examples: [
      {
        en: ['Many workers experience a sense of alienation in large corporations.'],
        zh: ['许多工人在大公司中体验到一种疏离感。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ali', type: 'root', rootSlug: 'ali' },
      { surface: 'en', type: 'suffix' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ali ("other") + -en- + -ation (noun suffix) → the process of becoming other, estrangement.',
      zh: 'ali（其他的）+ -en- + -ation（名词后缀）→ 变成"他者"的过程，即异化。',
    },
    relatedWords: ['alien', 'alienate', 'alienated'],
  },
  {
    slug: 'inalienable',
    lemma: 'inalienable',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ɪnˈeɪ.li.ə.nə.bəl/' },
      us: { ipa: '/ɪnˈeɪ.li.ə.nə.bəl/' },
    },
    definition: {
      en: 'Unable to be taken away or transferred to another; inherent.',
      zh: '不可剥夺的；不可分割的',
    },
    examples: [
      {
        en: ['Freedom of speech is considered an inalienable right.'],
        zh: ['言论自由被视为不可剥夺的权利。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'ali', type: 'root', rootSlug: 'ali' },
      { surface: 'en', type: 'suffix' },
      { surface: 'able', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("not") + ali ("other") + -en- + -able ("can be") → cannot be made another\'s, inalienable.',
      zh: 'in-（不）+ ali（其他的）+ -en- + -able（能够）→ 不能转让给他人的，即不可剥夺的。',
    },
    relatedWords: ['alien', 'alienate', 'unalienable'],
  },
  {
    slug: 'alter',
    lemma: 'alter',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˈɔːl.tər/' },
      us: { ipa: '/ˈɑːl.tɚ/' },
    },
    definition: {
      en: 'To change or modify something.',
      zh: '改变；修改',
    },
    examples: [
      {
        en: ['The tailor altered the suit to fit perfectly.'],
        zh: ['裁缝修改了西装，使之完美合身。'],
      },
    ],
    rootBreakdown: [{ surface: 'alter', type: 'root', rootSlug: 'ali' }],
    morphologyNote: {
      en: 'From Latin alter ("other"). To make other, i.e. to change.',
      zh: '源自拉丁语 alter（另一个）。使之成为另一个，即改变。',
    },
    relatedWords: ['alternate', 'alternative', 'altruism'],
  },
  {
    slug: 'alternate',
    lemma: 'alternate',
    partOfSpeech: ['v.', 'adj.'],
    pronunciation: {
      uk: { ipa: '/ˈɒl.tə.neɪt/' },
      us: { ipa: '/ˈɑːl.tɚ.neɪt/' },
    },
    definition: {
      en: 'To occur in turns; every other one in a series.',
      zh: '交替；轮流；交替的',
    },
    examples: [
      {
        en: ['The two teams alternate between offense and defense.'],
        zh: ['两支队伍在进攻和防守之间交替。'],
      },
    ],
    rootBreakdown: [
      { surface: 'alter', type: 'root', rootSlug: 'ali' },
      { surface: 'n', type: 'connector' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'alter ("other") + -n- + -ate (verb suffix) → to change to the other, take turns.',
      zh: 'alter（另一个）+ -n- + -ate（动词后缀）→ 转换到另一个，即轮流。',
    },
    relatedWords: ['alter', 'alternative', 'altruism'],
  },
  {
    slug: 'alternative',
    lemma: 'alternative',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: {
      uk: { ipa: '/ɒlˈtɜː.nə.tɪv/' },
      us: { ipa: '/ɑːlˈtɝː.nə.t̬ɪv/' },
    },
    definition: {
      en: 'Available as another choice; one of two or more possibilities.',
      zh: '可替代的；备选的；替代方案',
    },
    examples: [
      {
        en: ['We should explore alternative energy sources.'],
        zh: ['我们应该探索替代能源。'],
      },
    ],
    rootBreakdown: [
      { surface: 'alter', type: 'root', rootSlug: 'ali' },
      { surface: 'n', type: 'connector' },
      { surface: 'ative', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'alter ("other") + -n- + -ative (adjective suffix) → offering another option.',
      zh: 'alter（另一个）+ -n- + -ative（形容词后缀）→ 提供另一种选择的。',
    },
    relatedWords: ['alter', 'alternate', 'alien'],
  },
  {
    slug: 'altruism',
    lemma: 'altruism',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈæl.tru.ɪ.zəm/' },
      us: { ipa: '/ˈæl.tru.ɪ.zəm/' },
    },
    definition: {
      en: 'Selfless concern for the well-being of others.',
      zh: '利他主义；无私',
    },
    examples: [
      {
        en: ['Her altruism inspired others to volunteer at the shelter.'],
        zh: ['她的无私精神激励了其他人到收容所做志愿者。'],
      },
    ],
    rootBreakdown: [
      { surface: 'altru', type: 'root', rootSlug: 'ali' },
      { surface: 'ism', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'altru- (from Latin alter, "other") + -ism (doctrine) → the principle of caring for others.',
      zh: 'altru-（源自拉丁语 alter，另一个）+ -ism（主义）→ 关心他人的原则。',
    },
    relatedWords: ['altruistic', 'alter', 'alien'],
  },
  {
    slug: 'alias',
    lemma: 'alias',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈeɪ.li.əs/' },
      us: { ipa: '/ˈeɪ.li.əs/' },
    },
    definition: {
      en: 'A false or assumed name.',
      zh: '别名；化名',
    },
    examples: [
      {
        en: ['The spy operated under an alias to avoid detection.'],
        zh: ['间谍使用化名以避免被发现。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ali', type: 'root', rootSlug: 'ali' },
      { surface: 'as', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ali ("other") + -as (Latin ending) → "otherwise called", another name.',
      zh: 'ali（其他的）+ -as（拉丁语词尾）→ "另外被称为"，即别名。',
    },
    relatedWords: ['alien', 'alibi', 'alter'],
  },
  {
    slug: 'alibi',
    lemma: 'alibi',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈæl.ɪ.baɪ/' },
      us: { ipa: '/ˈæl.ɪ.baɪ/' },
    },
    definition: {
      en: 'A claim of having been elsewhere when a crime was committed; an excuse.',
      zh: '不在场证明；借口',
    },
    examples: [
      {
        en: ['The suspect provided a solid alibi for the night of the crime.'],
        zh: ['嫌疑人为案发当晚提供了可靠的不在场证明。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ali', type: 'root', rootSlug: 'ali' },
      { surface: 'bi', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ali ("other") + -bi ("place", from Latin) → "in another place", an alibi.',
      zh: 'ali（其他的）+ -bi（地方，源自拉丁语）→ "在另一个地方"，即不在场证明。',
    },
    relatedWords: ['alias', 'alien', 'alter'],
  },
  {
    slug: 'allergy',
    lemma: 'allergy',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈæl.ə.dʒi/' },
      us: { ipa: '/ˈæl.ɚ.dʒi/' },
    },
    definition: {
      en: 'An abnormal immune reaction to a typically harmless substance.',
      zh: '过敏症',
    },
    examples: [
      {
        en: ['He has a severe allergy to peanuts.'],
        zh: ['他对花生严重过敏。'],
      },
    ],
    rootBreakdown: [
      { surface: 'all', type: 'root', rootSlug: 'ali' },
      { surface: 'erg', type: 'root' },
      { surface: 'y', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'all- (from Greek allos, "other") + erg ("work, reaction") + -y (noun) → an "other" reaction by the body.',
      zh: 'all-（源自希腊语 allos，其他的）+ erg（反应）+ -y（名词后缀）→ 身体的"异常"反应。',
    },
    relatedWords: ['allergic', 'allergen', 'alien'],
  },
  {
    slug: 'ally',
    lemma: 'ally',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈæl.aɪ/' },
      us: { ipa: '/ˈæl.aɪ/' },
    },
    definition: {
      en: 'A person or nation united with another for a common purpose; to combine resources.',
      zh: '盟友；同盟国；结盟',
    },
    examples: [
      {
        en: ['The two countries became allies during the war.'],
        zh: ['两国在战争期间成为了盟友。'],
      },
    ],
    rootBreakdown: [
      { surface: 'al', type: 'prefix' },
      { surface: 'ly', type: 'root', rootSlug: 'ali' },
    ],
    morphologyNote: {
      en: 'al- (from Latin ad-, "to") + -ly (from ligare via ali, "bind to another") → to bind together, an ally.',
      zh: 'al-（源自拉丁语 ad-，向）+ -ly（源自 ligare 经 ali，绑向他人）→ 联合在一起，即盟友。',
    },
    relatedWords: ['alliance', 'rally', 'alien'],
  },
  {
    slug: 'alliance',
    lemma: 'alliance',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/əˈlaɪ.əns/' },
      us: { ipa: '/əˈlaɪ.əns/' },
    },
    definition: {
      en: 'A union or association formed for mutual benefit.',
      zh: '联盟；同盟',
    },
    examples: [
      {
        en: ['NATO is a military alliance of Western nations.'],
        zh: ['北约是西方国家的军事联盟。'],
      },
    ],
    rootBreakdown: [
      { surface: 'al', type: 'prefix' },
      { surface: 'li', type: 'root', rootSlug: 'ali' },
      { surface: 'ance', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'al- ("to") + li (from ali, "other/bind") + -ance (noun suffix) → a binding together, alliance.',
      zh: 'al-（向）+ li（源自 ali，他者/联结）+ -ance（名词后缀）→ 联结在一起，即联盟。',
    },
    relatedWords: ['ally', 'rally', 'alien'],
  },
];
