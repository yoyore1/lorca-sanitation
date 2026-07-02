// ============================================================================
//  SINGLE SOURCE OF TRUTH — edit this file to make the site yours.
//  Client: Lorca Restoration & Contracting (GTA). Real business details pulled from
//  lorcasanitation.net; images are template placeholders until real photos
//  arrive. Lines marked CONFIRM are placeholders the owner should verify.
// ============================================================================

export const SITE = {
  brand: {
    name: "Lorca Restoration & Contracting",
    shortName: "Lorca",
    legalName: "Lorca Restoration & Contracting",
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

  // Headline proof numbers ----------------------------------------------------
  stats: {
    yearsInBusiness: 2,
    homesCleaned: 250,                     // CONFIRM
    rating: 5.0,                           // REAL — Google (5.0★, 10 reviews)
    reviewCount: 10,                       // REAL — Google
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

  // Recent-projects gallery (alternating rows). img maps to /assets/img/<img>.jpg
  // Renovation-forward. Slugs prefixed `project-` are placeholders until real
  // photos arrive (they show the branded fallback panel meanwhile).
  gallery: [
    { img: "project-kitchen",  surface: "Kitchen renovation",  area: "Toronto",     time: "Full remodel",     quote: "New cabinets, quartz counters and a full tile backsplash." },
    { img: "project-bathroom", surface: "Bathroom renovation", area: "Mississauga", time: "Gut & rebuild",    quote: "Walk-in tile shower, new vanity, waterproofed and finished bright." },
    { img: "painting-after",   surface: "Interior repaint",    area: "Oakville",    time: "Whole main floor", quote: "Walls, ceilings and trim refreshed to a clean, even finish." },
    { img: "deck-after",       surface: "Deck build & stain",  area: "Burlington",  time: "Built to last",    quote: "New boards, railings and a rich sealed stain, ready for summer." },
  ],

  // Before / After comparison tiles (the signature slider) ------------------
  // RENOVATION-ONLY now (owner is moving away from power washing). Each tile
  // needs a REAL matched pair of images to work — do NOT add placeholder-only
  // tiles (the slider would show two blank panels). Add kitchen/bath/flooring
  // tiles here once real before+after photos exist. `after` = finished photo,
  // `before` = the matching earlier photo.
  beforeAfter: [
    { id: "painting", label: "Interior Paint", after: "painting-after", before: "painting-before" },
    { id: "deck",     label: "Deck Build",     after: "deck-after",     before: "deck-before" },
  ],

  // Reviews — CONFIRM/replace with real reviews (placeholders) ---------------
  // REAL reviews, transcribed from Lorca's Google Business Profile (5.0★, 10
  // reviews). `meta` is the reviewer's own Google review count — real trust
  // signal, used instead of a guessed city since Google doesn't expose one.
  testimonials: [
    { name: "Roberta Heino",   meta: "5 reviews on Google",  rating: 5, service: "Patio, Walkway & Driveway", quote: "I was so pleased by the service provided by Lorca Sanitation. They power washed my patio, walkway and driveway which was full of weeds and debris from the winter. The team of young men was professional and timely and the price was well worth it! I will definitely use them again in future." },
    { name: "Brent Ambrose",   meta: "1 review on Google",   rating: 5, service: "House Soft Wash",           quote: "Had Lorca Sanitation soft wash my house and it came out way better than I expected. The siding looks better than I've ever seen it. Showed up on time and took care of business. Didn't miss a spot. We'll be seeing ya next year!" },
    { name: "Ethan Fitzgerald", meta: "9 reviews on Google", rating: 5, service: "Backyard & Walkway",        quote: "These fellas helped me out a great deal — I was in the process of selling my house and they came and cleaned the backyard and my walkway and made my house look real nice for the realtor photos." },
    { name: "CB 49",           meta: "10 reviews on Google", rating: 5, service: "Patio & Interlock",         quote: "Lorca Sanitation did a great job on our patio spring cleaning. They completed an interlock restoration leaving it looking brand new. I would highly recommend." },
    { name: "Tyler O'Reilly",  meta: "1 review on Google",   rating: 5, service: null, quote: "They were very professional. Got their work done in a timely manner and left my place looking brand new again. I'll be bringing them back again next year. That's for sure!" },
    { name: "Ava Dorie",       meta: "1 review on Google",   rating: 5, service: "Patio", quote: "Did a very good job helping clean my mom's patio for the summer season, would recommend." },
    { name: "Hiam Santo",      meta: "1 review on Google",   rating: 5, service: null, quote: "Great customer service. The owners were friendly and handled everything smoothly :))" },
    { name: "Naomi Lawrence",  meta: "6 reviews on Google",  rating: 5, service: null, quote: "Great service! Would 100% recommend." },
    { name: "John Mulhall",    meta: "3 reviews on Google",  rating: 5, service: null, quote: "Quality and timely service!" },
    { name: "Arielle Elise",   meta: "2 reviews on Google",  rating: 5, service: null, quote: "Great service, would recommend!!" },
  ],

  // Objection-handling FAQ ---------------------------------------------------
  faqs: [
    { q: "How much does a job like mine cost?", a: "It depends on the scope — a paint touch-up prices very differently from a basement build-out or a full interlock patio. Tell us what you need and we'll send a clear, itemized price — no vague ranges, no hidden fees, and no surprises on the day." },
    { q: "Is the quote really free?", a: "Completely. No fee, no obligation, no high-pressure pitch. We look at the job, send a fixed price, and you decide. That's it." },
    { q: "Do you really do both renovations and exterior work?", a: "Yes — that's the whole point of Lorca. One insured, careful crew for interior painting, flooring, kitchens and baths, plus decks, fences, landscaping, hardscaping and pressure washing. One number to call, one standard of work." },
    { q: "Are you insured?", a: "Yes — Lorca Restoration & Contracting is fully insured. We're happy to provide proof of insurance before we step on your property." },
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
    title: "Lorca Restoration & Contracting | Home Renovations & Exterior Restoration in the GTA",
    description:
      "One careful crew for your whole property: interior painting, flooring, kitchens & baths, drywall and carpentry — plus decks, fences, landscaping, hardscaping and pressure washing across the GTA. Free itemized quotes.",
    url: "https://www.lorcasanitation.net",
  },
};

export default SITE;
