/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
"use client";

import Image from "next/image";
import { Autoplay, EffectFade, Pagination } from "swiper";
// Import Swiper styles
import type { ImageProps, LinkProps } from "@/src/common-types";
import { Container } from "@/src/components/container";
import { SectionHeading } from "@/src/components/section-heading";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export interface HeroProps {
	items: {
		title: string | JSX.Element;
		description?: string;
		image: ImageProps
		button: LinkProps;
		side: "left" | "right";
	}[];
}

export function Hero({ items }: HeroProps) {
	return (
		<section className="relative min-h-[90vh] overflow-hidden pb-24 px-20 -mt-20">
			{items && items.length > 0 && (
				<Container isFluid isNoPadding>
					<Swiper
						effect="fade"
						// loop
						// speed={300}
						// autoplay={{
						// 	delay: 4000,
						// 	disableOnInteraction: true,
						// }}
						pagination={{
							clickable: true,
							bulletClass: "swiper-pagination-bullet custom-bullet",
							bulletActiveClass:
								"swiper-pagination-bullet-active custom-bullet-active",
						}}
						modules={[EffectFade, Autoplay, Pagination]}
						className="hero-swiper"
					>
						{items.map((item, index) => (
							<SwiperSlide key={index}>
								<div
									className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat bg-origin-content"
									style={{
										backgroundImage: `url(${"/assets/images/background.png"})`,
									}}
								/>
								<div
									className={`relative flex min-h-screen items-center overflow-hidden ${item.side === "right" ? "flex-row-reverse" : "flex-row"}`}
								>
									<div className="flex h-full flex-1 self-center justify-around">
										<div className="max-w-lg text-center ">
											<div
												className="space-y-6"
												data-aos="fade-up"
												data-aos-delay="100"
											>
												<SectionHeading
													title={item.title}
													description={item.description}
													heading="h2"
													size="md"
             textPosition="start"
												/>
											</div>
										</div>
									</div>
									<div className={`relative h-full flex-1 self-end items-end ${item.side === "right" ? 'justify-items-start' : 'justify-items-end' }`}>
										<Image
											src={item.image.src}
											alt={item.image.alt || ""}
											width={item.image.width || 700}
											height={item.image.height || 700}
											priority={index === 0}
											className="z-10 object-cover items-end"
											loading={index === 0 ? "eager" : "lazy"}
										/>
									</div>
								</div>
								{/* <div className="absolute inset-0 bg-[#EDF8FE] opacity-80 dark:bg-accent-900" /> */}
								{/* <div className="absolute inset-0 bg-transparent opacity-80 dark:bg-accent-900" /> */}
							</SwiperSlide>
						))}
					</Swiper>
					{/* </div> */}
				</Container>
			)}
		</section>
	);
}
