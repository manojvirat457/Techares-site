
export interface ServiceDetail {
 title: string;
 description: string;
 icon: string;
 mainDescription: string;
 cards: {
  title: string;
  description: string;
 }[];
}

export interface ServiceData {
 [key: string]: ServiceDetail;
}

export const servicesData: ServiceData = {
 "Custom Software Development": {
  title: "Custom Software Development",
  description: "Tailored software solutions for your business needs",
  icon: '/assets/images/service/custom-software.png',
  mainDescription:
   "We specialize in creating tailored software solutions to meet your unique business requirements. Our process focuses on delivering secure, scalable, and feature-rich products designed to adapt to your growth.",
  cards: [
   {
    title: "Enterprise Solutions",
    description:
     " Build robust software systems that automate workflows, improve efficiency, and support the needs of large organizations, ensuring seamless integration with existing processes and tools.",
   },
   {
    title: "Web and Mobile Applications",
    description:
     "Develop responsive, user-friendly web and mobile apps that offer exceptional performance and intuitive experiences, tailored to meet user needs and market demands.",
   },
   {
    title: "API Development and Integration",
    description:
     "Design and integrate APIs to connect systems, enhance data flow, and enable seamless interaction between different platforms and services.",
   },
   {
    title: "Cloud-Based Applications",
    description:
     "Create scalable cloud-native applications that ensure accessibility, reliability, and flexibility while reducing infrastructure costs.",
   },
   {
    title: "Legacy System Modernization",
    description:
     "Upgrade outdated systems to improve performance, security, and compatibility with modern technologies, ensuring a smooth transition.",
   },
  ],
 },
 "IT Consultancy & Development Services": {
  title: "IT Consultancy & Development Services",
  description: "Expert guidance and development solutions",
  icon: '/assets/images/service/consulting-service.png',
  mainDescription:
   "Our IT consulting services help businesses leverage technology to achieve their goals. From strategic planning to execution, we offer solutions tailored to your specific challenges and growth opportunities.",
  cards: [
   {
    title: "Tech Roadmap Design",
    description:
     "Collaborate with our experts to identify technological gaps and opportunities, creating a clear strategy that aligns IT capabilities.",
   },
   {
    title: "Cloud Migration Services",
    description:
     "Transition your systems and data to secure cloud environments ensuring enhanced collaboration, scalability, and cost-efficiency.",
   },
   {
    title: "Cybersecurity Solutions",
    description:
     "Protect your digital assets with security frameworks, including threat detection, data encryption, and regular vulnerability assessments.",
   },
   {
    title: "Infrastructure Optimization",
    description:
     "Assess and enhance your IT infrastructure for maximum efficiency, reliability, and cost savings while ensuring scalability.",
   },
   {
    title: "Custom IT Solutions",
    description:
     "Develop innovative IT solutions to address specific business challenges, ensuring seamless integration with existing systems and workflows.",
   },
  ],
 },
 "Digital Marketing": {
  title: "Digital Marketing",
  description: "Comprehensive digital marketing solutions",
  icon: '/assets/images/service/marketing.png',
  mainDescription:
   "Our digital marketing services are designed to boost your online visibility, attract the right audience, and generate measurable results through innovative, data-driven strategies.",
  cards: [
   {
    title: "SEO Optimization",
    description:
     "Improve search engine rankings by optimizing your website's structure, content, and keywords, ensuring better visibility and organic traffic growth",
   },
   {
    title: "Social Media Management",
    description:
     "Develop and execute creative campaigns across platforms like Instagram, LinkedIn, and Facebook to engage audiences and build brand loyalty.",
   },
   {
    title: "Content Marketing",
    description:
     "Craft compelling blogs, videos, and infographics that educate, entertain, and convert your audience into loyal customers.",
   },
   {
    title: "Google & Bing Ads",
    description: "Launch targeted ad campaigns with precise audience segmentation to maximize return on investment and drive high-quality leads.",
   },
   {
    title: "Performance Analytics",
    description: "Use advanced tools to measure campaign performance, identify trends, and refine strategies to consistently achieve optimal outcomes.",
   },
  ],
 },
 "Hire Developers": {
  title: "Hire Developers",
  description: "Expert developers for your projects",
  icon: '/assets/images/service/hire-developer.png',
  mainDescription:
   "Techares provides access to a pool of skilled developers to meet your project requirements. Our exper ts work seamlessly as part of your team to ensure high-quality results.",
  cards: [
   {
    title: "Frontend Developers",
    description:
     "Design and implement user interfaces with a focus on responsiveness, aesthetics, and functionality to deliver immersive user experiences.",
   },
   {
    title: "Backend Developers",
    description: "Build robust and secure server-side architectures that ensure your applications run efficiently and scale effortlessly with business growth.",
   },
   {
    title: "Full-Stack Teams",
    description: "Manage end-to-end development projects with experts skilled in both frontend and backend technologies for seamless integration.",
   },
   {
    title: "DevOps Specialists",
    description: "Optimize the software development lifecycle by combining development and operations for faster, more reliable deployments.",
   },
   {
    title: "Dedicated Resources",
    description: "Hire developers exclusively for your project, ensuring focused attention and faster delivery while maintaining high-quality standards.",
   },
  ],
 },
 "Blockchain & Cryptocurrency Development": {
  title: "Blockchain & Cryptocurrency Development",
  description: "Innovative blockchain solutions",
  icon: '/assets/images/service/bitcoin.png',
  mainDescription:
   "Harness the transformative power of blockchain technology to create secure, transparent, and efficient solutions for your business. Our expertise spans across various blockchain applications tailored to your needs.",
  cards: [
   {
    title: "Smart Contracts",
    description: "Automate transactions with self-executing agreements that reduce risks, eliminate intermediaries, and enhance trust in business dealings.",
   },
   {
    title: "DApp Development",
    description:
     "Build decentralized applications that operate on secure, peer-to-peer networks, offering greater transparency and user autonomy.",
   },
   {
    title: "Token Creation and Management",
    description: " Design and manage blockchain tokens for fundraising, rewards programs, or custom cryptocurrency solutions.",
   },
   {
    title: "Cryptocurrency Wallet Development",
    description: "Develop secure wallets for managing digital assets with advanced features like multi-currency support and enhanced encryption.",
   },
   {
    title: "Blockchain Consulting",
    description: "Leverage our expertise to explore and implement blockchain solutions that streamline processes and drive business innovation.",
   },
  ],
 },
 "AI & Machine Learning": {
  title: "AI & Machine Learning",
  description: "Advanced AI solutions for your business",
  icon: '/assets/images/service/ai-machine.png',
  mainDescription:
   "We deliver AI-driven solutions that empower businesses to make smarter decisions, improve efficiency, and enhance user experiences through predictive and adaptive systems.",
  cards: [
   {
    title: "Predictive Analytics",
    description: "Analyze historical data to forecast trends, enabling proactive strategies and informed decision-making.",
   },
   {
    title: "Chatbots and Virtual Assistants",
    description: "Create AI-powered conversational interfaces to enhance customer support and improve engagement around the clock.",
   },
   {
    title: "Business Process Automation",
    description: "Automate repetitive tasks using machine learning algorithms, saving time and reducing human error.",
   },
   {
    title: "Image and Video Recognition",
    description: " Utilize AI to analyze visual data, supporting applications like security surveillance, content tagging, and augmented reality.",
   },
   {
    title: "Custom ML Models",
    description: "Develop and deploy machine learning models tailored to solve complex challenges specific to your industry or business",
   },
  ],
 },
}

