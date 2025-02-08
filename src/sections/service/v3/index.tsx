"use client";

import { MessageCircleQuestionIcon as QuestionMarkCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/src/components/ui/card";
import { ServiceDetail, servicesData } from "@/data/service-section/v3";
import Image from "next/image";


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
   className="h-full"
  >
   <Card className="bg-zinc-900/50  border-zinc-800 h-full">
    <div className="p-6 space-y-2">
     <h3 className="text-md font-bold leading-[1.25] text-accent-900 dark:text-white md:text-lg">{title}</h3>
     <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
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

function ServiceItem({ title, description, isActive, onClick, icon }: ServiceItemProps) {
 console.log("🚀 ~ ServiceItem ~ icon:", icon);
 return (
  <button
   onClick={onClick}
   className={`w-full text-left flex items-center gap-3 p-4 rounded-lg transition-all ${isActive ? "bg-blue-600" : "hover:bg-zinc-800"
    }`}
  >
   <div className="w-12 h-12 rounded-full bg-zinc-700 grid place-items-center flex-shrink-0">
    <Image src={icon} width={32} height={32} alt="icon" />
    {/* <QuestionMarkCircle className="w-5 h-5 text-zinc-300" /> */}
   </div>
   <div className="flex flex-col">
    <span className="text-white text-md font-bold leading-[1.25] dark:text-white md:text-lg">{title}</span>
    <span className="text-zinc-400 text-sm hidden md:block">{description}</span>
   </div>
  </button>
 );
}

export default function ServicesSection() {
 const [activeService, setActiveService] = useState<string>("Custom Software Development");

 const currentService: ServiceDetail = servicesData[activeService];

 return (
  <div className="min-h-screen bg-zinc-950 p-4 md:p-8">
   <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
     {/* Left Column */}
     <div className="space-y-4">
      <h2 className="text-xl md:text-2xl font-bold text-white">
       Our <span className="text-blue-500">Services</span>
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
       <p className="text-zinc-400 mb-8">{currentService.mainDescription}</p>
       {/*
       <div className="grid sm:grid-cols-2 gap-4">
        {currentService.cards.map((card, index) => (
         <ServiceCard key={`${activeService}-${index}`} title={card.title} description={card.description} />
        ))}
       </div> */}
       <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-center gap-6">
         {currentService.cards.map((service, index) => (
          <div
           key={index}
           className={`w-full sm:w-[calc(50%-12px)] ] ${currentService.cards.length === 5 && index === currentService.cards.length - 1
            ? "sm:w-[calc(100%-24px)] ]"
            : ""
            }`}
          >
           <ServiceCard title={service.title} description={service.description} />
          </div>
         ))}
        </div>
       </div>
      </motion.div>
     </AnimatePresence>
    </div>
   </div>
  </div>
 );
}

