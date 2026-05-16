import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Digital Kings — Digital Marketing & AI Automation Agency",
  description: "We help brands dominate their market with elite digital marketing strategies and cutting-edge AI automation.",
  keywords: "digital marketing, AI automation, SEO, social media, lead generation, digital agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${cinzel.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col bg-[#0D0D0D] text-[#F5F0E8]">
        {children}
      </body>
    </html>
  );
}
