export type Mood = 'Calm' | 'Stressed' | 'Tired' | 'Joyful' | 'Anxious';

export const moodOptions: Mood[] = ['Calm', 'Stressed', 'Tired', 'Joyful', 'Anxious'];

export const homeActions = [
  { label: 'Mood check', icon: 'mood-happy' },
  { label: 'Quick help', icon: 'help-circle' },
  { label: 'Privacy', icon: 'shield-check' },
  { label: 'Accessibility', icon: 'human' },
];

export const supportCards = [
  { title: 'Calm mode', text: 'Reduce pressure and simplify actions.', accent: 'mint' },
  { title: 'Focus mode', text: 'Block clutter and keep the path clear.', accent: 'primary' },
  { title: 'Voice-first', text: 'For mobile, noisy, or hands-free moments.', accent: 'warm' },
];

export const settingsRows = [
  { label: 'Text size', value: 'Large' },
  { label: 'Contrast', value: 'High' },
  { label: 'Language', value: 'English' },
  { label: 'Privacy', value: 'On' },
];
