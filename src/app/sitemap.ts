import { MetadataRoute } from "next";
import { locations } from "@/lib/locations";

const BASE_URL = "https://digikings.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const locationEntries: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${BASE_URL}/locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/ai-automation-save-time`,
      lastModified: new Date("2026-05-10"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/website-not-converting`,
      lastModified: new Date("2026-05-05"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/engineer-approach-marketing`,
      lastModified: new Date("2026-04-28"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/ai-automation-bellevue-redmond-businesses`,
      lastModified: new Date("2026-05-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/ai-automation-tacoma-kent-manufacturing`,
      lastModified: new Date("2026-05-12"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/small-business-ai-automation-washington`,
      lastModified: new Date("2026-05-08"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/google-ads-wasting-budget`,
      lastModified: new Date("2026-05-22"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/landing-page-vs-homepage-mistake`,
      lastModified: new Date("2026-05-19"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/seo-mistakes-killing-rankings`,
      lastModified: new Date("2026-05-16"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/ai-agents-2026-business-guide`,
      lastModified: new Date("2026-05-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/geo-generative-engine-optimization-2026`,
      lastModified: new Date("2026-05-18"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/digital-marketing-trends-2026`,
      lastModified: new Date("2026-05-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/ai-automation`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/web-development`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/digital-marketing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...locationEntries,
    ...["terms", "privacy", "cookies", "disclaimer"].map((slug) => ({
      url: `${BASE_URL}/${slug}`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
