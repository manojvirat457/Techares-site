import { Industry, IndustriesSectionData } from '@/data/industries/v1';
import { ServiceData } from '@/data/service-section/v3';
import { AboutSectionProps } from '@/src/sections/about/v1';
import { CtaSectionProps } from '@/src/sections/cta/v2';
import { HeroProps } from '@/src/sections/hero/v1';
import { ProjectDetailsProps } from '@/src/sections/project/v4';
import { ContactSectionProps } from '@/src/sections/contact/v1';
import { Hourglass, Star, Trophy, UserCheck } from 'lucide-react';

export const heroData: HeroProps = {
  items: [
    {
      image: {
        src: '/assets/images/hero/hero-1.png',
        alt: 'hero 1',
      },
      title: 'On-demand Development Solutions',
      description:
        'We specialize in on-demand development, delivering scalable and high-performance solutions tailored to your business needs.',
      button: {
        label: 'Explore',
        href: '/',
      },
    },
    {
      image: {
        src: '/assets/images/hero/hero-2.png',
        alt: 'hero 1',
      },
      title: 'Custom Software development',
      description:
        'We specialize in custom software development, creating solutions that meet your unique business needs and exceed your expectations.',
      button: {
        label: 'Explore',
        href: '/',
      },
    },
    {
      image: {
        src: '/assets/images/hero/hero-3.png',
        alt: 'hero 1',
      },
      title: 'IT consultancy & Development Services',
      description:
        'We offer a range of IT consultancy and development services, including web development, mobile app development, and cloud solutions.',
      button: {
        label: 'Explore',
        href: '/',
      },
    },
    {
      image: {
        src: '/assets/images/hero/hero-4.png',
        alt: 'hero 1',
      },
      title: 'Blockchain Solutions',
      description:
        'We specialize in blockchain solutions, providing secure and decentralized solutions for various industries.',
      button: {
        label: 'Explore',
        href: '/',
      },
    },
    {
      image: {
        src: '/assets/images/hero/hero-5.png',
        alt: 'hero 1',
      },
      title: 'Hire Developers',
      description:
        'We specialize in hiring top developers who bring innovative ideas to life. Our team of experienced professionals is dedicated to delivering high-quality results that exceed your expectations.',
      button: {
        label: 'Explore',
        href: '/',
      },
    },
  ],
};

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

export const servicesData: ServiceData = {
  'Custom Software Development': {
    title: 'Custom Software Development',
    description: 'Tailored software solutions for your business needs',
    icon: '/assets/images/service/custom-software.png',
    mainDescription:
      'We specialize in creating tailored software solutions to meet your unique business requirements. Our process focuses on delivering secure, scalable, and feature-rich products designed to adapt to your growth.',
    cards: [
      {
        title: 'Enterprise Solutions',
        description:
          ' Build robust software systems that automate workflows, improve efficiency, and support the needs of large organizations, ensuring seamless integration with existing processes and tools.',
      },
      {
        title: 'Web and Mobile Applications',
        description:
          'Develop responsive, user-friendly web and mobile apps that offer exceptional performance and intuitive experiences, tailored to meet user needs and market demands.',
      },
      {
        title: 'API Development and Integration',
        description:
          'Design and integrate APIs to connect systems, enhance data flow, and enable seamless interaction between different platforms and services.',
      },
      {
        title: 'Cloud-Based Applications',
        description:
          'Create scalable cloud-native applications that ensure accessibility, reliability, and flexibility while reducing infrastructure costs.',
      },
      {
        title: 'Legacy System Modernization',
        description:
          'Upgrade outdated systems to improve performance, security, and compatibility with modern technologies, ensuring a smooth transition.',
      },
    ],
  },
  'IT Consultancy & Development Services': {
    title: 'IT Consultancy & Development Services',
    description: 'Expert guidance and development solutions',
    icon: '/assets/images/service/consulting-service.png',
    mainDescription:
      'Our IT consulting services help businesses leverage technology to achieve their goals. From strategic planning to execution, we offer solutions tailored to your specific challenges and growth opportunities.',
    cards: [
      {
        title: 'Tech Roadmap Design',
        description:
          'Collaborate with our experts to identify technological gaps and opportunities, creating a clear strategy that aligns IT capabilities.',
      },
      {
        title: 'Cloud Migration Services',
        description:
          'Transition your systems and data to secure cloud environments ensuring enhanced collaboration, scalability, and cost-efficiency.',
      },
      {
        title: 'Cybersecurity Solutions',
        description:
          'Protect your digital assets with security frameworks, including threat detection, data encryption, and regular vulnerability assessments.',
      },
      {
        title: 'Infrastructure Optimization',
        description:
          'Assess and enhance your IT infrastructure for maximum efficiency, reliability, and cost savings while ensuring scalability.',
      },
      {
        title: 'Custom IT Solutions',
        description:
          'Develop innovative IT solutions to address specific business challenges, ensuring seamless integration with existing systems and workflows.',
      },
    ],
  },
  'Digital Marketing': {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing solutions',
    icon: '/assets/images/service/marketing.png',
    mainDescription:
      'Our digital marketing services are designed to boost your online visibility, attract the right audience, and generate measurable results through innovative, data-driven strategies.',
    cards: [
      {
        title: 'SEO Optimization',
        description:
          "Improve search engine rankings by optimizing your website's structure, content, and keywords, ensuring better visibility and organic traffic growth",
      },
      {
        title: 'Social Media Management',
        description:
          'Develop and execute creative campaigns across platforms like Instagram, LinkedIn, and Facebook to engage audiences and build brand loyalty.',
      },
      {
        title: 'Content Marketing',
        description:
          'Craft compelling blogs, videos, and infographics that educate, entertain, and convert your audience into loyal customers.',
      },
      {
        title: 'Google & Bing Ads',
        description:
          'Launch targeted ad campaigns with precise audience segmentation to maximize return on investment and drive high-quality leads.',
      },
      {
        title: 'Performance Analytics',
        description:
          'Use advanced tools to measure campaign performance, identify trends, and refine strategies to consistently achieve optimal outcomes.',
      },
    ],
  },
  'Hire Developers': {
    title: 'Hire Developers',
    description: 'Expert developers for your projects',
    icon: '/assets/images/service/hire-developer.png',
    mainDescription:
      'Techares provides access to a pool of skilled developers to meet your project requirements. Our exper ts work seamlessly as part of your team to ensure high-quality results.',
    cards: [
      {
        title: 'Frontend Developers',
        description:
          'Design and implement user interfaces with a focus on responsiveness, aesthetics, and functionality to deliver immersive user experiences.',
      },
      {
        title: 'Backend Developers',
        description:
          'Build robust and secure server-side architectures that ensure your applications run efficiently and scale effortlessly with business growth.',
      },
      {
        title: 'Full-Stack Teams',
        description:
          'Manage end-to-end development projects with experts skilled in both frontend and backend technologies for seamless integration.',
      },
      {
        title: 'DevOps Specialists',
        description:
          'Optimize the software development lifecycle by combining development and operations for faster, more reliable deployments.',
      },
      {
        title: 'Dedicated Resources',
        description:
          'Hire developers exclusively for your project, ensuring focused attention and faster delivery while maintaining high-quality standards.',
      },
    ],
  },
  'Blockchain & Cryptocurrency Development': {
    title: 'Blockchain & Cryptocurrency Development',
    description: 'Innovative blockchain solutions',
    icon: '/assets/images/service/bitcoin.png',
    mainDescription:
      'Harness the transformative power of blockchain technology to create secure, transparent, and efficient solutions for your business. Our expertise spans across various blockchain applications tailored to your needs.',
    cards: [
      {
        title: 'Smart Contracts',
        description:
          'Automate transactions with self-executing agreements that reduce risks, eliminate intermediaries, and enhance trust in business dealings.',
      },
      {
        title: 'DApp Development',
        description:
          'Build decentralized applications that operate on secure, peer-to-peer networks, offering greater transparency and user autonomy.',
      },
      {
        title: 'Token Creation and Management',
        description:
          ' Design and manage blockchain tokens for fundraising, rewards programs, or custom cryptocurrency solutions.',
      },
      {
        title: 'Cryptocurrency Wallet Development',
        description:
          'Develop secure wallets for managing digital assets with advanced features like multi-currency support and enhanced encryption.',
      },
      {
        title: 'Blockchain Consulting',
        description:
          'Leverage our expertise to explore and implement blockchain solutions that streamline processes and drive business innovation.',
      },
    ],
  },
  'AI & Machine Learning': {
    title: 'AI & Machine Learning',
    description: 'Advanced AI solutions for your business',
    icon: '/assets/images/service/ai-machine.png',
    mainDescription:
      'We deliver AI-driven solutions that empower businesses to make smarter decisions, improve efficiency, and enhance user experiences through predictive and adaptive systems.',
    cards: [
      {
        title: 'Predictive Analytics',
        description:
          'Analyze historical data to forecast trends, enabling proactive strategies and informed decision-making.',
      },
      {
        title: 'Chatbots and Virtual Assistants',
        description:
          'Create AI-powered conversational interfaces to enhance customer support and improve engagement around the clock.',
      },
      {
        title: 'Business Process Automation',
        description:
          'Automate repetitive tasks using machine learning algorithms, saving time and reducing human error.',
      },
      {
        title: 'Image and Video Recognition',
        description:
          ' Utilize AI to analyze visual data, supporting applications like security surveillance, content tagging, and augmented reality.',
      },
      {
        title: 'Custom ML Models',
        description:
          'Develop and deploy machine learning models tailored to solve complex challenges specific to your industry or business',
      },
    ],
  },
};
export const industries: Industry[] = [
  {
    title: 'Healthcare',
    icon: '/assets/images/industry-we-serve/1.png',
  },
  {
    title: 'E-commerce',
    icon: '/assets/images/industry-we-serve/2.png',
  },
  {
    title: 'Gaming',
    icon: '/assets/images/industry-we-serve/3.png',
  },
  {
    title: 'Food & Restaurant',
    icon: '/assets/images/industry-we-serve/4.png',
  },
  {
    title: 'Manufacturing',
    icon: '/assets/images/industry-we-serve/5.png',
  },
  {
    title: 'Education',
    icon: '/assets/images/industry-we-serve/6.png',
  },
  {
    title: 'Fintech & Banking',
    icon: '/assets/images/industry-we-serve/7.png',
  },
  {
    title: 'Logistics & SupplyChain',
    icon: '/assets/images/industry-we-serve/8.png',
  },
  {
    title: 'Travel & Hospitality',
    icon: '/assets/images/industry-we-serve/9.png',
  },
  {
    title: 'Media & Entertainment',
    icon: '/assets/images/industry-we-serve/10.png',
  },
];

export const industriesSectionData: IndustriesSectionData = {
  highlightTitle: 'Industries',
  title: ' We Serve',
  description:
    'Empowering businesses across various sectors with innovative solutions',
  detailedDescription: '',
  data: industries,
};

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

export const ctaSectionData: CtaSectionProps = {
  title: 'Schedule a Meeting',
  description:
    'Connect with our experts for a personalized one-on-one consultation. Discuss your business requirements, explore tailored solutions, and get expert guidance to drive your project forward.',
};

export const contactSectionData: ContactSectionProps = {
  sectionHeading: {
    subtitle: 'Get a Personalized Quote',
    title: 'Let’s Talk Tech ',
  },
  image: {
    src: '/assets/images/contact/section-half-bg-1.png',
    alt: 'contact section background image',
  },
};
