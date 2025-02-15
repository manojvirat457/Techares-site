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
   className="flex flex-col items-center justify-center md:w-[45%] lg:w-[23.5%] w-full h-auto  transition-transform hover:scale-105"
  >
   <Card key={index} className="bg-zinc-900  border-zinc-800 h-full w-full  justify-center text-center items-center">
    <CardContent className="p-6 flex  gap-5 flex-col  justify-center items-center">
     {/* <div className="mb-4 text-primary">
      {icon}
      </div> */}
     <Image src={icon || "/placeholder.svg"} alt={title} height={70} width={70} className="object-contain" />
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

export default function IndustriesSection({ industriesSectionData }: {
 industriesSectionData: IndustriesSectionData;
 itemsPerRow: number;
}) {
 // Calculate the number of items in the last row
 // const itemsPerRow = 4; // On desktop

 return (
  <section className="bg-zinc-950 py-20 px-4">
   <div className="max-w-screen-2xl mx-auto">
    <div className="text-center mb-16">
     <h2 className="text-xl md:text-2xl font-bold ">
      <span className="text-primary">{industriesSectionData.highlightTitle}</span> <span className="text-white">{industriesSectionData.title}</span>
     </h2>
     <p className="text-zinc-400 max-w-2xl mx-auto mb-6">
      {industriesSectionData.description}
     </p>
     {
      industriesSectionData?.detailedDescription && <>
       <p className="mt-11 mx-auto">
        {industriesSectionData.detailedDescription}
       </p>
      </>
     }
    </div>

    <div
     className={`flex flex-wrap  gap-7 content-start justify-center mt-10`}
    >
     {industriesSectionData.data.map((industry, index) => (
      <IndustryCard title={industry.title} icon={industry.icon} index={index} description={industry?.description} key={index} />
     ))}
    </div>
   </div>
  </section>
 );
}

