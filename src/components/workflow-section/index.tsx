'use client';

import { SectionHeading } from '@/src/components/section-heading';

export interface WorkflowStep {
  id: number;
  title: string;
  description: string;
}

export interface WorkflowSectionProps {
  title?: string;
  subtitle?: string;
  textPosition?: 'left' | 'center' | 'right';
  steps: WorkflowStep[];
}

export function WorkflowSection({
  title = 'How We Work',
  subtitle = 'WORK FLOW',
  textPosition = 'center',
  steps,
}: WorkflowSectionProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <SectionHeading
            title={title}
            alignment="center"
            subtitle={subtitle}
            textPosition={textPosition}
          />
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative flex min-h-[210px] items-stretch"
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
                  <h3 className="mb-2 text-md font-extrabold md:text-lg">
                    {step.title}
                  </h3>
                  <p className="text-[1.05rem] font-[400]">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
