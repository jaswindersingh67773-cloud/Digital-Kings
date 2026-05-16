"use client";
import { motion } from "motion/react";
import { type ReactNode } from "react";

interface GoldButtonProps {
  children: ReactNode;
  variant?: "solid" | "outline";
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
}

export default function GoldButton({ children, variant = "solid", onClick, href, className = "", disabled = false }: GoldButtonProps) {
  const base = "inline-flex items-center gap-2 px-8 py-4 font-semibold tracking-widest uppercase text-sm transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  const solid = "bg-gradient-to-r from-[#9A7B2F] via-[#C9A84C] to-[#E8C97A] text-[#0D0D0D] hover:opacity-90";
  const outline = "border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0D0D0D]";

  const classes = `${base} ${variant === "solid" ? solid : outline} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
