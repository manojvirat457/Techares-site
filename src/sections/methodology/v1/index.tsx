"use client";

import { methodologies } from "@/data/methodology/v1";
import { motion } from "framer-motion";

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
   className="bg-zinc-900/50  md:w-[32%] sm:w-full backdrop-blur-sm rounded-2xl p-6 relative overflow-hidden group hover:bg-zinc-900/70 transition-colors"
  >
   <div className="space-y-4">
    <div className="flex items-center gap-4">
     <div className={`w-16 h-16 rounded-full ${color.iconBg} grid place-items-center`}>
      {/* <Icon className="w-6 h-6 text-white" /> */}
      {icon}
     </div>
     <span className={`text-3xl font-bold ${color.number}`}>{number}</span>
    </div>
    <div className="space-y-2 leading-9">
     <h3 className="text-xl font-semibold text-white">{title}</h3>
     <p className="text-zinc-400 leading-relaxed">{description}</p>
    </div>
   </div>

   {/* Gradient overlay */}
   <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent via-white/5 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
  </motion.div>
 );
}

export default function MethodologiesSection() {
 return (
  <section className="bg-zinc-950 py-20">
   <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
     <h2 className="text-xl md:text-2xl font-bold mb-2">
      Our Development <span className="text-primary-light">Methodologies</span>
     </h2>
    </div>

    <div className="gap-6 flex flex-wrap content-start justify-center mx-5">
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

