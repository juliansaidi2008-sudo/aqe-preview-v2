import { brand } from "@/config/brand";

const PHONE_PATTERN = /^[+()\-\s.\d]{7,30}$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const website = typeof body.website === "string" ? body.website.trim() : "";

    // Honeypot: quietly accept bot submissions without forwarding them.
    if (website) return Response.json({ success: true });

    if (!name || name.length > 80 || !PHONE_PATTERN.test(phone)) {
      return Response.json({ error: "Please enter a valid name and phone number." }, { status: 400 });
    }

    const response = await fetch(`https://formsubmit.co/ajax/${brand.email}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        _subject: `New callback request from ${name}`,
        _template: "table",
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      return Response.json({ error: "Unable to send callback request." }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Unable to send callback request." }, { status: 500 });
  }
}
