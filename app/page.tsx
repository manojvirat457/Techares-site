import dynamic from 'next/dynamic';
import {
  aboutSectionData,
  contactSectionData,
  ctaSectionData,
  heroData,
  industriesSectionData,
  servicesData,
  whyChooseSectionData,
  workflowSteps,
} from '@/app/-data';
import { WorkflowSection } from '@/src/components/workflow-section';
import { AboutSection } from '@/src/sections/about/v1';
import { Hero } from '@/src/sections/hero/v1';
import { ProjectSectionV4 } from '@/src/sections/project/v4';
import { basicMetadata } from '@/src/utils/metadata';

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
const ContactSection = dynamic(
  () => import('@/src/sections/contact/v1').then((mod) => mod.ContactSection),
  { ssr: true }
);

export const metadata = basicMetadata({});

export default function Page() {
  return (
    <>
      <Hero items={heroData.items} />
      <AboutSection aboutSectionData={aboutSectionData} />
      <ServicesSection
        servicesData={servicesData}
        title={{ title: "Techares's", highlightedTitle: 'Services' }}
      />
      <SolutionsSection />
      <CtaSection
        title={ctaSectionData.title}
        description={ctaSectionData.description}
      />
      <IndustriesSection
        industriesSectionData={industriesSectionData}
        itemsPerRow={4}
      />
      <TestimonialSection />
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
      <ProjectSectionV4
        projectDetails={whyChooseSectionData}
        imagePosition="left"
        alignment="center"
        backgroundColor={{ dark: 'bg-accent-900', light: 'bg-zinc-50' }}
        keyPointsLayout="list"
      />
      <ContactSection
        sectionHeading={contactSectionData.sectionHeading}
        image={contactSectionData.image}
      />
    </>
  );
}
