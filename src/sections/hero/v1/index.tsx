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
import ContactUsDialog from "../../contact/v3";
import { Button } from "@/src/components/button";
import { cn } from "@/src/utils/shadcn";

export interface HeroProps {
	items: {
		title: string | JSX.Element;
		description?: string;
		image: ImageProps;
		button: LinkProps;
		side: "left" | "right";
	}[];
}

export function Hero({ items }: HeroProps) {
	return (
		<section className="relative min-h-[90vh]  h-full w-full overflow-hidden pt-24 px-10 lg:-mt-20">
			{items && items.length > 0 && (
				<Container isFluid isNoPadding>
					<Swiper
						effect="fade"
						loop
						speed={300}
						autoplay={{
							delay: 4000,
							disableOnInteraction: true,
						}}
						autoHeight={true}
						shortSwipes={false}
						modules={[EffectFade, Autoplay]}
						className="hero-swiper h-full w-full"
					>
						{items.map((item, index) => (
							<SwiperSlide key={item.description} className="h-full w-full">
								<div
									className="absolute inset-0  h-full w-full bg-cover bg-center bg-no-repeat bg-origin-content"
									style={{
										backgroundImage: `url(${"/assets/images/background.png"})`,
									}}
								/>
								<div
									className={`relative flex   items-center overflow-hidden flex-col ${item.side === "right" ? "lg:flex-row-reverse" : "lg:flex-row"}`}
								>
									<div className="flex w-full  flex-1 self-center justify-around">
										<div className="max-w-lg text-center ">
											<div
												className="space-y-6 px-10 "
												data-aos="fade-up"
												data-aos-delay="100"
											>
												<SectionHeading
													title={item.title}
													description={item.description}
													heading="h1"
													size="md"
													textPosition="start"
													className="lg:w-[30rem] mt-20 lg:mt-0"
												/>
												<div className="flex flex-col gap-3 w-36">
													<ContactUsDialog>
														<Button
															className={cn(
																"px-2 py-1 text-sm rounded-full capitalize",
															)}
															size="small"
														>
															<span className="text-sm">{"Get Quote"}</span>
														</Button>
													</ContactUsDialog>
												</div>
											</div>
										</div>
									</div>
									<div
										className={`relative h-max flex-1 content-end self-end items-end ${item.side === "right" ? "justify-items-start" : "justify-items-end"}`}
									>
										<Image
											src={item.image.src}
											alt={item.image.alt || ""}
											width={item.image.width || 1000}
											height={item.image.height || 1000}
											priority={index === 0}
											className="z-10 object-cover items-end "
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
