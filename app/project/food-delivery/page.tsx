import { faqSectionData } from '@/data/faq-section/v1';
import { Button } from '@/src/components/button';
import { ServiceCard } from '@/src/components/cards/service/v1';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { Card, CardContent } from '@/src/components/ui/card';
import { H1, H2 } from '@/src/components/ui/doc/h-tag';
import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { AboutSection } from '@/src/sections/about/v1';
import FAQSection from '@/src/sections/faq';
import IndustriesSection from '@/src/sections/industries/v1';
import { ProjectSection } from '@/src/sections/project/v3';
import { ServiceSection } from '@/src/sections/service/v1';
import ServicesSection from '@/src/sections/service/v3';
import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { basicMetadata } from '@/src/utils/metadata';
import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';
import { cn } from '@/src/utils/shadcn';
import { ArrowRight, Cog, LayoutDashboard, MapPin, Navigation, Star, Users } from 'lucide-react';
import Image from 'next/image';
import { latestUpdate, ourWorkFlowData, projectDetails, servicesData, solutions, whyChooseSectionData } from './-data';
import styles from "./food-devliery.module.css";


export const metadata = basicMetadata({
 title: 'TechAres | Taxi App Development Company',
 description: 'Revolutionizing Ride-Hailing Solutions with Cutting-Edge Technology',
});

export default function Page() {
 return (
  <>
   <MainHeader version="1" />
   <section className='relative flex items-center justify-center overflow-hidden py-[9.375rem] lg:min-h-screen'>
    <div
     className={cn(
      "absolute inset-0  bg-accent-700 bg-cover bg-no-repeat bg-blend-luminosity [background-position:top_center] [transform:scale(1)] [transition:7000ms_ease,opacity_1500ms_ease-in]",
      // before
      "before:absolute before:inset-0 before:bg-[#EDF8FE] before:opacity-80  dark:before:bg-accent-900",
      // after
      "after:absolute after:inset-0  after:[background:linear-gradient(180deg,rgba(255,255,255,0)_0%,#FFFFFF_100%)]  dark:after:[background:linear-gradient(180deg,rgba(20,20,22,0.00)_0%,#141416_100%)]",
     )}
     style={{ backgroundImage: `url(${'/assets/images/hero/hero-1.png'})` }}
    >
     <Container>
      {/* Main content  */}
      <div
       className={cn(
        "relative z-10 mx-auto  max-w-[800px] text-center text-white lg:mt-[60px]",
        styles["hero-content"],
       )}
      >
       <div className="space-y-6 md:space-y-8 py-52">
        <H1 className="font-secondary text-2xl font-semibold uppercase leading-[1.1] md:text-3xl">
         Food Delivery App Development Company
        </H1>
        <p className="text-accent-200">
         Transform Your Food Business with a Powerful, Custom-Built App!
        </p>
        <Button asChild className={cn("rounded-full")}>
         <CustomLink
          aria-label={'Get Free quote'}
          href={''}
          openNewTab={true}
         >
          <span>{'Get started today!'}</span>
          <svg
           width={24}
           height={9}
           viewBox="0 0 28 9"
           fill="currentColor"
           xmlns="http://www.w3.org/2000/svg"
          >
           <path d="M27.7911 5.02543C27.9863 4.83016 27.9863 4.51358 27.7911 4.31832L24.6091 1.13634C24.4138 0.941077 24.0972 0.941077 23.902 1.13634C23.7067 1.3316 23.7067 1.64818 23.902 1.84345L26.7304 4.67187L23.902 7.5003C23.7067 7.69556 23.7067 8.01214 23.902 8.20741C24.0972 8.40267 24.4138 8.40267 24.6091 8.20741L27.7911 5.02543ZM0.4375 5.17188L27.4375 5.17187L27.4375 4.17187L0.4375 4.17188L0.4375 5.17188Z" />
          </svg>
         </CustomLink>
        </Button>
       </div>
      </div>
     </Container>
    </div >
   </section>
   <ProjectSection projectDetails={projectDetails} />;
   {/* <AboutSection aboutSectionData={aboutSectionData} /> */}
   {/* <StatisticsSection /> */}
   {/* Solution We offer */}
   <section className="py-20 px-4">
    <Container>
     <div className="container mx-auto ">
      <h2 className="text-xl md:text-2xl text-white font-bold text-center mb-16"></h2>
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
       {solutions && solutions.length > 0 && (
        <div className="-mx-4 flex flex-wrap justify-center gap-y-30px">
         {solutions.map((solution, index) => (
          <div
           key={index}
           data-aos="fade-up"
           data-aos-delay={getStaggeredDelay([200, 400, 600], index)}
           className="w-full px-4 md:w-1/2 md:px-[15px]"
          >
           <ServiceCard title={solution.title} description={solution.description} icon={solution.icon} />
          </div>
         ))}
        </div>
       )}
      </div>
     </div>
    </Container>
   </section>
   <ServicesSection servicesData={servicesData} />
   {/* Development Method */}
   <section className="py-20 px-4">
    <Container>
     <div className="container mx-auto max-w-7xl">
      <div className="text-center max-w-4xl mx-auto mb-16">
       <H2 className="text-xl md:text-2xl text-white font-bold mb-6">Development Methods – Choose the Best Approach for Your Business</H2>
       <p className="text-accent-200">
        At TechAres, we offer two distinct development approaches to help you launch a taxi booking app that aligns
        with your business needs. Whether you require a fully customized solution or a fast, ready-to- deploy
        platform, we have the right option for you.
       </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
       {/* Left side - Image */}
       <div className="lg:w-1/2">
        <figure
         className={cn(
          // General
          'relative z-1 overflow-hidden rounded-5',

          // after => image overlay effect
          'after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-1 after:h-0 after:w-full after:bg-white/30 after:opacity-100',
          // hover
          'group-hover:transition-all group-hover:after:h-full group-hover:after:opacity-0 group-hover:after:duration-400 group-hover:after:ease-linear'
         )}
        >
         <Image
          src={'https://placehold.co/800x850'}
          alt={'development methods image'}
          width={850}
          height={575}
          sizes="100vw"
          className="object-cover transition-transform duration-500 [transform:scale(1.05)] group-hover:[transform:scale(1)]"
         />
        </figure>
       </div>

       {/* Right side - Content */}
       <div className="lg:w-1/2 md:space-y-12 space-y-8 xs:text-center">
        {[1, 2].map((item) => (
         <div key={item} className="relative">
          {/* Decorative square */}
          <div className="md:pl-12 px-2">
           <h3 className="text-xl md:text-2xl font-bold mb-2">Development from scratch</h3>
           <p className="text-accent-200">
            Our &quot;From Scratch&quot; Development method is ideal for businesses looking for a fully customized taxi
            app tailored to their brand identity, specific features, and unique operational needs. This approach
            gives you complete control over the app&apos;s design, functionality, and scalability, ensuring that your
            solution stands out in the competitive ride-hailing market.
           </p>
          </div>
         </div>
        ))}
       </div>
      </div>
     </div>
    </Container>
   </section>
   {/* {ket feature} */}
   <section className="py-16 px-4 md:px-6" >
    <div className="container mx-auto">
     <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">Key Features</h2>
      <p className="text-accent-200 max-w-2xl mx-auto">
       Comprehensive features for drivers, users, and administrators
      </p>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto lg:mx-32 gap-8">
      {[
       {
        title: "Driver Features",
        icon: <Navigation className="h-6 w-6" />,
        features: ["Trip requests & navigation", "Earnings tracking", "Ratings & reviews"],
       },
       {
        title: "User Features",
        icon: <MapPin className="h-6 w-6" />,
        features: ["Ride booking & tracking", "Secure payments", "Ride history"],
       },
       {
        title: "Admin Panel",
        icon: <Cog className="h-6 w-6" />,
        features: ["Business insights", "Fleet management", "User controls"],
       },
       {
        title: "Dispatcher Dashboard",
        icon: <LayoutDashboard className="h-6 w-6" />,
        features: ["Ride allocation", "Fleet tracking", "Analytics"],
       },
       {
        title: "Corporate Console",
        icon: <Users className="h-6 w-6" />,
        features: ["Ride management", "Expense tracking", "Travel logs"],
       },
       {
        title: "Unique Features",
        icon: <Star className="h-6 w-6" />,
        features: ["AI route optimization", "Multi-payment support", "SOS features"],
       },
      ].map((item, index) => (
       <Card key={index} className="bg-zinc-900 border-zinc-800">
        <CardContent className="p-6">
         <div className="mb-4 text-primary">{item.icon}</div>
         <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
         <ul className="space-y-2">
          {item.features.map((feature, idx) => (
           <li key={idx} className="flex items-center text-zinc-400">
            <ArrowRight className="h-4 w-4 mr-2 text-primary" />
            {feature}
           </li>
          ))}
         </ul>
        </CardContent>
       </Card>
      ))}
     </div>
    </div>
   </section>
   {/* Latest Updates  */}
   <section>
    <Container>
     <div className="text-center text-white  mb-12">
      <h2 className="text-3xl font-bold mb-4">Latest Updates of Our Food Delivery App</h2>
      <p className="text-zinc-300 max-w-2xl mx-auto">Continuous enhancements for better security, efficiency, and insights</p>
     </div>
     <ServiceSection className="!pt-0" {...latestUpdate} />
    </Container>
   </section>
   <TestimonialSection />
   {/* <AboutSectionTwo /> */}
   <IndustriesSection industriesSectionData={ourWorkFlowData} itemsPerRow={3} />
   <AboutSection aboutSectionData={whyChooseSectionData} />
   <FAQSection faqSectionData={faqSectionData} />
   {/* <section className="relative overflow-hidden  py-20">
    <Container>
     <div className="container mx-auto z-99">
      <div className="text-center text-white  mb-12">
       <h2 className="text-3xl font-bold mb-4">Solutions We Offer</h2>
       <p className="text-zinc-300 max-w-2xl mx-auto">Tailored taxi app solutions for diverse needs</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-1">
       <Card className="bg-zinc-800 border-zinc-700">
        <CardContent className="p-6">
         <div className="mb-4 text-primary">
          <Code2 className="h-8 w-8" />
         </div>
         <h3 className="text-xl font-bold mb-3">Development from scratch</h3>
         <p className="text-zinc-400 mb-4">
          Fully customized taxi app tailored to your brand identity and specific operational needs.
         </p>
         <ul className="space-y-2 mb-6">
          <li className="flex items-center text-zinc-400">
           <ArrowRight className="h-4 w-4 mr-2 text-primary" />
           Complete control over design
          </li>
          <li className="flex items-center text-zinc-400">
           <ArrowRight className="h-4 w-4 mr-2 text-primary" />
           Custom functionality
          </li>
          <li className="flex items-center text-zinc-400">
           <ArrowRight className="h-4 w-4 mr-2 text-primary" />
           Scalable solution
          </li>
         </ul>
         <Button className="group">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
         </Button>
        </CardContent>
       </Card>
       <Card className="bg-zinc-800 border-zinc-700">
        <CardContent className="p-6">
         <div className="mb-4 text-primary">
          <Timer className="h-8 w-8" />
         </div>
         <h3 className="text-xl font-bold mb-3">White Label Taxi App</h3>
         <p className="text-zinc-400 mb-4">
          Ready-made platform with pre-built features that can be customized with your branding.
         </p>
         <ul className="space-y-2 mb-6">
          <li className="flex items-center text-zinc-400">
           <ArrowRight className="h-4 w-4 mr-2 text-primary" />
           Quick deployment
          </li>
          <li className="flex items-center text-zinc-400">
           <ArrowRight className="h-4 w-4 mr-2 text-primary" />
           Cost-effective
          </li>
          <li className="flex items-center text-zinc-400">
           <ArrowRight className="h-4 w-4 mr-2 text-primary" />
           Market-ready solution
          </li>
         </ul>
         <Button className="group">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
         </Button>
        </CardContent>
       </Card>
      </div>
     </div>
     <Image
      src="/assets/images/cta/pattern-2.png"
      alt="cta section bg pattern"
      width={429}
      height={359}
      className="pointer-events-none absolute bottom-0 right-0 -z-1 animate-float-bob-x object-cover max-[1650px]:hidden"
      sizes="100vw"
     />
    </Container>
   </section> */}
   {/* <WorkprocessSection /> */}
   <Footer />
  </>
 );
}
