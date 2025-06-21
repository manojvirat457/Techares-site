import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { TabSection } from '@/src/components/tab-section';
import { Card, CardContent } from '@/src/components/ui/card';
import { InfiniteSlider } from '@/src/components/ui/infinite-slider';
import { WorkflowSection } from '@/src/components/workflow-section';
import ContactUsDialog from '@/src/sections/contact/v3';
import FAQSection from '@/src/sections/faq';
import { HeroSection } from '@/src/sections/hero/v5';
import { ProjectSectionV4 } from '@/src/sections/project/v4';
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
} from './-data';
import { basicMetadata } from '@/src/utils/metadata';

export const metadata = basicMetadata({
  title: 'TechAres | Taxi App Development Company',
  description:
    'Revolutionizing Ride-Hailing Solutions with Cutting-Edge Technology',
});

export default function Page() {
  return (
    <>
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
              Development <br />
              Company
            </span>
          ),
          highlighttitle: 'Taxi App',
          size: 'lg',
          textPosition: 'start',
          description:
            'Taxi Booking App Development Company that aims to revolutionize your ride-hailing solutions with its cutting-edge technology',
          alignment: 'center',
        }}
        button={{
          href: '',
          label: 'Learn More',
          openNewTab: true,
        }}
      />
      {/* Solution We Offer */}
      <ProjectSectionV4
        projectDetails={projectDetails}
        imagePosition="left-edge"
        backgroundColor={{ dark: 'bg-accent-900', light: 'bg-white' }}
        alignment="right"
        keyPointsLayout="list"
        isFluid={true}
        isNoPadding={true}
      />
      <section className="relative overflow-hidden py-16 md:py-16">
        {/* <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-primary/5 to-transparent" /> */}
        <Container>
          <div className="text-center">
            <SectionHeading
              textPosition="center"
              title="Choose the Best Approach for Your Business"
              alignment="center"
              size="md"
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
                textPosition="center"
                description="Our development method starts from scratch which is ideal for businesses looking for a fully customized taxi app suited to their brand identity, specific features, and unique operational needs. This initiative taken by the Taxi app development company gives you complete control over the app’s design functionality, and scalability ensuring that your solution stands out in the competitive ride-hailing market. "
                alignment="center"
                size="sm"
              />
              <div className="mt-6 flex justify-center">
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
                textPosition="center"
                description="White Label Taxi App designed by the taxi app development company offers a faster, cost-effective solution with pre-built features that can be customized with your branding. This ready-made platform provided by the taxi app development allows for quick deployment making it an excellent choice for startups and businesses that want to make a swift entry into the market without extensive development time."
                alignment="center"
                size="sm"
              />
              <div className="mt-6 flex justify-center">
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
          title: 'Core Features of Our Taxi App',
          alignment: 'center',
          subtitle: 'KEY FEATURES',
          textPosition: 'center',
        }}
        tabs={tabs}
        tabContent={tabContent}
        defaultActiveTab="user"
      />
      {/* Unique Feature */}
      <section className="relative py-16 px-8 md:px-0">
        <Container isFluid isNoPadding>
          <SectionHeading
            title={
              <span>
                Unique Features-Enhancing the <br />
                Ride-Hailing Experience
              </span>
            }
            alignment="start"
            size="md"
            className="md:pb-16 md:pl-28"
          />
          <div className="mb-6 flex flex-col gap-4 md:flex-row">
            <div className="md:w-2/3 md:pl-28">
              <InfiniteSlider
                speedOnHover={20}
                direction={'horizontal'}
                gap={24}
              >
                {uniqueFeatures?.map((feature) => (
                  <div className="relative pt-16" key={feature.id}>
                    <div className="absolute left-60 top-11 z-99 -translate-y-1/2 transform">
                      <Image
                        src={'/assets/images/taxi-app/ai.png'}
                        alt="AI Icon"
                        width={80}
                        height={80}
                        className="h-24 w-24 md:h-28 md:w-28"
                      />
                    </div>
                    <Card className="relative h-[300px] w-[400px] overflow-hidden rounded-none border-none">
                      <div className="relative h-full bg-blue-50">
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
                        <CardContent className="relative z-[1] flex h-full flex-col justify-start p-4 pb-2 pt-6">
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
                ))}
              </InfiniteSlider>
            </div>
            <div className="hidden w-1/3 md:flex  items-center">
              <Image
                src="/assets/images/taxi-app/taxi-4.png"
                alt="Vector Image"
                width={480}
                height={200}
                className="w-full"
              />
            </div>
          </div>
        </Container>
      </section>
      {/* Next-Gen */}
      <section className="relative py-16">
        <Container>
          <div className="relative">
            {/* Image Section */}
            <div className="mb-10 hidden flex-col items-center justify-between px-16 md:absolute md:inset-0 md:-top-72 md:flex md:flex-row">
              <div className="flex w-full justify-center md:w-1/3 md:justify-start">
                <div className="relative h-64 w-64">
                  <Image
                    src="/assets/images/taxi-app/taxi-3.png"
                    alt="Taxi App Development"
                    width={500}
                    height={300}
                    className="mx-auto w-full max-w-md"
                  />
                </div>
              </div>
              <div className="absolute left-1/4 right-1/4 top-1/2 z-0 hidden -translate-y-1/2 transform md:block">
                <Image
                  src="/assets/images/taxi-app/Vector.png"
                  alt="Path Vector"
                  width={600}
                  height={200}
                  className="absolute left-0 top-1/2 -z-10 w-full -translate-y-1/2 transform"
                />
              </div>
              <div className="mt-8 flex w-full justify-center md:mt-0 md:w-1/3 md:justify-end">
                <Image
                  src="/assets/images/taxi-app/two-screen.png"
                  alt="Taxi App Screens"
                  width={276}
                  height={245}
                  className="w-[276px]"
                />
              </div>
            </div>
            {/* Content Section */}
            <div className="relative pt-16 md:pt-[200px]">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
              <div className="relative z-10 flex flex-col items-center px-9 lg:flex-row">
                <SectionHeading
                  title="Next-Gen Taxi App Development"
                  description="TechAres is revolutionizing urban mobility with its next-gen taxi app development solutions—designed for speed, scalability, and seamless user experience. Our platform combines powerful technologies like AI, real-time GPS tracking, dynamic pricing algorithms, and cloud-native architecture to build a future-ready ride-hailing ecosystem. Whether it's for daily commuters, corporate clients, startups, or fleet managers, our apps are engineered for maximum efficiency and reliability. With intuitive interfaces, multilingual support, integrated payments, and robust safety features like SOS alerts and ride tracking, TechAres delivers a smarter, safer, and more personalized transportation experience for both users and drivers."
                  textPosition="center"
                  alignment="center"
                  size="md"
                />
              </div>
            </div>
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
    </>
  );
}
