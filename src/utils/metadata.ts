import { Metadata } from 'next';

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
  const title =
    'TechAres | Custom Software, Web & Mobile App Development Company';
  const description =
    'TechAres is a reliable software development company offering custom software, web & mobile app development, blockchain, AI, IoT, ERP, IT consultancy, and digital marketing services. We help businesses streamline operations, boost growth, and innovate with cutting-edge technology solutions.';

  return {
    metadataBase: new URL('https://techares.com/'),
    title: metadata?.title || title,
    description: metadata?.description || description,
    authors: [
      {
        name: 'Vijayabaskar',
        url: 'https://www.vijayabaskar.xyz/',
      },
      {
        name: 'Techares',
        url: 'https://techares.com/',
      },
    ],
    publisher: 'Techares',
    robots: {
      index: true,
      follow: true,
    },
    keywords: metadata?.keywords
      ? metadata?.keywords
      : 'TechAres software development, custom software development company, web development services, mobile app development company, blockchain development solutions, IoT development services, AI & machine learning solutions, IT consultancy services, enterprise software solutions, ERP software development, hire developers for startups, digital marketing for businesses',
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
