'use client';

import { IndustriesSectionData } from '@/data/industries/v1';
import { Card, CardContent } from '@/src/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';

function IndustryCard({
  title,
  icon,
  index,
  description,
}: {
  title: string;
  icon: string;
  index: number;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex h-auto w-full flex-col items-center justify-center transition-transform hover:scale-105  md:w-[45%] lg:w-[23.5%]"
    >
      <Card
        key={index}
        className="h-full  w-full items-center justify-center  border-zinc-800 bg-zinc-900 text-center"
      >
        <CardContent className="flex flex-col  items-center justify-center  gap-5 p-6">
          {/* <div className="mb-4 text-primary">
      {icon}
      </div> */}
          <Image
            src={icon || '/placeholder.svg'}
            alt={title}
            height={70}
            width={70}
            className="object-contain"
          />
          <h3 className="mb-2 text-md font-bold leading-[1.25] text-accent-900 dark:text-white md:text-lg">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-gray-400">{description}</p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function IndustriesSection({
  industriesSectionData,
}: {
  industriesSectionData: IndustriesSectionData;
  itemsPerRow: number;
}) {
  // Calculate the number of items in the last row
  // const itemsPerRow = 4; // On desktop

  return (
    <section className="bg-zinc-950 px-4 py-20">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-16 text-center">
          <h2 className="text-xl font-bold md:text-2xl ">
            <span className="text-primary">
              {industriesSectionData.highlightTitle}
            </span>{' '}
            <span className="text-white">{industriesSectionData.title}</span>
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-accent-200">
            {industriesSectionData.description}
          </p>
          {industriesSectionData?.detailedDescription && (
            <>
              <p className="mx-auto mt-11">
                {industriesSectionData.detailedDescription}
              </p>
            </>
          )}
        </div>

        <div
          className={`mt-10 flex  flex-wrap content-start justify-center gap-7`}
        >
          {industriesSectionData.data.map((industry, index) => (
            <IndustryCard
              title={industry.title}
              icon={industry.icon}
              index={index}
              description={industry?.description}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
