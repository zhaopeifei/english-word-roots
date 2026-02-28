'use client';

import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border-[1.5px] border-border bg-background text-base transition-all hover:rotate-12 hover:border-[color:var(--secondary)]"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
};
