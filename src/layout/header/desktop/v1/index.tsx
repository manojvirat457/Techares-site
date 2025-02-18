'use client';

import { LinkProps } from '@/src/common-types';
import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import ContactUsDialog from '@/src/sections/contact/v3';
import { cn } from '@/src/utils/shadcn';
import { headerData } from 'data/layout/header/v1';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa6';
import { BrandLogo } from '../../../brand-logo';
import { useStickyHeader } from '../../utils/use-sticky-header';
import { Navigation } from '../common/navigation';
import { ContactBoxProps } from './contact-box';

interface SubMenu {
  title: string;
  subMenuItems: LinkProps[];
}

export interface HeaderProps {
  contactInfo: ContactBoxProps;
  menuItems: (LinkProps | SubMenu)[];
}

export function Header() {
  const { menuItems } = headerData;
  const isSticky = useStickyHeader(700);

  return (
    <header
      className={cn(
        'left-0 right-0 top-0 z-99 mx-auto hidden w-full py-[26px] lg:block',
        isSticky
          ? 'sticky-header [box-shadow:0px_0px_15px_10px_rgba(20, 0, 255, 0.1)] fixed left-0 top-0 w-full animate-fadeInDown bg-white/90 backdrop-blur-md dark:bg-accent-900/90'
          : 'absolute'
      )}
    >
      <Container isFluid={true}>
        <div className="flex items-center justify-between gap-x-10">
          {/* Brand logo  */}
          <div className="flex-none">
            <BrandLogo />
          </div>

          {/* Navigation  */}
          {menuItems && menuItems.length > 0 && (
            <Navigation menuItems={menuItems} />
          )}

          {/* Contact box  */}
          {/* <ContactBox {...contactInfo} /> */}
          <section className="flex items-center justify-center gap-4">
            <Link
              href="https://web.whatsapp.com/send?phone=9363537370&text=Hi%20there!%20I%20am%20looking%20for%20your%20Services.%20Can%20you%20send%20me%20the%20Product%20Demo%20of%20https%3A%2F%2Fwww.coinsclone.com%2F"
              target="_blank"
            >
              <FaWhatsapp size={30} />
            </Link>
            <ContactUsDialog>
              <>
                <Button className={cn('mr-5 rounded-full')}>
                  <>
                    <span>{'Get in Touch'}</span>
                  </>
                </Button>
              </>
            </ContactUsDialog>
          </section>
        </div>
      </Container>
    </header>
  );
}
