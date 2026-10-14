import { inquiryServiceLabel } from "@/content/site";
import { appendInquiryRow } from "@/lib/google-sheet";
import { readInquiry, validateInquiry } from "@/lib/inquiry";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "invalid", fields: { brief: "Send the brief as JSON." } },
      { status: 400 },
    );
  }

  const input = readInquiry(payload);
  const fields = validateInquiry(input);

  if (Object.keys(fields).length > 0) {
    return Response.json({ ok: false, error: "invalid", fields }, { status: 400 });
  }

  const webhook = process.env.GOOGLE_SHEET_WEBHOOK_URL;

  if (!webhook) {
    return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const sent = await appendInquiryRow(webhook, {
    name: input.name.trim(),
    email: input.email.trim(),
    company: input.company.trim(),
    service: inquiryServiceLabel(input.service),
    brief: input.brief.trim(),
  });

  if (!sent) {
    return Response.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
