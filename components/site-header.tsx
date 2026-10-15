"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AxisMark } from "@/components/axis-mark";
import { nav, studio } from "@/content/site";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border border-line bg-paper/85 px-3 py-2 shadow-[0_10px_32px_rgba(18,21,28,0.07)] backdrop-blur-xl md:rounded-full md:px-4">
        <Link href="/" className="flex items-center gap-2.5 text-teal">
          <AxisMark className="h-8 w-8 shrink-0 md:h-9 md:w-9" />
          <span className="font-serif text-xl leading-none tracking-tight whitespace-nowrap text-ink md:text-2xl">
            {studio.name}
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 rounded-full bg-cream px-1 py-1 md:flex"
        >
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={active}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                  active ? "bg-ink text-paper" : "text-ink/80 hover:bg-paper hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden bg-green px-4 py-2 text-sm text-paper transition-transform duration-200 hover:bg-green-deep hover:-translate-y-0.5 sm:inline-flex"
          >
            Talk about a product
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="flex w-4 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-ink transition-transform duration-200 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-full bg-ink transition-transform duration-200 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
      <div
        id="mobile-nav"
        className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-line bg-paper/95 p-3 shadow-lg backdrop-blur-xl md:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-4 py-3 text-base ${active ? "bg-ink text-paper" : "hover:bg-cream"}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-2 rounded-xl bg-green px-4 py-3 text-center text-paper"
          >
            Talk about a product
          </Link>
        </nav>
      </div>
      ) : null}
    </header>
  );
}

export function SiteHeaderFallback() {
  return (
    <header className="sticky top-0 z-50 px-3 pt-3">
      <div className="mx-auto flex h-[58px] max-w-6xl items-center justify-between rounded-2xl border border-line bg-paper/85 px-3 md:rounded-full md:px-4" />
    </header>
  );
}
