import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./logo";
import { contact, footerBlurb, nav } from "@/content/site";

/**
 * Light footer.
 *
 * It was navy, which meant the logo had to sit on a white card because the
 * dark parts of the mark are near black. White here lets the artwork sit
 * directly on the page, and the brand's own red and navy carry the type
 * instead of tints of white. Reads closer to a letterhead than a web footer,
 * which suits a manufacturer.
 */
export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-white text-ink">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="block w-[180px]">
              <Logo />
            </span>
            <div className="mt-5 max-w-sm space-y-2 text-sm leading-relaxed text-muted">
              {footerBlurb.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="spec-label text-brand">Pages</h2>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-ink-strong transition-colors hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="spec-label text-brand">Contact</h2>
            <address className="mt-4 space-y-2.5 text-sm not-italic">
              <p>
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="font-medium text-ink-strong transition-colors hover:text-brand"
                >
                  {contact.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all font-medium text-ink-strong transition-colors hover:text-brand"
                >
                  {contact.email}
                </a>
              </p>
              <p className="pt-1 leading-relaxed text-muted">
                {contact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </address>
          </div>
        </div>

        <p className="mt-12 border-t border-line pt-6 text-xs text-muted">
          &copy; {new Date().getFullYear()} Hamprigo Industries. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
}
