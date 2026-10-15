import type { Metadata } from "next";
import { AxisMark } from "@/components/axis-mark";
import { InquiryForm } from "@/components/inquiry-form";
import { Reveal } from "@/components/reveal";
import { studio } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Bit Axis what your business needs from a SaaS product, web app, Android app, or connected workflow.",
};

export default function ContactPage() {
  return (
    <main className="axis-field">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-12 md:grid-cols-[0.85fr_1.15fr] md:py-20">
        <Reveal>
          <p className="text-xs tracking-[0.18em] text-teal uppercase">Contact</p>
          <h1 className="mt-4 font-serif text-5xl leading-[0.98] tracking-tight text-balance md:text-6xl">
            Tell us what your business needs.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Share the problem you want software to solve. We can help shape the
            right SaaS product, web or Android app, or connected workflow.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <AxisMark className="h-12 w-12 text-teal" />
            <div>
              <p className="text-sm text-muted">Or write directly</p>
              <a
                href={`mailto:${studio.email}`}
                className="mt-1 inline-block font-serif text-2xl tracking-tight hover:text-teal"
              >
                {studio.email}
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={2}>
          <div className="border border-line bg-cream p-6 md:p-8">
            <InquiryForm />
          </div>
        </Reveal>
      </div>
    </main>
  );
}
