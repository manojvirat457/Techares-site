import { blockchainCategories, BlockchainHeading, BlockchainServiceHeading, blockchainServices, BlockChainServices, blockchainServiceSectionData, blockChainSolutions, blockChainTech, imageBlockChain, IndustryWeServe, WhatMakesBlockChain } from '@/data/blockchain-services';
import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import Tabs from '@/src/sections/blockChain-solution';
import { BlockchainDevelopmentServices } from '@/src/sections/blockChain-service';
import { HeroSection } from '@/src/sections/hero/v3';

import { Metadata } from 'next';
import { BlueTagBanner } from '@/src/sections/cta/tag-banner';
import { IndustrySections } from '@/src/sections/service/Industry-service/Index';
import { WhatMakes } from '@/src/sections/what-makes';
import { HeadingComponent } from '@/src/sections/service-text';
import { ServiceSolutionSection } from '@/src/sections/services-solution';
import FAQSection from '@/src/sections/faq';
import { AboutSectionThree } from '@/src/sections/about/v3';
import { StatisticsSection } from '@/src/sections/statistics/v1';
import { ServiceSection } from '@/src/sections/service/v1';
import { serviceSectionData } from '@/data/service-section/v1/service-list-page';
import { AboutSection as AboutSectionTwo } from '@/src/sections/about/v2';
import { ServiceSection as ServiceSections } from '@/src/sections/service/v2';
import { TeamSection } from '@/src/sections/team/v1';
import { CtaSection } from '@/src/sections/cta/v2';
import { BlogSection } from '@/src/sections/blog/v1';
import { serviceSectionData as serviceSectionData2 } from '@/data/service-section/v2/home-page-2';
import { Hero } from '@/src/sections/Hero-service';



export const metadata: Metadata = {
    title: 'Techlab | Mobile App Development ',
    description: 'Premier Mobile App Development Company',
};


export default function Page() {
    const { sectionHeading, description, images } = BlockChainServices
    const { sectionHeading2, aboutUsPoints } = WhatMakesBlockChain
    const { services } = blockchainServiceSectionData
    const { cards } = blockchainServices
    return (
        <>
            <MainHeader version="1" />
            {/* <HeroSection
                title="Premier Blockchain Development"
                breadcrumbItems={[
                    {
                        label: 'Home',
                        href: '/',
                    },
                    {
                        label: 'Services',
                    },
                ]}
            /> */}
            <Hero />
            {/* <HeadingComponent sectionHeading={BlockchainHeading} />
            <BlockchainDevelopmentServices sectionHeading={sectionHeading} description={description} images={images} />
            <HeadingComponent sectionHeading={BlockchainServiceHeading} />
            <ServiceSolutionSection cards={cards} className='h-72 text-justify' />
            <Tabs blockChainSolutions={blockChainSolutions} categories={blockchainCategories} />
            <BlueTagBanner sectionHeading={blockChainTech} imageLayout={imageBlockChain} />
            <IndustrySections services={services} sectionHeading={IndustryWeServe} />
            <WhatMakes sectionHeading2={sectionHeading2} aboutUsPoints={aboutUsPoints} images={images} /> */}
            <AboutSectionThree images={images} sectionHeading={sectionHeading} />
            <ServiceSection {...serviceSectionData} />
            <TeamSection />
            <StatisticsSection sectionHeading={BlockchainHeading} className="my-[80px]" />
            <ServiceSections className="!pt-0" {...serviceSectionData2} />
            <AboutSectionTwo />
            <CtaSection />
            <FAQSection />
            <BlogSection />
            <Footer />
        </>
    );
}



