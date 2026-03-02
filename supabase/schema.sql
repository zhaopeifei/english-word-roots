-- ============================================================================
-- English Word Roots — Database Schema
-- ============================================================================
--
-- 数据库结构定义文件（Source of Truth）
--
-- 使用方式:
--   1. 在 Supabase Dashboard → SQL Editor 中执行本文件
--   2. 或通过 supabase CLI: supabase db push
--
-- 表关系:
--
--   roots ◄──── morpheme_segments ────► affixes
--     │                  │
--     ▼                  ▼
--   root_words ──► words ◄── word_tags ──► tags
--                   │
--           ┌───────┼───────┐
--           ▼       ▼       ▼
--     word_examples  word_relations  (collocations in JSONB)
--
-- 多语言策略:
--   所有面向用户的文本字段使用 JSONB 存储多语言内容。
--   格式: {"en": "...", "zh": "...", "ja": "...", ...}
--   必填语言: en, zh（其他语言可渐进添加）
--
-- 版本: 1.0.0
-- 日期: 2026-03-02
-- ============================================================================


-- ============================================================================
-- 1. roots — 词根表
-- ============================================================================
-- 词根是整个平台的核心实体。每个词根代表一个具有独立语义的词源单元。
--
-- 示例数据:
--   slug='act', variants={'act','ag'}, meaning={"en":"do, act, drive","zh":"干/做/动"}
--   slug='bio', variants={'bio'},      meaning={"en":"life","zh":"生命"}
--   slug='graph', variants={'graph','gram'}, meaning={"en":"write, draw","zh":"写/画"}
-- ============================================================================

CREATE TABLE roots (
  id                SERIAL PRIMARY KEY,

  -- 唯一标识符，小写英文，用于 URL: /root/{slug}
  -- 示例: 'act', 'bio', 'graph', 'ped'
  slug              TEXT UNIQUE NOT NULL,

  -- 该词根的所有拼写变体（数组，第一个为最常见形式）
  -- 示例: {'act', 'ag'} — act 和 ag 是同一个词根的不同拼写
  -- 示例: {'scrib', 'script'} — 词根在不同单词中的变体
  -- 来源: 宝爷万词王（初始 122 个）→ Wiktionary 校验和补充
  variants          TEXT[] NOT NULL,

  -- 核心含义（多语言 JSONB）
  -- 格式: {"en": "do, act, drive", "zh": "干/做/动"}
  -- 约束: 必须包含 en 和 zh
  -- 来源: 宝爷万词王 → Etymonline / Wiktionary 校验
  meaning           JSONB NOT NULL,

  -- 词源故事（多语言 JSONB），解释这个词根从哪种语言来、原始形式和含义
  -- 格式: {"en": "From Latin agere (to do, drive)...", "zh": "源自拉丁语 agere..."}
  -- 来源: Wiktionary + Etymonline
  origin_summary    JSONB NOT NULL,

  -- 来源语言
  -- 值域: 'Greek' | 'Latin' | 'Old English' | 'Old French' | 'Germanic' |
  --       'Proto-Indo-European' | 'Arabic' | 'Sanskrit' | 'Other'
  -- 来源: Wiktionary
  origin_lang       TEXT NOT NULL,

  -- 原始词源形式（原语言拼写）
  -- 示例: 'Latin agere, actum', 'Greek βίος (bíos)', 'PIE *ped-'
  -- 来源: Wiktionary
  -- 可为 NULL: 部分词根词源记录不完整
  etymology         TEXT,

  -- 原始印欧语 (PIE) 词根
  -- 示例: '*ag-' (→ act), '*gʷeyh₃-' (→ bio), '*ped-' (→ ped/foot)
  -- 来源: Wiktionary etymology_templates 中 name="root" 的模板，
  --        或 American Heritage Dictionary PIE Appendix
  -- 可为 NULL: 非 PIE 来源的词根（如阿拉伯语、日语借词）
  pie_root          TEXT,

  -- 语义域分类（描述"这个词根跟什么相关"）
  -- 值域: 见下方 COMMENT
  -- 来源: 手动标注
  -- 约束: 至少一个
  semantic_domains  TEXT[] NOT NULL,

  -- 格林法则语音变化分组
  -- 值域: 'b/p/f/v' | 'd/t/s/z' | 'g/k/c/q/qu/h/j' | NULL
  -- 说明: 帮助理解同源词根拼写差异，如 act/ag 属于 'g/k/c/q/qu/h/j' 组
  -- 来源: 手动整理
  grimm_law_group   TEXT,

  created_at        TIMESTAMPTZ DEFAULT now(),
  updated_at        TIMESTAMPTZ DEFAULT now()
);

COMMENT ON TABLE roots IS '词根表 — 平台的核心实体，每个词根代表一个具有独立语义的词源单元';
COMMENT ON COLUMN roots.semantic_domains IS '语义域值域:
  生物&自然: life | animals | plants | body | health | nature
  物质世界: water | earth | fire | air | light | sound | color
  抽象概念: time | space | number | position | movement | change | amount
  认知&社会: mind | emotion | speech | knowledge | power | law | society
  动作&行为: action | transport | making | writing | seeing | holding | cutting |
            pushing | pulling | standing | sitting | walking | eating | breathing |
            binding | pressing | flowing | turning | building | breaking | choosing |
            giving | sending | ordering | measuring
  性质&状态: size | similarity | strength | death | birth | sleep | food
  其他: other';

CREATE INDEX idx_roots_origin_lang ON roots(origin_lang);
CREATE INDEX idx_roots_semantic_domains ON roots USING GIN(semantic_domains);


-- ============================================================================
-- 2. words — 单词表
-- ============================================================================
-- 每个单词条目包含发音、释义、词源类型、频率等级等信息。
--
-- 示例数据:
--   slug='biology', lemma='biology', pos={'n.'}, frequency='academic',
--   definition={"en":"The scientific study of living organisms.","zh":"生物学"},
--   etymology_type='root-derived'
--
--   slug='water', lemma='water', pos={'n.','v.'}, frequency='common',
--   definition={"en":"A transparent liquid.","zh":"水"},
--   etymology_type='native'
-- ============================================================================

CREATE TABLE words (
  id                SERIAL PRIMARY KEY,

  -- 唯一标识符，用于 URL: /word/{slug}
  slug              TEXT UNIQUE NOT NULL,

  -- 词形原型（通常与 slug 相同）
  -- 注意: 如果收录的是变体形式，lemma 应指向原形
  lemma             TEXT NOT NULL,

  -- 英式 IPA 音标
  -- 示例: '/baɪˈɒl.ə.dʒi/', '/ækt/'
  -- 来源: ECDICT phonetic 字段 → Wiktionary 校验
  ipa_uk            TEXT,

  -- 美式 IPA 音标
  -- 示例: '/baɪˈɑː.lə.dʒi/', '/ækt/'
  -- 来源: 同上
  ipa_us            TEXT,

  -- 词性列表
  -- 值域: 'n.' | 'v.' | 'adj.' | 'adv.' | 'prep.' | 'conj.' | 'pron.' | 'interj.' | 'det.'
  -- 来源: ECDICT pos 字段 → Wiktionary 校验
  -- 约束: 至少一个
  pos               TEXT[] NOT NULL,

  -- 释义（多语言 JSONB）
  -- 格式: {"en": "The scientific study of...", "zh": "生物学"}
  -- 约束: 必须包含 en 和 zh
  -- 来源: ECDICT (definition + translation) → 人工优化
  definition        JSONB NOT NULL,

  -- 构词说明（多语言 JSONB），解释词素如何组合出当前词义
  -- 格式: {"en": "bio (life) + -logy (study) → ...", "zh": "bio（生命）+ -logy（学科）→ ..."}
  -- 来源: 宝爷万词王 → AI 补充
  -- 可为 NULL: 本族词等无需词素说明的词
  morphology_note   JSONB,

  -- 常见搭配（多语言 JSONB）
  -- 格式: {"en": ["take action", "in action"], "zh": ["采取行动", "在行动中"]}
  -- 来源: COCA / AI 生成 → 人工审核
  collocations      JSONB,

  -- 词源类型
  -- 值域:
  --   'root-derived'  — 可通过拉丁/希腊词根分解 (biology, construct, predict)
  --   'native'        — 日耳曼本族词 (water, house, good, big, hand)
  --   'eponym'        — 人名/地名派生 (boycott, champagne, algorithm)
  --   'loanword'      — 非拉丁/希腊借词 (tsunami, yoga, safari)
  --   'blend'         — 混合词/缩略词 (brunch, smog, blog)
  --   'onomatopoeia'  — 拟声词 (buzz, splash, click)
  --   'unknown'       — 词源不明
  -- 来源: Wiktionary + 手动标注
  etymology_type    TEXT NOT NULL DEFAULT 'root-derived',

  -- 词频等级
  -- 值域: 'common' | 'academic' | 'advanced' | 'rare'
  -- 分级规则:
  --   common   — COCA 排名 <= 3000 或 柯林斯星级 >= 4
  --   academic — COCA 排名 <= 8000 或 柯林斯星级 >= 2
  --   advanced — COCA 排名 <= 20000
  --   rare     — COCA 排名 > 20000 或无排名
  -- 来源: ECDICT frq + collins → wordfreq 交叉校验
  frequency         TEXT,

  -- COCA 词频排名（数字越小越常用）
  -- 示例: the=1, abandon=2182, serendipity>45000
  -- 来源: ECDICT frq 字段
  frequency_rank    INTEGER,

  -- 柯林斯词频星级
  -- 值域: 1-5（5=最常用约 680 词, 1=较少用）或 NULL
  -- 来源: ECDICT collins 字段
  collins_star      SMALLINT,

  -- 是否属于 Oxford 3000 核心词汇
  -- 来源: ECDICT oxford 字段
  oxford_flag       BOOLEAN DEFAULT FALSE,

  -- CEFR 欧洲语言等级
  -- 值域: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | NULL
  -- 含义: A1=入门, A2=初级, B1=中级, B2=中高级, C1=高级, C2=精通
  -- 来源: CEFR Dataset (Maximax67/Words-CEFR-Dataset) 或 Oxford 5000
  cefr_level        TEXT,

  created_at        TIMESTAMPTZ DEFAULT now(),
  updated_at        TIMESTAMPTZ DEFAULT now()
);

COMMENT ON TABLE words IS '单词表 — 包含发音、释义、词源类型、频率等级等完整信息';

CREATE INDEX idx_words_etymology_type ON words(etymology_type);
CREATE INDEX idx_words_frequency ON words(frequency);
CREATE INDEX idx_words_frequency_rank ON words(frequency_rank);
CREATE INDEX idx_words_cefr_level ON words(cefr_level);
CREATE INDEX idx_words_lemma ON words(lemma);


-- ============================================================================
-- 3. word_examples — 例句表
-- ============================================================================
-- 每个单词至少 3 条多语言例句，独立存储便于批量管理。
--
-- 示例:
--   word='biology', content={"en":"Biology explains how organisms grow.","zh":"生物学解释了..."}
--   word='biology', content={"en":"She decided to major in biology.","zh":"她决定主修生物学。"}
-- ============================================================================

CREATE TABLE word_examples (
  id          SERIAL PRIMARY KEY,

  -- 所属单词
  word_id     INTEGER NOT NULL REFERENCES words(id) ON DELETE CASCADE,

  -- 多语言例句
  -- 格式: {"en": "She decided to act quickly.", "zh": "她决定迅速行动。"}
  -- 约束: 必须包含 en 和 zh
  -- 来源: 宝爷万词王（初始 ~1500 条）→ AI 批量补充至每词 3 条 → 人工审核
  content     JSONB NOT NULL,

  -- 排序序号（0, 1, 2, ...）
  -- 业务规则: 每个 word_id 至少 3 条记录（应用层校验）
  sort_order  SMALLINT NOT NULL DEFAULT 0
);

COMMENT ON TABLE word_examples IS '例句表 — 每个单词至少 3 条多语言例句';

CREATE INDEX idx_word_examples_word_id ON word_examples(word_id);


-- ============================================================================
-- 4. affixes — 词缀表
-- ============================================================================
-- 前缀和后缀，用于词素分解的可视化展示和知识关联。
--
-- 示例:
--   slug='pre', form='pre-', type='prefix', meaning={"en":"before","zh":"在...之前"}
--   slug='tion', form='-tion', type='suffix', meaning={"en":"action/state","zh":"表动作/状态"},
--     variants={'-tion','-sion','-ation'}, pos_function='noun'
-- ============================================================================

CREATE TABLE affixes (
  id            SERIAL PRIMARY KEY,

  -- 唯一标识
  -- 示例: 'pre', 'tion', 'able', 'un', 'ly'
  slug          TEXT UNIQUE NOT NULL,

  -- 显示形式（带连字符）
  -- 前缀: 'pre-', 'un-', 'anti-'
  -- 后缀: '-tion', '-able/-ible', '-ly'
  form          TEXT NOT NULL,

  -- 词缀类型
  -- 值域: 'prefix' | 'suffix'
  type          TEXT NOT NULL,

  -- 含义（多语言 JSONB）
  -- 格式: {"en": "before", "zh": "在...之前"}
  -- 来源: 宝爷万词王（初始 41 个）→ Wiktionary 补充
  meaning       JSONB NOT NULL,

  -- 详细说明（多语言 JSONB）
  -- 来源: 宝爷万词王 → AI 补充
  overview      JSONB,

  -- 来源语言
  -- 值域: 同 roots.origin_lang
  origin_lang   TEXT,

  -- 拼写变体
  -- 示例: {'-tion', '-sion', '-ation'}, {'en-', 'em-'}
  -- 来源: Wiktionary + 语法参考
  variants      TEXT[],

  -- 词性转换功能（主要对后缀有意义）
  -- 值域: 'noun' | 'verb' | 'adjective' | 'adverb' | NULL
  -- 示例: '-tion' → 'noun', '-ize' → 'verb', '-ful' → 'adjective'
  pos_function  TEXT,

  -- 格林法则分组
  grimm_law_group TEXT
);

COMMENT ON TABLE affixes IS '词缀表 — 前缀和后缀，用于词素分解可视化';

CREATE INDEX idx_affixes_type ON affixes(type);


-- ============================================================================
-- 5. morpheme_segments — 词素分解表
-- ============================================================================
-- 记录每个单词的词素拆解序列，是前端词素颜色编码可视化的数据基础。
--
-- 示例: 'biology' 的分解
--   (word_id=1, surface='bio',  type='root',   root_id=2,  sort_order=0)
--   (word_id=1, surface='logy', type='suffix', affix_id=5, sort_order=1)
--
-- 示例: 'construct' 的分解
--   (word_id=2, surface='con',    type='prefix',  affix_id=3, sort_order=0)
--   (word_id=2, surface='struct', type='root',    root_id=15, sort_order=1)
-- ============================================================================

CREATE TABLE morpheme_segments (
  id          SERIAL PRIMARY KEY,

  -- 所属单词
  word_id     INTEGER NOT NULL REFERENCES words(id) ON DELETE CASCADE,

  -- 该词素在单词中的表面形式
  -- 示例: 'bio', 'logy', 'pre', 'con', 'struct', 'ion'
  surface     TEXT NOT NULL,

  -- 词素类型（对应前端颜色编码）
  -- 值域:
  --   'root'      — 词根，核心语义（绿色实底）
  --   'prefix'    — 前缀，修饰方向/否定/程度（青色描边）
  --   'suffix'    — 后缀，决定词性（紫色描边）
  --   'connector' — 连接音节，无语义（灰色描边）
  --   'other'     — 无法分解的词（用于 etymology_type 非 root-derived 的词）
  type        TEXT NOT NULL,

  -- 关联词根（仅 type='root' 时填写）
  -- 用于前端生成可点击的词根跳转链接
  -- 可为 NULL: 该词素对应的词根尚未收录
  root_id     INTEGER REFERENCES roots(id) ON DELETE SET NULL,

  -- 关联词缀（仅 type='prefix' 或 'suffix' 时填写）
  -- 可为 NULL
  affix_id    INTEGER REFERENCES affixes(id) ON DELETE SET NULL,

  -- 在单词中的位置顺序 (0, 1, 2, ...)
  -- 示例: biology → bio(0) + logy(1)
  sort_order  SMALLINT NOT NULL
);

COMMENT ON TABLE morpheme_segments IS '词素分解表 — 词素颜色编码可视化的数据基础';

CREATE INDEX idx_morpheme_segments_word_id ON morpheme_segments(word_id);
CREATE INDEX idx_morpheme_segments_root_id ON morpheme_segments(root_id);
CREATE INDEX idx_morpheme_segments_affix_id ON morpheme_segments(affix_id);


-- ============================================================================
-- 6. tags — 标签表
-- ============================================================================
-- 考试标签、CEFR 等级、词频分类等。每个标签有自己的专属页面 /wordlist/{slug}。
--
-- 示例:
--   slug='ielts', type='exam', name={"en":"IELTS","zh":"雅思"}
--   slug='cefr-b2', type='cefr', name={"en":"B2 Upper Intermediate","zh":"B2 中高级"}
--   slug='ngsl-1000', type='frequency', name={"en":"NGSL Top 1000","zh":"NGSL 前 1000 高频词"}
-- ============================================================================

CREATE TABLE tags (
  id            SERIAL PRIMARY KEY,

  -- 唯一标识，用于 URL: /wordlist/{slug}
  -- 示例: 'ielts', 'cet4', 'cefr-b2', 'ngsl-1000', 'awl'
  slug          TEXT UNIQUE NOT NULL,

  -- 显示名称（多语言 JSONB）
  -- 示例: {"en": "IELTS", "zh": "雅思"}
  --       {"en": "CET-4", "zh": "大学英语四级"}
  name          JSONB NOT NULL,

  -- 标签分类
  -- 值域:
  --   'exam'      — 考试: ielts, toefl, cet4, cet6, gre, gk(高考), ky(考研), zk(中考)
  --   'cefr'      — 欧洲语言标准: cefr-a1 ~ cefr-c2
  --   'frequency' — 词频分类: ngsl-1000, ngsl-2000, ngsl-3000, awl
  --   'custom'    — 自定义（未来扩展）
  type          TEXT NOT NULL,

  -- 标签描述（多语言 JSONB，用于 /wordlist/{slug} 页面顶部介绍）
  description   JSONB,

  -- 同 type 内的排序（数字越小越靠前）
  sort_order    SMALLINT DEFAULT 0
);

COMMENT ON TABLE tags IS '标签表 — 考试、CEFR、词频分类，每个标签对应 /wordlist/{slug} 页面';

CREATE INDEX idx_tags_type ON tags(type);


-- ============================================================================
-- 7. 关联表
-- ============================================================================

-- 词根 ↔ 单词（多对多）
-- 一个单词可含多个词根: biography = bio + graph
-- 一个词根关联多个单词: bio → biology, biography, biosphere
CREATE TABLE root_words (
  root_id   INTEGER NOT NULL REFERENCES roots(id) ON DELETE CASCADE,
  word_id   INTEGER NOT NULL REFERENCES words(id) ON DELETE CASCADE,
  PRIMARY KEY (root_id, word_id)
);

COMMENT ON TABLE root_words IS '词根-单词关联表（多对多）';
CREATE INDEX idx_root_words_word_id ON root_words(word_id);

-- 单词 ↔ 标签（多对多）
CREATE TABLE word_tags (
  word_id   INTEGER NOT NULL REFERENCES words(id) ON DELETE CASCADE,
  tag_id    INTEGER NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (word_id, tag_id)
);

COMMENT ON TABLE word_tags IS '单词-标签关联表（多对多）';
CREATE INDEX idx_word_tags_tag_id ON word_tags(tag_id);

-- 词间关系（同义词 / 反义词）
-- 约定: word_id_1 < word_id_2，保证每对关系只存一条记录
CREATE TABLE word_relations (
  word_id_1       INTEGER NOT NULL REFERENCES words(id) ON DELETE CASCADE,
  word_id_2       INTEGER NOT NULL REFERENCES words(id) ON DELETE CASCADE,
  relation_type   TEXT NOT NULL,
    -- 值域:
    --   'synonym'  — 同义词 (active ↔ energetic)
    --   'antonym'  — 反义词 (active ↔ passive)
    -- 来源: WordNet (NLTK) → 人工校验
  PRIMARY KEY (word_id_1, word_id_2, relation_type),
  CONSTRAINT word_relation_order CHECK (word_id_1 < word_id_2)
);

COMMENT ON TABLE word_relations IS '词间关系表 — 同义词和反义词';

-- 词根间关系
-- 约定: root_id_1 < root_id_2
CREATE TABLE root_relations (
  root_id_1       INTEGER NOT NULL REFERENCES roots(id) ON DELETE CASCADE,
  root_id_2       INTEGER NOT NULL REFERENCES roots(id) ON DELETE CASCADE,
  relation_type   TEXT NOT NULL,
    -- 值域:
    --   'synonym'  — 语义相近 (act ↔ fac，都表示"做")
    --   'cognate'  — 同源词根 (不同语言的同源形式)
    --   'antonym'  — 语义相反
    -- 来源: 手动整理 + Wiktionary
  PRIMARY KEY (root_id_1, root_id_2, relation_type),
  CONSTRAINT root_relation_order CHECK (root_id_1 < root_id_2)
);

COMMENT ON TABLE root_relations IS '词根间关系表 — 同义、同源、反义词根';


-- ============================================================================
-- 8. 初始标签数据
-- ============================================================================
-- 标签定义是固定的，直接在 schema 中插入。

INSERT INTO tags (slug, name, type, description, sort_order) VALUES
  -- 考试标签
  ('zk',    '{"en":"Zhongkao","zh":"中考"}'::jsonb,    'exam', '{"en":"Chinese Senior High School Entrance Exam","zh":"中国高中入学考试"}'::jsonb, 0),
  ('gk',    '{"en":"Gaokao","zh":"高考"}'::jsonb,      'exam', '{"en":"Chinese National College Entrance Exam","zh":"中国普通高等学校招生全国统一考试"}'::jsonb, 1),
  ('cet4',  '{"en":"CET-4","zh":"大学英语四级"}'::jsonb, 'exam', '{"en":"College English Test Band 4","zh":"全国大学英语四级考试"}'::jsonb, 2),
  ('cet6',  '{"en":"CET-6","zh":"大学英语六级"}'::jsonb, 'exam', '{"en":"College English Test Band 6","zh":"全国大学英语六级考试"}'::jsonb, 3),
  ('ky',    '{"en":"Kaoyan","zh":"考研英语"}'::jsonb,   'exam', '{"en":"Chinese Postgraduate Entrance English Exam","zh":"全国硕士研究生入学英语考试"}'::jsonb, 4),
  ('ielts', '{"en":"IELTS","zh":"雅思"}'::jsonb,       'exam', '{"en":"International English Language Testing System","zh":"国际英语语言测试系统"}'::jsonb, 5),
  ('toefl', '{"en":"TOEFL","zh":"托福"}'::jsonb,       'exam', '{"en":"Test of English as a Foreign Language","zh":"检定非英语为母语者的英语能力考试"}'::jsonb, 6),
  ('gre',   '{"en":"GRE","zh":"GRE"}'::jsonb,          'exam', '{"en":"Graduate Record Examinations","zh":"美国研究生入学考试"}'::jsonb, 7),

  -- CEFR 等级标签
  ('cefr-a1', '{"en":"A1 Beginner","zh":"A1 入门"}'::jsonb,                 'cefr', NULL, 0),
  ('cefr-a2', '{"en":"A2 Elementary","zh":"A2 初级"}'::jsonb,               'cefr', NULL, 1),
  ('cefr-b1', '{"en":"B1 Intermediate","zh":"B1 中级"}'::jsonb,             'cefr', NULL, 2),
  ('cefr-b2', '{"en":"B2 Upper Intermediate","zh":"B2 中高级"}'::jsonb,     'cefr', NULL, 3),
  ('cefr-c1', '{"en":"C1 Advanced","zh":"C1 高级"}'::jsonb,                 'cefr', NULL, 4),
  ('cefr-c2', '{"en":"C2 Proficiency","zh":"C2 精通"}'::jsonb,             'cefr', NULL, 5),

  -- 词频分类标签
  ('ngsl-1000', '{"en":"NGSL Top 1000","zh":"NGSL 前 1000 高频词"}'::jsonb,  'frequency', '{"en":"The 1000 most frequent English words, covering ~73% of text.","zh":"最高频的 1000 个英语单词，覆盖约 73% 的文本。"}'::jsonb, 0),
  ('ngsl-2000', '{"en":"NGSL 1001-2000","zh":"NGSL 第 1001-2000 高频词"}'::jsonb, 'frequency', '{"en":"Words ranked 1001-2000, cumulative coverage ~84%.","zh":"排名 1001-2000 的高频词，累计覆盖约 84%。"}'::jsonb, 1),
  ('ngsl-3000', '{"en":"NGSL 2001-2801","zh":"NGSL 第 2001-2801 高频词"}'::jsonb, 'frequency', '{"en":"Words ranked 2001-2801, cumulative coverage ~92%.","zh":"排名 2001-2801 的高频词，累计覆盖约 92%。"}'::jsonb, 2),
  ('awl',       '{"en":"Academic Word List","zh":"学术词表 (AWL)"}'::jsonb,  'frequency', '{"en":"Coxhead''s Academic Word List: 570 word families essential for academic English.","zh":"Coxhead 学术词表：570 个学术英语核心词族。"}'::jsonb, 3);
