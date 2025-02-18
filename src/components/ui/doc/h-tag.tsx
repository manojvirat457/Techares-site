import { cn } from '@/src/utils/shadcn';
import { ClassValue } from 'clsx';
import React from 'react';

export const H1 = ({ children, className }: {
 children: React.ReactNode;
 className?: ClassValue;
}) => {
 return (
  <h1 className={cn("font-secondary text-2xl font-semibold uppercase leading-[1.1] md:text-3xl", className)}>
   {children}
  </h1>
 );
};


export const H2 = ({ children, className }: {
 children: React.ReactNode;
 className?: ClassValue;
}) => {
 return (
  <h2 className={cn("text-md font-bold leading-[1] md:text-lg", className)}>
   {children}
  </h2>
 );
};


export const H3 = ({ children, className }: {
 children: React.ReactNode;
 className: ClassValue;
}) => {
 return (
  <h3 className={cn("mb-2.5 text-lg font-bold leading-[1.3] text-accent-900 dark:text-white lg:text-xl", className)}>
   {children}
  </h3>
 );
};
