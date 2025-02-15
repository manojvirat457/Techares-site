import { CustomLink } from '@/src/components/custom-link';
import Image from 'next/image';

import logoDark from 'public/assets/images/brand/logo-dark.png';

export function BrandLogo() {
 return (
  <CustomLink href="/">
   <Image
    className="logo-dark hidden dark:block"
    src={logoDark.src}
    width={logoDark.width}
    height={120}
    // placeholder="blur"
    // blurDataURL={logoDark.blurDataURL}
    alt={`${process.env.NEXT_PUBLIC_SITE_NAME} brand logo`}
    sizes="100vw"
    priority
   />
  </CustomLink>
 );
}
