'use client';

import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { DEFAULT_LOCALE, SUPPORTED_LANGUAGES, type Locale } from '@/content/site';
import { getDictionary } from '@/lib/i18n/dictionaries';

interface LanguageContextValue {
  locale: Locale;
  dictionary: Record<string, string>;
  setLocale: (locale: Locale) => void;
  availableLocales: readonly Locale[];
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  const value = useMemo(() => {
    return {
      locale,
      dictionary: getDictionary(locale),
      setLocale,
      availableLocales: SUPPORTED_LANGUAGES
    } satisfies LanguageContextValue;
  }, [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
};
