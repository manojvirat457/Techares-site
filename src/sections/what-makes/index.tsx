import { aboutSectionData } from '@/data/about-section/v2';
import { workprocessSectionData } from '@/data/work-process/v1';
import { ImageProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import { VideoPlayer } from '@/src/components/video-player';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import { FaCircleCheck } from 'react-icons/fa6';

export interface WhatMakesProps {
    sectionHeading?: SectionHeadingWithoutStylingProps;
    sectionHeading2: SectionHeadingWithoutStylingProps;
    aboutUsPoints: string[];
    images: {
        image1: ImageProps;
        image2: ImageProps;
        image3: ImageProps;
        image4: ImageProps;
    };
}

export function WhatMakes({ sectionHeading2, aboutUsPoints, images }: WhatMakesProps) {
    //const { sectionHeading, aboutUsPoints, image, videoUrl, sectionHeading2 } = aboutSectionData;

    return (
        <section className="section-padding-primary overflow-hidden">
            <Container>
                <div className="flex flex-col items-center justify-between gap-x-16 gap-y-[60px] lg:flex-row xl:gap-x-[120px]">
                    <div
                        className="lg:w-1/2"
                        data-aos="fade-up-right"
                        data-aos-delay="400"
                    >
                        <SectionHeading {...sectionHeading2} />
                        {aboutUsPoints && aboutUsPoints.length > 0 && (
                            <ul
                                aria-label="about us point"
                                className="mt-10 grid max-w-[560px] gap-1 gap-x-20 sm:grid-cols-2 md:gap-2"
                            >
                                {aboutUsPoints.map((point, index) => (
                                    <li className="flex items-center gap-3 lg:gap-4" key={index}>
                                        <span className="text-lg text-primary">
                                            <FaCircleCheck />
                                        </span>
                                        <span className="block font-secondary text-md font-bold leading-[1.5] text-accent-900 dark:text-white">
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
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
