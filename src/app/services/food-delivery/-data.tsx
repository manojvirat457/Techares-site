import type { FAQSectionProps } from "@/src/sections/faq";
import type { ProjectDetailsProps } from "@/src/sections/project/v4";
import type { TeamSectionProps } from "@/src/sections/team/v2";

import Image from "next/image";

export const projectDetails: ProjectDetailsProps = {
	sectionHeading: {
		title: "Food Delivery App Development Company",
		description:
			"TechAres offers an on-demand food delivery app development that is aimed at making the process of ordering, delivery, and communication hassle-free. With a solid track record, we create apps that perfectly cater to your specific business requirements. We provide seamless solutions that feature live order tracking and secure payment options to help businesses flourish with innovation. These features strive to keep your customers engaged with customized services.",
		size: "md",
		heading: "h2",
	},
	isCard: false,
	isButton: true,
	button: {
		href: "/contact",
		label: "Get in Touch",
	},
	keyPoints: [],
	image: {
		src: "/assets/images/food-delivery/hero-2.png",
		alt: "about image five",
		width: 540,
		height: 578,
	},
};

export const uniqueFeatures: ProjectDetailsProps = {
	sectionHeading: {
		title: "That Set Us Apart",
		highlighttitle: "Advanced Features ",
		description:
			"At TechAres, we focus on building a next-generation food delivery app that delivers exceptional user experience, operational efficiency, and long-term customer retention. Here are the standout features that make our platform truly unique",
		heading: "h2",
	},
	isButton: false,
	isCard: false,
	keyPoints: [
		{
			title: "AI-Based Order Recommendations",
			icon: (
				<Image
					src="/assets/images/food-delivery/hot-pot.png"
					alt="Feature 1"
					width={50}
					height={50}
				/>
			),
			description:
				"Leverage artificial intelligence to analyze customer behavior, order history, and preferences. Provide smart, personalized food suggestions that help users discover new dishes effortlessly—driving engagement and satisfaction.",
		},
		{
			title: "Multi-Language Support",
			icon: (
				<Image
					src="/assets/images/food-delivery/lang.png"
					alt="Feature 1"
					width={50}
					height={50}
				/>
			),
			description:
				"Cater to a diverse audience with built-in multi-language functionality. By offering a localized app experience, you can expand your customer base and build stronger, more inclusive relationships with users from different regions.",
		},
		{
			title: "Geo-Fencing for Smarter Deliveries",
			icon: (
				<Image
					src="/assets/images/food-delivery/thumbs.png"
					alt="Feature 1"
					width={50}
					height={50}
				/>
			),
			description:
				"Use GPS-powered geo-fencing to define delivery zones, improve route accuracy, and notify users of real-time order updates. This feature ensures faster, more reliable deliveries and streamlined operations.",
		},
		{
			title: "Loyalty Programs & Referral Rewards",
			icon: (
				<Image
					src="/assets/images/food-delivery/cup.png"
					alt="Feature 1"
					width={50}
					height={50}
				/>
			),
			description:
				"Boost retention and organic growth with customizable loyalty programs and referral incentives. Reward repeat customers with discounts or giveaways, and motivate users to bring in new business through easy-to-share referral links.",
		},
		// {
		//   title: 'Continuous Innovation & Security',
		//   icon: (
		//     <Image
		//       src="/assets/images/food-delivery/secure.png"
		//       alt="Feature 1"
		//       width={50}
		//       height={50}
		//     />
		//   ),
		//   description:
		//     'Our team is constantly evolving the app with the latest technologies. We prioritize seamless integrations, top-tier data security, and secure payment systems. Regular updates and multilingual support ensure the app remains adaptable, user-friendly, and future-ready.',
		// },
	],
	image: {
		src: "/assets/images/food-delivery/hero-4.png",
		alt: "about image five",
		width: 300,
		height: 328,
	},
};

export const workflowSteps = [
	{
		id: 1,
		title: "From Scratch",
		description:
			"If you have unique business requirements, we develop custom built food delivery apps from scratch. Have a look at the step-by-step method –",
	},
	{
		id: 2,
		title: "Developing prototype",
		description:
			"We create user flows and prototypes according to your demands. Our team ensures all green check marks for a successful app development.",
	},
	{
		id: 3,
		title: "Interface",
		description:
			"While designing the app's UI/UX interface, we ensure that it is intuitive and user-friendly.",
	},
	{
		id: 4,
		title: "Development",
		description:
			"Front-end and back-end development to create basic components.",
	},
	{
		id: 5,
		title: "Rigorous testing",
		description:
			"Our team performs rigorous testing to ensure the app does not have any technical issues or bugs.",
	},
	{
		id: 6,
		title: "Successful deployment",
		description:
			"Once the app listing is optimized and tested, it is successfully deployed to Android or iOS.",
	},
];

export const whyChooseUs: ProjectDetailsProps = {
	sectionHeading: {
		title: "Why Choose TechAres ?",
		description:
			"At TechAres, our experts are qualified to offer the best on-demand food delivery app services exclusively meant for your business. With a solid track record and experience of many years, we strive to provide highly secured and scalable apps equipped with advanced technologies. Our inclusive services include everything, right from creating high quality app to its deployment and support. Our commitment to offering enhanced user experiences, TechAres ensures long lasting business growth. Whether you are planning to start your food delivery business or update your existing brand, trust us to create strategies that ensure success.",
		size: "sm",
		heading: "h2",
	},
	isButton: false,
	isCard: false,
	keyPoints: [
		{
			title: "Experienced team",
			icon: (
				<Image
					src="/assets/images/food-delivery/fock-outline.png"
					alt="Feature 1"
					width={20}
					height={20}
				/>
			),
			description:
				"Our team of professionals has a solid knowledge of designing high-quality food delivery apps catered to your business requirements.",
		},
		{
			title: "Comprehensive solutions",
			icon: (
				<Image
					src="/assets/images/food-delivery/fock-outline.png"
					alt="Feature 1"
					width={20}
					height={20}
				/>
			),
			description:
				"We know how to deliver a high-performance app by following each step, right from the design to its launch.",
		},
		{
			title: "Scalable",
			icon: (
				<Image
					src="/assets/images/food-delivery/fock-outline.png"
					alt="Feature 1"
					width={20}
					height={20}
				/>
			),
			description:
				"We enable you to have a wide reach without any technology constraints.",
		},
		{
			title: "Reasonable",
			icon: (
				<Image
					src="/assets/images/food-delivery/fock-outline.png"
					alt="Feature 1"
					width={20}
					height={20}
				/>
			),
			description:
				"Choose our reasonable food delivery app development services that ensure higher ROI.",
		},
	],
	image: {
		src: "/assets/images/food-delivery/hero-3.png",
		alt: "about image five",
		width: 540,
		height: 578,
	},
};
export const faqSectionData: FAQSectionProps = {
	sectionHeading: {
		subtitle: "Our faq",
		title: "Frequently Asked Questions",
		heading: "h2",
	},
	faqItems: [
		{
			question:
				"What are the services offered by TechAres in on-demand food delivery app development?",
			answer:
				"TechAres is the leading food delivery app development company that offers a wide range of services to fulfill your business needs. We offer app development services, right from the design and development of the app. Also, our experts ensure effortless integration of your app with the latest systems. Trust us to stand out in this dynamically changing food delivery sector.",
		},
		{
			question:
				"Can you explain the post development support and maintenance services offered by TechAres?",
			answer:
				"At TechAres, we strive to offer top-notch post development support and maintenance to ensure that your app attains the desired success. Our inclusive services include enhancing performance, regular updates, and troubleshooting. We offer round-the-clock support to make sure any issues you find are addressed in no time!",
		},
		{
			question: "How can I make money with my food delivery app?",
			answer:
				"You can monetize your food delivery app by charging the user for the facility of delivering food to their doorsteps. You can also make a commission fee from each order placed through app if you are a restaurant partner.",
		},
	],
};

export const uniqueFeature: TeamSectionProps = {
	sectionHeading: {
		subtitle: "Unique Features",
		title: "Enhancing the Ride-Hailing Experience",
		heading: "h2",
	},
	description:
		"At TechAres, we integrate cutting-edge technology to provide a superior taxi app experience with unique features that set us apart. Our AI-based route optimization ensures drivers take the most efficient routes, reducing travel time and fuel costs. We support multi-payment options, including credit/debit cards, wallets, and digital payments, offering users a seamless and flexible checkout process. To enhance safety, our app includes SOS & emergency features, allowing passengers to send instant alerts to emergency contacts and authorities in case of distress. Additionally, our dynamic surge pricing system adjusts fares based on real-time demand, ensuring fair pricing for drivers while optimizing earnings during peak hours.",
};

// Tab data
export const tabs = [
	{ id: "admin", label: "Admin Panel" },
	{ id: "customer", label: "Customer App" },
	{ id: "driver", label: "Driver App" },
	{ id: "restaurant", label: "Restaurant App" },
];

// Content for each tab
export const tabContent = {
	admin: {
		title: "Admin Panel",
		features: [
			{
				icon: (
					<Image
						src="/assets/images/food-delivery/fock.png"
						alt="White Label Solution"
						width={100}
						height={100}
						className="w-full "
					/>
				),
				title: "Centralized Dashboard",
				description:
					"Manage the entire platform from a single, intuitive dashboard. Track live orders, monitor delivery operations, and oversee customer and restaurant activities in real time.",
			},
			{
				icon: (
					<Image
						src="/assets/images/food-delivery/fock.png"
						alt="White Label Solution"
						width={100}
						height={100}
						className="w-full "
					/>
				),
				title: "Customer Management",
				description:
					"Access and manage customer profiles, view order history, preferences, and support queries to enhance user satisfaction and retention.",
			},
			{
				icon: (
					<Image
						src="/assets/images/food-delivery/fock.png"
						alt="White Label Solution"
						width={100}
						height={100}
						className="w-full "
					/>
				),
				title: "Restaurant Management",
				description:
					"Onboard, monitor, and support restaurant partners. Control listings, menu updates, and performance metrics to ensure quality and consistency.",
			},
			{
				icon: (
					<Image
						src="/assets/images/food-delivery/fock.png"
						alt="White Label Solution"
						width={100}
						height={100}
						className="w-full "
					/>
				),
				title: "Payment & Revenue Monitoring",
				description:
					"Track all financial transactions, including customer payments and partner payouts. Generate real-time reports for accurate revenue analysis and planning.",
			},
			{
				icon: (
					<Image
						src="/assets/images/food-delivery/fock.png"
						alt="White Label Solution"
						width={100}
						height={100}
						className="w-full "
					/>
				),
				title: "Business Analytics & Reporting",
				description:
					"Analyze sales trends, customer behavior, and feedback to make informed business decisions. Use data insights to optimize operations and drive growth.",
			},
		],
		image: "/assets/images/food-delivery/m1.png",
	},
	customer: {
		title: "Customer App",
		features: [
			{
				icon: (
					<Image
						src="/assets/images/food-delivery/fock.png"
						alt="White Label Solution"
						width={100}
						height={100}
						className="w-full "
					/>
				),
				title: "Tailored push notifications",
				description:
					"Want to draw the attention of your customers by offering promotions, giveaways or discounts? We offer apps equipped with customized push notifications to increase user engagement.",
			},
			{
				icon: (
					<Image
						src="/assets/images/food-delivery/fock.png"
						alt="White Label Solution"
						width={100}
						height={100}
						className="w-full "
					/>
				),
				title: "User-friendly interface",
				description:
					"The food delivery apps offered by our experts ensure an intuitive interface to keep your customers loyal to your brand",
			},
			{
				icon: (
					<Image
						src="/assets/images/food-delivery/fock.png"
						alt="White Label Solution"
						width={100}
						height={100}
						className="w-full "
					/>
				),
				title: "Live order tracking",
				description:
					"We understand how much customers value real-time order tracking. They need transparency when it comes to their orders",
			},
			{
				icon: (
					<Image
						src="/assets/images/food-delivery/fock.png"
						alt="White Label Solution"
						width={100}
						height={100}
						className="w-full "
					/>
				),
				title: "Secure multiple payment options",
				description:
					"We integrate popular and secure payment options to offer customers a hassle-free way to pay for their orders",
			},
			{
				icon: (
					<Image
						src="/assets/images/food-delivery/fock.png"
						alt="White Label Solution"
						width={100}
						height={100}
						className="w-full "
					/>
				),
				title: "Personalized recommendations",
				description:
					"With our top-notch app development services, we enable users to rate and review your food delivery app. They can also add personalized recommendations that will increase brand recognition and help you draw more customers",
			},
		],
		image: "/assets/images/food-delivery/m2.png",
	},
	driver: {
		title: "Driver App",
		features: [
			{
				icon: (
					<Image
						src="/assets/images/food-delivery/fock.png"
						alt="White Label Solution"
						width={100}
						height={100}
						className="w-full "
					/>
				),
				title: "Smart Navigation for Fast Deliveries",
				description:
					"Real-time GPS and traffic-aware routing help drivers reach destinations quickly and efficiently, reducing delays and fuel usage.",
			},
			{
				icon: (
					<Image
						src="/assets/images/food-delivery/fock.png"
						alt="White Label Solution"
						width={100}
						height={100}
						className="w-full "
					/>
				),
				title: "Instant Order Alerts",
				description:
					"Get notified instantly when new delivery requests arrive, with clear pickup and drop-off details for a smooth workflow.",
			},
			{
				icon: (
					<Image
						src="/assets/images/food-delivery/fock.png"
						alt="White Label Solution"
						width={100}
						height={100}
						className="w-full "
					/>
				),
				title: "Earnings & Performance Dashboard",
				description:
					"Track daily earnings, bonuses, and delivery stats all in one place. Stay motivated with insights into your performance and ratings.",
			},
			{
				icon: (
					<Image
						src="/assets/images/food-delivery/fock.png"
						alt="White Label Solution"
						width={100}
						height={100}
						className="w-full "
					/>
				),
				title: "Secure In-App Communication",
				description:
					"Call or message customers safely through the app without sharing personal contact details—ensuring privacy and professionalism.",
			},
			{
				icon: (
					<Image
						src="/assets/images/food-delivery/fock.png"
						alt="White Label Solution"
						width={100}
						height={100}
						className="w-full "
					/>
				),
				title: "Flexible Scheduling & Support",
				description:
					"Set your own availability and get help when needed through a responsive in-app support center.",
			},
		],
		image: "/assets/images/food-delivery/m3.png",
	},
	restaurant: {
		title: "Restaurant App",
		features: [
			{
				icon: (
					<Image
						src="/assets/images/food-delivery/fock.png"
						alt="White Label Solution"
						width={100}
						height={100}
						className="w-full "
					/>
				),
				title: "Order & Menu Management",
				description:
					"Easily manage online orders across mobile and web platforms. Update menus in real time with item availability, pricing, and personalized descriptions—ensuring customers always see what's fresh and ready to serve.",
			},
			{
				icon: (
					<Image
						src="/assets/images/food-delivery/fock.png"
						alt="White Label Solution"
						width={100}
						height={100}
						className="w-full "
					/>
				),
				title: "Inventory Tracking",
				description:
					"Track stock levels automatically to prevent shortages and reduce food waste. Receive alerts for low inventory and manage your kitchen more efficiently with real-time insights.",
			},
			{
				icon: (
					<Image
						src="/assets/images/food-delivery/fock.png"
						alt="White Label Solution"
						width={100}
						height={100}
						className="w-full "
					/>
				),
				title: "Analytics & Reporting",
				description:
					"Gain valuable insights into customer preferences, peak ordering times, and top-selling dishes. Use data-driven reports to optimize your menu, forecast demand, and plan marketing strategies effectively.",
			},
			{
				icon: (
					<Image
						src="/assets/images/food-delivery/fock.png"
						alt="White Label Solution"
						width={100}
						height={100}
						className="w-full "
					/>
				),
				title: "Third-Party Integrations",
				description:
					"Seamlessly integrate with trusted payment gateways and external services for delivery, marketing, and accounting—making operations smoother and more scalable.",
			},
			{
				icon: (
					<Image
						src="/assets/images/food-delivery/fock.png"
						alt="White Label Solution"
						width={100}
						height={100}
						className="w-full "
					/>
				),
				title: "Real-Time Control & Customization",
				description:
					"Update menu items, manage active orders, set prep times, and control service availability—all in real time from a single dashboard designed for busy kitchens.",
			},
		],
		image: "/assets/images/food-delivery/m4.png",
	},
};
