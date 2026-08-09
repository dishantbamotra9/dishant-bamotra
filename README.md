# Dishant Bamotra – Mechanical Design Portfolio

A professional freelance portfolio website for **Dishant Bamotra**, a Mechanical Design Engineer and CAD freelancer transitioning from manufacturing and quality into mechanical design, CAD modeling and manufacturing documentation.

**Live site:** `[ Add deployed URL here ]`

---

## About

Mechanical Design Engineer with 3+ years of hands-on experience in manufacturing, quality, fabrication and engineering processes — including sheet metal, modular furniture manufacturing, inspection and production. Now offering freelance mechanical design and CAD services, backed by first-hand knowledge of how parts are actually made, not just how they're modeled.

## Services

- Mechanical Design
- 3D CAD Modeling
- Sheet Metal Design
- Weldment Design
- Manufacturing Drawings
- 2D Drafting
- Assembly Design
- BOM Preparation
- DXF Preparation for Laser Cutting
- Reverse Engineering
- Design Modification
- DFM (Design for Manufacturing) Review

## Software

SolidWorks · AutoCAD · Microsoft Excel

## Featured Projects

| Project | Category | Software |
|---|---|---|
| [Sheet Metal Electrical Enclosure](projects/sheet-metal-electrical-enclosure.html) | Sheet Metal / Enclosure Design | SolidWorks Sheet Metal |
| [Planetary Gear Assembly](projects/planetary-gear-assembly.html) | Gear System / Power Transmission | SolidWorks, GearTrax |
| [AutoCAD Manufacturing Drawings](projects/autocad-manufacturing-drawings.html) | 2D Drafting / Documentation | AutoCAD Mechanical |
| [Plummer Block Assembly](projects/plummer-block-assembly.html) | Bearing Housing / Rotating Equipment | SolidWorks |
| [Bench Vice Assembly](projects/bench-vice-assembly.html) | Mechanical Assembly / Tooling | SolidWorks |
| [Standalone Mechanical Parts](projects/standalone-mechanical-parts.html) | Machined & Fabricated Components | SolidWorks |

## Manufacturing Experience

Hands-on exposure to sheet metal fabrication, laser cutting, press brake forming, welding, assembly, quality inspection, tolerances and fits, and manufacturing-defect analysis — the foundation for designing parts that are practical to build, not just possible to model.

## Contact

- **Email:** dishantbamotra9@gmail.com
- **Phone:** +91 72066 25073
- **LinkedIn:** [linkedin.com/in/dishant-bamotra-592163228](https://linkedin.com/in/dishant-bamotra-592163228)
- **WhatsApp:** `[7206625073]`
- **GitHub:** `[ Add link ]`

---

## Project Structure

```
/
├── index.html                  # Home page (hero, about, services, projects, contact, etc.)
├── projects/                   # Individual project case-study pages
│   ├── planetary-gear-assembly.html
│   ├── sheet-metal-electrical-enclosure.html
│   ├── autocad-manufacturing-drawings.html
│   ├── plummer-block-assembly.html
│   ├── bench-vice-assembly.html
│   └── standalone-mechanical-parts.html
├── css/
│   └── style.css               # Full design system (single stylesheet)
├── js/
│   └── main.js                 # Nav toggle, scroll reveal, service card details
├── assets/
│   └── images/
│       ├── hero-gear-render.png
│       └── projects/           # All project renders, exploded views, drawings
└── README.md
```

No build step, no framework, no dependencies beyond a Google Fonts CDN link — plain HTML/CSS/JS that runs anywhere.

---

## Run Locally

Any static file server works. From the project root:

```bash
# Python
python3 -m http.server 8000

# Node (if you have it)
npx serve .
```

Then open `http://localhost:8000` in your browser. Opening `index.html` directly by double-clicking also works, since there is no build step.

---

## Deploy on GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Choose the `main` branch and `/ (root)` folder, then save.
5. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/`.

## Deploy on Netlify

1. Create a new site on [Netlify](https://app.netlify.com) and connect this repository (or drag-and-drop the folder into Netlify's dashboard).
2. Build command: none. Publish directory: `/` (the project root).
3. Deploy — Netlify will give you a live URL immediately.

## Deploy on Vercel

1. Import this repository at [vercel.com/new](https://vercel.com/new).
2. Framework preset: **Other** (static site).
3. Leave the build command empty and set the output directory to `.`.
4. Deploy.

---

## Replacing Placeholder Contact Details

Search the project for `[ Add` to find every placeholder. They currently appear in:

- `index.html` — contact section and footer (WhatsApp, Freelance Profile, GitHub)
- Every file in `/projects/` — footer (WhatsApp, GitHub)

The **email, phone and LinkedIn links are already filled in** with real values and don't need to be changed unless they update.

The contact form in `index.html` (`#contact`) is a static placeholder with `onsubmit="return false;"`. To make it functional without a backend, connect it to a form service:

- **Formspree:** sign up, replace the `<form action="#" method="POST">` with `<form action="https://formspree.io/f/YOUR_ID" method="POST">`, and remove `onsubmit="return false;"`.
- **Netlify Forms:** if deploying on Netlify, add `netlify` and `name="contact"` attributes to the `<form>` tag and remove `onsubmit="return false;"` — no other backend needed.

---

## Adding a New Project

1. Duplicate `projects/standalone-mechanical-parts.html` (the simplest template) and rename it, e.g. `projects/your-new-project.html`.
2. Update the `<title>`, meta description, and Open Graph tags at the top of the file.
3. Update the breadcrumb, eyebrow label ("Project 07 · ..."), heading, summary card, and body content (Requirement, Design Approach, Key Features, Manufacturing Considerations, Assembly Considerations, Material, BOM if relevant).
4. Add your images to `assets/images/projects/` and reference them with relative paths (`../assets/images/projects/your-image.png`). Keep images under ~1MB where possible; resize to a max width of ~1600px.
5. Update the `pd-nav` links at the bottom to point to the correct previous/next project.
6. Add a new project card to the `#projects` section in `index.html` (copy an existing `.project-card` block) and link it to your new page.
7. If the project is a strong freelance example, also link it from the relevant service card's "View Details" panel in the `#services` section.

---

## Pre-Publishing Checklist

- [ ] Replace all `[ Add ... ]` placeholders (WhatsApp, GitHub, freelance platform links) in `index.html` and every `projects/*.html` footer/contact section.
- [ ] Connect the contact form to Formspree, Netlify Forms, or another handler (see above).
- [ ] Confirm email, phone and LinkedIn links are current.
- [ ] Proofread all project case studies for accuracy against your actual project files.
- [ ] Test navigation, mobile menu and all project links on desktop, tablet and mobile widths.
- [ ] Run a Lighthouse or PageSpeed check and compress any oversized images in `assets/images/`.
- [ ] Update `<link rel="canonical">` and Open Graph `og:image`/`og:url` values once the live URL is known.
- [ ] Add a real Open Graph preview image (1200×630) if you want a custom social-share card.
- [ ] Verify the site renders correctly with JavaScript disabled (nav and content should still be usable; only the mobile menu and scroll-reveal animation depend on JS).
- [ ] Set up a custom domain (optional) and update canonical URLs accordingly.

---

Built with HTML, CSS and vanilla JavaScript. No frameworks, no build step.
