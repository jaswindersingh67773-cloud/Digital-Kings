export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://digital-kings.vercel.app/#business",
        name: "Digital Kings",
        url: "https://digital-kings.vercel.app",
        logo: "https://digital-kings.vercel.app/logo-v2.png",
        description:
          "AI automation, digital marketing, and custom web development powered by 10 years of software engineering experience.",
        priceRange: "$$",
        areaServed: "Worldwide",
        serviceType: [
          "AI Automation",
          "Digital Marketing",
          "Custom Web Development",
          "SEO",
          "Paid Advertising",
          "Marketing Automation",
        ],
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": "https://digital-kings.vercel.app/#website",
        url: "https://digital-kings.vercel.app",
        name: "Digital Kings",
        description:
          "Engineering-grade AI automation, digital marketing and custom web development.",
        publisher: { "@id": "https://digital-kings.vercel.app/#business" },
      },
      {
        "@type": "Person",
        "@id": "https://digital-kings.vercel.app/#founder",
        name: "Digital Kings Founder",
        jobTitle: "Software Engineer & Digital Growth Specialist",
        description:
          "10 years of software engineering experience now applied to AI automation, digital marketing, and custom web development.",
        worksFor: { "@id": "https://digital-kings.vercel.app/#business" },
        knowsAbout: [
          "Software Engineering",
          "AI Automation",
          "n8n",
          "Digital Marketing",
          "Next.js",
          "React",
          "SEO",
          "Google Ads",
          "Meta Ads",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
