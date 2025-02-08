export interface Industry {
 title: string;
 icon: string;
 description?: string;
}

export const industries: Industry[] = [
 {
  title: "Healthcare",
  icon: "/assets/images/industry-we-serve/1.png",
 },
 {
  title: "E-commerce",
  icon: "/assets/images/industry-we-serve/2.png",
 },
 {
  title: "Gaming",
  icon: "/assets/images/industry-we-serve/3.png",
 },
 {
  title: "Food & Restaurant",
  icon: "/assets/images/industry-we-serve/4.png",
 },
 {
  title: "Manufacturing",
  icon: "/assets/images/industry-we-serve/5.png",
 },
 {
  title: "Education",
  icon: "/assets/images/industry-we-serve/6.png",
 },
 {
  title: "Fintech & Banking",
  icon: "/assets/images/industry-we-serve/7.png",
 },
 {
  title: "Logistics & SupplyChain",
  icon: "/assets/images/industry-we-serve/8.png",
 },
 {
  title: "Travel & Hospitality",
  icon: "/assets/images/industry-we-serve/9.png",
 },
 {
  title: "Media & Entertainment",
  icon: "/assets/images/industry-we-serve/10.png",
 },
];

export const industriesSectionData = {
 highlightTitle: "Industries",
 title: " We Serve",
 description: "Empowering businesses across various sectors with innovative solutions",
 detailedDescription: null || '',
 data: industries,
};
