"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const anchorLinks = ["About", "Results", "Process", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(13,13,13,0)", "rgba(13,13,13,0.95)"]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  const linkClass =
    "text-sm tracking-widest uppercase text-[#888] hover:text-[#C9A84C] transition-colors duration-200";

  return (
    <motion.nav
      style={{ backgroundColor: bg }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
    >
      <motion.div
        style={{ opacity: borderOpacity }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent"
      />
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/logo-v2.png"
            alt="Digital Kings"
            width={40}
            height={61}
            className="object-contain"
            priority
          />
          <span className="font-[family-name:var(--font-cinzel)] text-xl font-bold gold-gradient">DIGITAL KINGS</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {/* Page links */}
          <Link href="/services/ai-automation" className={linkClass}>
            Services
          </Link>
          <Link href="/blog" className={linkClass}>
            Blog
          </Link>
          <Link href="/locations" className={linkClass}>
            Locations
          </Link>
          {/* Anchor links (homepage sections) */}
          {anchorLinks.map((link) => (
            <a
              key={link}
              href={`/#${link.toLowerCase()}`}
              className={linkClass}
            >
              {link}
            </a>
          ))}
          <a
            href="/#contact"
            className="px-6 py-2.5 border border-[#C9A84C] text-[#C9A84C] text-sm tracking-widest uppercase hover:bg-[#C9A84C] hover:text-[#0D0D0D] transition-all duration-300"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden text-[#C9A84C] cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#141414] border-t border-[#2A2A2A] px-6 py-6 flex flex-col gap-4"
        >
          <Link
            href="/services/ai-automation"
            onClick={() => setOpen(false)}
            className="text-sm tracking-widest uppercase text-[#888] hover:text-[#C9A84C] transition-colors"
          >
            Services
          </Link>
          <Link
            href="/blog"
            onClick={() => setOpen(false)}
            className="text-sm tracking-widest uppercase text-[#888] hover:text-[#C9A84C] transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/locations"
            onClick={() => setOpen(false)}
            className="text-sm tracking-widest uppercase text-[#888] hover:text-[#C9A84C] transition-colors"
          >
            Locations
          </Link>
          {anchorLinks.map((link) => (
            <a
              key={link}
              href={`/#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-sm tracking-widest uppercase text-[#888] hover:text-[#C9A84C] transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="px-6 py-3 border border-[#C9A84C] text-[#C9A84C] text-sm tracking-widest uppercase text-center hover:bg-[#C9A84C] hover:text-[#0D0D0D] transition-all duration-300"
          >
            Get Started
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
