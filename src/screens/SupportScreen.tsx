import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GlassCard from '../components/GlassCard';
import IconBadge from '../components/IconBadge';
import { actionDetails, quickHelpOptions } from '../data/mockData';
import { palette } from '../theme/colors';

export default function SupportScreen() {
  const [selectedAction, setSelectedAction] = useState('Take a breather');

  const activeSupport = useMemo(() => {
    const detail = actionDetails['Quick help'];
    return {
      ...detail,
      title: selectedAction,
      summary: selectedAction === 'Take a breather' 
        ? 'A gentle reset helps your body and brain come back to a steady rhythm.'
        : selectedAction === 'Speak with someone'
          ? 'Connect to a human for reassurance, perspective, and next-step support.'
          : selectedAction === 'Keep it simple'
            ? 'Reduce the load by focusing only on what feels essential right now.'
            : 'A short timer helps create enough space to focus without pressure.',
    };
  }, [selectedAction]);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>Support</Text>

      <GlassCard title="Need a calmer path?" subtitle="We can help reduce friction and stress." accent="primary">
        <View style={styles.stack}>
          <IconBadge name="lightbulb-on-outline" label="Simplify next steps" tint="primary" />
          <IconBadge name="cellphone-sound" label="Voice guidance available" tint="violet" />
          <IconBadge name="shield-check" label="Support without blame" tint="mint" />
        </View>
      </GlassCard>

      <GlassCard title={activeSupport.title} subtitle={activeSupport.summary} accent={activeSupport.accent}>
        <View style={styles.actionPillRow}>
          <Text style={styles.actionPill}>Low-pressure</Text>
          <Text style={styles.actionPill}>Private</Text>
          <Text style={styles.actionPill}>Gentle</Text>
        </View>
      </GlassCard>

      <GlassCard title="Quick help" subtitle="Choose a gentle next action" accent="warm">
        <View style={styles.helpList}>
          {quickHelpOptions.map((option) => (
            <TouchableOpacity
              key={option}
              accessibilityRole="button"
              accessibilityState={{ selected: selectedAction === option }}
              onPress={() => setSelectedAction(option)}
              style={[styles.helpTextWrap, selectedAction === option && styles.helpTextWrapSelected]}
            >
              <Text style={[styles.helpText, selectedAction === option && styles.helpTextSelected]}>{option}</Text>
            </TouchableOpacity>
          ))}
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
  stack: {
    marginTop: 4,
  },
  actionPillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  actionPill: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#F6F8FC',
    color: palette.text,
    fontWeight: '700',
    fontSize: 11,
  },
  helpList: {
    marginTop: 6,
  },
  helpTextWrap: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(27,31,42,0.08)',
    paddingVertical: 12,
  },
  helpTextWrapSelected: {
    backgroundColor: 'rgba(31, 94, 255, 0.06)',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginHorizontal: -4,
  },
  helpText: {
    fontSize: 15,
    fontWeight: '700',
    color: palette.text,
  },
  helpTextSelected: {
    color: palette.primary,
  },
});
