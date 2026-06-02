import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Digital Kings collects, uses, shares, and protects your personal information, plus your privacy rights under GDPR and CCPA.",
  alternates: { canonical: "https://digikings.net/privacy" },
  openGraph: {
    title: "Privacy Policy | Digital Kings",
    description: "How we collect, use, and protect your personal information.",
    url: "https://digikings.net/privacy",
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
