import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { ContactSection } from '@/src/sections/contact/v2';
import { HeroSection } from '@/src/sections/hero/v3';
import { MapSection } from '@/src/sections/map-section';
import { basicMetadata } from '@/src/utils/metadata';

export const metadata = basicMetadata({
  title: 'TechAres | Contact',
  description: 'TechAres - IT Solutions and Services React Nextjs Template',
});

export default function Page() {
  return (
    <>
      {/* <MainHeader version="2" /> */}
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
      <ContactSection />
      <MapSection />
      <Footer />
    </>
  );
}
