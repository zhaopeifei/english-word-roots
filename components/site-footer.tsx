'use client';

import Link from 'next/link';
import { NAV_LINKS, SITE_NAME } from '@/content/site';
import { useLanguage } from '@/components/language-provider';

export const SiteFooter = () => {
  const { locale, dictionary } = useLanguage();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {SITE_NAME}. {dictionary.translatedBy}
        </p>
        <nav className="flex flex-wrap items-center gap-3">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.label[locale]}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};
