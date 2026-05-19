"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldButton from "@/components/ui/GoldButton";
import type { Location } from "@/lib/locations";
import {
  Bot,
  Zap,
  BarChart3,
  Mail,
  Settings2,
  CheckCircle2,
  MapPin,
  ChevronRight,
} from "lucide-react";

const USE_CASE_ICONS = [Bot, Zap, BarChart3, Mail, Settings2] as const;

function SweepLine({ inView }: { inView: boolean }) {
  return (
    <div className="absolute top-0 left-0 right-0 h-px overflow-hidden pointer-events-none">
      <motion.div
        className="h-full w-[40%]"
        style={{
          background:
            "linear-gradient(90deg, transparent, #C9A84C, transparent)",
        }}
        initial={{ x: "-100%" }}
        animate={inView ? { x: "300%" } : {}}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
    </div>
  );
}

export default function CityPageClient({
  location,
}: {
  location: Location;
}) {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const contextRef = useRef(null);
  const contextInView = useInView(contextRef, { once: true, margin: "-80px" });

  const useCasesRef = useRef(null);
  const useCasesInView = useInView(useCasesRef, {
    once: true,
    margin: "-80px",
  });

  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: "-80px" });

  const toolsRef = useRef(null);
  const toolsInView = useInView(toolsRef, { once: true, margin: "-80px" });

  const industriesRef = useRef(null);
  const industriesInView = useInView(industriesRef, {
    once: true,
    margin: "-80px",
  });

  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, margin: "-80px" });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  const STEPS = [
    {
      number: "01",
      title: "Free Automation Audit",
      desc: "We map every manual process in your business and identify the highest-ROI automation opportunities.",
    },
    {
      number: "02",
      title: "Custom Build",
      desc: "We build your automation stack using n8n, custom AI agents, and API integrations — no off-the-shelf tools.",
    },
    {
      number: "03",
      title: "Handover & Support",
      desc: "You get full documentation, training, and ongoing support. You own everything we build.",
    },
  ];

  const FAQS = [
    {
      q: `How much does AI automation cost in ${location.city}?`,
      a: `Every project is scoped individually. Most small business automation projects start between $1,500–$5,000 depending on complexity. We offer a free audit before any commitment.`,
    },
    {
      q: `What processes can be automated for ${location.city} businesses?`,
      a: `Common automations for ${location.city} businesses include: ${location.aiUseCases.slice(0, 3).join(", ")}. We identify your specific bottlenecks during the free audit.`,
    },
    {
      q: "Do I need technical knowledge to use the automations?",
      a: "No. We build, document, and hand over everything with training included. Most clients are running their automations within a day of handover.",
    },
    {
      q: "How long does it take to set up AI automation?",
      a: "Simple workflows take 1–2 weeks. More complex multi-system integrations take 3–6 weeks. We always agree on scope and timeline upfront.",
    },
  ];

  return (
    <main className="bg-[#0D0D0D]">
      {/* ── Hero ── */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#C9A84C]/4 blur-[140px]" />
        </div>
        <div className="max-w-7xl mx-auto" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center justify-center gap-1.5 mb-5 text-xs text-[#555] tracking-wide"
            >
              <Link
                href="/"
                className="hover:text-[#C9A84C] transition-colors duration-200"
              >
                Home
              </Link>
              <ChevronRight size={12} className="text-[#333]" />
              <Link
                href="/locations"
                className="hover:text-[#C9A84C] transition-colors duration-200"
              >
                Locations
              </Link>
              <ChevronRight size={12} className="text-[#333]" />
              <span className="text-[#C9A84C]">{location.city}</span>
            </nav>

            <div className="inline-flex items-center gap-2 mb-4">
              <MapPin size={13} className="text-[#C9A84C]" />
              <SectionLabel>
                {location.city}, {location.stateCode}
              </SectionLabel>
            </div>
            <h1 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F0E8] mt-4 mb-6 leading-tight">
              {location.aiH1.replace(location.city, "").replace(", WA", "")}
              <span className="gold-gradient">{location.city}, WA</span>
            </h1>
            <p className="text-[#777] text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Custom workflow automation, LLM integrations, and intelligent
              systems built for {location.city} businesses. Stop managing manual
              tasks — start running on autopilot.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GoldButton href="/#contact">Get Free AI Audit</GoldButton>
              <GoldButton href="/services/ai-automation" variant="outline">
                See All Services
              </GoldButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What AI Automation Means for [City] Businesses ── */}
      <section className="py-20 md:py-28 px-6 bg-[#080808] relative overflow-hidden">
        <SweepLine inView={contextInView} />
        <div className="max-w-7xl mx-auto" ref={contextRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <SectionLabel>Local Context</SectionLabel>
            <h2 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-4xl font-bold text-[#F5F0E8] mt-4 mb-8">
              What AI Automation Means for{" "}
              <span className="gold-gradient">{location.city}</span> Businesses
            </h2>
            <p className="text-[#777] text-base leading-relaxed mb-6">
              <Link
                href="/services/ai-automation"
                className="text-[#C9A84C] hover:text-[#E8C97A] transition-colors duration-200"
              >
                AI automation services
              </Link>{" "}
              remove the repetitive, manual work that slows your business down.
              Instead of your team copying data between tools, chasing leads, or
              building the same report every Monday, intelligent systems handle
              those tasks automatically — triggered by real events, powered by
              language models, and integrated with the tools you already use.
              The result is consistent execution, faster response times, and a
              business that runs even when you are not in the room.
            </p>
            <p className="text-[#777] text-base leading-relaxed">
              {location.localContext} AI automation in{" "}
              <Link
                href="/locations"
                className="text-[#C9A84C] hover:text-[#E8C97A] transition-colors duration-200"
              >
                {location.city}
              </Link>{" "}
              is not about replacing people — it is about eliminating the
              low-value work that prevents your team from focusing on what
              actually grows the business. Whether you need AI automation in{" "}
              {location.city} for lead management, client onboarding, reporting,
              or customer communication, we build systems that match your exact
              workflows — not generic templates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── AI Use Cases ── */}
      <section className="py-20 md:py-28 px-6 relative overflow-hidden">
        <SweepLine inView={useCasesInView} />
        <div className="max-w-7xl mx-auto" ref={useCasesRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <SectionLabel>Use Cases</SectionLabel>
            <h2 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-4xl font-bold text-[#F5F0E8] mt-2">
              AI Automation Use Cases in{" "}
              <span className="gold-gradient">{location.city}</span>
            </h2>
            <p className="text-[#666] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Specific workflows we build for {location.city} businesses —
              scoped to your industry and your bottlenecks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A] max-w-5xl mx-auto">
            {location.aiUseCases.map((useCase, i) => {
              const Icon = USE_CASE_ICONS[i % USE_CASE_ICONS.length];
              return (
                <motion.div
                  key={useCase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="bg-[#111] p-8 group hover:border hover:border-[#C9A84C]/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 border border-[#2A2A2A] group-hover:border-[#C9A84C]/40 flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon size={18} className="text-[#C9A84C]" />
                  </div>
                  <p className="text-[#E8E0D0] text-sm leading-relaxed font-medium">
                    {useCase}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 md:py-28 px-6 bg-[#080808] relative overflow-hidden">
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
                  <p className="text-[#666] text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tools We Use ── */}
      <section className="py-20 md:py-28 px-6 relative overflow-hidden">
        <SweepLine inView={toolsInView} />
        <div className="max-w-7xl mx-auto text-center" ref={toolsRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={toolsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>Stack</SectionLabel>
            <h2 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-4xl font-bold text-[#F5F0E8] mt-4 mb-4">
              Tools We <span className="gold-gradient">Use</span>
            </h2>
            <p className="text-[#666] text-sm max-w-xl mx-auto mb-10 leading-relaxed">
              We select tools based on your workflows, not our agency
              preferences. Here is the typical stack for {location.city}{" "}
              projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {location.aiTools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 border border-[#C9A84C]/40 text-[#C9A84C] text-sm tracking-wide hover:border-[#C9A84C] hover:bg-[#C9A84C]/5 transition-all duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Industries We Serve ── */}
      <section className="py-20 md:py-28 px-6 bg-[#080808] relative overflow-hidden">
        <SweepLine inView={industriesInView} />
        <div className="max-w-7xl mx-auto text-center" ref={industriesRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={industriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>Industries</SectionLabel>
            <h2 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-4xl font-bold text-[#F5F0E8] mt-4 mb-4">
              Industries We Serve in{" "}
              <span className="gold-gradient">{location.city}</span>
            </h2>
            <p className="text-[#666] text-sm max-w-xl mx-auto mb-12 leading-relaxed">
              We work across {location.city}&apos;s primary industries, building
              automation systems tailored to each sector&apos;s workflows and
              competitive dynamics.
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {location.industries.map((industry) => (
                <span
                  key={industry}
                  className="px-4 py-2 border border-[#C9A84C]/40 text-[#C9A84C] text-sm tracking-wide hover:border-[#C9A84C] hover:bg-[#C9A84C]/5 transition-all duration-300"
                >
                  {industry}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28 px-6 relative overflow-hidden">
        <SweepLine inView={faqInView} />
        <div className="max-w-7xl mx-auto" ref={faqRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-14">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-4xl font-bold text-[#F5F0E8] mt-2">
                Common Questions About{" "}
                <span className="gold-gradient">AI Automation</span>
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <motion.details
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={faqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="border border-[#2A2A2A] hover:border-[#C9A84C]/40 transition-colors duration-300 group"
                >
                  <summary className="px-6 py-5 cursor-pointer list-none flex items-center justify-between text-[#E8E0D0] text-sm font-medium select-none">
                    {faq.q}
                    <span className="text-[#C9A84C] text-lg shrink-0 ml-4 group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <p className="px-6 pb-5 text-[#777] text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </motion.details>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 md:py-28 px-6 bg-[#080808] relative overflow-hidden">
        <SweepLine inView={ctaInView} />
        <div className="max-w-3xl mx-auto text-center" ref={ctaRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="border border-[#C9A84C]/30 p-10 md:p-14 relative"
          >
            {/* Corner accents */}
            <span className="absolute top-0 left-0 w-5 h-5 border-t border-l border-[#C9A84C]" />
            <span className="absolute top-0 right-0 w-5 h-5 border-t border-r border-[#C9A84C]" />
            <span className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-[#C9A84C]" />
            <span className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-[#C9A84C]" />

            <SectionLabel>Get Started</SectionLabel>
            <h2 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-4xl font-bold text-[#F5F0E8] mt-4 mb-4">
              Ready to automate your{" "}
              <span className="gold-gradient">{location.city}</span> business?
            </h2>
            <p className="text-[#666] text-sm leading-relaxed mb-8 max-w-xl mx-auto">
              No commitment. No sales pitch. Just an honest look at where AI
              automation can save you time and money.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GoldButton href="/#contact">Book Your Free AI Audit</GoldButton>
              <GoldButton href="/locations" variant="outline">
                View All Locations
              </GoldButton>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
