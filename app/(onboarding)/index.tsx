import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { AppButton } from '@/components/ui/app-button';
import { AppCard } from '@/components/ui/app-card';
import { Screen } from '@/components/ui/screen';
import { Brand, Fonts } from '@/constants/theme';

export default function OnboardingWelcome() {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.heroRow}>
          <View style={styles.heroBadge}>
            <ThemedText style={styles.heroBadgeText}>5:00 AM</ThemedText>
            <ThemedText style={styles.heroBadgeSub}>Weekdays only</ThemedText>
          </View>
          <View style={styles.heroIllustration}>
            <View style={styles.heroCircleLarge} />
            <View style={styles.heroCircleSmall} />
            <View style={styles.heroLine} />
          </View>
        </View>

        <ThemedText style={styles.title}>Welcome to 5AmClub</ThemedText>
        <ThemedText style={styles.subtitle}>
          A calm ritual for early risers. Confirm your wake-up and share the moment with others.
        </ThemedText>

        <AppCard tone="muted" style={styles.card}>
          <ThemedText style={styles.cardTitle}>Daily ritual</ThemedText>
          <ThemedText style={styles.cardBody}>
            Step into the morning within the 5:00–5:10 AM window. Your status is locked at 5:20 AM.
          </ThemedText>
        </AppCard>

        <View style={styles.buttonGroup}>
          <AppButton label="Get started" onPress={() => router.push('/(onboarding)/profile')} />
          <AppButton
            label="Skip for now"
            variant="ghost"
            onPress={() => router.replace('/(tabs)')}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Brand.spacing.xl,
    gap: Brand.spacing.lg,
  },
  heroRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heroBadge: {
    backgroundColor: Brand.colors.accentSoft,
    borderRadius: Brand.radii.md,
    paddingVertical: Brand.spacing.sm,
    paddingHorizontal: Brand.spacing.md,
  },
  heroBadgeText: {
    fontSize: 22,
    fontFamily: Fonts.rounded,
    fontWeight: '700',
    color: Brand.colors.ink,
  },
  heroBadgeSub: {
    fontSize: 12,
    color: Brand.colors.mutedText,
  },
  heroIllustration: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroCircleLarge: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Brand.colors.mint,
  },
  heroCircleSmall: {
    position: 'absolute',
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: Brand.colors.lilac,
    top: 10,
    right: 12,
  },
  heroLine: {
    position: 'absolute',
    width: 52,
    height: 8,
    borderRadius: 4,
    backgroundColor: Brand.colors.accent,
    bottom: 24,
    left: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: Fonts.rounded,
    fontWeight: '700',
    color: Brand.colors.ink,
  },
  subtitle: {
    fontSize: 16,
    color: Brand.colors.mutedText,
    lineHeight: 24,
  },
  card: {
    gap: Brand.spacing.sm,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: Fonts.rounded,
    fontWeight: '600',
  },
  cardBody: {
    color: Brand.colors.mutedText,
    lineHeight: 22,
  },
  buttonGroup: {
    marginTop: 'auto',
    gap: Brand.spacing.sm,
  },
});
