import { ProjectSectionProps } from '@/src/sections/project/v1';

export const projectSectionData: ProjectSectionProps = {
  sectionHeading: {
    subtitle: 'latest portfolio',
    title: 'Industries',
  },
  isWave: true,
  works: [
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/1.png',
        alt: 'portfolio-1',
      },
      title: 'Fintech',
      titleOne: 'Digital Banking Solutions',
      description: 'Enhancing banking operations with technology.',
      titleTwo: 'Blockchain in Fintech',
      descriptionTwo: 'Secure and transparent financial transactions.',
      titleThree: 'Fintech App Development',
      descriptionThree: 'Innovative financial applications.',
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/2.png',
        alt: 'portfolio-1',
      },
      title: 'Healthcare',
      titleOne: 'Telemedicine Solutions',
      description: ' Providing healthcare remotely.',
      titleTwo: 'EHR Systems',
      descriptionTwo: 'Efficiently managing patient records.',
      titleThree: 'Healthcare Analytics',
      descriptionThree: 'Turning healthcare data into actionable insights.',
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/3.png',
        alt: 'portfolio-1',
      },
      title: 'Education',
      titleOne: 'E-learning Platforms',
      description: 'Interactive and engaging learning solutions.',
      titleTwo: 'Learning Management Systems (LMS)',
      descriptionTwo: 'Efficiently managing educational content.',
      titleThree: 'Virtual Classrooms',
      descriptionThree: 'Enabling remote learning',
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/4.png',
        alt: 'portfolio-1',
      },
      title: 'Ecommerce',
      titleOne: 'Online Store Development',
      description: 'Building robust e-commerce platforms.',
      titleTwo: 'Ecommerce SEO',
      descriptionTwo: 'Enhancing visibility of online stores.',
      titleThree: 'Ecommerce Analytics',
      descriptionThree: 'Understanding customer behavior and trends.',
    },

  ],
};
