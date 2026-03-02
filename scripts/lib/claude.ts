// Claude API client with retry, JSON extraction, and rate limiting.
import Anthropic from '@anthropic-ai/sdk';

const apiKey = process.env.ANTHROPIC_API_KEY;
if (!apiKey) {
  console.error('Missing ANTHROPIC_API_KEY in .env.local');
  process.exit(1);
}

const client = new Anthropic({ apiKey });

const MODEL = 'claude-sonnet-4-20250514';

interface CallClaudeOpts {
  model?: string;
  temperature?: number;
  maxTokens?: number;
  maxRetries?: number;
}

/**
 * Call Claude and parse the response as JSON of type T.
 * Automatically retries on rate limit (429) and server errors (5xx).
 */
export async function callClaude<T>(
  system: string,
  user: string,
  opts?: CallClaudeOpts,
): Promise<T> {
  const maxRetries = opts?.maxRetries ?? 5;
  let lastError: Error | null = null;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await client.messages.create({
        model: opts?.model ?? MODEL,
        max_tokens: opts?.maxTokens ?? 8192,
        temperature: opts?.temperature ?? 0,
        system,
        messages: [{ role: 'user', content: user }],
      });

      const text = response.content
        .filter((b) => b.type === 'text')
        .map((b) => b.text)
        .join('');

      return extractJSON<T>(text);
    } catch (err: unknown) {
      lastError = err as Error;
      const status = (err as { status?: number }).status;

      if (status === 429 || (status && status >= 500)) {
        const delay = Math.min(2000 * Math.pow(2, attempt), 60000);
        console.warn(`  Claude API ${status}, retry ${attempt + 1}/${maxRetries} in ${delay}ms...`);
        await sleep(delay);
        continue;
      }
      throw err;
    }
  }

  throw lastError ?? new Error('callClaude: max retries exceeded');
}

/**
 * Extract JSON from Claude's text response.
 * Handles: raw JSON, ```json fenced blocks, and JSON within prose.
 */
function extractJSON<T>(text: string): T {
  // Try direct parse first
  try {
    return JSON.parse(text) as T;
  } catch {
    // continue
  }

  // Try fenced code block
  const fenced = text.match(/```(?:json)?\s*\n?([\s\S]*?)\n?\s*```/);
  if (fenced) {
    return JSON.parse(fenced[1]) as T;
  }

  // Try finding array or object boundaries
  const firstBracket = text.search(/[\[{]/);
  if (firstBracket >= 0) {
    const startChar = text[firstBracket];
    const endChar = startChar === '[' ? ']' : '}';
    let depth = 0;
    for (let i = firstBracket; i < text.length; i++) {
      if (text[i] === startChar) depth++;
      else if (text[i] === endChar) depth--;
      if (depth === 0) {
        return JSON.parse(text.slice(firstBracket, i + 1)) as T;
      }
    }
  }

  throw new Error(`Failed to extract JSON from Claude response:\n${text.slice(0, 200)}...`);
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
