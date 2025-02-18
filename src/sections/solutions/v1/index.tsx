"use client";

import { solutions } from "@/data/solution-section/v1";
import { CustomLink } from "@/src/components/custom-link";
import { Card } from "@/src/components/ui/card";
import { useScreenSize } from "@/src/hooks/use-screen-size";
import { motion } from "framer-motion";
import { AppWindowIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface CategoryButtonProps {
 title: string;
 isActive: boolean;
 onClick: () => void;
 icon?: React.ReactNode;
}

function CategoryButton({ title, isActive, onClick }: CategoryButtonProps) {
 return (
  <button
   onClick={onClick}
   className={`w-full p-4 rounded-lg transition-all text-left ${isActive ? "bg-primary text-white" : "bg-white text-accent-900 hover:bg-zinc-100"
    }`}
  >
   {title}
  </button>
 );
}


function CategoryCard({ title, isActive, onClick }: CategoryButtonProps) {
 return (
  <Card
   onClick={onClick}
   className={`p-2 rounded-lg h-16 transition-all flex w-[33%] justify-center items-center   text-center ${isActive ? "bg-primary text-white" : "bg-white text-accent-900 "}`}
  >
   <p className="text-xs text-center">
    {title}
   </p>
  </Card>
 );
}


interface SolutionCardProps {
 title: string;
 description: string;
 icon: string;
 href?: string;
}

function SolutionCard({ title, description, icon, href }: SolutionCardProps) {
 return (
  <CustomLink href={href ?? '/'} >
   <div className="p-6 rounded-lg bg-zinc-900/50 space-y-2">
    <div className="relative w-16 h-16 mb-4">
     <Image src={icon || "/placeholder.svg"} alt={title} height={70} width={70} className="object-contain" />
    </div>
    <h3 className="text-xl font-semibold leading-[1.2] text-white">{title}</h3>
    <p className="text-zinc-400 leading-relaxed">{description}</p>
   </div>
  </CustomLink>
 );
}

export default function SolutionsSection() {
 const [activeCategory, setActiveCategory] = useState("on-demand");
 const screenSize = useScreenSize();
 const sectionRefs = {
  "on-demand": useRef<HTMLDivElement>(null),
  erp: useRef<HTMLDivElement>(null),
  analytics: useRef<HTMLDivElement>(null),
 };

 useEffect(() => {
  const observers = Object.entries(sectionRefs).map(([category, ref]) => {
   const observer = new IntersectionObserver(
    (entries) => {
     entries.forEach((entry) => {
      if (entry.isIntersecting) {
       setActiveCategory(category);
      }
     });
    },
    {
     rootMargin: "-20% 0px -20% 0px", // Reduced margin to make highlighting more responsive
     threshold: 0.3, // Reduced threshold for earlier triggering
    },
   );

   if (ref.current) {
    observer.observe(ref.current);
   }

   return observer;
  });

  return () => {
   observers.forEach((observer) => observer.disconnect());
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);

 const scrollToSection = (category: string) => {
  sectionRefs[category as keyof typeof sectionRefs].current?.scrollIntoView({
   behavior: "smooth",
   block: "center", // Centers the section in the viewport
  });
 };

 const categories = [
  { id: "on-demand", title: "On-Demand Applications", icon: <AppWindowIcon /> },
  { id: "erp", title: "ERP Systems", icon: <AppWindowIcon /> },
  { id: "analytics", title: "Data Analytics", icon: <AppWindowIcon /> },
 ];

 return (
  <div className="min-h-screen bg-[#141416] p-4  py-20">
   <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xs:mt-10">
     {/* Solutions Info - Reordered for mobile */}
     <div className="lg:sticky lg:top-8 h-max space-y-6 order-1 lg:order-2">
      <div>
       <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
        Our <span className="text-primary">Solutions</span>
       </h2>
       <p className="text-zinc-400 mb-8">
        Quick and customizable software solutions designed for businesses requiring immediate deployment and
        scalability. Our on-demand applications cater to a variety of industries with a focus on user-centric
        designs and seamless functionality.
       </p>
      </div>

      <div className="flex md:flex-col gap-4 ">
       {categories.map(({ id, title, icon }) => (
        !screenSize.equals('xs') ? <CategoryButton
         key={id}
         title={title}
         isActive={activeCategory === id}
         onClick={() => scrollToSection(id)}
        /> : <CategoryCard
         key={id}
         title={title}
         icon={icon}
         isActive={activeCategory === id}
         onClick={() => scrollToSection(id)}
        />
       ))}
      </div>
     </div>

     {/* Solutions Cards - Reordered for mobile */}
     <div className="order-2 lg:order-1">
      <div className="space-y-6 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-primary max-h-[60vh] lg:max-h-[70vh] overflow-y-auto pr-4 scroll-smooth">
       {categories.map(({ id }) => (
        <div key={id} ref={sectionRefs[id as keyof typeof sectionRefs]} className="space-y-4">
         {solutions
          .filter((solution) => solution.category === id)
          .map((solution, index) => (
           <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
           >
            <SolutionCard {...solution} />
           </motion.div>
          ))}
        </div>
       ))}
      </div>
     </div>
    </div>
   </div>
  </div >
 );
}

