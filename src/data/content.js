// ─────────────────────────────────────────────────────────────
// ALL SITE CONTENT LIVES HERE — edit freely, no code changes needed
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'LORRAINE SANARES',
  tagline: 'Builder, creative, documenting ideas',
  hudLabel: 'ACTIVE - ID: 7F-C2 - POWER: 92%',
  estLabel: 'EST. 2003',
  statusLabel: 'CURRENT STATUS: figuring things out',
  resumeUrl: '/resume.pdf',
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/lorraine-sanares' },
    { label: 'GitHub', url: 'https://github.com/lorrainesanares' },
  ],
}

// Hero desk grid — 01–06. `img` files live in /public/images/
export const deskItems = [
  {
    num: '01',
    label: 'Resume',
    img: '/assets/paper.png',
    href: '/resume.pdf',
    download: true,
    peek: 'One page. Engineering, AI & Data. Download the PDF.',
  },
  {
    num: '02',
    label: 'Projects',
    img: '/assets/macbook.png',
    href: '#projects',
    peek: 'Raspberry Pi Linux-maxxing · Hand Gesture Detection',
  },
  {
    num: '03',
    label: 'Photography',
    img: '/assets/fuji-camera.png',
    href: '/photography',
    peek: 'Melbourne · Tokyo · Kyoto · Yokohama · Kamakura · Mt Fuji',
  },
  {
    num: '04',
    label: 'Interests',
    img: '/assets/cd.png',
    href: '#resources',
    peek: 'Music, anime, 3D printing, mechanical keyboards.',
  },
  {
    num: '05',
    label: 'Articles',
    img: '/assets/keyboard.png',
    href: '#resources',
    peek: 'Guides + writing, built from constant documenting.',
  },
  {
    num: '06',
    label: 'Learning Logs',
    img: '/assets/journal.png',
    href: '#blueprints',
    peek: 'Ideas in progress. Many started, some finished.',
  },
]

export const about = {
  code: [
    'const STATUS = "DOCUMENTING THE PROCESS";',
    '',
    'const ABOUT = {',
    '  location: "MELBOURNE, AUS",',
    '  role: "Engineering, AI & Data Grad",',
    '  values: ["curiosity", "play", "creativity"],',
    '};',
  ],
  currentlyRunning: [
    { cmd: 'RUN', text: 'CAD software, 3D printing' },
    { cmd: 'INIT', text: 'Google Cloud data engineering cert' },
    { cmd: 'LOAD', text: 'DaVinci Resolve — video editing' },
  ],
  statement: [
    "A brush is only as effective as the painter.",
    "I build things to learn, and I learn to build things.",
    "Finding the intersection between fields, briding ideas, and creating something new.",
    'The goal? To follow my curiosity.',
  ],
  philosophy: 'Experiment. Get uncomfortable. Teach. Repeat.',
}

export const projects = [
  {
    title: 'Raspberry Pi Linux-maxxing',
    description:
      'Turning a Raspberry Pi into a daily-driver Linux machine — homelab services, dotfiles, and terminal-first workflows.',
    stack: ['Raspberry Pi', 'Linux', 'Docker', 'Bash'],
    img: '/assets/raspberry-pi.png',
    github: 'https://github.com/lorrainesanares',
  },
  {
    title: 'Hand Gesture Detection',
    description:
      'Real-time hand gesture recognition with a Pi camera module — computer vision pipeline for touch-free controls.',
    stack: ['Python', 'OpenCV', 'MediaPipe', 'Raspberry Pi'],
    img: '/assets/camera.png',
    github: 'https://github.com/lorrainesanares',
  },
]

export const blueprints = [
  {
    name: 'Local AI agent with RaspberryPi',
    start: 'march 2026',
    status: 'in progress',
  },
  {
    name: 'Desk robot arm — small builds',
    start: 'april 2026',
    status: 'queued',
  },
  {
    name: 'Blueprint-style UI kit',
    start: 'tbd',
    status: 'sketching',
  },
]

export const resources = {
  intro: 'Will contain things like:',
  items: [
    'Resource guides on how to build small robots (comprehensive, built from the knowledge base of my constant documenting)',
    'Affiliate links to the tools I use / Amazon Storefront',
    'Links to other resources I find useful',
  ],
}

// Agent Skills Repository — featured under Resources
export const skillsRepo = {
  title: 'AGENT SKILLS REPOSITORY',
  badge: 'FREE DOWNLOAD',
  github: 'https://github.com/lorrainesanares/agent-skills', // ← update to real repo URL
  blurb:
    'A living library of agent skills I build and collect. I work in consulting — staying current is the job, so this repo is how I constantly upskill and document what works.',
  goal: 'GOAL: turn this into a knowledge repository app — searchable, versioned, always growing.',
  // showcase items — swap for your real skills
  skills: [
    { name: 'research-synthesis', category: 'consulting' },
    { name: 'data-pipeline-builder', category: 'data' },
    { name: 'slide-deck-drafter', category: 'consulting' },
    { name: 'meeting-notes-distiller', category: 'productivity' },
    { name: 'competitor-scanner', category: 'research' },
    { name: 'sql-query-explainer', category: 'data' },
  ],
}

// Photography — photos per collection live in /public/images/photos/
export const photoCollections = [
  { label: 'ALL COLLECTIONS', id: 'all' },
  { label: "MELBOURNE OCT '25", id: 'melbourne', tag: 'Melbourne' },
  { label: "TOKYO FEB '26", id: 'tokyo', tag: 'Tokyo' },
  { label: "KYOTO FEB '26", id: 'kyoto', tag: 'Kyoto' },
  { label: "YOKOHAMA FEB '26", id: 'yokohama', tag: 'Yokohama' },
  { label: "KAMAKURA FEB '26", id: 'kamakura', tag: 'Kamakura' },
  { label: "MT FUJI FEB '26", id: 'fuji', tag: 'Mt Fuji' },
]

// Placeholder photos — swap src for real exports, keep the collection ids
export const photos = [
  { collection: 'melbourne', src: '/images/photos/melbourne-1.svg', caption: 'Melbourne' },
  { collection: 'melbourne', src: '/images/photos/melbourne-2.svg', caption: 'Melbourne' },
  { collection: 'tokyo', src: '/images/photos/tokyo-1.svg', caption: 'Tokyo' },
  { collection: 'tokyo', src: '/images/photos/tokyo-2.svg', caption: 'Tokyo' },
  { collection: 'kyoto', src: '/images/photos/kyoto-1.svg', caption: 'Kyoto' },
  { collection: 'yokohama', src: '/images/photos/yokohama-1.svg', caption: 'Yokohama' },
  { collection: 'kamakura', src: '/images/photos/kamakura-1.svg', caption: 'Kamakura' },
  { collection: 'fuji', src: '/images/photos/fuji-1.svg', caption: 'Mt Fuji' },
]
