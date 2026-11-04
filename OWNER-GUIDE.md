# Mazhar Dairy — Website Guide for the Owner (OWNER-GUIDE.md)

Welcome to your new website! This guide is written in plain everyday language without complicated computer jargon. It explains how your website works, how customers will use it to send you orders, and how you can update prices or details in the future.

---

## 1. What This Website Does for Your Business

This website serves as your 24-hour digital trade counter. It tells pizzerias, restaurants, bakeries, hotels, and local families across Rawalpindi and Islamabad that Mazhar Dairy has been supplying genuine, high-grade cheese, butter, and desi ghee from Raja Bazar since 1987. It proves that you are an official, tax-registered wholesaler with proper sales tax invoices. Its main job is to bring serious wholesale inquiries and retail orders straight to your WhatsApp and phone without making you deal with complicated online checkouts or card machines.

---

## 2. What Each Part of the Page Is For (In Order)

1. **Top Contact & Language Bar:** Sits at the very top of the screen so anyone visiting can immediately see your phone numbers (+92 300 9779838 and 051-5533844) and tap the button to switch the entire page between English and natural trade Urdu.
2. **Main Header & Logo:** Shows your business name, Kashmiri Bazaar address, and quick links to jump down the page, plus a bright button allowing restaurants to request your wholesale rate list immediately.
3. **The Two Doors (Hero Entry):** Instead of a confusing website slider, visitors see two clear choices: **"For Business (Wholesale)"** and **"For Home (Retail)"**. A pizzeria owner taps the business door and immediately sees wholesale crate sizes, while a mother or home baker taps the retail door to see 500g and 1kg counter packs. Right below this, three strong facts remind visitors that you have been operating since 1987, provide computerized FBR invoices, and hold a 4.8 Google rating from 132 reviews.
4. **Product Catalogue & Price Sheet:** This is designed like a clean printed spec sheet from your shop. It lists your six core items: Cheddar block, Mozzarella block, Shredded pizza cheese, Pure table butter, Dairy cream, and Desi ghee. Clicking the toggle changes the displayed pack sizes, minimum orders, and prices between wholesale cartons and retail counter packs. Every item has an instant "Ask on WhatsApp" link.
5. **Wholesale Supply Section:** Explains to restaurant managers and hotel chefs exactly who you supply (pizzerias, cafes, caterers, bakeries) and what guarantees you provide (consistent melting, reliable delivery vans, tax invoices, and standing weekly orders). On the right side, there is a simple inquiry form where kitchen owners can enter their details to request wholesale rates.
6. **Quality & Handling Standards:** Shows how you store cheese at +2°C to +4°C, freeze shredded stock at -18°C, use automatic generators during power cuts, and shred cheese hygienically with stainless steel equipment. It also features a real photograph demonstrating how your mozzarella stretches and browns evenly in commercial pizza ovens.
7. **How to Order (Challan Steps):** Laid out like a numbered paper delivery challan with four simple steps: (1) Message on WhatsApp or phone, (2) Confirm quantity and rate, (3) Delivery by van or shop collection, (4) Computerized tax invoice and payment. It also lists your daily morning and afternoon delivery routes for Rawalpindi and Islamabad.
8. **Our Story (37 Years in Raja Bazar):** A brief timeline highlighting your journey from 1987 in Kashmiri Bazaar, to supplying the Twin Cities' first pizzerias in 1999, to upgrading your cold storage and shredding machinery in 2012, to now serving over 85 commercial kitchens.
9. **Client Reviews:** Displays honest Google feedback from real local pizzeria owners, executive chefs, and retail buyers who praise your consistent cheese quality and on-time delivery.
10. **Frequently Asked Questions (FAQ):** An easy-to-tap question list answering common questions about minimum wholesale quantities, daily delivery zones, tax invoices, payment terms, and how chefs can get a test sample.
11. **Visit Our Shop (Map & Hours):** Displays an interactive Google Map pointing straight to Shop 60-61, Kashmiri Bazaar, Raja Bazar, along with your opening hours (8:30 AM to 8:30 PM), phone numbers, and a direct button for driving directions.
12. **Footer:** Contains your business summary, quick links, and a dedicated box for your NTN and STRN tax numbers.
13. **Mobile Bottom Bar:** When someone looks at the website on their mobile phone, a convenient bar stays fixed at the bottom with two large buttons: **Call Counter** and **WhatsApp Order**. This makes calling you as simple as one tap.

---

## 3. How Customers Will Contact You

Your website does not have an online shopping cart or payment gate. In wholesale food supply in Pakistan, orders depend on weights, delivery timings, and invoices, so all orders come directly to you through two friendly channels:

- **WhatsApp Messages:** Whenever a visitor taps an order button or submits the wholesale rate form, their phone or computer automatically opens WhatsApp with a pre-written message addressed to **+92 300 9779838**.
- **What the Wholesale Form Sends You:** When a pizzeria or restaurant fills out the inquiry form, you will receive an orderly message like this on WhatsApp:
  > *"Hello Mazhar Dairy (Wholesale Desk), We would like to request commercial wholesale pricing for our kitchen:*
  > *• Business Name: Roma Pizza*
  > *• Business Type: Pizzeria*
  > *• Location: F-7 Islamabad*
  > *• Items Needed: Shredded mozzarella and Cheddar blocks*
  > *• Approx. Monthly Volume: 80 kg per month"*
- **Phone Calls:** Customers can tap your phone number on their screen to call your mobile (+92 300 9779838) or shop landline (051-5533844) directly.
- **In-Person Visits:** Retail buyers can tap "Get Directions" to navigate directly to your shop in Raja Bazar.

---

## 4. What You Can Change Yourself (And How)

All the important business information on your website—such as prices, phone numbers, opening hours, delivery routes, and reviews—lives in **one single file** named:

`src/data/site-data.json`

You or your staff can open this file using Notepad or any text editor on your computer.

### Step-by-Step Instructions:

1. **To Change a Product Price:**
   - Open `site-data.json`.
   - Find the product name (e.g., `"cheddar"` or `"mozzarella"`).
   - Under `"retail"`, find `"price_display": "Rs. 2,150"`. Change the number inside the quotes to your new price.
   - Under `"wholesale"`, you can update the rate note or display text.
   - Save the file.
2. **To Change Your Phone or WhatsApp Number:**
   - Look at the top of `site-data.json` under `"phones"`.
   - Change `"whatsapp": "+92 300 9779838"` and `"whatsapp_raw": "923009779838"`. Make sure the raw number has no spaces or plus signs so the WhatsApp link works properly.
   - Save the file.
3. **To Update Shop Hours or Working Days:**
   - Find the `"hours"` section and update `"timings_en"` (e.g., `"8:30 AM – 8:30 PM"`) and `"timings_ur"`.
4. **When to Ask Your Developer:**
   - If you want to change the page layout, add whole new sections, change the website colors, or modify the Urdu translation files (`en.json` and `ur.json`), ask your developer to do it for you so nothing gets broken.

---

## 5. About the Pictures on the Website

The food photographs currently on your website are high-quality, computer-generated preview images made specifically for your dairy. They are clean, realistic, and show cheese blocks, shredded pizza cheese, butter, and ghee on commercial kitchen counters.

**Replacing Them with Real Photos:**
Customers love seeing genuine photographs of your actual shop, your real staff, your cold-room, and your cheese cutting counter. As soon as you take real photos, you should replace the preview pictures.

**How to Take and Send Photos:**
1. Take well-lit photos using a smartphone during daytime.
2. Take wide photos of your shop front showing your signboard at Shop 60-61 Kashmiri Bazaar.
3. Take photos of cheese blocks being sliced or weighed on your counter.
4. Take a photo of an insulated delivery van or transport crate.
5. Send the original, full-size photos to your developer via WhatsApp (send as a "Document" so WhatsApp does not blur the quality) or email. Your developer will optimize them and put them on the website in minutes.

---

## 6. What We Need from You (Checklist)

To make your website 100% complete with your exact trade numbers, please provide the following details to your developer:

- [ ] **Official NTN and STRN Numbers:** Your active FBR tax certificate numbers so we can replace the placeholder on the website and footer.
- [ ] **Latest Wholesale Rate Sheet:** Your current per-kilogram wholesale rates for cheddar, mozzarella blocks, shredded cheese, butter, cream, and 16kg desi ghee tins.
- [ ] **Confirmed Minimum Orders:** Any specific minimum order quantities you require for free delivery to Islamabad or distant areas.
- [ ] **Real Shop Photos:** 2 to 4 clear photos of your Kashmiri Bazaar shop front, signboard, and cheese display.
- [ ] **Historical Milestone Details:** Any personal stories or exact milestone years from 1987 to present that you want highlighted.
- [ ] **Customer Testimonials:** Any recent reviews or recommendations from known pizzeria owners or hotel chefs who buy from you.

---

## 7. Questions Owners Usually Ask

**Q: Does this website work on mobile phones?**
**A:** Yes, perfectly! More than 80% of your visitors will view your site on their mobile phones. It is built to load instantly on slow mobile connections, fits screens of all sizes, and includes a handy bottom bar with direct Call and WhatsApp buttons.

**Q: How much does it cost to keep this website running?**
**A:** Because this website is built with clean, lightweight technology, hosting it is very affordable. Using static hosting services (like Cloudflare Pages or Netlify), hosting can be virtually free, with your only regular cost being your annual `.pk` domain name renewal (usually around Rs. 2,000 to Rs. 3,500 per year).

**Q: Who updates the website when market prices change?**
**A:** You can change prices yourself in five minutes by editing `site-data.json`, or you can send a quick WhatsApp text with your updated rates to your developer, who can update and republish the website in moments.

**Q: How do we get found on Google when people search for cheese in Rawalpindi?**
**A:** The website already contains complete local business data (LocalBusiness schema) and Google Maps links. The best way to rank high is to ask every satisfied restaurant and walk-in customer to search for "Mazhar Dairy Raja Bazar" on Google Maps and leave you a 5-star review!

