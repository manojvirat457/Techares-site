import { Metadata } from "next";

// Optional props for metadata, used in basicMetadata
// Change these to change the metadata for the page
export type MetadataProps = {
 title?: string;
 description?: string;
 keywords?: string;
 localPath?: string;
};

// Return metadata for page
// E.x.:
// export const metadata = basicMetadata();
export function basicMetadata(metadata?: MetadataProps): Metadata {
 const title = 'TechAres | Expert Software Development & IT Solutions for Businesses';
 const description = 'TechAres is a leading software development company offering IT solutions, AI integration, business development, and resource management services to help entrepreneurs scale and succeed.';

 return {
  metadataBase: new URL('https://techares.com/'),
  title: metadata?.title || title,
  description: metadata?.description || description,
  authors: [
   {
    name: "Vijayabaskar",
    url: 'https://www.vijayabaskar.xyz/'
   },
   {
    name: "Techares",
    url: 'https://techares.com/'
   },
  ],
  publisher: 'Techares',
  robots: {
   index: true,
   follow: true,
  },
  keywords: metadata?.keywords ? metadata?.keywords : 'Software development company, IT solutions for businesses, AI integration services, Business development solutions, Resource management software, Custom software development ,Enterprise software solutions, Tech solutions for startups, IT consulting services, Digital transformation services',
  creator: 'Techares',
  applicationName: 'Techares',
  openGraph: {
   title: metadata?.title || title,
   images: ['https://techares.com/assets/images/og/og-image.jpg'],
   description: metadata?.description || description,
   url: `https://techares.com${metadata?.localPath || ''}`,
   type: 'website',
   siteName: 'Techares',
  },
  twitter: {
   site: `https://techares.com${metadata?.localPath || ''}`,
   card: 'summary_large_image',
   title: metadata?.title || title,
   images: ['https://techares.com/assets/images/og/og-image.jpg'],
   description: metadata?.description || description,
  },
 } as Metadata;
}
