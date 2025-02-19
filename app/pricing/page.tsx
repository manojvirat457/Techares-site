import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { CtaSection } from '@/src/sections/cta/v1';
import { HeroSection } from '@/src/sections/hero/v3';
import { PricingSection } from '@/src/sections/pricing/version-2';
import { basicMetadata } from '@/src/utils/metadata';

export const metadata = basicMetadata({
 title: 'TechAres | Pricing',
 description: 'TechAres - IT Solutions and Services React Nextjs Template',
});

export default function Page() {
 return (
  <>
   <MainHeader version="2" />
   <HeroSection
    title="Team"
    breadcrumbItems={[
     {
      label: 'Home',
      href: '/',
     },
     {
      label: 'Team',
     },
    ]}
   />
   <PricingSection />
   <CtaSection className="section-padding-primary" />

  </>
 );
}
