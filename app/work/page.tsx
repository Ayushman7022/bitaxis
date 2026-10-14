import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { WorkPanel } from "@/components/work-panel";
import { caseStudies } from "@/content/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work from Bit Axis, including Quizly and Whyeka.",
};

export default function WorkPage() {
  return (
    <main>
      <section className="axis-field border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-12 pb-14 md:pt-20 md:pb-16">
          <Reveal>
            <p className="text-xs tracking-[0.18em] text-teal uppercase">Work</p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.98] tracking-tight text-balance md:text-7xl">
              Products the studio has designed and built.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Quizly and Whyeka. The write-ups stay specific, and they stay short
              where the story is still being set.
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
