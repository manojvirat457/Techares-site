import type { ClassValue } from 'clsx';

type Alignment = 'start' | 'center' | 'end';
export type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xm';

export interface SectionHeadingProps {
 subtitle?: string;
 highlighttitle?: string;
 title: string | JSX.Element;
 description?: string;
 alignment?: Alignment;
 textPosition?: Alignment;
 hasBottomSpacing?: boolean;
 className?: ClassValue;
 additionalDesc?: string;
 size?: TitleSize;
}

export type SectionHeadingWithoutStylingProps = Omit<
 SectionHeadingProps,
 'alignment' | 'hasBottomSpacing'
>;
