import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of the Digital Kings website and any AI automation, digital marketing, or web development services we provide.",
  alternates: { canonical: "https://digikings.net/terms" },
  openGraph: {
    title: "Terms of Service | Digital Kings",
    description: "Terms governing use of our website and services.",
    url: "https://digikings.net/terms",
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
