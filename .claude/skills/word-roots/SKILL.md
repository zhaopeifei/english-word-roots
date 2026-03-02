---
name: word-roots
description: English Word Roots 项目规范入口。修改代码或内容前必须先加载此技能以获取项目上下文。
---

# English Word Roots 项目规范

在进行任何开发工作之前，请先阅读以下文档获取完整上下文：

## 前置知识

1. **[docs/PROJECT.md](../../docs/PROJECT.md)** — 项目全貌
   - 愿景与目标用户
   - 词根驱动学习法 & 格里姆法则（语音变化规律）
   - 数据架构：4 种核心数据类型（RootEntry / WordEntry / AffixEntry / MorphemeSegment）
   - 技术架构与路线图

2. **[docs/STYLE-GUIDE.md](../../docs/STYLE-GUIDE.md)** — 设计规范
   - 设计令牌（CSS 变量体系）
   - 颜色系统：三色轮换、语素配色、语义域配色、词源标签配色
   - 排版：Lora（标题）+ Nunito（正文）
   - 组件模式与交互规范
   - **禁用模式清单**（必读）

## 修改流程

1. **理解** — 先阅读上述文档，理解项目的教学方法论和设计语言
2. **评估** — 确认修改范围，评估对现有页面的影响（~1300+ 静态页面）
3. **实现** — 遵循 STYLE-GUIDE.md 的设计规范和禁用模式
4. **验证** — 执行构建验证：
   ```bash
   pnpm build        # 静态导出
   pnpm lint         # ESLint
   pnpm type-check   # TypeScript
   ```
5. **审查** — 检查多语言内容是否同步（中英文）

## 数据操作

### 导入新数据

原始讲义 → 解析脚本 → TypeScript 数据文件：

```bash
node scripts/import-data.mjs      # Markdown → JSON
node scripts/generate-roots.mjs   # JSON → TypeScript
```

### 数据目录结构

```
content/
├── roots.ts          # 122 词根
├── affixes.ts        # 41 词缀
├── words/            # 按词根 slug 分目录
│   ├── act/index.ts
│   ├── bio/index.ts
│   └── ...
└── site.ts           # 站点配置（导航、元数据）
```

### 新增词根/单词

- 词根添加到 `content/roots.ts`，遵循 `RootEntry` 类型
- 单词在 `content/words/{root-slug}/index.ts` 中添加，遵循 `WordEntry` 类型
- 词缀添加到 `content/affixes.ts`，遵循 `AffixEntry` 类型
- 所有含义字段必须提供 `{ en: "...", zh: "..." }` 双语内容
