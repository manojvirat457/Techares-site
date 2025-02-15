'use client';

import { SectionHeading } from '@/src/components/section-heading';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import { useState } from 'react';

export interface ServiceDetail {
    title: string;
    description: string;
}

export interface Service {
    id: string;
    name: string;
    logo: string;
    content?: string;
    details?: ServiceDetail[];
}

export type Services = Service[];


interface ServicesSectionProps {
    services: Services;
}

const ServicesContainer = ({ services }: ServicesSectionProps) => {
    const [activeService, setActiveService] = useState<Service>(services[0])

    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Left Navigation Section */}
            <div className="w-full lg:w-1/2 bg-[#0f0f0f] p-8">
                <div className="mb-12">
                    <SectionHeading title={<span>Our <span className='dark:text-primary'>Services</span></span>} alignment='start' />
                </div>

                <div className="space-y-4">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => setActiveService(service)}
                            className={`text-left flex gap-4 items-center w-full p-4 text-white rounded-lg transition-colors ${activeService.id === service.id
                                ? 'bg-blue-600 font-medium'
                                : 'hover:bg-blue-600'
                                }`}
                        >
                            <Image src={service.logo} width={40} height={40} alt={service.name} className='rounded-[100px]' />
                            {service.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Content Section */}
            <div className="w-full lg:w-2/3 p-8 bg-[#0f0f0f]">
                <div className="mb-8 ">
                    <h2 className={"font-secondary text-xl font-bold leading-[1.25] text-gray-900 dark:text-gray-300 md:text-[36px]"}>
                        {activeService.name}
                    </h2>
                    <p className={'mt-5 whitespace-pre-line text-justify'}>{activeService.content}</p>

                </div>

                {activeService.details && (
                    <div className="grid md:grid-cols-2 gap-2">
                        {activeService.details.map((detail, index) => (
                            <div
                                key={index}
                                className={`border rounded-lg p-6 ${detail.title === 'Enterprise Software Development'
                                    ? 'md:col-span-2'
                                    : ''
                                    }`}
                            >
                                <h4 className="font-semibold mb-3 dark:text-blue-600 ">{detail.title}</h4>
                                <p className="text-gray-400 text-sm">{detail.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}


export default ServicesContainer