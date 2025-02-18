import { ProjectDetailsProps } from '@/data/project-section/taxi-booking';
import { AboutSectionProps } from '@/src/sections/about/v1';
import { Hourglass, Star, Trophy, UserCheck } from 'lucide-react';

export const aboutSectionData: AboutSectionProps = {
  images: {
    image1: {
      src: '/assets/images/about/about-1.png',
      alt: 'about one',
      width: 195,
      height: 132,
    },
    image2: {
      src: '/assets/images/about/about-2.png',
      alt: 'about two',
      width: 312,
      height: 304,
    },
    image3: {
      src: '/assets/images/about/about-3.png',
      alt: 'about three',
      width: 250,
      height: 265,
    },
    image4: {
      src: '/assets/images/about/about-4.png',
      alt: 'about four',
      width: 250,
      height: 265,
    },
  },
  sectionHeading: {
    subtitle: 'About us',
    highlighttitle: 'Top-Notch',
    title: ' Web Development Company',
    description:
      'Techares is at the forefront of modern technologies including blockchain, AI, IoT, DevOps, and more. As an innovative digital agency, we propel in offering cutting-edge IT solutions to businesses of all sizes. By leveraging innovative technologies, we empower businesses to achieve their goals through intelligent, efficient, and tailored applications.',
  },
  isCard: true,
  keyPoints: [
    {
      icon: <Hourglass />,
      title: '10+ Managers',
    },
    {
      icon: <Trophy />,
      title: '100+ Web Projects',
    },
    {
      icon: <UserCheck />,
      title: '40+ Tech Experts',
    },
    {
      icon: <Star />,
      title: '4.7 Client Ratings',
    },
  ],
  description:
    'From web development to digital marketing, our expertise and experience will lead your digital business to the global market. With experienced professionals and a customer-centric approach, Techares is your partner in turning ambitious ideas into tangible success.',
};

export const whyChooseSectionData: AboutSectionProps = {
  images: {
    image1: {
      src: '/assets/images/about/about-1.png',
      alt: 'about one',
      width: 195,
      height: 132,
    },
    image2: {
      src: '/assets/images/about/about-2.png',
      alt: 'about two',
      width: 312,
      height: 304,
    },
    image3: {
      src: '/assets/images/about/about-3.png',
      alt: 'about three',
      width: 250,
      height: 265,
    },
    image4: {
      src: '/assets/images/about/about-4.png',
      alt: 'about four',
      width: 250,
      height: 265,
    },
  },
  sectionHeading: {
    subtitle: 'WHY US',
    highlighttitle: 'Why Choose',
    title: ' Techares?',
    description:
      'Techares stands out as a leader in delivering exceptional software solutions designed to address real-world challenges. With a seasoned team of developers, designers, and strategists, we blend innovation with practicality to achieve measurable results. Our customer- first approach ensures every project aligns perfectly with your goals.We embrace cutting- edge technologies to provide tailored, scalable solutions that grow with your business.Beyond development, we focus on end - to - end support, from initial consultations to post - launch maintenance, ensuring your success every step of the way. Partner with Techares for a commitment to quality, reliable execution, and a shared passion for excellence.Together, let’s bring your ideas to life and drive your business forward.',
  },
  isCard: false,
  isButton: true,
  keyPoints: [
    {
      title: '12+ years',
    },
    {
      title: '8+ Awards',
    },
    {
      title: '300+ Client',
    },
    {
      title: '4.8 Customer Rating',
    },
  ],
  description:
    'It is a long established fact that a reader will be distracted by the readablejk content of a page when looking at its layout.',
  button: {
    label: 'Explore',
    href: '/',
  },
};

export const whyChooseSectionDataTwo: ProjectDetailsProps = {
  sectionHeading: {
    subtitle: 'WHY US',
    highlighttitle: 'TechAres ',
    title: '– Your Trusted Partner for Digital Excellence',
    description:
      'At TechAres, we go beyond being just a digital agency—we are your innovation- driven IT consultancy committed to delivering exceptional, scalable, and cost- effective solutions across industries.By seamlessly blending creativity, technology, and strategy, we empower businesses to achieve digital transformation with confidence.With a team of highly skilled professionals, we ensure seamless project execution, helping you stay ahead in a rapidly evolving digital world.',
  },
  keyPoints: [
    {
      title:
        'Unmatched Technical Expertise – Versatile solutions tailored to your unique needs',
    },
    {
      title:
        'Client-Centric Approach – We listen, adapt, and deliver with precision',
    },
    {
      title:
        'Optimized & Efficient Operations – Fast, cost-effective, and result-driven processes',
    },
    {
      title:
        'Complete Transparency & Traceability – Clear workflows and measurable outcomes',
    },
    {
      title:
        'Proven Reliability – Consistent excellence and unwavering support',
    },
  ],
  image: {
    src: '/assets/images/about/whychoose.png',
    alt: 'about image five',
  },
  description:
    'It is a long established fact that a reader will be distracted by the readablejk content of a page when looking at its layout.',
};
