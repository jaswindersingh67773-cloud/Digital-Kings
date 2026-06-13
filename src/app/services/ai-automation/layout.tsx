import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "AI Automation Services",
  description:
    "Custom AI automation built on n8n and LLM integrations. Replace manual workflows, qualify leads automatically, and scale without scaling headcount. Serving ambitious businesses globally.",
  keywords: [
    "AI automation agency",
    "n8n automation",
    "business automation",
    "LLM integration",
    "workflow automation",
    "CRM automation",
    "lead qualification bot",
    "marketing automation",
  ],
  alternates: {
    canonical: "https://digikings.net/services/ai-automation",
  },
  openGraph: {
    title: "AI Automation Services | Digital Kings",
    description:
      "Custom AI automation built on n8n and LLM integrations. Replace manual workflows and scale without scaling headcount.",
    url: "https://digikings.net/services/ai-automation",
    type: "website",
  },
};

export default function AIAutomationLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
