import type { WordEntry } from '@/types/content';

export const VAC_WORDS: WordEntry[] = [
  {
    slug: 'vacation',
    lemma: 'vacation',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/veɪˈkeɪ.ʃən/' },
      us: { ipa: '/veɪˈkeɪ.ʃən/' },
    },
    definition: {
      en: 'An extended period of leisure and recreation, especially away from home.',
      zh: '假期；休假',
    },
    examples: [
      {
        en: ['We are planning a vacation to Greece this summer.'],
        zh: ['我们计划今年夏天去希腊度假。'],
      },
    ],
    rootBreakdown: [
      { surface: 'vac', type: 'root', rootSlug: 'vac' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'vac ("empty, free") + -ation (noun) → a period of being free from work.',
      zh: 'vac（空、闲）+ -ation（名词后缀）→ 从工作中解放的时期，即假期。',
    },
    relatedWords: ['vacant', 'vacate', 'vacuum'],
  },
  {
    slug: 'vacant',
    lemma: 'vacant',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈveɪ.kənt/' },
      us: { ipa: '/ˈveɪ.kənt/' },
    },
    definition: {
      en: 'Not occupied; empty; showing no interest or thought.',
      zh: '空的；空缺的；茫然的',
    },
    examples: [
      {
        en: ['The apartment has been vacant for three months.'],
        zh: ['这间公寓已经空了三个月。'],
      },
    ],
    rootBreakdown: [
      { surface: 'vac', type: 'root', rootSlug: 'vac' },
      { surface: 'ant', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'vac ("empty") + -ant (adj.) → being empty.',
      zh: 'vac（空）+ -ant（形容词后缀）→ 空的。',
    },
    relatedWords: ['vacancy', 'vacate', 'vacuum'],
  },
  {
    slug: 'vacuum',
    lemma: 'vacuum',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: {
      uk: { ipa: '/ˈvæk.juːm/' },
      us: { ipa: '/ˈvæk.juːm/' },
    },
    definition: {
      en: 'A space entirely devoid of matter; to clean with a vacuum cleaner.',
      zh: '真空；吸尘器；用吸尘器打扫',
    },
    examples: [
      {
        en: ['Sound cannot travel through a vacuum.'],
        zh: ['声音无法在真空中传播。'],
      },
    ],
    rootBreakdown: [
      { surface: 'vacu', type: 'root', rootSlug: 'vac' },
      { surface: 'um', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'vacu (from vac, "empty") + -um (noun) → an empty space.',
      zh: 'vacu（源自 vac，空）+ -um（名词后缀）→ 空的空间，即真空。',
    },
    relatedWords: ['vacant', 'vacate', 'vacuous'],
  },
  {
    slug: 'evacuate',
    lemma: 'evacuate',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ɪˈvæk.ju.eɪt/' },
      us: { ipa: '/ɪˈvæk.ju.eɪt/' },
    },
    definition: {
      en: 'To remove people from a place of danger to safety.',
      zh: '疏散；撤离',
    },
    examples: [
      {
        en: ['Residents were evacuated before the hurricane hit.'],
        zh: ['飓风来临前居民已被疏散。'],
      },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'vacu', type: 'root', rootSlug: 'vac' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'e- ("out") + vacu ("empty") + -ate (verb) → to empty out a place.',
      zh: 'e-（向外）+ vacu（空）+ -ate（动词后缀）→ 清空一个地方，即疏散。',
    },
    relatedWords: ['evacuation', 'evacuee', 'vacant'],
  },
  {
    slug: 'vain',
    lemma: 'vain',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/veɪn/' },
      us: { ipa: '/veɪn/' },
    },
    definition: {
      en: "Having excessive pride in one's appearance; producing no result.",
      zh: '自负的；徒劳的；虚荣的',
    },
    examples: [
      {
        en: ['All their efforts were in vain.'],
        zh: ['他们所有的努力都是徒劳的。'],
      },
    ],
    rootBreakdown: [{ surface: 'vain', type: 'root', rootSlug: 'vac' }],
    morphologyNote: {
      en: 'From Latin vanus ("empty"), related to vac → empty of substance, hence futile or conceited.',
      zh: '源自拉丁语 vanus（空的），与 vac 相关 → 缺乏实质的，即徒劳或虚荣。',
    },
    relatedWords: ['vanity', 'vanish', 'void'],
  },
  {
    slug: 'vanish',
    lemma: 'vanish',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˈvæn.ɪʃ/' },
      us: { ipa: '/ˈvæn.ɪʃ/' },
    },
    definition: {
      en: 'To disappear suddenly and completely.',
      zh: '消失；不见',
    },
    examples: [
      {
        en: ['The magician made the rabbit vanish into thin air.'],
        zh: ['魔术师让兔子凭空消失了。'],
      },
    ],
    rootBreakdown: [
      { surface: 'van', type: 'root', rootSlug: 'vac' },
      { surface: 'ish', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'van (from vac, "empty") + -ish (verb) → to become empty, i.e. to disappear.',
      zh: 'van（源自 vac，空）+ -ish（动词后缀）→ 变为空的，即消失。',
    },
    relatedWords: ['vanishing', 'vain', 'void'],
  },
  {
    slug: 'void',
    lemma: 'void',
    partOfSpeech: ['n.', 'adj.'],
    pronunciation: {
      uk: { ipa: '/vɔɪd/' },
      us: { ipa: '/vɔɪd/' },
    },
    definition: {
      en: 'A completely empty space; not valid or legally binding.',
      zh: '空虚；空间；无效的',
    },
    examples: [
      {
        en: ['The contract was declared null and void.'],
        zh: ['合同被宣布无效。'],
      },
    ],
    rootBreakdown: [{ surface: 'void', type: 'root', rootSlug: 'vac' }],
    morphologyNote: {
      en: 'From Latin vocivus ("empty"), related to vac → an empty space.',
      zh: '源自拉丁语 vocivus（空的），与 vac 相关 → 空的空间。',
    },
    relatedWords: ['avoid', 'devoid', 'vacant'],
  },
  {
    slug: 'avoid',
    lemma: 'avoid',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/əˈvɔɪd/' },
      us: { ipa: '/əˈvɔɪd/' },
    },
    definition: {
      en: 'To keep away from or stop oneself from doing something.',
      zh: '避免；回避',
    },
    examples: [
      {
        en: ['She tried to avoid making the same mistake twice.'],
        zh: ['她尽量避免犯同样的错误。'],
      },
    ],
    rootBreakdown: [
      { surface: 'a', type: 'prefix' },
      { surface: 'void', type: 'root', rootSlug: 'vac' },
    ],
    morphologyNote: {
      en: 'a- ("away") + void ("empty") → to make empty by staying away.',
      zh: 'a-（远离）+ void（空）→ 远离使之空出，即避免。',
    },
    relatedWords: ['avoidance', 'avoidable', 'void'],
  },
  {
    slug: 'vacuous',
    lemma: 'vacuous',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈvæk.ju.əs/' },
      us: { ipa: '/ˈvæk.ju.əs/' },
    },
    definition: {
      en: 'Having or showing a lack of thought or intelligence.',
      zh: '空洞的；愚蠢的；茫然的',
    },
    examples: [
      {
        en: ['His vacuous smile suggested he had not understood a word.'],
        zh: ['他空洞的笑容表明他一个字也没听懂。'],
      },
    ],
    rootBreakdown: [
      { surface: 'vacu', type: 'root', rootSlug: 'vac' },
      { surface: 'ous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'vacu (from vac, "empty") + -ous (adj.) → empty of thought.',
      zh: 'vacu（源自 vac，空）+ -ous（形容词后缀）→ 思想空洞的。',
    },
    relatedWords: ['vacuum', 'vacant', 'vain'],
  },
];
