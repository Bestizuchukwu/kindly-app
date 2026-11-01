import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { palette } from '../theme/colors';

type ActionChipProps = {
  label: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  active?: boolean;
  onPress?: () => void;
};

export default function ActionChip({ label, icon, active = false, onPress }: ActionChipProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.wrapper, active && styles.activeWrapper]}
    >
      <View style={[styles.iconBox, active && styles.activeIconBox]}>
        <MaterialCommunityIcons name={icon} size={18} color={active ? palette.white : palette.primary} />
      </View>
      <Text style={[styles.label, active && styles.activeLabel]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    minWidth: 86,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 18,
    backgroundColor: '#F6F8FC',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#E7EDF8',
  },
  activeWrapper: {
    backgroundColor: palette.primary,
    borderColor: palette.primary,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: '#EBF1FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  activeIconBox: {
    backgroundColor: 'rgba(255,255,255,0.18)',
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: palette.text,
    textAlign: 'center',
  },
  activeLabel: {
    color: palette.white,
  },
});
