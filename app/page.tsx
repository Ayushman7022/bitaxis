import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ServiceVisual } from "@/components/service-visual";
import { StartBand } from "@/components/start-band";
import { WorkPanel } from "@/components/work-panel";
import { caseStudies, home, process, services } from "@/content/site";

export const metadata: Metadata = {
  description: home.lead,
};

const audiences = ["Clinics", "Institutes", "Shops", "Local service teams", "Product teams"];
const tones = ["teal", "copper", "azure", "violet"] as const;

export default function HomePage() {
  return (
    <main>
      <section className="home-hero relative overflow-hidden">
        <div className="hero-grid" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-14 pt-14 md:min-h-[650px] md:grid-cols-[1fr_0.94fr] md:gap-8 md:pb-20 md:pt-20">
          <Reveal className="relative z-10">
            <p className="eyebrow"><span className="eyebrow-dot" /> SaaS products, made for real business needs</p>
            <h1 className="hero-title mt-7 max-w-3xl font-serif tracking-tight text-balance">
              Software built around <span>your business.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              We design and build SaaS products that make complex work simpler—from web and Android apps to connected workflows that help your team serve customers.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="button-primary">
                Talk about your product <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/work" className="button-secondary">
                See what we&apos;ve built <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm text-muted">
              <span className="hero-check" aria-hidden="true">✓</span>
              <span>Product thinking, design, and development in one team.</span>
            </div>
          </Reveal>

          <Reveal delay={2} className="relative z-10 mx-auto w-full max-w-[500px]">
            <div className="hero-story" aria-label="Illustration showing a business need becoming a digital solution">
              <div className="story-orbit story-orbit-a" />
              <div className="story-orbit story-orbit-b" />
              <div className="story-label story-label-top"><span className="story-label-dot" /> SAAS BUILT AROUND REAL WORK</div>
              <div className="story-need">
                <span className="story-step">THE BUSINESS NEED</span>
                <strong>Your team needs software that fits the way your business works.</strong>
                <div className="need-people" aria-hidden="true"><i>☺</i><i>↗</i><i>✳</i></div>
              </div>
              <div className="story-connector" aria-hidden="true"><i /><i /><i /><b>↓</b></div>
              <div className="story-solution">
                <div className="solution-top"><span><b>✳</b> BIT AXIS / SAAS PRODUCT DEVELOPMENT</span><span>✧</span></div>
                <div className="solution-title">A product shaped around your customers and team</div>
                <div className="solution-options">
                  <div><span className="solution-icon icon-web">↗</span><b>Web app</b><small>For your service</small></div>
                  <div><span className="solution-icon icon-product">◫</span><b>Android</b><small>For your users</small></div>
                  <div><span className="solution-icon icon-flow">⤳</span><b>Automation</b><small>For your team</small></div>
                </div>
              </div>
              <div className="story-caption"><span>UNDERSTAND THE WORK</span><span>DESIGN THE PRODUCT</span><span>BUILD FOR REAL USERS</span></div>
              <span className="story-spark story-spark-a" aria-hidden="true">✳</span>
              <span className="story-spark story-spark-b" aria-hidden="true">✦</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="service-intro" aria-label="What Bit Axis builds">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 md:flex-row md:items-center md:justify-between">
          <p className="service-intro-label">From the first product question to launch</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {services.map((service, index) => (
              <Link key={service.id} href={service.href} className="capability-link">
                <span className={`capability-mark capability-${tones[index]}`} aria-hidden="true">0{index + 1}</span>
                {service.shortName}<span className="capability-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <Reveal>
            <div className="section-heading">
              <div><p className="eyebrow">Selected work</p><h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">Real products. Thoughtful execution.</h2></div>
              <p className="max-w-sm leading-relaxed text-muted">A look at SaaS products and digital experiences we&apos;ve designed and built to solve real needs.</p>
            </div>
          </Reveal>
          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {caseStudies.map((study, index) => (
              <Reveal key={study.slug} delay={(index + 1) as 1 | 2}>
                <WorkPanel study={study} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="section-heading">
            <div><p className="eyebrow">What we build</p><h2 className="mt-4 max-w-2xl font-serif text-4xl tracking-tight text-balance md:text-5xl">SaaS products, from first flow to launch.</h2></div>
            <p className="max-w-sm leading-relaxed text-muted">Whether you need a complete product or one essential part of it, we shape the build around the way your business and customers work.</p>
          </div>
        </Reveal>
        <div className="service-cards mt-12">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={(index + 1) as 1 | 2 | 3 | 4}>
              <Link href={service.href} className={`service-card service-card-${tones[index]}`}>
                <div className="service-card-top"><span>0{index + 1} / {service.shortName.toUpperCase()}</span><span className="service-card-arrow" aria-hidden="true">↗</span></div>
                <div className="service-card-visual"><ServiceVisual id={service.id} className="h-24 w-full" /></div>
                <h3 className="font-serif text-2xl tracking-tight md:text-3xl">{service.name}</h3>
                <p className="mt-3 min-h-[4.5rem] leading-relaxed text-muted">{service.summary}</p>
                <span className="service-card-link">Explore this service <span aria-hidden="true">→</span></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="audience-band">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20">
          <Reveal>
            <p className="eyebrow eyebrow-light">Built around your business</p>
            <h2 className="mt-5 max-w-lg font-serif text-4xl tracking-tight text-balance md:text-5xl">Purpose-built software for the way <span>your business runs.</span></h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-lg leading-relaxed text-paper/75">We work with teams who understand their business and need software that fits their customers, their day-to-day work, and the way they want to grow.</p>
            <ul className="mt-7 flex flex-wrap gap-2">{audiences.map((item) => <li key={item} className="audience-pill">{item}</li>)}</ul>
          </Reveal>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="section-heading">
            <div><p className="eyebrow">A clear way of working</p><h2 className="mt-4 font-serif text-4xl tracking-tight md:text-5xl">A good process makes good work.</h2></div>
            <p className="max-w-sm leading-relaxed text-muted">We turn the real business need into a clear product plan, then keep the build grounded in how people will use it.</p>
          </div>
        </Reveal>
        <ol className="process-grid mt-12">
          {process.map((step, index) => (
            <li key={step.step}>
              <Reveal delay={(index + 1) as 1 | 2 | 3 | 4}>
                <span className="process-index">{step.step}</span>
                <h3 className="mt-5 font-serif text-2xl">{step.title}</h3>
                <p className="mt-2 max-w-xs leading-relaxed text-muted">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <StartBand />
    </main>
  );
}
