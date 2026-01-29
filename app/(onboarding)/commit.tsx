import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { AppButton } from '@/components/ui/app-button';
import { AppCard } from '@/components/ui/app-card';
import { Screen } from '@/components/ui/screen';
import { Brand, Fonts } from '@/constants/theme';

export default function OnboardingCommit() {
  return (
    <Screen>
      <View style={styles.container}>
        <View>
          <ThemedText style={styles.eyebrow}>Step 2 of 2</ThemedText>
          <ThemedText style={styles.title}>Commit to 5:00 AM</ThemedText>
          <ThemedText style={styles.subtitle}>
            Your alarm is fixed for weekdays. You can skip the next day once you start.
          </ThemedText>
        </View>

        <AppCard tone="lilac" style={styles.alarmCard}>
          <View style={styles.alarmRow}>
            <View>
              <ThemedText style={styles.alarmLabel}>Weekdays</ThemedText>
              <ThemedText style={styles.alarmDays}>Mon · Tue · Wed · Thu · Fri</ThemedText>
            </View>
            <View style={styles.alarmTimePill}>
              <ThemedText style={styles.alarmTime}>5:00</ThemedText>
              <ThemedText style={styles.alarmTimeSub}>AM</ThemedText>
            </View>
          </View>
          <View style={styles.alarmDivider} />
          <View style={styles.alarmRow}>
            <ThemedText style={styles.alarmNote}>Motion confirmation</ThemedText>
            <ThemedText style={styles.alarmSteps}>30–50 steps</ThemedText>
          </View>
        </AppCard>

        <AppCard tone="mint" style={styles.reminderCard}>
          <ThemedText style={styles.reminderTitle}>Daily status</ThemedText>
          <ThemedText style={styles.reminderBody}>
            Confirm between 5:00–5:10 AM to be marked UP. After 5:20 AM your status is locked.
          </ThemedText>
        </AppCard>

        <View style={styles.buttonGroup}>
          <AppButton label="Activate 5:00 AM" onPress={() => router.replace('/(tabs)')} />
          <AppButton label="Back" variant="secondary" onPress={() => router.back()} />
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
  eyebrow: {
    fontSize: 12,
    color: Brand.colors.mutedText,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
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
  alarmCard: {
    gap: Brand.spacing.md,
  },
  alarmRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  alarmLabel: {
    fontSize: 14,
    fontFamily: Fonts.rounded,
    fontWeight: '600',
  },
  alarmDays: {
    color: Brand.colors.mutedText,
  },
  alarmTimePill: {
    backgroundColor: Brand.colors.card,
    borderRadius: Brand.radii.md,
    paddingVertical: Brand.spacing.sm,
    paddingHorizontal: Brand.spacing.md,
    alignItems: 'center',
  },
  alarmTime: {
    fontSize: 26,
    fontFamily: Fonts.rounded,
    fontWeight: '700',
    color: Brand.colors.ink,
  },
  alarmTimeSub: {
    fontSize: 12,
    color: Brand.colors.mutedText,
  },
  alarmDivider: {
    height: 1,
    backgroundColor: Brand.colors.line,
  },
  alarmNote: {
    fontSize: 14,
    fontFamily: Fonts.rounded,
    fontWeight: '600',
  },
  alarmSteps: {
    fontSize: 14,
    color: Brand.colors.mutedText,
  },
  reminderCard: {
    gap: Brand.spacing.sm,
  },
  reminderTitle: {
    fontSize: 16,
    fontFamily: Fonts.rounded,
    fontWeight: '600',
  },
  reminderBody: {
    color: Brand.colors.mutedText,
    lineHeight: 22,
  },
  buttonGroup: {
    marginTop: 'auto',
    gap: Brand.spacing.sm,
  },
});
