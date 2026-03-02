# English Word Roots

基于词根词源的英语词汇学习平台。通过「理解一个词根，掌握一族单词」的方法论，帮助学习者系统性地构建词汇体系。

## 文档索引

| 文档 | 用途 |
|------|------|
| [docs/PROJECT.md](docs/PROJECT.md) | 项目愿景、教学方法论、数据架构、技术架构、路线图 |
| [docs/STYLE-GUIDE.md](docs/STYLE-GUIDE.md) | 设计语言、颜色体系、排版规范、组件模式、禁用模式 |

## 核心约束

- 品牌名：**English Word Roots**
- 纯静态导出（`output: 'export'`），零服务端依赖
- TypeScript strict 模式，所有代码必须通过类型检查
- 多语言 UI 同步：中英文内容必须同步维护
- 包管理器：**pnpm**

## 构建验证

每次提交前必须通过：

```bash
pnpm build        # 静态导出构建（~1300+ 页）
pnpm lint         # ESLint 检查
pnpm type-check   # TypeScript 类型检查
```

## 关键约定

### 数据

- **唯一数据源**：`content/` 目录下的 TypeScript 文件（roots.ts / affixes.ts / words/）
- **数据导入流程**：原始 Markdown → `scripts/import-data.mjs` → JSON → `scripts/generate-roots.mjs` → TypeScript
- **数据来源标注**：当前全部来自「宝爷万词王讲义」，原始文件在 `docs/sources/宝爷万词王_讲义合集.md`

### 样式

- 只用语义化 CSS 变量，禁止硬编码颜色值（`bg-white` / `#hex`）
- 动画库用 `motion/react`，禁止 `framer-motion`
- 语素配色：root = 绿色实底 / prefix = 青色描边 / suffix = 紫色描边 / connector = 灰色描边
- 详见 [STYLE-GUIDE.md](docs/STYLE-GUIDE.md) 的「禁用模式」章节

### 多语言

- 实现方式：React Context（`LanguageProvider`）+ `useLanguage()` hook
- 可翻译内容类型：`Record<Locale, string>`（`en` / `zh`）
- 新增文案时必须同时提供中英文
