import { AboutSection } from '@/src/sections/about/v1';
import FAQSection from '@/src/sections/faq/index.tsx';
import { HeroSection } from '@/src/sections/hero/v4/index.tsx';
import MethodologiesSection from '@/src/sections/methodology/v1';
import { ProjectSection } from '@/src/sections/project/v3';
import ServicesSection from '@/src/sections/service/v3';
import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { basicMetadata } from '@/src/utils/metadata';
import {
  faqSectionData,
  methodologies,
  projectDetails,
  servicesData,
  whyChooseSectionData
} from './-data.tsx';

export const metadata = basicMetadata({
  title: 'TechAres | Fantasy Sports App Development Company',
  description:
    'Transform your sports vision into reality with our cutting-edge fantasy sports app development services',
});

export default function Page() {
  return (
    <main>
      <HeroSection
        backgroundImage={'/assets/images/hero/hero-1.webp'}
        description="Build Your Dream Fantasy Sports App with Cutting-Edge Technology. Transform your sports vision into a reality with our high-performance fantasy sports app development services tailored for top sports."
        title="Fantasy Sports App Development Company"
        button={{
          href: '',
          label: 'Get Quote',
          openNewTab: true,
        }}
      />
      <ProjectSection projectDetails={projectDetails} />
      {/* Services Section */}
      <ServicesSection title={{ title: 'Steps to Developing A Next Gen Fantasy Sports App' }} servicesData={servicesData} />

      {/* Why Choose Us Section */}
      <AboutSection aboutSectionData={whyChooseSectionData} />

      {/* Development Process */}
      <MethodologiesSection
        methodologies={methodologies}
        heading={{
          title: 'Our Development',
          highlightedTitle: 'Process',
        }}
      />

      {/* Testimonial Section */}
      <TestimonialSection />
      <FAQSection faqSectionData={faqSectionData} />
    </main>
  );
}