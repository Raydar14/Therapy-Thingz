/* ============================================================
   THERAPY THINGZ shop engine
   ------------------------------------------------------------
   HOW THE STORE WORKS ON A STATIC (GitHub Pages) SITE:
   GitHub Pages only serves files it can't process a payment.
   So each product points to a hosted checkout URL. When someone
   clicks "Add to cart / Buy", they go to a page the payment
   provider hosts (Stripe collects card + shipping; you get paid).

   RECOMMENDED (you already have Stripe connected):
     1. Stripe Dashboard, Product catalog, add product + price
     2. Create a "Payment Link" for it (turn ON "collect shipping
        address" for physical items like stickers and hats)
     3. Paste that link below as `checkoutUrl`
   Swappable: any checkout URL works here Stripe, Gumroad,
   Lemon Squeezy, Shopify Buy link, etc. Change the URL, done.

   Leave checkoutUrl as "" to show a disabled "Coming soon" button.
   ============================================================ */

// PRICES ARE PLACEHOLDERS. Update these to match your real pricing.
const PRODUCTS = [
  {
    id: "hat-therapy-thingz",
    name: "Therapy Thingz Hat",
    kind: "physical",
    price: "$28",
    blurb: "The classic. Soft cotton, adjustable strap, quietly wisdom-infused.",
    img: "assets/products/hat-therapy-thingz.jpg",
    badge: "best",
    checkoutUrl: ""
  },
  {
    id: "hat-dont-give-up",
    name: "Don't Give Up Hat",
    kind: "physical",
    price: "$28",
    blurb: "Embroidered low-profile cap. A quiet reminder in the mirror every morning.",
    img: "assets/products/hat-dont-give-up.jpg",
    badge: "",
    checkoutUrl: ""
  },
  {
    id: "hat-worth-it",
    name: "Worth It Hat",
    kind: "physical",
    price: "$28",
    blurb: "Black low-profile cap with gold embroidery. You are.",
    img: "assets/products/hat-worth-it.jpg",
    badge: "",
    checkoutUrl: ""
  },
  {
    id: "hat-trust-no-one",
    name: "Trust No One Hat",
    kind: "physical",
    price: "$28",
    blurb: "For the days that call for it. Black cap, embroidered.",
    img: "assets/products/hat-trust-no-one.jpg",
    badge: "",
    checkoutUrl: ""
  },
  {
    id: "pin-social-battery",
    name: "Social Battery Pin",
    kind: "physical",
    price: "$8",
    blurb: "Enamel pin. A wearable meter for the days when words are hard.",
    img: "assets/products/pin-social-battery.jpg",
    badge: "best",
    checkoutUrl: ""
  },
  {
    id: "pin-im-trying",
    name: "I'm Trying Pin",
    kind: "physical",
    price: "$8",
    blurb: "Enamel pin. Two words that do a lot of work in the world.",
    img: "assets/products/pin-im-trying.jpg",
    badge: "",
    checkoutUrl: ""
  },
  {
    id: "pin-mood-tracker",
    name: "Mood Tracker Pin",
    kind: "physical",
    price: "$8",
    blurb: "Black enamel pin. Small, honest, and worn where you can see it.",
    img: "assets/products/pin-mood-tracker.jpg",
    badge: "",
    checkoutUrl: ""
  },
  {
    id: "sticker-believe",
    name: "You Are What You Believe Sticker",
    kind: "physical",
    price: "$6",
    blurb: "Weatherproof die-cut vinyl for laptops, water bottles, and therapy journals.",
    img: "assets/products/sticker-believe.jpg",
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
