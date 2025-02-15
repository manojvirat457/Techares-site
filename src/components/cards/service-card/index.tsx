import { ImageProps } from '@/src/common-types';
import { CustomLink } from '@/src/components/custom-link';
import { BREAKPOINTS } from '@/src/themes/interface';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import { FaPlus } from 'react-icons/fa6';

export interface ServiceCardProps {
    image: Omit<ImageProps, 'width' | 'height'>;
    title: string;
    description: string;
    tags: string[];
}

export const PROJECT_CARD_IMAGE_DIMENSION = {
    width: 800,
    height: 200,
};

export function ServiceCard({

    image,
    title,
    description,
    onClick,
}: ServiceCardProps & {
    onClick: () => void;
}) {
    return (
        <div className="group/project block ">
            {/* Media  */}
            <div
                className={cn(
                    'relative z-1 cursor-pointer overflow-hidden rounded-5',
                )}
            >
                <div className="relative" style={{ width: '800px', height: '300px', backgroundPosition: 'cover' }}>
                    <Image
                        src={image.src}
                        alt={image.alt}
                        layout="fill"
                        objectFit="cover"
                        sizes={`(min-width: ${BREAKPOINTS.md}) `}
                        className="transition-transform duration-1000 ease-in-out group-hover/project:scale-105"
                    />
                </div>

            </div>

            {/* Content  */}
            <div className="mt-5">
                <p
                    className="mt-1 
         text-body dark:text-accent-800"
                >
                    {description}
                </p>
            </div>
        </div>
    );
}
