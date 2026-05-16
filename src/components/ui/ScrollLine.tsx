"use client";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const TAIL_HEIGHT = "45vh";
const TAIL_HEIGHT_NUM = 45; // matches above in vh

export default function ScrollLine({ show }: { show: boolean }) {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 35, damping: 18 });

  // Head travels from top (0vh) to bottom (100vh) of screen as you scroll
  const headY = useTransform(smooth, [0, 1], ["0vh", "100vh"]);

  // Tail top = headY - TAIL_HEIGHT (always trails above the head)
  const tailTop = useTransform(
    smooth,
    [0, 1],
    [`-${TAIL_HEIGHT_NUM}vh`, `${100 - TAIL_HEIGHT_NUM}vh`]
  );

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{ right: "28px", top: 0, bottom: 0, width: "2px" }}
    >
      {/* Fading tail — gradient from fully transparent → bright gold at head */}
      <motion.div
        style={{
          position: "absolute",
          left: 0,
          top: tailTop,
          width: "1px",
          height: TAIL_HEIGHT,
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.04) 20%, rgba(201,168,76,0.18) 50%, rgba(201,168,76,0.65) 80%, #C9A84C 100%)",
        }}
        initial={{ opacity: 0 }}
        animate={show ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />

      {/* Glowing head dot — travels down as you scroll */}
      <motion.div
        style={{
          position: "absolute",
          left: "50%",
          top: headY,
          translateX: "-50%",
          translateY: "-50%",
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          background: "#E8C97A",
          boxShadow:
            "0 0 6px 2px rgba(232,201,122,0.9), 0 0 16px 6px rgba(201,168,76,0.45), 0 0 32px 10px rgba(201,168,76,0.15)",
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "backOut" }}
      />

      {/* Thin circuit track (barely visible) — shoots from center on entry */}
      <motion.div
        className="absolute inset-0 origin-center"
        style={{ width: "1px", background: "rgba(201,168,76,0.08)" }}
        initial={{ scaleY: 0 }}
        animate={show ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Small circuit node at top */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          translateX: "-50%",
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          background: "#C9A84C",
          opacity: 0.4,
        }}
        initial={{ scale: 0 }}
        animate={show ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: 1.0, duration: 0.3, ease: "backOut" }}
      />

      {/* Small circuit node at bottom */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          translateX: "-50%",
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          background: "#C9A84C",
          opacity: 0.4,
        }}
        initial={{ scale: 0 }}
        animate={show ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: 1.1, duration: 0.3, ease: "backOut" }}
      />
    </div>
  );
}
