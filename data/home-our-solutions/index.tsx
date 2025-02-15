export interface RoadmapStep {
    id: number;
    title: string;
    content: string;
}

export interface RoadmapSection {
    id: number;
    title: string;
    desc: string;
    steps: RoadmapStep[];
}

export const roadmapData: RoadmapSection[] = [
    {
        id: 1,
        title: "On-Demand Applications",
        desc: "Quick and customizable software solutions designed for businesses requiring immediate deployment and scalability. Our on-demand applications cater to a variety of industries with a focus on user-centric designs and seamless functionality.",
        steps: [
            {
                id: 1,
                title: "Food Delivery Platforms",
                content: "Enable restaurants and food businesses to efficiently manage orders, track deliveries, and enhance customer satisfaction."
            },
            {
                id: 2,
                title: "Ride-Sharing Applications",
                content: "Develop apps for transportation services with real-time tracking, automated bookings, and secure payment integrations."
            },
            {
                id: 3,
                title: "Healthcare Management Apps",
                content: "Provide patients and healthcare professionals with tools for appointment scheduling, teleconsultations, and medical record management."
            },
            {
                id: 4,
                title: "E-Learning Platforms",
                content: "Build interactive platforms that support online classes, course management, and real-time student assessments."
            },
            {
                id: 5,
                title: "Home Services Solutions",
                content: "Design apps for on-demand home repair, cleaning, and maintenance services, offering easy scheduling and secure payments."
            }
        ]
    },
    {
        id: 2,
        title: "ERP Systems",
        desc: "Enterprise Resource Planning solutions help organizations unify their operations, increase efficiency, and maintain real-time visibility into all business processes, from supply chain to human resources.",
        steps: [
            {
                id: 1,
                title: "Inventory Management",
                content: "Automate stock tracking, reduce waste, and ensure product availability to meet customer demand efficiently."
            },
            {
                id: 2,
                title: "Financial Management",
                content: "Streamline accounting processes, monitor budgets, and generate financial reports for better fiscal oversight."
            },
            {
                id: 3,
                title: "HR and Payroll Systems",
                content: "Manage employee records, attendance, and payroll in a unified platform for operational ease."
            },
            {
                id: 4,
                title: "Customer Relationship Management (CRM)",
                content: "Integrate CRM functionalities within ERP systems to manage customer data, sales pipelines, and service requests."
            },
            {
                id: 5,
                title: "Production Planning",
                content: "Optimize manufacturing schedules and monitor resource allocation to meet production targets effectively."
            }

        ]
    },
    {
        id: 3,
        title: "Data Analytics",
        desc: "Transform raw data into meaningful insights that drive business decisions and foster growth. Our analytics solutions provide actionable intelligence to stay competitive in dynamic markets.",
        steps: [
            {
                id: 1,
                title: "Customer Behavior Analysis",
                content: "Understand purchase patterns, preferences, and trends to improve customer engagement strategies."
            },
            {
                id: 2,
                title: "Sales Performance Tracking",
                content: "Monitor sales team effectiveness and identify areas for improvement to boost revenue."
            },
            {
                id: 3,
                title: "Operational Analytics",
                content: "Analyze internal processes to identify inefficiencies and optimize workflows for better productivity."
            },
            {
                id: 4,
                title: "Predictive Analytics",
                content: "Forecast future trends and market demands using advanced algorithms and historical data."
            },
            {
                id: 5,
                title: "Market Segmentation",
                content: "Segment your audience based on behavior, geography, or demographics to create targeted marketing campaigns."
            }
        ]
    }
];

