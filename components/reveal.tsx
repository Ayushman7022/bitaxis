"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const show = () => {
      node.classList.remove("pre-reveal");
      node.classList.add("reveal");
      if (delay) node.classList.add(`reveal-delay-${delay}`);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.classList.remove("pre-reveal");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`pre-reveal ${className}`.trim()}>
      {children}
    </div>
  );
}
