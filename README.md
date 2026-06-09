# msc.xyz — Mosaic Capital

Static marketing site for Mosaic Capital Inc. (CIMA-regulated, SEC-registered investment adviser).

## Stack
Plain HTML / CSS / JS. No build step.

## Local preview
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy
- Hosted on **Vercel**. Config: [`vercel.json`](./vercel.json).
- Production: `https://www.msc.xyz` (set `msc.xyz` and `www.msc.xyz` in Vercel project domains).
- Security headers (HSTS, CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy) + long-cache rules for images/PDFs are declared in `vercel.json`.

## Layout
- `index.html` — main marketing page
- `privacy.html`, `terms.html` — legal
- `form-crs.pdf`, `form-adv-2a.pdf` — SEC filings
- `prts/index.html` — PRTS Token NAV history
- `styles.css`, `script.js`, `favicon.svg`, `og-image.png`*, team headshots

\* `og-image.png` (1200×630) is referenced by the OG/Twitter meta but is not yet committed — add before launch.

## Contact form
Posted to Formspree (`xwvanbey`). Enable spam protection / reCAPTCHA in the Formspree dashboard.
