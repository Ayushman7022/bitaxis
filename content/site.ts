export const studio = {
  name: "Bit Axis",
  tagline:
    "Websites, product design, Android apps, and n8n automation for small and medium businesses.",
  email: "hello@bitaxis.studio",
  description:
    "Bit Axis is a product studio for small and medium businesses. We design and build websites, product interfaces, Android apps, and n8n workflows.",
};

export const home = {
  eyebrow: "Product studio for small and medium businesses",
  title:
    "Websites, apps, and workflows for businesses that have outgrown a template.",
  lead: "Bit Axis designs and builds the site customers see, the product they use, the Android app they open, and the n8n workflows that move work without a person in the middle.",
  audienceTitle: "For owners who need the thing built",
  audience:
    "Clinics, institutes, shops, local service firms, and product teams. If the job is a website, an interface, an Android app, or an automated workflow, it belongs here.",
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
    name: "Website development",
    shortName: "Website",
    href: "/services#website",
    tone: "teal",
    summary:
      "Marketing sites and business web apps, structured so a customer can understand you and a form reaches a person.",
    included: [
      "A site with a clear offer, proof, and a way to get in touch",
      "Pages for the services or products you actually sell",
      "A web tool for a daily job, such as bookings, a catalog, or a simple staff view",
      "Fast pages, and a form that lands in an inbox",
    ],
    fits: "Businesses that need a site customers trust, or a web tool the team uses every day. The work is specific to the business, rather than a theme with a logo swapped in.",
  },
  {
    id: "ui-ux",
    name: "UI/UX",
    shortName: "UI/UX",
    href: "/services#ui-ux",
    tone: "copper",
    summary:
      "Flows and screens for products people have to use, on the web or on Android.",
    included: [
      "The path from the first screen to the job done",
      "Interface design for web, Android, or both",
      "A small set of type, color, and components the build can follow",
      "Screens written for the person using them",
    ],
    fits: "Teams with a product to ship, or an existing one that is hard to use. The work starts from the task, rather than from a mood board.",
  },
  {
    id: "android",
    name: "Android development",
    shortName: "Android",
    href: "/services#android",
    tone: "azure",
    summary:
      "Production Android apps for customers or staff who live on a phone.",
    included: [
      "An Android app built from a defined product",
      "The screens and flows people use day to day",
      "A build you can install, test, and ship",
      "Handover notes so the app is not a black box",
    ],
    fits: "Businesses whose customers or staff are on Android. The app follows a clear product, rather than a vague wish to have one.",
  },
  {
    id: "automation",
    name: "n8n automation",
    shortName: "Automation",
    href: "/services#automation",
    tone: "violet",
    summary:
      "n8n workflows that take a form, a WhatsApp message, or a spreadsheet row and finish the job without someone copying it by hand.",
    included: [
      "A map of the work that should run without a person",
      "n8n workflows that connect forms, mail, WhatsApp, sheets, and your tools",
      "Approvals, reminders, and follow-ups that fire on time",
      "A handover so the team can see, pause, and change the flow",
    ],
    fits: "Teams that lose hours to the same handoff: a lead arrives, a staff member copies it, someone forgets to reply. The workflow is the product, not a pile of Zapier recipes nobody owns.",
  },
];

export const inquiryServices = [
  { id: "website", label: "Website development" },
  { id: "ui-ux", label: "UI/UX" },
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
      "Practice and school operations, in a product students, teachers, and parents can use.",
    summary:
      "Quizly is a learning product. Bit Axis shaped the interface and the Android app so practice, results, and everyday school work sit together, instead of being split across chats and spreadsheets.",
    audience: "Schools, coaching teams, students, and parents.",
    built: [
      "Product interface for practice, results, and school workflows",
      "Android app for the people who use it day to day",
    ],
    services: ["ui-ux", "android"],
  },
  {
    slug: "whyeka",
    name: "Whyeka",
    url: "https://whyeka.com/",
    visitLabel: "Visit whyeka.com",
    tone: "ink",
    oneLiner: "A product Bit Axis designed and built.",
    summary:
      "Whyeka is portfolio work from the studio. The audience, the problem, and what shipped are still being written, so this page does not guess.",
    audience: "",
    built: [],
    services: [],
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
