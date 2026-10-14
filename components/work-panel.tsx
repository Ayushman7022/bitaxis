import { serviceName, type CaseStudy } from "@/content/site";

const tones = {
  teal: "bg-teal",
  copper: "bg-copper",
  azure: "bg-azure",
  violet: "bg-violet",
  ink: "bg-ink",
} as const;

function ProductFrame({ kind }: { kind: "phone" | "window" }) {
  if (kind === "phone") {
    return (
      <div className="pointer-events-none h-32 w-[4.5rem] rounded-[1.15rem] border border-paper/35 p-2 transition-transform duration-500 group-hover:-translate-y-1">
        <div className="mx-auto h-1 w-6 rounded-full bg-paper/40" />
        <div className="mt-3 h-2 w-8 bg-paper/55" />
        <div className="mt-2 h-1 w-full bg-paper/25" />
        <div className="mt-1 h-1 w-10 bg-paper/25" />
        <div className="mt-3 h-8 w-full bg-paper/15" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none h-28 w-44 border border-paper/35 transition-transform duration-500 group-hover:-translate-y-1">
      <div className="flex h-5 items-center gap-1 border-b border-paper/25 px-2">
        <span className="h-1.5 w-1.5 rounded-full bg-paper/55" />
        <span className="h-1.5 w-1.5 rounded-full bg-paper/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-paper/30" />
      </div>
      <div className="space-y-1.5 p-2.5">
        <div className="h-2 w-16 bg-paper/50" />
        <div className="h-1 w-full bg-paper/25" />
        <div className="h-1 w-24 bg-paper/20" />
        <div className="grid grid-cols-3 gap-1 pt-1">
          <div className="h-6 bg-paper/15" />
          <div className="h-6 bg-paper/15" />
          <div className="h-6 bg-paper/15" />
        </div>
      </div>
    </div>
  );
}

export function WorkPanel({ study }: { study: CaseStudy }) {
  const label =
    study.services.length > 0
      ? study.services.map((id) => serviceName(id)).join(" · ")
      : "Case study";

  return (
    <a
      href={study.url}
      className={`group relative flex min-h-96 flex-col justify-between overflow-hidden p-8 text-paper transition-transform duration-500 hover:-translate-y-1 md:min-h-[30rem] md:p-10 ${tones[study.tone]}`}
    >
      <div className="flex flex-wrap items-start justify-between gap-6">
        <p className="max-w-[12rem] text-xs tracking-[0.16em] uppercase opacity-80">{label}</p>
        <ProductFrame kind={study.slug === "quizly" ? "phone" : "window"} />
      </div>
      <div>
        <h3 className="font-serif text-5xl tracking-tight md:text-6xl">{study.name}</h3>
        <p className="mt-4 max-w-md text-base leading-relaxed opacity-90">{study.oneLiner}</p>
        <p className="mt-8 text-sm tracking-wide underline-offset-4 transition-all group-hover:underline">
          {study.visitLabel}
        </p>
      </div>
    </a>
  );
}
