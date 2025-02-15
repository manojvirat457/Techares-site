import { aboutSectionThreeData } from '@/data/about-section/v3';
import { workprocessSectionData } from '@/data/work-process/v1';
import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { AboutSection } from '@/src/sections/about/v1';
import { AboutSection as AboutSectionTwo } from '@/src/sections/about/v2';
import { OurJourney } from '@/src/sections/about/v2/OurJourney';
import { AboutSectionThree } from '@/src/sections/about/v3';
import { ContactSection } from '@/src/sections/contact/v2';
import { CtaSection } from '@/src/sections/cta/v1';
import { HeroSection } from '@/src/sections/hero/v3';
import { IndustrySections } from '@/src/sections/service/Industry-service/Index';
import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { WorkprocessSection } from '@/src/sections/work-process/v1';
import { WhyChooseUs } from '@/src/sections/work-process/v2';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Techlab | About',
  description: 'Techlab - IT Solutions and Services React Nextjs Template',
};

export default function Page() {
  const { cards } = workprocessSectionData
  const { images, sectionHeading } = aboutSectionThreeData;
  return (
    <>
      <MainHeader version="1" />
      <HeroSection
        title="About Us"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'About',
          },
        ]}
      />
      <AboutSection />
      <IndustrySections services={cards} />
      <WorkprocessSection />

      <AboutSectionTwo />
      <CtaSection />
      <OurJourney />
      <AboutSectionThree images={images} sectionHeading={sectionHeading} />
      <WhyChooseUs />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </>
  );
}
