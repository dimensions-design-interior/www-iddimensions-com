import { useState } from "react";

const links = [
  { label: "Home", href: "/#top" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <a href="#top" className="group flex items-center gap-3 text-ink-foreground">
          <img
            src="/logo-mark.png"
            alt="Dimensions Designs Interior"
            width={44}
            height={44}
            className="h-10 w-10 object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-display block text-lg leading-none tracking-[0.28em] uppercase">
              Dimensions
            </span>
            <span className="mt-1 block text-[0.58rem] tracking-[0.42em] text-brass-soft uppercase">
              Designs Interior
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[0.68rem] font-semibold tracking-[0.26em] text-ink-foreground/80 uppercase transition-colors hover:text-brass"
            >
              {l.label}
            </a>
          ))}
          <a href="tel:9670001155" className="btn-outline text-ink-foreground">
            9670001155
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className="block h-px w-6 bg-brass-soft" />
          <span className="block h-px w-6 bg-brass-soft" />
        </button>
      </div>

      {open && (
        <div className="border-t border-brass/20 bg-ink px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[0.7rem] font-semibold tracking-[0.26em] text-ink-foreground uppercase"
              >
                {l.label}
              </a>
            ))}
            <a href="tel:9670001155" className="text-[0.7rem] tracking-[0.26em] text-brass uppercase">
              Call 9670001155
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
