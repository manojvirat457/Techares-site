'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { roadmapData } from '@/data/home-our-solutions'
import { cn } from '@/src/utils/shadcn'

export default function ScrollableRoadmap() {
    const [activeSection, setActiveSection] = useState(1)
    const [scrollProgress, setScrollProgress] = useState(0)
    const roadmapRef = useRef<HTMLDivElement>(null)
    const scrollbarRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (roadmapRef.current && scrollbarRef.current) {
                const { scrollTop, scrollHeight, clientHeight } = roadmapRef.current
                const scrollPercentage = scrollTop / (scrollHeight - clientHeight)
                setScrollProgress(scrollPercentage * 100)
                scrollbarRef.current.style.top = `${scrollPercentage * (clientHeight - 24)}px`
            }
        }

        const roadmapElement = roadmapRef.current
        if (roadmapElement) {
            roadmapElement.addEventListener('scroll', handleScroll)
        }

        return () => {
            if (roadmapElement) {
                roadmapElement.removeEventListener('scroll', handleScroll)
            }
        }
    }, [])

    return (
        <div className="container mx-auto px-4 py-20 max-w-6xl">
            <div className="grid md:grid-cols-[4fr,2fr] gap-8">
                {/* Left Scrollable Roadmap */}
                <div className="relative">
                    <div
                        ref={roadmapRef}
                        className="h-[500px] overflow-y-auto pr-6 custom-scrollbar"
                    >
                        <div className="space-y-8">

                            {roadmapData.find(section => section.id === activeSection)?.steps.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-[#0f0f0f] rounded-lg shadow-lg p-6"
                                >
                                    <h2 className="text-xl font-semibold mb-0">
                                        {step.title}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.content}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    {/* Custom Scrollbar */}
                    <div className="absolute top-0 right-0 w-1 h-full bg-gray-200">
                        <div
                            ref={scrollbarRef}
                            className="absolute w-1 h-6 bg-primary rounded-full transition-all duration-300"
                        />
                    </div>
                </div>

                {/* Right Navigation */}
                <div className="flex flex-col items-start">
                    <h2 className="text-2xl font-bold  w-full text-start">Our <span className='text-primary'>Solutions</span></h2>
                    <p className=" w-[500px] text-justify mb-4">{roadmapData.find(section => section.id === activeSection)?.desc || 'Select a solution to see its details.'}</p>
                    <div className="flex flex-col items-end space-y-4 w-full max-w-[300px] ">
                        {roadmapData.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={cn(
                                    "w-full text-left px-4 py-3 rounded-lg transition-all duration-200",
                                    activeSection === section.id
                                        ? "bg-primary text-black shadow-lg"
                                        : "bg-white hover:bg-yellow-50"
                                )}
                            >
                                <span className="font-medium text-black">{section.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
