import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { palette } from '../theme/colors';

type IconBadgeProps = {
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  label: string;
  tint?: 'primary' | 'mint' | 'warm' | 'violet';
};

export default function IconBadge({ name, label, tint = 'primary' }: IconBadgeProps) {
  const colors = {
    primary: { background: '#EAF0FF', color: palette.primary },
    mint: { background: '#EAFBF6', color: '#1FAE8B' },
    warm: { background: '#FFF1EA', color: '#EF7B5C' },
    violet: { background: '#F2EEFF', color: '#7C6AFB' },
  };

  const style = colors[tint];

  return (
    <View style={styles.row}>
      <View style={[styles.badge, { backgroundColor: style.background }]}>
        <MaterialCommunityIcons name={name} size={16} color={style.color} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
  badge: {
    width: 34,
    height: 34,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 13,
    color: palette.text,
    fontWeight: '700',
  },
});
