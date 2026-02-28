import type { WordEntry } from '@/types/content';

export const MAN_WORDS: WordEntry[] = [
  {
    slug: 'manage',
    lemma: 'manage',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ˈmæn.ɪdʒ/' }, us: { ipa: '/ˈmæn.ɪdʒ/' } },
    definition: { en: 'To be in charge of; to handle or control.', zh: '管理；经营；处理' },
    examples: [
      {
        en: ['She manages a team of twenty software engineers.'],
        zh: ['她管理着一个由二十名软件工程师组成的团队。'],
      },
    ],
    rootBreakdown: [
      { surface: 'man', type: 'root', rootSlug: 'man' },
      { surface: 'age', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'man ("hand") + -age (noun/verb) → to handle, to direct with the hand.',
      zh: 'man（手）+ -age（后缀）→ 用手操控，即管理。',
    },
    relatedWords: ['manager', 'management', 'managerial'],
  },
  {
    slug: 'manager',
    lemma: 'manager',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈmæn.ɪ.dʒər/' }, us: { ipa: '/ˈmæn.ɪ.dʒɚ/' } },
    definition: {
      en: 'A person responsible for controlling or administering an organization or group.',
      zh: '经理；管理者',
    },
    examples: [
      {
        en: ['The new manager implemented several efficiency improvements.'],
        zh: ['新经理实施了几项效率改进措施。'],
      },
    ],
    rootBreakdown: [
      { surface: 'man', type: 'root', rootSlug: 'man' },
      { surface: 'ag', type: 'other' },
      { surface: 'er', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'man ("hand") + -ager → one who handles things, a controller.',
      zh: 'man（手）+ -ager → 操控事务的人，即经理。',
    },
    relatedWords: ['manage', 'managerial', 'management'],
  },
  {
    slug: 'manner',
    lemma: 'manner',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈmæn.ər/' }, us: { ipa: '/ˈmæn.ɚ/' } },
    definition: {
      en: "A way in which something is done or happens; a person's outward behavior.",
      zh: '方式；举止；礼貌',
    },
    examples: [
      { en: ['She spoke in a calm and professional manner.'], zh: ['她以冷静且专业的方式说话。'] },
    ],
    rootBreakdown: [
      { surface: 'man', type: 'root', rootSlug: 'man' },
      { surface: 'ner', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'man ("hand") + -ner (noun) → the way one handles oneself, behavior.',
      zh: 'man（手）+ -ner（名词后缀）→ 操持自己的方式，即举止。',
    },
    relatedWords: ['mannerly', 'mannerism'],
  },
  {
    slug: 'manipulate',
    lemma: 'manipulate',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/məˈnɪp.jʊ.leɪt/' }, us: { ipa: '/məˈnɪp.jə.leɪt/' } },
    definition: {
      en: 'To handle or control something skillfully; to influence cleverly or unscrupulously.',
      zh: '操纵；操作；巧妙处理',
    },
    examples: [
      {
        en: ['He was accused of manipulating the financial records.'],
        zh: ['他被指控操纵财务记录。'],
      },
    ],
    rootBreakdown: [
      { surface: 'mani', type: 'root', rootSlug: 'man' },
      { surface: 'pul', type: 'other' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'mani (variant of man, "hand") + -pulate ("fill, handle") → to handle with the hands, to control.',
      zh: 'mani（man 的变体，手）+ -pulate（操作）→ 用手操作，即操纵。',
    },
    relatedWords: ['manipulation', 'manipulator'],
  },
  {
    slug: 'manufacture',
    lemma: 'manufacture',
    partOfSpeech: ['vt.', 'n.'],
    pronunciation: { uk: { ipa: '/ˌmæn.jʊˈfæk.tʃər/' }, us: { ipa: '/ˌmæn.jəˈfæk.tʃɚ/' } },
    definition: {
      en: 'To make something on a large scale using machinery; the process of making goods.',
      zh: '制造；生产',
    },
    examples: [
      {
        en: ['The factory manufactures electronic components for smartphones.'],
        zh: ['这家工厂为智能手机生产电子元件。'],
      },
    ],
    rootBreakdown: [
      { surface: 'manu', type: 'root', rootSlug: 'man' },
      { surface: 'fact', type: 'root' },
      { surface: 'ure', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'manu ("hand") + fact ("make") + -ure (noun) → made by hand, manufacturing.',
      zh: 'manu（手）+ fact（制造）+ -ure（名词后缀）→ 用手制造，即生产。',
    },
    relatedWords: ['manufacturer', 'manufacturing'],
  },
  {
    slug: 'manual',
    lemma: 'manual',
    partOfSpeech: ['adj.', 'n.'],
    pronunciation: { uk: { ipa: '/ˈmæn.ju.əl/' }, us: { ipa: '/ˈmæn.ju.əl/' } },
    definition: { en: 'Done with the hands; a handbook of instructions.', zh: '手动的；手册' },
    examples: [{ en: ['The car has a manual transmission.'], zh: ['这辆车有手动变速箱。'] }],
    rootBreakdown: [
      { surface: 'man', type: 'root', rootSlug: 'man' },
      { surface: 'ual', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'man ("hand") + -ual (adj.) → relating to the hand, done by hand.',
      zh: 'man（手）+ -ual（形容词后缀）→ 与手有关的，即手动的。',
    },
    relatedWords: ['manually', 'manage', 'manipulate'],
  },
  {
    slug: 'emancipate',
    lemma: 'emancipate',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ɪˈmæn.sɪ.peɪt/' }, us: { ipa: '/ɪˈmæn.sə.peɪt/' } },
    definition: {
      en: 'To set free from legal, social, or political restrictions.',
      zh: '解放；释放',
    },
    examples: [
      {
        en: ['The movement aimed to emancipate women from traditional constraints.'],
        zh: ['这一运动旨在将女性从传统束缚中解放出来。'],
      },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'man', type: 'root', rootSlug: 'man' },
      { surface: 'cip', type: 'root' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'e- ("out") + man ("hand") + cip ("take") + -ate (verb) → to take out of someone\'s hand, to free.',
      zh: 'e-（出）+ man（手）+ cip（拿取）+ -ate（动词后缀）→ 从人手中取出，即解放。',
    },
    relatedWords: ['emancipation', 'emancipator'],
  },
  {
    slug: 'dismantle',
    lemma: 'dismantle',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/dɪsˈmæn.təl/' }, us: { ipa: '/dɪsˈmæn.t̬əl/' } },
    definition: { en: 'To take apart; to demolish or strip of covering.', zh: '拆卸；拆除；废除' },
    examples: [
      { en: ['Workers dismantled the old bridge piece by piece.'], zh: ['工人们将旧桥逐块拆除。'] },
    ],
    rootBreakdown: [
      { surface: 'dis', type: 'prefix' },
      { surface: 'mantl', type: 'root', rootSlug: 'man' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'dis- ("apart, away") + mantle ("cloak, covering") → to strip of covering, to take apart.',
      zh: 'dis-（分离）+ mantle（覆盖物）→ 去除覆盖，即拆卸。',
    },
    relatedWords: ['dismantlement', 'manage'],
  },
  {
    slug: 'manuscript',
    lemma: 'manuscript',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈmæn.jʊ.skrɪpt/' }, us: { ipa: '/ˈmæn.jə.skrɪpt/' } },
    definition: {
      en: "A handwritten or typed document, especially a writer's original work before publication.",
      zh: '手稿；原稿',
    },
    examples: [
      {
        en: ['The author submitted her manuscript to several publishers.'],
        zh: ['作者将手稿投给了几家出版社。'],
      },
    ],
    rootBreakdown: [
      { surface: 'manu', type: 'root', rootSlug: 'man' },
      { surface: 'script', type: 'root' },
    ],
    morphologyNote: {
      en: 'manu ("hand") + script ("write") → written by hand, a handwritten document.',
      zh: 'manu（手）+ script（写）→ 用手写的，即手稿。',
    },
    relatedWords: ['manual', 'manufacture', 'manipulate'],
  },
  {
    slug: 'manicure',
    lemma: 'manicure',
    partOfSpeech: ['n.', 'vt.'],
    pronunciation: { uk: { ipa: '/ˈmæn.ɪ.kjʊər/' }, us: { ipa: '/ˈmæn.ɪ.kjʊr/' } },
    definition: { en: 'A cosmetic treatment of the hands and fingernails.', zh: '美甲；修指甲' },
    examples: [{ en: ['She gets a manicure every two weeks.'], zh: ['她每两周做一次美甲。'] }],
    rootBreakdown: [
      { surface: 'mani', type: 'root', rootSlug: 'man' },
      { surface: 'cure', type: 'root' },
    ],
    morphologyNote: {
      en: 'mani ("hand") + cure ("care") → care for the hands.',
      zh: 'mani（手）+ cure（护理）→ 护理手部，即美甲。',
    },
    relatedWords: ['manual', 'manipulate', 'pedicure'],
  },
];
