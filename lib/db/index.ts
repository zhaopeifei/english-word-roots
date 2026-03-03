/**
 * Supabase data access layer — barrel re-export.
 *
 * Import from `@/lib/db` to access all DB query functions.
 */

export {
  getRoots,
  getRootBySlug,
  getRootSlugs,
  getRootCount,
  getRootsByOrigin,
  getRootCountByOrigin,
} from './roots';

export {
  getWordBySlug,
  getWordsByRootSlug,
  getWordSlugs,
  getFeaturedWords,
  getWordCount,
  getBestBreakdownWord,
  getWordsByTag,
  getWordCountByTag,
} from './words';

export {
  getAffixes,
  getAffixBySlug,
  getAffixCount,
} from './affixes';
