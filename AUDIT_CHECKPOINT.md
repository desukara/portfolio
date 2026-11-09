# Portfolio audit checkpoint — 2026-11-09

## Current preview
Branch: `preview-portfolio-audit-improvements`
Production: `main` (unchanged until explicit approval)

## Implemented on preview
- Improved sitewide SEO metadata and social preview image
- Generated sitemap and robots routes
- Helpful 404 page for old/unavailable paths
- Header brand now identifies James
- Strengthened teaching achievements in the printable résumé
- Clarified interview-request confirmation language
- Preserved the original unaltered homepage portrait

## Next actions (in order)
1. Verify latest Vercel preview deployment is READY and check for build errors.
2. Inspect preview pages, sitemap.xml, robots.txt, OG image, résumé print, mobile navigation and image framing.
3. Audit old EASTOKYO magazine URLs for HTTP status; decide whether to return 410, keep 404, or redirect only when there is a genuinely relevant destination. Do not blindly redirect unrelated editorial pages to teaching pages.
4. Check Google Search Console indexing/canonicalization for the new portfolio, if property is connected. Request reindexing after release.
5. Test interview request pipeline safely: confirm Supabase storage, RLS and notification configuration; do not create fake hiring requests or send emails without a deliberate test plan.
6. Add one or two further teaching case studies ONLY after the user provides verified first-hand details. Never invent classroom anecdotes.
7. Run real browser/mobile/accessibility/performance tests when available, fix confirmed issues.
8. Present preview and request explicit approval BEFORE merging into main. After approval, verify production deployment READY and domain.
