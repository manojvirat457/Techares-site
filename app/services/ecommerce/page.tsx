import AdvanceFeature from '@/app/services/ecommerce/advance-feature.tsx';
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading/index.tsx';
import { TabSection } from '@/src/components/tab-section/index.tsx';
import { Card, CardContent } from '@/src/components/ui/card.tsx';
import { WorkflowSection } from '@/src/components/workflow-section/index.tsx';
import FAQSection from '@/src/sections/faq';
import { HeroSection } from '@/src/sections/hero/v5/index.tsx';
import { ProjectSectionV4 } from '@/src/sections/project/v4/index.tsx';
import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { basicMetadata } from '@/src/utils/metadata.ts';
import {
  faqSectionData,
  solutions,
  tabContent,
  tabs,
  whyChooseUs,
  workflowSteps,
} from './-data.tsx';

export const metadata = basicMetadata({
  title: 'TechAres | Ecommerce App Development Company',
  description:
    'Custom ecommerce solutions with cutting-edge technology for your business growth',
});

export default function Page() {
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
          heading: 'h1',
        }}
        button={{
          href: '',
          label: 'Get In Touch',
          openNewTab: true,
        }}
      />
      {/* Solution We offer */}
      <section className="relative w-full overflow-hidden py-8 md:py-16">
        <Container>
          <div className="relative w-full">
            <SectionHeading
              subtitle="SERVICES"
              title="E-commerce App Development Services We Offer"
              description="We specialise in providing comprehensive e-commerce development services at TechAres tailored to your business needs. Our team of experts is always there to help you, irrespective of whether you want to build a custom ecommerce website, a B2C or B2B, or a multi-vendor marketplace. The latest technologies and platforms like Shopify and WooCommerce are leveraged to ensure your e-commerce solution is robust, scalable and user-friendly."
              alignment="center"
              textPosition="center"
              size="md"
              heading='h2'
            />
            {solutions && solutions.solutionCard.length > 0 && (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
                {solutions.solutionCard.map((solution) => (
                  <div className="relative pt-16" key={solution.title}>
                    <div className="top-13 absolute left-3/4 z-99 -translate-y-1/2 transform">
                      {solution.icon}
                    </div>
                    <Card className="relative h-full w-full max-w-full overflow-hidden rounded-none border-none md:h-[350px]">
                      <div className="relative h-full bg-blue-50">
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
                        <CardContent className="relative z-[1] flex h-full flex-col justify-center p-4 pb-2 pt-6">
                          <SectionHeading
                            title={solution.title}
                            description={solution.description}
                            textPosition="start"
                            size="sm"
                            heading='h3'
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
          heading: 'h2',
         }}
        tabs={tabs}
        tabContent={tabContent}
        defaultActiveTab="user"
      />
      <AdvanceFeature />
      <TestimonialSection />
      <WorkflowSection
        sectionHeading={{
          title: 'Strategic Workflow Taxi App Development',
          subtitle: 'WORK FLOW',
          description:
            'We follow a well-structured development process at TechAres that ensures the successful delivery of a high-performing taxi app. Our approach is designed in such a way that it meets the requirements of business objectives while providing an unlimited user experience',
          alignment: 'center',
          textPosition: 'center',
          heading: 'h2',
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
