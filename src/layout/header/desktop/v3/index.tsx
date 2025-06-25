import { Button } from '@/src/components/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/src/components/ui/accordion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/src/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/src/components/ui/sheet';
import { BrandLogo } from '@/src/layout/brand-logo';
import ContactUsDialog from '@/src/sections/contact/v3';
import { cn } from '@/utils/utils';
import { Menu } from 'lucide-react';
import Image from 'next/image';

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: '/',
    src: '/assets/images/brand/logo-light.webp',
    alt: 'logo',
    title: 'Shadcnblocks.com',
  },
  menu = [
    { title: 'White Label', url: '#' },
    {
      title: 'Services',
      url: '#',
      items: [
        {
          title: 'Ecommerce',
          description: 'Ecommerce Website Development',
          // icon: <Book className="size-5 shrink-0" />,
          url: '/services/ecommerce',
        },
        {
          title: 'Food Delivery App',
          description: 'Food Delivery App Development',
          // icon: <Trees className="size-5 shrink-0" />,
          url: '/services/food-delivery',
        },
        {
          title: 'Taxi Booking App',
          description: 'Taxi Booking App Development',
          // icon: <Sunset className="size-5 shrink-0" />,
          url: '/services/taxi-booking',
        },
        {
          title: 'Fantasy Sports App',
          description: 'Fantasy Sports App Development',
          // icon: <Zap className="size-5 shrink-0" />,
          url: '/services/fantasy-sports',
        },
        {
          title: 'Transport and Logistics App',
          description: 'Transport and Logistics App Development',
          // icon: <Zap className="size-5 shrink-0" />,
          url: '/services/transport-and-logistic',
        },
      ],
    },
    {
      title: 'Expertise',
      url: '#',
    },
    {
      title: 'Insights',
      url: '#',
    },
    {
      title: 'About',
      url: '#',
    },
  ],
}: Navbar1Props) => {
  return (
    <section className="sticky top-0 z-111 w-full bg-transparent  sm:z-20 menu-bg-blur">
      <div className="bg-transparent py-3">
        {/* Desktop Menu */}
        <nav className="hidden justify-between bg-transparent lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <div className="ml-3 flex-none">
              <BrandLogo />
            </div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 transform">
            <NavigationMenu>
              <NavigationMenuList className="bg-transparent text-zinc-950 dark:dark:text-zinc-50">
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex gap-2">
            <ContactUsDialog>
              <Button className={cn('mr-5 rounded-full')}>
                <span>{'Get in Touch'}</span>
              </Button>
            </ContactUsDialog>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <Image
                src={logo.src}
                width={180}
                height={45}
                className="max-h-8"
                alt={logo.alt}
              />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button>
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto bg-zinc-50 text-zinc-50 dark:bg-zinc-950 dark:text-zinc-950">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <Image
                        src={logo.src}
                        width={180}
                        height={45}
                        className="max-h-8"
                        alt={logo.alt}
                      />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <ContactUsDialog>
                      <Button className={cn('mr-5 rounded-full')}>
                        <span>{'Get in Touch'}</span>
                      </Button>
                    </ContactUsDialog>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem className="bg-transparent" key={item.title}>
        <NavigationMenuTrigger className="bg-transparent text-zinc-950 transition-colors dark:text-zinc-50">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group relative flex h-full items-center justify-center px-8 py-2 text-center text-sm font-medium text-black transition-colors  hover:text-primary dark:text-white hover:dark:text-primary"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-0 text-md font-semibold text-zinc-950 hover:no-underline dark:text-zinc-50">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a
      key={item.title}
      href={item.url}
      className="text-md font-semibold text-zinc-950 dark:text-zinc-50"
    >
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-primary"
      href={item.url}
    >
      <div className="text-zinc-950 dark:text-zinc-50">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-zinc-500 dark:text-zinc-400">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar1 };
