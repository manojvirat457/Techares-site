import type { ClassValue } from 'clsx';

type Alignment = 'start' | 'center' | 'end';
type TitleSize = 'sm' | 'md' | 'lg' | 'xl';

export interface SectionHeadingProps {
  subtitle?: string;
  highlighttitle?: string;
  title: string | JSX.Element;
  description?: string;
  alignment?: Alignment;
  hasBottomSpacing?: boolean;
  className?: ClassValue;
  additionalDesc?: string;
  size?: TitleSize;
}

export type SectionHeadingWithoutStylingProps = Omit<
  SectionHeadingProps,
  'alignment' | 'hasBottomSpacing'
>;
