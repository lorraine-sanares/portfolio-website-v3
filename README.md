# Personal Portfolio (Vite + React + TypeScript + Tailwind CSS + GSAP)

This repository contains a one‑page personal portfolio built with a modern frontend stack. The design is inspired by editorial layouts, digital scrapbooks, and tactile stationery, with subtle GSAP animations for intentional motion.

## Features

- Vite + React + TypeScript scaffold
- Tailwind CSS for utility-first styling with a custom palette and fonts
- GSAP reveal animations and ScrollTrigger support
- Data-driven sections: hero, lab/fridge magnet, projects, timeline, calendar, digest, photography, footer
- Responsive, accessible, semantic markup

## Development

```bash
cd my-portfolio
npm install    # install dependencies
npm run dev    # start development server
# open http://localhost:5173 in your browser
```

## Build

```bash
npm run build
npm run preview
```

## Structure

- `src/components` – reusable building-block components
- `src/sections` – page sections corresponding to site areas
- `src/data` – hardcoded content that can be edited easily
- `src/hooks` – custom React hooks (GSAP integration, etc.)
- `src/lib` – utility functions (empty for now)
- `src/assets` – static assets like images

Feel free to expand and adapt the layout, update styles, and replace placeholder content with your own.
