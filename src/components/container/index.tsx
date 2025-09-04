import { cn } from "@/src/utils/shadcn";
import Styles from "./container.module.css";
import type { IContainer } from "./interface";

/** Container provide content containment, padding, and alignment within specific devices or viewports. */
export function Container({
	children,
	isFluid = false,
	isNoPadding = false,
}: IContainer) {
	const containerClasses = cn(
		[Styles["container"]],
		{ [Styles["full-width"]]: isFluid },
		{ [Styles["no-padding"]]: isNoPadding },
	);

	return (
		<div className={cn(containerClasses, !isNoPadding && "px-8 md:px-8")}>
			{children}
		</div>
	);
}
