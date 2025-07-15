import type { HeaderProps } from '@/src/layout/header/desktop/v1';

export const menuItemsProps: HeaderProps['menuItems'] = [
  {
    title: 'Services',
    url: '/services',
  },
  {
    title: 'Expertises',
    url: '/expertises',
  },
  {
    title: 'White Label',
    url: '/white-lable',
  },
  {
    title: 'Insights',
    url: '/insights',
    items: [
      {
        title: 'blog',
        url: '/insights',
      },
      {
        title: 'Live',
        url: '/insights/live',
      },
      {
        title: 'Demo',
        url: '/insights/demo',
      },
      {
        title: 'Case',
        url: '/insights/case',
      },
      {
        title: 'Studies',
        url: '/insights/studies',
      },
      {
        title: 'Events',
        url: '/insights/events',
      },
      {
        title: 'News',
        url: '/insights/news',
      },
    ],
  },
  {
    title: 'About',
    url: '/about',
  },
  // {
  //  label: 'Get in Touch',
  //  href: '/contact',
  // },
];
