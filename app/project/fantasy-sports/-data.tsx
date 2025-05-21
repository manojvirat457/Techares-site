// import type { ProjectDetailsProps } from '@/app/project/food-delivery/-data';
import type { TabContent } from '@/src/components/tab-section';
import type { AboutSectionProps } from '@/src/sections/about/v1';
import type { FAQSectionProps } from '@/src/sections/faq';
import type { ProjectDetailsProps } from '@/src/sections/project/v4';
import {
  BarChart2,
  Blocks,
  Bot,
  Brain,
  ChartNoAxesCombined,
  DollarSign,
  Glasses,
  Handshake,
  LayoutDashboard,
  LineChart,
  MessageCircle,
  Monitor,
  Share2,
  Shield,
  Trophy,
  UserCircle2,
  Users,
  Wallet,
} from 'lucide-react';
import Image from 'next/image';

export const projectDetails: ProjectDetailsProps = {
  sectionHeading: {
    title: 'Fantasy Sports App Development Services for Top Sports',
    description:
      "With Techares' premium fantasy sports app development, you can achieve unprecedented levels of fan engagement. We create custom fantasy sports platforms for major sports, providing seamless, immersive experiences. As a reputable fantasy sports app development company, we guarantee strong, scalable solutions that fulfill your specific vision. Our commitment to quality extends from conceptualizing to implementing, ensuring a superior product.",
  },
  keyPoints: [],
  image: {
    src: '/assets/images/about/whychoose.webp',
    alt: 'fantasy sports app development',
  },
};

export const solutions = {
  title: 'Fantasy Sports App',
  highlightedTitle: 'Development Services',
  description:
    'Transform your sports vision into a reality with our high-performance fantasy sports app development services tailored for top sports.',
  solutionCard: [
    {
      title: 'User Panel Features',
      description:
        'Easy registration & login, team selection & player drafting, live match tracking & score updates, and multiple payment options with reward system.',
      icon: <Users />,
    },
    {
      title: 'Admin Panel Features',
      description:
        'Comprehensive user & contest management, real-time analytics & reporting, fraud detection & security measures, and revenue tracking & monetization control.',
      icon: <LayoutDashboard />,
    },
    {
      title: 'Advanced Features',
      description:
        'AI-driven player predictions, social media integration, in-app chat & push notifications, and multi-game & multi-platform compatibility.',
      icon: <Brain />,
    },
    {
      title: 'Trending Features',
      description:
        'Blockchain-powered transparency & security, NFT integration for digital collectibles, augmented reality for immersive experience, and AI-based game strategies.',
      icon: <Blocks />,
    },
  ],
};

export const servicesData = {
  'User Panel': {
    title: 'User Panel',
    description: 'Essential features for fantasy sports players',
    icon: '/assets/images/service/user.png',
    cards: [
      {
        title: 'Easy Registration & Login',
        description:
          'Allow users to quickly sign up and log in using email, phone number, or social media for a hassle-free experience.',
        icon: <UserCircle2 />,
      },
      {
        title: 'Team Selection & Player Drafting',
        description:
          'Users can create their fantasy teams by selecting players based on real-time stats, enhancing engagement and strategy.',
        icon: <Users />,
      },
      {
        title: 'Live Match Tracking & Score Updates',
        description:
          'Real-time match updates and scoreboards keep users informed, ensuring a thrilling gaming experience.',
        icon: <LineChart />,
      },
      {
        title: 'Multiple Payment Options & Reward System',
        description:
          'Secure payment gateways support various payment methods, while a reward system boosts user retention and loyalty.',
        icon: <Wallet />,
      },
    ],
  },
  'Admin Panel': {
    title: 'Admin Panel',
    description: 'Powerful management tools for administrators',
    icon: '/assets/images/service/admin.png',
    cards: [
      {
        title: 'User & Contest Management',
        description:
          'Easily manage user accounts, contests, and game settings with a centralized admin dashboard for seamless operations.',
        icon: <LayoutDashboard />,
      },
      {
        title: 'Real-Time Analytics & Reporting',
        description:
          'Get detailed insights into user behavior, game performance, and revenue trends with advanced analytics and reports.',
        icon: <BarChart2 />,
      },
      {
        title: 'Fraud Detection & Security Measures',
        description:
          'Ensure fair play with AI-powered fraud detection, preventing cheating, multiple account abuse, and unauthorized activities.',
        icon: <Shield />,
      },
      {
        title: 'Revenue Tracking & Monetization Control',
        description:
          'Monitor revenue streams, control entry fees, manage withdrawals, and optimize monetization strategies for maximum profitability.',
        icon: <DollarSign />,
      },
    ],
  },
  'Advanced Features': {
    title: 'Advanced Features',
    description: 'Cutting-edge features for enhanced user experience',
    icon: '/assets/images/service/advanced.png',
    cards: [
      {
        title: 'AI-Driven Player Predictions',
        description:
          'Enhance user experience with AI-powered insights, helping players make informed decisions based on real-time data and historical performance.',
        icon: <Brain />,
      },
      {
        title: 'Social Media Integration',
        description:
          'Boost engagement by allowing users to share achievements, invite friends, and compete with their social circles directly from the app.',
        icon: <Share2 />,
      },
      {
        title: 'In-App Chat & Push Notifications',
        description:
          'Keep users connected with real-time chat, match updates, and personalized push notifications to increase retention and interaction.',
        icon: <MessageCircle />,
      },
      {
        title: 'Multi-Game & Multi-Platform Compatibility',
        description:
          'Offer seamless gameplay across various sports and devices, ensuring users can enjoy the app on mobile, web, and tablets effortlessly.',
        icon: <Monitor />,
      },
    ],
  },
  'Trending Features': {
    title: 'Trending Features',
    description: 'Latest innovations in fantasy sports development',
    icon: '/assets/images/service/trending.png',
    cards: [
      {
        title: 'Blockchain-Powered Transparency',
        description:
          'Ensure fair play and secure transactions with blockchain technology, enhancing trust among users through decentralized and tamper-proof data.',
        icon: <Blocks />,
      },
      {
        title: 'NFT Integration for Digital Collectibles',
        description:
          'Allow users to buy, sell, and trade unique digital assets, such as player cards and special achievements, adding an extra layer of engagement.',
        icon: <Trophy />,
      },
      {
        title: 'AR for Immersive Experience',
        description:
          'Enhance user interaction with AR features, bringing fantasy sports to life with 3D visuals, interactive player stats, and immersive gameplay.',
        icon: <Glasses />,
      },
      {
        title: 'AI-Based Game Strategies',
        description:
          'Leverage AI to provide users with smart recommendations, predictive analytics, and optimized team-building strategies for better gameplay decisions.',
        icon: <Bot />,
      },
    ],
  },
};

export const whyChooseSectionData: AboutSectionProps = {
  sectionHeading: {
    title: 'Why Choose TechAres as a Fantasy Sports App Development Company?',
    description:
      'At TechAres, we specialize in creating dynamic, scalable, and secure fantasy sports apps tailored to your business needs. Our experienced developers integrate cutting-edge technologies like AI, blockchain, and AR to provide an unparalleled gaming experience.',
  },
  keyPoints: [
    {
      title: 'Industry Expertise',
      description: 'Years of experience in fantasy sports app development.',
      icon: <Trophy />,
    },
    {
      title: 'Scalable Solutions',
      description: 'Future-ready apps with robust security protocols.',
      icon: <ChartNoAxesCombined />,
    },
    {
      title: 'Innovative Features',
      description: 'AI-powered analytics, blockchain, and NFT integrations.',
      icon: <Brain />,
    },
    {
      title: 'End-to-End Support',
      description:
        'From development to launch and beyond, we offer complete assistance.',
      icon: <Handshake />,
    },
  ],
  isCard: false,
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
  isButton: true,
  button: {
    href: '',
    label: 'Get Quote',
    openNewTab: true,
  },
  description: '',
};

export const faqSectionData: FAQSectionProps = {
  sectionHeading: {
    subtitle: 'Our FAQ',
    title: 'Frequently Asked Questions',
  },
  faqItems: [
    {
      question: 'What sports can be included in a fantasy sports app?',
      answer:
        'Apart from basic offerings, we can also build platforms that cater to niche sports like rugby, golf, and even emerging esports. We offer a diverse array of fantasy sports app development opportunities.',
    },
    {
      question: 'How long does it take to develop a fantasy sports app?',
      answer:
        'Our project timelines are determined based on the specific requirements and complexity of the features requested. These will be specified during the initial consultation to ensure transparent expectations.',
    },
    {
      question: 'Can you integrate real-time data APIs into the app?',
      answer:
        'As a reliable fantasy app development company in the market, we have expertise in integrating fantasy apps with a wide variety of data providers. This ensures your platform has the most accurate and up-to-the-minute information available to users.',
    },
    {
      question: 'Is it legal to run a fantasy sports app?',
      answer:
        'TechAres, the dependable fantasy sports app development company, provide end-to-end guidance on navigating the legal aspects of fantasy app development, to ensure your platform adheres to the specific legal requirements. This helps in surpassing any potential risks.',
    },
    {
      question: 'What monetization models can be implemented?',
      answer:
        'We will incorporate advanced monetization strategies like premium subscriptions for exclusive content, or partnerships with merchandise vendors, this expands your revenue modules.',
    },
  ],
};

export const workflowSteps = [
  {
    id: 1,
    title: 'Strategic Planning With In-depth Research',
    description:
      'A trustworthy fantasy sports app development company defines your niche, conducts comprehensive market research, and plans customized features based on your requirements.',
  },
  {
    id: 2,
    title: 'Designing User-Focused Web Application',
    description:
      'Our detailed wireframes and prototypes, are created with rigorous user testing, and refined UX/UI for optimal user satisfaction.',
  },
  {
    id: 3,
    title: 'Robust Development',
    description:
      'Our robust front-end and back-end systems, seamlessly integrate APIs for real-time data to ensure stability and reliability in fantasy app development.',
  },
  {
    id: 4,
    title: 'Quality Check With Thorough Testing',
    description:
      'Our QA team examines every aspect of the app, from functionality and performance to security and usability, for sustainable user experience.',
  },
  {
    id: 5,
    title: 'Effective Deployment',
    description:
      "We optimize your app's listing for app stores, and manage deployment for a hassle-free experience in fantasy app development.",
  },
  {
    id: 6,
    title: 'Continuous Improvement',
    description:
      'We gather user feedback, analyze app data, provide regular updates with new features and bug fixes, and scale your infrastructure as needed.',
  },
];

export const whyChooseUs: ProjectDetailsProps = {
  sectionHeading: {
    title: 'Why Choose TechAres ?',
    description:
      'Techares stands out as the ideal partner for your fantasy sports app development needs, offering a unique blend of expertise and commitment. As a reliable fantasy sports app development company our comprehensive services eases the process of app development.',
  },
  isButton: true,
  isCard: false,
  keyPoints: [
    {
      title: 'Industry Expertise',
      icon: (
        <Image
          src="/assets/images/food-delivery/fock-outline.png"
          alt="Feature 1"
          width={20}
          height={20}
        />
      ),
      description:
        'Techares possesses a profound understanding of the fantasy sports landscape, reflected in our applications.',
    },
    {
      title: 'Scalable & Secure Solutions',
      icon: (
        <Image
          src="/assets/images/food-delivery/fock-outline.png"
          alt="Feature 1"
          width={20}
          height={20}
        />
      ),
      description:
        'We plan systems designed for sustained performance and growth, including advanced security frameworks to safeguard user data.',
    },
    {
      title: 'Pioneering Innovative Features',
      icon: (
        <Image
          src="/assets/images/food-delivery/fock-outline.png"
          alt="Feature 1"
          width={20}
          height={20}
        />
      ),
      description:
        ' Techares harnesses arising technologies, crafting apps that feature immersive AR experiences and data-driven user interactions.',
    },
    {
      title: 'Comprehensive Support',
      icon: (
        <Image
          src="/assets/images/food-delivery/fock-outline.png"
          alt="Feature 1"
          width={20}
          height={20}
        />
      ),
      description:
        "We guide you through every phase and provide continuous refinement and optimization, to ensure your app's lasting impact.",
    },
  ],
  button: {
    label: 'Get Quote',
    href: '/contact',
  },
  image: {
    src: '/assets/images/taxi-app/hero-3.png',
    alt: 'about image five',
    width: 540,
    height: 578,
  },
};

export const tabs = [
  { id: 'user', label: 'User Features' },
  { id: 'admin', label: 'Admin Panel' },
  { id: 'advance', label: 'Advanced Features' },
  { id: 'trending', label: 'Trending Features' },
] as const;

// Content for each tab
export const tabContent: Record<(typeof tabs)[number]['id'], TabContent> = {
  user: {
    title: 'User Panel',
    features: [
      {
        icon: (
          <Image
            src="/assets/images/taxi-app/p4.png"
            alt="Easy Registration & Login"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Easy Registration & Login',
        description:
          'Our intuitive user interface provides users with a quick and seamless signup and login experience.',
      },
      {
        icon: (
          <Image
            src="/assets/images/taxi-app/p4.png"
            alt="League Management"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'League Management',
        description:
          'Users can create or join leagues, manage teams, and engage with fellow fans using our robust league tools.',
      },
      {
        icon: (
          <Image
            src="/assets/images/taxi-app/p4.png"
            alt="Team Selection & Player Drafting"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Team Selection & Player Drafting',
        description:
          'Players can plan the ideal team for their with real-time statistics and expert insights.',
      },
      {
        icon: (
          <Image
            src="/assets/images/taxi-app/p4.png"
            alt="Live Match Tracking & Score Updates"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Live Match Tracking & Score Updates',
        description:
          'Stay updated with the instant scores and live match tracking provides an exceptional sports experience.',
      },
      {
        icon: (
          <Image
            src="/assets/images/taxi-app/p4.png"
            alt="Multiple Payment Options & Reward System"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Multiple Payment Options & Reward System',
        description:
          'With our flexible and robust systems the transactions and exciting rewards are safe and secured.',
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
            alt="User & Contest Management"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'User & Contest Management',
        description:
          'Admin can efficiently manage users and contests with our comprehensive web interface, ensuring smooth operations.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Real-Time Analytics & Reporting"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Real-Time Analytics & Reporting',
        description:
          "You can gain valuable insights with real-time data, to optimize your platform's performance with our accurate analytics.",
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Fraud Detection & Security Measures"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Fraud Detection & Security Measures',
        description:
          'Protect your platform with advanced security, ensuring a safe and fair environment for the user.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Revenue Tracking & Monetization Control"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Revenue Tracking & Monetization Control',
        description:
          'Our revenue tracking features maximize revenue with detailed tracking and flexible monetization.',
      },
    ],
    image: '/assets/images/taxi-app/user-feature.png',
  },
  advance: {
    title: 'Advanced Features',
    features: [
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="AI-Driven Player Predictions"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'AI-Driven Player Predictions',
        description:
          'Integration of AI for accurate player predictions, gives users a competitive edge with advanced technology.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Social Media Integration for User Engagement"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Social Media Integration for User Engagement',
        description:
          'With seamless social sharing, and connecting users within the community you can promote app engagement.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Geolocation Features"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Geolocation Features',
        description:
          'Enhance the user experience and increase app engagement with our exclusive geo-specific leagues and events.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="In-App Chat & Push Notifications"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'In-App Chat & Push Notifications',
        description:
          'Foster communication and engagement with real-time chat and push notifications.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Multi-Game & Multi-Platform Compatibility"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Multi-Game & Multi-Platform Compatibility',
        description:
          'Reach a wider audience with versatile, cross-platform, and cross-game compatibility features.',
      },
    ],
    image: '/assets/images/taxi-app/user-feature.png',
  },
  trending: {
    title: 'Trending Features of Fantasy App Development Software',
    features: [
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Blockchain-Powered Transparency & Security"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Blockchain-Powered Transparency & Security',
        description:
          'Get a secure and reliable experience with integrated blockchain technology throughout the application.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="NFT Integration for Digital Collectibles"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'NFT Integration for Digital Collectibles',
        description:
          'Incorporate unique digital assets with NFT integration, in trading with NFT-based player card achievements, and many more.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="Augmented Reality (AR) for an Immersive Experience"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'Augmented Reality (AR) for an Immersive Experience',
        description:
          'Elevate gameplay with AR features, creating engaging and interactive visual experiences through 3D.',
      },
      {
        icon: (
          <Image
            src="/assets/images/food-delivery/fock.png"
            alt="AI-Based Game Strategies & Insights"
            width={100}
            height={100}
            className="w-full"
          />
        ),
        title: 'AI-Based Game Strategies & Insights',
        description:
          'Enhance the user gameplay with AI-driven strategy insights, improving user engagement through comprehensive technology.',
      },
    ],
    image: '/assets/images/taxi-app/user-feature.png',
  },
};
