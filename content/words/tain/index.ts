import type { WordEntry } from '@/types/content';

export const TAIN_WORDS: WordEntry[] = [
  {
    slug: 'contain',
    lemma: 'contain',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/kənˈteɪn/' },
      us: { ipa: '/kənˈteɪn/' },
    },
    definition: {
      en: 'To have within; to hold or enclose.',
      zh: '包含；容纳；遏制',
    },
    examples: [
      {
        en: ['The box contains all the documents you need.'],
        zh: ['箱子里装着你需要的所有文件。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'tain', type: 'root', rootSlug: 'tain' },
    ],
    morphologyNote: {
      en: 'con- ("together") + tain ("hold") → to hold together inside.',
      zh: 'con-（一起）+ tain（握持）→ 把东西握在一起，即包含。',
    },
    relatedWords: ['container', 'containment', 'retain'],
  },
  {
    slug: 'maintain',
    lemma: 'maintain',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/meɪnˈteɪn/' },
      us: { ipa: '/meɪnˈteɪn/' },
    },
    definition: {
      en: 'To keep in an existing state; to assert something is true.',
      zh: '维持；保养；坚持认为',
    },
    examples: [
      {
        en: ['Regular exercise helps maintain good health.'],
        zh: ['定期锻炼有助于保持健康。'],
      },
    ],
    rootBreakdown: [
      { surface: 'main', type: 'prefix' },
      { surface: 'tain', type: 'root', rootSlug: 'tain' },
    ],
    morphologyNote: {
      en: 'main- (from manu, "hand") + tain ("hold") → to hold in hand, i.e. to keep up.',
      zh: 'main-（源自 manu，手）+ tain（握持）→ 握在手中，即维持。',
    },
    relatedWords: ['maintenance', 'retain', 'sustain'],
  },
  {
    slug: 'obtain',
    lemma: 'obtain',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/əbˈteɪn/' },
      us: { ipa: '/əbˈteɪn/' },
    },
    definition: {
      en: 'To get or acquire something.',
      zh: '获得；取得',
    },
    examples: [
      {
        en: ['You can obtain a visa at the embassy.'],
        zh: ['你可以在大使馆获得签证。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ob', type: 'prefix' },
      { surface: 'tain', type: 'root', rootSlug: 'tain' },
    ],
    morphologyNote: {
      en: 'ob- ("toward") + tain ("hold") → to hold toward oneself, i.e. to acquire.',
      zh: 'ob-（朝向）+ tain（握持）→ 向自己抓取，即获得。',
    },
    relatedWords: ['obtainable', 'contain', 'retain'],
  },
  {
    slug: 'retain',
    lemma: 'retain',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/rɪˈteɪn/' },
      us: { ipa: '/rɪˈteɪn/' },
    },
    definition: {
      en: 'To continue to have or keep something.',
      zh: '保留；保持；留住',
    },
    examples: [
      {
        en: ['The company struggled to retain its best employees.'],
        zh: ['公司难以留住最优秀的员工。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'tain', type: 'root', rootSlug: 'tain' },
    ],
    morphologyNote: {
      en: 're- ("back") + tain ("hold") → to hold back, i.e. to keep.',
      zh: 're-（回来）+ tain（握持）→ 握住不放，即保留。',
    },
    relatedWords: ['retention', 'maintain', 'contain'],
  },
  {
    slug: 'sustain',
    lemma: 'sustain',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/səˈsteɪn/' },
      us: { ipa: '/səˈsteɪn/' },
    },
    definition: {
      en: 'To maintain or support over a long period; to endure.',
      zh: '维持；支撑；承受',
    },
    examples: [
      {
        en: ['The ecosystem cannot sustain further pollution.'],
        zh: ['生态系统无法继续承受更多的污染。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sus', type: 'prefix' },
      { surface: 'tain', type: 'root', rootSlug: 'tain' },
    ],
    morphologyNote: {
      en: 'sus- (from sub, "from below") + tain ("hold") → to hold up from below.',
      zh: 'sus-（源自 sub，从下方）+ tain（握持）→ 从下方托住，即维持、支撑。',
    },
    relatedWords: ['sustainable', 'sustainability', 'sustained'],
  },
  {
    slug: 'sustainable',
    lemma: 'sustainable',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/səˈsteɪ.nə.bəl/' },
      us: { ipa: '/səˈsteɪ.nə.bəl/' },
    },
    definition: {
      en: 'Able to be maintained at a certain rate or level; causing little environmental damage.',
      zh: '可持续的；可维持的',
    },
    examples: [
      {
        en: ['We need to develop sustainable sources of energy.'],
        zh: ['我们需要开发可持续的能源。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sus', type: 'prefix' },
      { surface: 'tain', type: 'root', rootSlug: 'tain' },
      { surface: 'able', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sustain ("hold up") + -able ("capable of") → capable of being held up over time.',
      zh: 'sustain（维持）+ -able（可…的）→ 能长期维持的。',
    },
    relatedWords: ['sustainability', 'sustain', 'unsustainable'],
  },
  {
    slug: 'attain',
    lemma: 'attain',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/əˈteɪn/' },
      us: { ipa: '/əˈteɪn/' },
    },
    definition: {
      en: 'To succeed in achieving something.',
      zh: '达到；实现；获得',
    },
    examples: [
      {
        en: ['She attained the highest score in the class.'],
        zh: ['她获得了班上的最高分。'],
      },
    ],
    rootBreakdown: [
      { surface: 'at', type: 'prefix' },
      { surface: 'tain', type: 'root', rootSlug: 'tain' },
    ],
    morphologyNote: {
      en: 'at- (from ad, "to") + tain ("hold") → to hold on to a goal, i.e. to achieve.',
      zh: 'at-（源自 ad，向）+ tain（握持）→ 抓住目标，即达到、实现。',
    },
    relatedWords: ['attainment', 'attainable', 'obtain'],
  },
  {
    slug: 'entertain',
    lemma: 'entertain',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˌen.təˈteɪn/' },
      us: { ipa: '/ˌen.t̬ɚˈteɪn/' },
    },
    definition: {
      en: 'To provide amusement; to consider an idea or suggestion.',
      zh: '娱乐；招待；考虑',
    },
    examples: [
      {
        en: ['The comedian entertained the audience for two hours.'],
        zh: ['喜剧演员让观众开心了两个小时。'],
      },
    ],
    rootBreakdown: [
      { surface: 'enter', type: 'prefix' },
      { surface: 'tain', type: 'root', rootSlug: 'tain' },
    ],
    morphologyNote: {
      en: 'enter- (from inter, "among") + tain ("hold") → to hold among, i.e. to engage attention.',
      zh: 'enter-（源自 inter，在…之间）+ tain（握持）→ 在人们之间握住注意力，即娱乐。',
    },
    relatedWords: ['entertainment', 'entertainer', 'contain'],
  },
  {
    slug: 'detain',
    lemma: 'detain',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/dɪˈteɪn/' },
      us: { ipa: '/dɪˈteɪn/' },
    },
    definition: {
      en: 'To keep someone from proceeding; to hold in custody.',
      zh: '拘留；扣押；耽搁',
    },
    examples: [
      {
        en: ['Police detained the suspect for questioning.'],
        zh: ['警方拘留了嫌疑人进行审问。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'tain', type: 'root', rootSlug: 'tain' },
    ],
    morphologyNote: {
      en: 'de- ("away, down") + tain ("hold") → to hold someone down or away.',
      zh: 'de-（向下、离开）+ tain（握持）→ 扣住不放，即拘留。',
    },
    relatedWords: ['detainment', 'retain', 'contain'],
  },
  {
    slug: 'continue',
    lemma: 'continue',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/kənˈtɪn.juː/' },
      us: { ipa: '/kənˈtɪn.juː/' },
    },
    definition: {
      en: 'To persist in an activity or process; to keep going.',
      zh: '继续；持续；延伸',
    },
    examples: [
      {
        en: ['The rain is expected to continue throughout the week.'],
        zh: ['预计整周都将持续下雨。'],
      },
    ],
    rootBreakdown: [
      { surface: 'con', type: 'prefix' },
      { surface: 'tin', type: 'root', rootSlug: 'tain' },
      { surface: 'ue', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'con- ("together") + tin (from tain, "hold") + -ue → to hold together without stopping.',
      zh: 'con-（一起）+ tin（源自 tain，握持）+ -ue → 持续握住不放，即继续。',
    },
    relatedWords: ['continuous', 'continuity', 'discontinue'],
  },
  {
    slug: 'tenacious',
    lemma: 'tenacious',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/tɪˈneɪ.ʃəs/' },
      us: { ipa: '/tɪˈneɪ.ʃəs/' },
    },
    definition: {
      en: 'Holding firmly to something; persistent and determined.',
      zh: '坚韧的；顽强的；执着的',
    },
    examples: [
      {
        en: ['Her tenacious spirit helped her overcome every obstacle.'],
        zh: ['她坚韧的精神帮助她克服了每一个障碍。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ten', type: 'root', rootSlug: 'tain' },
      { surface: 'acious', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ten (from tain, "hold") + -acious (adj.) → holding on tightly, i.e. persistent.',
      zh: 'ten（源自 tain，握持）+ -acious（形容词后缀）→ 紧紧握住的，即顽强的。',
    },
    relatedWords: ['tenacity', 'maintain', 'retain'],
  },
  {
    slug: 'abstain',
    lemma: 'abstain',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/əbˈsteɪn/' },
      us: { ipa: '/əbˈsteɪn/' },
    },
    definition: {
      en: 'To restrain oneself from doing or enjoying something.',
      zh: '戒除；弃权；克制',
    },
    examples: [
      {
        en: ['Three members abstained from the vote.'],
        zh: ['三名成员在投票中弃权。'],
      },
    ],
    rootBreakdown: [
      { surface: 'abs', type: 'prefix' },
      { surface: 'tain', type: 'root', rootSlug: 'tain' },
    ],
    morphologyNote: {
      en: 'abs- ("away from") + tain ("hold") → to hold oneself away from.',
      zh: 'abs-（远离）+ tain（握持）→ 把自己握离，即戒除、弃权。',
    },
    relatedWords: ['abstention', 'abstinence', 'contain'],
  },
];
