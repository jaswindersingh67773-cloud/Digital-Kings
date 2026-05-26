"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import Link from "next/link";

const FAQ_CATEGORIES = [
  {
    category: "AI Automation",
    questions: [
      {
        q: "What is AI automation and how is it different from regular automation?",
        a: "Regular automation follows fixed rules — if X happens, do Y. AI automation adds a reasoning layer: it can classify unstructured data, make judgment calls, handle exceptions, and adapt to context. For example, a standard automation can forward an email. An AI automation can read the email, determine it's a sales enquiry, extract the key details, score it against your ideal client criteria, draft a personalised reply, and add it to your CRM — all without a human.",
      },
      {
        q: "What can AI automation do for my business specifically?",
        a: "The highest-ROI use cases we see consistently: lead qualification and routing, CRM data entry from calls and emails, automated reporting dashboards, follow-up email sequences with conditional logic, client onboarding workflows, invoice and document processing, and customer support triage. The right starting point depends on where your team spends the most time on repetitive work.",
      },
      {
        q: "What tools do you use to build automations?",
        a: "Primarily n8n for workflow orchestration — it's open-source, self-hostable, and more powerful than Zapier for complex flows. For AI capabilities we use OpenAI's GPT-4o and Anthropic's Claude depending on the task. We also integrate directly with HubSpot, Salesforce, Slack, Airtable, Google Workspace, and any tool with an API. You own everything we build.",
      },
      {
        q: "How much does AI automation cost?",
        a: "Most small business automation projects start between $1,500–$5,000 depending on complexity. A single-workflow build (e.g. lead qualification + CRM entry) is at the lower end. Multi-system integrations with custom AI agents are at the higher end. We scope every project individually after a free audit — no quotes before we understand the problem.",
      },
      {
        q: "How long does it take to set up AI automation?",
        a: "Simple single-workflow automations: 1–2 weeks. Multi-system integrations with AI layers: 3–6 weeks. We agree on scope and timeline before starting and don't move goalposts. You'll have a working system, full documentation, and a handover session before we close the project.",
      },
      {
        q: "Do I need any technical knowledge to use the automations you build?",
        a: "None. We build, document, and hand over everything with a training session included. Most clients are operating their automations independently within a day of handover. If something breaks or needs updating down the line, we offer ongoing support.",
      },
      {
        q: "Do you serve businesses in Kent, Tacoma, Renton and other Washington cities?",
        a: "Yes — we serve businesses across the greater Seattle/Puget Sound area including Bellevue, Redmond, Issaquah, Renton, Kent, Auburn, Federal Way, Tacoma, and Sammamish. All work is delivered remotely so location within Washington state doesn't affect the quality or speed of delivery.",
      },
    ],
  },
  {
    category: "Digital Marketing",
    questions: [
      {
        q: "What digital marketing services do you offer?",
        a: "Paid advertising (Google Ads, Meta Ads), search engine optimisation (SEO), email marketing and automation, social media management, analytics setup and reporting, and lead generation campaigns. We don't offer PR or traditional media — purely performance-driven digital channels.",
      },
      {
        q: "What makes your approach to digital marketing different?",
        a: "The engineering background. Every campaign is built as a system — proper tracking before any spend, data-driven creative testing, automated reporting, and continuous optimisation cycles. We don't guess at what's working. We instrument everything and let the data decide. Most agencies guess; we measure.",
      },
      {
        q: "What budget do I need for paid advertising?",
        a: "For Google Ads or Meta Ads to generate meaningful data quickly, we recommend a minimum ad spend of $1,500–$2,000/month. Below that, the learning algorithms don't have enough data to optimise effectively. Our management fee is separate from ad spend and depends on account complexity.",
      },
      {
        q: "How long before I see results from SEO?",
        a: "Honest answer: 3–6 months for meaningful organic movement on competitive keywords, faster for local and long-tail terms. SEO compounds — the work done in month 1 pays dividends in month 12. Anyone promising page-1 rankings in 30 days is lying to you.",
      },
    ],
  },
  {
    category: "Web Development",
    questions: [
      {
        q: "What tech stack do you build websites on?",
        a: "Next.js (React framework), TypeScript, Tailwind CSS, deployed on Vercel. This stack gives you server-side rendering for SEO, edge CDN for speed, and a codebase that's maintainable long-term. We don't use WordPress, Wix, Squarespace, or page builders — every site is custom-built.",
      },
      {
        q: "Why not use WordPress or a website builder?",
        a: "Speed, security, and performance. A custom Next.js site typically loads 3–5x faster than a WordPress site, has no plugin vulnerabilities to patch, and is built specifically for your conversion goals rather than adapted from a template. The initial cost is higher; the long-term cost is lower.",
      },
      {
        q: "How much does a custom website cost?",
        a: "A professional marketing website (homepage, service pages, blog, contact) typically starts from $3,000–$6,000 depending on complexity and content requirements. E-commerce and web applications are scoped separately. We don't quote without a brief — contact us and we'll give you an honest number.",
      },
      {
        q: "Do you handle SEO as part of the website build?",
        a: "Yes — SEO is baked into every build. That means proper metadata, structured data (JSON-LD schema), canonical URLs, sitemap, robots.txt, Core Web Vitals optimisation, and semantic HTML. You don't pay extra for the basics to be done right.",
      },
    ],
  },
  {
    category: "Working Together",
    questions: [
      {
        q: "Who will I actually be working with?",
        a: "Me — directly. There are no account managers, no junior staff handling your project, no miscommunication between strategy and execution. You have my direct contact from day one. That's not a selling point I'll drop after you sign — it's how the business is structured.",
      },
      {
        q: "Do you take on clients outside Washington state?",
        a: "Yes. Digital marketing, AI automation, and web development are all delivered remotely. The Washington city pages reflect where we focus local SEO efforts — but we work with businesses anywhere in the US and internationally.",
      },
      {
        q: "What does the onboarding process look like?",
        a: "1. Free strategy call — 30 minutes, no pitch, just an honest assessment of your situation and what I can genuinely help with. 2. Scoping — I document exactly what we'll build, timeline, and cost. 3. Kickoff — once agreed, we start within the week. No lengthy contracts, no retainer lock-ins on project work.",
      },
      {
        q: "What if I'm not happy with the work?",
        a: "Every project has defined deliverables agreed upfront. We don't close a project until those deliverables are met. If something isn't right, we fix it — that's part of the scope, not a negotiation. I'd rather spend an extra week getting it right than hand over something I'm not proud of.",
      },
    ],
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border border-[#2A2A2A] hover:border-[#C9A84C]/40 transition-colors duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[#F5F0E8] text-sm font-medium leading-relaxed">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 mt-0.5"
        >
          <ChevronDown size={16} className="text-[#C9A84C]" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-[#888] text-sm leading-relaxed border-t border-[#1A1A1A] pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FAQCategory({ cat, catIndex }: { cat: typeof FAQ_CATEGORIES[0]; catIndex: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="mb-14"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="h-px w-6 bg-[#C9A84C]" />
        <h2 className="font-[family-name:var(--font-cinzel)] text-lg font-semibold gold-gradient">
          {cat.category}
        </h2>
      </div>
      <div className="flex flex-col gap-2">
        {cat.questions.map((item, i) => (
          <FAQItem key={i} q={item.q} a={item.a} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

export default function FAQPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const totalQuestions = FAQ_CATEGORIES.reduce((acc, c) => acc + c.questions.length, 0);

  return (
    <>
      <Navbar />
      <main className="bg-[#0D0D0D] min-h-screen">

        {/* Hero */}
        <section className="pt-36 pb-20 px-6 relative overflow-hidden">
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
              <SectionLabel>Got Questions</SectionLabel>
              <h1 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl font-bold mb-5">
                Frequently Asked <span className="gold-gradient">Questions</span>
              </h1>
              <p className="text-[#888] text-lg leading-relaxed mb-4">
                {totalQuestions} honest answers about AI automation, digital marketing,
                web development, and working together.
              </p>
              <p className="text-[#555] text-sm">
                Don&apos;t see your question?{" "}
                <Link href="/#contact" className="text-[#C9A84C] hover:underline">
                  Ask directly →
                </Link>
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="pb-28 px-6">
          <div className="max-w-3xl mx-auto">
            {FAQ_CATEGORIES.map((cat, i) => (
              <FAQCategory key={cat.category} cat={cat} catIndex={i} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pb-28 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative border border-[#C9A84C]/20 p-10 md:p-14 text-center overflow-hidden">
              {/* Corner accents */}
              {["top-0 left-0 border-t border-l", "top-0 right-0 border-t border-r",
                "bottom-0 left-0 border-b border-l", "bottom-0 right-0 border-b border-r"].map((cls, i) => (
                <div key={i} className={`absolute w-5 h-5 border-[#C9A84C] ${cls}`} />
              ))}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.04), transparent)" }}
              />
              <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-3">Still Have Questions?</p>
              <h2 className="font-[family-name:var(--font-cinzel)] text-2xl md:text-3xl font-bold mb-4">
                Let&apos;s Talk It Through
              </h2>
              <p className="text-[#888] mb-8 max-w-lg mx-auto">
                A 30-minute call costs nothing. You&apos;ll get a straight answer
                about whether we&apos;re a good fit — no pitch, no pressure.
              </p>
              <motion.a
                href="/#contact"
                className="inline-flex items-center gap-2 px-9 py-4 bg-gradient-to-r from-[#9A7B2F] via-[#C9A84C] to-[#E8C97A] text-[#0D0D0D] font-bold tracking-widest uppercase text-sm"
                whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(201,168,76,0.35)" }}
                whileTap={{ scale: 0.97 }}
              >
                Book a Free Call
              </motion.a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
