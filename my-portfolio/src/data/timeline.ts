export interface TimelineEntry {
  year: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export const timeline: TimelineEntry[] = [
  { year: '2025', title: 'Senior Developer at XYZ Co.' },
  { year: '2023', title: 'Graduated with B.S. in Computer Science' },
];
