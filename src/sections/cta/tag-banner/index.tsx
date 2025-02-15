import { SectionProps } from '@/src/common-types';
import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { TextInput } from '@/src/components/inputs/text-input';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import { ServiceHeading } from '../../blockChain-service/Service-Heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';

export interface CtaSectionProps {
    title: string;
}
export interface technologiesProps {
    techSectionHeading: SectionHeadingWithoutStylingProps
}

const ctaSectionData: CtaSectionProps = {
    title: 'Technologies',
};
export type ImageLayout = {
    row1: string[];
    row2: string[];
    row3: string[];
};
export interface BlueTagBannerProps extends SectionProps, technologiesProps {
    imageLayout: ImageLayout
}

export function BlueTagBanner({ className, sectionHeading, imageLayout, techSectionHeading }: BlueTagBannerProps) {
    const { title } = ctaSectionData;
    return (
        <section className={cn(className)}>
            <Container>
                <div className="relative overflow-hidden rounded-5 bg-primary px-6 py-14">
                    <div className="relative z-10 mx-auto max-w-full rounded-5  text-center">
                        <ServiceHeading {...techSectionHeading} />
                        <div className="relative mt-10 flex justify-center items-center h-40">
                            {/* Top row */}
                            <div className="absolute flex space-x-8 top-0">
                                {
                                    imageLayout.row1.map((image, index) => (
                                        <Image
                                            src={image}
                                            key={index}
                                            alt="Image 1"
                                            width={50}
                                            height={50}
                                            className="rounded-full"
                                        />
                                    ))
                                }

                            </div>

                            {/* Middle row */}
                            <div className="absolute flex space-x-10 top-1/2 transform -translate-y-1/2">
                                {
                                    imageLayout.row2.map((image, index) => (
                                        <Image
                                            src={image}
                                            key={index}
                                            alt="Image 1"
                                            width={50}
                                            height={50}
                                            className="rounded-full"
                                        />
                                    ))
                                }
                            </div>

                            {/* Bottom row */}
                            <div className="absolute bottom-0">
                                {
                                    imageLayout.row3.map((image, index) => (
                                        <Image
                                            src={image}
                                            key={index}
                                            alt="Image 1"
                                            width={50}
                                            height={50}
                                            className="rounded-full"
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <Image
                        src="/assets/images/cta/pattern-1.png"
                        alt="cta section bg pattern"
                        width={520}
                        height={316}
                        className="pointer-events-none absolute -right-30px bottom-0 z-1 h-full animate-float-bob-x object-cover opacity-60"
                        sizes="100vw"
                    />
                </div>
            </Container>
        </section>
    );
}
