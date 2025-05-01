'use client';
import { CustomLink } from '@/src/components/custom-link';
import Head from 'next/head';
import Image from 'next/image';

import logoDark from 'public/assets/images/brand/logo-dark.webp';
import logoLight from 'public/assets/images/brand/logo-light.webp';
export function BrandLogo() {
  return (
    <>
      <Head>
        {/* Preload both logos if needed, or adjust based on initial theme */}
        <link rel="preload" href={logoDark.src} as="image" />
        <link rel="preload" href={logoLight.src} as="image" />
      </Head>
      <CustomLink href="/">
        {/* Dark Logo - Visible in light mode, hidden in dark mode */}
        <Image
          className="logo-dark hidden  dark:block"
          src={logoDark.src}
          width={180}
          height={45}
          priority
          loading="eager"
          placeholder="blur"
          blurDataURL={logoDark.blurDataURL}
          alt={`${process.env.NEXT_PUBLIC_SITE_NAME} brand logo`}
          sizes="(max-width: 768px) 150px, 180px"
        />
        {/* Light Logo - Hidden in light mode, visible in dark mode */}
        <Image
          className="logo-light block  dark:hidden"
          src={logoLight.src}
          width={180}
          height={45}
          priority
          loading="eager"
          placeholder="blur"
          // Use logoLight's blurDataURL if available, otherwise fallback or adjust
          blurDataURL={logoLight.blurDataURL || logoDark.blurDataURL}
          alt={`${process.env.NEXT_PUBLIC_SITE_NAME} brand logo`}
          sizes="(max-width: 768px) 150px, 180px"
        />
      </CustomLink>
    </>
  );
}
