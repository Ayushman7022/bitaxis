import Link from "next/link";
import { AxisMark } from "@/components/axis-mark";

export function StartBand() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute top-8 left-[12%] h-24 w-24 rounded-full bg-teal/30 blur-2xl" />
        <span className="absolute right-[18%] bottom-4 h-28 w-28 rounded-full bg-violet/30 blur-2xl" />
        <span className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-copper/25 blur-2xl" />
      </div>
      <AxisMark className="pointer-events-none absolute -right-8 -bottom-16 h-56 w-56 text-paper opacity-10" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 md:flex-row md:items-end md:justify-between md:py-20">
        <div>
          <p className="text-xs tracking-[0.18em] uppercase opacity-70">Next</p>
          <h2 className="mt-3 max-w-xl font-serif text-4xl leading-[1.05] tracking-tight text-balance md:text-5xl">
            Let&apos;s shape the right software for your business.
          </h2>
        </div>
        <Link
          href="/contact"
          className="inline-flex w-fit bg-paper px-5 py-3 text-sm text-ink transition-transform duration-200 hover:-translate-y-0.5"
        >
          Talk about your product
        </Link>
      </div>
    </section>
  );
}
