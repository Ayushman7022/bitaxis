import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ServiceVisual, WorkflowVisual } from "@/components/service-visual";
import { StartBand } from "@/components/start-band";
import { WorkPanel } from "@/components/work-panel";
import { caseStudies, home, process, services } from "@/content/site";

export const metadata: Metadata = {
  description: home.lead,
};

const audiences = ["Clinics", "Institutes", "Shops", "Product teams"];

const tileTone = {
  teal: "bg-teal text-paper",
  copper: "bg-copper text-paper",
  azure: "bg-azure text-paper",
  violet: "bg-violet text-paper",
} as const;

const rowTone = {
  teal: "tone-teal",
  copper: "tone-copper",
  azure: "tone-azure",
  violet: "tone-violet",
} as const;

export default function HomePage() {
  return (
    <main>
      <section className="axis-field">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-16 md:pt-16 md:pb-20">
          <Reveal>
            <p className="text-xs tracking-[0.18em] text-teal uppercase">{home.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.98] tracking-tight text-balance md:text-7xl">
              {home.title}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">{home.lead}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex justify-center bg-green px-5 py-3 text-sm text-paper transition-transform duration-200 hover:-translate-y-0.5 hover:bg-green-deep"
              >
                Start a project
              </Link>
              <Link
                href="/work"
                className="inline-flex justify-center border border-ink bg-paper/70 px-5 py-3 text-sm transition-colors hover:bg-ink hover:text-paper"
              >
                See the work
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={(index + 1) as 1 | 2 | 3 | 4}>
                <Link
                  href={service.href}
                  className={`lift group block min-h-52 overflow-hidden p-5 ${tileTone[service.tone]}`}
                >
                  <p className="text-xs tracking-[0.16em] uppercase opacity-70">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <ServiceVisual id={service.id} className="mt-2 h-20 w-full" />
                  <h2 className="mt-2 font-serif text-2xl tracking-tight">{service.shortName}</h2>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-end md:py-20">
          <Reveal>
            <h2 className="max-w-md font-serif text-4xl tracking-tight text-balance md:text-5xl">
              {home.audienceTitle}
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-lg leading-relaxed text-paper/80">{home.audience}</p>
            <ul className="mt-8 grid grid-cols-2 gap-px bg-paper/15">
              {audiences.map((item) => (
                <li key={item} className="bg-ink px-4 py-3 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">What we offer</h2>
            <Link href="/services" className="text-sm text-green hover:underline">
              All services
            </Link>
          </div>
        </Reveal>
        <ol className="mt-8">
          {services.map((service, index) => (
            <li key={service.id}>
              <Reveal delay={(Math.min(index, 3) + 1) as 1 | 2 | 3 | 4}>
                <Link
                  href={service.href}
                  className={`${rowTone[service.tone]} group grid gap-4 border-b border-line py-8 transition-colors hover:bg-cream/70 md:grid-cols-[6.5rem_1fr_auto] md:items-center md:py-10`}
                >
                  <span
                    className="font-serif text-5xl"
                    style={{ color: "color-mix(in srgb, var(--tone) 55%, transparent)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-serif text-3xl tracking-tight md:text-4xl">
                      {service.name}
                    </span>
                    <span className="mt-3 block max-w-xl leading-relaxed text-muted">
                      {service.summary}
                    </span>
                  </span>
                  <span className="text-sm" style={{ color: "var(--tone)" }}>
                    See the scope
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-violet text-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
          <Reveal>
            <p className="text-xs tracking-[0.18em] uppercase opacity-70">Automation</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight text-balance md:text-5xl">
              n8n workflows that finish the handoff.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-paper/80">
              A form is submitted, a lead lands, a reminder is due. The workflow
              writes the row, sends the message, and tells the team. No extra
              copy-paste in the middle.
            </p>
            <Link
              href="/services#automation"
              className="mt-8 inline-flex bg-paper px-5 py-3 text-sm text-violet transition-transform duration-200 hover:-translate-y-0.5"
            >
              See automation
            </Link>
          </Reveal>
          <Reveal delay={2}>
            <div className="bg-paper/10 p-4 md:p-6">
              <WorkflowVisual className="h-48 w-full md:h-56" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-serif text-4xl tracking-tight md:text-5xl">Selected work</h2>
              <Link href="/work" className="text-sm text-green hover:underline">
                All work
              </Link>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {caseStudies.map((study, index) => (
              <Reveal key={study.slug} delay={(index + 1) as 1 | 2}>
                <WorkPanel study={study} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">How a project runs</h2>
          </Reveal>
          <div className="relative mt-12">
            <span className="absolute top-5 right-6 left-6 hidden h-px bg-line md:block" />
            <ol className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
              {process.map((step, index) => (
                <li key={step.step} className="relative">
                  <Reveal delay={(index + 1) as 1 | 2 | 3 | 4}>
                    <span className="relative z-10 flex h-10 w-10 items-center justify-center bg-green font-serif text-sm text-paper">
                      {step.step}
                    </span>
                    <h3 className="mt-5 font-serif text-2xl tracking-tight">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <StartBand />
    </main>
  );
}
