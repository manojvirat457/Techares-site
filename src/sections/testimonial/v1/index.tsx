import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import {
  TestimonialCard,
  TestimonialCardProps,
} from 'src/components/cards/testimonial/v1';
import { Carousel } from '@/src/components/carousel';
import { CarouselItem } from '@/src/components/carousel/sub-components/item';
import { testimonialSectionData } from '@/data/testimonial-section/v1';
import { cn } from '@/src/utils/shadcn';

const btnPrevNextClasses = cn(
  'bg-primary-light/10 text-primary-light hover:text-white hover:bg-primary-light'
);

export interface TestimonialSectionProps {
  sectionHeading: SectionHeadingWithoutStylingProps;
  cards: TestimonialCardProps[];
}

export function TestimonialSection() {
  const { sectionHeading, cards } = testimonialSectionData;
  return (
    <section className="section-padding-primary overflow-hidden py-20">
      <Container>
        <div className="mb-10 mr-30px max-w-[680px] md:mb-[3.75rem] md:pr-[140px]">
          <SectionHeading {...sectionHeading} />
        </div>
        {cards && cards.length > 0 && (
          <Carousel
            itemsPerSlide={{
              initial: 1,
              sm: 1,
              md: 1,
              lg: 2,
              xl: 2,
              '2xl': 2,
            }}
            itemGap={{
              initial: 25,
              sm: 30,
              md: 30,
              lg: 30,
              xl: 30,
              '2xl': 30,
            }}
            hasNavigation
            hasProgress
            haveOffset={false}
            navigationPrevBtnClassName={btnPrevNextClasses}
            navigationNextBtnClassName={btnPrevNextClasses}
          >
            {cards.map((card, index) => (
              <CarouselItem key={index}>
                <TestimonialCard {...card} />
              </CarouselItem>
            ))}
          </Carousel>
        )}
      </Container>
    </section>
  );
}
