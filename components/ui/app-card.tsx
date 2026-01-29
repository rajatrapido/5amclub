import { ReactNode } from 'react';
import { Platform, StyleSheet, View, type ViewStyle } from 'react-native';

import { Brand } from '@/constants/theme';

type AppCardTone = 'default' | 'muted' | 'accent' | 'mint' | 'lilac' | 'peach';

type AppCardProps = {
  children: ReactNode;
  style?: ViewStyle;
  tone?: AppCardTone;
};

const toneMap: Record<AppCardTone, string> = {
  default: Brand.colors.card,
  muted: Brand.colors.cardMuted,
  accent: Brand.colors.accentSoft,
  mint: Brand.colors.mint,
  lilac: Brand.colors.lilac,
  peach: Brand.colors.peach,
};

export function AppCard({ children, style, tone = 'default' }: AppCardProps) {
  return <View style={[styles.card, { backgroundColor: toneMap[tone] }, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Brand.radii.lg,
    padding: Brand.spacing.lg,
    borderWidth: 1,
    borderColor: Brand.colors.line,
    ...Platform.select({
      ios: Brand.shadow.ios,
      android: Brand.shadow.android,
    }),
  },
});
