# Maxwell Financial Services — Website Rebuild

Modern, fast, accessible, conversion-focused rebuild of **[Maxwell Financial Services Ltd](https://maxwellinsurance.co.nz)** — an independent New Zealand financial advice provider (FAP) licensed by the Financial Markets Authority (FMA).

---

## 🏛 Regulatory Credentials & Business Information

- **Company Legal Name:** Maxwell Financial Services Limited
- **Financial Advice Provider (FAP):** `FSP737512`
- **Licence Type:** Class 2 Licence issued by the Financial Markets Authority (FMA)
- **Financial Advisers:**
  - **Roger Venkatesh** (legal name *Raja Venkatesh*), Director & Financial Adviser — `FSP 539026`
  - **Kiri Venkatesh** (legal name *Krithika Sachin Venkatesh*), Key Account Manager — `FSP 1007043`
- **Dispute Resolution Scheme:** Financial Services Complaints Limited (FSCL) — Approved Ombudsman Scheme
- **Physical Address:** 81 Gardner Avenue, New Lynn, Auckland 0600
- **Postal Address:** PO Box 151077, New Lynn, Auckland 0640
- **Phone:** `(021) 592 786` (Mobile) / `(09) 215 2423` (Office)
- **Email:** `info@maxwellinsurance.co.nz`

---

## 🛠 Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language:** TypeScript 5 (Strict Mode)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with strict `@theme` tokens and zero-config CSS
- **Headless UI:** [Radix UI Primitives](https://www.radix-ui.com/)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Email Delivery:** [Resend](https://resend.com/)
- **Bot Protection:** Cloudflare Turnstile
- **Icons:** [Lucide React](https://lucide.dev/)
- **Unit Testing:** [Vitest](https://vitest.dev/) + React Testing Library + jsdom
- **E2E & Accessibility Testing:** [Playwright](https://playwright.dev/) + `@axe-core/playwright` (WCAG 2.2 AA)
- **Package Manager:** `pnpm`

---

## 🎨 Design System Philosophy (`DESIGN.md`)

The UI strictly adheres to **`DESIGN.md`**:

1. **Strict Three-Tier Radius:**
   - `3px` (`--radius-sm`): Compact badges, category tags, small checkboxes.
   - `16px` (`--radius-2xl`): Interactive controls — buttons, inputs, selects, textareas, nav pill.
   - `40px` (`--radius-3xl`): Content surfaces — cards, images, hero panels, dark bands.
   - *Rule:* Never interpolate (no 4px, 8px, 12px, 24px, 9999px). The jump between 16px and 40px defines the brand aesthetic.

2. **Color Palette & Accessibility:**
   - **Electric Cobalt** (`#006cff`): Primary brand signal, full-bleed hero panels, and filled primary buttons.
   - **Deep Indigo** (`#1b2045`): Headings and high-contrast text. Replaces pure black.
   - **Graphite** (`#4f4f4f`): Body text ensuring full WCAG 2.2 AA contrast (≥ 4.5:1) on parchment and white.
   - **Parchment** (`#f9f9f9`): Canvas background.
   - **Pure White** (`#ffffff`): Card surfaces and inputs.
   - **Glacial Wash** (`#cce2ff`): Tag fills and highlight washes.
   - **Obsidian** (`#202020`): Terminating dark footer band.
   - *Rule:* **Zero `#000000` pure black**.

3. **Typography:**
   - Inter (via `next/font/google`) exposed as `--font-khteka` for geometric humanist neutrality.
   - Roboto (via `next/font/google`) exposed as `--font-roboto` reserved for overlay dialogs/cookie banners.

---

## 📁 Repository Structure

```
├── .github/workflows/ci.yml       # GitHub Actions quality gate
├── public/images/                 # Local optimized images (100% self-contained)
│   ├── logo.png                   # High-res Maxwell Financial Services logo
│   ├── roger-venkatesh.jpg        # Roger Venkatesh portrait
│   ├── kiri-venkatesh.png         # Kiri Venkatesh portrait
│   ├── products/                  # 9 insurance product WebP images
│   ├── process/                   # 6 advisory step icons
│   ├── partners/                  # 8 NZ insurer partner logos
│   └── trust/                     # FSCL logo & Top Achiever awards
├── src/
│   ├── actions/                   # Server Actions (Zod validation + email)
│   │   ├── submit-callback.ts     # Quick callback form action
│   │   └── submit-enquiry.ts      # Full quote enquiry action
│   ├── app/                       # Next.js App Router routes
│   │   ├── [slug]/page.tsx        # Dynamic static product page template
│   │   ├── about/page.tsx         # About company, Roger & Kiri
│   │   ├── contact/page.tsx       # Contact points, hours, dual forms
│   │   ├── dev/styleguide/        # Internal design token styleguide (noindex)
│   │   ├── disclosure-statement/  # Verbatim public disclosure document
│   │   ├── privacy-policy/        # Verbatim Privacy Act 2020 policy
│   │   ├── testimonials/          # Awards & client trust
│   │   ├── layout.tsx             # Root layout with fonts, skip link, header, footer
│   │   ├── page.tsx               # Homepage (all 9 core sections)
│   │   ├── globals.css            # Tailwind v4 @theme tokens
│   │   ├── robots.ts              # Robots.txt generator
│   │   └── sitemap.ts             # XML sitemap generator
│   ├── components/
│   │   ├── layout/                # Header, Footer, TopBanner, SkipLink
│   │   ├── sections/              # HeroPanel, ProductGrid, ProcessSteps, QuoteForm, etc.
│   │   ├── seo/                   # JsonLd, Analytics (GTM), CookieConsent
│   │   └── ui/                    # Button, Input, Textarea, Select, Checkbox, Card, Tag, Heading
│   ├── content/                   # Single source of truth data modules
│   │   ├── site-config.ts         # All company facts, licensing, contact info
│   │   ├── products.ts            # 9 products catalog with copy & coverage
│   │   ├── process-steps.ts       # 6-step advisory framework
│   │   ├── partners.ts            # 8 insurer partners
│   │   ├── advisers.ts            # Roger & Kiri biographies & credentials
│   │   ├── testimonials.ts        # Top Achiever award details
│   │   └── nav-config.ts          # Desktop & mobile navigation structure
│   └── lib/
│       ├── schemas.ts             # Zod validation schemas
│       └── utils.ts               # Tailwind class merge helper
└── tests/
    ├── a11y/                      # Axe accessibility tests
    ├── e2e/                       # Playwright end-to-end tests
    └── unit/                      # Vitest unit tests (schemas, content integrity)
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 20.x
- pnpm >= 11.x

### Installation

```bash
# 1. Clone repository
git clone https://github.com/gkavin2527/maxwell-namolabs.git
cd maxwell-namolabs

# 2. Install dependencies
pnpm install

# 3. Setup environment variables
cp .env.example .env.local

# 4. Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 🧪 Quality Scripts

```bash
# Type check with strict TypeScript
pnpm typecheck

# Lint with ESLint
pnpm lint

# Run unit tests with Vitest
pnpm test

# Build production bundle
pnpm build

# Run end-to-end Playwright tests
pnpm test:e2e

# Run Axe accessibility compliance scan
pnpm test:a11y
```

---

## ⚖️ Regulatory Notice

The content on this website has been structured to meet the disclosure standards required by the Financial Markets Authority (FMA) and the Financial Markets Conduct Act 2013.

All legal disclosures are maintained in `src/app/disclosure-statement/page.tsx` and character-for-character verified against official public filings.
