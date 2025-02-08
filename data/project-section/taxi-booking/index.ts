import { SectionHeadingWithoutStylingProps } from "@/src/components/section-heading/interface";
import { ImageProps } from "next/image";


export interface ProjectDetailsProps {
 sectionHeading: SectionHeadingWithoutStylingProps;
 // aboutUsPoints: string[];
 keyPoints: {
  icon?: React.ReactNode;
  title: string;
  description?: string;
 }[];
 image: Omit<ImageProps, 'width' | 'height'>;
 description?: string;
}
export const projectDetails: ProjectDetailsProps = {
 sectionHeading: {
  subtitle: 'Taxi App for All',
  title: 'Taxi App Development Company',
  description:
   "Our taxi app solutions cater to various needs, whether you're an individual rider, a fleet owner, or a corporate entity. We develop robust, feature-rich apps designed for seamless user experiences. At TechAres, we design taxi booking applications that cater to diverse user groups, ensuring a smooth, reliable, and feature-rich experience. Whether you're an individual commuter, a taxi fleet owner, or a corporate organization, our solutions are built to optimize efficiency, enhance user satisfaction, and streamline business operations.",
 },
 keyPoints: [

 ],
 image: {
  src: '/assets/images/about/about-5.png',
  alt: 'about image five',
 },
};
