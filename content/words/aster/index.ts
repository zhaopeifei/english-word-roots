import type { WordEntry } from '@/types/content';

export const ASTER_WORDS: WordEntry[] = [
  {
    slug: 'star',
    lemma: 'star',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/stɑːr/' },
      us: { ipa: '/stɑːr/' },
    },
    definition: {
      en: 'A luminous point in the night sky; a famous or talented person.',
      zh: '星；明星',
    },
    examples: [
      {
        en: ['The stars were bright on that clear winter night.'],
        zh: ['在那个晴朗的冬夜，星星格外明亮。'],
      },
    ],
    rootBreakdown: [{ surface: 'star', type: 'root', rootSlug: 'aster' }],
    morphologyNote: {
      en: 'From the root aster/star ("star"), via Germanic. The core meaning is a celestial body.',
      zh: '源自词根 aster/star（星），经日耳曼语演变。核心含义为天体。',
    },
    relatedWords: ['starry', 'disaster', 'asteroid'],
  },
  {
    slug: 'disaster',
    lemma: 'disaster',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/dɪˈzɑː.stər/' },
      us: { ipa: '/dɪˈzæs.tɚ/' },
    },
    definition: {
      en: 'A sudden event causing great damage or suffering; a catastrophe.',
      zh: '灾难；灾祸',
    },
    examples: [
      {
        en: ["The earthquake was the worst natural disaster in the country's history."],
        zh: ['这场地震是该国历史上最严重的自然灾害。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dis', type: 'prefix' },
      { surface: 'aster', type: 'root', rootSlug: 'aster' },
    ],
    morphologyNote: {
      en: 'dis- ("bad, away") + aster ("star") → an ill-starred event, a calamity.',
      zh: 'dis-（坏的、偏离）+ aster（星）→ 星象不利的事件，即灾难。',
    },
    relatedWords: ['disastrous', 'catastrophe', 'star'],
  },
  {
    slug: 'disastrous',
    lemma: 'disastrous',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/dɪˈzɑː.strəs/' },
      us: { ipa: '/dɪˈzæs.trəs/' },
    },
    definition: {
      en: 'Causing great damage or suffering; catastrophic.',
      zh: '灾难性的；损失惨重的',
    },
    examples: [
      {
        en: ['The decision had disastrous consequences for the economy.'],
        zh: ['这个决定给经济带来了灾难性的后果。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dis', type: 'prefix' },
      { surface: 'aster', type: 'root', rootSlug: 'aster' },
      { surface: 'ous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dis- ("bad") + aster ("star") + -ous (adjective) → ill-starred, catastrophic.',
      zh: 'dis-（坏的）+ aster（星）+ -ous（形容词后缀）→ 星象不好的，即灾难性的。',
    },
    relatedWords: ['disaster', 'catastrophic', 'star'],
  },
  {
    slug: 'catastrophe',
    lemma: 'catastrophe',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/kəˈtæs.trə.fi/' },
      us: { ipa: '/kəˈtæs.trə.fi/' },
    },
    definition: {
      en: 'An event causing sudden great damage or suffering; a major disaster.',
      zh: '大灾难；大祸',
    },
    examples: [
      {
        en: ['The oil spill was an environmental catastrophe.'],
        zh: ['这次石油泄漏是一场环境大灾难。'],
      },
    ],
    rootBreakdown: [
      { surface: 'cata', type: 'prefix' },
      { surface: 'strophe', type: 'root', rootSlug: 'aster' },
    ],
    morphologyNote: {
      en: 'cata- ("down") + strophe (related to aster, "star/turning") → a turning downward, a sudden calamity.',
      zh: 'cata-（向下）+ strophe（与 aster 相关，星/转向）→ 急转直下，即大灾难。',
    },
    relatedWords: ['catastrophic', 'disaster', 'cataclysm'],
  },
  {
    slug: 'astronomy',
    lemma: 'astronomy',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/əˈstrɒn.ə.mi/' },
      us: { ipa: '/əˈstrɑː.nə.mi/' },
    },
    definition: {
      en: 'The branch of science that deals with celestial objects and phenomena.',
      zh: '天文学',
    },
    examples: [
      {
        en: ['Astronomy has made remarkable progress with the new space telescope.'],
        zh: ['借助新的太空望远镜，天文学取得了显著进展。'],
      },
    ],
    rootBreakdown: [
      { surface: 'astro', type: 'root', rootSlug: 'aster' },
      { surface: 'nom', type: 'root' },
      { surface: 'y', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'astro ("star") + nom ("law, arrangement") + -y (noun) → the study of the laws of the stars.',
      zh: 'astro（星）+ nom（法则、排列）+ -y（名词后缀）→ 研究星体规律的学科。',
    },
    relatedWords: ['astronomer', 'astronomical', 'astrology'],
  },
  {
    slug: 'astronaut',
    lemma: 'astronaut',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈæs.trə.nɔːt/' },
      us: { ipa: '/ˈæs.trə.nɑːt/' },
    },
    definition: {
      en: 'A person trained to travel and work in outer space.',
      zh: '宇航员；航天员',
    },
    examples: [
      {
        en: ['The astronaut spent six months on the International Space Station.'],
        zh: ['这位宇航员在国际空间站度过了六个月。'],
      },
    ],
    rootBreakdown: [
      { surface: 'astro', type: 'root', rootSlug: 'aster' },
      { surface: 'naut', type: 'root' },
    ],
    morphologyNote: {
      en: 'astro ("star") + naut ("sailor") → a star sailor, one who travels among the stars.',
      zh: 'astro（星）+ naut（航行者）→ 星际航行者，即宇航员。',
    },
    relatedWords: ['astronomy', 'astronautics', 'astrology'],
  },
  {
    slug: 'astrology',
    lemma: 'astrology',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/əˈstrɒl.ə.dʒi/' },
      us: { ipa: '/əˈstrɑː.lə.dʒi/' },
    },
    definition: {
      en: 'The study of the supposed influence of celestial bodies on human affairs.',
      zh: '占星术；占星学',
    },
    examples: [
      {
        en: ['Some people consult astrology to guide their daily decisions.'],
        zh: ['有些人参考占星术来指导日常决定。'],
      },
    ],
    rootBreakdown: [
      { surface: 'astro', type: 'root', rootSlug: 'aster' },
      { surface: 'logy', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'astro ("star") + -logy ("study of") → the study of the stars\' influence.',
      zh: 'astro（星）+ -logy（学科）→ 研究星辰影响的学问，即占星学。',
    },
    relatedWords: ['astronomy', 'astrologer', 'asteroid'],
  },
  {
    slug: 'asteroid',
    lemma: 'asteroid',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈæs.tər.ɔɪd/' },
      us: { ipa: '/ˈæs.tɚ.ɔɪd/' },
    },
    definition: {
      en: 'A small rocky body orbiting the sun, mainly found between Mars and Jupiter.',
      zh: '小行星',
    },
    examples: [
      {
        en: ['Scientists are tracking the asteroid as it passes near Earth.'],
        zh: ['科学家们正在追踪这颗从地球附近经过的小行星。'],
      },
    ],
    rootBreakdown: [
      { surface: 'aster', type: 'root', rootSlug: 'aster' },
      { surface: 'oid', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'aster ("star") + -oid ("resembling") → star-like, a small star-like body.',
      zh: 'aster（星）+ -oid（类似的）→ 类似星星的，即小行星。',
    },
    relatedWords: ['astronomy', 'asterisk', 'star'],
  },
  {
    slug: 'asterisk',
    lemma: 'asterisk',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈæs.tər.ɪsk/' },
      us: { ipa: '/ˈæs.tɚ.ɪsk/' },
    },
    definition: {
      en: 'A star-shaped symbol (*) used in printing and writing as a reference mark.',
      zh: '星号（*）',
    },
    examples: [
      {
        en: ['Place an asterisk next to the items that are out of stock.'],
        zh: ['在缺货的商品旁边加上星号。'],
      },
    ],
    rootBreakdown: [
      { surface: 'aster', type: 'root', rootSlug: 'aster' },
      { surface: 'isk', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'aster ("star") + -isk (diminutive suffix) → a little star, the star-shaped symbol.',
      zh: 'aster（星）+ -isk（小词后缀）→ 小星星，即星号。',
    },
    relatedWords: ['asteroid', 'star', 'astronomy'],
  },
  {
    slug: 'astronomical',
    lemma: 'astronomical',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˌæs.trəˈnɒm.ɪ.kəl/' },
      us: { ipa: '/ˌæs.trəˈnɑː.mɪ.kəl/' },
    },
    definition: {
      en: 'Relating to astronomy; extremely large in amount.',
      zh: '天文学的；极其巨大的',
    },
    examples: [
      {
        en: ['The cost of the project has reached astronomical levels.'],
        zh: ['这个项目的成本已经达到了天文数字。'],
      },
    ],
    rootBreakdown: [
      { surface: 'astro', type: 'root', rootSlug: 'aster' },
      { surface: 'nom', type: 'root' },
      { surface: 'ical', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'astro ("star") + nom ("law") + -ical (adjective) → relating to the laws of the stars; figuratively, immensely large.',
      zh: 'astro（星）+ nom（法则）+ -ical（形容词后缀）→ 关于星体法则的；引申为极其巨大的。',
    },
    relatedWords: ['astronomy', 'astronomer', 'astronaut'],
  },
];
