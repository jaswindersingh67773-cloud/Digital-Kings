export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 mb-4">
      <div className="h-px w-8 bg-[#C9A84C]" />
      <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase">{children}</span>
      <div className="h-px w-8 bg-[#C9A84C]" />
    </div>
  );
}
