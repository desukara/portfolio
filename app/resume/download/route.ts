// The previously generated PDF did not match the approved résumé.
// Do not serve a substitute. Restore this endpoint only with the exact official PDF.
export async function GET() {
  return new Response("Official résumé PDF temporarily unavailable.", {
    status: 503,
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
  });
}
