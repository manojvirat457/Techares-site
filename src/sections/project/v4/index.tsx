'use client';
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { useScreenSize } from '@/src/hooks/use-screen-size';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import { FaCircleCheck } from 'react-icons/fa6';
import styles from './project-v3.module.css';
import type { ProjectDetailsProps } from '@/app/project/taxi-booking/-data';
import { Button } from '@/src/components/button';
import { CustomLink } from '@/src/components/custom-link';
const cursorStyle = cn('cursor-pointer');
export interface ProjectSectionV4Props {
  projectDetails: ProjectDetailsProps;
  backgroundColor?: {
    light?: string;
    dark?: string;
  };
  alignment?: 'left' | 'center' | 'right';
  imagePosition?: 'left' | 'right';
  keyPointsLayout?: 'grid' | 'list';
  isCard?: boolean;
  isButton?: boolean;
}

export function ProjectSectionV4({
  projectDetails,
  backgroundColor = {
    light: 'bg-zinc-200',
    dark: 'bg-zinc-900',
  },
  alignment = 'center',
  imagePosition = 'left',
  keyPointsLayout = 'grid',
}: ProjectSectionV4Props) {
  const { sectionHeading, keyPoints, image, isCard, button } = projectDetails;
  const screenSize = useScreenSize();
  return (
    <section
      className={cn(
        'section-padding-primary overflow-hidden',
        backgroundColor.light,
        `dark:${backgroundColor.dark}`
      )}
    >
      <Container isNoPadding>
        <div
          className={cn(
            'flex flex-col gap-x-16 gap-y-[60px] lg:flex-row xl:gap-x-[120px]',
            {
              'items-start': alignment === 'left',
              'items-center': alignment === 'center',
              'items-end': alignment === 'right',
              'lg:flex-row-reverse': imagePosition === 'right',
            }
          )}
        >
          {!screenSize.equals('xs') && (
            <div
              className={cn('lg:w-[30%]', {
                'lg:w-[45%]': alignment === 'center',
              })}
            >
              {
                <div
                  className="group relative z-1 mx-auto"
                  data-aos="fade-up-left"
                  data-aos-delay="400"
                >
                  <div data-testid="video-player" className="inline-grid">
                    <div
                      data-testid="media-wrapper"
                      className={cn(
                        styles['media-wrapper'],
                        cursorStyle,
                        'relative  inline-flex overflow-hidden rounded-5',
                        // General
                        // after => image overlay effect
                        'after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-1 after:h-0 after:w-full after:bg-white/30 after:opacity-100'
                        // hover
                        // 'hover:transition-all hover:after:h-full hover:after:opacity-0 hover:after:duration-400 hover:after:ease-linear'
                      )}
                    >
                      <Image
                        className={cn('block object-cover')}
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        sizes="100vw"
                      />
                    </div>
                  </div>
                </div>
              }
            </div>
          )}
          <div
            className={cn('lg:w-[65%]', {
              'lg:w-1/2': alignment === 'center',
            })}
            data-aos="fade-up-right"
            data-aos-delay="400"
          >
            <SectionHeading {...sectionHeading} />
            {keyPoints && keyPoints.length > 0 && (
              <div
                className={cn(
                  'mt-7 gap-5 text-accent-900 dark:text-white md:mt-10 md:gap-[1.875rem]',
                  keyPointsLayout === 'grid'
                    ? 'grid sm:grid-cols-2'
                    : 'flex flex-col'
                )}
              >
                {keyPoints.map((keyPoint, index) => (
                  <div
                    key={index}
                    className={cn(
                      'group',
                      isCard
                        ? 'flex min-h-[64px] items-center gap-5 rounded-5 border border-primary px-6 py-2 md:min-h-[85px] md:px-[1.875rem] md:py-3'
                        : keyPointsLayout === 'grid'
                          ? 'flex flex-col self-stretch text-left'
                          : 'flex items-start gap-5'
                    )}
                  >
                    <span
                      className={cn(
                        'mb-4 text-lg text-primary',
                        isCard
                          ? 'duration flex-none scale-100 transition-transform ease-linear group-hover:scale-90'
                          : 'flex-none'
                      )}
                    >
                      {keyPoint.icon || <FaCircleCheck />}
                    </span>
                    {/* Ensure text is left-aligned */}
                    <div className="flex flex-col gap-2 text-left">
                      <h2 className="text-md font-bold leading-[1] md:text-lg">
                        {keyPoint.title}
                      </h2>
                      {!isCard && keyPoint.description && (
                        <p className="mt-2">{keyPoint.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="flex flex-1 items-center justify-start">
              {button && (
                <Button asChild className={cn('mt-20 rounded-full')}>
                  <CustomLink
                    aria-label={button.label}
                    href={button.href}
                    openNewTab={button.openNewTab}
                  >
                    <span>{button.label}</span>
                  </CustomLink>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
