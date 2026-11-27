import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";

export async function GET() {
  try {
    const [bytes, expectedHashFile] = await Promise.all([
      readFile(join(process.cwd(), "J_Simmons_Resume_2026.pdf")),
      readFile(join(process.cwd(), "J_Simmons_Resume_2026.pdf.sha256"), "utf8"),
    ]);
    const expectedHash = expectedHashFile.trim();
    if (!/^[a-f0-9]{64}$/.test(expectedHash) || createHash("sha256").update(bytes).digest("hex") !== expectedHash) {
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
