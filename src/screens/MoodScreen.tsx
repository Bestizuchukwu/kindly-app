import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import GlassCard from '../components/GlassCard';
import { moodGuidance, moodOptions, type Mood } from '../data/mockData';
import { palette } from '../theme/colors';

const moodPalette: Record<Mood, string> = {
  Calm: '#EAFBF6',
  Stressed: '#FFF1EA',
  Tired: '#EAF0FF',
  Joyful: '#F1FCE7',
  Anxious: '#FFF7E6',
};

export default function MoodScreen() {
  const [selectedMood, setSelectedMood] = useState<Mood>('Calm');

  const guidance = useMemo(() => moodGuidance[selectedMood], [selectedMood]);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>Mood & wellbeing</Text>

      <GlassCard title="How are you feeling right now?" subtitle="Your check-in stays private and gentle." accent="warm">
        <View style={styles.moodGrid}>
          {moodOptions.map((mood) => (
            <TouchableOpacity
              key={mood}
              accessibilityRole="button"
              accessibilityState={{ selected: selectedMood === mood }}
              onPress={() => setSelectedMood(mood)}
              style={[styles.moodBubble, selectedMood === mood && styles.moodBubbleSelected, { backgroundColor: moodPalette[mood] }]}
            >
              <Text style={[styles.moodText, selectedMood === mood && styles.moodTextSelected]}>{mood}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </GlassCard>

      <GlassCard title={guidance.title} subtitle={guidance.advice} accent={guidance.tone}>
        <View style={styles.suggestionList}>
          <View style={styles.suggestionRow}>
            <MaterialCommunityIcons name="leaf" size={20} color="#1FAE8B" />
            <Text style={styles.suggestionText}>Take one calming step and pause for 60 seconds.</Text>
          </View>
          <View style={styles.suggestionRow}>
            <MaterialCommunityIcons name="lightbulb-on-outline" size={20} color={palette.primary} />
            <Text style={styles.suggestionText}>Keep the task list short and clear for this moment.</Text>
          </View>
          <View style={styles.suggestionRow}>
            <MaterialCommunityIcons name="shield-check" size={20} color="#7C6AFB" />
            <Text style={styles.suggestionText}>Remember that your check-in stays private and under your control.</Text>
          </View>
        </View>
      </GlassCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  content: {
    padding: 18,
    paddingBottom: 84,
  },
  header: {
    fontSize: 28,
    fontWeight: '800',
    color: palette.text,
    marginBottom: 18,
  },
  moodGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  moodBubble: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    borderColor: '#FFE2D8',
    borderWidth: 1,
    marginRight: 8,
    marginBottom: 8,
  },
  moodBubbleSelected: {
    borderColor: palette.primary,
    shadowColor: palette.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.14,
    shadowRadius: 10,
    elevation: 4,
  },
  moodText: {
    fontWeight: '700',
    color: palette.text,
  },
  moodTextSelected: {
    color: palette.primary,
  },
  suggestionList: {
    gap: 8,
  },
  suggestionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 10,
  },
  suggestionText: {
    flex: 1,
    color: palette.text,
    fontWeight: '600',
    lineHeight: 22,
  },
});
