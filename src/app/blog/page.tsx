import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { blogPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Digital Kings",
  description:
    "Engineering-led insights on AI automation, web development, and data-driven digital marketing. No fluff — just what actually works.",
  alternates: {
    canonical: "https://digikings.net/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0D0D0D] pt-32 pb-28 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase">
                Insights
              </span>
              <div className="h-px w-8 bg-[#C9A84C]" />
            </div>
            <h1 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-4">
              The{" "}
              <span className="gold-gradient">Digital Kings</span> Blog
            </h1>
            <p className="text-[#777] text-lg max-w-2xl mx-auto">
              Engineering-led thinking on AI automation, conversion-focused web development, and marketing that is built on data rather than guesswork.
            </p>
          </div>

          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A]">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-[#0D0D0D] p-8 flex flex-col group hover:bg-[#111] transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[10px] px-3 py-1.5 border border-[#C9A84C]/40 text-[#C9A84C] tracking-wider uppercase font-medium">
                    {post.category}
                  </span>
                </div>

                <h2 className="font-[family-name:var(--font-cinzel)] text-lg font-semibold text-[#F5F0E8] mb-3 leading-snug group-hover:text-[#E8C97A] transition-colors duration-200">
                  {post.title}
                </h2>

                <p className="text-[#777] text-sm leading-relaxed mb-6 flex-grow">
                  {post.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#1E1E1E]">
                  <div className="flex items-center gap-4 text-[#555] text-xs tracking-wide">
                    <span>{formatDate(post.date)}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#C9A84C] text-xs tracking-widest uppercase hover:text-[#E8C97A] transition-colors duration-200 flex items-center gap-1.5"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
