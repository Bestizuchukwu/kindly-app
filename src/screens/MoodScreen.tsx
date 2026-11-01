import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import GlassCard from '../components/GlassCard';
import { palette } from '../theme/colors';

export default function MoodScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Mood & wellbeing</Text>

      <GlassCard title="How are you feeling right now?" subtitle="Your check-in stays private and gentle." accent="warm">
        <View style={styles.moodGrid}>
          {['Calm', 'Stressed', 'Tired', 'Joyful', 'Anxious'].map((mood) => (
            <View key={mood} style={styles.moodBubble}>
              <Text style={styles.moodText}>{mood}</Text>
            </View>
          ))}
        </View>
      </GlassCard>

      <GlassCard title="Suggestions" subtitle="Soft support for this moment" accent="mint">
        <View style={styles.suggestionRow}>
          <MaterialCommunityIcons name="leaf" size={20} color="#1FAE8B" />
          <Text style={styles.suggestionText}>Take one calming step and pause for 60 seconds.</Text>
        </View>
        <View style={styles.suggestionRow}>
          <MaterialCommunityIcons name="lightbulb-on-outline" size={20} color={palette.primary} />
          <Text style={styles.suggestionText}>Keep the task list short and clear.</Text>
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
    paddingBottom: 40,
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
    backgroundColor: '#FFF3F0',
    borderColor: '#FFE2D8',
    borderWidth: 1,
    marginRight: 8,
    marginBottom: 8,
  },
  moodText: {
    fontWeight: '700',
    color: palette.text,
  },
  suggestionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 10,
  },
  suggestionText: {
    flex: 1,
    color: palette.text,
    fontWeight: '600',
  },
});
