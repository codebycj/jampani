import { getAllWork, getAllWriting } from "@/lib/content";
import type { MetadataRoute } from "next";

const siteUrl = "https://jampani.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const work = getAllWork().map((p) => ({
    url: `${siteUrl}/work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const writing = getAllWriting().map((p) => ({
    url: `${siteUrl}/writing/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/writing`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    ...work,
    ...writing,
  ];
}
