import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { blogPosts, getBlogPost, formatDate } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Digital Kings`,
    description: post.description,
    alternates: {
      canonical: `https://digikings.net/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://digikings.net/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0D0D0D] pt-32 pb-28 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#555] text-xs tracking-widest uppercase hover:text-[#C9A84C] transition-colors duration-200 mb-12"
          >
            ← Back to Blog
          </Link>

          {/* Article header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] px-3 py-1.5 border border-[#C9A84C]/40 text-[#C9A84C] tracking-wider uppercase font-medium">
                {post.category}
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-4xl font-bold text-[#F5F0E8] leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-[#555] text-sm pb-8 border-b border-[#1E1E1E]">
              <span>{formatDate(post.date)}</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          {/* Article body */}
          <div
            className="prose-dk"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              color: "#A0998E",
              lineHeight: "1.85",
              fontSize: "1rem",
            }}
          />

          {/* Related CTA */}
          <div className="mt-20 pt-12 border-t border-[#1E1E1E]">
            <p className="font-[family-name:var(--font-cinzel)] text-xl text-[#F5F0E8] mb-4">
              Ready to apply engineering thinking to your business?
            </p>
            <p className="text-[#666] text-sm mb-6">
              Every system described in this article is something we build for clients. Let us scope it.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#9A7B2F] via-[#C9A84C] to-[#E8C97A] text-[#0D0D0D] text-sm font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity duration-200"
            >
              Get in Touch →
            </a>
          </div>
        </div>
      </main>

      {/* Inline prose styles — scoped to article body */}
      <style>{`
        .prose-dk h2 {
          font-family: var(--font-cinzel), serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #C9A84C;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        .prose-dk p {
          margin-bottom: 1.25rem;
        }
        .prose-dk ul {
          list-style: none;
          padding: 0;
          margin-bottom: 1.25rem;
        }
        .prose-dk li {
          padding-left: 1.25rem;
          position: relative;
          margin-bottom: 0.85rem;
        }
        .prose-dk li::before {
          content: "—";
          position: absolute;
          left: 0;
          color: #C9A84C;
        }
        .prose-dk strong {
          color: #E8C97A;
          font-weight: 600;
        }
        .prose-dk a {
          color: #C9A84C;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .prose-dk a:hover {
          color: #E8C97A;
        }
      `}</style>
      <Footer />
    </>
  );
}
