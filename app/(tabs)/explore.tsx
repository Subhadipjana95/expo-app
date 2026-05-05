import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function StatisticsScreen() {
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.header}>
        <View style={styles.profileRow}>
          <View style={styles.avatar}>
            <IconSymbol name="person.fill" size={24} color={colors.icon} />
          </View>
          <View>
            <Text style={[styles.greeting, { color: colors.text }]}>
              👋 Bogdan!
            </Text>
            <Text style={[styles.subGreeting, { color: colors.icon }]}>
              You have 18 updates
            </Text>
          </View>
        </View>
        <View style={styles.headerIcons}>
          <View style={styles.iconBadge}>
            <IconSymbol name="waveform" size={20} color="white" />
          </View>
          <View style={styles.iconBadge}>
            <IconSymbol name="bell" size={20} color="white" />
          </View>
        </View>
      </View>

      <View style={styles.mapContainer}>
        {/* Placeholder for dots map */}
        <View style={styles.mapHeader}>
          <View style={styles.countryBadge}>
            <Text style={styles.flag}>🇺🇦</Text>
            <Text style={styles.countryName}>Ukraine</Text>
          </View>
        </View>
        <View style={styles.dotsContainer}>
          {Array.from({ length: 48 }).map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    i % 7 === 0
                      ? colors.yellow
                      : i % 5 === 0
                        ? colors.accent
                        : colors.border,
                },
              ]}
            />
          ))}
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statsHeader}>
          <Text style={[styles.statsTitle, { color: colors.text }]}>
            Parameters
          </Text>
          <IconSymbol name="ellipsis" size={20} color={colors.icon} />
        </View>

        <View style={styles.statItem}>
          <View>
            <Text style={[styles.statValue, { color: colors.text }]}>
              1,250
            </Text>
            <Text style={[styles.statLabel, { color: colors.icon }]}>
              Followers
            </Text>
          </View>
          <View
            style={[styles.progressBar, { backgroundColor: colors.border }]}
          >
            <View
              style={[
                styles.progressFill,
                { width: "70%", backgroundColor: colors.yellow },
              ]}
            />
          </View>
        </View>

        <View style={styles.statItem}>
          <View>
            <Text style={[styles.statValue, { color: colors.text }]}>
              356,814
            </Text>
            <Text style={[styles.statLabel, { color: colors.icon }]}>
              Likes
            </Text>
          </View>
          <View
            style={[styles.progressBar, { backgroundColor: colors.border }]}
          >
            <View
              style={[
                styles.progressFill,
                { width: "85%", backgroundColor: colors.primary },
              ]}
            />
          </View>
        </View>

        <View style={styles.statItem}>
          <View>
            <Text style={[styles.statValue, { color: colors.text }]}>972</Text>
            <Text style={[styles.statLabel, { color: colors.icon }]}>
              Comments
            </Text>
          </View>
          <View
            style={[styles.progressBar, { backgroundColor: colors.border }]}
          >
            <View
              style={[
                styles.progressFill,
                { width: "40%", backgroundColor: colors.green },
              ]}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 60,
    marginBottom: 30,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFE3E3",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subGreeting: {
    fontSize: 12,
  },
  headerIcons: {
    flexDirection: "row",
    gap: 12,
  },
  iconBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  mapContainer: {
    height: 200,
    paddingHorizontal: 20,
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  mapHeader: {
    position: "absolute",
    top: 0,
    right: 40,
    zIndex: 10,
  },
  countryBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  flag: {
    fontSize: 12,
  },
  countryName: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  dotsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  statsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  statsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statItem: {
    marginBottom: 20,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 12,
    marginBottom: 8,
  },
  progressBar: {
    height: 12,
    borderRadius: 6,
    width: "100%",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 6,
  },
});
