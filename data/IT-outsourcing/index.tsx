import { SectionHeadingWithoutStylingProps } from "@/src/components/section-heading/interface";
import { ServicesProps } from "@/src/sections/blockChain-service";
import { ImageLayout } from "@/src/sections/cta/tag-banner";
import { ServiceSectionPropss } from "@/src/sections/service/v1";
import { ServiceSectionProps } from "@/src/sections/serviceDetails";
import { SoftwareDevelopmentPost, StandardPost } from "@/src/sections/tabs-software-development";
import { WhatMakesProps } from "@/src/sections/what-makes";


function Icon1() {
    return (
        <svg
            width={30}
            height={41}
            viewBox="0 0 30 41"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M26.25 39.5938H3.75C2.75544 39.5938 1.80161 39.1987 1.09835 38.4954C0.395088 37.7921 0 36.8383 0 35.8438V5.84375C0 4.84919 0.395088 3.89536 1.09835 3.1921C1.80161 2.48884 2.75544 2.09375 3.75 2.09375H26.25C27.2446 2.09375 28.1984 2.48884 28.9017 3.1921C29.6049 3.89536 30 4.84919 30 5.84375V35.8438C30 36.8383 29.6049 37.7921 28.9017 38.4954C28.1984 39.1987 27.2446 39.5938 26.25 39.5938ZM3.75 4.59375C3.41848 4.59375 3.10054 4.72545 2.86612 4.95987C2.6317 5.19429 2.5 5.51223 2.5 5.84375V35.8438C2.5 36.1753 2.6317 36.4932 2.86612 36.7276C3.10054 36.9621 3.41848 37.0938 3.75 37.0938H26.25C26.5815 37.0938 26.8995 36.9621 27.1339 36.7276C27.3683 36.4932 27.5 36.1753 27.5 35.8438V5.84375C27.5 5.51223 27.3683 5.19429 27.1339 4.95987C26.8995 4.72545 26.5815 4.59375 26.25 4.59375H3.75Z" />
            <path d="M11.25 34.5938H8.75C8.41848 34.5938 8.10054 34.4621 7.86612 34.2276C7.6317 33.9932 7.5 33.6753 7.5 33.3438C7.5 33.0122 7.6317 32.6943 7.86612 32.4599C8.10054 32.2254 8.41848 32.0938 8.75 32.0938H11.25C11.5815 32.0938 11.8995 32.2254 12.1339 32.4599C12.3683 32.6943 12.5 33.0122 12.5 33.3438C12.5 33.6753 12.3683 33.9932 12.1339 34.2276C11.8995 34.4621 11.5815 34.5938 11.25 34.5938Z" />
        </svg>
    );
}

function Icon2() {
    return (
        <svg
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M7.50125 22.2687V8.34375C7.50125 8.01223 7.36955 7.69429 7.13513 7.45987C6.90071 7.22545 6.58277 7.09375 6.25125 7.09375C5.91973 7.09375 5.60179 7.22545 5.36737 7.45987C5.13295 7.69429 5.00125 8.01223 5.00125 8.34375V22.2687C3.94204 22.5566 3.00698 23.185 2.34033 24.057C1.67369 24.929 1.3125 25.9961 1.3125 27.0938C1.3125 28.1914 1.67369 29.2585 2.34033 30.1305C3.00698 31.0025 3.94204 31.6309 5.00125 31.9188V33.3438C5.00125 33.6753 5.13295 33.9932 5.36737 34.2276C5.60179 34.4621 5.91973 34.5938 6.25125 34.5938C6.58277 34.5938 6.90071 34.4621 7.13513 34.2276C7.36955 33.9932 7.50125 33.6753 7.50125 33.3438V31.9188C8.56046 31.6309 9.49552 31.0025 10.1622 30.1305C10.8288 29.2585 11.19 28.1914 11.19 27.0938C11.19 25.9961 10.8288 24.929 10.1622 24.057C9.49552 23.185 8.56046 22.5566 7.50125 22.2687ZM6.25125 29.5938C5.7568 29.5938 5.27345 29.4471 4.86232 29.1724C4.4512 28.8977 4.13077 28.5073 3.94155 28.0505C3.75233 27.5936 3.70282 27.091 3.79929 26.606C3.89575 26.1211 4.13385 25.6756 4.48348 25.326C4.83311 24.9764 5.27857 24.7382 5.76353 24.6418C6.24848 24.5453 6.75114 24.5948 7.20796 24.784C7.66477 24.9733 8.05522 25.2937 8.32992 25.7048C8.60463 26.1159 8.75125 26.5993 8.75125 27.0938C8.75125 27.7568 8.48786 28.3927 8.01902 28.8615C7.55018 29.3304 6.91429 29.5938 6.25125 29.5938Z" />
            <path d="M38.7513 27.0938C38.7477 25.9881 38.3777 24.9147 37.6991 24.0417C37.0206 23.1687 36.0718 22.5452 35.0013 22.2687V8.34375C35.0013 8.01223 34.8696 7.69429 34.6351 7.45987C34.4007 7.22545 34.0828 7.09375 33.7513 7.09375C33.4197 7.09375 33.1018 7.22545 32.8674 7.45987C32.6329 7.69429 32.5013 8.01223 32.5013 8.34375V22.2687C31.442 22.5566 30.507 23.185 29.8403 24.057C29.1737 24.929 28.8125 25.9961 28.8125 27.0938C28.8125 28.1914 29.1737 29.2585 29.8403 30.1305C30.507 31.0025 31.442 31.6309 32.5013 31.9188V33.3438C32.5013 33.6753 32.6329 33.9932 32.8674 34.2276C33.1018 34.4621 33.4197 34.5938 33.7513 34.5938C34.0828 34.5938 34.4007 34.4621 34.6351 34.2276C34.8696 33.9932 35.0013 33.6753 35.0013 33.3438V31.9188C36.0718 31.6423 37.0206 31.0188 37.6991 30.1458C38.3777 29.2728 38.7477 28.1994 38.7513 27.0938ZM33.7513 29.5938C33.2568 29.5938 32.7734 29.4471 32.3623 29.1724C31.9512 28.8977 31.6308 28.5073 31.4416 28.0505C31.2523 27.5936 31.2028 27.091 31.2993 26.606C31.3957 26.1211 31.6339 25.6756 31.9835 25.326C32.3331 24.9764 32.7786 24.7382 33.2635 24.6418C33.7485 24.5453 34.2511 24.5948 34.708 24.784C35.1648 24.9733 35.5552 25.2937 35.8299 25.7048C36.1046 26.1159 36.2513 26.5993 36.2513 27.0938C36.2513 27.7568 35.9879 28.3927 35.519 28.8615C35.0502 29.3304 34.4143 29.5938 33.7513 29.5938Z" />
            <path d="M21.2513 9.76875V8.34375C21.2513 8.01223 21.1196 7.69429 20.8851 7.45987C20.6507 7.22545 20.3328 7.09375 20.0013 7.09375C19.6697 7.09375 19.3518 7.22545 19.1174 7.45987C18.8829 7.69429 18.7513 8.01223 18.7513 8.34375V9.76875C17.692 10.0566 16.757 10.685 16.0903 11.557C15.4237 12.429 15.0625 13.4961 15.0625 14.5938C15.0625 15.6914 15.4237 16.7585 16.0903 17.6305C16.757 18.5025 17.692 19.1309 18.7513 19.4187V33.3438C18.7513 33.6753 18.8829 33.9932 19.1174 34.2276C19.3518 34.4621 19.6697 34.5938 20.0013 34.5938C20.3328 34.5938 20.6507 34.4621 20.8851 34.2276C21.1196 33.9932 21.2513 33.6753 21.2513 33.3438V19.4187C22.3105 19.1309 23.2455 18.5025 23.9122 17.6305C24.5788 16.7585 24.94 15.6914 24.94 14.5938C24.94 13.4961 24.5788 12.429 23.9122 11.557C23.2455 10.685 22.3105 10.0566 21.2513 9.76875ZM20.0013 17.0938C19.5068 17.0938 19.0234 16.9471 18.6123 16.6724C18.2012 16.3977 17.8808 16.0073 17.6916 15.5505C17.5023 15.0936 17.4528 14.591 17.5493 14.106C17.6457 13.6211 17.8839 13.1756 18.2335 12.826C18.5831 12.4764 19.0286 12.2382 19.5135 12.1418C19.9985 12.0453 20.5011 12.0948 20.958 12.2841C21.4148 12.4733 21.8052 12.7937 22.0799 13.2048C22.3546 13.6159 22.5013 14.0993 22.5013 14.5938C22.5013 15.2568 22.2379 15.8927 21.769 16.3615C21.3002 16.8304 20.6643 17.0938 20.0013 17.0938Z" />
        </svg>
    );
}
export const ItHeading: SectionHeadingWithoutStylingProps = {
    title: 'Leading IT Outsourcing Company',
    description: 'Transform your business operations and achieve new efficiencies with our comprehensive IT outsourcing services, designed to meet your unique needs and drive growth.'
}
export const ItServiceHeading: SectionHeadingWithoutStylingProps = {
    title: 'IT Outsourcing Services',
    description:
        'Leverage our technical expertise and industry experience to access a wide range of IT outsourcing services tailored to your unique business challenges. Here are some of our key services:',

}
export const ItServices: ServicesProps = {
    images: {
        image1: {
            src: '/assets/images/landing/whychoose.png',
            alt: 'about one',
            width: 750,
            height: 500,
        },
        image2: {
            src: '/assets/images/about/about-2.png',
            alt: 'about two',
            width: 312,
            height: 304,
        },
        image3: {
            src: '/assets/images/about/about-3.png',
            alt: 'about three',
            width: 250,
            height: 265,
        },
        image4: {
            src: '/assets/images/about/about-4.png',
            alt: 'about four',
            width: 250,
            height: 265,
        },
    },
    sectionHeading: {
        title: 'IT Outsourcing Services',
        description: 'Techares is a top IT outsourcing company, backed by a team of skilled professionals proficient in delivering robust, scalable, and secure IT solutions. With 250+ experts on board, we have successfully delivered 150+ projects for major brands and Fortune 500 companies globally. From strategy and design to development and deployment, we manage your entire IT project lifecycle.\nWhether you need simple IT support or complex, organization-wide IT solutions, our professionals have extensive experience across various domains and projects to meet your specific requirements. We are your go-to team to bring your IT projects to life.'

    },
    description:
        'Whether you need a simple online store or a complex, enterprise-grade e-commerce platform, our developers have extensive experience across various domains and projects, ensuring your specific needs are met. We are your one-stop team to bring your e-commerce ideas to life.',
};

//   sectionHeading: {
//     title: 'Blockchain Development Services',
//     description: 'Leverage our technical expertise and industry experience to access a wide range of blockchain development services tailored to your unique business challenges. Here are some of our key services:'
//   },
//   projectCategories: [
//     {
//       label: 'Custom Blockchain Development',
//       value: '.CustomBlockchainDevelopment',
//     },
//     {
//       label: 'Blockchain Consulting',
//       value: '.BlockchainConsulting',
//     },
//     {
//       label: 'Smart Contract Development',
//       value: '.SmartContractDevelopment',
//     },
//     {
//       label: 'Decentralized Application (DApp) Development',
//       value: '.DecentralizedApplicationDevelopment',
//     },
//     {
//       label: 'Blockchain Integration',
//       value: '.BlockchainIntegration',
//     },
//     {
//       label: 'Blockchain Security',
//       value: '.BlockchainSecurity',
//     },
//     {
//       label: 'Blockchain Maintenance and Support',
//       value: '.BlockchainMaintenanceandSupport',
//     },
//     {
//       label: 'Cryptocurrency Development',
//       value: '.CryptocurrencyDevelopment',
//     },
//     {
//       label: "ICO and STO Development",
//       value: ".ICOandSTODevelopment"
//     }

//   ],
//   projects: [
//     {
//       image: {
//         src: '/assets/images/project/11.png',
//         alt: 'Custom Blockchain Development',
//       },
//       title: 'Custom Blockchain Development',
//       description: 'Create bespoke blockchain solutions that enhance your business operations and deliver tangible results. Our custom development services ensure your blockchain solutions align perfectly with your business needs.',
//       tags: ['CustomBlockchainDevelopment'],
//     },
//     {
//       image: {
//         src: '/assets/images/project/12.png',
//         alt: 'Blockchain Consulting',
//       },
//       title: 'Blockchain Consulting',
//       description: 'Receive expert guidance on blockchain strategy, technology selection, and implementation. Our consulting services help you optimize your blockchain investments and achieve your business goals.',
//       tags: ['BlockchainConsulting'],
//     },
//     {
//       image: {
//         src: '/assets/images/project/13.png',
//         alt: 'Smart Contract Development',
//       },
//       title: 'Smart Contract Development',
//       description: 'Develop secure and efficient smart contracts to automate processes and transactions. Our smart contract solutions ensure accuracy, transparency, and trust in your business dealings.',
//       tags: ['SmartContractDevelopment'],
//     },
//     {
//       image: {
//         src: '/assets/images/project/13.png',
//         alt: 'Decentralized Application (DApp) Development',
//       },
//       title: 'Decentralized Application (DApp) Development',
//       description: 'Build engaging and user-friendly decentralized applications (DApps) that leverage the power of blockchain technology. Our DApps enhance user experience and drive business growth.',
//       tags: ['DecentralizedApplicationDevelopment'],
//     },
//     {
//       image: {
//         src: '/assets/images/project/13.png',
//         alt: 'Blockchain Integration',
//       },
//       title: 'Blockchain Integration',
//       description: 'Integrate blockchain technology seamlessly with existing systems and third-party services. Our integration services ensure smooth data flow and operational efficiency.',
//       tags: ['BlockchainIntegration'],
//     },
//     {
//       image: {
//         src: '/assets/images/project/13.png',
//         alt: 'Blockchain Security',
//       },
//       title: 'Blockchain Security',
//       description: 'Ensure the security of your blockchain solutions with our comprehensive blockchain security services. We implement robust security measures to protect your data and transactions from threats.',
//       tags: ['BlockchainSecurity'],
//     },
//     {
//       image: {
//         src: '/assets/images/project/13.png',
//         alt: 'Blockchain Maintenance and Support',
//       },
//       title: 'Blockchain Maintenance and Support',
//       description: 'Ensure the smooth operation of your blockchain solutions with our maintenance and support services. We provide ongoing support to keep your blockchain systems updated, secure, and running efficiently.',
//       tags: ['BlockchainMaintenanceandSupport'],
//     },
//     {
//       image: {
//         src: '/assets/images/project/13.png',
//         alt: 'Cryptocurrency Development',
//       },
//       title: 'Cryptocurrency Development',
//       description: 'Develop custom cryptocurrencies tailored to your business needs. Our cryptocurrency solutions enable secure and efficient digital transactions.',
//       tags: ['CryptocurrencyDevelopment'],
//     },
//     {
//       image: {
//         src: '/assets/images/project/13.png',
//         alt: 'ICO and STO Development',
//       },
//       title: 'ICO and STO Development',
//       description: 'Launch successful Initial Coin Offerings (ICO) and Security Token Offerings (STO) with our end-to-end development services. We help you raise funds and attract investors.',
//       tags: ['ICOandSTODevelopment'],
//     },
//   ],
// };
export const itServices = {
    cards: [
        {
            icon: <Icon1 />,
            title: 'Custom Software Development',
            description:
                'Create bespoke software solutions that enhance your business operations and deliver tangible results. Our custom development services ensure your software solutions align perfectly with your business needs.',
        },
        {
            icon: <Icon1 />,
            title: 'IT Consulting',
            description:
                'Receive expert guidance on IT strategy, technology selection, and implementation. Our consulting services help you optimize your IT investments and achieve your business goals.',
        },
        {
            icon: <Icon1 />,
            title: 'IT Support and Maintenance',
            description:
                'Ensure the smooth operation of your IT systems with our comprehensive support and maintenance services. We provide ongoing support to keep your IT infrastructure updated, secure, and running efficiently.',
        },
        {
            icon: <Icon1 />,
            title: 'Infrastructure Management',
            description:
                'Manage your IT infrastructure effectively with our infrastructure management services. We ensure your systems are reliable, scalable, and secure.',
        },
        {
            icon: <Icon1 />,
            title: 'Cloud Services',
            description:
                'Leverage our cloud services to enhance your business agility and reduce operational costs. Our cloud solutions include cloud migration, management, and security.',
        },
        {
            icon: <Icon1 />,
            title: 'Data Analytics',
            description:
                'Implement data analytics solutions that transform your data into actionable insights. Our solutions help you make informed decisions and improve operational efficiency.',
        },
        {
            icon: <Icon1 />,
            title: 'Cybersecurity Services',
            description:
                'Ensure the security of your IT systems with our comprehensive cybersecurity services. We implement robust security measures to protect your data and systems from threats.',
        },
        {
            icon: <Icon1 />,
            title: 'Application Development',
            description:
                'Develop custom applications tailored to your business needs. Our application development services enhance your digital presence and drive business growth.',
        },
        {
            icon: <Icon1 />,
            title: 'Digital Transformation',
            description:
                'Transform your business operations with our digital transformation services. We leverage advanced technologies to enhance your business processes and improve efficiency.',
        },
    ],
}

export type Post = SoftwareDevelopmentPost | StandardPost;

export const ItSolutions: SectionHeadingWithoutStylingProps = {

    title: 'IT Outsourcing Solutions We Offer',
    description: 'Our expertise in IT outsourcing spans a wide range of solutions tailored to fit every unique business need. Whether developing new applications or enhancing existing systems, our professionals ensure the highest quality and performance. Explore some of our exceptional solutions:'

}

export const itCategories = [
    {
        name: 'Managed IT Services',
        posts: [
            {
                id: 1,
                heading: 'Managed IT Services',
                titleone:
                    'Ensure the smooth operation of your IT systems with our managed IT services. We provide comprehensive support and management to keep your IT infrastructure running efficiently.',
                imageUrl: 'assets/images/landing/software/1.png',
            } as SoftwareDevelopmentPost,
        ],
    },
    {
        name: 'IT Helpdesk Services',
        posts: [
            {
                id: 1,
                heading: 'IT Helpdesk Services',
                titleone:
                    'Provide your employees with reliable IT support through our IT helpdesk services. We offer timely and effective solutions to resolve IT issues and enhance productivity.',
                imageUrl: 'assets/images/landing/software/1.png',
            },
        ] as StandardPost[],
    },
    {
        name: 'Network Management',
        posts: [
            {
                id: 1,
                heading: 'Network Management',
                titleone:
                    'Manage your network infrastructure effectively with our network management services. We ensure your network is reliable, scalable, and secure.',
                imageUrl: 'assets/images/landing/software/1.png',
            },
        ] as StandardPost[],
    },
    {
        name: 'Cloud Migration',
        posts: [
            {
                id: 1,
                heading: 'Cloud Migration',
                titleone:
                    'Transition to the cloud seamlessly with our cloud migration services. We ensure a smooth and secure migration process with minimal disruption to your business operations.',
                imageUrl: 'assets/images/landing/software/1.png',
            },
        ] as StandardPost[],
    },
    {
        name: 'Disaster Recovery',
        posts: [
            {
                id: 1,
                heading: 'Disaster Recovery',
                titleone:
                    'Protect your business from data loss and downtime with our disaster recovery solutions. We implement robust backup and recovery strategies to ensure business continuity.',
                imageUrl: 'assets/images/landing/software/1.png',
            },
        ] as StandardPost[],
    },
    {
        name: 'Virtualization Services',
        posts: [
            {
                id: 1,
                heading: 'Virtualization Services',
                titleone:
                    'Optimize your IT infrastructure with our virtualization services. We enable efficient resource utilization and improve system performance through virtualization.',
                imageUrl: 'assets/images/landing/software/1.png',
            },
        ] as StandardPost[],
    },
    {
        name: 'IT Staffing',
        posts: [
            {
                id: 1,
                heading: 'IT Staffing',
                titleone:
                    'Augment your team with our IT staffing services. We provide skilled professionals to meet your short-term and long-term IT needs.',
                imageUrl: 'assets/images/landing/software/1.png',
            },
        ] as StandardPost[],
    },
    {
        name: 'Business Process Outsourcing',
        posts: [
            {
                id: 1,
                heading: 'Business Process Outsourcing',
                titleone:
                    'Streamline your business processes with our business process outsourcing services. We handle non-core activities, allowing you to focus on your core business functions.',
                imageUrl: 'assets/images/landing/software/1.png',
            },
        ] as StandardPost[],
    },
    {
        name: 'Technical Support',
        posts: [
            {
                id: 1,
                heading: 'Technical Support',
                titleone:
                    'Provide your customers with exceptional technical support through our technical support services. We offer timely and effective solutions to resolve technical issues.',
                imageUrl: 'assets/images/landing/software/1.png',
            },
        ] as StandardPost[],
    },
    {
        name: 'IT Training',
        posts: [
            {
                id: 1,
                heading: 'IT Training',
                titleone:
                    'Enhance your team\'s IT skills with our IT training services. We provide comprehensive training programs to keep your team updated with the latest technologies and best practices.',
                imageUrl: 'assets/images/landing/software/1.png',
            },
        ] as StandardPost[],
    },
];




function Icon3() {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 65 65"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M32.5 62.9679C32.0697 62.9694 31.6501 62.8343 31.3016 62.5819L25.6953 58.5194C20.2588 54.5543 15.8343 49.3626 12.7813 43.3661C9.72834 37.3696 8.13304 30.7374 8.125 24.0085V12.1866C8.12518 11.7692 8.25397 11.3619 8.49385 11.0203C8.73373 10.6786 9.07304 10.4192 9.46562 10.2773L31.8094 2.15226C32.2557 1.99091 32.7443 1.99091 33.1906 2.15226L55.5344 10.2773C55.927 10.4192 56.2663 10.6786 56.5061 11.0203C56.746 11.3619 56.8748 11.7692 56.875 12.1866V24.0085C56.8702 30.7409 55.2764 37.377 52.2233 43.3773C49.1702 49.3776 44.744 54.5726 39.3047 58.5398L33.6984 62.6023C33.3475 62.8474 32.928 62.9753 32.5 62.9679ZM12.1875 13.6085V24.0085C12.2013 30.0907 13.6464 36.0842 16.4058 41.5044C19.1653 46.9245 23.1617 51.6191 28.0719 55.2085L32.5 58.4179L36.9281 55.2085C41.8383 51.6191 45.8347 46.9245 48.5942 41.5044C51.3536 36.0842 52.7987 30.0907 52.8125 24.0085V13.6085L32.5 6.21476L12.1875 13.6085Z" />
            <path d="M31.3016 52.5288L30.4688 51.9194C26.0667 48.7174 22.4839 44.52 20.0129 39.6697C17.5418 34.8194 16.2525 29.4536 16.25 24.0101V17.9163C16.2502 17.4989 16.379 17.0916 16.6188 16.75C16.8587 16.4083 17.198 16.1489 17.5906 16.0069L31.8094 10.8476C32.2557 10.6862 32.7443 10.6862 33.1906 10.8476L47.4094 16.0069C47.7955 16.1465 48.1303 16.3997 48.3696 16.7333C48.609 17.0669 48.7416 17.4652 48.75 17.8757V23.9694C48.7475 29.4129 47.4582 34.7787 44.9871 39.629C42.5161 44.4794 38.9333 48.6768 34.5312 51.8788L33.6984 52.4882C33.3549 52.7483 32.9375 52.8925 32.5066 52.8998C32.0758 52.9071 31.6537 52.7772 31.3016 52.5288ZM20.3125 19.2976V24.0101C20.3219 28.7385 21.4273 33.4004 23.542 37.6297C25.6566 41.859 28.7229 45.5405 32.5 48.3851C36.2771 45.5405 39.3434 41.859 41.458 37.6297C43.5727 33.4004 44.6781 28.7385 44.6875 24.0101V19.2976L32.5 14.8694L20.3125 19.2976Z" />
        </svg>
    );
}

function Icon4() {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 66 65"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M28.363 62.8054C27.9395 62.6241 27.5901 62.3042 27.3724 61.8982C27.1546 61.4922 27.0813 61.0242 27.1646 60.5711L30.7802 40.6242H12.9052C12.5322 40.625 12.1662 40.523 11.8473 40.3295C11.5284 40.1361 11.269 39.8585 11.0974 39.5273C10.9402 39.2062 10.8706 38.8492 10.8956 38.4926C10.9206 38.1359 11.0392 37.7922 11.2396 37.4961L35.6146 2.96481C35.8835 2.58598 36.2742 2.31079 36.7214 2.18511C37.1687 2.05943 37.6455 2.09087 38.0724 2.27418C38.4881 2.44537 38.8352 2.74962 39.0594 3.13925C39.2837 3.52889 39.3723 3.9819 39.3115 4.42731L35.6552 24.3742H53.5302C53.9032 24.3734 54.2692 24.4754 54.5881 24.6688C54.907 24.8623 55.1664 25.1399 55.338 25.4711C55.4952 25.7922 55.5648 26.1491 55.5398 26.5058C55.5149 26.8624 55.3962 27.2062 55.1958 27.5023L30.8208 62.0336C30.5636 62.4266 30.1781 62.7182 29.7299 62.859C29.2818 62.9997 28.7988 62.9808 28.363 62.8054ZM16.8255 36.5617H33.2177C33.5161 36.5612 33.811 36.6265 34.0813 36.7529C34.3516 36.8792 34.5908 37.0636 34.7818 37.2929C34.9703 37.5225 35.1063 37.7906 35.18 38.0784C35.2537 38.3662 35.2634 38.6666 35.2083 38.9586L32.7911 52.2429L49.6099 28.4367H33.2177C32.9193 28.4372 32.6244 28.3719 32.3541 28.2455C32.0838 28.1191 31.8446 27.9347 31.6536 27.7054C31.4651 27.4759 31.3291 27.2078 31.2554 26.92C31.1817 26.6322 31.1721 26.3317 31.2271 26.0398L33.6443 12.7554L16.8255 36.5617Z" />
        </svg>
    );
}

function Icon5() {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 66 65"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M61.6562 10.1562H4.78125C4.24253 10.1562 3.72587 10.3703 3.34494 10.7512C2.96401 11.1321 2.75 11.6488 2.75 12.1875V52.8125C2.75 53.3512 2.96401 53.8679 3.34494 54.2488C3.72587 54.6297 4.24253 54.8438 4.78125 54.8438H61.6562C62.195 54.8438 62.7116 54.6297 63.0926 54.2488C63.4735 53.8679 63.6875 53.3512 63.6875 52.8125V12.1875C63.6875 11.6488 63.4735 11.1321 63.0926 10.7512C62.7116 10.3703 62.195 10.1562 61.6562 10.1562ZM59.625 50.7812H6.8125V14.2188H59.625V50.7812Z" />
            <path d="M14.5507 45.8656L23.0617 33.9624L31.5726 45.8656C31.7161 46.1078 31.9084 46.3176 32.1373 46.4816C32.3661 46.6456 32.6266 46.7602 32.9022 46.8182C33.1777 46.8762 33.4623 46.8762 33.7379 46.8183C34.0134 46.7605 34.274 46.6459 34.5029 46.482C34.7318 46.3181 34.9242 46.1083 35.0677 45.8661C35.2113 45.6239 35.3029 45.3544 35.3368 45.0749C35.3707 44.7954 35.3461 44.5118 35.2646 44.2423C35.183 43.9728 35.0464 43.7232 34.8632 43.5093L31.857 39.2843L39.3117 29.7171L51.9257 45.9671C52.0813 46.1966 52.2823 46.3919 52.5162 46.5407C52.7502 46.6896 53.0121 46.7891 53.2859 46.8329C53.5597 46.8767 53.8396 46.864 54.1083 46.7956C54.377 46.7271 54.6289 46.6044 54.8484 46.4349C55.0678 46.2654 55.2503 46.0528 55.3845 45.8102C55.5187 45.5675 55.6018 45.2999 55.6286 45.024C55.6555 44.748 55.6256 44.4694 55.5407 44.2054C55.4558 43.9414 55.3178 43.6976 55.1351 43.489L40.9163 25.2078C40.7265 24.9631 40.4832 24.7651 40.205 24.6289C39.9269 24.4927 39.6213 24.4219 39.3117 24.4219C39.002 24.4219 38.6964 24.4927 38.4183 24.6289C38.1401 24.7651 37.8968 24.9631 37.707 25.2078L29.3992 35.8921L24.707 29.3312C24.5186 29.0711 24.2713 28.8593 23.9853 28.7133C23.6993 28.5673 23.3828 28.4911 23.0617 28.4911C22.7405 28.4911 22.424 28.5673 22.138 28.7133C21.852 28.8593 21.6047 29.0711 21.4163 29.3312L11.2601 43.5499C11.0011 43.9873 10.9154 44.5058 11.0201 45.0032C11.1247 45.5006 11.412 45.9406 11.8252 46.2366C12.2385 46.5325 12.7477 46.6627 13.2522 46.6015C13.7568 46.5404 14.2201 46.2923 14.5507 45.9062V45.8656Z" />
            <path d="M29.1562 24.375C30.2781 24.375 31.1875 23.4656 31.1875 22.3438C31.1875 21.2219 30.2781 20.3125 29.1562 20.3125C28.0344 20.3125 27.125 21.2219 27.125 22.3438C27.125 23.4656 28.0344 24.375 29.1562 24.375Z" />
        </svg>
    );
}

function Icon6() {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 65 65"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M39.3237 62.805L32.4987 59.9409L25.6737 62.805C25.2561 62.9821 24.7912 63.0144 24.3531 62.8966C23.9151 62.7788 23.529 62.5177 23.2566 62.155L18.7878 56.2644L11.4347 55.33C10.9853 55.2745 10.5673 55.0705 10.2471 54.7503C9.92697 54.4302 9.72295 54.0122 9.6675 53.5628L8.73312 46.2097L2.8425 41.7409C2.47979 41.4685 2.21874 41.0824 2.10093 40.6444C1.98313 40.2063 2.01537 39.7414 2.1925 39.3237L5.05656 32.4987L2.1925 25.6737C2.01537 25.2561 1.98313 24.7912 2.10093 24.3531C2.21874 23.9151 2.47979 23.529 2.8425 23.2566L8.73312 18.7878L9.6675 11.4347C9.72295 10.9853 9.92697 10.5673 10.2471 10.2471C10.5673 9.92697 10.9853 9.72295 11.4347 9.6675L18.7878 8.73312L23.2566 2.8425C23.529 2.47979 23.9151 2.21874 24.3531 2.10093C24.7912 1.98313 25.2561 2.01537 25.6737 2.1925L32.4987 5.05656L39.3237 2.1925C39.7414 2.01537 40.2063 1.98313 40.6444 2.10093C41.0824 2.21874 41.4685 2.47979 41.7409 2.8425L46.2097 8.73312L53.5628 9.6675C54.0122 9.72295 54.4302 9.92697 54.7503 10.2471C55.0705 10.5673 55.2745 10.9853 55.33 11.4347L56.2644 18.7878L62.155 23.2566C62.5177 23.529 62.7788 23.9151 62.8966 24.3531C63.0144 24.7912 62.9821 25.2561 62.805 25.6737L59.9409 32.4987L62.805 39.3237C62.9821 39.7414 63.0144 40.2063 62.8966 40.6444C62.7788 41.0824 62.5177 41.4685 62.155 41.7409L56.2644 46.2097L55.33 53.5628C55.2745 54.0122 55.0705 54.4302 54.7503 54.7503C54.4302 55.0705 54.0122 55.2745 53.5628 55.33L46.2097 56.2644L41.7409 62.155C41.4685 62.5177 41.0824 62.7788 40.6444 62.8966C40.2063 63.0144 39.7414 62.9821 39.3237 62.805ZM33.23 55.8581L39.3237 58.4581L43.3862 53.1159C43.5508 52.9037 43.7558 52.7262 43.9894 52.5937C44.223 52.4612 44.4806 52.3764 44.7472 52.3441L51.3691 51.4909L52.2222 44.8691C52.2545 44.6024 52.3393 44.3449 52.4718 44.1113C52.6043 43.8777 52.7818 43.6727 52.9941 43.5081L58.3362 39.4456L55.7362 33.3519C55.5328 32.8433 55.5328 32.276 55.7362 31.7675L58.3362 25.6737L52.9941 21.6112C52.7818 21.4467 52.6043 21.2417 52.4718 21.0081C52.3393 20.7745 52.2545 20.5169 52.2222 20.2503L51.3691 13.6284L44.7472 12.7753C44.4806 12.743 44.223 12.6582 43.9894 12.5257C43.7558 12.3932 43.5508 12.2157 43.3862 12.0034L39.3237 6.66125L33.23 9.26125C32.7215 9.46468 32.1542 9.46468 31.6456 9.26125L25.5519 6.66125L21.4894 12.0034C21.3248 12.2157 21.1198 12.3932 20.8862 12.5257C20.6526 12.6582 20.395 12.743 20.1284 12.7753L13.5066 13.6284L12.6534 20.1284C12.6211 20.395 12.5363 20.6526 12.4038 20.8862C12.2713 21.1198 12.0938 21.3248 11.8816 21.4894L6.53937 25.5519L9.13937 31.6456C9.34281 32.1542 9.34281 32.7215 9.13937 33.23L6.53937 39.3237L11.8816 43.3862C12.0938 43.5508 12.2713 43.7558 12.4038 43.9894C12.5363 44.223 12.6211 44.4806 12.6534 44.7472L13.5066 51.3691L20.1284 52.2222C20.395 52.2545 20.6526 52.3393 20.8862 52.4718C21.1198 52.6043 21.3248 52.7818 21.4894 52.9941L25.5519 58.3362L31.6456 55.7362C31.9142 55.6463 32.198 55.6107 32.4805 55.6317C32.763 55.6526 33.0385 55.7296 33.2909 55.8581H33.23Z" />
            <path d="M28.6816 46.7192C28.3436 46.7208 28.0106 46.638 27.7126 46.4784C27.4147 46.3188 27.1613 46.0874 26.9754 45.8051L18.6066 33.0692C18.4599 32.8451 18.3588 32.5943 18.309 32.3312C18.2592 32.068 18.2617 31.7976 18.3164 31.5354C18.3711 31.2733 18.4769 31.0244 18.6278 30.8031C18.7787 30.5818 18.9716 30.3924 19.1957 30.2457C19.6482 29.9494 20.1999 29.845 20.7294 29.9555C20.9916 30.0102 21.2404 30.116 21.4617 30.2669C21.683 30.4177 21.8724 30.6107 22.0191 30.8348L28.6816 40.991L42.9004 19.1957C43.1967 18.7432 43.6606 18.4269 44.1901 18.3164C44.7196 18.206 45.2713 18.3104 45.7238 18.6067C46.1764 18.903 46.4927 19.3669 46.6031 19.8964C46.7136 20.4259 46.6092 20.9776 46.3129 21.4301L30.4691 45.8051C30.2759 46.0993 30.0096 46.3382 29.6962 46.4984C29.3829 46.6586 29.0333 46.7347 28.6816 46.7192Z" />
        </svg>
    );
}
export const itTech: SectionHeadingWithoutStylingProps = {
    title: "Technology Stack Our IT Professionals Use",
    description: "Our IT professionals utilize the latest tools and technologies to deliver comprehensive and reliable solutions, ensuring your IT systems meet the highest standards of quality."
}
export const itSectionData: ServiceSectionPropss = {
    services: [
        {
            icon: <Icon1 />,
            title: 'Healthcare',
            description:
                'Develop IT solutions that enhance patient care, streamline operations, and improve data security.',
        },
        {
            icon: <Icon1 />,
            title: 'Financial Services',
            description:
                'Implement IT solutions that enhance transaction processing, transparency, and security in financial services.',
        },
        {
            icon: <Icon1 />,
            title: 'Supply Chain & Logistics',
            description:
                'Create IT solutions that improve supply chain transparency, traceability, and efficiency.',
        },
        {
            icon: <Icon1 />,
            title: 'Real Estate',
            description:
                'Develop IT solutions that streamline property transactions and enhance property management.',
        },
        {
            icon: <Icon1 />,
            title: 'Retail',
            description:
                'Implement IT solutions that enhance customer experience, streamline operations, and boost sales.',
        },
        {
            icon: <Icon1 />,
            title: 'Manufacturing',
            description:
                'Create IT solutions that optimize manufacturing processes, improve productivity, and reduce costs.',
        },
        {
            icon: <Icon1 />,
            title: 'Energy',
            description:
                'Develop IT solutions that optimize energy consumption, improve grid management, and enhance sustainability.',
        },
        {
            icon: <Icon1 />,
            title: 'Education',
            description:
                'Implement IT solutions that enhance learning experiences, streamline operations, and improve educational outcomes.',
        },
        {
            icon: <Icon1 />,
            title: 'Telecommunications',
            description:
                'Create IT solutions that enhance connectivity, streamline operations, and improve customer experience.',
        },
        {
            icon: <Icon1 />,
            title: 'Government',
            description:
                'Develop IT solutions that enhance public services, streamline operations, and improve data security.',
        },
    ],
};

export const WhatMakesIt: WhatMakesProps = {
    sectionHeading2: {
        title: 'What Makes Us a Top IT Outsourcing Company',
        description:
            'Techares has been a leading IT outsourcing company for over 10 years, utilizing advanced technologies to deliver innovative solutions for clients globally. Our team of experts excels in leveraging technology to drive business success across various industry verticals. We provide business-driven and growth-centric IT outsourcing services with faster turnaround times and better ROI for businesses. Here’s why you should choose us:',
    },
    aboutUsPoints: [
        'Highly Experienced Team',
        'Secure Codebase',
        '150+ Trusted Clients',
        'NDA Signed',
        'Agile Development Methodology',
        '10x Better Communication',
        '100% Quality Assurance',
        'Pre/Post Deployment Support',
    ],
    images: {
        image1: {
            src: '/assets/images/landing/whychoose.png',
            alt: 'about one',
            width: 750,
            height: 500,
        },
        image2: {
            src: '/assets/images/about/about-2.png',
            alt: 'about two',
            width: 312,
            height: 304,
        },
        image3: {
            src: '/assets/images/about/about-3.png',
            alt: 'about three',
            width: 250,
            height: 265,
        },
        image4: {
            src: '/assets/images/about/about-4.png',
            alt: 'about four',
            width: 250,
            height: 265,
        },
    },
};

export const itIndustry: SectionHeadingWithoutStylingProps = {
    title: "Industries We Serve",
    description: "As a top IT outsourcing services provider, we deliver comprehensive solutions tailored to meet specific industry needs. Enhance your business capabilities with our expertise and solutions to overcome industry challenges. We serve various industry verticals, including:"
}

export const imageIt: ImageLayout = {
    row1: ['/assets/images/landing/whychoose.png', '/assets/images/landing/whychoose.png', '/assets/images/landing/whychoose.png'], // First row (3 images)
    row2: ['/assets/images/landing/whychoose.png', '/assets/images/landing/whychoose.png'], // Second row (2 images)
    row3: ['/assets/images/landing/whychoose.png'], // Third row (1 image)
};