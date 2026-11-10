import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";

const OFFICIAL_SHA256 = "3a605a9d04dfbba3a7b32d87b971afc31dbe6962594b4e046500f1149754b4e2";

export async function GET() {
  try {
    const bytes = await readFile(join(process.cwd(), "J_Simmons_Resume_2026.pdf"));
    if (createHash("sha256").update(bytes).digest("hex") !== OFFICIAL_SHA256) {
      throw new Error("Official PDF integrity check failed");
    }
    return new Response(bytes, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="J_Simmons_Resume_2026.pdf"',
        "Content-Length": String(bytes.length),
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return new Response("Official résumé PDF temporarily unavailable.", {
      status: 503,
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
    });
  }
}
