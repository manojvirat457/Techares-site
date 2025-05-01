'use client';
import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import ContactUsDialog from '@/src/sections/contact/v3';
import FAQSection from '@/src/sections/faq';
import { ProjectSectionV4 } from '@/src/sections/project/v4';
import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { cn } from '@/src/utils/shadcn';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import {
  faqSectionData,
  tabContent,
  tabs,
  projectDetails,
  uniqueFeatures,
  workflowSteps,
  whyChooseUs,
} from './-data';

// export const metadata = basicMetadata({
//  title: 'TechAres | Taxi App Development Company',
//  description:
//   'Revolutionizing Ride-Hailing Solutions with Cutting-Edge Technology',
// });

export default function Page() {
  const [activeTab, setActiveTab] = useState('customer');
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
      <section className="relative overflow-hidden py-16">
        <Container>
          <div className="my-12 text-center">
            <SectionHeading
              title="Methods"
              highlighttitle="Development "
              alignment="center"
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
                  className="w-40"
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
      <section className="mx-auto max-w-6xl py-16">
        <Container>
          <SectionHeading
            title="Core Features of Our Food Delivery App"
            alignment="center"
            subtitle="FEATURES"
            className="mb-12"
          />
          {/* Tabs */}
          <div className="relative mb-8 pb-1">
            {' '}
            <div className="relative z-10 flex justify-center space-x-16">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  type="button"
                  className={`relative transform rounded-t-full px-6 py-1 text-sm font-medium transition-colors duration-200 md:text-base ${activeTab === tab.id ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-400 dark:hover:bg-zinc-700'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-20 h-px translate-y-[-4px] bg-gray-200 dark:bg-gray-700" />
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid items-center gap-8 md:grid-cols-2"
            >
              <div className="space-y-4">
                <SectionHeading
                  title={tabContent[activeTab].title}
                  alignment="start"
                  size="sm"
                />
                <div className="space-y-4">
                  {tabContent[activeTab].features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="mb-1 font-bold text-primary">
                          {feature.title}
                        </h4>
                        <p>{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <Image
                  src={tabContent[activeTab].image || '/placeholder.svg'}
                  alt={`${tabContent[activeTab].title} illustration`}
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>
      <ProjectSectionV4
        projectDetails={uniqueFeatures}
        alignment="left"
        padding="secondary"
      />
      {/* Latest Updates  */}
      <section className="container mx-auto py-16">
        <div className="mx-9 flex flex-col items-start justify-between md:flex-row ">
          <div className="max-w-4xl">
            <SectionHeading
              title="Latest Updates of Our Food Delivery App"
              description="We continually update our food delivery app development services with the latest advancements, ensuring
       compliance with market trends, security protocols, and user expectations."
              alignment="start"
            />
          </div>

          <div className="mx-10 mt-0">
            <ContactUsDialog>
              <Button className="rounded-full">
                <span>Talk To Expert</span>
              </Button>
            </ContactUsDialog>
          </div>
        </div>

        <div className="relative mx-9 mt-8 flex flex-col md:flex-row">
          <div className="relative z-10 mb-8 md:mb-0 md:w-1/3">
            <Image
              src="/assets/images/food-delivery/delivery-illustration.png"
              alt="Food Delivery Illustration"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:w-2/3 md:grid-cols-2">
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
                  <p className="text-sm">
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
                  <p className="text-sm">
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
        <div className="relative h-12 w-full bg-black ">
          <div className="absolute left-0 right-0 top-1/2 border-t-4 border-dashed border-white" />
        </div>
      </section>

      <TestimonialSection />
      {/* Work Flow */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <SectionHeading
              title="How We Develop Your Food Delivery App"
              alignment="center"
              subtitle="WORK FLOW"
            />
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {workflowSteps.map((step) => (
              <div
                key={step.id}
                className="relative flex min-h-[210px] items-stretch"
              >
                {/* Number, gradient, left-overlapping */}
                <div className="z-10 flex flex-col items-center justify-center">
                  <span className="bg-white py-4 dark:bg-accent-700">
                    <span
                      className="text-[44px] font-extrabold  md:text-[50px]"
                      style={{
                        background:
                          'linear-gradient(180deg, #0364af 25%, #B1C4DB 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-block',
                      }}
                    >
                      {step.id.toString().padStart(2, '0')}
                    </span>
                  </span>
                </div>
                {/* Card */}
                <div
                  className="ml-[-24px] flex flex-1 items-center rounded-2xl border border-gray-300 bg-white py-8 pl-8 pr-6 shadow-none dark:border-gray-800 dark:bg-accent-700"
                  style={{
                    boxShadow: '0 0 0 0 transparent',
                  }}
                >
                  <div>
                    <h3 className="mb-2 text-md font-extrabold  md:text-lg">
                      {step.title}
                    </h3>
                    <p className="text-[1.05rem] font-[400]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
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
