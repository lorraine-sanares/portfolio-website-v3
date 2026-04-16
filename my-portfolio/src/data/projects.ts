export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A handcrafted editorial project demonstrating craftsmanship and thought.',
    techStack: ['React', 'TypeScript', 'Tailwind'],
    link: '#',
  },
  // more items...
];
