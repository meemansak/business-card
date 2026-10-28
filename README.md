# Meemansak Bharti — Digital business card

Independent static website. No build step, framework, account or API key required.

## Files

- `dist/index.html`: contact page
- `dist/style.css`: visual design and responsive layout
- `dist/card.html`: business card source, 1200 × 700
- `dist/assets/business-card.png`: exported shareable image, 2400 × 1400
- `dist/meemansak-bharti.vcf`: downloadable contact
- `dist/assets/connect-qr.png`: QR pointing to the live contact page

## GitHub Pages

Create your own GitHub repository and push this folder's contents to `main`. In Settings → Pages, choose **GitHub Actions** as the deployment source. The included `.github/workflows/pages.yml` publishes only `dist/`. All asset links are relative and support a repository subpath. The current Git remote belongs to Sites; add a separate GitHub remote instead of overwriting it if you want to retain Sites publishing.

The QR and social preview currently point to:
https://meemansak-bharti-connect.quirkyrhea64.chatgpt.site

When moving to a permanent GitHub Pages URL or custom domain, update the URL in `dist/app.js`, `dist/index.html`, `dist/card.html` and `make-qr.py`, regenerate the QR, and re-export the PNG. Existing shared images continue to point to the old URL until you redirect that URL or share a new card.

`verify.cjs` generates screenshots using this computer's local Playwright and Chrome installation; it is an optional local authoring utility, not a website dependency. Fonts are self-hosted; their licenses are in `dist/assets/`.
