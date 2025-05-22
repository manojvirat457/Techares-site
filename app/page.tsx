import { workflowSteps } from '@/app/-data';
import {
  aboutSectionData,
  whyChooseSectionDataTwo,
} from '@/data/about-section/v1';
import { industriesSectionData } from '@/data/industries/v1';
import { servicesData } from '@/data/service-section/v3';
import { WorkflowSection } from '@/src/components/workflow-section';
import { AboutSection } from '@/src/sections/about/v1';
import { Hero } from '@/src/sections/hero/v1';
import { basicMetadata } from '@/src/utils/metadata';
import dynamic from 'next/dynamic';

// Dynamically import non-critical sections
const ServicesSection = dynamic(() => import('@/src/sections/service/v3'), {
  ssr: true,
});
const SolutionsSection = dynamic(() => import('@/src/sections/solutions/v1'), {
  ssr: true,
});
const CtaSection = dynamic(
  () => import('@/src/sections/cta/v2').then((mod) => mod.CtaSection),
  { ssr: true }
);
const IndustriesSection = dynamic(
  () => import('@/src/sections/industries/v1'),
  { ssr: true }
);
const TestimonialSection = dynamic(
  () =>
    import('@/src/sections/testimonial/v1').then(
      (mod) => mod.TestimonialSection
    ),
  { ssr: true }
);

const TechnologiesSection = dynamic(
  () =>
    import('@/src/sections/technologies/v1').then(
      (mod) => mod.TechnologiesSection
    ),
  { ssr: true }
);
const ProjectSection = dynamic(
  () => import('@/src/sections/project/v3').then((mod) => mod.ProjectSection),
  { ssr: true }
);
const ContactSection = dynamic(
  () => import('@/src/sections/contact/v1').then((mod) => mod.ContactSection),
  { ssr: true }
);

export const metadata = basicMetadata({});

export default function Page() {
  return (
    <>
      <Hero />
      <AboutSection aboutSectionData={aboutSectionData} />
      <ServicesSection
        servicesData={servicesData}
        title={{ title: "Techares's", highlightedTitle: 'Services' }}
      />
      <SolutionsSection />
      <CtaSection />
      <IndustriesSection
        industriesSectionData={industriesSectionData}
        itemsPerRow={4}
      />
      <TestimonialSection />
      {/* <MethodologiesSection
        methodologies={methodologies}
        heading={{
          title: 'Our Development',
          highlightedTitle: 'Methodologies',
        }}
      /> */}
      <WorkflowSection
        sectionHeading={{
          title: 'Strategic Workflow Taxi App Development',
          subtitle: 'WORK FLOW',
          description:
            'We follow a well-structured development process at TechAres that ensures the successful delivery of a high-performing taxi app. Our approach is designed in such a way that it meets the requirements of business objectives while providing an unlimited user experience',
          alignment: 'center',
          textPosition: 'center',
        }}
        steps={workflowSteps}
      />
      <TechnologiesSection />
      <ProjectSection projectDetails={whyChooseSectionDataTwo} />
      <ContactSection />
    </>
  );
}
