# English Word Roots

基于词根词源的英语词汇学习平台。通过「理解一个词根，掌握一族单词」的方法论，帮助学习者系统性地构建词汇体系。

## 文档索引

| 文档 | 用途 |
|------|------|
| [docs/PROJECT.md](docs/PROJECT.md) | 项目愿景、教学方法论、数据架构、技术架构、路线图 |
| [docs/STYLE-GUIDE.md](docs/STYLE-GUIDE.md) | 设计语言、颜色体系、排版规范、组件模式、禁用模式 |

## 核心约束

- 品牌名：**English Word Roots**
- SSR/ISR 部署于 Vercel，数据源为 Supabase（PostgreSQL）
- TypeScript strict 模式，所有代码必须通过类型检查
- 多语言 UI 同步：中英文内容必须同步维护
- 包管理器：**pnpm**

## 环境变量

```
NEXT_PUBLIC_SUPABASE_URL=...         # Supabase 项目 URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=...    # Supabase anon key（前端/SSR 使用）
SUPABASE_SERVICE_ROLE_KEY=...        # 仅脚本使用（绕过 RLS）
```

## 构建验证

每次提交前必须通过：

```bash
pnpm build        # SSR/ISR 构建
pnpm lint         # ESLint 检查
pnpm type-check   # TypeScript 类型检查
```

## 关键约定

### 数据

- **唯一数据源**：Supabase 数据库，通过 `lib/db/` 模块访问
- **数据访问层**：`lib/db/`（roots.ts / words.ts / affixes.ts / mappers.ts）
- **数据丰富化管线**：`scripts/fetch-wiktionary.ts` → `scripts/enrich-morphemes.ts` → `scripts/generate-examples.ts`
- **遗留静态数据**：`content/` 目录保留作为备份，不再被页面直接使用
- **站点配置**：`content/site.ts` 仍为静态导入（品牌名、URL、导航等）

### 样式

- 只用语义化 CSS 变量，禁止硬编码颜色值（`bg-white` / `#hex`）
- 动画库用 `motion/react`，禁止 `framer-motion`
- 语素配色：root = 绿色实底 / prefix = 青色描边 / suffix = 紫色描边 / connector = 灰色描边
- 详见 [STYLE-GUIDE.md](docs/STYLE-GUIDE.md) 的「禁用模式」章节

### 多语言

- 实现方式：React Context（`LanguageProvider`）+ `useLanguage()` hook
- 可翻译内容类型：`Record<Locale, string>`（`en` / `zh`）
- 新增文案时必须同时提供中英文
