import { useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { AppButton } from '@/components/ui/app-button';
import { AppCard } from '@/components/ui/app-card';
import { Screen } from '@/components/ui/screen';
import { Brand, Fonts } from '@/constants/theme';

const weekdaySummary = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export default function TodayScreen() {
  const metrics = useMemo(
    () => [
      { label: 'Status', value: 'UP' },
      { label: 'Window', value: '5:00–5:10' },
      { label: 'Steps', value: '38 / 50' },
    ],
    [],
  );

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <View>
            <ThemedText style={styles.eyebrow}>Today</ThemedText>
            <ThemedText style={styles.title}>Good morning, Kevin</ThemedText>
          </View>
          <View style={styles.avatarBubble}>
            <ThemedText style={styles.avatarText}>K</ThemedText>
          </View>
        </View>

        <AppCard tone="accent" style={styles.alarmCard}>
          <View style={styles.alarmRow}>
            <View>
              <ThemedText style={styles.cardLabel}>5:00 AM Alarm</ThemedText>
              <ThemedText style={styles.cardSubtext}>{weekdaySummary.join(' · ')}</ThemedText>
            </View>
            <View style={styles.alarmToggle}>
              <View style={styles.alarmToggleDot} />
              <ThemedText style={styles.alarmToggleText}>On</ThemedText>
            </View>
          </View>
        </AppCard>

        <AppCard style={styles.confirmCard}>
          <ThemedText style={styles.cardLabel}>Wake-up confirmation</ThemedText>
          <ThemedText style={styles.cardSubtext}>Walk 30–50 steps to confirm presence.</ThemedText>
          <View style={styles.metricRow}>
            {metrics.map((metric) => (
              <View key={metric.label} style={styles.metricItem}>
                <ThemedText style={styles.metricLabel}>{metric.label}</ThemedText>
                <ThemedText style={styles.metricValue}>{metric.value}</ThemedText>
              </View>
            ))}
          </View>
          <AppButton label="Log steps" />
        </AppCard>

        <View style={styles.rowSplit}>
          <AppCard tone="mint" style={styles.splitCard}>
            <ThemedText style={styles.cardLabel}>Daily status</ThemedText>
            <ThemedText style={styles.statusValue}>UP</ThemedText>
            <ThemedText style={styles.cardSubtext}>Locked at 5:20 AM</ThemedText>
          </AppCard>
          <AppCard tone="lilac" style={styles.splitCard}>
            <ThemedText style={styles.cardLabel}>Current streak</ThemedText>
            <ThemedText style={styles.statusValue}>6 days</ThemedText>
            <ThemedText style={styles.cardSubtext}>Best: 12 days</ThemedText>
          </AppCard>
        </View>

        <AppCard tone="peach" style={styles.reminderCard}>
          <ThemedText style={styles.cardLabel}>Skip next day</ThemedText>
          <ThemedText style={styles.cardSubtext}>
            Use a single skip to pause tomorrow without breaking your momentum.
          </ThemedText>
          <AppButton label="Schedule skip" variant="secondary" />
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
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  avatarBubble: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Brand.colors.card,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Brand.colors.line,
  },
  avatarText: {
    fontFamily: Fonts.rounded,
    fontWeight: '700',
    color: Brand.colors.ink,
  },
  alarmCard: {
    gap: Brand.spacing.md,
  },
  alarmRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  alarmToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Brand.spacing.xs,
    backgroundColor: Brand.colors.card,
    borderRadius: Brand.radii.md,
    paddingVertical: Brand.spacing.xs,
    paddingHorizontal: Brand.spacing.sm,
  },
  alarmToggleDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Brand.colors.accent,
  },
  alarmToggleText: {
    fontSize: 12,
    color: Brand.colors.ink,
  },
  confirmCard: {
    gap: Brand.spacing.sm,
  },
  cardLabel: {
    fontSize: 16,
    fontFamily: Fonts.rounded,
    fontWeight: '600',
  },
  cardSubtext: {
    color: Brand.colors.mutedText,
    lineHeight: 22,
  },
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Brand.spacing.sm,
  },
  metricItem: {
    alignItems: 'center',
  },
  metricLabel: {
    fontSize: 12,
    color: Brand.colors.mutedText,
  },
  metricValue: {
    fontSize: 16,
    fontFamily: Fonts.rounded,
    fontWeight: '600',
    color: Brand.colors.ink,
  },
  rowSplit: {
    flexDirection: 'row',
    gap: Brand.spacing.md,
  },
  splitCard: {
    flex: 1,
    gap: Brand.spacing.sm,
  },
  statusValue: {
    fontSize: 22,
    fontFamily: Fonts.rounded,
    fontWeight: '700',
    color: Brand.colors.ink,
  },
  reminderCard: {
    gap: Brand.spacing.sm,
  },
});
