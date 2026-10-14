import Link from "next/link";
import { AxisMark } from "@/components/axis-mark";
import { nav, services, studio } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 text-teal">
            <AxisMark className="h-11 w-11" />
            <p className="font-serif text-4xl tracking-tight text-paper">{studio.name}</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/70">
            {studio.tagline}
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.16em] uppercase text-paper/50">Studio</p>
          <nav aria-label="Footer" className="mt-4 flex flex-col gap-2 text-sm">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-paper/70">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="text-xs tracking-[0.16em] uppercase text-paper/50">Offers</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {services.map((service) => (
              <li key={service.id}>
                <Link href={service.href} className="hover:text-paper/70">
                  {service.shortName}
                </Link>
              </li>
            ))}
          </ul>
          <a href={`mailto:${studio.email}`} className="mt-6 inline-block text-sm hover:text-paper/70">
            {studio.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
