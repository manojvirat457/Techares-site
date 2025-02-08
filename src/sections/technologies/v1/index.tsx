import { SectionProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import { Layout, Code2, Smartphone, Database } from "lucide-react";
import { techCategory } from '@/data/technologies/v1';
export interface CtaSectionProps {
 title: string;
}

const icons = {
 [Layout.name]: Layout,
 [Code2.name]: Code2,
 [Smartphone.name]: Smartphone,
 [Database.name]: Database,
};

const ctaSectionData: CtaSectionProps = {
 title: 'Technologies We Use',
};


function TechnologyCard({
 title,
 icon,
 technologies,
}: {
 title: string;
 icon: string;
 technologies: string[];
 index: number;
}) {
 const Icon = icons[icon as keyof typeof icons];

 return (
  <div className="bg-blue-800/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-blue-800/30 transition-colors">
   <div className="space-y-4">
    <div className="flex items-center gap-4">
     <div className="w-12 h-12 rounded-lg bg-blue-600/20 grid place-items-center">
      <Icon className="w-6 h-6 text-white" />
     </div>
     <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap justify-center gap-2">
     {technologies.map((tech) => (
      <span
       key={tech}
       className="px-3 py-1 rounded-full bg-blue-300/20 text-sm text-white hover:bg-blue-300/30 transition-colors"
      >
       {tech}
      </span>
     ))}
    </div>
   </div>
  </div>
 );
}


export function TechnologiesSection({ className }: SectionProps) {
 const { title } = ctaSectionData;
 return (
  <section className={cn(className)}>
   <Container isFluid={true}>
    <div className="relative  overflow-hidden rounded-5 bg-primary px-6 py-14">
     <div className="relative z-10 mx-auto rounded-5  text-center">
      <h2 className="mx-auto max-w-[490px] pb-16 font-secondary text-xl font-bold capitalize leading-[1.25] text-white md:text-2xl">
       {title}
      </h2>
      <div className="grid gap-6 mx-auto md:mx-40 sm:grid-cols-2 lg:grid-cols-4">
       {techCategory.map((category, index) => (
        <TechnologyCard
         key={category.id}
         title={category.title}
         icon={category.icon}
         technologies={category.technologies}
         index={index}
        />
       ))}
      </div>
     </div>
     <Image
      src="/assets/images/cta/pattern-1.png"
      alt="cta section bg pattern"
      width={520}
      height={316}
      className="pointer-events-none absolute -right-30px bottom-0 z-1 h-full animate-float-bob-x object-cover opacity-60"
      sizes="100vw"
     />
    </div>
   </Container>
  </section>
 );
}
