import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import JsonLd from "@/components/ui/JsonLd";
import { SpeedInsights } from "@vercel/speed-insights/next"
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://digikings.net";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Digital Kings | AI Automation, Digital Marketing & Custom Web Development",
    template: "%s | Digital Kings",
  },
  description:
    "10 years of software engineering now powering AI automation, digital marketing, and custom web development. Built by an engineer — not an agency. Based globally, serving ambitious brands.",
  keywords: [
    "AI automation",
    "digital marketing agency",
    "custom web development",
    "Next.js developer",
    "n8n automation",
    "SEO services",
    "Google Ads management",
    "Meta Ads",
    "software engineer marketing",
    "AI workflows",
    "lead generation",
    "full stack web developer",
    "digital marketing consultant",
    "marketing automation",
  ],
  authors: [{ name: "Digital Kings" }],
  creator: "Digital Kings",
  publisher: "Digital Kings",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Digital Kings",
    title: "Digital Kings | AI Automation, Digital Marketing & Custom Web Development",
    description:
      "10 years of software engineering now powering AI automation, digital marketing, and custom web development. Built different — because the builder is different.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Digital Kings — Engineering Meets Digital Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Kings | AI Automation & Digital Marketing",
    description:
      "10 years of software engineering now powering AI automation, digital marketing, and custom web development.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/logo-v2.png",
    apple: "/logo-v2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${cinzel.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col bg-[#0D0D0D] text-[#F5F0E8]">
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
