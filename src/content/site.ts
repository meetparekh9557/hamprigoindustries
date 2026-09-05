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
  { href: "/about", label: "About" },
  { href: "/lamination", label: "Lamination" },
  { href: "/seamless-bonded-bras", label: "Seamless Bonded Bras" },
  { href: "/contact", label: "Contact" },
] as const;

/** Sits under the logo in the footer. */
export const footerBlurb = [
  "Textile lamination since 1989.",
  "We laminate woven, non-woven, knitted fabrics and Rexine with PU foam, EVA foam, films and other fabrics.",
  "We also manufacture seamless bonded bras using material we laminate ourselves.",
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
  eyebrow: "Textile Lamination \u00b7 Seamless Bonded Bras",
  headline: "The Material Is Where The Product Begins.",
  subhead:
    "Hamprigo Industries has been laminating woven, non-woven, knitted fabrics and Rexine since 1989, and also manufactures seamless bonded bras using material we laminate ourselves.",
  primaryCta: { label: "Explore Lamination", href: "/lamination" },
  secondaryCta: {
    label: "Explore Seamless Bonded Bras",
    href: "/seamless-bonded-bras",
  },
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
    title: "Fabric Laminated With Fabric",
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
    title: "Fabric Laminated With Films",
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
 *
 * An empty label draws the layer without naming it. The fabric layers are
 * unlabelled by request: the diagram's point is what is bonded to the
 * fabric, and the fabric itself needs no caption to be recognised.
 */
export const serviceLayers = {
  "pu-foam-laminated-fabric": [
    { kind: "fabric", label: "", weight: 1 },
    { kind: "foam", label: "PU foam", weight: 3 },
  ],
  "fabric-laminated-with-fabric": [
    { kind: "fabric", label: "", weight: 1 },
    { kind: "fabric", label: "Backing fabric", weight: 1 },
  ],
  "fabric-laminated-with-films": [
    { kind: "fabric", label: "", weight: 3 },
    { kind: "film", label: "Film", weight: 0.5 },
  ],
  "eva-laminated-fabric": [
    { kind: "fabric", label: "", weight: 1 },
    { kind: "eva", label: "EVA foam", weight: 2.4 },
  ],
} as const;

/**
 * Capabilities that apply across all four techniques.
 * These are NOT services. The client was explicit that they sit under
 * lamination rather than standing alongside it.
 */
export const capabilities = {
  heading: "How We Laminate, Whichever Technique You Need",
  intro: "Two things apply across all four.",
  items: [
    {
      title: "Any Width",
      body: "Our machinery runs wider than standard, so any width is possible per your requirement. Panel size and cutting plans are not limited by what a standard laminator can hold.",
    },
    {
      title: "Your Fabric Or Ours",
      body: "Many customers send us their own fabric to laminate. Others ask us to develop, source, or treat it for them. We work either way, and we can supply finished products, so material development through to finished goods sits with one supplier when that is what you need.",
    },
  ],
} as const;

/** Closing block used on the lamination page. */
export const laminationClose = {
  heading: "Start With A Sample",
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
      heading: "Why The Laminate Decides The Bra",
      body: [
        "Bonding replaces the mechanical hold of a stitch, so the bond itself carries everything the garment goes through. A bonded edge cannot fray or unravel the way a stitched seam can, but it will only survive laundering if the lamination underneath has genuine washing fastness.",
        "That is why we laminate our own material. Our bonding is irreversible, so layers do not separate at edges or under stress, and it holds its washing fastness through repeated laundering. Those two properties are what let a bonded bra keep its shape and its edges wash after wash.",
      ],
    },
    {
      heading: "Material And Construction, Specified Together",
      body: [
        "We can develop and source the face fabric, or laminate the one you supply. Either way the lamination and the finished garment are done here, so the material and the construction are decided together rather than coordinated across separate suppliers. In bonded construction that matters more than in sewn, because the material and the assembly method are not separable decisions.",
      ],
    },
  ],
  close: {
    heading: "Request A Sample",
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
      heading: "Quality And Customization",
      body: [
        "Quality is at the heart of everything we do. We adhere to strict quality control measures throughout the manufacturing process, ensuring that every product meets the highest standards of durability, performance, and reliability.",
        "We also offer a wide range of customization options. Density, thickness, color, film type, and width are specified per order rather than selected from a fixed range, so clients choose the exact materials, colors, and specifications their project calls for.",
      ],
    },
  ],
  /**
   * The client's own three values, supplied to replace the four that were
   * here. These are the ones from their previous site.
   */
  values: [
    {
      title: "Honesty",
      body: "Integrity is the cornerstone of our business. We believe in conducting ourselves with honesty, transparency, and accountability in all our interactions. Our clients can trust us to deliver on our promises and uphold the highest ethical standards.",
    },
    {
      title: "Passion",
      body: "We are driven by a passion for innovation, creativity, and continuous improvement. Our team is dedicated to pushing the boundaries of what is possible, exploring new ideas, and finding innovative solutions to meet the evolving needs of our clients.",
    },
    {
      title: "Quality Work",
      body: "We take pride in our meticulous attention to detail, rigorous quality control processes, and unwavering dedication to delivering products of the highest caliber. From the materials to the craftsmanship of our work, excellence is at the heart of everything we do.",
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
/**
 * The five things the homepage rail shows: the four lamination techniques
 * and the finished product. Bonded bras sit alongside lamination here rather
 * than below it, because the business has two sides and the homepage should
 * say so before a visitor scrolls.
 *
 * Titles here name the pairing in full. They differ slightly from the
 * service page headings, which stay as they are because those are the terms
 * buyers actually search for. The rail describes; the page ranks.
 *
 * "with" is set lowercase throughout, matching "Fabric to Fabric".
 */
export const workItems = [
  {
    slug: "pu-foam-laminated-fabric",
    spine: "PU Foam",
    title: "PU Foam Lamination With Fabric",
    summary:
      "Woven, non-woven, knitted fabric and Rexine bonded to PU foam in custom densities and thicknesses.",
    image: "/img/pu-foam.jpg",
    alt: "Knitted fabric peeled back to show the PU foam laminated behind it",
    href: "/lamination#pu-foam-laminated-fabric",
  },
  {
    slug: "fabric-laminated-with-fabric",
    spine: "Fabric on Fabric",
    title: "Fabric To Fabric Lamination",
    summary:
      "Two fabrics bonded into one composite, for body and structure a single layer cannot give.",
    image: "/img/fabric-to-fabric.jpg",
    alt: "Two fabrics bonded together as one composite material",
    href: "/lamination#fabric-laminated-with-fabric",
  },
  {
    slug: "fabric-laminated-with-films",
    spine: "Films",
    title: "Film Lamination With Fabric",
    summary:
      "PVC, TPU, PE and blackout films, to make a fabric waterproof, stronger or light-controlling.",
    image: "/img/film.jpg",
    alt: "Fabric laminated with a film layer",
    href: "/lamination#fabric-laminated-with-films",
  },
  {
    slug: "eva-laminated-fabric",
    spine: "EVA",
    title: "EVA Foam Lamination With Fabric",
    summary:
      "EVA foam in custom colours and thicknesses, for parts that must hold their form under pressure.",
    image: "/img/eva.jpg",
    alt: "Fabric laminated to EVA foam",
    href: "/lamination#eva-laminated-fabric",
  },
  {
    slug: "seamless-bonded-bras",
    spine: "Bonded Bras",
    title: "Seamless Bonded Bras",
    summary:
      "Finished bras built by bonding rather than stitching, on material we laminate ourselves.",
    image: "/img/bonded-bra.jpg",
    alt: "A seamless bonded bra, showing no stitched seams",
    href: "/seamless-bonded-bras",
  },
] as const;

/**
 * Photograph per technique, keyed by slug, derived from workItems rather
 * than retyped so the rail and the service page cannot show different
 * pictures of the same thing.
 */
export const serviceImages: Record<string, { src: string; alt: string }> =
  Object.fromEntries(
    workItems.map((item) => [item.slug, { src: item.image, alt: item.alt }]),
  );

/**
 * The three bonding technologies, named and nothing more. The client has not
 * supplied an approved explanation of any of them and inventing one would put
 * a technical claim in their mouth. They sit on the bonded bra page now
 * rather than the homepage.
 */
export const bondingTechnologies = [
  "Hotmelt PUR Dispensing",
  "Silicone Printing",
  "Tape Bonding",
] as const;

/**
 * The three materials shown beside Textile Lamination. Photographic rather
 * than an icon diagram, so the visitor understands what is being bonded by
 * looking at it.
 *
 * These are three materials, not three stages, so there are no arrows
 * between them. The foam frame uses the PU foam photograph rather than the
 * EVA one because the open cell structure is unmistakably foam there, which
 * is the whole job of the label.
 */
export const materialChain = [
  { label: "Fabric", src: "/img/fabric-to-fabric.jpg", alt: "Woven fabric" },
  {
    label: "Foam",
    src: "/img/pu-foam.jpg",
    alt: "PU foam behind a knitted face fabric",
  },
  {
    label: "Film",
    src: "/img/film.jpg",
    alt: "Fabric laminated with a film layer",
  },
] as const;

/** Section headings that are not part of a content block of their own. */
export const homeHeadings = {
  work: "What We Work With",
  services: "Our Services",
  values: "What We Stand For",
} as const;

/**
 * The two sides of the business, as the homepage now leads with them.
 * Both bodies reuse copy already approved elsewhere on the site rather than
 * being written fresh. Icon names refer to src/components/icons.tsx.
 */
export const twoServices = [
  {
    icon: "layers",
    eyebrow: "Service 01",
    title: "Textile Lamination",
    body: "We laminate woven, non-woven, knitted fabric and Rexine to PU foam, EVA foam, films and other fabrics. Everything is bonded to your specification, at any width you need.",
    cta: { label: "Explore Lamination", href: "/lamination" },
  },
  {
    icon: "garment",
    eyebrow: "Service 02",
    title: "Seamless Bonded Bras",
    body: "We also manufacture seamless bonded bras using material we laminate ourselves, bringing the material and the finished construction together.",
    cta: {
      label: "Explore Seamless Bonded Bras",
      href: "/seamless-bonded-bras",
    },
  },
] as const;

/**
 * Restored from the previous site at the client's request. The six points are
 * their words. The trailing full stops are dropped because these set as card
 * headings rather than as sentences.
 */
export const whyChoose = {
  eyebrow: "Why choose us",
  heading: "Why Choose Our Services?",
  intro:
    "At Hamprigo Industries, we understand that choosing a partner for your laminated fabric needs is a significant decision. Here is why we stand out as the preferred choice for clients across industries.",
  items: [
    { icon: "award", title: "Unmatched Industry Expertise" },
    { icon: "adjust", title: "Customization And Flexibility" },
    { icon: "checkBadge", title: "Consistent Quality And Reliability" },
    { icon: "shield", title: "Strong Ethical Practices" },
    { icon: "leaf", title: "Sustainable Practices" },
    { icon: "support", title: "Comprehensive Customer Support" },
  ],
  close:
    "Choosing Hamprigo Industries means partnering with a company that values your success as much as you do. Let us bring your projects to life with our superior laminated fabric solutions. Contact us today to get started.",
} as const;

/** Wording taken verbatim from the design the client supplied. */
export const whyHamprigo = {
  eyebrow: "Why Hamprigo",
  heading: "One Supplier From Material To Finished Product.",
  items: [
    {
      icon: "calendar",
      label: "Since 1989",
      body: "Textile lamination experience dating back to 1989.",
    },
    {
      icon: "swatch",
      label: "Your Fabric Or Ours",
      body: "Customers can provide their fabric, or we can develop, source or treat it for you.",
    },
    {
      icon: "sliders",
      label: "Specified To Your Requirement",
      body: "Density, thickness, colour, film type and width can be specified per order.",
    },
  ],
} as const;

export const homeClose = {
  heading: "Have A Material Requirement? Start With A Sample.",
  body: "Tell us what you are working with and what you need the finished material to do. We can start with a sample and move from there.",
} as const;

/**
 * The Lamination page, written to the client's brief.
 *
 * Nothing here is invented. No applications, industries, certifications,
 * machinery, capacities, performance numbers or maximum widths: the brief
 * forbids all of them until the client supplies and approves them, and the
 * absence of a width figure in particular is deliberate.
 */
export const laminationPage = {
  hero: {
    eyebrow: "Textile Lamination",
    heading: "Lamination Built Around Your Material.",
    body: "We laminate woven, non-woven, knitted fabrics and Rexine with PU foam, EVA foam, films and other fabrics. Materials can be laminated to your required width, thickness and specification.",
    primary: { label: "Request a Sample", href: "/contact" },
    secondary: { label: "Explore Our Techniques", href: "#techniques" },
  },
  intro: {
    eyebrow: "Our Capabilities",
    heading: "Four Ways To Build A Laminated Material.",
    body: "Different materials require different constructions. Hamprigo works across four lamination techniques, each designed around the materials and specifications required for the finished construction.",
  },
  techniques: [
    {
      slug: "pu-foam-laminated-fabric",
      number: "01",
      label: "PU Foam Lamination",
      heading: "PU Foam Lamination",
      body: "Woven, non-woven, knitted fabrics and Rexine can be laminated with PU foam in custom densities and thicknesses.",
      points: [
        "Custom densities",
        "Custom thicknesses",
        "Irreversible bonding",
        "Bond remains through repeated laundering",
        "Material retains its hand and shape",
      ],
      layers: ["Fabric", "PU Foam", "Fabric"],
      image: "/img/pu-foam.jpg",
      alt: "Knitted fabric laminated to PU foam",
    },
    {
      slug: "fabric-laminated-with-fabric",
      number: "02",
      label: "Fabric-to-Fabric Lamination",
      heading: "Fabric-to-Fabric Lamination",
      body: "Two fabrics can be bonded together to create a single composite material.",
      points: ["You can provide both fabrics, or we can help develop the second material."],
      note: "Two fabrics. One composite construction.",
      layers: ["Fabric A", "Bond", "Fabric B"],
      image: "/img/fabric-to-fabric.jpg",
      alt: "Two fabrics bonded into one composite material",
    },
    {
      slug: "fabric-laminated-with-films",
      number: "03",
      label: "Film Lamination",
      heading: "Film Lamination",
      body: "Fabric can be laminated with PVC, TPU, PE and blackout films according to the required construction.",
      films: [
        { name: "TPU", body: "Flexible and softer handle." },
        { name: "PVC", body: "Durable and wipe-clean barrier." },
        { name: "PE", body: "Moisture-barrier option." },
        { name: "Blackout Film", body: "Light-control construction." },
      ],
      image: "/img/film.jpg",
      alt: "Fabric laminated with a transparent film",
    },
    {
      slug: "eva-laminated-fabric",
      number: "04",
      label: "EVA Lamination",
      heading: "EVA Lamination",
      body: "EVA lamination adds cushioning and structure to the finished material, with thickness and colour specified according to the requirement.",
      points: ["Custom thickness", "Custom colours"],
      layers: ["Fabric", "EVA", "Fabric"],
      image: "/img/eva.jpg",
      alt: "Fabric laminated to EVA foam",
    },
  ],
  materials: {
    heading: "Your Fabric Or Ours.",
    body: "You can send us your own fabric, or we can develop, source or treat the material required for your construction.",
    blocks: [
      { title: "Your Fabric", body: "Send us the material you want to work with." },
      { title: "Our Material", body: "We can develop, source or treat material where required." },
    ],
  },
  width: {
    heading: "Built To Your Required Width.",
    body: "Our machinery can run wider than standard requirements, allowing laminated material to be produced to the width you need.",
  },
  construction: {
    heading: "From Individual Layers To One Material.",
    body: "Lamination brings different material layers together into a single construction specified for your requirement.",
    steps: [
      { label: "Fabric", src: "/img/fabric-to-fabric.jpg", alt: "Woven fabric" },
      { label: "Fabric + PU Foam", src: "/img/pu-foam.jpg", alt: "Fabric laminated to PU foam" },
      { label: "Laminated Material", src: "/img/eva.jpg", alt: "The finished laminated material" },
    ],
  },
  close: {
    heading: "Start With A Sample.",
    body: "Tell us the substrate and what the finished material needs to do. We can start with a sample before moving to construction and quotation.",
    primary: { label: "Request a Sample", href: "/contact" },
    secondary: { label: "Contact Hamprigo", href: "/contact" },
  },
} as const;

/** The About page, written to the client's brief. */
export const aboutPage = {
  hero: {
    eyebrow: "About Hamprigo",
    heading: "Built On Experience. Driven By What We Make.",
    body: "Founded in 1989, Hamprigo Industries has built its expertise around textile lamination and material construction. Today, our capabilities extend across four lamination techniques and the manufacture of seamless bonded bras using material laminated by us.",
  },
  story: {
    eyebrow: "Our Story",
    heading: "From 1989 To Today.",
    body: [
      "Founded in 1989, Hamprigo Industries began its journey in textile lamination.",
      "Over the decades, we have developed experience across different materials and lamination techniques, working with woven, non-woven and knitted fabrics, as well as Rexine.",
      "Today, our capabilities include PU foam lamination, fabric-to-fabric lamination, film lamination and EVA lamination. We also manufacture seamless bonded bras using material laminated by us.",
      "What has remained consistent throughout this journey is our focus on understanding the material, the construction and the requirement behind every project.",
    ],
  },
  expertise: {
    eyebrow: "Our Expertise",
    heading: "Our Expertise Is Built Around Lamination.",
    body: [
      "We laminate woven, non-woven, knitted fabrics and Rexine with PU foam, EVA foam, films and other fabrics.",
      "Our lamination capabilities cover different material constructions and specifications, with requirements such as width, thickness, density and colour determined according to the application and customer requirement.",
    ],
  },
  finished: {
    heading: "From Laminated Material To Finished Product.",
    body: "Hamprigo also manufactures seamless bonded bras using material that we laminate ourselves. This brings material and finished construction together under one supplier.",
    cta: { label: "Explore Seamless Bonded Bras", href: "/seamless-bonded-bras" },
  },
  how: {
    eyebrow: "How We Work",
    heading: "Your Material Or Ours.",
    body: "You can send us the fabric you want to work with, or we can develop, source or treat the material required for your construction.",
    blocks: [
      { title: "Your Fabric", body: "Send us the material you want to work with." },
      { title: "Our Material", body: "We can develop, source or treat material where required." },
      {
        title: "Your Specification",
        body: "Density, thickness, colour, film type and width can be specified according to your requirement.",
      },
    ],
    close: "We can begin with a sample and develop the construction around your requirement.",
    cta: { label: "Request a Sample", href: "/contact" },
  },
  quality: {
    eyebrow: "Quality",
    heading: "Quality Work Starts With Attention To Detail.",
    body: "We take pride in our meticulous attention to detail, rigorous quality control processes, and unwavering dedication to delivering products of the highest caliber. From the materials to the craftsmanship of our work, excellence is at the heart of everything we do.",
  },
  close: {
    heading: "Let's Work With Your Material.",
    body: "Have a material, specification or finished product requirement? Talk to us about what you are looking to develop.",
    cta: { label: "Get in Touch", href: "/contact" },
  },
} as const;

/** The Seamless Bonded Bras page, written to the client's brief. */
export const bondedBrasPage = {
  hero: {
    eyebrow: "Finished Products",
    heading: "Seamless Bonded Bras",
    body: "We manufacture seamless bonded bras using material we laminate ourselves, bringing material development, lamination and finished garment construction together under one roof.",
    cta: { label: "Request a Sample", href: "/contact" },
  },
  why: {
    heading: "Why The Laminate Decides The Bra",
    body: [
      "Bonding replaces the mechanical hold of a stitch, so the bond itself carries everything the garment goes through. A bonded edge cannot fray or unravel the way a stitched seam can, but it will only survive laundering if the lamination underneath has genuine washing fastness.",
      "That is why we laminate our own material. Our bonding is irreversible, so layers do not separate at edges or under stress, and it holds its washing fastness through repeated laundering. Those two properties are what let a bonded bra keep its shape and its edges wash after wash.",
    ],
    chain: [
      { label: "Face Fabric", src: "/img/fabric-to-fabric.jpg", alt: "Face fabric" },
      { label: "Laminated Material", src: "/img/pu-foam.jpg", alt: "Fabric laminated to PU foam" },
      { label: "Bonded Bra", src: "/img/bonded-bra.jpg", alt: "A seamless bonded bra" },
    ],
  },
  technologies: {
    heading: "Technologies We Use",
  },
  together: {
    heading: "Material And Construction, Specified Together",
    body: "We can develop and source the face fabric, or laminate the one you supply. Either way the lamination and the finished garment are done here, so the material and the construction are decided together rather than coordinated across separate suppliers. In bonded construction that matters more than in sewn, because the material and the assembly method are not separable decisions.",
    chain: ["Your Fabric", "Hamprigo Lamination", "Finished Seamless Bonded Bra"],
  },
  close: {
    heading: "Request A Sample",
    body: [
      "Tell us the style you are planning and we will put a sample together so you can assess the hand, the edge finish, and how it sits.",
      "If you are working to a settled specification, send it across and we will come back on construction and quantities.",
    ],
  },
} as const;

/**
 * The floating WhatsApp button.
 *
 * NOTE: this number is not the one in `contact` above. The site's phone is
 * ...7268 and this is ...7286, the last two digits transposed. It was given
 * separately and deliberately, so it stands, but it is worth confirming: a
 * wrong digit here sends every WhatsApp enquiry into the void silently.
 *
 * Messages are short on purpose. The point is to open the chat with the
 * subject already stated, leaving the person room to write their own
 * question rather than deleting a paragraph first.
 */
export const whatsapp = {
  number: "919619337286",
  messages: {
    default: "Hello Hamprigo Industries, I would like to make an enquiry.",
    lamination:
      "Hello Hamprigo Industries, I would like to enquire about laminated fabric.",
    bondedBras:
      "Hello Hamprigo Industries, I would like to enquire about seamless bonded bras.",
  },
} as const;

export const enquiryForm = {
  heading: "Send Us An Enquiry",
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
