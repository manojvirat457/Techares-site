import { ProjectDetailsProps } from '@/app/project/food-delivery/-data';
import { Methodology } from '@/data/methodology/v1';
import { TabContent } from '@/src/components/tab-section';
import { FAQSectionProps } from '@/src/sections/faq';
import { ServiceSectionProps } from '@/src/sections/service/v1';
import {
  Activity,
  Box,
  Boxes,
  Brain,
  Car,
  Cog,
  Cpu,
  FileSearch,
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
  Warehouse,
} from 'lucide-react';
import Image from 'next/image';

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
    description:
      'Cutting-Edge Features That Set Your Transport and Logistics App Apart',
    icon: '/assets/images/service/features.png',
    cards: [
      {
        title: 'AI-Powered Route Optimization',
        description:
          'Advanced algorithms analyze real-time traffic, weather, and delivery constraints to suggest the most efficient routes, reducing delays and fuel costs.',
        icon: <Brain />,
      },
      {
        title: 'Real-Time Fleet Tracking',
        description:
          'GPS-enabled tracking provides live location updates, vehicle status, and predictive ETAs, ensuring complete visibility and control over your fleet operations.',
        icon: <MapPin />,
      },
      {
        title: 'Automated Dispatch System',
        description:
          'Smart dispatching assigns orders to the nearest available driver based on load capacity, delivery priority, and route efficiency, enhancing productivity.',
        icon: <Cog />,
      },
      {
        title: 'IoT-Enabled Asset Tracking',
        description:
          'Connected sensors monitor vehicle health, cargo conditions, and asset movement, preventing losses and optimizing fleet maintenance schedules.',
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
        description:
          'Seamlessly integrate different transport modes—road, rail, air, and sea—to manage complex logistics operations with ease.',
        icon: <Network />,
      },
      {
        title: 'AI-Driven Demand Forecasting',
        description:
          'Predict future logistics demand using historical data and AI analytics, allowing for proactive resource planning and cost optimization.',
        icon: <LineChart />,
      },
      {
        title: 'Delivery Management',
        description:
          'Automate and optimize last-mile deliveries for faster, more reliable service.',
        icon: <Box />,
      },
      {
        title: 'Telematics Integration',
        description:
          'Improve fleet efficiency with IoT-powered vehicle monitoring and real-time data analytics.',
        icon: <Activity />,
      },
    ],
  },
};

export const whyChooseUs: ProjectDetailsProps = {
  sectionHeading: {
    title: 'What Makes Us Your Ideal Logistics Software Development Company',
    description:
      "As a trusted logistics software development company, Techares stands out by delivering time-bound results through a proven agile development process. Our dedicated team of experts ensures seamless execution, while our round-the-clock support guarantees uninterrupted operations. Whether you're seeking full-cycle logistics software development or specialized software application development for logistics, we build solutions that are scalable, secure, and results-driven",
  },
  isCard: false,
  keyPoints: [
    {
      title: 'Zero-Cost Evaluation',
      icon: (
        <Image
          src="/assets/images/food-delivery/fock-outline.png"
          alt="Feature 1"
          width={20}
          height={20}
        />
      ),
      description:
        'We begin with a free consultation and provide a transparent estimate tailored to your logistics software needs.',
    },
    {
      title: 'Data Security & IP Protection',
      icon: (
        <Image
          src="/assets/images/food-delivery/fock-outline.png"
          alt="Feature 1"
          width={20}
          height={20}
        />
      ),
      description:
        'Your data is safeguarded through strict security protocols, NDA agreements, and internal IP protection policies.',
    },
    {
      title: 'Full Code Ownership',
      icon: (
        <Image
          src="/assets/images/food-delivery/fock-outline.png"
          alt="Feature 1"
          width={20}
          height={20}
        />
      ),
      description:
        "You receive 100% ownership of your software's source code upon project completion, ensuring full transparency and control.",
    },
  ],
  button: {
    label: 'TALK TO EXPERTS',
    href: '/contact',
  },
  image: {
    src: '/assets/images/taxi-app/hero-3.png',
    alt: 'about image five',
    width: 540,
    height: 578,
  },
};

type FeatureSectionProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export const features: FeatureSectionProps[] = [
  {
    title: 'Transportation Management',
    description:
      'Gain end-to-end visibility with logistics software development that automates carrier selection, load planning, and real-time shipment tracking.',
    icon: <Truck />,
  },
  {
    title: 'Route Optimization',
    description:
      'Our logistics software development company cuts fuel costs by dynamically choosing the fastest, most economical routes.',
    icon: <Route />,
  },
  {
    title: 'Fleet Management',
    description:
      'Monitor every vehicle’s health through software application development for logistics that fuses telematics with predictive maintenance.',
    icon: <Car />,
  },
  {
    title: 'Warehouse Management',
    description:
      'Streamline inbound and outbound workflows using logistics software development tuned for multi-warehouse coordination.',
    icon: <Warehouse />,
  },
  {
    title: 'Inventory Management',
    description:
      'Balance stock levels via software application development for logistics that syncs demand, supply, and replenishment in real time.',
    icon: <Boxes />,
  },
  {
    title: 'Asset Tracking',
    description:
      'Protect high-value goods worldwide with GPS-enabled logistics software development for 24/7 asset visibility.',
    icon: <MapPin />,
  },
  {
    title: 'Order Management',
    description:
      'Centralize orders from every channel on a single logistics software development company platform for faster fulfillment.',
    icon: <ShoppingCart />,
  },
  {
    title: 'Customer Experience',
    description:
      'Delight shippers and consignees with self-service portals built through software application development for logistics, offering live ETAs and status alerts.',
    icon: <Users />,
  },
  {
    title: 'Supply Chain Management (SCM)',
    description:
      'Integrate procurement, production, and delivery on one logistics software development backbone for true supply-chain orchestration.',
    icon: <Network />,
  },
  {
    title: 'Navigation & Real-Time Tracking',
    description:
      "Turn drivers' smartphones into smart copilots with software application development for logistics that provides live navigation and ETA updates.",
    icon: <Navigation2 />,
  },
  {
    title: 'Telematics & Connected Vehicles',
    description:
      'Harvest vehicle data in logistics software development company dashboards to improve safety and cut downtime.',
    icon: <Radio />,
  },
  {
    title: 'Delivery Management Solutions',
    description:
      'Ensure on-time, last-mile excellence through software application development for logistics that automates dispatch, proof-of-delivery, and feedback loops.',
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
      answer:
        'Logistics software automates operations, optimizes routes, tracks shipments, and improves overall efficiency.',
    },
    {
      question:
        'Can you integrate third-party services into my logistics software?',
      answer:
        'Yes, we integrate various third-party APIs, including payment gateways, GPS tracking, and warehouse management tools.',
    },
    {
      question:
        'How long does it take to develop a logistics software solution?',
      answer:
        'The development timeline varies based on requirements but typically ranges from a few weeks to a few months.',
    },
    {
      question: 'Is the software customizable according to my business needs?',
      answer:
        'Absolutely! We offer fully customizable solutions to match your specific logistics and supply chain requirements.',
    },
    {
      question: 'Do you provide post-deployment support and maintenance?',
      answer:
        'Yes, we offer continuous monitoring, updates, and technical support to ensure smooth operations.',
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

export const workflowSteps = [
  {
    id: 1,
    title: 'Discovery & Requirement Analysis',
    description:
      'As a leading logistics software development company, we begin by understanding your unique challenges and goals to tailor the perfect solution.',
  },
  {
    id: 2,
    title: 'Solution Design & Planning',
    description:
      'Our team creates a detailed blueprint, leveraging best practices in logistics software development to ensure scalability and efficiency.',
  },
  {
    id: 3,
    title: 'Agile Development & Iteration',
    description:
      'We apply agile principles to our software application development for logistics, delivering functional modules quickly and incorporating your feedback.',
  },
  {
    id: 4,
    title: 'Quality Assurance & Testing',
    description:
      'Robust testing protocols guarantee your logistics software is secure, reliable, and optimized for real-world logistics operations.',
  },
  {
    id: 5,
    title: 'Deployment & Integration',
    description:
      'Our experts deploy your custom solution smoothly, integrating with existing platforms to maintain seamless logistics workflows.',
  },
  {
    id: 6,
    title: 'Ongoing Support & Enhancement',
    description:
      'As your trusted logistics software development company, we provide continuous support and enhancements to keep your system future-ready.',
  },
];

// Tab data
export const tabs = [
  { id: 'admin', label: 'Admin Panel' },
  { id: 'driver', label: 'Driver/Fleet App' },
  { id: 'warehouse', label: 'Warehouse Module' },
  { id: 'customer', label: 'Customer Portal' },
] as const;

// Content for each tab
export const tabContent: Record<(typeof tabs)[number]['id'], TabContent> = {
  admin: {
    title: 'Admin Panel',
    description:
      'Techares is a logistics software development company that empowers admins with full control over supply chain and transport operations.',
    features: [
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Transportation Management"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Transportation Management',
        description:
          'Plan, track, and streamline operations with custom-built logistics software development solutions.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Fleet Management"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Fleet Management',
        description:
          'Monitor vehicles, schedules, and driver performance from a central dashboard.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Route Optimization"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Route Optimization',
        description:
          'Reduce delivery time and fuel usage with intelligent route planning.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Supply Chain Management"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Supply Chain Management (SCM)',
        description:
          'Integrate all supply chain activities using our tailored software application development for logistics.',
      },
    ],
    image: '/assets/images/taxi-app/user-feature.png',
  },
  driver: {
    title: 'Driver/Fleet App',
    description:
      'As part of our end-to-end logistics software development, we equip drivers with mobile tools for efficient, real-time operations.',
    features: [
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Navigation & Live Tracking"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Navigation & Live Tracking',
        description:
          'Enable GPS-based tracking and real-time updates for precise ETAs.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Telematics & Connected Vehicles"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Telematics & Connected Vehicles',
        description:
          'Leverage our software application development for logistics to gather and use vehicle health data.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Proof of Delivery"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Proof of Delivery (POD)',
        description:
          'Digitally capture signatures, photos, and confirmations on the spot.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Delivery Task Management"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Delivery Task Management',
        description:
          'Assign tasks and receive updates via the driver app, built by a top logistics software development company.',
      },
    ],
    image: '/assets/images/taxi-app/user-feature.png',
  },
  warehouse: {
    title: 'Warehouse Module',
    description:
      'Our logistics software development services optimize warehouse operations through automation and real-time visibility.',
    features: [
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Warehouse Management"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Warehouse Management',
        description:
          'Digitize picking, packing, and shipping processes for faster turnaround.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Inventory Management"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Inventory Management',
        description: 'Monitor stock in real time and automate replenishment.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Asset Tracking"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Asset Tracking',
        description:
          'Locate goods and equipment across facilities using GPS and RFID.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Demand Forecasting"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Demand Forecasting',
        description:
          'Use predictive analytics from our software application development for logistics to plan better.',
      },
    ],
    image: '/assets/images/taxi-app/user-feature.png',
  },
  customer: {
    title: 'Customer Portal',
    description:
      'We build intuitive portals through logistics software development that enhance customer satisfaction and transparency.',
    features: [
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Order Management"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Order Management',
        description:
          'Let clients place, manage, and track orders from a single interface.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Customer Experience Optimization"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Customer Experience Optimization',
        description:
          'Keep customers updated with real-time notifications and delivery insights.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Delivery Management"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Delivery Management',
        description:
          'Provide seamless coordination and live visibility into every delivery.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Support & Feedback"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Support & Feedback',
        description:
          'Enable two-way communication with helpdesk and feedback tools—powered by our logistics software development company expertise.',
      },
    ],
    image: '/assets/images/taxi-app/user-feature.png',
  },
};
