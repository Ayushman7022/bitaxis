import type { ServiceId } from "@/content/site";

export function ServiceVisual({
  id,
  className = "h-28 w-full",
}: {
  id: ServiceId;
  className?: string;
}) {
  if (id === "website") {
    return (
      <svg viewBox="0 0 220 120" className={className} aria-hidden="true">
        <rect x="18" y="16" width="184" height="88" rx="8" fill="currentColor" opacity="0.12" />
        <rect x="18" y="16" width="184" height="18" fill="currentColor" opacity="0.22" />
        <circle cx="30" cy="25" r="3" fill="currentColor" opacity="0.5" />
        <circle cx="42" cy="25" r="3" fill="currentColor" opacity="0.35" />
        <rect x="30" y="46" width="70" height="8" rx="2" fill="currentColor" opacity="0.55" />
        <rect x="30" y="62" width="108" height="5" rx="2" fill="currentColor" opacity="0.25" />
        <rect x="30" y="74" width="88" height="5" rx="2" fill="currentColor" opacity="0.2" />
        <rect x="150" y="48" width="38" height="42" rx="4" fill="currentColor" opacity="0.18" />
      </svg>
    );
  }

  if (id === "ui-ux") {
    return (
      <svg viewBox="0 0 220 120" className={className} aria-hidden="true">
        <rect x="28" y="24" width="92" height="72" rx="10" fill="currentColor" opacity="0.14" />
        <rect x="42" y="36" width="64" height="8" rx="2" fill="currentColor" opacity="0.45" />
        <rect x="42" y="52" width="48" height="5" rx="2" fill="currentColor" opacity="0.22" />
        <rect x="88" y="18" width="96" height="78" rx="12" fill="currentColor" opacity="0.2" />
        <rect x="104" y="32" width="64" height="8" rx="2" fill="currentColor" opacity="0.55" />
        <rect x="104" y="48" width="52" height="5" rx="2" fill="currentColor" opacity="0.25" />
        <rect x="104" y="62" width="40" height="18" rx="4" fill="currentColor" opacity="0.18" />
      </svg>
    );
  }

  if (id === "android") {
    return (
      <svg viewBox="0 0 220 120" className={`${className} float-slow`} aria-hidden="true">
        <rect x="78" y="8" width="64" height="104" rx="14" fill="currentColor" opacity="0.16" />
        <rect x="86" y="22" width="48" height="72" rx="4" fill="currentColor" opacity="0.12" />
        <rect x="94" y="30" width="24" height="6" rx="2" fill="currentColor" opacity="0.5" />
        <rect x="94" y="44" width="32" height="4" rx="2" fill="currentColor" opacity="0.25" />
        <rect x="94" y="54" width="28" height="4" rx="2" fill="currentColor" opacity="0.2" />
        <circle cx="110" cy="100" r="4" fill="currentColor" opacity="0.4" />
      </svg>
    );
  }

  return <WorkflowVisual className={className} />;
}

export function WorkflowVisual({ className = "h-40 w-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 140" className={className} aria-hidden="true">
      <path
        id="flow-a"
        d="M78 52 H168"
        className="flow-path"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        opacity="0.45"
      />
      <path
        id="flow-b"
        d="M192 52 H250 C270 52 282 70 282 90"
        className="flow-path"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        opacity="0.45"
      />
      <path
        id="flow-c"
        d="M192 52 H250 C270 52 282 40 282 28"
        className="flow-path"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        opacity="0.45"
      />
      <circle r="4" fill="currentColor" opacity="0.9">
        <animateMotion dur="2.4s" repeatCount="indefinite" rotate="auto">
          <mpath href="#flow-a" />
        </animateMotion>
      </circle>
      <circle r="3.5" fill="currentColor" opacity="0.8">
        <animateMotion dur="2.8s" begin="0.4s" repeatCount="indefinite">
          <mpath href="#flow-b" />
        </animateMotion>
      </circle>
      <circle r="3.5" fill="currentColor" opacity="0.8">
        <animateMotion dur="2.6s" begin="0.8s" repeatCount="indefinite">
          <mpath href="#flow-c" />
        </animateMotion>
      </circle>

      <g>
        <rect x="16" y="28" width="62" height="48" rx="8" fill="currentColor" opacity="0.14" />
        <text x="47" y="48" textAnchor="middle" fontSize="9" fill="currentColor">
          Form
        </text>
        <text x="47" y="62" textAnchor="middle" fontSize="8" fill="currentColor" opacity="0.6">
          lead in
        </text>
      </g>
      <g>
        <rect x="168" y="28" width="62" height="48" rx="8" fill="currentColor" opacity="0.22" />
        <text x="199" y="48" textAnchor="middle" fontSize="9" fill="currentColor">
          n8n
        </text>
        <text x="199" y="62" textAnchor="middle" fontSize="8" fill="currentColor" opacity="0.65">
          workflow
        </text>
      </g>
      <g>
        <rect x="250" y="8" width="94" height="36" rx="8" fill="currentColor" opacity="0.14" />
        <text x="297" y="30" textAnchor="middle" fontSize="9" fill="currentColor">
          WhatsApp
        </text>
      </g>
      <g>
        <rect x="250" y="78" width="94" height="36" rx="8" fill="currentColor" opacity="0.14" />
        <text x="297" y="100" textAnchor="middle" fontSize="9" fill="currentColor">
          Sheets + mail
        </text>
      </g>
    </svg>
  );
}
