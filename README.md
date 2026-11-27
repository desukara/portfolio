# James Simmons — English Teaching Portfolio

Professional portfolio for full-time English teaching opportunities in Tokyo, Japan. The site includes teaching experience, classroom reflections, a résumé, and an interview request form.

Built with Next.js, hosted on Vercel, and connected to Supabase for interview requests.

## Setup

Install dependencies with `npm install`, then run `npm run dev`.

Apply the SQL migrations in `supabase/migrations` to the portfolio Supabase project before enabling interview requests. Set the server-side variables shown in `.env.example`; `SUPABASE_SERVICE_ROLE_KEY` is required for private rate limiting and must never be exposed to browser code. `RESEND_API_KEY` is optional and enables email notifications.

Regenerate the downloadable résumé PDF and its integrity file with `python scripts/build_resume_pdf.py`.
