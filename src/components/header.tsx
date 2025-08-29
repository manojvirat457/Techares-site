"use client";

import {
	BarChart,
	BookOpen,
	Briefcase,
	Camera,
	Code,
	Database,
	FileText,
	FolderOpen,
	Globe,
	Headphones,
	Library,
	Mail,
	Menu,
	Settings,
	ShoppingCart,
	Smartphone,
	UserPlus,
	Users,
	Video,
	X,
} from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/src/components/button";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/src/components/ui/accordion";
import { BrandLogo } from "@/src/layout/brand-logo";
import ContactUsDialog from "@/src/sections/contact/v3";
import { cn } from "@/utils/utils";

const megaMenuData = {
	Home: {
		rightSidebar: [
			{ name: "Get Started", icon: <BookOpen className="w-4 h-4" /> },
			{ name: "Setup 101", icon: <Settings className="w-4 h-4" /> },
			{ name: "Adding Users", icon: <UserPlus className="w-4 h-4" /> },
			{ name: "Libraries and SDK", icon: <Library className="w-4 h-4" /> },
			{ name: "Adding Projects", icon: <FolderOpen className="w-4 h-4" /> },
			{ name: "Mails", icon: <Mail className="w-4 h-4" /> },
		],
		content: {
			"Get Started": [
				{
					title: "Quick Start",
					items: [
						{
							name: "Installation",
							description: "Get up and running quickly",
							icon: <Code className="w-4 h-4" />,
						},
						{
							name: "First Steps",
							description: "Your first project",
							icon: <BookOpen className="w-4 h-4" />,
						},
						{
							name: "Configuration",
							description: "Basic setup guide",
							icon: <Settings className="w-4 h-4" />,
						},
					],
				},
				{
					title: "Resources",
					items: [
						{
							name: "Documentation",
							description: "Complete guides",
							icon: <FileText className="w-4 h-4" />,
						},
						{
							name: "Video Tutorials",
							description: "Step-by-step videos",
							icon: <Video className="w-4 h-4" />,
						},
						{
							name: "Community",
							description: "Join our community",
							icon: <Users className="w-4 h-4" />,
						},
					],
				},
			],
			"Setup 101": [
				{
					title: "Environment Setup",
					items: [
						{
							name: "Development Tools",
							description: "Required tools and IDEs",
							icon: <Code className="w-4 h-4" />,
						},
						{
							name: "Dependencies",
							description: "Install required packages",
							icon: <Database className="w-4 h-4" />,
						},
						{
							name: "Configuration Files",
							description: "Setup config files",
							icon: <FileText className="w-4 h-4" />,
						},
					],
				},
				{
					title: "Getting Started",
					items: [
						{
							name: "Project Structure",
							description: "Understand the layout",
							icon: <FolderOpen className="w-4 h-4" />,
						},
						{
							name: "First Build",
							description: "Create your first build",
							icon: <Settings className="w-4 h-4" />,
						},
						{
							name: "Testing",
							description: "Run your first tests",
							icon: <BarChart className="w-4 h-4" />,
						},
					],
				},
			],
			"Adding Users": [
				{
					title: "User Management",
					items: [
						{
							name: "Create Users",
							description: "Add new users to system",
							icon: <UserPlus className="w-4 h-4" />,
						},
						{
							name: "User Roles",
							description: "Assign roles and permissions",
							icon: <Users className="w-4 h-4" />,
						},
						{
							name: "User Profiles",
							description: "Manage user information",
							icon: <Settings className="w-4 h-4" />,
						},
					],
				},
				{
					title: "Authentication",
					items: [
						{
							name: "Login System",
							description: "Setup authentication",
							icon: <Database className="w-4 h-4" />,
						},
						{
							name: "Password Reset",
							description: "Password recovery flow",
							icon: <Mail className="w-4 h-4" />,
						},
						{
							name: "Security",
							description: "Security best practices",
							icon: <Briefcase className="w-4 h-4" />,
						},
					],
				},
			],
			"Libraries and SDK": [
				{
					title: "Frontend Libraries",
					items: [
						{
							name: "React Components",
							description: "Ready-to-use components",
							icon: <Code className="w-4 h-4" />,
						},
						{
							name: "UI Framework",
							description: "Complete UI toolkit",
							icon: <Globe className="w-4 h-4" />,
						},
						{
							name: "State Management",
							description: "Data flow solutions",
							icon: <Database className="w-4 h-4" />,
						},
					],
				},
				{
					title: "Backend SDK",
					items: [
						{
							name: "API Client",
							description: "Backend integration",
							icon: <Database className="w-4 h-4" />,
						},
						{
							name: "Authentication",
							description: "Auth SDK",
							icon: <Users className="w-4 h-4" />,
						},
						{
							name: "File Upload",
							description: "Media handling",
							icon: <Camera className="w-4 h-4" />,
						},
					],
				},
			],
			"Adding Projects": [
				{
					title: "Project Setup",
					items: [
						{
							name: "New Project",
							description: "Create a new project",
							icon: <FolderOpen className="w-4 h-4" />,
						},
						{
							name: "Templates",
							description: "Use project templates",
							icon: <FileText className="w-4 h-4" />,
						},
						{
							name: "Import Existing",
							description: "Import existing projects",
							icon: <Database className="w-4 h-4" />,
						},
					],
				},
				{
					title: "Project Management",
					items: [
						{
							name: "Collaboration",
							description: "Team collaboration tools",
							icon: <Users className="w-4 h-4" />,
						},
						{
							name: "Version Control",
							description: "Git integration",
							icon: <Code className="w-4 h-4" />,
						},
						{
							name: "Deployment",
							description: "Deploy your projects",
							icon: <Globe className="w-4 h-4" />,
						},
					],
				},
			],
			Mails: [
				{
					title: "Email Integration",
					items: [
						{
							name: "SMTP Setup",
							description: "Configure email sending",
							icon: <Mail className="w-4 h-4" />,
						},
						{
							name: "Templates",
							description: "Email templates",
							icon: <FileText className="w-4 h-4" />,
						},
						{
							name: "Automation",
							description: "Automated email flows",
							icon: <Settings className="w-4 h-4" />,
						},
					],
				},
				{
					title: "Email Management",
					items: [
						{
							name: "Inbox",
							description: "Manage incoming emails",
							icon: <Mail className="w-4 h-4" />,
						},
						{
							name: "Analytics",
							description: "Email performance",
							icon: <BarChart className="w-4 h-4" />,
						},
						{
							name: "Notifications",
							description: "Email notifications",
							icon: <Headphones className="w-4 h-4" />,
						},
					],
				},
			],
		},
	},
	Solutions: {
		rightSidebar: [
			{ name: "Web Solutions", icon: <Globe className="w-4 h-4" /> },
			{ name: "Mobile Apps", icon: <Smartphone className="w-4 h-4" /> },
			{ name: "E-commerce", icon: <ShoppingCart className="w-4 h-4" /> },
		],
		content: {
			"Web Solutions": [
				{
					title: "Frontend Solutions",
					items: [
						{
							name: "React Apps",
							description: "Modern React applications",
							icon: <Code className="w-4 h-4" />,
						},
						{
							name: "Vue.js",
							description: "Vue.js applications",
							icon: <Globe className="w-4 h-4" />,
						},
						{
							name: "Angular",
							description: "Enterprise Angular apps",
							icon: <Briefcase className="w-4 h-4" />,
						},
					],
				},
			],
			"Mobile Apps": [
				{
					title: "Native Development",
					items: [
						{
							name: "iOS Apps",
							description: "Native iOS development",
							icon: <Smartphone className="w-4 h-4" />,
						},
						{
							name: "Android Apps",
							description: "Native Android apps",
							icon: <Smartphone className="w-4 h-4" />,
						},
					],
				},
			],
			"E-commerce": [
				{
					title: "Online Stores",
					items: [
						{
							name: "Shopify",
							description: "Shopify integrations",
							icon: <ShoppingCart className="w-4 h-4" />,
						},
						{
							name: "WooCommerce",
							description: "WordPress e-commerce",
							icon: <ShoppingCart className="w-4 h-4" />,
						},
					],
				},
			],
		},
	},
	Services: {
		rightSidebar: [
			{ name: "Development", icon: <Code className="w-4 h-4" /> },
			{ name: "Design", icon: <Camera className="w-4 h-4" /> },
			{ name: "Support", icon: <Headphones className="w-4 h-4" /> },
		],
		content: {
			Development: [
				{
					title: "Web Development",
					items: [
						{
							name: "Frontend",
							description: "React, Vue, Angular",
							icon: <Code className="w-4 h-4" />,
						},
						{
							name: "Backend",
							description: "Node.js, Python, PHP",
							icon: <Database className="w-4 h-4" />,
						},
					],
				},
			],
			Design: [
				{
					title: "UI/UX Design",
					items: [
						{
							name: "Interface Design",
							description: "User interface design",
							icon: <Camera className="w-4 h-4" />,
						},
						{
							name: "User Experience",
							description: "UX research and design",
							icon: <Users className="w-4 h-4" />,
						},
					],
				},
			],
			Support: [
				{
					title: "Customer Support",
					items: [
						{
							name: "24/7 Support",
							description: "Round-the-clock help",
							icon: <Headphones className="w-4 h-4" />,
						},
						{
							name: "Training",
							description: "Team training sessions",
							icon: <Video className="w-4 h-4" />,
						},
					],
				},
			],
		},
	},
	Companies: {
		rightSidebar: [
			{ name: "Startups", icon: <Briefcase className="w-4 h-4" /> },
			{ name: "Enterprise", icon: <Database className="w-4 h-4" /> },
		],
		content: {
			Startups: [
				{
					title: "Startup Solutions",
					items: [
						{
							name: "MVP Development",
							description: "Minimum viable products",
							icon: <Code className="w-4 h-4" />,
						},
						{
							name: "Scaling",
							description: "Growth-ready architecture",
							icon: <BarChart className="w-4 h-4" />,
						},
					],
				},
			],
			Enterprise: [
				{
					title: "Enterprise Solutions",
					items: [
						{
							name: "Custom Development",
							description: "Tailored solutions",
							icon: <Database className="w-4 h-4" />,
						},
						{
							name: "Integration",
							description: "System integrations",
							icon: <Settings className="w-4 h-4" />,
						},
					],
				},
			],
		},
	},
	Portfolio: {
		rightSidebar: [
			{ name: "Recent Work", icon: <FolderOpen className="w-4 h-4" /> },
			{ name: "Case Studies", icon: <FileText className="w-4 h-4" /> },
		],
		content: {
			"Recent Work": [
				{
					title: "Latest Projects",
					items: [
						{
							name: "E-commerce Sites",
							description: "Online store projects",
							icon: <ShoppingCart className="w-4 h-4" />,
						},
						{
							name: "Mobile Apps",
							description: "iOS and Android apps",
							icon: <Smartphone className="w-4 h-4" />,
						},
					],
				},
			],
			"Case Studies": [
				{
					title: "Success Stories",
					items: [
						{
							name: "Client Success",
							description: "Success stories",
							icon: <BarChart className="w-4 h-4" />,
						},
						{
							name: "Testimonials",
							description: "Client feedback",
							icon: <Mail className="w-4 h-4" />,
						},
					],
				},
			],
		},
	},
};

export function Header() {
	const [activeMenu, setActiveMenu] = useState<string | null>(null);
	const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleMenuEnter = (menuItem: string) => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		setActiveMenu(menuItem);
		// Set default active submenu to first item
		const menuData = megaMenuData[menuItem as keyof typeof megaMenuData];
		if (menuData?.rightSidebar?.[0]) {
			setActiveSubMenu(menuData.rightSidebar[0].name);
		}
	};

	const handleMenuLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setActiveMenu(null);
			setActiveSubMenu(null);
		}, 300); // 300ms delay before hiding
	};

	const handleMegaMenuEnter = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	};

	const handleSubMenuHover = (subMenuItem: string) => {
		setActiveSubMenu(subMenuItem);
	};

	const toggleMobileMenu = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<header className="w-full bg-white border-b border-gray-200 relative">
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="flex items-center h-16">
					{/* Logo */}
					<div className="flex-1 items-center gap-6">
						{/* Logo */}
						<div className="ml-3 flex-none">
							<BrandLogo />
						</div>
					</div>

					{/* Navigation Menu (desktop) */}
					<nav className="hidden md:flex  space-x-8">
						{Object.keys(megaMenuData).map((menuItem) => (
							<div
								key={menuItem}
								className="relative"
								onMouseEnter={() => handleMenuEnter(menuItem)}
								onMouseLeave={handleMenuLeave}
							>
								<a
									href="#"
									className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
								>
									{menuItem}
								</a>
							</div>
						))}
					</nav>

					{/* Right actions */}
					<div className="flex items-center gap-2 pl-10">
						<button
							type="button"
							className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
							aria-label="Open menu"
							aria-expanded={mobileOpen}
							onClick={() => setMobileOpen((v) => !v)}
						>
							{mobileOpen ? (
								<X className="h-5 w-5" />
							) : (
								<Menu className="h-5 w-5" />
							)}
						</button>

						{/* Get Started Button (desktop only) */}
                     <div className="flex flex-col gap-3">
                       <ContactUsDialog>
                         <Button className={cn('mr-5 rounded-full')} size="small">
                           <span>{'Get in Touch'}</span>
                         </Button>
                       </ContactUsDialog>
                     </div>
					</div>
				</div>
			</div>

			{mobileOpen && (
				<div className="md:hidden absolute left-0 right-0 w-full bg-white border-t border-gray-200 shadow-xl z-50">
					<div className="max-w-7xl mx-auto px-4 py-4">
						<Accordion type="single" collapsible className="w-full">
							{Object.keys(megaMenuData).map((menuItem) => {
								const menu =
									megaMenuData[menuItem as keyof typeof megaMenuData];
								return (
									<AccordionItem key={menuItem} value={menuItem}>
										<AccordionTrigger className="text-base font-medium text-gray-900">
											{menuItem}
										</AccordionTrigger>
										<AccordionContent className="pb-4">
											{/* Right sidebar items become nested accordions */}
											<Accordion type="single" collapsible className="w-full">
												{menu.rightSidebar?.map((sub) => (
													<AccordionItem
														key={`${menuItem}-${sub.name}`}
														value={`${menuItem}-${sub.name}`}
													>
														<AccordionTrigger className="text-sm font-medium text-gray-800">
															<span className="inline-flex items-center gap-2">
																<span className="text-gray-400">
																	{sub.icon}
																</span>
																{sub.name}
															</span>
														</AccordionTrigger>
														<AccordionContent className="pt-2">
															{/* Render the same content, stacked for mobile */}
															<div className="space-y-6">
																{menu.content?.[sub.name]?.map(
																	(section, idx) => (
																		<div key={idx} className="space-y-3">
																			<h4 className="text-sm font-semibold text-gray-900">
																				{section.title}
																			</h4>
																			<div className="space-y-3">
																				{section.items.map((item, i) => (
																					<a
																						key={i}
																						href="#"
																						className="flex items-start gap-3 rounded-md p-2 hover:bg-gray-50"
																					>
																						<span className="text-gray-400">
																							{item.icon}
																						</span>
																						<span>
																							<span className="block text-sm font-medium text-gray-900">
																								{item.name}
																							</span>
																							<span className="block text-xs text-gray-500">
																								{item.description}
																							</span>
																						</span>
																					</a>
																				))}
																			</div>
																		</div>
																	),
																)}
															</div>
														</AccordionContent>
													</AccordionItem>
												))}
											</Accordion>
										</AccordionContent>
									</AccordionItem>
								);
							})}
						</Accordion>

						{/* Mobile primary action */}
						<div className="flex flex-col gap-3">
							<ContactUsDialog>
								<Button className={cn("mr-5 rounded-full")}>
									<span>{"Get in Touch"}</span>
								</Button>
							</ContactUsDialog>
						</div>
					</div>
				</div>
			)}

			{/* Desktop floating mega menu */}
			{activeMenu && (
				<div
					className="absolute inset-x-0 z-50 mt-3 pointer-events-none"
					style={{ top: "calc(100% + 12px)" }}
					onMouseEnter={handleMegaMenuEnter}
					onMouseLeave={handleMenuLeave}
				>
					<div className="mx-auto max-w-6xl px-4 sm:px-6 pointer-events-auto">
						<div className="rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden">
							<div className="px-6 sm:px-8 lg:px-10 py-8">
								<div className="flex">
									{/* Left Content Area */}
									<div className="flex-1 pr-8 min-w-0">
										{activeSubMenu &&
											megaMenuData[activeMenu as keyof typeof megaMenuData]
												?.content?.[activeSubMenu] && (
												<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
													{megaMenuData[
														activeMenu as keyof typeof megaMenuData
													].content[activeSubMenu].map(
														(section, sectionIndex) => (
															<div key={sectionIndex} className="space-y-4">
																<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
																	{section.title}
																</h3>
																<div className="space-y-3">
																	{section.items.map((item, itemIndex) => (
																		<a
																			key={itemIndex}
																			href="#"
																			className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
																		>
																			<div className="flex-shrink-0 mt-1 text-gray-400 group-hover:text-blue-600 transition-colors">
																				{item.icon}
																			</div>
																			<div className="min-w-0">
																				<p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
																					{item.name}
																				</p>
																				<p className="text-xs text-gray-500 mt-1 line-clamp-2">
																					{item.description}
																				</p>
																			</div>
																		</a>
																	))}
																</div>
															</div>
														),
													)}
												</div>
											)}
									</div>

									{/* Right Sidebar */}
									<div className="w-64 border-l border-gray-200 pl-8 shrink-0">
										<div className="space-y-2">
											{megaMenuData[
												activeMenu as keyof typeof megaMenuData
											]?.rightSidebar?.map((item, index) => (
												<a
													key={index}
													href="#"
													className={`flex items-center space-x-3 p-3 rounded-lg transition-colors group ${
														activeSubMenu === item.name
															? "bg-blue-50 text-blue-600 border border-blue-200"
															: "hover:bg-gray-50 text-gray-700"
													}`}
													onMouseEnter={() => handleSubMenuHover(item.name)}
												>
													<div
														className={`flex-shrink-0 ${
															activeSubMenu === item.name
																? "text-blue-600"
																: "text-gray-400 group-hover:text-blue-600"
														} transition-colors`}
													>
														{item.icon}
													</div>
													<span className="text-sm font-medium">
														{item.name}
													</span>
												</a>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
