'use client';
import { ProjectDetailsProps } from '@/data/project-section/taxi-booking';
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { useScreenSize } from '@/src/hooks/use-screen-size';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import { FaCircleCheck } from 'react-icons/fa6';
import styles from './project-v3.module.css';
const cursorStyle = cn(`cursor-pointer`);
export function ProjectSection({
  projectDetails,
}: {
  projectDetails: ProjectDetailsProps;
}) {
  const { sectionHeading, keyPoints, image } = projectDetails;
  const screenSize = useScreenSize();
  return (
    <section className="section-padding-primary overflow-hidden">
      <Container>
        <div className="flex flex-col items-center justify-between gap-x-16 gap-y-[60px] lg:flex-row xl:gap-x-[120px]">
          {!screenSize.equals('xs') && (
            <div className="lg:w-[45%]">
              {
                <div
                  className="group relative z-1 mx-auto"
                  data-aos="fade-up-left"
                  data-aos-delay="400"
                >
                  {/* <Image
    src='https://placehold.co/600x400'
    alt={''}
    fill
    className="rounded-tl-[60px] object-cover object-top"
   /> */}

                  <div data-testid="video-player" className="inline-grid">
                    {/* thumbnail image  */}
                    <div
                      data-testid="media-wrapper"
                      className={cn(
                        styles['media-wrapper'],
                        cursorStyle,
                        'relative  inline-flex overflow-hidden rounded-5',
                        // General

                        // after => image overlay effect
                        'after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-1 after:h-0 after:w-full after:bg-white/30 after:opacity-100',
                        // hover
                        'hover:transition-all hover:after:h-full hover:after:opacity-0 hover:after:duration-400 hover:after:ease-linear'
                      )}
                    >
                      <span
                        className={cn(
                          styles['media-overlay'],
                          'absolute inset-0 z-[1] hidden'
                        )}
                      ></span>
                      <Image
                        className={cn('block object-cover')}
                        src={image.src}
                        alt={image.alt}
                        width={640}
                        height={678}
                        sizes="100vw"
                      />
                    </div>
                  </div>
                  {/* <VideoPlayer
    thumbnail={{
     src: image.src,
     alt: image.alt,
     width: 640,
     height: 678,
    }}
    videoUrl={videoUrl}
    palyBtnClassName={cn(
     'relative',

     // after
     'after:absolute after:inset-0 after:[box-shadow:0_0_0_0_rgb(255_255_255/60%)] after:[animation-delay:.6s] after:transition-all  after:animate-ripple after:rounded-[inherit]',

     // before
     'before:absolute before:inset-0 before:[box-shadow:0_0_0_0_rgb(255_255_255/60%)] before:transition-all before:animate-ripple before:rounded-[inherit]'
    )}
   /> */}
                  {/* Forground shape  */}
                  <div className="absolute left-0 top-0 -z-1 h-full w-full rotate-3 rounded-5 bg-primary transition-transform duration-350 group-hover:rotate-[2deg] md:rotate-[5deg]"></div>
                </div>
              }
            </div>
          )}
          <div
            className="lg:w-1/2"
            data-aos="fade-up-right"
            data-aos-delay="400"
          >
            <SectionHeading {...sectionHeading} />
            {
              <ul
                aria-label="about us point"
                className="mt-10 flex-col items-center gap-6"
              >
                {keyPoints.length > 0 &&
                  keyPoints.map((keyPoint, index) => (
                    <li className="my-3 lg:order-2" key={index}>
                      <h3 className="flex items-center gap-3 lg:gap-4">
                        <span className="text-lg text-primary">
                          <FaCircleCheck />
                        </span>
                        <span className="block font-secondary text-md font-bold leading-[1] text-accent-900 dark:text-white">
                          {keyPoint.title}
                        </span>
                      </h3>
                      {keyPoint.description && (
                        <p className="mt-5 md:mt-[1.875rem]">
                          {keyPoint.description}
                        </p>
                      )}
                    </li>
                  ))}
              </ul>
            }
          </div>
        </div>
      </Container>
    </section>
  );
}
