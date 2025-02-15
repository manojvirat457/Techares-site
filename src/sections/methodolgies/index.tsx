import { SectionHeading } from '@/src/components/section-heading';
import { type LucideIcon } from 'lucide-react'

export interface Step {
    id: string;
    number: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

interface InfographicStepsProps {
    steps: Step[]
}

export default function InfographicSteps({ steps }: InfographicStepsProps) {
    return (
        <div className="w-full max-w-7xl mx-auto p-4 mb-16">
            <div className='mt-0'>
                <SectionHeading title={<span>Our Development <span className='text-primary'>Methodologies</span></span>} alignment='center' />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-14 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {steps.map((step, index) => {
                    const Icon = step.icon
                    return (
                        <div
                            key={step.id}
                            className="relative group h-full"
                        >
                            <div className="relative z-10 bg-white/10 backdrop-blur-lg p-6 shadow-lg rounded-lg md:rounded-r-[32px] hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-white/20">
                                <div className="flex items-center mb-4">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4
                    ${index === 0 ? 'bg-green-400/20 text-green-400' :
                                            index === 1 ? 'bg-emerald-400/20 text-blue-400' :
                                                index === 2 ? 'bg-cyan-400/20 text-cyan-400' :
                                                    index === 3 ? 'bg-blue-400/20 text-yellow-400' :
                                                        'bg-sky-400/20 text-red-400'}`}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div className={`text-2xl font-bold flex-shrink-0
                    ${index === 0 ? 'text-green-400' :
                                            index === 1 ? 'text-blue-400' :
                                                index === 2 ? 'text-cyan-400' :
                                                    index === 3 ? 'text-yellow-400' :
                                                        'text-red-400'}`}
                                    >
                                        {step.number}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 flex-shrink-0 text-white leading-10">{step.title}</h3>
                                <p className="text-gray-300 text-base flex-grow">{step.description}</p>
                            </div>
                            {/* {index < steps.length - 1 && (
                                <div className="hidden xl:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 
                  transform rotate-45 bg-white/5 z-0 border-t border-r border-white/20" />
                            )} */}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

