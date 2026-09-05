import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./logo";
import { company, contact, nav } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-ink-strong text-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="inline-block rounded-sm bg-white px-5 py-4">
              <span className="block w-[180px]">
                <Logo />
              </span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Laminating fabric since {company.foundedYear}.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
              Pages
            </h2>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
              Contact
            </h2>
            <address className="mt-4 space-y-2.5 text-sm not-italic text-white/80">
              <p>
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="transition-colors hover:text-white"
                >
                  {contact.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all transition-colors hover:text-white"
                >
                  {contact.email}
                </a>
              </p>
              <p className="pt-1 leading-relaxed text-white/60">
                {contact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </address>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
          &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
