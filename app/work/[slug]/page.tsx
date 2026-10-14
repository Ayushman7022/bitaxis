import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { AxisMark } from "@/components/axis-mark";
import { StartBand } from "@/components/start-band";
import { caseStudies, getCaseStudy, serviceName } from "@/content/site";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return { title: "Work" };
  }

  return {
    title: study.name,
    description: study.oneLiner,
  };
}

export default function CaseStudyPage({ params }: WorkPageProps) {
  return (
    <Suspense fallback={<CaseStudyFallback />}>
      <CaseStudyContent params={params} />
    </Suspense>
  );
}

function CaseStudyFallback() {
  return (
    <main>
      <header className="bg-green text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <p className="text-xs tracking-[0.18em] uppercase opacity-80">Case study</p>
        </div>
      </header>
    </main>
  );
}

async function CaseStudyContent({ params }: WorkPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const index = caseStudies.findIndex((item) => item.slug === study.slug);
  const tone = {
    teal: "bg-teal",
    copper: "bg-copper",
    azure: "bg-azure",
    violet: "bg-violet",
    ink: "bg-ink",
  }[study.tone];
  const next = caseStudies[(index + 1) % caseStudies.length];
  const label =
    study.services.length > 0
      ? study.services.map((id) => serviceName(id)).join(" · ")
      : "Case study";

  return (
    <main>
      <header className={`relative overflow-hidden ${tone} text-paper`}>
        <AxisMark className="pointer-events-none absolute -right-10 -bottom-16 h-64 w-64 opacity-15" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
          <p className="text-xs tracking-[0.18em] uppercase opacity-80">Case study</p>
          <h1 className="mt-4 font-serif text-6xl tracking-tight md:text-8xl">
            <a href={study.url} className="hover:opacity-80">
              {study.name}
            </a>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed">{study.oneLiner}</p>
          <p className="mt-8 text-sm tracking-wide opacity-80">{label}</p>
        </div>
      </header>

      <article className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[14rem_1fr] md:py-20">
        <p className="text-xs tracking-[0.16em] text-green uppercase">The work</p>
        <div className="max-w-2xl">
          <p className="text-lg leading-relaxed">{study.summary}</p>

          {study.audience ? (
            <>
              <h2 className="mt-12 font-serif text-3xl tracking-tight">Who it is for</h2>
              <p className="mt-4 leading-relaxed text-muted">{study.audience}</p>
            </>
          ) : null}

          {study.built.length > 0 ? (
            <>
              <h2 className="mt-12 font-serif text-3xl tracking-tight">What Bit Axis shipped</h2>
              <ul className="mt-4">
                {study.built.map((item) => (
                  <li key={item} className="border-b border-line py-3 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </article>

      {next && next.slug !== study.slug ? (
        <section className="border-t border-line">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">Next</p>
            <a
              href={next.url}
              className="font-serif text-3xl tracking-tight hover:text-green"
            >
              {next.name}
            </a>
          </div>
        </section>
      ) : null}

      <StartBand />
    </main>
  );
}
