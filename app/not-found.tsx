import Link from "next/link";
import { AxisMark } from "@/components/axis-mark";

export default function NotFound() {
  return (
    <main className="axis-field">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <AxisMark className="h-12 w-12 text-teal" />
        <p className="mt-8 text-xs tracking-[0.18em] text-green uppercase">404</p>
        <h1 className="mt-4 font-serif text-5xl tracking-tight md:text-6xl">
          That page is not here.
        </h1>
        <p className="mt-6 max-w-md leading-relaxed text-muted">
          The work, the services, and the project form are still on the site.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex bg-green px-5 py-3 text-sm text-paper transition-colors hover:bg-green-deep"
        >
          Back to Bit Axis
        </Link>
      </div>
    </main>
  );
}
