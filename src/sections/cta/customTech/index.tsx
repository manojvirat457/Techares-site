"use client";

import { SectionProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { cn } from '@/src/utils/shadcn';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Smartphone } from 'lucide-react';
import Image from 'next/image';

export interface CtaSectionProps {
  title: string;
}

const ctaSectionData: CtaSectionProps = {
  title: 'Technologies',
};

const technologies = [
  {
    category: 'Front End',
    icon: Layout,
    stack: ['React', 'Next.js', 'Vue.js', 'Angular'],
    color: 'text-blue-500',
  },
  {
    category: 'Back End',
    icon: Code2,
    stack: ['Node.js', 'Python', 'Java', 'Go'],
    color: 'text-green-500',
  },
  {
    category: 'Mobile App',
    icon: Smartphone,
    stack: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    color: 'text-purple-500',
  },
  {
    category: 'Database',
    icon: Database,
    stack: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
    color: 'text-orange-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const stackItemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export function CtaSection({ className }: SectionProps) {
  const { title } = ctaSectionData;

  return (
    <section className={cn(className)}>
      <Container>
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 px-6 py-14">
          <div className="relative z-10 mx-auto max-w-[1200px] text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto mb-6 text-xl font-bold capitalize leading-tight text-white md:text-3xl"
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mx-auto mb-12 max-w-2xl text-md text-blue-100"
            >
              Huge Spectrum of Next-Gen Technologies Under One Roof. Leverage our
              in-depth technical expertise to bring your stunning ideas to life.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.category}
                  variants={itemVariants}
                  className="group relative rounded-xl bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  <div className="mb-4 flex justify-center">
                    <tech.icon className={cn("h-12 w-12", tech.color)} />
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-white">
                    {tech.category}
                  </h3>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap justify-center gap-2"
                  >
                    {tech.stack.map((item) => (
                      <motion.span
                        key={item}
                        variants={stackItemVariants}
                        className="rounded-full bg-white/20 px-3 py-1 text-sm text-white"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <Image
            src="/assets/images/cta/pattern-1.png"
            alt="cta section bg pattern"
            width={520}
            height={316}
            className="pointer-events-none absolute -right-30px bottom-0 z-1 h-full animate-float-bob-x object-cover opacity-20"
            sizes="100vw"
          />
        </div>
      </Container>
    </section>
  );
}