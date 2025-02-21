'use client';

import { contactSectionData } from '@/data/contact-section/v1';
import { blurDataUrl } from '@/src/common-types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/src/components/dialog';
import { Form } from '@/src/sections/contact/v1/form';
import { BREAKPOINTS } from '@/src/themes/interface';
import Image from 'next/image';
import { useState } from 'react';

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
      <DialogContent className="h-fit max-w-5xl border-0 bg-transparent p-0">
        <div className="grid grid-cols-1 overflow-hidden [clip-path:polygon(0%_0%,100%_0%,98%_98%,2%_100%)] md:grid-cols-2">
          {/* Left side - Image */}
          <div className="relative min-h-[300px] md:min-h-[500px]">
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
          <div className="bg-black p-8">
            <DialogHeader className="mb-6">
              <div className="mb-2 font-medium text-primary-light">
                TALK TO US
              </div>
              <DialogTitle className="mb-2 text-xl  font-bold">
                Unleash the Power of Technology
              </DialogTitle>
              <DialogDescription className="mb-6 text-gray-400">
                Get in touch with us to discuss how we can help transform your
                business with cutting-edge technology solutions.
              </DialogDescription>
            </DialogHeader>
            <Form />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
