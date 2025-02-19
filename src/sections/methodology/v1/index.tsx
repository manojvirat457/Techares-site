'use client';

import { Methodology } from '@/data/methodology/v1';
import { motion } from 'framer-motion';

function MethodologyCard({
  number,
  title,
  description,
  icon,
  color,
  index,
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: {
    number: string;
    iconBg: string;
  };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group  relative overflow-hidden rounded-2xl bg-zinc-900/50 p-6 backdrop-blur-sm transition-colors hover:bg-zinc-900/70 sm:w-full md:w-[32%]"
    >
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div
            className={`h-16 w-16 rounded-full ${color.iconBg} grid place-items-center`}
          >
            {/* <Icon className="w-6 h-6 text-white" /> */}
            {icon}
          </div>
          <span className={`text-3xl font-bold ${color.number}`}>{number}</span>
        </div>
        <div className="space-y-2 leading-9">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="leading-relaxed text-zinc-400">{description}</p>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
    </motion.div>
  );
}

export default function MethodologiesSection({
  methodologies,
  heading,
}: {
  methodologies: Methodology[];
  heading: {
    title: string;
    highlightedTitle?: string;
  };
}) {
  return (
    <section className="bg-zinc-950 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-2 text-xl font-bold md:text-2xl">
            {heading.title}{' '}
            {heading.highlightedTitle && (
              <span className="text-primary-light">
                {heading.highlightedTitle}
              </span>
            )}
          </h2>
        </div>

        <div className="mx-5 flex flex-wrap content-start justify-center gap-6">
          {methodologies.map((methodology, index) => (
            <MethodologyCard
              key={methodology.id}
              number={methodology.number}
              title={methodology.title}
              description={methodology.description}
              icon={methodology.icon}
              color={methodology.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
