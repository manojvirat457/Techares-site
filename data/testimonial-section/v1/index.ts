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
        'Techares truly understand the fast-paced media landscape. Their team delivered a high-performance streaming platform with seamless content management. What impressed me most was their ability to listen to our unique needs and provide a scalable, cost-effective solution. Their tech expertise and friendly business approach made the entire process smooth and efficient.',
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
        'Security, speed, and reliability are crucial in fintech, and Techares nailed it! They developed a robust trading analytics system that exceeded our expectations. Their team was highly responsive, understood our compliance requirements, and provided innovative solutions at an affordable cost. A true tech partner for scaling businesses!',
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
        'From UI/UX to backend performance, Techares optimized our e-commerce platform for maximum efficiency. Their experts took the time to understand our business needs, ensuring a seamless shopping experience for our customers. The affordability and technical excellence they bring to the table are unmatched. Highly recommended!',
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
        "We needed a scalable on-demand platform, and Techares delivered beyond expectations. Their ability to translate our vision into a user-friendly, high-performing application was remarkable. The team was approachable, proactive, and always open to feedback. If you're looking for a tech partner who listens and delivers, Techares is the answer!",
      rating: 5,
    },
  ],
};
