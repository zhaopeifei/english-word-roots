import type { WordEntry } from '@/types/content';

export const CARN_WORDS: WordEntry[] = [
  {
    slug: 'carnival',
    lemma: 'carnival',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈkɑː.nɪ.vəl/' },
      us: { ipa: '/ˈkɑːr.nɪ.vəl/' },
    },
    definition: {
      en: 'A festive season with public entertainment; a travelling amusement show.',
      zh: '嘉年华；狂欢节',
    },
    examples: [
      {
        en: ['The Rio carnival attracts millions of visitors every year.'],
        zh: ['里约狂欢节每年吸引数百万游客。'],
      },
    ],
    rootBreakdown: [
      { surface: 'carn', type: 'root', rootSlug: 'carn' },
      { surface: 'i', type: 'connector' },
      { surface: 'val', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'carn ("flesh") + -i- + -val (from Latin levare, "remove") → the farewell to meat before Lent.',
      zh: 'carn（肉）+ -i- + -val（源自拉丁语 levare，移除）→ 大斋期前与肉告别的庆典。',
    },
    relatedWords: ['carnal', 'incarnate', 'carnivore'],
  },
  {
    slug: 'carnal',
    lemma: 'carnal',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈkɑː.nəl/' },
      us: { ipa: '/ˈkɑːr.nəl/' },
    },
    definition: {
      en: 'Relating to physical or bodily desires and appetites; sensual.',
      zh: '肉体的；肉欲的；世俗的',
    },
    examples: [
      {
        en: ['The novel explores carnal desires and spiritual conflicts.'],
        zh: ['这部小说探讨了肉欲与精神冲突。'],
      },
    ],
    rootBreakdown: [
      { surface: 'carn', type: 'root', rootSlug: 'carn' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'carn ("flesh") + -al (adjective suffix) → of the flesh, bodily.',
      zh: 'carn（肉）+ -al（形容词后缀）→ 属于肉体的。',
    },
    relatedWords: ['carnival', 'incarnate', 'carnage'],
  },
  {
    slug: 'incarnate',
    lemma: 'incarnate',
    partOfSpeech: ['adj.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ɪnˈkɑː.nət/' },
      us: { ipa: '/ɪnˈkɑːr.nət/' },
    },
    definition: {
      en: 'Embodied in flesh, especially in human form; to embody or represent in a tangible form.',
      zh: '化身的；具体化的；使具体化',
    },
    examples: [
      {
        en: ['He seemed to be evil incarnate in his ruthless pursuit of power.'],
        zh: ['他在无情追逐权力时似乎是邪恶的化身。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'carn', type: 'root', rootSlug: 'carn' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("in, into") + carn ("flesh") + -ate (adjective/verb) → put into flesh, embodied.',
      zh: 'in-（进入）+ carn（肉）+ -ate（形容词/动词后缀）→ 进入肉体，即化身的。',
    },
    relatedWords: ['incarnation', 'reincarnate', 'carnal'],
  },
  {
    slug: 'reincarnate',
    lemma: 'reincarnate',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˌriː.ɪnˈkɑː.neɪt/' },
      us: { ipa: '/ˌriː.ɪnˈkɑːr.neɪt/' },
    },
    definition: {
      en: 'To be born again in another body after death.',
      zh: '使转世；使轮回',
    },
    examples: [
      {
        en: ['In some belief systems, the soul is reincarnated after death.'],
        zh: ['在某些信仰体系中，灵魂在死后会转世。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'in', type: 'prefix' },
      { surface: 'carn', type: 'root', rootSlug: 'carn' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("again") + in- ("into") + carn ("flesh") + -ate (verb) → to enter into flesh again, reborn.',
      zh: 're-（再次）+ in-（进入）+ carn（肉）+ -ate（动词后缀）→ 再次进入肉体，即转世。',
    },
    relatedWords: ['incarnate', 'reincarnation', 'carnal'],
  },
  {
    slug: 'carnivore',
    lemma: 'carnivore',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈkɑː.nɪ.vɔːr/' },
      us: { ipa: '/ˈkɑːr.nɪ.vɔːr/' },
    },
    definition: {
      en: 'An animal that feeds on flesh.',
      zh: '食肉动物',
    },
    examples: [
      {
        en: ['Lions are apex carnivores in the African savanna.'],
        zh: ['狮子是非洲大草原上的顶级食肉动物。'],
      },
    ],
    rootBreakdown: [
      { surface: 'carn', type: 'root', rootSlug: 'carn' },
      { surface: 'i', type: 'connector' },
      { surface: 'vore', type: 'root' },
    ],
    morphologyNote: {
      en: 'carn ("flesh") + -i- + vore ("devour") → one that devours flesh.',
      zh: 'carn（肉）+ -i- + vore（吞食）→ 吞食肉类的动物。',
    },
    relatedWords: ['carnivorous', 'herbivore', 'omnivore'],
  },
  {
    slug: 'carnivorous',
    lemma: 'carnivorous',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/kɑːˈnɪv.ər.əs/' },
      us: { ipa: '/kɑːrˈnɪv.ɚ.əs/' },
    },
    definition: {
      en: 'Feeding on animal flesh; meat-eating.',
      zh: '食肉的；肉食性的',
    },
    examples: [
      {
        en: ['Some carnivorous plants trap insects for nutrients.'],
        zh: ['一些食肉植物捕捉昆虫以获取营养。'],
      },
    ],
    rootBreakdown: [
      { surface: 'carn', type: 'root', rootSlug: 'carn' },
      { surface: 'i', type: 'connector' },
      { surface: 'vor', type: 'root' },
      { surface: 'ous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'carn ("flesh") + -i- + vor ("devour") + -ous (adjective) → flesh-devouring.',
      zh: 'carn（肉）+ -i- + vor（吞食）+ -ous（形容词后缀）→ 吞食肉的，即食肉的。',
    },
    relatedWords: ['carnivore', 'herbivorous', 'omnivorous'],
  },
  {
    slug: 'carnage',
    lemma: 'carnage',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈkɑː.nɪdʒ/' },
      us: { ipa: '/ˈkɑːr.nɪdʒ/' },
    },
    definition: {
      en: 'The killing of a large number of people; slaughter.',
      zh: '大屠杀；残杀',
    },
    examples: [
      {
        en: ['The battle resulted in terrible carnage on both sides.'],
        zh: ['这场战斗导致双方都遭受了可怕的杀戮。'],
      },
    ],
    rootBreakdown: [
      { surface: 'carn', type: 'root', rootSlug: 'carn' },
      { surface: 'age', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'carn ("flesh") + -age (noun suffix) → a great destruction of flesh, slaughter.',
      zh: 'carn（肉）+ -age（名词后缀）→ 肉体的大规模毁灭，即屠杀。',
    },
    relatedWords: ['carnal', 'carnivore', 'incarnate'],
  },
  {
    slug: 'herbivore',
    lemma: 'herbivore',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈhɜː.bɪ.vɔːr/' },
      us: { ipa: '/ˈhɝː.bɪ.vɔːr/' },
    },
    definition: {
      en: 'An animal that feeds on plants.',
      zh: '食草动物',
    },
    examples: [
      {
        en: ['Elephants are the largest land herbivores on Earth.'],
        zh: ['大象是地球上最大的陆地食草动物。'],
      },
    ],
    rootBreakdown: [
      { surface: 'herb', type: 'root' },
      { surface: 'i', type: 'connector' },
      { surface: 'vore', type: 'root' },
    ],
    morphologyNote: {
      en: 'herb ("grass, plant") + -i- + vore ("devour") → one that devours plants.',
      zh: 'herb（草、植物）+ -i- + vore（吞食）→ 吞食植物的动物。',
    },
    relatedWords: ['carnivore', 'omnivore', 'herbivorous'],
  },
  {
    slug: 'omnivore',
    lemma: 'omnivore',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈɒm.nɪ.vɔːr/' },
      us: { ipa: '/ˈɑːm.nɪ.vɔːr/' },
    },
    definition: {
      en: 'An animal or person that eats both plants and animal flesh.',
      zh: '杂食动物',
    },
    examples: [
      {
        en: ['Humans are omnivores, capable of eating a wide variety of foods.'],
        zh: ['人类是杂食动物，能够吃各种各样的食物。'],
      },
    ],
    rootBreakdown: [
      { surface: 'omni', type: 'prefix' },
      { surface: 'vore', type: 'root' },
    ],
    morphologyNote: {
      en: 'omni ("all") + vore ("devour") → one that devours all kinds of food.',
      zh: 'omni（全部）+ vore（吞食）→ 吞食所有种类食物的，即杂食动物。',
    },
    relatedWords: ['carnivore', 'herbivore', 'voracious'],
  },
  {
    slug: 'carnation',
    lemma: 'carnation',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/kɑːˈneɪ.ʃən/' },
      us: { ipa: '/kɑːrˈneɪ.ʃən/' },
    },
    definition: {
      en: 'A cultivated plant with sweet-smelling pink, white, or red flowers.',
      zh: '康乃馨',
    },
    examples: [
      {
        en: ['She gave her mother a bouquet of pink carnations.'],
        zh: ['她送给母亲一束粉色康乃馨。'],
      },
    ],
    rootBreakdown: [
      { surface: 'carn', type: 'root', rootSlug: 'carn' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'carn ("flesh") + -ation (noun suffix) → flesh-colored, referring to the original pink color of the flower.',
      zh: 'carn（肉）+ -ation（名词后缀）→ 肉色的，指这种花最初的粉色。',
    },
    relatedWords: ['carnal', 'incarnate', 'carnival'],
  },
];
