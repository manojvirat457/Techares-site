'use client';

import { heroData } from '@/data/hero/v1';
import type { ImageProps, LinkProps } from '@/src/common-types';
import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { cn } from '@/src/utils/shadcn';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './hero.module.css';
import { Shapes } from './shapes';

// Import Swiper styles
import ContactUsDialog from '@/src/sections/contact/v3';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { H1 } from '@/src/components/ui/doc/h-tag';

export interface HeroProps {
  items: {
    title: string;
    image: Omit<ImageProps, 'width' | 'height'>;
    button: LinkProps;
  }[];
}

export function Hero() {
  const { items } = heroData;

  return (
    <section className={styles['hero']}>
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
            bulletClass: `swiper-pagination-bullet ${styles['custom-bullet']}`,
            bulletActiveClass: `swiper-pagination-bullet-active ${styles['custom-bullet-active']}`,
          }}
          modules={[EffectFade, Autoplay, Pagination]}
          className={styles['hero-swiper']}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={cn(
                  'relative flex items-center justify-center overflow-hidden py-[5rem] lg:min-h-screen'
                )}
              >
                {/* Shapes  */}
                <Shapes />

                <div
                  className={cn(
                    'absolute inset-0 -z-1  bg-accent-700 bg-cover bg-no-repeat bg-blend-luminosity [background-position:top_center] [transform:scale(1)] [transition:7000ms_ease,opacity_1500ms_ease-in]',
                    styles['hero-bg'],
                    // before
                    'before:absolute before:inset-0 before:bg-[#EDF8FE] before:opacity-80  dark:before:bg-accent-900',
                    // after
                    'after:absolute after:inset-0  after:[background:linear-gradient(180deg,rgba(255,255,255,0)_0%,#FFFFFF_100%)]  dark:after:[background:linear-gradient(180deg,rgba(20,20,22,0.00)_0%,#141416_100%)]'
                  )}
                  style={{ backgroundImage: `url(${item.image.src})` }}
                />

                <Container>
                  {/* Main content  */}
                  <div
                    className={cn(
                      'relative z-10 mx-auto max-w-[800px] text-center text-accent-900 dark:text-white lg:mt-[60px]',
                      styles['hero-content']
                    )}
                  >
                    <div className="space-y-6 md:space-y-8">
                      <H1 className="font-secondary text-2xl font-semibold uppercase leading-[1.1] md:text-3xl">
                        {item.title}
                      </H1>
                      <p className="text-accent-200">
                        Transform your business with our cutting-edge cloud
                        application development services, designed to deliver
                        scalable, secure, and high-performance cloud solutions
                      </p>
                      <ContactUsDialog>
                        <Button className={cn('rounded-full')}>
                          <>
                            <span>{item.button.label}</span>
                          </>
                        </Button>
                      </ContactUsDialog>
                      {/* <Button asChild className={cn("rounded-full")}>
            <CustomLink
             aria-label={item.button.label}
             href={item.button.href}
             openNewTab={item.button.openNewTab}
            >
             <span>{item.button.label}</span>
             <svg
              width={24}
              height={9}
              viewBox="0 0 28 9"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
             >
              <path d="M27.7911 5.02543C27.9863 4.83016 27.9863 4.51358 27.7911 4.31832L24.6091 1.13634C24.4138 0.941077 24.0972 0.941077 23.902 1.13634C23.7067 1.3316 23.7067 1.64818 23.902 1.84345L26.7304 4.67187L23.902 7.5003C23.7067 7.69556 23.7067 8.01214 23.902 8.20741C24.0972 8.40267 24.4138 8.40267 24.6091 8.20741L27.7911 5.02543ZM0.4375 5.17188L27.4375 5.17187L27.4375 4.17187L0.4375 4.17188L0.4375 5.17188Z" />
             </svg>
            </CustomLink>
           </Button> */}
                    </div>
                  </div>
                </Container>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
