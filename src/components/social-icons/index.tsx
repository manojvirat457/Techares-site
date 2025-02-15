'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from 'src/components/ui/dropdown-menu';
import { cn } from '@/src/utils/shadcn';
import { footerSectionData } from '@/data/layout/footer/v1';
import { CustomLink } from '../custom-link';

const activeClasses = cn('bg-primary text-white');

export function SocialIconsLeft() {
    const { setTheme, theme } = useTheme();
    const { about } =
        footerSectionData;
    const socialIconClasses = cn(
        'text-base/[1.75] transition-transform duration-350 hover:-translate-y-1 block px-4'
    );
    return (
        <div className="fixed left-2 top-1/2 z-99">

            <div data-aos="fade-up" data-aos-delay="200">
                {about.socialLinks && about.socialLinks.length > 0 && (
                    <nav aria-label="social links">
                        <ul className="flex flex-col items-center space-y-4 py-4 min-h-[50px] rounded-5 bg-primary text-white">
                            {about.socialLinks.map((socialLink, index) => (
                                <li key={index}>
                                    <CustomLink
                                        aria-label={socialLink.href}
                                        className={socialIconClasses}
                                        href={socialLink.href}
                                        openNewTab
                                    >
                                        <span>{socialLink.icon}</span>
                                    </CustomLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
        </div>
    );
}

