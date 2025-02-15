import { Container } from '@/src/components/container';
import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';
import { cn } from '@/src/utils/shadcn';
import { ClassValue } from 'clsx';
import { ServiceCard, ServiceProps } from 'src/components/cards/service/v1';
import { ServiceSectionPropss } from '../v1';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';

export interface IndustryProps {
    sectionHeading?: SectionHeadingWithoutStylingProps;
}
export interface IndustryBannerProps extends ServiceSectionPropss, IndustryProps { }
export function IndustrySections({ services, className, sectionHeading }: IndustryBannerProps) {
    return (
        <section className={cn('section-padding-primary', className)}>
            <Container>
                <div className="mb-10 flex flex-wrap items-end justify-between gap-x-20 gap-y-10 md:mb-[3.75rem]">
                    <div className="max-w-[100%]">
                        {
                            sectionHeading && <SectionHeading {...sectionHeading} alignment="start" />
                        }
                    </div>
                </div>
                {services && services.length > 0 && (
                    <div className="-mx-4 flex flex-wrap justify-center gap-y-30px">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={getStaggeredDelay([200, 400, 600], index)}
                                className="w-full px-4 md:w-1/2 md:px-[15px] lg:w-1/4"
                            >
                                <ServiceCard {...service} />
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </section>
    );
}
