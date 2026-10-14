import { inquiryServices, type InquiryServiceId } from "@/content/site";

export type InquiryInput = {
  name: string;
  email: string;
  company: string;
  service: string;
  brief: string;
};

export type InquiryField = keyof InquiryInput;

export type FieldErrors = Partial<Record<InquiryField, string>>;

const serviceIds = new Set<string>(inquiryServices.map((service) => service.id));

export function isInquiryService(value: string): value is InquiryServiceId {
  return serviceIds.has(value);
}

export function validateInquiry(input: InquiryInput): FieldErrors {
  const errors: FieldErrors = {};

  if (input.name.trim().length < 2) {
    errors.name = "Enter your name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim())) {
    errors.email = "Enter a work email.";
  }

  if (input.company.trim().length < 2) {
    errors.company = "Enter the company name.";
  }

  if (!isInquiryService(input.service)) {
    errors.service = "Choose a service.";
  }

  if (input.brief.trim().length < 20) {
    errors.brief = "Add a short brief — at least a sentence.";
  }

  return errors;
}

export function readInquiry(value: unknown): InquiryInput {
  const record =
    value && typeof value === "object"
      ? (value as Record<string, unknown>)
      : {};

  return {
    name: typeof record.name === "string" ? record.name : "",
    email: typeof record.email === "string" ? record.email : "",
    company: typeof record.company === "string" ? record.company : "",
    service: typeof record.service === "string" ? record.service : "",
    brief: typeof record.brief === "string" ? record.brief : "",
  };
}
