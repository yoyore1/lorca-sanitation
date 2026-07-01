// ============================================================================
//  SINGLE SOURCE OF TRUTH — edit this file to make the site yours.
//  Client: Lorca Restoration (GTA). Real business details pulled from
//  lorcasanitation.net; images are template placeholders until real photos
//  arrive. Lines marked CONFIRM are placeholders the owner should verify.
// ============================================================================

export const SITE = {
  brand: {
    name: "Lorca Restoration",
    shortName: "Lorca",
    legalName: "Lorca Restoration",
    tagline: "Home renovations & exterior restoration, done right.",
    // Contact ----------------------------------------------------------------
    phone: "(647) 667-8279",
    phoneHref: "+16476678279",
    email: "lorcasanitation@gmail.com",
    // Location & coverage ----------------------------------------------------
    city: "Toronto",
    state: "ON",
    region: "the GTA & surrounding areas",
    hours: "Mon–Sat · 7am–7pm",            // CONFIRM
    // Trust ------------------------------------------------------------------
    foundedYear: 2024,
    license: "Fully insured",              // CONFIRM (licensing claim)
    ownerName: "Lane & Colin",
  },

  // Headline proof numbers — CONFIRM all (placeholders for a 2-yr business) ---
  stats: {
    yearsInBusiness: 2,
    homesCleaned: 250,                     // CONFIRM
    rating: 5.0,                           // CONFIRM
    reviewCount: 40,                       // CONFIRM
    responseHours: 24,
    guaranteeDays: 30,                     // CONFIRM
  },

  // The full service offering lives in src/services-catalog.js —
  // two families (Home Renovations, Exterior Restoration) → 23 categories,
  // each rendered as its own page at /services/<slug>/.

  // 4-step process — adapted from Lorca's real "How It Works" page -----------
  process: [
    { step: "01", title: "Request a quote", text: "Call, text, or email us with your location and what needs doing — we'll give a clear, itemized price with no hidden fees." },
    { step: "02", title: "Schedule your work", text: "Pick a time that works for you. We offer flexible scheduling, including early-morning and off-peak hours." },
    { step: "03", title: "We do it right", text: "Our crew arrives fully equipped, protects your home and property while we work, and keeps the site clean end to end." },
    { step: "04", title: "Final walkthrough", text: "We inspect every detail with you to make sure it meets our standard. Ongoing maintenance plans available too." },
  ],

  // Recent-work gallery (alternating rows). img maps to /assets/img/<img>.jpg
  gallery: [
    { img: "driveway",   surface: "Concrete driveway",   area: "Toronto",      time: "Cleaned in one afternoon", quote: "Years of grime gone. I genuinely gasped." },
    { img: "patio",      surface: "Interlock patio",     area: "Mississauga",  time: "Single visit",             quote: "Weeds and buildup in the joints — completely gone. Looks new again." },
    { img: "house-wash", surface: "Vinyl siding",        area: "Oakville",     time: "Single visit",             quote: "Quote came fast, price didn't change, results are unreal." },
    { img: "commercial", surface: "Storefront exterior", area: "Hamilton",     time: "Off-hours clean",          quote: "Our entrance looks sharp every morning now. Customers notice." },
  ],

  // Before / After comparison tiles (the signature slider) ------------------
  // `after` = the clean photo, `before` = the matching dirty photo. When
  // `before` is omitted, the slider fakes it with a CSS grime filter.
  beforeAfter: [
    { id: "driveway",   label: "Driveway",   after: "driveway-after", before: "driveway-before" },
    { id: "patio",      label: "Patio",      after: "patio",      before: "patio-before" },
    { id: "house",      label: "Siding",     after: "house-wash", before: "house-wash-before" },
    { id: "commercial", label: "Storefront", after: "commercial", before: "commercial-before" },
  ],

  // Reviews — CONFIRM/replace with real reviews (placeholders) ---------------
  testimonials: [
    { name: "Sarah M.", area: "Toronto",     rating: 5, service: "Driveway",        quote: "I genuinely gasped when they finished the driveway. Years of grime gone in an afternoon. Polite, on time, and left everything spotless." },
    { name: "David R.", area: "Mississauga", rating: 5, service: "Patio & Interlock", quote: "They got moss and weeds out of my paver joints I'd given up on. Looks better than the day it was installed." },
    { name: "Priya K.", area: "Oakville",    rating: 5, service: "Siding & Soffit",  quote: "Quote came fast, price didn't change, and the results are unreal. Three neighbours have already asked for their number." },
    { name: "Tom B.",   area: "Hamilton",    rating: 5, service: "Storefront",       quote: "They clean our storefront off-hours so we never lose a minute of business. Entrance looks sharp every day." },
  ],

  // Objection-handling FAQ ---------------------------------------------------
  faqs: [
    { q: "How much does a job like mine cost?", a: "It depends on the scope — a paint touch-up prices very differently from a basement build-out or a full interlock patio. Tell us what you need and we'll send a clear, itemized price — no vague ranges, no hidden fees, and no surprises on the day." },
    { q: "Is the quote really free?", a: "Completely. No fee, no obligation, no high-pressure pitch. We look at the job, send a fixed price, and you decide. That's it." },
    { q: "Do you really do both renovations and exterior work?", a: "Yes — that's the whole point of Lorca. One insured, careful crew for interior painting, flooring, kitchens and baths, plus decks, fences, landscaping, hardscaping and pressure washing. One number to call, one standard of work." },
    { q: "Are you insured?", a: "Yes — Lorca Restoration is fully insured. We're happy to provide proof of insurance before we step on your property." },
    { q: "Do I need to be home while you work?", a: "Not necessarily. For exterior work we just need access and a water source; for interior work we'll agree on access up front. Many customers are at work while we're on site — early-morning and off-peak times available too." },
    { q: "What if I'm not happy with the result?", a: "Then we're not done. If anything doesn't meet our standard, we'll come back and make it right. You only pay when you're happy with the work." },
  ],

  // Where you work — real Lorca service-area list (great for local SEO) ------
  serviceAreas: [
    "Toronto", "North York", "Scarborough", "Etobicoke",
    "Mississauga", "Brampton/Caledon", "Vaughan", "Markham",
    "Richmond Hill", "Newmarket", "Pickering", "Ajax",
    "Oakville", "Burlington", "Hamilton", "Halton/Milton",
    "Georgetown", "Acton", "Bolton", "Guelph", "Cambridge",
  ],

  // The services dropdown in the estimate form — the 10 headline categories --
  formServices: [
    "Home Renovations", "Interior Renovations", "Bathroom & Kitchen Renovations",
    "Exterior Restoration", "Pressure Washing", "Decks & Fences",
    "Landscaping", "Hardscaping", "Property Maintenance", "Commercial Services",
    "Something else",
  ],

  // SEO ---------------------------------------------------------------------
  seo: {
    title: "Lorca Restoration | Home Renovations & Exterior Restoration in the GTA",
    description:
      "One careful crew for your whole property: interior painting, flooring, kitchens & baths, drywall and carpentry — plus decks, fences, landscaping, hardscaping and pressure washing across the GTA. Free itemized quotes.",
    url: "https://www.lorcasanitation.net",
  },
};

export default SITE;
