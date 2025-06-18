'use client';
import type { ImageProps, LinkProps } from '@/src/common-types';
import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { SectionHeading } from '@/src/components/section-heading';
import type { SectionHeadingProps } from '@/src/components/section-heading/interface';
import ContactUsDialog from '@/src/sections/contact/v3';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';

export function HeroSection({
  sectionHeading,
  button,
  image,
  isDecorated,
  backgroundImage,
  enableGradient,
  isLeftSide = true,
}: {
  sectionHeading: SectionHeadingProps;
  button: LinkProps;
  image: ImageProps;
  isDecorated: boolean;
  backgroundImage?: string;
  enableGradient?: boolean;
  isLeftSide?: boolean;
}) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden pb-24 pt-40 -mt-20">
      {backgroundImage && (
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      {enableGradient && (
        <div className="absolute inset-0 transform bg-gradient-to-t from-primary/40 via-primary/20 to-transparent" />
      )}
      <Container>
        <div className="flex flex-col items-center lg:flex-row">
          {/* Content Side */}
          <div
            className={cn(
              'mb-12 lg:mb-0 lg:w-1/2',
              !isLeftSide && 'lg:order-2'
            )}
          >
            <SectionHeading
              title={sectionHeading.title}
              highlighttitle={sectionHeading.highlighttitle}
              size={sectionHeading.size}
              additionalDesc={sectionHeading.additionalDesc}
              description={sectionHeading.description}
              subtitle={sectionHeading.subtitle}
              alignment={sectionHeading.alignment}
              hasBottomSpacing={sectionHeading.hasBottomSpacing}
              className={sectionHeading.className}
            />
            <br className="my-2" />
            <ContactUsDialog>
              <Button className={cn('mr-5 rounded-full')}>
                <CustomLink
                  aria-label={button.label}
                  href={button.href}
                  openNewTab={button.openNewTab}
                >
                  <span>{button.label}</span>
                </CustomLink>
              </Button>
            </ContactUsDialog>
          </div>
          {/* Image Side */}
          <div className={cn('relative lg:w-1/2', !isLeftSide && 'lg:order-1')}>
            <div className="bg-blue absolute left-1/2 top-1/2 -z-10 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 transform rounded-full md:h-[350px] md:w-[350px]" />
            <div className="relative z-10">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="mx-auto w-full max-w-lg object-contain"
                priority
              />
            </div>
            {isDecorated && (
              <div
                className={cn(
                  'absolute z-10 w-[150px]',
                  isLeftSide ? '-left-28' : '-right-28',
                  'top-48'
                )}
              >
                <Image
                  src="/assets/images/food-delivery/dots.png"
                  alt="Food Delivery App Development"
                  width={700}
                  height={700}
                  className="mx-auto w-full max-w-lg"
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
