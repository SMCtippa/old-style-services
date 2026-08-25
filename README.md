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

No real logo was found via search (not on their Facebook page, BBB, or directory listings), so
`assets/logo.svg` is a simple hand-drawn placeholder mark (a stylized pine tree in a circle) in the
brand green. Swap in their real logo if Kyle gets one from Ramon directly.

## Contact form

The quote request form posts to Formspree. Before it will actually send email, replace
`YOUR_FORM_ID` in the form's `action` attribute in `index.html` with a real Formspree form ID
(sign up free at https://formspree.io).

## Deploy

Static site — deploys to Vercel, Netlify, or GitHub Pages with zero configuration.
