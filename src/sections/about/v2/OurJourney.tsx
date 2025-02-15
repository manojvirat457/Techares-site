import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { teamSectionData } from '@/data/team-section/v2';
import { aboutSectionData } from '@/data/about-section/v2';
import { OurJourneyData } from '@/data/about-section/ourJourney/';

export interface OurJourneyProps {
    sectionHeading: SectionHeadingWithoutStylingProps;
    description: string;
}

export function OurJourney() {
    const { sectionHeading, description } = OurJourneyData;
    return (
        <section className="section-padding-primary !pb-0">
            <Container>
                <div className="mb-10 flex flex-col flex-wrap justify-between gap-5 max-md:text-center md:mb-[3.75rem] xl:flex-row xl:items-center">
                    <div className="xl:max-w-[460px]">
                        <SectionHeading
                            {...sectionHeading}
                            className="max-md:text-center"
                        />
                    </div>
                    <p className="xl:max-w-[635px]">{description}</p>
                </div>


            </Container>
        </section>
    );
}
