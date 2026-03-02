'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Search, X } from 'lucide-react';
import { NAV_LINKS, SITE_NAME } from '@/content/site';
import { LanguageSwitcher } from '@/components/language-switcher';
import { ThemeToggle } from '@/components/theme-toggle';
import { useLanguage } from '@/components/language-provider';
import { CommandSearch } from '@/components/command-search';

export const SiteHeader = () => {
  const { locale } = useLanguage();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Close mobile menu on pathname change (link navigation)
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile panel is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [mobileOpen]);

  // Cmd/Ctrl+K to toggle search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      <header className="border-border bg-background/90 sticky top-0 z-50 border-b-[1.5px] backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link
            href="/home"
            className="font-heading text-primary flex items-center gap-2 text-xl font-bold"
            aria-label={SITE_NAME}
          >
            <span className="text-xl">🌿</span>
            WordRoots
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:bg-card hover:text-primary rounded-full px-4 py-2 text-sm font-bold transition-all"
              >
                {link.label[locale]}
              </Link>
            ))}
          </nav>

          {/* Desktop controls (hidden on mobile) */}
          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="border-border bg-background text-muted-foreground hover:border-primary hover:text-primary flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-[1.5px] transition-colors"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile hamburger button (visible on mobile only) */}
          <button
            type="button"
            className="border-border bg-background text-muted-foreground hover:border-primary hover:text-primary flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border-[1.5px] transition-colors md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile slide-out panel */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-out panel */}
          <nav className="border-border bg-background absolute bottom-0 right-0 top-0 flex w-72 flex-col border-l-[1.5px]">
            {/* Panel header: logo + close button */}
            <div className="border-border flex items-center justify-between border-b-[1.5px] px-4 py-3">
              <Link
                href="/home"
                className="font-heading text-primary flex items-center gap-2 text-xl font-bold"
                onClick={() => setMobileOpen(false)}
              >
                <span className="text-xl">🌿</span>
                WordRoots
              </Link>
              <button
                type="button"
                className="text-muted-foreground hover:text-foreground flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl transition-colors"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-1 overflow-y-auto px-4 py-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary hover:bg-card block rounded-xl py-3 px-3 text-base font-bold transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label[locale]}
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="border-border mx-4 border-t-[1.5px]" />

            {/* Controls: search + language switcher + theme toggle */}
            <div className="flex items-center gap-3 px-4 py-4">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setSearchOpen(true);
                }}
                className="border-border bg-background text-muted-foreground hover:border-primary hover:text-primary flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-[1.5px] transition-colors"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}

      <CommandSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
