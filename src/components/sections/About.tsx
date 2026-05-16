"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import SectionLabel from "../ui/SectionLabel";
import { CheckCircle2 } from "lucide-react";

const PILLARS = [
  "10 years of software engineering depth",
  "AI automation built from the ground up",
  "Custom websites — no templates, no shortcuts",
  "Marketing strategy backed by data & code",
  "No fluff — every decision is systematic",
  "Direct access, no account manager layers",
];

const EDGE = [
  { value: "10 Yrs", label: "Engineering Experience" },
  { value: "AI-Native", label: "Automation Approach" },
  { value: "Full Stack", label: "Web Development" },
  { value: "360°", label: "Digital Marketing" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 md:py-36 px-6 bg-[#080808] relative overflow-hidden">
      {/* Gold sweep line */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <motion.div className="h-full w-[40%]"
          style={{ background: "linear-gradient(90deg,transparent,#C9A84C,transparent)" }}
          initial={{ x: "-100%" }} animate={inView ? { x: "300%" } : {}}
          transition={{ duration: 1.4, ease: "easeInOut" }} />
      </div>

      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left — slides from left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl font-bold mb-6">
              An Engineer Who <br />
              <span className="gold-gradient">Builds Growth Systems</span>
            </h2>
            <p className="text-[#666] leading-relaxed mb-4">
              I spent 10 years building software — systems, architectures, automation pipelines,
              and full-stack applications. That engineering mindset doesn&apos;t switch off when
              I work on your marketing.
            </p>
            <p className="text-[#666] leading-relaxed mb-10">
              Most agencies hand you a strategy deck. I hand you working systems — AI workflows
              that actually run, websites built to perform, and campaigns built on data, not guesswork.
              The difference is the depth behind the work.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={15} className="text-[#C9A84C] flex-shrink-0" />
                  <span className="text-[#999] text-sm">{p}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — slides from right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-px bg-[#1A1A1A]"
          >
            {EDGE.map((n, i) => (
              <motion.div
                key={n.label}
                className="bg-[#111] px-8 py-12 flex flex-col items-center justify-center text-center relative overflow-hidden group"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.07), transparent 70%)" }}
                />
                <span className="font-[family-name:var(--font-cinzel)] text-4xl font-bold gold-gradient mb-2">{n.value}</span>
                <span className="text-[#666] text-xs tracking-widest uppercase">{n.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
