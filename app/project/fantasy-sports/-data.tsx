import { ProjectDetailsProps } from '@/app/project/food-delivery/-data';
import { Methodology } from '@/data/methodology/v1';
import { AboutSectionProps } from '@/src/sections/about/v1';
import { FAQSectionProps } from '@/src/sections/faq';
import {
    BarChart2,
    Blocks,
    Bot,
    Brain,

    ChartNoAxesCombined,

    Code2,

    DollarSign,
    Glasses,
    Handshake,
    LayoutDashboard,
    LineChart,
    MessageCircle,
    Monitor,
    PenTool,
    RefreshCcw,
    Rocket,
    Search,
    Share2,
    Shield,
    TestTube2,
    Trophy,
    UserCircle2,
    Users,
    Wallet
} from 'lucide-react';

export const projectDetails: ProjectDetailsProps = {
  sectionHeading: {
    subtitle: 'Fantasy Sports App Development',
    title: 'Fantasy Sports App Development Services for Top Sports',
    description:
      'At TechAres, we develop cutting-edge fantasy sports apps for cricket, football, basketball, and more. Our solutions offer real-time analytics, seamless user engagement, and a smooth gaming experience. With secure payment gateways, AI-driven insights, and interactive features, we enhance user retention and monetization.',
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
      description: 'Easy registration & login, team selection & player drafting, live match tracking & score updates, and multiple payment options with reward system.',
      icon: <Users />,
    },
    {
      title: 'Admin Panel Features',
      description: 'Comprehensive user & contest management, real-time analytics & reporting, fraud detection & security measures, and revenue tracking & monetization control.',
      icon: <LayoutDashboard />,
    },
    {
      title: 'Advanced Features',
      description: 'AI-driven player predictions, social media integration, in-app chat & push notifications, and multi-game & multi-platform compatibility.',
      icon: <Brain />,
    },
    {
      title: 'Trending Features',
      description: 'Blockchain-powered transparency & security, NFT integration for digital collectibles, augmented reality for immersive experience, and AI-based game strategies.',
      icon: <Blocks />,
    }
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
        description: 'Allow users to quickly sign up and log in using email, phone number, or social media for a hassle-free experience.',
        icon: <UserCircle2 />,
      },
      {
        title: 'Team Selection & Player Drafting',
        description: 'Users can create their fantasy teams by selecting players based on real-time stats, enhancing engagement and strategy.',
        icon: <Users />,
      },
      {
        title: 'Live Match Tracking & Score Updates',
        description: 'Real-time match updates and scoreboards keep users informed, ensuring a thrilling gaming experience.',
        icon: <LineChart />,
      },
      {
        title: 'Multiple Payment Options & Reward System',
        description: 'Secure payment gateways support various payment methods, while a reward system boosts user retention and loyalty.',
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
        description: 'Easily manage user accounts, contests, and game settings with a centralized admin dashboard for seamless operations.',
        icon: <LayoutDashboard />,
      },
      {
        title: 'Real-Time Analytics & Reporting',
        description: 'Get detailed insights into user behavior, game performance, and revenue trends with advanced analytics and reports.',
        icon: <BarChart2 />,
      },
      {
        title: 'Fraud Detection & Security Measures',
        description: 'Ensure fair play with AI-powered fraud detection, preventing cheating, multiple account abuse, and unauthorized activities.',
        icon: <Shield />,
      },
      {
        title: 'Revenue Tracking & Monetization Control',
        description: 'Monitor revenue streams, control entry fees, manage withdrawals, and optimize monetization strategies for maximum profitability.',
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
        description: 'Enhance user experience with AI-powered insights, helping players make informed decisions based on real-time data and historical performance.',
        icon: <Brain />,
      },
      {
        title: 'Social Media Integration',
        description: 'Boost engagement by allowing users to share achievements, invite friends, and compete with their social circles directly from the app.',
        icon: <Share2 />,
      },
      {
        title: 'In-App Chat & Push Notifications',
        description: 'Keep users connected with real-time chat, match updates, and personalized push notifications to increase retention and interaction.',
        icon: <MessageCircle />,
      },
      {
        title: 'Multi-Game & Multi-Platform Compatibility',
        description: 'Offer seamless gameplay across various sports and devices, ensuring users can enjoy the app on mobile, web, and tablets effortlessly.',
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
        description: 'Ensure fair play and secure transactions with blockchain technology, enhancing trust among users through decentralized and tamper-proof data.',
        icon: <Blocks />,
      },
      {
        title: 'NFT Integration for Digital Collectibles',
        description: 'Allow users to buy, sell, and trade unique digital assets, such as player cards and special achievements, adding an extra layer of engagement.',
        icon: <Trophy />,
      },
      {
        title: 'AR for Immersive Experience',
        description: 'Enhance user interaction with AR features, bringing fantasy sports to life with 3D visuals, interactive player stats, and immersive gameplay.',
        icon: <Glasses />,
      },
      {
        title: 'AI-Based Game Strategies',
        description: 'Leverage AI to provide users with smart recommendations, predictive analytics, and optimized team-building strategies for better gameplay decisions.',
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
      description: 'From development to launch and beyond, we offer complete assistance.',
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
        answer: 'We develop fantasy apps for cricket, football, basketball, baseball, and more.',
      },
      {
        question: 'How long does it take to develop a fantasy sports app?',
        answer: 'The development time depends on the complexity, typically ranging from 8 to 16 weeks.',
      },
      {
        question: 'Can you integrate real-time data APIs into the app?',
        answer: 'Yes, we integrate live score updates, player stats, and other real-time data sources.',
      },
      {
        question: 'Is it legal to run a fantasy sports app?',
        answer: 'Yes, fantasy sports apps are legal in many regions. We ensure compliance with local regulations.',
      },
      {
        question: 'What monetization models can be implemented?',
        answer: 'We offer multiple revenue models, including entry fees, ads, sponsorships, and in-app purchases.',
      },
    ],
  };

  

  
export const methodologies: Methodology[] = [
    {
      id: 'market-research',
      number: '01',
      title: 'Market Research & Requirement Gathering',
      description: 'Understanding user needs, market trends, and competition. We analyze the fantasy sports market landscape, identify target audience preferences, and gather comprehensive requirements to ensure a competitive solution.',
      icon: <Search size={30} />,
      color: {
        number: 'text-emerald-400',
        iconBg: 'bg-emerald-900/50',
      },
    },
    {
      id: 'design',
      number: '02',
      title: 'UI/UX Design & Prototyping',
      description: 'Creating an intuitive and engaging design for the best user experience. Our team develops wireframes, interactive prototypes, and user-friendly interfaces that make fantasy sports management seamless and enjoyable.',
      icon: <PenTool size={30} />,
      color: {
        number: 'text-primary',
        iconBg: 'bg-blue-900/50',
      },
    },
    {
      id: 'development',
      number: '03',
      title: 'Development & Integration',
      description: 'Implementing core functionalities, APIs, and real-time data synchronization. We build robust backend systems, integrate live sports data feeds, and ensure smooth real-time updates for scores and statistics.',
      icon: <Code2 size={30} />,
      color: {
        number: 'text-cyan-400',
        iconBg: 'bg-cyan-900/50',
      },
    },
    {
      id: 'testing',
      number: '04',
      title: 'Testing & Quality Assurance',
      description: 'Ensuring bug-free performance with extensive testing. Our QA team conducts thorough testing of all features, including real-time data updates, payment processing, and user management systems.',
      icon: <TestTube2 size={30} />,
      color: {
        number: 'text-yellow-400',
        iconBg: 'bg-yellow-900/50',
      },
    },
    {
      id: 'deployment',
      number: '05',
      title: 'Deployment & Launch',
      description: 'Publishing the app on multiple platforms and optimizing for high performance. We handle app store submissions, server deployment, and ensure optimal configuration for handling high user loads during peak sports events.',
      icon: <Rocket size={30} />,
      color: {
        number: 'text-purple-400',
        iconBg: 'bg-purple-900/50',
      },
    },
    {
      id: 'support',
      number: '06',
      title: 'Post-Launch Support & Updates',
      description: 'Continuous maintenance and feature enhancements. We provide ongoing support, regular updates, performance monitoring, and implement new features to keep your fantasy sports app competitive and engaging.',
      icon: <RefreshCcw size={30} />,
      color: {
        number: 'text-red-400',
        iconBg: 'bg-red-900/50',
      },
    },
  ];
  