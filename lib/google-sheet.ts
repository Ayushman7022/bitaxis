type InquiryRow = {
  name: string;
  email: string;
  company: string;
  service: string;
  brief: string;
};

export async function appendInquiryRow(url: string, row: InquiryRow) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(row),
  });

  if (!response.ok) {
    return false;
  }

  const text = await response.text();
  if (!text) {
    return true;
  }

  try {
    const payload = JSON.parse(text) as { ok?: boolean };
    return payload.ok !== false;
  } catch {
    return true;
  }
}
