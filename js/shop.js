/* ============================================================
   THERAPY THINGZ shop engine
   ------------------------------------------------------------
   HOW THE STORE WORKS ON A STATIC (GitHub Pages) SITE:
   GitHub Pages only serves files it can't process a payment.
   So each product points to a hosted checkout URL. When someone
   clicks "Add to cart / Buy", they go to a page the payment
   provider hosts (Stripe collects card + shipping; you get paid).

   RECOMMENDED (you already have Stripe connected):
     1. Stripe Dashboard → Product catalog → add product + price
     2. Create a "Payment Link" for it (turn ON "collect shipping
        address" for physical items like stickers & hats)
     3. Paste that link below as `checkoutUrl`
   Swappable: any checkout URL works here Stripe, Gumroad,
   Lemon Squeezy, Shopify Buy link, etc. Change the URL, done.

   Leave checkoutUrl as "" to show a disabled "Coming soon" button.
   ============================================================ */

const PRODUCTS = [
  {
    id: "grounding-stickers",
    name: "Grounding Sticker Pack",
    kind: "physical",
    price: "$12",
    blurb: "Six matte vinyl stickers 5-4-3-2-1, box breathing, and other pocket-sized regulation cues.",
    img: "assets/products/grounding-stickers.jpg",
    badge: "best",
    checkoutUrl: ""      // ← paste Stripe Payment Link (shipping ON)
  },
  {
    id: "self-love-sticker",
    name: "Self-Love Vinyl Sticker",
    kind: "physical",
    price: "$4",
    blurb: "Weatherproof die-cut for your water bottle, laptop, or therapy journal.",
    img: "assets/products/self-love-sticker.jpg",
    badge: "",
    checkoutUrl: ""
  },
  {
    id: "dad-hat",
    name: "Therapy Thingz Dad Hat",
    kind: "physical",
    price: "$28",
    blurb: "Embroidered low-profile cap. Soft cotton, adjustable strap, quietly wisdom-infused.",
    img: "assets/products/dad-hat.jpg",
    badge: "best",
    checkoutUrl: ""
  },
  {
    id: "present-tote",
    name: "\u201CPresent Moment\u201D Tote",
    kind: "physical",
    price: "$22",
    blurb: "Heavyweight canvas carry-all for books, groceries, and grounding.",
    img: "assets/products/present-tote.jpg",
    badge: "",
    checkoutUrl: ""
  },
  {
    id: "affirmation-deck",
    name: "Affirmation Card Deck",
    kind: "physical",
    price: "$18",
    blurb: "52 therapist-written self-compassion prompts. One a week, or one a hard day.",
    img: "assets/products/affirmation-deck.jpg",
    badge: "best",
    checkoutUrl: ""
  },
  {
    id: "regulation-mug",
    name: "Regulate & Caffeinate Mug",
    kind: "physical",
    price: "$16",
    blurb: "11oz ceramic. A nervous-system reminder that fits in both hands.",
    img: "assets/products/regulation-mug.jpg",
    badge: "",
    checkoutUrl: ""
  }
];

function productCard(p){
  const badge = p.badge === "best"
    ? `<span class="badge badge--best">❤ Bestseller</span>` : "";
  const buy = p.checkoutUrl
    ? `<a class="btn btn--primary btn--sm" href="${p.checkoutUrl}" target="_blank" rel="noopener">Add to cart</a>`
    : `<span class="btn btn--primary btn--sm" aria-disabled="true">Coming soon</span>`;
  const imgTag = p.img
    ? `<img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.classList.add('ph')">`
    : "";
  return `<article class="card" data-reveal>
    <div class="card__media">${imgTag}</div>
    <div class="card__body">
      <div class="card__row">
        <span class="hangtag">${p.price}</span>
        ${badge}
      </div>
      <h3>${p.name}</h3>
      <p>${p.blurb}</p>
      <div class="card__foot">${buy}</div>
    </div>
  </article>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("shop-grid");
  if (grid) grid.innerHTML = PRODUCTS.map(productCard).join("");
});
