import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CityPageClient from "@/components/sections/CityPageClient";
import { locations, getLocationBySlug } from "@/lib/locations";

export function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  return {
    title: location.aiTitle,
    description: location.aiMetaDescription,
    alternates: {
      canonical: `https://digikings.net/locations/${location.slug}`,
    },
    openGraph: {
      title: location.aiTitle,
      description: location.aiMetaDescription,
      url: `https://digikings.net/locations/${location.slug}`,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "Digital Kings",
        description: `AI automation services in ${location.city}, WA`,
        areaServed: { "@type": "City", name: location.city },
        url: `https://digikings.net/locations/${location.slug}`,
        logo: "https://digikings.net/logo-v2.png",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer enquiries",
          email: "jaswindersingh6773@gmail.com",
          availableLanguage: "English",
        },
        sameAs: [
          "https://www.linkedin.com/company/digikings",
          "https://x.com/digikings",
        ],
      },
      {
        "@type": "Service",
        name: `AI Automation Services in ${location.city}, WA`,
        provider: { "@type": "LocalBusiness", name: "Digital Kings" },
        areaServed: `${location.city}, Washington`,
        serviceType: "AI Automation",
        description: `Custom AI automation workflows, n8n integrations, and LLM-powered systems for businesses in ${location.city}, WA.`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <CityPageClient location={location} />
      <Footer />
    </>
  );
}
