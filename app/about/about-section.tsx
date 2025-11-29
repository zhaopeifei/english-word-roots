'use client';

import { useLanguage } from '@/components/language-provider';

export const AboutSection = () => {
  const { dictionary } = useLanguage();

  return (
    <article className="space-y-6">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-widest text-brand">SEO + Etymology</p>
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
          {dictionary.aboutTitle}
        </h1>
        <p className="text-lg text-muted-foreground">{dictionary.aboutMission}</p>
      </header>
      <section className="space-y-4 rounded-2xl border border-border bg-surface p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-foreground">What we deliver</h2>
        <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
          <li>Root-first navigation that surfaces linguistic relationships.</li>
          <li>Static rendered pages with JSON-LD and localized metadata.</li>
          <li>Tailwind-driven theming with dark mode built-in.</li>
          <li>Editorial guidelines for trustworthy etymological data.</li>
        </ul>
      </section>
      <section className="space-y-4 rounded-2xl border border-border bg-surface p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-foreground">Stack</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          <li className="rounded-lg border border-border bg-background p-4">
            <h3 className="text-lg font-semibold text-foreground">Next.js Static Export</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Pure static routes without API dependencies, built for resilient SEO deployments.
            </p>
          </li>
          <li className="rounded-lg border border-border bg-background p-4">
            <h3 className="text-lg font-semibold text-foreground">Tailwind CSS 4.0</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Utility-first styling with design tokens and adaptive themes.
            </p>
          </li>
          <li className="rounded-lg border border-border bg-background p-4">
            <h3 className="text-lg font-semibold text-foreground">TypeScript + ESLint</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Strict typing, accessible defaults, and automated linting guardrails.
            </p>
          </li>
          <li className="rounded-lg border border-border bg-background p-4">
            <h3 className="text-lg font-semibold text-foreground">Prettier Formatting</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Consistent code style with Tailwind-aware sorting for maintainable diffs.
            </p>
          </li>
        </ul>
      </section>
    </article>
  );
};
