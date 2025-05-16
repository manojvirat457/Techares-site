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
        className="justify-centerborder h-full w-full items-center border-dashed border-gray-400  bg-white text-center shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
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
          <h3 className="mb-2 text-md font-bold leading-[1.25] text-zinc-900 dark:text-white md:text-lg">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              {description}
            </p>
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
    <section className="section-padding-primary bg-zinc-50 px-4 dark:bg-zinc-900">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold md:text-2xl ">
            <span className="text-primary dark:text-primary-light">
              {industriesSectionData.highlightTitle}
            </span>{' '}
            <span className="text-zinc-900 dark:text-white">
              {industriesSectionData.title}
            </span>
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-zinc-600 dark:text-zinc-300">
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

        <div className={`flex  flex-wrap content-start justify-center gap-7`}>
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
