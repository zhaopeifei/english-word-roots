import type { Locale } from '@/content/site';

export interface RootEntry {
  slug: string; // 词根的唯一标识符
  variants: string[]; // 词根的变体，例如 ["hydr", "hydro", "hydra"]

  languageOfOrigin: LanguageOfOrigin; // 词源语言，Greek / Latin / ...
  overview: Record<Locale, string>; // 通俗的整体介绍，多语言
  originSummary: Record<Locale, string>; // 词源解释，来自哪种语言、原始形式、含义，多语言

  semanticDomains: SemanticDomain[]; // 词根的语义领域，代表“这个词根跟什么有关”，比如：["water", "science"]
  relatedRoots: string[]; // 相关词根（同语义 or 同学科），存 root 的 slug
  associatedWords: string[]; // 派生单词（包含这个词根的词），存 word 的 slug
}

export interface WordEntry {
  slug: string; // Word 的 ID，例如 "biology"
  lemma: string; // 词形原型

  definition: Record<Locale, string>; // 多语言释义（建议单数）
  examples: Record<Locale, string[]>; // 多语言例句，可放多个

  rootBreakdown: MorphemeSegment[]; // 词的构词拆解
  relatedWords: string[]; // 与该词语义或构词相关的兄弟词，["biological", "biologist"]
}

export interface MorphemeSegment {
  surface: string; // 该片段在单词中的表面形式，比如 "bio" / "logy" / "o"
  type: 'root' | 'prefix' | 'suffix' | 'connector' | 'other'; // 该片段的类型：root / prefix / suffix / connector / other
  rootSlug?: string; // 仅在有对应 RootEntry 时填写，例如 type === 'root'
}

// 词源语言（有限集）
export type LanguageOfOrigin =
  | 'Greek'
  | 'Latin'
  | 'Old English'
  | 'Old French'
  | 'Germanic'
  | 'Proto-Indo-European'
  | 'Arabic'
  | 'Sanskrit'
  | 'Chinese'
  | 'Japanese'
  | 'Hebrew'
  | 'Other';

export type SemanticDomain =
  // 生物 & 自然界
  | 'life' // 生命（bio）
  | 'animals' // 动物
  | 'plants' // 植物
  | 'body' // 身体 (derm, cardi)
  | 'health' // 健康/疾病 (path, therap)
  | 'nature' // 自然（eco, geo 泛自然）

  // 物质世界
  | 'water' // hydr
  | 'earth' // geo
  | 'fire' // pyro
  | 'air' // aero
  | 'light' // photo
  | 'sound' // phon
  | 'color' // chrom

  // 抽象概念
  | 'time' // chron
  | 'space' // tele
  | 'number' // mono, poly
  | 'position' // sub-, super-
  | 'movement' // mot/mob, grad
  | 'change' // morph, meta
  | 'amount' // hyper, hypo

  // 认知 & 人类社会
  | 'mind' // psych
  | 'emotion' // pathos, anim
  | 'speech' // dict, log
  | 'knowledge' // sci, cogn
  | 'power' // dyn, poten
  | 'law' // nom, jur
  | 'society' // socio, demo

  // 其他
  | 'other';
