'use client';

import { ServiceData, ServiceDetail } from '@/data/service-section/v3';
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { Card } from '@/src/components/ui/card';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
}

function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="h-full w-full border border-dashed border-gray-400"
    >
      <Card className="h-full w-full border-zinc-200/50 bg-transparent dark:border-zinc-900/50 dark:bg-zinc-800 ">
        <div className="h-100 space-y-2  p-6">
         <SectionHeading title={title} description={description} size="xs" />
          {/* <h3 className="text-md font-bold leading-[1.25] text-zinc-900 dark:text-white md:text-lg">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
            {description}
          </p> */}
        </div>
      </Card>
    </motion.div>
  );
}

interface ServiceItemProps {
  title: string;
  description: string;
  isActive?: boolean;
  icon: string;
  onClick: () => void;
}

function ServiceItem({
  title,
  description,
  isActive,
  onClick,
  icon,
}: ServiceItemProps) {
  return (
    <button
      onClick={onClick}
      className={`mt-8 flex w-5/6 items-center gap-3 rounded-lg p-4 text-left transition-all ${
        isActive
          ? 'gradient-bg-tab'
          : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'
      }`}
    >
      <div className="h-100 grid h-12 w-12 flex-shrink-0 place-items-center">
        <Image src={icon} width={32} height={32} alt="icon" />
      </div>
      <div className="flex flex-col">
      <h2 className="text-md font-bold leading-[1.25] text-zinc-900 dark:text-white md:text-lg">
            {title}
      </h2>
        <span
          className={`${
            isActive
              ? 'text-zinc-900 dark:text-stone-500'
              : 'text-zinc-600 dark:text-stone-300'
          } mt-2 hidden text-sm md:block`}
        >
          {description}
        </span>
      </div>
    </button>
  );
}

export default function ServicesSection({
  servicesData,
  title,
}: {
  servicesData: ServiceData;
  title: {
    title?: string;
    highlightedTitle?: string;
  };
}) {
  const [activeService, setActiveService] = useState<string>(() => {
    return Object.keys(servicesData)[0];
  });
  const currentService: ServiceDetail = servicesData[activeService];

  return (
    <div className="section-padding-primary  gradient-bg-section min-h-screen dark:bg-zinc-950">
      <Container isFluid={false} isNoPadding={false}>
        <div className="mx-4 max-w-[95rem] lg:mx-auto">
          <div className="grid gap-2 lg:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white md:text-2xl">
                {title.title && title.title}{' '}
                {title.highlightedTitle && (
                  <span className="text-primary">{title.highlightedTitle}</span>
                )}
              </h2>
              <div className="space-y-2">
                {Object.entries(servicesData).map(([key, service]) => (
                  <ServiceItem
                    key={key}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    isActive={activeService === key}
                    onClick={() => setActiveService(key)}
                  />
                ))}
              </div>
            </div>
            {/* Right Column */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <p className="mb-8 text-zinc-600 dark:text-accent-800">
                  {currentService.mainDescription}
                </p>
                <div className="container mx-auto">
                  <div className="flex flex-wrap justify-center gap-6">
                    {currentService.cards.map((service, index) => (
                      <div
                        key={index}
                        className={`${
                          currentService.cards.length === 5 &&
                          index === currentService.cards.length - 1
                            ? ''
                            : '] w-full sm:w-[calc(50%-12px)]'
                        }`}
                      >
                        <ServiceCard
                          title={service.title}
                          description={service.description}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </div>
  );
}
