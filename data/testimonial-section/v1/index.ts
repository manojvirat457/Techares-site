import { TestimonialSectionProps } from '@/src/sections/testimonial/v1';

export const testimonialSectionData: TestimonialSectionProps = {
  sectionHeading: {
    subtitle: 'Clients testimonial',
    title: 'Your IT Partner for a Dynamic Future',
  },
  cards: [
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-1.jpg',
          alt: '[Client Name]',
        },
        name: '[Client Name]',
        about: '[Client Title]',
      },
      speech:
        'Techares has been an invaluable partner in our digital transformation journey. Their expertise and commitment to excellence have helped us achieve remarkable results.',
      rating: 4,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-2.jpg',
          alt: 'Robert Fox',
        },
        name: '[Client Name]',
        about: '[Client Title]',
      },
      speech:
        'We are impressed with Techares\' ability to deliver innovative solutions that meet our unique business needs.Their team is highly skilled and dedicated to our success.',
      rating: 5,
    },
    // {
    //   person: {
    //     image: {
    //       src: '/assets/images/testimonial/person-11.jpeg',
    //       alt: 'April Cabrera',
    //     },
    //     name: 'April Cabrera',
    //     about: 'Team Leader',
    //   },
    //   speech:
    //     'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    //   rating: 4,
    // },
    // {
    //   person: {
    //     image: {
    //       src: '/assets/images/testimonial/person-12.jpeg',
    //       alt: 'Kevin Martin',
    //     },
    //     name: 'Kevin Martin',
    //     about: 'Software Development Manager',
    //   },
    //   speech:
    //     'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    //   rating: 5,
    // },
    // {
    //   person: {
    //     image: {
    //       src: '/assets/images/testimonial/person-13.jpeg',
    //       alt: 'Jada Christian',
    //     },
    //     name: 'Jada Christian',
    //     about: 'Team Leader',
    //   },
    //   speech:
    //     'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    //   rating: 4,
    // },
    // {
    //   person: {
    //     image: {
    //       src: '/assets/images/testimonial/person-14.jpeg',
    //       alt: 'Kevin Deen',
    //     },
    //     name: 'Kevin Deen',
    //     about: 'Software Development Manager',
    //   },
    //   speech:
    //     'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    //   rating: 5,
    // },
  ],
};
