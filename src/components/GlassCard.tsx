import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { palette } from '../theme/colors';

type GlassCardProps = {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  accent?: 'primary' | 'warm' | 'mint' | 'violet';
};

export default function GlassCard({ title, subtitle, children, accent = 'primary' }: GlassCardProps) {
  const accentColors = {
    primary: ['#EAF0FF', '#EEF3FF'],
    warm: ['#FFF2ED', '#FFF7F3'],
    mint: ['#EAFBF6', '#F0FFF9'],
    violet: ['#F2EEFF', '#F7F3FF'],
  };

  return (
    <View style={[styles.card, { backgroundColor: accentColors[accent][0] }]}> 
      {(title || subtitle) && (
        <View style={styles.headingWrap}>
          {title ? <Text style={styles.title}>{title}</Text> : null}
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>
      )}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.45)',
    shadowColor: palette.shadow,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 6,
    marginBottom: 14,
  },
  headingWrap: {
    marginBottom: 12,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: palette.text,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 12,
    color: '#5E697D',
    fontWeight: '600',
  },
});
