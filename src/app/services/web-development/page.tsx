"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldButton from "@/components/ui/GoldButton";
import { Code2, Gauge, Search, TrendingUp, CheckCircle2, Layers } from "lucide-react";

const DIFFERENTIATORS = [
  {
    icon: Layers,
    title: "No Templates",
    desc: "Every site is designed and built from scratch to match your brand and conversion goals. You will not find this layout anywhere else.",
  },
  {
    icon: Gauge,
    title: "Built for Performance",
    desc: "Next.js with static generation, edge caching, and image optimisation. Lighthouse scores above 95 are the baseline, not a bonus.",
  },
  {
    icon: Search,
    title: "SEO Baked In",
    desc: "Semantic HTML, structured data, metadata, canonical tags, and Core Web Vitals — all addressed during build, not patched in afterwards.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimised",
    desc: "Every layout decision is driven by conversion logic: clear hierarchy, friction-minimised CTAs, and trust signals placed where the data says they work.",
  },
  {
    icon: Code2,
    title: "TypeScript + Tailwind",
    desc: "Clean, maintainable code you can hand to any developer. No legacy frameworks, no vendor lock-in, no mystery plugins.",
  },
  {
    icon: CheckCircle2,
    title: "Vercel Deployment",
    desc: "Deployed to Vercel with automatic preview branches, instant rollbacks, and global CDN. Zero-downtime updates from day one.",
  },
];

const STACK = ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Framer Motion", "Sanity CMS"];

const PROCESS = [
  {
    number: "01",
    title: "Discovery",
    desc: "We map your business goals, target audience, competitor landscape, and current conversion bottlenecks. This is what separates a strategic build from a decorative one.",
  },
  {
    number: "02",
    title: "Design",
    desc: "Component-by-component design in Figma — not a polished mockup that never matches the final product, but a component library that maps directly to what gets built.",
  },
  {
    number: "03",
    title: "Build",
    desc: "Development in Next.js, TypeScript, and Tailwind. You get a staging environment from day one so feedback is continuous, not saved for a big reveal.",
  },
  {
    number: "04",
    title: "Launch",
    desc: "Domain, DNS, Vercel deployment, analytics setup, and sitemap submission. The full launch checklist, not just the code drop.",
  },
  {
    number: "05",
    title: "Optimise",
    desc: "Post-launch, we monitor Core Web Vitals, heatmaps, and conversion data. The first 30 days after launch are when the most valuable optimisations happen.",
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

export default function WebDevelopmentPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const diffRef = useRef(null);
  const diffInView = useInView(diffRef, { once: true, margin: "-80px" });

  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: "-80px" });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <>
      <Navbar />
      <main className="bg-[#0D0D0D]">

        {/* Hero */}
        <section className="pt-40 pb-28 md:pt-48 md:pb-36 px-6 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#C9A84C]/4 blur-[100px]" />
          </div>

          <div className="max-w-7xl mx-auto" ref={heroRef}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl mx-auto text-center"
            >
              <SectionLabel>Web Development</SectionLabel>
              <h1 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-6xl font-bold text-[#F5F0E8] mt-6 mb-6 leading-tight">
                Custom Websites{" "}
                <span className="gold-gradient">Built to Perform</span>
              </h1>
              <p className="text-[#777] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                No page builders, no theme shops, no compromises. Every site is engineered from scratch in Next.js with performance, SEO, and conversion wired in from the start — not bolted on at the end.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <GoldButton href="/#contact">Discuss My Project</GoldButton>
                <GoldButton href="#process" variant="outline">See the Process</GoldButton>
              </div>
            </motion.div>

            {/* Stack tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-2 mt-12"
            >
              {STACK.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] px-3 py-1.5 border border-[#2A2A2A] text-[#666] tracking-widest uppercase"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* What Makes It Different */}
        <section className="py-28 md:py-36 px-6 bg-[#080808] relative overflow-hidden">
          <SweepLine inView={diffInView} />
          <div className="max-w-7xl mx-auto" ref={diffRef}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={diffInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <SectionLabel>The Difference</SectionLabel>
              <h2 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-4xl font-bold text-[#F5F0E8] mt-2">
                Built Different Because the{" "}
                <span className="gold-gradient">Builder Is Different</span>
              </h2>
              <p className="text-[#666] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
                Ten years of engineering experience means the decisions behind every technical choice are deliberate — not defaults.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A]">
              {DIFFERENTIATORS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={diffInView ? { opacity: 1, y: 0 } : {}}
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

        {/* Process */}
        <section id="process" className="py-28 md:py-36 px-6 relative overflow-hidden">
          <SweepLine inView={processInView} />
          <div className="max-w-5xl mx-auto" ref={processRef}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <SectionLabel>Process</SectionLabel>
              <h2 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-4xl font-bold text-[#F5F0E8] mt-2">
                From Brief to <span className="gold-gradient">Live Site</span>
              </h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#1E1E1E] -translate-x-1/2 hidden md:block" />
              <div className="flex flex-col gap-0">
                {PROCESS.map((step, i) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    animate={processInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: i * 0.1 }}
                    className={`flex flex-col md:flex-row gap-8 items-start md:items-center ${
                      i % 2 !== 0 ? "md:flex-row-reverse" : ""
                    } mb-12 last:mb-0`}
                  >
                    <div className="md:w-1/2 flex flex-col gap-2 md:text-right">
                      {i % 2 === 0 ? (
                        <>
                          <span className="font-[family-name:var(--font-cinzel)] text-sm text-[#C9A84C] font-semibold tracking-widest">
                            {step.number}
                          </span>
                          <h3 className="font-[family-name:var(--font-cinzel)] text-lg font-bold text-[#F5F0E8]">
                            {step.title}
                          </h3>
                          <p className="text-[#666] text-sm leading-relaxed">{step.desc}</p>
                        </>
                      ) : (
                        <div className="md:text-left">
                          <span className="font-[family-name:var(--font-cinzel)] text-sm text-[#C9A84C] font-semibold tracking-widest">
                            {step.number}
                          </span>
                          <h3 className="font-[family-name:var(--font-cinzel)] text-lg font-bold text-[#F5F0E8]">
                            {step.title}
                          </h3>
                          <p className="text-[#666] text-sm leading-relaxed">{step.desc}</p>
                        </div>
                      )}
                    </div>
                    <div className="hidden md:flex w-12 h-12 border border-[#C9A84C]/30 items-center justify-center flex-shrink-0 relative z-10 bg-[#0D0D0D]">
                      <CheckCircle2 size={18} className="text-[#C9A84C]" />
                    </div>
                    <div className="md:w-1/2" />
                  </motion.div>
                ))}
              </div>
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
                Ready for a Website That{" "}
                <span className="gold-gradient">Actually Converts?</span>
              </h2>
              <p className="text-[#666] mb-8 text-sm leading-relaxed max-w-xl mx-auto">
                Share your project brief and we will come back with a scope, timeline, and honest assessment of what will move the needle for your business.
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
