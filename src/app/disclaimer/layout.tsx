import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Digital Kings disclaimer covering results, testimonials, informational content, and the limits of information shared on this website.",
  alternates: { canonical: "https://digikings.net/disclaimer" },
  openGraph: {
    title: "Disclaimer | Digital Kings",
    description: "An honest note on results, testimonials, and site information.",
    url: "https://digikings.net/disclaimer",
  },
};

export default function DisclaimerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
