# Phase 1 — Product Requirements Document (PRD)
**Project:** Maxwell Financial Services Ltd — Website Rebuild  
**Version:** 1.0 — Approval Draft  
**Date:** October 2026  
**Author:** Engineering Lead

---

## 1. Overview & Goals

### 1.1 Business Context
Maxwell Financial Services Ltd (FSP737512) is an independent NZ insurance adviser operating under a Class 2 FMA licence. Revenue is generated exclusively through commissions paid by insurers when clients take out or renew policies through Maxwell. The website is the primary (and sole) digital lead-generation channel.

The current WordPress + WPBakery site generates leads through:
1. A JS-based phone-callback form on the homepage and every product page
2. A full enquiry form on the Contact page
3. A "Get a Quote" button that redirects to Tower's bundle-builder for home/car/contents insurance

The rebuild preserves this exact business model while delivering a dramatically improved user experience, performance, and accessibility posture.

### 1.2 Business Goal
**Generate qualified enquiries and free-quote requests.** A "qualified lead" is a user who:
- Submits the callback form (phone number captured)
- Submits the contact/enquiry form (name + email + phone + interest)
- Clicks through to Tower's bundle-builder (`/quote/bundle-builder?agentcode=MYSOL142`)

### 1.3 Primary KPIs
| KPI | Measurement | Target |
|---|---|---|
| Completed quote/contact form submissions | Form submission count (GTM event `form_submit_quote`, `form_submit_callback`) | Baseline + 20% uplift in 90 days |
| Tower quote click-throughs | GTM event `quote_click_tower` | Baseline + 20% uplift in 90 days |

### 1.4 Secondary KPIs
| KPI | Measurement |
|---|---|
| Call taps | GTM event `tap_to_call` |
| Email taps | GTM event `tap_email` |
| Scroll depth to first CTA | >50% of sessions reach CTA on homepage |
| Lighthouse mobile (Perf/SEO/BP/A11y) | ≥ 95 / ≥ 95 / ≥ 95 / 100 |
| LCP | < 2.0s |

---

## 2. Users & Personas

### P-1: Young Family — "The Growing Household"
- **Name:** Priya, 32, nurse, two kids under 5
- **Intent:** Protect the family if she or her partner dies or becomes unable to work. May not know the difference between life, trauma, and income protection.
- **Concerns:** "Can I afford it?", "What do I actually need?", "How do I know Roger is trustworthy?"
- **Entry page:** Homepage or `/life-insurance/` via Google search "life insurance NZ"
- **Journey:** Homepage → Life Insurance or Income Protection → Callback form or Contact

### P-2: Mortgage Holder / Self-Employed — "The Risk Manager"
- **Name:** Daniel, 41, plumber, sole trader, has a mortgage
- **Intent:** Protect income if he can't work due to injury. Has a mortgage to service. Already has some cover but thinks it may be inadequate.
- **Concerns:** "What's the difference between income protection and ACC?", "How long before payments start?", "What if I have a pre-existing condition?"
- **Entry page:** `/income-protection/` or `/trauma-insurance/`
- **Journey:** Product page → FAQ / process steps → Callback form

### P-3: Small Business Owner — "The Protector of Continuity"
- **Name:** Amita, 48, runs a 5-person accounting firm
- **Intent:** Ensure the business survives if a key person dies or becomes disabled. Interested in key-person, buy-sell and business overhead cover.
- **Concerns:** "Is this adviser experienced with businesses?", "How are commissions disclosed?"
- **Entry page:** `/business-insurance/`
- **Journey:** Business Insurance → About (check credentials) → Disclosure Statement → Contact

### P-4: Over-50 Reviewing Cover — "The Reassurance Seeker"
- **Name:** Brian, 57, public servant, kids grown, mortgage almost paid
- **Intent:** Review existing life and health cover. May be over-insured for life but under-insured for health.
- **Concerns:** "My health is more important now", "I want someone to review what I already have", "Are these guys actually independent?"
- **Entry page:** `/health-insurance/` or `/about/`
- **Journey:** Health Insurance → About → Disclosure Statement (checks FSP, independence) → Callback or Contact

---

## 3. User Journeys

### Journey A — "Personal Insurance via Adviser" (primary)
1. User searches "life insurance NZ adviser" → lands on `/life-insurance/`
2. Reads What is it? / Benefits / coverage details
3. Scrolls to callback form → enters phone number → submits
4. **Conversion event:** `form_submit_callback`

### Journey B — "Homepage Exploration"
1. User searches "Maxwell Insurance NZ" → lands on `/`
2. Reads hero → scrolls product grid → clicks a product card
3. Reads product page → submits enquiry on Contact page
4. **Conversion event:** `form_submit_quote`

### Journey C — "Tower Direct Quote" (home/car/contents)
1. User lands on `/home-insurance/`, `/car-insurance/`, or `/contents-insurance/`
2. Sees Tower CTA module "Get a quote online with Tower Insurance"
3. Clicks "Get a Quote" → leaves to Tower bundle-builder
4. **Conversion event:** `quote_click_tower`

### Journey D — "Trust Verification"
1. User arrives via any page → navigates to `/about/` and/or `/disclosure-statement/`
2. Checks FSP numbers, licence, adviser credentials, commission disclosure
3. Returns to product page → submits callback
4. No specific conversion event (part of multi-session journey)

---

## 4. Scope

### 4.1 In Scope — MVP

| Area | Deliverable |
|---|---|
| All 15 sitemap URL routes | Fully built and content-populated |
| Global header/footer | With all required licence/FSP/disclosure elements |
| TopBanner | Cobalt strip (optional close) |
| Homepage | All 10 sections with real content |
| 9 product page template | Single template, 9 instances with real copy |
| About page | Roger + Kiri bios, mission statement |
| Testimonials page | Award content + static testimonial cards (data from client) |
| Disclosure Statement | Full content, ProseLegal component, unaltered |
| Privacy Policy | Full content, ProseLegal component |
| Contact page | Full enquiry form + Tower CTA module + contact details |
| Callback form | On homepage + every product page |
| Quote/enquiry form | Contact page only |
| Cookie/consent modal | Consent Mode v2, GTM consent-gated |
| GTM integration | `GTM-W4TSBGJD`, consent-gated |
| Tower quote redirect | Env-var-backed, tracked |
| JSON-LD structured data | InsuranceAgency, Person, BreadcrumbList |
| SEO plumbing | metadata API, sitemap.ts, robots.ts, OG/Twitter images |
| Redirect map | All 301s from audit §6 |
| 404 page | Branded with CTA |
| Accessibility | WCAG 2.2 AA throughout |
| Performance | Lighthouse ≥ 95 mobile |
| Security headers | CSP, HSTS, X-Frame-Options, etc. |
| CI pipeline | lint, typecheck, unit, e2e, a11y, Lighthouse CI |

### 4.2 Out of Scope — V2 (deferred)

| Feature | Rationale for deferral |
|---|---|
| Blog / guides | Content strategy not defined; SEO benefit real but requires editorial workflow |
| Client portal | Requires auth layer, identity management — significant scope |
| Online needs calculator | Requires FMA review of the tool's advice output; not simple form |
| E-sign / digital application | Requires integration with insurers' APIs; not in scope for website |
| Headless CMS (Sanity/Payload) | TypeScript content modules sufficient for MVP; CMS path documented as v2 |
| Live chat | No tool selected; callback form covers the use case |
| Site search | Low value — 15 pages, clear nav; Algolia/Pagefind can be added v2 |

> **Scope challenge:** You listed "search" in the functional requirements — I recommend **dropping search from v1**. With 15 pages and a clear mega-nav, internal search provides marginal value and adds complexity (index management, UI, accessibility). A simple site map or expanded footer nav achieves the same discoverability goal. I've included it here as dropped with justification; override this if you disagree.

---

## 5. Functional Requirements

> Format: FR-NNN | Description | Priority | Acceptance Test

### 5.1 Global

| ID | Requirement | Priority | Notes |
|---|---|---|---|
| FR-001 | Every page must include a skip-to-main-content link as the first focusable element | Must | WCAG 2.4.1 |
| FR-002 | Every page must display FSP number (FSP737512), Class 2 licence statement, and a link to the Disclosure Statement in the footer | Must | FMA regulatory requirement |
| FR-003 | Footer Disclosure Statement link must remain visible and unaltered on every page | Must | Non-negotiable |
| FR-004 | All pages must end with a clear CTA (quote or contact) above the footer | Must | Conversion |
| FR-005 | No page may contain invented statistics, rankings, or testimonials not sourced from `/content-source/` or the client | Must | Compliance |
| FR-006 | All regulated wording must be marked `// COMPLIANCE-REVIEW` in source code | Must | Audit trail |
| FR-007 | GTM (`GTM-W4TSBGJD`) must only load after the user grants analytics consent | Must | NZ Privacy Act 2020, Consent Mode v2 |
| FR-008 | Click-to-call links must use `tel:+6421592786` and fire GTM event `tap_to_call` | Must | Tracking |
| FR-009 | Email links must use `mailto:info@maxwellinsurance.co.nz` and fire GTM event `tap_email` | Must | Tracking |
| FR-010 | All images must have explicit alt text; decorative images must use `alt=""` | Must | WCAG 1.1.1 |
| FR-011 | All pages must be keyboard-navigable end-to-end without a mouse | Must | WCAG 2.1.1 |
| FR-012 | Focus indicators must be visible (WCAG 2.4.11 — 3:1 contrast ratio minimum) | Must | WCAG 2.2 AA |
| FR-013 | Site must be fully functional without JavaScript for static content | Should | Progressive enhancement |
| FR-014 | Cookie preference modal must appear on first visit and persist choice for 365 days | Must | Privacy compliance |

### 5.2 Header & Navigation

| ID | Requirement | Priority |
|---|---|---|
| FR-015 | TopBanner must show "Get a Free Insurance Quote" CTA linking to `/contact/` | Must |
| FR-016 | TopBanner must be dismissible and remember dismissed state (session or localStorage) | Should |
| FR-017 | Header must contain: logo (links to `/`), Products mega-nav (9 items), About dropdown (Testimonials, Disclosure, Privacy), Contact link, "Get A Free Insurance Quote" CTA button | Must |
| FR-018 | Products dropdown must list all 9 product pages with their correct slugs | Must |
| FR-019 | Mobile nav must be accessible: keyboard trap in drawer, Esc closes, focus returns to trigger | Must |
| FR-020 | Active page must be indicated in navigation (aria-current="page") | Must |
| FR-021 | Header must be sticky on scroll (collapses on scroll-down, returns on scroll-up) | Should |

### 5.3 Homepage

| ID | Requirement | Priority |
|---|---|---|
| FR-022 | Hero section must have a single `<h1>` ("You can't predict but you can protect" or similar from content) | Must |
| FR-023 | Hero must include Tower CTA module with all three product links and the Tower quote button (value from env var `NEXT_PUBLIC_TOWER_QUOTE_URL`) | Must |
| FR-024 | Product grid must render all 9 products with image, title, blurb, and "Learn More" link | Must |
| FR-025 | Callback form on homepage must capture phone number only, include honeypot field, Privacy Policy consent link, and submit via Server Action | Must |
| FR-026 | Process steps must render all 6 steps with unique copy (Insured step needs new copy — // TODO(client)) | Must |
| FR-027 | Philosophy section must include verbatim FSP/licence paragraph and Disclosure Statement link | Must |
| FR-028 | Partner logos must each have descriptive alt text and no broken images | Must |
| FR-029 | Testimonial section must render from static data (no third-party widget); empty state if no data provided | Must |

### 5.4 Product Pages (9 pages, shared template)

| ID | Requirement | Priority |
|---|---|---|
| FR-030 | Each product page must have a unique `<h1>` matching the product name | Must |
| FR-031 | Each product page must have a Breadcrumbs component (`Home > Products > [Product Name]`) | Must |
| FR-032 | Each product page must include a callback form identical to the homepage callback form | Must |
| FR-033 | Home, Car, and Contents product pages must include the Tower CTA module above the callback form | Must |
| FR-034 | Each product page must include a "Explore Other Products" cross-link section | Should |
| FR-035 | All copy-paste errors from the audit (C-1, C-5, C-6, C-7) must be corrected before launch or marked // TODO(client) | Must |

### 5.5 About Page

| ID | Requirement | Priority |
|---|---|---|
| FR-036 | About page must have a single `<h1>` ("About Maxwell Financial Services") | Must |
| FR-037 | Roger Venkatesh bio must include: photo (with alt), title, FSP number, bio paragraphs, contact details | Must |
| FR-038 | Kiri Venkatesh bio must include: photo (with alt), title, bio (FSP number if confirmed by client) | Must |
| FR-039 | Mission statement must appear verbatim from scraped content | Must |
| FR-040 | FSP/licence paragraph must appear on the About page | Must |

### 5.6 Testimonials Page

| ID | Requirement | Priority |
|---|---|---|
| FR-041 | Testimonials page must have a single `<h1>` ("What Our Customers Say") | Must |
| FR-042 | mySolutions Top Achiever Award 2023 section must be present with award photos | Must |
| FR-043 | Customer testimonial cards must render from typed content module; display placeholder message if client has not provided data | Must |
| FR-044 | No testimonials may be invented — all must be sourced from client data | Must |

### 5.7 Disclosure Statement & Privacy Policy

| ID | Requirement | Priority |
|---|---|---|
| FR-045 | Disclosure Statement content must be rendered verbatim from the scrape using ProseLegal component | Must |
| FR-046 | No content in the Disclosure Statement may be reformatted, summarised, or paraphrased | Must |
| FR-047 | Privacy Policy content must be rendered verbatim | Must |
| FR-048 | Both legal pages must include a `// COMPLIANCE-REVIEW` block comment noting that the client must sign off before publishing | Must |

### 5.8 Contact Page

| ID | Requirement | Priority |
|---|---|---|
| FR-049 | Contact page must have a single `<h1>` ("Contact Maxwell Financial Services") | Must |
| FR-050 | Enquiry form must collect: Name*, Email*, Phone*, Interested In (checkboxes for all products including Business), Message (optional) | Must |
| FR-051 | Form must include explicit Privacy Policy consent link above the submit button | Must |
| FR-052 | Form must include honeypot field, Cloudflare Turnstile CAPTCHA, and server-side rate limiting | Must |
| FR-053 | On successful submission: show success message, fire `form_submit_quote` GTM event, send email to configured recipient via Resend | Must |
| FR-054 | On error: show accessible inline error messages; do not lose form data | Must |
| FR-055 | Tower CTA module must appear above the enquiry form | Must |
| FR-056 | Adviser contact details (email, phone, address) must be displayed | Must |

### 5.9 Callback Form (all pages with callback)

| ID | Requirement | Priority |
|---|---|---|
| FR-057 | Callback form collects: phone number* only | Must |
| FR-058 | Includes honeypot field (visually hidden, a11y-hidden) | Must |
| FR-059 | Includes Privacy Policy consent text ("By submitting, you agree to our Privacy Policy") | Must |
| FR-060 | On submit: sends phone + page URL to configured email via Resend; fires `form_submit_callback` GTM event | Must |
| FR-061 | Server Action validates phone format (NZ phone: 0[234578]\d{7,9}) | Must |
| FR-062 | Rate limit: max 5 submissions per IP per hour | Must |

### 5.10 Tower Quote CTA

| ID | Requirement | Priority |
|---|---|---|
| FR-063 | Tower quote URL must be read from env var `NEXT_PUBLIC_TOWER_QUOTE_URL` — never hard-coded in components | Must |
| FR-064 | Clicking the Tower "Get a Quote" button fires GTM event `quote_click_tower` | Must |
| FR-065 | Tower link must open in the same tab (not `target="_blank"` — maintains navigation context for users) | Should |

### 5.11 Cookie / Consent

| ID | Requirement | Priority |
|---|---|---|
| FR-066 | Cookie modal appears on first visit before any non-essential cookies are set | Must |
| FR-067 | User must be able to "Accept All", "Decline All", or manage individual categories | Must |
| FR-068 | GTM fires in Consent Mode v2 with denied defaults until consent granted | Must |
| FR-069 | Consent preference stored in localStorage for 365 days | Must |

### 5.12 SEO & Structured Data

| ID | Requirement | Priority |
|---|---|---|
| FR-070 | Every page must have a unique, descriptive `<title>` tag and meta description | Must |
| FR-071 | Every page must have canonical URL set | Must |
| FR-072 | Homepage must include JSON-LD for `InsuranceAgency` / `LocalBusiness` and `Person` (Roger) | Must |
| FR-073 | All product pages must include `BreadcrumbList` JSON-LD | Must |
| FR-074 | Sitemap must list all 15 URLs and be served at `/sitemap.xml` | Must |
| FR-075 | `robots.txt` must disallow `/dev/*` and WordPress paths | Must |
| FR-076 | OpenGraph and Twitter card metadata on every page | Must |

### 5.13 404 Page

| ID | Requirement | Priority |
|---|---|---|
| FR-077 | Custom 404 page must include branded design, helpful navigation links to top-level pages, and a "Get a Free Quote" CTA | Must |

### 5.14 Dropped: Site Search

> **Decision:** Site search dropped from v1. 15 pages, clear mega-nav, and a products dropdown make search unnecessary. Revisit in v2 when blog/guides content grows. Documented in ADR-005.

---

## 6. Page-by-Page Specification

### 6.1 Home (`/`)

| Field | Value |
|---|---|
| Purpose | Primary brand and lead-generation hub |
| SEO Title | "Insurance Adviser Auckland NZ – Maxwell Financial Services" |
| Meta Description | "Maxwell Financial Services offers expert, independent insurance advice for individuals, families and businesses in NZ. Get a free no-obligation quote today." |
| H1 | "You Can't Predict — But You Can Protect" (from scraped philosophy section) |

**Sections (in order):**
1. `TopBanner` — Electric Cobalt, "Get A Free Insurance Quote" CTA
2. `Header` — logo, mega-nav, CTA button
3. `HeroPanel` — Electric Cobalt 40px panel; headline H1; Tower CTA module (Home/Car/Contents links + Get a Quote button)
4. `ProductGrid` — 9 `ProductCard` components; "Our Products" H2
5. `CallbackForm` — "Need help finding the right insurance?" H2; phone field; Privacy consent
6. `ProcessSteps` — "Our Process" H2; 6 steps
7. `AdviserCard` + philosophy block — FSP/licence statement; // COMPLIANCE-REVIEW
8. `PartnerLogos` — "Our Partners" H2; 8 logo rows
9. `TestimonialsList` — "What Our Customers Say" H2
10. `CTABand` — "Get a free quote" H2; filled button to `/contact/`
11. `Footer`

**Primary CTA:** Get a Free Quote → `/contact/` and Tower bundle-builder  
**Content source:** `home.md`

---

### 6.2 Life Insurance (`/life-insurance/`)

| Field | Value |
|---|---|
| SEO Title | "Life Insurance NZ – Maxwell Financial Services" |
| Meta Description | "Life insurance pays a lump sum on death or terminal illness diagnosis. Get expert, independent advice from Maxwell Financial Services. Free quote." |
| H1 | "Life Insurance" |

**Sections:** `Header` → `Breadcrumbs` → product hero (icon + H1) → content sections (What is it / Benefits / Who / Covered / Not covered / How much) → `ProductGrid` (sidebar variant, 8 related products) → `CallbackForm` → `TestimonialsList` → `CTABand` → `Footer`

**Content source:** `life-insurance.md`  
**Primary CTA:** Callback form + `/contact/`

---

### 6.3 Trauma Insurance (`/trauma-insurance/`)

| SEO Title | "Trauma / Critical Illness Insurance NZ – Maxwell Financial Services" |
|---|---|
| H1 | "Trauma Insurance" |
| Content source | `trauma-insurance.md` |
| Compliance note | Statistics section requires // COMPLIANCE-REVIEW |

---

### 6.4 Income Protection (`/income-protection/`)

| SEO Title | "Income Protection Insurance NZ – Maxwell Financial Services" |
|---|---|
| H1 | "Income / Mortgage Protection Insurance" |
| Content source | `income-protection.md` |
| Bug fix | Heading "How much Life Insurance..." → "How much Income Protection..." |

---

### 6.5 Permanent Disability Insurance (`/permanent-disability-insurance/`)

| SEO Title | "Total Permanent Disability Insurance NZ – Maxwell Financial Services" |
|---|---|
| H1 | "Permanent Disability Insurance" |
| Content source | `permanent-disability-insurance.md` |
| Bug fix | "What is TPD?" definition must be replaced // TODO(client) |

---

### 6.6 Health Insurance (`/health-insurance/`)

| SEO Title | "Health Insurance NZ – Maxwell Financial Services" |
|---|---|
| H1 | "Health Insurance" |
| Content source | `health-insurance.md` |
| Bug fix | "Who can have Life Insurance?" heading → "Who can have Health Insurance?" |
| Compliance | Surgery cost table // COMPLIANCE-REVIEW |

---

### 6.7 Home Insurance (`/home-insurance/`)

| SEO Title | "Home Insurance NZ — Get a Quote Online | Maxwell Financial Services" |
|---|---|
| H1 | "Home Insurance" |
| Special | Tower CTA module prominent above content |
| Content source | `home-insurance.md` |

---

### 6.8 Car Insurance (`/car-insurance/`)

| SEO Title | "Car Insurance NZ — Get a Quote Online | Maxwell Financial Services" |
|---|---|
| H1 | "Car Insurance" |
| Special | Tower CTA module prominent above content |
| Content source | `car-insurance.md` |

---

### 6.9 Contents Insurance (`/contents-insurance/`)

| SEO Title | "Contents Insurance NZ — Get a Quote Online | Maxwell Financial Services" |
|---|---|
| H1 | "Contents Insurance" |
| Special | Tower CTA module prominent above content |
| Content source | `contents-insurance.md` |

---

### 6.10 Business Insurance (`/business-insurance/`)

| SEO Title | "Business Insurance NZ – Maxwell Financial Services" |
|---|---|
| H1 | "Business Insurance" |
| Content source | `business-insurance.md` |
| Note | Thin page — expand in v2 with key-person and buy-sell detail |

---

### 6.11 About (`/about/`)

| SEO Title | "About Us – Maxwell Financial Services Ltd" |
|---|---|
| H1 | "About Maxwell Financial Services" |
| Content source | `about.md` |
| Sections | Mission → Roger bio → Kiri bio → FSP/licence → CTA → Footer |
| Compliance | FSP paragraph must appear // COMPLIANCE-REVIEW |

---

### 6.12 Testimonials (`/testimonials/`)

| SEO Title | "Customer Testimonials – Maxwell Financial Services" |
|---|---|
| H1 | "What Our Customers Say" |
| Content source | `testimonials.md` + client-supplied review data |
| Sections | Award section → testimonial cards grid → CTA → Footer |

---

### 6.13 Disclosure Statement (`/disclosure-statement/`)

| SEO Title | "Financial Adviser Disclosure Statement – Maxwell Financial Services Ltd" |
|---|---|
| H1 | "Disclosure Statement" |
| Content source | `disclosure-statement.md` (verbatim) |
| Rendering | `ProseLegal` — no reformatting; commission tables rendered as HTML tables |
| Compliance | // COMPLIANCE-REVIEW — entire page |

---

### 6.14 Privacy Policy (`/privacy-policy/`)

| SEO Title | "Privacy Policy – Maxwell Financial Services Ltd" |
|---|---|
| H1 | "Privacy Policy" |
| Content source | `privacy-policy.md` (verbatim with placeholder fixes // TODO(client)) |
| Rendering | `ProseLegal` |

---

### 6.15 Contact (`/contact/`)

| SEO Title | "Contact Us – Get a Free Insurance Quote | Maxwell Financial Services" |
|---|---|
| H1 | "Contact Maxwell Financial Services" |
| Content source | `contact.md` |
| Sections | H1 → Tower CTA module → Adviser details → Enquiry form → Footer |
| Compliance | Privacy consent link on form // COMPLIANCE-REVIEW |

---

## 7. Content Model

### 7.1 Structured Data (TypeScript modules + Zod validation)

| Module | Fields | Used by |
|---|---|---|
| `siteConfig` | companyName, FSPNumber, licenceClass, adviserName, adviserFSP, phone, email, address, GTMId, towerQuoteUrl, disclosureUrl | Global layout, footer, JSON-LD |
| `products[]` | slug, name, shortBlurb, heroImageSrc, heroImageAlt, metaTitle, metaDescription | Homepage ProductGrid, nav, ProductCard |
| `processSteps[]` | step (1-6), title, body, iconSrc, iconAlt | Homepage ProcessSteps |
| `partners[]` | name, logoSrc, logoAlt, width, height | Homepage PartnerLogos |
| `testimonials[]` | id, name, quote, date, productType | Homepage + Testimonials page |
| `advisers[]` | name, legalName, title, fspNumber, bio, photoSrc, photoAlt, email, phones[] | About page, AdviserCard |
| `navConfig` | Products[] (slug+label), About[] (slug+label), headerCTA | Header mega-nav |

### 7.2 Long-Form / Prose (MDX)
- `/src/content/legal/disclosure-statement.mdx`
- `/src/content/legal/privacy-policy.mdx`

MDX is used here to allow verbatim legal content with HTML table support. These files are **never auto-generated** — copy is pasted verbatim from the scrape, pending `// TODO(client)` fixes.

### 7.3 CMS Migration Path (v2)
All TypeScript content modules are designed to be replaced by Sanity/Payload queries without touching component props. Each module exports a shape validated by a Zod schema — the CMS migration replaces the `import` with a `fetch()` returning the same schema. Document this in ADR-006.

---

## 8. Non-Functional Requirements

### 8.1 Performance
| Metric | Target | Enforcement |
|---|---|---|
| Lighthouse Performance (mobile) | ≥ 95 | Lighthouse CI on every PR |
| Lighthouse SEO | ≥ 95 | Lighthouse CI |
| Lighthouse Best Practices | ≥ 95 | Lighthouse CI |
| Lighthouse Accessibility | 100 | Lighthouse CI + axe-core |
| LCP | < 2.0s | Lighthouse CI threshold |
| CLS | < 0.05 | Lighthouse CI threshold |
| INP | < 200ms | Lighthouse CI threshold |
| Bundle size (JS, gzipped) | < 150KB first load | `next build` output check |

### 8.2 Accessibility
- WCAG 2.2 AA throughout
- axe-core: zero critical/serious violations
- Screen reader tested (VoiceOver/NVDA)
- Keyboard-only navigation end-to-end
- `prefers-reduced-motion` respected for all animations
- All form fields have visible labels (not placeholder-only)
- All error messages are announced by screen readers (role="alert")

### 8.3 SEO
- Unique title + meta description per page
- Canonical URLs
- Sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- JSON-LD structured data (InsuranceAgency, Person, BreadcrumbList)
- OpenGraph + Twitter card meta on every page
- Zero changed slugs from current site

### 8.4 Privacy & Legal
- NZ Privacy Act 2020 compliance
- Minimum personal data collected on forms (phone only for callback; name/email/phone/topic for enquiry)
- No health information collected on website
- Privacy Policy linked at every form
- Consent Mode v2 for GTM

### 8.5 Browser Support
| Browser | Support level |
|---|---|
| Chrome (last 2 versions) | Full |
| Safari (last 2 versions) | Full |
| Firefox (last 2 versions) | Full |
| Edge (last 2 versions) | Full |
| Mobile Safari (iOS 16+) | Full |
| Chrome Android | Full |
| IE 11 | Not supported |

### 8.6 Uptime & Hosting
- Vercel (Sydney region) — <50ms TTFB for NZ users
- Preview deploys for every PR
- Rollback: instant Vercel deployment revert
- Uptime target: 99.9% (Vercel SLA)

---

## 9. Analytics & Tracking Plan

### 9.1 GTM Container
`GTM-W4TSBGJD` — loaded only after analytics consent via Consent Mode v2.

### 9.2 Data Layer Events

| Event name | Trigger | Parameters |
|---|---|---|
| `quote_click_tower` | Click on any Tower "Get a Quote" button | `{page_path, product_context}` |
| `form_submit_quote` | Successful Contact form submission | `{products_interested, has_message}` |
| `form_submit_callback` | Successful Callback form submission | `{page_path}` |
| `tap_to_call` | Click on `tel:` link | `{page_path}` |
| `tap_email` | Click on `mailto:` link | `{page_path}` |
| `cookie_consent_accept` | User clicks "Accept All" in cookie modal | — |
| `cookie_consent_decline` | User clicks "Decline All" in cookie modal | — |
| `nav_product_click` | Click on product in mega-nav dropdown | `{product_slug}` |

### 9.3 Consent Gate
All events are pushed to `window.dataLayer` regardless of consent. GTM's Consent Mode v2 respects the consent state — analytics tags only fire when `analytics_storage: granted`.

---

## 10. Acceptance Criteria

### AC-001 — Callback Form
**Given** a user on any product page  
**When** they enter a valid NZ phone number and submit the callback form  
**Then** the form shows a success message, a `form_submit_callback` event fires in the GTM data layer, and an email is sent to the configured recipient containing the phone number and page URL  

### AC-002 — Contact Form
**Given** a user on `/contact/`  
**When** they complete all required fields (Name, Email, Phone, at least one product interest) and submit  
**Then** the form shows a success state, `form_submit_quote` fires, and the submission email is received within 60 seconds  

### AC-003 — Tower Quote CTA
**Given** a user on `/home-insurance/`, `/car-insurance/`, or `/contents-insurance/`  
**When** they click "Get a Quote"  
**Then** they are navigated to `https://my.tower.co.nz/quote/bundle-builder?agentcode=MYSOL142`, and a `quote_click_tower` event fires in the data layer  

### AC-004 — Cookie Consent
**Given** a first-time visitor  
**When** the page loads  
**Then** the cookie modal is displayed before any non-essential cookies are set, and GTM operates in denied mode until consent is granted  

### AC-005 — Regulatory Content
**Given** any page on the site  
**When** a user scrolls to the footer  
**Then** they see "Maxwell Financial Services Limited (FSP737512) holds a Class 2 Licence issued by the Financial Markets Authority" and a "Disclosure Statement" link  

### AC-006 — Redirect Map
**Given** a user navigating to `/maxwell-limo-services/`  
**When** the request is processed  
**Then** a 301 redirect returns, pointing to `/`  

### AC-007 — No Invented Content
**Given** any page on the site  
**When** reviewed against `/content-source/`  
**Then** no claim, statistic, testimonial, or fact exists on the page that is not traceable to the scraped content or marked `// TODO(client)`  

### AC-008 — Accessibility
**Given** the homepage running in axe-core  
**When** the full-page accessibility scan completes  
**Then** zero critical or serious violations are reported  

### AC-009 — Spam Protection
**Given** a bot submitting the callback form 10 times in 60 seconds from the same IP  
**When** the 6th submission arrives  
**Then** the server returns a 429 Too Many Requests response and no email is sent  

---

## 11. Risks, Assumptions & Open Questions

### 11.1 Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Client unable to provide testimonial text | Medium | Medium | Placeholder component shows "More reviews coming soon" — launch is not blocked |
| TPD page copy not corrected before launch | Medium | High | Mark page with prominent `// TODO(client)` banner in staging; do not publish without correction |
| Commission table dates outdated | Medium | High (regulatory) | Flag in Disclosure Statement MDX; client must verify before launch |
| Images on WordPress CDN inaccessible post-cutover | Low | High | Download all images during Phase 4 foundation; commit to repo |
| GTM container has tags that collect data without consent | Medium | Medium | Review GTM container with client during cutover phase |
| Adviser name discrepancy (Raja/Roger) causes FMA compliance issue | Low | High | Client to confirm in writing before launch |

### 11.2 Assumptions

| # | Assumption |
|---|---|
| A-1 | "Roger Venkatesh" is the preferred public name and "Raja Venkatesh" is the legal given name; both are the same person |
| A-2 | Kiri Venkatesh (Krithika Sachin Venkatesh) has FSP1007043 — confirm before use in compliance content |
| A-3 | The client controls the Tower agent code `MYSOL142` and it remains valid post-launch |
| A-4 | The client will provide testimonial text before launch; if not, a placeholder is acceptable |
| A-5 | Resend is acceptable as the email delivery service (free tier: 3,000/month — sufficient) |
| A-6 | Cloudflare Turnstile is acceptable for CAPTCHA (free, GDPR-friendly, no Google dependency) |
| A-7 | Vercel (Sydney region) is acceptable for hosting |
| A-8 | The client does not require a CMS for v1; they will request content changes via email/PR |
| A-9 | The client will provide high-resolution image files; the WP CDN images are sufficient as placeholders |
| A-10 | Search is not required for v1 (see scope §4.2) |

### 11.3 Open Questions for Client (Batch — one ask)

1. **Adviser legal vs. public names**: Confirm "Roger Venkatesh" = "Raja Venkatesh" for public-facing use. Confirm Kiri's preferred public name and FSP number (FSP1007043?).
2. **Testimonial data**: Can you export customer testimonials from the WP plugin? We need: name, quote text, date written, type of insurance.
3. **"Insured" process step**: What should this step say? (Currently identical to "Review".)
4. **TPD page definition**: Please provide the correct definition of "Total Permanent Disability Insurance" to replace the current (incorrect) Life Insurance copy.
5. **Form email recipient**: Which email address should receive callback, quote, and enquiry form submissions?
6. **Secondary phone number (09 215 24 23)**: Include on the new site, or redirect all calls to (021) 592 786?
7. **Business Insurance checkbox**: Should it appear on the Contact form's "Interested in" list?
8. **Stats and figures review**: We've flagged 8 statistics across product pages that need source confirmation or removal — see Audit §3 CR-2 through CR-6. Can you review and advise?
9. **Commission table**: Are the rates in the Disclosure Statement current as of launch date?
10. **Privacy Policy placeholder**: Please finalise the AI tool name (currently `[Marloo/Zoom AI note taker]`).
11. **Image rights**: Do you own/license all images currently uploaded to the WordPress site?
12. **Content updates post-launch**: Will you handle updates via PR (preferred for legal pages), or do you need a CMS for product/team content? (Affects v2 planning.)
