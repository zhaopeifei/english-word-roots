'use client';

import { ChangeEvent } from 'react';
import { useLanguage } from '@/components/language-provider';

export const LanguageSwitcher = () => {
  const { locale, setLocale, availableLocales } = useLanguage();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLocale(event.target.value as (typeof availableLocales)[number]);
  };

  return (
    <select
      value={locale}
      onChange={handleChange}
      className="h-9 cursor-pointer rounded-full border-[1.5px] border-border bg-background px-3 text-xs font-bold text-muted-foreground shadow-none transition-colors hover:border-primary hover:text-primary"
      aria-label="Language"
    >
      {availableLocales.map((lng) => (
        <option key={lng} value={lng}>
          {lng === 'en' ? 'EN' : '中文'}
        </option>
      ))}
    </select>
  );
};
