import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { palette, gradients } from '../theme/colors';

type OnboardingScreenProps = {
  onContinue: () => void;
};

const features = [
  {
    title: 'Gentle check-ins',
    text: 'Respond to your mood without pressure or clutter.',
    icon: 'mood-happy',
  },
  {
    title: 'Low-friction support',
    text: 'Get practical prompts that respect your pace and energy.',
    icon: 'heart-pulse',
  },
  {
    title: 'Private by default',
    text: 'Comfort, accessibility, and consent stay in your control.',
    icon: 'shield-check',
  },
];

export default function OnboardingScreen({ onContinue }: OnboardingScreenProps) {
  return (
    <LinearGradient colors={gradients.dark} style={styles.background}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.headerWrap}>
          <Text style={styles.badge}>Kindly</Text>
          <Text style={styles.title}>A calmer way to feel supported.</Text>
          <Text style={styles.subtitle}>
            Built for people who want clarity, comfort, and a gentler digital experience.
          </Text>
        </View>

        <View style={styles.cardList}>
          {features.map((feature, index) => (
            <View key={feature.title} style={[styles.featureCard, index === 1 && styles.featureCardAccent]}>
              <View style={styles.iconWrap}>
                <Text style={styles.icon}>{feature.icon}</Text>
              </View>
              <View style={styles.featureTextWrap}>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureText}>{feature.text}</Text>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={onContinue} activeOpacity={0.9}>
          <Text style={styles.primaryButtonText}>Start my calm routine</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  headerWrap: {
    marginBottom: 28,
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
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: -0.8,
    lineHeight: 42,
    marginTop: 18,
  },
  subtitle: {
    color: '#D4DEF5',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 26,
    marginTop: 12,
  },
  cardList: {
    gap: 12,
    marginBottom: 28,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    borderRadius: 20,
    padding: 16,
  },
  featureCardAccent: {
    backgroundColor: 'rgba(121, 134, 255, 0.12)',
  },
  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 20,
  },
  featureTextWrap: {
    flex: 1,
  },
  featureTitle: {
    color: palette.white,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  featureText: {
    color: '#D4DEF5',
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 20,
  },
  primaryButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(0,0,0,0.22)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.18,
    shadowRadius: 18,
    elevation: 8,
  },
  primaryButtonText: {
    color: palette.primary,
    fontSize: 16,
    fontWeight: '800',
  },
});
