"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldButton from "@/components/ui/GoldButton";
import { locations } from "@/lib/locations";
import { Bot, Workflow, Database, Mail, BarChart3, Zap, CheckCircle2 } from "lucide-react";

// Metadata cannot be exported from a client component — handled via parent layout or a separate metadata file.
// For service-page SEO, the metadata is defined in the co-located metadata file.

const INCLUSIONS = [
  {
    icon: Workflow,
    title: "n8n Workflow Automation",
    desc: "Custom workflows that connect your tools and eliminate repetitive manual tasks — built on n8n, self-hosted or cloud.",
  },
  {
    icon: Bot,
    title: "LLM Integrations",
    desc: "GPT-4o and Claude integrated into your workflows for email classification, lead scoring, content drafting, and data extraction.",
  },
  {
    icon: Database,
    title: "CRM Automation",
    desc: "Automatic data enrichment, deal stage progression, and activity logging — so your CRM stays accurate without the admin overhead.",
  },
  {
    icon: Zap,
    title: "Lead Qualification Bots",
    desc: "Inbound leads scored and routed automatically based on your criteria. Only qualified prospects reach your calendar.",
  },
  {
    icon: Mail,
    title: "Email Sequences",
    desc: "Conditional follow-up sequences that adapt based on recipient behaviour — opened, clicked, replied, or ignored.",
  },
  {
    icon: BarChart3,
    title: "Reporting Dashboards",
    desc: "Automated data pipelines feeding clean dashboards in Looker Studio or Notion — so your Monday morning report writes itself.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Audit Manual Processes",
    desc: "We document every recurring task you or your team performs more than twice a week. Each one is categorised by time cost and automation potential.",
  },
  {
    number: "02",
    title: "Design Automation Blueprint",
    desc: "We map the exact workflow architecture: triggers, logic branches, tool integrations, and error handling. You see the full plan before a single line is built.",
  },
  {
    number: "03",
    title: "Build, Test, and Hand Over",
    desc: "Workflows are built, tested with real data, and documented. You get full access, a walkthrough session, and 30 days of support post-handover.",
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

export default function AIAutomationPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const includesRef = useRef(null);
  const includesInView = useInView(includesRef, { once: true, margin: "-80px" });

  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: "-80px" });

  const citiesRef = useRef(null);
  const citiesInView = useInView(citiesRef, { once: true, margin: "-80px" });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <>
      <Navbar />
      <main className="bg-[#0D0D0D]">

        {/* Hero */}
        <section className="pt-40 pb-28 md:pt-48 md:pb-36 px-6 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/4 blur-[120px]" />
          </div>

          <div className="max-w-7xl mx-auto" ref={heroRef}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl mx-auto text-center"
            >
              <SectionLabel>AI Automation Services</SectionLabel>
              <h1 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-6xl font-bold text-[#F5F0E8] mt-6 mb-6 leading-tight">
                Automate.{" "}
                <span className="gold-gradient">Systematise.</span>{" "}
                Scale.
              </h1>
              <p className="text-[#777] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Replace the manual work eating your hours with intelligent, reliable automation systems. Built on n8n, powered by LLMs, and designed around your specific workflows — not generic templates.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <GoldButton href="/#contact">Scope My Automation</GoldButton>
                <GoldButton href="#how-it-works" variant="outline">See How It Works</GoldButton>
              </div>

              {/* Pricing signal */}
              <p className="mt-8 text-[#555] text-sm tracking-wide">
                Starting from <span className="text-[#C9A84C] font-semibold">$1,500</span> · Custom scoped per project
              </p>
            </motion.div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-28 md:py-36 px-6 bg-[#080808] relative overflow-hidden">
          <SweepLine inView={includesInView} />
          <div className="max-w-7xl mx-auto" ref={includesRef}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={includesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <SectionLabel>What&apos;s Included</SectionLabel>
              <h2 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-4xl font-bold text-[#F5F0E8] mt-2">
                Systems That Run <span className="gold-gradient">Without You</span>
              </h2>
              <p className="text-[#666] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
                Every engagement is scoped to your specific bottlenecks. These are the building blocks most projects draw from.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A]">
              {INCLUSIONS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={includesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="bg-[#080808] p-8 group hover:bg-[#0F0F0F] transition-colors duration-300"
                  >
                    <div className="w-10 h-10 border border-[#2A2A2A] group-hover:border-[#C9A84C]/40 flex items-center justify-center mb-5 transition-colors duration-300">
                      <Icon size={18} className="text-[#C9A84C]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-cinzel)] text-base font-semibold text-[#F5F0E8] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-28 md:py-36 px-6 relative overflow-hidden">
          <SweepLine inView={processInView} />
          <div className="max-w-7xl mx-auto" ref={processRef}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <SectionLabel>Process</SectionLabel>
              <h2 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-4xl font-bold text-[#F5F0E8] mt-2">
                How It <span className="gold-gradient">Works</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1A1A1A] max-w-5xl mx-auto">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                  className="bg-[#0D0D0D] p-8 relative"
                >
                  <span className="font-[family-name:var(--font-cinzel)] text-5xl font-bold text-[#1E1E1E] absolute top-6 right-8 select-none">
                    {step.number}
                  </span>
                  <div className="relative">
                    <CheckCircle2 size={20} className="text-[#C9A84C] mb-4" />
                    <h3 className="font-[family-name:var(--font-cinzel)] text-base font-semibold text-[#F5F0E8] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#666] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cities We Serve */}
        <section className="py-28 md:py-36 px-6 bg-[#080808] relative overflow-hidden">
          <SweepLine inView={citiesInView} />
          <div className="max-w-7xl mx-auto" ref={citiesRef}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={citiesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <SectionLabel>Service Areas</SectionLabel>
              <h2 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-4xl font-bold text-[#F5F0E8] mt-2">
                AI Automation Services Across{" "}
                <span className="gold-gradient">Washington State</span>
              </h2>
              <p className="text-[#666] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
                Based in the Pacific Northwest, serving businesses from Tacoma
                to Sammamish.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A]">
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={citiesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                >
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="bg-[#080808] p-8 flex flex-col group hover:bg-[#0F0F0F] border border-transparent hover:border-[#C9A84C]/30 transition-all duration-300 h-full"
                  >
                    <h3 className="font-[family-name:var(--font-cinzel)] text-lg font-bold text-[#F5F0E8] mb-2 group-hover:text-[#E8C97A] transition-colors duration-200">
                      {loc.city}
                    </h3>
                    <p className="text-[#666] text-sm leading-relaxed">
                      {loc.aiUseCases[0]}
                    </p>
                  </Link>
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
                Ready to Stop Doing It <span className="gold-gradient">Manually?</span>
              </h2>
              <p className="text-[#666] mb-8 text-sm leading-relaxed max-w-xl mx-auto">
                Tell us which processes are costing you the most time. We will scope the automation, show you exactly what we will build, and only proceed when you are satisfied with the plan.
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
