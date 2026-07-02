// Renders the page templates against SITE config: replaces {{token.path}} with
// escaped values, {{html.partial}} with prebuilt markup, injects window.SITE.
// Also builds the shared header/footer (with the services mega-menu) and the
// /services/<slug>/ category pages from the services catalog.
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { FAMILIES, CATEGORIES, categoryBySlug } from "./services-catalog.js";

// Short content hash of the JS+CSS, appended as ?v= so browsers re-fetch them
// only when they actually change (HTML is no-cache; assets cache for days).
const ASSET_DIR = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "assets");
function assetVersion() {
  try {
    const h = createHash("sha1");
    h.update(readFileSync(join(ASSET_DIR, "js", "main.js")));
    h.update(readFileSync(join(ASSET_DIR, "css", "styles.css")));
    return h.digest("hex").slice(0, 8);
  } catch { return "1"; }
}

const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const STAR = `<svg class="star" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17.3l-6.18 3.7 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.73 1.64 7.03z"/></svg>`;
const stars = (n) => STAR.repeat(Math.round(n));

// data-ph drives the branded fallback panel if a photo file is missing.
const img = (file, alt, label, w, h, cls = "", eager = false) =>
  `<img src="/assets/img/${file}.jpg" alt="${esc(alt)}" data-ph="${esc(label)}"${cls ? ` class="${cls}"` : ""} width="${w}" height="${h}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;

// ---------------------------------------------------------------------------
//  Shared chrome: header (with services mega-menu), footer, mobile dock.
//  Used by BOTH the homepage template and the /services/ page template, so
//  navigation only ever has to be edited here.
// ---------------------------------------------------------------------------
const PHONE_ICON = `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.25 1z"/></svg>`;

// Icon + real HTML text (not the raster logo's fine-print tagline, which pixelates
// into illegibility once scaled down for a navbar/footer) — stays crisp at any size.
function brandMark(site, { light = false } = {}) {
  const suffix = site.brand.name.replace(site.brand.shortName, "").trim();
  return `<img class="brand__icon${light ? " brand__icon--light" : ""}" src="/assets/img/logo-icon.png" alt="" width="500" height="194" decoding="async">
        <span class="brand__text${light ? " brand__text--light" : ""}"><strong>${esc(site.brand.shortName)}</strong><em>${esc(suffix)}</em></span>`;
}

function headerHtml(site) {
  const megaCols = FAMILIES.map(
    (f) => `
        <div class="mega__group">
          <p class="mega__family">${esc(f.name)}</p>
          <ul class="mega__list">
            ${f.categories.map((c) => `<li><a class="mega__link" href="/services/${c.slug}/">${esc(c.name)}</a></li>`).join("\n            ")}
          </ul>
        </div>`
  ).join("");

  const drawerGroups = FAMILIES.map(
    (f) => `
      <details class="drawer-acc">
        <summary class="nav__drawer-link drawer-acc__head">${esc(f.name)}<span class="drawer-acc__icon" aria-hidden="true"></span></summary>
        <ul class="drawer-acc__list">
          ${f.categories.map((c) => `<li><a href="/services/${c.slug}/">${esc(c.name)}</a></li>`).join("\n          ")}
        </ul>
      </details>`
  ).join("");

  return `
  <header class="site-header" data-header>
    <div class="container nav">
      <a class="brand" href="/" aria-label="${esc(site.brand.name)} home">
        ${brandMark(site)}
      </a>

      <nav class="nav__links" aria-label="Primary">
        <div class="nav__menu" data-menu>
          <button class="nav__link nav__link--menu" type="button" data-menu-btn aria-expanded="false" aria-haspopup="true">Services<svg class="nav__caret" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button>
          <div class="mega" data-menu-panel hidden>
            <div class="container mega__inner">${megaCols}
              <div class="mega__aside">
                <p class="mega__aside-title">Not sure where it fits?</p>
                <p class="mega__aside-text">Describe the job and we'll sort it out — one crew covers all of it.</p>
                <a class="btn btn--teal" href="/#estimate">Get My Free Estimate</a>
              </div>
            </div>
          </div>
        </div>
        <a class="nav__link" href="/#proof">Before &amp; After</a>
        <a class="nav__link" href="/#reviews">Reviews</a>
        <a class="nav__link" href="/#area">Service Area</a>
      </nav>

      <div class="nav__actions">
        <a class="nav__phone" href="tel:${esc(site.brand.phoneHref)}">${PHONE_ICON}<span>${esc(site.brand.phone)}</span></a>
        <a class="btn btn--gold nav__call" href="tel:${esc(site.brand.phoneHref)}" data-pulse>${PHONE_ICON}<span>Call</span></a>
        <a class="btn btn--teal nav__estimate" href="/#estimate">Free Estimate</a>
        <button class="nav__toggle" type="button" aria-label="Open menu" aria-expanded="false" data-nav-toggle>
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <div class="nav__drawer" data-nav-drawer hidden>${drawerGroups}
      <a class="nav__drawer-link" href="/#proof">Before &amp; After</a>
      <a class="nav__drawer-link" href="/#reviews">Reviews</a>
      <a class="nav__drawer-link" href="/#area">Service Area</a>
      <div class="nav__drawer-actions">
        <a class="btn btn--gold" href="tel:${esc(site.brand.phoneHref)}">Call ${esc(site.brand.phone)}</a>
        <a class="btn btn--teal" href="/#estimate">Get My Free Estimate</a>
      </div>
    </div>
  </header>`;
}

function footerHtml(site, year) {
  const famCols = FAMILIES.map(
    (f) => `
      <div class="footer__col footer__col--svc">
        <h3>${esc(f.name)}</h3>
        <ul>${f.categories.map((c) => `<li><a href="/services/${c.slug}/">${esc(c.name)}</a></li>`).join("")}</ul>
      </div>`
  ).join("");

  return `
  <footer class="footer">
    <div class="container footer__top footer__top--wide">
      <div class="footer__brand">
        <a class="brand brand--light" href="/">
          ${brandMark(site, { light: true })}
        </a>
        <p class="footer__tagline">${esc(site.brand.tagline)}</p>
        <a class="footer__cta" href="tel:${esc(site.brand.phoneHref)}">${esc(site.brand.phone)}</a>
        <a class="footer__email" href="mailto:${esc(site.brand.email)}">${esc(site.brand.email)}</a>
      </div>${famCols}
      <div class="footer__col footer__col--area">
        <h3>Service Area</h3>
        <ul>${site.serviceAreas.map((a) => `<li><a href="/#estimate">${esc(a)}</a></li>`).join("")}</ul>
      </div>
      <div class="footer__col">
        <h3>Hours &amp; Info</h3>
        <ul>
          <li>${esc(site.brand.hours)}</li>
          <li>${esc(site.brand.license)}</li>
          <li>${esc(site.brand.legalName)}</li>
        </ul>
      </div>
    </div>
    <div class="container footer__bottom">
      <span>© ${year} ${esc(site.brand.legalName)}</span>
      <span>Renovations &amp; exterior restoration across ${esc(site.brand.region)}</span>
    </div>
  </footer>`;
}

function dockHtml(site) {
  return `
  <div class="dock" data-dock>
    <a class="dock__btn dock__btn--call" href="tel:${esc(site.brand.phoneHref)}">${PHONE_ICON}Call</a>
    <a class="dock__btn dock__btn--estimate" href="#estimate">Free Estimate</a>
  </div>`;
}

// ---------------------------------------------------------------------------
//  Homepage services directory: two family blocks of category cards.
// ---------------------------------------------------------------------------
function categoryIndex() {
  return FAMILIES.map(
    (f, fi) => `
      <div class="fam reveal">
        <div class="fam__head">
          <span class="fam__num">${String(fi + 1).padStart(2, "0")}</span>
          <div>
            <h3 class="fam__name">${esc(f.name)}</h3>
            <p class="fam__blurb">${esc(f.blurb)}</p>
          </div>
        </div>
        <div class="fam__grid">
          ${f.categories
            .map(
              (c) => `
          <a class="cat" href="/services/${c.slug}/">
            <span class="cat__name">${esc(c.name)}</span>
            <span class="cat__kicker">${esc(c.kicker)}</span>
            <span class="cat__meta">${c.services.length} services <span class="cat__go" aria-hidden="true">→</span></span>
          </a>`
            )
            .join("")}
        </div>
      </div>`
  ).join("");
}

function processCols(site) {
  return site.process
    .map(
      (p) => `
      <li class="step reveal">
        <span class="step__num">${esc(p.step)}</span>
        <h3 class="step__title">${esc(p.title)}</h3>
        <p class="step__text">${esc(p.text)}</p>
      </li>`
    )
    .join("");
}

function gallery(site) {
  return site.gallery
    .map(
      (g, i) => `
      <article class="work reveal${i % 2 ? " work--flip" : ""}">
        <figure class="work__media">
          <span class="work__wipe">${img(g.img, `${g.surface} cleaned by ${site.brand.name} in ${g.area}`, g.surface, 1000, 640)}</span>
        </figure>
        <div class="work__caption">
          <span class="work__surface">${esc(g.surface)}</span>
          <span class="work__area">${esc(g.area)} · ${esc(g.time)}</span>
          <p class="work__quote">“${esc(g.quote)}”</p>
        </div>
      </article>`
    )
    .join("");
}

function beforeAfter(site) {
  const tiles = site.beforeAfter;
  const afterOf = (t) => esc(t.after || t.img);
  const beforeOf = (t) => esc(t.before || t.after || t.img);
  const isReal = (t) => Boolean(t.before);
  const first = tiles[0];
  const thumbs = tiles
    .map(
      (t, i) => `<button class="ba__thumb${i === 0 ? " is-active" : ""}" type="button" data-after="${afterOf(t)}" data-before="${beforeOf(t)}" data-real="${isReal(t) ? "1" : ""}" data-label="${esc(t.label)}" aria-pressed="${i === 0}">${esc(t.label)}</button>`
    )
    .join("");
  return `
    <div class="ba${isReal(first) ? " is-real" : ""}" data-ba>
      <figure class="ba__stage">
        <img class="ba__img ba__img--after" src="/assets/img/${afterOf(first)}.jpg" alt="After: a freshly cleaned surface" data-ph="${esc(first.label)} — after" width="1040" height="650" decoding="async">
        <div class="ba__before" data-ba-before>
          <img class="ba__img ba__img--before" src="/assets/img/${beforeOf(first)}.jpg" alt="Before: the same surface with built-up grime" data-ph="${esc(first.label)} — before" width="1040" height="650" decoding="async" aria-hidden="true">
        </div>
        <span class="ba__tag ba__tag--before">Before</span>
        <span class="ba__tag ba__tag--after">After</span>
        <div class="ba__handle" data-ba-handle role="slider" tabindex="0" aria-label="Drag to compare before and after" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">
          <span class="ba__grip" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M9 7l-5 5 5 5M15 7l5 5-5 5"/></svg></span>
        </div>
        <input class="ba__range" type="range" min="0" max="100" value="50" aria-label="Before / after comparison slider" data-ba-range>
      </figure>
      <div class="ba__thumbs" role="group" aria-label="Choose a surface to compare">${thumbs}</div>
      <p class="ba__note">Drag to compare — real ${esc(site.brand.shortName)} before &amp; after jobs.</p>
    </div>`;
}

function reviews(site) {
  const [featured, ...rest] = site.testimonials;
  const metaLine = (t) => [t.meta, t.service].filter(Boolean).map(esc).join(" · ");
  const card = (t) => `
    <figure class="rev__card reveal">
      <div class="rev__stars" aria-label="${t.rating} out of 5 stars">${stars(t.rating)}</div>
      <blockquote>${esc(t.quote)}</blockquote>
      <figcaption><span class="rev__name">${esc(t.name)}</span><span class="rev__meta">${metaLine(t)}</span></figcaption>
    </figure>`;
  return `
    <figure class="rev__feature reveal">
      <div class="rev__stars rev__stars--lg" aria-label="${featured.rating} out of 5 stars">${stars(featured.rating)}</div>
      <blockquote class="rev__quote">“${esc(featured.quote)}”</blockquote>
      <figcaption class="rev__by">${esc(featured.name)} · ${metaLine(featured)}</figcaption>
    </figure>
    <div class="rev__grid">${rest.map(card).join("")}</div>`;
}

function faqs(site) {
  return site.faqs
    .map(
      (f, i) => `
      <details class="faq reveal"${i === 0 ? " open" : ""}>
        <summary class="faq__q">${esc(f.q)}<span class="faq__icon" aria-hidden="true"></span></summary>
        <div class="faq__a"><p>${esc(f.a)}</p></div>
      </details>`
    )
    .join("");
}

const areaChips = (site) => site.serviceAreas.map((a) => `<li class="chip">${esc(a)}</li>`).join("");
const areaCloseList = (site) => site.serviceAreas.map((a) => `<li>${esc(a)}</li>`).join("");
const formOptions = (site, selected) =>
  site.formServices
    .map((s) => `<option value="${esc(s)}"${selected && s === selected ? " selected" : ""}>${esc(s)}</option>`)
    .join("");

function jsonLd(site) {
  const business = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    name: site.brand.name,
    image: `${site.seo.url}/assets/img/house-wash.jpg`,
    "@id": site.seo.url,
    url: site.seo.url,
    telephone: site.brand.phoneHref,
    email: site.brand.email,
    priceRange: "$$",
    address: { "@type": "PostalAddress", addressLocality: site.brand.city, addressRegion: site.brand.state, addressCountry: "US" },
    areaServed: site.serviceAreas.map((name) => ({ "@type": "City", name })),
    aggregateRating: { "@type": "AggregateRating", ratingValue: site.stats.rating, reviewCount: site.stats.reviewCount },
    openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "07:00", closes: "19:00" },
  };
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return `<script type="application/ld+json">${JSON.stringify(business)}</script>\n<script type="application/ld+json">${JSON.stringify(faqPage)}</script>`;
}

const TOKEN = /\{\{\s*([\w.]+)\s*\}\}/g;

export function renderPage(template, site, opts = {}) {
  const year = new Date().getFullYear();
  const ext = {
    ...site,
    stats: { ...site.stats, homesCleanedFmt: site.stats.homesCleaned.toLocaleString("en-US"), ratingFmt: site.stats.rating.toFixed(1) },
    assetVersion: assetVersion(),
    year,
  };

  const partials = {
    "html.header": headerHtml(site),
    "html.footer": footerHtml(site, year),
    "html.dock": dockHtml(site),
    "html.categoryIndex": categoryIndex(),
    "html.process": processCols(site),
    "html.gallery": gallery(site),
    "html.beforeAfter": beforeAfter(site),
    "html.reviews": reviews(site),
    "html.faqs": faqs(site),
    "html.areaChips": areaChips(site),
    "html.areaCloseList": areaCloseList(site),
    "html.formServiceOptions": formOptions(site),
    "html.jsonLd": jsonLd(site),
    "html.year": String(year),
    ...(opts.extraPartials || {}),
  };

  const clientSite = {
    brand: { name: site.brand.name, phone: site.brand.phone, phoneHref: site.brand.phoneHref, email: site.brand.email },
    stats: site.stats,
    // Browser-facing key for the address-autocomplete field. Restricted by HTTP
    // referrer in Google Cloud Console (not a secret — see .env.example). Omitted
    // entirely when unset so main.js just skips autocomplete (plain text still works).
    ...(process.env.GOOGLE_MAPS_BROWSER_KEY ? { mapsKey: process.env.GOOGLE_MAPS_BROWSER_KEY } : {}),
  };
  const nonceAttr = opts.nonce ? ` nonce="${opts.nonce}"` : "";
  const inject = `<script${nonceAttr}>window.SITE=${JSON.stringify(clientSite)};</script>`;

  const out = template.replace(TOKEN, (m, key) => {
    if (key in partials) return partials[key];
    const v = key.split(".").reduce((o, k) => (o == null ? undefined : o[k]), ext);
    return v == null ? "" : esc(v);
  });

  return out.replace("</head>", `${inject}\n</head>`);
}

// ===========================================================================
//  /services/ pages — one per category, plus the /services/ hub.
//  Both use src/service-page.template.html; the body content differs.
// ===========================================================================
const CHECK = `<svg class="tick" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`;

function checklist(cat) {
  return `
    <ul class="inc__grid">
      ${cat.services.map((s) => `<li class="inc__item reveal">${CHECK}<span>${esc(s)}</span></li>`).join("\n      ")}
    </ul>`;
}

function relatedChips(cat) {
  const sibs = CATEGORIES.filter((c) => c.family.id === cat.family.id && c.slug !== cat.slug);
  return `
    <div class="related reveal">
      <p class="related__label">More ${esc(cat.family.name.toLowerCase())}:</p>
      <ul class="chips">
        ${sibs.map((c) => `<li><a class="chip chip--link" href="/services/${c.slug}/">${esc(c.name)}</a></li>`).join("\n        ")}
      </ul>
    </div>`;
}

function whyStrip(site) {
  return `
    <div class="page-why reveal">
      <div class="page-why__item"><strong>Fully insured</strong><span>Proof before we start — every job, every time.</span></div>
      <div class="page-why__item"><strong>Itemized quotes</strong><span>An exact written price. Never a vague range.</span></div>
      <div class="page-why__item"><strong>${site.stats.guaranteeDays}-day guarantee</strong><span>Not right? We come back and make it right, free.</span></div>
    </div>`;
}

function crumb(items) {
  return `
    <nav class="crumb" aria-label="Breadcrumb">
      ${items
        .map((it, i) =>
          it.href
            ? `<a href="${it.href}">${esc(it.label)}</a>${i < items.length - 1 ? '<span aria-hidden="true">/</span>' : ""}`
            : `<span aria-current="page">${esc(it.label)}</span>`
        )
        .join("\n      ")}
    </nav>`;
}

function servicePageJsonLd(site, cat) {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${cat.name} — ${site.brand.name}`,
    serviceType: cat.name,
    description: cat.intro,
    provider: { "@type": "LocalBusiness", name: site.brand.name, telephone: site.brand.phoneHref, url: site.seo.url },
    areaServed: site.serviceAreas.map((name) => ({ "@type": "City", name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: cat.name,
      itemListElement: cat.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })),
    },
  };
  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.seo.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.seo.url}/services/` },
      { "@type": "ListItem", position: 3, name: cat.name, item: `${site.seo.url}/services/${cat.slug}/` },
    ],
  };
  return `<script type="application/ld+json">${JSON.stringify(service)}</script>\n<script type="application/ld+json">${JSON.stringify(crumbs)}</script>`;
}

export function renderServicePage(template, site, slug, opts = {}) {
  const cat = categoryBySlug(slug);
  if (!cat) return null;
  const extraPartials = {
    "html.pageJsonLd": servicePageJsonLd(site, cat),
    "html.pageCrumb": crumb([{ label: "Home", href: "/" }, { label: "Services", href: "/services/" }, { label: cat.name }]),
    "html.pageEyebrow": esc(cat.family.name),
    "html.pageTitle": esc(cat.name),
    "html.pageIntro": esc(cat.intro),
    "html.pageBody": `
      <section class="inc">
        <div class="container">
          <div class="section-head reveal">
            <p class="eyebrow">What's included</p>
            <h2 class="section-title">Every ${esc(cat.name.toLowerCase())} job we take on.</h2>
          </div>
          ${checklist(cat)}
          ${whyStrip(site)}
          ${relatedChips(cat)}
        </div>
      </section>`,
    "html.formServiceOptions": formOptions(site, cat.formLabel || cat.family.name),
    "page.seoTitle": esc(`${cat.name} in ${site.brand.city} & the GTA | ${site.brand.name}`),
    "page.seoDescription": esc(`${cat.intro} Free itemized quotes across ${site.brand.region}. Call ${site.brand.phone}.`),
    "page.canonical": esc(`${site.seo.url}/services/${cat.slug}/`),
  };
  return renderPage(template, site, { ...opts, extraPartials });
}

export function renderServicesHub(template, site, opts = {}) {
  const extraPartials = {
    "html.pageJsonLd": "",
    "html.pageCrumb": crumb([{ label: "Home", href: "/" }, { label: "Services" }]),
    "html.pageEyebrow": "Everything we do",
    "html.pageTitle": "Two crafts. One careful crew.",
    "html.pageIntro":
      "Home renovations inside, exterior restoration outside — pick a service to see exactly what's included, or just tell us about the job and we'll sort it out.",
    "html.pageBody": `
      <section class="inc inc--hub">
        <div class="container">
          <div class="services__dir">${categoryIndex()}</div>
        </div>
      </section>`,
    "page.seoTitle": esc(`Services | ${site.brand.name} — Renovations & Exterior Restoration in ${site.brand.city}`),
    "page.seoDescription": esc(`Every ${site.brand.name} service: interior painting, flooring, kitchens & baths, decks, fences, landscaping, hardscaping, pressure washing and more across ${site.brand.region}.`),
    "page.canonical": esc(`${site.seo.url}/services/`),
  };
  return renderPage(template, site, { ...opts, extraPartials });
}

export const allCategorySlugs = () => CATEGORIES.map((c) => c.slug);
