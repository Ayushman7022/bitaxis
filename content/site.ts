export const studio = {
  name: "Bit Axis",
  tagline:
    "Custom SaaS and software solutions for businesses that need tools built around how they work.",
  email: "hello@bitaxis.studio",
  description:
    "Bit Axis designs and builds custom SaaS products, web apps, Android apps, and connected workflows for businesses.",
};

export const home = {
  eyebrow: "SaaS products for real business needs",
  title: "Software built around your business.",
  lead: "Bit Axis designs and builds custom SaaS products, web apps, Android apps, and connected workflows for businesses.",
  audienceTitle: "Software built around the way your business works",
  audience:
    "We help business teams turn real workflows and customer needs into practical software products that are designed to be used every day.",
};

export const process = [
  {
    step: "01",
    title: "Brief",
    text: "What the business needs to do, and who uses it.",
  },
  {
    step: "02",
    title: "Shape",
    text: "Flows, screens, and automations before a long build, so the scope stays visible.",
  },
  {
    step: "03",
    title: "Build",
    text: "The website, the interface, the Android app, or the n8n workflow.",
  },
  {
    step: "04",
    title: "Hand over",
    text: "Something the team can run, with the decisions written down.",
  },
] as const;

export type ServiceId = "website" | "ui-ux" | "android" | "automation";

export type ServiceTone = "teal" | "copper" | "azure" | "violet";

export type Service = {
  id: ServiceId;
  name: string;
  shortName: string;
  href: string;
  tone: ServiceTone;
  summary: string;
  included: string[];
  fits: string;
};

export const services: Service[] = [
  {
    id: "website",
    name: "SaaS & web app development",
    shortName: "SaaS & web apps",
    href: "/services#website",
    tone: "teal",
    summary:
      "Custom SaaS platforms, customer portals, and business web apps shaped around your workflows and the people who use them.",
    included: [
      "Product scope, user flows, and interface design grounded in a real business need",
      "A SaaS platform, customer portal, or web app shaped around your service",
      "The screens and everyday tools your customers or team need to get work done",
      "A production-ready web experience, with a clear handover for your team",
    ],
    fits: "Businesses whose customer journey or internal workflow has outgrown spreadsheets, disconnected tools, or off-the-shelf software that does not fit.",
  },
  {
    id: "ui-ux",
    name: "UI/UX",
    shortName: "UI/UX",
    href: "/services#ui-ux",
    tone: "copper",
    summary:
      "Product strategy and interface design that make business software clear and straightforward for customers and staff.",
    included: [
      "User journeys based on the tasks people need to complete",
      "Interface design for SaaS, web apps, and Android products",
      "A consistent visual system your product can grow with",
      "Clear, useful screens for customers and the teams supporting them",
    ],
    fits: "Teams building a new SaaS product or improving a product whose users struggle to get things done.",
  },
  {
    id: "android",
    name: "Android development",
    shortName: "Android",
    href: "/services#android",
    tone: "azure",
    summary:
      "Android applications that bring your SaaS product or business service to the devices your customers and team use every day.",
    included: [
      "A product scope and Android app built around real user needs",
      "Core screens and flows connected to your service or platform",
      "A build your team can install, test, and prepare to ship",
      "A clear handover so the app is not a black box",
    ],
    fits: "Businesses that need customers or staff to access their product and everyday tools on Android.",
  },
  {
    id: "automation",
    name: "n8n automation",
    shortName: "Automation",
    href: "/services#automation",
    tone: "violet",
    summary:
      "n8n workflows that connect your SaaS product and business tools, so information moves and routine work gets done without manual handoffs.",
    included: [
      "A map of the work and systems that should connect",
      "n8n workflows between your SaaS product, forms, email, WhatsApp, sheets, and team tools",
      "Approvals, reminders, and follow-ups that happen at the right time",
      "A handover so the team can understand and manage each workflow",
    ],
    fits: "Teams repeating the same handoffs across tools, or looking to connect a SaaS product with the systems they already rely on.",
  },
];

export const inquiryServices = [
  { id: "website", label: "SaaS / web app development" },
  { id: "ui-ux", label: "Product design (UI/UX)" },
  { id: "android", label: "Android development" },
  { id: "automation", label: "n8n automation" },
  { id: "unsure", label: "Not sure yet" },
] as const;

export type InquiryServiceId = (typeof inquiryServices)[number]["id"];

export function serviceName(id: ServiceId) {
  return services.find((service) => service.id === id)?.name ?? id;
}

export function inquiryServiceLabel(id: string) {
  return inquiryServices.find((service) => service.id === id)?.label ?? id;
}

export type CaseStudy = {
  slug: string;
  name: string;
  url: string;
  visitLabel: string;
  tone: ServiceTone | "ink";
  oneLiner: string;
  summary: string;
  audience: string;
  built: string[];
  services: ServiceId[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "quizly",
    name: "Quizly",
    url: "https://play.google.com/store/apps/details?id=com.ayushman.quizly",
    visitLabel: "Open on Google Play",
    tone: "violet",
    oneLiner:
      "An Android exam-prep app that helps competitive-exam aspirants turn spare moments into focused practice.",
    summary:
      "Quizly gives exam aspirants a focused place to practise topic-based questions, work through previous-year questions, generate AI quizzes, and take timed mock tests.",
    audience: "Aspirants preparing for UPSC, SSC, banking, railways, GATE, and other competitive exams.",
    built: [
      "Android app for focused competitive-exam preparation",
      "Practice flows for topic quizzes, previous-year questions, and timed mock tests",
    ],
    services: ["ui-ux", "android"],
  },
  {
    slug: "whyeka",
    name: "Whyeka",
    url: "https://whyeka.com/",
    visitLabel: "Visit whyeka.com",
    tone: "ink",
    oneLiner: "A clear digital home for a LinkedIn positioning and thought-leadership offer.",
    summary:
      "Whyeka helps founders and business leaders sharpen their positioning and build influence on LinkedIn. Bit Axis designed and built a web experience that explains the offer and guides prospective clients toward a discovery conversation.",
    audience: "Founders and business leaders who want a clear market position and stronger visibility with the people they need to reach.",
    built: [
      "A clear web presence for Whyeka's positioning and LinkedIn strategy offer",
      "Service information and a direct path to book a discovery call",
    ],
    services: ["website", "ui-ux"],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;
