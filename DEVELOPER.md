# Mazhar Dairy — Developer Documentation (DEVELOPER.md)

---

## 1. Overview and Goal

Mazhar Dairy is an established dairy wholesaler and retailer based in Kashmiri Bazaar, Raja Bazar, Rawalpindi, operating continuously since 1987. The business serves two primary client groups:
- **Commercial B2B Accounts:** Pizzerias, fast-food chains, restaurants, hotel banquet operations, caterers, and commercial bakeries across Rawalpindi and Islamabad needing guaranteed fat/moisture consistency, scheduled delivery runs, and FBR-compliant sales tax invoices.
- **Retail & Home Consumers:** Local households and home bakers purchasing smaller blocks of cheddar, low-moisture mozzarella, pure butter, cream, and desi ghee directly at counter prices.

### Core Objectives
1. **B2B Pipeline:** Enable commercial buyers to view technical dairy specifications and request an official wholesale rate list or customized standing order via WhatsApp with pre-filled kitchen details.
2. **Retail Drive:** Enable home cooks to check current counter prices, pack sizes, and either visit the Kashmiri Bazaar counter or place orders via direct WhatsApp/phone.
3. **Trust & Compliance Signals:** Establish authority through authentic credentials: "Since 1987", FBR-registered tax invoicing with verified NTN/STRN, and an authentic 4.8 Google rating from 132 verified reviews.
4. **Deliberate Anti-"AI" Aesthetic:** Avoid generic software-as-a-service (SaaS) templates, floating gradients, purple drop shadows, and hollow marketing clichés. The layout is modeled on an industrial trade counter, a cold-room inventory manifest, and a dispatch challan.

---

## 2. Tech Stack and Rationale

- **Core Framework:** React 19 + Vite 8
  - *Why:* Zero runtime bloat, lightning-fast compilation, native ES module support, and instant HMR during development. Produces a completely static HTML/CSS/JS output bundle deployable anywhere.
- **Styling Architecture:** Pure CSS Custom Properties (CSS Variables) with CSS Logical Properties
  - *Why:* Guarantees 100% adherence to custom brand tokens without framework bloat. Native CSS logical properties (`margin-inline`, `padding-inline`, `border-inline-start`, `text-align: start`) provide natural, bidirectional LTR/RTL support without mirrored CSS duplication.
- **Icons:** `lucide-react`
  - *Why:* Consistent 1.5–2px stroke weight, high legibility, zero decorative clutter.
- **Data & Localization:** `site-data.json`, `en.json`, and `ur.json`
  - *Why:* Decouples business facts and translations from UI components. Non-technical staff can update prices, timings, and products in a single file without compiling React code.
- **Image Pipeline:** Native WebP format optimized using `sharp`
  - *Why:* Delivers sub-15KB assets per image slot, ensuring Lighthouse performance of 95+ even on mobile cellular networks.

---

## 3. Project Structure

```text
Mazhar Dairy/
├── dist/                          # Production build output
├── public/                        # Static assets served as-is
│   ├── favicon.svg                # Brand monogram favicon
│   └── images/                    # WebP imagery matching IMAGE-PROMPTS.md
│       ├── butter-block.webp      # Spec 04: Table & bakery butter
│       ├── cheddar-block.webp     # Spec 01: Aged cheddar block
│       ├── cold-store-shelf.webp  # Facility walk-in cold room
│       ├── cream-pot.webp         # Spec 05: Heavy cooking cream
│       ├── delivery-crate.webp    # Cold-chain thermal crate
│       ├── door-business.webp     # Hero Door A: Commercial supply
│       ├── door-home.webp         # Hero Door B: Retail counter
│       ├── ghee-tin.webp          # Spec 06: Pure desi ghee
│       ├── mozzarella-block.webp  # Spec 02: Low-moisture mozzarella
│       ├── og-image.webp          # Social media preview card (1200x630)
│       ├── pizza-stretch.webp     # Oven melt & stretch verification
│       ├── shop-facade-placeholder.webp # Client real-photo placeholder
│       └── shredded-pizza-cheese.webp   # Spec 03: Shredded pizza cheese
├── scripts/
│   └── generate-placeholders.js   # Automated WebP placeholder generator
├── src/
│   ├── data/
│   │   ├── site-data.json         # Single source of truth for business data
│   │   ├── en.json                # English UI copy
│   │   └── ur.json                # Trade Urdu UI copy (RTL)
│   ├── utils/
│   │   └── whatsapp.js            # Dynamic WhatsApp link & payload builder
│   ├── App.jsx                    # Single-page layout containing 12 sections
│   ├── index.css                  # Custom design tokens, logical flow & CSS
│   └── main.jsx                   # React root entry point
├── DEVELOPER.md                   # Technical documentation (this file)
├── IMAGE-PROMPTS.md               # AI documentary image generation briefs
├── OWNER-GUIDE.md                 # Non-technical shop owner guide (English)
├── OWNER-GUIDE.ur.md              # Non-technical shop owner guide (Urdu)
├── index.html                     # HTML root, Google Fonts & JSON-LD Schema
├── package.json                   # Project scripts and dependencies
└── vite.config.js                 # Vite build configuration
```

---

## 4. Setup and Run

### Prerequisites
- Node.js version 18+ (tested on Node v25)
- npm version 9+

### Commands
```bash
# 1. Install dependencies
npm install

# 2. Run local development server (with HMR)
npm run dev

# 3. Build for production (outputs to /dist)
npm run build

# 4. Preview local production build
npm run preview
```

---

## 5. Content and Data Architecture

All business-critical variables reside in `src/data/site-data.json`. This decoupling ensures that updating a price, pack size, phone number, or delivery schedule requires editing only one file.

### `site-data.json` Schema Reference

```json
{
  "business": {
    "name_en": "Mazhar Dairy",
    "name_ur": "مظہر ڈیری",
    "established": 1987,
    "phones": {
      "whatsapp": "+92 300 9779838",
      "whatsapp_raw": "923009779838",
      "mobile": "+92 300 9779838",
      "mobile_raw": "+923009779838",
      "landline": "051-5533844",
      "landline_raw": "0515533844"
    },
    "address": { ... },
    "hours": { ... },
    "fbr": { ... },
    "ratings": { "score": 4.8, "review_count": 132 }
  },
  "products": [
    {
      "id": "cheddar",
      "name_en": "Cheddar Cheese Block",
      "name_ur": "چیڈر چیز بلاک",
      "image": "/images/cheddar-block.webp",
      "form_en": "Vacuum-sealed firm block",
      "form_ur": "ویکیوم پیکڈ سخت بلاک",
      "best_for_en": "Burgers, sandwiches...",
      "best_for_ur": "برگر، سینڈوچز...",
      "retail": {
        "pack_sizes_en": "500g, 1 kg, 2 kg blocks",
        "pack_sizes_ur": "500 گرام، 1 کلو، 2 کلو بلاکس",
        "price_display": "Rs. 2,150",
        "price_unit_en": "per 1 kg block",
        "price_unit_ur": "فی 1 کلو بلاک",
        "min_order_en": "500g (at shop counter)",
        "min_order_ur": "500 گرام (شاپ کاؤنٹر سے)",
        "rate_note_en": "...",
        "rate_note_ur": "..."
      },
      "wholesale": {
        "pack_sizes_en": "5 kg master blocks & 20 kg wholesale carton",
        "pack_sizes_ur": "5 کلو ماسٹر بلاکس اور 20 کلو کارٹن",
        "price_display": "Contract Wholesale Rates",
        "price_unit_en": "volume tiered / kg",
        "price_unit_ur": "حجم کے مطابق فی کلو",
        "min_order_en": "10 kg minimum for wholesale billing",
        "min_order_ur": "ہول سیل انوائس کے لیے کم از کم 10 کلو",
        "rate_note_en": "...",
        "rate_note_ur": "..."
      }
    }
  ]
}
```

### How-To Guides for Common Updates

- **How to Add a New Product:**
  Add a new JSON object inside `siteData.products` with a unique `id`, image path, English/Urdu names, application recommendations, and distinct sub-objects for both `retail` and `wholesale`.
- **How to Update a Price or Pack Size:**
  Locate the product by `id` in `site-data.json`. Update `retail.price_display` or `wholesale.price_display`, along with `pack_sizes_en` / `pack_sizes_ur`.
- **How to Add a Delivery Zone:**
  Navigate to `delivery_zones.areas` in `site-data.json` and append a new object with `zone_en`, `zone_ur`, `coverage_en`, and `coverage_ur`.
- **How to Add a Customer Review:**
  Add a review object to `reviews` in `site-data.json` with `author`, `rating` (integer 1–5), `date`, `text_en`, and `text_ur`.

---

## 6. Design System & CSS Specification

### Color Tokens
- `--bg-warm: #F6F1E7`: Warm off-white, reminiscent of parchment paper and natural whey.
- `--text-espresso: #2B211B`: Dark espresso brown used for all body text, headings, and primary buttons.
- `--accent-amber: #D9822B`: Cheddar amber used as the sole functional accent (contrast checked against dark espresso and white).
- `--bg-cold: #DCE3E6`: Cold-store galvanized steel grey used for alternating sections, cold stamps, and tag strips.
- `--accent-rind: #7A4B2A`: Muted natural rind brown for technical tags and borders.

### Typography Scale
- **Headings (English):** `Archivo` (Grotesque, high impact, heavy weights).
- **Body (English):** `Inter` (neutral, legible at 16–17px).
- **Headings (Urdu):** `Noto Nastaliq Urdu` (line-height 2.1+, zero letter spacing).
- **Body (Urdu):** `Noto Naskh Arabic` (line-height 1.85, 18px body size for maximum clarity).

### Spec-Sheet Layout Rules
1. **Never use standard SaaS card grids:** Data is presented as tabular spec sheets or structured ledger entries.
2. **Cold-Store Tag Strips:** Monospaced, uppercase dividers with technical trade metadata (`RAJA BAZAR / EST. 1987 / B2B SUPPLY`).
3. **Interactive Wholesale / Retail Door Switch:** Toggling between Business and Home re-renders table columns and prices without reloading or navigating away.

---

## 7. Internationalization (i18n) and RTL Rules

The site implements native bidirectional support through standard HTML standards:
1. When switching to Urdu, React updates:
   ```javascript
   document.documentElement.lang = 'ur';
   document.documentElement.dir = 'rtl';
   ```
2. **CSS Logical Properties:** All directional styles use:
   - `margin-inline-start` / `margin-inline-end` instead of `margin-left` / `margin-right`
   - `padding-inline-start` / `padding-inline-end` instead of `padding-left` / `padding-right`
   - `border-inline-start` instead of `border-left`
   - `text-align: start` instead of `text-align: left`
3. **Trade Urdu Conventions:** Professional Pakistani trade terminology is maintained:
   - چیڈر، موزریلا، شریڈڈ پیزا چیز، مکھن، کریم، دیسی گھی، ہول سیل، ریٹیل، ریٹ لسٹ، ٹیکس انوائس، 1987 سے.
   - Numerals for phones, years, and prices retain Western Arabic digits (`1987`, `+92 300 9779838`, `Rs. 2,150`) as standard in Pakistani business.

---

## 8. Images and Asset Pipeline

All images strictly follow the briefs in `IMAGE-PROMPTS.md`:
- **Location:** `public/images/`
- **Format:** Modern `.webp`
- **Dimensions:** 960x540 (16:9) for doors and banners; 800x600 (4:3) for product table thumbnails.
- **Swapping with Real Client Photos:**
  When Mazhar Dairy supplies real high-resolution photographs of their shop exterior, staff, or cheese blocks:
  1. Crop the photo to the required aspect ratio (16:9 or 4:3).
  2. Convert to WebP format: `cwebp -q 82 input.jpg -o public/images/door-business.webp`.
  3. Keep the file name identical so that no code edits are required.

---

## 9. WhatsApp Link Builder Logic

All contact actions route through `src/utils/whatsapp.js`:
- Phone target: `923009779838` (configured in `site-data.json`).
- Pre-filled messages are generated dynamically based on active language and user selections.
- The B2B Wholesale Quote Form extracts:
  - Business Name
  - Business Category (Pizzeria, Restaurant, Hotel, Bakery, Other)
  - City / Sector
  - Products Needed
  - Estimated Monthly Volume (kg)
  It packages this into an orderly trade manifest and opens `https://wa.me/923009779838?text=...`.

---

## 10. Responsive Behavior & Tested Breakpoints

The application uses mobile-first responsive design and has been audited across all standard screen widths:
- **360px (Small Mobile):** Single-column stacked doors, compact product spec rows with 48px tap targets, sticky bottom action bar.
- **390px (iPhone 12/13/14/15/16):** Full typography fit, zero horizontal overflow, thumb-friendly form controls.
- **768px (Tablet Portrait):** Two-column hero doors, two-column feature lists, 3-column facts row.
- **1024px (Tablet Landscape / Laptop):** Full desktop spec table activated, side-by-side wholesale layout with form sticky to the right.
- **1440px (Desktop / High-Res):** Centered max-width container (`1200px`), generous whitespace, crisp 1px borders.

---

## 11. SEO & Performance Checklist

- [x] Canonical Meta Title and Description in `index.html`.
- [x] Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`).
- [x] Twitter Card summary tags.
- [x] Schema.org `WholesaleStore` JSON-LD structured data with telephone, geo-coordinates, address, and ratings.
- [x] Lazy loading on all below-the-fold imagery (`loading="lazy"`).
- [x] Asset sizes under 15 KB per image file; initial bundle gzipped at under 100 KB.
- [x] Fast font loading via `preconnect` for Google Fonts.

---

## 12. Accessibility (a11y) Checklist

- [x] Color Contrast: Checked against WCAG 2.1 AA standards (minimum 4.5:1 for normal text).
- [x] Focus States: Explicit 2px amber `:focus-visible` ring on all interactive elements.
- [x] Semantic HTML: `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<nav>`, and proper heading hierarchies (`<h1>` through `<h4>`).
- [x] Accessible Accordions: `aria-expanded` attributes on all FAQ buttons.
- [x] Alternative Text: Every `<img>` tag carries descriptive, context-specific `alt` attributes.
- [x] Minimum Tap Targets: Every button and interactive link measures at least 48px in height.

---

## 13. Deployment Guide

Because the application compiles to purely static assets, it can be hosted on any CDN or modern static hosting service:

### Deployment on Netlify / Vercel / Cloudflare Pages
1. Push repository to GitHub or GitLab.
2. Build Settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
3. Add custom domain (e.g., `mazhardairy.pk`).
4. Ensure automatic HTTPS / SSL certificate is issued.

### Deployment on Traditional cPanel / Apache / Nginx
1. Run `npm run build` locally.
2. Upload the contents of the `dist/` directory directly into `public_html/`.
3. Add a standard `.htaccess` or Nginx rewrite rule for single-page routing if client-side routing is expanded in the future.

---

## 14. Known Boundaries and Future Roadmap

- **Online Cart / Payments:** The site intentionally omits an online checkout or digital cart, as wholesale dairy orders in Pakistan rely on weight variations, market rates, and official credit terms settled on delivery.
- **B2B Portal (Phase 2):** In future phases, standing clients can be granted a secure ledger portal to view historical FBR e-invoices and schedule weekly dispatch quotas.
- **FBR POS Integration (Phase 3):** Direct API synchronization with the FBR Digital Invoicing system for automated real-time QR code generation on delivery challans.

