import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldButton from "@/components/ui/GoldButton";
import { locations } from "@/lib/locations";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Washington State",
  description:
    "Digital Kings serves businesses across the Seattle/Puget Sound area — Bellevue, Redmond, Tacoma, Issaquah, Renton, Kent, Auburn, Federal Way, and Sammamish. AI automation, SEO, and custom web development.",
  alternates: {
    canonical: "https://digikings.net/locations",
  },
};

export default function LocationsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0D0D0D] min-h-screen">

        {/* Hero */}
        <section className="pt-40 pb-24 md:pt-48 md:pb-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#C9A84C]/4 blur-[140px]" />
          </div>
          <div className="max-w-7xl mx-auto text-center">
            <SectionLabel>Service Areas</SectionLabel>
            <h1 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-6xl font-bold text-[#F5F0E8] mt-6 mb-6 leading-tight">
              Serving Washington State{" "}
              <span className="gold-gradient">Businesses</span>
            </h1>
            <p className="text-[#777] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Digital Kings is headquartered in Washington state and works
              hands-on with businesses across the Seattle metro area and Puget
              Sound region. From Bellevue's tech corridor to Tacoma's port
              economy, we build digital systems that generate real results for
              local businesses.
            </p>
            <p className="text-[#555] text-sm mt-4 max-w-2xl mx-auto">
              Serving Bellevue · Redmond · Issaquah · Renton · Kent · Auburn ·
              Federal Way · Tacoma · Sammamish
            </p>
          </div>
        </section>

        {/* City Grid */}
        <section className="py-20 md:py-28 px-6 bg-[#080808] relative overflow-hidden">
          {/* Sweep line */}
          <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
            <div
              className="h-full w-[40%]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #C9A84C, transparent)",
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel>Our Markets</SectionLabel>
              <h2 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-4xl font-bold text-[#F5F0E8] mt-2">
                Choose Your <span className="gold-gradient">City</span>
              </h2>
              <p className="text-[#666] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
                Each location page covers local market context, the industries
                we serve in that city, and how our services apply to your
                specific competitive environment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A1A1A]">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="bg-[#080808] p-8 group hover:bg-[#0F0F0F] transition-colors duration-300 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-[#C9A84C] mt-0.5 shrink-0" />
                      <span className="text-[#555] text-xs tracking-widest uppercase">
                        {location.stateCode}
                      </span>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-[#333] group-hover:text-[#C9A84C] transition-colors duration-300"
                    />
                  </div>

                  <h3 className="font-[family-name:var(--font-cinzel)] text-xl font-bold text-[#F5F0E8] mb-1 group-hover:text-[#E8C97A] transition-colors duration-200">
                    {location.city}
                  </h3>
                  <p className="text-[#555] text-xs mb-5">
                    Pop. {location.population}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 flex-grow">
                    {location.industries.slice(0, 3).map((industry) => (
                      <span
                        key={industry}
                        className="text-[10px] px-2.5 py-1 border border-[#2A2A2A] text-[#666] tracking-wide"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-[#C9A84C] text-xs tracking-widest uppercase mt-auto group-hover:gap-2.5 transition-all duration-200">
                    Learn More
                    <ArrowRight size={12} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Local Matters */}
        <section className="py-20 md:py-28 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
            <div
              className="h-full w-[40%]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #C9A84C, transparent)",
              }}
            />
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <SectionLabel>Why Washington</SectionLabel>
            <h2 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-4xl font-bold text-[#F5F0E8] mt-4 mb-6">
              Local Knowledge.{" "}
              <span className="gold-gradient">Engineering Discipline.</span>
            </h2>
            <p className="text-[#777] text-base leading-relaxed mb-4">
              The Seattle metro and Puget Sound region is one of the most
              economically competitive markets in the United States. From
              Microsoft and Amazon's Eastside campuses to the Port of Tacoma's
              global logistics operations, Washington businesses operate at a
              high level — and their digital marketing needs to match.
            </p>
            <p className="text-[#777] text-base leading-relaxed">
              Digital Kings was built for exactly this environment. We understand
              the local landscape, the industries that drive each city, and the
              competitive dynamics that shape what actually works. Every campaign
              is architected as a system, not assembled from templates.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 px-6 bg-[#080808] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
            <div
              className="h-full w-[40%]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #C9A84C, transparent)",
              }}
            />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel>Get Started</SectionLabel>
            <h2 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-4xl font-bold text-[#F5F0E8] mt-4 mb-4">
              Ready to Grow Your{" "}
              <span className="gold-gradient">Washington Business?</span>
            </h2>
            <p className="text-[#666] text-sm leading-relaxed mb-8 max-w-xl mx-auto">
              Tell us your city, your industry, and your biggest growth
              challenge. We will show you exactly what we would build — before
              you commit to anything.
            </p>
            <GoldButton href="/#contact">Start the Conversation</GoldButton>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
