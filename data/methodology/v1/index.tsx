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
    title: 'Discovery and Requirement Gathering',
    description:
      'In-depth analysis of your business needs to set clear, actionable goals.',
    icon: <Clock size={30} />,
    color: {
      number: 'text-emerald-400',
      iconBg: 'bg-emerald-900/50',
    },
  },
  {
    id: 'planning',
    number: '02',
    title: 'Planning and Strategy',
    description:
      'Mapping user journeys and selecting optimal technologies to build the right solutions.',
    icon: <Users size={30} />,
    color: {
      number: 'text-primary',
      iconBg: 'bg-blue-900/50',
    },
  },
  {
    id: 'development',
    number: '03',
    title: 'Development and Coding',
    description:
      'Delivering robust, scalable solutions with innovative coding practices.',
    icon: <Code2 size={30} />,
    color: {
      number: 'text-cyan-400',
      iconBg: 'bg-cyan-900/50',
    },
  },
  {
    id: 'testing',
    number: '04',
    title: 'Testing and Quality Assurance',
    description:
      'Ensuring flawless performance through rigorous, end-to-end testing.',
    icon: <Crown size={30} />,
    color: {
      number: 'text-yellow-400',
      iconBg: 'bg-yellow-900/50',
    },
  },
  {
    id: 'deployment',
    number: '05',
    title: 'Deployment and Launch',
    description:
      'Seamlessly deploying your product, ensuring optimal functionality and readiness for users.',
    icon: <Calendar size={30} />,
    color: {
      number: 'text-red-400',
      iconBg: 'bg-red-900/50',
    },
  },
];
