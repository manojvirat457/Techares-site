import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { ServiceDetailsSection } from '@/src/sections/service-details/v1';
import { basicMetadata } from '@/src/utils/metadata';

export const metadata = basicMetadata({
  title: 'TechAres | Service details',
  description: 'TechAres - IT Solutions and Services React Nextjs Template',
});

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Service Details"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Service Details',
          },
        ]}
      />
      <ServiceDetailsSection />
    </>
  );
}
