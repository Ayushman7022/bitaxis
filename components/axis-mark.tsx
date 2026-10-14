export function AxisMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="3" fill="currentColor" />
      <path
        d="M8 20h24M20 8v24"
        stroke="var(--paper)"
        strokeWidth="1.4"
      />
      <path
        d="M8 13.5h3.2M8 26.5h3.2M28.8 13.5H32M28.8 26.5H32M13.5 8v3.2M26.5 8v3.2M13.5 28.8V32M26.5 28.8V32"
        stroke="var(--paper)"
        strokeWidth="1.2"
      />
      <circle cx="20" cy="20" r="2.1" fill="var(--paper)" />
    </svg>
  );
}
