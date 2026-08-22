/**
 * ---------------------------------------------------------------------------
 * SINGLE SOURCE OF TRUTH FOR ALL SITE COPY
 * ---------------------------------------------------------------------------
 * Every headline, paragraph, product, number and contact detail on the site is
 * defined here so the marketing content can be updated without touching any
 * component code.
 *
 * NOTE: the specifics below (founding year, certifications, headcount, product
 * lines, addresses, phone numbers) are PLACEHOLDERS written to be realistic for
 * an industrial manufacturer. Replace them with Hamprigo's real details before
 * the site goes live.
 * ---------------------------------------------------------------------------
 */

export const company = {
  name: "Hamprigo Industries",
  shortName: "Hamprigo",
  legalName: "Hamprigo Industries Pvt. Ltd.",
  tagline: "Precision manufacturing, built to hold tolerance.",
  description:
    "Hamprigo Industries is a precision engineering and contract manufacturing partner serving the automotive, energy, agriculture and infrastructure sectors.",
  foundedYear: 1998,
  url: "https://www.hamprigoindustries.com",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products & Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const contact = {
  email: "enquiries@hamprigoindustries.com",
  salesEmail: "sales@hamprigoindustries.com",
  careersEmail: "careers@hamprigoindustries.com",
  phone: "+91 22 4000 1200",
  phoneHref: "+912240001200",
  hours: "Monday to Saturday, 9:00 – 18:00 IST",
  headOffice: {
    label: "Head Office",
    lines: ["Plot 42, MIDC Industrial Estate", "Andheri East, Mumbai 400093", "Maharashtra, India"],
  },
  plants: [
    {
      label: "Unit I — Machining & Assembly",
      lines: ["Survey 118/2, Chakan Industrial Area", "Pune 410501, Maharashtra"],
      detail: "72,000 sq ft · CNC machining, sub-assembly, inspection",
    },
    {
      label: "Unit II — Fabrication & Finishing",
      lines: ["Plot C-9, GIDC Estate", "Vatva, Ahmedabad 382445, Gujarat"],
      detail: "48,000 sq ft · Sheet metal, welding, surface treatment",
    },
  ],
} as const;

/** Headline numbers used on the home and about pages. */
export const stats = [
  { value: "25+", label: "Years in operation", detail: `Manufacturing since ${company.foundedYear}` },
  { value: "2", label: "Production facilities", detail: "120,000 sq ft combined" },
  { value: "180+", label: "People on the floor", detail: "Engineers, machinists, inspectors" },
  { value: "±0.01mm", label: "Held tolerance", detail: "On critical machined features" },
] as const;

export const heroHighlights = [
  "ISO 9001:2015 certified quality system",
  "Prototype to 100,000+ unit production runs",
  "In-house tooling, machining and finishing",
] as const;

/** Core capability pillars — shown on the home page and expanded on /products. */
export const capabilities = [
  {
    slug: "cnc-machining",
    icon: "gear",
    title: "CNC Machining",
    summary:
      "3-, 4- and 5-axis milling and turning for close-tolerance components in steel, aluminium, stainless and engineering plastics.",
    points: [
      "Multi-axis milling and live-tool turning centres",
      "Tolerances held to ±0.01mm on critical features",
      "First-article inspection on every new part number",
      "Batch sizes from single prototypes to 100,000+ units",
    ],
    materials: ["Mild & alloy steel", "Aluminium 6061 / 7075", "Stainless 304 / 316", "Brass & bronze", "Engineering plastics"],
  },
  {
    slug: "sheet-metal-fabrication",
    icon: "plate",
    title: "Sheet Metal Fabrication",
    summary:
      "Laser cutting, CNC bending, welding and forming for enclosures, brackets, frames and structural weldments.",
    points: [
      "Fibre laser cutting up to 16mm mild steel",
      "CNC press brakes with offline programming",
      "MIG, TIG and spot welding with certified welders",
      "Weld fixtures designed and built in-house",
    ],
    materials: ["Mild steel", "Galvanised & pre-coated steel", "Stainless 304 / 316", "Aluminium"],
  },
  {
    slug: "tooling-and-dies",
    icon: "anvil",
    title: "Tooling & Die Making",
    summary:
      "Press tools, jigs, fixtures and gauges designed, cut and proved out in our own tool room before they reach the line.",
    points: [
      "Progressive and compound press tools",
      "Check gauges and inspection fixtures",
      "Tool trials and process validation",
      "Preventive tool maintenance programmes",
    ],
    materials: ["Tool steel D2 / H13", "EN-series steels", "Carbide inserts"],
  },
  {
    slug: "surface-treatment",
    icon: "layers",
    title: "Surface Treatment & Finishing",
    summary:
      "Powder coating, plating, passivation and painting managed in-house or through a qualified, audited supplier base.",
    points: [
      "Seven-tank pre-treatment and powder coating line",
      "Zinc, nickel and phosphate coatings",
      "Salt-spray tested to customer specification",
      "Colour and gloss matching to brand standards",
    ],
    materials: ["Powder coat", "Zinc plating", "Phosphating", "Anodising"],
  },
  {
    slug: "assembly-and-integration",
    icon: "modules",
    title: "Assembly & Integration",
    summary:
      "Sub-assembly and build-to-print kitting, including torque-controlled fastening, leak testing and functional checks.",
    points: [
      "Torque-controlled and error-proofed workstations",
      "Leak, pressure and functional end-of-line testing",
      "Kitting, serialisation and traceability",
      "Packing to customer line-side requirements",
    ],
    materials: [],
  },
  {
    slug: "quality-and-metrology",
    icon: "target",
    title: "Quality & Metrology",
    summary:
      "A climate-controlled metrology room and documented control plans keep every shipment measurable and traceable.",
    points: [
      "CMM, height gauge and surface roughness testing",
      "PPAP, control plans and PFMEA documentation",
      "Full material and heat-number traceability",
      "SPC monitoring on critical characteristics",
    ],
    materials: [],
  },
] as const;

/** Product families — the catalogue side of the business. */
export const productLines = [
  {
    slug: "precision-machined-components",
    name: "Precision Machined Components",
    blurb:
      "Shafts, housings, flanges, manifolds and close-tolerance turned parts produced to drawing and supplied inspection-ready.",
    specs: [
      { label: "Size range", value: "Ø5mm – Ø450mm" },
      { label: "Tolerance", value: "Down to ±0.01mm" },
      { label: "Surface finish", value: "Ra 0.4 – 3.2 µm" },
      { label: "Typical volume", value: "50 – 100,000 pcs / yr" },
    ],
  },
  {
    slug: "fabricated-structures",
    name: "Fabricated Structures & Enclosures",
    blurb:
      "Welded frames, skids, control-panel enclosures and machine guarding, finished and delivered ready to install.",
    specs: [
      { label: "Material thickness", value: "0.8mm – 16mm" },
      { label: "Max sheet size", value: "3000 × 1500mm" },
      { label: "Finish", value: "Powder coat, plating, paint" },
      { label: "Typical volume", value: "10 – 5,000 pcs / yr" },
    ],
  },
  {
    slug: "press-tools-and-fixtures",
    name: "Press Tools, Jigs & Fixtures",
    blurb:
      "Purpose-built tooling designed around your part and proved out on our presses before it is handed over.",
    specs: [
      { label: "Tool type", value: "Progressive, compound, blanking" },
      { label: "Lead time", value: "6 – 12 weeks typical" },
      { label: "Validation", value: "Trial run + dimensional report" },
      { label: "Support", value: "Refurbishment & spares" },
    ],
  },
  {
    slug: "contract-assemblies",
    name: "Build-to-Print Assemblies",
    blurb:
      "Multi-part assemblies built, tested and packed to your specification, with full traceability on every unit.",
    specs: [
      { label: "Scope", value: "Sub-assembly to finished unit" },
      { label: "Testing", value: "Leak, pressure, functional" },
      { label: "Traceability", value: "Serialised, batch-linked" },
      { label: "Logistics", value: "Line-side or kitted packing" },
    ],
  },
] as const;

/** Sectors served. */
export const industries = [
  { name: "Automotive & Mobility", detail: "Tier-2 supply of machined and fabricated components to Tier-1 assemblers." },
  { name: "Energy & Power", detail: "Enclosures, structural weldments and machined parts for generation and distribution." },
  { name: "Agriculture Equipment", detail: "Wear-resistant fabricated assemblies and drivetrain components." },
  { name: "Infrastructure & Rail", detail: "Heavy fabrication, brackets and safety-critical machined hardware." },
  { name: "Industrial Automation", detail: "Machine frames, guarding, control enclosures and precision sub-assemblies." },
  { name: "Water & Process", detail: "Stainless components, manifolds and pressure-tested assemblies." },
] as const;

/** How an engagement runs, start to finish. */
export const process = [
  {
    step: "01",
    title: "Enquiry & feasibility",
    detail:
      "Send drawings or a 3D model. Our engineering team reviews manufacturability, flags cost drivers and confirms what we can hold.",
  },
  {
    step: "02",
    title: "Quotation & planning",
    detail:
      "You get a costed quotation with a process route, tooling requirement and lead time — typically within five working days.",
  },
  {
    step: "03",
    title: "Tooling & first article",
    detail:
      "Tools and fixtures are built in our own tool room. A first-article sample and dimensional report go to you for sign-off.",
  },
  {
    step: "04",
    title: "Production & control",
    detail:
      "Approved parts move to series production under a documented control plan, with SPC on critical characteristics.",
  },
  {
    step: "05",
    title: "Inspection & dispatch",
    detail:
      "Every batch ships with an inspection report and full material traceability, packed to your line-side requirement.",
  },
] as const;

/** What the company says it stands for. */
export const values = [
  {
    title: "Measure, don't assume",
    detail:
      "Nothing leaves the floor on the strength of an opinion. If a characteristic matters, it is measured, recorded and traceable.",
  },
  {
    title: "Own the whole route",
    detail:
      "Tooling, machining, fabrication and finishing sit under one roof so accountability never gets handed off at a gate.",
  },
  {
    title: "Say the hard thing early",
    detail:
      "If a drawing carries a tolerance that will cost you money for no functional gain, we will tell you at quotation, not at launch.",
  },
  {
    title: "Build people, not just parts",
    detail:
      "Machinists and inspectors are trained and certified in-house. Most of our supervisors started on the shop floor.",
  },
] as const;

/** Company milestones for the About page. */
export const timeline = [
  { year: "1998", title: "Founded in Mumbai", detail: "Started as a four-machine job shop serving local Tier-1 suppliers." },
  { year: "2005", title: "ISO 9001 certification", detail: "Formalised the quality system and moved into series production contracts." },
  { year: "2011", title: "Chakan facility opens", detail: "Unit I brings CNC machining and assembly under a purpose-built roof." },
  { year: "2016", title: "In-house tool room", detail: "Press tool and fixture design brought in-house, cutting development lead times." },
  { year: "2020", title: "Ahmedabad fabrication unit", detail: "Unit II adds laser cutting, forming and a powder coating line." },
  { year: "2024", title: "Metrology lab commissioned", detail: "Climate-controlled inspection room with CMM and SPC reporting." },
] as const;

export const certifications = [
  { name: "ISO 9001:2015", detail: "Quality management system" },
  { name: "ISO 14001:2015", detail: "Environmental management" },
  { name: "ISO 45001:2018", detail: "Occupational health & safety" },
  { name: "IATF 16949", detail: "Automotive quality (Unit I)" },
] as const;

export const leadership = [
  {
    name: "R. Hampri",
    role: "Managing Director",
    bio: "Founded the business in 1998 after fifteen years in tool room and production engineering roles.",
    initials: "RH",
  },
  {
    name: "S. Deshmukh",
    role: "Director — Operations",
    bio: "Runs both plants day to day, with a background in lean manufacturing and automotive Tier-1 supply.",
    initials: "SD",
  },
  {
    name: "A. Nair",
    role: "Head of Quality",
    bio: "Owns the quality system, customer audits and the metrology lab. Certified lead auditor for ISO 9001.",
    initials: "AN",
  },
  {
    name: "V. Patel",
    role: "Head of Engineering",
    bio: "Leads design-for-manufacture reviews, tooling design and new-part introduction across both units.",
    initials: "VP",
  },
] as const;

/** Enquiry form dropdown options. */
export const enquiryTypes = [
  "Request a quotation",
  "Capability / capacity question",
  "Tooling or development project",
  "Supplier registration",
  "Careers",
  "Something else",
] as const;
