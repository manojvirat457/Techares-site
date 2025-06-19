import { Container } from '@/src/components/container/index.tsx';
import { SectionHeading } from '@/src/components/section-heading/index.tsx';
import { TabSection } from '@/src/components/tab-section/index.tsx';
import { Card, CardContent } from '@/src/components/ui/card.tsx';
import { WorkflowSection } from '@/src/components/workflow-section/index.tsx';
import FAQSection from '@/src/sections/faq/index.tsx';
import { HeroSection } from '@/src/sections/hero/v6/index.tsx';
import { ProjectSectionV4 } from '@/src/sections/project/v4/index.tsx';
import { TestimonialSection } from '@/src/sections/testimonial/v1';
import Image from 'next/image';
import {
  faqSectionData,
  projectDetails,
  tabContent,
  tabs,
  uniqueFeatures,
  whyChooseUs,
  workflowSteps,
} from './-data.tsx';
import { basicMetadata } from '@/src/utils/metadata.ts';
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
          src: '/assets/images/fantasy-sports/hero-2.png',
          alt: 'hero image',
          width: 700,
          height: 700,
        }}
        backgroundImage="/assets/images/fantasy-sports/hero-1.png"
        isDecorated={false}
        sectionHeading={{
          title: (
            <>
              Fantasy Sports App <br /> Development Services
            </>
          ),
          specialText:
            'Create an Immersive  Fantasy Sports App With Our Exceptional',
          size: 'md',
          textPosition: 'start',
          description:
            'Searching for an avenue to develop an engaging fantasy sports software development company. We help create interactive platforms, increasing fan engagement and market reach',
          alignment: 'center',
        }}
        button={{
          href: '',
          label: 'Get in touch',
          openNewTab: true,
        }}
      />
      <ProjectSectionV4
        projectDetails={projectDetails}
        imagePosition="left"
        alignment="center"
        backgroundColor={{ dark: 'bg-accent-900', light: 'bg-white' }}
        keyPointsLayout="list"
      />
      <section className="py-8 md:py-16">
        <Container>
          <SectionHeading
            title="Types Of Fantasy Sports App"
            subtitle="SERVICES"
            description="At Teachers, we specialize in providing comprehensive ecommerce app development services tailored to meet your business needs. Whether you're looking to build a custom ecommerce website, a B2C or B2B app, or a multi-vendor marketplace, our team of experts is here to help. We leverage the latest technologies and platforms like Shopify and WooCommerce to ensure your ecommerce solution is robust, scalable, and user-friendly."
            alignment="center"
            textPosition="center"
          />
          <div className="container mx-auto pt-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {uniqueFeatures?.map((feature, idx) => {
                const isLastOdd =
                  uniqueFeatures.length % 2 === 1 &&
                  idx === uniqueFeatures.length - 1;
                return (
                  <div
                    className={`relative flex justify-center pt-16 md:pt-0  ${
                      isLastOdd
                        ? 'md:col-span-2 md:mx-auto md:max-w-[650px]'
                        : 'max-w-[650px]'
                    }`}
                    key={feature.id}
                  >
                    <Image
                      src={feature.image}
                      alt="AI Icon"
                      width={100}
                      height={100}
                      className="absolute -right-8 top-20 z-99 -translate-x-1/2 -translate-y-1/2 transform md:left-3/4 md:top-1 md:-translate-x-0"
                    />
                    <Card className="relative h-auto w-full overflow-hidden rounded-none border-none">
                      <div className="relative h-full bg-blue-50 py-10 md:py-0">
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
                        <CardContent className="relative z-[1] flex h-full flex-col justify-center p-4 pb-2 pt-6">
                          <SectionHeading
                            title={feature.title}
                            description={feature.description}
                            textPosition="start"
                            size="sm"
                          />
                        </CardContent>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
      {/* {ket feature} */}
      <TabSection
        heading={{
          title: 'Key Features of Fantasy Sports App',
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
