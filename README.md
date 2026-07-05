# Therapy Thingz

The hub for Dr. Raychel Powers' apps, book, courses, and shop — a static site for GitHub Pages.
Same architecture as your other sites: per-page HTML + a shared `js/script.js` that injects the
header & footer on every page + CSS tokens in `css/styles.css` + `CNAME`.

## Files
```
index.html      Home (hub)
apps.html       BE333 (live) + MindKind / 7 Seekings (coming soon)
book.html       The book
courses.html    Courses (waitlist)
shop.html       The store — product grid rendered by js/shop.js
about.html      About Dr. Powers
contact.html    Formspree contact form
css/styles.css  Design tokens + all styles
js/script.js    Shared header/footer injection, nav, reveals  (edit SITE.* for links)
js/shop.js      Product catalog + checkout links  ← THE STORE lives here
assets/         favicon + (add product images, book cover, localized images)
CNAME           therapythingz.com
```

## Deploy (GitHub Pages, user Raydar14)
1. Create/choose a repo, upload the **contents** of this folder to the repo **root**
   (so `index.html` sits beside `css/` and `js/` — don't nest the outer folder).
2. Settings → Pages → deploy from branch → root.
3. DNS at GoDaddy (same as your other sites): apex `@` → four A records
   `185.199.108.153 / .109.153 / .110.153 / .111.153`; `www` CNAME → `raydar14.github.io`.
   The `CNAME` file already holds `therapythingz.com`.

## The store — how it works
GitHub Pages can't process payments (no server), so each product points to a **hosted
checkout URL**. Everything is set up; you just paste links.

**Recommended (you already have Stripe):**
1. Stripe → Product catalog → add each product + price.
2. Create a **Payment Link** for it. For physical items (stickers, hats), turn ON
   "Collect shipping address."
3. Open `js/shop.js`, paste the link into that product's `checkoutUrl: ""`.
   Empty = button shows "Coming soon"; filled = "Add to cart" → Stripe checkout.

Any checkout URL works (Stripe, Gumroad, Lemon Squeezy, Shopify Buy) — it's just a URL,
so switching providers later is a one-line change. Add/remove products by editing the
`PRODUCTS` array. Drop product photos in `assets/products/` matching each `img` path.

- **Physical (merch):** Stripe Payment Links, or connect **Printful/Printify** for hands-off
  print-on-demand so you never hold inventory.
- **Digital (book, courses):** Stripe, or **Gumroad/Lemon Squeezy** for automatic file/
  license delivery + receipts.

## Fill these in before launch
- **Formspree** — `contact.html`: replace `your-form-id` in the form `action`.
- **Store links** — `js/shop.js`: paste `checkoutUrl` per product; add images to `assets/products/`.
- **BE333 / book / course buy links** — the `href="#"` buttons on `apps.html`, `book.html`, `courses.html`.
- **Socials** — `js/script.js` `SITE.instagram / tiktok / facebook`.
- **Book cover** — add `assets/book-cover.jpg` (falls back to a placeholder until then).
- **Localize images** — hero + app/logo images currently load from your WordPress CDN
  (`therapythingz.com/wp-content/...`). Download them into `assets/` and update the `src`s
  when you're ready to fully cut ties with WordPress.

## Design
Palette: plum ink `#2A2440`, warm paper `#FCF4EC`, marigold `#F79200` (your signature),
raspberry `#D24B6A`, sage `#5B7A6B`. Type: Bricolage Grotesque (display), Figtree (body),
Space Mono (price/hangtag labels — the signature device). Responsive, keyboard-focusable,
reduced-motion respected.
