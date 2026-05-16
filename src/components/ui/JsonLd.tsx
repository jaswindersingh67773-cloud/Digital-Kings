export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://digikings.net/#business",
        name: "Digital Kings",
        url: "https://digikings.net",
        logo: "https://digikings.net/logo-v2.png",
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
        sameAs: [
          "https://www.linkedin.com/company/digikings",
          "https://x.com/digikings",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer enquiries",
          email: "jaswindersingh6773@gmail.com",
          availableLanguage: "English",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://digikings.net/#website",
        url: "https://digikings.net",
        name: "Digital Kings",
        description:
          "Engineering-grade AI automation, digital marketing and custom web development.",
        publisher: { "@id": "https://digikings.net/#business" },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://digikings.net/#contact",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Person",
        "@id": "https://digikings.net/#founder",
        name: "Jaswinder Singh",
        jobTitle: "Software Engineer & Digital Growth Specialist",
        url: "https://digikings.net",
        description:
          "10 years of software engineering experience now applied to AI automation, digital marketing, and custom web development.",
        worksFor: { "@id": "https://digikings.net/#business" },
        sameAs: [
          "https://www.linkedin.com/in/jaswindersingh67773",
          "https://github.com/jaswindersingh67773-cloud",
        ],
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
