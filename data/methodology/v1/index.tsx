import { Clock, Users, Code2, Crown, Calendar } from 'lucide-react';
export interface Methodology {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: {
    number: string;
    iconBg: string;
  };
}

export const methodologies: Methodology[] = [
  {
    id: 'discovery',
    number: '01',
    title: 'Requirement Analysis',
    description:
      'We begin by understanding your business needs, target audience, and market goals. Our team gathers technical and functional requirements to define the app’s scope and features. This ensures a tailored solution that aligns with your business objectives.',
    icon: <Clock size={30} />,
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
      'Our designers create intuitive wireframes and prototypes for a seamless user experience. We focus on smooth navigation, appealing visuals, and easy ordering to enhance customer engagement. The design is optimized for both iOS and Android platforms.',
    icon: <Users size={30} />,
    color: {
      number: 'text-primary',
      iconBg: 'bg-blue-900/50',
    },
  },
  {
    id: 'development',
    number: '03',
    title: 'App Development',
    description:
      'Our developers build the frontend, backend, and integrate third-party APIs using the latest technologies. We follow an agile development approach, ensuring high performance, scalability, and security. The app is developed to support seamless ordering, tracking, and payments',
    icon: <Code2 size={30} />,
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
      'We conduct rigorous testing to ensure the app is bug-free, secure, and responsive. Our QA team performs functional, performance, and security tests for a flawless user experience. The goal is to deliver a stable and reliable application.',
    icon: <Crown size={30} />,
    color: {
      number: 'text-yellow-400',
      iconBg: 'bg-yellow-900/50',
    },
  },
  {
    id: 'deployment',
    number: '05',
    title: 'Deployment & Maintenance',
    description:
      'Once tested, we launch the app on Google Play Store and Apple App Store. Post-launch, we provide regular updates, bug fixes, and performance optimizations. Our team ensures continuous support to keep your app running smoothly.',
    icon: <Calendar size={30} />,
    color: {
      number: 'text-red-400',
      iconBg: 'bg-red-900/50',
    },
  },
];
