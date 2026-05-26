import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — AI Automation, Digital Marketing & Web Development",
  description:
    "Honest answers to common questions about AI automation costs, digital marketing timelines, custom web development, and working with Digital Kings across Washington state.",
  alternates: { canonical: "https://digikings.net/faq" },
  openGraph: {
    title: "FAQ | Digital Kings",
    description: "Straight answers about AI automation, digital marketing, and web development services.",
    url: "https://digikings.net/faq",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
