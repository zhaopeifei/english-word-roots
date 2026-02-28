import type { WordEntry } from '@/types/content';

export const GLOB_WORDS: WordEntry[] = [
  {
    slug: 'globe',
    lemma: 'globe',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ɡləʊb/' }, us: { ipa: '/ɡloʊb/' } },
    definition: {
      en: 'The Earth; a spherical representation of the Earth; any spherical object.',
      zh: '地球；球体；地球仪',
    },
    examples: [
      {
        en: ['News can travel around the globe in seconds.'],
        zh: ['新闻可以在几秒钟内传遍全球。'],
      },
    ],
    rootBreakdown: [
      { surface: 'glob', type: 'root', rootSlug: 'glob' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From Latin globus ("round mass, sphere"). The root glob means "sphere, ball".',
      zh: '源自拉丁语 globus（圆形物体、球体）。词根 glob 意为"球、球体"。',
    },
    relatedWords: ['global', 'globalize', 'globular'],
  },
  {
    slug: 'global',
    lemma: 'global',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈɡləʊ.bəl/' }, us: { ipa: '/ˈɡloʊ.bəl/' } },
    definition: { en: 'Relating to the whole world; comprehensive.', zh: '全球的；全面的' },
    examples: [
      {
        en: ['Climate change is a global challenge that requires international cooperation.'],
        zh: ['气候变化是一个需要国际合作的全球性挑战。'],
      },
    ],
    rootBreakdown: [
      { surface: 'glob', type: 'root', rootSlug: 'glob' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'glob ("sphere, world") + -al (adjective) → of the whole world.',
      zh: 'glob（球体、世界）+ -al（形容词后缀）→ 全世界的。',
    },
    relatedWords: ['globe', 'globally', 'globalize'],
  },
  {
    slug: 'globally',
    lemma: 'globally',
    partOfSpeech: ['adv.'],
    pronunciation: { uk: { ipa: '/ˈɡləʊ.bəl.i/' }, us: { ipa: '/ˈɡloʊ.bəl.i/' } },
    definition: {
      en: 'In a way that relates to the whole world; worldwide.',
      zh: '在全球范围内；全球地',
    },
    examples: [
      {
        en: ['The company operates globally with offices in over 30 countries.'],
        zh: ['这家公司在全球运营，在30多个国家设有办事处。'],
      },
    ],
    rootBreakdown: [
      { surface: 'glob', type: 'root', rootSlug: 'glob' },
      { surface: 'al', type: 'suffix' },
      { surface: 'ly', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'global + -ly (adverb) → in a worldwide manner.',
      zh: 'global（全球的）+ -ly（副词后缀）→ 以全球的方式。',
    },
    relatedWords: ['global', 'globe', 'globalize'],
  },
  {
    slug: 'globalize',
    lemma: 'globalize',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ˈɡləʊ.bəl.aɪz/' }, us: { ipa: '/ˈɡloʊ.bəl.aɪz/' } },
    definition: {
      en: 'To develop or be developed so as to make possible international influence or operation.',
      zh: '全球化',
    },
    examples: [
      {
        en: ['Technology has helped to globalize trade and communication.'],
        zh: ['科技帮助实现了贸易和通信的全球化。'],
      },
    ],
    rootBreakdown: [
      { surface: 'glob', type: 'root', rootSlug: 'glob' },
      { surface: 'al', type: 'suffix' },
      { surface: 'ize', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'global + -ize (verb suffix, "to make") → to make global, to extend worldwide.',
      zh: 'global（全球的）+ -ize（动词后缀，使）→ 使全球化。',
    },
    relatedWords: ['globalization', 'global', 'globe'],
  },
  {
    slug: 'globalization',
    lemma: 'globalization',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌɡləʊ.bəl.aɪˈzeɪ.ʃən/' }, us: { ipa: '/ˌɡloʊ.bəl.ɪˈzeɪ.ʃən/' } },
    definition: {
      en: 'The process by which businesses and organizations develop international influence.',
      zh: '全球化',
    },
    examples: [
      {
        en: ['Globalization has created both opportunities and challenges for developing nations.'],
        zh: ['全球化为发展中国家带来了机遇和挑战。'],
      },
    ],
    rootBreakdown: [
      { surface: 'glob', type: 'root', rootSlug: 'glob' },
      { surface: 'al', type: 'suffix' },
      { surface: 'iz', type: 'suffix' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'globalize + -ation (noun) → the process of making global.',
      zh: 'globalize（全球化）+ -ation（名词后缀）→ 全球化的过程。',
    },
    relatedWords: ['globalize', 'global', 'globe'],
  },
  {
    slug: 'globular',
    lemma: 'globular',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈɡlɒb.jʊ.lər/' }, us: { ipa: '/ˈɡlɑː.bjə.lɚ/' } },
    definition: { en: 'Globe-shaped; spherical.', zh: '球形的；球状的' },
    examples: [
      {
        en: ['The globular cluster contains thousands of ancient stars.'],
        zh: ['这个球状星团包含数千颗古老的恒星。'],
      },
    ],
    rootBreakdown: [
      { surface: 'glob', type: 'root', rootSlug: 'glob' },
      { surface: 'ul', type: 'connector' },
      { surface: 'ar', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'glob ("sphere") + -ul- + -ar (adjective) → shaped like a sphere.',
      zh: 'glob（球体）+ -ul- + -ar（形容词后缀）→ 像球体一样的形状。',
    },
    relatedWords: ['globe', 'global', 'globalism'],
  },
  {
    slug: 'globalism',
    lemma: 'globalism',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈɡləʊ.bəl.ɪ.zəm/' }, us: { ipa: '/ˈɡloʊ.bəl.ɪ.zəm/' } },
    definition: { en: 'The operation or planning of policy on a global basis.', zh: '全球主义' },
    examples: [
      {
        en: ['Globalism promotes interconnectedness among world economies.'],
        zh: ['全球主义促进了世界经济之间的互联互通。'],
      },
    ],
    rootBreakdown: [
      { surface: 'glob', type: 'root', rootSlug: 'glob' },
      { surface: 'al', type: 'suffix' },
      { surface: 'ism', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'global + -ism (doctrine) → the doctrine of global interconnection.',
      zh: 'global（全球的）+ -ism（主义）→ 全球互联的理念。',
    },
    relatedWords: ['global', 'globalization', 'globe'],
  },
];
