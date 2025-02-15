import { ClassValue } from 'clsx';
import { ReactElement, ReactNode } from 'react';
type Alignment = 'start' | 'center' | 'end';

export interface SectionHeadingProps {
  subtitle?: string;
  title: ReactNode | string | ReactElement;
  description?: string | ReactElement;
  alignment?: Alignment;
  hasBottomSpacing?: boolean;
  className?: ClassValue;
}

export type SectionHeadingWithoutStylingProps = Omit<
  SectionHeadingProps,
  'alignment' | 'hasBottomSpacing'
>;
