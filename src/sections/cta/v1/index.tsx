import { SectionProps } from '@/src/common-types';
import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { TextInput } from '@/src/components/inputs/text-input';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';

export interface CtaSectionProps {
  title: string;
}

const ctaSectionData: CtaSectionProps = {
  title: 'Technologies',
};

export function CtaSection({ className }: SectionProps) {
  const { title } = ctaSectionData;
  return (
    <section className={cn(className)}>
      <Container>
        <div className="relative overflow-hidden rounded-5 bg-primary px-6 py-14">
          <div className="relative z-10 mx-auto max-w-[630px] rounded-5  text-center">
            <h2 className="mx-auto max-w-[490px] font-secondary text-xl font-bold capitalize leading-[1.25] text-white md:text-2xl">
              {title}
            </h2>
            <p className="font-secondary text-white">
              Huge Spectrum of Next-Gen Technologies Under One Roof Leverage our
              in-depth technical expertise to bring your stunning ideas to life.
            </p>
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
