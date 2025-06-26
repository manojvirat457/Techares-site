import { FooterSectionProps } from '@/src/layout/footer/v1';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
  about: {
    description: 'Transforming Ideas into Reality.',
    socialLinks: [
      {
        icon: <FaFacebookF />,
        href: 'https://www.facebook.com/share/12KbCRp258S/',
      },
      {
        icon: <FaInstagram />,
        href: 'https://www.instagram.com/techares_',
      },
      {
        icon: <FaLinkedin />,
        href: 'https://in.linkedin.com/company/techares',
      },
    ],
  },
  columnOne: {
    title: 'Explore Our Services ',
    links: [
      {
        label: 'Ecommerce',
        href: '/services/ecommerce',
        openNewTab: false,
      },
      {
        label: 'Food Delivery App',
        href: '/services/food-delivery',
        openNewTab: false,
      },
      {
        label: 'Taxi Booking App',
        href: '/services/taxi-booking',
        openNewTab: false,
      },
      {
        label: 'Fantasy Sports App',
        href: '/services/fantasy-sports',
        openNewTab: false,
      },
      {
        label: 'Transport and Logistics App',
        href: '/services/transport-and-logistic',
        openNewTab: false,
      },
    ],
  },
  columnTwo: {
    title: 'Address',
    location: '2972 Westheimer Rd. Santa Ana, Illinois 85486 ',
    mails: ['debbie.baker@example.com', 'nevaeh.simm@example.com'],
    phoneNumbers: ['(405) 555-0128', '(629) 555-0129'],
  },
  columnThree: {
    title: 'Recent Blog',
    blogs: [
      {
        image: {
          src: '/assets/images/blog/blog-sm-1.png',
          alt: 'We provide a range of IT solutions',
        },
        title: 'We provide a range of IT solutions',
        date: 'january 11, 2024',
        slug: './blog-details',
      },
      {
        image: {
          src: '/assets/images/blog/blog-sm-2.png',
          alt: 'IT solutions enhance efficiency',
        },
        title: 'IT solutions enhance efficiency',
        date: 'january 11, 2024',
        slug: './blog-details',
      },
    ],
  },
  footerBottom: {
    copyrightTextPartOne: 'Copyrights © Techares  ',
    copyrightTextPartTwo: '| All Rights Reserved',
    links: [
      {
        label: 'Terms & Condition',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Privacy Policy',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Contact Us',
        href: '/',
        openNewTab: false,
      },
    ],
  },
};
