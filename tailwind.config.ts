import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './content/**/*.{md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        brand: {
          DEFAULT: 'var(--color-brand)',
          light: 'var(--color-brand-light)',
          dark: 'var(--color-brand-dark)'
        },
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        foreground: 'var(--color-foreground)',
        border: 'var(--color-border)',
        muted: 'var(--color-muted)',
        'muted-foreground': 'var(--color-muted-foreground)'
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(15 23 42 / 0.08)',
        md: '0 10px 30px -12px rgb(15 23 42 / 0.18)'
      }
    }
  },
  plugins: []
};

export default config;
