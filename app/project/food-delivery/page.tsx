import { methodologies } from '@/data/methodology/v1';
import { ServiceCard } from '@/src/components/cards/service/v1';
import { Container } from '@/src/components/container';
import { AboutSection } from '@/src/sections/about/v1';
import FAQSection from '@/src/sections/faq';
import { HeroSection } from '@/src/sections/hero/v4';
import MethodologiesSection from '@/src/sections/methodology/v1';
import { ProjectSection } from '@/src/sections/project/v3';
import { ServiceSection } from '@/src/sections/service/v1';
import ServicesSection from '@/src/sections/service/v3';
import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { basicMetadata } from '@/src/utils/metadata';
import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';
import {
 faqSectionData,
 latestUpdate,
 projectDetails,
 servicesData,
 solutions,
 whyChooseSectionData,
} from './-data';

export const metadata = basicMetadata({
 title: 'TechAres | Taxi App Development Company',
 description:
  'Revolutionizing Ride-Hailing Solutions with Cutting-Edge Technology',
});

export default function Page() {
 return (
  <>
   <HeroSection
    backgroundImage={'/assets/images/hero/hero-1.png'}
    description=" Transform Your Food Business with a Powerful, Custom-Built App!"
    title="Food Delivery App Development Company"
    button={{
     href: '',
     label: 'Get Quote',
     openNewTab: true,
    }}
   />
   <ProjectSection projectDetails={projectDetails} />;
   {/* Solution We offer */}
   <section className="px-4 py-20">
    <Container>
     <div className="container mx-auto ">
      <h2 className="text-center text-xl font-bold text-white md:text-2xl">
       {solutions?.title}{' '}
       {solutions?.highlightedTitle && (
        <span className="text-primary">
         {solutions?.highlightedTitle}
        </span>
       )}
      </h2>
      <p className="m mb-8 text-center">{solutions.description}</p>
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
           <ServiceCard {...solution} />
          </div>
         ))}
        </div>
       )}
      </div>
     </div>
    </Container>
   </section>
   <ServicesSection
    servicesData={servicesData}
    title={{
     title: 'Features -',
     highlightedTitle: ' Core Features of Our Food Delivery App',
    }}
   />
   {/* Latest Updates  */}
   <section>
    <Container>
     <div className="my-12 text-center  text-white">
      <h2 className="text-center text-xl font-bold text-white md:text-2xl">
       <span className="text-primary">{'Unique Features '}</span>{' '}
       {'of Our Food Delivery App'}
      </h2>
     </div>
     <ServiceSection className="!pt-0" {...latestUpdate} />
    </Container>
   </section>
   <TestimonialSection />
   <MethodologiesSection
    methodologies={methodologies}
    heading={{
     title: 'Our Development',
     highlightedTitle: 'Methodologies',
    }}
   />
   <AboutSection aboutSectionData={whyChooseSectionData} />
   <FAQSection faqSectionData={faqSectionData} />
  </>
 );
}
