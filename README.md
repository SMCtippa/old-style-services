# Old Style Services

Static marketing site for Old Style Services LLC (Toledo, OH). Plain HTML/CSS/JS, no build step.

## Local preview

```bash
python3 -m http.server 8951
```

Then open http://localhost:8951

## Contact info

- Phone: `(567) 395-4787` — confirmed by Kyle.
- Owner: Ramon Rodriguez (per BBB profile; reviews across Yelp/Houzz also refer to him as "Ramon").
- Founded: 2018 (BBB lists established 2018-03-01, incorporated 2018-10-03; ~8 years in business).
- Rating: 4.6★ / 48 reviews (Yelp).
- No email on file yet — needs confirming on the call.

**Address conflict — needs confirming on the call**: directory listings (Yelp, Houzz, BuildZoom,
LeadSmart) all show **2429 Wildwood Blvd, Toledo, OH 43614**, but the BBB profile lists
**436 Clyde St, Toledo, OH 43605**. The site currently only lists "Toledo, OH" (no street address)
in the contact section to avoid publishing the wrong one — confirm the correct operating address
with Ramon before adding it.

Services listed (landscape design/installation, excavating/grading, tree service, lawn care,
hardscaping, property maintenance/snow removal) are based on Kyle's direction plus what's publicly
listed across Houzz, BBB, and directory profiles — worth confirming the exact service list on the call.

## Logo

Kyle pasted their real Facebook logo in chat (blue Ohio-state outline with a blue tree, a red/blue
swoosh, and the "Old Style Services LLC" wordmark baked into the mark itself). It only came through
as an image, not a file (checked `~/Downloads` and `~/Desktop` for a matching saved image first —
nothing matched, only an unrelated logo from a different prospect build), so `assets/logo.svg` is a
hand-built recreation of the full lockup — outline, tree, swoosh, and "Old Style" / "SERVICES LLC"
text — in their real blue (`#2f6faa`) and burnt-orange-red (`#c1502e`). Because the wordmark is
baked into the graphic, the separate `.wordmark-text` HTML span was dropped from the header/footer
(previously used for the icon-only version) and `.logo-mark` was sized up (46px → 78px header,
34px → 58px footer) so the text stays legible. The `--brand`/`--brand-dark` palette in `styles.css`
was updated to match this blue rather than the green originally guessed before the real logo was
shared.

The Ohio outline itself is traced from real state boundary geometry (pulled the Ohio `<path>` from
Wikimedia Commons' `Map_of_USA_OH.svg`, https://commons.wikimedia.org/wiki/File:Map_of_USA_OH.svg,
and rescaled its ~63 points into the logo's 400×400 viewBox) rather than hand-drawn — an earlier
freehand attempt at the outline didn't actually read as Ohio. To use their exact original artwork
instead:

1. Get the real file from Ramon (PNG or vector) and save it as `assets/logo.png` (or re-export as
   `assets/logo.svg`).
2. Update the `src="assets/logo.svg"` references in `index.html` (header, footer, and the
   `<link rel="icon">` favicon tag) to point at the new file.

## Contact form

The quote request form posts to Formspree. Before it will actually send email, replace
`YOUR_FORM_ID` in the form's `action` attribute in `index.html` with a real Formspree form ID
(sign up free at https://formspree.io).

## Deploy

Static site — deploys to Vercel, Netlify, or GitHub Pages with zero configuration.
