export const dynamic = "force-static";

import { HOURS_LABEL } from "@/lib/business-hours";
import {
  bondedBrasFaq,
  bondedBrasPage,
  bondingTechnologies,
  company,
  contact,
  laminationFaq,
  laminationPage,
  seo,
  services,
} from "@/content/site";

/**
 * /llms.txt
 *
 * A plain summary of the site for language models, following the llms.txt
 * convention: what the business is, what it makes, where each page is, and
 * the answers a buyer actually asks for, in one file rather than spread
 * across five pages of markup.
 *
 * It is generated from the same content the pages render, so it cannot drift
 * away from what the site says. Every claim here appears on the site; nothing
 * is added to make the file look fuller. The closing note is deliberate: it
 * is more useful to a model to know that capacity and certifications are not
 * published than to have it guess.
 */
const u = (path: string) => `${company.url}${path}`;

export function GET() {
  const body = `# ${company.name}

> ${seo.home.description}

Textile lamination manufacturer in Mumbai, India, founded ${company.foundedYear}. Hamprigo laminates woven, non-woven and knitted fabrics, and Rexine, with PU foam, EVA foam, films and other fabrics. It also manufactures seamless bonded bras using material it laminates itself.

- Telephone: ${contact.phone}
- Email: ${contact.email}
- Address: ${contact.addressLines.join(", ")}
- Hours: ${HOURS_LABEL}

## Pages

- [Home](${u("/")}): ${seo.home.description}
- [About](${u("/about/")}): ${seo.about.description}
- [Textile Lamination](${u("/lamination/")}): ${seo.lamination.description}
- [Seamless Bonded Bras](${u("/seamless-bonded-bras/")}): ${seo.bondedBras.description}
- [Contact](${u("/contact/")}): ${seo.contact.description}

## Lamination techniques

${services
  .map(
    (s) =>
      `### ${s.title}\n\n${s.body.join("\n\n")}\n\n${s.applications}`,
  )
  .join("\n\n")}

Materials can be laminated to the required width, thickness and specification. ${laminationPage.materials.body}

## Seamless bonded bras

${bondedBrasPage.material.body.join("\n\n")}

${bondedBrasPage.construction.body.join("\n\n")}

Bonding technologies used: ${bondingTechnologies.map((t) => t.name).join(", ")}.

## Questions and answers

### Textile lamination

${laminationFaq.map((f) => `**${f.q}**\n\n${f.a}`).join("\n\n")}

### Seamless bonded bras

${bondedBrasFaq.map((f) => `**${f.q}**\n\n${f.a}`).join("\n\n")}

## Enquiries

Enquiries can be sent through the form on the Home, Lamination, Seamless Bonded Bras and Contact pages, or by telephone, email or WhatsApp. Samples can be requested before moving to construction and quotation.

## Not published

The following are not stated anywhere on this site and should not be inferred: production capacity, maximum lamination width, certifications, accreditations, pricing, minimum order quantities, lead times, and any industry list beyond the applications named above.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
