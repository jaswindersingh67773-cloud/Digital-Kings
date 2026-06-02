import { Globe, Link2, X as XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LEGAL_LINKS = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Cookies", href: "/cookies" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] bg-[#0D0D0D] px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image src="/logo-v2.png" alt="Digital Kings" width={33} height={50} className="object-contain" />
          <div>
            <span className="font-[family-name:var(--font-cinzel)] text-lg font-bold gold-gradient block">DIGITAL KINGS</span>
            <p className="text-[#888] text-xs mt-0.5 tracking-wider">Digital Marketing & AI Automation</p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-[#888] text-xs tracking-widest uppercase">
          {["Services", "About", "Results", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-[#C9A84C] transition-colors">
              {l}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {[Globe, Link2, XIcon].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-9 h-9 border border-[#2A2A2A] flex items-center justify-center text-[#888] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200"
              aria-label="Social link"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-[#1A1A1A] flex flex-col gap-5">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {LEGAL_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[#888] text-xs tracking-widest uppercase hover:text-[#C9A84C] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#555] text-xs">© {new Date().getFullYear()} Digital Kings. All rights reserved.</p>
          <p className="text-[#555] text-xs">Built with precision. Powered by results.</p>
        </div>
      </div>
    </footer>
  );
}
