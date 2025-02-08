"use client";

import { industriesSectionData } from "@/data/industries/v1";
import { Card, CardContent } from "@/src/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

function IndustryCard({ title, icon, index, description }: { title: string; icon: string; index: number; description?: string; }) {
 return (
  <motion.div
   initial={{ opacity: 0, y: 20 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ delay: index * 0.1 }}
   className="flex flex-col items-center justify-center  md:w-[23.5%] w-full h-auto  transition-transform hover:scale-105"
  >
   <Card key={index} className="bg-zinc-900  border-zinc-800 h-full w-full">
    <CardContent className="p-6">
     {/* <div className="mb-4 text-blue-500">
      {icon}
      </div> */}
     <div className="relative w-16 h-16 mb-4">
      <Image src={icon || "/placeholder.svg"} alt={title} height={70} width={70} className="object-contain" />
     </div>
     <h3 className="mb-2 text-md font-bold leading-[1.25] text-accent-900 dark:text-white md:text-lg">{title}</h3>
     {description &&
      <p className="text-gray-400 text-sm">{description}</p>
     }
    </CardContent>
   </Card>
  </motion.div>
 );
}

type IndustriesSectionData = typeof industriesSectionData;

export default function IndustriesSection({ industriesSectionData, itemsPerRow }: {
 industriesSectionData: IndustriesSectionData;
 itemsPerRow: number;
}) {
 // Calculate the number of items in the last row
 const totalItems = industriesSectionData.data.length;
 // const itemsPerRow = 4; // On desktop
 const itemsInLastRow = totalItems % itemsPerRow;
 const shouldCenter = itemsInLastRow > 0;

 return (
  <section className="bg-zinc-950 py-20 px-4 md:px-8">
   <div className="max-w-screen-2xl mx-auto">
    <div className="text-center mb-16">
     <h2 className="text-xl md:text-2xl font-bold">
      <span className="text-blue-500">{industriesSectionData.highlightTitle}</span> <span className="text-white">{industriesSectionData.title}</span>
     </h2>
     <p className="text-zinc-400 max-w-2xl mx-auto">
      {industriesSectionData.description}
     </p>
     {
      industriesSectionData.detailedDescription && <>
       <p className="mt-11 mx-auto">
        {industriesSectionData.detailedDescription}
       </p>
      </>
     }
    </div>

    <div
     className={`flex flex-wrap  gap-7 content-start justify-center`}
    >
     {industriesSectionData.data.map((industry, index) => (
      <IndustryCard title={industry.title} icon={industry.icon} index={index} description={industry?.description} key={index} />
     ))}
    </div>
   </div>
  </section>
 );
}

