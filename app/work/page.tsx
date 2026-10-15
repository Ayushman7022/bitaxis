import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { WorkPanel } from "@/components/work-panel";
import { caseStudies } from "@/content/site";

export const metadata: Metadata = {
  title: "Work",
  description: "SaaS products and digital solutions designed and built by Bit Axis, including Quizly and Whyeka.",
};

export default function WorkPage() {
  return (
    <main>
      <section className="axis-field border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-12 pb-14 md:pt-20 md:pb-16">
          <Reveal>
            <p className="text-xs tracking-[0.18em] text-teal uppercase">Work</p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.98] tracking-tight text-balance md:text-7xl">
              Solutions designed and built around real needs.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              From a competitive-exam learning app to a positioning and thought-leadership site, see
              how product design and development can solve different problems.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-12 md:grid-cols-2 md:py-16">
        {caseStudies.map((study, index) => (
          <Reveal key={study.slug} delay={(index + 1) as 1 | 2}>
            <WorkPanel study={study} />
          </Reveal>
        ))}
      </section>
    </main>
  );
}
