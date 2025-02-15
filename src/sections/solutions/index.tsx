import { aboutSectionData } from '@/data/about-section/v1';
import { ImageProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import Image from 'next/image';

import patternOne from 'public/assets/images/about/pattern-1.png';
import image1 from 'public/assets/images/solutions/erp.jpg';

export interface AboutSectionProps {
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

export function Solutions() {
  const { images, sectionHeading, keyPoints, description } = aboutSectionData;
  return (
    <section className="section-padding-primary overflow-hidden">
      <Container>
        <div>
          <h2 className="font-secondary text-xl font-bold leading-[1.25] text-accent-900 dark:text-white md:text-2xl">
            Solutions
          </h2>
          <p>
            We’re More than Just Developers. We Solve Real-world Problems By
            Creating Better Digital Solutions.
          </p>
        </div>
        <div>
          <p>
            As a full-stack software development agency, we make extraordinary
            things that engage your users.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Image
                src={image1}
                alt={images.image1.alt}
                width="300"
                height="300"
                className=" object-cover object-top"
              />
            </div>
            <div>09</div>
          </div>
        </div>

        {/* <div className="grid items-center gap-12 lg:grid-cols-[.92fr_1fr] 2xl:gap-20">
         
          <div className="lg:order-2" data-aos="fade-left" data-aos-delay="200">
        
            <h2 className="font-secondary text-xl font-bold leading-[1.25] text-accent-900 dark:text-white md:text-2xl">Award-winning Software Development Company</h2>
            <p>Techares is a leading software development company that specializes in providing a full range of enterprise solutions to satisfy the particular needs of your company. We are more than just a team of skilled developers and designers; we are visionary creators who believe in transforming possibilities into realities.</p>

            <p className="mt-2">Our goal is to deliver innovative, tailor-made software solutions that not only meet but exceed expectations, paving the way for our client's success. We embrace the latest trends and best practices, always staying one step ahead to ensure our clients gain a competitive advantage in their markets.</p>
            
           
          </div>

        
          {images && (
            <div className="mx-auto text-center">
              <div className="relative mx-auto grid max-w-[580px] grid-cols-2 gap-2.5 overflow-hidden">
               
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
        </div> */}
      </Container>
    </section>
  );
}
