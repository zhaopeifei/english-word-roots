# WordRoots 项目文档

> 项目核心参考文档，记录愿景、方法论、架构和发展规划。
> 最后更新：2026-03-02

---

## 目录

1. [愿景与目标](#1-愿景与目标)
2. [教学方法论](#2-教学方法论)
3. [数据架构](#3-数据架构)
4. [技术架构](#4-技术架构)
5. [多语言策略](#5-多语言策略)
6. [当前状态 (v0.1)](#6-当前状态-v01)
7. [路线图](#7-路线图)

---

## 1. 愿景与目标

### 1.1 核心愿景

**WordRoots** 是一个面向全球英语学习者的词源学习平台。通过将词汇按共享词根组织，帮助学习者从"死记硬背"转向"理解词源、系统记忆"。

项目的核心信念：**理解一个词根，就能理解一族单词。**

### 1.2 目标用户

面向**所有英语学习者**，不限语言背景：

- 备考学生（四六级、雅思、GRE、SAT 等）
- 自主提升词汇量的职场人士
- 对词源学感兴趣的语言爱好者
- 英语教师和教育工作者

### 1.3 核心价值

| 价值 | 说明 |
|------|------|
| **词根驱动** | 以词根为核心组织知识网络，而非按字母或词频排列 |
| **词源透明** | 每个单词都可分解为词素（前缀 + 词根 + 后缀），揭示构词逻辑 |
| **多语言友好** | 当前支持中英双语，规划覆盖 11+ 语言 |
| **开放免费** | 开源项目，内容对所有人开放 |
| **SEO 优先** | 静态页面架构，让搜索引擎成为用户发现词根知识的入口 |

### 1.4 项目定位

WordRoots 不是又一个"背单词 App"。它是一个**词源知识库**——用户通过搜索引擎或直接访问，发现词根之间的关联，理解单词的"前世今生"。未来会逐步加入用户互动功能（记忆卡片、测验等），但核心始终是**高质量的词源内容和直观的可视化呈现**。

---

## 2. 教学方法论

### 2.1 词根驱动学习 (Root-Driven Learning)

核心方法：从词根出发，串联一族单词。

```
词根 duct（引导）
├── con + duct → conduct（引导在一起 → 指挥/行为）
├── pro + duct → product（向前引导 → 产品）
├── intro + duct + ion → introduction（引导进入 → 介绍）
└── de + duct → deduct（向下引导 → 扣除）
```

学习者掌握一个词根后，遇到含有该词根的陌生单词时，可以通过词素分解推断含义。

### 2.2 词素分解可视化 (Morpheme Decomposition)

每个单词被分解为有颜色编码的词素：

| 词素类型 | 视觉标识 | 作用 |
|----------|----------|------|
| **词根** (root) | 实心绿色背景 | 单词的核心语义 |
| **前缀** (prefix) | 青色边框 | 修饰方向、否定、程度等 |
| **后缀** (suffix) | 紫色边框 | 决定词性（名词/动词/形容词） |
| **连接符** (connector) | 灰色边框 | 连接音节，无实际语义 |

每个词素都可以点击，跳转到对应的词根详情页，实现知识网络的自然探索。

### 2.3 Grimm's Law 语音变化规律

**格里姆定律**是项目的重要辅助方法论，帮助学习者理解为什么同源词根会有不同的拼写形式。

项目中整理的六种语音变化模式：

| 模式 | 说明 | 示例 |
|------|------|------|
| **元音交替** | 元音在词根变体间切换 | man/min/men, cap/cep/cip |
| **辅音清浊交替** | 清辅音 ↔ 浊辅音 | b/p/f/v, d/t/s/z, g/k/c/q |
| **鼻音替换** | m/n/ng 互换 | sim/syn, com/con |
| **流音交替** | l/r 互换 | alter/other |
| **H 脱落** | 词根变体中 h 消失 | herb/erb |
| **字母换位** | 字母顺序调换 | aks/ask |

理解这些规律后，学习者能识别出表面上不同的拼写其实是同一个词根的变体（如 `act/ag`、`scrib/script`）。

### 2.4 语义域分类 (Semantic Domains)

每个词根被标记了所属的语义域（如 life、time、movement、action 等，共 45+ 个类别）。这使得学习者可以按主题探索相关词根，而非仅靠字母顺序。

### 2.5 未来教学维度（规划中）

- **热门词根排行**：如"最热的 50 个词根"、"最常用单词"等筛选维度
- **频率标签**：按 common / academic / advanced / rare 分级
- **考试标签**：按 CET-4、IELTS、GRE 等标注关联

---

## 3. 数据架构

### 3.1 四大核心数据类型

```
RootEntry (词根)
  ├── WordEntry (单词) ─── 通过 rootBreakdown 反向关联
  ├── AffixEntry (词缀) ─── 通过 MorphemeSegment 关联
  └── MorphemeSegment (词素) ─── 单词的构成单元
```

#### RootEntry（词根）

词根是整个数据模型的中心节点。

| 字段 | 类型 | 说明 |
|------|------|------|
| `slug` | string | 唯一标识，如 `"act"`, `"bio"` |
| `variants` | string[] | 拼写变体，如 `["act", "ag"]` |
| `meaning` | Record\<Locale, string\> | 核心含义（多语言） |
| `languageOfOrigin` | enum | 来源语言（Latin, Greek, PIE 等） |
| `etymology` | string | 词源追溯，如 `"Greek βίος"` |
| `overview` | Record\<Locale, string\> | 详细说明（多语言） |
| `originSummary` | Record\<Locale, string\> | 词源故事（多语言） |
| `semanticDomains` | SemanticDomain[] | 语义域分类 |
| `relatedRoots` | string[] | 相关词根 slug |
| `associatedWords` | string[] | 关联单词 slug |
| `grimmLawGroup` | string? | Grimm's Law 分组，如 `"b/p/f/v"` |

#### WordEntry（单词）

| 字段 | 类型 | 说明 |
|------|------|------|
| `slug` | string | 唯一标识 |
| `lemma` | string | 单词原形 |
| `partOfSpeech` | string[] | 词性 |
| `pronunciation` | { uk, us } | 英美音标 (IPA) |
| `definition` | Record\<Locale, string\> | 释义（多语言） |
| `examples` | Array\<Record\<Locale, string[]\>\> | 例句（多语言） |
| `rootBreakdown` | MorphemeSegment[] | 词素分解 |
| `morphologyNote` | Record\<Locale, string\> | 构词说明 |
| `relatedWords` | string[] | 相关单词 |
| `frequency` | enum? | 频率等级 |
| `tags` | string[]? | 考试标签（CET-4, IELTS 等） |

#### AffixEntry（词缀）

| 字段 | 类型 | 说明 |
|------|------|------|
| `slug` | string | 唯一标识 |
| `form` | string | 显示形式，如 `"pre-"`, `"-tion"` |
| `type` | enum | `prefix` 或 `suffix` |
| `meaning` | Record\<Locale, string\> | 含义（多语言） |
| `examples` | string[] | 示例单词 |

#### MorphemeSegment（词素）

单词分解的最小单元，用于可视化展示。

| 字段 | 类型 | 说明 |
|------|------|------|
| `surface` | string | 表面形式，如 `"bio"`, `"-logy"` |
| `type` | enum | `root` / `prefix` / `suffix` / `connector` |
| `rootSlug` | string? | 关联词根（可点击跳转） |
| `affixSlug` | string? | 关联词缀 |

### 3.2 数据来源

| 来源 | 状态 | 说明 |
|------|------|------|
| **宝爷万词王讲义** | ✅ 已导入 | 初始数据集，122 词根 + 1164 单词 + 41 词缀 |
| **Wiktionary 词源** | ✅ 已集成 | 通过 scripts/fetch-wiktionary.ts 批量获取词源数据 |
| **Claude 语素分析** | ✅ 已集成 | 通过 scripts/enrich-morphemes.ts 进行词素分解和词源分类 |
| **Claude 例句生成** | ✅ 已集成 | 通过 scripts/generate-examples.ts 生成双语例句 |

### 3.3 数据管线

```
Supabase 数据库（唯一数据源）
    ↑ 初始导入：content/*.ts → scripts/restructure-seed-data.ts → seed-data/*.json
    ↑ 丰富化管线：
    │   scripts/fetch-wiktionary.ts      → Wiktionary 词源数据
    │   scripts/enrich-morphemes.ts      → Claude 词素分析 + 词源分类
    │   scripts/generate-examples.ts     → Claude 双语例句
    ↓ 前端访问：
    lib/db/ (roots.ts / words.ts / affixes.ts / mappers.ts)
        → Server Components (SSR/ISR, revalidate=3600)
```

### 3.4 数据库表结构

| 表 | 说明 |
|------|------|
| `roots` | 词根（~124 条），含语义域、格林法则分组 |
| `words` | 单词（~15,000 条），含 CEFR、Collins 星级、Oxford 标记、词频排名 |
| `affixes` | 词缀（41 条） |
| `morpheme_segments` | 词素分解 |
| `word_examples` | 双语例句 |
| `tags` / `word_tags` | 考试标签（CET-4/6、TOEFL、IELTS、GRE 等） |
| `root_words` | 词根-单词多对多关联 |
| `word_relations` / `root_relations` | 同义/反义关系 |

---

## 4. 技术架构

### 4.1 技术栈

| 层级 | 技术 | 版本 | 选型理由 |
|------|------|------|----------|
| **框架** | Next.js | 15 | App Router + SSR/ISR on Vercel |
| **UI** | React | 19 | Server Components + Client Components |
| **数据库** | Supabase | — | PostgreSQL，词汇数据唯一数据源 |
| **语言** | TypeScript | 5.4 | 严格模式，类型安全 |
| **样式** | Tailwind CSS | 4.0 | CSS-first 配置，设计令牌驱动 |
| **组件** | Radix UI | — | 无障碍原语组件（Button、Tooltip 等） |
| **主题** | next-themes | 0.2 | Light/Dark 模式持久化 |
| **字体** | Lora + Nunito | — | 衬线标题 + 无衬线正文，学术 + 友好 |
| **包管理** | pnpm | 8.15 | 高效、严格依赖管理 |

### 4.2 架构原则

**SEO 优先，SSR/ISR**

项目部署在 Vercel，使用 Next.js SSR/ISR 模式，数据源为 Supabase：

- 首次请求时从 Supabase 获取数据渲染页面
- ISR 缓存 1 小时（`revalidate = 3600`），兼顾性能和数据新鲜度
- ~15,000 个单词页 + ~124 个词根页
- 搜索引擎可直接抓取完整的 HTML 内容

**结构化数据**

每个词根和单词详情页都嵌入 JSON-LD 结构化数据（DefinedTerm schema），帮助搜索引擎理解页面内容，提升在 Knowledge Graph 中的展示。

### 4.3 路由结构

| 路由 | 页面 | 类型 | 说明 |
|------|------|------|------|
| `/` | — | 重定向 | → `/home` |
| `/home` | 首页 | 静态 | Hero、特色词根、热门单词、词素分解示例 |
| `/about` | 关于 | 静态 | 愿景、方法论、数据统计 |
| `/root` | 词根列表 | 静态 | 浏览所有词根（网格/列表视图） |
| `/root/[slug]` | 词根详情 | SSR/ISR | 词根信息、关联单词表（含考试标签）、相关词根 |
| `/word/[slug]` | 单词详情 | SSR/ISR | 发音、释义、考试标签、CEFR/Collins/Oxford、词素分解、例句 |
| `/sitemap.xml` | 站点地图 | 生成 | 动态生成，包含所有页面 URL |

### 4.4 组件架构

```
app/layout.tsx          ← 根布局（字体、主题、全局结构）
  ├── providers.tsx     ← ThemeProvider + LanguageProvider
  ├── site-header.tsx   ← 全局导航（Logo、导航链接、语言/主题切换）
  ├── [page]/index.tsx  ← 页面级组件（co-located 模式）
  └── site-footer.tsx   ← 全局页脚

components/ui/          ← 基础 UI 组件（Button、Table、Tooltip）
lib/db/                 ← Supabase 数据访问层（getRootBySlug 等）
lib/i18n/               ← 国际化字典
types/content.ts        ← TypeScript 类型定义
```

页面组件采用 **co-location** 模式——每个路由的页面组件（如 `HomeScreen`、`RootDetail`）直接放在对应路由目录下，而非集中到 `components/` 中。

### 4.5 SEO 策略

| 策略 | 实现 |
|------|------|
| SSR/ISR | Vercel Serverless Functions + 1 小时 ISR 缓存 |
| 动态 metadata | `generateMetadata()` 为每个页面生成 title/description |
| Open Graph | 每个页面都有 OG + Twitter Card 标签 |
| 结构化数据 | JSON-LD（WebSite + DefinedTerm） |
| Sitemap | `sitemap.ts` 动态生成包含所有路由的 XML |
| Robots | `robots.ts` 允许所有爬虫 |
| 语言声明 | HTML lang 属性 + hreflang alternates |

---

## 5. 多语言策略

### 5.1 当前状态

- **已支持**：English (en)、中文 (zh)
- **切换方式**：客户端即时切换，无页面刷新
- **实现**：React Context (`LanguageProvider`) + `useLanguage()` Hook

### 5.2 多语言实现方式

所有内容使用 `Record<Locale, string>` 存储双语文本：

```typescript
// 数据层：每个字段都有多语言值
meaning: {
  en: "do, act, drive",
  zh: "干/做/动"
}

// UI 层：翻译字典
const dictionaries = {
  en: { tagline: "Discover the roots of English", ... },
  zh: { tagline: "探索英语的词根", ... }
}
```

### 5.3 扩展规划

**目标**：支持 11+ 种语言。

扩展时需要处理的内容层级：

| 层级 | 工作量 | 说明 |
|------|--------|------|
| **UI 字典** | 较小 | 按钮、标签、导航等固定文本翻译 |
| **词根含义** | 中等 | 每个词根的 meaning、overview、originSummary |
| **单词释义** | 较大 | 每个单词的 definition、examples、morphologyNote |
| **例句** | 最大 | 每个单词的多条例句需要翻译 |

当前架构（`Record<Locale, string>`）天然支持多语言扩展，添加新语言只需在数据文件中补充对应 locale 的值。

---

## 6. 当前状态 (v0.1)

### 6.1 数据规模

| 指标 | 数量 |
|------|------|
| 词根 (Roots) | ~124 个 |
| 单词 (Words) | ~15,000 个 |
| 词缀 (Affixes) | 41 个 |
| 语义域 (Semantic Domains) | 45+ 个类别 |
| 考试标签 | 8 种（CET-4/6、TOEFL、IELTS、GRE、GMAT、SAT、TOEIC） |
| 页面 | ~15,000+ 个（SSR/ISR） |

### 6.2 已完成功能

- [x] 词根浏览列表页（网格视图 + 色彩轮转）
- [x] 词根详情页（词源、语义域、关联单词表）
- [x] 单词详情页（发音、释义、词素分解可视化、例句）
- [x] 词素颜色编码 + 可点击跳转
- [x] 中英双语切换
- [x] Light/Dark 主题切换
- [x] 响应式设计（移动端 → 桌面端）
- [x] SEO 全套配置（sitemap、robots、JSON-LD、OG tags）
- [x] 静态导出，可部署到 CDN
- [x] 数据导入流水线（Markdown → JSON → TypeScript）

### 6.3 数据来源

当前全部数据来自**宝爷万词王讲义**，通过自定义脚本解析导入。这是项目的初始数据集，后续将扩展更多权威数据来源。

---

## 7. 路线图

整体发展策略：**页面基础 → 数据补充 → 用户功能 → 商业化**

### Phase 1：页面基础优化

> 打磨现有页面的交互体验和视觉表现

- 优化 UI 样式和页面结构
- 增加单词发音功能
- 完善页面交互细节（动画、导航、搜索等）
- 根据需要调整和优化数据结构

### Phase 2：数据补充与多语言

> 扩充内容数量和语言覆盖

- 补充多语言支持（从 2 种扩展到更多语言）
- 增加单词例句数量
- 丰富词根和单词的数据质量（释义、词源故事等）
- 接入更多权威词库数据来源

### Phase 3：内容特性

> 增加有教学价值的内容维度

- "最热的 50 个词根"等策划内容
- "最常用单词"排行/筛选
- 按考试类型（CET-4、IELTS、GRE）筛选
- 更多教学方法论维度的探索

### Phase 4：用户功能

> 增加用户互动和个性化体验

- 记忆卡片 (Flashcards)
- 词汇测验 (Quiz)
- 学习进度追踪
- 个人收藏和学习计划

### Phase 5：商业化（视用户规模）

> 在用户基础成熟后探索可持续发展

- 广告接入
- 其他可能的商业模式

---

## 附录：项目结构速查

```
english-word-roots/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # 根布局
│   ├── globals.css         # 全局样式 + CSS 变量
│   ├── providers.tsx       # Theme + Language Provider
│   ├── home/               # 首页
│   ├── about/              # 关于页
│   ├── root/[slug]/        # 词根详情页（SSG）
│   └── word/[slug]/        # 单词详情页（SSG）
├── components/             # 复用组件
│   ├── ui/                 # 基础 UI 组件
│   ├── site-header.tsx     # 全局导航
│   └── site-footer.tsx     # 全局页脚
├── content/                # 遗留静态数据（备份，不再被页面直接使用）
│   └── site.ts             # 站点配置（仍在使用）
├── lib/                    # 工具函数
│   ├── db/                 # Supabase 数据访问层
│   │   ├── roots.ts        # 词根查询
│   │   ├── words.ts        # 单词查询
│   │   ├── affixes.ts      # 词缀查询
│   │   ├── mappers.ts      # DB 行 → TypeScript 类型映射
│   │   └── index.ts        # Barrel 导出
│   ├── supabase.ts         # Supabase 客户端
│   └── i18n/               # 国际化字典
├── supabase/               # 数据库
│   ├── schema.sql          # 表结构定义
│   └── seed-data/          # 种子数据 JSON
├── types/                  # TypeScript 类型定义
├── scripts/                # 数据导入脚本
├── docs/                   # 项目文档
│   ├── PROJECT.md          # 本文档
│   ├── STYLE-GUIDE.md      # 样式设计规范
│   └── sources/            # 数据源原始文件
└── public/                 # 静态资源
```
