import { ServiceCard } from '@/src/components/cards/service/v1';
import { Container } from '@/src/components/container';
import { Card, CardContent } from '@/src/components/ui/card';
import { H2 } from '@/src/components/ui/doc/h-tag';
import { AboutSection } from '@/src/sections/about/v1';
import FAQSection from '@/src/sections/faq';
import { HeroSection } from '@/src/sections/hero/v5';
import MethodologiesSection from '@/src/sections/methodology/v1';
import { ProjectSection } from '@/src/sections/project/v3';
import { ServiceSection } from '@/src/sections/service/v1';
import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { basicMetadata } from '@/src/utils/metadata';
import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';
import { cn } from '@/src/utils/shadcn';
import {
 ArrowRight,
 Cog,
 LayoutDashboard,
 MapPin,
 Navigation,
 Star,
 Users,
} from 'lucide-react';
import Image from 'next/image';
import {
 faqSectionData,
 latestUpdate,
 methodologies,
 projectDetails,
 solutions,
 whyChooseSectionData,
} from './-data';
import { SectionHeading } from '@/src/components/section-heading';
import ContactUsDialog from '@/src/sections/contact/v3';
import { Button } from '@/src/components/button';
import { TabSection } from '@/src/components/tab-section';
import { tabContent, tabs, whyChooseUs, workflowSteps } from '@/app/project/food-delivery/-data';
import { ProjectSectionV4 } from '@/src/sections/project/v4';
import { WorkflowSection } from '@/src/components/workflow-section';

export const metadata = basicMetadata({
 title: 'TechAres | Taxi App Development Company',
 description:
  'Revolutionizing Ride-Hailing Solutions with Cutting-Edge Technology',
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
    backgroundImage='/assets/images/taxi-app/hero-bg.png'
    isDecorated={false}
    sectionHeading={{
     title: <span className='text-start'> Development <br />Company</span>,
     highlighttitle: 'Taxi App',
     size: 'lg',
     textPosition: 'start',
     description:
      'Taxi Booking App Development Company that aims to revolutionize your ride-hailing solutions with its cutting-edge technology',
     alignment: 'center'
    }}
    button={{
     href: '',
     label: 'Learn More',
     openNewTab: true,
    }}
   />
   <ProjectSection projectDetails={projectDetails} />
   <section className="relative overflow-hidden py-12 md:py-16">
    <Container>
     <div className="my-12 text-center">
      <SectionHeading
       textPosition='center'
       title='Choose the Best Approach for Your Business'
       alignment="center"
       size='md'
       description="At TechAres, we offer two distinct development approaches to help you launch a taxi booking app that aligns with your business needs. Whether you require a fully customized solution or a fast, ready-to-deploy platform, we have the right option for you."
      />
     </div>
     <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="rounded-lg border border-neutral-300 bg-white p-8 transition-all duration-300 hover:border-primary/50 dark:bg-zinc-900">
       <div className="mb-6 flex justify-center">
        <Image
         src="/assets/images/taxi-app/taxi-1.png"
         alt="From Scratch Development"
         fill={false}
         width={100}
         height={100}
         className="w-56"
        />
       </div>
       <SectionHeading
        title="Development from scratch"
        textPosition='center'
        description="Our development method starts from scratch which is ideal for businesses looking for a fully customized taxi app suited to their brand identity, specific features, and unique operational needs. This initiative taken by the Taxi app development company gives you complete control over the app’s design functionality, and scalability ensuring that your solution stands out in the competitive ride-hailing market. "
        alignment="center"
        size="sm"
       />
       <div className="mt-3 flex justify-center">
        <ContactUsDialog>
         <Button className="rounded-full">
          <span>Get Quote</span>
         </Button>
        </ContactUsDialog>
       </div>
      </div>
      <div className="rounded-lg border border-neutral-300 bg-white p-8 transition-all duration-300 hover:border-primary/50 dark:bg-zinc-900">
       <div className="mb-6 flex justify-center">
        <Image
         src="/assets/images/taxi-app/taxi-2.png"
         alt="White Label Solution"
         width={100}
         height={100}
         className="w-40"
        />
       </div>
       <SectionHeading
        title="White Label Taxi App Solutions"
        textPosition='center'
        description="White Label Taxi App designed by the taxi app development company offers a faster, cost-effective solution with pre-built features that can be customized with your branding. This ready-made platform provided by the taxi app development allows for quick deployment making it an excellent choice for startups and businesses that want to make a swift entry into the market without extensive development time."
        alignment="center"
        size="sm"
       />
       <div className="mt-3 flex justify-center">
        <ContactUsDialog>
         <Button className="rounded-full">
          <span>Explore</span>
         </Button>
        </ContactUsDialog>
       </div>
      </div>
     </div>
    </Container>
   </section>
   {/* {ket feature} */}
   <TabSection
    heading={{
     title: "Core Features of Our Food Delivery App",
     alignment: "center",
     subtitle: "FEATURES",
     textPosition: "center",
    }}
    tabs={tabs}
    tabContent={tabContent}
    defaultActiveTab="customer"
   />
   <TestimonialSection />
   <WorkflowSection
        title="How We Develop Your Food Delivery App"
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
   <FAQSection faqSectionData={faqSectionData} />
  </main>
 );
}
