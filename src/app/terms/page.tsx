"use client";
import LegalLayout, { LegalSection, P, UL, LI, Strong } from "@/components/sections/LegalLayout";
import Link from "next/link";

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="The Agreement"
      title={<>Terms of <span className="gold-gradient">Service</span></>}
      intro="The terms that govern both your use of this website and any services you engage Digital Kings to provide."
      lastUpdated="June 1, 2026"
    >
      <LegalSection heading="1. Agreement to These Terms">
        <P>
          These Terms of Service (&ldquo;Terms&rdquo;) are an agreement between you and Digital Kings
          LLC (&ldquo;Digital Kings&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), a digital agency based in
          Washington State, USA. By accessing <Strong>digikings.net</Strong> or engaging our
          services, you agree to these Terms. If you do not agree, please do not use the
          site or our services.
        </P>
      </LegalSection>

      {/* ── Website use ─────────────────────────────────────────── */}

      <LegalSection heading="2. Use of the Website">
        <P>You agree to use this website lawfully. You must not:</P>
        <UL>
          <LI>Use the site in any way that breaks the law or infringes others&apos; rights.</LI>
          <LI>Attempt to gain unauthorised access to the site, its servers, or connected systems.</LI>
          <LI>Introduce viruses, malware, or any harmful or disruptive code.</LI>
          <LI>Scrape, harvest, or copy content at scale without our written permission.</LI>
          <LI>Misuse the contact form to send spam, unlawful, or abusive content.</LI>
        </UL>
      </LegalSection>

      <LegalSection heading="3. Intellectual Property">
        <P>
          Unless stated otherwise, all content on this website — including text, design,
          logos, graphics, and code — is owned by Digital Kings and protected by
          intellectual property laws. You may view and share it for personal,
          non-commercial purposes, but you may not reproduce, republish, or exploit it
          commercially without our written consent.
        </P>
        <P>
          Ownership of deliverables we build for clients is addressed in Section 8.
        </P>
      </LegalSection>

      {/* ── Services ────────────────────────────────────────────── */}

      <LegalSection heading="4. Our Services">
        <P>
          We provide AI automation, digital marketing, and custom web development. Any
          specific engagement is defined by a separate written scope, proposal, or
          statement of work agreed between us. Where that document conflicts with these
          Terms, the project document governs for that engagement.
        </P>
      </LegalSection>

      <LegalSection heading="5. Quotes, Fees & Payment">
        <UL>
          <LI>Quotes are based on the scope agreed at the time and are valid for 30 days unless stated otherwise.</LI>
          <LI>Fees, payment schedule, and any deposit are set out in the project scope.</LI>
          <LI>Invoices are due within the period stated on the invoice. Late payments may pause work and incur reasonable charges.</LI>
          <LI>Third-party costs (e.g. ad spend, hosting, software subscriptions, domains) are separate from our fees and are your responsibility unless agreed otherwise.</LI>
        </UL>
      </LegalSection>

      <LegalSection heading="6. Client Responsibilities">
        <P>To deliver good work on time, we need you to:</P>
        <UL>
          <LI>Provide accurate information, content, access, and approvals when reasonably requested.</LI>
          <LI>Respond within agreed timeframes — delays on your side may shift the timeline.</LI>
          <LI>Hold the rights to any materials (text, images, logos, data) you supply to us.</LI>
        </UL>
      </LegalSection>

      <LegalSection heading="7. Revisions, Scope & Changes">
        <P>
          Each project has defined deliverables agreed upfront, and we won&apos;t close it until
          those deliverables are met. Work beyond the agreed scope (&ldquo;scope creep&rdquo;) may
          require an updated quote and timeline before we proceed.
        </P>
      </LegalSection>

      <LegalSection heading="8. Ownership of Deliverables">
        <P>
          On full payment, you own the final deliverables we create specifically for you.
          We retain ownership of our pre-existing tools, frameworks, templates, and
          know-how, and may reuse general skills and techniques on other projects.
          Third-party components remain under their own licences. We may showcase
          non-confidential work in our portfolio unless you ask us not to.
        </P>
      </LegalSection>

      <LegalSection heading="9. Cancellation">
        <P>
          Either party may end an engagement with reasonable written notice. If you cancel,
          you remain responsible for work completed and costs committed up to the
          cancellation date. Deposits cover work already scheduled and are generally
          non-refundable.
        </P>
      </LegalSection>

      {/* ── Disclaimers & liability ─────────────────────────────── */}

      <LegalSection heading="10. No Guarantee of Results">
        <P>
          Digital marketing, SEO, and automation outcomes depend on many factors outside
          our control, including your market, budget, and third-party platforms. We apply
          proven, engineering-led methods, but we do <Strong>not</Strong> guarantee specific
          rankings, revenue, traffic, or results. See our{" "}
          <Link href="/disclaimer" className="text-[#C9A84C] hover:underline">Disclaimer</Link>{" "}
          for more.
        </P>
      </LegalSection>

      <LegalSection heading="11. Warranties & Disclaimer">
        <P>
          This website and its content are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
          warranties of any kind, express or implied, to the fullest extent permitted by
          law. We do not warrant that the site will be uninterrupted, error-free, or free
          of harmful components.
        </P>
      </LegalSection>

      <LegalSection heading="12. Limitation of Liability">
        <P>
          To the fullest extent permitted by law, Digital Kings will not be liable for any
          indirect, incidental, or consequential losses, or for loss of profits, revenue,
          or data, arising from your use of the site or our services. Our total liability
          for any claim relating to a service engagement is limited to the fees you paid us
          for that engagement. Nothing in these Terms limits liability that cannot be
          limited by law.
        </P>
      </LegalSection>

      <LegalSection heading="13. Third-Party Links & Tools">
        <P>
          The site and our services may reference third-party websites, platforms, or
          tools. We are not responsible for their content, availability, or practices, and
          including them is not an endorsement.
        </P>
      </LegalSection>

      <LegalSection heading="14. Indemnity">
        <P>
          You agree to indemnify Digital Kings against claims, damages, and reasonable costs
          arising from your breach of these Terms, your misuse of the site, or content or
          materials you provide to us.
        </P>
      </LegalSection>

      <LegalSection heading="15. Governing Law">
        <P>
          These Terms are governed by the laws of the State of Washington, USA, without
          regard to its conflict-of-law rules. Any disputes will be subject to the
          exclusive jurisdiction of the courts located in Washington State.
        </P>
      </LegalSection>

      <LegalSection heading="16. Changes to These Terms">
        <P>
          We may update these Terms from time to time. The &ldquo;last updated&rdquo; date reflects the
          current version, and continued use of the site after changes means you accept
          them.
        </P>
      </LegalSection>
    </LegalLayout>
  );
}
