'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';
import { ROOTS, WORDS } from '@/lib/content';

interface CommandSearchProps {
  open: boolean;
  onClose: () => void;
}

export const CommandSearch = ({ open, onClose }: CommandSearchProps) => {
  const { locale, dictionary } = useLanguage();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (open) {
      setQuery('');
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (q.length === 0) return { roots: [], words: [] };

    const rootResults = ROOTS.filter(
      (r) =>
        r.slug.includes(q) ||
        r.variants.some((v) => v.includes(q)) ||
        r.meaning.en.toLowerCase().includes(q) ||
        r.meaning.zh.includes(q),
    ).slice(0, 8);

    const wordResults = WORDS.filter(
      (w) =>
        w.lemma.toLowerCase().includes(q) ||
        w.definition.en.toLowerCase().includes(q) ||
        w.definition.zh.includes(q),
    ).slice(0, 8);

    return { roots: rootResults, words: wordResults };
  }, [query]);

  const hasResults = results.roots.length > 0 || results.words.length > 0;
  const hasQuery = query.trim().length > 0;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="mx-auto mt-[10vh] w-full max-w-xl px-4">
        <div className="bg-card border-border overflow-hidden rounded-2xl border shadow-2xl">
          <div className="border-border flex items-center gap-3 border-b px-4">
            <Search className="text-muted-foreground h-5 w-5 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={dictionary.searchPlaceholder}
              className="bg-transparent text-foreground placeholder:text-muted-foreground h-14 flex-1 text-base outline-none"
            />
            {query.length > 0 && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="text-muted-foreground hover:text-foreground"
                aria-label="Clear"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            <kbd className="border-border bg-muted text-muted-foreground hidden rounded-md border px-2 py-0.5 text-xs sm:inline-block">
              ESC
            </kbd>
          </div>

          {hasQuery && (
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {!hasResults && (
                <p className="text-muted-foreground px-4 py-8 text-center text-sm">
                  {dictionary.searchNoResults}
                </p>
              )}

              {results.roots.length > 0 && (
                <div className="mb-2">
                  <p className="text-muted-foreground px-3 py-2 text-xs font-bold uppercase tracking-wider">
                    {dictionary.searchRoots}
                  </p>
                  {results.roots.map((root) => (
                    <Link
                      key={root.slug}
                      href={`/root/${root.slug}`}
                      onClick={onClose}
                      className="text-foreground hover:bg-muted flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors"
                    >
                      <span className="bg-primary/10 text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold">
                        {root.variants[0]?.[0]?.toUpperCase() ?? '?'}
                      </span>
                      <div className="min-w-0">
                        <p className="font-semibold">{root.variants.join(', ')}</p>
                        <p className="text-muted-foreground truncate text-xs">
                          {root.meaning[locale] ?? root.meaning.en}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {results.words.length > 0 && (
                <div>
                  <p className="text-muted-foreground px-3 py-2 text-xs font-bold uppercase tracking-wider">
                    {dictionary.searchWords}
                  </p>
                  {results.words.map((word) => (
                    <Link
                      key={word.slug}
                      href={`/word/${word.slug}`}
                      onClick={onClose}
                      className="text-foreground hover:bg-muted flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors"
                    >
                      <span className="bg-accent/10 text-accent flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold">
                        {word.lemma[0]?.toUpperCase() ?? '?'}
                      </span>
                      <div className="min-w-0">
                        <p className="font-semibold">{word.lemma}</p>
                        <p className="text-muted-foreground truncate text-xs">
                          {word.definition[locale] ?? word.definition.en}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
