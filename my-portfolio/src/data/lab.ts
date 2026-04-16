export interface LabItem {
  id: string;
  content: string;
  type?: 'note' | 'image' | 'link';
}

export const labItems: LabItem[] = [
  { id: '1', content: 'Sketch of homepage layout', type: 'note' },
  { id: '2', content: 'Link to inspiration', type: 'link' },
];
