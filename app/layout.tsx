import { primary, secondary } from '@/fonts';
import { ScrollToTopButton } from '@/src/components/scroll-to-top';
import { ThemeProvider } from '@/src/components/theme-provider';
import { Footer } from '@/src/layout/footer/v1';
import { Navbar1 } from '@/src/layout/header/desktop/v3';
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
        'text-base  text-accent-800 [&.dark]:text-body'
      )}
    >
      <head />
      <AOSInit />
      <body>
        <GoogleAnalytics gaId="GTM-W9JNHJXF" />
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className={cn('text-accent-800 dark:text-body')}>
            {/* <MainHeader /> */}
            <Navbar1 />
            <main className={cn('px-5 md:px-0')}>{children}</main>
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
