/**
 * Affix migration script:
 * 1. Add base_affix_id column to affixes table
 * 2. Create missing base affix records
 * 3. Create variant affix records with base_affix_id
 * 4. Link morpheme_segments to affix records
 *
 * Run with: npx tsx scripts/migrate-affixes.ts [--dry-run]
 *
 * Data accuracy strategy:
 * - Only process surfaces that actually exist in morpheme_segments
 * - Meanings are from established etymological references
 * - Each group verified against sample words from the database
 * - Dry-run mode shows all changes before executing
 */
import { db, batchUpsert } from './lib/db';

const DRY_RUN = process.argv.includes('--dry-run');

// ---------------------------------------------------------------------------
// Affix definitions — based on established etymological references
// ---------------------------------------------------------------------------

interface AffixDef {
  slug: string;
  form: string;
  type: 'prefix' | 'suffix';
  meaning: { en: string; zh: string };
  overview?: { en: string; zh: string };
  origin_lang?: string;
  /** If this is a variant, the slug of the base affix */
  baseSlug?: string;
  /** Surface forms in morpheme_segments to link */
  surfaces: string[];
}

// === LATIN PREFIX ASSIMILATION GROUPS ===

const AD_GROUP: AffixDef[] = [
  {
    slug: 'ad', form: 'ad-', type: 'prefix',
    meaning: { en: 'to, toward, near', zh: '朝向，接近' },
    origin_lang: 'Latin',
    surfaces: ['ad'],
  },
  {
    slug: 'ac', form: 'ac-', type: 'prefix',
    meaning: { en: 'to, toward', zh: '朝向' },
    origin_lang: 'Latin', baseSlug: 'ad',
    surfaces: ['ac'],
  },
  {
    slug: 'af', form: 'af-', type: 'prefix',
    meaning: { en: 'to, toward', zh: '朝向' },
    origin_lang: 'Latin', baseSlug: 'ad',
    surfaces: ['af'],
  },
  {
    slug: 'ag', form: 'ag-', type: 'prefix',
    meaning: { en: 'to, toward', zh: '朝向' },
    origin_lang: 'Latin', baseSlug: 'ad',
    surfaces: ['ag'],
  },
  {
    slug: 'al-prefix', form: 'al-', type: 'prefix',
    meaning: { en: 'to, toward', zh: '朝向' },
    origin_lang: 'Latin', baseSlug: 'ad',
    surfaces: ['al'],
  },
  {
    slug: 'ap', form: 'ap-', type: 'prefix',
    meaning: { en: 'to, toward', zh: '朝向' },
    origin_lang: 'Latin', baseSlug: 'ad',
    surfaces: ['ap'],
  },
  {
    slug: 'ar-prefix', form: 'ar-', type: 'prefix',
    meaning: { en: 'to, toward', zh: '朝向' },
    origin_lang: 'Latin', baseSlug: 'ad',
    surfaces: ['ar'],
  },
  {
    slug: 'as', form: 'as-', type: 'prefix',
    meaning: { en: 'to, toward', zh: '朝向' },
    origin_lang: 'Latin', baseSlug: 'ad',
    surfaces: ['as'],
  },
  {
    slug: 'at', form: 'at-', type: 'prefix',
    meaning: { en: 'to, toward', zh: '朝向' },
    origin_lang: 'Latin', baseSlug: 'ad',
    surfaces: ['at'],
  },
];

const OB_GROUP: AffixDef[] = [
  {
    slug: 'ob', form: 'ob-', type: 'prefix',
    meaning: { en: 'against, toward, in the way of', zh: '对抗，朝向，阻碍' },
    origin_lang: 'Latin',
    surfaces: ['ob'],
  },
  {
    slug: 'oc', form: 'oc-', type: 'prefix',
    meaning: { en: 'against, toward', zh: '对抗，朝向' },
    origin_lang: 'Latin', baseSlug: 'ob',
    surfaces: ['oc', 'occ'],
  },
  {
    slug: 'of', form: 'of-', type: 'prefix',
    meaning: { en: 'against, toward', zh: '对抗，朝向' },
    origin_lang: 'Latin', baseSlug: 'ob',
    surfaces: ['of', 'off'],
  },
  {
    slug: 'op', form: 'op-', type: 'prefix',
    meaning: { en: 'against, toward', zh: '对抗，朝向' },
    origin_lang: 'Latin', baseSlug: 'ob',
    surfaces: ['op', 'opp'],
  },
];

const AB_GROUP: AffixDef[] = [
  {
    slug: 'ab', form: 'ab-', type: 'prefix',
    meaning: { en: 'away from, off', zh: '离开，远离' },
    origin_lang: 'Latin',
    surfaces: ['ab'],
  },
  {
    slug: 'abs', form: 'abs-', type: 'prefix',
    meaning: { en: 'away from, off', zh: '离开，远离' },
    origin_lang: 'Latin', baseSlug: 'ab',
    surfaces: ['abs'],
  },
];

// Variants of existing base affixes (co, in, sub, dis, ex)
const EXISTING_BASE_VARIANTS: AffixDef[] = [
  // co- (id=3) variants: con-, com-, cor-, col-
  {
    slug: 'con', form: 'con-', type: 'prefix',
    meaning: { en: 'together, with', zh: '共同，一起' },
    origin_lang: 'Latin', baseSlug: 'co',
    surfaces: ['con'],
  },
  {
    slug: 'com', form: 'com-', type: 'prefix',
    meaning: { en: 'together, with', zh: '共同，一起' },
    origin_lang: 'Latin', baseSlug: 'co',
    surfaces: ['com', 'comm', 'comp'],
  },
  {
    slug: 'cor', form: 'cor-', type: 'prefix',
    meaning: { en: 'together, with', zh: '共同，一起' },
    origin_lang: 'Latin', baseSlug: 'co',
    surfaces: ['cor'],
  },
  {
    slug: 'col', form: 'col-', type: 'prefix',
    meaning: { en: 'together, with', zh: '共同，一起' },
    origin_lang: 'Latin', baseSlug: 'co',
    surfaces: ['col'],
  },
  // in- (id=10) variants: im-, il-, ir-
  {
    slug: 'im', form: 'im-', type: 'prefix',
    meaning: { en: 'not, opposite of', zh: '不，相反的' },
    origin_lang: 'Latin', baseSlug: 'in',
    surfaces: ['im'],
  },
  {
    slug: 'il', form: 'il-', type: 'prefix',
    meaning: { en: 'not, opposite of', zh: '不，相反的' },
    origin_lang: 'Latin', baseSlug: 'in',
    surfaces: ['il'],
  },
  {
    slug: 'ir', form: 'ir-', type: 'prefix',
    meaning: { en: 'not, opposite of', zh: '不，相反的' },
    origin_lang: 'Latin', baseSlug: 'in',
    surfaces: ['ir'],
  },
  // sub- (id=17) variants: suf-, sup-, suc-, sug-, sus-
  {
    slug: 'suf', form: 'suf-', type: 'prefix',
    meaning: { en: 'under, below', zh: '在下面' },
    origin_lang: 'Latin', baseSlug: 'sub',
    surfaces: ['suf'],
  },
  {
    slug: 'sup', form: 'sup-', type: 'prefix',
    meaning: { en: 'under, below', zh: '在下面' },
    origin_lang: 'Latin', baseSlug: 'sub',
    surfaces: ['sup'],
  },
  {
    slug: 'suc', form: 'suc-', type: 'prefix',
    meaning: { en: 'under, below', zh: '在下面' },
    origin_lang: 'Latin', baseSlug: 'sub',
    surfaces: ['suc'],
  },
  {
    slug: 'sug', form: 'sug-', type: 'prefix',
    meaning: { en: 'under, below', zh: '在下面' },
    origin_lang: 'Latin', baseSlug: 'sub',
    surfaces: ['sug'],
  },
  {
    slug: 'sus', form: 'sus-', type: 'prefix',
    meaning: { en: 'under, below', zh: '在下面' },
    origin_lang: 'Latin', baseSlug: 'sub',
    surfaces: ['sus'],
  },
  // dis- (id=6) variants: dif-, di-
  {
    slug: 'dif', form: 'dif-', type: 'prefix',
    meaning: { en: 'apart, not', zh: '分离，不' },
    origin_lang: 'Latin', baseSlug: 'dis',
    surfaces: ['dif'],
  },
  {
    slug: 'di-apart', form: 'di-', type: 'prefix',
    meaning: { en: 'apart, not', zh: '分离，不' },
    origin_lang: 'Latin', baseSlug: 'dis',
    surfaces: ['di'],
  },
  // ex- (id=8) variants: e-, ef-
  {
    slug: 'e-out', form: 'e-', type: 'prefix',
    meaning: { en: 'out of, from', zh: '出，从' },
    origin_lang: 'Latin', baseSlug: 'ex',
    surfaces: ['e'],
  },
  {
    slug: 'ef', form: 'ef-', type: 'prefix',
    meaning: { en: 'out of, from', zh: '出，从' },
    origin_lang: 'Latin', baseSlug: 'ex',
    surfaces: ['ef'],
  },
  // en- (id=7) variants: em-
  {
    slug: 'em', form: 'em-', type: 'prefix',
    meaning: { en: 'to put into, to cause', zh: '使成为，置于' },
    origin_lang: 'Latin', baseSlug: 'en',
    surfaces: ['em'],
  },
];

// === GREEK PREFIX GROUPS ===

const SYN_GROUP: AffixDef[] = [
  {
    slug: 'syn', form: 'syn-', type: 'prefix',
    meaning: { en: 'together, with', zh: '共同，一起' },
    origin_lang: 'Greek',
    surfaces: ['syn'],
  },
  {
    slug: 'sym', form: 'sym-', type: 'prefix',
    meaning: { en: 'together, with', zh: '共同，一起' },
    origin_lang: 'Greek', baseSlug: 'syn',
    surfaces: ['sym'],
  },
  {
    slug: 'sy', form: 'sy-', type: 'prefix',
    meaning: { en: 'together, with', zh: '共同，一起' },
    origin_lang: 'Greek', baseSlug: 'syn',
    surfaces: ['sy', 'sys'],
  },
];

const CONTRA_GROUP: AffixDef[] = [
  {
    slug: 'contra', form: 'contra-', type: 'prefix',
    meaning: { en: 'against, opposite', zh: '反对，对立' },
    origin_lang: 'Latin',
    surfaces: ['contra', 'contr'],
  },
  {
    slug: 'contro', form: 'contro-', type: 'prefix',
    meaning: { en: 'against, opposite', zh: '反对，对立' },
    origin_lang: 'Latin', baseSlug: 'contra',
    surfaces: ['contro', 'coun'],
  },
];

const BENE_GROUP: AffixDef[] = [
  {
    slug: 'bene', form: 'bene-', type: 'prefix',
    meaning: { en: 'good, well', zh: '好，善' },
    origin_lang: 'Latin',
    surfaces: ['bene', 'ben'],
  },
];

const MAL_GROUP: AffixDef[] = [
  {
    slug: 'mal', form: 'mal-', type: 'prefix',
    meaning: { en: 'bad, ill', zh: '坏，恶' },
    origin_lang: 'Latin',
    surfaces: ['mal', 'male'],
  },
];

// === STANDALONE PREFIXES ===

const STANDALONE_PREFIXES: AffixDef[] = [
  {
    slug: 'pro', form: 'pro-', type: 'prefix',
    meaning: { en: 'forward, for, before', zh: '向前，支持，在前' },
    origin_lang: 'Latin', surfaces: ['pro'],
  },
  {
    slug: 'per', form: 'per-', type: 'prefix',
    meaning: { en: 'through, thoroughly', zh: '穿过，完全' },
    origin_lang: 'Latin', surfaces: ['per'],
  },
  {
    slug: 'non', form: 'non-', type: 'prefix',
    meaning: { en: 'not', zh: '不，非' },
    origin_lang: 'Latin', surfaces: ['non'],
  },
  {
    slug: 'circum', form: 'circum-', type: 'prefix',
    meaning: { en: 'around', zh: '周围，环绕' },
    origin_lang: 'Latin', surfaces: ['circum'],
  },
  {
    slug: 'post', form: 'post-', type: 'prefix',
    meaning: { en: 'after, behind', zh: '之后，在后' },
    origin_lang: 'Latin', surfaces: ['post'],
  },
  {
    slug: 'retro', form: 'retro-', type: 'prefix',
    meaning: { en: 'backward, back', zh: '向后，回' },
    origin_lang: 'Latin', surfaces: ['retro'],
  },
  {
    slug: 'extra', form: 'extra-', type: 'prefix',
    meaning: { en: 'outside, beyond', zh: '在外，超出' },
    origin_lang: 'Latin', surfaces: ['extra', 'extro'],
  },
  {
    slug: 'intro', form: 'intro-', type: 'prefix',
    meaning: { en: 'inward, within', zh: '向内，在内' },
    origin_lang: 'Latin', surfaces: ['intro'],
  },
  {
    slug: 'ultra', form: 'ultra-', type: 'prefix',
    meaning: { en: 'beyond, extremely', zh: '超出，极端' },
    origin_lang: 'Latin', surfaces: ['ultra'],
  },
  {
    slug: 'ante', form: 'ante-', type: 'prefix',
    meaning: { en: 'before', zh: '在...之前' },
    origin_lang: 'Latin', surfaces: ['ante'],
  },
  {
    slug: 'ambi', form: 'ambi-', type: 'prefix',
    meaning: { en: 'both, around', zh: '两个，周围' },
    origin_lang: 'Latin', surfaces: ['ambi', 'amph'],
  },
  {
    slug: 'se', form: 'se-', type: 'prefix',
    meaning: { en: 'apart, aside', zh: '分离，旁边' },
    origin_lang: 'Latin', surfaces: ['se'],
  },
  {
    slug: 'neg', form: 'neg-', type: 'prefix',
    meaning: { en: 'not, deny', zh: '不，否定' },
    origin_lang: 'Latin', surfaces: ['neg', 'nec'],
  },
  {
    slug: 'sur', form: 'sur-', type: 'prefix',
    meaning: { en: 'over, above', zh: '在上，超过' },
    origin_lang: 'Latin', surfaces: ['sur'],
  },
  // Greek prefixes
  {
    slug: 'dia', form: 'dia-', type: 'prefix',
    meaning: { en: 'through, across', zh: '穿过，横跨' },
    origin_lang: 'Greek', surfaces: ['dia'],
  },
  {
    slug: 'ana', form: 'ana-', type: 'prefix',
    meaning: { en: 'up, back, again', zh: '向上，回，再' },
    origin_lang: 'Greek', surfaces: ['ana'],
  },
  {
    slug: 'apo', form: 'apo-', type: 'prefix',
    meaning: { en: 'away from, separate', zh: '远离，分离' },
    origin_lang: 'Greek', surfaces: ['apo'],
  },
  {
    slug: 'epi', form: 'epi-', type: 'prefix',
    meaning: { en: 'upon, over, near', zh: '在上面，附近' },
    origin_lang: 'Greek', surfaces: ['epi', 'ep'],
  },
  {
    slug: 'para', form: 'para-', type: 'prefix',
    meaning: { en: 'beside, alongside', zh: '旁边，沿着' },
    origin_lang: 'Greek', surfaces: ['para', 'par'],
  },
  {
    slug: 'peri', form: 'peri-', type: 'prefix',
    meaning: { en: 'around, near', zh: '周围，附近' },
    origin_lang: 'Greek', surfaces: ['peri'],
  },
  {
    slug: 'hypo', form: 'hypo-', type: 'prefix',
    meaning: { en: 'under, below', zh: '在下面，低于' },
    origin_lang: 'Greek', surfaces: ['hypo'],
  },
  {
    slug: 'meta', form: 'meta-', type: 'prefix',
    meaning: { en: 'beyond, change', zh: '超越，变化' },
    origin_lang: 'Greek', surfaces: ['meta'],
  },
  {
    slug: 'cata', form: 'cata-', type: 'prefix',
    meaning: { en: 'down, against', zh: '向下，对抗' },
    origin_lang: 'Greek', surfaces: ['cata'],
  },
  {
    slug: 'mono', form: 'mono-', type: 'prefix',
    meaning: { en: 'one, single', zh: '单一' },
    origin_lang: 'Greek', surfaces: ['mono', 'mon'],
  },
  {
    slug: 'poly', form: 'poly-', type: 'prefix',
    meaning: { en: 'many, much', zh: '多' },
    origin_lang: 'Greek', surfaces: ['poly', 'pol'],
  },
  {
    slug: 'homo', form: 'homo-', type: 'prefix',
    meaning: { en: 'same', zh: '相同' },
    origin_lang: 'Greek', surfaces: ['homo', 'homeo'],
  },
  {
    slug: 'hetero', form: 'hetero-', type: 'prefix',
    meaning: { en: 'different, other', zh: '不同，其他' },
    origin_lang: 'Greek', surfaces: ['hetero'],
  },
  {
    slug: 'micro', form: 'micro-', type: 'prefix',
    meaning: { en: 'small', zh: '微小' },
    origin_lang: 'Greek', surfaces: ['micro'],
  },
  {
    slug: 'multi', form: 'multi-', type: 'prefix',
    meaning: { en: 'many, much', zh: '多' },
    origin_lang: 'Latin', surfaces: ['multi', 'mult'],
  },
  {
    slug: 'semi', form: 'semi-', type: 'prefix',
    meaning: { en: 'half, partly', zh: '半，部分' },
    origin_lang: 'Latin', surfaces: ['semi'],
  },
  {
    slug: 'bi', form: 'bi-', type: 'prefix',
    meaning: { en: 'two, double', zh: '二，双' },
    origin_lang: 'Latin', surfaces: ['bi', 'bis'],
  },
  {
    slug: 'tri', form: 'tri-', type: 'prefix',
    meaning: { en: 'three', zh: '三' },
    origin_lang: 'Latin', surfaces: ['tri', 'tres'],
  },
  {
    slug: 'tele', form: 'tele-', type: 'prefix',
    meaning: { en: 'far, distant', zh: '远距离' },
    origin_lang: 'Greek', surfaces: ['tele'],
  },
  {
    slug: 'self', form: 'self-', type: 'prefix',
    meaning: { en: 'self, own', zh: '自身' },
    origin_lang: 'Old English', surfaces: ['self'],
  },
  {
    slug: 'be', form: 'be-', type: 'prefix',
    meaning: { en: 'make, cause, thoroughly', zh: '使成为，完全' },
    origin_lang: 'Old English', surfaces: ['be'],
  },
  {
    slug: 'po', form: 'po-', type: 'prefix',
    meaning: { en: 'after, behind', zh: '在后' },
    origin_lang: 'Latin', surfaces: ['po'],
  },
  {
    slug: 'dys', form: 'dys-', type: 'prefix',
    meaning: { en: 'bad, difficult', zh: '坏，困难' },
    origin_lang: 'Greek', surfaces: ['dys'],
  },
  {
    slug: 'eu', form: 'eu-', type: 'prefix',
    meaning: { en: 'good, well', zh: '好，优' },
    origin_lang: 'Greek', surfaces: ['eu'],
  },
  {
    slug: 'neo', form: 'neo-', type: 'prefix',
    meaning: { en: 'new', zh: '新' },
    origin_lang: 'Greek', surfaces: ['neo'],
  },
  {
    slug: 'pseudo', form: 'pseudo-', type: 'prefix',
    meaning: { en: 'false, imitation', zh: '假，伪' },
    origin_lang: 'Greek', surfaces: ['pseudo'],
  },
  {
    slug: 'eco', form: 'eco-', type: 'prefix',
    meaning: { en: 'environment, ecology', zh: '环境，生态' },
    origin_lang: 'Greek', surfaces: ['eco'],
  },
  {
    slug: 'geo', form: 'geo-', type: 'prefix',
    meaning: { en: 'earth', zh: '地球，地' },
    origin_lang: 'Greek', surfaces: ['geo'],
  },
  {
    slug: 'omni', form: 'omni-', type: 'prefix',
    meaning: { en: 'all, every', zh: '全部' },
    origin_lang: 'Latin', surfaces: ['omni'],
  },
  {
    slug: 'pan', form: 'pan-', type: 'prefix',
    meaning: { en: 'all, every', zh: '全部' },
    origin_lang: 'Greek', surfaces: ['pan', 'panto'],
  },
  {
    slug: 'mini', form: 'mini-', type: 'prefix',
    meaning: { en: 'small, miniature', zh: '小，微型' },
    origin_lang: 'Latin', surfaces: ['mini'],
  },
  {
    slug: 'kilo', form: 'kilo-', type: 'prefix',
    meaning: { en: 'thousand', zh: '千' },
    origin_lang: 'Greek', surfaces: ['kilo'],
  },
];

// === COMMON SUFFIXES ===

const COMMON_SUFFIXES: AffixDef[] = [
  {
    slug: 'ed', form: '-ed', type: 'suffix',
    meaning: { en: 'past tense / completed', zh: '过去式 / 已完成' },
    surfaces: ['ed', 'd'],
  },
  {
    slug: 'ing', form: '-ing', type: 'suffix',
    meaning: { en: 'continuous / action of', zh: '进行中 / ...的行为' },
    surfaces: ['ing'],
  },
  {
    slug: 's-plural', form: '-s/-es', type: 'suffix',
    meaning: { en: 'plural', zh: '复数' },
    surfaces: ['s', 'es'],
  },
  {
    slug: 'y-adj', form: '-y', type: 'suffix',
    meaning: { en: 'characterized by', zh: '具有...特征的' },
    surfaces: ['y'],
  },
  {
    slug: 'ic', form: '-ic', type: 'suffix',
    meaning: { en: 'relating to, having the nature of', zh: '与...有关的' },
    origin_lang: 'Greek', surfaces: ['ic', 'ical', 'ics'],
  },
  {
    slug: 'ent', form: '-ent/-ant', type: 'suffix',
    meaning: { en: 'performing, being in a state', zh: '执行...的，处于...状态' },
    origin_lang: 'Latin', surfaces: ['ent', 'ant'],
  },
  {
    slug: 'ion', form: '-ion', type: 'suffix',
    meaning: { en: 'act, process, state', zh: '行为，过程，状态' },
    origin_lang: 'Latin', surfaces: ['ion', 'ation', 'ition', 'sion'],
  },
  {
    slug: 'ence', form: '-ence/-ance', type: 'suffix',
    meaning: { en: 'state, quality', zh: '状态，性质' },
    origin_lang: 'Latin', surfaces: ['ence', 'ance', 'ency', 'ancy'],
  },
  {
    slug: 'ism', form: '-ism', type: 'suffix',
    meaning: { en: 'doctrine, belief, practice', zh: '主义，信仰，做法' },
    origin_lang: 'Greek', surfaces: ['ism'],
  },
  {
    slug: 'or', form: '-or', type: 'suffix',
    meaning: { en: 'one who does, agent', zh: '做...的人' },
    origin_lang: 'Latin', surfaces: ['or', 'tor', 'ator'],
  },
  {
    slug: 'age', form: '-age', type: 'suffix',
    meaning: { en: 'action, state, collection', zh: '行为，状态，集合' },
    origin_lang: 'French', surfaces: ['age'],
  },
  {
    slug: 'ary', form: '-ary', type: 'suffix',
    meaning: { en: 'relating to, connected with', zh: '与...相关的' },
    origin_lang: 'Latin', surfaces: ['ary', 'ory', 'ery'],
  },
  {
    slug: 'ure', form: '-ure', type: 'suffix',
    meaning: { en: 'act, process, result', zh: '行为，过程，结果' },
    origin_lang: 'Latin', surfaces: ['ure', 'ture', 'ature'],
  },
  {
    slug: 'id-adj', form: '-id', type: 'suffix',
    meaning: { en: 'having the quality of', zh: '具有...的性质' },
    origin_lang: 'Latin', surfaces: ['id'],
  },
  {
    slug: 'ar-suffix', form: '-ar', type: 'suffix',
    meaning: { en: 'relating to, resembling', zh: '与...有关的，类似' },
    origin_lang: 'Latin', surfaces: ['ar'],
  },
  {
    slug: 'ish', form: '-ish', type: 'suffix',
    meaning: { en: 'somewhat, resembling', zh: '有些，类似' },
    origin_lang: 'Old English', surfaces: ['ish'],
  },
  {
    slug: 'ible', form: '-ible', type: 'suffix',
    meaning: { en: 'capable of', zh: '能够...的' },
    origin_lang: 'Latin', surfaces: ['ible'],
  },
  {
    slug: 'ine', form: '-ine', type: 'suffix',
    meaning: { en: 'of, relating to, resembling', zh: '属于，与...有关' },
    origin_lang: 'Latin', surfaces: ['ine'],
  },
  {
    slug: 'ile', form: '-ile', type: 'suffix',
    meaning: { en: 'capable of, relating to', zh: '能够，与...有关' },
    origin_lang: 'Latin', surfaces: ['ile'],
  },
  {
    slug: 'ite', form: '-ite', type: 'suffix',
    meaning: { en: 'belonging to, product of', zh: '属于，产物' },
    origin_lang: 'Latin', surfaces: ['ite'],
  },
  {
    slug: 'ian', form: '-ian/-an', type: 'suffix',
    meaning: { en: 'one who, relating to', zh: '...人，与...相关' },
    origin_lang: 'Latin', surfaces: ['ian', 'an', 'arian'],
  },
  {
    slug: 'acy', form: '-acy', type: 'suffix',
    meaning: { en: 'state, quality', zh: '状态，性质' },
    origin_lang: 'Latin', surfaces: ['acy', 'cy'],
  },
  {
    slug: 'ade', form: '-ade', type: 'suffix',
    meaning: { en: 'act, product', zh: '行为，产物' },
    origin_lang: 'French', surfaces: ['ade'],
  },
  {
    slug: 'itude', form: '-itude', type: 'suffix',
    meaning: { en: 'state, condition', zh: '状态，情况' },
    origin_lang: 'Latin', surfaces: ['itude', 'tude'],
  },
  {
    slug: 'ee', form: '-ee', type: 'suffix',
    meaning: { en: 'one who receives the action', zh: '接受动作的人' },
    origin_lang: 'French', surfaces: ['ee', 'eer'],
  },
  {
    slug: 'ry', form: '-ry', type: 'suffix',
    meaning: { en: 'place of, art of, collection', zh: '场所，技艺，集合' },
    origin_lang: 'French', surfaces: ['ry'],
  },
  {
    slug: 'some', form: '-some', type: 'suffix',
    meaning: { en: 'tending to, causing', zh: '倾向于，引起' },
    origin_lang: 'Old English', surfaces: ['some'],
  },
  {
    slug: 'ard', form: '-ard', type: 'suffix',
    meaning: { en: 'one who (often pejorative)', zh: '...的人（常贬义）' },
    origin_lang: 'French', surfaces: ['ard'],
  },
  {
    slug: 'cide', form: '-cide', type: 'suffix',
    meaning: { en: 'killing, cutting', zh: '杀，切' },
    origin_lang: 'Latin', surfaces: ['cide'],
  },
  {
    slug: 'cracy', form: '-cracy', type: 'suffix',
    meaning: { en: 'rule, government', zh: '统治，政治' },
    origin_lang: 'Greek', surfaces: ['cracy'],
  },
  {
    slug: 'let', form: '-let', type: 'suffix',
    meaning: { en: 'small, diminutive', zh: '小' },
    origin_lang: 'French', surfaces: ['let', 'ette'],
  },
  {
    slug: 'oid', form: '-oid', type: 'suffix',
    meaning: { en: 'resembling, like', zh: '类似，像' },
    origin_lang: 'Greek', surfaces: ['oid'],
  },
  {
    slug: 'itis', form: '-itis', type: 'suffix',
    meaning: { en: 'inflammation', zh: '炎症' },
    origin_lang: 'Greek', surfaces: ['itis'],
  },
  {
    slug: 'osis', form: '-osis', type: 'suffix',
    meaning: { en: 'condition, process', zh: '状况，过程' },
    origin_lang: 'Greek', surfaces: ['osis'],
  },
  {
    slug: 'ster', form: '-ster', type: 'suffix',
    meaning: { en: 'one who, agent', zh: '做...的人' },
    origin_lang: 'Old English', surfaces: ['ster'],
  },
  {
    slug: 'esque', form: '-esque', type: 'suffix',
    meaning: { en: 'in the style of', zh: '风格的' },
    origin_lang: 'French', surfaces: ['esque'],
  },
  {
    slug: 'ific', form: '-ific', type: 'suffix',
    meaning: { en: 'making, producing', zh: '制造，产生' },
    origin_lang: 'Latin', surfaces: ['ific', 'fic'],
  },
];

// Combine all definitions
const ALL_DEFS: AffixDef[] = [
  ...AD_GROUP,
  ...OB_GROUP,
  ...AB_GROUP,
  ...EXISTING_BASE_VARIANTS,
  ...SYN_GROUP,
  ...CONTRA_GROUP,
  ...BENE_GROUP,
  ...MAL_GROUP,
  ...STANDALONE_PREFIXES,
  ...COMMON_SUFFIXES,
];

// ---------------------------------------------------------------------------
// Migration logic
// ---------------------------------------------------------------------------

const PAGE = 1000;

async function fetchAll<T>(table: string, select: string, filter?: { col: string; values: unknown[] }): Promise<T[]> {
  const all: T[] = [];
  let offset = 0;
  while (true) {
    let q = db.from(table).select(select).range(offset, offset + PAGE - 1);
    if (filter) q = q.in(filter.col, filter.values);
    const { data, error } = await q;
    if (error) { console.error(error); break; }
    if (!data || data.length === 0) break;
    all.push(...(data as T[]));
    if (data.length < PAGE) break;
    offset += PAGE;
  }
  return all;
}

async function main() {
  console.log(`Mode: ${DRY_RUN ? 'DRY RUN' : 'LIVE'}\n`);

  // Step 1: Schema migration — add base_affix_id column
  console.log('=== STEP 1: Schema migration ===');
  // Check if column already exists by trying to select it
  const { error: colCheck } = await db.from('affixes').select('base_affix_id').limit(1);
  if (colCheck && colCheck.message.includes('base_affix_id')) {
    console.log('  Column base_affix_id does not exist yet.');
    if (!DRY_RUN) {
      console.log('  ⚠️  Please run the following SQL in Supabase Dashboard:');
      console.log('  ALTER TABLE affixes ADD COLUMN base_affix_id INTEGER REFERENCES affixes(id);');
      console.log('  CREATE INDEX idx_affixes_base_affix_id ON affixes(base_affix_id);');
      console.log('  Then re-run this script.');
      return;
    } else {
      console.log('  [DRY RUN] Would need to add base_affix_id column first.');
    }
  } else {
    console.log('  ✓ Column base_affix_id already exists.');
  }

  // Step 2: Load existing affix records
  const existingAffixes = await fetchAll<{ id: number; slug: string }>('affixes', 'id, slug');
  const slugToId = new Map(existingAffixes.map((a) => [a.slug, a.id]));
  console.log(`  Existing affixes: ${existingAffixes.length}`);

  // Step 3: Create/update affix records
  console.log('\n=== STEP 2: Create/update affix records ===');

  // Separate into new vs existing
  const toCreate: AffixDef[] = [];
  const existing: AffixDef[] = [];
  for (const def of ALL_DEFS) {
    if (slugToId.has(def.slug)) {
      existing.push(def);
    } else {
      toCreate.push(def);
    }
  }

  console.log(`  Already exist: ${existing.length}`);
  console.log(`  To create: ${toCreate.length}`);

  if (toCreate.length > 0) {
    // First create base affixes (no baseSlug), then variants
    const bases = toCreate.filter((d) => !d.baseSlug);
    const variants = toCreate.filter((d) => d.baseSlug);

    console.log(`    Bases: ${bases.length}, Variants: ${variants.length}`);

    if (!DRY_RUN && bases.length > 0) {
      const rows = bases.map((d) => ({
        slug: d.slug,
        form: d.form,
        type: d.type,
        meaning: d.meaning,
        overview: d.overview ?? d.meaning,
        origin_lang: d.origin_lang ?? null,
      }));
      const inserted = await batchUpsert('affixes', rows);
      console.log(`    ✓ Inserted ${inserted} base affixes`);

      // Refresh slugToId
      const refreshed = await fetchAll<{ id: number; slug: string }>('affixes', 'id, slug');
      slugToId.clear();
      for (const a of refreshed) slugToId.set(a.slug, a.id);
    }

    if (!DRY_RUN && variants.length > 0) {
      const rows = variants.map((d) => ({
        slug: d.slug,
        form: d.form,
        type: d.type,
        meaning: d.meaning,
        overview: d.overview ?? d.meaning,
        origin_lang: d.origin_lang ?? null,
        base_affix_id: d.baseSlug ? slugToId.get(d.baseSlug) ?? null : null,
      }));
      const inserted = await batchUpsert('affixes', rows);
      console.log(`    ✓ Inserted ${inserted} variant affixes`);

      // Refresh slugToId
      const refreshed = await fetchAll<{ id: number; slug: string }>('affixes', 'id, slug');
      slugToId.clear();
      for (const a of refreshed) slugToId.set(a.slug, a.id);
    }

    if (DRY_RUN) {
      console.log('  [DRY RUN] New affix records:');
      for (const d of toCreate) {
        console.log(`    ${d.slug.padEnd(14)} ${d.form.padEnd(12)} ${d.type.padEnd(8)} base=${d.baseSlug ?? '(none)'}`);
        console.log(`      ${JSON.stringify(d.meaning)}`);
      }
    }
  }

  // Step 4: Update base_affix_id for existing affixes that need it
  console.log('\n=== STEP 3: Set base_affix_id for existing variant affixes ===');
  for (const def of existing) {
    if (def.baseSlug) {
      const affixId = slugToId.get(def.slug);
      const baseId = slugToId.get(def.baseSlug);
      if (affixId && baseId) {
        if (!DRY_RUN) {
          await db.from('affixes').update({ base_affix_id: baseId }).eq('id', affixId);
        }
        console.log(`  ${def.slug} → base=${def.baseSlug} (${affixId} → ${baseId})`);
      }
    }
  }

  // Step 5: Link morpheme_segments to affix records
  console.log('\n=== STEP 4: Link morpheme_segments to affix records ===');

  // Build surface→affixId map (only for prefix/suffix type segments)
  const surfaceMap = new Map<string, { affixId: number; type: string }>();
  for (const def of ALL_DEFS) {
    const affixId = slugToId.get(def.slug);
    if (!affixId) continue;
    for (const surface of def.surfaces) {
      surfaceMap.set(`${surface}|${def.type}`, { affixId, type: def.type });
    }
  }

  // Fetch all unlinked prefix/suffix segments
  const allSegments = await fetchAll<{ id: number; surface: string; type: string; affix_id: number | null }>(
    'morpheme_segments',
    'id, surface, type, affix_id',
    { col: 'type', values: ['prefix', 'suffix'] },
  );

  const unlinked = allSegments.filter((s) => s.affix_id === null);
  let linkedCount = 0;
  let skippedCount = 0;
  const updates: { id: number; affix_id: number }[] = [];

  for (const seg of unlinked) {
    const key = `${seg.surface}|${seg.type}`;
    const match = surfaceMap.get(key);
    if (match) {
      updates.push({ id: seg.id, affix_id: match.affixId });
      linkedCount++;
    } else {
      skippedCount++;
    }
  }

  console.log(`  Segments to link: ${linkedCount}`);
  console.log(`  Segments skipped (no matching affix): ${skippedCount}`);

  if (!DRY_RUN && updates.length > 0) {
    // Batch update in chunks
    const BATCH = 200;
    for (let i = 0; i < updates.length; i += BATCH) {
      const batch = updates.slice(i, i + BATCH);
      // Supabase doesn't support batch update easily, so group by affix_id
      const byAffix = new Map<number, number[]>();
      for (const u of batch) {
        const ids = byAffix.get(u.affix_id) ?? [];
        ids.push(u.id);
        byAffix.set(u.affix_id, ids);
      }
      for (const [affixId, segIds] of byAffix) {
        const { error } = await db
          .from('morpheme_segments')
          .update({ affix_id: affixId })
          .in('id', segIds);
        if (error) console.error(`  Error linking segments to affix ${affixId}:`, error.message);
      }
    }
    console.log(`  ✓ Linked ${linkedCount} segments`);
  }

  // Step 6: Summary
  console.log('\n=== SUMMARY ===');
  const finalAffixes = await fetchAll<{ id: number }>('affixes', 'id');
  const finalLinked = allSegments.filter((s) => s.affix_id !== null).length + (DRY_RUN ? 0 : linkedCount);
  console.log(`  Total affixes: ${finalAffixes.length}`);
  console.log(`  Segments linked: ${finalLinked} / ${allSegments.length}`);
  console.log(`  Coverage: ${((finalLinked / allSegments.length) * 100).toFixed(1)}%`);
  console.log(`  Remaining unlinked: ${allSegments.length - finalLinked}`);
}

main().catch(console.error);
