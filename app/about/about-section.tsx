'use client';

import { useLanguage } from '@/components/language-provider';

export const AboutSection = () => {
  const { dictionary } = useLanguage();

  return (
    <article className="space-y-6">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-widest text-brand">Etymology</p>
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
    </article>
  );
};
