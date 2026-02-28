import type { WordEntry } from '@/types/content';

export const STINCT_WORDS: WordEntry[] = [
  {
    slug: 'distinct',
    lemma: 'distinct',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/dɪˈstɪŋkt/' },
      us: { ipa: '/dɪˈstɪŋkt/' },
    },
    definition: {
      en: 'Recognizably different; clear and unmistakable.',
      zh: '不同的；明显的；清楚的',
    },
    examples: [
      {
        en: ['The two species are distinct in color and size.'],
        zh: ['这两个物种在颜色和体型上明显不同。'],
      },
    ],
    rootBreakdown: [
      { surface: 'di', type: 'prefix' },
      { surface: 'stinct', type: 'root', rootSlug: 'stinct' },
    ],
    morphologyNote: {
      en: 'di- ("apart") + stinct ("prick, mark") → marked apart, i.e. clearly different.',
      zh: 'di-（分开）+ stinct（刺、标记）→ 被分别标记的，即不同的。',
    },
    relatedWords: ['distinction', 'distinctive', 'distinguish'],
  },
  {
    slug: 'distinction',
    lemma: 'distinction',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/dɪˈstɪŋk.ʃən/' },
      us: { ipa: '/dɪˈstɪŋk.ʃən/' },
    },
    definition: {
      en: 'A difference or contrast between similar things; excellence or eminence.',
      zh: '区别；卓越；荣誉',
    },
    examples: [
      {
        en: ['She graduated with distinction from the university.'],
        zh: ['她以优异成绩从大学毕业。'],
      },
    ],
    rootBreakdown: [
      { surface: 'di', type: 'prefix' },
      { surface: 'stinct', type: 'root', rootSlug: 'stinct' },
      { surface: 'ion', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'di- ("apart") + stinct ("mark") + -ion (noun) → the act of marking apart.',
      zh: 'di-（分开）+ stinct（标记）+ -ion（名词后缀）→ 分别标记的行为，即区别。',
    },
    relatedWords: ['distinct', 'distinctive', 'distinguish'],
  },
  {
    slug: 'distinguish',
    lemma: 'distinguish',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/dɪˈstɪŋ.ɡwɪʃ/' },
      us: { ipa: '/dɪˈstɪŋ.ɡwɪʃ/' },
    },
    definition: {
      en: 'To recognize or treat as different; to be an identifying mark of.',
      zh: '区分；辨别；使杰出',
    },
    examples: [
      {
        en: ['It is difficult to distinguish the twins apart.'],
        zh: ['很难区分这对双胞胎。'],
      },
    ],
    rootBreakdown: [
      { surface: 'di', type: 'prefix' },
      { surface: 'stingu', type: 'root', rootSlug: 'stinct' },
      { surface: 'ish', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'di- ("apart") + stingu (from stinct, "prick, mark") + -ish (verb) → to mark apart.',
      zh: 'di-（分开）+ stingu（源自 stinct，标记）+ -ish（动词后缀）→ 分别标记，即区分。',
    },
    relatedWords: ['distinguished', 'distinguishable', 'distinct'],
  },
  {
    slug: 'instinct',
    lemma: 'instinct',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈɪn.stɪŋkt/' },
      us: { ipa: '/ˈɪn.stɪŋkt/' },
    },
    definition: {
      en: 'An innate pattern of behavior; a natural tendency or intuition.',
      zh: '本能；直觉；天性',
    },
    examples: [
      {
        en: ['Birds have an instinct to migrate south for the winter.'],
        zh: ['鸟类有在冬天向南迁徙的本能。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'stinct', type: 'root', rootSlug: 'stinct' },
    ],
    morphologyNote: {
      en: 'in- ("inward") + stinct ("prick, urge") → an inward pricking, i.e. a natural urge.',
      zh: 'in-（向内）+ stinct（刺激）→ 内在的刺激，即本能。',
    },
    relatedWords: ['instinctive', 'instinctively', 'distinct'],
  },
  {
    slug: 'extinct',
    lemma: 'extinct',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ɪkˈstɪŋkt/' },
      us: { ipa: '/ɪkˈstɪŋkt/' },
    },
    definition: {
      en: 'Having no living members; no longer existing.',
      zh: '灭绝的；绝种的',
    },
    examples: [
      {
        en: ['Dinosaurs became extinct about 65 million years ago.'],
        zh: ['恐龙大约在6500万年前灭绝。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'stinct', type: 'root', rootSlug: 'stinct' },
    ],
    morphologyNote: {
      en: 'ex- ("out") + stinct ("quench, prick out") → pricked out, i.e. extinguished.',
      zh: 'ex-（向外）+ stinct（熄灭）→ 被熄灭的，即灭绝的。',
    },
    relatedWords: ['extinction', 'extinguish', 'instinct'],
  },
  {
    slug: 'extinguish',
    lemma: 'extinguish',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ɪkˈstɪŋ.ɡwɪʃ/' },
      us: { ipa: '/ɪkˈstɪŋ.ɡwɪʃ/' },
    },
    definition: {
      en: 'To put out a fire; to cause something to cease.',
      zh: '扑灭；熄灭；消灭',
    },
    examples: [
      {
        en: ['Firefighters quickly extinguished the blaze.'],
        zh: ['消防员迅速扑灭了大火。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ex', type: 'prefix' },
      { surface: 'stingu', type: 'root', rootSlug: 'stinct' },
      { surface: 'ish', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ex- ("out") + stingu (from stinct, "quench") + -ish (verb) → to quench out.',
      zh: 'ex-（向外）+ stingu（源自 stinct，熄灭）+ -ish（动词后缀）→ 使熄灭。',
    },
    relatedWords: ['extinguisher', 'extinct', 'extinction'],
  },
  {
    slug: 'stimulate',
    lemma: 'stimulate',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˈstɪm.jʊ.leɪt/' },
      us: { ipa: '/ˈstɪm.jə.leɪt/' },
    },
    definition: {
      en: 'To encourage or arouse interest or activity.',
      zh: '刺激；激发；促进',
    },
    examples: [
      {
        en: ['Coffee stimulates the nervous system and increases alertness.'],
        zh: ['咖啡刺激神经系统并提高警觉性。'],
      },
    ],
    rootBreakdown: [
      { surface: 'stimul', type: 'root', rootSlug: 'stinct' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'stimul (from stinct, "prick, goad") + -ate (verb) → to prick or goad into action.',
      zh: 'stimul（源自 stinct，刺、驱策）+ -ate（动词后缀）→ 刺激使行动。',
    },
    relatedWords: ['stimulus', 'stimulation', 'stimulant'],
  },
  {
    slug: 'stigma',
    lemma: 'stigma',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈstɪɡ.mə/' },
      us: { ipa: '/ˈstɪɡ.mə/' },
    },
    definition: {
      en: 'A mark of disgrace associated with a particular quality or person.',
      zh: '耻辱；污名',
    },
    examples: [
      {
        en: ['There is still a stigma attached to mental illness.'],
        zh: ['精神疾病仍然带有一种污名。'],
      },
    ],
    rootBreakdown: [
      { surface: 'stigm', type: 'root', rootSlug: 'stinct' },
      { surface: 'a', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From Greek stigma ("mark made by a pointed instrument"), related to stinct ("prick") → a branding mark.',
      zh: '源自希腊语 stigma（尖器留下的印记），与 stinct（刺）相关 → 烙印。',
    },
    relatedWords: ['stigmatize', 'stigmatization', 'distinct'],
  },
  {
    slug: 'instigate',
    lemma: 'instigate',
    partOfSpeech: ['v.'],
    pronunciation: {
      uk: { ipa: '/ˈɪn.stɪ.ɡeɪt/' },
      us: { ipa: '/ˈɪn.stɪ.ɡeɪt/' },
    },
    definition: {
      en: 'To bring about or initiate an action or event, often negatively.',
      zh: '煽动；教唆；发起',
    },
    examples: [
      {
        en: ['He was accused of instigating the riot.'],
        zh: ['他被指控煽动了暴动。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'stig', type: 'root', rootSlug: 'stinct' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("in, on") + stig (from stinct, "prick, goad") + -ate (verb) → to goad into action.',
      zh: 'in-（在…上）+ stig（源自 stinct，刺激）+ -ate（动词后缀）→ 刺激使行动，即煽动。',
    },
    relatedWords: ['instigation', 'instigator', 'stimulate'],
  },
  {
    slug: 'distinctive',
    lemma: 'distinctive',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/dɪˈstɪŋk.tɪv/' },
      us: { ipa: '/dɪˈstɪŋk.tɪv/' },
    },
    definition: {
      en: 'Characteristic of one person or thing and distinguishing it from others.',
      zh: '独特的；有特色的',
    },
    examples: [
      {
        en: ['The chef is known for her distinctive cooking style.'],
        zh: ['这位厨师以其独特的烹饪风格闻名。'],
      },
    ],
    rootBreakdown: [
      { surface: 'di', type: 'prefix' },
      { surface: 'stinct', type: 'root', rootSlug: 'stinct' },
      { surface: 'ive', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'distinct ("marked apart") + -ive (adj.) → tending to mark apart, i.e. uniquely characteristic.',
      zh: 'distinct（区分的）+ -ive（形容词后缀）→ 倾向于区分的，即独特的。',
    },
    relatedWords: ['distinct', 'distinction', 'distinguish'],
  },
];
