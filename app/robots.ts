import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
 // DO NOT CHANGE THIS
 return {
  rules: {
   userAgent: '*',
   allow: '/',
   disallow: '/private/',
  },
  sitemap: `https://www.techares.com/sitemap.xml`,
 };
}
