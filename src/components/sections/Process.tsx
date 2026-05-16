"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import SectionLabel from "../ui/SectionLabel";

const STEPS = [
  { num: "01", title: "Discovery & Audit", desc: "We analyse your position, competitors, and untapped opportunities. No guesswork." },
  { num: "02", title: "Strategy Blueprint", desc: "A custom growth roadmap built around your goals, budget, and target market." },
  { num: "03", title: "Build & Launch", desc: "We execute with precision — campaigns, automation, content, and tracking all live." },
  { num: "04", title: "Scale & Optimise", desc: "Continuous testing, AI-powered optimisation, and reporting to compound your growth." },
];

export default function Process() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section id="process" className="py-28 md:py-36 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <motion.div className="h-full w-[40%]"
          style={{ background: "linear-gradient(90deg,transparent,#C9A84C,transparent)" }}
          initial={{ x: "-100%" }} animate={inView ? { x: "300%" } : {}}
          transition={{ duration: 1.4, ease: "easeInOut" }} />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div ref={titleRef} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-20">
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl font-bold mb-4">
            The Royal <span className="gold-gradient">Process</span>
          </h2>
        </motion.div>

        {/* Connecting line */}
        <div className="relative">
          <motion.div
            className="absolute top-12 left-[calc(12.5%)] right-[calc(12.5%)] h-px hidden md:block origin-left"
            style={{ background: "linear-gradient(90deg, transparent, #C9A84C 20%, #C9A84C 80%, transparent)" }}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {STEPS.map((step, i) => {
              const ref = useRef(null);
              const stepInView = useInView(ref, { once: true, margin: "-60px" });
              return (
                <motion.div
                  key={step.num}
                  ref={ref}
                  initial={{ opacity: 0, y: -60 }}
                  animate={stepInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center text-center"
                >
                  <motion.div
                    className="relative z-10 w-24 h-24 flex items-center justify-center bg-[#0D0D0D] border border-[#C9A84C]/40 mb-6"
                    whileHover={{ borderColor: "rgba(201,168,76,0.9)", scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="font-[family-name:var(--font-cinzel)] text-2xl font-bold gold-gradient">{step.num}</span>
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#C9A84C]" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#C9A84C]" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#C9A84C]" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#C9A84C]" />
                  </motion.div>
                  <h3 className="font-[family-name:var(--font-cinzel)] text-base font-semibold mb-3">{step.title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
