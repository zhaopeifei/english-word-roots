import type { WordEntry } from '@/types/content';

export const DOM_WORDS: WordEntry[] = [
  {
    slug: 'dominate',
    lemma: 'dominate',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ˈdɒm.ɪ.neɪt/' }, us: { ipa: '/ˈdɑː.mɪ.neɪt/' } },
    definition: {
      en: 'To have a commanding influence over; to be the most important element.',
      zh: '支配；统治；占主导地位',
    },
    examples: [
      {
        en: ['Technology companies dominate the global stock market.'],
        zh: ['科技公司主导着全球股市。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dom', type: 'root', rootSlug: 'dom' },
      { surface: 'in', type: 'connector' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dom ("master, house") + -in- + -ate (verb) → to act as master, to control.',
      zh: 'dom（主人、家）+ -in- + -ate（动词后缀）→ 充当主人，即支配。',
    },
    relatedWords: ['dominant', 'dominance', 'domain'],
  },
  {
    slug: 'dominant',
    lemma: 'dominant',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈdɒm.ɪ.nənt/' }, us: { ipa: '/ˈdɑː.mɪ.nənt/' } },
    definition: {
      en: 'Having power and influence over others; most important or prevalent.',
      zh: '占主导地位的；显性的',
    },
    examples: [
      {
        en: ['English is the dominant language in international business.'],
        zh: ['英语是国际商务中占主导地位的语言。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dom', type: 'root', rootSlug: 'dom' },
      { surface: 'in', type: 'connector' },
      { surface: 'ant', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dom ("master") + -in- + -ant (adjective) → being master-like, prevailing.',
      zh: 'dom（主人）+ -in- + -ant（形容词后缀）→ 像主人一样的，即占主导的。',
    },
    relatedWords: ['dominate', 'dominance', 'predominant'],
  },
  {
    slug: 'domain',
    lemma: 'domain',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/dəˈmeɪn/' }, us: { ipa: '/doʊˈmeɪn/' } },
    definition: {
      en: 'An area of territory owned or controlled by a ruler; a sphere of activity or knowledge.',
      zh: '领域；领地；域名',
    },
    examples: [
      {
        en: ['Artificial intelligence is an expanding domain of research.'],
        zh: ['人工智能是一个不断扩展的研究领域。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dom', type: 'root', rootSlug: 'dom' },
      { surface: 'ain', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dom ("master, house") + -ain (noun suffix) → the territory of a master, a domain.',
      zh: 'dom（主人、家）+ -ain（名词后缀）→ 主人的领地，即领域。',
    },
    relatedWords: ['dominate', 'domestic', 'dome'],
  },
  {
    slug: 'domestic',
    lemma: 'domestic',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/dəˈmes.tɪk/' }, us: { ipa: '/dəˈmes.tɪk/' } },
    definition: {
      en: "Relating to the home or family; of one's own country.",
      zh: '家庭的；国内的',
    },
    examples: [
      {
        en: ['Domestic flights are generally cheaper than international ones.'],
        zh: ['国内航班通常比国际航班便宜。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dom', type: 'root', rootSlug: 'dom' },
      { surface: 'est', type: 'connector' },
      { surface: 'ic', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dom ("house, home") + -est- + -ic (adjective) → of the house, relating to home or country.',
      zh: 'dom（家、住所）+ -est- + -ic（形容词后缀）→ 属于家的，即家庭的/国内的。',
    },
    relatedWords: ['domesticate', 'domain', 'dominate'],
  },
  {
    slug: 'domesticate',
    lemma: 'domesticate',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/dəˈmes.tɪ.keɪt/' }, us: { ipa: '/dəˈmes.tɪ.keɪt/' } },
    definition: { en: 'To tame an animal and keep it as a pet or for farming.', zh: '驯化；驯养' },
    examples: [
      {
        en: ['Dogs were among the first animals to be domesticated.'],
        zh: ['狗是最早被驯化的动物之一。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dom', type: 'root', rootSlug: 'dom' },
      { surface: 'est', type: 'connector' },
      { surface: 'ic', type: 'suffix' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'domestic (from dom, "house") + -ate (verb) → to make part of the household, to tame.',
      zh: 'domestic（源自 dom，家）+ -ate（动词后缀）→ 使成为家的一部分，即驯化。',
    },
    relatedWords: ['domestic', 'domestication', 'domain'],
  },
  {
    slug: 'dome',
    lemma: 'dome',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/dəʊm/' }, us: { ipa: '/doʊm/' } },
    definition: { en: 'A rounded vault forming the roof of a building.', zh: '穹顶；圆顶' },
    examples: [
      {
        en: ['The cathedral is famous for its massive dome.'],
        zh: ['这座大教堂以其巨大的穹顶而闻名。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dom', type: 'root', rootSlug: 'dom' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dom ("house") + -e → the house of God (from Latin domus), a cathedral roof shape.',
      zh: 'dom（家、房屋）+ -e → 上帝之家（源自拉丁语 domus），指大教堂的屋顶形状。',
    },
    relatedWords: ['domain', 'domestic', 'domicile'],
  },
  {
    slug: 'kingdom',
    lemma: 'kingdom',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈkɪŋ.dəm/' }, us: { ipa: '/ˈkɪŋ.dəm/' } },
    definition: { en: 'A country ruled by a king or queen; a realm or domain.', zh: '王国；领域' },
    examples: [
      { en: ['The United Kingdom consists of four nations.'], zh: ['联合王国由四个国家组成。'] },
    ],
    rootBreakdown: [
      { surface: 'king', type: 'root' },
      { surface: 'dom', type: 'suffix', rootSlug: 'dom' },
    ],
    morphologyNote: {
      en: 'king + -dom (suffix from dom, "domain, realm") → the domain of a king.',
      zh: 'king（国王）+ -dom（源自 dom 的后缀，领域）→ 国王的领地，即王国。',
    },
    relatedWords: ['freedom', 'domain', 'dominate'],
  },
  {
    slug: 'freedom',
    lemma: 'freedom',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈfriː.dəm/' }, us: { ipa: '/ˈfriː.dəm/' } },
    definition: {
      en: 'The state of being free; the power to act, speak, or think freely.',
      zh: '自由；自主',
    },
    examples: [
      { en: ['Freedom of speech is a fundamental human right.'], zh: ['言论自由是一项基本人权。'] },
    ],
    rootBreakdown: [
      { surface: 'free', type: 'root' },
      { surface: 'dom', type: 'suffix', rootSlug: 'dom' },
    ],
    morphologyNote: {
      en: 'free + -dom (suffix from dom, "state, realm") → the state of being free.',
      zh: 'free（自由的）+ -dom（源自 dom 的后缀，状态、领域）→ 自由的状态。',
    },
    relatedWords: ['kingdom', 'domain', 'dominate'],
  },
  {
    slug: 'predominant',
    lemma: 'predominant',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/prɪˈdɒm.ɪ.nənt/' }, us: { ipa: '/prɪˈdɑː.mɪ.nənt/' } },
    definition: {
      en: 'Present as the strongest or main element; having superior strength or influence.',
      zh: '主要的；占优势的；显著的',
    },
    examples: [
      {
        en: ['Agriculture is the predominant industry in this region.'],
        zh: ['农业是该地区的主要产业。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pre', type: 'prefix' },
      { surface: 'dom', type: 'root', rootSlug: 'dom' },
      { surface: 'in', type: 'connector' },
      { surface: 'ant', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pre- ("before, above") + dom ("master") + -in- + -ant (adjective) → mastering above others, prevailing.',
      zh: 'pre-（在……之上）+ dom（主人）+ -in- + -ant（形容词后缀）→ 凌驾于他人之上的，即占优势的。',
    },
    relatedWords: ['dominate', 'dominant', 'predominantly'],
  },
  {
    slug: 'danger',
    lemma: 'danger',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈdeɪn.dʒər/' }, us: { ipa: '/ˈdeɪn.dʒɚ/' } },
    definition: {
      en: 'The possibility of suffering harm or injury; a cause of harm.',
      zh: '危险；危害',
    },
    examples: [
      { en: ['Smoking poses a serious danger to your health.'], zh: ['吸烟对健康构成严重危害。'] },
    ],
    rootBreakdown: [
      { surface: 'dan', type: 'root', rootSlug: 'dom' },
      { surface: 'ger', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dan- (from dom, "master, power") + -ger → being under someone\'s power, hence in peril.',
      zh: 'dan-（源自 dom，主人、权力）+ -ger → 处于某人的权力之下，即处于危险中。',
    },
    relatedWords: ['endanger', 'endangered', 'dominate'],
  },
];
