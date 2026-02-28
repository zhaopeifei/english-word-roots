import type { WordEntry } from '@/types/content';

export const ANIM_WORDS: WordEntry[] = [
  {
    slug: 'animal',
    lemma: 'animal',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˈæn.ɪ.məl/' },
      us: { ipa: '/ˈæn.ɪ.məl/' },
    },
    definition: {
      en: 'A living organism that feeds on organic matter and has specialized sense organs.',
      zh: '动物；牲畜',
    },
    examples: [
      {
        en: ['Many wild animals are threatened by habitat loss.'],
        zh: ['许多野生动物受到栖息地丧失的威胁。'],
      },
    ],
    rootBreakdown: [
      { surface: 'anim', type: 'root', rootSlug: 'anim' },
      { surface: 'al', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'anim ("breath, spirit, life") + -al (noun/adjective suffix) → a being with breath/life.',
      zh: 'anim（呼吸、精神、生命）+ -al（名词/形容词后缀）→ 有呼吸/生命的存在，即动物。',
    },
    relatedWords: ['animate', 'animation', 'animosity'],
  },
  {
    slug: 'animate',
    lemma: 'animate',
    partOfSpeech: ['vt.', 'adj.'],
    pronunciation: {
      uk: { ipa: '/ˈæn.ɪ.meɪt/' },
      us: { ipa: '/ˈæn.ɪ.meɪt/' },
    },
    definition: {
      en: 'To bring to life or give spirit to; alive or having life.',
      zh: '使有生气；使活泼；赋予生命',
    },
    examples: [
      {
        en: ['The director animated the characters with vivid personality traits.'],
        zh: ['导演赋予角色鲜明的个性特征，使其栩栩如生。'],
      },
    ],
    rootBreakdown: [
      { surface: 'anim', type: 'root', rootSlug: 'anim' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'anim ("breath, spirit") + -ate (verb suffix) → to give breath/spirit to, to enliven.',
      zh: 'anim（呼吸、精神）+ -ate（动词后缀）→ 赋予呼吸/精神，即使活跃。',
    },
    relatedWords: ['animated', 'animation', 'inanimate'],
  },
  {
    slug: 'animated',
    lemma: 'animated',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ˈæn.ɪ.meɪ.tɪd/' },
      us: { ipa: '/ˈæn.ɪ.meɪ.t̬ɪd/' },
    },
    definition: {
      en: 'Full of life or excitement; made using animation techniques.',
      zh: '生动的；活泼的；动画的',
    },
    examples: [
      {
        en: ['The children watched an animated film about talking animals.'],
        zh: ['孩子们看了一部关于会说话的动物的动画片。'],
      },
    ],
    rootBreakdown: [
      { surface: 'anim', type: 'root', rootSlug: 'anim' },
      { surface: 'at', type: 'suffix' },
      { surface: 'ed', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'anim ("spirit") + -ated (past participle as adjective) → given spirit, lively.',
      zh: 'anim（精神）+ -ated（过去分词作形容词）→ 被赋予精神的，即生动的。',
    },
    relatedWords: ['animate', 'animation', 'inanimate'],
  },
  {
    slug: 'animation',
    lemma: 'animation',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˌæn.ɪˈmeɪ.ʃən/' },
      us: { ipa: '/ˌæn.ɪˈmeɪ.ʃən/' },
    },
    definition: {
      en: 'The state of being lively; the technique of making films with drawings or models.',
      zh: '活力；动画制作',
    },
    examples: [
      {
        en: ['Computer animation has revolutionized the film industry.'],
        zh: ['电脑动画技术彻底改变了电影产业。'],
      },
    ],
    rootBreakdown: [
      { surface: 'anim', type: 'root', rootSlug: 'anim' },
      { surface: 'ation', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'anim ("spirit, life") + -ation (noun suffix) → the act of giving life, animation.',
      zh: 'anim（精神、生命）+ -ation（名词后缀）→ 赋予生命的行为，即动画。',
    },
    relatedWords: ['animate', 'animated', 'reanimate'],
  },
  {
    slug: 'inanimate',
    lemma: 'inanimate',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/ɪnˈæn.ɪ.mət/' },
      us: { ipa: '/ɪnˈæn.ɪ.mət/' },
    },
    definition: {
      en: 'Not alive; showing no sign of life.',
      zh: '无生命的；无生气的',
    },
    examples: [
      {
        en: ['Rocks and minerals are inanimate objects.'],
        zh: ['岩石和矿物是无生命的物体。'],
      },
    ],
    rootBreakdown: [
      { surface: 'in', type: 'prefix' },
      { surface: 'anim', type: 'root', rootSlug: 'anim' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'in- ("not") + anim ("spirit, life") + -ate (adjective) → without life or spirit.',
      zh: 'in-（不）+ anim（精神、生命）+ -ate（形容词后缀）→ 没有生命的。',
    },
    relatedWords: ['animate', 'animal', 'animation'],
  },
  {
    slug: 'reanimate',
    lemma: 'reanimate',
    partOfSpeech: ['vt.'],
    pronunciation: {
      uk: { ipa: '/riːˈæn.ɪ.meɪt/' },
      us: { ipa: '/riːˈæn.ɪ.meɪt/' },
    },
    definition: {
      en: 'To restore to life or consciousness; to revive.',
      zh: '使复活；使恢复生气',
    },
    examples: [
      {
        en: ['The paramedics worked to reanimate the drowning victim.'],
        zh: ['急救人员努力使溺水者恢复生命体征。'],
      },
    ],
    rootBreakdown: [
      { surface: 're', type: 'prefix' },
      { surface: 'anim', type: 'root', rootSlug: 'anim' },
      { surface: 'ate', type: 'suffix' },
    ],
    morphologyNote: {
      en: 're- ("again") + anim ("spirit, life") + -ate (verb) → to give life again, revive.',
      zh: 're-（再次）+ anim（精神、生命）+ -ate（动词后缀）→ 再次赋予生命，即复活。',
    },
    relatedWords: ['animate', 'animation', 'inanimate'],
  },
  {
    slug: 'animosity',
    lemma: 'animosity',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˌæn.ɪˈmɒs.ɪ.ti/' },
      us: { ipa: '/ˌæn.ɪˈmɑː.sə.t̬i/' },
    },
    definition: {
      en: 'Strong hostility or ill feeling toward someone.',
      zh: '憎恨；仇恨；敌意',
    },
    examples: [
      {
        en: ['There was deep animosity between the rival factions.'],
        zh: ['对立派系之间有着深深的敌意。'],
      },
    ],
    rootBreakdown: [
      { surface: 'anim', type: 'root', rootSlug: 'anim' },
      { surface: 'os', type: 'connector' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'anim ("spirit, feeling") + -os- + -ity (noun suffix) → a spirited feeling, typically hostile.',
      zh: 'anim（精神、感情）+ -os- + -ity（名词后缀）→ 激烈的情感，即仇恨。',
    },
    relatedWords: ['animal', 'animate', 'magnanimous'],
  },
  {
    slug: 'magnanimous',
    lemma: 'magnanimous',
    partOfSpeech: ['adj.'],
    pronunciation: {
      uk: { ipa: '/mæɡˈnæn.ɪ.məs/' },
      us: { ipa: '/mæɡˈnæn.ɪ.məs/' },
    },
    definition: {
      en: 'Generous or forgiving, especially toward a rival or less powerful person.',
      zh: '宽宏大量的；大度的',
    },
    examples: [
      {
        en: ['The magnanimous winner congratulated his opponent graciously.'],
        zh: ['大度的获胜者优雅地向对手表示祝贺。'],
      },
    ],
    rootBreakdown: [
      { surface: 'magn', type: 'root' },
      { surface: 'anim', type: 'root', rootSlug: 'anim' },
      { surface: 'ous', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'magn ("great") + anim ("spirit") + -ous (adjective) → having a great spirit, generous.',
      zh: 'magn（大）+ anim（精神）+ -ous（形容词后缀）→ 精神伟大的，即宽宏大量的。',
    },
    relatedWords: ['animosity', 'equanimity', 'animate'],
  },
  {
    slug: 'equanimity',
    lemma: 'equanimity',
    partOfSpeech: ['n.'],
    pronunciation: {
      uk: { ipa: '/ˌek.wəˈnɪm.ɪ.ti/' },
      us: { ipa: '/ˌek.wəˈnɪm.ə.t̬i/' },
    },
    definition: {
      en: 'Mental calmness and composure, especially in a difficult situation.',
      zh: '平静；沉着；镇定',
    },
    examples: [
      {
        en: ['She handled the crisis with remarkable equanimity.'],
        zh: ['她以非凡的镇定处理了这场危机。'],
      },
    ],
    rootBreakdown: [
      { surface: 'equ', type: 'root' },
      { surface: 'anim', type: 'root', rootSlug: 'anim' },
      { surface: 'ity', type: 'suffix' },
    ],
    morphologyNote: {
      en: 'equ ("equal") + anim ("spirit, mind") + -ity (noun) → an even spirit, composure.',
      zh: 'equ（平等）+ anim（精神、心灵）+ -ity（名词后缀）→ 平和的心境，即沉着。',
    },
    relatedWords: ['magnanimous', 'animosity', 'animate'],
  },
];
