'use client';
import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import Image from 'next/image';
import logoLight from 'public/assets/images/brand/logo.png';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function ThankYou() {
 const router = useRouter();

 useEffect(() => {
  // Set a timer for 15 seconds to trigger the redirect
  const timer = setTimeout(() => {
   // Redirect to the desired page (e.g., "/home")
   router.push('/');
  }, 10000); // 15000 milliseconds = 15 seconds

  // Cleanup timer if the component unmounts before the time is up
  return () => clearTimeout(timer);
 }, [router]);
 return (
  <section className="relative flex  w-screen h-screen items-center overflow-hidden bg-white py-[3.75rem]" style={{ backgroundImage: `url(/assets/images/pattern.png)` }}>
   <Container>
    <div className="mx-auto max-w-[800px] flex justify-center items-center flex-col text-center z-10 gap-12">
     <Image
      src={logoLight.src}
      width={120}
      height={120}
      placeholder="blur"
      blurDataURL={logoLight.blurDataURL}
      alt={`${process.env.NEXT_PUBLIC_SITE_NAME} brand logo`}
      sizes="100vw"

      priority
     />
     <section>
      <h1 className="lg:text-4xl text-2xl font-bold leading-[1.11] text-zinc-100">
       Thank You
      </h1>
      <p className="mt-6 text-md font-medium leading-[1.4] text-primary ">
       We have Received Your enquiry
      </p>
      <p className="mt-6 text-md font-medium leading-[1.4] text-zinc-100 ">
       Our Business experts will contact you soon
      </p>
      <div className="mt-8 lg:mt-10 pt-4">
       <Button asChild className='rounded-40'>
        <CustomLink href="/" ><p className='px-6'>Home</p></CustomLink>
       </Button>
      </div>
     </section>
    </div>
   </Container>
  </section>
 );
}
