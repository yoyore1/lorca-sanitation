// ============================================================================
//  SINGLE SOURCE OF TRUTH — edit this file to make the site yours.
//  Client: Lorca Sanitation (GTA). Real business details pulled from
//  lorcasanitation.net; images are template placeholders until real photos
//  arrive. Lines marked CONFIRM are placeholders the owner should verify.
// ============================================================================

export const SITE = {
  brand: {
    name: "Lorca Sanitation",
    shortName: "Lorca",
    legalName: "Lorca Sanitation",
    tagline: "Exterior cleaning & pressure washing, done right.",
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

  // The 6 services — real Lorca offerings. `img` maps to /assets/img/<img>.jpg
  // Lorca publishes no prices, so priceFrom is null on all (nothing invented).
  services: [
    {
      id: "driveway", img: "driveway", name: "Driveways & Concrete",
      benefit: "Removes oil, algae, stains and slippery buildup from driveways and concrete — restoring crisp, even, like-new flatwork.",
      priceFrom: null,
    },
    {
      id: "house", img: "house-wash", name: "Siding & Soffit Cleaning",
      benefit: "Gently strips dirt, algae and cobwebs from siding and soffits — without forcing water behind your cladding.",
      priceFrom: null,
    },
    {
      id: "patio", img: "patio", name: "Patios, Walkways & Interlocking",
      benefit: "Clears weed-choked joints, slippery residue and ground-in grime from patios, walkways and interlock.",
      priceFrom: null,
    },
    {
      id: "porch", img: "deck", name: "Porches & Entryways",
      benefit: "Washes away built-up dirt and grime on porches, steps and entryways for a clean, welcoming first impression.",
      priceFrom: null,
    },
    {
      id: "commercial", img: "commercial", name: "Storefronts & Commercial",
      benefit: "Scheduled, off-hours exterior cleaning for storefronts and buildings that keeps customers walking in.",
      priceFrom: null,
    },
    {
      id: "specialty", img: "roof", name: "Dumpster & Specialty Sanitizing",
      benefit: "Heated deep-cleaning for dumpster areas, pads and trash zones — removing odors, grease and bacteria, not just dirt.",
      priceFrom: null,
    },
  ],

  // 4-step process — adapted from Lorca's real "How It Works" page -----------
  process: [
    { step: "01", title: "Request a quote", text: "Call, text, or email us with your location and cleaning needs — we'll give a clear price with no hidden fees." },
    { step: "02", title: "Schedule your service", text: "Pick a time that works for you. We offer flexible scheduling, including early-morning and off-peak hours." },
    { step: "03", title: "On-site cleaning", text: "Our team arrives fully equipped and uses controlled, heated pressure to clean thoroughly while protecting your surfaces." },
    { step: "04", title: "Final walkthrough", text: "We inspect every area to make sure it meets our standard. Ongoing plans available — monthly, bi-monthly or quarterly." },
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
    { q: "How much does pressure washing cost?", a: "It depends on the surface, size, and how much buildup we're removing. Tell us about your property and we'll send a clear, itemized price — no vague ranges, no hidden fees, and no surprises on the day." },
    { q: "Is the quote really free?", a: "Completely. No fee, no obligation, no high-pressure pitch. We assess your property, send a fixed price, and you decide. That's it." },
    { q: "Will pressure washing damage my siding or surfaces?", a: "Not with us. We use controlled, heated pressure and the right techniques for each surface — delicate areas like siding and soffits are cleaned gently so we never force water where it doesn't belong." },
    { q: "Are you insured?", a: "Yes — Lorca Sanitation is fully insured. We're happy to provide proof of insurance before we step on your property." },
    { q: "Do I need to be home?", a: "Not necessarily. As long as we have access to the areas and an outdoor water source, many customers are at work while we clean. We can arrange early-morning or off-peak times too." },
    { q: "What if I'm not happy with the result?", a: "Then we're not done. If a spot doesn't meet our standard, we'll come back and make it right. You only pay when you're happy with the clean." },
  ],

  // Where you work — real Lorca service-area list (great for local SEO) ------
  serviceAreas: [
    "Toronto", "North York", "Scarborough", "Etobicoke",
    "Mississauga", "Brampton/Caledon", "Vaughan", "Markham",
    "Richmond Hill", "Newmarket", "Pickering", "Ajax",
    "Oakville", "Burlington", "Hamilton", "Halton/Milton",
    "Georgetown", "Acton", "Bolton", "Guelph", "Cambridge",
  ],

  // The services dropdown in the estimate form ------------------------------
  formServices: [
    "Driveways & Concrete", "Patios, Walkways & Interlocking", "Siding & Soffit",
    "Porches & Entryways", "Storefronts & Commercial", "Dumpster & Pad Sanitizing",
    "Brick Cleaning", "Sanitizing & Odor Control", "Something else",
  ],

  // SEO ---------------------------------------------------------------------
  seo: {
    title: "Lorca Sanitation | Pressure Washing & Exterior Cleaning in the GTA",
    description:
      "Professional pressure washing & exterior cleaning for homes and businesses across the GTA. Driveways, siding, patios, storefronts & dumpster sanitizing. Free, no-obligation quotes.",
    url: "https://www.lorcasanitation.net",
  },
};

export default SITE;
