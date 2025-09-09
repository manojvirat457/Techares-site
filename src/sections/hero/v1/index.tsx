'use client';

// Import Swiper styles
import Image from 'next/image';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { ImageProps, LinkProps } from '@/src/common-types';
import { Button } from '@/src/components/button';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Link from 'next/link';
import { SectionHeading } from '@/src/components/section-heading';

export interface HeroProps {
 items: {
  title: string;
  description?: string;
  image: Omit<ImageProps, 'width' | 'height'>;
  button: LinkProps;
  side: 'left' | 'right';
 }[];
}

export function Hero({ items }: HeroProps) {
 return (
  <section className="relative -mt-16">
   {items && items.length > 0 && (
    <Swiper
     effect="fade"
     loop
     speed={300}
     autoplay={{
      delay: 4000,
      disableOnInteraction: true,
     }}
     pagination={{
      clickable: true,
      bulletClass: 'swiper-pagination-bullet custom-bullet',
      bulletActiveClass:
       'swiper-pagination-bullet-active custom-bullet-active',
     }}
     modules={[EffectFade, Autoplay, Pagination]}
     className="hero-swiper"
    >
     {items.map((item, index) => (
      <SwiperSlide key={item.title}>
       <div
        className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat bg-origin-content p-14"
        style={{
         backgroundImage: `url(${'/assets/images/background.png'})`,
        }}
       />
       <div className="h-screen w-screen">
        <div
         className={`relative flex min-h-screen items-center overflow-hidden ${item.side === 'right' ? 'flex-row-reverse' : 'flex-row'}`}
        >
         <div className="flex h-full flex-1 items-end justify-center p-8">
          <div className="max-w-lg text-center ">
           <div
            className="space-y-6"
            data-aos="fade-up"
            data-aos-delay="100"
           >
            <SectionHeading title={item.title} description={item.description} />
           </div>
          </div>
         </div>
         <div className="relative h-full flex-1 justify-end items-end p-24">
          <Image
           src={item.image.src}
           alt={item.image.alt || ''}
           width={600}
           height={600}
           priority={index === 0}
           className="z-10 object-cover items-end"
           loading={index === 0 ? 'eager' : 'lazy'}
          />
         </div>
        </div>
       </div>
       {/* <div className="absolute inset-0 bg-[#EDF8FE] opacity-80 dark:bg-accent-900" /> */}
       {/* <div className="absolute inset-0 bg-transparent opacity-80 dark:bg-accent-900" /> */}
      </SwiperSlide>
     ))}
    </Swiper>
   )}
  </section>
 );
}
