import { HeaderProps } from '@/src/layout/header/desktop/v1';

export const menuItemsProps: HeaderProps['menuItems'] = [
 {
  label: 'Services',
  href: '/services'
 },
 {
  label: 'Expertises',
  href: '/expertises'
 },
 {
  label: 'White Label',
  href: '/white-lable'
 },
 {
  label: 'About',
  href: '/about',
 },
 {
  title: 'Insights',
  subMenuItems: [
   {
    label: 'blog',
    href: '/insights',
   },
   {
    label: 'Live',
    href: '/insights/live',
   },
   {
    label: 'Demo',
    href: '/insights/demo',
   },
   {
    label: 'Case',
    href: '/insights/case',
   },
   {
    label: 'Studies',
    href: '/insights/studies',
   },
   {
    label: 'Events',
    href: '/insights/events',
   },
   {
    label: 'News',
    href: '/insights/news',
   },
  ],
 },
 {
  label: 'Get in Touch',
  href: '/contact',
 },
];
