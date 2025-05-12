import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { TabSection } from '@/src/components/tab-section';
import { WorkflowSection } from '@/src/components/workflow-section';
import ContactUsDialog from '@/src/sections/contact/v3';
import FAQSection from '@/src/sections/faq';
import { ProjectSectionV4 } from '@/src/sections/project/v4';
import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { basicMetadata } from '@/src/utils/metadata';
import { cn } from '@/src/utils/shadcn';
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

export const metadata = basicMetadata({
  title: 'TechAres | Food Delivery Development Company',
  description:
    'TechAres is a food delivery development company specializing in creating custom food delivery apps for businesses. Our team of experts has extensive experience in app development, ensuring your food delivery app is not only functional but also user-friendly and visually appealing.',
});

export default function Page() {
  return (
    <main>
      <section className="relative overflow-hidden pb-16 pt-40">
        <div className="absolute inset-0 translate-y-1/4 transform bg-gradient-to-t from-primary/50 via-primary/30 to-transparent" />
        <Container>
          <div className="relative z-10 flex flex-col items-center lg:flex-row">
            <div className="mb-12 lg:mb-0 lg:w-1/2">
              <SectionHeading
                title={
                  <span>
                    App <br /> Development <br /> Company
                  </span>
                }
                highlighttitle="Food Delivery  "
                size="lg"
              />
              <br className="my-2" />
              <ContactUsDialog>
                <Button className={cn('mr-5 rounded-full')}>
                  <span>{'Get in Touch'}</span>
                </Button>
              </ContactUsDialog>
            </div>
            <div className="relative lg:w-1/2">
              <div className="bg-blue absolute left-1/2 top-1/2 -z-10 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 transform rounded-full md:h-[350px] md:w-[350px]" />
              <div className="relative z-10">
                <Image
                  src="/assets/images/food-delivery/hero-1.png"
                  alt="Food Delivery App Development"
                  width={700}
                  height={700}
                  className="mx-auto w-full max-w-lg"
                />
              </div>
              <div className="absolute -right-28 top-48 z-10 w-[150px]">
                <Image
                  src="/assets/images/food-delivery/dots.png"
                  alt="Food Delivery App Development"
                  width={700}
                  height={700}
                  className="mx-auto w-full max-w-lg"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="relative overflow-hidden py-12 md:py-16">
        <Container>
          <div className="my-12 text-center">
            <SectionHeading
              title="Methods"
              highlighttitle="Development "
              alignment="center"
              textPosition="center"
              description="We offer two distinct approaches to food delivery app development"
            />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-300 bg-white p-8 transition-all duration-300 hover:border-primary/50 dark:bg-zinc-900">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/assets/images/food-delivery/from-scratch.png"
                  alt="From Scratch Development"
                  width={100}
                  height={100}
                  className="w-40"
                />
              </div>
              <SectionHeading
                title="From Scratch"
                description="For businesses looking for a unique solution, we develop custom food delivery apps from scratch, ensuring complete control over features, UI/UX, and integrations."
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
                  src="/assets/images/food-delivery/white-label.png"
                  alt="White Label Solution"
                  width={100}
                  height={100}
                  className="h-40 w-40"
                />
              </div>
              <SectionHeading
                title="White Label Food Delivery App"
                description="Our ready-made white-label food delivery app solutions help businesses launch faster with pre-built features, customized branding, and seamless integrations."
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
      <ProjectSectionV4 projectDetails={projectDetails} />
      <TabSection
        heading={{
          title: 'Core Features of Our Food Delivery App',
          alignment: 'center',
          subtitle: 'FEATURES',
          textPosition: 'center',
        }}
        tabs={tabs}
        tabContent={tabContent}
        defaultActiveTab="customer"
      />
      <TestimonialSection />
      <ProjectSectionV4
        projectDetails={uniqueFeatures}
        alignment="left"
        padding="secondary"
      />
      {/* Latest Updates  */}
      <section className="container mx-auto py-12 md:py-16">
        <div className="mx-9 flex flex-col items-start justify-between md:flex-row ">
          <div className="max-w-4xl">
            <SectionHeading
              title="Latest Updates of Our Food Delivery App"
              description="We continually update our food delivery app development services with the latest advancements, ensuring
                 compliance with market trends, security protocols, and user expectations."
              alignment="start"
            />
          </div>

          <div className="mx-10 mt-0 hidden md:block">
            <ContactUsDialog>
              <Button className="rounded-full">
                <span>Talk To Expert</span>
              </Button>
            </ContactUsDialog>
          </div>
        </div>

        <div className="relative mx-9  flex flex-col items-center md:flex-row">
          <div className="relative z-10 order-2 md:order-1 md:mb-0 md:w-1/3">
            <Image
              src="/assets/images/food-delivery/delivery-illustration.png"
              alt="Food Delivery Illustration"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>

          <div className="order-1 grid grid-cols-1 flex-col justify-center gap-6 md:order-2 md:w-2/3 md:grid-cols-2">
            <div className="h-fit rounded-md bg-white p-4 dark:bg-zinc-900">
              <Image
                src="/assets/images/food-delivery/truck-icon.png"
                alt="Delivery Truck"
                width={50}
                height={50}
                className="mb-4"
              />
              <div className="flex items-start gap-4">
                <div>
                  <p className="">
                    Some content will be allocated here for the specific feature
                    and that will have quite few sentences here like this. Add
                    if required more. Some content will be allocated here for
                    the specific feature and that will have quite few sentences
                    here like this.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-fit rounded-md bg-white p-4 dark:bg-zinc-900">
              <Image
                src="/assets/images/food-delivery/truck-icon.png"
                alt="Delivery Truck"
                width={50}
                height={50}
                className="mb-4"
              />
              <div className="flex items-start gap-4">
                <div>
                  <p className="">
                    Some content will be allocated here for the specific feature
                    and that will have quite few sentences here like this. Add
                    if required more. Some content will be allocated here for
                    the specific feature and that will have quite few sentences
                    here like this.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Road Divider */}
        <div className="relative z-20 h-12 w-full">
          <Image
            src="/assets/images/food-delivery/road.jpg"
            alt="Road Divider"
            width={1600}
            height={1000}
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2"
          />
          {/* <div className="absolute left-0 right-0 top-1/2 border-t-4 border-dashed border-white" /> */}
        </div>
      </section>
      {/* Work Flow */}
      <WorkflowSection
        sectionHeading={{ title: 'How We Develop Your Food Delivery App' }}
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
