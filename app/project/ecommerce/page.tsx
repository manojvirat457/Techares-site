'use client';
import { ServiceCard } from '@/src/components/cards/service/v1';
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading/index.tsx';
import { TabSection } from '@/src/components/tab-section/index.tsx';
import { WorkflowSection } from '@/src/components/workflow-section/index.tsx';
import FAQSection from '@/src/sections/faq';
import { HeroSection } from '@/src/sections/hero/v5/index.tsx';
import { ProjectSectionV4 } from '@/src/sections/project/v4/index.tsx';
import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import {
 faqSectionData,
 slides,
 solutions,
 tabContent,
 tabs,
 whyChooseUs,
 workflowSteps
} from './-data.tsx';

// export const metadata = basicMetadata({
//  title: 'TechAres | Ecommerce App Development Company',
//  description:
//   'Custom ecommerce solutions with cutting-edge technology for your business growth',
// });

export default function Page() {
 const [currentSlide, setCurrentSlide] = React.useState(0);

 const nextSlide = () => {
  setCurrentSlide((prev) => (prev + 1) % slides.length);
 };

 const prevSlide = () => {
  setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
 };

 return (
  <main>
   <HeroSection
    image={{
     src: '/assets/images/taxi-app/hero-img.png',
     alt: 'hero image',
     width: 800,
     height: 500,
    }}
    backgroundImage="/assets/images/ecommerce/mask.png"
    isDecorated={false}
    sectionHeading={{
     highlighttitle: 'Ecommerce App',
     title: (
      <span className="text-start">
       {' '}
       Development
       Company
      </span>
     ),
     size: 'lg',
     textPosition: 'start',
     description:
      'leverage the latest technologies and platforms like Shopify and WooCommerce to ensure your e-commerce solution',
     alignment: 'center',
    }}
    button={{
     href: '',
     label: 'Get In Touch',
     openNewTab: true,
    }}
   />
   {/* Solution We offer */}
   <section className="px-4 py-20">
    <Container>
     <div className="container mx-auto ">
      <SectionHeading
       subtitle='SERVICES'
       title='Ecommerce App Development Services We Offer'
       description="At Teachers, we specialize in providing comprehensive ecommerce app development services tailored to meet your business needs. Whether you're looking to build a custom ecommerce website, a B2C or B2B app, or a multi-vendor marketplace, our team of experts is here to help. We leverage the latest technologies and platforms like Shopify and WooCommerce to ensure your ecommerce solution is robust, scalable, and user-friendly."
       alignment="center"
       textPosition="center"
       size="md"
      />
      <div className="mx-auto flex max-w-7xl mt-20 flex-col gap-8 lg:flex-row">
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
   <section className='mx-10'>
   <div className="relative w-full h-auto md:h-[500px] overflow-hidden">
      {/* SVG Background */ }
      <div className="absolute inset-0 w-full h-full flex">
        <svg
          viewBox="0 0 1555 465"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-contain"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M1358.96 436.888L134.402 465H72.8012C38.454 465 24.8893 422.628 22.4004 401.442C14.9336 302.846 0 95.1427 0 53.0968C0 11.051 48.5341 0.539771 72.8012 0.5399C512.72 0.132479 1410.48 -0.437911 1482.16 0.5399C1553.84 1.51771 1559.32 47.3933 1553.09 70.2089C1542.51 147.212 1519.87 315.151 1513.89 370.886C1507.92 426.621 1408.11 438.11 1358.96 436.888Z"
            fill="url(#paint0_linear_446_808)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_446_808"
              x1="777.5"
              y1="0"
              x2="777.5"
              y2="465"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0170C8" />
              <stop offset="1" stopColor="#014780" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Carousel Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Image */}
            <div className="hidden lg:block flex-shrink-0 ml-8">
              <div className="relative w-80 h-80">
                <Image
                  src={slides[currentSlide].image || "/placeholder.svg"}
                  alt="E-commerce illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
                  {/* Content */}
            <div className="flex-1 max-w-2xl">
             <SectionHeading
              title={slides[currentSlide].title}
              description={slides[currentSlide].description}
              size="md"
              textPosition='center'
              className='text-white'
             />
           </div>

          </div>
        </div>
      </div>

      {/* Slide Indicators and Navigation Arrows Container */}
      <div className="absolute bottom-24 right-32 z-20 flex items-center space-x-4">
        {/* Navigation Arrows */}
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Slide Indicators are now part of the bottom-right container */}
    </div>
   </section>
   <TestimonialSection />
   <WorkflowSection
    sectionHeading={{
     title: 'Strategic Workflow Taxi App Development',
     subtitle: 'WORK FLOW',
     description:
      'We follow a well-structured development process at TechAres that ensures the successful delivery of a high-performing taxi app. Our approach is designed in such a way that it meets the requirements of business objectives while providing an unlimited user experience',
     alignment: 'center',
     textPosition: 'center',
    }}
    steps={workflowSteps}
   />
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
