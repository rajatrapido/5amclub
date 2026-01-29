import { useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { AppCard } from '@/components/ui/app-card';
import { Screen } from '@/components/ui/screen';
import { Brand, Fonts } from '@/constants/theme';

type WakeUser = {
  name: string;
  time: string;
  status: 'UP' | 'LATE';
};

export default function FeedScreen() {
  const wakeList = useMemo<WakeUser[]>(
    () => [
      { name: 'Mia', time: '5:02 AM', status: 'UP' },
      { name: 'Avery', time: '5:04 AM', status: 'UP' },
      { name: 'Nico', time: '5:06 AM', status: 'UP' },
      { name: 'Jules', time: '5:08 AM', status: 'UP' },
      { name: 'Sam', time: '5:12 AM', status: 'LATE' },
    ],
    [],
  );

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <View>
            <ThemedText style={styles.eyebrow}>Who&apos;s up</ThemedText>
            <ThemedText style={styles.title}>Morning roll call</ThemedText>
          </View>
          <View style={styles.counterPill}>
            <ThemedText style={styles.counterValue}>12</ThemedText>
            <ThemedText style={styles.counterLabel}>Up today</ThemedText>
          </View>
        </View>

        <AppCard tone="mint" style={styles.summaryCard}>
          <ThemedText style={styles.summaryTitle}>Shared moment</ThemedText>
          <ThemedText style={styles.summaryBody}>
            Everyone marked UP before 5:10 AM appears here, sorted by their wake time.
          </ThemedText>
        </AppCard>

        <View style={styles.listWrapper}>
          {wakeList.map((user) => (
            <View key={`${user.name}-${user.time}`} style={styles.listRow}>
              <View style={styles.avatarCircle}>
                <ThemedText style={styles.avatarText}>{user.name.slice(0, 1)}</ThemedText>
              </View>
              <View style={styles.listDetails}>
                <ThemedText style={styles.listName}>{user.name}</ThemedText>
                <ThemedText style={styles.listTime}>{user.time}</ThemedText>
              </View>
              <View
                style={[
                  styles.statusPill,
                  user.status === 'UP' ? styles.statusUp : styles.statusLate,
                ]}>
                <ThemedText style={styles.statusText}>{user.status}</ThemedText>
              </View>
            </View>
          ))}
        </View>
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
  counterPill: {
    backgroundColor: Brand.colors.card,
    borderRadius: Brand.radii.md,
    paddingVertical: Brand.spacing.sm,
    paddingHorizontal: Brand.spacing.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Brand.colors.line,
  },
  counterValue: {
    fontSize: 18,
    fontFamily: Fonts.rounded,
    fontWeight: '700',
  },
  counterLabel: {
    fontSize: 12,
    color: Brand.colors.mutedText,
  },
  summaryCard: {
    gap: Brand.spacing.sm,
  },
  summaryTitle: {
    fontSize: 16,
    fontFamily: Fonts.rounded,
    fontWeight: '600',
  },
  summaryBody: {
    color: Brand.colors.mutedText,
    lineHeight: 22,
  },
  listWrapper: {
    gap: Brand.spacing.sm,
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Brand.spacing.md,
    backgroundColor: Brand.colors.card,
    borderRadius: Brand.radii.lg,
    padding: Brand.spacing.md,
    borderWidth: 1,
    borderColor: Brand.colors.line,
  },
  avatarCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Brand.colors.peach,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontFamily: Fonts.rounded,
    fontWeight: '700',
    color: Brand.colors.ink,
  },
  listDetails: {
    flex: 1,
  },
  listName: {
    fontSize: 16,
    fontFamily: Fonts.rounded,
    fontWeight: '600',
  },
  listTime: {
    color: Brand.colors.mutedText,
  },
  statusPill: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: Brand.radii.md,
  },
  statusUp: {
    backgroundColor: Brand.colors.mint,
  },
  statusLate: {
    backgroundColor: Brand.colors.accentSoft,
  },
  statusText: {
    fontSize: 12,
    fontFamily: Fonts.rounded,
    fontWeight: '600',
    color: Brand.colors.ink,
  },
});
