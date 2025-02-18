import { SectionHeadingProps } from './interface';
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
   {subtitle && (<>
    <p
     className={
      'mb-[.625rem] block font-secondary text-base	 font-bold uppercase leading-[1] tracking-widest text-primary md:text-md'
     }
    >
     {subtitle}
    </p>
   </>
   )}
   <h3 className="font-secondary text-xl font-bold leading-[1.25] text-accent-900 dark:text-white md:text-2xl">
    {highlighttitle &&
     <span className='text-primary'>{highlighttitle}</span>}
    {title}
   </h3>
   {description && (
    <p className={'mt-5 whitespace-pre-line'}>{description}</p>
   )}
   {additionalDesc && (
    <p className="mt-2">{additionalDesc}</p>
   )}
  </div>
 );
}
