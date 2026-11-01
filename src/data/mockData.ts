export type Mood = 'Calm' | 'Stressed' | 'Tired' | 'Joyful' | 'Anxious';

export const moodOptions: Mood[] = ['Calm', 'Stressed', 'Tired', 'Joyful', 'Anxious'];

export const userProfile = {
  firstName: 'Sam',
  role: 'You deserve a thoughtful rhythm today',
  journalPrompt: 'What felt kind today?',
};

export const dailyMoments = [
  { title: 'Slow start', text: 'A softer beginning can make the rest of the day feel lighter.', accent: 'mint' },
  { title: 'Reset point', text: 'Take a break when your energy starts to slip.', accent: 'primary' },
  { title: 'Gentle check-in', text: 'Notice what feels easier, kinder, or more manageable.', accent: 'warm' },
];

export const dailyJournalPrompts = [
  'What felt manageable today?',
  'What made me feel steady?',
  'What do I need more of tomorrow?',
  'What deserves a little kindness?',
];

export const emotionalMilestones = [
  { title: 'First check-in', detail: 'You noticed your energy and chose a gentler pace.', tone: 'mint' },
  { title: 'Small win', detail: 'You paused before pushing through and gave yourself room to breathe.', tone: 'primary' },
  { title: 'Self-trust', detail: 'You listened to your body and made a thoughtful decision.', tone: 'warm' },
];

export const reminderNotes = [
  'Take 3 slow breaths before your next task.',
  'You do not have to earn rest.',
  'A smaller next step is still progress.',
  'Your pace is valid.',
];

export const moodGuidance: Record<Mood, { title: string; advice: string; tone: 'primary' | 'warm' | 'mint' }> = {
  Calm: { title: 'Steady rhythm', advice: 'Keep the next action small and gentle.', tone: 'mint' },
  Stressed: { title: 'Reduce pressure', advice: 'Cut the task list to one meaningful step.', tone: 'warm' },
  Tired: { title: 'Protect energy', advice: 'Choose the easiest possible next step and pause.', tone: 'primary' },
  Joyful: { title: 'Lean into momentum', advice: 'Channel this energy into something meaningful and doable.', tone: 'mint' },
  Anxious: { title: 'Create calm', advice: 'Focus on clarity, safety, and one clear action.', tone: 'warm' },
};

export const homeActions = [
  { label: 'Mood check', icon: 'mood-happy', hint: 'Check in with yourself' },
  { label: 'Quick help', icon: 'help-circle', hint: 'See what support is available' },
  { label: 'Privacy', icon: 'shield-check', hint: 'Review your settings' },
  { label: 'Accessibility', icon: 'human', hint: 'Adjust comfort and readability' },
];

export const actionDetails: Record<string, { title: string; summary: string; accent: 'primary' | 'warm' | 'mint'; cta: string }> = {
  'Mood check': {
    title: 'Mood check',
    summary: 'Take a quick pause and reflect on what would feel easiest right now.',
    accent: 'mint',
    cta: 'Check in',
  },
  'Quick help': {
    title: 'Quick help',
    summary: 'Get low-pressure guidance and support steps without feeling overwhelmed.',
    accent: 'primary',
    cta: 'See options',
  },
  Privacy: {
    title: 'Privacy',
    summary: 'Review how much information is shared and how you stay in control.',
    accent: 'warm',
    cta: 'Review privacy',
  },
  Accessibility: {
    title: 'Accessibility',
    summary: 'Adjust contrast, layout, and comfort settings to match your needs.',
    accent: 'mint',
    cta: 'Open settings',
  },
};

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

export const supportPlans = [
  { title: 'Grounding plan', description: 'Pause, breathe, and reduce the task to one next action.', icon: 'leaf', tint: 'mint' },
  { title: 'Focus plan', description: 'Hide clutter, lower noise, and simplify the next steps.', icon: 'focus-auto', tint: 'primary' },
  { title: 'Reset plan', description: 'Take a short break and return when your energy feels steadier.', icon: 'restart', tint: 'warm' },
];
