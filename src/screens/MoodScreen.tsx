import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import GlassCard from '../components/GlassCard';
import { moodGuidance, moodOptions, supportPlans, type Mood } from '../data/mockData';
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
  const [showPlans, setShowPlans] = useState(true);

  const guidance = useMemo(() => moodGuidance[selectedMood], [selectedMood]);
  const recommendedPlan = useMemo(() => {
    if (selectedMood === 'Stressed' || selectedMood === 'Anxious') return supportPlans[0];
    if (selectedMood === 'Tired') return supportPlans[2];
    return supportPlans[1];
  }, [selectedMood]);

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
        <View style={styles.supportSummary}>
          <MaterialCommunityIcons name={recommendedPlan.icon as any} size={22} color={palette.primary} />
          <View style={styles.summaryTextWrap}>
            <Text style={styles.summaryTitle}>{recommendedPlan.title}</Text>
            <Text style={styles.summaryText}>{recommendedPlan.description}</Text>
          </View>
        </View>

        {showPlans && (
          <View style={styles.planList}>
            {supportPlans.map((plan) => (
              <TouchableOpacity
                key={plan.title}
                activeOpacity={0.85}
                onPress={() => setShowPlans(false)}
                style={styles.planCard}
              >
                <View style={styles.planIconWrap}>
                  <MaterialCommunityIcons name={plan.icon as any} size={18} color={palette.primary} />
                </View>
                <Text style={styles.planTitle}>{plan.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

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
  supportSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 8,
    marginBottom: 10,
  },
  summaryTextWrap: {
    flex: 1,
  },
  summaryTitle: {
    color: palette.text,
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 2,
  },
  summaryText: {
    color: '#5E697D',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 18,
  },
  planList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  planCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F8FC',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  planIconWrap: {
    width: 28,
    height: 28,
    borderRadius: 10,
    marginRight: 8,
    backgroundColor: '#EBF1FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  planTitle: {
    color: palette.text,
    fontSize: 12,
    fontWeight: '700',
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
