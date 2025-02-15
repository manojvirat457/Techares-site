import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import { Container } from '@/src/components/container';
import { ServiceHeading } from '../blockChain-service/Service-Heading';
import { SectionHeading } from '@/src/components/section-heading';

export interface HeadingProps {
    sectionHeading: SectionHeadingWithoutStylingProps;
}

export function HeadingComponent({ sectionHeading }: HeadingProps) {
    return (
        <section className="section-padding-primary !pb-0">
            <Container>
                <div className="xl:max-w-full">
                    <SectionHeading
                        {...sectionHeading}
                        className="max-md:text-center"
                    />
                </div>
            </Container>
        </section>
    );
}
