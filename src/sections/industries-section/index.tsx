'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface Industry {
    id: string;
    title: string;
    imageUrl: string;
}

interface IndustryCardProps {
    industry: Industry;
    index: number;
}

const IndustryCard = ({ industry, index }: IndustryCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
            <div className="relative p-6 flex flex-col items-center">
                <div className="w-16 h-16 mb-4 relative transition-transform duration-300 ease-in-out group-hover:scale-110">
                    <Image
                        src={industry.imageUrl}
                        alt={industry.title}
                        fill
                        className="object-contain"
                    />
                </div>
                <h3 className="text-gray-800 group-hover:text-white text-l font-semibold transition-colors duration-300 ease-in-out text-center">
                    {industry.title}
                </h3>
            </div>
        </motion.div>
    );
};

interface IndustriesGridProps {
    industries: Industry[];
}

export default function IndustriesGrid({ industries }: IndustriesGridProps) {
    return (
        <section className="relative overflow-hidden bg-black px-6 py-12">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl font-bold text-gray-50 mb-0">
                        <span className='text-primary'>Industries</span> We Serve
                    </h2>
                    <p className="text-l text-gray-50 max-w-2xl mx-auto">
                        Empowering businesses across various sectors with innovative solutions
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {industries.map((industry, index) => (
                        <IndustryCard key={industry.id} industry={industry} index={index} />
                    ))}
                </div>
            </div>
            <Image
                src="/assets/images/cta/pattern-1.png"
                alt="background pattern"
                width={520}
                height={316}
                className="pointer-events-none absolute -right-30 bottom-0 z-0 h-full animate-float-bob-x object-cover opacity-20"
                sizes="100vw"
            />
        </section>
    );
}

