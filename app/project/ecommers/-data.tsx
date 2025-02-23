import { ProjectDetailsProps } from '@/app/project/food-delivery/-data';
import { AboutSectionProps } from '@/src/sections/about/v1';
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

export const projectDetails: ProjectDetailsProps = {
  sectionHeading: {
    subtitle: 'Ecommerce App Development',
    title: 'Ecommerce App Development Services We Offer',
    description:
      "At Teachers, we specialize in providing comprehensive ecommerce app development services tailored to meet your business needs. Whether you're looking to build a custom ecommerce website, a B2C or B2B app, or a multi-vendor marketplace, our team of experts is here to help. We leverage the latest technologies and platforms like Shopify and WooCommerce to ensure your ecommerce solution is robust, scalable, and user-friendly.",
  },
  keyPoints: [],
  image: {
    src:'/assets/images/about/whychoose.webp',
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
