# Heightville Academy website

Next.js 14 (App Router), JavaScript, plain CSS. No database, no TypeScript.

## Run
    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm run start

## Deploy
Push to GitHub, import the repo in Vercel, and deploy the `main` branch. Optionally set
`NEXT_PUBLIC_SITE_URL` to the live domain (used for canonical URLs, sitemap and Open Graph).

## Edit content (all in `/data`)
- `site.js` – address, phone, WhatsApp, motto, school facts (from the school's brief history)
- `programs.js`, `news.js`, `subjects.js`, `questions.js` – lists
- `gallery.js` – photo list with width/height

## Replace placeholder images
Overwrite files in `public/images/` keeping the same filenames (`logo-placeholder.png`,
`hero-placeholder.jpg`, `gallery/gallery-01.jpg` …), then update `width`/`height` for gallery
photos in `data/gallery.js` to the real pixel size. Commit and push; Vercel rebuilds.
`scripts/make-placeholders.py` only regenerates the placeholders and is not needed to run the site.

## Content to supply
Creche/Nursery descriptions, facilities, admission requirements, subjects and real questions.
`data/questions.js` currently holds SAMPLE questions only.
