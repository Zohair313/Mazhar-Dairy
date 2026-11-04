# Mazhar Dairy — Image Generation Briefs (IMAGE-PROMPTS.md)

This document contains generation specifications for realistic AI-generated food photography and cold-chain trade imagery for the Mazhar Dairy landing page.

---

## 1. Global Visual Direction & Art Direction Guidelines

To ensure every generated image looks like part of a single, coherent editorial documentary photoshoot rather than disjointed stock photography, apply these master parameters to every prompt:

- **Style & Medium:** Editorial documentary food photography, shot on 35mm / 50mm prime lens, f/2.8 - f/4.0 aperture, natural depth of field with gentle organic falloff.
- **Lighting:** Dual-source natural lighting: clean, cool northern daylight / refrigerated cold-store ambient rim (5500K) combined with a soft, warm incandescent kitchen key light (3000K). No ring lights, no studio strobes, no neon glows.
- **Color Grading:** Muted, desaturated documentary grading with lifelike warmth. True-to-life dairy tones: pale ivory-cream, pale butter yellow, natural uncolored cheddar amber. No neon orange, no oversaturated HDR, no synthetic plastic look.
- **Texture & Authenticity:** Visible tactile surfaces: moisture beads on fresh curd, knife drag marks, granular crumble along aged cheddar fractures, distinct individually shredded strands, slight condensation on stainless steel and chilled surfaces, natural uneven cuts and seams.
- **Context & Props:** Pakistani and regional commercial kitchen / wholesale trade counter aesthetics. Heavy food-grade stainless steel trays (thali / gastro pans), plain unbleached greaseproof butter paper, galvanized milk cans, cold insulated transport boxes, dark granite or brushed steel worktops. Avoid Western gourmet-deli styling (no rustic Tuscan olive wood boards, no sourdough loaves, no Mediterranean props, no decorative rosemary sprigs).
- **Strict Exclusions (Negative Prompts):**
  - NO text, letters, numerals, words, watermarks, brand logos, stickers, barcodes, or packaging labels (AI text generation introduces garbled characters).
  - NO human faces, figures, or portraits. Hands in frame are acceptable only if wearing neutral food-handling gloves or shown partially from an angle performing a clean cut.
  - NO plastic sheen, 3D render look, AI hyper-smoothness, glowing edges, chromatic aberration, or artificial symmetrical staging.
  - NO captions claiming "our shop", "our kitchen", or "our dairy". All imagery is treated neutrally.
- **Strict Boundary on Shop & Staff:**
  - **NEVER generate the exterior shop front, shop counter, Raja Bazar alleyway, owners, or staff.** Those sections require authentic photographs supplied by Mazhar Dairy, marked with explicit real-photo placeholder callouts.

---

## 2. Image Prompts Catalog

### 01. Hero Door — Business (Wholesale)
- **File Name:** `door-business.webp`
- **Destination Path:** `/public/images/door-business.webp`
- **Aspect Ratio:** 16:9 (Desktop) / 4:3 (Responsive Crop)
- **Usage:** Left door of split hero ("For Business / Wholesale"), previewing commercial dairy supply for pizzerias and hotels.
- **Alt Text:** Stacked blocks of commercial mozzarella and cheddar alongside stainless steel trays of freshly shredded pizza cheese on a commercial kitchen prep counter.
- **Generator Prompt:**
  ```text
  Documentary food photography of wholesale commercial dairy supply inside a Pakistani restaurant prep kitchen. On a clean brushed stainless steel counter sit two heavy 5kg vacuum-sealed rectangular blocks of pale ivory mozzarella cheese and one block of medium-pale aged cheddar cheese with natural curd texture. Beside them is a large commercial food-grade shallow stainless steel gastro tray filled with freshly machine-shredded mozzarella cheese with distinct, separate strands and natural matte texture. Soft natural window light mixed with subtle cool fluorescent kitchen overhead light. Neutral background showing brushed steel splashback and blurred commercial kitchen shelves. Shot on 50mm lens, f/3.2, shallow depth of field, natural colors, authentic food photography, zero text, no brand labels, no typography, no human faces.
  ```

---

### 02. Hero Door — Home (Retail)
- **File Name:** `door-home.webp`
- **Destination Path:** `/public/images/door-home.webp`
- **Aspect Ratio:** 16:9 (Desktop) / 4:3 (Responsive Crop)
- **Usage:** Right door of split hero ("For Home / Retail"), previewing consumer-friendly block cheese for baking and cooking.
- **Alt Text:** Fresh cheddar block sliced open on unbleached brown paper with a kitchen grater and warm bread on a dark stone counter.
- **Generator Prompt:**
  ```text
  Authentic editorial food photograph of kitchen dairy prep for home cooking. A solid rectangular 1kg block of natural pale amber cheddar cheese resting on a sheet of crumpled unbleached greaseproof kraft paper atop a dark grey honed slate kitchen counter. One clean thick slice has been cut off and lies slightly tilted forward, displaying realistic crumbly curd fracture lines and natural dairy grain. A simple stainless steel box grater with some fine cheese shreds clinging to the perforations sits beside it, along with a freshly baked loaf of crusty naan bread in soft background blur. Warm afternoon side light through a window, muted tones, 45mm lens, f/2.8, realistic food texture, no text, no branding, no stickers, no people.
  ```

---

### 03. Product Spec — Cheddar Block
- **File Name:** `cheddar-block.webp`
- **Destination Path:** `/public/images/cheddar-block.webp`
- **Aspect Ratio:** 4:3
- **Usage:** Product row thumbnail in catalogue spec table (Row 1: Cheddar Block).
- **Alt Text:** Fresh block of pale amber cheddar cheese cleanly cut with a cheese knife, showing realistic curd fracture and granular dairy texture.
- **Generator Prompt:**
  ```text
  Macro documentary food photograph of a block of commercial cheddar cheese. A clean rectangular block of firm, pale natural amber cheddar, cut across one end with a heavy stainless steel chef knife resting angled beside it. Close-up on the cut surface showing authentic granular curd texture, microscopic fissures, and faint matte moisture. Set upon plain white butchers parchment paper on a cool grey prep table. Cool 5000K daylight with subtle soft fill, sharp focus on cheese cut edge, f/3.5, 50mm macro, zero text, zero logos, no packaging wrappers, clean professional culinary photography.
  ```

---

### 04. Product Spec — Mozzarella Block
- **File Name:** `mozzarella-block.webp`
- **Destination Path:** `/public/images/mozzarella-block.webp`
- **Aspect Ratio:** 4:3
- **Usage:** Product row thumbnail in catalogue spec table (Row 2: Mozzarella Block).
- **Alt Text:** Solid block of fresh whole-milk mozzarella cheese with visible surface moisture beads on a cold stainless steel tray.
- **Generator Prompt:**
  ```text
  Crisp editorial photograph of a rectangular commercial block of low-moisture whole-milk mozzarella cheese. Natural pale porcelain ivory color with a smooth, slightly elastic surface texture, subtle tiny beads of moisture clinging to the chilled exterior. The block sits on a clean, chilled stainless steel sheet pan. Light reflects softly across the curved edge. Minimalist culinary composition, cool cold-store lighting balanced with warm ambient light, 50mm f/3.0 lens, high realism, documentary style, completely devoid of text, labels, stamps, or human hands.
  ```

---

### 05. Product Spec — Shredded Pizza Cheese
- **File Name:** `shredded-pizza-cheese.webp`
- **Destination Path:** `/public/images/shredded-pizza-cheese.webp`
- **Aspect Ratio:** 4:3
- **Usage:** Product row thumbnail in catalogue spec table (Row 3: Shredded Mozzarella / Pizza Blend).
- **Alt Text:** Uniformly shredded mozzarella pizza cheese strands in a stainless steel kitchen prep pan.
- **Generator Prompt:**
  ```text
  High-angle macro photograph of freshly machine-shredded pizza cheese blend (mozzarella and mild cheddar blend) filling a stainless steel commercial kitchen tray. Individual strands are distinct, uniform 4mm shreds, not clumped, showing natural matte dairy surface with light starch dusting. Clean, appetizing, realistic food texture with natural variation in strand lengths. Bright neutral daylight from side, soft shadows, 40mm macro lens, f/4, crisp detail across the center, muted background, no text, no logos, no hands.
  ```

---

### 06. Product Spec — Traditional Table Butter
- **File Name:** `butter-block.webp`
- **Destination Path:** `/public/images/butter-block.webp`
- **Aspect Ratio:** 4:3
- **Usage:** Product row thumbnail in catalogue spec table (Row 4: Pure Table & Bakery Butter).
- **Alt Text:** Solid block of fresh pale yellow dairy butter resting on parchment paper with knife curl.
- **Generator Prompt:**
  ```text
  Close-up editorial food photograph of a fresh block of pure unsalted dairy butter. Natural pale cream-yellow hue with silky matte surface. A traditional flat stainless butter paddle or wooden knife has scraped a gentle delicate curl across the top edge. The butter block rests on a folded sheet of neutral translucent greaseproof wax paper over a slate counter. Soft morning daylight, gentle reflections, high tactile fidelity, 50mm lens at f/2.8, no text, no branding, no typography, documentary commercial kitchen mood.
  ```

---

### 07. Product Spec — Fresh Dairy Cream
- **File Name:** `cream-pot.webp`
- **Destination Path:** `/public/images/cream-pot.webp`
- **Aspect Ratio:** 4:3
- **Usage:** Product row thumbnail in catalogue spec table (Row 5: Fresh Commercial Heavy Cream).
- **Alt Text:** Thick, velvety fresh dairy cream in a heavy stainless steel container with a smooth ladle resting on the rim.
- **Generator Prompt:**
  ```text
  Documentary food photograph of heavy fresh commercial dairy cream. A heavy-gauge food-grade stainless steel round pot or thali bowl filled to near the brim with thick, rich, ivory-colored dairy cream with gentle ripples on the viscous surface. A clean steel ladle rests gently on the rim with a slow drip of thick cream falling back into the pot. Cool side lighting highlighting the rich glossy texture and viscosity. Professional kitchen environment, 45mm lens, f/3.2, no text, no branding, no stickers, hyper-realistic dairy texture.
  ```

---

### 08. Product Spec — Desi Ghee
- **File Name:** `ghee-tin.webp`
- **Destination Path:** `/public/images/ghee-tin.webp`
- **Aspect Ratio:** 4:3
- **Usage:** Product row thumbnail in catalogue spec table (Row 6: Traditional Clarified Butter / Pure Desi Ghee).
- **Alt Text:** Golden granular pure desi ghee in a traditional unbranded tin container with a brass or steel spoon.
- **Generator Prompt:**
  ```text
  Authentic culinary photograph of pure traditional Pakistani desi ghee. A classic cylindrical unbranded food-grade tin container or heavy stainless vessel containing golden-yellow clarified butter showing characteristic fine granular crystalline texture (daanedaar ghee). A plain stainless steel spoon dips into the surface, lifting a mound of rich, aromatic granular ghee. Soft warm directional light creating deep amber highlights. Traditional commercial Pakistani dairy trade aesthetic, 50mm lens, f/2.8, no typography, no labels, no painted logos, natural documentary food aesthetic.
  ```

---

### 09. Cold Chain & Delivery — Insulated Transport Crate
- **File Name:** `delivery-crate.webp`
- **Destination Path:** `/public/images/delivery-crate.webp`
- **Aspect Ratio:** 16:9 or 4:3
- **Usage:** Quality & Handling section illustration (Cold-Chain Logistics & Temperature Control).
- **Alt Text:** Heavy-duty insulated cold-chain transport crate packed with sealed vacuum blocks of cheese and reusable ice packs on a loading dock.
- **Generator Prompt:**
  ```text
  Industrial documentary photograph of cold-chain delivery logistics for perishable food. An open heavy-duty blue and grey commercial insulated thermal crate sitting on a brushed metal transport dolly. Inside the insulated box, neatly packed vacuum-sealed plain transparent rectangular blocks of white mozzarella cheese are surrounded by heavy-duty blue food-grade commercial eutectic cold gel ice packs with faint condensation. Clean commercial warehouse environment, cool 5000K lighting, shallow depth of field, 35mm lens, f/4, zero brand logos, zero text, no readable stickers or shipping labels, authentic commercial delivery context.
  ```

---

### 10. Melt & Stretch Verification — Baked Pizza Cheese
- **File Name:** `pizza-stretch.webp`
- **Destination Path:** `/public/images/pizza-stretch.webp`
- **Aspect Ratio:** 16:9
- **Usage:** Wholesale Section Proof Banner / Visual Demonstration of Commercial Performance.
- **Alt Text:** Slice of freshly baked pizzeria crust lifted with an authentic, elastic stretch of melted mozzarella cheese.
- **Generator Prompt:**
  ```text
  Action food photograph inside a commercial pizzeria kitchen. A freshly baked artisan thin-crust pizza on a dark cast iron pan or steel peel. One slice is being gently lifted slightly upward, revealing an authentic, unbroken, elastic stretch of melted mozzarella cheese with light golden-brown blistering (caramelization specks) and subtle steaming hot steam. The cheese has a natural milky gloss, not oily, not orange. Background shows the warm glow of a deck pizza oven in soft blur. 50mm lens, f/2.8, 1/250s shutter speed, natural appetizing food photography, no people's faces, zero logos, no branding.
  ```

---

### 11. Cold Storage — Shelf Inventory
- **File Name:** `cold-store-shelf.webp`
- **Destination Path:** `/public/images/cold-store-shelf.webp`
- **Aspect Ratio:** 16:9
- **Usage:** Quality & Cold-Chain section banner / Our Story visual accent.
- **Alt Text:** Stainless steel commercial walk-in cold-room shelving holding organized batches of packaged dairy blocks under clean refrigeration lighting.
- **Generator Prompt:**
  ```text
  Industrial interior documentary photograph of a commercial walk-in refrigerated dairy cold-room. Heavy industrial slatted stainless steel shelves holding organized rows of vacuum-sealed dairy blocks and butter packages wrapped in neutral white parchment. Cool white 5500K LED cold-room light casting long crisp shadows on the non-slip safety floor. Stainless steel walls with subtle frost condensation. Clean, orderly wholesale food facility atmosphere. Wide 35mm lens, f/4.5, sharp industrial depth of field, strictly neutral products with zero readable text, zero brand logos, zero barcodes, no people.
  ```

---

### 12. Client-Supplied Real Photography Callouts (Do Not Generate)
These images must **never** be AI-generated; they require authentic on-site photos from Mazhar Dairy:

| Slot Identifier | Purpose | Recommended Capture Details | File Name Convention |
| :--- | :--- | :--- | :--- |
| **SHOP-FACADE** | Kashmiri Bazaar shop front & signboard | Daytime eye-level photo of Shops 60-61, showing genuine signboard and Raja Bazar street context | `shop-facade-real.jpg` |
| **COUNTER-TRADE** | Trade counter interaction | Authentic photo of staff weighing cheese or slicing blocks at the Kashmiri Bazaar counter | `counter-trade-real.jpg` |
| **STORE-1987-ARCHIVE** | Historical archival photo | Vintage photo of Mazhar Dairy or Kashmiri Bazaar trade from late 1980s / 1990s | `archive-1987-real.jpg` |
| **TAX-INVOICE-SAMPLE** | Redacted FBR Tax Challan | Real printed tax invoice showing Mazhar Dairy header and FBR register stamps (client details blurred) | `fbr-challan-sample.jpg` |

---

## 3. Image Optimization & Placement Instructions

1. **Format:** Generate images at 2048x1536 or 1920x1080 resolution.
2. **Post-Processing:**
   - Crop to exact target aspect ratios (4:3 for product table specs, 16:9 for banners and doors).
   - Convert to high-efficiency WebP format at 82% quality.
   - Run through lossless compression (e.g. `cwebp -q 82 -m 6`).
   - Ensure hero door images are optimized below 150 KB for mobile networks.
3. **Naming Convention:** Place optimized `.webp` files in the `public/images/` directory matching the exact names referenced in `src/data/site-data.json`.

