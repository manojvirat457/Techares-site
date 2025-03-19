import { primary, secondary } from '@/fonts';
import { ScrollToTopButton } from '@/src/components/scroll-to-top';
import { ThemeProvider } from '@/src/components/theme-provider';
import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { AOSInit } from '@/src/utils/aos';
import { basicMetadata } from '@/src/utils/metadata';
import { cn } from '@/src/utils/shadcn';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Toaster } from 'sonner';
import './globals.css';

interface Props {
  children: React.ReactNode;
}

export const metadata = basicMetadata({
  title: 'Techares',
  description: 'Techares - IT Solutions and Services',
});

export default async function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        'dark',
        primary.variable,
        secondary.variable,
        'text-base leading-[1.875]  text-accent-800 [&.dark]:text-body'
      )}
    >
      <head></head>
      <AOSInit />
      <body>
        <GoogleAnalytics gaId="GTM-W9JNHJXF" />
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div
            className={cn(
              'bg-white text-accent-800 dark:bg-accent-900 dark:text-body'
            )}
          >
            <MainHeader />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Toaster
          richColors
          position="top-right"
          closeButton
          visibleToasts={9}
        />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
