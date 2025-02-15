import { FooterSectionProps } from '@/src/layout/footer/v1';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
  about: {
    description:
      'Lorem Ipsum is simply is dumi omy is text Loremo Ipsum is simply is out no our o dummy text.',
    socialLinks: [
      {
        icon: <FaFacebookF />,
        href: 'https://www.facebook.com/',
      },
      {
        icon: <FaTwitter />,
        href: 'https://twitter.com/',
      },
      {
        icon: <FaInstagram />,
        href: 'https://www.instagram.com/',
      },
    ],
  },
  columnOne: {
    title: 'Our Services',
    links: [
      {
        label: 'BlockChain Development',
        href: '/services/blockchain',
        openNewTab: false,
      },
      {
        label: 'E-commerce Solutions',
        href: '/services/ecommerce',
        openNewTab: false,
      },
      {
        label: 'IOT Development',
        href: '/services/IOT-development',
        openNewTab: false,
      },
      {
        label: 'UI/UX Design',
        href: '/services/ui-ux',
        openNewTab: false,
      },
      {
        label: 'Web Development',
        href: '/services/web-dev',
        openNewTab: false,
      },
      {
        label: 'Others',
        href: '/services',
        openNewTab: false,
      },
    ],
  },
  columnTwo: {
    title: 'Get Instant Updates',
    location: '2972 Westheimer Rd. Santa Ana, Illinois 85486 ',
    mails: ['contact@techares.com'],
    phoneNumbers: ['+91 93635 37370'],
  },
  columnThree: {
    title: 'Recent Blog',
    blogs: [
      {
        image: {
          src: '/assets/images/blog/blog-sm-1.jpg',
          alt: 'We provide a range of IT solutions',
        },
        title: 'We provide a range of IT solutions',
        date: 'january 11, 2024',
        slug: './blog-details',
      },
      {
        image: {
          src: '/assets/images/blog/blog-sm-2.jpg',
          alt: 'IT solutions enhance efficiency',
        },
        title: 'IT solutions enhance efficiency',
        date: 'january 11, 2024',
        slug: './blog-details',
      },
    ],
  },
  footerBottom: {
    copyrightText: '© Yoursitename  2024 | All Rights Reserved',
    links: [
      {
        label: 'Trams & Condition',
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
