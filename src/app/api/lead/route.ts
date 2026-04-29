import { NextResponse } from "next/server";

export const runtime = "edge";

type Lead = {
  name: string;
  phone: string;
  service: string;
  zip: string;
  source?: string;
};

function parseLead(input: unknown): Lead | null {
  if (!input || typeof input !== "object") return null;
  const obj = input as Record<string, unknown>;
  const name = String(obj.name ?? "").trim();
  const phone = String(obj.phone ?? "").trim();
  const service = String(obj.service ?? "").trim();
  const zip = String(obj.zip ?? "").trim();
  if (!name || !phone || !service || !zip) return null;
  if (phone.replace(/\D/g, "").length < 10) return null;
  if (zip.replace(/\D/g, "").length < 5) return null;
  // Reject obviously oversized fields (basic spam/abuse guard)
  if (name.length > 200 || phone.length > 50 || service.length > 100 || zip.length > 20) {
    return null;
  }
  return {
    name,
    phone,
    service,
    zip,
    source: typeof obj.source === "string" ? obj.source.slice(0, 120) : "AQE Preview Site",
  };
}

export async function POST(req: Request) {
  const token = process.env.LEADS_GITHUB_TOKEN;
  const repo = process.env.LEADS_GITHUB_REPO;

  if (!token || !repo) {
    return NextResponse.json(
      { ok: false, error: "Lead capture not configured." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const lead = parseLead(body);
  if (!lead) {
    return NextResponse.json(
      { ok: false, error: "Missing or invalid fields." },
      { status: 400 }
    );
  }

  const ua = req.headers.get("user-agent") ?? "unknown";
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  const title = `New lead — ${lead.service} — ${lead.name}`;
  const submittedAt = new Date().toISOString();
  const bodyMd = [
    `**Name:** ${lead.name}`,
    `**Phone:** ${lead.phone}`,
    `**Service:** ${lead.service}`,
    `**ZIP:** ${lead.zip}`,
    ``,
    `**Source:** ${lead.source}`,
    `**Submitted:** ${submittedAt}`,
    `**User agent:** \`${ua}\``,
    `**IP:** \`${ip}\``,
  ].join("\n");

  try {
    const res = await fetch(`https://api.github.com/repos/${repo}/issues`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body: bodyMd,
        labels: ["lead", `service:${lead.service.toLowerCase().replace(/\s+/g, "-").slice(0, 32)}`],
      }),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      return NextResponse.json(
        { ok: false, error: `GitHub API ${res.status}`, detail: detail.slice(0, 500) },
        { status: 502 }
      );
    }
    const issue = (await res.json()) as { number?: number };
    return NextResponse.json({ ok: true, issue: issue.number ?? null });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
