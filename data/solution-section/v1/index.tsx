export interface Solution {
 title: string;
 description: string;
 category: "on-demand" | "erp" | "analytics";
 icon: string;
 href?: string;
}


export const solutions: Solution[] = [
 {
  title: "Food Delivery Platforms",
  description:
   "Enable restaurants and food businesses to efficiently manage orders, track deliveries, and enhance customer satisfaction.",
  category: "on-demand",
  icon: '/assets/images/our-solutions/1.png',
  href: '/project/taxi-booking'
 },
 {
  title: "Ride-Sharing Applications",
  description:
   "Develop apps for transportation services with real-time tracking, automated bookings, and secure payment integrations.",
  category: "on-demand",
  icon: '/assets/images/our-solutions/2.png'
 },
 {
  title: "Healthcare Management Apps",
  description:
   "Provide patients and healthcare professionals with tools for appointment scheduling, record management, and telemedicine services.",
  category: "on-demand",
  icon: '/assets/images/our-solutions/3.png'

 },
 {
  title: "Inventory Management",
  description:
   "Streamline inventory tracking, order processing, and supply chain management with integrated ERP solutions.",
  category: "erp",
  icon: '/assets/images/our-solutions/4.png'

 },
 {
  title: "Financial Systems",
  description: "Manage accounting, payroll, and financial reporting with comprehensive ERP modules.",
  category: "erp",
  icon: '/assets/images/our-solutions/5.png'

 },
 {
  title: "HR Management",
  description: "Handle employee data, attendance, and performance management with specialized ERP tools.",
  category: "erp",
  icon: '/assets/images/our-solutions/6.png'

 },
 {
  title: "Predictive Analytics",
  description: "Leverage machine learning for forecasting trends and making data-driven decisions.",
  category: "analytics",
  icon: '/assets/images/our-solutions/7.png'

 },
 {
  title: "Business Intelligence",
  description: "Transform raw data into actionable insights with powerful visualization tools.",
  category: "analytics",
  icon: '/assets/images/our-solutions/8.png'

 },
 {
  title: "Performance Monitoring",
  description: "Track KPIs and metrics in real-time to optimize business operations.",
  category: "analytics",
  icon: '/assets/images/our-solutions/9.png'

 },
]

