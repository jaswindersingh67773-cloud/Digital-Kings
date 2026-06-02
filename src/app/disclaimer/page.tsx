"use client";
import LegalLayout, { LegalSection, P, UL, LI, Strong } from "@/components/sections/LegalLayout";
import Link from "next/link";

export default function DisclaimerPage() {
  return (
    <LegalLayout
      eyebrow="Setting Expectations"
      title={<><span className="gold-gradient">Disclaimer</span></>}
      intro="An honest note on results, testimonials, and the information shared across this website."
      lastUpdated="June 1, 2026"
    >
      <LegalSection heading="1. No Guarantee of Results">
        <P>
          Digital Kings provides AI automation, digital marketing, and web development
          services. The outcomes of this work — including rankings, traffic, leads, sales,
          time saved, or revenue — depend on many factors beyond our control, such as your
          market, competition, budget, product, and the policies of third-party platforms
          like Google and Meta.
        </P>
        <P>
          We apply proven, engineering-led methods and measure everything we can, but we do{" "}
          <Strong>not</Strong> guarantee any specific result. Any figures, ranges, or
          timelines mentioned on this site are illustrative examples, not promises.
        </P>
      </LegalSection>

      <LegalSection heading="2. Testimonials & Case References">
        <P>
          Testimonials and examples shown on this site reflect individual experiences and
          specific circumstances. They are not a guarantee that you or anyone else will
          achieve the same or similar outcomes. Your results will vary.
        </P>
      </LegalSection>

      <LegalSection heading="3. Informational Content">
        <P>
          Our blog, FAQ, and other content are provided for general information only. They
          do not constitute professional, legal, financial, or tax advice, and should not
          be relied on as a substitute for advice tailored to your situation. Pricing
          ranges mentioned are indicative and confirmed only in a written quote.
        </P>
      </LegalSection>

      <LegalSection heading="4. External Links & Tools">
        <P>
          This site may link to third-party websites, platforms, and tools. We do not
          control them and are not responsible for their content, accuracy, or practices.
          A link is not an endorsement.
        </P>
      </LegalSection>

      <LegalSection heading="5. Accuracy & Updates">
        <UL>
          <LI>We aim to keep information on this site current and accurate, but it may contain errors or become out of date.</LI>
          <LI>We may change services, content, and pricing at any time without notice.</LI>
          <LI>You use the information on this site at your own discretion and risk.</LI>
        </UL>
      </LegalSection>

      <LegalSection heading="6. Related Terms">
        <P>
          This Disclaimer forms part of, and should be read alongside, our{" "}
          <Link href="/terms" className="text-[#C9A84C] hover:underline">Terms of Service</Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-[#C9A84C] hover:underline">Privacy Policy</Link>.
        </P>
      </LegalSection>
    </LegalLayout>
  );
}
