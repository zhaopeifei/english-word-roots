import type { WordEntry } from '@/types/content';

export const FORC_WORDS: WordEntry[] = [
  {
    slug: 'force',
    lemma: 'force',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: { uk: { ipa: '/fɔːs/' }, us: { ipa: '/fɔːrs/' } },
    definition: {
      en: 'Strength or power exerted upon an object; to compel someone to do something.',
      zh: '力量；武力；强迫',
    },
    examples: [
      { en: ['The police used force to control the riot.'], zh: ['警察使用武力控制了暴乱。'] },
    ],
    rootBreakdown: [
      { surface: 'forc', type: 'root', rootSlug: 'forc' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From Latin fortis ("strong"). The root forc/fort means strength.',
      zh: '源自拉丁语 fortis（强壮的）。词根 forc/fort 意为力量。',
    },
    relatedWords: ['enforce', 'reinforce', 'forceful'],
  },
  {
    slug: 'enforce',
    lemma: 'enforce',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ɪnˈfɔːs/' }, us: { ipa: '/ɪnˈfɔːrs/' } },
    definition: {
      en: 'To compel observance of a law or rule; to impose by authority.',
      zh: '执行；强制执行；实施',
    },
    examples: [
      {
        en: ['The government enforces strict regulations on food safety.'],
        zh: ['政府严格执行食品安全法规。'],
      },
    ],
    rootBreakdown: [
      { surface: 'en', type: 'prefix' },
      { surface: 'forc', type: 'root', rootSlug: 'forc' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'en- ("make, cause") + force ("strength") → to make strong, to compel compliance.',
      zh: 'en-（使）+ force（力量）→ 使有力执行，即强制实施。',
    },
    relatedWords: ['enforcement', 'force', 'reinforce'],
  },
  {
    slug: 'reinforce',
    lemma: 'reinforce',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ˌriː.ɪnˈfɔːs/' }, us: { ipa: '/ˌriː.ɪnˈfɔːrs/' } },
    definition: {
      en: 'To strengthen or support with additional material or assistance.',
      zh: '加强；增援；强化',
    },
    examples: [
      { en: ['The bridge was reinforced with steel beams.'], zh: ['这座桥用钢梁加固了。'] },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'in', type: 'prefix' },
      { surface: 'forc', type: 'root', rootSlug: 'forc' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("again") + in- ("make") + force ("strength") → to make strong again, to strengthen.',
      zh: 're-（再次）+ in-（使）+ force（力量）→ 再次增强，即加固。',
    },
    relatedWords: ['reinforcement', 'force', 'enforce'],
  },
  {
    slug: 'fort',
    lemma: 'fort',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/fɔːt/' }, us: { ipa: '/fɔːrt/' } },
    definition: { en: 'A fortified building or strategic position.', zh: '堡垒；要塞' },
    examples: [
      {
        en: ['The soldiers defended the fort against the attack.'],
        zh: ['士兵们抵御了对堡垒的攻击。'],
      },
    ],
    rootBreakdown: [{ surface: 'fort', type: 'root', rootSlug: 'forc' }],
    morphologyNote: {
      en: 'From Latin fortis ("strong"). A strong, defended place.',
      zh: '源自拉丁语 fortis（强壮的）。一个坚固的防御之所。',
    },
    relatedWords: ['fortify', 'fortitude', 'force'],
  },
  {
    slug: 'fortify',
    lemma: 'fortify',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ˈfɔː.tɪ.faɪ/' }, us: { ipa: '/ˈfɔːr.t̬ɪ.faɪ/' } },
    definition: {
      en: 'To strengthen a place against attack; to encourage or invigorate.',
      zh: '加强防御；增强；设防',
    },
    examples: [
      {
        en: ['They fortified the city walls against the invaders.'],
        zh: ['他们加固了城墙以抵御入侵者。'],
      },
    ],
    rootBreakdown: [
      { surface: 'fort', type: 'root', rootSlug: 'forc' },
      { surface: 'ify', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'fort ("strong") + -ify (verb suffix, "to make") → to make strong.',
      zh: 'fort（强壮的）+ -ify（动词后缀，使）→ 使变强，即加固。',
    },
    relatedWords: ['fortification', 'fort', 'force'],
  },
  {
    slug: 'fortitude',
    lemma: 'fortitude',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈfɔː.tɪ.tjuːd/' }, us: { ipa: '/ˈfɔːr.t̬ɪ.tuːd/' } },
    definition: {
      en: 'Courage in pain or adversity; mental and emotional strength.',
      zh: '刚毅；坚忍不拔',
    },
    examples: [
      {
        en: ['She showed great fortitude in the face of hardship.'],
        zh: ['她在困境中展现了巨大的刚毅。'],
      },
    ],
    rootBreakdown: [
      { surface: 'fort', type: 'root', rootSlug: 'forc' },
      { surface: 'itude', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'fort ("strong") + -itude (noun suffix for quality) → the quality of being strong, courage.',
      zh: 'fort（强壮的）+ -itude（品质名词后缀）→ 强壮的品质，即刚毅。',
    },
    relatedWords: ['fort', 'fortify', 'force'],
  },
  {
    slug: 'effort',
    lemma: 'effort',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈef.ət/' }, us: { ipa: '/ˈef.ɚt/' } },
    definition: {
      en: 'A vigorous or determined attempt; physical or mental exertion.',
      zh: '努力；力气',
    },
    examples: [
      {
        en: ['It took a lot of effort to finish the project on time.'],
        zh: ['按时完成这个项目花了很大的努力。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ef', type: 'prefix' },
      { surface: 'fort', type: 'root', rootSlug: 'forc' },
    ],
    morphologyNote: {
      en: 'ef- (from ex-, "out") + fort ("strong") → to put out strength, exertion.',
      zh: 'ef-（源自 ex-，向外）+ fort（强壮的）→ 发出力量，即努力。',
    },
    relatedWords: ['effortless', 'force', 'fortitude'],
  },
  {
    slug: 'comfort',
    lemma: 'comfort',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: { uk: { ipa: '/ˈkʌm.fət/' }, us: { ipa: '/ˈkʌm.fɚt/' } },
    definition: {
      en: 'A state of physical ease and well-being; to soothe in time of grief.',
      zh: '安慰；舒适',
    },
    examples: [
      {
        en: ['She found comfort in her family during the difficult time.'],
        zh: ['在困难时期，她从家人那里得到了安慰。'],
      },
    ],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'fort', type: 'root', rootSlug: 'forc' },
    ],
    morphologyNote: {
      en: 'com- (from con-, "with, together") + fort ("strong") → to strengthen together, to console.',
      zh: 'com-（源自 con-，一起）+ fort（强壮的）→ 共同加强，即安慰。',
    },
    relatedWords: ['comfortable', 'uncomfortable', 'discomfort'],
  },
  {
    slug: 'comfortable',
    lemma: 'comfortable',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈkʌm.fə.tə.bəl/' }, us: { ipa: '/ˈkʌm.fɚ.t̬ə.bəl/' } },
    definition: {
      en: 'Providing physical ease; free from stress or constraint.',
      zh: '舒适的；安逸的',
    },
    examples: [{ en: ['The new sofa is very comfortable.'], zh: ['新沙发非常舒适。'] }],
    rootBreakdown: [
      { surface: 'com', type: 'prefix' },
      { surface: 'fort', type: 'root', rootSlug: 'forc' },
      { surface: 'able', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'comfort (from com- + fort, "strengthen together") + -able ("able to") → able to be strengthened, at ease.',
      zh: 'comfort（安慰）+ -able（能够）→ 能够得到安慰的，即舒适的。',
    },
    relatedWords: ['comfort', 'uncomfortable', 'discomfort'],
  },
];
