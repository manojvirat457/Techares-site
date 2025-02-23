import { ProjectDetailsProps } from '@/app/project/food-delivery/-data';
import { Methodology } from '@/data/methodology/v1';
import { AboutSectionProps } from '@/src/sections/about/v1';
import { FAQSectionProps } from '@/src/sections/faq';
import { ServiceSectionProps } from '@/src/sections/service/v1';
import {
    Activity,
    BarChart,
    Box,
    Boxes,
    Brain,
    Car,
    Cog,
    Cpu,
    FileSearch,
    Handshake,
    HeartPulse,
    LineChart,
    MapPin,
    Navigation2,
    Network,
    Pencil,
    Radio,
    Rocket,
    Route,
    ShoppingCart,
    TestTube,
    Timer,
    Truck,
    Users,
    Warehouse
} from 'lucide-react';

export const projectDetails: ProjectDetailsProps = {
  sectionHeading: {
    subtitle: 'Smart Logistics Solutions',
    title: 'All-in-One Transport and Logistics Software Development Services',
    description:
      'Techares delivers powerful logistics software solutions that optimize your entire supply chain. From fleet management to real-time tracking, our innovative technologies ensure seamless operations, cost efficiency, and enhanced customer satisfaction.',
  },
  keyPoints: [],
  image: {
    src: '/assets/images/about/whychoose.webp',
    alt: 'logistics software development',
  },
};

// export const solutions = {
//   title: 'Key Solutions',
//   highlightedTitle: 'We Offer',
//   description:
//     'Streamline your logistics operations with Techares! Our cutting-edge logistics software development services automate workflows, enhance efficiency, and drive seamless supply chain management—built for businesses that never slow down.',
//   solutionCard: [
//     {
//       title: 'Transportation Management',
//       description: 'Automate and streamline transportation planning, execution, and tracking.',
//       icon: <Truck />,
//     },
//     {
//       title: 'Fleet Management',
//       description: 'Monitor and manage your fleet's performance, maintenance, and fuel consumption.',
//       icon: <Car />,
//     },
//     {
//       title: 'Warehouse Management',
//       description: 'Optimize warehouse operations with automated inventory control and tracking.',
//       icon: <Warehouse />,
//     },
//     {
//       title: 'Supply Chain Management',
//       description: 'Streamline your end-to-end supply chain for maximum efficiency.',
//       icon: <Network />,
//     },
//   ],
// };

export const servicesData = {
  'Advanced Features': {
    title: 'Advanced Features',
    description: 'Cutting-Edge Features That Set Your Transport and Logistics App Apart',
    icon: '/assets/images/service/features.png',
    cards: [
      {
        title: 'AI-Powered Route Optimization',
        description: 'Advanced algorithms analyze real-time traffic, weather, and delivery constraints to suggest the most efficient routes, reducing delays and fuel costs.',
        icon: <Brain />,
      },
      {
        title: 'Real-Time Fleet Tracking',
        description: 'GPS-enabled tracking provides live location updates, vehicle status, and predictive ETAs, ensuring complete visibility and control over your fleet operations.',
        icon: <MapPin />,
      },
      {
        title: 'Automated Dispatch System',
        description: 'Smart dispatching assigns orders to the nearest available driver based on load capacity, delivery priority, and route efficiency, enhancing productivity.',
        icon: <Cog />,
      },
      {
        title: 'IoT-Enabled Asset Tracking',
        description: 'Connected sensors monitor vehicle health, cargo conditions, and asset movement, preventing losses and optimizing fleet maintenance schedules.',
        icon: <Cpu />,
      },
    ],
  },
  'Additional Features': {
    title: 'Additional Features',
    description: 'More Powerful Features for Your Logistics Operations',
    icon: '/assets/images/service/additional.png',
    cards: [
      {
        title: 'Multi-Modal Transport Management',
        description: 'Seamlessly integrate different transport modes—road, rail, air, and sea—to manage complex logistics operations with ease.',
        icon: <Network />,
      },
      {
        title: 'AI-Driven Demand Forecasting',
        description: 'Predict future logistics demand using historical data and AI analytics, allowing for proactive resource planning and cost optimization.',
        icon: <LineChart />,
      },
      {
        title: 'Delivery Management',
        description: 'Automate and optimize last-mile deliveries for faster, more reliable service.',
        icon: <Box />,
      },
      {
        title: 'Telematics Integration',
        description: 'Improve fleet efficiency with IoT-powered vehicle monitoring and real-time data analytics.',
        icon: <Activity />,
      },
    ],
  },
};

export const whyChooseSectionData: AboutSectionProps = {
  sectionHeading: {
    title: 'What Makes Us Your Ideal Logistics Software Development Company?',
    description:
      'Techares specializes in delivering end-to-end logistics software solutions tailored to your business needs. With a strong focus on automation, real-time tracking, and seamless integration, we help optimize your logistics operations for maximum efficiency and cost savings.',
  },
  keyPoints: [
    {
      title: 'Industry Expertise',
      description: 'Years of experience in logistics software development, ensuring top-notch solutions.',
      icon: <BarChart />,
    },
    {
      title: 'Scalable Solutions',
      description: 'Custom-built software that grows with your business needs.',
      icon: <LineChart />,
    },
    {
      title: 'Advanced Technology',
      description: 'Integration of AI, IoT, and automation for efficient logistics management.',
      icon: <Cpu />,
    },
    {
      title: 'Reliable Support',
      description: '24/7 technical assistance and regular updates to keep your system optimized.',
      icon: <Handshake />,
    },
  ],
  isCard: false,
  images: {
    image1: {
      src: '/assets/images/about/about-1.webp',
      alt: 'about one',
      width: 195,
      height: 132,
    },
    image2: {
      src: '/assets/images/about/about-2.webp',
      alt: 'about two',
      width: 312,
      height: 304,
    },
    image3: {
      src: '/assets/images/about/about-3.webp',
      alt: 'about three',
      width: 250,
      height: 265,
    },
    image4: {
      src: '/assets/images/about/about-4.webp',
      alt: 'about four',
      width: 250,
      height: 265,
    },
  },
  isButton: true,
  button: {
    href: '',
    label: 'Get Quote',
    openNewTab: true,
  },
  description: '',
};

type FeatureSectionProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export const features : FeatureSectionProps[] = [
    {
      title: "Transportation Management",
      description: "Automate and streamline transportation planning, execution, and tracking.",
      icon: <Truck />,
    },
    {
      title: "Route Optimization",
      description: "Find the most efficient routes to reduce fuel costs and delivery times.",
      icon: <Route />,
    },
    {
      title: "Fleet Management",
      description: "Monitor and manage your fleet's performance, maintenance, and fuel consumption.",
      icon: <Car />,
    },
    {
      title: "Warehouse Management",
      description: "Optimize warehouse operations with automated inventory control and tracking.",
      icon: <Warehouse />,
    },
    {
      title: "Inventory Management",
      description: "Keep real-time stock updates and prevent shortages or overstocking.",
      icon: <Boxes />,
    },
    {
      title: "Asset Tracking",
      description: "Gain visibility over your valuable assets with GPS-enabled tracking solutions.",
      icon: <MapPin />,
    },
    {
      title: "Order Management",
      description: "Automate order processing and tracking for seamless deliveries.",
      icon: <ShoppingCart />,
    },
    {
      title: "Customer Experience",
      description: "Enhance customer satisfaction with real-time tracking and support.",
      icon: <Users />,
    },
    {
      title: "Supply Chain Management",
      description: "Streamline your end-to-end supply chain for maximum efficiency.",
      icon: <Network />,
    },
    {
      title: "Navigation Tracking",
      description: "Enable real-time navigation and tracking for accurate ETAs.",
      icon: <Navigation2 />,
    },
    {
      title: "Telematics and Connected Vehicles",
      description: "Improve fleet efficiency with IoT-powered vehicle monitoring.",
      icon: <Radio />,
    },
    {
      title: "Delivery Management Solutions",
      description: "Automate and optimize last-mile deliveries for faster, more reliable service.",
      icon: <Timer />,
    },
];

export const faqSectionData: FAQSectionProps = {
    sectionHeading: {
      subtitle: 'Our FAQ',
      title: 'Frequently Asked Questions',
    },
    faqItems: [
      {
        question: 'How can logistics software benefit my business?',
        answer: 'Logistics software automates operations, optimizes routes, tracks shipments, and improves overall efficiency.',
      },
      {
        question: 'Can you integrate third-party services into my logistics software?',
        answer: 'Yes, we integrate various third-party APIs, including payment gateways, GPS tracking, and warehouse management tools.',
      },
      {
        question: 'How long does it take to develop a logistics software solution?',
        answer: 'The development timeline varies based on requirements but typically ranges from a few weeks to a few months.',
      },
      {
        question: 'Is the software customizable according to my business needs?',
        answer: 'Absolutely! We offer fully customizable solutions to match your specific logistics and supply chain requirements.',
      },
      {
        question: 'Do you provide post-deployment support and maintenance?',
        answer: 'Yes, we offer continuous monitoring, updates, and technical support to ensure smooth operations.',
      },
    ],
  };


  
export const methodologies: Methodology[] = [
    {
      id: 'discovery',
      number: '01',
      title: 'Requirement Analysis',
      description:
        'We assess your logistics needs, business goals, and operational challenges to define the best software solution.',
      icon: <FileSearch size={30} />,
      color: {
        number: 'text-emerald-400',
        iconBg: 'bg-emerald-900/50',
      },
    },
    {
      id: 'planning',
      number: '02',
      title: 'UI/UX Design & Prototyping',
      description:
        'Our experts create intuitive designs and prototypes that enhance user experience and workflow efficiency.',
      icon: <Pencil size={30} />,
      color: {
        number: 'text-primary',
        iconBg: 'bg-blue-900/50',
      },
    },
    {
      id: 'development',
      number: '03',
      title: 'Development & Integration',
      description:
        'We build and integrate robust logistics software tailored to your business, ensuring seamless operations.',
      icon: <Cog size={30} />,
      color: {
        number: 'text-cyan-400',
        iconBg: 'bg-cyan-900/50',
      },
    },
    {
      id: 'testing',
      number: '04',
      title: 'Testing & Quality Assurance',
      description:
        'Rigorous testing is conducted to ensure flawless performance, security, and reliability.',
      icon: <TestTube size={30} />,
      color: {
        number: 'text-yellow-400',
        iconBg: 'bg-yellow-900/50',
      },
    },
    {
      id: 'deployment',
      number: '05',
      title: 'Deployment & Training',
      description:
        'We deploy the software efficiently and provide hands-on training to help your team adapt quickly.',
      icon: <Rocket size={30} />,
      color: {
        number: 'text-red-400',
        iconBg: 'bg-red-900/50',
      },
    },
    {
      id: 'maintenance',
      number: '06',
      title: 'Ongoing Support & Maintenance',
      description:
        'Continuous monitoring, updates, and improvements to keep your logistics software running smoothly.',
      icon: <HeartPulse size={30} />,
      color: {
        number: 'text-purple-400',
        iconBg: 'bg-purple-900/50',
      },
    },
  ];

  

export const latestUpdate: ServiceSectionProps = {
  services: [
    {
      icon: <FileSearch size={30} />,
      title: 'Requirement Analysis',
      description:
        'We assess your logistics needs, business goals, and operational challenges to define the best software solution.',
    },
    {
      icon: <Pencil size={30} />,
      title: 'UI/UX Design & Prototyping',
      description:
        'Our experts create intuitive designs and prototypes that enhance user experience and workflow efficiency.',
    },
    {
      icon: <Cog size={30} />,
      title: 'Development & Integration',
      description:
        'We build and integrate robust logistics software tailored to your business, ensuring seamless operations.',
    },
    {
      icon: <TestTube size={30} />,
      title: 'Testing & Quality Assurance',
      description:
        'Rigorous testing is conducted to ensure flawless performance, security, and reliability.',
    },
    {
      icon: <Rocket size={30} />,
      title: 'Deployment & Training',
      description:
        'We deploy the software efficiently and provide hands-on training to help your team adapt quickly.',
    },
    {
      icon: <HeartPulse size={30} />,
      title: 'Ongoing Support & Maintenance',
      description:
        'Continuous monitoring, updates, and improvements to keep your logistics software running smoothly.',
    },
  ],
};
