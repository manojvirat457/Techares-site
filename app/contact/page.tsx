import { projectSectionData } from '@/data/project-section/v1/home-page';
import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { ContactSection } from '@/src/sections/contact/v2';
import { HeroSection } from '@/src/sections/hero/v3';
import { MapSection } from '@/src/sections/map-section';
import { ProjectSection } from '@/src/sections/project/v1';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Techlab | Contact',
  description: 'Techlab - IT Solutions and Services React Nextjs Template',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />

      <HeroSection
        title="Contact Us"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Contact Us',
          },
        ]}
      />
      <ProjectSection {...projectSectionData} />
      <ContactSection />
      {/* <MapSection /> */}
      <Footer />
    </>
  );
}
