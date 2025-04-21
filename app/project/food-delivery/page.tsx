"use client";
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
 type ProjectDetailsProps,
 faqSectionData,
 tabContent,
 tabs
} from './-data';


// export const metadata = basicMetadata({
//  title: 'TechAres | Taxi App Development Company',
//  description:
//   'Revolutionizing Ride-Hailing Solutions with Cutting-Edge Technology',
// });

export default function Page() {
 const [activeTab, setActiveTab] = useState("customer");
 return (
  <main>
   <section className="pt-40 pb-16 overflow-hidden relative">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/30 to-transparent transform translate-y-1/4" />
    <Container>
     <div className="flex flex-col lg:flex-row items-center relative z-10">
      <div className="lg:w-1/2 mb-12 lg:mb-0">
       <SectionHeading title='App Development Company' highlighttitle='Food Delivery  ' />
       <br className='my-2' />
       <ContactUsDialog>
        <Button className={cn('mr-5 rounded-full')}>
         <span>{'Get in Touch'}</span>
        </Button>
       </ContactUsDialog>
      </div>
      <div className="lg:w-1/2 relative">
       <div className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] bg-blue rounded-full -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
       <div className="relative z-10">
        <Image
         src="/assets/images/food-delivery/hero-1.png"
         alt="Food Delivery App Development"
         width={700}
         height={700}
         className="w-full max-w-lg mx-auto"
        />
       </div>
       <div className="absolute w-[150px] top-48 -right-28 z-10">
        <Image
         src="/assets/images/food-delivery/dots.png"
         alt="Food Delivery App Development"
         width={700}
         height={700}
         className="w-full max-w-lg mx-auto"
        />
       </div>
      </div>
     </div>
    </Container>
   </section>
   <section className="pb-16 overflow-hidden relative">
    <Container>
     <div className="text-center my-12">
      <SectionHeading title='Methods' highlighttitle='Development ' alignment='center' description='We offer two distinct approaches to food delivery app development' />
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-8 rounded-lg border bg-white dark:bg-zinc-900 border-neutral-800 hover:border-primary/50 transition-all duration-300">
       <div className="flex justify-center mb-6">
        <Image
         src="/assets/images/food-delivery/from-scratch.png"
         alt="From Scratch Development"
         width={100}
         height={100}
         className="w-40"
        />
       </div>
       <SectionHeading title='From Scratch' description='For businesses looking for a unique solution, we develop custom food delivery apps from scratch, ensuring complete control over features, UI/UX, and integrations.' alignment='center' size='sm' />
       <div className="flex justify-center mt-3">
        <ContactUsDialog>
         <Button className="rounded-full">
          <span>Get Quote</span>
         </Button>
        </ContactUsDialog>
       </div>
      </div>
      <div className="p-8 rounded-lg border bg-white dark:bg-zinc-900 border-neutral-800 hover:border-primary/50 transition-all duration-300">
       <div className="flex justify-center mb-6">
        <Image
         src="/assets/images/food-delivery/white-label.png"
         alt="White Label Solution"
         width={100}
         height={100}
         className="w-40"
        />
       </div>
       <SectionHeading title='White Label Food Delivery App' description='Our ready-made white-label food delivery app solutions help businesses launch faster with pre-built features, customized branding, and seamless integrations.' alignment='center' size='sm' />
       <div className="flex justify-center mt-3">
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
   <section className="max-w-6xl mx-auto  my-12">
    <Container>
     <SectionHeading title='Core Features of Our Food Delivery App' alignment='center' subtitle='FEATURES' />
     {/* Tabs */}
     <div className="relative mb-8">
      <div className="flex justify-center space-x-4 relative z-10">
       {tabs.map((tab) => (
        <button
         key={tab.id}
         onClick={() => setActiveTab(tab.id)}
         type="button"
         className={`relative px-6 py-1 rounded-t-full text-sm md:text-base font-medium transition-colors duration-200 transform translate-y-[4px] ${activeTab === tab.id ? "bg-primary" : "bg-white dark:bg-zinc-900"}`}
        >
         {tab.label}
        </button>
       ))}
      </div>
      <div className="w-full h-px bg-gray-200  relative z-0" />
     </div>
     {/* Tab Content */}
     <AnimatePresence mode="wait">
      <motion.div
       key={activeTab}
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: -20 }}
       transition={{ duration: 0.3 }}
       className="grid md:grid-cols-2 gap-8 items-center"
      >
       <div className="space-y-4">
        <SectionHeading title={tabContent[activeTab].title} alignment='start' size='sm' />
        {/* <h3 className="text-xl text-black font-bold">{tabContent[activeTab].title}</h3> */}
        <div className="space-y-4">
         {tabContent[activeTab].features.map((feature, index) => (
          <motion.div
           key={index}
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: index * 0.1 }}
           className="flex gap-4"
          >
           <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center">
            {feature.icon}
           </div>
           <div>
            <h4 className="text-primary font-bold mb-1">{feature.title}</h4>
            <p >{feature.description}</p>
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
         src={tabContent[activeTab].image || "/placeholder.svg"}
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
   <section>
    <ProjectSectionV4 projectDetails={uniqueFeatures} alignment='left' />
   </section>
   {/* Latest Updates  */}
   <section className="container mx-auto py-12">
    <div className="flex flex-col md:flex-row items-start justify-between mx-9 ">
     <div className="max-w-4xl">
      <SectionHeading title='Latest Updates of Our Food Delivery App' description='We continually update our food delivery app development services with the latest advancements, ensuring
       compliance with market trends, security protocols, and user expectations.' alignment='start' />
     </div>

     <div className="mt-0 mx-10">
      <ContactUsDialog>
       <Button className="rounded-full">
        <span>Talk To Expert</span>
       </Button>
      </ContactUsDialog>
     </div>
    </div>

    <div className="flex flex-col md:flex-row mt-8 relative mx-9">
     <div className="md:w-1/3 relative z-10 mb-8 md:mb-0">
      <Image
       src="/assets/images/food-delivery/delivery-illustration.png"
       alt="Food Delivery Illustration"
       width={300}
       height={300}
       className="object-contain"
      />
     </div>

     <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white h-fit dark:bg-zinc-900 p-4 rounded-md">
       <Image src="/assets/images/food-delivery/truck-icon.png" alt="Delivery Truck" width={50} height={50} className="mb-4" />
       <div className="flex items-start gap-4">
        <div>
         <p className="text-sm">
          Some content will be allocated here for the specific feature and that will have quite few sentences
          here like this. Add if required more. Some content will be allocated here for the specific feature
          and that will have quite few sentences here like this.
         </p>
        </div>
       </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 p-4 rounded-md h-fit">
       <Image src="/assets/images/food-delivery/truck-icon.png" alt="Delivery Truck" width={50} height={50} className="mb-4" />
       <div className="flex items-start gap-4">
        <div>
         <p className="text-sm">
          Some content will be allocated here for the specific feature and that will have quite few sentences
          here like this. Add if required more. Some content will be allocated here for the specific feature
          and that will have quite few sentences here like this.
         </p>
        </div>
       </div>
      </div>
     </div>
    </div>
    {/* Road Divider */}
    <div className="w-full h-12 bg-black relative ">
     <div className="absolute top-1/2 left-0 right-0 border-t-4 border-dashed border-white" />
    </div>
   </section>

   <TestimonialSection />
   {/* Work Flow */}
   <section className="py-16">
    <div className="max-w-7xl mx-auto px-4">
     <div className="text-center mb-12">
      <SectionHeading title='How We Develop Your Food Delivery App' alignment='center' subtitle='WORK FLOW' />
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {workflowSteps.map((step) => (
       <div
        key={step.id}
        className="relative flex items-stretch min-h-[210px]"
       >
        {/* Number, gradient, left-overlapping */}
        <div className="flex flex-col justify-center items-center z-10">
         <span className='bg-white dark:bg-accent-700 py-4'>
          <span
           className="font-extrabold text-[44px] md:text-[50px] leading-none"
           style={{
            background: "linear-gradient(180deg, #0364af 25%, #B1C4DB 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block"
           }}
          >
           {step.id.toString().padStart(2, "0")}
          </span>
         </span>
        </div>
        {/* Card */}
        <div
         className="flex-1 bg-white dark:bg-accent-700 rounded-2xl border border-gray-300 dark:border-gray-800 pl-8 pr-6 py-8 shadow-none ml-[-24px] flex items-center"
         style={{
          boxShadow: "0 0 0 0 transparent"
         }}
        >
         <div>
          <h3 className="font-extrabold md:text-lg text-md  mb-2">
           {step.title}
          </h3>
          <p className="text-[1.05rem] leading-relaxed font-[400]">
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
   <ProjectSectionV4 projectDetails={whyChooseUs} imagePosition='right' alignment='center' backgroundColor={{ dark: 'bg-accent-900', light: 'bg-zinc-50' }} keyPointsLayout='list' />
   <FAQSection faqSectionData={faqSectionData} />
  </main >
 );
}



export const projectDetails: ProjectDetailsProps = {
 sectionHeading: {
  title: 'Food Delivery App Development Company',
  description:
   "TechAres offers an on-demand food delivery app development that is aimed at making the process of ordering, delivery, and communication hassle-free. With a solid track record, we create apps that perfectly cater to your specific business requirements. We provide seamless solutions that feature live order tracking and secure payment options to help businesses flourish with innovation. These features strive to keep your customers engaged with customized services.",
  size: 'md',
 },
 isCard: false,
 isButton: true,
 button: {
  href: '/contact',
  label: 'Get in Touch',
 },
 keyPoints: [],
 image: {
  src: '/assets/images/food-delivery/hero-2.png',
  alt: 'about image five',
  width: 540,
  height: 578,
 },
};


export const uniqueFeatures: ProjectDetailsProps = {
 sectionHeading: {
  title: 'Unique Features',
 },
 isButton: false,
 isCard: false,
 keyPoints: [{
  title: 'Expertise in Mobility Solutions',
  icon: <Image src="/assets/images/food-delivery/hot-pot.png" alt="Feature 1" width={50} height={50} />,
  description:
   'With years of experience in mobility, we deliver innovative solutions designed to meet the dynamic needs of businesses, enhancing user engagement and accessibility.',
 },
 {
  title: 'Expertise in Mobility Solutions',
  icon: <Image src="/assets/images/food-delivery/hot-pot.png" alt="Feature 1" width={50} height={50} />,
  description:
   'With years of experience in mobility, we deliver innovative solutions designed to meet the dynamic needs of businesses, enhancing user engagement and accessibility.',
 },
 {
  title: 'Scalable Architecture',
  icon: <Image src="/assets/images/food-delivery/hot-pot.png" alt="Feature 1" width={50} height={50} />,
  description:
   'Our solutions are built with scalability in mind, ensuring they grow alongside your business without compromising on performance or reliability.',
 },
 {
  title: '24/7 Technical Support',
  icon: <Image src="/assets/images/food-delivery/hot-pot.png" alt="Feature 1" width={50} height={50} />,
  description:
   'Our dedicated support team is available around the clock, ready to assist with any challenges, ensuring smooth operations and optimal performance at all times.',
 },],
 image: {
  src: '/assets/images/food-delivery/hero-4.png',
  alt: 'about image five',
  width: 400,
  height: 428,
 },
};



const workflowSteps = [
 {
  id: 1,
  title: "Requirement Analysis",
  description:
   "We begin by understanding your business needs, target audience, and market goals. Our team gathers technical and functional requirements"
 },
 {
  id: 2,
  title: "UI/UX Design & Prototyping",
  description:
   "We begin by understanding your business needs, target audience, and market goals. Our team gathers technical and functional requirements"
 },
 {
  id: 3,
  title: "App Development",
  description:
   "We begin by understanding your business needs, target audience, and market goals. Our team gathers technical and functional requirements"
 },
 {
  id: 4,
  title: "Testing & Quality Assurance",
  description:
   "We begin by understanding your business needs, target audience, and market goals. Our team gathers technical and functional requirements"
 },
 {
  id: 5,
  title: "Requirement Analysis",
  description:
   "We begin by understanding your business needs, target audience, and market goals. Our team gathers technical and functional requirements"
 },
 {
  id: 6,
  title: "Delivery",
  description:
   "We begin by understanding your business needs, target audience, and market goals. Our team gathers technical and functional requirements"
 }
];



export const whyChooseUs: ProjectDetailsProps = {
 sectionHeading: {
  title: 'Why Choose TechAres ?',
  description: "At TechAres, we specialize in developing custom food delivery apps tailored to your business needs. With years of expertise, we craft feature-rich, scalable, and secure solutions using the latest technologies. Our end-to-end services cover everything from app design to deployment and ongoing support. We focus on delivering high-quality user experiences and business efficiency, ensuring long-term value and growth for your food delivery platform. Whether you're a startup or an established brand, we collaborate closely with you to create solutions that drive success and exceed expectations.",
 },
 isButton: false,
 isCard: false,
 keyPoints: [{
  title: 'Experienced Developers',
  icon: <Image src="/assets/images/food-delivery/fock-outline.png" alt="Feature 1" width={20} height={20} />,
  description:
   'Our team has expertise in developing high-performing food delivery apps.',
 },
 {
  title: 'End-to-End Solutions',
  icon: <Image src="/assets/images/food-delivery/fock-outline.png" alt="Feature 1" width={20} height={20} />,
  description:
   'From design to launch, we handle everything',
 },
 {
  title: 'Scalable Architecture',
  icon: <Image src="/assets/images/food-delivery/fock-outline.png" alt="Feature 1" width={20} height={20} />,
  description:
   'Grow your business without worrying about technology limitations.',
 },
 {
  title: 'Cost-Effective Development',
  icon: <Image src="/assets/images/food-delivery/fock-outline.png" alt="Feature 1" width={20} height={20} />,
  description:
   'Affordable plans with high ROI',
 },],
 image: {
  src: '/assets/images/food-delivery/hero-3.png',
  alt: 'about image five',
  width: 540,
  height: 578,
 },
};
