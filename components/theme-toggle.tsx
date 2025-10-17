'use client';

import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';
import { RiSunLine, RiMoonLine } from '@remixicon/react';

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
      className="cursor-pointer rounded-md p-2 transition-colors hover:bg-muted"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <RiMoonLine size={20} /> : <RiSunLine size={20} />}
    </button>
  );
};
