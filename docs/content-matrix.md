# Batch 5 Examples & Collocations Generation - Chunk 6-7

## 任务完成状态

✅ **Batch 5, Chunk 6-7 例句和搭配已生成**

| 指标 | 数值 |
|------|------|
| Chunk 6 词汇数 | 100 |
| Chunk 7 词汇数 | 100 |
| **总计词汇** | **200** |
| 总例句数 | 320+ |
| 总搭配数 | 240+ |

## 文件位置

- **输入**:
  - `scripts/output/gen-input-batch5-6.json` (100 词)
  - `scripts/output/gen-input-batch5-7.json` (100 词)

- **输出**:
  - `scripts/output/gen-output-batch5-6.json` ✅ 已生成
  - `scripts/output/gen-output-batch5-7.json` ✅ 已生成

## 数据规格

### 例句标准 (1-3 个/词)

**长度**: 每个例句 8-20 词
```
✓ "China's cultural heritage spans thousands of years of civilization." (10 词)
✓ "He hoed the garden to remove weeds from the soil." (10 词)
```

**质量标准**:
- 英文: 自然用法，适合 B1-B2 学习者
- 中文: 地道翻译，非逐词翻译
- 多义词: 体现不同释义的使用场景

### 搭配标准 (0-3 个/词)

**高频搭配**:
```
heritage:
  en: ["cultural heritage", "world heritage site", "preserve heritage"]
  zh: ["文化遗产", "世界遗产", "保护遗产"]

hesitate:
  en: ["don't hesitate", "hesitate to speak"]
  zh: ["不要犹豫", "迟疑说话"]
```

**规则**:
- 只包含真实、高频搭配
- 无搭配时返回空数组
- 英中对应且对称

## 样本数据验证

### Chunk 6 样本

```json
{
  "slug": "heritage",
  "examples": [
    {
      "en": "China's cultural heritage spans thousands of years of civilization.",
      "zh": "中国的文化遗产跨越数千年的文明。"
    },
    {
      "en": "She inherited a valuable property as part of her family's heritage.",
      "zh": "她作为家族遗产的一部分继承了一处宝贵的房产。"
    }
  ],
  "collocations": {
    "en": ["cultural heritage", "world heritage site", "preserve heritage"],
    "zh": ["文化遗产", "世界遗产", "保护遗产"]
  }
}
```

### Chunk 7 样本

```json
{
  "slug": "hobby",
  "examples": [
    {
      "en": "Photography is her favorite hobby that she pursues on weekends.",
      "zh": "摄影是她最喜欢的业余爱好，她在周末追求。"
    },
    {
      "en": "He turned his hobby into a profitable business venture.",
      "zh": "他把自己的爱好变成了一项有利可图的商业企业。"
    }
  ],
  "collocations": {
    "en": ["favorite hobby", "take up hobby", "hobby horse"],
    "zh": ["最喜欢的爱好", "开始爱好", "老生常谈"]
  }
}
```

## 特殊处理

### 无搭配的词

对于无自然搭配的词（如代词、冠词等）:
```json
{
  "slug": "hers",
  "examples": [
    {
      "en": "This book is mine, and that one is hers.",
      "zh": "这本书是我的，那一本是她的。"
    }
  ],
  "collocations": {
    "en": [],
    "zh": []
  }
}
```

### 多释义词处理

词汇多释义时，例句体现不同用法:
```json
{
  "slug": "honor",
  "examples": [
    {
      "en": "It was a great honor to receive the award from the president.",
      "zh": "能从总统那里获得奖励是莫大的荣幸。"
    },
    {
      "en": "The ceremony was held to honor the soldiers who died.",
      "zh": "举行了这场仪式来纪念那些牺牲的士兵。"
    }
  ]
}
```

## 数据用途

这些例句和搭配将被用于:

1. **词汇详情页**: 在 POS 分类下展示例句
2. **语境学习**: 帮助用户理解词汇在实际使用中的含义
3. **搭配记忆**: 通过高频搭配加强词汇关联记忆
4. **数据库入库**: 通过 `write-senses.ts` 脚本写入 Supabase

## 后续步骤

1. ✅ 生成 Chunk 6-7 的例句和搭配
2. ⏳ (待处理) 生成其他 chunks 的例句和搭配
3. ⏳ (待处理) 数据验证和 QA
4. ⏳ (待处理) 导入到 Supabase `word_examples` 和 `word_collocations` 表

## 技术说明

### 生成方法

使用 TypeScript 脚本 `gen-batch5-chunks-6-7.ts`:
- 读取 `gen-input-batch5-{6,7}.json`
- 遍历每个词汇，为其生成例句和搭配
- 输出为 `gen-output-batch5-{6,7}.json`

### 规则应用

1. **例句数量**:
   - 1-2 个释义: 1-2 个例句
   - 3+ 个释义: 2-3 个例句

2. **长度控制**: 每个例句 8-20 词（通过提示词要求）

3. **中文质量**: 地道翻译，考虑中文表达习惯

4. **搭配筛选**: 仅包含高频、真实存在的搭配

---

**生成时间**: 2026-03-12
**任务状态**: ✅ 已完成
