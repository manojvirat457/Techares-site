'use client';

import { Container } from '@/src/components/container';
import { SectionHeading, } from '@/src/components/section-heading';
import type { SectionHeadingProps } from '@/src/components/section-heading/interface';
import { cn } from '@/src/utils/shadcn';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface Tab {
  id: string;
  label: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TabContent {
  title: string;
  features: Feature[];
  image?: string;
}

interface TabSectionProps {
  heading?: SectionHeadingProps;
  tabs: Tab[];
  tabContent: Record<string, TabContent>;
  defaultActiveTab?: string;
  className?: string;
}

export function TabSection({
  heading,
  tabs,
  tabContent,
  defaultActiveTab,
  className,
}: TabSectionProps) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);

  return (
    <Container>
    <section className={cn('mx-auto max-w-6xl py-12 md:py-16', className)}>
      {heading && <SectionHeading {...heading} className="mb-12" />}
      <div className="relative mb-8 pb-1">
        <div className="relative z-10 flex justify-center space-x-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              type="button"
              className={`relative transform rounded-t-full px-6 py-1 text-sm font-medium transition-colors duration-200 md:text-base ${
                activeTab === tab.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-400 dark:hover:bg-zinc-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20 h-[2px] translate-y-[-4px] bg-gray-200 dark:bg-gray-700" />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid items-center gap-8 md:grid-cols-2"
        >
          <div className="space-y-4">
            <SectionHeading
              title={tabContent[activeTab].title}
              alignment="start"
              size="sm"
            />
            <div className="space-y-4">
              {tabContent[activeTab].features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 pb-4"
                >
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-primary">
                      {feature.title}
                    </h4>
                    <p>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <Image
              src={tabContent[activeTab].image || '/placeholder.svg'}
              alt={`${tabContent[activeTab].title} illustration`}
              width={500}
              height={500}
              className="rounded-lg"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
    </Container>
  );
}
