import { AboutSectionThreeProps } from "@/src/sections/about/v3";

export const aboutSectionThreeData: AboutSectionThreeProps = {
    images: {
        image1: {
            src: '/assets/images/about/about-1.png',
            alt: 'about one',
            width: 195,
            height: 132,
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
        subtitle: 'Our Team',
        title: (
            <>
                <span>Our </span>
                <span className='dark:text-primary'>Team</span>
            </>
        ),
        description:
            ' Our team consists of highly skilled professionals, including developers, designers, consultants, and project managers, who are passionate about technology and dedicated to delivering exceptional results.We foster a culture of continuous learning and innovation, ensuring our team stays at the forefront of technological advancements.',
    },

};
