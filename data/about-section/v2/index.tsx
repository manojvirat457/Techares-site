import { AboutSectionProps } from '@/src/sections/about/v2';

export const aboutSectionData: AboutSectionProps = {
  sectionHeading: {
    subtitle: 'About Us',
    title: 'Who We Are',
    description:
      'Techares is a premier IT solutions provider committed to transforming businesses through cutting-edge technology. With over a decade of experience, we specialize in delivering bespoke software solutions, IT consulting, and comprehensive IT outsourcing services to clients worldwide. Our team of 250+ skilled professionals is dedicated to driving business success through innovation and excellence.',
  },
  sectionHeading2: {
    title: (
      <>
        <span>Our </span>
        <span className='dark:text-primary'>Expertise</span>
      </>
    ),
    description:
      'At Techares, we leverage our extensive industry experience and technical expertise to deliver a wide range of IT solutions, including',
  },
  aboutUsPoints: [
    'Mistakes To Avoid',
    'Your Startup business',
    'Knew About Fonts',
    'Mistakes To Avoid',
    'Your Startup business',
    'Knew About Fonts',
  ],
  image: {
    src: '/assets/images/about/about-4.png',
    alt: 'about image five',
  },
  videoUrl: 'https://www.youtube.com/embed/SxVmSQaPc4E',
};
