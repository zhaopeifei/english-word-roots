'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';
import type { LocalePreference } from '@/content/site';

const OPTIONS: { value: LocalePreference; label: string }[] = [
  { value: 'auto', label: 'Auto' },
  { value: 'en', label: 'English' },
  { value: 'zh', label: '中文' },
];

function getButtonLabel(preference: LocalePreference): string {
  if (preference === 'auto') return 'Auto';
  if (preference === 'zh') return '中文';
  return 'EN';
}

export const LanguageSwitcher = () => {
  const { preference, setPreference, locale } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open]);

  const handleSelect = useCallback(
    (value: LocalePreference) => {
      setPreference(value);
      setOpen(false);
    },
    [setPreference],
  );

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="border-border bg-background text-muted-foreground hover:border-primary hover:text-primary flex h-9 cursor-pointer items-center gap-1.5 rounded-full border-[1.5px] px-3 text-xs font-bold transition-colors"
        aria-label="Change language"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <Globe className="h-3.5 w-3.5" />
        <span>{getButtonLabel(preference)}</span>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Language"
          className="border-border bg-card absolute right-0 top-full mt-2 min-w-[140px] overflow-hidden rounded-xl border shadow-lg"
        >
          {OPTIONS.map((opt) => {
            const isActive = preference === opt.value;
            const resolvedNote =
              opt.value === 'auto' ? ` (${locale === 'zh' ? '中文' : 'English'})` : '';

            return (
              <button
                key={opt.value}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => handleSelect(opt.value)}
                className={`flex w-full items-center gap-2 px-4 py-2.5 text-sm transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {isActive && <span className="text-primary text-xs">✓</span>}
                <span className={isActive ? '' : 'ml-5'}>
                  {opt.label}
                  {resolvedNote && (
                    <span className="text-muted-foreground ml-1 text-xs">{resolvedNote}</span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
