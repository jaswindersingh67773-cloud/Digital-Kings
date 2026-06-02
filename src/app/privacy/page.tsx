"use client";
import LegalLayout, { LegalSection, P, UL, LI, Strong } from "@/components/sections/LegalLayout";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Your Privacy"
      title={<>Privacy <span className="gold-gradient">Policy</span></>}
      intro="How Digital Kings collects, uses, and protects your personal information — written in plain language, not legalese."
      lastUpdated="June 1, 2026"
    >
      <LegalSection heading="1. Who We Are">
        <P>
          Digital Kings LLC (&ldquo;Digital Kings&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a digital
          agency providing AI automation, digital marketing, and web development services
          from Washington State, USA. This policy applies to{" "}
          <Strong>digikings.net</Strong> and any services we provide through it.
        </P>
        <P>
          For any privacy questions, contact us at{" "}
          <a href="mailto:jas@digikings.net" className="text-[#C9A84C] hover:underline">
            jas@digikings.net
          </a>.
        </P>
      </LegalSection>

      <LegalSection heading="2. Information We Collect">
        <P>We only collect what we need to respond to you and run the site:</P>
        <UL>
          <LI>
            <Strong>Information you give us.</Strong> When you submit the contact form, we
            collect your name, email address, and the message you send. If you email or
            call us directly, we keep that correspondence.
          </LI>
          <LI>
            <Strong>Information collected automatically.</Strong> Like most websites, our
            hosting and analytics tools record basic technical data such as your
            approximate location, browser type, device, referring page, and the pages you
            view. Our analytics are privacy-focused and do not build advertising profiles
            of you.
          </LI>
        </UL>
        <P>
          We do <Strong>not</Strong> knowingly collect sensitive personal data, payment
          card details through this website, or information from children under 16.
        </P>
      </LegalSection>

      <LegalSection heading="3. How We Use Your Information">
        <UL>
          <LI>To respond to your enquiry and provide the services you ask for.</LI>
          <LI>To send you information you have requested or that relates to a project.</LI>
          <LI>To understand how the site is used so we can improve it.</LI>
          <LI>To meet our legal, accounting, and security obligations.</LI>
        </UL>
        <P>
          We will never sell your personal information. We do not send marketing emails
          unless you have asked us to, and you can opt out at any time.
        </P>
      </LegalSection>

      <LegalSection heading="4. Legal Bases (for EU/UK visitors)">
        <P>
          Where the UK GDPR or EU GDPR applies, we process your data on the basis of:{" "}
          <Strong>your consent</Strong> (when you contact us), <Strong>legitimate
          interests</Strong> (running and securing our site), and <Strong>legal
          obligation</Strong> (record-keeping). You can withdraw consent at any time.
        </P>
      </LegalSection>

      <LegalSection heading="5. How We Share Information">
        <P>
          We share data only with trusted service providers who help us operate, and only
          as far as needed:
        </P>
        <UL>
          <LI><Strong>Vercel</Strong> — website hosting and privacy-focused analytics.</LI>
          <LI><Strong>Resend</Strong> — delivers contact-form submissions to our inbox.</LI>
          <LI>
            Professional advisers or authorities where we are legally required to disclose
            information.
          </LI>
        </UL>
        <P>
          These providers may process data outside your country, including in the United
          States. We rely on their standard contractual safeguards where required.
        </P>
      </LegalSection>

      <LegalSection heading="6. How Long We Keep It">
        <P>
          We keep enquiry and client data only as long as needed for the purpose it was
          collected, to maintain our business records, or to comply with the law — after
          which it is deleted or anonymised.
        </P>
      </LegalSection>

      <LegalSection heading="7. Your Rights">
        <P>
          Depending on where you live (including under GDPR and the California Consumer
          Privacy Act), you may have the right to:
        </P>
        <UL>
          <LI>Access the personal data we hold about you.</LI>
          <LI>Correct inaccurate data or complete incomplete data.</LI>
          <LI>Request deletion of your data.</LI>
          <LI>Object to or restrict how we use your data.</LI>
          <LI>Request a copy of your data in a portable format.</LI>
          <LI>Opt out of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of personal information — note we do not sell your data.</LI>
        </UL>
        <P>
          To exercise any of these, email{" "}
          <a href="mailto:jas@digikings.net" className="text-[#C9A84C] hover:underline">
            jas@digikings.net
          </a>. We will respond within the timeframe required by law.
        </P>
      </LegalSection>

      <LegalSection heading="8. Cookies">
        <P>
          We use a minimal set of cookies and similar technologies. See our{" "}
          <Link href="/cookies" className="text-[#C9A84C] hover:underline">Cookie Policy</Link>{" "}
          for full details.
        </P>
      </LegalSection>

      <LegalSection heading="9. Data Security">
        <P>
          We use reputable providers and reasonable technical measures to protect your
          information. No method of transmission over the internet is 100% secure, so we
          cannot guarantee absolute security, but we take protecting your data seriously.
        </P>
      </LegalSection>

      <LegalSection heading="10. Changes to This Policy">
        <P>
          We may update this policy from time to time. The &ldquo;last updated&rdquo; date at the top
          reflects the latest version. Significant changes will be highlighted on this
          page.
        </P>
      </LegalSection>
    </LegalLayout>
  );
}
