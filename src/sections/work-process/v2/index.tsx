import { WorkprocessCardProps } from '../v1/card';
import { TextSlider } from '../v1/text-slider';
import { WorkCardsCaraousl } from '../v1/cards-carousel';
import { whyChooseData } from '@/data/why-choose/v1';
import { ReactElement, ReactNode } from 'react';

export interface whyChooseUsProps {
    cards: WorkprocessCardProps[];
    title: ReactNode | string | ReactElement;
}

export function WhyChooseUs() {
    const { cards, title } = whyChooseData;
    return (
        <section className="section-padding-primary overflow-hidden !pt-0">
            <h2 className="mx-auto max-w-[490px] font-secondary text-xl font-bold capitalize leading-[1.25] text-white md:text-2xl">
                {title}
            </h2>
            <WorkCardsCaraousl cards={cards} />
        </section>
    );
}
