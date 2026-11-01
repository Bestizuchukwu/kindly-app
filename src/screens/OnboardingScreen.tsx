import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { palette, gradients } from '../theme/colors';

type OnboardingScreenProps = {
  onContinue: () => void;
};

const questions = [
  {
    key: 'supportStyle',
    title: 'How do you like to be supported?',
    options: ['Gentle nudges', 'Clear structure', 'Voice guidance', 'Private and quiet'],
  },
  {
    key: 'primaryNeed',
    title: 'What matters most right now?',
    options: ['Calm', 'Focus', 'Energy', 'Clarity'],
  },
  {
    key: 'environment',
    title: 'What environment are you in?',
    options: ['At home', 'On the move', 'At work', 'Quiet moment'],
  },
];

export default function OnboardingScreen({ onContinue }: OnboardingScreenProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const currentQuestion = questions[step];
  const progress = useMemo(() => ((step + 1) / questions.length) * 100, [step]);

  const selectOption = (option: string) => {
    const updatedAnswers = { ...answers, [currentQuestion.key]: option };
    setAnswers(updatedAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
      return;
    }

    onContinue();
  };

  return (
    <LinearGradient colors={gradients.dark} style={styles.background}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.progressWrap}>
          <Text style={styles.progressText}>Step {step + 1} of {questions.length}</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
        </View>

        <View style={styles.headerWrap}>
          <Text style={styles.badge}>Kindly</Text>
          <Text style={styles.title}>{currentQuestion.title}</Text>
        </View>

        <View style={styles.cardList}>
          {currentQuestion.options.map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.optionCard,
                answers[currentQuestion.key] === option && styles.optionCardSelected,
              ]}
              onPress={() => selectOption(option)}
              activeOpacity={0.9}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.secondaryButton} onPress={() => setStep(Math.max(0, step - 1))} activeOpacity={0.9}>
          <Text style={styles.secondaryButtonText}>Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  progressWrap: {
    marginBottom: 26,
  },
  progressText: {
    color: '#D4DEF5',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  progressBar: {
    height: 8,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 999,
    overflow: 'hidden',
    marginTop: 12,
  },
  progressFill: {
    height: '100%',
    borderRadius: 999,
    backgroundColor: '#FFFFFF',
  },
  headerWrap: {
    marginBottom: 24,
  },
  badge: {
    alignSelf: 'flex-start',
    color: '#D9E8FF',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderColor: 'rgba(255,255,255,0.18)',
    borderWidth: 1,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
    overflow: 'hidden',
    paddingHorizontal: 12,
    paddingVertical: 6,
    textTransform: 'uppercase',
  },
  title: {
    color: palette.white,
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: -0.8,
    lineHeight: 38,
    marginTop: 18,
  },
  cardList: {
    gap: 12,
    marginBottom: 24,
  },
  optionCard: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderColor: 'rgba(255,255,255,0.12)',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  optionCardSelected: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
  },
  optionText: {
    color: palette.white,
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButton: {
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  secondaryButtonText: {
    color: '#E8F0FF',
    fontSize: 14,
    fontWeight: '700',
  },
});
