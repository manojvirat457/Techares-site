import { WorkflowSection } from '@/src/components/workflow-section/index.tsx';
import FAQSection from '@/src/sections/faq/index.tsx';
import { HeroSection } from '@/src/sections/hero/v5/index.tsx';
import { ProjectSection } from '@/src/sections/project/v3';
import { ProjectSectionV4 } from '@/src/sections/project/v4/index.tsx';
import ServicesSection from '@/src/sections/service/v3';
import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { basicMetadata } from '@/src/utils/metadata';
import {
 faqSectionData,
 projectDetails,
 servicesData,
 tabContent,
 tabs,
 whyChooseUs,
 workflowSteps
} from './-data.tsx';
import { TabSection } from '@/src/components/tab-section/index.tsx';

export const metadata = basicMetadata({
 title: 'TechAres | Fantasy Sports App Development Company',
 description:
  'Transform your sports vision into reality with our cutting-edge fantasy sports app development services',
});

export default function Page() {
 return (
  <main>
   <HeroSection
    image={{
     src: '/assets/images/taxi-app/hero-img.png',
     alt: 'hero image',
     width: 800,
     height: 500,
    }}
    backgroundImage="/assets/images/taxi-app/hero-bg.png"
    isDecorated={false}
    sectionHeading={{
     title: (
      <span className="text-start">
       {' '}
       <br />
       Development Services
      </span>
     ),
     highlighttitle: 'Fantasy Sports App',
     size: 'lg',
     textPosition: 'start',
     description:
      "Searching for an avenue to develop an engaging fantasy sports software development company. We help create interactive platforms, increasing fan engagement and market reach",
     alignment: 'center',
    }}
    button={{
     href: '',
     label: 'Learn More',
     openNewTab: true,
    }}
   />
   <ProjectSection projectDetails={projectDetails} />
   {/* {ket feature} */}
   <TabSection
    heading={{
     title: 'Core Features of Our Taxi App',
     alignment: 'center',
     subtitle: 'KEY FEATURES',
     textPosition: 'center',
    }}
    tabs={tabs}
    tabContent={tabContent}
    defaultActiveTab="user"
   />
   <WorkflowSection
    sectionHeading={{
     title: 'Steps for Successful Fantasy Sports App Development',
     subtitle: 'WORK FLOW',
     alignment: 'center',
     textPosition: 'center',
    }}
    steps={workflowSteps}
   />
   {/* Why Choose Us */}
   <ProjectSectionV4
    projectDetails={whyChooseUs}
    imagePosition="right"
    alignment="center"
    backgroundColor={{ dark: 'bg-accent-900', light: 'bg-zinc-50' }}
    keyPointsLayout="list"
   />
   {/* Testimonial Section */}
   <TestimonialSection />
   <FAQSection faqSectionData={faqSectionData} />
  </main>
 );
}
