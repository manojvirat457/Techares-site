import {
 aboutSectionData,
 whyChooseSectionDataTwo,
} from '@/data/about-section/v1';
import { industriesSectionData } from '@/data/industries/v1';
import { methodologies } from '@/data/methodology/v1';
import { servicesData } from '@/data/service-section/v3';
import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { AboutSection } from '@/src/sections/about/v1';
import { ContactSection } from '@/src/sections/contact/v1';
import { CtaSection } from '@/src/sections/cta/v2';
import { Hero } from '@/src/sections/hero/v1';
import IndustriesSection from '@/src/sections/industries/v1';
import MethodologiesSection from '@/src/sections/methodology/v1';
import { ProjectSection } from '@/src/sections/project/v3';
import ServicesSection from '@/src/sections/service/v3';
import SolutionsSection from '@/src/sections/solutions/v1';
import { TechnologiesSection } from '@/src/sections/technologies/v1';
import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { basicMetadata } from '@/src/utils/metadata';
export const metadata = basicMetadata({});

export default function Page() {
 return (
  <>
   <MainHeader version="1" />
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
   <Footer />
  </>
 );
}
