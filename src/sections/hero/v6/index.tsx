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
}: {
  sectionHeading: SectionHeadingProps;
  button: LinkProps;
  image: ImageProps;
  isDecorated: boolean;
  backgroundImage?: string;
  enableGradient?: boolean;
}) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden px-8 pb-24 pt-16 md:px-0">
      {enableGradient && (
        <div className="absolute inset-0 transform bg-gradient-to-t from-primary/40 via-primary/20 to-transparent" />
      )}
      <Container isFluid isNoPadding>
        <div className="flex flex-col items-center lg:flex-row">
          <div className="mb-12 md:px-20 lg:mb-0 lg:w-1/2">
            {backgroundImage && (
              <Image
                src={backgroundImage}
                alt="background image"
                width={600}
                height={600}
                className="absolute -left-4 top-10  object-cover md:left-16 md:top-10"
              />
            )}
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
              specialText={sectionHeading.specialText}
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
          <div className="relative flex items-center justify-end lg:w-1/2">
            <div className="bg-blue absolute left-1/2 top-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 transform rounded-full md:h-[400px] md:w-[400px]" />
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              className="absolute -top-48 object-cover"
              priority
            />
            <div className="relative z-10"></div>
            {isDecorated && (
              <div className="absolute -left-28 top-48 z-10 w-[150px]">
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
