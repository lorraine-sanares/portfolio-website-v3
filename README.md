# Lorraine Sanares — Portfolio v3

Single-page portfolio built with React + Vite. Design: Figma "Portfolio Website 2026" (see `BUILD_PROMPT.md`).

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Push to GitHub → import in Vercel (framework preset: Vite). No config needed.

## Editing content

Everything editable lives in `src/data/content.js` — desk items, about text, projects, blueprints, resources, photo collections. No component changes needed.

## Swapping in real assets

- Replace SVG placeholders in `public/images/` (desk items, project shots, mascot) with your Figma exports — keep the filenames or update paths in `content.js`.
- Add photos to `public/images/photos/` and register them in the `photos` array in `content.js`.
- Drop your resume at `public/resume.pdf` (the Resume desk cell and footer button link to it).
