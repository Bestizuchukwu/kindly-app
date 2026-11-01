import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import GlassCard from '../components/GlassCard';
import { settingsRows } from '../data/mockData';
import { palette } from '../theme/colors';

export default function SettingsScreen() {
  const [highContrast, setHighContrast] = useState(true);
  const [privacyMode, setPrivacyMode] = useState(true);
  const [voiceGuidance, setVoiceGuidance] = useState(false);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>Settings</Text>

      <GlassCard title="Accessibility" subtitle="Designed for all kinds of humans" accent="primary">
        {settingsRows.map((row) => (
          <View key={row.label} style={styles.row}>
            <Text style={styles.rowLabel}>{row.label}</Text>
            <Text style={styles.rowValue}>{row.value}</Text>
          </View>
        ))}

        <View style={styles.toggleRow}>
          <Text style={styles.rowLabel}>High contrast</Text>
          <Switch value={highContrast} onValueChange={setHighContrast} thumbColor={highContrast ? palette.primary : '#F1F5F9'} />
        </View>
      </GlassCard>

      <GlassCard title="Privacy" subtitle="Your consent stays in your control" accent="mint">
        <View style={styles.toggleRow}>
          <Text style={styles.rowLabel}>Private mode</Text>
          <Switch value={privacyMode} onValueChange={setPrivacyMode} thumbColor={privacyMode ? palette.mintStrong : '#F1F5F9'} />
        </View>
        <View style={styles.toggleRow}>
          <Text style={styles.rowLabel}>Voice guidance</Text>
          <Switch value={voiceGuidance} onValueChange={setVoiceGuidance} thumbColor={voiceGuidance ? palette.primary : '#F1F5F9'} />
        </View>
        <Text style={styles.privacyText}>Data use is transparent, limited, and manageable. You can review and refine your preferences at any time.</Text>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(27,31,42,0.08)',
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 6,
  },
  rowLabel: {
    color: palette.text,
    fontWeight: '700',
  },
  rowValue: {
    color: palette.primary,
    fontWeight: '800',
  },
  privacyText: {
    color: palette.text,
    fontWeight: '600',
    lineHeight: 22,
    marginTop: 12,
  },
});
