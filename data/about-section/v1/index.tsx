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
  description: 'Techares is a leading software development company dedicated to building robust, scalable, and user-centric solutions. Our mission is to transform businesses through smart, customized technologies that drive growth, optimize processes, and deliver exceptional value. With a team of experienced professionals and a passion for innovation, Techares turns your digital vision into reality.'
 },
 isCard: true,
 keyPoints: [
  {
   icon: <Hourglass />,
   title: '12+ years',
  },
  {
   icon: <Trophy />,
   title: '8+ Awards',
  },
  {
   icon: <UserCheck />,
   title: '300+ Client',
  },
  {
   icon: <Star />,
   title: '4.8 Customer Rating',
  },
 ],
 description:
  'It is a long established fact that a reader will be distracted by the readablejk content of a page when looking at its layout.',
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
  description: 'Techares stands out as a leader in delivering exceptional software solutions designed to address real-world challenges. With a seasoned team of developers, designers, and strategists, we blend innovation with practicality to achieve measurable results. Our customer- first approach ensures every project aligns perfectly with your goals.We embrace cutting- edge technologies to provide tailored, scalable solutions that grow with your business.Beyond development, we focus on end - to - end support, from initial consultations to post - launch maintenance, ensuring your success every step of the way. Partner with Techares for a commitment to quality, reliable execution, and a shared passion for excellence.Together, let’s bring your ideas to life and drive your business forward.'
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
  label: 'Discover More',
  href: '/',
 },
};


export const whyChooseSectionDataTwo: ProjectDetailsProps = {
 sectionHeading: {
  subtitle: 'WHY US',
  highlighttitle: 'Why Choose',
  title: ' Techares?',
  description:
   "Techares stands out as a leader in delivering exceptional software solutions designed to address real-world challenges. With a seasoned team of developers, designers, and strategists, we blend innovation with practicality to achieve measurable results. Our customer- first approach ensures every project aligns perfectly with your goals.We embrace cutting- edge technologies to provide tailored, scalable solutions that grow with your business.Beyond development, we focus on end - to - end support, from initial consultations to post - launch maintenance, ensuring your success every step of the way. Partner with Techares for a commitment to quality, reliable execution, and a shared passion for excellence.Together, let’s bring your ideas to life and drive your business forward.",
 },
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
 image: {
  src: '/assets/images/about/whychoose.png',
  alt: 'about image five',
 },
 description:
  'It is a long established fact that a reader will be distracted by the readablejk content of a page when looking at its layout.',
};
