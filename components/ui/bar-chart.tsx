import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface BarChartProps {
  data: number[];
  labels: string[];
}

export function BarChart({ data, labels }: BarChartProps) {
  const colorScheme = useColorScheme() ?? "light";
  const max = Math.max(...data);

  return (
    <View style={styles.container}>
      <View style={styles.barsContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.barWrapper}>
            <View
              style={[
                styles.barBackground,
                { backgroundColor: Colors[colorScheme].border },
              ]}
            >
              <View
                style={[
                  styles.barFill,
                  {
                    height: `${(item / max) * 100}%`,
                    backgroundColor:
                      index % 2 === 0
                        ? Colors[colorScheme].border
                        : Colors[colorScheme].yellow,
                  },
                ]}
              >
                {index === 2 && <View style={styles.pattern} />}
              </View>
            </View>
            <Text style={[styles.label, { color: Colors[colorScheme].icon }]}>
              {labels[index]}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    justifyContent: "flex-end",
  },
  barsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: "100%",
  },
  barWrapper: {
    alignItems: "center",
    width: 40,
  },
  barBackground: {
    width: 30,
    height: 150,
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  barFill: {
    width: "100%",
    borderRadius: 8,
  },
  label: {
    marginTop: 8,
    fontSize: 12,
  },
  pattern: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.3,
    // Note: In real app would use an SVG pattern or ImageBrush
    backgroundColor: "rgba(0,0,0,0.1)",
  },
});
