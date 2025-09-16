import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "sonner";
import { Footer } from "@/src/components/footer";
import { ScrollToTopButton } from "@/src/components/scroll-to-top";
import { ThemeProvider } from "@/src/components/theme-provider";
import { primary, secondary } from "@/src/fonts";
import { AOSInit } from "@/src/utils/aos";
import { basicMetadata } from "@/src/utils/metadata";
import { cn } from "@/src/utils/shadcn";
import "./globals.css";
import { Header } from "@/src/components/header";

interface Props {
	children: React.ReactNode;
}

export const metadata = basicMetadata({
	title: "Techares",
	description: "Techares - IT Solutions and Services",
});

export default async function RootLayout({ children }: Props) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			// className={cn(
			// 	"dark",
			// 	primary.variable,
			// 	secondary.variable,
			// 	"text-base  text-accent-800 [&.dark]:text-body",
			// )}
		>
			<head />
			<AOSInit />
			<body>
				<GoogleAnalytics gaId="GTM-W9JNHJXF" />
				{/* <ThemeProvider attribute="class" defaultTheme="light"> */}
					<div className={cn("text-accent-800 dark:text-body")}>
						{/* <MainHeader /> */}
						{/* <Navbar1 /> */}
						<Header />
						{children}
						<Footer />
					</div>
				{/* </ThemeProvider> */}
				<Toaster
					richColors
					position="top-right"
					closeButton
					visibleToasts={9}
				/>
				<ScrollToTopButton />
			</body>
		</html>
	);
}
