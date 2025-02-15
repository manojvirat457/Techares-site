import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
 // All routes on website
 const routes: MetadataRoute.Sitemap = [
  {
   url: "https://techares.com/",
   lastModified: new Date(),
   priority: 1,
  },
 ];

 return routes;
}
