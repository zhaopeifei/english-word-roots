'use client';

import Link from 'next/link';
import { NAV_LINKS, SITE_NAME } from '@/content/site';
import { useLanguage } from '@/components/language-provider';

export const SiteFooter = () => {
  const { locale, dictionary } = useLanguage();

  return (
    <footer className="border-t-[1.5px] border-border bg-background">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-xl tracking-widest">🌱🌿🌳🍀</span>
          <p className="font-bold">
            © {new Date().getFullYear()} {SITE_NAME}. {dictionary.translatedBy}
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1 font-bold transition-colors hover:bg-card hover:text-foreground"
            >
              {link.label[locale]}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};
