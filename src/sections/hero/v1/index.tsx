'use client';

import { heroData } from '@/data/hero/v1';
import type { ImageProps, LinkProps } from '@/src/common-types';
import { Button } from '@/src/components/button';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export interface HeroProps {
  items: {
    title: string;
    description?: string;
    image: Omit<ImageProps, 'width' | 'height'>;
    button: LinkProps;
  }[];
}

export function Hero() {
  const { items } = heroData;

  return (
    <section className="relative">
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
            <SwiperSlide key={index}>
              <div className="relative flex items-center justify-center overflow-hidden py-20 lg:min-h-screen">
                <div className="container relative z-10">
                  <div className="mx-auto max-w-3xl text-center">
                    <div
                      className="space-y-6"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <h1 className="font-secondary text-2xl font-semibold uppercase leading-tight md:text-3xl">
                        {item.title}
                      </h1>
                      <p
                        className="text-base text-accent-200 md:text-lg"
                        suppressHydrationWarning
                      >
                        {item.description}
                      </p>
                      <Button className="rounded-full">
                        {item.button.label}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Background elements moved after content */}
                <div className="absolute inset-0 -z-10 bg-accent-900/90 lg:bg-transparent">
                  <Image
                    src={item.image.src || '/placeholder.svg'}
                    alt={item.image.alt || ''}
                    fill
                    priority={index === 0}
                    className="hidden object-cover lg:block"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-[#EDF8FE] opacity-80 dark:bg-accent-900" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-accent-900" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
