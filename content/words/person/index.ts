import type { WordEntry } from '@/types/content';

export const PERSON_WORDS: WordEntry[] = [
  {
    slug: 'person',
    lemma: 'person',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˈpɜː.sən/' }, us: { ipa: '/ˈpɝː.sən/' } },
    definition: { en: 'A human being regarded as an individual.', zh: '人；个人' },
    examples: [
      {
        en: ['Every person has the right to freedom of speech.'],
        zh: ['每个人都有言论自由的权利。'],
      },
    ],
    rootBreakdown: [{ surface: 'person', type: 'root', rootSlug: 'person' }],
    morphologyNote: {
      en: 'person (from Latin persona, "mask, character") → an individual human being.',
      zh: 'person（源自拉丁语 persona，面具、角色）→ 一个独立的人。',
    },
    relatedWords: ['personal', 'personality', 'personnel'],
  },
  {
    slug: 'personal',
    lemma: 'personal',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈpɜː.sən.əl/' }, us: { ipa: '/ˈpɝː.sən.əl/' } },
    definition: {
      en: "Belonging to or affecting a particular person; of or concerning one's private life.",
      zh: '个人的；私人的；亲自的',
    },
    examples: [
      {
        en: ['Please do not ask me personal questions during the interview.'],
        zh: ['请不要在面试中问我私人问题。'],
      },
    ],
    rootBreakdown: [
      { surface: 'person', type: 'root', rootSlug: 'person' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'person + -al (adj.) → relating to a person, private.',
      zh: 'person（人）+ -al（形容词后缀）→ 与个人相关的，即私人的。',
    },
    relatedWords: ['personality', 'personally', 'impersonal'],
  },
  {
    slug: 'personality',
    lemma: 'personality',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌpɜː.sənˈæl.ɪ.ti/' }, us: { ipa: '/ˌpɝː.sənˈæl.ə.t̬i/' } },
    definition: {
      en: "The combination of characteristics or qualities that form a person's distinctive character.",
      zh: '个性；人格；名人',
    },
    examples: [
      {
        en: ['Her warm personality makes everyone feel welcome.'],
        zh: ['她热情的个性让每个人都感到受欢迎。'],
      },
    ],
    rootBreakdown: [
      { surface: 'person', type: 'root', rootSlug: 'person' },
      { surface: 'al', type: 'other' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'personal + -ity (noun) → the quality of being a person, distinctive character.',
      zh: 'personal（个人的）+ -ity（名词后缀）→ 个人的特质，即个性。',
    },
    relatedWords: ['personal', 'personalize'],
  },
  {
    slug: 'personnel',
    lemma: 'personnel',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/ˌpɜː.sənˈel/' }, us: { ipa: '/ˌpɝː.sənˈel/' } },
    definition: {
      en: 'People employed in an organization or engaged in a service; the department managing employees.',
      zh: '全体人员；人事部门',
    },
    examples: [
      {
        en: ['All military personnel must report to the base by 0600 hours.'],
        zh: ['所有军事人员必须在0600时之前到基地报到。'],
      },
    ],
    rootBreakdown: [
      { surface: 'person', type: 'root', rootSlug: 'person' },
      { surface: 'nel', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'person + -nel (collective noun) → the body of persons in an organization.',
      zh: 'person（人）+ -nel（集合名词后缀）→ 组织中的全体人员。',
    },
    relatedWords: ['person', 'personal'],
  },
  {
    slug: 'impersonal',
    lemma: 'impersonal',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ɪmˈpɜː.sən.əl/' }, us: { ipa: '/ɪmˈpɝː.sən.əl/' } },
    definition: {
      en: 'Not influenced by personal feelings; lacking warmth or personality.',
      zh: '非个人的；冷淡的；没有人情味的',
    },
    examples: [
      {
        en: ['The large corporation felt cold and impersonal to new employees.'],
        zh: ['对新员工来说，这家大公司让人感觉冰冷而没有人情味。'],
      },
    ],
    rootBreakdown: [
      { surface: 'im', type: 'prefix' },
      { surface: 'person', type: 'root', rootSlug: 'person' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'im- ("not") + person + -al (adj.) → not personal, lacking individual character.',
      zh: 'im-（不）+ person（人）+ -al（形容词后缀）→ 非个人的，即冷淡的。',
    },
    relatedWords: ['personal', 'personality'],
  },
  {
    slug: 'interpersonal',
    lemma: 'interpersonal',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˌɪn.təˈpɜː.sən.əl/' }, us: { ipa: '/ˌɪn.tɚˈpɝː.sən.əl/' } },
    definition: {
      en: 'Relating to relationships or communication between people.',
      zh: '人际的；人与人之间的',
    },
    examples: [
      {
        en: ['Good interpersonal skills are essential for success in the workplace.'],
        zh: ['良好的人际交往能力对职场成功至关重要。'],
      },
    ],
    rootBreakdown: [
      { surface: 'inter', type: 'prefix' },
      { surface: 'person', type: 'root', rootSlug: 'person' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'inter- ("between") + person + -al (adj.) → between persons, relating to interaction.',
      zh: 'inter-（在…之间）+ person（人）+ -al（形容词后缀）→ 在人与人之间的。',
    },
    relatedWords: ['personal', 'personality'],
  },
  {
    slug: 'personalize',
    lemma: 'personalize',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/ˈpɜː.sən.əl.aɪz/' }, us: { ipa: '/ˈpɝː.sən.əl.aɪz/' } },
    definition: {
      en: "To design or produce something to meet someone's individual requirements.",
      zh: '使个性化；使个人化',
    },
    examples: [
      {
        en: ['You can personalize your homepage by choosing your favorite topics.'],
        zh: ['你可以通过选择你喜欢的话题来个性化你的主页。'],
      },
    ],
    rootBreakdown: [
      { surface: 'person', type: 'root', rootSlug: 'person' },
      { surface: 'al', type: 'other' },
      { surface: 'ize', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'personal + -ize (verb) → to make personal, to customize.',
      zh: 'personal（个人的）+ -ize（动词后缀）→ 使个人化，即定制。',
    },
    relatedWords: ['personal', 'personalization'],
  },
  {
    slug: 'personify',
    lemma: 'personify',
    partOfSpeech: ['vt.'],
    pronunciation: { uk: { ipa: '/pəˈsɒn.ɪ.faɪ/' }, us: { ipa: '/pɚˈsɑː.nɪ.faɪ/' } },
    definition: {
      en: 'To represent a quality or concept as a person; to be the embodiment of.',
      zh: '拟人化；体现；是…的化身',
    },
    examples: [
      {
        en: ['She personifies grace and elegance in everything she does.'],
        zh: ['她在所做的一切事情中都体现了优雅。'],
      },
    ],
    rootBreakdown: [
      { surface: 'person', type: 'root', rootSlug: 'person' },
      { surface: 'ify', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'person + -ify (verb, "make") → to make into a person, to give human qualities to.',
      zh: 'person（人）+ -ify（使…化）→ 使成为人，即拟人化。',
    },
    relatedWords: ['personification', 'personal'],
  },
  {
    slug: 'personification',
    lemma: 'personification',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/pəˌsɒn.ɪ.fɪˈkeɪ.ʃən/' }, us: { ipa: '/pɚˌsɑː.nɪ.fɪˈkeɪ.ʃən/' } },
    definition: {
      en: 'The attribution of human characteristics to something non-human; a perfect example of a quality.',
      zh: '拟人法；化身；典型',
    },
    examples: [
      {
        en: ['In the poem, the wind is a personification of freedom.'],
        zh: ['在这首诗中，风是自由的化身。'],
      },
    ],
    rootBreakdown: [
      { surface: 'person', type: 'root', rootSlug: 'person' },
      { surface: 'ific', type: 'other' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'personify + -ation (noun) → the act of making into a person, a human representation.',
      zh: 'personify（拟人化）+ -ation（名词后缀）→ 拟人化的行为。',
    },
    relatedWords: ['personify', 'person'],
  },
];
