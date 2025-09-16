import { cn } from "@/src/utils/shadcn";
import type { SectionHeadingProps } from "./interface";

/**
 * This component renders a text section with `subtitle`, `title`,
 * and `description`. It has styling options for alignment
 * @param SectionHeadingProps
 * @returns JSX.Element
 */
export function SectionHeading({
	subtitle,
	title,
	description,
	alignment = "start",
	textPosition = "start",
	hasBottomSpacing = false,
	highlighttitle,
	className,
	additionalDesc,
	specialText,
	size,
	invertColor = false,
	heading = "h2",
}: SectionHeadingProps) {
	const wrapperClasses = cn(
		alignment === "start" && "text-left",
		alignment === "center" && "text-center",
		alignment === "end" && "text-right",
		{ "mb-10 md:mb-[3.75rem]": hasBottomSpacing },
		className,
	);

	const headingClasses = cn(
		"whitespace-pre-line font-secondary font-extrabold",
		!invertColor && "text-accent-900 dark:text-white",
		invertColor && "text-white dark:text-accent-900",
		size === "xs" && "xm:text-xl text-base md:text-lg",
		size === "sm" && "xm:text-2xl text-lg md:text-xl",
		size === "md" && "xm:text-3xl text-xl md:text-2xl",
		size === "lg" && "xm:text-4xl text-2xl md:text-3xl",
		size === "xl" && "xm:text-5xl text-3xl md:text-4xl",
		size === "xm" && "xm:text-4xl text-2xl md:text-3xl",
		!size && "xm:text-3xl text-xl leading-10 md:text-2xl",
		textPosition === "start" && "text-left",
		textPosition === "center" && "text-center",
		textPosition === "end" && "text-right",
	);

	const renderHeading = () => {
		const headingContent = (
			<>
				{highlighttitle && (
					<span className="text-primary">{highlighttitle}</span>
				)}
				{title}
			</>
		);

		switch (heading) {
			case "h1":
				return <h1 className={headingClasses}>{headingContent}</h1>;
			case "h2":
				return <h2 className={headingClasses}>{headingContent}</h2>;
			case "h3":
				return <h3 className={headingClasses}>{headingContent}</h3>;
			case "h4":
				return <h4 className={headingClasses}>{headingContent}</h4>;
			case "P":
				return <p className="font-semibold font-secondary text-base text-black">{headingContent}</p>;
			default:
				return <h3 className={headingClasses}>{headingContent}</h3>;
		}
	};

	return (
		<div className={wrapperClasses}>
			{subtitle && (
				<p
					className={cn(
						"mb-[.625rem] block font-secondary text-base	font-bold uppercase tracking-widest text-primary",
						size === "md" && "md:text-md",
						size === "lg" && "md:text-lg",
						size === "xl" && "md:text-xl",
						size === "xm" && "md:text-2xl",
						textPosition === "start" && "text-left",
						textPosition === "center" && "text-center",
						textPosition === "end" && "text-right",
					)}
				>
					{subtitle}
				</p>
			)}
			{specialText && (
				<p
					className={cn(
						"mb-[.625rem] font-secondary font-bold text-primary md:text-lg",
						textPosition === "start" && "text-left",
						textPosition === "center" && "text-center",
						textPosition === "end" && "text-right",
					)}
				>
					{specialText}
				</p>
			)}
			{renderHeading()}
			{description && (
				<p
					className={cn(
						"whitespace-pre-lin my-3",
						invertColor && "text-white dark:text-accent-900",
						!invertColor && "text-accent-800 dark:text-body",
						textPosition === "start" && "text-left",
						textPosition === "center" && "text-center",
						textPosition === "end" && "text-right",
					)}
				>
					{description}
				</p>
			)}
			{additionalDesc && (
				<p
					className={cn(
						"mt-2",
						textPosition === "start" && "text-left",
						textPosition === "center" && "text-center",
						textPosition === "end" && "text-right",
					)}
				>
					{additionalDesc}
				</p>
			)}
		</div>
	);
}
