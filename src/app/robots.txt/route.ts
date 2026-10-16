export const dynamic = "force-static";

import { company } from "@/content/site";

/**
 * /robots.txt
 *
 * Written out as text rather than through Next's robots metadata export,
 * because that API has no way to emit comments and the groups here are worth
 * labelling for whoever reads the file next.
 *
 * Three decisions are encoded:
 *
 * Search engines and AI assistants are both allowed everything. The AI group
 * is named explicitly rather than left to the wildcard so the intent is on
 * the record: this site wants to be quoted in AI answers, which is the same
 * reason /llms.txt exists.
 *
 * The blocked group is SEO link-index and scraper traffic. None of it sends
 * a buyer to a manufacturer, and all of it costs crawl budget.
 *
 * Everything else still gets the whole site. A robots file is a courtesy to
 * well-behaved crawlers, not a security control, so nothing private should
 * ever depend on it.
 *
 * The sitemap line is built from the same company URL every other link on the
 * site uses, so changing the domain cannot leave this file pointing at the
 * old one.
 */
const body = `# Search engines
User-agent: Googlebot
User-agent: Bingbot
User-agent: Applebot
User-agent: DuckDuckBot
Allow: /

# AI search, assistants and training
User-agent: GPTBot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: ClaudeBot
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: meta-externalagent
User-agent: CCBot
Allow: /

# Heavy SEO scrapers with no value to a manufacturer
User-agent: MJ12bot
User-agent: DotBot
User-agent: BLEXBot
User-agent: DataForSeoBot
User-agent: SeekportBot
Disallow: /

# Everyone else
User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap.xml", company.url).toString()}
`;

export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
