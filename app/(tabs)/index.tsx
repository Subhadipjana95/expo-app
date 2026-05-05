import { AppButton } from "@/components/ui/app-button";
import { BarChart } from "@/components/ui/bar-chart";
import { Card } from "@/components/ui/card";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: Colors[colorScheme].background },
      ]}
    >
      <View style={styles.header}>
        <View style={styles.backButton}>
          <IconSymbol
            name="chevron.left"
            size={24}
            color={Colors[colorScheme].text}
          />
        </View>
        <View style={styles.headerIcons}>
          <View style={styles.iconBadge}>
            <IconSymbol name="waveform" size={20} color="white" />
          </View>
          <View style={styles.iconBadgeNotification}>
            <IconSymbol name="bell" size={20} color="white" />
            <View style={styles.dot} />
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <Text
          style={[styles.sectionTitle, { color: Colors[colorScheme].text }]}
        >
          Active traffic
        </Text>
        <Text style={[styles.mainValue, { color: Colors[colorScheme].text }]}>
          253k
        </Text>
        <Text style={[styles.subText, { color: Colors[colorScheme].icon }]}>
          Update your tariff plan to get more
        </Text>

        <View style={styles.actionRow}>
          <AppButton
            title="Update Tariff"
            icon="arrow.up.right"
            variant="primary"
          />
          <View style={styles.growthContainer}>
            <Text style={styles.growthText}>6%</Text>
            <IconSymbol
              name="arrow.up.right"
              size={14}
              color={Colors[colorScheme].green}
            />
          </View>
        </View>

        <Card style={styles.chartCard}>
          <View style={styles.chartHeader}>
            <Text
              style={[styles.chartTitle, { color: Colors[colorScheme].text }]}
            >
              Ads View
            </Text>
            <View style={styles.timeFilter}>
              <Text style={styles.filterText}>W</Text>
              <View style={styles.filterActive}>
                <Text style={styles.filterTextActive}>M</Text>
              </View>
              <Text style={styles.filterText}>Y</Text>
            </View>
          </View>
          <BarChart
            data={[40, 90, 150, 110, 80]}
            labels={["24k", "96k", "122k", "108k", "31k"]}
          />
        </Card>
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
    marginBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.05)",
    justifyContent: "center",
    alignItems: "center",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 12,
  },
  iconBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  iconBadgeNotification: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#55EFC4",
    borderWidth: 2,
    borderColor: "#000",
  },
  content: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  mainValue: {
    fontSize: 80,
    fontWeight: "bold",
    letterSpacing: -2,
  },
  subText: {
    fontSize: 14,
    marginBottom: 20,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  growthContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  growthText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  chartCard: {
    marginBottom: 100,
  },
  chartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  timeFilter: {
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 15,
    padding: 2,
    alignItems: "center",
  },
  filterText: {
    paddingHorizontal: 10,
    fontSize: 12,
    color: "#636E72",
  },
  filterActive: {
    backgroundColor: "#000",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  filterTextActive: {
    fontSize: 12,
    color: "#FFF",
    fontWeight: "bold",
  },
});
