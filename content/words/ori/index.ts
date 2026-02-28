import type { WordEntry } from '@/types/content';

export const ORI_WORDS: WordEntry[] = [
  {
    slug: 'origin',
    lemma: 'origin',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈɒr.ɪ.dʒɪn/' }, us: { ipa: '/ˈɔːr.ɪ.dʒɪn/' } },
    definition: {
      en: 'The point or place where something begins; ancestry or background.',
      zh: '起源；出身；原点',
    },
    examples: [
      {
        en: ["The origin of the universe remains one of science's greatest mysteries."],
        zh: ['宇宙的起源仍然是科学最大的奥秘之一。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ori', type: 'root', rootSlug: 'ori' },
      { surface: 'gin', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ori ("rise, begin") + -gin (noun) → the point of rising, where something begins.',
      zh: 'ori（升起、开始）+ -gin（名词后缀）→ 升起的地方，即起源。',
    },
    relatedWords: ['original', 'originate', 'orient'],
  },
  {
    slug: 'original',
    lemma: 'original',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: { uk: { ipa: '/əˈrɪdʒ.ɪ.nəl/' }, us: { ipa: '/əˈrɪdʒ.ɪ.nəl/' } },
    definition: {
      en: 'Present or existing from the beginning; not a copy; inventive and creative.',
      zh: '原始的；原创的；独创的',
    },
    examples: [
      {
        en: ['The painting is an original, not a reproduction.'],
        zh: ['这幅画是原作，不是复制品。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ori', type: 'root', rootSlug: 'ori' },
      { surface: 'gin', type: 'other' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ori ("begin") + -ginal (adj.) → from the beginning, first of its kind.',
      zh: 'ori（开始）+ -ginal（形容词后缀）→ 从一开始的，即原始的。',
    },
    relatedWords: ['origin', 'originality', 'originally'],
  },
  {
    slug: 'originate',
    lemma: 'originate',
    partOfSpeech: ['vt.', 'vi.'],
    pronunciation: { uk: { ipa: '/əˈrɪdʒ.ɪ.neɪt/' }, us: { ipa: '/əˈrɪdʒ.ɪ.neɪt/' } },
    definition: {
      en: "To have one's origin in a place or situation; to create or initiate.",
      zh: '起源于；发起；创造',
    },
    examples: [
      { en: ['The custom originated in medieval Europe.'], zh: ['这个习俗起源于中世纪欧洲。'] },
    ],
    rootBreakdown: [
      { surface: 'ori', type: 'root', rootSlug: 'ori' },
      { surface: 'gin', type: 'other' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ori ("begin") + -ginate (verb) → to bring into being, to start.',
      zh: 'ori（开始）+ -ginate（动词后缀）→ 使产生，即发起。',
    },
    relatedWords: ['origin', 'original'],
  },
  {
    slug: 'orient',
    lemma: 'orient',
    partOfSpeech: ['vt.', 'n.'],
    pronunciation: { uk: { ipa: '/ˈɔː.ri.ent/' }, us: { ipa: '/ˈɔːr.i.ent/' } },
    definition: {
      en: 'To align or position relative to a direction; the East.',
      zh: '使适应；确定方向；东方',
    },
    examples: [
      {
        en: ['It took her a few days to orient herself in the new city.'],
        zh: ['她花了几天时间适应新城市。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ori', type: 'root', rootSlug: 'ori' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ori ("rise") + -ent (adj./noun) → where the sun rises, the East; to face the rising sun, to find direction.',
      zh: 'ori（升起）+ -ent（后缀）→ 太阳升起的地方，即东方；面向太阳确定方向。',
    },
    relatedWords: ['orientation', 'oriental', 'disorient'],
  },
  {
    slug: 'orientation',
    lemma: 'orientation',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌɔː.ri.enˈteɪ.ʃən/' }, us: { ipa: '/ˌɔːr.i.enˈteɪ.ʃən/' } },
    definition: {
      en: "The process of adjusting to new surroundings; the direction something faces; a person's basic attitudes or beliefs.",
      zh: '方向；适应；定向',
    },
    examples: [
      {
        en: ['New employees must attend a two-day orientation program.'],
        zh: ['新员工必须参加为期两天的入职培训。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ori', type: 'root', rootSlug: 'ori' },
      { surface: 'ent', type: 'other' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ori ("rise, direction") + -entation (noun) → the act of finding direction, adjustment.',
      zh: 'ori（升起、方向）+ -entation（名词后缀）→ 确定方向的行为，即定向。',
    },
    relatedWords: ['orient', 'disorient'],
  },
  {
    slug: 'disorient',
    lemma: 'disorient',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/dɪsˈɔː.ri.ent/' }, us: { ipa: '/dɪsˈɔːr.i.ent/' } },
    definition: {
      en: 'To cause someone to lose their sense of direction; to confuse.',
      zh: '使迷失方向；使困惑',
    },
    examples: [
      {
        en: ['The thick fog disoriented the hikers on the mountain trail.'],
        zh: ['浓雾使登山者在山路上迷失了方向。'],
      },
    ],
    rootBreakdown: [
      { surface: 'dis', type: 'prefix' },
      { surface: 'ori', type: 'root', rootSlug: 'ori' },
      { surface: 'ent', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dis- ("not, away") + ori ("rise, direction") + -ent → to lose direction.',
      zh: 'dis-（不、离开）+ ori（方向）+ -ent → 失去方向，即使迷失。',
    },
    relatedWords: ['orient', 'orientation'],
  },
  {
    slug: 'aboriginal',
    lemma: 'aboriginal',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: { uk: { ipa: '/ˌæb.əˈrɪdʒ.ɪ.nəl/' }, us: { ipa: '/ˌæb.əˈrɪdʒ.ɪ.nəl/' } },
    definition: {
      en: 'Inhabiting a land from the earliest times; indigenous.',
      zh: '土著的；原住民的',
    },
    examples: [
      {
        en: ['Aboriginal art is one of the oldest forms of artistic expression on Earth.'],
        zh: ['土著艺术是地球上最古老的艺术表达形式之一。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ab', type: 'prefix' },
      { surface: 'ori', type: 'root', rootSlug: 'ori' },
      { surface: 'gin', type: 'other' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ab- ("from") + ori ("origin") + -ginal (adj.) → from the origin, existing from the beginning.',
      zh: 'ab-（从）+ ori（起源）+ -ginal（形容词后缀）→ 从起源就存在的，即土著的。',
    },
    relatedWords: ['origin', 'original'],
  },
  {
    slug: 'abort',
    lemma: 'abort',
    partOfSpeech: ['vt.', 'vi.'],
    pronunciation: { uk: { ipa: '/əˈbɔːt/' }, us: { ipa: '/əˈbɔːrt/' } },
    definition: {
      en: 'To terminate prematurely; to end a pregnancy; to call off an operation.',
      zh: '中止；流产；堕胎',
    },
    examples: [
      {
        en: ['Mission control decided to abort the launch due to bad weather.'],
        zh: ['任务控制中心因天气恶劣决定中止发射。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ab', type: 'prefix' },
      { surface: 'ort', type: 'root', rootSlug: 'ori' },
    ],
    morphologyNote: {
      en: 'ab- ("away from") + ort (variant of ori, "rise, be born") → to prevent from rising, to fail to come to fruition.',
      zh: 'ab-（偏离）+ ort（ori 的变体，升起、诞生）→ 阻止诞生，即中止。',
    },
    relatedWords: ['abortion', 'abortive'],
  },
  {
    slug: 'originality',
    lemma: 'originality',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/əˌrɪdʒ.ɪˈnæl.ɪ.ti/' }, us: { ipa: '/əˌrɪdʒ.ɪˈnæl.ə.t̬i/' } },
    definition: {
      en: 'The quality of being novel or new; the ability to think creatively.',
      zh: '独创性；新颖',
    },
    examples: [
      {
        en: ['The judges praised the originality of her design.'],
        zh: ['评委称赞了她设计的独创性。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ori', type: 'root', rootSlug: 'ori' },
      { surface: 'gin', type: 'other' },
      { surface: 'al', type: 'other' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'original + -ity (noun) → the quality of being original.',
      zh: 'original（原创的）+ -ity（名词后缀）→ 原创的品质。',
    },
    relatedWords: ['original', 'origin'],
  },
];
