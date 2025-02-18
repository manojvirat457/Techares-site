import { Industry } from "@/data/industries/v1";
import { AboutSectionProps } from "@/src/sections/about/v1";
import { ServiceSectionProps } from "@/src/sections/service/v1";
import { FAQSectionProps } from '@/src/sections/faq';
import { TeamSectionProps } from "@/src/sections/team/v2";
import { SectionHeadingWithoutStylingProps } from "@/src/components/section-heading/interface";
import { ImageProps } from "next/image";
import { ServiceData } from "@/data/service-section/v3";


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
  title: ' Why Choose TechAres',
  description: "At TechAres, we specialize in developing custom food delivery apps tailored to your business needs. With years of expertise, we craft feature-rich, scalable, and secure solutions using the latest technologies. Our end-to-end services cover everything from app design to deployment and ongoing support. We focus on delivering high-quality user experiences and business efficiency, ensuring long-term value and growth for your food delivery platform. Whether you're a startup or an established brand, we collaborate closely with you to create solutions that drive success and exceed expectations."
 },
 isCard: false,
 keyPoints: [
  {
   title: 'Experienced Developers',
   description: 'Our team has expertise in developing high-performing food delivery apps.'
  },
  {
   title: 'End-to-End Solutions',
   description: 'From design to launch, we handle everything.'
  },
  {
   title: 'Scalable Architecture',
   description: 'Grow your business without worrying about technology limitations.'
  },
  {
   title: 'Cost-Effective Development',
   description: 'Affordable plans with high ROI.'
  },
 ]
};



export const ourWorkFlow: Industry[] = [
 {
  title: "Requirement Analysis",
  icon: "https://placehold.co/64x64",
  description: 'We begin by understanding your business needs, target audience, and market goals. Our team gathers technical and functional requirements to define the app’s scope and features. This ensures a tailored solution that aligns with your business objectives.'
 },
 {
  title: "UI/UX Design & Prototyping",
  icon: "https://placehold.co/64x64",
  description: 'Our designers create intuitive wireframes and prototypes for a seamless user experience. We focus on smooth navigation, appealing visuals, and easy ordering to enhance customer engagement. The design is optimized for both iOS and Android platforms.'
 },
 {
  title: "App Development",
  icon: "https://placehold.co/64x64",
  description: 'Our developers build the frontend, backend, and integrate third-party APIs using the latest technologies. We follow an agile development approach, ensuring high performance, scalability, and security. The app is developed to support seamless ordering, tracking, and payments.'
 },
 {
  title: "Testing & Quality Assurance",
  icon: "https://placehold.co/64x64",
  description: 'We conduct rigorous testing to ensure the app is bug-free, secure, and responsive. Our QA team performs functional, performance, and security tests for a flawless user experience. The goal is to deliver a stable and reliable application.'
 },
 {
  title: "Deployment & Maintenance",
  icon: "https://placehold.co/64x64",
  description: 'Once tested, we launch the app on Google Play Store and Apple App Store. Post-launch, we provide regular updates, bug fixes, and performance optimizations. Our team ensures continuous support to keep your app running smoothly. 🚀'
 },
];

export const ourWorkFlowData = {
 highlightTitle: "Our ",
 title: "Workflow",
 description: "How We Develop Your Food Delivery App",
 data: ourWorkFlow,
};



function Icon1() {
 return (
  <svg
   width="1em"
   height="1em"
   viewBox="0 0 65 65"
   fill="currentColor"
   xmlns="http://www.w3.org/2000/svg"
  >
   <path d="M8.12799 55.3735C4.85988 51.6963 3.05469 46.9477 3.05469 42.0281C3.05469 37.1086 4.85988 32.36 8.12799 28.6828L30.1671 4.81564C30.3453 4.62883 30.5597 4.48012 30.7971 4.37852C31.0345 4.27693 31.2901 4.22454 31.5483 4.22454C31.8065 4.22454 32.0621 4.27693 32.2995 4.37852C32.5369 4.48012 32.7513 4.62883 32.9296 4.81564C33.3079 5.19622 33.5202 5.71104 33.5202 6.24767C33.5202 6.7843 33.3079 7.29912 32.9296 7.6797L10.9717 31.5063C8.39045 34.4072 6.9644 38.1552 6.9644 42.0383C6.9644 45.9214 8.39045 49.6693 10.9717 52.5703C12.1762 53.9262 13.6542 55.0115 15.3085 55.7547C16.9628 56.4979 18.7558 56.8822 20.5694 56.8822C22.383 56.8822 24.176 56.4979 25.8303 55.7547C27.4846 55.0115 28.9626 53.9262 30.1671 52.5703L55.3342 25.2906C57.0706 23.3294 58.0291 20.8006 58.0291 18.1813C58.0291 15.5619 57.0706 13.0331 55.3342 11.0719C54.5243 10.1617 53.531 9.43329 52.4194 8.93449C51.3079 8.43568 50.1034 8.17781 48.885 8.17781C47.6667 8.17781 46.4622 8.43568 45.3506 8.93449C44.2391 9.43329 43.2457 10.1617 42.4358 11.0719L17.2686 38.311C16.7466 38.8983 16.3539 39.5887 16.116 40.3376C15.878 41.0864 15.8001 41.8769 15.8874 42.6578C15.9382 43.4043 16.1453 44.1318 16.4952 44.7931C16.8451 45.4544 17.3301 46.0349 17.9186 46.4969C18.8575 47.1458 20.0069 47.4164 21.1367 47.2544C22.2665 47.0925 23.2935 46.51 24.0124 45.6234L30.1061 39.0016C30.2844 38.8148 30.4987 38.6661 30.7362 38.5645C30.9736 38.4629 31.2291 38.4105 31.4874 38.4105C31.7456 38.4105 32.0012 38.4629 32.2386 38.5645C32.476 38.6661 32.6903 38.8148 32.8686 39.0016C33.2469 39.3822 33.4593 39.897 33.4593 40.4336C33.4593 40.9702 33.2469 41.4851 32.8686 41.8656L26.7749 48.4875C25.4214 50.0643 23.5285 51.0797 21.4663 51.3351C19.404 51.5906 17.3206 51.0677 15.6233 49.8688C14.5592 49.0441 13.684 48.001 13.0569 46.8097C12.4297 45.6184 12.065 44.3066 11.9874 42.9625C11.8503 41.6186 11.9965 40.2609 12.4163 38.9769C12.8361 37.6929 13.5203 36.5112 14.4249 35.5078L39.5921 8.22814C40.7619 6.92121 42.1942 5.87573 43.7955 5.15996C45.3968 4.44418 47.131 4.07422 48.885 4.07422C50.639 4.07422 52.3733 4.44418 53.9746 5.15996C55.5759 5.87573 57.0082 6.92121 58.178 8.22814C60.6109 10.9648 61.9547 14.4992 61.9547 18.1609C61.9547 21.8227 60.6109 25.3571 58.178 28.0938L33.0108 55.3735C31.4464 57.1261 29.5295 58.5284 27.3854 59.4886C25.2414 60.4488 22.9186 60.9451 20.5694 60.9451C18.2202 60.9451 15.8974 60.4488 13.7534 59.4886C11.6093 58.5284 9.69234 57.1261 8.12799 55.3735Z" />
  </svg>
 );
}

function Icon2() {
 return (
  <svg
   width="1em"
   height="1em"
   viewBox="0 0 65 65"
   fill="currentColor"
   xmlns="http://www.w3.org/2000/svg"
  >
   <path d="M28.4375 62.9688C21.4341 62.9688 14.7176 60.1867 9.76546 55.2345C4.81333 50.2824 2.03125 43.5659 2.03125 36.5625C2.03125 29.5591 4.81333 22.8426 9.76546 17.8905C14.7176 12.9383 21.4341 10.1563 28.4375 10.1562C28.9762 10.1562 29.4929 10.3703 29.8738 10.7512C30.2547 11.1321 30.4688 11.6488 30.4688 12.1875V34.5312H52.8125C53.3512 34.5312 53.8679 34.7453 54.2488 35.1262C54.6297 35.5071 54.8438 36.0238 54.8438 36.5625C54.8438 43.5659 52.0617 50.2824 47.1095 55.2345C42.1574 60.1867 35.4409 62.9688 28.4375 62.9688ZM26.4062 14.2188C22.1882 14.6233 18.1722 16.219 14.8267 18.8195C11.4812 21.4201 8.94419 24.9184 7.51157 28.9062C6.07896 32.8941 5.80984 37.2071 6.73561 41.3421C7.66139 45.4771 9.74389 49.2636 12.7402 52.2598C15.7364 55.2561 19.5229 57.3386 23.6579 58.2644C27.7929 59.1902 32.1059 58.921 36.0938 57.4884C40.0816 56.0558 43.5799 53.5188 46.1805 50.1733C48.781 46.8278 50.3767 42.8118 50.7812 38.5938H28.4375C27.8988 38.5938 27.3821 38.3797 27.0012 37.9988C26.6203 37.6179 26.4062 37.1012 26.4062 36.5625V14.2188Z" />
   <path d="M60.9375 30.4688H36.5625C36.0238 30.4688 35.5071 30.2547 35.1262 29.8738C34.7453 29.4929 34.5312 28.9762 34.5312 28.4375V4.0625C34.5312 3.52378 34.7453 3.00712 35.1262 2.62619C35.5071 2.24526 36.0238 2.03125 36.5625 2.03125C40.0302 2.03125 43.464 2.71427 46.6677 4.04131C49.8715 5.36834 52.7825 7.31341 55.2345 9.76546C57.6866 12.2175 59.6317 15.1285 60.9587 18.3323C62.2857 21.536 62.9688 24.9698 62.9688 28.4375C62.9688 28.9762 62.7547 29.4929 62.3738 29.8738C61.9929 30.2547 61.4762 30.4688 60.9375 30.4688ZM38.5938 26.4062H58.9062C58.4486 21.1728 56.1616 16.2679 52.4468 12.5532C48.7321 8.83841 43.8272 6.55137 38.5938 6.09375V26.4062Z" />
  </svg>
 );
}

function Icon3() {
 return (
  <svg
   width="1em"
   height="1em"
   viewBox="0 0 65 65"
   fill="currentColor"
   xmlns="http://www.w3.org/2000/svg"
  >
   <path d="M32.5 62.9679C32.0697 62.9694 31.6501 62.8343 31.3016 62.5819L25.6953 58.5194C20.2588 54.5543 15.8343 49.3626 12.7813 43.3661C9.72834 37.3696 8.13304 30.7374 8.125 24.0085V12.1866C8.12518 11.7692 8.25397 11.3619 8.49385 11.0203C8.73373 10.6786 9.07304 10.4192 9.46562 10.2773L31.8094 2.15226C32.2557 1.99091 32.7443 1.99091 33.1906 2.15226L55.5344 10.2773C55.927 10.4192 56.2663 10.6786 56.5061 11.0203C56.746 11.3619 56.8748 11.7692 56.875 12.1866V24.0085C56.8702 30.7409 55.2764 37.377 52.2233 43.3773C49.1702 49.3776 44.744 54.5726 39.3047 58.5398L33.6984 62.6023C33.3475 62.8474 32.928 62.9753 32.5 62.9679ZM12.1875 13.6085V24.0085C12.2013 30.0907 13.6464 36.0842 16.4058 41.5044C19.1653 46.9245 23.1617 51.6191 28.0719 55.2085L32.5 58.4179L36.9281 55.2085C41.8383 51.6191 45.8347 46.9245 48.5942 41.5044C51.3536 36.0842 52.7987 30.0907 52.8125 24.0085V13.6085L32.5 6.21476L12.1875 13.6085Z" />
   <path d="M31.3016 52.5288L30.4688 51.9194C26.0667 48.7174 22.4839 44.52 20.0129 39.6697C17.5418 34.8194 16.2525 29.4536 16.25 24.0101V17.9163C16.2502 17.4989 16.379 17.0916 16.6188 16.75C16.8587 16.4083 17.198 16.1489 17.5906 16.0069L31.8094 10.8476C32.2557 10.6862 32.7443 10.6862 33.1906 10.8476L47.4094 16.0069C47.7955 16.1465 48.1303 16.3997 48.3696 16.7333C48.609 17.0669 48.7416 17.4652 48.75 17.8757V23.9694C48.7475 29.4129 47.4582 34.7787 44.9871 39.629C42.5161 44.4794 38.9333 48.6768 34.5312 51.8788L33.6984 52.4882C33.3549 52.7483 32.9375 52.8925 32.5066 52.8998C32.0758 52.9071 31.6537 52.7772 31.3016 52.5288ZM20.3125 19.2976V24.0101C20.3219 28.7385 21.4273 33.4004 23.542 37.6297C25.6566 41.859 28.7229 45.5405 32.5 48.3851C36.2771 45.5405 39.3434 41.859 41.458 37.6297C43.5727 33.4004 44.6781 28.7385 44.6875 24.0101V19.2976L32.5 14.8694L20.3125 19.2976Z" />
  </svg>
 );
}

export const latestUpdate: ServiceSectionProps = {
 services: [
  {
   icon: <Icon1 />,
   title: 'Enhanced security features',
   description:
    'Our enhanced security features include advanced authentication, fraud detection, and real-time ride monitoring to ensure passenger and driver safety',
  },
  {
   icon: <Icon2 />,
   title: 'AI-powered demand prediction',
   description:
    'With AI-powered demand prediction, the app intelligently forecasts peak hours and high-demand areas, helping drivers position themselves strategically for better earnings',
  },
  {
   icon: <Icon3 />,
   title: 'Advanced analytics for fleet owners',
   description:
    'Additionally, our advanced analytics for fleet owners provides in-depth insights into ride trends, driver performance, and revenue metrics, enabling businesses to optimize their operations and maximize profitability',
  },
 ],
};



export const solutions = [
 {
  title: "From Scratch",
  description:
   "For businesses looking for a unique solution, we develop custom food delivery apps from scratch, ensuring complete control over features, UI/UX, and integrations.",
  icon: <Icon3 />,
 },
 {
  title: "White Label Food Delivery App",
  description:
   "Our ready-made white-label food delivery app solutions help businesses launch faster with pre-built features, customized branding, and seamless integrations.",
  icon: < Icon3 />,
 },
];


export const faqSectionData: FAQSectionProps = {
 sectionHeading: {
  subtitle: 'Our faq',
  title: 'Frequently asked question',
 },
 faqItems: [
  {
   question: ' How long does it take to develop a food delivery app?',
   answer:
    'The development timeline depends on features, customization, and integrations. On average, it takes 3-6 months.',
  },
  {
   question: 'Can I integrate third-party payment gateways?',
   answer:
    'Yes, we integrate secure payment gateways like PayPal, Stripe, and Razorpay.',
  },
  {
   question: ' Do you provide post-launch support?',
   answer:
    'Absolutely! We offer maintenance, updates, and 24/7 support.',
  },
  {
   question: 'What payment options can be integrated?',
   answer:
    'Credit/debit cards, wallets, UPI, and more.',
  }
 ],
};


export const uniquFeature: TeamSectionProps = {
 sectionHeading: {
  subtitle: 'Unique Features',
  title: 'Enhancing the Ride-Hailing Experience',
 },
 description:
  'At TechAres, we integrate cutting-edge technology to provide a superior taxi app experience with unique features that set us apart. Our AI-based route optimization ensures drivers take the most efficient routes, reducing travel time and fuel costs. We support multi-payment options, including credit/debit cards, wallets, and digital payments, offering users a seamless and flexible checkout process. To enhance safety, our app includes SOS & emergency features, allowing passengers to send instant alerts to emergency contacts and authorities in case of distress. Additionally, our dynamic surge pricing system adjusts fares based on real-time demand, ensuring fair pricing for drivers while optimizing earnings during peak hours.'
};




export interface ProjectDetailsProps {
 sectionHeading: SectionHeadingWithoutStylingProps;
 // aboutUsPoints: string[];
 keyPoints: {
  icon?: React.ReactNode;
  title: string;
  description?: string;
 }[];
 image: Omit<ImageProps, 'width' | 'height'>;
 description?: string;
}
export const projectDetails: ProjectDetailsProps = {
 sectionHeading: {
  subtitle: ' High Performing Food Delivery App',
  title: 'Our Expertise in Food Delivery App Development',
  description:
   "TechAres specializes in creating robust and scalable food delivery app development solutions that streamline restaurant operations, enhance customer experience, and drive business growth. With our expertise, we craft highly functional and engaging apps tailored to your business needs. Our solutions ensure seamless order management, real-time tracking, and secure payments, helping businesses grow with efficiency and innovation. Whether you're a startup or an enterprise, we tailor apps to your unique needs.",
 },
 keyPoints: [

 ],
 image: {
  src: '/assets/images/about/about-5.png',
  alt: 'about image five',
 },
};


export const servicesData: ServiceData = {
 "Customer App": {
  title: "Customer App",
  description: "Tailored software solutions for your business needs",
  icon: '/assets/images/service/custom-software.png',
  mainDescription:
   "We specialize in creating tailored software solutions to meet your unique business requirements. Our process focuses on delivering secure, scalable, and feature-rich products designed to adapt to your growth.",
  cards: [
   {
    title: "User-friendly interface for quick ordering",
    description:
     " Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more",
   },
   {
    title: "Real-time order tracking",
    description:
     "Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.",
   },
   {
    title: "Secure multiple payment options",
    description:
     "Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.",
   },
   {
    title: "Personalized recommendations",
    description:
     "Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.",
   },
  ],
 },
 "Driver App": {
  title: "Driver App",
  description: "Expert guidance and development solutions",
  icon: '/assets/images/service/consulting-service.png',
  mainDescription:
   "Our IT consulting services help businesses leverage technology to achieve their goals. From strategic planning to execution, we offer solutions tailored to your specific challenges and growth opportunities.",
  cards: [
   {
    title: "Optimized navigation for efficient deliveries",
    description:
     "Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.",
   },
   {
    title: "Instant order notifications",
    description:
     "Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.",
   },
   {
    title: "Earnings and performance tracking",
    description:
     "Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.",
   },
   {
    title: "Secure communication with customers",
    description:
     "Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.",
   },
  ],
 },
 "Restaurant App": {
  title: "Restaurant App",
  description: "Expert developers for your projects",
  icon: '/assets/images/service/hire-developer.png',
  mainDescription:
   "Techares provides access to a pool of skilled developers to meet your project requirements. Our exper ts work seamlessly as part of your team to ensure high-quality results.",
  cards: [
   {
    title: "Order and menu management",
    description:
     "Design and implement user interfaces with a focus on responsiveness, aesthetics, and functionality to deliver immersive user experiences.",
   },
   {
    title: "Inventory tracking",
    description: "Build robust and secure server-side architectures that ensure your applications run efficiently and scale effortlessly with business growth.",
   },
   {
    title: "Analytics and reporting",
    description: "Manage end-to-end development projects with experts skilled in both frontend and backend technologies for seamless integration.",
   },
   {
    title: "Integration with third-party services",
    description: "Optimize the software development lifecycle by combining development and operations for faster, more reliable deployments.",
   },
  ],
 },
 "Admin Panel": {
  title: "Admin Panel",
  description: "Innovative blockchain solutions",
  icon: '/assets/images/service/bitcoin.png',
  mainDescription:
   "Harness the transformative power of blockchain technology to create secure, transparent, and efficient solutions for your business. Our expertise spans across various blockchain applications tailored to your needs.",
  cards: [
   {
    title: "Centralized dashboard for complete control",
    description: "Automate transactions with self-executing agreements that reduce risks, eliminate intermediaries, and enhance trust in business dealings.",
   },
   {
    title: "Customer and restaurant management",
    description:
     "Build decentralized applications that operate on secure, peer-to-peer networks, offering greater transparency and user autonomy.",
   },
   {
    title: "Payment and revenue tracking",
    description: " Design and manage blockchain tokens for fundraising, rewards programs, or custom cryptocurrency solutions.",
   },
   {
    title: "Data analytics for business insights",
    description: "Develop secure wallets for managing digital assets with advanced features like multi-currency support and enhanced encryption.",
   },
  ],
 },
 "Unique Features": {
  title: "Unique Features",
  description: "Comprehensive digital marketing solutions",
  icon: '/assets/images/service/marketing.png',
  mainDescription:
   "Our digital marketing services are designed to boost your online visibility, attract the right audience, and generate measurable results through innovative, data-driven strategies.",
  cards: [
   {
    title: "AI-based order recommendations",
    description:
     "Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.",
   },
   {
    title: "Multi-language support",
    description:
     "Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.",
   },
   {
    title: "Geo-fencing for better delivery zones",
    description:
     "Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.",
   },
   {
    title: "Loyalty programs and referral rewards",
    description: "Some content will be allocated here for the specific feature and that will have quite few sentences here like this. Add if required more.",
   },
  ],
 },
}

