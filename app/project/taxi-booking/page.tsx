import { Button } from '@/src/components/button';
import { ServiceCard } from '@/src/components/cards/service/v1';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { Card, CardContent } from '@/src/components/ui/card';
import { H1, H2 } from '@/src/components/ui/doc/h-tag';
import { AboutSection } from '@/src/sections/about/v1';
import FAQSection from '@/src/sections/faq';
import IndustriesSection from '@/src/sections/industries/v1';
import { ProjectSection } from '@/src/sections/project/v3';
import { ServiceSection } from '@/src/sections/service/v1';
import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { basicMetadata } from '@/src/utils/metadata';
import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';
import { cn } from '@/src/utils/shadcn';
import {
  ArrowRight,
  Cog,
  LayoutDashboard,
  MapPin,
  Navigation,
  Star,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import {
  faqSectionData,
  latestUpdate,
  ourWorkFlowData,
  projectDetails,
  solutions,
  whyChooseSectionData,
} from './-data';
import styles from './taxi-booking.module.css';

export const metadata = basicMetadata({
  title: 'TechAres | Taxi App Development Company',
  description:
    'Revolutionizing Ride-Hailing Solutions with Cutting-Edge Technology',
});

export default function Page() {
  return (
    <>
      <section className="relative flex items-center justify-center overflow-hidden py-[9.375rem] lg:min-h-screen">
        <div
          className={cn(
            'absolute inset-0  bg-accent-700 bg-cover bg-no-repeat bg-blend-luminosity [background-position:top_center] [transform:scale(1)] [transition:7000ms_ease,opacity_1500ms_ease-in]',
            // before
            'before:absolute before:inset-0 before:bg-[#EDF8FE] before:opacity-80  dark:before:bg-accent-900',
            // after
            'after:absolute after:inset-0  after:[background:linear-gradient(180deg,rgba(255,255,255,0)_0%,#FFFFFF_100%)]  dark:after:[background:linear-gradient(180deg,rgba(20,20,22,0.00)_0%,#141416_100%)]'
          )}
          style={{
            backgroundImage: `url(${'/assets/images/hero/hero-1.png'})`,
          }}
        >
          <Container>
            {/* Main content  */}
            <div
              className={cn(
                'relative z-10 mx-auto  max-w-[800px] text-center text-white lg:mt-[60px]',
                styles['hero-content']
              )}
            >
              <div className="space-y-6 py-52 md:space-y-8">
                <H1 className="font-secondary text-2xl font-semibold uppercase leading-[1.1] md:text-3xl">
                  Taxi App Development Company
                </H1>
                <p className="text-accent-200">
                  Revolutionizing Ride-Hailing Solutions with Cutting-Edge
                  Technology
                </p>
                <Button asChild className={cn('rounded-full')}>
                  <CustomLink
                    aria-label={'Get Free quote'}
                    href={''}
                    openNewTab={true}
                  >
                    <span>{'Get Free quote'}</span>
                  </CustomLink>
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <ProjectSection projectDetails={projectDetails} />;
      {/* <AboutSection aboutSectionData={aboutSectionData} /> */}
      {/* <StatisticsSection /> */}
      {/* Solution We offer */}
      <section className="px-4 py-20">
        <Container>
          <div className="container mx-auto ">
            <h2 className="mb-16 text-center text-xl font-bold text-white md:text-2xl">
              Solutions We Offer
            </h2>
            <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row">
              {solutions && solutions.length > 0 && (
                <div className="-mx-4 flex flex-wrap justify-center gap-y-30px">
                  {solutions.map((solution, index) => (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={getStaggeredDelay([200, 400, 600], index)}
                      className="w-full px-4 md:w-1/2 md:px-[15px]"
                    >
                      <ServiceCard
                        title={solution.title}
                        description={solution.description}
                        icon={solution.icon}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
      {/* Development Method */}
      <section className="px-4 py-20">
        <Container>
          <div className="container mx-auto max-w-7xl">
            <div className="mx-auto mb-16 max-w-4xl text-center">
              <H2 className="mb-6 text-xl font-bold text-white md:text-2xl">
                Development Methods – Choose the Best Approach for Your Business
              </H2>
              <p className="text-accent-200">
                At TechAres, we offer two distinct development approaches to
                help you launch a taxi booking app that aligns with your
                business needs. Whether you require a fully customized solution
                or a fast, ready-to- deploy platform, we have the right option
                for you.
              </p>
            </div>

            <div className="flex flex-col gap-12 md:flex-row">
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
              <div className="xs:text-center space-y-8 md:space-y-12 lg:w-1/2">
                {[
                  {
                    title: 'Development from scratch',
                    description:
                      'Our "From Scratch" Development method is ideal for businesses looking for a fully customized taxi app tailored to their brand identity, specific features, and unique operational needs. This approach gives you complete control over the app’s design, functionality, and scalability, ensuring that your solution stands out in the competitive ride-hailing market.',
                  },
                  {
                    title: 'White Label Taxi App',
                    description:
                      'On the other hand, our White-Label Taxi App offers a faster, cost-effective solution with pre-built features that can be customized with your branding. This ready-made platform allows for quick deployment, making it an excellent choice for startups and businesses that want to enter the market swiftly without extensive development time. Both approaches come with robust security, seamless integrations, and scalability to support business growth.',
                  },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    {/* Decorative square */}
                    <div className="px-2 md:pl-12">
                      <h3 className="mb-2 text-xl font-bold md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="text-accent-200">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* {ket feature} */}
      <section className="px-4 py-16 md:px-6">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Key Features</h2>
            <p className="mx-auto max-w-2xl text-accent-200">
              Comprehensive features for drivers, users, and administrators
            </p>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:mx-32 lg:grid-cols-3">
            {[
              {
                title: 'Driver Features',
                icon: <Navigation className="h-6 w-6" />,
                features: [
                  'Trip requests & navigation',
                  'Earnings tracking',
                  'Ratings & reviews',
                ],
              },
              {
                title: 'User Features',
                icon: <MapPin className="h-6 w-6" />,
                features: [
                  'Ride booking & tracking',
                  'Secure payments',
                  'Ride history',
                ],
              },
              {
                title: 'Admin Panel',
                icon: <Cog className="h-6 w-6" />,
                features: [
                  'Business insights',
                  'Fleet management',
                  'User controls',
                ],
              },
              {
                title: 'Dispatcher Dashboard',
                icon: <LayoutDashboard className="h-6 w-6" />,
                features: ['Ride allocation', 'Fleet tracking', 'Analytics'],
              },
              {
                title: 'Corporate Console',
                icon: <Users className="h-6 w-6" />,
                features: [
                  'Ride management',
                  'Expense tracking',
                  'Travel logs',
                ],
              },
              {
                title: 'Unique Features',
                icon: <Star className="h-6 w-6" />,
                features: [
                  'AI route optimization',
                  'Multi-payment support',
                  'SOS features',
                ],
              },
            ].map((item, index) => (
              <Card key={index} className="border-zinc-800 bg-zinc-900">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">{item.icon}</div>
                  <h3 className="mb-4 text-lg font-semibold">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-zinc-400">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
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
          <div className="mb-12 text-center  text-white">
            <h2 className="mb-4 text-3xl font-bold">Latest Updates</h2>
            <p className="mx-auto max-w-2xl text-zinc-300">
              Continuous enhancements for better security, efficiency, and
              insights
            </p>
          </div>
          <ServiceSection className="!pt-0" {...latestUpdate} />
        </Container>
      </section>
      <TestimonialSection />
      {/* <AboutSectionTwo /> */}
      <IndustriesSection
        industriesSectionData={ourWorkFlowData}
        itemsPerRow={3}
      />
      <AboutSection aboutSectionData={whyChooseSectionData} />
      <FAQSection faqSectionData={faqSectionData} />
      <section
        className={cn(
          'bg-accent-700 bg-cover bg-no-repeat bg-blend-luminosity [background-position:top_center] [transform:scale(1)] [transition:7000ms_ease,opacity_1500ms_ease-in]',
          // before
          'before:absolute before:inset-0 before:bg-[#EDF8FE] before:opacity-80  dark:before:bg-accent-900',
          // after
          'after:absolute after:inset-0  after:[background:linear-gradient(180deg,rgba(255,255,255,0)_0%,#FFFFFF_100%)]  dark:after:[background:linear-gradient(180deg,rgba(20,20,22,0.00)_0%,#141416_100%)]'
        )}
        style={{
          backgroundImage: `url(${'/assets/images/hero/hero-1.png'})`,
        }}
      >
        <Container>
          <div className="container mx-auto h-96">
            <h2 className="text-center text-xl font-bold text-white md:text-2xl">
              <span className="text-primary">{'Unique Features - '}</span>{' '}
              {'Enhancing the Ride- Experience'}
            </h2>
            <p className="m mb-8 text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem
              id debitis, aliquid exercitationem illo repellendus accusantium?
              Veritatis maxime, repudiandae unde recusandae blanditiis quo
              soluta eveniet. Rerum officiis dolor fugiat! Voluptatem nemo
              praesentium excepturi nulla error quos, eos, deleniti doloremque
              temporibus necessitatibus quas consectetur accusantium veniam
              similique voluptatibus numquam aliquid!
            </p>
          </div>
        </Container>
      </section>
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
      {/* Unique Feature Section Here */}
      {/* <WorkprocessSection /> */}
    </>
  );
}
