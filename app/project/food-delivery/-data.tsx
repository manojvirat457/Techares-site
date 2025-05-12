import type { FAQSectionProps } from '@/src/sections/faq';
import type { ProjectDetailsProps } from '@/src/sections/project/v4';
import type { TeamSectionProps } from '@/src/sections/team/v2';

import Image from 'next/image';


export const projectDetails: ProjectDetailsProps = {
 sectionHeading: {
  title: 'Food Delivery App Development Company',
  description:
   'TechAres offers an on-demand food delivery app development that is aimed at making the process of ordering, delivery, and communication hassle-free. With a solid track record, we create apps that perfectly cater to your specific business requirements. We provide seamless solutions that feature live order tracking and secure payment options to help businesses flourish with innovation. These features strive to keep your customers engaged with customized services.',
  size: 'md',
 },
 isCard: false,
 isButton: true,
 button: {
  href: '/contact',
  label: 'Get in Touch',
 },
 keyPoints: [],
 image: {
  src: '/assets/images/food-delivery/hero-2.png',
  alt: 'about image five',
  width: 540,
  height: 578,
 },
};

export const uniqueFeatures: ProjectDetailsProps = {
 sectionHeading: {
  title: 'Unique Features',
 },
 isButton: false,
 isCard: false,
 keyPoints: [
  {
   title: 'AI-based order recommendations',
   icon: (
    <Image
     src="/assets/images/food-delivery/hot-pot.png"
     alt="Feature 1"
     width={50}
     height={50}
    />
   ),
   description:
    'Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.',
  },
  {
   title: 'Multi-language support',
   icon: (
    <Image
     src="/assets/images/food-delivery/lang.png"
     alt="Feature 1"
     width={50}
     height={50}
    />
   ),
   description:
    'Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.',
  },
  {
   title: 'Geo-fencing for better delivery zones ',
   icon: (
    <Image
     src="/assets/images/food-delivery/thumbs.png"
     alt="Feature 1"
     width={50}
     height={50}
    />
   ),
   description:
    'Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.',
  },
  {
   title: 'Loyalty programs and referral rewards',
   icon: (
    <Image
     src="/assets/images/food-delivery/cup.png"
     alt="Feature 1"
     width={50}
     height={50}
    />
   ),
   description:
    'Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.',
  },
 ],
 image: {
  src: '/assets/images/food-delivery/hero-4.png',
  alt: 'about image five',
  width: 300,
  height: 328,
 },
};

export const workflowSteps = [
 {
  id: 1,
  title: 'Requirement Analysis',
  description:
   'We begin by understanding your business needs, target audience, and market goals. Our team gathers technical and functional requirements',
 },
 {
  id: 2,
  title: 'UI/UX Design & Prototyping',
  description:
   'We begin by understanding your business needs, target audience, and market goals. Our team gathers technical and functional requirements',
 },
 {
  id: 3,
  title: 'App Development',
  description:
   'We begin by understanding your business needs, target audience, and market goals. Our team gathers technical and functional requirements',
 },
 {
  id: 4,
  title: 'Testing & Quality Assurance',
  description:
   'We begin by understanding your business needs, target audience, and market goals. Our team gathers technical and functional requirements',
 },
 {
  id: 5,
  title: 'Requirement Analysis',
  description:
   'We begin by understanding your business needs, target audience, and market goals. Our team gathers technical and functional requirements',
 },
 {
  id: 6,
  title: 'Delivery',
  description:
   'We begin by understanding your business needs, target audience, and market goals. Our team gathers technical and functional requirements',
 },
];

export const whyChooseUs: ProjectDetailsProps = {
 sectionHeading: {
  title: 'Why Choose TechAres ?',
  description:
   "At TechAres, we specialize in developing custom food delivery apps tailored to your business needs. With years of expertise, we craft feature-rich, scalable, and secure solutions using the latest technologies. Our end-to-end services cover everything from app design to deployment and ongoing support. We focus on delivering high-quality user experiences and business efficiency, ensuring long-term value and growth for your food delivery platform. Whether you're a startup or an established brand, we collaborate closely with you to create solutions that drive success and exceed expectations.",
 },
 isButton: false,
 isCard: false,
 keyPoints: [
  {
   title: 'Experienced Developers',
   icon: (
    <Image
     src="/assets/images/food-delivery/fock-outline.png"
     alt="Feature 1"
     width={20}
     height={20}
    />
   ),
   description:
    'Our team has expertise in developing high-performing food delivery apps.',
  },
  {
   title: 'End-to-End Solutions',
   icon: (
    <Image
     src="/assets/images/food-delivery/fock-outline.png"
     alt="Feature 1"
     width={20}
     height={20}
    />
   ),
   description: 'From design to launch, we handle everything',
  },
  {
   title: 'Scalable Architecture',
   icon: (
    <Image
     src="/assets/images/food-delivery/fock-outline.png"
     alt="Feature 1"
     width={20}
     height={20}
    />
   ),
   description:
    'Grow your business without worrying about technology limitations.',
  },
  {
   title: 'Cost-Effective Development',
   icon: (
    <Image
     src="/assets/images/food-delivery/fock-outline.png"
     alt="Feature 1"
     width={20}
     height={20}
    />
   ),
   description: 'Affordable plans with high ROI',
  },
 ],
 image: {
  src: '/assets/images/food-delivery/hero-3.png',
  alt: 'about image five',
  width: 540,
  height: 578,
 },
};
export const faqSectionData: FAQSectionProps = {
 sectionHeading: {
  subtitle: 'Our faq',
  title: 'Frequently Asked Questions',
 },
 faqItems: [
  {
   question: 'How long does it take to develop a food delivery app?',
   answer:
    'The development timeline depends on features, customization, and integrations. On average, it takes 3-6 months.',
  },
  {
   question: 'Can I integrate third-party payment gateways?',
   answer:
    'Yes, we integrate secure payment gateways like PayPal, Stripe, and Razorpay.',
  },
  {
   question: 'What payment options can be integrated?',
   answer: 'Credit/debit cards, wallets, UPI, and more.',
  },
 ],
};

export const uniqueFeature: TeamSectionProps = {
 sectionHeading: {
  subtitle: 'Unique Features',
  title: 'Enhancing the Ride-Hailing Experience',
 },
 description:
  'At TechAres, we integrate cutting-edge technology to provide a superior taxi app experience with unique features that set us apart. Our AI-based route optimization ensures drivers take the most efficient routes, reducing travel time and fuel costs. We support multi-payment options, including credit/debit cards, wallets, and digital payments, offering users a seamless and flexible checkout process. To enhance safety, our app includes SOS & emergency features, allowing passengers to send instant alerts to emergency contacts and authorities in case of distress. Additionally, our dynamic surge pricing system adjusts fares based on real-time demand, ensuring fair pricing for drivers while optimizing earnings during peak hours.',
};

// Tab data
export const tabs = [
 { id: 'admin', label: 'Admin Panel' },
 { id: 'customer', label: 'Customer App' },
 { id: 'driver', label: 'Driver App' },
 { id: 'restaurant', label: 'Restaurant App' },
];

// Content for each tab
export const tabContent = {
 admin: {
  title: 'Admin Panel',
  features: [
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="White Label Solution"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'User management dashboard',
    description:
     'Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.',
   },
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="White Label Solution"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'Real-time analytics',
    description:
     'Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.',
   },
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="White Label Solution"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'Revenue tracking',
    description:
     'Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.',
   },
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="White Label Solution"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'System configuration',
    description:
     'Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.',
   },
  ],
  image: '/assets/images/food-delivery/m1.png',
 },
 customer: {
  title: 'Customer App',
  features: [
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="White Label Solution"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'User-friendly interface for quick ordering',
    description:
     'Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.',
   },
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="White Label Solution"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'Real-time order tracking',
    description:
     'Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.',
   },
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="White Label Solution"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'Secure multiple payment options',
    description:
     'Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.',
   },
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="White Label Solution"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'Personalized recommendations',
    description:
     'Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.',
   },
  ],
  image: '/assets/images/food-delivery/m2.png',
 },
 driver: {
  title: 'Driver App',
  features: [
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="White Label Solution"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'Efficient route optimization',
    description:
     'Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.',
   },
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="White Label Solution"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'Delivery status updates',
    description:
     'Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.',
   },
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="White Label Solution"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'Earnings tracking',
    description:
     'Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.',
   },
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="White Label Solution"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'Customer communication',
    description:
     'Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.',
   },
  ],
  image: '/assets/images/food-delivery/m3.png',
 },
 restaurant: {
  title: 'Restaurant App',
  features: [
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="White Label Solution"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'Order management system',
    description:
     'Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.',
   },
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="White Label Solution"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'Menu customization',
    description:
     'Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.',
   },
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="White Label Solution"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'Sales reporting',
    description:
     'Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.',
   },
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="White Label Solution"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'Inventory management',
    description:
     'Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.',
   },
  ],
  image: '/assets/images/food-delivery/m4.png',
 },
};
