import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import GlassCard from '../components/GlassCard';
import { settingsRows } from '../data/mockData';
import { palette } from '../theme/colors';

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Settings</Text>

      <GlassCard title="Accessibility" subtitle="Designed for all kinds of humans" accent="primary">
        {settingsRows.map((row) => (
          <View key={row.label} style={styles.row}>
            <Text style={styles.rowLabel}>{row.label}</Text>
            <Text style={styles.rowValue}>{row.value}</Text>
          </View>
        ))}
      </GlassCard>

      <GlassCard title="Privacy" subtitle="Your consent stays in your control" accent="mint">
        <Text style={styles.privacyText}>Data use is transparent, limited, and manageable.</Text>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(27,31,42,0.08)',
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
  },
});
