"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import SectionLabel from "../ui/SectionLabel";
import GoldButton from "../ui/GoldButton";
import { Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionLabel>Let&apos;s Talk</SectionLabel>
          <h2 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s Build <span className="gold-gradient">Something Real</span>
          </h2>
          <p className="text-[#888] text-lg">
            Tell me what you&apos;re working on. I&apos;ll give you an honest assessment
            of what&apos;s possible and exactly how I&apos;d approach it. No sales pitch — just a straight conversation.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="border border-[#C9A84C]/30 bg-[#141414] p-12 text-center"
          >
            <div className="font-[family-name:var(--font-cinzel)] text-2xl gold-gradient font-bold mb-3">Message Received</div>
            <p className="text-[#888]">We&apos;ll be in touch within 24 hours to schedule your strategy call.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="bg-[#141414] border border-[#2A2A2A] p-8 md:p-12 flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-[#888]">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  className="bg-[#0D0D0D] border border-[#2A2A2A] px-4 py-3 text-sm text-[#F5F0E8] placeholder-[#555] focus:outline-none focus:border-[#C9A84C] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-[#888]">Email</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="bg-[#0D0D0D] border border-[#2A2A2A] px-4 py-3 text-sm text-[#F5F0E8] placeholder-[#555] focus:outline-none focus:border-[#C9A84C] transition-colors"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-[#888]">Business Name</label>
                <input
                  type="text"
                  placeholder="Your company"
                  className="bg-[#0D0D0D] border border-[#2A2A2A] px-4 py-3 text-sm text-[#F5F0E8] placeholder-[#555] focus:outline-none focus:border-[#C9A84C] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-[#888]">Monthly Budget</label>
                <select
                  className="bg-[#0D0D0D] border border-[#2A2A2A] px-4 py-3 text-sm text-[#aaa] focus:outline-none focus:border-[#C9A84C] transition-colors"
                >
                  <option value="">Select range</option>
                  <option>Under $2,000</option>
                  <option>$2,000 – $5,000</option>
                  <option>$5,000 – $15,000</option>
                  <option>$15,000+</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest uppercase text-[#888]">Tell Us Your Goal</label>
              <textarea
                rows={4}
                required
                placeholder="What do you want to achieve? More leads, more sales, brand visibility..."
                className="bg-[#0D0D0D] border border-[#2A2A2A] px-4 py-3 text-sm text-[#F5F0E8] placeholder-[#555] focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
              />
            </div>
            <div className="flex justify-center pt-2">
              <GoldButton>
                Send Message <Send size={14} />
              </GoldButton>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
