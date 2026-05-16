"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import SectionLabel from "../ui/SectionLabel";
import { ArrowRight, Lightbulb, Zap, Shield } from "lucide-react";

const REASONS = [
  {
    icon: Lightbulb,
    title: "You Get The Engineer, Not The Salesperson",
    desc: "When you work with me, you're talking directly to the person who builds your systems. No account managers, no miscommunication between strategy and execution.",
  },
  {
    icon: Zap,
    title: "Technical Depth Most Agencies Don't Have",
    desc: "I can build the landing page, set up the ad campaigns, wire up the AI automation, and connect it all to your CRM — because I built each piece myself.",
  },
  {
    icon: Shield,
    title: "Honest From Day One",
    desc: "I won't promise you the world to win your business. I'll tell you what's realistic, what takes time, and what I can genuinely deliver — then I'll over-deliver on that.",
  },
];

export default function Testimonials() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section className="py-28 md:py-36 px-6 relative overflow-hidden">
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
          <SectionLabel>Why Work With Me</SectionLabel>
          <h2 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl font-bold mb-4">
            The Honest <span className="gold-gradient">Difference</span>
          </h2>
          <p className="text-[#666] text-lg max-w-2xl mx-auto">
            I&apos;m at the start of this journey — but I bring 10 years of engineering
            discipline, and I&apos;m building your success story alongside my own.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1A1A1A] mb-16">
          {REASONS.map((r, i) => {
            const ref = useRef(null);
            const rInView = useInView(ref, { once: true, margin: "-60px" });
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                ref={ref}
                initial={{ opacity: 0, rotateY: 12, x: 40 }}
                animate={rInView ? { opacity: 1, rotateY: 0, x: 0 } : {}}
                transition={{ duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#111] p-8 flex flex-col relative group overflow-hidden"
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.06), transparent)" }}
                />
                <div className="w-11 h-11 flex items-center justify-center border border-[#2A2A2A] group-hover:border-[#C9A84C]/50 transition-colors duration-300 mb-5">
                  <Icon size={19} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-[family-name:var(--font-cinzel)] text-base font-semibold text-[#F5F0E8] mb-3">{r.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* First client CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative border border-[#C9A84C]/20 p-12 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.04), transparent)" }} />
          {/* Corner accents */}
          {["top-0 left-0 border-t border-l", "top-0 right-0 border-t border-r", "bottom-0 left-0 border-b border-l", "bottom-0 right-0 border-b border-r"].map((cls, i) => (
            <div key={i} className={`absolute w-6 h-6 border-[#C9A84C] ${cls}`} />
          ))}
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">Limited Early Clients</p>
          <h3 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-4xl font-bold mb-4">
            Be The First Success Story
          </h3>
          <p className="text-[#666] text-lg max-w-xl mx-auto mb-8">
            I&apos;m taking on my first clients and I&apos;ll go all-in for them.
            Early partners get my full attention, preferential rates, and a builder
            who is genuinely invested in making it work.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-9 py-4 bg-gradient-to-r from-[#9A7B2F] via-[#C9A84C] to-[#E8C97A] text-[#0D0D0D] font-bold tracking-widest uppercase text-sm"
            whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(201,168,76,0.35)" }}
            whileTap={{ scale: 0.97 }}
          >
            Start The Conversation <ArrowRight size={15} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
