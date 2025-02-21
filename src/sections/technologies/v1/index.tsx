import { techCategory } from '@/data/technologies/v1/index';
import { SectionProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
export interface CtaSectionProps {
  title: string;
}
const ctaSectionData: CtaSectionProps = {
  title: 'Technologies We Use',
};

function TechnologyCard({
  title,
  icon,
  technologies,
}: {
  title: string;
  icon: React.ReactNode;
  technologies: string[];
  index: number;
}) {
  return (
    <div className="rounded-2xl bg-blue-800/20 p-6 backdrop-blur-sm transition-colors hover:bg-blue-800/30">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-lg bg-blue-600/20">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-300/20 px-3 py-1 text-sm text-white transition-colors hover:bg-blue-300/30"
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
            <div className="grid gap-6 sm:grid-cols-2 md:mx-20 lg:grid-cols-4">
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
            src="/assets/images/cta/pattern-1.webp"
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
