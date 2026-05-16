export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-automation-save-time",
    title: "How AI Automation Can Save Your Business 20 Hours a Week",
    description:
      "Most business owners are still doing manually what a well-built automation can handle in seconds. Here's exactly where those hours are going — and how to get them back.",
    date: "2026-05-10",
    readTime: "7 min read",
    category: "AI Automation",
    content: `
<h2>Where the Hours Actually Go</h2>
<p>Twenty hours a week sounds like marketing hyperbole. It isn't. When you audit a typical small-to-medium business, the same time sinks appear every time: manually copying data between tools, sending the same follow-up emails, pulling reports from three different dashboards, and triaging lead enquiries that don't need a human decision.</p>
<p>None of those tasks require intelligence. They require consistency — which is exactly what automated systems do better than people.</p>

<h2>The Five Automation Wins That Stack Fastest</h2>
<ul>
  <li><strong>Lead qualification and routing.</strong> A form submission or inbound message triggers an n8n workflow that scores the lead against your criteria (budget, service type, geography), routes it to the right place, and sends a personalised acknowledgement — all before you've finished your coffee. Time saved: 3–5 hours/week for businesses with &gt;20 inbound leads.</li>
  <li><strong>CRM data entry.</strong> Every call, email, or meeting note that gets manually typed into a CRM is pure overhead. Connect your calendar, email, and call tool to a workflow that extracts structured data using an LLM and writes it to your CRM automatically. Time saved: 2–4 hours/week.</li>
  <li><strong>Reporting dashboards.</strong> If someone on your team is building a weekly report by pulling numbers from Google Ads, GA4, and a spreadsheet, that's a workflow problem. A properly piped data stack sends you a formatted summary every Monday at 8am. Time saved: 2–3 hours/week.</li>
  <li><strong>Follow-up sequences.</strong> The research is clear — most sales happen after the fifth touchpoint. Almost nobody follows up that many times manually. An automated email sequence with conditional branching (opened/didn't open, replied/didn't reply) outperforms manual follow-up in both consistency and conversion. Time saved: 3–5 hours/week.</li>
  <li><strong>Onboarding workflows.</strong> Every new client or customer who joins should receive the same high-quality experience regardless of how busy you are. Automate the welcome sequence, contract collection, intake form, and kickoff scheduling. Time saved: 2–4 hours/week.</li>
</ul>

<h2>What These Systems Actually Look Like</h2>
<p>The tools doing most of the heavy lifting are <strong>n8n</strong> (open-source workflow automation that runs on your own infrastructure or in the cloud), <strong>Make</strong> (good for simpler flows), and direct API integrations when the volume justifies custom code. LLMs — specifically GPT-4o or Claude — handle the tasks that need language understanding: classifying emails, extracting structured data from unstructured text, drafting personalised responses for human review.</p>
<p>A typical automation stack for a service business might look like this: Typeform or website contact form → n8n → LLM classification → CRM entry + Slack notification + personalised email via SendGrid. That's a four-step automation that replaces 30 minutes of manual work per lead.</p>

<h2>The Audit Before the Build</h2>
<p>The most common mistake is automating the wrong things first. Before writing a single workflow, document every recurring task you or your team does more than twice a week. For each one, ask: does this require genuine human judgment, or just consistent execution? The second category is your automation backlog.</p>
<p>Prioritise by time-per-occurrence multiplied by frequency. A task that takes 10 minutes and happens 30 times a week (5 hours total) beats a task that takes 2 hours but only happens monthly.</p>

<h2>The Compounding Effect</h2>
<p>The real value of automation isn't just the hours saved — it's what you do with them. Twenty hours a week returned to a business owner or team is twenty hours that can go into client work, strategy, or growth activities that actually move the needle. Automation doesn't replace ambition. It removes the friction between you and it.</p>
<p>The businesses that build these systems early create a compounding advantage: they scale without proportionally scaling headcount, they respond faster, and they make fewer errors. The ones that don't are still copying and pasting in three years.</p>
    `.trim(),
  },
  {
    slug: "website-not-converting",
    title: "Why Your Website Isn't Converting (And How to Fix It)",
    description:
      "Traffic without conversions is just an expensive vanity metric. Here's the engineering-based diagnostic framework for finding exactly where your site is losing potential clients.",
    date: "2026-05-05",
    readTime: "6 min read",
    category: "Web Development",
    content: `
<h2>The Conversion Problem Is Almost Never About Design</h2>
<p>Most business owners who come to me with a "conversion problem" have already convinced themselves the fix is a redesign. New colours, new fonts, a flashier hero section. In almost every case, that's not the issue. The issue is structural — it's about what information appears, in what order, with what level of specificity, for which visitor segment.</p>
<p>Design is how you communicate. If what you're communicating is vague, a new design just makes the vagueness prettier.</p>

<h2>Run This Diagnostic First</h2>
<p>Before changing anything, install Microsoft Clarity or Hotjar (both free) and let it run for two weeks. You want to look at three things:</p>
<ul>
  <li><strong>Scroll depth.</strong> What percentage of visitors reach your CTA? If less than 40% of visitors see your call to action, the problem is attention, not persuasion.</li>
  <li><strong>Click maps.</strong> What are people clicking on that isn't a link? This reveals where they expect something to be interactive — information you didn't know they wanted.</li>
  <li><strong>Session recordings.</strong> Watch 20 sessions of visitors who didn't convert. Look for rage clicks (clicking the same thing repeatedly), U-turns (going back immediately after a page load), and confusion patterns (hovering over content without clicking).</li>
</ul>
<p>This data tells you what to fix. Everything else is guesswork.</p>

<h2>The Six Most Common Conversion Killers</h2>
<ul>
  <li><strong>No clear value proposition above the fold.</strong> A visitor should know exactly what you do, who you do it for, and what makes you different within 5 seconds of landing. "Welcome to our website" is not a value proposition.</li>
  <li><strong>Generic social proof.</strong> "We deliver results" and "Trusted by businesses worldwide" is noise. Specific results — "Reduced client's ad cost-per-acquisition from £85 to £31 in 90 days" — is signal. Specificity is credibility.</li>
  <li><strong>Too many CTAs.</strong> When everything is a priority, nothing is. One primary CTA per page, repeated 2–3 times as the visitor scrolls. Don't ask people to "Book a call", "Download the guide", "Follow us on Instagram", and "Read our blog" simultaneously.</li>
  <li><strong>Friction in the contact form.</strong> Every additional field you add to a form reduces completion rate by approximately 10–15%. Ask for name, email, and one qualifying question. Get everything else on the call.</li>
  <li><strong>No answer to "why you?".</strong> Visitors are implicitly asking: why should I choose this provider over the others? If your site doesn't answer that specifically — not with buzzwords, but with concrete differentiators — they'll go back to Google and find someone whose site does.</li>
  <li><strong>Slow load time.</strong> Google's own data shows that a 1-second delay in page load time reduces conversions by 7%. On mobile, the threshold is even lower. Run your site through PageSpeed Insights. If your Largest Contentful Paint is above 2.5 seconds, you have a technical problem before you have a conversion problem.</li>
</ul>

<h2>The Fix Stack</h2>
<p>Based on the diagnostic data, prioritise fixes in order of impact-to-effort ratio. A headline rewrite takes 30 minutes and can double conversion rate. A full redesign takes 6 weeks and might not move it at all.</p>
<p>Start with copy, then trust signals, then CTA placement, then technical performance, then design. In that order. Test one change at a time using Google Optimize or a simple A/B test, and give each test at least 200 conversions before drawing conclusions.</p>

<h2>What "Optimised" Actually Looks Like</h2>
<p>A well-converting service business website typically achieves 3–8% conversion rate on cold traffic. If you're below 1%, the structural issues above are almost certainly the cause. If you're between 1–3%, you likely have one or two specific fixable problems. Above 5% on cold traffic, you're in strong territory — focus on traffic volume.</p>
<p>Conversion optimisation is not a one-time project. It's a feedback loop: measure, hypothesise, test, implement, repeat. The businesses that treat it that way compound their advantage over time.</p>
    `.trim(),
  },
  {
    slug: "engineer-approach-marketing",
    title: "The Engineer's Approach to Digital Marketing: Why Data Beats Guesswork",
    description:
      "Digital marketing has a guesswork problem. Most agencies operate on intuition and trend-chasing. Here's how an engineering mindset produces better, more predictable results.",
    date: "2026-04-28",
    readTime: "8 min read",
    category: "Digital Marketing",
    content: `
<h2>The Marketing Industry's Dirty Secret</h2>
<p>Most digital marketing agencies don't actually know why their campaigns work when they work. They run ads, something converts, and they call it a result. When it stops working, they pivot to the next trend. The strategy is vibes dressed up as expertise.</p>
<p>This is not a fringe critique — it's structural. Most marketing agencies are built around account managers and creatives, not analysts and systems thinkers. The incentive is to look busy and show surface-level metrics (impressions, reach, engagement) rather than the metrics that actually correlate with business outcomes.</p>

<h2>What an Engineering Mindset Changes</h2>
<p>An engineer approaches a system by understanding its inputs, outputs, and the mechanisms connecting them. Applied to marketing, that means:</p>
<ul>
  <li><strong>Define the actual goal first.</strong> Not "more leads" but "qualified leads with LTV above £5,000 at a CAC below £200". Vague goals produce vague strategies.</li>
  <li><strong>Map the full funnel before optimising any part of it.</strong> A campaign that drives 10,000 clicks but converts at 0.1% is worse than one that drives 1,000 clicks at 3%. You need to know where the bottleneck is before you pour more traffic in.</li>
  <li><strong>Treat every variable as testable.</strong> Headline copy, audience segment, bid strategy, landing page layout, CTA text — each is a hypothesis. Run controlled tests. Record the results. Build institutional knowledge instead of starting from scratch each time.</li>
  <li><strong>Instrument everything before spending anything significant.</strong> GA4 configured properly, conversion tracking verified in Google Tag Manager, UTM parameters consistent across all channels. If you can't measure it, you're flying blind.</li>
</ul>

<h2>The Specific Frameworks That Work</h2>
<p>Here's the analytical stack I use across client campaigns:</p>
<ul>
  <li><strong>Attribution modelling.</strong> Last-click attribution (Google Ads' default) undervalues upper-funnel touchpoints and leads to systematic underinvestment in awareness. Data-driven attribution, or at minimum a linear model, gives a more accurate picture of what's actually contributing to conversions.</li>
  <li><strong>Cohort analysis for paid campaigns.</strong> Instead of looking at aggregate ROAS, segment by audience cohort, creative variant, and time period. This reveals which specific combinations are profitable and which are dragging your average down.</li>
  <li><strong>Search term analysis, not just keyword analysis.</strong> In Google Ads, what you bid on and what actually triggers your ads are different things. Weekly search term audits reveal where you're spending money on irrelevant traffic — often 20–40% of budget in unaudited accounts.</li>
  <li><strong>Contribution margin, not revenue.</strong> A campaign with a 400% ROAS on a 20% margin product is barely breaking even on marketing cost. Know your unit economics before setting target ROAS or CPA.</li>
</ul>

<h2>Why This Produces Better Results</h2>
<p>The engineer's approach creates compounding knowledge. Every test generates data that informs the next decision. Every campaign builds on the last. Over 12 months, this produces a systematic understanding of what works for a specific business in a specific market that no amount of intuition can replicate.</p>
<p>It also produces predictability. When you understand the mechanisms — that audience X converts at Y% from creative type Z at a CAC of £W — you can forecast with confidence. You can tell a client "increase budget by 30% and expect approximately this outcome" with a rational basis, not a hope.</p>

<h2>The Honest Constraint</h2>
<p>Data-driven marketing requires data, which requires time and volume. In the first 4–6 weeks of a new campaign, you're in the learning phase — building the dataset that will inform optimisation. Expect this phase to be less efficient. The compounding returns come after you have enough signal to act on.</p>
<p>This is why short-term agency contracts often fail: they end right as the data is getting useful. Marketing is a system, not a sprint. Build it like one.</p>
    `.trim(),
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
