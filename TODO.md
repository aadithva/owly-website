# Website TODO

## SEO Content Fixes

- [ ] Remove em dashes (--) from all blog MDX files
- [ ] Blog posts are too barebones - add more elements:
  - [ ] Add hero images per post (not reusing shine gallery images)
  - [ ] Add inline images/diagrams within post body
  - [ ] Add author bio section at bottom of each post
  - [ ] Add "Related Posts" section at bottom linking to other blog posts
  - [ ] Add table of contents for longer posts
  - [ ] Add estimated reading time display
  - [ ] Add social share buttons
  - [ ] Consider adding code snippets, callout boxes, stat highlights as MDX components

## /make and /tools Pages - Need Visual Polish

- [ ] Reuse existing site components (GlowingEffect on feature cards, motion animations)
- [ ] Add hero section with background image or gradient (like main site hero)
- [ ] Add an interactive product preview or mockup screenshot
- [ ] Add FAQ section with schema markup (faqSchema already exists in lib/schema.ts)
- [ ] Add testimonial or social proof element
- [ ] Add "How it works" steps section with icons
- [ ] /tools pages need actual interactive tool components (Phase 3)
- [ ] Better CTA section - reuse the black rounded card style from blog newsletter CTA

## SEO Phase 3 - Content at Scale

- [ ] Set up Gemini API integration for content generation
- [ ] AI detection check pipeline (GPTZero or Sapling)
- [ ] Humanization pass workflow
- [ ] Quality gate checklist automation
- [ ] Generate 20-30 /make pages (see KEYWORDS.md in ai_seo/ for full list)
- [ ] Write 5 bottom-of-funnel blog posts (comparisons, "best X" lists)
- [ ] Build first 2 interactive tools (video ad script generator, hook generator)
- [ ] Generate 20-30 /learn glossary pages

## SEO Phase 4 - Analytics & Tracking

- [ ] Set up Google Search Console for owly.studio
- [ ] Add Google Analytics (GA4) tracking
- [ ] Set up conversion tracking (CTA clicks -> app.owly.studio)
- [ ] Integrate GSC API for weekly performance pulls (impressions, clicks, CTR, position)
- [ ] Add "Last updated" dates to all content pages (freshness signal)
- [ ] Set up AI citation monitoring (manual weekly checks on ChatGPT, Perplexity, Gemini)

## SEO Phase 5 - Entity Building & AEO

- [ ] Create /llms.txt file for AI engine discoverability
- [ ] Submit to Product Hunt
- [ ] Create Reddit presence (r/videography, r/marketing, r/ugcreators)
- [ ] List on directories (G2, Capterra, AlternativeTo)
- [ ] Add Organization + SoftwareApplication JSON-LD to homepage (server component wrapper needed)
- [ ] Add metadata exports to existing pages (home, features, about, pricing need server wrappers)
- [ ] Create default OG image at public/images/og/default.png (1200x630)
- [ ] Generate dynamic OG images per blog post (Next.js ImageResponse)

## Website Audit Fixes (from audit report)

See `owly_miscellenous_tasks/website_audit_report.md` for full list of 55 issues.
Priority items:
- [ ] Replace placeholder content (lorem ipsum, fake contacts, fake phone/address)
- [ ] Replace fake founder photos on about page with real ones
- [ ] Fix or remove fake testimonials
- [ ] Provide distinct feature images for carousel (all use ideate.png)
- [ ] Make contact form functional or remove it
- [ ] Remove duplicate font @import from globals.css (already loaded via next/font)
