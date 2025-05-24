import type { ProjectDetailsProps } from '@/app/project/food-delivery/-data';
import type { AboutSectionProps } from '@/src/sections/about/v1';
import {
  BrainCircuit,
  ChartNoAxesCombined,
  Cpu,
  Handshake,
  MonitorCog,
  Settings,
  ShieldHalf,
  ShoppingBag,
  SquareStack,
  Store,
  Users,
  UsersRound,
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
      title: 'Custom Ecommerce Website and App Development',
      description:
        'We understand that every business is unique, which is why we offer custom ecommerce website and app development services. From design to deployment, we work closely with you to create a solution that aligns with your brand and business goals. Our custom solutions are designed to provide a seamless shopping experience for your customers, driving engagement and sales.',
      icon: <Settings />,
    },
    {
      title: 'B2C Ecommerce Apps',
      description:
        'Our B2C ecommerce apps are designed to cater to the needs of businesses that sell directly to consumers. We focus on creating intuitive, user-friendly interfaces that make it easy for customers to browse, shop, and make purchases. With features like personalized recommendations, secure payment gateways, and real-time order tracking, our B2C apps are built to enhance the customer experience and boost your sales.',
      icon: <ShoppingBag />,
    },
    {
      title: 'B2B Ecommerce Apps',
      description:
        'For businesses that operate in the B2B space, we offer specialized B2B ecommerce app development services. Our B2B apps are designed to handle complex transactions, bulk orders, and customized pricing. We also integrate advanced features like inventory management, order history, and account management to streamline the buying process for your business clients.',
      icon: <ShoppingBag />,
    },
    {
      title: 'C2C Marketplace Apps',
      description:
        'C2C (Consumer-to-Consumer) marketplace apps are becoming increasingly popular, and we have the expertise to build a platform that connects buyers and sellers seamlessly. Our C2C marketplace apps come with features like user profiles, product listings, secure payment options, and review systems to ensure a smooth and trustworthy transaction process.',
      icon: <Store />,
    },
    {
      title: 'Multi-Vendor Ecommerce',
      description:
        "If you're looking to create a multi-vendor ecommerce platform, we’ve got you covered. Our multi-vendor ecommerce solutions allow multiple sellers to list their products on a single platform, providing a wide range of options for buyers. We include features like vendor dashboards, commission management, and product categorization to make it easy for vendors to manage their stores and for customers to find what they’re looking for.",
      icon: <Users />,
    },
    {
      title: 'Social Commerce Apps',
      description:
        'Social commerce is the future of online shopping, and we can help you tap into this growing trend. Our social commerce apps integrate seamlessly with popular social media platforms, allowing users to discover, share, and purchase products without leaving their favorite apps. With features like in-app purchases, social sharing, and influencer collaborations, our social commerce apps are designed to drive engagement and sales.',
      icon: <Handshake />,
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
  { id: 'driver', label: 'Driver Features' },
  { id: 'user', label: 'User Features' },
  { id: 'dispatcher', label: 'Dispatcher Dashboard' },
  { id: 'admin', label: 'Admin Panel' },
  { id: 'corporate', label: 'Corporate Console' },
] as const;

// Content for each tab
export const tabContent: Record<(typeof tabs)[number]['id'], TabContent> = {
  driver: {
    title: 'Driver Features',
    features: [
      {
        icon: (
          <Image
            src="/assets/images/taxi-app/p4.png"
            alt="Trip Requests & Navigation"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Trip Requests & Navigation',
        description:
          'Trip requests refer to riders who use an app to request a ride and navigation guides the driver to the rider’s pickup location and destination.',
      },
      {
        icon: (
          <Image
            src="/assets/images/taxi-app/p4.png"
            alt="Earnings Tracking"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Earnings Tracking',
        description:
          'Earnings Tracking is a safe and secure way of viewing someone’s AdSense and AdMob earnings. Google Sign is used which does not save a person’s password or any personal information to anyone’s iPhone.',
      },
      {
        icon: (
          <Image
            src="/assets/images/taxi-app/p4.png"
            alt="Ratings & Reviews"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Ratings & Reviews',
        description:
          'Ratings and reviews are different ways of giving customer feedback where people express their opinions about a product, service or business.',
      },
      {
        icon: (
          <Image
            src="/assets/images/taxi-app/p4.png"
            alt="Driver Profile Management"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Driver Profile Management',
        description:
          ' Drivers can easily manage their profiles, including uploading documents (license, ID, vehicle registration), updating availability, and setting preferences for ride types.',
      },
      {
        icon: (
          <Image
            src="/assets/images/taxi-app/p4.png"
            alt="In-App Chat & Call"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'In-App Chat & Call',
        description:
          'Seamless communication with riders through built-in chat and call features, helping coordinate pickups and resolve issues quickly without leaving the app.',
      },
      {
        icon: (
          <Image
            src="/assets/images/taxi-app/p4.png"
            alt="Trip History & Reports"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Trip History & Reports',
        description:
          'A detailed log of completed trips, including routes, earnings, and trip duration. Useful for tracking performance and simplifying record-keeping for tax or personal analysis.',
      },
    ],
    image: '/assets/images/taxi-app/user-feature.png',
  },
  user: {
    title: 'User Features',
    features: [
      {
        icon: (
          <Image
            src="/assets/images/taxi-app/p4.png"
            alt="Ride Booking & Tracking"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Ride Booking & Real-Time Tracking',
        description:
          'Ride booking allows a request or schedule a ride with a driver using an app or platform while real-time tracking allows passengers to see the driver’s location and progress on a map in real-time.',
      },
      {
        icon: (
          <Image
            src="/assets/images/taxi-app/p4.png"
            alt="Secure Payment Options"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Secure Payment Options',
        description:
          'The process of utilizing options like encryption, tokenization, and multi-factor authentication are used to protect sensitive financial information during online transactions.',
      },
      {
        icon: (
          <Image
            src="/assets/images/taxi-app/p4.png"
            alt="Ride History & Reviews"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Ride History & Reviews',
        description:
          'Ride history helps keep a record of past trips that includes details like date, time, pickup/drop-off locations and fare while ratings and comments are used as reviews by riders about their experiences with drivers.',
      },
      {
        icon: (
          <Image
            src="/assets/images/taxi-app/p4.png"
            alt="Fare Estimates & Promo Codes"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Fare Estimates & Promo Codes',
        description:
          'Users can view fare estimates before booking a ride, helping them make informed decisions. Promo codes and discounts can be applied during checkout for savings and promotions.',
      },
      {
        icon: (
          <Image
            src="/assets/images/taxi-app/p4.png"
            alt="Multiple Ride Options"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Multiple Ride Options',
        description:
          'Passengers can choose from various ride types based on their preferences—standard, premium, shared, or XL—depending on budget, comfort, or group size.',
      },
      {
        icon: (
          <Image
            src="/assets/images/taxi-app/p4.png"
            alt="In-App Support & Help Center"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'In-App Support & Help Center',
        description:
          'A built-in support system allows users to report issues, ask questions, or request help through chat, FAQs, or ticket-based customer service—all within the app.',
      },
    ],
    image: '/assets/images/taxi-app/user-feature.png',
  },
  dispatcher: {
    title: 'Dispatcher Dashboard',
    features: [
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Efficient ride allocation"
            width={100}
            height={100}
            className="w-full "
          />
        ),
        title: 'Efficient ride allocation',
        description:
          'Efficient ride allocation in ride-hailing apps allows for optimizing the matching of drivers and riders to minimize wait times, maximize driver utilization, and ensure a smooth user experience.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Real-time fleet tracking"
            width={100}
            height={100}
            className="w-full "
          />
        ),
        title: 'Real-time fleet tracking',
        description:
          'Real-time fleet tracking with the help of GPS and telematics is used in continuously monitoring the location, status and performance of vehicles.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Performance Analytics"
            width={100}
            height={100}
            className="w-full "
          />
        ),
        title: 'Performance Analytics',
        description:
          'Performance Analytics involves collecting, analyzing, and interpreting data to assess and improve the performance of individuals, teams, departments, or organizations ultimately resulting in better decision-making and strategic outcomes.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Driver & Vehicle Management"
            width={100}
            height={100}
            className="w-full "
          />
        ),
        title: 'Driver & Vehicle Management',
        description:
          'Allows dispatchers to manage driver profiles, vehicle details, availability, and compliance documents in one centralized platform, ensuring fleet readiness and operational efficiency.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Trip Scheduling & Dispatch History"
            width={100}
            height={100}
            className="w-full "
          />
        ),
        title: 'Trip Scheduling & Dispatch History',
        description:
          ' Enables advanced ride scheduling for future dates and provides access to a complete history of all dispatched trips, helping monitor patterns and address service issues.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Alerts & Notifications"
            width={100}
            height={100}
            className="w-full "
          />
        ),
        title: 'Alerts & Notifications',
        description:
          'Real-time alerts for delays, route deviations, or emergencies help dispatchers take immediate action, enhancing safety and service reliability.',
      },
    ],
    image: '/assets/images/taxi-app/user-feature.png',
  },
  admin: {
    title: 'Admin Panel',
    features: [
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Business insights & reports"
            width={100}
            height={100}
            className="w-full "
          />
        ),
        title: 'Business insights & reports',
        description:
          'Business insights involve the actionable and valuable information that is derived from analyzing data while reports are presented in an organized format for decision-making.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Fleet & fare management"
            width={100}
            height={100}
            className="w-full "
          />
        ),
        title: 'Fleet & fare management',
        description:
          'Fleet management involves overseeing and optimizing a fleet of vehicles which encompasses tasks like vehicle maintenance, driver management, fuel efficiency and compliance while the pricing and collection of transportation fares are done via fare management.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="User & driver controls"
            width={100}
            height={100}
            className="w-full "
          />
        ),
        title: 'User & driver controls',
        description:
          'User controls allow users to customize or adjust the behaviour of a device or application while driver controls allow software drivers to enable communication between the operating system and hardware devices.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Promotions & Discounts Management"
            width={100}
            height={100}
            className="w-full "
          />
        ),
        title: 'Promotions & Discounts Management',
        description:
          'Admins can create, manage, and analyze promotional campaigns and discount codes to boost user engagement, attract new riders, and reward loyal customers.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Access & Role Management"
            width={100}
            height={100}
            className="w-full "
          />
        ),
        title: 'Access & Role Management',
        description:
          'Define roles and permissions for different types of users (dispatchers, support agents, managers) to ensure secure and streamlined access to specific functionalities.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Dispute Resolution & Support Tools"
            width={100}
            height={100}
            className="w-full "
          />
        ),
        title: 'Dispute Resolution & Support Tools',
        description:
          'A dedicated interface to manage complaints, trip disputes, and refund requests with access to trip details, communication logs, and automated resolution workflows.',
      },
    ],
    image: '/assets/images/taxi-app/user-feature.png',
  },
  corporate: {
    title: 'Corporate Console',
    features: [
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Centralized ride management"
            width={100}
            height={100}
            className="w-full "
          />
        ),
        title: 'Centralized ride management',
        description:
          'Centralized ride management coordination and managing rides are offered by ride-sharing services from a single or central location or platform to optimize efficiency and resource utilization.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Expense tracking"
            width={100}
            height={100}
            className="w-full "
          />
        ),
        title: 'Expense tracking',
        description:
          'Expense tracking is used meticulously to record all expenditures to gain a clear understanding of spending habits and budgets that enable people to manage their finances effectively.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Employee travel logs"
            width={100}
            height={100}
            className="w-full "
          />
        ),
        title: 'Employee travel logs',
        description:
          'Employee travel logs are used by companies to track employee travel expenses which include mileage, lodging, meals and other costs for reimbursements and tax purposes.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Automated Invoicing & Billing"
            width={100}
            height={100}
            className="w-full "
          />
        ),
        title: 'Automated Invoicing & Billing',
        description:
          'Generates consolidated invoices for all employee rides, automates billing cycles, and integrates with corporate accounting systems to streamline financial operations.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="User Access Controls & Role Assignment"
            width={100}
            height={100}
            className="w-full "
          />
        ),
        title: 'User Access Controls & Role Assignment',
        description:
          'Allows corporate admins to assign roles (e.g., manager, employee) with customized access permissions, ensuring secure and hierarchical usage of the platform.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Policy-Based Travel Restrictions"
            width={100}
            height={100}
            className="w-full "
          />
        ),
        title: 'Policy-Based Travel Restrictions',
        description:
          'Companies can set travel policies—such as ride time limits, vehicle types, or budget caps—to ensure compliance with corporate travel guidelines and control costs.',
      },
    ],
    image: '/assets/images/taxi-app/user-feature.png',
  },
};

export const whyChooseUs: ProjectDetailsProps = {
  sectionHeading: {
    title: 'Why Choose TechAres ?',
    description:
      'A genuine commitment is made by TechAres to deliver innovative and reliable solutions that inspire businesses to thrive in an ever-evolving digital world. Our expertise surrounds mobility solutions, flexible customization, and scalable architecture which are encouraged by round-the-clock support. TechAres is the perfect partner for your business for the following reasons',
  },
  isButton: true,
  isCard: false,
  keyPoints: [
    {
      title: 'Expertise in Mobility Solutions',
      icon: (
        <Image
          src="/assets/images/food-delivery/fock-outline.png"
          alt="Feature 1"
          width={20}
          height={20}
        />
      ),
      description:
        'We deliver innovative solutions designed to meet the dynamic needs of businesses for engagement and accessibility.',
    },
    {
      title: 'Custom & White-Label Options',
      icon: (
        <Image
          src="/assets/images/food-delivery/fock-outline.png"
          alt="Feature 1"
          width={20}
          height={20}
        />
      ),
      description:
        'TechAres provides flexible solutions that satisfy a brand’s identity and operational requirements',
    },
    {
      title: 'Scalable Architecture',
      icon: (
        <Image
          src="/assets/images/food-delivery/fock-outline.png"
          alt="Feature 1"
          width={20}
          height={20}
        />
      ),
      description:
        'Scalability is taken into consideration while building solutions ensuring they align with your business.',
    },
    {
      title: '24/7 Technical Support',
      icon: (
        <Image
          src="/assets/images/food-delivery/fock-outline.png"
          alt="Feature 1"
          width={20}
          height={20}
        />
      ),
      description:
        'We have a dedicated support team that is available every time ready to assist during challenges.',
    },
  ],
  button: {
    label: 'TALK TO EXPERTS',
    href: '/contact',
  },
  image: {
    src: '/assets/images/taxi-app/hero-3.png',
    alt: 'about image five',
    width: 540,
    height: 578,
  },
};

export const workflowSteps = [
  {
    id: 1,
    title: 'Requirement Analysis',
    description:
      'The project scope is defined by understanding the needs of your business, target audience, and key functionalities.',
  },
  {
    id: 2,
    title: 'UI/UX Design & Prototyping',
    description:
      'User-friendly interfaces for passengers, drivers, and administrators are created by our design team that ensure smooth navigation and engagement.',
  },
  {
    id: 3,
    title: 'App Development',
    description:
      'Developers with the help of coding and integrating essential features like ride booking, real-time tracking, and secure payments make clear designs.',
  },
  {
    id: 4,
    title: 'Testing & Quality Assurance',
    description:
      ' Rigorous testing is done to identify and fix bugs, optimize performance, and ensure seamless functionality across devices and platforms.',
  },
  {
    id: 5,
    title: 'Deployment & Support',
    description:
      'The app is tested and approved and is deployed on the app stores providing ongoing maintenance, updates, and technical support.',
  },
];

export const slides = [
  {
    id: 1,
    title:
      'Using Advanced Mobile E-Commerce App Development Features To 10X Your Business Growth',
    description:
      "In today's competitive market, having a mobile ecommerce app is no longer optional—it's essential. Our advanced mobile ecommerce app development features are designed to help you stand out from the competition and drive significant business growth. From push notifications to personalized shopping experiences, we incorporate the latest technologies to ensure your app delivers maximum value to your customers.",
    image: '/assets/images/taxi-app/hero-3.png',
  },
  {
    id: 2,
    title: 'Transform Your Business with Custom E-Commerce Solutions',
    description:
      'Discover how our tailored e-commerce platforms can revolutionize your online presence. We create scalable, secure, and user-friendly solutions that adapt to your business needs and help you reach new heights in digital commerce.',
    image: '/assets/images/taxi-app/hero-3.png',
  },
  {
    id: 3,
    title: 'Next-Generation Shopping Experience',
    description:
      'Experience the future of online shopping with our cutting-edge technology stack. From AI-powered recommendations to seamless payment integrations, we build platforms that delight customers and drive conversions.',
    image: '/assets/images/taxi-app/hero-3.png',
  },
];
