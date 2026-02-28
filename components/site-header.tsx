'use client';

import Link from 'next/link';
import { NAV_LINKS, SITE_NAME } from '@/content/site';
import { LanguageSwitcher } from '@/components/language-switcher';
import { ThemeToggle } from '@/components/theme-toggle';
import { useLanguage } from '@/components/language-provider';

export const SiteHeader = () => {
  const { locale } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b-[1.5px] border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link
          href="/home"
          className="flex items-center gap-2 font-heading text-xl font-bold text-primary"
          aria-label={SITE_NAME}
        >
          <span className="text-xl">🌿</span>
          WordRoots
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-muted-foreground transition-all hover:bg-card hover:text-primary"
            >
              {link.label[locale]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
