import { methodologies } from '@/data/methodology/v1';
import { Button } from '@/src/components/button';
import { ServiceCard } from '@/src/components/cards/service/v1';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { H1 } from '@/src/components/ui/doc/h-tag';
import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { AboutSection } from '@/src/sections/about/v1';
import FAQSection from '@/src/sections/faq';
import MethodologiesSection from '@/src/sections/methodology/v1';
import { ProjectSection } from '@/src/sections/project/v3';
import { ServiceSection } from '@/src/sections/service/v1';
import ServicesSection from '@/src/sections/service/v3';
import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { basicMetadata } from '@/src/utils/metadata';
import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';
import { cn } from '@/src/utils/shadcn';
import {
 faqSectionData, latestUpdate,
 projectDetails,
 servicesData,
 solutions,
 whyChooseSectionData
} from './-data';
import styles from './food-devliery.module.css';

export const metadata = basicMetadata({
 title: 'TechAres | Taxi App Development Company',
 description:
  'Revolutionizing Ride-Hailing Solutions with Cutting-Edge Technology',
});

export default function Page() {
 return (
  <>
   <MainHeader version="1" />
   <section className="relative flex items-center justify-center overflow-hidden py-[9.375rem] lg:min-h-screen">
    <div
     className={cn(
      'absolute inset-0  bg-accent-700 bg-cover bg-no-repeat bg-blend-luminosity [background-position:top_center] [transform:scale(1)] [transition:7000ms_ease,opacity_1500ms_ease-in]',
      // before
      'before:absolute before:inset-0 before:bg-[#EDF8FE] before:opacity-80  dark:before:bg-accent-900',
      // after
      'after:absolute after:inset-0  after:[background:linear-gradient(180deg,rgba(255,255,255,0)_0%,#FFFFFF_100%)]  dark:after:[background:linear-gradient(180deg,rgba(20,20,22,0.00)_0%,#141416_100%)]'
     )}
     style={{
      backgroundImage: `url(${'/assets/images/hero/hero-1.png'})`,
     }}
    >
     <Container>
      {/* Main content  */}
      <div
       className={cn(
        'relative z-10 mx-auto  max-w-[800px] text-center text-white lg:mt-[60px]',
        styles['hero-content']
       )}
      >
       <div className="space-y-6 py-52 md:space-y-8">
        <H1 className="font-secondary text-2xl font-semibold uppercase leading-[1.1] md:text-3xl">
         Food Delivery App Development Company
        </H1>
        <p className="text-accent-200">
         Transform Your Food Business with a Powerful, Custom-Built
         App!
        </p>
        <Button asChild className={cn('rounded-full')}>
         <CustomLink
          aria-label={'Get Free quote'}
          href={''}
          openNewTab={true}
         >
          <span>{'Get started today!'}</span>
         </CustomLink>
        </Button>
       </div>
      </div>
     </Container>
    </div>
   </section>
   <ProjectSection projectDetails={projectDetails} />;
   {/* Solution We offer */}
   <section className="px-4 py-20">
    <Container>
     <div className="container mx-auto ">
      <h2 className="mb-8 text-center text-xl font-bold text-white md:text-2xl">{solutions.title}</h2>
      <p className='text-center m mb-8'>{solutions.description}</p>
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row">
       {solutions && solutions.solutionCard.length > 0 && (
        <div className="-mx-4 flex flex-wrap justify-center gap-y-30px">
         {solutions.solutionCard.map((solution, index) => (
          <div
           key={index}
           data-aos="fade-up"
           data-aos-delay={getStaggeredDelay([200, 400, 600], index)}
           className="w-full px-4 md:w-1/2 md:px-[15px]"
          >
           <ServiceCard
            title={solution.title}
            description={solution.description}
            icon={solution.icon}
           />
          </div>
         ))}
        </div>
       )}
      </div>
     </div>
    </Container>
   </section>
   <ServicesSection servicesData={servicesData} title={{ title: 'Features - Core Features of Our Food Delivery App' }} />
   {/* Latest Updates  */}
   <section>
    <Container>
     <div className="my-12 text-center  text-white">
      <h2 className="mb-4 text-3xl font-bold">
       Unique Features of Our Food Delivery App
      </h2>
     </div>
     <ServiceSection className="!pt-0" {...latestUpdate} />
    </Container>
   </section>
   <TestimonialSection />
   <MethodologiesSection methodologies={methodologies} heading={{ title: 'Our Development', highlightedTitle: "Methodologies" }} />
   <AboutSection aboutSectionData={whyChooseSectionData} />
   <FAQSection faqSectionData={faqSectionData} />
   <Footer />
  </>
 );
}
