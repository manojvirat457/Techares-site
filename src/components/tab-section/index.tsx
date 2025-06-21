'use client';

import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import type { SectionHeadingProps } from '@/src/components/section-heading/interface';
import { cn } from '@/src/utils/shadcn';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface Tab<T extends string = string> {
  id: T;
  label: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface TabContent {
  title: string;
  description?: string;
  features: Feature[];
  image?: string;
}

export function TabSection<T extends string>({
  heading,
  tabs,
  tabContent,
  defaultActiveTab,
  className,
}: {
  heading?: SectionHeadingProps;
  tabs: readonly Tab<T>[];
  tabContent: Record<T, TabContent>;
  defaultActiveTab?: T;
  className?: string;
}) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);

  return (
    <section
      className={cn('mx-auto max-w-6xl px-8 py-12 md:px-0 md:py-16', className)}
    >
      <Container isNoPadding>
        {heading && <SectionHeading {...heading} className="mb-12" />}
        <div className="relative mb-8 pb-1">
          <div className="relative z-10 grid grid-cols-2 gap-3 divide-x divide-gray-300 md:flex md:justify-center md:space-x-16 md:divide-x-0">
            {tabs.map((tab, idx) => {
              const isLastOdd =
                tabs.length % 2 === 1 && idx === tabs.length - 1;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  type="button"
                  className={`inline-block w-full transform rounded-none px-4 py-2 text-sm font-medium transition-colors duration-200 md:w-auto md:rounded-t-full md:text-base
              ${
                activeTab === tab.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-400 dark:hover:bg-zinc-700'
              }
              ${isLastOdd ? 'col-span-2 justify-self-center' : ''}
            `}
                  style={{
                    borderRight: idx === tabs.length - 1 ? 'none' : undefined,
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-20 hidden h-[2px] translate-y-[-4px] bg-gray-200 dark:bg-gray-700 md:block" />
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
              {tabContent[activeTab].description && (
                <p className="text-gray-600">
                  {tabContent[activeTab].description}
                </p>
              )}
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
      </Container>
    </section>
  );
}
