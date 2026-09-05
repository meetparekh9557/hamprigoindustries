/**
 * ---------------------------------------------------------------------------
 * SINGLE SOURCE OF TRUTH FOR ALL SITE COPY
 * ---------------------------------------------------------------------------
 * Every headline, paragraph and contact detail on the site is defined here so
 * the copy can be updated without touching component code.
 *
 * House style, agreed with the client:
 *   - No em dashes anywhere. Use full stops, commas or colons instead.
 *   - Bra cups appear only as an APPLICATION of PU foam laminated fabric.
 *     They are never presented as a product or service Hamprigo sells.
 *   - Contact details are exactly as the client supplied them. Do not
 *     substitute a company-domain email; that was considered and declined.
 * ---------------------------------------------------------------------------
 */

export const company = {
  name: "Hamprigo Industries",
  descriptor: "Textile Lamination",
  foundedYear: 1989,
  url: "https://hamprigoindustries.com",
  description:
    "Hamprigo Industries laminates woven, non-woven, knitted fabric and Rexine to PU foam, EVA foam, films and other fabrics, at any width, to customer specification.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/lamination", label: "Lamination" },
  { href: "/seamless-bonded-bras", label: "Seamless Bonded Bras" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const contact = {
  phone: "+91 961 933 7268",
  phoneHref: "+919619337268",
  email: "sahilshah95@live.com",
  addressLines: [
    "A 6/6 50, Jeevan Shanti Sagar, Jeevam Bima Nagar, Borivali West",
    "Suburban, Mumbai 400103",
    "Maharashtra, India",
  ],
} as const;

/** Homepage hero. */
export const hero = {
  headline: "Laminated Fabric Manufacturer",
  subhead:
    "We laminate woven, non-woven, knitted fabric and Rexine to PU foam, EVA foam, films and other fabrics. Everything is bonded to your specification, at any width you need.",
  since: `Laminating fabric since ${company.foundedYear}.`,
  primaryCta: { label: "Request a sample", href: "/contact" },
  secondaryCta: { label: "See what we laminate", href: "/lamination" },
} as const;

/** The four lamination techniques. Order is deliberate. */
/**
 * The four lamination techniques.
 *
 * `short` is the label that runs up the spine of a collapsed panel in the
 * homepage rail. It names the material rather than repeating the title,
 * so the sliver stays scannable and the open card is not saying the same
 * thing twice.
 */
export const services = [
  {
    slug: "pu-foam-laminated-fabric",
    short: "PU Foam",
    title: "PU Foam Laminated Fabric",
    summary:
      "Custom densities and thicknesses, with irreversible bonding and excellent washing fastness.",
    body: [
      "We laminate woven, non-woven, knitted fabric, and Rexine with PU foam in custom densities and thicknesses. Both are specified per order rather than pulled from a fixed range, because they are what decide whether a cup holds its volume, a seat feels right, or a padded panel reads as premium.",
      "Two properties define the bond. It is irreversible, so the foam does not lift or separate at cut edges. And it holds its washing fastness, so the material survives repeated laundering without losing bond, hand, or shape. For lingerie and bra cup applications, the second one is what decides whether a product comes back as a return.",
    ],
    applications:
      "Used in lingerie, bra cups, car seat upholstery, blouse pads, footwear, auditorium seating, and jewelry boxes.",
    cta: "Ask us for a sample in the density and thickness you are considering.",
  },
  {
    slug: "fabric-laminated-with-fabric",
    short: "Fabric on Fabric",
    title: "Fabric Laminated with Fabric",
    summary:
      "Two fabrics bonded into one composite material, for furnishing fabrics and headwear.",
    body: [
      "We bond two fabrics into one composite material, giving furnishing and cap manufacturers performance a single layer cannot deliver: added body, texture, or durability behind the face fabric you want to show.",
      "It is the practical answer when no one fabric gives you both the appearance you need and the structure the product demands.",
    ],
    applications: "Used in furnishing fabrics and cap manufacturing.",
    cta: "Send us both fabrics and we will laminate a sample. If you only have one, we will develop the other.",
  },
  {
    slug: "fabric-laminated-with-films",
    short: "Films",
    title: "Fabric Laminated with Films",
    summary:
      "PVC, TPU, PE and blackout films to make fabric waterproof, stronger, or light-controlling.",
    body: [
      "Laminating fabric with PVC, TPU, PE, or blackout film turns it into a functional material: waterproof, stronger, and light-controlling. This is what makes the difference between a raincoat that leaks and one that doesn't, or a blackout curtain that actually blocks light.",
      "Each film does a different job. TPU stays flexible and keeps a softer handle, which suits garments and mattress protectors. PVC gives a more durable, wipe-clean barrier. PE is the economical moisture barrier. Blackout film controls how much light passes through the fabric.",
    ],
    applications:
      "Used in military tents, raincoats, trolley bags, mattress protectors, and blackout curtains.",
    cta: "Tell us the performance target and the fabric it has to work on, and we will send a laminated sample.",
  },
  {
    slug: "eva-laminated-fabric",
    short: "EVA",
    title: "EVA Laminated Fabric",
    summary:
      "EVA foam in custom colors and thicknesses, for products that must hold their form.",
    body: [
      "EVA lamination adds cushioning and structure that fabric alone cannot provide. That matters for products which need to hold form under repeated impact or pressure, like trolley bags, footwear, and laptop bags.",
      "We laminate EVA to any fabric in custom colors and thicknesses, with thickness selected against the rigidity and cushioning the part needs.",
    ],
    applications: "Used in trolley bags, laptop bags, and footwear.",
    cta: "Ask for a sample in the thickness and color your part calls for.",
  },
] as const;

/**
 * Cross-section layers for each technique, used by the laminate diagram.
 * Weights are relative thicknesses, chosen to read correctly rather than to
 * be dimensionally exact.
 */
export const serviceLayers = {
  "pu-foam-laminated-fabric": [
    { kind: "fabric", label: "Face fabric", weight: 1 },
    { kind: "foam", label: "PU foam", weight: 3 },
  ],
  "fabric-laminated-with-fabric": [
    { kind: "fabric", label: "Face fabric", weight: 1 },
    { kind: "fabric", label: "Backing fabric", weight: 1 },
  ],
  "fabric-laminated-with-films": [
    { kind: "fabric", label: "Base fabric", weight: 3 },
    { kind: "film", label: "Film", weight: 0.5 },
  ],
  "eva-laminated-fabric": [
    { kind: "fabric", label: "Face fabric", weight: 1 },
    { kind: "eva", label: "EVA foam", weight: 2.4 },
  ],
} as const;

/**
 * Capabilities that apply across all four techniques.
 * These are NOT services. The client was explicit that they sit under
 * lamination rather than standing alongside it.
 */
export const capabilities = {
  heading: "How we laminate, whichever technique you need",
  intro: "Two things apply across all four.",
  items: [
    {
      title: "Any width",
      body: "Our machinery runs wider than standard, so any width is possible per your requirement. Panel size and cutting plans are not limited by what a standard laminator can hold.",
    },
    {
      title: "Your fabric or ours",
      body: "Many customers send us their own fabric to laminate. Others ask us to develop, source, or treat it for them. We work either way, and we can supply finished products, so material development through to finished goods sits with one supplier when that is what you need.",
    },
  ],
} as const;

/** Closing block used on the lamination page. */
export const laminationClose = {
  heading: "Start with a sample",
  body: [
    "Tell us the substrate and what the finished material has to do, and we will laminate a sample for you to handle and test. No specification required at this stage.",
    "If your specification is already settled, send it across and we will come back with a construction and a quotation.",
  ],
} as const;

export const bondedBras = {
  title: "Seamless Bonded Bras",
  /** How this reads in the enquiry form's Service field. */
  formLabel: "Seamless Bonded Bras",
  intro:
    "Stitched seams show through fabric, chafe against skin, and add assembly steps. We manufacture seamless, tagless bras using bonding technology instead: no visible seam lines, less production complexity, and a smoother finish your end customer notices.",
  sections: [
    {
      heading: "Why the laminate decides the bra",
      body: [
        "Bonding replaces the mechanical hold of a stitch, so the bond itself carries everything the garment goes through. A bonded edge cannot fray or unravel the way a stitched seam can, but it will only survive laundering if the lamination underneath has genuine washing fastness.",
        "That is why we laminate our own material. Our bonding is irreversible, so layers do not separate at edges or under stress, and it holds its washing fastness through repeated laundering. Those two properties are what let a bonded bra keep its shape and its edges wash after wash.",
      ],
    },
    {
      heading: "Material and construction, specified together",
      body: [
        "We can develop and source the face fabric, or laminate the one you supply. Either way the lamination and the finished garment are done here, so the material and the construction are decided together rather than coordinated across separate suppliers. In bonded construction that matters more than in sewn, because the material and the assembly method are not separable decisions.",
      ],
    },
  ],
  close: {
    heading: "Request a sample",
    body: [
      "Tell us the style you are planning and we will put a sample together so you can assess the hand, the edge finish, and how it sits.",
      "If you are working to a settled specification, send it across and we will come back on construction and quantities.",
    ],
  },
} as const;

/**
 * About page. The client reviewed these claims and asked that they be kept
 * as written, including the sustainability statement. Do not trim them.
 */
export const about = {
  title: "About Hamprigo Industries",
  sections: [
    {
      heading: null,
      body: [
        "Founded in 1989, Hamprigo Industries has been a trusted name in the laminated fabric industry for over three decades. Our journey began with a vision to innovate and elevate standards in laminated fabric manufacturing. Today we are a leading provider of high quality, customized laminated fabric solutions for a wide range of industries and applications.",
      ],
    },
    {
      heading: "Our Mission",
      body: [
        "Our mission is to deliver superior quality products and unparalleled service to our clients. We achieve this through continuous innovation, state of the art technology, and a relentless commitment to excellence. Our team of experts works closely with clients to understand their unique needs and deliver tailor made solutions that exceed expectations.",
      ],
    },
    {
      heading: "Our Expertise",
      body: [
        "With decades of experience in the industry, we specialize in four lamination techniques: PU foam lamination, fabric to fabric lamination, film lamination, and EVA lamination. Our advanced machinery and skilled team enable us to produce high performance fabrics for applications ranging from automotive and apparel to home furnishings and industrial use.",
        "We also manufacture seamless bonded bras from material we laminate ourselves, so material development, lamination and manufacture sit with one supplier rather than being coordinated across several.",
      ],
    },
    {
      heading: "Quality and Customization",
      body: [
        "Quality is at the heart of everything we do. We adhere to strict quality control measures throughout the manufacturing process, ensuring that every product meets the highest standards of durability, performance, and reliability.",
        "We also offer a wide range of customization options. Density, thickness, color, film type, and width are specified per order rather than selected from a fixed range, so clients choose the exact materials, colors, and specifications their project calls for.",
      ],
    },
  ],
  values: [
    {
      title: "Innovation",
      body: "We continuously seek new ways to improve our products and processes, staying ahead of industry trends and delivering cutting edge solutions.",
    },
    {
      title: "Customer Focus",
      body: "Our clients are at the center of our business. We listen to their needs and work diligently to provide solutions that align with their goals.",
    },
    {
      title: "Integrity",
      body: "We conduct our business with honesty, transparency, and respect for our clients and partners.",
    },
    {
      title: "Sustainability",
      body: "We strive to minimize our environmental impact by implementing eco friendly practices and sourcing materials responsibly.",
    },
  ],
  closing: {
    heading: "Your Trusted Partner",
    body: [
      "We are dedicated to building long lasting relationships with our clients based on trust, reliability, and mutual success. We take pride in our ability to bring your vision to life with our high quality laminated fabric solutions.",
      "Thank you for considering Hamprigo Industries as your partner in innovation and quality. We look forward to the opportunity to work with you and contribute to your success.",
    ],
  },
} as const;

/** Enquiry form. Six required fields, the rest optional. */
export const enquiryForm = {
  heading: "Send us an enquiry",
  intro:
    "Tell us what you are trying to make and we will come back with a construction and a sample. You do not need a finished specification to start a conversation.",
} as const;

/**
 * What the Service dropdown offers.
 *
 * Narrowed to the page it sits on. The lamination page offers only the four
 * techniques, so an enquiry from there arrives already scoped, and the bonded
 * bra page offers no choice at all. Home and Contact list everything.
 *
 * Titles come from `services` rather than being retyped, so the dropdown
 * cannot drift out of step with the pages. Fabric development and sourcing is
 * deliberately absent: the client was explicit that it sits under lamination
 * rather than standing as a service of its own.
 */
const laminationServiceTitles = services.map((service) => service.title);

export const serviceOptions = {
  all: [...laminationServiceTitles, bondedBras.formLabel],
  lamination: laminationServiceTitles,
  bondedBras: bondedBras.formLabel,
} as const;

/** Example text for every field, so nobody has to guess the format. */
export const enquiryPlaceholders = {
  name: "Rajesh Mehta",
  mobile: "+91 98200 12345",
  email: "rajesh@yourcompany.com",
  city: "Mumbai",
  country: "India",
  service: "Select a service",
  message:
    "Enquiry for 5,000 metres of PU foam laminated fabric, 3 mm. Or 500 pieces of seamless bonded bras.",
} as const;
