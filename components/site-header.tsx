'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS, SITE_NAME } from '@/content/site';
import { LanguageSwitcher } from '@/components/language-switcher';
import { ThemeToggle } from '@/components/theme-toggle';
import { useLanguage } from '@/components/language-provider';
import logo128 from '@/app/assets/logo_128.png';

export const SiteHeader = () => {
  const { locale } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/home" className="flex items-center" aria-label={SITE_NAME}>
          <Image src={logo128} alt={SITE_NAME} width={40} height={40} priority />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label[locale]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
