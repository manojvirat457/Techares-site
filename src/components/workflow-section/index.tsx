'use client';

import { SectionHeading } from '@/src/components/section-heading';
import type { SectionHeadingProps } from '@/src/components/section-heading/interface';

export interface WorkflowStep {
  id: number;
  title: string;
  description: string;
}

export interface WorkflowSectionProps {
  sectionHeading: SectionHeadingProps;
  steps: WorkflowStep[];
}

export function WorkflowSection({
  sectionHeading,
  steps,
}: WorkflowSectionProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <SectionHeading
            title={sectionHeading.title}
            alignment="center"
            subtitle={sectionHeading.subtitle}
            textPosition={sectionHeading.textPosition}
            description={sectionHeading.description}
            additionalDesc={sectionHeading.additionalDesc}
            size={sectionHeading.size}
            className={sectionHeading.className}
          />
        </div>
        <div className="flex flex-wrap items-stretch justify-center gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative flex min-h-[210px] w-full items-stretch md:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)]"
            >
              {/* Number, gradient, left-overlapping */}
              <div className="z-10 flex flex-col items-center justify-center">
                <span className="bg-white py-4 dark:bg-accent-700">
                  <span
                    className="text-[44px] font-extrabold md:text-[50px]"
                    style={{
                      background:
                        'linear-gradient(180deg, #0364af 25%, #B1C4DB 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block',
                    }}
                  >
                    {step.id.toString().padStart(2, '0')}
                  </span>
                </span>
              </div>
              {/* Card */}
              <div
                className="ml-[-24px] flex flex-1 items-center rounded-2xl border border-gray-300 bg-white py-8 pl-8 pr-6 shadow-none dark:border-gray-800 dark:bg-accent-700"
                style={{
                  boxShadow: '0 0 0 0 transparent',
                }}
              >
                <div>
                  <SectionHeading
                    title={step.title}
                    alignment="start"
                    textPosition="start"
                    description={step.description}
                    size="sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
