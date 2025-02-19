import { MainHeader } from '@/src/layout/header';
import { CtaSection } from '@/src/sections/cta/v1';
import { HeroSection } from '@/src/sections/hero/v3';
import { TestimonialSection } from '@/src/sections/testimonial/grid';
import { basicMetadata } from '@/src/utils/metadata';

export const metadata = basicMetadata({
  title: 'TechAres | Testimonial',
  description: 'TechAres - IT Solutions and Services React Nextjs Template',
});

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Testimonial"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Testimonial',
          },
        ]}
      />
      <TestimonialSection />
      <CtaSection className="section-padding-primary !pt-0" />
    </>
  );
}
