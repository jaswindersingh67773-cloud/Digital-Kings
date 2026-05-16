"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import SectionLabel from "../ui/SectionLabel";
import { Bot, Globe, TrendingUp, Code2 } from "lucide-react";

const CAPABILITIES = [
  {
    icon: Bot,
    title: "AI Automation Systems",
    tag: "The Technical Edge",
    points: [
      "Custom AI workflows built with n8n, Make, and API integrations",
      "Automated lead capture, nurturing, and follow-up pipelines",
      "CRM automation — no more manual data entry or missed leads",
      "AI-powered reporting dashboards that update themselves",
      "ChatGPT / Claude integrations into your existing business tools",
    ],
    note: "Built by an engineer — not stitched together with drag-and-drop.",
  },
  {
    icon: Globe,
    title: "Custom Web Development",
    tag: "No Templates",
    points: [
      "Full-stack websites built with Next.js, React, and Tailwind",
      "Performance-first — fast load times, clean code, real SEO foundations",
      "Custom CMS integrations so you control your own content",
      "Landing pages and funnels designed to convert, not just look good",
      "Web apps and client portals if your business needs them",
    ],
    note: "10 years of engineering means your website won't break under pressure.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    tag: "Data-Led Strategy",
    points: [
      "Paid ads (Google, Meta, TikTok) set up and managed with precision",
      "SEO strategy grounded in technical understanding, not keyword stuffing",
      "Social media content strategy and management",
      "Email marketing sequences built to convert over time",
      "Analytics setup so you actually understand your numbers",
    ],
    note: "Marketing strategy informed by how systems actually work.",
  },
  {
    icon: Code2,
    title: "The Combined Advantage",
    tag: "Why It Matters",
    points: [
      "Your website, marketing, and automation all speak to each other",
      "No briefing three different agencies who don't coordinate",
      "Technical problems get solved technically — not worked around",
      "Everything is built to scale as your business grows",
      "You get direct access to the person who built it",
    ],
    note: "One person. Full stack. Total accountability.",
  },
];

function CapabilityCard({ cap, index }: { cap: typeof CAPABILITIES[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = cap.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 70, rotateX: 6 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#111] border border-[#1E1E1E] p-8 flex flex-col relative overflow-hidden group"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.06), transparent)" }}
      />

      <div className="flex items-start justify-between mb-6">
        <div className="w-11 h-11 flex items-center justify-center border border-[#2A2A2A] group-hover:border-[#C9A84C]/50 transition-colors duration-300">
          <Icon size={20} className="text-[#C9A84C]" />
        </div>
        <span className="text-[10px] text-[#C9A84C] tracking-[0.3em] uppercase border border-[#C9A84C]/20 px-3 py-1">
          {cap.tag}
        </span>
      </div>

      <h3 className="font-[family-name:var(--font-cinzel)] text-lg font-semibold text-[#F5F0E8] mb-5">{cap.title}</h3>

      <ul className="space-y-3 flex-1 mb-6">
        {cap.points.map((pt, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.15 + 0.3 + i * 0.07, duration: 0.4 }}
            className="flex items-start gap-3 text-sm text-[#777]"
          >
            <div className="w-1 h-1 rounded-full bg-[#C9A84C] mt-2 flex-shrink-0" />
            {pt}
          </motion.li>
        ))}
      </ul>

      <div className="border-t border-[#1E1E1E] pt-4">
        <p className="text-xs text-[#C9A84C]/70 italic">{cap.note}</p>
      </div>
    </motion.div>
  );
}

export default function Results() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section id="results" className="py-28 md:py-36 px-6 bg-[#080808] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <motion.div className="h-full w-[40%]"
          style={{ background: "linear-gradient(90deg,transparent,#C9A84C,transparent)" }}
          initial={{ x: "-100%" }} animate={inView ? { x: "300%" } : {}}
          transition={{ duration: 1.4, ease: "easeInOut" }} />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <SectionLabel>What I Build</SectionLabel>
          <h2 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl font-bold mb-4">
            Engineering-Grade <span className="gold-gradient">Digital Solutions</span>
          </h2>
          <p className="text-[#666] text-lg max-w-2xl mx-auto">
            Not templates. Not cookie-cutter campaigns. Systems built properly
            by someone who knows how the technology actually works.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1A1A1A]">
          {CAPABILITIES.map((cap, i) => (
            <CapabilityCard key={cap.title} cap={cap} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
