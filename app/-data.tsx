import { ProjectDetailsProps } from "@/src/sections/project/v4";

export const workflowSteps = [
  {
    id: 1,
    title: 'Requirement Analysis',
    description:
      'We begin by understanding your business needs, target audience, and market goals. Our team gathers technical and functional requirements to define the app’s scope and features. This ensures a tailored solution that aligns with your business objectives.',
  },
  {
    id: 2,
    title: 'UI/UX Design & Prototyping',
    description:
      'Our designers create intuitive wireframes and prototypes for a seamless user experience. We focus on smooth navigation, appealing visuals, and easy ordering to enhance customer engagement. The design is optimized for both iOS and Android platforms.',
  },
  {
    id: 3,
    title: 'App Development',
    description:
      'Our developers build the frontend, backend, and integrate third-party APIs using the latest technologies. We follow an agile development approach, ensuring high performance, scalability, and security. The app is developed to support seamless ordering, tracking, and payments',
  },
  {
    id: 4,
    title: 'Testing & Quality Assurance',
    description:
      'We conduct rigorous testing to ensure the app is bug-free, secure, and responsive. Our QA team performs functional, performance, and security tests for a flawless user experience. The goal is to deliver a stable and reliable application.',
  },
  {
    id: 5,
    title: 'Deployment & Maintenance',
    description:
      'Once tested, we launch the app on Google Play Store and Apple App Store. Post-launch, we provide regular updates, bug fixes, and performance optimizations. Our team ensures continuous support to keep your app running smoothly.',
  },
];


export const whyChooseSectionData: ProjectDetailsProps = {
 sectionHeading: {
   subtitle: 'WHY US',
   highlighttitle: 'TechAres ',
   title: '– Your Trusted Partner for Digital Excellence',
   description:
     'At TechAres, we go beyond being just a digital agency—we are your innovation- driven IT consultancy committed to delivering exceptional, scalable, and cost- effective solutions across industries.By seamlessly blending creativity, technology, and strategy, we empower businesses to achieve digital transformation with confidence.With a team of highly skilled professionals, we ensure seamless project execution, helping you stay ahead in a rapidly evolving digital world.',
 },
 isCard: false,
 isButton: true,
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
   width: 1200,
   height: 1200,
 },
 description:
   'It is a long established fact that a reader will be distracted by the readablejk content of a page when looking at its layout.',
};
