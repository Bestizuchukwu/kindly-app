import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import GlassCard from '../components/GlassCard';
import ActionChip from '../components/ActionChip';
import IconBadge from '../components/IconBadge';
import { homeActions, moodOptions, supportCards } from '../data/mockData';
import { palette, gradients } from '../theme/colors';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <LinearGradient colors={gradients.primary} style={styles.hero}>
        <View style={styles.topRow}>
          <View>
            <Text style={styles.kicker}>Good morning</Text>
            <Text style={styles.heading}>How can I help today?</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <MaterialCommunityIcons name="account-circle" size={22} color={palette.white} />
          </TouchableOpacity>
        </View>

        <View style={styles.moodWrap}>
          {moodOptions.map((mood, index) => (
            <TouchableOpacity key={mood} style={[styles.moodPill, index === 0 && styles.moodSelected]}>
              <Text style={[styles.moodText, index === 0 && styles.moodTextSelected]}>{mood}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </LinearGradient>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Quick actions</Text>
        <Text style={styles.sectionLink}>View all</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipScroll}>
        {homeActions.map((action) => (
          <ActionChip
            key={action.label}
            label={action.label}
            icon={action.icon as any}
            active={action.label === 'Mood check'}
          />
        ))}
      </ScrollView>

      <View style={styles.grid}>
        {supportCards.map((card) => (
          <GlassCard
            key={card.title}
            title={card.title}
            subtitle={card.text}
            accent={card.accent as 'primary' | 'warm' | 'mint'}
          >
            <View style={styles.cardFooter}>
              <Text style={styles.cardMeta}>Recommended</Text>
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
    paddingBottom: 40,
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
    marginBottom: 18,
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
    width: 220,
    marginTop: 6,
    lineHeight: 36,
    letterSpacing: -0.8,
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
  grid: {
    gap: 12,
    marginBottom: 18,
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
