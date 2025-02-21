import {
 aboutSectionData,
 whyChooseSectionDataTwo,
} from '@/data/about-section/v1';
import { industriesSectionData } from '@/data/industries/v1';
import { methodologies } from '@/data/methodology/v1';
import { servicesData } from '@/data/service-section/v3';
import { AboutSection } from '@/src/sections/about/v1';
import { Hero } from '@/src/sections/hero/v1';
import { basicMetadata } from '@/src/utils/metadata';
import dynamic from 'next/dynamic';

// Dynamically import non-critical sections
const ServicesSection = dynamic(() => import('@/src/sections/service/v3'), { ssr: true });
const SolutionsSection = dynamic(() => import('@/src/sections/solutions/v1'), { ssr: true });
const CtaSection = dynamic(() => import('@/src/sections/cta/v2').then(mod => mod.CtaSection), { ssr: true });
const IndustriesSection = dynamic(() => import('@/src/sections/industries/v1'), { ssr: true });
const TestimonialSection = dynamic(() => import('@/src/sections/testimonial/v1').then(mod => mod.TestimonialSection), { ssr: true });
const MethodologiesSection = dynamic(() => import('@/src/sections/methodology/v1'), { ssr: true });
const TechnologiesSection = dynamic(() => import('@/src/sections/technologies/v1').then(mod => mod.TechnologiesSection), { ssr: true });
const ProjectSection = dynamic(() => import('@/src/sections/project/v3').then(mod => mod.ProjectSection), { ssr: true });
const ContactSection = dynamic(() => import('@/src/sections/contact/v1').then(mod => mod.ContactSection), { ssr: true });

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
   <MethodologiesSection
    methodologies={methodologies}
    heading={{
     title: 'Our Development',
     highlightedTitle: 'Methodologies',
    }}
   />
   <TechnologiesSection />
   <ProjectSection projectDetails={whyChooseSectionDataTwo} />
   <ContactSection />
  </>
 );
}
