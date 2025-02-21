import { faqSectionData } from '@/data/faq-section/v1';
import { MainHeader } from '@/src/layout/header';
import FAQSection from '@/src/sections/faq';
import { HeroSection } from '@/src/sections/hero/v3';
import { basicMetadata } from '@/src/utils/metadata';

export const metadata = basicMetadata({
  title: 'TechAres | Faq',
  description: 'TechAres - IT Solutions and Services React Nextjs Template',
});

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Faq"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Faq',
          },
        ]}
      />
      <FAQSection faqSectionData={faqSectionData} />
    </>
  );
}
