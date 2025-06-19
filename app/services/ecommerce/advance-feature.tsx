'use client';
import React from 'react';
import { slides } from "@/app/services/ecommerce/-data";
import { Container } from "@/src/components/container";
import Image from "next/image";
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

export default function AdvanceFeature() {
 const [currentSlide, setCurrentSlide] = React.useState(0);

 const nextSlide = () => {
   setCurrentSlide((prev) => (prev + 1) % slides.length);
 };

 const prevSlide = () => {
   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
 };
  return (
   <section className="mx-10 py-16">
   <Container>
     <div className="relative h-auto w-full overflow-hidden md:h-[500px]">
       {/* SVG Background */}
       <div className="absolute inset-0 flex h-full w-full">
         <svg
           viewBox="0 0 1555 465"
           fill="transparent"
           xmlns="http://www.w3.org/2000/svg"
           role="img"
           aria-label="Background gradient shape"
           className="h-full w-full object-contain"
           preserveAspectRatio="xMidYMid meet"
         >
           <path
             d="M1358.96 436.888L134.402 465H72.8012C38.454 465 24.8893 422.628 22.4004 401.442C14.9336 302.846 0 95.1427 0 53.0968C0 11.051 48.5341 0.539771 72.8012 0.5399C512.72 0.132479 1410.48 -0.437911 1482.16 0.5399C1553.84 1.51771 1559.32 47.3933 1553.09 70.2089C1542.51 147.212 1519.87 315.151 1513.89 370.886C1507.92 426.621 1408.11 438.11 1358.96 436.888Z"
             fill="url(#paint0_linear_446_808)"
           />
           <defs>
             <linearGradient
               id="paint0_linear_446_808"
               x1="777.5"
               y1="0"
               x2="777.5"
               y2="465"
               gradientUnits="userSpaceOnUse"
             >
               <stop stopColor="#0170C8" />
               <stop offset="1" stopColor="#014780" />
             </linearGradient>
           </defs>
         </svg>
       </div>

       {/* Carousel Content */}
       <div className="relative z-10 flex h-full items-center justify-end">
         {/* Image */}
         <div className="absolute -left-24 -top-4 ml-8 hidden flex-shrink-0 lg:block">
           <div className="relative h-[460px] w-[500px]">
             <Image
               src={slides[currentSlide].image}
               alt="E-commerce illustration"
               fill
               className="object-contain"
             />
           </div>
         </div>
         {/* Content */}
         <div className="mr-56 max-w-2xl items-center justify-center">
           <h3
             className={
               'whitespace-pre-line text-left font-secondary text-lg font-extrabold text-accent-100 dark:text-accent-700 md:text-xl'
             }
           >
             {slides[currentSlide].title}
           </h3>
           <p
             className={
               'my-2 whitespace-pre-line text-left font-semibold text-accent-200 dark:text-accent-700'
             }
           >
             {slides[currentSlide].description}
           </p>
         </div>
       </div>

       {/* Slide Indicators and Navigation Arrows Container */}
       <div className="absolute bottom-24 right-32 z-20 flex items-center space-x-4">
         {/* Navigation Arrows */}
         <div className="flex space-x-2">
           <button
             onClick={prevSlide}
             type="button"
             className="rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all duration-200 hover:bg-white/30 md:p-3"
             aria-label="Previous slide"
           >
             <ChevronLeft className="h-5 w-5 text-white md:h-6 md:w-6" />
           </button>
           <button
             onClick={nextSlide}
             className="rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all duration-200 hover:bg-white/30 md:p-3"
             aria-label="Next slide"
             type="button"
           >
             <ChevronRight className="h-5 w-5 text-white md:h-6 md:w-6" />
           </button>
         </div>
       </div>

       {/* Slide Indicators are now part of the bottom-right container */}
     </div>
   </Container>
 </section>
  );
}
