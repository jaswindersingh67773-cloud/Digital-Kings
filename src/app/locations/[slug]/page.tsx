import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldButton from "@/components/ui/GoldButton";
import { locations, getLocationBySlug } from "@/lib/locations";
import { Bot, Globe, BarChart3, CheckCircle2, MapPin } from "lucide-react";

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: `https://digikings.net/locations/${location.slug}`,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `https://digikings.net/locations/${location.slug}`,
    },
  };
}

const SERVICES = [
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Custom n8n workflows, LLM integrations, and intelligent automation systems that eliminate repetitive tasks and generate leads while you focus on your business.",
  },
  {
    icon: Globe,
    title: "Custom Web Development",
    desc: "Full-stack websites built from scratch in Next.js — no templates, no page builders. Fast, accessible, and engineered to convert visitors into customers.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    desc: "Google Ads, Meta Ads, and SEO campaigns managed by an engineer — data-driven, rigorously tracked, and optimised relentlessly for cost-per-acquisition.",
  },
];

function SweepLine() {
  return (
    <div className="absolute top-0 left-0 right-0 h-px overflow-hidden pointer-events-none">
      <div
        className="h-full w-[40%]"
        style={{
          background:
            "linear-gradient(90deg, transparent, #C9A84C, transparent)",
        }}
      />
    </div>
  );
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Digital Kings",
    url: "https://digikings.net",
    logo: "https://digikings.net/logo-v2.png",
    priceRange: "$$",
    serviceArea: `${location.city}, ${location.stateCode}`,
    areaServed: {
      "@type": "City",
      name: location.city,
      containedInPlace: {
        "@type": "State",
        name: location.state,
      },
    },
    description: location.metaDescription,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer enquiries",
      email: "jaswindersingh6773@gmail.com",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.linkedin.com/company/digikings",
      "https://x.com/digikings",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="bg-[#0D0D0D]">

        {/* Hero */}
        <section className="pt-40 pb-24 md:pt-48 md:pb-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#C9A84C]/4 blur-[140px]" />
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <MapPin size={13} className="text-[#C9A84C]" />
                <SectionLabel>
                  {location.city}, {location.stateCode}
                </SectionLabel>
              </div>
              <h1 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F0E8] mt-4 mb-6 leading-tight">
                {location.heroHeading.split("—")[0]}
                {location.heroHeading.includes("—") && (
                  <>
                    {"—"}
                    <span className="gold-gradient">
                      {location.heroHeading.split("—")[1]}
                    </span>
                  </>
                )}
              </h1>
              <p className="text-[#777] text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                {location.heroSubheading}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <GoldButton href="/#contact">
                  Grow My {location.city} Business
                </GoldButton>
                <GoldButton href="#services" variant="outline">
                  Our Services
                </GoldButton>
              </div>
            </div>
          </div>
        </section>

        {/* Local Context */}
        <section className="py-20 md:py-28 px-6 bg-[#080808] relative overflow-hidden">
          <SweepLine />
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <SectionLabel>Local Market</SectionLabel>
              <h2 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-4xl font-bold text-[#F5F0E8] mt-4 mb-8">
                The {location.city}{" "}
                <span className="gold-gradient">Business Landscape</span>
              </h2>
              <p className="text-[#777] text-base leading-relaxed mb-6">
                {location.localContext}
              </p>
              <p className="text-[#777] text-base leading-relaxed">
                Digital Kings brings engineering discipline to every engagement
                in {location.city}. That means no guesswork, no vanity metrics,
                and no campaigns that run without clear attribution back to
                revenue. We work with {location.city} businesses that are ready
                to treat marketing as infrastructure — systematic, scalable, and
                measurable.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 md:py-28 px-6 relative overflow-hidden">
          <SweepLine />
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel>What We Do</SectionLabel>
              <h2 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-4xl font-bold text-[#F5F0E8] mt-2">
                Services for {location.city}{" "}
                <span className="gold-gradient">Businesses</span>
              </h2>
              <p className="text-[#666] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
                Every service is built on software engineering principles —
                precise, measurable, and designed to compound over time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1A1A1A] max-w-5xl mx-auto">
              {SERVICES.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="bg-[#0D0D0D] p-8 group hover:bg-[#111] transition-colors duration-300"
                  >
                    <div className="w-10 h-10 border border-[#2A2A2A] group-hover:border-[#C9A84C]/40 flex items-center justify-center mb-5 transition-colors duration-300">
                      <Icon size={18} className="text-[#C9A84C]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-cinzel)] text-base font-semibold text-[#F5F0E8] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#666] text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Local Matters */}
        <section className="py-20 md:py-28 px-6 bg-[#080808] relative overflow-hidden">
          <SweepLine />
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
              <div>
                <SectionLabel>Local Advantage</SectionLabel>
                <h2 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-4xl font-bold text-[#F5F0E8] mt-4 mb-6">
                  Why Working With a{" "}
                  <span className="gold-gradient">Local-Minded Agency</span>{" "}
                  Matters
                </h2>
                <p className="text-[#777] text-sm leading-relaxed mb-4">
                  Working with a local-minded agency means your campaigns are
                  built around the actual competitive landscape of{" "}
                  {location.city} — not generic industry templates ported from
                  another market. We understand the neighborhoods, the local
                  search intent, the seasonal patterns, and the nearby cities
                  like {location.nearbyCity} that influence your customers'
                  decisions.
                </p>
                <p className="text-[#777] text-sm leading-relaxed">
                  Most agencies treat local as a checkbox. We treat it as a
                  strategy. Hyper-local keyword targeting, Google Business
                  Profile optimization, and geo-targeted paid campaigns are
                  tools we deploy with precision — not as afterthoughts.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  `Deep understanding of the ${location.city} market`,
                  "Geo-targeted paid advertising campaigns",
                  "Local SEO and Google Business optimization",
                  "Hyper-local keyword strategy and content",
                  "Direct access — no account managers in the way",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-[#C9A84C] mt-0.5 shrink-0"
                    />
                    <p className="text-[#888] text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 md:py-28 px-6 relative overflow-hidden">
          <SweepLine />
          <div className="max-w-7xl mx-auto text-center">
            <SectionLabel>Industries</SectionLabel>
            <h2 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-4xl font-bold text-[#F5F0E8] mt-4 mb-4">
              Industries We Serve in{" "}
              <span className="gold-gradient">{location.city}</span>
            </h2>
            <p className="text-[#666] text-sm max-w-xl mx-auto mb-12 leading-relaxed">
              We work with businesses across {location.city}&apos;s primary
              industries, building digital systems tailored to each sector's
              unique buyers, sales cycles, and competitive dynamics.
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {location.industries.map((industry) => (
                <span
                  key={industry}
                  className="px-6 py-3 border border-[#C9A84C]/40 text-[#C9A84C] text-sm tracking-wide hover:border-[#C9A84C] hover:bg-[#C9A84C]/5 transition-all duration-300"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 px-6 bg-[#080808] relative overflow-hidden">
          <SweepLine />
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel>Get Started</SectionLabel>
            <h2 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-4xl font-bold text-[#F5F0E8] mt-4 mb-4">
              Ready to Grow Your{" "}
              <span className="gold-gradient">{location.city}</span> Business?
            </h2>
            <p className="text-[#666] text-sm leading-relaxed mb-8 max-w-xl mx-auto">
              Tell us your goals and your biggest growth challenge. We will
              scope a strategy tailored to {location.city}&apos;s market and
              show you exactly what we would build — before you commit to
              anything.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GoldButton href="/#contact">
                Start the Conversation
              </GoldButton>
              <GoldButton href="/locations" variant="outline">
                View All Locations
              </GoldButton>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
