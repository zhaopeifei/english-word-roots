import type { WordEntry } from '@/types/content';

export const FAC_WORDS: WordEntry[] = [
  {
    slug: 'fact',
    lemma: 'fact',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/fækt/' }, us: { ipa: '/fækt/' } },
    definition: {
      en: 'A thing that is known to be true; reality as opposed to opinion.',
      zh: '事实；真相',
    },
    examples: [
      { en: ['It is a fact that the Earth orbits the Sun.'], zh: ['地球绕太阳运转是一个事实。'] },
    ],
    rootBreakdown: [
      { surface: 'fac', type: 'root', rootSlug: 'fac' },
      { surface: 't', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'fac ("make, do") + -t → something made/done, hence a deed or truth.',
      zh: 'fac（做、制造）+ -t → 被做出的事情，即事实。',
    },
    relatedWords: ['factor', 'factory', 'factual'],
  },
  {
    slug: 'factor',
    lemma: 'factor',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈfæk.tər/' }, us: { ipa: '/ˈfæk.tɚ/' } },
    definition: { en: 'A circumstance or element contributing to a result.', zh: '因素；要素' },
    examples: [
      {
        en: ['Diet is an important factor in maintaining good health.'],
        zh: ['饮食是保持健康的重要因素。'],
      },
    ],
    rootBreakdown: [
      { surface: 'fac', type: 'root', rootSlug: 'fac' },
      { surface: 'tor', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'fac ("make, do") + -tor (agent suffix) → one who makes/does, a contributing element.',
      zh: 'fac（做、制造）+ -tor（施事者后缀）→ 做事的人/元素，即因素。',
    },
    relatedWords: ['fact', 'factory', 'manufacture'],
  },
  {
    slug: 'factory',
    lemma: 'factory',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈfæk.tər.i/' }, us: { ipa: '/ˈfæk.tɚ.i/' } },
    definition: {
      en: 'A building or group of buildings where goods are manufactured.',
      zh: '工厂；制造厂',
    },
    examples: [
      {
        en: ['The factory produces over a million cars each year.'],
        zh: ['这座工厂每年生产超过一百万辆汽车。'],
      },
    ],
    rootBreakdown: [
      { surface: 'fac', type: 'root', rootSlug: 'fac' },
      { surface: 'tory', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'fac ("make") + -tory (place suffix) → a place where things are made.',
      zh: 'fac（制造）+ -tory（场所后缀）→ 制造东西的地方，即工厂。',
    },
    relatedWords: ['fact', 'factor', 'manufacture'],
  },
  {
    slug: 'affect',
    lemma: 'affect',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/əˈfekt/' }, us: { ipa: '/əˈfekt/' } },
    definition: { en: 'To have an influence on; to produce a change in.', zh: '影响；感动' },
    examples: [
      {
        en: ['Climate change affects ecosystems around the world.'],
        zh: ['气候变化影响着世界各地的生态系统。'],
      },
    ],
    rootBreakdown: [
      { surface: 'af', type: 'prefix' },
      { surface: 'fect', type: 'root', rootSlug: 'fac' },
    ],
    morphologyNote: {
      en: 'af- (from ad-, "to") + fect (variant of fac, "make, do") → to do something to, to influence.',
      zh: 'af-（源自 ad-，向）+ fect（fac 的变体，做）→ 对……做某事，即影响。',
    },
    relatedWords: ['affection', 'effect', 'infect'],
  },
  {
    slug: 'effect',
    lemma: 'effect',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: { uk: { ipa: '/ɪˈfekt/' }, us: { ipa: '/ɪˈfekt/' } },
    definition: {
      en: 'A change produced by an action or cause; a result.',
      zh: '效果；影响；结果',
    },
    examples: [
      {
        en: ['The new policy had a positive effect on the economy.'],
        zh: ['新政策对经济产生了积极影响。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ef', type: 'prefix' },
      { surface: 'fect', type: 'root', rootSlug: 'fac' },
    ],
    morphologyNote: {
      en: 'ef- (from ex-, "out") + fect (variant of fac, "make") → something made out, a result.',
      zh: 'ef-（源自 ex-，出）+ fect（fac 的变体，做）→ 做出来的东西，即结果。',
    },
    relatedWords: ['effective', 'affect', 'defect'],
  },
  {
    slug: 'infect',
    lemma: 'infect',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ɪnˈfekt/' }, us: { ipa: '/ɪnˈfekt/' } },
    definition: { en: 'To contaminate with a disease-causing organism.', zh: '感染；传染' },
    examples: [
      {
        en: ['The virus can infect thousands of people within days.'],
        zh: ['这种病毒可以在几天内感染数千人。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'fect', type: 'root', rootSlug: 'fac' },
    ],
    morphologyNote: {
      en: 'in- ("in, into") + fect (variant of fac, "make, do") → to make into, to contaminate.',
      zh: 'in-（进入）+ fect（fac 的变体，做）→ 做入其中，即感染。',
    },
    relatedWords: ['infection', 'infectious', 'disinfect'],
  },
  {
    slug: 'perfect',
    lemma: 'perfect',
    partOfSpeech: ['adj.', 'v.'],
    pronunciation: { uk: { ipa: '/ˈpɜː.fɪkt/' }, us: { ipa: '/ˈpɝː.fɪkt/' } },
    definition: {
      en: 'Having all the required qualities; free from any flaw; to make complete.',
      zh: '完美的；完善的；使完美',
    },
    examples: [{ en: ['Practice makes perfect.'], zh: ['熟能生巧。'] }],
    rootBreakdown: [
      { surface: 'per', type: 'prefix' },
      { surface: 'fect', type: 'root', rootSlug: 'fac' },
    ],
    morphologyNote: {
      en: 'per- ("thoroughly, completely") + fect (variant of fac, "make") → made completely, without flaw.',
      zh: 'per-（彻底地）+ fect（fac 的变体，做）→ 彻底完成的，即完美的。',
    },
    relatedWords: ['perfection', 'imperfect', 'perfectionist'],
  },
  {
    slug: 'defect',
    lemma: 'defect',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: { uk: { ipa: '/ˈdiː.fekt/' }, us: { ipa: '/ˈdiː.fekt/' } },
    definition: {
      en: 'A shortcoming or imperfection; to abandon a cause or country.',
      zh: '缺陷；缺点；叛逃',
    },
    examples: [
      {
        en: ['The product was recalled due to a manufacturing defect.'],
        zh: ['由于制造缺陷，该产品被召回。'],
      },
    ],
    rootBreakdown: [
      { surface: 'de', type: 'prefix' },
      { surface: 'fect', type: 'root', rootSlug: 'fac' },
    ],
    morphologyNote: {
      en: 'de- ("away, down") + fect (variant of fac, "make") → unmade, lacking, a flaw.',
      zh: 'de-（离开、不足）+ fect（fac 的变体，做）→ 未做好的，即缺陷。',
    },
    relatedWords: ['defective', 'perfect', 'affect'],
  },
  {
    slug: 'sufficient',
    lemma: 'sufficient',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/səˈfɪʃ.ənt/' }, us: { ipa: '/səˈfɪʃ.ənt/' } },
    definition: { en: 'Enough; adequate for the purpose.', zh: '充足的；足够的' },
    examples: [
      {
        en: ['We have sufficient evidence to proceed with the investigation.'],
        zh: ['我们有足够的证据继续调查。'],
      },
    ],
    rootBreakdown: [
      { surface: 'suf', type: 'prefix' },
      { surface: 'fic', type: 'root', rootSlug: 'fac' },
      { surface: 'ient', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'suf- (from sub-, "under, up to") + fic (variant of fac, "make") + -ient (adjective) → made up to the mark, enough.',
      zh: 'suf-（源自 sub-，向上到）+ fic（fac 的变体，做）+ -ient（形容词后缀）→ 做到标准，即足够的。',
    },
    relatedWords: ['suffice', 'insufficient', 'efficient'],
  },
  {
    slug: 'efficient',
    lemma: 'efficient',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ɪˈfɪʃ.ənt/' }, us: { ipa: '/ɪˈfɪʃ.ənt/' } },
    definition: {
      en: 'Achieving maximum productivity with minimum wasted effort.',
      zh: '高效的；有效率的',
    },
    examples: [
      {
        en: ['Electric cars are more energy efficient than gasoline vehicles.'],
        zh: ['电动汽车比燃油车更节能高效。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ef', type: 'prefix' },
      { surface: 'fic', type: 'root', rootSlug: 'fac' },
      { surface: 'ient', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ef- (from ex-, "out") + fic (variant of fac, "make") + -ient (adjective) → making things come out well, productive.',
      zh: 'ef-（源自 ex-，出）+ fic（fac 的变体，做）+ -ient（形容词后缀）→ 做出好结果的，即高效的。',
    },
    relatedWords: ['efficiency', 'inefficient', 'sufficient'],
  },
  {
    slug: 'artificial',
    lemma: 'artificial',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˌɑː.tɪˈfɪʃ.əl/' }, us: { ipa: '/ˌɑːr.t̬ɪˈfɪʃ.əl/' } },
    definition: {
      en: 'Made by humans rather than occurring naturally; not genuine.',
      zh: '人工的；人造的',
    },
    examples: [
      {
        en: ['Artificial intelligence is transforming many industries.'],
        zh: ['人工智能正在改变许多行业。'],
      },
    ],
    rootBreakdown: [
      { surface: 'arti', type: 'root' },
      { surface: 'fic', type: 'root', rootSlug: 'fac' },
      { surface: 'ial', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'arti ("skill, art") + fic (variant of fac, "make") + -ial (adjective) → made by skill/art, not natural.',
      zh: 'arti（技艺、艺术）+ fic（fac 的变体，做）+ -ial（形容词后缀）→ 用技艺制造的，即人工的。',
    },
    relatedWords: ['artifact', 'manufacture', 'fiction'],
  },
  {
    slug: 'fiction',
    lemma: 'fiction',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈfɪk.ʃən/' }, us: { ipa: '/ˈfɪk.ʃən/' } },
    definition: {
      en: 'Literature describing imaginary events and people; something invented or untrue.',
      zh: '小说；虚构；编造',
    },
    examples: [
      {
        en: ['She enjoys reading science fiction in her spare time.'],
        zh: ['她喜欢在空闲时间阅读科幻小说。'],
      },
    ],
    rootBreakdown: [
      { surface: 'fic', type: 'root', rootSlug: 'fac' },
      { surface: 'tion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'fic (variant of fac, "make") + -tion (noun) → something made up, an invention.',
      zh: 'fic（fac 的变体，做）+ -tion（名词后缀）→ 编造出来的东西，即虚构。',
    },
    relatedWords: ['fictional', 'nonfiction', 'fictitious'],
  },
  {
    slug: 'office',
    lemma: 'office',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈɒf.ɪs/' }, us: { ipa: '/ˈɑː.fɪs/' } },
    definition: {
      en: 'A room or building used for commercial or professional work; a position of authority.',
      zh: '办公室；职务',
    },
    examples: [
      { en: ['She works in an office in the city center.'], zh: ['她在市中心的一间办公室工作。'] },
    ],
    rootBreakdown: [
      { surface: 'of', type: 'prefix' },
      { surface: 'fic', type: 'root', rootSlug: 'fac' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'of- (from opus, "work") + fic (variant of fac, "make, do") → a place of doing work.',
      zh: 'of-（源自 opus，工作）+ fic（fac 的变体，做）→ 做工作的地方，即办公室。',
    },
    relatedWords: ['officer', 'official', 'officious'],
  },
  {
    slug: 'benefit',
    lemma: 'benefit',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: { uk: { ipa: '/ˈben.ɪ.fɪt/' }, us: { ipa: '/ˈben.ɪ.fɪt/' } },
    definition: { en: 'An advantage or profit; to receive an advantage.', zh: '好处；利益；受益' },
    examples: [
      { en: ['Regular exercise has many health benefits.'], zh: ['经常锻炼有许多健康益处。'] },
    ],
    rootBreakdown: [
      { surface: 'bene', type: 'prefix' },
      { surface: 'fit', type: 'root', rootSlug: 'fac' },
    ],
    morphologyNote: {
      en: 'bene- ("good, well") + fit (variant of fac, "make, do") → to do good, a good deed or advantage.',
      zh: 'bene-（好的）+ fit（fac 的变体，做）→ 做好事，即利益。',
    },
    relatedWords: ['beneficial', 'benefactor', 'beneficiary'],
  },
];
