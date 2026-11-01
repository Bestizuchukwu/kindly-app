import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import GlassCard from '../components/GlassCard';
import IconBadge from '../components/IconBadge';
import { palette } from '../theme/colors';

export default function SupportScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Support</Text>

      <GlassCard title="Need a calmer path?" subtitle="We can help reduce friction and stress." accent="primary">
        <View style={styles.stack}>
          <IconBadge name="lightbulb-on-outline" label="Simplify next steps" tint="primary" />
          <IconBadge name="cellphone-sound" label="Voice guidance available" tint="violet" />
          <IconBadge name="shield-check" label="Support without blame" tint="mint" />
        </View>
      </GlassCard>

      <GlassCard title="Quick help" subtitle="Choose a gentle next action" accent="warm">
        <Text style={styles.helpText}>Take a breather</Text>
        <Text style={styles.helpText}>Speak with someone</Text>
        <Text style={styles.helpText}>Keep it simple</Text>
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
  stack: {
    marginTop: 4,
  },
  helpText: {
    fontSize: 15,
    fontWeight: '700',
    paddingVertical: 12,
    color: palette.text,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(27,31,42,0.08)',
  },
});
