'use client';

import { Button } from '@/src/components/button';
import { Mail, MessageCircle, Send } from 'lucide-react';
import Link from 'next/link';

export default function SocialIcons() {
  const socials = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="h-5 w-5" />,
      href: 'https://wa.me/your-number',
      bgColor: 'bg-[#25D366] hover:bg-[#128C7E]',
    },
    {
      name: 'Telegram',
      icon: <Send className="h-5 w-5" />,
      href: 'https://t.me/your-username',
      bgColor: 'bg-[#0088cc] hover:bg-[#0077b5]',
    },
    {
      name: 'Skype',
      icon: <MessageCircle className="h-5 w-5" />,
      href: 'skype:your-username?chat',
      bgColor: 'bg-[#00AFF0] hover:bg-[#0078D7]',
    },
    {
      name: 'Email',
      icon: <Mail className="h-5 w-5" />,
      href: 'mailto:your-email@example.com',
      bgColor: 'bg-[#EA4335] hover:bg-[#D93025]',
    },
  ];

  return (
    <div className="fixed left-4 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-3">
      {socials.map((social) => (
        <Link key={social.name} href={social.href}>
          <Button
            className={`rounded-full ${social.bgColor} text-white shadow-lg transition-all duration-300 hover:scale-110`}
            aria-label={`Contact us on ${social.name}`}
          >
            {social.icon}
          </Button>
        </Link>
      ))}
    </div>
  );
}
