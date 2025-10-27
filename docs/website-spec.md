 # Aion HCSS Website — Implementation Spec and Plan

 ## Goal
 Build a modern, responsive, and sleek marketing site for Aion Health Care & Support Services Ltd that clearly presents services, inspires trust, and converts via phone/email and contact/referral forms.

 ## Reference inputs
 - Brand: docs/brand-guidelines.md (values, palette, tone, logo usage)
 - Content: docs/business-plan.md (mission, services, audience, contact)
 - Inspiration: https://clarionhomecare.co.uk, https://fhcagency.co.uk, https://virtuecare.co.uk (structure, clarity, trust signals)

 ## Proposed tech stack
 - Framework: Astro (fast static output, great SEO) + Islands for interactivity
 - Styling: Tailwind CSS + CSS variables for brand tokens
 - Forms: Netlify/Vercel serverless forms or Formspree; optional backend later
 - Assets: Next‑gen images (AVIF/WebP), responsive srcset
 - Deployment: Vercel or Netlify with preview URLs
 - Analytics: Plausible or GA4 (privacy‑respecting by default)

 ## Information architecture (sitemap)
 - Home
 - Services (overview) + subpages:
   - Personal Care
   - Live‑in Care
   - Supported Living
   - Children & Families
 - About (Mission, Values, Leadership)
 - FAQs
 - Careers
 - Areas We Cover
 - Contact
 - Refer a Client (form)
 - Policies: Privacy, Cookies

 ## Brand system
 - Colors (from brand guidelines):
   - Deep Navy #040368 (primary backgrounds, headings)
  - Vivid Red #FF5B5C (primary CTAs, highlights)
   - Vivid Blue‑Violet #1D0B98 (accents, secondary buttons)
   - Dusty Mauve #736182 (subtle accents/dividers)
 - Typography:
   - Headings: Poppins (semi‑rounded, approachable)
   - Body/UI: Inter (legible, professional)
 - Buttons: Solid Coral primary, Navy outline secondary; large rounded‑md; strong focus states
 - Imagery: candid, natural light; diverse caregivers/clients in home settings; rounded corners, soft shadows
 - Iconography: simple rounded icons (home, heart, hands) in brand colors

 ## Key pages and sections
1) Home
 - Hero: headline, value prop, 2 CTAs (Primary: Call 01245823377; Secondary: Enquire)
 - Trust strip: “DBS‑checked staff • Person‑centred care • 24/7 support line”
 - Services overview: 4 cards linking to subpages
 - “How we work” 4‑step process
 - Testimonials (placeholder to replace with client quotes)
 - Callout banner with Coral CTA
 - Footer: address, phone, email, quick links

 2) Services overview + subpages
 - Each subpage: intro, who it’s for, what’s included (bullets from business‑plan), FAQs, CTA

 3) About
 - Mission and values (from docs), leadership bios (short), brand values grid

 4) FAQs
 - 10–12 expandable items (pricing, coverage, safety, matching, visits/live‑in, meds)

 5) Careers
 - Benefits, training, DBS; simple application form

 6) Contact + Refer a Client
 - Forms with required fields, spam protection, success state; show phone and email prominently

 7) Areas We Cover
 - Chelmsford hub with surrounding areas; map image placeholder

 ## Content mapping (from docs)
 - Mission/Values: section 4 of business‑plan + brand core values
 - Services bullets: sections 1.3 and 5.1
 - Who we support: sections 1.5 and 6.2
 - Differentiators: section 6.4 (DBS‑cleared, person‑centred, 24/7 line, outcome‑based)
 - Contact: address, phone, email from section 2

 ## Accessibility and performance
 - WCAG 2.2 AA: keyboard‑first nav, visible focus, color contrast, alt text
 - Lighthouse 95+ targets; lazy‑load images; prefetch critical routes; CSS minification

 ## SEO and compliance
 - Descriptive titles/meta, canonical, OG/Twitter cards
 - Structured data: Organization/LocalBusiness, Service, FAQPage
 - sitemap.xml, robots.txt; cookie banner if analytics enabled

 ## Project structure (Astro + Tailwind)
 - src/pages: index.astro, services/*.astro, about.astro, careers.astro, contact.astro, refer.astro, areas.astro, faq.astro
 - src/layouts: BaseLayout.astro
 - src/components: Header, Footer, Hero, CTAButton, ServiceCard, Testimonial, FAQItem, ContactForm
 - public/: images (WebP/AVIF), logo variants
 - styles/: tailwind.css, tokens.css (CSS variables for colors, spacing)

 ## Sample copy
 - Hero H1: “Compassionate care that respects your dignity.”
 - Sub: “Personalised home care and supported living across Chelmsford and the East of England.”
 - Primary CTA: “Call 01245823377”  Secondary: “Enquire online”

 ## Illustrative hero section (example)
 ```html
 <section class="bg-[#040368] text-white">
   <div class="mx-auto max-w-7xl px-6 py-24 grid gap-8 lg:grid-cols-2 items-center">
     <div>
       <h1 class="text-4xl/tight font-semibold">Compassionate care that respects your dignity.</h1>
       <p class="mt-4 text-white/80">Personalised home care and supported living across Chelmsford and the East of England.</p>
       <div class="mt-8 flex gap-4">
        <a href="tel:01245823377" class="inline-flex items-center rounded-md bg-[#FF5B5C] px-6 py-3 font-medium text-[#040368]">Call 01245823377</a>
         <a href="/contact" class="inline-flex items-center rounded-md border border-white/30 px-6 py-3">Enquire online</a>
       </div>
     </div>
     <img src="/images/hero-family.webp" alt="Caregiver supporting client at home" class="rounded-xl shadow-lg" />
   </div>
 </section>
 ```

 ## Milestones and timeline (indicative)
 - Week 1: IA/visual approval, scaffold + theme
 - Week 2: Core pages and components
 - Week 3: Forms, SEO, a11y/perf, content QA
 - Week 4: UAT, revisions, launch

 ## Approvals needed
 1) Confirm sitemap and stack (Astro + Tailwind OK?)
 2) Approve typography pair (Poppins + Inter) and imagery direction
 3) Confirm forms handling (Netlify/Vercel/Formspree) and chosen analytics
 4) Provide any testimonials and team bios when available

 ---

 Generated and maintained by the web implementation lead.
