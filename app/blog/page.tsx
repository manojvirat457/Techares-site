import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { BlogListSection } from '@/src/sections/blog-list';
import { HeroSection } from '@/src/sections/hero/v3';
import { basicMetadata } from '@/src/utils/metadata';

export const metadata = basicMetadata({
 title: 'TechAres | Blog',
 description: 'TechAres - IT Solutions and Services React Nextjs Template',
});

export default function Page() {
 return (
  <>
   <MainHeader version="2" />
   <HeroSection
    title="Blog Classic"
    breadcrumbItems={[
     {
      label: 'Home',
      href: '/',
     },
     {
      label: 'Blog Classic',
     },
    ]}
   />
   <BlogListSection />

  </>
 );
}
