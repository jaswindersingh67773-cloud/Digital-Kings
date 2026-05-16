import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Custom Web Development | Digital Kings",
  description:
    "Bespoke Next.js websites built for performance, SEO, and conversion. No templates, no page builders — engineered from scratch by a 10-year software engineer.",
  keywords: [
    "custom web development",
    "Next.js website",
    "bespoke website",
    "TypeScript web developer",
    "high performance website",
    "conversion optimised website",
    "Tailwind CSS developer",
    "full stack web developer",
  ],
  alternates: {
    canonical: "https://digikings.net/services/web-development",
  },
  openGraph: {
    title: "Custom Web Development | Digital Kings",
    description:
      "Bespoke Next.js websites built for performance, SEO, and conversion. No templates, no page builders.",
    url: "https://digikings.net/services/web-development",
    type: "website",
  },
};

export default function WebDevelopmentLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
