// Wiktionary MediaWiki API client + wikitext etymology parser.

const API_URL = 'https://en.wiktionary.org/w/api.php';
const USER_AGENT = 'EnglishWordRoots/1.0 (educational; peyton@github)';

interface WikiPage {
  title: string;
  revisions?: { slots?: { main?: { content?: string } } }[];
  missing?: boolean;
}

export interface WiktionaryEntry {
  word: string;
  found: boolean;
  etymologyWikitext: string;
  templates: ParsedTemplate[];
  etymologyText: string;
}

export interface ParsedTemplate {
  name: string;
  args: Record<string, string>;
}

/**
 * Fetch wikitext for a batch of words (up to 50) from Wiktionary API.
 * Returns a Map of word → raw wikitext (or null if not found).
 */
export async function fetchWiktionaryBatch(
  words: string[],
): Promise<Map<string, string | null>> {
  const titles = words.join('|');
  const params = new URLSearchParams({
    action: 'query',
    titles,
    prop: 'revisions',
    rvprop: 'content',
    rvslots: 'main',
    format: 'json',
    formatversion: '2',
  });

  // Wrap the entire fetch + parse in a timeout
  const timeout = <T>(promise: Promise<T>, ms: number): Promise<T> =>
    Promise.race([
      promise,
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error(`Timeout after ${ms}ms`)), ms),
      ),
    ]);

  const res = await timeout(
    fetch(`${API_URL}?${params}`, {
      headers: { 'User-Agent': USER_AGENT },
    }),
    15_000,
  );

  if (!res.ok) {
    throw new Error(`Wiktionary API error: ${res.status} ${res.statusText}`);
  }

  const json = (await timeout(res.json(), 15_000)) as { query?: { pages?: WikiPage[] } };
  const result = new Map<string, string | null>();

  // Initialize all words as null
  for (const w of words) result.set(w, null);

  if (!json.query?.pages) return result;

  for (const page of json.query.pages) {
    if (page.missing) continue;
    const content = page.revisions?.[0]?.slots?.main?.content;
    if (content) {
      // Normalize title back to lowercase slug
      const key = page.title.toLowerCase().replace(/ /g, '-');
      result.set(key, content);
    }
  }

  return result;
}

/**
 * Extract the ===Etymology=== (or ===Etymology 1===) section from wikitext.
 */
export function extractEtymologySection(wikitext: string): string {
  // Find ===Etymology=== or ===Etymology 1=== header
  const headerRe = /={2,3}\s*Etymology(?:\s+\d+)?\s*={2,3}/;
  const headerMatch = wikitext.match(headerRe);
  if (!headerMatch || headerMatch.index === undefined) return '';

  const start = headerMatch.index + headerMatch[0].length;
  // Find the next section header (==...==) or horizontal rule (----)
  const rest = wikitext.slice(start);
  const endMatch = rest.match(/\n={2,3}\s*[A-Z]|\n----/);
  const section = endMatch ? rest.slice(0, endMatch.index) : rest;
  return section.trim();
}

/**
 * Parse Wiktionary templates from an etymology section.
 * Extracts templates like {{bor|en|la|biologia}}, {{prefix|en|un|happy}}, etc.
 */
export function parseTemplates(etymSection: string): ParsedTemplate[] {
  const templates: ParsedTemplate[] = [];
  // Simple non-nested template match: {{name|arg1|arg2|...}}
  // Avoids catastrophic backtracking by only matching non-brace content
  const regex = /\{\{([^{}|]+(?:\|[^{}]*)?)\}\}/g;
  let match;

  while ((match = regex.exec(etymSection)) !== null) {
    const fullMatch = match[0];
    const inner = match[1];
    const pipeIdx = inner.indexOf('|');
    const name = (pipeIdx >= 0 ? inner.slice(0, pipeIdx) : inner).trim().toLowerCase();

    // Only capture etymology-relevant templates
    const relevant = [
      'root', 'bor', 'der', 'inh', 'prefix', 'suffix', 'af', 'affix',
      'compound', 'confix', 'blend', 'onomatopoeia', 'back-form',
      'clipping', 'named-after', 'eponym', 'bor+', 'der+', 'inh+',
      'learned borrowing', 'semi-learned borrowing', 'unadapted borrowing',
    ];
    if (!relevant.includes(name)) continue;

    const args: Record<string, string> = {};
    // Parse pipe-separated arguments
    const argsStr = fullMatch.slice(2 + name.length, -2); // strip {{ and }}
    if (argsStr.startsWith('|')) {
      const parts = argsStr.slice(1).split('|');
      let positionalIndex = 1;
      for (const part of parts) {
        const eqIdx = part.indexOf('=');
        if (eqIdx > 0 && !part.slice(0, eqIdx).includes(' ')) {
          args[part.slice(0, eqIdx).trim()] = part.slice(eqIdx + 1).trim();
        } else {
          args[String(positionalIndex)] = part.trim();
          positionalIndex++;
        }
      }
    }

    templates.push({ name, args });
  }

  return templates;
}

/**
 * Strip wikitext markup to produce plain text.
 * Converts [[links]], {{templates}}, and '''bold''' to readable text.
 */
export function toPlainText(etymSection: string): string {
  let text = etymSection;

  // Remove {{...}} templates (simplistic — nested templates may leave remnants)
  text = text.replace(/\{\{[^{}]*\}\}/g, (m) => {
    // For common templates, extract useful text
    const inner = m.slice(2, -2);
    const parts = inner.split('|');
    const tmplName = parts[0].trim().toLowerCase();

    // For borrowing templates, show the source word
    if (['bor', 'der', 'inh', 'bor+', 'der+', 'inh+'].includes(tmplName)) {
      return parts[parts.length - 1] || '';
    }
    // For m (mention), l (link) templates
    if (['m', 'l', 'cog'].includes(tmplName)) {
      return parts.length >= 3 ? parts[2] : parts[parts.length - 1] || '';
    }
    return '';
  });

  // [[word|display]] → display; [[word]] → word
  text = text.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2');
  text = text.replace(/\[\[([^\]]+)\]\]/g, '$1');

  // '''bold''' → bold, ''italic'' → italic
  text = text.replace(/'''([^']+)'''/g, '$1');
  text = text.replace(/''([^']+)''/g, '$1');

  // Clean up extra whitespace
  text = text.replace(/\s+/g, ' ').trim();

  return text;
}
