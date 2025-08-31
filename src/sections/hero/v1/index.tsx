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
                className={`relative flex min-h-screen items-center overflow-hidden ${item.side === 'right' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className="flex h-full flex-1 items-end justify-center p-8">
                  <div className="max-w-lg text-center">
                    <div
                      className="space-y-6"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <h1 className="font-secondary text-2xl font-bold uppercase text-accent-900 dark:text-white md:text-3xl">
                        {item.title}
                      </h1>
                      <p
                        className="text-base leading-relaxed text-accent-900 dark:text-accent-200 md:text-md"
                        suppressHydrationWarning
                      >
                        {item.description}
                      </p>
                      <Link href={item.button.href} className="inline-block">
                        <Button className="rounded-full" asChild>
                          {item.button.label}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="relative h-full flex-1 justify-end items-end">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt || ''}
                    width={800}
                    height={800}
                    priority={index === 0}
                    className="z-10 object-cover items-end"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>

                {/* Background elements moved after content */}
              </div>
                <div className="absolute inset-0 -z-10 ">
                  <Image
                    src={'/assets/images/background.png'}
                    alt={item.image.alt || ''}
                    fill
                    priority={index === 0}
                    className=" -z-10 object-cover lg:block"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                  {/* <div className="absolute inset-0 bg-[#EDF8FE] opacity-80 dark:bg-accent-900" /> */}
                  <div className="absolute inset-0 bg-transparent opacity-80 dark:bg-accent-900" />
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
