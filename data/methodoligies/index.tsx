import { Step } from '@/src/sections/methodolgies'
import { Clock, User2, Wine, Crown, Calendar } from 'lucide-react'

export const steps: Step[] = [
    {
        id: "1",
        number: "01",
        title: "Discovery and Requirement Gathering",
        description: "In-depth analysis of your business needs to set clear, actionable goals.",
        icon: Clock
    },
    {
        id: "2",
        number: "02",
        title: "Planning and Strategy",
        description: "Mapping user journeys and selecting optimal technologies to build the right solutions.",
        icon: User2
    },
    {
        id: "3",
        number: "03",
        title: "Development and Coding",
        description: "Delivering robust, scalable solutions with innovative coding practices.",
        icon: Wine
    },
    {
        id: "4",
        number: "04",
        title: "Testing and Quality Assurance",
        description: "Ensuring flawless performance through rigorous, end-to-end testing.",
        icon: Crown
    },
    {
        id: "5",
        number: "05",
        title: "Deployment and Launch",
        description: "Seamlessly deploying your product, ensuring optimal functionality and readiness for users.",
        icon: Calendar
    }
]

