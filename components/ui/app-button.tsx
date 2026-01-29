import { Pressable, StyleSheet, Text, type PressableProps } from 'react-native';

import { Brand, Fonts } from '@/constants/theme';

type AppButtonVariant = 'primary' | 'secondary' | 'ghost';

type AppButtonProps = PressableProps & {
  label: string;
  variant?: AppButtonVariant;
};

const variantStyles = {
  primary: {
    backgroundColor: Brand.colors.accent,
    textColor: Brand.colors.ink,
    borderColor: 'transparent',
  },
  secondary: {
    backgroundColor: Brand.colors.card,
    textColor: Brand.colors.ink,
    borderColor: Brand.colors.line,
  },
  ghost: {
    backgroundColor: 'transparent',
    textColor: Brand.colors.ink,
    borderColor: 'transparent',
  },
} satisfies Record<AppButtonVariant, { backgroundColor: string; textColor: string; borderColor: string }>;

export function AppButton({ label, variant = 'primary', style, ...props }: AppButtonProps) {
  const visual = variantStyles[variant];

  return (
    <Pressable
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.base,
        {
          backgroundColor: visual.backgroundColor,
          borderColor: visual.borderColor,
          opacity: pressed ? 0.85 : 1,
        },
        style,
      ]}
      {...props}>
      <Text style={[styles.label, { color: visual.textColor }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: Brand.spacing.md,
    paddingHorizontal: Brand.spacing.lg,
    borderRadius: Brand.radii.lg,
    alignItems: 'center',
    borderWidth: 1,
  },
  label: {
    fontSize: 16,
    fontFamily: Fonts.rounded,
    fontWeight: '600',
  },
});
