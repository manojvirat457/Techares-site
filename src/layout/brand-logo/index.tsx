import { CustomLink } from '@/src/components/custom-link';
import Image from 'next/image';
import Head from 'next/head';

import logoDark from 'public/assets/images/brand/logo-dark.webp';

export function BrandLogo() {

  return (
    <>
      <Head>
        <link
          rel="preload"
          href={logoDark.src}
          as="image"
        />
      </Head>
      <CustomLink href="/">
        <Image
          className="logo-dark"
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
      </CustomLink>
    </>
  );
}
