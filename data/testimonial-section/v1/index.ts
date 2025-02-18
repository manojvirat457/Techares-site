import { TestimonialSectionProps } from '@/src/sections/testimonial/v1';

export const testimonialSectionData: TestimonialSectionProps = {
 sectionHeading: {
  subtitle: 'Hear what our clients say ',
  title: 'Hear It from the Best – Our Clients!',
 },
 cards: [
  {
   person: {
    image: {
     src: '/assets/images/testimonial/1.png',
     alt: 'Mr. Kailash',
    },
    name: 'Mr. Kailash',
    about: 'Media and Entertainment',
   },
   speech:
    'Techares built a high-performance streaming platform tailored to our needs. Their expertise, scalability, and seamless execution made the process smooth and efficient!',
   rating: 4,
  },
  {
   person: {
    image: {
     src: '/assets/images/testimonial/2.png',
     alt: 'Mr. Pardeep',
    },
    name: 'Mr. Pardeep',
    about: 'Fintech',
   },
   speech:
    "Techares delivered a secure, fast, and reliable trading analytics system. Their compliance knowledge and innovative approach make them a true fintech partner!",
   rating: 5,
  },
  {
   person: {
    image: {
     src: '/assets/images/testimonial/1.png',
     alt: 'Mr. Shenbagam',
    },
    name: 'Mr. Shenbagam',
    about: 'E-Commerce and Retail',
   },
   speech:
    'Techares optimized our e-commerce platform for a seamless shopping experience. Their technical excellence and affordability are unmatched!',
   rating: 4,
  },
  {
   person: {
    image: {
     src: '/assets/images/testimonial/2.png',
     alt: 'Mr. Kumaran',
    },
    name: 'Mr. Kumaran',
    about: 'On-Demand Solutions',
   },
   speech:
    "Techares transformed our vision into a user-friendly, high-performing app. A proactive team that truly listens and delivers!",
   rating: 5,
  },
 ],
};
