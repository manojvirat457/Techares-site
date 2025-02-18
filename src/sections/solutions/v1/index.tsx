'use client';

import { solutions } from '@/data/solution-section/v1';
import { CustomLink } from '@/src/components/custom-link';
import { Card } from '@/src/components/ui/card';
import { useScreenSize } from '@/src/hooks/use-screen-size';
import { motion } from 'framer-motion';
import { AppWindowIcon } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface CategoryButtonProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}

function CategoryButton({ title, isActive, onClick }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-lg p-4 text-left transition-all ${
        isActive
          ? 'bg-primary text-white'
          : 'bg-white text-accent-900 hover:bg-zinc-100'
      }`}
    >
      {title}
    </button>
  );
}

function CategoryCard({ title, isActive, onClick }: CategoryButtonProps) {
  return (
    <Card
      onClick={onClick}
      className={`flex h-16 w-[33%] items-center justify-center rounded-lg p-2 text-center   transition-all ${isActive ? 'bg-primary text-white' : 'bg-white text-accent-900 '}`}
    >
      <p className="text-center text-xs">{title}</p>
    </Card>
  );
}

interface SolutionCardProps {
  title: string;
  description: string;
  icon: string;
  href?: string;
}

function SolutionCard({ title, description, icon, href }: SolutionCardProps) {
  return (
    <CustomLink href={href ?? '/'}>
      <div className="space-y-2 rounded-lg bg-zinc-900/50 p-6">
        <div className="relative mb-4 h-16 w-16">
          <Image
            src={icon || '/placeholder.svg'}
            alt={title}
            height={70}
            width={70}
            className="object-contain"
          />
        </div>
        <h3 className="text-xl font-semibold leading-[1.2] text-white">
          {title}
        </h3>
        <p className="leading-relaxed text-zinc-400">{description}</p>
      </div>
    </CustomLink>
  );
}

export default function SolutionsSection() {
  const [activeCategory, setActiveCategory] = useState('on-demand');
  const screenSize = useScreenSize();
  const sectionRefs = {
    'on-demand': useRef<HTMLDivElement>(null),
    erp: useRef<HTMLDivElement>(null),
    analytics: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const observers = Object.entries(sectionRefs).map(([category, ref]) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveCategory(category);
            }
          });
        },
        {
          rootMargin: '-20% 0px -20% 0px', // Reduced margin to make highlighting more responsive
          threshold: 0.3, // Reduced threshold for earlier triggering
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (category: string) => {
    sectionRefs[category as keyof typeof sectionRefs].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center', // Centers the section in the viewport
    });
  };

  const categories = [
    {
      id: 'on-demand',
      title: 'On-Demand Applications',
      icon: <AppWindowIcon />,
    },
    { id: 'erp', title: 'ERP Systems', icon: <AppWindowIcon /> },
    { id: 'analytics', title: 'Data Analytics', icon: <AppWindowIcon /> },
  ];

  return (
    <div className="min-h-screen bg-[#141416] p-4  py-20">
      <div className="mx-auto max-w-7xl">
        <div className="xs:mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Solutions Info - Reordered for mobile */}
          <div className="order-1 h-max space-y-6 lg:sticky lg:top-8 lg:order-2">
            <div>
              <h2 className="mb-2 text-xl font-bold text-white md:text-2xl">
                Our <span className="text-primary">Solutions</span>
              </h2>
              <p className="mb-8 text-zinc-400">
                Quick and customizable software solutions designed for
                businesses requiring immediate deployment and scalability. Our
                on-demand applications cater to a variety of industries with a
                focus on user-centric designs and seamless functionality.
              </p>
            </div>

            <div className="flex gap-4 md:flex-col ">
              {categories.map(({ id, title, icon }) =>
                !screenSize.equals('xs') ? (
                  <CategoryButton
                    key={id}
                    title={title}
                    isActive={activeCategory === id}
                    onClick={() => scrollToSection(id)}
                  />
                ) : (
                  <CategoryCard
                    key={id}
                    title={title}
                    icon={icon}
                    isActive={activeCategory === id}
                    onClick={() => scrollToSection(id)}
                  />
                )
              )}
            </div>
          </div>

          {/* Solutions Cards - Reordered for mobile */}
          <div className="order-2 lg:order-1">
            <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full max-h-[60vh] space-y-6 overflow-y-auto scroll-smooth pr-4 scrollbar-thin scrollbar-track-primary lg:max-h-[70vh]">
              {categories.map(({ id }) => (
                <div
                  key={id}
                  ref={sectionRefs[id as keyof typeof sectionRefs]}
                  className="space-y-4"
                >
                  {solutions
                    .filter((solution) => solution.category === id)
                    .map((solution, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <SolutionCard {...solution} />
                      </motion.div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
