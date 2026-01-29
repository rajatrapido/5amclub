import { useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { AppCard } from '@/components/ui/app-card';
import { Screen } from '@/components/ui/screen';
import { Brand, Fonts } from '@/constants/theme';

type DayStatus = {
  day: string;
  status: 'UP' | 'LATE' | 'MISSED';
};

export default function StreakScreen() {
  const weekly = useMemo<DayStatus[]>(
    () => [
      { day: 'Mon', status: 'UP' },
      { day: 'Tue', status: 'UP' },
      { day: 'Wed', status: 'UP' },
      { day: 'Thu', status: 'LATE' },
      { day: 'Fri', status: 'UP' },
    ],
    [],
  );

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View>
          <ThemedText style={styles.eyebrow}>Streaks</ThemedText>
          <ThemedText style={styles.title}>Consistency snapshot</ThemedText>
          <ThemedText style={styles.subtitle}>
            Late or missed days pause your streak. Every UP day starts momentum again.
          </ThemedText>
        </View>

        <View style={styles.metricRow}>
          <AppCard tone="accent" style={styles.metricCard}>
            <ThemedText style={styles.metricLabel}>Current</ThemedText>
            <ThemedText style={styles.metricValue}>6 days</ThemedText>
            <ThemedText style={styles.metricSubtext}>All UP this week</ThemedText>
          </AppCard>
          <AppCard tone="mint" style={styles.metricCard}>
            <ThemedText style={styles.metricLabel}>Best</ThemedText>
            <ThemedText style={styles.metricValue}>12 days</ThemedText>
            <ThemedText style={styles.metricSubtext}>May streak</ThemedText>
          </AppCard>
        </View>

        <AppCard style={styles.weeklyCard}>
          <ThemedText style={styles.metricLabel}>This week</ThemedText>
          <View style={styles.weeklyRow}>
            {weekly.map((day) => (
              <View key={day.day} style={styles.weeklyItem}>
                <View
                  style={[
                    styles.weeklyStatus,
                    day.status === 'UP'
                      ? styles.weeklyUp
                      : day.status === 'LATE'
                        ? styles.weeklyLate
                        : styles.weeklyMissed,
                  ]}
                />
                <ThemedText style={styles.weeklyLabel}>{day.day}</ThemedText>
              </View>
            ))}
          </View>
        </AppCard>

        <AppCard tone="lilac" style={styles.guidanceCard}>
          <ThemedText style={styles.metricLabel}>Streak rules</ThemedText>
          <View style={styles.ruleRow}>
            <View style={[styles.ruleDot, styles.weeklyUp]} />
            <ThemedText style={styles.ruleText}>UP keeps the streak going.</ThemedText>
          </View>
          <View style={styles.ruleRow}>
            <View style={[styles.ruleDot, styles.weeklyLate]} />
            <ThemedText style={styles.ruleText}>LATE pauses the streak.</ThemedText>
          </View>
          <View style={styles.ruleRow}>
            <View style={[styles.ruleDot, styles.weeklyMissed]} />
            <ThemedText style={styles.ruleText}>MISSED pauses it until you&apos;re UP again.</ThemedText>
          </View>
        </AppCard>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Brand.spacing.xl,
    gap: Brand.spacing.lg,
  },
  eyebrow: {
    fontSize: 12,
    color: Brand.colors.mutedText,
    textTransform: 'uppercase',
    letterSpacing: 1.4,
  },
  title: {
    fontSize: 28,
    fontFamily: Fonts.rounded,
    fontWeight: '700',
    color: Brand.colors.ink,
  },
  subtitle: {
    marginTop: Brand.spacing.sm,
    color: Brand.colors.mutedText,
    lineHeight: 22,
  },
  metricRow: {
    flexDirection: 'row',
    gap: Brand.spacing.md,
  },
  metricCard: {
    flex: 1,
    gap: Brand.spacing.xs,
  },
  metricLabel: {
    fontSize: 14,
    fontFamily: Fonts.rounded,
    fontWeight: '600',
  },
  metricValue: {
    fontSize: 22,
    fontFamily: Fonts.rounded,
    fontWeight: '700',
    color: Brand.colors.ink,
  },
  metricSubtext: {
    color: Brand.colors.mutedText,
  },
  weeklyCard: {
    gap: Brand.spacing.md,
  },
  weeklyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weeklyItem: {
    alignItems: 'center',
    gap: Brand.spacing.xs,
  },
  weeklyStatus: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  weeklyUp: {
    backgroundColor: Brand.colors.mint,
  },
  weeklyLate: {
    backgroundColor: Brand.colors.accentSoft,
  },
  weeklyMissed: {
    backgroundColor: Brand.colors.cardMuted,
  },
  weeklyLabel: {
    fontSize: 12,
    color: Brand.colors.mutedText,
  },
  guidanceCard: {
    gap: Brand.spacing.sm,
  },
  ruleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Brand.spacing.sm,
  },
  ruleDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  ruleText: {
    color: Brand.colors.mutedText,
  },
});
