'use client';
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading/index.tsx';
import { TabSection } from '@/src/components/tab-section/index.tsx';
import { Card, CardContent } from '@/src/components/ui/card.tsx';
import { WorkflowSection } from '@/src/components/workflow-section/index.tsx';
import FAQSection from '@/src/sections/faq';
import { HeroSection } from '@/src/sections/hero/v5/index.tsx';
import { ProjectSectionV4 } from '@/src/sections/project/v4/index.tsx';
import { TestimonialSection } from '@/src/sections/testimonial/v1';
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
  workflowSteps,
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
          src: '/assets/images/ecommerce/hero-1.png',
          alt: 'hero image',
          width: 800,
          height: 500,
        }}
        backgroundImage="/assets/images/ecommerce/mask.png"
        isDecorated={false}
        sectionHeading={{
          highlighttitle: 'E-commerce App ',
          title: <span className="text-start"> Development Company</span>,
          size: 'lg',
          textPosition: 'start',
          description:
            'We ensure that your e-commerce solution is leveraged by our latest technologies and platforms like Shopify and WooCommerce.',
          alignment: 'center',
        }}
        button={{
          href: '',
          label: 'Get In Touch',
          openNewTab: true,
        }}
      />
      {/* Solution We offer */}
      <section className="relative w-full overflow-hidden">
        <Container>
          <div className="relative w-full">
            <SectionHeading
              subtitle="SERVICES"
              title="E-commerce App Development Services We Offer"
              description="We specialise in providing comprehensive e-commerce development services at TechAres tailored to your business needs. Our team of experts is always there to help you, irrespective of whether you want to build a custom ecommerce website, a B2C or B2B, or a multi-vendor marketplace. The latest technologies and platforms like Shopify and WooCommerce are leveraged to ensure your e-commerce solution is robust, scalable and user-friendly."
              alignment="center"
              textPosition="center"
              size="md"
            />
            {solutions && solutions.solutionCard.length > 0 && (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
                {solutions.solutionCard.map((solution) => (
                  <div className="relative pt-16" key={solution.title}>
                    <div className="top-13 absolute left-3/4 z-99 -translate-y-1/2 transform">
                      {solution.icon}
                    </div>
                    <Card className="relative h-[300px] w-[650px] overflow-hidden rounded-none border-none">
                      <div className="relative h-full bg-blue-50">
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
                        <CardContent className="relative z-[1] flex h-full flex-col justify-center p-4 pb-2 pt-6">
                          <SectionHeading
                            title={solution.title}
                            description={solution.description}
                            textPosition="start"
                            size="sm"
                          />
                        </CardContent>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>
      {/* {ket feature} */}
      <TabSection
        heading={{
          title: 'Core Features of Our Ecommerce',
          alignment: 'center',
          subtitle: 'KEY FEATURES',
          textPosition: 'center',
        }}
        tabs={tabs}
        tabContent={tabContent}
        defaultActiveTab="user"
      />
      <section className="mx-10 py-16">
        <Container>
          <div className="relative h-auto w-full overflow-hidden md:h-[500px]">
            {/* SVG Background */}
            <div className="absolute inset-0 flex h-full w-full">
              <svg
                viewBox="0 0 1555 465"
                fill="transparent"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Background gradient shape"
                className="h-full w-full object-contain"
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
            <div className="relative z-10 flex h-full items-center justify-end">
              {/* Image */}
              <div className="absolute -left-24 -top-4 ml-8 hidden flex-shrink-0 lg:block">
                <div className="relative h-[460px] w-[500px]">
                  <Image
                    src={slides[currentSlide].image || '/placeholder.svg'}
                    alt="E-commerce illustration"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              {/* Content */}
              <div className="mr-56 max-w-2xl items-center justify-center">
                <h3
                  className={
                    'whitespace-pre-line text-left font-secondary text-lg font-extrabold text-accent-100 dark:text-accent-700 md:text-xl'
                  }
                >
                  {slides[currentSlide].title}
                </h3>
                <p
                  className={
                    'my-2 whitespace-pre-line text-left font-semibold text-accent-200 dark:text-accent-700'
                  }
                >
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Slide Indicators and Navigation Arrows Container */}
            <div className="absolute bottom-24 right-32 z-20 flex items-center space-x-4">
              {/* Navigation Arrows */}
              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  type="button"
                  className="rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all duration-200 hover:bg-white/30 md:p-3"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5 text-white md:h-6 md:w-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all duration-200 hover:bg-white/30 md:p-3"
                  aria-label="Next slide"
                  type="button"
                >
                  <ChevronRight className="h-5 w-5 text-white md:h-6 md:w-6" />
                </button>
              </div>
            </div>

            {/* Slide Indicators are now part of the bottom-right container */}
          </div>
        </Container>
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
