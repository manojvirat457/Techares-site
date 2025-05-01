import type { SectionHeadingProps } from './interface';
import { cn } from '@/src/utils/shadcn';

/**
 * This component renders a text section with `subtitle`, `title`,
 * and `description`. It has styling options for alignment
 * @param SectionHeadingProps
 * @returns JSX.Element
 */
export function SectionHeading({
  subtitle,
  title,
  description,
  alignment = 'start',
  hasBottomSpacing = false,
  highlighttitle,
  className,
  additionalDesc,
  size,
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
        <p
          className={
            'mb-[.625rem] block font-secondary text-base	 font-bold uppercase  tracking-widest text-primary md:text-md'
          }
        >
          {subtitle}
        </p>
      )}
      <h3
        className={cn(
          'whitespace-pre-line font-secondary font-extrabold  text-accent-900 dark:text-white',
          size === 'sm' && 'text-lg md:text-xl',
          size === 'md' && 'text-xl md:text-2xl',
          size === 'lg' && 'text-2xl md:text-3xl',
          size === 'xl' && 'text-3xl md:text-4xl',
          !size && 'text-xl md:text-2xl'
        )}
      >
        {highlighttitle && (
          <span className="text-primary">{highlighttitle}</span>
        )}
        {title}
      </h3>
      {description && (
        <p className={'my-2 whitespace-pre-line font-semibold'}>
          {description}
        </p>
      )}
      {additionalDesc && <p className="mt-2">{additionalDesc}</p>}
    </div>
  );
}
