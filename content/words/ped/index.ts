import type { WordEntry } from '@/types/content';

export const PED_WORDS: WordEntry[] = [
  {
    slug: 'pedal',
    lemma: 'pedal',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: { uk: { ipa: '/ˈped.əl/' }, us: { ipa: '/ˈped.əl/' } },
    definition: {
      en: 'A lever pressed by the foot to operate a mechanism; to work the pedals of a bicycle.',
      zh: '踏板；蹬；踩踏板',
    },
    examples: [
      {
        en: ['She pressed the brake pedal to slow down the car.'],
        zh: ['她踩下刹车踏板使汽车减速。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ped', type: 'root', rootSlug: 'ped' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ped ("foot") + -al (adj./noun) → relating to the foot, a foot-operated lever.',
      zh: 'ped（脚）+ -al（后缀）→ 与脚相关的，即踏板。',
    },
    relatedWords: ['pedestrian', 'biped', 'pedestal'],
  },
  {
    slug: 'pedestrian',
    lemma: 'pedestrian',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: { uk: { ipa: '/pəˈdes.tri.ən/' }, us: { ipa: '/pəˈdes.tri.ən/' } },
    definition: {
      en: 'A person walking rather than traveling by car or other vehicle; dull and uninspired.',
      zh: '行人；步行者；平淡的',
    },
    examples: [
      {
        en: ['Drivers must yield to pedestrians at crosswalks.'],
        zh: ['驾驶员必须在人行横道前礼让行人。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ped', type: 'root', rootSlug: 'ped' },
      { surface: 'estr', type: 'other' },
      { surface: 'ian', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ped ("foot") + -estrian (noun) → one who goes on foot, a walker.',
      zh: 'ped（脚）+ -estrian（名词后缀）→ 用脚走路的人，即行人。',
    },
    relatedWords: ['pedal', 'pedestal'],
  },
  {
    slug: 'pedestal',
    lemma: 'pedestal',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈped.ɪ.stəl/' }, us: { ipa: '/ˈped.ɪ.stəl/' } },
    definition: {
      en: 'A base or support on which a statue or column is mounted; a position of great respect.',
      zh: '基座；底座；崇高的地位',
    },
    examples: [
      {
        en: ['The bronze statue stands on a marble pedestal.'],
        zh: ['青铜雕像矗立在大理石底座上。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ped', type: 'root', rootSlug: 'ped' },
      { surface: 'estal', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ped ("foot") + -estal (noun) → the foot of a structure, a base.',
      zh: 'ped（脚）+ -estal（名词后缀）→ 结构的脚，即底座。',
    },
    relatedWords: ['pedal', 'pedestrian'],
  },
  {
    slug: 'biped',
    lemma: 'biped',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: { uk: { ipa: '/ˈbaɪ.ped/' }, us: { ipa: '/ˈbaɪ.ped/' } },
    definition: { en: 'An animal that walks on two feet.', zh: '两足动物' },
    examples: [
      {
        en: ['Humans are bipeds, while most other mammals walk on four legs.'],
        zh: ['人类是两足动物，而大多数其他哺乳动物用四条腿行走。'],
      },
    ],
    rootBreakdown: [
      { surface: 'bi', type: 'prefix' },
      { surface: 'ped', type: 'root', rootSlug: 'ped' },
    ],
    morphologyNote: {
      en: 'bi- ("two") + ped ("foot") → having two feet.',
      zh: 'bi-（二）+ ped（脚）→ 有两只脚的，即两足动物。',
    },
    relatedWords: ['pedal', 'tripod', 'pedestrian'],
  },
  {
    slug: 'expedite',
    lemma: 'expedite',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ˈek.spə.daɪt/' }, us: { ipa: '/ˈek.spə.daɪt/' } },
    definition: {
      en: 'To make an action or process happen sooner or more quickly.',
      zh: '加速；促进',
    },
    examples: [
      {
        en: ['We need to expedite the delivery of these supplies.'],
        zh: ['我们需要加速这些物资的运送。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'ped', type: 'root', rootSlug: 'ped' },
      { surface: 'ite', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ex- ("out") + ped ("foot") + -ite (verb) → to free the feet, to remove obstacles and speed up.',
      zh: 'ex-（出）+ ped（脚）+ -ite（动词后缀）→ 解放双脚，即加速。',
    },
    relatedWords: ['expedition', 'expedient', 'expeditious'],
  },
  {
    slug: 'expedition',
    lemma: 'expedition',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌek.spəˈdɪʃ.ən/' }, us: { ipa: '/ˌek.spəˈdɪʃ.ən/' } },
    definition: {
      en: 'A journey undertaken for a specific purpose, especially exploration.',
      zh: '远征；探险；考察',
    },
    examples: [
      {
        en: ['The team organized an expedition to climb Mount Everest.'],
        zh: ['团队组织了一次攀登珠穆朗玛峰的远征。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'ped', type: 'root', rootSlug: 'ped' },
      { surface: 'ition', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ex- ("out") + ped ("foot") + -ition (noun) → a going out on foot, a journey.',
      zh: 'ex-（出）+ ped（脚）+ -ition（名词后缀）→ 出发远行，即远征。',
    },
    relatedWords: ['expedite', 'expeditionary'],
  },
  {
    slug: 'expedient',
    lemma: 'expedient',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: { uk: { ipa: '/ɪkˈspiː.di.ənt/' }, us: { ipa: '/ɪkˈspiː.di.ənt/' } },
    definition: {
      en: 'Convenient and practical, though possibly improper or immoral; a means of attaining an end.',
      zh: '权宜的；方便的；应急手段',
    },
    examples: [
      {
        en: ['It was politically expedient to delay the announcement until after the election.'],
        zh: ['在选举后再发布公告在政治上是权宜之计。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'ped', type: 'root', rootSlug: 'ped' },
      { surface: 'ient', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ex- ("out") + ped ("foot") + -ient (adj.) → freeing the feet, hence advantageous and quick.',
      zh: 'ex-（出）+ ped（脚）+ -ient（形容词后缀）→ 解放双脚的，即方便快捷的。',
    },
    relatedWords: ['expedite', 'expediency'],
  },
  {
    slug: 'impede',
    lemma: 'impede',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ɪmˈpiːd/' }, us: { ipa: '/ɪmˈpiːd/' } },
    definition: { en: 'To delay or prevent by obstructing; to hinder.', zh: '阻碍；妨碍' },
    examples: [
      {
        en: ['Heavy traffic impeded their progress to the airport.'],
        zh: ['拥堵的交通阻碍了他们去机场的进程。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'ped', type: 'root', rootSlug: 'ped' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- ("in, on") + ped ("foot") + -e → to shackle the feet, to obstruct.',
      zh: 'im-（在…上）+ ped（脚）+ -e → 束缚双脚，即阻碍。',
    },
    relatedWords: ['impediment', 'unimpeded'],
  },
  {
    slug: 'impediment',
    lemma: 'impediment',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ɪmˈped.ɪ.mənt/' }, us: { ipa: '/ɪmˈped.ɪ.mənt/' } },
    definition: { en: 'A hindrance or obstruction; a defect in speech.', zh: '障碍；阻碍；口吃' },
    examples: [
      {
        en: ['Lack of funding was the main impediment to the project.'],
        zh: ['缺乏资金是该项目的主要障碍。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'ped', type: 'root', rootSlug: 'ped' },
      { surface: 'iment', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- ("in") + ped ("foot") + -iment (noun) → that which shackles the feet, an obstacle.',
      zh: 'im-（在…上）+ ped（脚）+ -iment（名词后缀）→ 束缚双脚的东西，即障碍。',
    },
    relatedWords: ['impede', 'unimpeded'],
  },
  {
    slug: 'pedicure',
    lemma: 'pedicure',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈped.ɪ.kjʊər/' }, us: { ipa: '/ˈped.ɪ.kjʊr/' } },
    definition: { en: 'A cosmetic treatment of the feet and toenails.', zh: '足部护理；修脚' },
    examples: [
      {
        en: ['She treated herself to a pedicure at the spa.'],
        zh: ['她去水疗中心给自己做了一次足部护理。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ped', type: 'root', rootSlug: 'ped' },
      { surface: 'i', type: 'connector' },
      { surface: 'cure', type: 'root' },
    ],
    morphologyNote: {
      en: 'ped ("foot") + -i- + cure ("care") → care of the feet.',
      zh: 'ped（脚）+ -i- + cure（护理）→ 脚的护理，即修脚。',
    },
    relatedWords: ['pedal', 'manicure'],
  },
  {
    slug: 'pioneer',
    lemma: 'pioneer',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: { uk: { ipa: '/ˌpaɪ.əˈnɪər/' }, us: { ipa: '/ˌpaɪ.əˈnɪr/' } },
    definition: {
      en: 'A person who is among the first to explore or develop something new.',
      zh: '先驱；开拓者；开创',
    },
    examples: [
      {
        en: ['Marie Curie was a pioneer in the field of radioactivity research.'],
        zh: ['玛丽·居里是放射性研究领域的先驱。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pion', type: 'root', rootSlug: 'ped' },
      { surface: 'eer', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pion (from ped, "foot" — a foot soldier) + -eer (agent) → originally a foot soldier who cleared the way, hence a trailblazer.',
      zh: 'pion（源自 ped，脚——步兵）+ -eer（施动者后缀）→ 原为开路的步兵，即先驱。',
    },
    relatedWords: ['pedal', 'pedestrian'],
  },
];
