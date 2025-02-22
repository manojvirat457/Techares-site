import { HeroSectionProps } from '@/src/sections/hero/v2';

export const heroSectionData: HeroSectionProps = {
  title: 'Navigating Tech Horizons Together',
  customers: [
    {
      src: '/assets/images/hero/avatar-1.webp',
      alt: 'user 1',
    },
    {
      src: '/assets/images/hero/avatar-2.webp',
      alt: 'user 2',
    },
    {
      src: '/assets/images/hero/avatar-3.webp',
      alt: 'user 3',
    },
  ],
  customerCounterInfo: {
    count: 3000,
    about: 'Satisfied Customer',
    suffix: '+',
  },
  ctaButton: {
    href: '',
    label: 'Explore',
  },
  imageLarge: {
    src: '/assets/images/hero/hero-5.webp',
    alt: 'image 5',
  },
  description:
    'It is a long established fact that a reader will be distracted by the readablejk content of a page when looking at its layout. Lorem Ipsum is simply dum text of the printing and typeset',
  imageSmall: {
    src: '/assets/images/hero/hero-6.webp',
    alt: 'image 6',
  },
  statisticsCounterInfo: {
    count: 4,
    about: 'Daily Activate Customer ',
    suffix: 'K+',
  },
};
