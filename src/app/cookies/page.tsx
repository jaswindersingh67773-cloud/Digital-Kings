"use client";
import LegalLayout, { LegalSection, P, UL, LI, Strong } from "@/components/sections/LegalLayout";
import Link from "next/link";

export default function CookiesPage() {
  return (
    <LegalLayout
      eyebrow="Cookies & Tracking"
      title={<>Cookie <span className="gold-gradient">Policy</span></>}
      intro="What cookies and similar technologies this site uses, why we use them, and how you stay in control."
      lastUpdated="June 1, 2026"
    >
      <LegalSection heading="1. What Are Cookies?">
        <P>
          Cookies are small text files stored on your device when you visit a website. They
          help sites work properly, remember preferences, and understand how visitors use
          them. &ldquo;Similar technologies&rdquo; include things like local storage and pixels that
          serve comparable purposes.
        </P>
      </LegalSection>

      <LegalSection heading="2. Our Approach">
        <P>
          We keep tracking to a minimum. <Strong>digikings.net</Strong> does not use
          advertising cookies and does not sell your data. Our analytics are
          privacy-focused and designed to measure site usage without building a personal
          profile of you.
        </P>
      </LegalSection>

      <LegalSection heading="3. Cookies We Use">
        <UL>
          <LI>
            <Strong>Strictly necessary.</Strong> Set by our hosting provider (Vercel) to
            deliver the site securely and reliably. These are essential and cannot be
            switched off through our site.
          </LI>
          <LI>
            <Strong>Analytics &amp; performance.</Strong> We use Vercel Web Analytics and
            Speed Insights to understand which pages are visited and how the site performs.
            These tools are privacy-focused and do not use cookies to track you across
            other websites.
          </LI>
        </UL>
        <P>
          We do <Strong>not</Strong> currently run advertising or cross-site tracking
          cookies (such as ad-network pixels). If that changes, we will update this policy
          and, where required, ask for your consent first.
        </P>
      </LegalSection>

      <LegalSection heading="4. Third-Party Services">
        <P>
          Some cookies are set by the trusted providers that run parts of our site —
          principally <Strong>Vercel</Strong> (hosting and analytics). These providers
          process data under their own privacy terms. See our{" "}
          <Link href="/privacy" className="text-[#C9A84C] hover:underline">Privacy Policy</Link>{" "}
          for how we handle the data involved.
        </P>
      </LegalSection>

      <LegalSection heading="5. Managing Cookies">
        <P>
          You are always in control. Most browsers let you block or delete cookies through
          their settings, and you can usually choose to be warned before a cookie is
          stored. Blocking strictly necessary cookies may stop parts of the site working.
        </P>
        <P>
          Helpful guides are available for{" "}
          <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#C9A84C] hover:underline">Chrome</a>,{" "}
          <a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer" className="text-[#C9A84C] hover:underline">Safari</a>,{" "}
          <a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener noreferrer" className="text-[#C9A84C] hover:underline">Firefox</a>, and{" "}
          <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#C9A84C] hover:underline">Edge</a>.
        </P>
      </LegalSection>

      <LegalSection heading="6. Changes to This Policy">
        <P>
          We may update this Cookie Policy as our tools or legal requirements change. The
          &ldquo;last updated&rdquo; date at the top shows the current version.
        </P>
      </LegalSection>
    </LegalLayout>
  );
}
