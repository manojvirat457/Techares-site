import { ImageProps, blurDataUrl } from '@/src/common-types';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

export interface ServiceProps {
  image: Omit<ImageProps, 'width' | 'height'>;
  icon: React.ReactNode;
  title: string;
  description: string;
  slug: string;
}

export function ServiceCard({
  image,
  icon,
  title,
  description,
  slug,
}: ServiceProps) {
  return (
    <article
      className={cn([
        // General
        'group bg-white text-accent-900 shadow-3 transition-transform duration-350 dark:bg-accent-700 dark:text-white  dark:shadow-none',

        // Layout
        'relative z-1 block h-full overflow-hidden rounded-5',
      ])}
      style={{ maxWidth: '280px' }} // Adjust card width
    >
      <div
        className={cn(
          // General
          'relative z-1',

          // before => shape
          'before:absolute before:-bottom-px before:-right-px before:left-0 before:z-[2] before:h-[45px] before:bg-white before:[clip-path:polygon(100%_0%,0%_100%,100%_100%)] dark:before:bg-accent-700',

          // after => image overlay effect
          'after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-1 after:h-0 after:w-full after:bg-white/30 after:opacity-100',
          // hover
          'group-hover:transition-all group-hover:after:h-full group-hover:after:opacity-0 group-hover:after:duration-400 group-hover:after:ease-linear'
        )}
      >
        <Image
          src={image.src}
          alt={title}
          width={480} // Reduced image width
          height={400} // Reduced image height
          sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          blurDataURL={blurDataUrl}
        />
        <div
          className={cn(
            // General
            'absolute bottom-[-10px] left-0 right-0 z-[3] mx-auto grid h-[80px] w-[80px] flex-none place-items-center overflow-hidden rounded-full bg-accent-900  text-[2rem] text-white transition-colors  duration-300 md:text-[3.2rem]', // Reduced icon size

            // After
            'after:absolute after:inset-0 after:-z-1 after:scale-50 after:rounded-[inherit] after:bg-primary after:opacity-0 after:transition-all after:duration-700',

            'group-hover:after:scale-100 group-hover:after:opacity-100'
          )}
        >
          <span className="block transition-transform duration-400 group-hover:scale-90">
            {icon}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 px-20px py-8 text-center"> {/* Reduced padding */}
        <h3 className="text-sm font-bold leading-[1.25] md:text-md"> {/* Reduced font size */}
          <CustomLink
            href={slug}
            className="text-accent-900 transition-colors duration-300 hover:text-primary dark:text-white dark:hover:text-primary"
          >
            {title}
          </CustomLink>
        </h3>
        <p className="mb-2 text-accent-800 dark:text-body text-sm"> {/* Reduced description size */}
          {description}
        </p>
        <CustomLink
          href={slug}
          className={cn(
            // Normal
            // General
            'relative z-1 grid h-8 w-8 place-items-center rounded-5 bg-primary/10 text-xs text-primary transition-colors duration-300 dark:bg-accent-900', // Reduced button size

            // After
            'after:absolute after:inset-0 after:-z-1 after:origin-top after:rounded-[inherit] after:bg-primary after:transition-all after:duration-700 after:[transform:perspective(400px)_rotateX(-90deg)_scale(0.2)]',

            // Hover
            // after
            'group-hover:after:opacity-100 group-hover:after:[transform:perspective(400px)_rotateX(0deg)_scale(1.0)]',

            // Content
            'group-hover:text-white'
          )}
        >
          <FaArrowRightLong />
        </CustomLink>
      </div>
    </article>
  );
}
