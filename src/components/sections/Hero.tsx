"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const HEADLINE = ["Engineering", "Meets", "Digital", "Growth"];
const PILLARS = [
  { value: "10 Years", label: "Software Engineering" },
  { value: "AI-First", label: "Automation Systems" },
  { value: "Full Stack", label: "Custom Web Builds" },
  { value: "Data-Led", label: "Digital Marketing" },
];

function spawnParticles(cx: number, cy: number, count: number) {
  return Array.from({ length: count }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 9 + 2;
    const life = Math.random() * 90 + 50;
    return {
      x: cx, y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: Math.random() * 2.8 + 0.4,
      life, maxLife: life,
    };
  });
}

export default function Hero({ introComplete }: { introComplete: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  // phase: 0=waiting 1=logo 2=particles 3=text 4=full
  const [phase, setPhase] = useState(0);

  // Start sequence when intro exits
  useEffect(() => {
    if (!introComplete) return;
    const t1 = setTimeout(() => setPhase(1), 100);
    const t2 = setTimeout(() => setPhase(2), 1200);
    const t3 = setTimeout(() => setPhase(3), 2400);
    const t4 = setTimeout(() => setPhase(4), 3800);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [introComplete]);

  // Particle explosion on phase 2
  useEffect(() => {
    if (phase !== 2) return;
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const rect = section.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    const ctx = canvas.getContext("2d")!;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const particles = spawnParticles(cx, cy, 220);
    let rafId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      for (const p of particles) {
        if (p.life <= 0) continue;
        alive = true;
        p.x += p.vx; p.y += p.vy;
        p.vx *= 0.965; p.vy *= 0.965;
        p.vy += 0.06;
        p.life--;
        const o = Math.pow(p.life / p.maxLife, 1.4);
        // Main dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${o})`;
        ctx.fill();
        // Trail
        ctx.beginPath();
        ctx.arc(p.x - p.vx * 2.5, p.y - p.vy * 2.5, p.size * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232,201,122,${o * 0.35})`;
        ctx.fill();
      }
      if (alive) rafId = requestAnimationFrame(draw);
    };
    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, [phase]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0D]"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: phase >= 3 ? 1 : 0 }}
        transition={{ duration: 2 }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)",
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* Canvas particle layer */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

      {/* Logo — phases 1 & 2, fades on phase 3 */}
      <AnimatePresence>
        {phase >= 1 && phase < 3 && (
          <motion.div
            key="hero-logo"
            className="absolute z-20 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{
                filter: [
                  "drop-shadow(0 0 20px rgba(201,168,76,0.3))",
                  "drop-shadow(0 0 60px rgba(201,168,76,0.8))",
                  "drop-shadow(0 0 20px rgba(201,168,76,0.3))",
                ],
              }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              <Image src="/logo-v2.png" alt="Digital Kings" width={160} height={243} priority />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO CONTENT — phase 3+ */}
      <div className="relative z-30 max-w-6xl mx-auto px-6 text-center w-full">
        {/* Light beam sweep across headline */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] overflow-hidden pointer-events-none">
          <motion.div
            className="h-full"
            style={{ background: "linear-gradient(90deg, transparent, #E8C97A 50%, transparent)", width: "40%" }}
            initial={{ x: "-100%" }}
            animate={phase >= 3 ? { x: "300%" } : {}}
            transition={{ duration: 1.1, ease: "easeInOut", delay: 0.6 }}
          />
        </div>

        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.4em] uppercase">
            Digital Marketing & AI Automation
          </span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#C9A84C]" />
        </motion.div>

        {/* Headline — word by word, 3D flip in */}
        <h1
          aria-label="Engineering Meets Digital Growth"
          className="font-[family-name:var(--font-cinzel)] text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8"
          style={{ perspective: "800px" }}
        >
          {HEADLINE.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60, rotateX: -60 }}
              animate={phase >= 3 ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className={`inline-block mr-4 ${i === 3 ? "gold-gradient" : ""}`}
              aria-hidden="true"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-[#888] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          10 years building software systems. Now applying that same engineering
          precision to AI automation, digital marketing, and custom web development.
          Built different — because the builder is different.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-9 py-4 bg-gradient-to-r from-[#9A7B2F] via-[#C9A84C] to-[#E8C97A] text-[#0D0D0D] font-bold tracking-widest uppercase text-sm"
            whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(201,168,76,0.4)" }}
            whileTap={{ scale: 0.97 }}
          >
            Claim Your Throne <ArrowRight size={15} />
          </motion.a>
          <motion.a
            href="#results"
            className="inline-flex items-center gap-2 px-9 py-4 border border-[#C9A84C] text-[#C9A84C] font-semibold tracking-widest uppercase text-sm"
            whileHover={{ backgroundColor: "rgba(201,168,76,0.08)", scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            See Our Results
          </motion.a>
        </motion.div>

        {/* Pillars bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2A2A2A] border border-[#2A2A2A]"
        >
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.label}
              className="bg-[#111] px-6 py-6 text-center"
              initial={{ opacity: 0 }}
              animate={phase >= 4 ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <div className="font-[family-name:var(--font-cinzel)] text-xl font-bold gold-gradient mb-1">{p.value}</div>
              <div className="text-[#888] text-xs tracking-widest uppercase">{p.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
