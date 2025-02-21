import { MainHeader } from '@/src/layout/header';
import { BlogDetilsSection } from '@/src/sections/blog-details/v1';
import { HeroSection } from '@/src/sections/hero/v3';
import { basicMetadata } from '@/src/utils/metadata';

export const metadata = basicMetadata({
  title: 'TechAres | Blog details',
  description: 'TechAres - IT Solutions and Services React Nextjs Template',
});

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Blog Details"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Blog Details',
          },
        ]}
      />
      <BlogDetilsSection />
    </>
  );
}
