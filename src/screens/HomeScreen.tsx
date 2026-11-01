import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import GlassCard from '../components/GlassCard';
import ActionChip from '../components/ActionChip';
import IconBadge from '../components/IconBadge';
import { actionDetails, dailyMoments, homeActions, moodOptions, supportCards, userProfile, type Mood } from '../data/mockData';
import { palette, gradients } from '../theme/colors';

export default function HomeScreen() {
  const [selectedMood, setSelectedMood] = useState<Mood>('Calm');
  const [selectedAction, setSelectedAction] = useState<string>('Mood check');

  const currentAction = useMemo(() => actionDetails[selectedAction], [selectedAction]);
  const greeting = new Date().getHours() < 12 ? 'Morning' : new Date().getHours() < 18 ? 'Afternoon' : 'Evening';

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <LinearGradient colors={gradients.primary} style={styles.hero}>
        <View style={styles.topRow}>
          <View>
            <Text style={styles.kicker}>Good {greeting}</Text>
            <Text style={styles.heading}>Hi {userProfile.firstName}, what feels kind today?</Text>
          </View>
          <TouchableOpacity style={styles.profileButton} accessibilityRole="button">
            <MaterialCommunityIcons name="account-circle" size={22} color={palette.white} />
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>{userProfile.role}</Text>

        <View style={styles.moodWrap}>
          {moodOptions.map((mood) => (
            <TouchableOpacity
              key={mood}
              accessibilityRole="button"
              accessibilityState={{ selected: selectedMood === mood }}
              onPress={() => setSelectedMood(mood)}
              style={[styles.moodPill, selectedMood === mood && styles.moodSelected]}
            >
              <Text style={[styles.moodText, selectedMood === mood && styles.moodTextSelected]}>{mood}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.selectionText}>{selectedMood} selected • a gentle check-in is ready</Text>
      </LinearGradient>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Quick actions</Text>
        <Text style={styles.sectionLink}>View all</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipScroll} contentContainerStyle={styles.chipContent}>
        {homeActions.map((action) => (
          <ActionChip
            key={action.label}
            label={action.label}
            icon={action.icon as any}
            active={selectedAction === action.label}
            onPress={() => setSelectedAction(action.label)}
          />
        ))}
      </ScrollView>

      <GlassCard title={currentAction.title} subtitle={currentAction.summary} accent={currentAction.accent}>
        <View style={styles.actionFooter}>
          <Text style={styles.actionMeta}>{currentAction.cta}</Text>
          <MaterialCommunityIcons name="arrow-right" size={18} color={palette.primary} />
        </View>
      </GlassCard>

      <View style={styles.grid}>
        {dailyMoments.map((card) => (
          <GlassCard
            key={card.title}
            title={card.title}
            subtitle={card.text}
            accent={card.accent as 'primary' | 'warm' | 'mint'}
          >
            <View style={styles.cardFooter}>
              <Text style={styles.cardMeta}>Care note</Text>
              <MaterialCommunityIcons name="arrow-right" size={18} color={palette.primary} />
            </View>
          </GlassCard>
        ))}
      </View>

      <GlassCard title="Your support profile" subtitle="Human-first preferences" accent="mint">
        <IconBadge name="account-heart" label="Low-pressure mode" tint="mint" />
        <IconBadge name="eye" label="High contrast active" tint="primary" />
        <IconBadge name="voice" label="Voice-first available" tint="violet" />
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
  hero: {
    borderRadius: 28,
    padding: 20,
    paddingBottom: 18,
    shadowColor: palette.shadow,
    shadowOpacity: 0.18,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  kicker: {
    color: '#D8E4FF',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  heading: {
    color: palette.white,
    fontSize: 30,
    fontWeight: '800',
    width: 250,
    marginTop: 6,
    lineHeight: 36,
    letterSpacing: -0.8,
  },
  subtitle: {
    color: '#E7F0FF',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 18,
  },
  profileButton: {
    width: 42,
    height: 42,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.14)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.22)',
  },
  moodWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  moodPill: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.13)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.14)',
  },
  moodSelected: {
    backgroundColor: '#FFFFFF',
  },
  moodText: {
    color: '#E8EEF8',
    fontSize: 12,
    fontWeight: '700',
  },
  moodTextSelected: {
    color: palette.primary,
  },
  selectionText: {
    color: '#E9F1FF',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 22,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: palette.text,
  },
  sectionLink: {
    fontSize: 12,
    fontWeight: '700',
    color: palette.primary,
  },
  chipScroll: {
    marginBottom: 18,
  },
  chipContent: {
    paddingRight: 10,
  },
  actionFooter: {
    marginTop: 14,
    borderTopWidth: 1,
    borderTopColor: 'rgba(27,31,42,0.08)',
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionMeta: {
    color: '#5F6D83',
    fontWeight: '700',
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  grid: {
    marginBottom: 6,
  },
  cardFooter: {
    marginTop: 14,
    borderTopWidth: 1,
    borderTopColor: 'rgba(27,31,42,0.08)',
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardMeta: {
    color: '#5F6D83',
    fontWeight: '700',
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
});
