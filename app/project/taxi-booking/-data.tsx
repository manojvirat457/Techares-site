import type { TabContent } from '@/src/components/tab-section';
import type { FAQSectionProps } from '@/src/sections/faq';
import type { ProjectDetailsProps } from '@/src/sections/project/v4';
import type { TeamSectionProps } from '@/src/sections/team/v2';
import Image from 'next/image';

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

export const faqSectionData: FAQSectionProps = {
  sectionHeading: {
    subtitle: 'Our faq',
    title: 'Frequently asked question',
  },
  faqItems: [
    {
      question: 'How long does it take to develop a taxi app?',
      answer: 'Typically, 4-6 months, depending on complexity.',
    },
    {
      question: 'Can the app be customized for specific needs',
      answer: 'Yes, we offer fully tailored solutions.',
    },
    {
      question: 'Do you provide post-launch support?',
      answer: 'Absolutely, we offer ongoing maintenance and updates.',
    },
    {
      question: 'What payment options can be integrated?',
      answer: 'Credit/debit cards, wallets, UPI, and more.',
    },
    {
      question: 'Can I integrate multiple cities into one app?',
      answer: 'Yes, we build multi-city & multi-country solutions.',
    },
  ],
};

export const uniqueFeature: TeamSectionProps = {
  sectionHeading: {
    subtitle: 'Unique Features',
    title: 'Enhancing the Ride-Hailing Experience',
  },
  description:
    'At TechAres, we integrate cutting-edge technology to provide a superior taxi app experience with unique features that set us apart. Our AI-based route optimization ensures drivers take the most efficient routes, reducing travel time and fuel costs. We support multi-payment options, including credit/debit cards, wallets, and digital payments, offering users a seamless and flexible checkout process. To enhance safety, our app includes SOS & emergency features, allowing passengers to send instant alerts to emergency contacts and authorities in case of distress. Additionally, our dynamic surge pricing system adjusts fares based on real-time demand, ensuring fair pricing for drivers while optimizing earnings during peak hours.',
};

export const projectDetails: ProjectDetailsProps = {
  sectionHeading: {
    subtitle: 'Solution We Offer',
    title: 'Taxi App for All',
    size: 'md',
  },
  isCard: false,
  isButton: false,
  button: {
    href: '/contact',
    label: 'Get in Touch',
  },
  keyPoints: [
    {
      title: 'Standard Taxi App',
      description:
        'A taxi booking app development company considers the standard taxi app a reliable platform for regular commuters. TechAres provides tailored taxi app solutions that meet the requirements of both individual commuters and businesses.',
      icon: (
        <Image
          src="/assets/images/taxi-app/p1.png"
          alt="Standard Taxi App"
          width={40}
          height={40}
        />
      ),
    },
    {
      title: 'Corporate Taxi Solutions',
      description:
        'Taxi app development provides streamlined transportation catering to the needs of the business. Our Corporate Taxi solutions offer a simplified approach for businesses to manage employee transportation. It provides features ranging from centralized ride management, and automated billing to integration with payroll systems.',
      icon: (
        <Image
          src="/assets/images/taxi-app/p2.png"
          alt="Corporate Taxi Solutions"
          width={40}
          height={40}
        />
      ),
    },
    {
      title: 'Startup Solutions',
      description:
        'TechAres’ Taxi Booking App Development supports emerging taxi service providers with scalable and cost-effective app solutions. Our Startup Taxi Solutions are designed to help new ventures launch quickly, manage operations efficiently, and grow sustainably with features like driver-partner onboarding, real-time tracking, and revenue analytics.',
      icon: (
        <Image
          src="/assets/images/taxi-app/p3.png"
          alt="Startup Solutions"
          width={40}
          height={40}
        />
      ),
    },
  ],
  image: {
    src: '/assets/images/taxi-app/hero-2.png',
    alt: 'about image five',
    width: 540,
    height: 578,
  },
};

export const uniqueFeatures = [
  {
    id: 1,
    title: ' AI-based route optimization',
    description:
      'Taxi App Development Company provides cutting-edge technology in the form of AI-based route optimization, which leverages artificial intelligence to determine the most efficient path for effective transportation and delivery service.',
  },
  {
    id: 2,
    title: 'SOS and emergency features',
    description:
      'SOS and emergency features are designed with simplicity and speed in mind. The SOS button, when pressed, sends an immediate alert message to local emergency services and the safety response team, who are provided with the user’s location and relevant details by the app.',
  },
  {
    id: 3,
    title: 'Dynamic surge pricing system',
    description:
      'A pricing strategy called a dynamic surge pricing system is introduced where businesses can adjust prices in real time depending on current market demand, supply and other factors.',
  },
  {
    id: 4,
    title: 'Voice-Assisted Booking',
    description:
      'Voice-assisted booking enables users to book rides using voice commands, making the app more accessible for users with disabilities or those on the go, ensuring a hands-free and user-friendly experience.',
  },
  {
    id: 5,
    title: 'Multi-Language Support',
    description:
      'To serve diverse markets, the app includes multi-language support, allowing users and drivers to navigate and interact with the app in their preferred language, improving usability and inclusivity.',
  },
  {
    id: 6,
    title: 'Carbon Footprint Tracker',
    description:
      'This feature tracks the environmental impact of each ride by calculating the estimated CO₂ emissions, helping eco-conscious users make informed transportation choices and promoting sustainable ride options',
  },
];

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

// Tab data
export const tabs = [
  { id: 'driver', label: 'Driver Features' },
  { id: 'user', label: 'User Features' },
  { id: 'dispatcher', label: 'Dispatcher Dashboard' },
  { id: 'admin', label: 'Admin Panel' },
  { id: 'corporate', label: 'Corporate Console' },
] as const

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
