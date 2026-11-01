export type Mood = 'Calm' | 'Stressed' | 'Tired' | 'Joyful' | 'Anxious';

export const moodOptions: Mood[] = ['Calm', 'Stressed', 'Tired', 'Joyful', 'Anxious'];

export const moodGuidance: Record<Mood, { title: string; advice: string; tone: 'primary' | 'warm' | 'mint' }> = {
  Calm: {
    title: 'Steady rhythm',
    advice: 'Keep the next action small and gentle.',
    tone: 'mint',
  },
  Stressed: {
    title: 'Reduce pressure',
    advice: 'Cut the task list to one meaningful step.',
    tone: 'warm',
  },
  Tired: {
    title: 'Protect energy',
    advice: 'Choose the easiest possible next step and pause.',
    tone: 'primary',
  },
  Joyful: {
    title: 'Lean into momentum',
    advice: 'Channel this energy into something meaningful and doable.',
    tone: 'mint',
  },
  Anxious: {
    title: 'Create calm',
    advice: 'Focus on clarity, safety, and one clear action.',
    tone: 'warm',
  },
};

export const homeActions = [
  { label: 'Mood check', icon: 'mood-happy', hint: 'Check in with yourself' },
  { label: 'Quick help', icon: 'help-circle', hint: 'See what support is available' },
  { label: 'Privacy', icon: 'shield-check', hint: 'Review your settings' },
  { label: 'Accessibility', icon: 'human', hint: 'Adjust comfort and readability' },
];

export const supportCards = [
  { title: 'Calm mode', text: 'Reduce pressure and simplify actions.', accent: 'mint', cta: 'Try now' },
  { title: 'Focus mode', text: 'Block clutter and keep the path clear.', accent: 'primary', cta: 'Use mode' },
  { title: 'Voice-first', text: 'For mobile, noisy, or hands-free moments.', accent: 'warm', cta: 'Enable' },
];

export const settingsRows = [
  { label: 'Text size', value: 'Large' },
  { label: 'Contrast', value: 'High' },
  { label: 'Language', value: 'English' },
  { label: 'Privacy', value: 'On' },
];

export const quickHelpOptions = [
  'Take a breather',
  'Speak with someone',
  'Keep it simple',
  'Set a 10-minute timer',
];
