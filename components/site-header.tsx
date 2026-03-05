'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight, Menu, Search, X } from 'lucide-react';
import { NAV_LINKS, SITE_NAME } from '@/content/site';
import type { NavLink } from '@/content/site';
import type { Locale } from '@/content/site';
import { COLLECTION_CATEGORIES, getCollectionsByCategory } from '@/content/collections';
import { LanguageSwitcher } from '@/components/language-switcher';
import { ThemeToggle } from '@/components/theme-toggle';
import { useLanguage } from '@/components/language-provider';
import { CommandSearch } from '@/components/command-search';

// ---------------------------------------------------------------------------
// Explore dropdown menu items — only the most popular collections
// ---------------------------------------------------------------------------

const DROPDOWN_SLUGS = ['ielts', 'toefl', 'gre', 'ngsl-1000', 'ngsl-2000', 'ngsl-3000'];

interface DropdownSection {
  label: Record<Locale, string>;
  items: { href: string; icon: string; label: Record<Locale, string> }[];
}

const EXPLORE_SECTIONS: DropdownSection[] = COLLECTION_CATEGORIES
  .map((cat) => ({
    label: cat.label,
    items: getCollectionsByCategory(cat.key)
      .filter((c) => DROPDOWN_SLUGS.includes(c.slug))
      .map((c) => ({
        href: `/explore/${c.slug}`,
        icon: c.icon,
        label: c.name,
      })),
  }))
  .filter((s) => s.items.length > 0);

// ---------------------------------------------------------------------------
// Desktop dropdown component
// ---------------------------------------------------------------------------

const DesktopDropdown = ({
  link,
  locale,
}: {
  link: NavLink;
  locale: Locale;
}) => {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const handleEnter = useCallback(() => {
    cancelClose();
    setOpen(true);
  }, [cancelClose]);

  const handleLeave = useCallback(() => {
    scheduleClose();
  }, [scheduleClose]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Link
        href={link.href}
        className="text-muted-foreground hover:bg-card hover:text-primary flex items-center gap-1 rounded-full px-4 py-2 text-sm font-bold transition-all"
      >
        {link.label[locale]}
        <ChevronDown
          className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </Link>

      {open && (
        <div className="border-border bg-card absolute left-1/2 top-full z-50 mt-1 w-64 -translate-x-1/2 overflow-hidden rounded-xl border-[1.5px] shadow-lg">
          {EXPLORE_SECTIONS.map((section, si) => (
            <div key={section.label.en}>
              {si > 0 && <div className="border-border mx-3 border-t" />}
              <div className="px-3 pt-2.5 pb-1">
                <span className="text-muted-foreground text-[11px] font-semibold uppercase tracking-wider">
                  {section.label[locale]}
                </span>
              </div>
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:bg-muted hover:text-primary flex items-center gap-2.5 px-3 py-2 text-sm transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <span className="w-5 text-center text-base">{item.icon}</span>
                  {item.label[locale]}
                </Link>
              ))}
            </div>
          ))}
          {/* Footer: All Collections */}
          <div className="border-border border-t">
            <Link
              href="/explore"
              className="text-primary hover:bg-primary/5 flex items-center justify-between px-3 py-2.5 text-sm font-semibold transition-colors"
              onClick={() => setOpen(false)}
            >
              {locale === 'zh' ? '全部集合' : 'All Collections'}
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

// ---------------------------------------------------------------------------
// Mobile submenu for Explore
// ---------------------------------------------------------------------------

const MobileExploreSubmenu = ({
  link,
  locale,
  onNavigate,
}: {
  link: NavLink;
  locale: Locale;
  onNavigate: () => void;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div className="flex items-center">
        <Link
          href={link.href}
          className="text-foreground hover:text-primary hover:bg-card flex-1 rounded-xl py-3 px-3 text-base font-bold transition-colors"
          onClick={onNavigate}
        >
          {link.label[locale]}
        </Link>
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="text-muted-foreground hover:text-primary flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl transition-colors"
          aria-label={expanded ? 'Collapse' : 'Expand'}
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {expanded && (
        <div className="pb-2 pl-3">
          {EXPLORE_SECTIONS.map((section) => (
            <div key={section.label.en}>
              <span className="text-muted-foreground block px-3 pt-2 pb-1 text-[11px] font-semibold uppercase tracking-wider">
                {section.label[locale]}
              </span>
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary hover:bg-card flex items-center gap-2 rounded-lg py-2 px-3 text-sm transition-colors"
                  onClick={onNavigate}
                >
                  <span className="w-5 text-center">{item.icon}</span>
                  {item.label[locale]}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ---------------------------------------------------------------------------
// SiteHeader
// ---------------------------------------------------------------------------

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

  const closeMobile = useCallback(() => setMobileOpen(false), []);

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
            {NAV_LINKS.map((link) =>
              link.hasDropdown ? (
                <DesktopDropdown key={link.href} link={link} locale={locale} />
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:bg-card hover:text-primary rounded-full px-4 py-2 text-sm font-bold transition-all"
                >
                  {link.label[locale]}
                </Link>
              ),
            )}
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
            onClick={closeMobile}
            aria-hidden="true"
          />

          {/* Slide-out panel */}
          <nav className="border-border bg-background absolute bottom-0 right-0 top-0 flex w-72 flex-col border-l-[1.5px]">
            {/* Panel header: logo + close button */}
            <div className="border-border flex items-center justify-between border-b-[1.5px] px-4 py-3">
              <Link
                href="/home"
                className="font-heading text-primary flex items-center gap-2 text-xl font-bold"
                onClick={closeMobile}
              >
                <span className="text-xl">🌿</span>
                WordRoots
              </Link>
              <button
                type="button"
                className="text-muted-foreground hover:text-foreground flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl transition-colors"
                onClick={closeMobile}
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-1 overflow-y-auto px-4 py-2">
              {NAV_LINKS.map((link) =>
                link.hasDropdown ? (
                  <MobileExploreSubmenu
                    key={link.href}
                    link={link}
                    locale={locale}
                    onNavigate={closeMobile}
                  />
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-foreground hover:text-primary hover:bg-card block rounded-xl py-3 px-3 text-base font-bold transition-colors"
                    onClick={closeMobile}
                  >
                    {link.label[locale]}
                  </Link>
                ),
              )}
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
