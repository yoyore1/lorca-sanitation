// ============================================================================
//  SERVICES CATALOG — the full Lorca Restoration offering.
//  Two families → categories → individual services. Each category becomes a
//  page at /services/<slug>/. Names & service lists supplied by the owner.
// ============================================================================

export const FAMILIES = [
  {
    id: "home-renovations",
    name: "Home Renovations",
    kicker: "Interior work, finished properly",
    blurb:
      "Painting, flooring, kitchens, baths and everything between — interior work measured twice, finished cleanly, and priced to the line item.",
    categories: [
      {
        slug: "interior-painting",
        formLabel: "Interior Renovations",
        name: "Interior Painting",
        kicker: "Crisp lines, clean rooms, zero shortcuts",
        intro:
          "Walls, ceilings, trim and everything between — prepped properly, cut in by hand, and finished in low-splatter coats that dry to a flawless, even sheen.",
        services: [
          "Wall painting", "Ceiling painting", "Trim painting", "Door painting",
          "Cabinet painting", "Staircase painting", "Garage painting",
          "Drywall repair and painting", "Accent walls", "Paint touch-ups",
        ],
      },
      {
        slug: "flooring",
        formLabel: "Interior Renovations",
        name: "Flooring",
        kicker: "From subfloor to final board",
        intro:
          "Vinyl plank, laminate, hardwood and tile — installed flat, tight and square, with the subfloor fixed first so your new floor stays quiet for years.",
        services: [
          "Vinyl plank flooring", "Laminate flooring", "Hardwood installation",
          "Engineered hardwood", "Tile flooring", "Baseboard installation",
          "Quarter round installation", "Floor removal", "Subfloor repairs",
          "Stair flooring",
        ],
      },
      {
        slug: "drywall",
        formLabel: "Interior Renovations",
        name: "Drywall",
        kicker: "Walls you'll never know were touched",
        intro:
          "Installation, repair and finishing that disappears — taped, mudded, sanded and texture-matched so the fix blends into the wall like it was never there.",
        services: [
          "Drywall installation", "Drywall repair", "Drywall patching",
          "Ceiling repairs", "Water damage repairs", "Taping and mudding",
          "Sanding", "Texture matching",
        ],
      },
      {
        slug: "trim-carpentry",
        formLabel: "Interior Renovations",
        name: "Trim & Finish Carpentry",
        kicker: "The details that make a room",
        intro:
          "Baseboards, crown, casing and custom millwork — mitred tight, nailed clean and caulked invisible. It's the last 5% of a room that does 50% of the impression.",
        services: [
          "Baseboards", "Crown moulding", "Window trim", "Door casing",
          "Interior doors", "Barn doors", "Wainscoting", "Accent walls",
          "Floating shelves", "Custom trim",
        ],
      },
      {
        slug: "kitchen-renovations",
        formLabel: "Bathroom & Kitchen Renovations",
        name: "Kitchen Renovations",
        kicker: "The heart of the house, upgraded",
        intro:
          "From cabinet refacing to full tear-out — cabinets, counters, backsplashes and fixtures installed with the precision a kitchen demands, on a schedule you can live with.",
        services: [
          "Cabinet installation", "Cabinet refacing", "Cabinet hardware replacement",
          "Countertop installation", "Tile backsplashes", "Sink installation",
          "Faucet installation", "Pantry shelving", "Kitchen demolition",
          "Kitchen upgrades",
        ],
      },
      {
        slug: "bathroom-renovations",
        formLabel: "Bathroom & Kitchen Renovations",
        name: "Bathroom Renovations",
        kicker: "Small rooms, big transformations",
        intro:
          "Vanities, tile, tubs and showers — renovated watertight and finished bright, whether it's a one-day refresh or a full gut-and-rebuild.",
        services: [
          "Vanity installation", "Mirror installation", "Toilet replacement",
          "Flooring", "Shower renovations", "Tub replacement", "Tile installation",
          "Exhaust fan replacement", "Bathroom painting", "Bathroom demolition",
        ],
      },
      {
        slug: "doors-windows",
        name: "Doors & Windows",
        kicker: "Smooth, sealed and square",
        intro:
          "Interior and exterior doors, patio sliders and window replacements — hung plumb, sealed against drafts, and finished with hardware that works like it should.",
        services: [
          "Interior door installation", "Exterior door installation",
          "Sliding patio doors", "Door hardware", "Weatherstripping",
          "Window replacement", "Window trim", "Screen replacement",
        ],
      },
      {
        slug: "basement-renovations",
        name: "Basement Renovations",
        kicker: "Your square footage, doubled",
        intro:
          "Framing, drywall, flooring and finishing that turns unused concrete into offices, gyms, theatres and guest suites — dry, warm and up to standard.",
        services: [
          "Basement finishing", "Framing", "Drywall", "Flooring",
          "Storage rooms", "Home offices", "Entertainment rooms",
        ],
      },
      {
        slug: "general-carpentry",
        name: "General Carpentry",
        kicker: "Built, mounted and repaired right",
        intro:
          "Framing, shelving, closets, feature walls and the hundred small builds a home needs — done by carpenters who measure twice and clean up after.",
        services: [
          "Framing", "Shelving", "Closet systems", "TV mounting",
          "Feature walls", "Stair railings", "Wood repairs",
          "Minor structural repairs",
        ],
      },
      {
        slug: "home-improvements",
        name: "Home Improvements",
        kicker: "The upgrades that make daily life better",
        intro:
          "Light fixtures, ceiling fans, blinds, smart devices and the finishing touches — installed properly the first time, without the weekend of frustration.",
        services: [
          "Light fixture replacement", "Ceiling fan installation",
          "Curtain rod installation", "Blinds installation",
          "Smart home device installation", "Furniture assembly",
          "Caulking", "Weatherproofing",
        ],
      },
      {
        slug: "repairs-maintenance",
        formLabel: "Property Maintenance",
        name: "Repairs & Maintenance",
        kicker: "One call, whole-home coverage",
        intro:
          "Handyman work, rental turnovers, punch lists and seasonal upkeep — a reliable crew on call so small problems never get the chance to become big ones.",
        services: [
          "Handyman services", "Rental property repairs", "Punch lists",
          "Insurance repairs", "General home maintenance", "Seasonal maintenance",
        ],
      },
    ],
  },
  {
    id: "exterior-restoration",
    name: "Exterior Restoration",
    kicker: "Curb appeal, engineered",
    blurb:
      "Pressure washing, decks, fences, landscaping and hardscaping — the outside of your property restored, protected and kept that way season after season.",
    categories: [
      {
        slug: "pressure-washing",
        formLabel: "Pressure Washing",
        name: "Pressure Washing",
        kicker: "Where Lorca started — still our signature",
        intro:
          "Controlled, heated pressure that strips years of grime from driveways, siding, interlock and stone — ruthless on buildup, gentle on every surface.",
        services: [
          "Driveways", "Sidewalks", "Patios", "Interlock", "Pool decks",
          "Decks", "Fences", "House siding", "Brick", "Stone",
          "Retaining walls", "Garbage bin pads", "Commercial pressure washing",
        ],
      },
      {
        slug: "deck-services",
        formLabel: "Decks & Fences",
        name: "Deck Services",
        kicker: "From grey and splintered to weekend-ready",
        intro:
          "Cleaning, sanding, staining, repairs and full builds — we bring tired decks back to life and build new ones that survive Canadian winters.",
        services: [
          "Deck staining", "Deck painting", "Deck sealing", "Deck cleaning",
          "Deck sanding", "Deck restoration", "Deck repairs", "Deck construction",
          "Deck extensions", "Deck demolition",
        ],
      },
      {
        slug: "fence-services",
        formLabel: "Decks & Fences",
        name: "Fence Services",
        kicker: "Straight lines, solid posts",
        intro:
          "Staining, repairs, replacements and new installs — fences that stand straight, gates that swing true, and finishes that hold up to the weather.",
        services: [
          "Fence staining", "Fence painting", "Fence sealing", "Fence repairs",
          "Fence installation", "Fence replacement", "Privacy fence installation",
          "Gate installation", "Gate repairs", "Fence post replacement",
        ],
      },
      {
        slug: "landscaping",
        formLabel: "Landscaping",
        name: "Landscaping",
        kicker: "Gardens and lawns, brought to order",
        intro:
          "Garden beds, sod, mulch, stone and plantings — designed, installed and cleaned up seasonally so your yard looks deliberate, not accidental.",
        services: [
          "Garden bed restoration", "Garden bed design", "Garden edging",
          "Mulch installation", "Decorative stone installation",
          "River rock installation", "Topsoil installation", "Sod installation",
          "Artificial turf", "Planting", "Shrub installation", "Tree planting",
          "Flower bed installation", "Weed barrier installation", "Weed removal",
          "Hedge trimming", "Shrub trimming", "Bush removal",
          "Small tree removal", "Yard grading", "Lawn restoration",
          "Seasonal cleanups",
        ],
      },
      {
        slug: "hardscaping",
        formLabel: "Hardscaping",
        name: "Hardscaping",
        kicker: "Stone that stays where you put it",
        intro:
          "Interlock patios, walkways, retaining walls and fire pits — set on proper base, compacted and jointed so they stay level long after the photos.",
        services: [
          "Interlock patios", "Walkways", "Pathways", "Driveway borders",
          "Retaining walls", "Fire pits", "Stone steps", "Gravel pathways",
          "Decorative boulders", "Paver repairs", "Polymeric sand replacement",
        ],
      },
      {
        slug: "outdoor-structures",
        name: "Outdoor Structures",
        kicker: "Backyard upgrades, assembled right",
        intro:
          "Gazebos, pergolas, sheds and outdoor kitchens — anchored, levelled and built to spec, so your backyard investment doesn't wobble.",
        services: [
          "Gazebo assembly", "Gazebo installation", "Pergola installation",
          "Pavilion installation", "Privacy screens", "Outdoor kitchens",
          "Sheds", "Playsets", "Fence trellises",
        ],
      },
      {
        slug: "drainage",
        name: "Drainage",
        kicker: "Water where it belongs — away",
        intro:
          "French drains, catch basins, downspout extensions and grading fixes that move water away from your foundation before it becomes a basement problem.",
        services: [
          "French drains", "Catch basins", "Downspout extensions", "Swales",
          "Surface drainage improvements", "Drainage repairs",
        ],
      },
      {
        slug: "concrete-masonry",
        name: "Concrete & Masonry",
        kicker: "Repairs that outlast the original",
        intro:
          "Pads, walkways, brick and stone repairs, sealing and repointing — concrete and masonry work that's formed clean, cured right and built to last.",
        services: [
          "Concrete pads", "Walkways", "Concrete repairs", "Concrete sealing",
          "Brick repairs", "Stone repairs", "Mortar repairs",
        ],
      },
      {
        slug: "exterior-home-services",
        formLabel: "Property Maintenance",
        name: "Exterior Home Services",
        kicker: "The maintenance your exterior actually needs",
        intro:
          "Gutters, windows, soft washing, moss removal and driveway sealing — the upkeep that protects your home's envelope and keeps it looking sharp.",
        services: [
          "Gutter cleaning", "Gutter guards", "Roof moss removal",
          "Window cleaning", "Soft washing", "House washing",
          "Garage cleaning", "Driveway sealing",
        ],
      },
      {
        slug: "demolition-removal",
        name: "Demolition & Removal",
        kicker: "Gone by dinner, swept before we leave",
        intro:
          "Sheds, decks, fences, hot tubs, brush and junk — taken down safely, hauled away completely, and the site left broom-clean.",
        services: [
          "Shed demolition", "Deck demolition", "Fence removal",
          "Hot tub removal", "Shrub removal", "Brush removal",
          "Yard waste removal", "Junk removal", "Construction debris removal",
        ],
      },
      {
        slug: "seasonal-services",
        formLabel: "Property Maintenance",
        name: "Seasonal Services",
        kicker: "Every season, handled",
        intro:
          "Spring and fall cleanups, leaf removal, snow and ice management, and holiday lights hung straight — your property kept ready for whatever the calendar brings.",
        services: [
          "Spring cleanups", "Fall cleanups", "Leaf removal", "Snow removal",
          "Ice management", "Christmas light installation and removal",
        ],
      },
      {
        slug: "commercial-services",
        formLabel: "Commercial Services",
        name: "Commercial Services",
        kicker: "Scheduled, insured, invisible to your customers",
        intro:
          "Property maintenance, pressure-washing contracts, graffiti removal and grounds care for condos, retail and commercial sites — on schedule, off-hours, fully documented.",
        services: [
          "Property maintenance", "Condominium maintenance",
          "Retail property maintenance", "Parking lot cleanup",
          "Graffiti removal", "Dumpster pad cleaning",
          "Pressure washing contracts", "Landscape maintenance",
          "Seasonal maintenance", "Exterior building cleaning",
        ],
      },
    ],
  },
];

// Flat list of all categories with a back-reference to their family.
export const CATEGORIES = FAMILIES.flatMap((f) =>
  f.categories.map((c) => ({ ...c, family: { id: f.id, name: f.name } }))
);

export const categoryBySlug = (slug) => CATEGORIES.find((c) => c.slug === slug);

export default FAMILIES;
