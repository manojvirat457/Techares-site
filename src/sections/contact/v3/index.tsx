"use client";

import { contactSectionData } from "@/data/contact-section/v1";
import { blurDataUrl } from "@/src/common-types";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/src/components/dialog";
import { Form } from "@/src/sections/contact/v1/form";
import { BREAKPOINTS } from "@/src/themes/interface";
import Image from "next/image";
import { useState } from "react";

export default function ContactUsDialog({ children }: {
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);
    const { image } = contactSectionData;

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="p-0 border-0 bg-transparent max-w-5xl h-fit">
                <div className="grid grid-cols-1 md:grid-cols-2 [clip-path:polygon(0%_0%,100%_0%,98%_98%,2%_100%)] overflow-hidden">
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
                            <div className="text-blue-500 font-medium ">Get a Personalized Quote</div>
                            <DialogTitle className="text-lg font-bold text-white">Let’s Talk Tech</DialogTitle>
                            {/* <DialogDescription className="text-gray-400 mb-6">
        Get in touch with us to discuss how we can help transform your business with cutting-edge technology
        solutions.
       </DialogDescription> */}
                        </DialogHeader>
                        <Form />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
