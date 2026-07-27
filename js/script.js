/* ============================================================
   THERAPY THINGZ shared site script
   Injects the header + footer on every page, then wires up the
   sticky nav, mobile menu, and scroll reveals.

   To add a new page: drop <div id="site-header"></div> at the top
   and <div id="site-footer"></div> at the bottom, set
   <body data-page="shop"> (matching a nav key), link this file. Done.
   ============================================================ */

const SITE = {
  brandMark: "assets/favicon.svg",
  email: "TherapyThingzz@gmail.com",
  phone: "(850) 807-9801",
  phoneHref: "tel:+18508079801",
  // --- social links (swap # for real URLs) ---
  instagram: "https://instagram.com/DrRaychel",
  tiktok: "#",
  facebook: "#",
  // --- external sites ---
  be333: "https://be333.app",
  drPowers: "https://drpowers.org",
  bookSite: "https://marriedamurder.com",
  // --- primary nav ---
  nav: [
    { key: "apps",    label: "Apps",    href: "apps.html" },
    { key: "book",    label: "Book",    href: "book.html" },
    { key: "courses", label: "Courses", href: "courses.html" },
    { key: "shop",    label: "Shop",    href: "shop.html" },
    { key: "about",   label: "About",   href: "about.html" },
    { key: "contact", label: "Contact", href: "contact.html" }
  ]
};

/* ---------- brand lockup ---------- */
function brandHTML(){
  return `<a class="brand" href="index.html" aria-label="Therapy Thingz home">
    <img class="mark" src="${SITE.brandMark}" alt="" width="30" height="30">
    <span>Therapy&nbsp;Thing<span class="z">z</span></span>
  </a>`;
}

/* ---------- header ---------- */
function headerHTML(active){
  const links = SITE.nav.map(n =>
    `<a href="${n.href}"${n.key===active ? ' aria-current="page"' : ''}>${n.label}</a>`
  ).join("");
  return `<header class="site-header">
    <nav class="nav">
      ${brandHTML()}
      <button class="nav__toggle" aria-label="Menu" aria-expanded="false" aria-controls="navlinks">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/>
        </svg>
      </button>
      <div class="nav__links" id="navlinks">
        ${links}
        <a class="btn btn--primary btn--sm nav__cta" href="shop.html">Shop the store</a>
      </div>
    </nav>
  </header>`;
}

/* ---------- socials (shared markup) ---------- */
function socialsHTML(){
  const ig = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`;
  const tk = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3c.3 2 1.6 3.6 3.5 4v2.4c-1.3 0-2.6-.4-3.6-1v5.7a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.5a3.1 3.1 0 1 0 2.2 3V3h2.6z"/></svg>`;
  const fb = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h2.5l.5-3H14V4.5c0-.9.3-1.5 1.6-1.5H17V.4C16.6.3 15.6.2 14.5.2 12 .2 10.4 1.7 10.4 4.4V6H8v3h2.4v9H14V9z"/></svg>`;
  return `<div class="foot-socials">
    <a href="${SITE.instagram}" aria-label="Instagram" target="_blank" rel="noopener">${ig}</a>
    <a href="${SITE.tiktok}" aria-label="TikTok" target="_blank" rel="noopener">${tk}</a>
    <a href="${SITE.facebook}" aria-label="Facebook" target="_blank" rel="noopener">${fb}</a>
  </div>`;
}

/* ---------- footer ---------- */
function footerHTML(){
  const y = new Date().getFullYear();
  return `<footer class="site-footer">
    <div class="wrap">
      <div class="foot-brand-col">
        <div class="foot-brand">Therapy&nbsp;Thing<span class="z">z</span></div>
        <p>Wisdom-infused thingz for real humans apps, a book, courses, and a shop, grounded in therapy and made with presence.</p>
        ${socialsHTML()}
      </div>
      <div class="foot-col">
        <h4>Explore</h4>
        <a href="apps.html">Apps</a>
        <a href="book.html">Book</a>
        <a href="courses.html">Courses</a>
        <a href="shop.html">Shop</a>
      </div>
      <div class="foot-col">
        <h4>Say hi</h4>
        <a href="about.html">About Dr. Powers</a>
        <a href="contact.html">Contact</a>
        <a href="mailto:${SITE.email}">${SITE.email}</a>
        <a href="${SITE.phoneHref}">${SITE.phone}</a>
        <a href="${SITE.be333}" target="_blank" rel="noopener">BE333.app ↗</a>
        <a href="${SITE.drPowers}" target="_blank" rel="noopener">DrPowers.org ↗</a>
        <a href="${SITE.bookSite}" target="_blank" rel="noopener">MarriedAMurder.com ↗</a>
      </div>
    </div>
    <div class="wrap">
      <div class="foot-bottom">
        <small>© ${y} Therapy Thingz</small>
        <span class="dot">•</span>
        <small>Created by <a href="${SITE.drPowers}" target="_blank" rel="noopener">Dr. Raychel Powers, Psy.D.</a></small>
      </div>
    </div>
  </footer>`;
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const active = document.body.dataset.page || "";

  const h = document.getElementById("site-header");
  if (h) h.innerHTML = headerHTML(active);
  const f = document.getElementById("site-footer");
  if (f) f.innerHTML = footerHTML();

  // mobile menu
  const toggle = document.querySelector(".nav__toggle");
  const links = document.getElementById("navlinks");
  if (toggle && links){
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  // sticky header shadow
  const header = document.querySelector(".site-header");
  const onScroll = () => header && header.classList.toggle("is-stuck", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive:true });

  // scroll reveals
  const items = document.querySelectorAll("[data-reveal]");
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold:.12, rootMargin:"0px 0px -8% 0px" });
    items.forEach((el,i) => { el.style.transitionDelay = `${Math.min(i*60,240)}ms`; io.observe(el); });
  } else {
    items.forEach(el => el.classList.add("in"));
  }
});
