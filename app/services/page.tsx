import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ServiceVisual } from "@/components/service-visual";
import { StartBand } from "@/components/start-band";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom SaaS platforms, web apps, product design, Android apps, and n8n automation built around real business needs.",
};

const rail = {
  teal: "bg-teal",
  copper: "bg-copper",
  azure: "bg-azure",
  violet: "bg-violet",
} as const;

export default function ServicesPage() {
  return (
    <main>
      <section className="axis-field border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 pt-12 pb-14 md:grid-cols-[1.2fr_0.8fr] md:pt-20 md:pb-20">
          <Reveal>
            <p className="text-xs tracking-[0.18em] text-teal uppercase">What we build</p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.98] tracking-tight text-balance md:text-7xl">
              SaaS products, designed around your business.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              From product thinking and interface design to web, Android, and
              workflow development, we help turn real business needs into software
              people can use.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <ol className="self-end overflow-hidden border border-line bg-paper/80">
              {services.map((service, index) => (
                <li key={service.id} className="border-b border-line last:border-b-0">
                  <a
                    href={`#${service.id}`}
                    className="flex items-baseline justify-between gap-4 px-5 py-4 transition-colors hover:bg-cream"
                  >
                    <span className="font-serif text-xl tracking-tight">{service.shortName}</span>
                    <span
                      className="text-xs tracking-[0.16em]"
                      style={{ color: `var(--${service.tone})` }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className="scroll-mt-28 border-b border-line"
        >
          <div className="mx-auto grid max-w-6xl md:grid-cols-[7rem_1fr_1fr]">
            <div
              className={`flex items-start px-5 py-8 text-paper md:py-20 md:pl-0 ${rail[service.tone]}`}
            >
              <p className="font-serif text-4xl md:pl-5">
                {String(index + 1).padStart(2, "0")}
              </p>
            </div>
            <div className="px-5 py-10 md:py-20 md:pr-10">
              <Reveal>
                <h2 className="font-serif text-4xl tracking-tight text-balance md:text-5xl">
                  {service.name}
                </h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                  {service.summary}
                </p>
                <div
                  className="mt-8 max-w-sm"
                  style={{ color: `var(--${service.tone})` }}
                >
                  <ServiceVisual id={service.id} className="h-40 w-full" />
                </div>
                <h3 className="mt-10 text-xs tracking-[0.16em] uppercase">Who it fits</h3>
                <p className="mt-4 leading-relaxed">{service.fits}</p>
              </Reveal>
            </div>
            <div className="border-line px-5 py-10 md:border-l md:py-20 md:pl-10">
              <Reveal delay={2}>
                <h3 className="text-xs tracking-[0.16em] uppercase">Included</h3>
                <ul className="mt-4">
                  {service.included.map((item) => (
                    <li key={item} className="border-b border-line py-3 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 inline-flex px-5 py-3 text-sm text-paper transition-transform duration-200 hover:-translate-y-0.5 ${rail[service.tone]}`}
                >
                  Talk about this solution
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <StartBand />
    </main>
  );
}
