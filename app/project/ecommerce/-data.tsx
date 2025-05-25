import type { ProjectDetailsProps } from '@/app/project/food-delivery/-data';
import type { TabContent } from '@/src/components/tab-section';
import type { AboutSectionProps } from '@/src/sections/about/v1';
import {
 BrainCircuit,
 ChartNoAxesCombined,
 Cpu,
 MonitorCog,
 ShieldHalf,
 SquareStack,
 UsersRound
} from 'lucide-react';
import Image from 'next/image';

export const projectDetails: ProjectDetailsProps = {
 sectionHeading: {
  subtitle: 'Ecommerce App Development',
  title: 'Ecommerce App Development Services We Offer',
  description:
   "At Teachers, we specialize in providing comprehensive ecommerce app development services tailored to meet your business needs. Whether you're looking to build a custom ecommerce website, a B2C or B2B app, or a multi-vendor marketplace, our team of experts is here to help. We leverage the latest technologies and platforms like Shopify and WooCommerce to ensure your ecommerce solution is robust, scalable, and user-friendly.",
 },
 keyPoints: [],
 image: {
  src: '/assets/images/about/whychoose.webp',
  alt: 'ecommerce app development',
 },
};

export const solutions = {
 title: 'Ecommerce App Development',
 highlightedTitle: 'Services We Offer',
 description:
  'At TechAres, we specialize in providing comprehensive ecommerce app development services tailored to meet your business needs.',
 solutionCard: [
  {
   title: 'Customer E-commerce Website and App Development',
   description:
    'We offer a wide range of ecommerce website and app development services exclusively meant for your business. We work closely to create a solution that aligns with your brand and business goals, ranging from design to development. Our customer solutions are designed to provide a seamless shopping experience for customers, driving engagement and sales.',
   icon: <Image src="/assets/images/ecommerce/p2.png" alt="Customer E-commerce Website and App Development" width={80} height={80} className="h-24 w-24 md:h-28 md:w-28" />,
  },
  {
   title: 'B2C E-commerce Apps',
   description:
    'Our B2C ecommerce apps are designed to meet the requirements of businesses that sell directly to consumers. We emphasise creating intuitive, user-friendly interfaces that make it easy for customers to browse, shop and make purchases. The features, such as personalized recommendations, secure payment gateways, and real-time order tracking, are present in our B2C apps that can enhance customer experience. It gives your sales a big boost.',
   icon: <Image src="/assets/images/ecommerce/p4.png" alt="B2C E-commerce Apps" width={80} height={80} className="h-24 w-24 md:h-28 md:w-28" />,
  },
  {
   title: 'B2B Ecommerce Apps',
   description:
    'Businesses operating in the B2B environment are provided with B2B ecommerce app development services. Bulk orders and customised pricing are complex transactions handled by our specially designed B2B apps. Inventory management, order history and account management are advanced features that are combined to streamline the buying process for your business clients.',
   icon: <Image src="/assets/images/ecommerce/p0.png" alt="B2B Ecommerce Apps" width={80} height={80} className="h-24 w-24 md:h-28 md:w-28" />,
  },
  {
   title: 'C2C Marketplace Apps',
   description:
    'C2C (Consumer-to-Consumer) marketplace apps are becoming increasingly popular nowadays. We have the expertise to build a platform which connects buyers and sellers. Features like user profiles, product listings, secure payment options and review systems are present in C2C marketplace apps to ensure a smooth and trustworthy transaction process.',
   icon: <Image src="/assets/images/ecommerce/p1.png" alt="C2C Marketplace Apps" width={80} height={80} className="h-24 w-24 md:h-28 md:w-28" />,
  },
  {
   title: 'Multi-Vendor Process',
   description:
    "We have got all the resources if you are looking to create a multi-vendor ecommerce platform. There is provision for multiple sellers by multi-vendor ecommerce solutions to list their products on a single platform, providing innumerable options for buyers. It makes it easier for vendors to manage their stores and for customers to find what they’re looking for by the number of features, which include vendor dashboards, commission management, and product categorisation.",
   icon: <Image src="/assets/images/ecommerce/p6.png" alt="Multi-Vendor Process" width={80} height={80} className="h-24 w-24 md:h-28 md:w-28" />,
  },
  {
   title: 'Social Commerce Apps',
   description:
    'The future of online shopping is social commerce, and we can help you embrace this growing trend. Popular social media platforms integrate with our social commerce apps, allowing users to discover, share, and purchase products without leaving their favourite apps. Our social commerce apps are designed to drive engagement and sales, which is possible through special features like in-app purchases, social sharing, and influencer collaborations.',
   icon: <Image src="/assets/images/ecommerce/p5.png" alt="Social Commerce Apps" width={80} height={80} className="h-24 w-24 md:h-28 md:w-28" />,
  },
 ],
};

export const servicesData = {
 'Website Features': {
  title: 'Website Features',
  description: 'Essential features for your ecommerce website',
  icon: '/assets/images/service/website.png',
  mainDescription:
   'Our ecommerce websites are built with powerful features to enhance user experience and drive sales.',
  cards: [
   {
    title: 'Responsive Design',
    description:
     'Fully responsive layouts that adapt seamlessly to all devices and screen sizes.',
   },
   {
    title: 'Advanced Search',
    description:
     'Powerful search and filtering options to help customers find products quickly.',
   },
   {
    title: 'Secure Payments',
    description:
     'Integration with multiple secure payment gateways for safe transactions.',
   },
   {
    title: 'Reviews & Ratings',
    description:
     'Built-in system for product reviews and ratings to build trust.',
   },
   {
    title: 'SEO Optimization',
    description:
     'SEO-friendly structure to improve visibility in search results.',
   },
  ],
 },
 'User Features': {
  title: 'User Features',
  description: 'Enhanced features for your customers',
  icon: '/assets/images/service/user.png',
  mainDescription:
   'Provide your customers with a seamless shopping experience through our user-centric features.',
  cards: [
   {
    title: 'Easy Registration',
    description:
     'Simple and quick registration process with multiple login options.',
   },
   {
    title: 'Wishlist Management',
    description: 'Allow users to save and manage their favorite products.',
   },
   {
    title: 'Order Tracking',
    description: 'Real-time order tracking and detailed order history.',
   },
   {
    title: 'Personalization',
    description: 'Smart product recommendations based on user preferences.',
   },
   {
    title: 'Payment Options',
    description: 'Multiple payment methods for convenient checkout.',
   },
  ],
 },
 'Vendor Features': {
  title: 'Vendor Features',
  description: 'Powerful tools for vendors',
  icon: '/assets/images/service/vendor.png',
  mainDescription:
   'Empower your vendors with robust tools to manage their products and sales effectively.',
  cards: [
   {
    title: 'Vendor Dashboard',
    description:
     'Comprehensive dashboard for managing products and orders.',
   },
   {
    title: 'Commission Tracking',
    description:
     'Transparent system for tracking earnings and commissions.',
   },
   {
    title: 'Inventory Control',
    description: 'Advanced inventory management with alerts and tracking.',
   },
   {
    title: 'Analytics',
    description: 'Detailed analytics and reporting for business insights.',
   },
   {
    title: 'Order Management',
    description: 'Efficient system for processing and managing orders.',
   },
  ],
 },
 'Admin Features': {
  title: 'Admin Features',
  description: 'Administrative tools for managing the platform',
  icon: '/assets/images/service/admin.png',
  mainDescription:
   'Provide administrators with essential tools to manage the platform effectively.',
  cards: [
   {
    title: 'Centralized control panel',
    description: 'Control and manage user accounts and permissions.',
   },
   {
    title: 'User and vendor management',
    description: 'Add, edit, and delete products from the platform.',
   },
   {
    title: 'Sales and revenue tracking',
    description: 'Process and manage orders efficiently.',
   },
   {
    title: 'Product and category management',
    description:
     'Detailed analytics and reporting for platform performance.',
   },
   {
    title: 'Customizable admin settings',
    description: 'Customize platform settings and preferences.',
   },
  ],
 },
};

export const latestUpdate = {
 title: 'Advanced Mobile E-Commerce Features',
 description: '10X Your Business Growth with Our Advanced Features',
 services: [
  {
   title: 'AI-Powered Recommendations',
   description:
    'Smart product suggestions based on user behavior and preferences.',
   icon: <BrainCircuit />,
  },
  {
   title: 'Real-time Analytics',
   description:
    'Comprehensive analytics dashboard for tracking sales and performance.',
   icon: <ChartNoAxesCombined />,
  },
  {
   title: 'Multi-platform Integration',
   description:
    'Seamless integration with various platforms and marketplaces.',
   icon: <SquareStack />,
  },
 ],
};

export const whyChooseSectionData: AboutSectionProps = {
 sectionHeading: {
  title: 'Why Choose Us for Ecommerce App Development?',
  // highlightTitle: 'Ecommerce App Development?',
  description:
   'Choosing us for your ecommerce app development ensures a seamless and successful experience. With a team of skilled developers, designers, and strategists, we deliver custom solutions tailored to your business needs. We leverage cutting-edge technologies and industry best practices to build scalable, user-friendly, and secure apps. Our client-centric approach guarantees transparency, timely delivery, and ongoing support. Partner with us to transform your ecommerce vision into a high-performing reality.',
 },
 keyPoints: [
  {
   title: 'Experienced Team',
   description:
    'Our team has years of experience in ecommerce app development.',
   icon: <ShieldHalf />,
  },
  {
   title: 'Custom Solutions',
   description:
    'We tailor our services to meet your specific business needs.',
   icon: <MonitorCog />,
  },
  {
   title: 'Cutting-Edge Technology',
   description:
    'We use the latest technologies to build robust and scalable apps.',
   icon: <Cpu />,
  },
  {
   title: 'Client-Centric Approach',
   description:
    'We prioritize your satisfaction and work closely with you throughout the process.',
   icon: <UsersRound />,
  },
 ],
 button: {
  href: '/contact-us',
  label: 'Talk to Experts',
 },
 images: {
  image1: {
   src: '/assets/images/about/about-1.webp',
   alt: 'about one',
   width: 195,
   height: 132,
  },
  image2: {
   src: '/assets/images/about/about-2.webp',
   alt: 'about two',
   width: 312,
   height: 304,
  },
  image3: {
   src: '/assets/images/about/about-3.webp',
   alt: 'about three',
   width: 250,
   height: 265,
  },
  image4: {
   src: '/assets/images/about/about-4.webp',
   alt: 'about four',
   width: 250,
   height: 265,
  },
 },
 isCard: false,
};

export const faqSectionData = {
 sectionHeading: {
  subtitle: 'FAQ',
  title: 'Frequently Asked Questions',
 },
 faqItems: [
  {
   question: 'How long does it take to develop an ecommerce app?',
   answer:
    'A: The timeline depends on the complexity of the app, but we typically deliver within 3-6 months.',
  },
  {
   question: 'Can you integrate my existing website with a mobile app?',
   answer:
    'Yes, we can seamlessly integrate your existing website with a mobile app to provide a unified shopping experience.',
  },
  {
   question: 'Do you offer post-launch support?',
   answer:
    'Yes, we can seamlessly integrate your existing website with a mobile app to provide a unified shopping experience.',
  },
 ],
};

export const tabs = [
 { id: 'website', label: 'Website Features' },
 { id: 'user', label: 'User Features' },
 { id: 'vendor', label: 'Vendor Features' },
 { id: 'admin', label: 'Admin Features' },
] as const;

// Content for each tab
export const tabContent: Record<(typeof tabs)[number]['id'], TabContent> = {
 website: {
  title: 'Website Features',
  features: [
   {
    icon: (
     <Image
      src="/assets/images/taxi-app/p4.png"
      alt="Responsive design for all devices"
      width={100}
      height={100}
      className="w-full"
     />
    ),
    title: 'Responsive design for all devices',
    description:
     'Website looks and functions well on any device with the ability to adapt to its layout and content based on the user’s screen size, orientation and capabilities.',
   },
   {
    icon: (
     <Image
      src="/assets/images/taxi-app/p4.png"
      alt="Advanced search and filtering options"
      width={100}
      height={100}
      className="w-full"
     />
    ),
    title: 'Advanced search and filtering options',
    description:
     'Search queries are refined and results are trimmed based on specific criteria.',
   },
   {
    icon: (
     <Image
      src="/assets/images/taxi-app/p4.png"
      alt="Secure payment gateways"
      width={100}
      height={100}
      className="w-full"
     />
    ),
    title: 'Secure payment gateways',
    description:
     'Online transactions are facilitated using this technology by securely transmitting payment data between a merchant’s website and a bank or payment processor.',
   },
   {
    icon: (
     <Image
      src="/assets/images/taxi-app/p4.png"
      alt="Product reviews and ratings"
      width={100}
      height={100}
      className="w-full"
     />
    ),
    title: 'Product review and ratings',
    description:
     'Customer feedback is provided in the form of product reviews and ratings that provide insights into the quality, performance, and overall value of a product.',
   },
   {
    icon: (
     <Image
      src="/assets/images/taxi-app/p4.png"
      alt="SEO-friendly structure"
      width={100}
      height={100}
      className="w-full"
     />
    ),
    title: 'SEO-friendly structure',
    description:
     'The SEO-friendly structure of the website prioritizes clear organisation, fast loading times, and a user-friendly experience which improves search engine rankings.',
   },
  ],
  image: '/assets/images/ecommerce/slide-1.png',
 },
 user: {
  title: 'User Features',
  features: [
   {
    icon: (
     <Image
      src="/assets/images/taxi-app/p4.png"
      alt="Easy registration and login"
      width={100}
      height={100}
      className="w-full"
     />
    ),
    title: 'Easy registration and login',
    description:
     'Users can create a user account for themselves so that they can easily register and login to the website.',
   },
   {
    icon: (
     <Image
      src="/assets/images/taxi-app/p4.png"
      alt="Wishlist and saved items"
      width={100}
      height={100}
      className="w-full"
     />
    ),
    title: 'Wishlist and saved items',
    description:
     'A special feature on the website that allows users to save products they are interested in for future purchase.',
   },
   {
    icon: (
     <Image
      src="/assets/images/taxi-app/p4.png"
      alt="Order history and tracking"
      width={100}
      height={100}
      className="w-full"
     />
    ),
    title: 'Order history and tracking',
    description:
     'A record of all the purchases made in the past is kept by the customer, and real-time information is provided based on the progress made.',
   },
   {
    icon: (
     <Image
      src="/assets/images/taxi-app/p4.png"
      alt="Personalized recommendations"
      width={100}
      height={100}
      className="w-full"
     />
    ),
    title: 'Personalized recommendations',
    description:
     'Tailored suggestions are provided for users based on their individual preferences, behaviours and interactions.',
   },
   {
    icon: (
     <Image
      src="/assets/images/taxi-app/p4.png"
      alt="Multiple payment options"
      width={100}
      height={100}
      className="w-full"
     />
    ),
    title: 'Multiple payment options',
    description:
     'It provides multiple payment options for customers to pay for products or services purchased online.',
   },
  ],
  image: '/assets/images/ecommerce/slide-1.png',
 },
 vendor: {
  title: 'Vendor Features',
  features: [
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="Vendor dashboard for managing products and orders"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'Vendor dashboard for managing products and orders',
    description:
     'It uses a centralized web-based interface called the vendor dashboard that allows vendors to manage their online store within a multi-vendor marketplace.',
   },
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="Commission and earnings tracking"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'Commission and earnings tracking',
    description:
     'The commission earned by individuals, especially salespeople or affiliates, is monitored and managed based on their sales and performance.',
   },
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="Inventory management"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'Inventory management',
    description:
     'The items are acquired, stored, tracked and shipped, ranging from raw materials to finished goods are carried by this process.',
   },
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="Sales analytics and reports"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'Sales analytics and reports',
    description:
     'Sales strategies are improved by using data and technology to understand sales performance, identify trends and make data-driven decisions, while reports in the tables, charts and graphs are generated to understand key metrics and identify areas for improvement.',
   },
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="Easy product upload and management"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'Easy product upload and management',
    description:
     'The information of the product included in an ecommerce platform or inventory system is accurately added, updated and organised.',
   },
  ],
  image: '/assets/images/ecommerce/slide-1.png',
 },
 admin: {
  title: 'Admin Features',
  features: [
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="Centralized control panel"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'Centralized control panel',
    description:
     'A single device or software acts in the form of a centralized control panel, acting as the central hub for monitoring and controlling multiple devices or processes.',
   },
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="User and vendor management"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'User and vendor management',
    description:
     'It emphasises controlling and managing access to internal systems and resources, and focusing on managing relationships with external suppliers of goods and services.',
   },
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="Sales and revenue tracking"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'Sales and revenue tracking',
    description:
     'The sales data is monitored and analysed to understand performance, identify trends, and improve efficiency, while income generated from various sources is measured and understood.',
   },
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="Product and category management"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'Product and category management',
    description:
     'A group of related products act as a strategic business unit in optimising the entire category’s performance through product selection, pricing, promotion, and placement, while individual products are developed and managed within the company’s portfolio.',
   },
   {
    icon: (
     <Image
      src="/assets/images/food-delivery/fock.png"
      alt="Customizable admin settings"
      width={100}
      height={100}
      className="w-full "
     />
    ),
    title: 'Customizable admin settings',
    description:
     'It allows administrators to tailor various aspects of an application or system to better fit their organisation’s needs and preferences.',
   },
  ],
  image: '/assets/images/ecommerce/slide-1.png',
 },
};

export const whyChooseUs: ProjectDetailsProps = {
 sectionHeading: {
  title: 'Why Choose Us for Ecommerce App Development?',
  description:
   'We ensure a seamless and successful experience on choosing an ecommerce app development like ours. We deliver custom solutions tailored to your business needs with the help of a team comprising skilled developers, designers, and strategists. Cutting-edge technologies and industry best practices are leveraged to build scalable, user-friendly, and secure apps. Our client-centric approach guarantees transparency, timely delivery, and ongoing support. Partner with us to transform your ecommerce vision into a high-performing reality.',
 },
 isButton: true,
 isCard: false,
 keyPoints: [
  {
   title: 'Experienced Team',
   icon: (
    <Image
     src="/assets/images/food-delivery/fock-outline.png"
     alt="Feature 1"
     width={20}
     height={20}
    />
   ),
   description:
    'Our team consists of a considerable number of members who are experienced in ecommerce app development.',
  },
  {
   title: 'Custom Solutions',
   icon: (
    <Image
     src="/assets/images/food-delivery/fock-outline.png"
     alt="Feature 1"
     width={20}
     height={20}
    />
   ),
   description:
    'We tailor your services by helping to fulfil the specific requirements of your business.',
  },
  {
   title: 'Cutting-Edge Technology',
   icon: (
    <Image
     src="/assets/images/food-delivery/fock-outline.png"
     alt="Feature 1"
     width={20}
     height={20}
    />
   ),
   description:
    'Cutting-edge technologies are used in building robust and scalable apps.',
  },
  {
   title: 'Client-Centric Approach',
   icon: (
    <Image
     src="/assets/images/food-delivery/fock-outline.png"
     alt="Feature 1"
     width={20}
     height={20}
    />
   ),
   description:
    'We prioritise your satisfaction and pledge to work closely with you throughout the process.',
  },
  {
   title: 'Affordable Pricing',
   icon: (
    <Image
     src="/assets/images/food-delivery/fock-outline.png"
     alt="Feature 1"
     width={20}
     height={20}
    />
   ),
   description:
    'We offer competitive pricing without compromising on quality.',
  },
 ],
 button: {
  label: 'TALK TO EXPERTS',
  href: '/contact',
 },
 image: {
  src: '/assets/images/ecommerce/hero-3.png',
  alt: 'about image five',
  width: 540,
  height: 578,
 },
};

export const workflowSteps = [
 {
  id: 1,
  title: 'Discovery & Planning',
  description:
   'We understand the goals, target audience, and specific requirements of your business. A project roadmap is created to prioritise features which define the scope, timeline, and budget. It is possible by going through detailed discussions and market research. A clear direction is laid out for your ecommerce app development.',
 },
 {
  id: 2,
  title: 'Design & Prototyping',
  description:
   'Our team of designers creates Wireframes and mockups that visualise the app’s layout and user flow. We stress the need for crafting an intuitive UI/UX design that aligns with your brand identity. Interactive prototypes are developed to give you a feel of the app’s functionality before it transitions to development.',
 },
 {
  id: 3,
  title: 'Development',
  description:
   'Colourful designs are created by our developers with clean, efficient code using the latest technologies and frameworks. The front-end, back-end of the app, and using essential features like payment gateways, user authentication, and product management are integrated. A robust and scalable ecommerce solution is created by this phase.',
 },
 {
  id: 4,
  title: 'Testing & QA',
  description:
   'We rigorously test the app to identify and fix any bugs or performance issues. Our QA team conducts functional, usability, and security testing to ensure the app runs smoothly across all devices and platforms. A polished, error-free product is guaranteed.',
 },
 {
  id: 5,
  title: 'Launch & Support',
  description:
   'The app is deployed to different app stores after testing on all of the desired platforms. We provide ongoing support after lunch that includes updates, maintenance, and feature enhancements. It ensures that your app continues to perform at its best.',
 },
];

export const slides = [
 {
  id: 1,
  title:
   'Using Advanced Mobile E-Commerce App Development Features To 10X Your Business Growth',
  description:
   "In today’s competitive market, it’s essential to have a mobile ecommerce app. Our advanced mobile ecommerce app development features are designed to make you a cut above the rest from the competition and drive significant business growth. We incorporate the latest technologies to ensure your app delivers maximum value to your customers based on push notifications for personalised shopping.",
  image: '/assets/images/ecommerce/hero-2.png',
 },
 {
  id: 2,
  title: 'The Platforms We Use To Fuel Your E-Commerce App Development Success',
  description:
   'We work with the best platforms in the industry to ensure that your ecommerce app resides on a solid foundation. The expertise required to create a solution meets your specific requirements. Our team is skilled in integrating third-party tools and APIs to enhance the functionality of your app, irrespective of whether you prefer Shopify for its ease of use or WooCommerce for its flexibility.',
  image: '/assets/images/ecommerce/hero-2.png',
 },
];
