import {
  tabContent,
  tabs,
  workflowSteps,
} from '@/app/project/transport-and-logistic/-data.tsx';
import { Container } from '@/src/components/container/index.tsx';
import { SectionHeading } from '@/src/components/section-heading/index.tsx';
import { TabSection } from '@/src/components/tab-section/index.tsx';
import { WorkflowSection } from '@/src/components/workflow-section/index.tsx';
import FAQSection from '@/src/sections/faq/index.tsx';
import { HeroSection } from '@/src/sections/hero/v5/index.tsx';
import { ProjectSectionV4 } from '@/src/sections/project/v4/index.tsx';
import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { basicMetadata } from '@/src/utils/metadata';
import { cn } from '@/src/utils/shadcn.ts';
import { faqSectionData, features, whyChooseUs } from './-data.tsx';

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
        image={{
          src: '/assets/images/taxi-app/hero-img.png',
          alt: 'hero image',
          width: 800,
          height: 500,
        }}
        backgroundImage="/assets/images/taxi-app/hero-bg.png"
        isDecorated={false}
        sectionHeading={{
          title: (
            <span className="text-start">
              {' '}
              Development <br />
              Company
            </span>
          ),
          highlighttitle: 'Transport and Logistics',
          size: 'lg',
          textPosition: 'start',
          description:
            'Smart logistics solutions for a fast-paced world. Streamline operations with our cutting-edge transport and logistics software development services.',
          alignment: 'center',
        }}
        button={{
          href: '',
          label: 'Learn More',
          openNewTab: true,
        }}
      />
      <section className="relative overflow-hidden py-16 md:py-16">
        <Container>
          <SectionHeading
            title="Transport and Logistics Software Development Services"
            subtitle="All in One"
            description="At Techares, we specialize in building custom logistics software solutions that simplify complex transport and supply chain operations. From fleet and warehouse management to route optimization and real-time tracking, our all-in-one services help logistics businesses boost efficiency, reduce costs, and deliver a seamless customer experience."
            alignment="center"
            textPosition="center"
            size="sm"
          />
          <div className="relative z-10 mx-auto grid  max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </Container>
      </section>
      {/* Services Section */}
      <TabSection
        heading={{
          title:
            'Cutting-Edge Features That Set Your Transport and Logistics App Apart ',
          alignment: 'center',
          subtitle: 'FEATURES WE OFFER',
          textPosition: 'center',
        }}
        tabs={tabs}
        tabContent={tabContent}
        defaultActiveTab="admin"
      />
      <TestimonialSection />
      {/* Development Process */}
      <WorkflowSection
        sectionHeading={{
          title: 'Our Custom Logistics Software Development Process',
          subtitle: 'WORK FLOW',
          alignment: 'center',
          textPosition: 'center',
        }}
        steps={workflowSteps}
      />

      {/* Why Choose Us Section */}
      <ProjectSectionV4
        projectDetails={whyChooseUs}
        imagePosition="right"
        alignment="center"
        backgroundColor={{ dark: 'bg-accent-900', light: 'bg-zinc-50' }}
        keyPointsLayout="list"
      />
      {/* FAQ Section */}
      <FAQSection faqSectionData={faqSectionData} />
    </>
  );
}
