export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-14 md:grid-cols-3">
          <div>
            <h2 className="font-display text-2xl tracking-[0.2em] uppercase">
              Dimensions Designs Interior
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/60">
              Interior Design | Turnkey Projects | Residential | Commercial | Retail | Hospitality
            </p>
          </div>

          <div>
            <p className="eyebrow">Quick Links</p>
            <ul className="mt-6 space-y-3 text-sm text-ink-foreground/70">
              {[
                { label: "Home", href: "#top" },
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-brass">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-6 space-y-3 text-sm text-ink-foreground/70">
              <li>
                <a href="tel:9670001155" className="transition-colors hover:text-brass">
                  9670001155
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@iddimension.com"
                  className="transition-colors hover:text-brass"
                >
                  info@iddimension.com
                </a>
              </li>
              <li>
                <a
                  href="https://iddimensions.com"
                  className="transition-colors hover:text-brass"
                  rel="noreferrer"
                >
                  iddimensions.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/iddimensions"
                  className="transition-colors hover:text-brass"
                  rel="noreferrer"
                >
                  Instagram: @iddimensions
                </a>
              </li>
              <li className="pt-2 leading-relaxed text-ink-foreground/50">
                Skylark Plaza, Ground Floor Shop No. 09, near Lulu Mall Road, Golf City, Muzaffar
                Nagar Ghusval, Lucknow, Uttar Pradesh 226030, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-brass/15 pt-6 text-[0.7rem] tracking-[0.18em] text-ink-foreground/40 uppercase">
          © 2026 Dimensions Designs Interior. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
