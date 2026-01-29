import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { AppButton } from '@/components/ui/app-button';
import { AppCard } from '@/components/ui/app-card';
import { Screen } from '@/components/ui/screen';
import { Brand, Fonts } from '@/constants/theme';

const avatars = ['Sunrise', 'Cloud', 'Spark', 'Lotus', 'Moon', 'Aura'];

export default function OnboardingProfile() {
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);

  return (
    <Screen>
      <View style={styles.container}>
        <View>
          <ThemedText style={styles.eyebrow}>Step 1 of 2</ThemedText>
          <ThemedText style={styles.title}>Choose your name</ThemedText>
          <ThemedText style={styles.subtitle}>
            Keep it simple. Your name appears in the wake-up feed.
          </ThemedText>
        </View>

        <AppCard style={styles.inputCard}>
          <ThemedText style={styles.inputLabel}>Name or nickname</ThemedText>
          <TextInput
            placeholder="Early bird"
            placeholderTextColor={Brand.colors.mutedText}
            style={styles.input}
          />
        </AppCard>

        <AppCard tone="accent" style={styles.avatarCard}>
          <ThemedText style={styles.inputLabel}>Choose an avatar</ThemedText>
          <View style={styles.avatarGrid}>
            {avatars.map((avatar) => {
              const isSelected = avatar === selectedAvatar;
              return (
                <Pressable
                  key={avatar}
                  onPress={() => setSelectedAvatar(avatar)}
                  style={[
                    styles.avatarItem,
                    isSelected ? styles.avatarItemSelected : undefined,
                  ]}>
                  <View style={styles.avatarCircle}>
                    <ThemedText style={styles.avatarText}>{avatar.slice(0, 1)}</ThemedText>
                  </View>
                  <ThemedText style={styles.avatarLabel}>{avatar}</ThemedText>
                </Pressable>
              );
            })}
          </View>
        </AppCard>

        <View style={styles.buttonGroup}>
          <AppButton label="Continue" onPress={() => router.push('/(onboarding)/commit')} />
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
  inputCard: {
    gap: Brand.spacing.sm,
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: Fonts.rounded,
    fontWeight: '600',
  },
  input: {
    backgroundColor: Brand.colors.card,
    borderRadius: Brand.radii.md,
    borderWidth: 1,
    borderColor: Brand.colors.line,
    paddingVertical: Brand.spacing.sm,
    paddingHorizontal: Brand.spacing.md,
    fontSize: 16,
    color: Brand.colors.ink,
  },
  avatarCard: {
    gap: Brand.spacing.md,
  },
  avatarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Brand.spacing.md,
  },
  avatarItem: {
    width: '30%',
    alignItems: 'center',
    padding: Brand.spacing.sm,
    borderRadius: Brand.radii.md,
  },
  avatarItemSelected: {
    backgroundColor: Brand.colors.card,
    borderWidth: 1,
    borderColor: Brand.colors.ink,
  },
  avatarCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Brand.colors.peach,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 18,
    fontFamily: Fonts.rounded,
    fontWeight: '700',
    color: Brand.colors.ink,
  },
  avatarLabel: {
    marginTop: Brand.spacing.xs,
    fontSize: 12,
    color: Brand.colors.mutedText,
  },
  buttonGroup: {
    marginTop: 'auto',
    gap: Brand.spacing.sm,
  },
});
