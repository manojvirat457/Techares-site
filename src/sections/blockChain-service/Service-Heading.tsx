
import { SectionHeadingProps } from '@/src/components/section-heading/interface';
import { cn } from '@/src/utils/shadcn';

/**
 * This component renders a text section with `subtitle`, `title`,
 * and `description`. It has styling options for alignment
 * @param SectionHeadingProps
 * @returns JSX.Element
 */
export function ServiceHeading({
    subtitle,
    title,
    description,
    alignment = 'start',
    hasBottomSpacing = false,
    className,
}: SectionHeadingProps) {
    const wrapperClasses = cn(
        alignment === 'start' && 'text-left',
        alignment === 'center' && 'text-center',
        alignment === 'end' && 'text-right',
        { 'mb-10 md:mb-[3.75rem]': hasBottomSpacing },
        className
    );

    return (
        <div className={wrapperClasses}>
            {subtitle && (
                <span
                    className={
                        'mb-[.625rem] block font-secondary text-base font-bold uppercase leading-[1.5] tracking-widest text-primary md:text-md'
                    }
                >
                    {subtitle}
                </span>
            )}
            <h2 className="font-secondary text-xl text-center font-bold leading-[1.25] text-accent-900 dark:text-white md:text-2xl">
                {title}
            </h2>
            {description && (
                <p className={'mt-5 whitespace-pre-line text-center'}>{description}</p>
            )}
        </div>
    );
}
