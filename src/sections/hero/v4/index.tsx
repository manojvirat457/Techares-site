import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { H1 } from '@/src/components/ui/doc/h-tag';
import { cn } from '@/src/utils/shadcn';
import styles from './hero-v4.module.css';
import { LinkProps } from '@/src/common-types';

export interface HeroSectionProps {
  title: string;
  description: string;
  button: LinkProps;
  backgroundImage: string;
}

export function HeroSection({
  title,
  description,
  button,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-[9.375rem] lg:min-h-screen">
      <div
        className={cn(
          'absolute inset-0  bg-accent-700 bg-cover bg-no-repeat bg-blend-luminosity [background-position:top_center] [transform:scale(1)] [transition:7000ms_ease,opacity_1500ms_ease-in]',
          // before
          'before:absolute before:inset-0 before:bg-[#EDF8FE] before:opacity-80  dark:before:bg-accent-900',
          // after
          'after:absolute after:inset-0  after:[background:linear-gradient(180deg,rgba(255,255,255,0)_0%,#FFFFFF_100%)]  dark:after:[background:linear-gradient(180deg,rgba(20,20,22,0.00)_0%,#141416_100%)]'
        )}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Container>
          {/* Main content  */}
          <div
            className={cn(
              'relative z-10 mx-auto  max-w-[800px] text-center text-white lg:mt-[60px]',
              styles['hero-content']
            )}
          >
            <div className="space-y-6 py-52 md:space-y-8">
              <H1 className="font-secondary text-2xl font-semibold uppercase leading-[1.1] md:text-3xl">
                {title}
              </H1>
              <p className="text-accent-200">{description}</p>
              <Button asChild className={cn('rounded-full')}>
                <CustomLink
                  aria-label={button.label}
                  href={button.href}
                  openNewTab={button.openNewTab}
                >
                  <span>{button.label}</span>
                </CustomLink>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
