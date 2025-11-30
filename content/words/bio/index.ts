import type { WordEntry } from '@/types/content';

export const BIO_WORDS: WordEntry[] = [
  {
    slug: 'biology',
    lemma: 'biology',
    pronunciation: {
      uk: { ipa: '/baɪˈɒl.ə.dʒi/' },
      us: { ipa: '/baɪˈɑː.lə.dʒi/' },
    },
    definition: {
      en: 'The scientific study of living organisms and life processes.',
      zh: '研究生物体及其生命过程的科学。',
    },
    examples: [
      {
        en: ['Biology explains how organisms grow, adapt, and interact.'],
        zh: ['生物学解释了生物如何生长、适应并相互作用。'],
      },
      {
        en: ['She decided to major in biology to study marine ecosystems.'],
        zh: ['她决定主修生物学，以研究海洋生态系统。'],
      },
      {
        en: ['Advances in biology often lead to breakthroughs in modern medicine.'],
        zh: ['生物学的突破往往能推动现代医学的发展。'],
      },
    ],
    rootBreakdown: [
      { surface: 'bio', type: 'root', rootSlug: 'bio' },
      { surface: 'logy', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'bio ("life") + -logy ("study of") -> the study of life.',
      zh: 'bio（生命）+ -logy（学科）→ 研究生命的学科。',
    },
    relatedWords: ['biologist', 'biological', 'biotechnology'],
  },
  {
    slug: 'biologist',
    lemma: 'biologist',
    pronunciation: {
      uk: { ipa: '/baɪˈɒl.ə.dʒɪst/' },
      us: { ipa: '/baɪˈɑː.lə.dʒɪst/' },
    },
    definition: {
      en: 'A scientist who specializes in the study of living organisms.',
      zh: '专门研究生物体的科学家。',
    },
    examples: [
      {
        en: ['The biologist spent years documenting rainforest species.'],
        zh: ['这位生物学家花了数年记录雨林物种。'],
      },
      {
        en: ['Marine biologists analyze coral health to track climate change.'],
        zh: ['海洋生物学家通过分析珊瑚健康状况来追踪气候变化。'],
      },
    ],
    rootBreakdown: [
      { surface: 'bio', type: 'root', rootSlug: 'bio' },
      { surface: 'log', type: 'root' },
      { surface: 'ist', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'bio ("life") + log ("study") + -ist ("person") -> a person who studies life.',
      zh: 'bio（生命）+ log（研究）+ -ist（从事者）→ 研究生命的人。',
    },
    relatedWords: ['biology', 'biological'],
  },
  {
    slug: 'biological',
    lemma: 'biological',
    pronunciation: {
      uk: { ipa: '/ˌbaɪ.əˈlɒdʒ.ɪ.kəl/' },
      us: { ipa: '/ˌbaɪ.əˈlɑː.dʒɪ.kəl/' },
    },
    definition: {
      en: 'Relating to the processes or characteristics of living organisms.',
      zh: '与生物体过程或特征相关。',
    },
    examples: [
      {
        en: ['Biological rhythms keep our sleep cycles in sync.'],
        zh: ['生物节律保持我们的睡眠周期同步。'],
      },
      {
        en: ['The museum opened a biological exhibit on ocean life.'],
        zh: ['博物馆开放了关于海洋生命的生物展。'],
      },
    ],
    rootBreakdown: [
      { surface: 'bio', type: 'root', rootSlug: 'bio' },
      { surface: 'log', type: 'root' },
      { surface: 'ic', type: 'suffix' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'bio ("life") + log ("study") + -ical (adjectival) -> pertaining to the study of life.',
      zh: 'bio（生命）+ log（研究）+ -ical（形容词后缀）→ 关于生命研究的。',
    },
    relatedWords: ['biology', 'biologist'],
  },
  {
    slug: 'biography',
    lemma: 'biography',
    pronunciation: {
      uk: { ipa: '/baɪˈɒɡ.rə.fi/' },
      us: { ipa: '/baɪˈɑː.ɡrə.fi/' },
    },
    definition: {
      en: 'A written record that tells the life story of a person.',
      zh: '描述某人一生的文字记录。',
    },
    examples: [
      {
        en: ['The biography reveals how the artist reinvented herself.'],
        zh: ['这本传记揭示了这位艺术家如何重塑自我。'],
      },
      {
        en: ['Students compared biographies of historic explorers.'],
        zh: ['学生们比较了历史探险家的多部传记。'],
      },
    ],
    rootBreakdown: [
      { surface: 'bio', type: 'root', rootSlug: 'bio' },
      { surface: 'graph', type: 'root' },
      { surface: 'y', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'bio ("life") + graph ("write") + -y (noun) -> a writing of someone’s life.',
      zh: 'bio（生命）+ graph（书写）+ -y（名词）→ 对生命经历的书写。',
    },
    relatedWords: ['autobiography', 'biology'],
  },
  {
    slug: 'autobiography',
    lemma: 'autobiography',
    pronunciation: {
      uk: { ipa: '/ˌɔː.təʊ.baɪˈɒɡ.rə.fi/' },
      us: { ipa: '/ˌɔː.t̬oʊ.baɪˈɑː.ɡrə.fi/' },
    },
    definition: {
      en: 'A biography written by the person it is about.',
      zh: '由当事人亲自撰写的传记。',
    },
    examples: [
      {
        en: ['Her autobiography chronicles a life devoted to science.'],
        zh: ['她的自传记录了一生献身科学的经历。'],
      },
      {
        en: ['The autobiography features candid stories from his travels.'],
        zh: ['这本自传收录了他旅途中的坦率故事。'],
      },
    ],
    rootBreakdown: [
      { surface: 'auto', type: 'prefix' },
      { surface: 'bio', type: 'root', rootSlug: 'bio' },
      { surface: 'graph', type: 'root' },
      { surface: 'y', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'auto ("self") + bio ("life") + graph ("write") -> one’s self-written life story.',
      zh: 'auto（自我）+ bio（生命）+ graph（书写）→ 自己写的生命故事。',
    },
    relatedWords: ['biography', 'biology'],
  },
  {
    slug: 'biosphere',
    lemma: 'biosphere',
    pronunciation: {
      uk: { ipa: '/ˈbaɪ.əʊ.sfɪər/' },
      us: { ipa: '/ˈbaɪ.oʊ.sfɪr/' },
    },
    definition: {
      en: 'The global ecological system integrating all living beings and their environments.',
      zh: '整合所有生物及其环境的全球生态系统。',
    },
    examples: [
      {
        en: ['Satellite data reveal how the biosphere responds to drought.'],
        zh: ['卫星数据展示了生物圈如何应对干旱。'],
      },
      {
        en: ['The biosphere extends from deep oceans to the upper atmosphere.'],
        zh: ['生物圈从深海一直延伸到高层大气。'],
      },
    ],
    rootBreakdown: [
      { surface: 'bio', type: 'root', rootSlug: 'bio' },
      { surface: 'sphere', type: 'root' },
    ],
    morphologyNote: {
      en: 'bio ("life") + sphere ("ball, globe") -> the sphere where life exists.',
      zh: 'bio（生命）+ sphere（球体）→ 存在生命的球层。',
    },
    relatedWords: ['biodiversity', 'biotechnology'],
  },
  {
    slug: 'biodiversity',
    lemma: 'biodiversity',
    pronunciation: {
      uk: { ipa: '/ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/' },
      us: { ipa: '/ˌbaɪ.oʊ.daɪˈvɝː.sə.t̬i/' },
    },
    definition: {
      en: 'The variety of species and ecosystems that make up life on Earth.',
      zh: '构成地球生命体系的物种与生态系统多样性。',
    },
    examples: [
      {
        en: ['Protecting biodiversity safeguards ecosystem services.'],
        zh: ['保护生物多样性可以守护生态系统功能。'],
      },
      {
        en: ['The reef hosts incredible biodiversity despite warming seas.'],
        zh: ['尽管海水升温，这片珊瑚礁仍拥有惊人的生物多样性。'],
      },
    ],
    rootBreakdown: [
      { surface: 'bio', type: 'root', rootSlug: 'bio' },
      { surface: 'divers', type: 'root' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'bio ("life") + diversity ("variety") -> the variety found within life.',
      zh: 'bio（生命）+ diversity（多样）→ 生命内部的多样性。',
    },
    relatedWords: ['biosphere', 'biotechnology'],
  },
  {
    slug: 'biotechnology',
    lemma: 'biotechnology',
    pronunciation: {
      uk: { ipa: '/ˌbaɪ.əʊ.tekˈnɒl.ə.dʒi/' },
      us: { ipa: '/ˌbaɪ.oʊ.tekˈnɑː.lə.dʒi/' },
    },
    definition: {
      en: 'The use of living systems to create products or solve practical problems.',
      zh: '利用生物系统生产产品或解决实际问题的技术。',
    },
    examples: [
      {
        en: ['Biotechnology startups are engineering drought-resistant crops.'],
        zh: ['生物技术初创公司正在培育抗旱作物。'],
      },
      {
        en: ['Vaccines are a classic success story of biotechnology.'],
        zh: ['疫苗是生物技术的经典成功案例。'],
      },
    ],
    rootBreakdown: [
      { surface: 'bio', type: 'root', rootSlug: 'bio' },
      { surface: 'techno', type: 'root' },
      { surface: 'logy', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'bio ("life") + techno ("craft, skill") + -logy ("study") -> applying knowledge of life through technology.',
      zh: 'bio（生命）+ techno（技艺）+ -logy（学科）→ 将生命知识用于技术。',
    },
    relatedWords: ['biochemistry', 'biosphere'],
  },
  {
    slug: 'biochemistry',
    lemma: 'biochemistry',
    pronunciation: {
      uk: { ipa: '/ˌbaɪ.əʊˈkem.ɪ.stri/' },
      us: { ipa: '/ˌbaɪ.oʊˈkem.ə.stri/' },
    },
    definition: {
      en: 'The branch of science that explores the chemistry of living organisms.',
      zh: '研究生命化学过程的科学。',
    },
    examples: [
      {
        en: ['Biochemistry reveals how enzymes power metabolism.'],
        zh: ['生物化学揭示了酶如何驱动代谢。'],
      },
      {
        en: ['She is studying biochemistry to develop new diagnostics.'],
        zh: ['她学习生物化学以开发新的诊断方法。'],
      },
    ],
    rootBreakdown: [
      { surface: 'bio', type: 'root', rootSlug: 'bio' },
      { surface: 'chem', type: 'root' },
      { surface: 'istry', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'bio ("life") + chemistry -> the chemistry underlying life.',
      zh: 'bio（生命）+ chemistry（化学）→ 生命背后的化学。',
    },
    relatedWords: ['biotechnology', 'microbiology'],
  },
  {
    slug: 'microbiology',
    lemma: 'microbiology',
    pronunciation: {
      uk: { ipa: '/ˌmaɪ.krəʊ.baɪˈɒl.ə.dʒi/' },
      us: { ipa: '/ˌmaɪ.kroʊ.baɪˈɑː.lə.dʒi/' },
    },
    definition: {
      en: 'The study of microscopic organisms such as bacteria, viruses, and fungi.',
      zh: '研究细菌、病毒、真菌等微生物的学科。',
    },
    examples: [
      {
        en: ['Microbiology labs monitor pathogens circulating in cities.'],
        zh: ['微生物实验室监测城市中传播的病原体。'],
      },
      {
        en: ['Microbiology is essential for fermentation science.'],
        zh: ['微生物学对发酵科学至关重要。'],
      },
    ],
    rootBreakdown: [
      { surface: 'micro', type: 'prefix' },
      { surface: 'bio', type: 'root', rootSlug: 'bio' },
      { surface: 'logy', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'micro ("small") + bio ("life") + -logy ("study") -> the study of small life forms.',
      zh: 'micro（微小）+ bio（生命）+ -logy（学科）→ 研究微小生命体的学科。',
    },
    relatedWords: ['biology', 'biotechnology'],
  },
  {
    slug: 'symbiosis',
    lemma: 'symbiosis',
    pronunciation: {
      uk: { ipa: '/ˌsɪm.baɪˈəʊ.sɪs/' },
      us: { ipa: '/ˌsɪm.baɪˈoʊ.sɪs/' },
    },
    definition: {
      en: 'A close biological interaction between organisms of different species.',
      zh: '不同物种间紧密的生物互作关系。',
    },
    examples: [
      {
        en: ['Corals and algae live in delicate symbiosis.'],
        zh: ['珊瑚与藻类生活在精妙的共生关系中。'],
      },
      {
        en: ['Symbiosis can benefit both partners or favor only one.'],
        zh: ['共生关系可能互利，也可能只利于一方。'],
      },
    ],
    rootBreakdown: [
      { surface: 'sym', type: 'prefix' },
      { surface: 'bio', type: 'root', rootSlug: 'bio' },
      { surface: 'sis', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'sym- ("together") + bio ("life") + -sis ("state") -> a state of living together.',
      zh: 'sym-（共同）+ bio（生命）+ -sis（状态）→ 共同生活的状态。',
    },
    relatedWords: ['biodiversity', 'biosphere'],
  },
];
