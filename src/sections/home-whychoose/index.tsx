import { homeWhyChooseData } from '@/data/home-whychoose';
import { ImageProps } from '@/src/common-types';
import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';

import patternOne from 'public/assets/images/about/pattern-1.png';

export interface HomeWhyChooseProps {
  images: {
    image1: ImageProps;
    image2: ImageProps;
    image3: ImageProps;
    image4: ImageProps;
  };
  sectionHeading: SectionHeadingWithoutStylingProps;
  keyPoints: {
    icon: React.ReactNode;
    title: string;
  }[];
  description?: string;
}

const listItems = ["First Item", "Second Item", "Third Item"];


export function WhyChooseSection() {
  const { images, sectionHeading, keyPoints, description } = homeWhyChooseData;
  return (
    <section className="section-padding-primary overflow-hidden">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[.92fr_1fr] 2xl:gap-20">
          {/* Content  */}
          <div className="lg:order-1" data-aos="fade-left" data-aos-delay="200">
            {/* <SectionHeading {...sectionHeading} /> */}
            <h2 className="font-secondary text-xl font-bold leading-[1.25] text-accent-900 dark:text-white md:text-2xl">
              <span className='text-primary'>Why Choose</span> Techares?
            </h2>
            <h6 className="text-sky-500">

            </h6>
            <p className='text-justify'>
              Techares stands out as a leader in delivering exceptional software solutions designed to address real-world challenges. With a seasoned team of developers, designers, and strategists, we blend innovation with practicality to achieve measurable results.
            </p>

            <p className="mt-2 text-justify">
              Our customer-first approach ensures every project aligns perfectly with your goals. We embrace cutting-edge technologies to provide tailored, scalable solutions that grow with your business. Beyond development, we focus on end-to-end support, from initial consultations to post-launch maintenance, ensuring your success every step of the way.
              Partner with Techares for a commitment to quality, reliable execution, and a shared passion for excellence. Together, let’s bring your ideas to life and drive your business forward.
            </p>

            <ul className="mt-6 space-y-1 list-disc list-inside text-gray-200">
              {listItems.map((item, index) => (
                <li key={index} className="text-sm font-medium">
                  {item}
                </li>
              ))}
            </ul>
            <div className='mt-6'>
              <Button asChild className={cn('rounded-full')}>
                <CustomLink
                  aria-label="Discover More"
                  href="/"

                >
                  <span>Discover More</span>
                  <svg
                    width={28}
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

          {/* Images  */}
          <div>
            {images && (
              <div className="mx-auto text-center">
                <div className="relative mx-auto grid max-w-[580px] grid-cols-2 gap-2.5 overflow-hidden">
                  {/* Image 1  */}
                  <div className="relative flex justify-end overflow-hidden">
                    <div
                      className="relative z-[2] mt-auto"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <span className="absolute -left-2.5 -top-2.5 -z-1 h-full w-full rounded-tl-[60px] bg-primary-light"></span>
                      <div className="relative z-[4] overflow-hidden">
                        <Image
                          src={images.image1.src}
                          alt={images.image1.alt}
                          width={images.image1.width}
                          height={images.image1.height}
                          className="rounded-tl-[60px] object-cover object-top"
                        />
                      </div>
                    </div>

                    {/* Pattern  */}
                    <Image
                      src={patternOne.src}
                      width={383}
                      height={246}
                      alt="pattern-1"
                      placeholder="blur"
                      blurDataURL={patternOne.blurDataURL}
                      className="absolute bottom-[-55%] left-[42px] z-1  block object-cover"
                      data-aos="zoom-in"
                      data-aos-delay="250"
                    />
                  </div>

                  {/* Image 2  */}
                  <div className="flex overflow-hidden">
                    <Image
                      src={images.image2.src}
                      alt={images.image2.alt}
                      width={images.image2.width}
                      height={images.image2.height}
                      className="rounded-[80px_10px] object-cover"
                      data-aos="fade-right"
                      data-aos-delay="300"
                    />
                  </div>

                  {/* Image 3  */}
                  <div className="ml-auto flex max-w-[250px] justify-end overflow-hidden">
                    <Image
                      src={images.image3.src}
                      alt={images.image4.alt}
                      width={images.image3.width}
                      height={images.image3.height}
                      className="rounded-[50px_10px] object-cover"
                      data-aos="fade-left"
                      data-aos-delay="350"
                    />
                  </div>

                  {/* Image 4 */}
                  <div className="overflow-hidden">
                    <Image
                      src={images.image4.src}
                      alt={images.image4.alt}
                      width={images.image4.width}
                      height={images.image4.height}
                      className="rounded-10 rounded-br-[80px] object-cover"
                      data-aos="fade-right"
                      data-aos-delay="400"
                    />
                  </div>

                  <div className="absolute left-1/2 top-1/2 z-[4] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                    <div data-aos="zoom-in" data-aos-delay="450">
                      <span className="grid h-[100px] w-[100px]  place-items-center rounded-full border-[12px] border-white bg-primary text-[30px] text-white">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 27 27"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M26.8125 13.8672C26.8125 14.9922 25.875 15.9297 24.8125 15.9297H15.8125V24.9297C15.8125 25.9922 14.875 26.8672 13.8125 26.8672C12.6875 26.8672 11.8125 25.9922 11.8125 24.9297V15.9297H2.8125C1.6875 15.9297 0.8125 14.9922 0.8125 13.8672C0.8125 12.8047 1.6875 11.9297 2.8125 11.9297H11.8125V2.92969C11.8125 1.80469 12.6875 0.867188 13.8125 0.867188C14.875 0.867188 15.8125 1.80469 15.8125 2.92969V11.9297H24.8125C25.875 11.8672 26.8125 12.8047 26.8125 13.8672Z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
