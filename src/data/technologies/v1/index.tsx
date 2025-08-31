import { Layout, Code2, Smartphone, Database } from 'lucide-react';
export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'database';
}

export interface TechnologyCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  technologies: string[];
}

export const techCategory: TechnologyCategory[] = [
  {
    id: 'frontend',
    title: 'Front End',
    icon: <Layout className="h-6 w-6 text-white" />,
    technologies: ['React', 'Next.js', 'Vue.js', 'Angular'],
  },
  {
    id: 'backend',
    title: 'Back End',
    icon: <Code2 className="h-6 w-6 text-white" />,
    technologies: ['Node.js', 'Python', 'Java', 'Go'],
  },
  {
    id: 'mobile',
    title: 'Mobile App',
    icon: <Smartphone className="h-6 w-6 text-white" />,
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    id: 'database',
    title: 'Database',
    icon: <Database className="h-6 w-6 text-white" />,
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
  },
];
