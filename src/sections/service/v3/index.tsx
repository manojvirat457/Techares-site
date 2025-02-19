'use client';

import { ServiceData, ServiceDetail } from '@/data/service-section/v3';
import { Container } from '@/src/components/container';
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
   className="h-full w-full"
  >
   <Card className="h-full  w-full border-zinc-900/50 bg-zinc-800">
    <div className="space-y-2 p-6">
     <h3 className="text-md font-bold leading-[1.25] text-accent-900 dark:text-white md:text-lg">
      {title}
     </h3>
     <p className="text-sm leading-relaxed text-zinc-500">{description}</p>
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
   className={`flex w-5/6 items-center gap-3 rounded-lg p-4 text-left transition-all ${isActive ? 'bg-primary-light' : 'hover:bg-zinc-800'
    }`}
  >
   <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full bg-zinc-700">
    <Image src={icon} width={32} height={32} alt="icon" />
    {/* <QuestionMarkCircle className="w-5 h-5 text-zinc-300" /> */}
   </div>
   <div className="flex flex-col">
    <h2 className="text-md font-bold leading-[1.25] text-white dark:text-white md:text-lg">
     {title}
    </h2>
    <span
     className={`${isActive ? 'text-accent-100 ' : 'text-accent-300'
      } hidden text-sm md:block`}
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
  <div className="min-h-screen bg-zinc-950  py-20">
   <Container isFluid={false} isNoPadding={false}>
    <div className="mx-4 max-w-[95rem] lg:mx-auto">
     <div className="grid gap-8 lg:grid-cols-2 ">
      {/* Left Column */}
      <div className="space-y-4">
       <h2 className="text-xl font-bold text-white md:text-2xl">
        {title.title && title.title}{' '}
        {title.highlightedTitle && (
         <span className="text-primary">
          {title.highlightedTitle}
         </span>
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
        {/* <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{currentService.title}</h2> */}
        <p className="mb-8 text-accent-800">
         {currentService.mainDescription}
        </p>
        {/*
       <div className="grid sm:grid-cols-2 gap-4">
       {currentService.cards.map((card, index) => (
        <ServiceCard key={`${activeService}-${index}`} title={card.title} description={card.description} />
        ))}
        </div> */}
        <div className="container mx-auto px-4">
         <div className="flex flex-wrap justify-center gap-6">
          {currentService.cards.map((service, index) => (
           <div
            key={index}
            className={`${currentService.cards.length === 5 &&
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
