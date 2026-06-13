import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Digital Marketing Services",
  description:
    "Data-driven digital marketing: Google Ads management, Meta Ads, SEO, email marketing, and analytics. Every decision traced to business outcomes, not vanity metrics.",
  keywords: [
    "digital marketing agency",
    "Google Ads management",
    "data-driven marketing",
    "Meta Ads agency",
    "SEO services",
    "email marketing",
    "performance marketing",
    "analytics setup",
  ],
  alternates: {
    canonical: "https://digikings.net/services/digital-marketing",
  },
  openGraph: {
    title: "Digital Marketing Services | Digital Kings",
    description:
      "Data-driven digital marketing built on evidence, not guesswork. Google Ads, Meta Ads, SEO, and analytics.",
    url: "https://digikings.net/services/digital-marketing",
    type: "website",
  },
};

export default function DigitalMarketingLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
