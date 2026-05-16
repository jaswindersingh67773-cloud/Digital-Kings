"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import SectionLabel from "../ui/SectionLabel";
import { TrendingUp, Bot, Search, Share2, Mail, BarChart3, Zap, Globe } from "lucide-react";

const SERVICES = [
  { icon: TrendingUp, title: "Paid Advertising", desc: "Google Ads, Meta, TikTok — precision targeting that turns ad spend into revenue.", tags: ["Google Ads", "Meta Ads", "TikTok"] },
  { icon: Search,     title: "SEO Domination",  desc: "Rank #1 and stay there. Technical SEO, content strategy, and authority building.", tags: ["Technical SEO", "Content", "Link Building"] },
  { icon: Bot,        title: "AI Automation",   desc: "Automate lead nurturing, onboarding, and reporting with custom AI workflows.", tags: ["n8n", "Make", "Custom AI"] },
  { icon: Share2,     title: "Social Media",    desc: "Consistent, high-converting content across all platforms that builds real audiences.", tags: ["Content", "Reels", "Community"] },
  { icon: Mail,       title: "Email & CRM",     desc: "Automated sequences and CRM pipelines that convert prospects to clients.", tags: ["Klaviyo", "HubSpot", "Sequences"] },
  { icon: BarChart3,  title: "Analytics",       desc: "Real-time dashboards so you always know your ROI — down to the last dollar.", tags: ["GA4", "Looker Studio", "Custom"] },
  { icon: Zap,        title: "Lead Generation", desc: "Multi-channel funnels designed to bring you qualified leads on autopilot.", tags: ["Funnels", "Landing Pages", "CRO"] },
  { icon: Globe,      title: "Web Design",      desc: "High-performance websites that look premium and convert at scale.", tags: ["Next.js", "Tailwind", "CMS"] },
];

const STRIPS = 7;

function VenetianCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = service.icon;
  const baseDelay = index * 0.09;

  return (
    <div ref={ref} className="relative overflow-hidden group bg-[#111] border border-[#1E1E1E] hover:border-[#C9A84C]/40 transition-colors duration-500">
      {/* Card content */}
      <div className="p-8">
        <motion.div
          className="w-11 h-11 flex items-center justify-center border border-[#2A2A2A] group-hover:border-[#C9A84C]/50 transition-colors duration-300 mb-5"
          whileHover={{ rotate: 5 }}
        >
          <Icon size={20} className="text-[#C9A84C]" />
        </motion.div>
        <h3 className="font-[family-name:var(--font-cinzel)] text-base font-semibold text-[#F5F0E8] mb-2">{service.title}</h3>
        <p className="text-[#777] text-sm leading-relaxed mb-5">{service.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {service.tags.map((t) => (
            <span key={t} className="text-[10px] px-2.5 py-1 border border-[#2A2A2A] text-[#666] tracking-wider uppercase">{t}</span>
          ))}
        </div>
      </div>

      {/* Venetian blind strips — slide up to reveal card */}
      {Array.from({ length: STRIPS }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-0 right-0 bg-[#0D0D0D]"
          style={{ top: `${(i / STRIPS) * 100}%`, height: `${100 / STRIPS + 0.5}%`, transformOrigin: "top" }}
          initial={{ scaleY: 1 }}
          animate={inView ? { scaleY: 0 } : { scaleY: 1 }}
          transition={{ delay: baseDelay + i * 0.07, duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        />
      ))}

      {/* Gold shimmer on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/0 to-[#C9A84C]/0 group-hover:from-[#C9A84C]/4 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
    </div>
  );
}

export default function Services() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="services" className="py-28 md:py-36 px-6 relative overflow-hidden">
      {/* Section light beam */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <motion.div
          className="h-full w-[40%]"
          style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
          initial={{ x: "-100%" }}
          animate={titleInView ? { x: "300%" } : {}}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl font-bold mb-4">
            Services That <span className="gold-gradient">Command Results</span>
          </h2>
          <p className="text-[#777] text-lg max-w-2xl mx-auto">From strategy to execution — every aspect of your digital growth.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A]">
          {SERVICES.map((s, i) => <VenetianCard key={s.title} service={s} index={i} />)}
        </div>
      </div>
    </section>
  );
}
