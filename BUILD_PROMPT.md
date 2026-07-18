# Build Prompt — Lorraine Sanares Portfolio Website (2026)

> Paste this prompt into your coding agent to build the site. Sources: Figma mockup "Portfolio Website 2026" (node 8212-341) + Notion "Project #1 - Website/Branding Refresh".

---

Build a single-page personal portfolio website for **Lorraine Sanares** — an Engineering, AI & Data graduate based in Melbourne, Australia. Use React (Vite) with plain CSS or Tailwind, deployable to Vercel. Mobile responsive is required.

## Concept & Vibe

"A personal lab notebook meets a design magazine." Minimalist, futuristic-retro, with subtle cyberpunk/HUD details. NOT an AI-startup portfolio — it should feel like exploring someone's desk: diary-style, paper clippings, blueprint schematics, technical labels. Brand values: simplicity, playfulness/curiosity, intentionality.

## Visual System

**Colors (light mode default):**
- White/off-white background (#F4F4F4-ish), black text
- Light blue (blueprint blue) — hero desk panel background, grid overlays, hover states, accents
- Grey for secondary text and rules/borders
- Dark green as a secondary accent; hints of pink/cream acceptable
- Photography section flips to full dark mode (pure black background) — like entering a darkroom

**Typography:**
- Monospace font (e.g. JetBrains Mono, IBM Plex Mono, or Space Mono) for labels, metadata, code blocks, nav — this dominates the mockup
- Bold geometric sans (e.g. Helvetica/Inter, heavy weight, slight tracking) for section headings like "ABOUT", "BLUEPRINTS", "CONTACT"
- Le Labo-style editorial restraint: lots of whitespace, small type, uppercase labels

**Micro-details (important — these sell the concept):**
- HUD/micrographic decorations: thin crosshairs, measurement lines, corner brackets, small circles, wireframe icosahedron/schematic shapes
- Technical labels everywhere, monospace, e.g. `ACTIVE - ID: 7F-C2 - POWER: 92%`, `EST. 2003 CURRENT STATUS: figuring things out`, `FILED UNDER: experiments`, `STATUS: in progress`
- Barcode graphic element ("DOCUMENTING THE PROCESS" label with barcode)
- Numbered grid cells (01–06) with small square tick marks
- Small 3D/figurine mascot images sprinkled between sections (use placeholder images; provide an easy way to swap assets)

## Page Structure (one page, anchored sections)

**1. Header/Nav (sticky):**
Left: LORRAINE SANARES (bold, uppercase). Right: [DARK MODE toggle] ABOUT · PROJECTS · CONTACT, plus live "LOCAL TIME MEL HH:MM AM" clock (Melbourne timezone, updates each minute). Below the name: tagline "Builder, creative, documenting ideas". Include a small HUD status strip under the nav (`ACTIVE - ID: 7F-C2 - POWER: 92%`).

**2. Hero — "A view of my desk":**
A light-blue panel with a 3×2 grid of desk objects, each a photographed item on the grid, numbered 01–06 with monospace captions:
01 Resume (paper sheet) · 02 Projects (laptop) · 03 Photography (film camera) · 04 Interests (CD) · 05 Articles (mechanical keyboard) · 06 Learning Logs (leather journal).
Each cell links to its section (or external link — Resume triggers PDF download). On hover: show a sneak peek of that section's contents (small tooltip/preview card) plus a lift/scale effect. Cells have thin grid borders and corner tick marks.

**3. About — code editor block:**
Render as a fake editor window with tabs `about.js` / `README.md`, line numbers, and syntax-highlighted code:

```js
const STATUS = "DOCUMENTING THE PROCESS";

const ABOUT = {
  location: "MELBOURNE, AUS",
  role: "Engineering, AI & Data Grad",
  values: ["curiosity", "play", "creativity"],
};
```

Beside it, a "currently running" terminal-style panel:
- `RUN` CAD software, 3D printing
- `INIT` Google Cloud data engineering cert
- `LOAD` DaVinci Resolve — video editing

Below, centered statement text: "Learning by doing, building things that make life easier (bc I'm lazy). **The goal? Become like Tony Stark.**" and the philosophy line "Experiment. Get uncomfortable. Teach. Repeat." Surround with blueprint schematic line-art (circles, radar arcs, small webcam frame image).

**4. Projects:**
Blueprint-grid background (light blue graph paper). Project items displayed as cut-out photos with monospace labels, e.g. "Raspberry Pi Linux-maxxing", "Hand Gesture Detection". Card layout like a tech-magazine feature: small screenshot, one-line description, tech stack, GitHub link. Make the data-driven list easy to extend (array of project objects).

**5. Blueprints — ideas in progress:**
Intro: "Many ideas, many unstarted projects. Here are some coming up in the pipeline:" A row of folder icons (blue folder with paper), each with a monospace spec label:
`NAME: Local AI agent with RaspberryPi / START: march 2026 / STATUS: in progress`. Include a small 3D-axis schematic doodle beside the row. Folders are placeholders for future project pages — hover state only for now.

**6. Resources:**
"Will contain things like:" bulleted monospace list — resource guides on how to build small robots (comprehensive, built from my documenting), affiliate links to tools I use / Amazon storefront, links to other resources I find useful.

**7. Photography (dark mode section):**
Full-black section, white monospace text, same nav styling inverted. A collections index list:
ALL COLLECTIONS · MELBOURNE OCT '25 · TOKYO FEB '26 · KYOTO FEB '26 · YOKOHAMA FEB '26 · KAMAKURA FEB '26 · MT FUJI FEB '26.
On click or hover, show a sneak peek of the collection's photos. Large edge-to-edge photos with location tags when a collection is open.

**8. Contact / Footer:**
"CONTACT — Find me on:" with LinkedIn + GitHub icons. Protractor/compass schematic line-art beside heading. Include copyright line in the footer and a "Download resume" link.

## Interactions & Motion

- Dark-mode toggle in the nav flips the whole site (photography section is always dark)
- Hover states on ALL links/buttons/icons — subtle enlarge or tilt on icons, sneak-peek previews on desk grid and photo collections
- Smooth scroll for anchor nav; subtle scroll-in animations (fade/slide, restrained)
- Live Melbourne clock in nav

## Content & Data Notes

- All section content should come from simple data arrays/objects at the top of the codebase (or a `/data` folder) so text, projects, and photo collections are easy to edit
- Use placeholder images with correct aspect ratios where assets aren't supplied; name them clearly (e.g. `desk-laptop.png`, `mascot-1.png`) so I can drop in exports from Figma
- Resume: link to `resume.pdf` in `/public`

## Carry-over fixes from previous version (don't repeat these mistakes)

- Nav links evenly spaced on desktop
- Consistent gradient/accent colors across sections
- Consistent button shape everywhere (pick one: lozenge)
- Working contact links (mailto or form that actually submits)
- Footer copyright details
- Check ALL mobile layouts; reduce side margins on mobile so sections fill the page
- Unselected/inactive carousel or grid items get reduced opacity for visual hierarchy

## Possible future sections (structure the code so these can slot in later)

- Fridge-magnet board: polaroids/sticky-note cards for messy ideas, flip/expand on hover
- Rip-off calendar: daily insight card, click to tear off to next day
- Monthly digest: editorial list — discovered / building / reading / watching / thinking about
- Career timeline: newspaper-archive style entries (2025 Data & AI Intern @ Deloitte, 2024 Education Director @ WIT, 2023–2025 Data Science @ University of Melbourne)
