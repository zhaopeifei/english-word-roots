# English Word Roots 样式设计规范

> 基于 peyton-ai-kit/web-gen 设计系统，为本项目定制的完整样式规范。
> 所有新增页面和组件必须遵循本文档。

---

## 目录

1. [设计令牌 (Design Tokens)](#1-设计令牌-design-tokens)
2. [色彩系统 (Color System)](#2-色彩系统-color-system)
3. [字体排版 (Typography)](#3-字体排版-typography)
4. [间距与形状 (Spacing & Shape)](#4-间距与形状-spacing--shape)
5. [组件规范 (Component Variants)](#5-组件规范-component-variants)
6. [动画模式 (Animation Patterns)](#6-动画模式-animation-patterns)
7. [响应式设计 (Responsive Design)](#7-响应式设计-responsive-design)
8. [暗色模式 (Dark Mode)](#8-暗色模式-dark-mode)
9. [禁止模式 (Prohibited Patterns)](#9-禁止模式-prohibited-patterns)

---

## 1. 设计令牌 (Design Tokens)

所有颜色通过 CSS 变量定义，在 `app/globals.css` 中管理。组件只能使用语义化 Tailwind 类名引用这些变量，**禁止硬编码颜色值**。

### 1.1 核心语义变量

本项目基于 web-gen 的 8 变量体系扩展，增加了 `card`、`popover`、`destructive` 等 shadcn/ui 适配变量。

| 变量 | 用途 | Light 值 | Dark 值 |
|------|------|----------|---------|
| `--background` | 页面背景 | `#fefdf6` (暖白) | `#0f1a0a` (深绿黑) |
| `--foreground` | 主要文字 | `#1a2e05` (深绿) | `#e8eade` (浅米) |
| `--primary` | 品牌主色/CTA | `#16a34a` (绿) | `#10b981` (emerald-500) |
| `--primary-foreground` | 主色上的文字 | `#ffffff` | `#022c22` |
| `--secondary` | 辅助强调 | `#d97706` (琥珀橙) | `#d97706` (amber-600) |
| `--secondary-foreground` | 辅助色上的文字 | `#ffffff` | `#451a03` |
| `--accent` | 第三强调 | `#8b5cf6` (紫) | `#8b5cf6` (violet-500) |
| `--accent-foreground` | 强调色上的文字 | `#ffffff` | `#1e1b4b` |
| `--muted` | 次要背景 | `#f5f5f0` | `#1a2414` |
| `--muted-foreground` | 次要文字 | `#6b7280` | `#94a38a` |
| `--card` | 卡片背景 | `#f0fdf4` (浅绿) | `#1a2e12` |
| `--card-foreground` | 卡片文字 | `#1a2e05` | `#e8eade` |
| `--border` | 边框 | `#e5e2d9` (暖灰) | `#2d3a24` |
| `--input` | 输入框边框 | `#e5e2d9` | `#2d3a24` |
| `--ring` | 焦点环 | `#16a34a` | `#10b981` |
| `--destructive` | 危险/错误 | `#ef4444` | `#dc2626` |

### 1.2 表面变量 (Surface Variants)

用于卡片列表的视觉交替，营造色彩层次感。

| 变量 | 用途 | Light 值 | Dark 值 |
|------|------|----------|---------|
| `--surface-warm` | 暖色卡片背景 | `#fef9ee` | `#1a1508` |
| `--surface-purple` | 紫色卡片背景 | `#f5f3ff` | `#1a1528` |
| `--surface-pink` | 粉色卡片背景 | `#fdf2f8` | `#1a1018` |

### 1.3 图表变量 (Chart Colors)

| 变量 | Light 值 | Dark 值 |
|------|----------|---------|
| `--chart-1` | `#16a34a` (绿) | `#22c55e` |
| `--chart-2` | `#d97706` (橙) | `#f59e0b` |
| `--chart-3` | `#8b5cf6` (紫) | `#a78bfa` |
| `--chart-4` | `#06b6d4` (青) | `#22d3ee` |
| `--chart-5` | `#ec4899` (粉) | `#f472b6` |

### 1.4 Tailwind @theme 映射

在 `globals.css` 的 `@theme inline {}` 块中注册变量到 Tailwind 类名：

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-secondary: var(--secondary);
  --color-accent: var(--accent);
  --color-muted: var(--muted);
  --color-border: var(--border);
  --color-surface-warm: var(--surface-warm);
  --color-surface-purple: var(--surface-purple);
  --color-surface-pink: var(--surface-pink);
  --font-heading: var(--font-lora);
  --font-body: var(--font-nunito);
}
```

> **注意**：本项目使用 **Tailwind CSS v4**（CSS-first 配置），不同于 web-gen 的 v3。
> v4 使用 `@import 'tailwindcss'` + `@theme {}` 语法。

---

## 2. 色彩系统 (Color System)

### 2.1 品牌三色体系

本项目以 **绿-橙-紫** 三色轮转创造视觉节奏：

| 角色 | 颜色 | Tailwind 类 | 使用场景 |
|------|------|-------------|----------|
| Primary | 绿 `#16a34a` | `bg-primary`, `text-primary` | CTA 按钮、链接、词根标签、焦点环 |
| Secondary | 琥珀橙 `#d97706` | `bg-secondary`, `text-secondary` | 次要按钮、强调标记 |
| Accent | 紫 `#8b5cf6` | `bg-accent`, `text-accent` | 后缀标签、装饰元素 |

### 2.2 卡片色彩轮转 (Card Color Rotation)

在列表中，每三张卡片交替使用不同的配色，避免视觉单调：

```css
.card-color-1 {
  --card-accent: var(--primary);     /* 绿色系 */
  --card-surface: var(--card);
}
.card-color-2 {
  --card-accent: var(--accent);      /* 紫色系 */
  --card-surface: var(--surface-purple);
}
.card-color-3 {
  --card-accent: var(--secondary);   /* 橙色系 */
  --card-surface: var(--surface-warm);
}
```

使用方式：`className={`card-color-${(index % 3) + 1}`}`

### 2.3 词素类型颜色 (Morpheme Type Colors)

| 类型 | 样式 | 说明 |
|------|------|------|
| 词根 `.morpheme-root` | 实心 primary 背景 + 白字 | 最醒目 |
| 前缀 `.morpheme-prefix` | 透明底 + 青色边框/文字 `#0891b2` | 暗色模式用 `#22d3ee` |
| 后缀 `.morpheme-suffix` | 透明底 + accent 边框/文字 | 使用 `var(--accent)` |
| 连接符 `.morpheme-connector` | 透明底 + muted 边框 | 最低调 |

### 2.4 语义域颜色 (Semantic Domain Colors)

语义域标签使用 Tailwind 内置色板（非设计令牌），遵循统一的 `bg-{color}-50 text-{color}-800 dark:bg-{color}-900/50 dark:text-{color}-200` 模式：

| 语义域 | 色系 | 语义域 | 色系 |
|--------|------|--------|------|
| life, walking, birth | green | fire, cutting, breaking | red |
| plants, amount, sitting | emerald | body, eating | rose |
| nature, holding, measuring | teal | health, emotion, giving | pink |
| water, movement, seeing, flowing | cyan | color, turning | fuchsia |
| air, pushing, breathing | sky | change, binding | purple |
| light, power, strength | yellow | space, mind, writing, similarity | violet |
| time, action, size | orange | sound, society, choosing, sleep | indigo |
| animals, speech, making, building, food | amber | number, knowledge, transport, sending | blue |
| earth, pulling, death | stone | position, standing | lime |
| law, ordering | slate | other | gray |

### 2.5 语源标签颜色 (Origin Pill Colors)

| 语源 | 色系 |
|------|------|
| Greek | blue |
| Latin | amber |
| Old English | emerald |
| Old French | rose |
| Germanic | stone |

### 2.6 允许使用的 Tailwind 颜色类

**设计令牌类**（日常组件开发使用）：

```
bg-background, bg-foreground, text-foreground, text-background
bg-primary, text-primary, border-primary
bg-secondary, text-secondary, border-secondary
bg-accent, text-accent, border-accent
bg-muted, text-muted-foreground, border-border
bg-card, text-card-foreground
bg-destructive, text-destructive
bg-surface-warm, bg-surface-purple, bg-surface-pink
```

**Tailwind 色板类**（仅用于语义域/语源等分类标签）：

```
bg-{color}-50 text-{color}-800 dark:bg-{color}-900/50 dark:text-{color}-200
```

---

## 3. 字体排版 (Typography)

### 3.1 字体家族

| 角色 | 字体 | CSS 变量 | Tailwind 类 | 说明 |
|------|------|----------|-------------|------|
| 标题 | **Lora** | `--font-lora` → `--font-heading` | `font-heading` | 衬线体，学术优雅感 |
| 正文 | **Nunito** | `--font-nunito` → `--font-body` | `font-body` | 无衬线体，友好易读 |

字体在 `app/layout.tsx` 中通过 `next/font/google` 加载，自动添加 `display: swap`。

### 3.2 全局字体规则

```css
/* globals.css @layer base */
body {
  @apply bg-background text-foreground font-body;
}
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading), serif;
}
```

### 3.3 响应式字号层级

遵循移动端优先的递进式字号：

| 元素 | 手机 (base) | 平板 (md:) | 桌面 (lg:) | 字重 |
|------|-------------|------------|------------|------|
| h1 | `text-2xl` | `text-3xl` | `text-4xl` / `text-5xl` | `font-bold` |
| h2 | `text-xl` | `text-2xl` | `text-3xl` | `font-bold` |
| h3 | `text-lg` | `text-xl` | — | `font-semibold` |
| 正文 | `text-base` (16px) | — | — | `font-normal` |
| 辅助文字 | `text-sm` (14px) | — | — | — |

> **最小字号**：正文不得小于 14px (`text-sm`)，避免在移动端阅读困难。

### 3.4 设计方向参考

本项目选用 web-gen "Elegant & Minimal" 方向的字体组合（衬线标题 + 无衬线正文），营造学术+友好的氛围。

---

## 4. 间距与形状 (Spacing & Shape)

### 4.1 圆角系统

```css
:root {
  --radius: 0.65rem;  /* 约 10.4px */
}
```

| 变量 | 计算 | 约值 | 用途 |
|------|------|------|------|
| `--radius-sm` | `var(--radius) - 4px` | ~6px | 小按钮、标签 |
| `--radius-md` | `var(--radius) - 2px` | ~8px | 输入框 |
| `--radius-lg` | `var(--radius)` | ~10px | 卡片 |
| `--radius-xl` | `var(--radius) + 4px` | ~14px | 大容器 |

页面中也使用 Tailwind 的 `rounded-xl`（12px）、`rounded-2xl`（16px）、`rounded-3xl`（24px）用于大面积区域。

### 4.2 边框粗细

| 场景 | 粗细 | 示例 |
|------|------|------|
| 卡片边框 | `1.5px` | `border-[1.5px]` |
| 分割线/header | `1.5px` | `border-b-[1.5px]` |
| 词素标签 | `2px` | `border-2` |
| 默认 | `1px` | `border` |

### 4.3 常用间距模式

| 场景 | 类名 |
|------|------|
| 页面容器 | `mx-auto w-full max-w-5xl px-4 py-10` |
| 区块间距 | `py-12 px-4` → `md:py-20` → `lg:py-28` |
| 卡片内边距 | `p-5` 或 `p-6` |
| 元素间距 | `gap-4` 或 `gap-6` |
| 紧凑列表 | `gap-2` |

### 4.4 背景装饰

```css
/* 点阵背景，用于全局装饰 */
.bg-dots {
  background-image: radial-gradient(circle, #d1d5db 1px, transparent 1px);
  background-size: 32px 32px;
}
.dark .bg-dots {
  background-image: radial-gradient(circle, #2d3a24 1px, transparent 1px);
}
```

在 `layout.tsx` 中以固定定位 + 低透明度覆盖全页：
```tsx
<div className="bg-dots pointer-events-none fixed inset-0 z-0 opacity-20" aria-hidden />
```

---

## 5. 组件规范 (Component Variants)

### 5.1 Button 组件

使用 `class-variance-authority (CVA)` 管理变体，定义在 `components/ui/button.tsx`。

**变体 (Variant)**：

| 变体 | 样式 | 用途 |
|------|------|------|
| `default` | `bg-primary text-primary-foreground` + shadow | 主要操作 |
| `secondary` | `bg-secondary text-secondary-foreground` | 次要操作 |
| `destructive` | `bg-destructive text-destructive-foreground` | 危险操作 |
| `outline` | 透明底 + border | 次要/取消 |
| `ghost` | 无背景，hover 显示 accent | 内联操作 |
| `link` | 下划线文本 | 文本链接 |

**尺寸 (Size)**：

| 尺寸 | 类名 | 用途 |
|------|------|------|
| `sm` | `h-8 px-3 text-xs` | 紧凑场景 |
| `default` | `h-9 px-4 py-2` | 标准 |
| `lg` | `h-10 px-8` | 醒目 CTA |
| `icon` | `h-9 w-9` | 图标按钮 |

### 5.2 卡片模式

```tsx
{/* 标准卡片 */}
<div className="rounded-2xl border-[1.5px] border-border bg-card p-5 shadow-sm">

{/* 带色彩轮转的列表卡片 */}
<div className={`card-color-${(i % 3) + 1} rounded-2xl border-[1.5px] p-5`}
     style={{ borderColor: 'var(--card-accent)', backgroundColor: 'var(--card-surface)' }}>
```

### 5.3 标签/徽章模式

```tsx
{/* 语义域标签 */}
<span className="rounded-full px-3 py-1 text-xs font-semibold bg-green-50 text-green-800
                  dark:bg-green-900/50 dark:text-green-200">
  🧬 life
</span>

{/* 词素类型标签 */}
<span className="morpheme-root rounded-md px-3 py-1.5 text-sm font-bold">
  duct
</span>
```

### 5.4 Header 模式

```tsx
<header className="border-border bg-background/90 sticky top-0 z-50 border-b-[1.5px] backdrop-blur-xl">
  <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
    {/* Logo + Nav + Controls */}
  </div>
</header>
```

关键特性：
- `sticky top-0 z-50`：固定顶部
- `bg-background/90 backdrop-blur-xl`：毛玻璃效果
- 导航链接：`rounded-full px-4 py-2`（胶囊形状）

### 5.5 交互状态

| 状态 | 处理方式 |
|------|----------|
| Hover 悬浮 | `-translate-y-1` + 增加阴影 |
| Hover 颜色 | `hover:bg-card` / `hover:text-primary` |
| Focus 焦点 | `focus-visible:ring-1 focus-visible:ring-ring` |
| Disabled 禁用 | `disabled:pointer-events-none disabled:opacity-50` |
| 过渡动画 | `transition-all` 或 `transition-colors` |

### 5.6 自定义下拉选择器 (Custom Select / Dropdown)

**禁止使用原生 `<select>`**——原生下拉框样式不受 CSS 控制、各浏览器/平台表现不一致。所有下拉选择场景统一使用 `CustomSelect` 组件（`components/ui/custom-select.tsx`）。

**触发按钮**：

```tsx
<button className="border-border bg-background text-muted-foreground hover:border-primary hover:text-primary
  flex h-9 cursor-pointer items-center gap-1.5 rounded-full border-[1.5px] px-3 text-xs font-bold transition-colors">
  <span>{selectedLabel}</span>
  <ChevronDown className="h-3 w-3" />  {/* 展开时 rotate-180 */}
</button>
```

**弹出面板**：

```tsx
<div className="border-border bg-card absolute left-0 top-full z-50 mt-2 min-w-[160px]
  overflow-hidden rounded-xl border shadow-lg">
```

**选项**：

| 状态 | 样式 |
|------|------|
| 选中 | `bg-primary/10 text-primary font-semibold` + `✓` 前缀 |
| 未选中 | `text-foreground hover:bg-muted` + `ml-5`（与 ✓ 对齐） |

**交互**：
- 点击按钮 toggle 开关
- 点击选项后关闭
- 点击外部区域关闭
- Escape 键关闭
- `aria-expanded`、`role="listbox"`、`role="option"`、`aria-selected`

**使用**：

```tsx
import { CustomSelect } from '@/components/ui/custom-select';

<CustomSelect
  value={selected}
  onChange={setSelected}
  aria-label="Filter by domain"
  options={[
    { value: 'all', label: 'All' },
    { value: 'life', label: '🧬 life' },
  ]}
/>
```

### 5.7 工具函数

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

所有组件使用 `cn()` 合并类名，自动处理 Tailwind 类冲突。

---

## 6. 动画模式 (Animation Patterns)

源自 web-gen 的 Motion 动画体系。本项目使用 CSS transition 为主（Next.js 环境），复杂场景可引入 `motion/react`。

### 6.1 基础动画规则

- 时长范围：`0.3s – 0.8s`
- 只动画 `opacity` 和 `transform`（x, y, scale, rotate）
- 滚动动画必须 `once: true`（只播放一次）
- Stagger 延迟：`0.08 – 0.15s`
- 交互动画用 spring 物理，入场动画用 `easeOut`

### 6.2 必备动画 (每个页面都应包含)

#### ScrollFadeIn — 滚动渐入

```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  {children}
</motion.div>
```

#### StaggerGrid — 交错入场

```tsx
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
```

#### HoverCard — 悬浮抬起

```tsx
<motion.div
  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
```

#### ButtonSpring — 按钮弹性

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
```

### 6.3 当前项目的 CSS 动画模式

部分页面使用纯 CSS 实现悬浮效果：

```tsx
{/* 卡片悬浮 */}
<div className="transition-all hover:-translate-y-1 hover:shadow-lg">

{/* 链接色彩过渡 */}
<a className="transition-colors hover:text-primary">
```

### 6.4 动画引入规则

```tsx
// 正确 — Motion v12+
import { motion } from "motion/react";

// 错误 — 旧包名
import { motion } from "framer-motion";  // ❌
```

---

## 7. 响应式设计 (Responsive Design)

### 7.1 断点系统

| 尺寸 | 宽度 | Tailwind 前缀 | 典型设备 |
|------|------|---------------|----------|
| 手机 | < 640px | (base，无前缀) | iPhone 竖屏 |
| 大手机 | 640–767px | `sm:` | iPhone 横屏 |
| 平板 | 768–1023px | `md:` | iPad 竖屏 |
| 桌面 | ≥ 1024px | `lg:` | 笔记本/桌面 |

**核心原则**：无前缀的类 = 手机样式，逐级用 `sm:` / `md:` / `lg:` 添加大屏样式。

### 7.2 页面容器

```tsx
<div className="mx-auto w-full max-w-5xl px-4 py-10">
  {children}
</div>
```

`max-w-5xl` = 1024px，配合 `px-4` 内边距。

### 7.3 常用响应式模式

| 模式 | 手机 (base) | 平板 (md:) | 桌面 (lg:) |
|------|-------------|------------|------------|
| 网格列数 | `grid-cols-1` | `md:grid-cols-2` | `lg:grid-cols-3` |
| Flex 方向 | `flex-col` | `md:flex-row` | — |
| 导航 | hamburger (`md:hidden`) | 横排 (`hidden md:flex`) | — |
| 标题字号 | `text-2xl` | `md:text-3xl` | `lg:text-5xl` |
| 区块内边距 | `py-12 px-4` | `md:py-20` | `lg:py-28` |

### 7.4 触控目标

所有可点击元素最小 44×44px：

```tsx
{/* 按钮 */}
<button className="min-h-[44px] px-6 py-3">

{/* 图标按钮 */}
<button className="min-h-[44px] min-w-[44px] flex items-center justify-center">
```

### 7.5 图片响应式

```tsx
<img className="w-full max-w-full h-auto" loading="lazy" alt="..." />
```

- 折叠线以下的图片：`loading="lazy"`
- Hero 图片不加 lazy（保证首屏速度）

### 7.6 CSS 基础规则

已内置于 `@layer base`：

```css
* { @apply outline-ring/50 border-border; }
body { @apply bg-background text-foreground font-body; }
```

---

## 8. 暗色模式 (Dark Mode)

### 8.1 实现方式

- **CSS 变量覆盖**：`.dark {}` 块覆盖 `:root {}` 中的所有变量
- **主题切换**：`next-themes` 库管理（在 `app/providers.tsx` 中配置）
- **持久化**：`localStorage` 存储用户选择
- **默认值**：跟随系统偏好（`prefers-color-scheme`）

### 8.2 颜色推导规则

| 类型 | Light → Dark 规则 |
|------|-------------------|
| 结构色（background, surface, border） | 反转明暗，保持冷暖一致 |
| 品牌色（primary, secondary, accent） | 微调亮度以保证对比度 ≥ 4.5:1 |
| 文字色（foreground, muted） | 反转为浅色，永远不用纯白 `#ffffff` |

本项目的特殊处理：
- 背景色保持 **暖绿色调**：Light `#fefdf6` → Dark `#0f1a0a`
- 品牌绿色柔化为青绿：`#16a34a` → `#10b981` (emerald-500)
- 品牌橙色保持同色：`#d97706` → `#d97706` (amber-600)
- 品牌紫色保持同色：`#8b5cf6` → `#8b5cf6` (violet-500)

### 8.3 编码规则

1. `.dark {}` **必须在** `:root {}` **之后**（CSS 级联顺序决定覆盖）
2. `.dark {}` 必须覆盖全部变量
3. **不使用** Tailwind `dark:` 前缀做颜色切换（通过 CSS 变量自动适配）
4. SVG/图标使用 `currentColor`
5. 卡片在暗色模式下必须有 `border border-border` 保证辨识度
6. 渐变使用 `from-background to-surface`，不硬编码颜色

**例外**：语义域标签等分类颜色可以使用 `dark:` 前缀，因为它们使用 Tailwind 色板而非设计令牌：
```tsx
className="bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-200"
```

### 8.4 点阵背景暗色适配

```css
.dark .bg-dots {
  background-image: radial-gradient(circle, #2d3a24 1px, transparent 1px);
}
```

---

## 9. 禁止模式 (Prohibited Patterns)

### 9.1 颜色相关

| 禁止 | 正确做法 |
|------|----------|
| `bg-white`, `bg-black` | `bg-background`, `bg-foreground` |
| `bg-gray-*`, `text-gray-*` | `bg-muted`, `text-muted-foreground` |
| `bg-gray-900`（Footer） | `bg-foreground text-background` 或 `bg-card border-t border-border` |
| JSX 中硬编码 `#hex` | 使用 CSS 变量 `var(--primary)` 或 Tailwind 类 |
| 在 `@apply` 中用 `/opacity` | 在 JSX className 中用（`bg-primary/10` ✅），或用 `color-mix()` |

### 9.2 表单控件相关

| 禁止 | 正确做法 |
|------|----------|
| 原生 `<select>` | 使用 `CustomSelect` 组件（§5.6） |

### 9.3 布局相关

| 禁止 | 正确做法 |
|------|----------|
| 固定宽度无响应 | `max-w-*` + `w-full` |
| `max-[breakpoint]:` 模式 | 始终用移动端优先 + `sm:` / `md:` / `lg:` |
| 触控目标 < 44px | 所有按钮/链接 `min-h-[44px]` |
| 正文字号 < 14px | 最小 `text-sm`，正文 `text-base` |

### 9.4 动画相关

| 禁止 | 正确做法 |
|------|----------|
| `import from "framer-motion"` | `import from "motion/react"` |
| 滚动动画重复播放 | `viewport={{ once: true }}` |
| 动画时长 > 1s | 控制在 0.3–0.8s |
| 动画 layout/width/height | 只动画 opacity + transform |

### 9.5 暗色模式相关

| 禁止 | 正确做法 |
|------|----------|
| `darkMode: 'media'` | 使用 `class` 模式（next-themes 管理） |
| 组件中用 `dark:` 切换令牌颜色 | CSS 变量自动适配 |
| 暗色文字用纯白 `#ffffff` | 用偏暖的近白色 `#e8eade` |

---

## 附录 A：技术栈速查

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 15+ | 框架 |
| React | 19 | UI 库 |
| Tailwind CSS | 4.1 | 工具类 CSS |
| tailwindcss-animate | 1.0 | 动画工具类 |
| class-variance-authority | 0.7 | 组件变体管理 |
| clsx + tailwind-merge | — | 类名合并 |
| next-themes | 0.2 | 主题切换 |
| Radix UI | — | 无样式原语组件 |
| Lora / Nunito | — | Google Fonts |

## 附录 B：文件结构速查

```
app/
├── globals.css              # 全局样式（所有 CSS 变量、@theme、@layer base）
├── layout.tsx               # 根布局（字体加载、全局结构）
├── providers.tsx             # ThemeProvider + LanguageProvider
├── home/                    # 首页
├── about/                   # 关于页
├── root/[slug]/             # 词根详情页
└── word/[slug]/             # 单词详情页
components/
├── ui/
│   ├── button.tsx           # Button (CVA 变体)
│   ├── custom-select.tsx    # 自定义下拉选择器
│   ├── table.tsx            # Table
│   └── tooltip.tsx          # Tooltip
├── site-header.tsx          # 全局导航栏
├── site-footer.tsx          # 全局页脚
├── theme-toggle.tsx         # 主题切换按钮
└── language-switcher.tsx    # 语言切换器
lib/
└── utils.ts                 # cn() 工具函数
```

## 附录 C：web-gen 通用规范 vs 本项目定制

| 规范项 | web-gen 通用 | 本项目定制 |
|--------|-------------|------------|
| 框架 | React 19 + Vite | Next.js 15 + App Router |
| Tailwind | v3（`@tailwind` 指令） | v4（`@import 'tailwindcss'`） |
| 色板 | 蓝/绿/紫 (Bold & Modern) | 绿/橙/紫 (自然/学术) |
| 字体 | Inter | Lora + Nunito |
| 暗色模式 | localStorage 直接操作 DOM | next-themes 库 |
| 路由 | React Router DOM 7 | Next.js App Router |
| 动画 | Motion v12（必须每页） | CSS transition 为主 + 可选 Motion |
| CSS 变量数 | 8 个核心 | 8 核心 + card/popover/destructive/surface 扩展 |
