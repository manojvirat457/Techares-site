import { Container } from '@/src/components/container/index.tsx';
import { AboutSection } from '@/src/sections/about/v1';
import FAQSection from '@/src/sections/faq/index.tsx';
import { HeroSection } from '@/src/sections/hero/v4/index.tsx';
import MethodologiesSection from '@/src/sections/methodology/v1';
import { ProjectSection } from '@/src/sections/project/v3';
import { ServiceSection } from '@/src/sections/service/v1/index.tsx';
import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { basicMetadata } from '@/src/utils/metadata';
import { cn } from '@/src/utils/shadcn.ts';
import {
  faqSectionData,
  features,
  latestUpdate,
  methodologies,
  projectDetails,
  whyChooseSectionData,
} from './-data.tsx';

export const metadata = basicMetadata({
  title: 'TechAres | Transport and Logistics Software Development Company',
  description:
    'Smart logistics solutions for a fast-paced world. Streamline operations with our cutting-edge transport and logistics software development services.',
});

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        'group/feature relative flex  flex-col py-10 dark:border-neutral-800 lg:border-r',
        (index === 0 || index === 4) && 'dark:border-neutral-800 lg:border-l',
        index < 4 && 'dark:border-neutral-800 lg:border-b'
      )}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      <div className="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-500 dark:bg-neutral-700" />
        <span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-10 text-sm text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
    </div>
  );
};

export default function Page() {
  return (
    <>
      <HeroSection
        backgroundImage={'/assets/images/hero/hero-1.webp'}
        description="Streamline your logistics operations with Techares! Our cutting-edge logistics software development services automate workflows, enhance efficiency, and drive seamless supply chain management—built for businesses that never slow down."
        title="Smart Logistics Solutions for a Fast-Paced World"
        button={{
          href: '',
          label: 'Get Quote',
          openNewTab: true,
        }}
      />
      <ProjectSection projectDetails={projectDetails} />
      {/* Solution We offer */}
      <section>
        <h2 className="mb-2 text-center text-xl font-bold md:text-2xl">
          <span className="text-primary-light">{'Solution'}</span>
          {'We Offer'}
        </h2>
        <div className="relative z-10 mx-auto grid  max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </section>
      {/* Services Section */}

      <section>
        <Container>
          <div className="mb-12 text-center  text-white">
            <h2 className="mb-4 text-3xl font-bold">Latest Updates</h2>
            <p className="mx-auto max-w-2xl text-zinc-300">
              Continuous enhancements for better security, efficiency, and
              insights
            </p>
          </div>
          <ServiceSection className="!pt-0" {...latestUpdate} />
        </Container>
      </section>

      {/* Testimonial Section */}
      <TestimonialSection />
      {/* Development Process */}
      <MethodologiesSection
        methodologies={methodologies}
        heading={{
          title: 'Our Development',
          highlightedTitle: 'Process',
        }}
      />

      {/* Why Choose Us Section */}
      <AboutSection aboutSectionData={whyChooseSectionData} />
      {/* FAQ Section */}
      <FAQSection faqSectionData={faqSectionData} />
    </>
  );
}
