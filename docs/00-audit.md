# Phase 0 — Content Audit
> Source: `/content-source/scraped/` (18 files). Live site **not** re-crawled.

---

## 1. Per-Page Inventory

### 1.1 Home (`/`)
| Field | Value |
|---|---|
| Source file | `home.md` |
| Target URL | `/` |
| Page title (scraped) | *Maxwell Insurance NZ – Insurance Solutions for You & Your Family* |
| H1 | **Missing** — hero uses `##` |
| Meta description | Not captured in scrape |
| Approx. word count | ~600 |

**Sections (in order):**
1. Top contact strip — phone + email
2. Header/nav — logo, search, Products dropdown (9 items), About dropdown, Contact, CTA
3. Hero — "Home, Car & Contents Insurance / Get a quote online with Tower Insurance" + Tower CTA
4. Our Products — 9 cards (image, h3, blurb, "Learn More")
5. Need help finding the right insurance? — callback form (phone only + honeypot)
6. Our Process — 6 steps: Discover, The Plan, Present, Implement, Review, Insured
7. You can't predict but you can protect — philosophy + FSP/licence statement + adviser card
8. Our Partners — logo carousel (NIB, Chubb, Momentum, Generate, Tower, AIA, Fidelity, Partners Life — duplicated 3× in markup)
9. What our customers say — testimonial widget placeholder (no static text captured)
10. Final CTA band — "Roger is here to help!" + GET A FREE QUOTE
11. Footer — copyright + Disclosure Statement link

**Forms:** Callback (phone + honeypot). No visible submit button — JS-driven.

**Images with alt issues:** Permanent Disability ❌, Health ❌, Home ❌, Car ❌, Contents ❌ (also typo in slug: `contents-insurnace.webp`), Business ❌ — all missing alt text.

**Outbound links:** `https://my.tower.co.nz/quote/bundle-builder?agentcode=MYSOL142`

**Content bugs:**
- No `<h1>` on the page
- "Review" and "Insured" process steps share **identical body text** (bug — §5)
- Testimonial widget renders no static text
- Partner logos duplicated ×3 in markup

---

### 1.2 About (`/about/`)
| Field | Value |
|---|---|
| H1 | **Missing** (uses `###` only) |
| Approx. word count | ~280 |

**Sections:** Mission statement → Roger Venkatesh bio (photo, title, 5 paragraphs, 2 phones, CTA) → Kiri Venkatesh bio (photo, title, 2 paragraphs) → CTA band → Testimonial widget → Footer

**Images:** Roger `Raja-Venkatesh.png` ❌ missing alt; Kiri `kiri-venkatesh.png` ❌ missing alt

**Issues:**
- No FSP/licence paragraph on the page
- Kiri's FSP number absent — // TODO(client): confirm FSP or advisory role
- Roger's secondary phone (09 215 2423) present here but inconsistent sitewide

---

### 1.3 Life Insurance (`/life-insurance/`)
| H1 | ✅ "Life Insurance" | Word count | ~420 |
|---|---|---|---|

**Sections:** Icon image → H1 → What is it? → Benefits → Who can have it? → What is covered? → What isn't covered? → How much required? (5-point list) → Products list → Callback form → Footer

**Issues:** Sentence ending "...will depend on a number of factors:" with no follow-on — minor structural gap.

---

### 1.4 Trauma Insurance (`/trauma-insurance/`)
| H1 | ✅ "Trauma Insurance" | Word count | ~320 |
|---|---|---|---|

**Sections:** Icon → H1 → What is it? → Benefits → Who can have it? → What is covered? → What isn't covered? → Things to consider → Products list → Callback form → Footer

**Issues:**
- "For a 35 year old there is a 20% chance…", "50% of cancer patients…" — // COMPLIANCE-REVIEW: verify source + currency

---

### 1.5 Income Protection (`/income-protection/`)
| H1 | ✅ "Income Protection" | Word count | ~330 |
|---|---|---|---|

**Issues:**
- Section heading says "How much **Life** Insurance is required?" — copy-paste error // TODO(client)
- Figures 55%/75% cited without source — // COMPLIANCE-REVIEW

---

### 1.6 Permanent Disability Insurance (`/permanent-disability-insurance/`)
| H1 | ✅ "Permanent Disability Insurance" | Word count | ~270 |
|---|---|---|---|

**Issues:**
- ⚠️ **CRITICAL**: "What is TPD?" answer is verbatim Life Insurance copy ("A lump sum paid in the event of death…") — factually wrong // TODO(client): replace
- 2001 NZ Disability Survey cited (25 years old) — // TODO(client): update or remove
- "2 out of 5 people…" — // COMPLIANCE-REVIEW: verify source

---

### 1.7 Health Insurance (`/health-insurance/`)
| H1 | ✅ "Health Insurance" | Word count | ~350 |
|---|---|---|---|

**Issues:**
- Section heading "Who can have **Life** Insurance?" — should say Health Insurance // TODO(client)
- Surgery cost table — // COMPLIANCE-REVIEW: verify currency of all figures
- Population projection for 2025 now in the past — // TODO(client): update or remove

---

### 1.8 Home Insurance (`/home-insurance/`)
| H1 | ✅ "Home Insurance" | Word count | ~250 |
|---|---|---|---|

**Includes:** Tower CTA module + three insurance type definitions (Total replacement / Fixed sum / Indemnity). Generic content — no Maxwell value proposition.

---

### 1.9 Car Insurance (`/car-insurance/`)
| H1 | ✅ "Car Insurance" | Word count | ~200 |
|---|---|---|---|

**Issues:** Specific Tower policy details ("$500 emergency costs") — // COMPLIANCE-REVIEW: belongs on Tower's site? Thin page.

---

### 1.10 Contents Insurance (`/contents-insurance/`)
| H1 | ✅ "Contents Insurance" | Word count | ~280 |
|---|---|---|---|

**Issues:** "you already have your home insured with us" — should read "with Tower" // COMPLIANCE-REVIEW. "$20,000" temporary storage limit — // COMPLIANCE-REVIEW: verify current Tower limit.

---

### 1.11 Business Insurance (`/business-insurance/`)
| H1 | ✅ "Business Insurance" | Word count | ~220 |
|---|---|---|---|

**Issues:** Very thin. No mention of Blanket Insurance partner (listed in Disclosure Statement). No key-person / buy-sell detail.

---

### 1.12 Testimonials (`/testimonials/`)
| H1 | ✅ "Testimonials" | Word count | ~50 |
|---|---|---|---|

**Content:** mySolutions Top Achiever Award 2023 announcement + 2 award photos only. No customer testimonial text captured (widget not rendered in scrape).

**// TODO(client):** Export testimonial copy (name, quote, date, product type) for static rendering.

---

### 1.13 Disclosure Statement (`/disclosure-statement/`)
| H1 | ✅ "Disclosure Statement" | Word count | ~900 |
|---|---|---|---|

**Content:** Licensing info, duties, product types, partner lists, commission tables (Risk + Health), KiwiSaver disclosure, General Insurance disclosure, fees/clawback, conflicts of interest, complaints process, FSCL details, privacy statement.

**Issues:**
- Adviser names: `Raja Venkatesh (FSP539026)` and `Krithika Sachin Venkatesh (FSP1007043)` — differs from "Roger" and "Kiri" used elsewhere // TODO(client): confirm legal vs. trading names
- Commission table dates "Post/Pre 27/10/2025" are now historic — confirm current rates apply
- Privacy Statement section here duplicates Privacy Policy page
- // COMPLIANCE-REVIEW: Entire page

---

### 1.14 Privacy Policy (`/privacy-policy/`)
| H1 | ✅ "Privacy Policy" | Word count | ~680 |
|---|---|---|---|

**Issues:**
- References `Privacy Act 1993` in one paragraph — operative law is **Privacy Act 2020** // COMPLIANCE-REVIEW
- `[Marloo/Zoom AI note taker]` — unfinalised placeholder // TODO(client)
- "The Unites States" — typo // TODO(client)
- Last updated "April 2026" — confirm accuracy

---

### 1.15 Contact (`/contact/`)
| H1 | **Missing** (`##` used) | Word count | ~130 |
|---|---|---|---|

**Form fields:** Name*, Email*, Phone*, Interested in (checkboxes: Life, Trauma, Income, Health, Home, Car, Contents — **Business Insurance missing**), Message, honeypot.

**Images:** `Raja-Venkatesh.png` ❌ missing alt

**Issues:**
- No `<h1>`
- "Business Insurance" missing from interest checkboxes // TODO(client): include?
- "Gardner Avenue" vs "81 Gardner Avenue" inconsistency
- No Privacy Policy consent link on form // COMPLIANCE-REVIEW

---

### 1.16 Orphan Pages (scraped but NOT in target sitemap)

| URL | Title | Recommendation |
|---|---|---|
| `/legal-information/` | Old 2017 Disclosure Statement for "Raja Venkatesh" | 301 → `/disclosure-statement/` |
| `/key-information-on-life-and-disability-insurance/` | Audio player only, Mary Holm radio segment | 301 → `/life-insurance/` |
| `/maxwell-limo-services/` | Maxwell Limo tour prices (off-brand) | 301 → `/` |

---

## 2. Sitemap Coverage Map

| Target URL | Scraped File | Status |
|---|---|---|
| `/` | `home.md` | ✅ |
| `/life-insurance/` | `life-insurance.md` | ✅ |
| `/trauma-insurance/` | `trauma-insurance.md` | ✅ |
| `/income-protection/` | `income-protection.md` | ✅ |
| `/permanent-disability-insurance/` | `permanent-disability-insurance.md` | ⚠️ Critical copy error |
| `/health-insurance/` | `health-insurance.md` | ✅ |
| `/home-insurance/` | `home-insurance.md` | ✅ |
| `/car-insurance/` | `car-insurance.md` | ✅ |
| `/contents-insurance/` | `contents-insurance.md` | ✅ |
| `/business-insurance/` | `business-insurance.md` | ⚠️ Thin |
| `/about/` | `about.md` | ✅ |
| `/testimonials/` | `testimonials.md` | ⚠️ No testimonial text |
| `/disclosure-statement/` | `disclosure-statement.md` | ✅ |
| `/privacy-policy/` | `privacy-policy.md` | ✅ |
| `/contact/` | `contact.md` | ✅ |

All 15 target URLs have scraped content. Zero sitemap URLs are dark.

---

## 3. Content Gaps & Issues Summary

### Critical — Must fix before launch
| ID | Issue | Page |
|---|---|---|
| C-1 | TPD "What is it?" is verbatim Life Insurance copy | `/permanent-disability-insurance/` |
| C-2 | "Review" and "Insured" process steps identical | `/` |
| C-3 | No testimonial text captured | All |
| C-4 | "Raja" vs "Roger" naming inconsistency | Multiple |
| C-5 | Kiri's FSP number missing | `/about/`, `/disclosure-statement/` |
| C-6 | Privacy Act 1993 reference in Privacy Policy | `/privacy-policy/` |
| C-7 | `[Marloo/Zoom AI note taker]` placeholder unfinalised | `/privacy-policy/` |

### Compliance Review Required
| ID | Content | Page |
|---|---|---|
| CR-1 | Entire Disclosure Statement | `/disclosure-statement/` |
| CR-2 | Trauma statistics (20%, 50%/80%) | `/trauma-insurance/` |
| CR-3 | Income protection figures (55%, 75%) | `/income-protection/` |
| CR-4 | Disability statistics (2001 survey, "2 out of 5") | `/permanent-disability-insurance/` |
| CR-5 | Surgery cost table | `/health-insurance/` |
| CR-6 | Tower-specific policy detail on Maxwell pages | `/car-insurance/`, `/contents-insurance/` |
| CR-7 | Contact form needs Privacy Policy consent link | `/contact/` |
| CR-8 | "FREE no obligation quote" wording sitewide | Multiple |

---

## 4. Third-Party Scripts

| Script | Evidence | Purpose | New-site handling |
|---|---|---|---|
| Google Tag Manager `GTM-W4TSBGJD` | Known fact | Analytics/tracking | `<Script>` after consent; Consent Mode v2 |
| WPBakery callback widget | Honeypot field visible | Phone-number callback capture | Replace with RHF + Server Action |
| Testimonial plugin | Widget renders blank in scrape | Customer reviews | Replace with static `TestimonialsList`; data from client |

---

## 5. Duplicate Content Detail

**Process Step Bug: Review ≡ Insured**

Both steps share the exact same paragraph:
> "Once your insurance is in place we will touch base with you. We will at least once a year check with you to see if your circumstances have changed. A change in circumstances may require an adjustment in your levels of cover. If a review is required, our advisers will arrange for a free review so that your insurance plan is relevant to your situation."

The "Insured" step should describe what being covered means / the peace-of-mind outcome. // TODO(client): provide unique copy for the "Insured" step.

---

## 6. Redirect Map

| Old URL | New URL | Status | Notes |
|---|---|---|---|
| `…/` | `/` | — | No change |
| `…/life-insurance/` | `/life-insurance/` | — | No change |
| `…/trauma-insurance/` | `/trauma-insurance/` | — | No change |
| `…/income-protection/` | `/income-protection/` | — | No change |
| `…/permanent-disability-insurance/` | `/permanent-disability-insurance/` | — | No change |
| `…/health-insurance/` | `/health-insurance/` | — | No change |
| `…/home-insurance/` | `/home-insurance/` | — | No change |
| `…/car-insurance/` | `/car-insurance/` | — | No change |
| `…/contents-insurance/` | `/contents-insurance/` | — | No change |
| `…/business-insurance/` | `/business-insurance/` | — | No change |
| `…/about/` | `/about/` | — | No change |
| `…/testimonials/` | `/testimonials/` | — | No change |
| `…/disclosure-statement/` | `/disclosure-statement/` | — | No change |
| `…/privacy-policy/` | `/privacy-policy/` | — | No change |
| `…/contact/` | `/contact/` | — | No change |
| `…/contact` (no trailing slash) | `/contact/` | 301 | Nav inconsistency |
| `…/legal-information/` | `/disclosure-statement/` | 301 | Superseded old disclosure |
| `…/key-information-on-life-and-disability-insurance/` | `/life-insurance/` | 301 | Audio-only page |
| `…/maxwell-limo-services/` | `/` | 301 | Off-brand, drop |
| `…/?p=*`, `…/?page_id=*` | `/` | 301 | WP query strings |

**Zero slug changes** for all 15 target URLs. Full SEO equity preserved.

---

## 7. Open Questions for Client (from Audit)

1. **Adviser legal names**: Is "Roger" the preferred public name for "Raja"? What is Kiri's preferred public name?
2. **Kiri's FSP number** (needed if she provides regulated advice)
3. **Testimonial copy**: Please export customer quotes, names, dates from the WP plugin
4. **"Insured" process step**: Unique copy needed
5. **TPD definition**: Needs complete rewrite
6. **Form submission email**: Where should enquiry/callback/quote forms send?
7. **Statistics currency**: Multiple product-page stats need source or update
8. **Image rights**: Confirm ownership of all WP-uploaded images
9. **Business Insurance checkbox**: Include on Contact form?
10. **Secondary phone (09 215 24 23)**: Keep or consolidate to (021) 592 786?
11. **Commission table dates**: Confirm rates in Disclosure Statement are current
