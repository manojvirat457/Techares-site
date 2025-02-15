import { homeWhyChooseData } from '@/data/home-whychoose';
import { ImageProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import Image from 'next/image';

import patternOne from 'public/assets/images/about/pattern-1.png';

export interface ServicesProps {
    images: {
        image1: ImageProps;
        image2: ImageProps;
        image3: ImageProps;
        image4: ImageProps;
    };
    sectionHeading: SectionHeadingWithoutStylingProps;
    description?: string;
}

export function BlockchainDevelopmentServices({ sectionHeading, description, images }: ServicesProps) {
    return (
        <section className="section-padding-primary overflow-hidden">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-[.92fr_1fr] 2xl:gap-20">
                    {/* Content  */}
                    <div className="lg:order-2" data-aos="fade-left" data-aos-delay="200">
                        <SectionHeading {...sectionHeading} />
                    </div>
                    {/* Images  */}
                    <div>
                        <Image
                            src={images.image1.src}
                            alt={images.image1.alt}
                            width={images.image1.width}
                            height={images.image1.height}
                            className="rounded-tl-[60px] object-cover object-top"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
