'use client';

import Image from 'next/image';
import { useState } from 'react';
import { blurDataUrl } from '@/src/common-types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/src/components/dialog';
import { contactSectionData } from '@/src/data/contact-section/v1';
import { Form } from '@/src/sections/contact/v1/form';
import { BREAKPOINTS } from '@/src/themes/interface';

export default function ContactUsDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const { image } = contactSectionData;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="h-fit max-w-7xl border-0 bg-transparent p-0">
        <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2">
          {/* Left side - Image */}
          <div className="relative min-h-[400px] md:min-h-[600px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes={`(min-width: ${BREAKPOINTS.md}) 60vw, 100vw`}
              placeholder="blur"
              blurDataURL={blurDataUrl}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Right side - Form */}
          <div className="bg-white p-8 dark:bg-black">
            <DialogHeader className="mb-6">
              <div className="mb-2 font-medium text-primary-light">
                TALK TO US
              </div>
              <DialogTitle className="mb-2 text-xl  font-bold">
                Unleash the Power of Technology
              </DialogTitle>
              <DialogDescription className="mb-6 text-gray-600 dark:text-gray-400">
                Get in touch with us to discuss how we can help transform your
                business with cutting-edge technology solutions.
              </DialogDescription>
            </DialogHeader>
            <Form setIsDialogOpen={() => setOpen(false)} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
