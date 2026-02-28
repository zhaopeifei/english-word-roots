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
      className="border-border bg-background text-muted-foreground hover:border-primary hover:text-primary h-9 cursor-pointer rounded-full border-[1.5px] px-3 text-xs font-bold shadow-none transition-colors"
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
