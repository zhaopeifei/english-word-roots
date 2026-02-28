import type { Metadata } from 'next';
import { Lora, Nunito } from 'next/font/google';
import { Providers } from '@/app/providers';
import '@/app/globals.css';
import { SITE_DESCRIPTION, SITE_NAME } from '@/content/site';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const lora = Lora({ subsets: ['latin'], display: 'swap', variable: '--font-lora' });
const nunito = Nunito({ subsets: ['latin'], display: 'swap', variable: '--font-nunito' });

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL('https://www.englishwordroots.com'),
  openGraph: {
    type: 'website',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lora.variable} ${nunito.variable} bg-background text-foreground font-body antialiased`}
      >
        <Providers>
          <div className="bg-dots pointer-events-none fixed inset-0 z-0 opacity-20" aria-hidden />
          <div className="relative z-10 flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
              <div className="mx-auto w-full max-w-5xl px-4 py-10">{children}</div>
            </main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
