export interface Location {
  slug: string;
  city: string;
  state: string;
  stateCode: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  localContext: string;
  industries: string[];
  population: string;
  nearbyCity: string;
}

export const locations: Location[] = [
  {
    slug: "bellevue-wa",
    city: "Bellevue",
    state: "Washington",
    stateCode: "WA",
    metaTitle: "Digital Marketing Agency in Bellevue, WA | Digital Kings",
    metaDescription:
      "Digital Kings delivers AI automation, custom web development, and data-driven digital marketing to Bellevue businesses. Engineering-grade results for Washington's tech capital.",
    heroHeading: "Bellevue's Growth Engine — Built on Engineering",
    heroSubheading:
      "Bellevue is no longer Seattle's shadow — it is a technology hub in its own right, home to Fortune 500 offices and fast-moving startups competing on a national stage. Digital Kings brings engineering-grade AI automation and digital marketing to Bellevue businesses that demand precision, not guesswork. From the Eastside's tech corridors to its luxury retail district, we build systems that compound.",
    localContext:
      "Bellevue's business landscape is shaped by the proximity of Microsoft, Amazon, and a dense ecosystem of SaaS and fintech startups. Competition for attention — both online and in search — is intensified by the sheer concentration of tech-literate buyers and investors. Businesses here need marketing infrastructure that is measurable, scalable, and automated, not agencies that report vanity metrics.",
    industries: [
      "SaaS & Software Companies",
      "Financial Services & Fintech",
      "Luxury Retail & Real Estate",
      "Law Firms & Professional Services",
      "Tech Startups & Venture-backed Companies",
    ],
    population: "~160,000",
    nearbyCity: "Seattle",
  },
  {
    slug: "redmond-wa",
    city: "Redmond",
    state: "Washington",
    stateCode: "WA",
    metaTitle: "Digital Marketing Agency in Redmond, WA | Digital Kings",
    metaDescription:
      "Digital Kings helps Redmond businesses — from gaming studios to tech startups — grow with AI automation, SEO, and conversion-focused web development. Built by an engineer.",
    heroHeading: "Marketing Built for Redmond's Technology Culture",
    heroSubheading:
      "Redmond is Microsoft's backyard, a city where engineers outnumber salespeople and technical credibility matters more than slick pitch decks. Digital Kings speaks that language — our services are built on software engineering principles, not marketing intuition. Whether you are a gaming company, SaaS startup, or independent tech consultancy, we build growth systems that survive scrutiny.",
    localContext:
      "Redmond's economy pivots around the Microsoft campus and the gaming and cloud industries it anchors. Tech-savvy consumers and B2B buyers in this market are quick to identify superficial marketing — they respond to specificity, data, and demonstrable results. Local businesses competing for talent and customers need digital infrastructure that is as rigorous as the products they build.",
    industries: [
      "Gaming Studios & Entertainment Tech",
      "SaaS & Cloud Software",
      "Hardware & IoT Companies",
      "Tech Recruitment & HR",
      "Independent Tech Consultancies",
    ],
    population: "~75,000",
    nearbyCity: "Bellevue",
  },
  {
    slug: "issaquah-wa",
    city: "Issaquah",
    state: "Washington",
    stateCode: "WA",
    metaTitle: "Digital Marketing Agency in Issaquah, WA | Digital Kings",
    metaDescription:
      "Digital Kings serves Issaquah businesses with AI automation, local SEO, and custom websites built to convert. Helping Issaquah's growing retail and lifestyle economy scale online.",
    heroHeading: "Issaquah Businesses Deserve Marketing That Matches Their Ambition",
    heroSubheading:
      "Issaquah sits at the intersection of Eastside affluence and outdoor Pacific Northwest identity — a growing community where Costco sets the global standard for efficiency and local entrepreneurs are building the next wave of retail and service businesses. Digital Kings helps Issaquah businesses compete digitally with the same discipline that drives the city's largest employers.",
    localContext:
      "Issaquah's commercial landscape stretches from Costco's global headquarters to a thriving corridor of local shops, restaurants, and service providers catering to an educated, high-income residential base. Many small and mid-size businesses here have strong offline reputations but underdeveloped digital presence — that gap is an opportunity. The right SEO strategy and conversion-focused website can dramatically increase visibility among Issaquah's growing population.",
    industries: [
      "Retail & Outdoor Lifestyle Brands",
      "Restaurants & Food Businesses",
      "Health, Wellness & Fitness",
      "Local Professional Services",
      "Home Services & Contractors",
    ],
    population: "~40,000",
    nearbyCity: "Bellevue",
  },
  {
    slug: "renton-wa",
    city: "Renton",
    state: "Washington",
    stateCode: "WA",
    metaTitle: "Digital Marketing Agency in Renton, WA | Digital Kings",
    metaDescription:
      "Digital Kings helps Renton businesses grow with AI-powered automation, digital marketing, and custom web development. Serving Boeing suppliers, healthcare, and Renton's diverse economy.",
    heroHeading: "Renton Is Growing — Your Digital Strategy Should Too",
    heroSubheading:
      "Renton's economy is one of the most diverse in the Puget Sound region, anchored by Boeing's manufacturing operations and supported by a growing healthcare sector, logistics industry, and expanding residential population. Digital Kings builds the marketing infrastructure that connects Renton businesses to local customers and national buyers — systematically, not seasonally.",
    localContext:
      "Renton sits at a strategic crossroads between Seattle, Bellevue, and the Eastside tech corridor, making it attractive for a wide range of industries. Boeing's presence has drawn a thick ecosystem of aerospace suppliers and industrial services businesses, while the expansion of the Renton Landing commercial district signals growing retail and hospitality activity. Digital marketing in Renton benefits from targeting both local consumers and B2B buyers across the broader metro area.",
    industries: [
      "Aerospace & Defense Suppliers",
      "Healthcare & Medical Services",
      "Logistics & Distribution",
      "Automotive Services",
      "Retail & Hospitality",
    ],
    population: "~110,000",
    nearbyCity: "Seattle",
  },
  {
    slug: "kent-wa",
    city: "Kent",
    state: "Washington",
    stateCode: "WA",
    metaTitle: "Digital Marketing Agency in Kent, WA | Digital Kings",
    metaDescription:
      "Digital Kings provides AI automation, e-commerce marketing, and custom web development to Kent's industrial, manufacturing, and distribution businesses. Engineering-grade results.",
    heroHeading: "Kent's Industrial Businesses Need Digital Systems, Not Just Websites",
    heroSubheading:
      "Kent is the industrial backbone of the Puget Sound region — a city built on manufacturing, warehousing, and distribution that now increasingly competes for online visibility and B2B leads. Digital Kings brings the engineering discipline that Kent's businesses already understand and applies it to digital marketing: systems that generate leads, automate follow-up, and scale without hiring.",
    localContext:
      "The Kent Valley is home to one of the highest concentrations of warehouse and distribution facilities in the Pacific Northwest, serving everything from Amazon's logistics network to specialty manufacturers. Many businesses in this sector have never invested seriously in digital marketing, leaving significant untapped demand on the table. AI-powered lead generation, local SEO, and automated outreach are particularly high-impact for industrial and B2B companies operating out of Kent.",
    industries: [
      "Manufacturing & Industrial Services",
      "Warehousing & Distribution",
      "E-commerce Fulfillment",
      "Construction & Trades",
      "B2B Wholesale & Supply",
    ],
    population: "~135,000",
    nearbyCity: "Renton",
  },
  {
    slug: "auburn-wa",
    city: "Auburn",
    state: "Washington",
    stateCode: "WA",
    metaTitle: "Digital Marketing Agency in Auburn, WA | Digital Kings",
    metaDescription:
      "Digital Kings helps Auburn businesses grow with local SEO, AI automation, and conversion-focused web design. Serving Auburn's retail corridor and growing service sector.",
    heroHeading: "Auburn Is Expanding — Build the Digital Presence to Match",
    heroSubheading:
      "Auburn is one of the fastest-growing cities in the greater Seattle metro, with new residential developments drawing families and spending power from across Pierce and King County. Local businesses along Auburn's retail corridor face increasing competition from national chains and need digital marketing that wins on local search, drives foot traffic, and converts online visitors into paying customers.",
    localContext:
      "Auburn's growth is driven by affordable housing relative to the Eastside and its position along the I-5 and Highway 167 corridors, making it a hub for commuters, families, and service-oriented businesses. The city's retail and services landscape is evolving rapidly, with new businesses opening to serve its expanding population. Local SEO, Google Business Profile optimization, and targeted paid advertising are powerful channels for Auburn businesses to capture this growing market.",
    industries: [
      "Retail & Shopping Centers",
      "Auto Dealers & Services",
      "Healthcare & Dental Practices",
      "Home Services & Contractors",
      "Restaurants & Food Services",
    ],
    population: "~85,000",
    nearbyCity: "Federal Way",
  },
  {
    slug: "federal-way-wa",
    city: "Federal Way",
    state: "Washington",
    stateCode: "WA",
    metaTitle: "Digital Marketing Agency in Federal Way, WA | Digital Kings",
    metaDescription:
      "Digital Kings serves Federal Way businesses with data-driven digital marketing, AI automation, and custom web development. From healthcare to retail — we build systems that grow.",
    heroHeading: "Federal Way's Diverse Economy Deserves Marketing That Converts",
    heroSubheading:
      "Federal Way is a city of genuine diversity — in its population, its industries, and its opportunity. Positioned between Seattle and Tacoma on the I-5 corridor, it serves as a commercial hub for a broad swath of South King County. Digital Kings helps Federal Way businesses build the digital infrastructure to capture their share of this dense, multi-industry market.",
    localContext:
      "Federal Way's commercial landscape spans major retail anchors, healthcare facilities, professional services, and a growing number of immigrant-owned small businesses serving the city's diverse communities. The city's geographic position between Seattle and Tacoma means businesses here can effectively target customers across a wide area. Strategic local SEO and paid advertising campaigns can dramatically increase visibility across this large potential customer base.",
    industries: [
      "Healthcare & Medical Clinics",
      "Retail & Shopping Centers",
      "Immigration & Legal Services",
      "Education & Tutoring",
      "Restaurants & Multi-cultural Food",
    ],
    population: "~98,000",
    nearbyCity: "Tacoma",
  },
  {
    slug: "tacoma-wa",
    city: "Tacoma",
    state: "Washington",
    stateCode: "WA",
    metaTitle: "Digital Marketing Agency in Tacoma, WA | Digital Kings",
    metaDescription:
      "Digital Kings delivers AI automation, SEO, and engineering-grade web development to Tacoma businesses. Helping Tacoma's port economy, healthcare sector, and creative industries grow digitally.",
    heroHeading: "Tacoma Has Always Been Built to Last — Your Marketing Should Be Too",
    heroSubheading:
      "Tacoma is a city that blends heavy industry with an emerging creative and healthcare economy, anchored by one of the busiest ports on the West Coast and a growing arts district that draws talent from across the Pacific Northwest. Digital Kings helps Tacoma businesses — from logistics operations to local clinics — build digital systems that generate leads and clients consistently, not seasonally.",
    localContext:
      "Tacoma's economy is shaped by the Port of Tacoma, Joint Base Lewis-McChord, a robust healthcare sector led by MultiCare and CHI Franciscan, and a growing creative and hospitality industry in the downtown core. Businesses in Tacoma have historically under-invested in digital marketing compared to their Seattle counterparts, which means smart, early investment in SEO and AI automation can establish a durable competitive advantage in this market.",
    industries: [
      "Port Logistics & Freight",
      "Healthcare & Hospital Systems",
      "Manufacturing & Defense",
      "Arts, Hospitality & Food",
      "Construction & Real Estate",
    ],
    population: "~220,000",
    nearbyCity: "Seattle",
  },
  {
    slug: "sammamish-wa",
    city: "Sammamish",
    state: "Washington",
    stateCode: "WA",
    metaTitle: "Digital Marketing Agency in Sammamish, WA | Digital Kings",
    metaDescription:
      "Digital Kings helps Sammamish's professional services, local businesses, and tech-worker clientele grow online. AI automation, SEO, and premium web development for Sammamish, WA.",
    heroHeading: "Sammamish Professionals Expect Precision — We Deliver It",
    heroSubheading:
      "Sammamish is one of the wealthiest and most educated communities in Washington state, home to thousands of tech workers, executives, and professionals who bring high expectations to every vendor relationship. Digital Kings is built for exactly this audience — our work is data-driven, transparent, and engineered to produce measurable outcomes for the local businesses serving this sophisticated market.",
    localContext:
      "Sammamish has grown rapidly over the past two decades into one of the most desirable residential communities in the Puget Sound region, with household incomes and education levels well above state and national averages. Local businesses — from medical practices to financial advisors to specialty retailers — are serving customers who research thoroughly, read reviews carefully, and choose providers based on demonstrated expertise. A strong digital presence, clear positioning, and conversion-optimized website are table stakes in this market.",
    industries: [
      "Financial Planning & Wealth Management",
      "Medical, Dental & Specialty Health",
      "Private Tutoring & Education",
      "High-end Home Services",
      "Local Professional Services",
    ],
    population: "~70,000",
    nearbyCity: "Redmond",
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
