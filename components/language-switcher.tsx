'use client';

import { ChangeEvent } from 'react';
import { useLanguage } from '@/components/language-provider';

export const LanguageSwitcher = () => {
  const { locale, setLocale, availableLocales, dictionary } = useLanguage();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLocale(event.target.value as typeof availableLocales[number]);
  };

  return (
    <label className="flex items-center gap-2 text-sm font-medium">
      <span>{dictionary.language}</span>
      <select
        value={locale}
        onChange={handleChange}
        className="rounded-md border border-border bg-surface px-2 py-1 text-sm shadow-sm"
      >
        {availableLocales.map((lng) => (
          <option key={lng} value={lng}>
            {lng.toUpperCase()}
          </option>
        ))}
      </select>
    </label>
  );
};
