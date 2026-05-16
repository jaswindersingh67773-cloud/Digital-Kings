"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldButton from "@/components/ui/GoldButton";
import { TrendingUp, Search, Mail, BarChart3, Target, LineChart } from "lucide-react";

const SERVICES_LIST = [
  {
    icon: Target,
    title: "Google Ads Management",
    desc: "Search, Performance Max, and Display campaigns structured around your unit economics — not generic best practices. Weekly search term audits, bid strategy testing, and conversion tracking verified in GTM.",
    tags: ["Search", "Performance Max", "Display", "Shopping"],
  },
  {
    icon: TrendingUp,
    title: "Meta Ads",
    desc: "Audience architecture built on first-party data and lookalikes. Creative testing frameworks that generate statistical signal, not just impressions. Full-funnel from awareness to retargeting.",
    tags: ["Facebook", "Instagram", "Retargeting", "Lookalikes"],
  },
  {
    icon: Search,
    title: "SEO",
    desc: "Technical foundation first — crawlability, Core Web Vitals, structured data. Then content architecture built around search intent. Authority building through earned links, not bought ones.",
    tags: ["Technical SEO", "Content", "Link Building", "Local"],
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Segmented sequences with conditional branching based on subscriber behaviour. Deliverability monitoring, A/B testing of subject lines and send times, and automated list hygiene.",
    tags: ["Klaviyo", "Mailchimp", "Sequences", "Automation"],
  },
  {
    icon: BarChart3,
    title: "Analytics Setup",
    desc: "GA4 configured properly with custom events, conversion tracking, and audience segments. GTM implementation. Data-driven attribution models. Weekly automated reports via Looker Studio.",
    tags: ["GA4", "GTM", "Looker Studio", "Attribution"],
  },
  {
    icon: LineChart,
    title: "Performance Reporting",
    desc: "Every metric traced back to business outcomes — not impressions or engagement. You see revenue attributed by channel, CAC by campaign, and ROAS at the unit economics level.",
    tags: ["Custom Dashboards", "CAC", "ROAS", "LTV"],
  },
];

const PRINCIPLES = [
  {
    number: "01",
    label: "Measure First",
    detail: "No campaign goes live without verified conversion tracking. Every click and conversion is attributed correctly before a penny is spent.",
  },
  {
    number: "02",
    label: "Test Systematically",
    detail: "One variable at a time. Hypothesis documented before the test. Statistical significance required before declaring a winner.",
  },
  {
    number: "03",
    label: "Optimise to Margin",
    detail: "Target ROAS and CPA are set against your actual margin, not industry benchmarks. Profitable growth, not impressive-looking numbers.",
  },
  {
    number: "04",
    label: "Report Honestly",
    detail: "If a channel is not working, that is in the report. No vanity metrics, no selective attribution. You know exactly where your money is going.",
  },
];

function SweepLine({ inView }: { inView: boolean }) {
  return (
    <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
      <motion.div
        className="h-full w-[40%]"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
        initial={{ x: "-100%" }}
        animate={inView ? { x: "300%" } : {}}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
    </div>
  );
}

export default function DigitalMarketingPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-80px" });

  const principlesRef = useRef(null);
  const principlesInView = useInView(principlesRef, { once: true, margin: "-80px" });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <>
      <Navbar />
      <main className="bg-[#0D0D0D]">

        {/* Hero */}
        <section className="pt-40 pb-28 md:pt-48 md:pb-36 px-6 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#C9A84C]/3 blur-[100px]" />
            <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#C9A84C]/3 blur-[80px]" />
          </div>

          <div className="max-w-7xl mx-auto" ref={heroRef}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl mx-auto text-center"
            >
              <SectionLabel>Digital Marketing</SectionLabel>
              <h1 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-6xl font-bold text-[#F5F0E8] mt-6 mb-6 leading-tight">
                Marketing Built on{" "}
                <span className="gold-gradient">Data, Not Guesswork</span>
              </h1>
              <p className="text-[#777] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                An engineering mindset applied to paid media, SEO, and email. Every decision traced to a hypothesis, every outcome measured against real business metrics — not vanity numbers.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <GoldButton href="/#contact">Discuss My Marketing</GoldButton>
                <GoldButton href="#principles" variant="outline">See the Approach</GoldButton>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="py-28 md:py-36 px-6 bg-[#080808] relative overflow-hidden">
          <SweepLine inView={servicesInView} />
          <div className="max-w-7xl mx-auto" ref={servicesRef}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <SectionLabel>Services</SectionLabel>
              <h2 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-4xl font-bold text-[#F5F0E8] mt-2">
                Channels That <span className="gold-gradient">Drive Revenue</span>
              </h2>
              <p className="text-[#666] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
                Every channel is managed with the same analytical rigour. No channel is recommended unless the numbers support it for your specific business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A]">
              {SERVICES_LIST.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="bg-[#080808] p-8 group hover:bg-[#0F0F0F] transition-colors duration-300 flex flex-col"
                  >
                    <div className="w-10 h-10 border border-[#2A2A2A] group-hover:border-[#C9A84C]/40 flex items-center justify-center mb-5 transition-colors duration-300">
                      <Icon size={18} className="text-[#C9A84C]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-cinzel)] text-base font-semibold text-[#F5F0E8] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[#666] text-sm leading-relaxed mb-5 flex-grow">{service.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2.5 py-1 border border-[#2A2A2A] text-[#555] tracking-wider uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section id="principles" className="py-28 md:py-36 px-6 relative overflow-hidden">
          <SweepLine inView={principlesInView} />
          <div className="max-w-7xl mx-auto" ref={principlesRef}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={principlesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <SectionLabel>How We Work</SectionLabel>
              <h2 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-4xl font-bold text-[#F5F0E8] mt-2">
                Four Principles That{" "}
                <span className="gold-gradient">Never Change</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1A1A1A] max-w-4xl mx-auto">
              {PRINCIPLES.map((p, i) => (
                <motion.div
                  key={p.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={principlesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-[#0D0D0D] p-8 relative overflow-hidden"
                >
                  <span className="font-[family-name:var(--font-cinzel)] text-6xl font-bold text-[#141414] absolute -top-2 -right-2 select-none">
                    {p.number}
                  </span>
                  <div className="relative">
                    <p className="font-[family-name:var(--font-cinzel)] text-base font-semibold text-[#C9A84C] mb-3">
                      {p.label}
                    </p>
                    <p className="text-[#666] text-sm leading-relaxed">{p.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 md:py-36 px-6 bg-[#080808] relative overflow-hidden">
          <SweepLine inView={ctaInView} />
          <div className="max-w-3xl mx-auto text-center" ref={ctaRef}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <SectionLabel>Get Started</SectionLabel>
              <h2 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-4xl font-bold text-[#F5F0E8] mt-4 mb-4">
                Ready to Market on{" "}
                <span className="gold-gradient">Evidence, Not Instinct?</span>
              </h2>
              <p className="text-[#666] mb-8 text-sm leading-relaxed max-w-xl mx-auto">
                Tell us your current channels, what is and is not working, and what growth looks like for your business. We will come back with a data-driven plan.
              </p>
              <GoldButton href="/#contact">Start the Conversation</GoldButton>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
