"use client";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const STRANDS = [
  // RIGHT side
  {
    id: "r1",
    d: "M 800 480 L 920 480 L 920 540 L 1060 540 L 1060 490 L 1340 490",
    delay: 0.8, dur: 3.2, opacity: 0.6,
    nodes: [{ x: 920, y: 540 }, { x: 1060, y: 490 }],
  },
  {
    id: "r2",
    d: "M 795 380 L 880 380 L 880 310 L 1020 310 L 1020 240 L 1180 240 L 1180 180",
    delay: 1.2, dur: 3.8, opacity: 0.5,
    nodes: [{ x: 880, y: 310 }, { x: 1020, y: 240 }, { x: 1180, y: 180 }],
  },
  {
    id: "r3",
    d: "M 800 550 L 920 550 L 920 640 L 1080 640 L 1080 720 L 1300 720",
    delay: 1.5, dur: 3.6, opacity: 0.45,
    nodes: [{ x: 920, y: 640 }, { x: 1080, y: 720 }],
  },
  // LEFT side
  {
    id: "l1",
    d: "M 640 445 L 480 445 L 480 400 L 320 400 L 320 445 L 60 445",
    delay: 0.6, dur: 3.5, opacity: 0.85,
    nodes: [{ x: 480, y: 400 }, { x: 320, y: 445 }],
  },
  {
    id: "l2",
    d: "M 640 480 L 520 480 L 520 540 L 380 540 L 380 490 L 100 490",
    delay: 0.9, dur: 3.2, opacity: 0.6,
    nodes: [{ x: 520, y: 540 }, { x: 380, y: 490 }],
  },
  {
    id: "l3",
    d: "M 645 380 L 560 380 L 560 300 L 420 300 L 420 240 L 260 240 L 260 180",
    delay: 1.1, dur: 3.8, opacity: 0.5,
    nodes: [{ x: 560, y: 300 }, { x: 420, y: 240 }, { x: 260, y: 180 }],
  },
  {
    id: "l4",
    d: "M 640 550 L 520 550 L 520 640 L 360 640 L 360 720 L 140 720",
    delay: 1.4, dur: 3.6, opacity: 0.45,
    nodes: [{ x: 520, y: 640 }, { x: 360, y: 720 }],
  },
  // TOP
  {
    id: "t1",
    d: "M 720 328 L 720 240 L 760 240 L 760 150 L 710 150 L 710 30",
    delay: 1.0, dur: 3.2, opacity: 0.85,
    nodes: [{ x: 760, y: 240 }, { x: 710, y: 150 }],
  },
  {
    id: "t2",
    d: "M 760 340 L 840 340 L 840 260 L 960 260 L 960 170 L 1080 170 L 1080 60",
    delay: 1.3, dur: 3.6, opacity: 0.6,
    nodes: [{ x: 840, y: 260 }, { x: 960, y: 170 }, { x: 1080, y: 60 }],
  },
  {
    id: "t3",
    d: "M 680 340 L 600 340 L 600 260 L 480 260 L 480 170 L 360 170 L 360 60",
    delay: 1.2, dur: 3.6, opacity: 0.6,
    nodes: [{ x: 600, y: 260 }, { x: 480, y: 170 }, { x: 360, y: 60 }],
  },
  {
    id: "t4",
    d: "M 800 360 L 900 360 L 900 260 L 1060 260 L 1060 140 L 1240 140",
    delay: 1.6, dur: 3.4, opacity: 0.4,
    nodes: [{ x: 900, y: 260 }, { x: 1060, y: 140 }],
  },
  // BOTTOM
  {
    id: "b1",
    d: "M 720 572 L 720 660 L 760 660 L 760 760 L 710 760 L 710 880",
    delay: 0.9, dur: 3.2, opacity: 0.85,
    nodes: [{ x: 760, y: 660 }, { x: 710, y: 760 }],
  },
  {
    id: "b2",
    d: "M 760 562 L 840 562 L 840 660 L 980 660 L 980 760 L 1120 760",
    delay: 1.1, dur: 3.4, opacity: 0.65,
    nodes: [{ x: 840, y: 660 }, { x: 980, y: 760 }],
  },
  {
    id: "b3",
    d: "M 680 562 L 600 562 L 600 660 L 460 660 L 460 760 L 320 760",
    delay: 1.0, dur: 3.4, opacity: 0.65,
    nodes: [{ x: 600, y: 660 }, { x: 460, y: 760 }],
  },
  {
    id: "b4",
    d: "M 795 548 L 900 548 L 900 650 L 1060 650 L 1060 780 L 1240 780 L 1240 890",
    delay: 1.4, dur: 3.8, opacity: 0.4,
    nodes: [{ x: 900, y: 650 }, { x: 1060, y: 780 }, { x: 1240, y: 890 }],
  },
  // SPECIAL — the strand that shoots to the right on scroll
  {
    id: "special",
    d: "M 802 452 L 950 452 L 950 408 L 1110 408 L 1110 452 L 1440 452",
    delay: 0.4, dur: 4.2, opacity: 1.0,
    nodes: [{ x: 950, y: 408 }, { x: 1110, y: 452 }],
    endpoint: { x: 1440, y: 452 },
  },
];

const SPECIAL = STRANDS[STRANDS.length - 1];
const REGULAR = STRANDS.slice(0, -1);

export default function IntroScreen({ onExit }: { onExit: () => void }) {
  const [scrollStarted, setScrollStarted] = useState(false);
  const { scrollY } = useScroll();

  const overlayOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const logoScale = useTransform(scrollY, [0, 300], [1, 0.88]);
  const logoY = useTransform(scrollY, [0, 300], [0, -28]);

  useMotionValueEvent(scrollY, "change", (y) => {
    if (y > 8 && !scrollStarted) setScrollStarted(true);
    if (y > 270) onExit();
  });

  return (
    <motion.div
      style={{ opacity: overlayOpacity }}
      className="fixed inset-0 z-[100] bg-[#0D0D0D] overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <filter id="glow-f">
            <feGaussianBlur stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="strand-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0" />
            <stop offset="25%" stopColor="#C9A84C" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#E8C97A" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Regular strands — all fade when scroll starts */}
        {REGULAR.map((s) => (
          <motion.g
            key={s.id}
            animate={scrollStarted ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <motion.path
              d={s.d}
              stroke="#C9A84C"
              strokeWidth="1"
              strokeOpacity={s.opacity}
              fill="none"
              filter="url(#glow-f)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: s.opacity }}
              transition={{
                pathLength: { duration: s.dur, delay: s.delay, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.4, delay: s.delay },
              }}
            />
            {s.nodes.map((n, ni) => (
              <motion.circle
                key={ni}
                cx={n.x} cy={n.y} r="2.5"
                fill="#C9A84C"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: s.opacity }}
                transition={{ delay: s.delay + s.dur * 0.6 + ni * 0.3, duration: 0.35, ease: "backOut" }}
              />
            ))}
          </motion.g>
        ))}

        {/* SPECIAL strand — slides to the right when scroll starts */}
        <motion.g
          animate={
            scrollStarted
              ? { x: 320, opacity: 0 }
              : { x: 0, opacity: 1 }
          }
          transition={{
            x: { duration: 0.9, ease: [0.4, 0, 0.2, 1] },
            opacity: { duration: 0.6, delay: 0.15 },
          }}
        >
          <motion.path
            d={SPECIAL.d}
            stroke="url(#strand-grad)"
            strokeWidth="1.4"
            fill="none"
            filter="url(#glow-f)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: SPECIAL.dur, delay: SPECIAL.delay, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.4, delay: SPECIAL.delay },
            }}
          />
          {SPECIAL.nodes.map((n, ni) => (
            <motion.circle
              key={ni}
              cx={n.x} cy={n.y} r="3"
              fill="#C9A84C"
              filter="url(#glow-f)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: SPECIAL.delay + SPECIAL.dur * 0.5 + ni * 0.4, duration: 0.4, ease: "backOut" }}
            />
          ))}
          {/* Bright endpoint where it meets the screen right edge */}
          {"endpoint" in SPECIAL && SPECIAL.endpoint && (
            <>
              <motion.circle
                cx={SPECIAL.endpoint.x} cy={SPECIAL.endpoint.y} r="4"
                fill="#E8C97A"
                filter="url(#glow-f)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: SPECIAL.delay + SPECIAL.dur + 0.2, duration: 0.5, ease: "backOut" }}
              />
              <motion.circle
                cx={SPECIAL.endpoint.x} cy={SPECIAL.endpoint.y} r="10"
                fill="none" stroke="#C9A84C" strokeWidth="0.6"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 2], opacity: [0.7, 0] }}
                transition={{ delay: SPECIAL.delay + SPECIAL.dur + 0.5, duration: 1.2, ease: "easeOut" }}
              />
            </>
          )}
        </motion.g>

        {/* Pulse rings from logo center */}
        {[0.5, 1.8].map((delay, i) => (
          <motion.circle
            key={i}
            cx="720" cy="450" r="88"
            fill="none" stroke="#C9A84C" strokeWidth="0.4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.6], opacity: [0.3, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay }}
          />
        ))}
      </svg>

      {/* Background glow */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="w-[380px] h-[380px] rounded-full bg-[#C9A84C] blur-[110px]"
          animate={{ opacity: [0.05, 0.11, 0.05], scale: [1, 1.1, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Logo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          style={{ scale: logoScale, y: logoY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <motion.div
            animate={{
              filter: [
                "drop-shadow(0 0 10px rgba(201,168,76,0.2))",
                "drop-shadow(0 0 32px rgba(201,168,76,0.6))",
                "drop-shadow(0 0 10px rgba(201,168,76,0.2))",
              ],
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/logo-v2.png"
              alt="Digital Kings"
              width={148}
              height={225}
              priority
              className="object-contain"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.05em" }}
            animate={{ opacity: 1, letterSpacing: "0.38em" }}
            transition={{ delay: 0.5, duration: 1.4, ease: "easeOut" }}
            className="mt-5 font-[family-name:var(--font-cinzel)] text-xl font-bold gold-gradient"
          >
            DIGITAL KINGS
          </motion.span>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.55, 0] }}
            transition={{ delay: 1.8, duration: 2.5, repeat: Infinity }}
            className="mt-9 text-[#666] text-[10px] tracking-[0.55em] uppercase"
          >
            Scroll to Enter
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
