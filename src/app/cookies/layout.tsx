import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "The cookies and similar technologies Digital Kings uses, why we use them, and how to manage them in your browser.",
  alternates: { canonical: "https://digikings.net/cookies" },
  openGraph: {
    title: "Cookie Policy | Digital Kings",
    description: "What cookies we use and how to control them.",
    url: "https://digikings.net/cookies",
  },
};

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
