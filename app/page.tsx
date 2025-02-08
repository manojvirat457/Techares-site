import { aboutSectionData, whyChooseSectionData, whyChooseSectionDataTwo } from '@/data/about-section/v1';
import { industriesSectionData } from '@/data/industries/v1';
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
import { Metadata } from 'next';
export const metadata: Metadata = {
 title: 'Techlab | Home',
 description: 'Techlab - IT Solutions and Services React Nextjs Template',
};

export default function Page() {
 return (
  <>
   <MainHeader version="1" />
   <Hero />
   {/* <ServiceSection className="!pb-0" {...serviceSectionData} /> */}
   <AboutSection aboutSectionData={aboutSectionData} />
   <ServicesSection />
   <SolutionsSection />
   <CtaSection />
   {/* <ProjectSection {...projectSectionData} /> */}
   {/* <StatisticsSection /> */}
   {/* TODO: Industires We server */}
   <IndustriesSection industriesSectionData={industriesSectionData} itemsPerRow={4} />
   <TestimonialSection />
   {/* TODO: Our Development Methodology */}
   <MethodologiesSection />
   {/* TODO: Techonologies We use */}
   <TechnologiesSection />
   {/* <PricingSection /> */}
   {/* <TeamSection /> */}
   {/* <AboutSection aboutSectionData={whyChooseSectionData} /> */}
   <ProjectSection projectDetails={whyChooseSectionDataTwo} />
   <ContactSection />
   {/* <BlogSection /> */}
   <Footer />
  </>
 );
}
