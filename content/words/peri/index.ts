import type { WordEntry } from '@/types/content';

export const PERI_WORDS: WordEntry[] = [
  {
    slug: 'experience',
    lemma: 'experience',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: { uk: { ipa: '/ɪkˈspɪə.ri.əns/' }, us: { ipa: '/ɪkˈspɪr.i.əns/' } },
    definition: {
      en: 'Practical contact with and observation of facts or events; to encounter or undergo.',
      zh: '经验；经历；体验',
    },
    examples: [
      {
        en: ['She has ten years of experience in software engineering.'],
        zh: ['她在软件工程方面有十年的经验。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'peri', type: 'root', rootSlug: 'peri' },
      { surface: 'ence', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ex- ("out of, through") + peri ("try, attempt") + -ence (noun) → knowledge gained by trying, practical wisdom.',
      zh: 'ex-（通过）+ peri（尝试）+ -ence（名词后缀）→ 通过尝试获得的知识，即经验。',
    },
    relatedWords: ['experienced', 'experiential', 'experiment'],
  },
  {
    slug: 'experiment',
    lemma: 'experiment',
    partOfSpeech: ['n.', 'vi.'],
    pronunciation: { uk: { ipa: '/ɪkˈsper.ɪ.mənt/' }, us: { ipa: '/ɪkˈsper.ɪ.mənt/' } },
    definition: {
      en: 'A scientific procedure to test a hypothesis; to try out new ideas.',
      zh: '实验；试验',
    },
    examples: [
      {
        en: ['The scientist designed an experiment to test the new drug.'],
        zh: ['科学家设计了一项实验来测试这种新药。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'peri', type: 'root', rootSlug: 'peri' },
      { surface: 'ment', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ex- ("out, through") + peri ("try") + -ment (noun) → the act of trying out, a test.',
      zh: 'ex-（通过）+ peri（尝试）+ -ment（名词后缀）→ 尝试的行为，即实验。',
    },
    relatedWords: ['experimental', 'experimentation', 'experience'],
  },
  {
    slug: 'experimental',
    lemma: 'experimental',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ɪkˌsper.ɪˈmen.təl/' }, us: { ipa: '/ɪkˌsper.ɪˈmen.t̬əl/' } },
    definition: {
      en: 'Based on untested ideas; relating to scientific experiments.',
      zh: '实验性的；试验的',
    },
    examples: [
      {
        en: ['The treatment is still in the experimental stage.'],
        zh: ['该治疗方法仍处于实验阶段。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'peri', type: 'root', rootSlug: 'peri' },
      { surface: 'ment', type: 'other' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'experiment + -al (adj.) → relating to experiments or testing.',
      zh: 'experiment（实验）+ -al（形容词后缀）→ 与实验相关的。',
    },
    relatedWords: ['experiment', 'experimentation'],
  },
  {
    slug: 'expert',
    lemma: 'expert',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: { uk: { ipa: '/ˈek.spɜːt/' }, us: { ipa: '/ˈek.spɝːt/' } },
    definition: {
      en: 'A person with extensive knowledge or skill in a particular area; highly skilled.',
      zh: '专家；熟练的',
    },
    examples: [
      {
        en: ['She consulted a legal expert before signing the contract.'],
        zh: ['她在签合同前咨询了一位法律专家。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'per', type: 'root', rootSlug: 'peri' },
      { surface: 't', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ex- ("out of, thoroughly") + per ("try") + -t → one who has thoroughly tried, hence highly skilled.',
      zh: 'ex-（完全地）+ per（尝试）+ -t → 彻底尝试过的人，即专家。',
    },
    relatedWords: ['expertise', 'experience', 'experiment'],
  },
  {
    slug: 'expertise',
    lemma: 'expertise',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌek.spɜːˈtiːz/' }, us: { ipa: '/ˌek.spɝːˈtiːz/' } },
    definition: { en: 'Expert skill or knowledge in a particular field.', zh: '专业知识；专长' },
    examples: [
      {
        en: ['Her expertise in data science made her an invaluable team member.'],
        zh: ['她在数据科学方面的专长使她成为不可或缺的团队成员。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'per', type: 'root', rootSlug: 'peri' },
      { surface: 'tise', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'expert + -ise (noun) → the skill of an expert.',
      zh: 'expert（专家）+ -ise（名词后缀）→ 专家的技能，即专长。',
    },
    relatedWords: ['expert', 'experience'],
  },
  {
    slug: 'peril',
    lemma: 'peril',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈper.əl/' }, us: { ipa: '/ˈper.əl/' } },
    definition: { en: 'Serious and immediate danger; a risk or threat.', zh: '危险；危难' },
    examples: [
      {
        en: ['The climbers faced great peril as the storm approached.'],
        zh: ['暴风雨来临时，登山者面临着巨大的危险。'],
      },
    ],
    rootBreakdown: [
      { surface: 'peri', type: 'root', rootSlug: 'peri' },
      { surface: 'l', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'peri ("try, risk") + -l → a trial or test, hence danger.',
      zh: 'peri（尝试、冒险）+ -l → 考验，即危险。',
    },
    relatedWords: ['perilous', 'imperil'],
  },
  {
    slug: 'imperil',
    lemma: 'imperil',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ɪmˈper.əl/' }, us: { ipa: '/ɪmˈper.əl/' } },
    definition: {
      en: 'To put at risk of being harmed or destroyed; to endanger.',
      zh: '危及；使陷入危险',
    },
    examples: [
      {
        en: ['Deforestation imperils countless species of wildlife.'],
        zh: ['滥伐森林危及无数野生动物物种。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'peri', type: 'root', rootSlug: 'peri' },
      { surface: 'l', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- ("in, into") + peril ("danger") → to put into danger.',
      zh: 'im-（进入）+ peril（危险）→ 使陷入危险，即危及。',
    },
    relatedWords: ['peril', 'perilous'],
  },
  {
    slug: 'pirate',
    lemma: 'pirate',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: { uk: { ipa: '/ˈpaɪ.rət/' }, us: { ipa: '/ˈpaɪ.rət/' } },
    definition: {
      en: 'A person who attacks and robs ships at sea; to reproduce something without authorization.',
      zh: '海盗；盗版者；盗版',
    },
    examples: [
      {
        en: ['Software piracy costs the industry billions of dollars each year.'],
        zh: ['软件盗版每年给行业造成数十亿美元的损失。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pir', type: 'root', rootSlug: 'peri' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pir (variant of peri, "try, attack") + -ate (noun) → one who attempts or attacks, a sea raider.',
      zh: 'pir（peri 的变体，尝试、攻击）+ -ate（名词后缀）→ 进行攻击的人，即海盗。',
    },
    relatedWords: ['piracy', 'peril'],
  },
  {
    slug: 'experienced',
    lemma: 'experienced',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ɪkˈspɪə.ri.ənst/' }, us: { ipa: '/ɪkˈspɪr.i.ənst/' } },
    definition: {
      en: 'Having knowledge or skill gained from doing something over a period of time.',
      zh: '有经验的；老练的',
    },
    examples: [
      {
        en: ['They are looking for an experienced project manager.'],
        zh: ['他们正在寻找一位有经验的项目经理。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'peri', type: 'root', rootSlug: 'peri' },
      { surface: 'enced', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'experience + -ed (adj.) → having gained knowledge through trying.',
      zh: 'experience（经验）+ -ed（形容词后缀）→ 通过尝试获得了知识的。',
    },
    relatedWords: ['experience', 'inexperienced'],
  },
];
