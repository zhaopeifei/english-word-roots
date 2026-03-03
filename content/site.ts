export const SITE_NAME = 'English Word Roots';
export const SITE_URL = 'https://www.englishwordroots.com';
export const SITE_DESCRIPTION =
  'Explore English vocabulary through root-based navigation, bilingual explanations, and static SEO-friendly pages.';
export const SUPPORTED_LANGUAGES = ['en', 'zh'] as const;

export type Locale = (typeof SUPPORTED_LANGUAGES)[number];

export type LocalePreference = Locale | 'auto';

export const DEFAULT_LOCALE: Locale = 'en';

export interface NavLink {
  href: string;
  label: Record<Locale, string>;
  /** When true, the header renders a dropdown menu for this item. */
  hasDropdown?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { href: '/home', label: { en: 'Home', zh: '首页' } },
  { href: '/explore', label: { en: 'Explore', zh: '探索' }, hasDropdown: true },
  { href: '/root', label: { en: 'Roots', zh: '词根' } },
  { href: '/about', label: { en: 'About', zh: '关于我们' } },
];
