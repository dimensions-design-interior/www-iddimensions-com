import { Link } from "@tanstack/react-router";

import { SiteFooter } from "@/components/site/SiteFooter";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background">
      <header className="bg-ink">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-7 lg:px-12">
          <Link to="/" className="text-ink-foreground">
            <span className="font-display block text-lg leading-none tracking-[0.28em] uppercase">
              Dimensions
            </span>
            <span className="mt-1 block text-[0.58rem] tracking-[0.42em] text-brass-soft uppercase">
              Designs Interior
            </span>
          </Link>
          <nav className="flex items-center gap-7">
            <Link
              to="/services"
              className="text-[0.68rem] font-semibold tracking-[0.26em] text-ink-foreground/80 uppercase hover:text-brass"
            >
              Services
            </Link>
            <Link
              to="/projects"
              className="text-[0.68rem] font-semibold tracking-[0.26em] text-ink-foreground/80 uppercase hover:text-brass"
            >
              Projects
            </Link>
            <Link
              to="/portfolio"
              className="text-[0.68rem] font-semibold tracking-[0.26em] text-ink-foreground/80 uppercase hover:text-brass"
            >
              Portfolio
            </Link>
            <a
              href="tel:9670001155"
              className="btn-outline inline-flex items-center gap-2 text-ink-foreground"
            >
              <Phone aria-hidden="true" className="size-4 shrink-0" />
              9670001155
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <p className="text-[0.68rem] tracking-[0.32em] text-brass uppercase">{eyebrow}</p>
        <h1 className="font-display mt-5 max-w-3xl text-4xl leading-tight tracking-[0.06em] uppercase md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">{intro}</p>
        {children}
      </main>

      <SiteFooter />
    </div>
  );
}
