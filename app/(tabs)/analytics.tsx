import { Card } from "@/components/ui/card";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function AnalyticsScreen() {
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.header}>
        <View style={styles.backButton}>
          <IconSymbol name="chevron.left" size={24} color={colors.text} />
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
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Active Deposite
        </Text>

        <View style={styles.chartSection}>
          <View style={styles.donutContainer}>
            <View
              style={[
                styles.donutSegment,
                {
                  borderColor: colors.yellow,
                  borderTopWidth: 10,
                  borderRightWidth: 10,
                  transform: [{ rotate: "45deg" }],
                },
              ]}
            />
            <View
              style={[
                styles.donutSegment,
                {
                  borderColor: colors.primary,
                  borderBottomWidth: 10,
                  borderLeftWidth: 10,
                  transform: [{ rotate: "-45deg" }],
                },
              ]}
            />
            <View
              style={[
                styles.donutSegment,
                {
                  borderColor: colors.green,
                  borderBottomWidth: 10,
                  borderRightWidth: 10,
                  transform: [{ rotate: "135deg" }],
                },
              ]}
            />
            <View style={styles.donutCenter}>
              <Text style={[styles.donutValue, { color: colors.text }]}>
                25%
              </Text>
            </View>
          </View>

          <View style={styles.legend}>
            <View style={styles.legendItem}>
              <View
                style={[styles.legendDot, { backgroundColor: colors.primary }]}
              />
              <Text style={[styles.legendText, { color: colors.icon }]}>
                Income
              </Text>
            </View>
            <View style={styles.legendItem}>
              <View
                style={[styles.legendDot, { backgroundColor: colors.yellow }]}
              />
              <Text style={[styles.legendText, { color: colors.icon }]}>
                Expenses
              </Text>
            </View>
            <View style={styles.legendItem}>
              <View
                style={[styles.legendDot, { backgroundColor: colors.green }]}
              />
              <Text style={[styles.legendText, { color: colors.icon }]}>
                Cashback
              </Text>
            </View>
          </View>
        </View>

        <Card style={styles.analyticsCard}>
          <View style={styles.cardHeader}>
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              Total Members
            </Text>
            <View style={styles.timeFilter}>
              <Text style={styles.filterText}>W</Text>
              <Text style={styles.filterText}>M</Text>
              <View style={styles.filterActive}>
                <Text style={styles.filterTextActive}>Y</Text>
              </View>
            </View>
          </View>

          <View style={styles.lineChartContainer}>
            <View style={styles.chartLine}>
              {/* Simple mock for the wave line */}
              <View
                style={[
                  styles.lineSegment,
                  {
                    height: 40,
                    width: "20%",
                    borderTopWidth: 2,
                    borderColor: colors.primary,
                    borderRightWidth: 2,
                    borderBottomRightRadius: 20,
                  },
                ]}
              />
              <View
                style={[
                  styles.lineSegment,
                  {
                    height: 60,
                    width: "20%",
                    borderTopWidth: 2,
                    borderColor: colors.primary,
                    borderLeftWidth: 2,
                    borderBottomLeftRadius: 20,
                  },
                ]}
              />
              <View
                style={[
                  styles.node,
                  { backgroundColor: colors.primary, left: "40%", bottom: 60 },
                ]}
              >
                <View style={styles.tooltip}>
                  <Text style={styles.tooltipText}>38</Text>
                </View>
              </View>
            </View>
            <View style={styles.chartLabels}>
              {["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"].map((m) => (
                <Text
                  key={m}
                  style={[styles.chartLabel, { color: colors.icon }]}
                >
                  {m}
                </Text>
              ))}
            </View>
          </View>
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
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  chartSection: {
    alignItems: "center",
    marginBottom: 40,
  },
  donutContainer: {
    width: 180,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  donutSegment: {
    position: "absolute",
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 0,
  },
  donutCenter: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  donutValue: {
    fontSize: 32,
    fontWeight: "bold",
  },
  legend: {
    flexDirection: "row",
    gap: 16,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  legendText: {
    fontSize: 12,
  },
  analyticsCard: {
    marginBottom: 40,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 16,
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
  lineChartContainer: {
    height: 150,
    justifyContent: "flex-end",
  },
  chartLine: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  lineSegment: {
    position: "absolute",
  },
  node: {
    position: "absolute",
    width: 10,
    height: 10,
    borderRadius: 5,
    zIndex: 5,
  },
  tooltip: {
    position: "absolute",
    bottom: 12,
    left: -15,
    backgroundColor: "#000",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  tooltipText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  chartLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  chartLabel: {
    fontSize: 10,
  },
});
