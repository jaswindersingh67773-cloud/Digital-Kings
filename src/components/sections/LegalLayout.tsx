"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import Link from "next/link";

/* ── Typographic helpers used across all legal pages ─────────────── */

export function LegalSection({
  id,
  heading,
  children,
}: {
  id?: string;
  heading: string;
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mb-12 scroll-mt-28"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px w-6 bg-[#C9A84C]" />
        <h2 className="font-[family-name:var(--font-cinzel)] text-xl font-semibold gold-gradient">
          {heading}
        </h2>
      </div>
      <div className="flex flex-col gap-4 text-[#9A9A9A] text-sm leading-relaxed">
        {children}
      </div>
    </motion.section>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}

export function UL({ children }: { children: React.ReactNode }) {
  return <ul className="flex flex-col gap-2 pl-1">{children}</ul>;
}

export function LI({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="text-[#C9A84C] mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-[#C9A84C]" />
      <span>{children}</span>
    </li>
  );
}

export function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="text-[#F5F0E8] font-medium">{children}</strong>;
}

/* ── Page chrome ─────────────────────────────────────────────────── */

export default function LegalLayout({
  eyebrow,
  title,
  intro,
  lastUpdated,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      <Navbar />
      <main className="bg-[#0D0D0D] min-h-screen">
        {/* Hero */}
        <section className="pt-36 pb-14 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
            <motion.div
              className="h-full w-[40%]"
              style={{ background: "linear-gradient(90deg,transparent,#C9A84C,transparent)" }}
              initial={{ x: "-100%" }}
              animate={{ x: "300%" }}
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
            />
          </div>

          <div className="max-w-3xl mx-auto text-center" ref={heroRef}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <SectionLabel>{eyebrow}</SectionLabel>
              <h1 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl font-bold mb-5">
                {title}
              </h1>
              <p className="text-[#888] text-base md:text-lg leading-relaxed">{intro}</p>
              <p className="text-[#555] text-xs mt-5 tracking-wider uppercase">
                Last updated: {lastUpdated}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Body */}
        <section className="pb-24 px-6">
          <div className="max-w-3xl mx-auto border-t border-[#1A1A1A] pt-14">
            {children}

            {/* Contact footer block */}
            <div className="mt-4 border border-[#C9A84C]/20 p-8 md:p-10 text-center relative overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.04), transparent)" }}
              />
              <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-3">Questions?</p>
              <p className="text-[#888] text-sm mb-6 max-w-md mx-auto">
                If anything on this page is unclear, get in touch and we&apos;ll
                explain it in plain English.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 text-[#C9A84C] text-sm hover:underline"
              >
                Contact Digital Kings →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
