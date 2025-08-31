import { StatCard, type StatCardProps } from "src/components/cards/stat/v1";
import type { SectionProps } from "@/src/common-types";
import { Container } from "@/src/components/container";
import { statisticsSectionData } from "@/src/data/statistics-section/v1";
import { getStaggeredDelay } from "@/src/utils/set-staggered-delay";
import { cn } from "@/src/utils/shadcn";

export interface StatisticsSectionProps {
	statistics: StatCardProps[];
}

export function StatisticsSection({ className }: SectionProps) {
	const { statistics } = statisticsSectionData;
	return (
		<section className={cn(className)}>
			<Container>
				{statistics && statistics.length > 0 && (
					<div className="grid gap-30px sm:grid-cols-2 xl:grid-cols-4">
						{statistics.map((stat, index) => (
							<div
								key={index}
								data-aos="fade-up"
								data-aos-delay={getStaggeredDelay([200, 400, 600, 800], index)}
							>
								<StatCard {...stat} />
							</div>
						))}
					</div>
				)}
			</Container>
		</section>
	);
}
