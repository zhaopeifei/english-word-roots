import type { WordEntry } from '@/types/content';

export const VOC_WORDS: WordEntry[] = [
  {
    slug: 'voice',
    lemma: 'voice',
    partOfSpeech: ['n.', 'v.'],
    pronunciation: { uk: { ipa: '/vɔɪs/' }, us: { ipa: '/vɔɪs/' } },
    definition: {
      en: "The sound produced in a person's larynx; to express an opinion.",
      zh: '声音；嗓音；表达',
    },
    examples: [
      {
        en: ['She raised her voice to be heard above the noise.'],
        zh: ['她提高声音以便在噪音中被听到。'],
      },
    ],
    rootBreakdown: [
      { surface: 'voic', type: 'root', rootSlug: 'voc' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'From voc ("call, voice") → the sound produced when calling.',
      zh: '源自 voc（呼唤、声音）→ 呼唤时发出的声音。',
    },
    relatedWords: ['vocal', 'advocate', 'invoke'],
  },
  {
    slug: 'vocal',
    lemma: 'vocal',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ˈvəʊ.kəl/' }, us: { ipa: '/ˈvoʊ.kəl/' } },
    definition: {
      en: 'Relating to the voice; expressing opinions freely.',
      zh: '声音的；直言不讳的',
    },
    examples: [
      { en: ['She has been vocal about the need for reform.'], zh: ['她一直直言不讳地呼吁改革。'] },
    ],
    rootBreakdown: [
      { surface: 'voc', type: 'root', rootSlug: 'voc' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'voc ("voice, call") + -al (adj.) → relating to the voice.',
      zh: 'voc（声音、呼唤）+ -al（形容词后缀）→ 与声音有关的。',
    },
    relatedWords: ['vocalist', 'vocalize', 'voice'],
  },
  {
    slug: 'advocate',
    lemma: 'advocate',
    partOfSpeech: ['v.', 'n.'],
    pronunciation: { uk: { ipa: '/ˈæd.və.keɪt/' }, us: { ipa: '/ˈæd.və.keɪt/' } },
    definition: {
      en: 'To publicly recommend or support; a person who supports a cause.',
      zh: '提倡；拥护；倡导者',
    },
    examples: [
      {
        en: ['She advocates for equal rights in the workplace.'],
        zh: ['她倡导工作场所的平等权利。'],
      },
    ],
    rootBreakdown: [
      { surface: 'ad', type: 'prefix' },
      { surface: 'voc', type: 'root', rootSlug: 'voc' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'ad- ("toward") + voc ("call") + -ate (verb) → to call toward a cause, i.e. to support.',
      zh: 'ad-（朝向）+ voc（呼唤）+ -ate（动词后缀）→ 为某事业呼唤，即倡导。',
    },
    relatedWords: ['advocacy', 'vocal', 'vocation'],
  },
  {
    slug: 'provoke',
    lemma: 'provoke',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/prəˈvəʊk/' }, us: { ipa: '/prəˈvoʊk/' } },
    definition: {
      en: 'To stimulate or incite someone to a reaction, especially anger.',
      zh: '激怒；挑衅；引起',
    },
    examples: [
      {
        en: ['His rude comments provoked an angry response.'],
        zh: ['他粗鲁的评论激起了愤怒的反应。'],
      },
    ],
    rootBreakdown: [
      { surface: 'pro', type: 'prefix' },
      { surface: 'vok', type: 'root', rootSlug: 'voc' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'pro- ("forth") + vok (from voc, "call") → to call forth a reaction.',
      zh: 'pro-（向前）+ vok（源自 voc，呼唤）→ 唤起反应，即激怒。',
    },
    relatedWords: ['provocation', 'provocative', 'invoke'],
  },
  {
    slug: 'invoke',
    lemma: 'invoke',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ɪnˈvəʊk/' }, us: { ipa: '/ɪnˈvoʊk/' } },
    definition: {
      en: 'To call on for help or as an authority; to cite as relevant.',
      zh: '援引；祈求；调用',
    },
    examples: [{ en: ['The lawyer invoked the Fifth Amendment.'], zh: ['律师援引了第五修正案。'] }],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'vok', type: 'root', rootSlug: 'voc' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("upon") + vok (from voc, "call") → to call upon.',
      zh: 'in-（向）+ vok（源自 voc，呼唤）→ 向…呼唤，即援引。',
    },
    relatedWords: ['invocation', 'evoke', 'provoke'],
  },
  {
    slug: 'evoke',
    lemma: 'evoke',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/ɪˈvəʊk/' }, us: { ipa: '/ɪˈvoʊk/' } },
    definition: { en: 'To bring a feeling, memory, or image to mind.', zh: '唤起；引起；使人想起' },
    examples: [
      { en: ['The music evoked memories of her childhood.'], zh: ['音乐唤起了她童年的回忆。'] },
    ],
    rootBreakdown: [
      { surface: 'e', type: 'prefix' },
      { surface: 'vok', type: 'root', rootSlug: 'voc' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'e- ("out") + vok (from voc, "call") → to call out from memory.',
      zh: 'e-（向外）+ vok（源自 voc，呼唤）→ 从记忆中唤出。',
    },
    relatedWords: ['evocative', 'invoke', 'provoke'],
  },
  {
    slug: 'revoke',
    lemma: 'revoke',
    partOfSpeech: ['v.'],
    pronunciation: { uk: { ipa: '/rɪˈvəʊk/' }, us: { ipa: '/rɪˈvoʊk/' } },
    definition: {
      en: 'To officially cancel a decree, decision, or promise.',
      zh: '撤销；撤回；废除',
    },
    examples: [
      { en: ['The government revoked his driving license.'], zh: ['政府吊销了他的驾照。'] },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'vok', type: 'root', rootSlug: 'voc' },
      { surface: 'e', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("back") + vok (from voc, "call") → to call back, i.e. to withdraw.',
      zh: 're-（向后）+ vok（源自 voc，呼唤）→ 收回呼唤，即撤销。',
    },
    relatedWords: ['revocation', 'irrevocable', 'invoke'],
  },
  {
    slug: 'vocation',
    lemma: 'vocation',
    partOfSpeech: ['n.'],
    pronunciation: { uk: { ipa: '/vəʊˈkeɪ.ʃən/' }, us: { ipa: '/voʊˈkeɪ.ʃən/' } },
    definition: {
      en: 'A strong feeling of suitability for a particular career; a calling.',
      zh: '职业；天职；使命感',
    },
    examples: [
      {
        en: ['Teaching was more than a job for her — it was a vocation.'],
        zh: ['对她来说，教书不仅是工作，更是一种使命。'],
      },
    ],
    rootBreakdown: [
      { surface: 'voc', type: 'root', rootSlug: 'voc' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'voc ("call") + -ation (noun) → a calling, i.e. one\'s life purpose.',
      zh: 'voc（呼唤）+ -ation（名词后缀）→ 内心的呼唤，即天职。',
    },
    relatedWords: ['vocational', 'avocation', 'advocate'],
  },
  {
    slug: 'equivocal',
    lemma: 'equivocal',
    partOfSpeech: ['adj.'],
    pronunciation: { uk: { ipa: '/ɪˈkwɪv.ə.kəl/' }, us: { ipa: '/ɪˈkwɪv.ə.kəl/' } },
    definition: {
      en: 'Open to more than one interpretation; ambiguous.',
      zh: '模棱两可的；含糊的',
    },
    examples: [
      {
        en: ['The politician gave an equivocal answer to avoid controversy.'],
        zh: ['这位政治家给出了模棱两可的回答以避免争议。'],
      },
    ],
    rootBreakdown: [
      { surface: 'equi', type: 'prefix' },
      { surface: 'voc', type: 'root', rootSlug: 'voc' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'equi- ("equal") + voc ("call, voice") + -al (adj.) → calling in equal directions, i.e. ambiguous.',
      zh: 'equi-（相等）+ voc（呼唤）+ -al（形容词后缀）→ 向两边同样呼唤的，即模棱两可的。',
    },
    relatedWords: ['unequivocal', 'vocal', 'advocate'],
  },
];
