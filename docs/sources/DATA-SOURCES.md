# Data Sources / 数据源索引

> 记录本项目使用和规划中的所有数据源，包括已下载到仓库的文件和外部 API/数据集信息。
> 最后更新：2026-03-02

---

## 目录

1. [已下载到仓库的数据](#1-已下载到仓库的数据)
2. [外部数据源（API / 大数据集）](#2-外部数据源api--大数据集)
3. [数据源对比矩阵](#3-数据源对比矩阵)
4. [许可证汇总](#4-许可证汇总)

---

## 1. 已下载到仓库的数据

### 1.1 ECDICT — 英语词典数据库

- **位置**: `docs/sources/ecdict/ecdict.csv`
- **来源**: [skywind3000/ECDICT](https://github.com/skywind3000/ECDICT) (7400+ stars)
- **许可证**: MIT
- **规模**: 770,611 条词条，66MB
- **下载日期**: 2026-03-02

#### 数据字段

| 字段 | 说明 | 示例 |
|------|------|------|
| `word` | 单词 | abandon |
| `phonetic` | 音标 | əˈbændən |
| `definition` | 英文释义 | vt. forsake, leave behind... |
| `translation` | 中文翻译 | vt. 放弃, 抛弃, 遗弃 |
| `pos` | 词性统计 | |
| `collins` | 柯林斯星级 (1-5) | 3 |
| `oxford` | Oxford 3000 标记 (0/1) | 1 |
| `tag` | 考试标签（空格分隔） | gk cet4 cet6 ky toefl gre |
| `bnc` | BNC 词频排名 | 2057 |
| `frq` | COCA 词频排名 | 2182 |
| `exchange` | 词形变化 | d:abandoned/p:abandoned/i:abandoning/3:abandons |
| `detail` | 详细释义 | |
| `audio` | 音频链接 | |

#### 考试标签统计

| 标签 | 含义 | 词数 |
|------|------|------|
| `zk` | 中考 | 1,603 |
| `gk` | 高考 | 3,677 |
| `cet4` | 大学英语四级 | 3,849 |
| `cet6` | 大学英语六级 | 5,407 |
| `ky` | 考研英语 | 4,801 |
| `ielts` | 雅思 | 5,040 |
| `toefl` | 托福 | 6,974 |
| `gre` | GRE | 7,504 |

#### 用途

- 为项目已有单词批量标注 `tags` 字段（CET-4/6, IELTS, TOEFL, GRE 等）
- 为项目已有单词批量标注 `frequency` 字段（基于 BNC/COCA 排名 + 柯林斯星级）
- 校验/补充音标数据
- 补充词形变化信息

#### 查询示例

```bash
# 查找某个词的所有信息
grep "^abandon," docs/sources/ecdict/ecdict.csv

# 统计 CET-4 标签的词
awk -F',' '$8 ~ /cet4/' docs/sources/ecdict/ecdict.csv | wc -l

# Python 批量查询
import csv
ecdict = {}
with open('docs/sources/ecdict/ecdict.csv') as f:
    for row in csv.DictReader(f):
        ecdict[row['word'].lower()] = row

# 查单词的考试标签
word_info = ecdict.get('abandon')
print(word_info['tag'])  # => 'gk cet4 cet6 ky toefl gre'
print(word_info['frq'])  # => '2182' (COCA 排名)
```

---

### 1.2 AWL — Academic Word List (学术词表)

- **位置**: `docs/sources/awl-ngsl/AWL.json`
- **来源**: [lpmi-13/machine_readable_wordlists](https://github.com/lpmi-13/machine_readable_wordlists)
- **原始作者**: Averil Coxhead (2000), Victoria University of Wellington
- **许可证**: CC0 1.0 (公共领域)
- **规模**: 570 个词族 (word families)，分为 10 个子表
- **下载日期**: 2026-03-02

#### 数据结构

```json
{
  "sublist_1": {
    "analyse": {
      "subwords": ["analysed", "analyser", "analysers", "analyses", "analysing", "analysis", "analyst", "analysts", "analytical", "analytically", "analyze", "analyzed", "analyzes", "analyzing"]
    },
    "approach": {
      "subwords": ["approachable", "approached", "approaches", "approaching", "unapproachable"]
    }
  },
  "sublist_2": { ... },
  ...
  "sublist_10": { ... }
}
```

#### 用途

- 标注学术词汇（`tags: ["AWL"]`）
- 词族关系数据：每个 headword 包含所有派生形式，可用于补充 `relatedWords`
- Sublist 1-10 难度递增，可用于学习优先级排序

---

### 1.3 NGSL — New General Service List (核心高频词表)

- **位置**: `docs/sources/awl-ngsl/NGSL.json`
- **来源**: [lpmi-13/machine_readable_wordlists](https://github.com/lpmi-13/machine_readable_wordlists)
- **原始作者**: Dr. Charles Browne, Dr. Brent Culligan, Joseph Phillips
- **许可证**: CC0 1.0 (公共领域)
- **规模**: 2,801 个核心词，分为 3 个频率段
- **下载日期**: 2026-03-02

#### 数据结构

```json
{
  "1000": {
    "be": ["am", "are", "aren't", "been", "being", "is", "isn't", "was", "wasn't", "were", "weren't"],
    "the": [],
    "of": [],
    ...
  },
  "2000": { ... },
  "3000": { ... }
}
```

- `"1000"`: 前 1000 最高频词 → 覆盖英语文本 ~73%
- `"2000"`: 第 1001-2000 高频词 → 累计覆盖 ~84%
- `"3000"`: 第 2001-2801 高频词 → 累计覆盖 ~92%

#### 用途

- 标注核心词汇（`tags: ["NGSL-1000"]` / `["NGSL-2000"]` / `["NGSL-3000"]`）
- 频率分级参考：band 1000 = common, band 2000 = common, band 3000 = academic
- 帮助学习者判断"最值得优先学习的单词"

---

### 1.4 宝爷万词王讲义（原始数据源）

- **位置**: `docs/sources/宝爷万词王_讲义合集.md`
- **来源**: 宝爷万词王讲义合集
- **规模**: 122 词根 + 1164 单词 + 41 词缀
- **状态**: 已通过 `scripts/import-data.mjs` 导入为项目数据

---

## 2. 外部数据源（API / 大数据集）

以下数据源因体积过大或需要特定工具处理，不直接放入仓库，记录获取方式供后续使用。

### 2.1 wordfreq — 聚合多源词频数据 (Python)

**最推荐的词频数据源**，聚合了 8 个语料库的数据。

| 项目 | 详情 |
|------|------|
| **PyPI** | [wordfreq](https://pypi.org/project/wordfreq/) |
| **GitHub** | [rspeer/wordfreq](https://github.com/rspeer/wordfreq) |
| **代码许可** | Apache License 2.0 |
| **数据许可** | CC BY-SA 4.0 |
| **词量** | 10万+ (English, large list) |
| **数据来源** | Wikipedia, SUBTLEX/OpenSubtitles, Google Books Ngrams, Reddit, Twitter, 新闻语料, OSCAR/Common Crawl |

#### 安装和使用

```bash
pip install wordfreq
```

```python
from wordfreq import word_frequency, zipf_frequency, top_n_list

# Zipf 频率 (0-8 尺度, 越高越常见)
zipf_frequency('the', 'en')          # => 7.75
zipf_frequency('biology', 'en')      # => 3.93
zipf_frequency('serendipity', 'en')  # => 2.89

# 获取 Top N 词列表
top_words = top_n_list('en', 50000, wordlist='large')

# 为项目词汇批量生成频率
import json
words = ['act', 'biology', 'conduct', 'deduct']
freq_data = {w: zipf_frequency(w, 'en') for w in words}
# => {'act': 4.77, 'biology': 3.93, 'conduct': 4.15, 'deduct': 3.02}

# 频率分级参考:
# zipf >= 5.0  → common (the, have, good, time)
# zipf >= 4.0  → academic (analyze, conduct, culture)
# zipf >= 3.0  → advanced (anthropology, paradigm)
# zipf < 3.0   → rare (serendipitous, ephemeral)
```

#### 预导出数据

- [aparrish/wordfreq-en-25000](https://github.com/aparrish/wordfreq-en-25000): Top 25,000 英语词频 JSON，CC BY-SA 4.0

---

### 2.2 SUBTLEX-US — 影视字幕词频

基于 5100 万词的美国影视字幕语料库，反映口语/日常英语用词习惯。

| 项目 | 详情 |
|------|------|
| **官网** | [Ghent University - SUBTLEX-US](https://www.ugent.be/pp/experimentele-psychologie/en/research/documents/subtlexus) |
| **在线查询** | [subtlexus.lexique.org](http://subtlexus.lexique.org/) |
| **格式** | Excel (.xlsx) / 文本 (.txt)，需下载 ZIP |
| **词量** | 74,286 词 |
| **许可** | 学术/教育免费使用，需引用论文 |
| **引用** | Brysbaert & New (2009). *Moving beyond Kucera and Francis*. Behavior Research Methods, 41(4), 977-990 |

#### 数据字段

| 字段 | 说明 |
|------|------|
| `Word` | 单词 |
| `FREQcount` | 原始频次 |
| `CDcount` | 上下文多样性（出现在多少部影视中） |
| `SUBTLWF` | 每百万词频率 |
| `Lg10WF` | log10 词频 |
| `SUBTLCD` | 上下文多样性百分比 |
| `Lg10CD` | log10 上下文多样性 |

#### 下载方式

从官网下载 ZIP 文件，解压获得 Excel/TXT。

---

### 2.3 COCA — 当代美国英语语料库

10 亿+ 词量的综合语料库，涵盖 8 种体裁。

| 项目 | 详情 |
|------|------|
| **官网** | [wordfrequency.info](https://www.wordfrequency.info/samples.asp) |
| **免费数据** | Top 5,000 lemmas + Top 5,000 word forms |
| **付费数据** | 60,000-219,000 词 ($95-$295) |
| **格式** | Excel (.xlsx) / TXT |
| **许可** | 免费版需注明来源；付费版有使用限制 |
| **GitHub 镜像** | [brucewlee/COCA-WordFrequency](https://github.com/brucewlee/COCA-WordFrequency) (Top 5000, CSV) |

#### 免费版独特价值

COCA 免费版包含 8 种体裁的频率分布，可以看出一个词是更"学术"还是更"口语"：

| 体裁 | 说明 |
|------|------|
| SPOKEN | 口语 |
| FICTION | 小说 |
| MAGAZINE | 杂志 |
| NEWSPAPER | 报纸 |
| ACADEMIC | 学术 |
| BLOG | 博客 |
| WEB | 网页 |
| TV/MOVIES | 影视 |

---

### 2.4 Wiktionary — 开放词源数据库

最全面的免费词源数据，含 PIE 词根追溯、跨语言同源词、词素分解。

| 项目 | 详情 |
|------|------|
| **API** | `https://en.wiktionary.org/api/rest_v1/page/summary/{word}` |
| **数据转储** | [dumps.wikimedia.org/enwiktionary](https://dumps.wikimedia.org/enwiktionary/) |
| **解析工具** | [wiktextract](https://pypi.org/project/wiktextract/) (Python) |
| **预处理数据** | [kaikki.org/dictionary/English](https://kaikki.org/dictionary/English/) (wiktextract 输出) |
| **许可** | CC BY-SA 3.0 |
| **规模** | 数十万词条，完整词源链 |

#### API 示例

```bash
# 查询单个词
curl "https://en.wiktionary.org/api/rest_v1/page/summary/biology"
```

#### wiktextract 批量处理

```bash
pip install wiktextract

# 下载转储 (~1GB 压缩)
wget "https://dumps.wikimedia.org/enwiktionary/latest/enwiktionary-latest-pages-articles.xml.bz2"

# 解析为 JSON (耗时较长)
python -m wiktextract enwiktionary-latest-pages-articles.xml.bz2 --out wiktionary.json
```

#### kaikki.org 预处理数据（推荐）

kaikki.org 提供 wiktextract 的预处理输出，可直接下载 JSON，无需自己跑解析：

```
https://kaikki.org/dictionary/English/
```

#### 用途

- 补充 PIE (原始印欧语) 词根信息
- 跨语言同源词 (cognates)
- 校验/补充词源说明 (etymology)
- 补充派生词和相关词

---

### 2.5 WordNet — 语义关系数据库 (Princeton)

英语最权威的语义关系数据库。

| 项目 | 详情 |
|------|------|
| **官网** | [wordnet.princeton.edu](https://wordnet.princeton.edu/) |
| **Python** | `nltk.corpus.wordnet` |
| **许可** | WordNet License (类 BSD, 免费使用) |
| **规模** | 155,287 个词条，117,659 个同义词集 |

#### 使用方式

```bash
pip install nltk
python -c "import nltk; nltk.download('wordnet')"
```

```python
from nltk.corpus import wordnet as wn

# 查同义词
synsets = wn.synsets('active')
for s in synsets:
    lemmas = [l.name() for l in s.lemmas()]
    print(f"{s.name()}: {lemmas}")

# 查反义词
for s in wn.synsets('active'):
    for l in s.lemmas():
        if l.antonyms():
            print(f"{l.name()} ↔ {l.antonyms()[0].name()}")
```

#### 用途

- 补充 synonyms / antonyms 字段
- 获取上下位关系 (hypernyms / hyponyms)

---

### 2.6 Google Books Ngram

8百万+ 本书的词频数据，1500-2019 年。

| 项目 | 详情 |
|------|------|
| **交互查看器** | [books.google.com/ngrams](https://books.google.com/ngrams/) |
| **原始数据** | [storage.googleapis.com/books/ngrams/books/datasetsv3.html](https://storage.googleapis.com/books/ngrams/books/datasetsv3.html) |
| **预处理 Top 10k** | [orgtre/google-books-ngram-frequency](https://github.com/orgtre/google-books-ngram-frequency) |
| **许可** | CC BY 3.0 |
| **API (非官方)** | `https://books.google.com/ngrams/json?content=WORD&year_start=2010&year_end=2019&corpus=26` |

#### 用途

- 历史词频趋势分析
- 书面语词频参考（与 SUBTLEX 口语频率互补）

---

### 2.7 其他参考数据源

| 数据源 | 说明 | URL |
|--------|------|-----|
| **Etymonline** | 权威词源词典（在线查询，不可批量抓取） | [etymonline.com](https://www.etymonline.com/) |
| **AH Dictionary PIE Appendix** | ~600 个 PIE 词根及派生词 | [ahdictionary.com/word/indoeurop.html](https://ahdictionary.com/word/indoeurop.html) |
| **Oxford 5000 + CEFR** | 5948 词按 A1-C2 分级 | [nalgeon/words](https://github.com/nalgeon/words) |
| **CEFR Dataset** | 7988 词 CEFR 分级 (MIT) | [Maximax67/Words-CEFR-Dataset](https://github.com/Maximax67/Words-CEFR-Dataset) |
| **Pokorny PIE Dictionary** | 经典 PIE 词根目录 | [indo-european.info](https://indo-european.info/) |
| **English Lexicon Project** | 4万+ 词的心理语言学数据 | [elexicon.wustl.edu](https://elexicon.wustl.edu/) |

---

## 3. 数据源对比矩阵

各数据源能为项目提供什么：

| 数据需求 | ECDICT | AWL | NGSL | wordfreq | Wiktionary | WordNet |
|----------|--------|-----|------|----------|------------|---------|
| 考试标签 (CET/IELTS/GRE) | **主力** | 学术词 | 核心词 | - | - | - |
| 词频分级 | BNC+COCA 排名 | - | 3 频段 | **最精确** | - | - |
| 柯林斯/牛津标记 | **有** | - | - | - | - | - |
| 音标 IPA | 有 | - | - | - | 有 | - |
| 中文翻译 | **有** | - | - | - | - | - |
| 词源/PIE 追溯 | - | - | - | - | **最全** | - |
| 同源词 (cognates) | - | - | - | - | **有** | - |
| 同义词/反义词 | - | - | - | - | 部分 | **最全** |
| 词族/派生词 | 词形变化 | **词族** | 派生形式 | - | 有 | 有 |
| 词形变化 | **有** | - | - | - | - | 有 |

---

## 4. 许可证汇总

| 数据源 | 许可证 | 可否用于开源项目 | 注意事项 |
|--------|--------|-----------------|----------|
| ECDICT | MIT | 可以 | 无限制 |
| AWL (JSON) | CC0 1.0 | 可以 | 公共领域，无需署名 |
| NGSL (JSON) | CC0 1.0 | 可以 | 公共领域，无需署名 |
| wordfreq | Apache 2.0 + CC BY-SA 4.0 | 可以 | 数据部分需署名+相同方式共享 |
| SUBTLEX-US | 学术免费 | 可以 | 需引用论文 |
| COCA (免费版) | 署名使用 | 可以 | 必须注明 wordfrequency.info |
| Wiktionary | CC BY-SA 3.0 | 可以 | 需署名+相同方式共享 |
| WordNet | WordNet License | 可以 | 类 BSD，需包含许可声明 |
| Google Ngrams | CC BY 3.0 | 可以 | 需署名 |

---

## 5. 推荐的数据增强优先级

1. **ECDICT** → 批量标注考试标签 + 频率分级（已下载）
2. **NGSL** → 标注核心高频词（已下载）
3. **AWL** → 标注学术词汇 + 词族关系（已下载）
4. **wordfreq** → 更精确的频率分级脚本
5. **Wiktionary** → 补充词源、PIE 词根、同源词
6. **WordNet** → 补充同义词/反义词
