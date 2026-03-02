'use client';

import { ReactNode } from 'react';
import { LanguageProvider } from '@/components/language-provider';
import { ThemeProvider } from 'next-themes';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
};
